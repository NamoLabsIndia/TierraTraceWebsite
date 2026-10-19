import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { INSIGHTS } from '../../../data/siteContent';
import { InView, Words } from '../../../lib/motion';
import { CarouselControls, Pill } from './shared';

/** Frame 6 — editorial heading + horizontally scrolling image cards that bleed off the right edge. */
export function InsightsSection() {
  const track = useRef<HTMLUListElement>(null);
  const [state, setState] = useState({ progress: 0, canPrev: false, canNext: true });

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setState({
      progress: max > 0 ? (el.scrollLeft + el.clientWidth) / el.scrollWidth : 1,
      canPrev: el.scrollLeft > 4,
      canNext: el.scrollLeft < max - 4,
    });
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    measure();
    el.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure);
    return () => {
      el.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
    };
  }, [measure]);

  // Drag-to-scroll for mouse users (touch and trackpads scroll natively).
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    let startX = 0;
    let startLeft = 0;
    let dragging = false;
    let moved = false;
    const down = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      dragging = true;
      moved = false;
      startX = e.clientX;
      startLeft = el.scrollLeft;
    };
    const move = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4 && !moved) {
        moved = true;
        el.classList.add('is-dragging');
        el.setPointerCapture(e.pointerId);
      }
      if (moved) el.scrollLeft = startLeft - dx;
    };
    const up = () => {
      dragging = false;
      el.classList.remove('is-dragging');
    };
    // a drag must not also count as a click on the card underneath
    const click = (e: MouseEvent) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
        moved = false;
      }
    };
    el.addEventListener('pointerdown', down);
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerup', up);
    el.addEventListener('pointercancel', up);
    el.addEventListener('click', click, true);
    return () => {
      el.removeEventListener('pointerdown', down);
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerup', up);
      el.removeEventListener('pointercancel', up);
      el.removeEventListener('click', click, true);
    };
  }, []);

  const step = (dir: 1 | -1) => {
    const el = track.current;
    const card = el?.querySelector('li');
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: dir * (card.getBoundingClientRect().width + gap), behavior: 'smooth' });
  };

  return (
    <section id="insights" className="in sx" aria-labelledby="insights-title">
      <div className="in-intro">
        <div>
          <Pill>{INSIGHTS.label}</Pill>
          <Words as="h2" text={INSIGHTS.headline} id="insights-title" className="in-title" />
        </div>
        <div className="in-side">
          <InView as="p" className="in-lead m-rise" delay={200}>
            {INSIGHTS.intro}
          </InView>
          <InView className="m-rise" delay={320}>
            <CarouselControls
              label="Insight cards"
              progress={state.progress}
              canPrev={state.canPrev}
              canNext={state.canNext}
              onPrev={() => step(-1)}
              onNext={() => step(1)}
            />
          </InView>
        </div>
      </div>

      <ul ref={track} className="in-track" aria-label="Insights">
        {INSIGHTS.items.map((c, i) => (
          <InView as="li" key={c.title} className="in-card m-img" delay={i * 110}>
            <Link to={c.to} className="in-link" draggable={false}>
              <span className="in-media">
                <img src={c.image.src} alt={c.image.alt} loading="lazy" decoding="async" draggable={false} />
              </span>
              <span className="in-shade" aria-hidden />
              <span className="in-card-title">{c.title}</span>
              <span className="in-go" aria-hidden>
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </Link>
          </InView>
        ))}
      </ul>
    </section>
  );
}
