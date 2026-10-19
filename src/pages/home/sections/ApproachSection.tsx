import { useCallback, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import { APPROACH, type Industry } from '../../../data/siteContent';
import { InView, Words } from '../../../lib/motion';
import { SmartLink } from '../../../components/ui';
import { CarouselControls, Pill } from './shared';

type Slot = 'active' | 'prev' | 'next' | 'out-left' | 'out-right';

/** Where card `i` sits relative to the active index, on a cyclic track. */
function slotFor(i: number, active: number, n: number): Slot {
  let d = (i - active + n) % n;
  if (d > n / 2) d -= n; // shortest way round
  if (d === 0) return 'active';
  if (d === -1) return 'prev';
  if (d === 1) return 'next';
  return d < 0 ? 'out-left' : 'out-right';
}

const SWIPE_PX = 48;
const NAV_LOCK_MS = 320;

/**
 * "Our Approach" — industry showcase: one large active industry with smaller previous/next previews.
 * All cards live on one track and move between slots, so navigation reads as continuous movement.
 */
export function ApproachSection() {
  const items = APPROACH.industries;
  const n = items.length;
  const [active, setActive] = useState(0);
  const lastNav = useRef(0);
  const drag = useRef<{ x: number; y: number; moved: boolean } | null>(null);
  const suppressClick = useRef(false);

  const go = useCallback(
    (to: number) => {
      const now = performance.now();
      if (now - lastNav.current < NAV_LOCK_MS) return;
      lastNav.current = now;
      setActive(((to % n) + n) % n);
    },
    [n],
  );
  const step = (d: number) => go(active + d);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      step(-1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      step(1);
    }
  };

  // Swipe (touch) and drag (mouse/pen). touch-action: pan-y keeps vertical page scrolling native.
  const onPointerDown = (e: PointerEvent) => {
    if (!e.isPrimary || (e.pointerType === 'mouse' && e.button !== 0)) return;
    drag.current = { x: e.clientX, y: e.clientY, moved: false };
  };
  const onPointerMove = (e: PointerEvent) => {
    const d = drag.current;
    if (d && Math.abs(e.clientX - d.x) > 8) d.moved = true;
  };
  const onPointerUp = (e: PointerEvent) => {
    const d = drag.current;
    drag.current = null;
    if (!d) return;
    const dx = e.clientX - d.x;
    const dy = e.clientY - d.y;
    if (Math.abs(dx) > SWIPE_PX && Math.abs(dx) > Math.abs(dy) * 1.2) {
      suppressClick.current = true; // the click that follows a drag must not also select a card
      step(dx < 0 ? 1 : -1);
    }
  };
  const onCardClick = (i: number) => {
    if (suppressClick.current) {
      suppressClick.current = false;
      return;
    }
    go(i);
  };

  const current = items[active];

  return (
    <section id={APPROACH.id} className="ap sx" aria-labelledby="approach-title">
      <div className="ap-top">
        <Pill>{APPROACH.label}</Pill>
        <Words as="h2" text={APPROACH.headline} id="approach-title" className="ap-title" step={24} />
      </div>

      <InView className="m-rise" delay={120}>
        <div
          className="ap-stage"
          role="region"
          aria-roledescription="carousel"
          aria-label="Industries"
          tabIndex={0}
          onKeyDown={onKeyDown}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={() => (drag.current = null)}
        >
          {items.map((it, i) => (
            <IndustryCard key={it.id} industry={it} slot={slotFor(i, active, n)} onSelect={() => onCardClick(i)} />
          ))}
        </div>

        <div className="ap-nav">
          <p className="ap-count" aria-hidden>
            <span>{current.number}</span> / {String(n).padStart(2, '0')}
          </p>
          <p className="sr-only" aria-live="polite">
            Industry {active + 1} of {n}: {current.title}
          </p>
          <CarouselControls label="Industries" progress={(active + 1) / n} onPrev={() => step(-1)} onNext={() => step(1)} />
        </div>
      </InView>
    </section>
  );
}

/** One stable element per industry; only its slot changes, so CSS can animate it between positions. */
function IndustryCard({ industry: it, slot, onSelect }: { industry: Industry; slot: Slot; onSelect: () => void }) {
  const isActive = slot === 'active';
  const isPreview = slot === 'prev' || slot === 'next';
  return (
    <div className="ap-card" data-slot={slot} aria-hidden={!isActive && !isPreview}>
      <img
        className="ap-img"
        src={it.image.src}
        alt={isActive ? it.image.alt : ''}
        style={{ objectPosition: it.focus }}
        decoding="async"
        draggable={false}
      />
      <span className="ap-shade" aria-hidden />
      <span className="ap-veil" aria-hidden />

      <span className="ap-peek" aria-hidden>
        <span>{it.number}</span>
        {it.title}
      </span>

      <div className="ap-body" inert={!isActive}>
        <p className="ap-index">
          <span>{it.number}</span>
          {it.capabilityLabel}
        </p>
        <h3 className="ap-name">{it.title}</h3>
        <p className="ap-sub">{it.subtitle}</p>
        <p className="ap-desc">{it.description}</p>
        <SmartLink target={it.ctaHref ?? APPROACH.cta.href} className="ap-cta">
          {it.ctaLabel ?? APPROACH.cta.label} <ArrowRight className="h-4 w-4" aria-hidden />
        </SmartLink>
      </div>

      {isPreview && (
        <button type="button" className="ap-hit" onClick={onSelect} aria-label={`Show ${it.number}: ${it.title}`} draggable={false} />
      )}
    </div>
  );
}
