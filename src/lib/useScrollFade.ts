import { useEffect } from 'react';

/**
 * Content dissolves as it passes under the site header.
 *
 * The fade itself is a scroll-driven CSS animation (`.sf` in motion.css), so it runs off the main thread
 * with no scroll listeners. This hook only decides *which* elements get it: within each content section it
 * picks the outermost blocks that are small enough to fade individually (a heading, a paragraph, a card),
 * so a whole tall section never fades while its lower half is still being read. Carousels and tickers
 * are treated as one block because their children manage their own opacity.
 * It also publishes the header's bottom edge as --sf-top, the line content fades behind.
 */
const ATOMIC = '.ss-orbit, .stt, .ap-stage, .in-track, .ss-track, .sw-stage, figure, img, video';
const SKIP = '[data-hero], header, dialog, .sr-only';

function mark(root: HTMLElement, maxH: number, out: HTMLElement[]) {
  for (const el of Array.from(root.children) as HTMLElement[]) {
    if (el.matches(SKIP)) continue;
    // decorative/background layers (absolutely positioned or hidden from assistive tech) stay put
    const pos = getComputedStyle(el).position;
    if (pos === 'absolute' || pos === 'fixed' || el.getAttribute('aria-hidden') === 'true') continue;
    const h = el.getBoundingClientRect().height;
    if (!h) continue;
    if (h <= maxH || el.matches(ATOMIC) || el.children.length === 0) out.push(el);
    else mark(el, maxH, out);
  }
}

export function useScrollFade(routeKey: string) {
  useEffect(() => {
    const supported = CSS.supports('animation-timeline: view()');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!supported) return;

    let marked: HTMLElement[] = [];
    let clipped: { el: HTMLElement; x: string; y: string }[] = [];
    let timer = 0;

    /*
     * A view timeline tracks the nearest scroll container, and `overflow: hidden` makes one. Sections that
     * use it only to clip decoration would then measure the fade against themselves instead of the
     * window. `overflow: clip` clips identically without creating a scroll container.
     */
    const unclip = () => {
      clipped.forEach(({ el, x, y }) => {
        el.style.overflowX = x;
        el.style.overflowY = y;
      });
      clipped = [];
    };
    const clipAncestors = (el: HTMLElement) => {
      for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
        if (clipped.some((c) => c.el === p)) continue;
        const cs = getComputedStyle(p);
        if (cs.overflowX !== 'hidden' && cs.overflowY !== 'hidden') continue;
        clipped.push({ el: p, x: p.style.overflowX, y: p.style.overflowY });
        if (cs.overflowX === 'hidden') p.style.overflowX = 'clip';
        if (cs.overflowY === 'hidden') p.style.overflowY = 'clip';
      }
    };

    const apply = () => {
      marked.forEach((el) => el.classList.remove('sf'));
      marked = [];
      unclip();
      if (reduced.matches) return;
      const nav = document.querySelector('.hd-nav');
      const top = nav ? Math.round(nav.getBoundingClientRect().bottom) + 8 : 88;
      document.documentElement.style.setProperty('--sf-top', `${top}px`);
      const maxH = Math.max(220, window.innerHeight * 0.45);
      const sections = document.querySelectorAll<HTMLElement>('main section:not([data-hero]), footer.ft, section.cta');
      sections.forEach((s) => {
        // nested sections are handled by their outermost section
        if (s.parentElement?.closest('main section:not([data-hero])')) return;
        mark(s, maxH, marked);
      });
      marked.forEach((el) => {
        el.classList.add('sf');
        clipAncestors(el);
      });
    };
    const schedule = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(apply, 180);
    };

    schedule();
    // layout settles as fonts and images load and as the viewport changes
    const ro = new ResizeObserver(schedule);
    ro.observe(document.body);
    reduced.addEventListener('change', schedule);
    return () => {
      window.clearTimeout(timer);
      ro.disconnect();
      reduced.removeEventListener('change', schedule);
      marked.forEach((el) => el.classList.remove('sf'));
      unclip();
    };
  }, [routeKey]);
}
