import { Fragment, useEffect, useRef, useState, type CSSProperties, type KeyboardEventHandler, type ReactNode } from 'react';
import { useReveal } from './useReveal';

/*
 * Motion primitives for the editorial sections. Everything is CSS-driven (see src/styles/motion.css);
 * these only flip data-visible when an element scrolls into view, or split text into maskable words.
 */

type Tag = 'div' | 'p' | 'span' | 'h2' | 'h3' | 'ul' | 'ol' | 'li' | 'article' | 'figure' | 'dl';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Wraps children and marks them visible once in view; CSS decides what "entering" looks like. */
export function InView({
  as = 'div',
  className = '',
  delay = 0,
  children,
  ...rest
}: {
  as?: Tag;
  className?: string;
  delay?: number;
  children: ReactNode;
  id?: string;
  role?: string;
  'aria-label'?: string;
  onKeyDown?: KeyboardEventHandler<HTMLElement>;
}) {
  const ref = useReveal<HTMLElement>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const T = as as any;
  return (
    <T ref={ref} className={`m-in ${className}`} style={{ '--m-delay': `${delay}ms` } as CSSProperties} {...rest}>
      {children}
    </T>
  );
}

/**
 * Text that rises word by word from behind a mask. Screen readers get the plain sentence from a
 * visually hidden copy; the split spans are hidden from them.
 */
export function Words({
  text,
  as = 'span',
  id,
  className = '',
  delay = 0,
  step = 28,
}: {
  text: string;
  id?: string;
  as?: Tag;
  className?: string;
  delay?: number;
  step?: number;
}) {
  const ref = useReveal<HTMLElement>();
  const words = text.split(' ');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const T = as as any;
  return (
    <T ref={ref} id={id} className={`m-in m-words ${className}`}>
      <span className="sr-only">{text}</span>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="m-w" aria-hidden>
            <span style={{ '--m-delay': `${delay + i * step}ms` } as CSSProperties}>{w}</span>
          </span>
          {i < words.length - 1 && ' '}
        </Fragment>
      ))}
    </T>
  );
}

/** Counts up to `to` the first time it scrolls into view. */
export function CountUp({ to, duration = 1400 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) return setValue(to);
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / duration);
        setValue(Math.round(to * (1 - Math.pow(1 - p, 4))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);
  return (
    <span ref={ref} aria-label={String(to)}>
      <span aria-hidden>{value}</span>
    </span>
  );
}

/** Gentle pull toward the pointer for round controls (fine pointers only, off for reduced motion). */
export function useMagnetic<T extends HTMLElement>(strength = 0.25) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || !window.matchMedia('(pointer: fine)').matches) return;
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * strength;
      const y = (e.clientY - (r.top + r.height / 2)) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    const leave = () => (el.style.transform = '');
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', leave);
    return () => {
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerleave', leave);
    };
  }, [strength]);
  return ref;
}
