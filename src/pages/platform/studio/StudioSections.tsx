import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, FileText, Hand, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { STANDARDS, type Standard } from '../../../data/siteContent';
import {
  FRAMEWORK_IMAGES,
  FRAMEWORK_IMAGE_FALLBACK,
  STUDIO_AUDIENCES,
  STUDIO_CAPABILITIES,
  STUDIO_FRAMEWORKS,
  STUDIO_METRICS,
  type Audience,
  type Capability,
} from '../../../data/studioContent';
import { InView, Words } from '../../../lib/motion';
import { useScrollTrack } from '../../../lib/useScrollTrack';
import { STANDARD_ICONS } from '../../../components/standards/StandardsGrid';
import { SmartLink } from '../../../components/ui';
import { Pill } from '../../home/sections/shared';
import '../../home/sections/sections.css';
import './studio-sections.css';

function SectionHead({
  eyebrow,
  headline,
  body,
  id,
  aside,
}: {
  eyebrow: string;
  headline: readonly [string, string];
  body: string;
  id: string;
  aside?: React.ReactNode;
}) {
  return (
    <div className="ss-head">
      <div>
        <Pill>{eyebrow}</Pill>
        <h2 id={id} className="ss-title">
          <Words text={headline[0]} className="ss-line" />
          <Words text={headline[1]} className="ss-line ss-accent" delay={120} />
        </h2>
      </div>
      <div className="ss-side">
        <InView as="p" className="ss-body m-rise" delay={200}>
          {body}
        </InView>
        {aside}
      </div>
    </div>
  );
}

function Arrows({ label, onPrev, onNext, canPrev, canNext }: { label: string; onPrev: () => void; onNext: () => void; canPrev: boolean; canNext: boolean }) {
  return (
    <div className="ss-arrows" role="group" aria-label={label}>
      <button type="button" className="ss-arrow" onClick={onPrev} disabled={!canPrev} aria-label="Previous">
        <ArrowLeft className="h-5 w-5" aria-hidden />
      </button>
      <button type="button" className="ss-arrow ss-arrow--dark" onClick={onNext} disabled={!canNext} aria-label="Next">
        <ArrowRight className="h-5 w-5" aria-hidden />
      </button>
    </div>
  );
}

/** Frameworks as a two-up photo carousel; "Learn more" opens a factual note in a dialog. */
export function StudioFrameworksSection() {
  const f = STUDIO_FRAMEWORKS;
  const items = STANDARDS.items;
  const { ref, canPrev, canNext, progress, step } = useScrollTrack<HTMLUListElement>();
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState<Standard | null>(null);
  const show = (s: Standard) => {
    setOpen(s);
    dialog.current?.showModal();
  };
  const segments = 6;
  const filled = Math.max(1, Math.round(progress * segments));

  return (
    <section id="studio-frameworks" className="ss ss--frameworks" aria-labelledby="ss-frameworks-title">
      <SectionHead
        id="ss-frameworks-title"
        eyebrow={f.eyebrow}
        headline={f.headline}
        body={f.body}
        aside={<Arrows label="Browse frameworks" onPrev={() => step(-1)} onNext={() => step(1)} canPrev={canPrev} canNext={canNext} />}
      />

      <ul ref={ref} className="ss-track ss-track--fw" aria-label="Supported frameworks">
        {items.map((s, i) => (
          <FrameworkCard key={s.id} standard={s} index={i} onMore={() => show(s)} />
        ))}
      </ul>

      <div className="ss-fw-foot">
        <span className="ss-dashes" aria-hidden>
          {Array.from({ length: segments }, (_, i) => (
            <span key={i} className={i < filled ? 'is-on' : ''} />
          ))}
        </span>
        <p className="ss-swipe">
          <Hand className="h-4 w-4" aria-hidden />
          Swipe to explore {items.length - 2} more frameworks
        </p>
      </div>
      <p className="ss-note">{STANDARDS.note}</p>

      <dialog
        ref={dialog}
        className="ss-dialog"
        aria-labelledby="ss-dialog-title"
        onClose={() => setOpen(null)}
        onClick={(e) => e.target === dialog.current && dialog.current?.close()}
      >
        {open && (
          <div className="ss-dialog-inner">
            <button type="button" className="ss-dialog-close" onClick={() => dialog.current?.close()} aria-label="Close">
              <X className="h-5 w-5" aria-hidden />
            </button>
            <p className="ss-dialog-meta">
              <span>{open.abbreviation}</span>
              {open.region}
            </p>
            <h3 id="ss-dialog-title" className="ss-dialog-title">
              {open.fullName}
            </h3>
            {open.description && <p className="ss-dialog-body">{open.description}</p>}
            <p className="ss-dialog-note">
              Shown for reference. TierraTrace Studio helps organise the data and evidence; it does not determine which
              requirements apply or provide legal advice.
            </p>
            <div className="ss-dialog-actions">
              <SmartLink target="/contact" className="ss-dialog-cta">
                Talk to us about {open.abbreviation} <ArrowRight className="h-4 w-4" aria-hidden />
              </SmartLink>
              {open.destination && (
                <SmartLink target={open.destination} className="ss-dialog-link">
                  {open.destinationLabel ?? 'Learn more'}
                </SmartLink>
              )}
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}

function FrameworkCard({ standard: s, index, onMore }: { standard: Standard; index: number; onMore: () => void }) {
  const img = FRAMEWORK_IMAGES[s.id] ?? FRAMEWORK_IMAGE_FALLBACK;
  const Icon = STANDARD_ICONS[s.id] ?? FileText;
  return (
    <li className="ss-fw">
      <img
        className="ss-fw-img"
        src={img.src}
        alt=""
        style={{ objectPosition: img.focus }}
        loading={index < 3 ? 'eager' : 'lazy'}
        decoding="async"
        draggable={false}
      />
      <span className="ss-fw-shade" aria-hidden />
      <span className="ss-fw-icon" aria-hidden>
        <Icon className="h-5 w-5" strokeWidth={1.7} />
      </span>
      <div className="ss-fw-body">
        <p className="ss-fw-abbr">{s.abbreviation}</p>
        <h3 className="ss-fw-name">{s.fullName}</h3>
        <span className="ss-fw-rule" aria-hidden />
        {s.description && <p className="ss-fw-desc">{s.description}</p>}
        <button type="button" className="ss-fw-more" onClick={onMore} aria-haspopup="dialog">
          Learn more
          <span className="ss-fw-more-go" aria-hidden>
            <ArrowRight className="h-4 w-4" />
          </span>
        </button>
      </div>
    </li>
  );
}

/** Audience cards in a scroll-snap row with working previous/next controls, then the metrics strip. */
export function StudioAudiencesSection() {
  const a = STUDIO_AUDIENCES;
  const { ref, canPrev, canNext, step } = useScrollTrack<HTMLUListElement>();
  const metrics = STUDIO_METRICS.filter((m) => m.verified);

  return (
    <section className="ss ss--audiences" aria-labelledby="ss-audiences-title">
      <SectionHead
        id="ss-audiences-title"
        eyebrow={a.eyebrow}
        headline={a.headline}
        body={a.body}
        aside={<Arrows label="Browse audiences" onPrev={() => step(-1)} onNext={() => step(1)} canPrev={canPrev} canNext={canNext} />}
      />

      <ul ref={ref} className="ss-track" aria-label="Who TierraTrace Studio is for">
        {a.items.map((it, i) => (
          <AudienceCard key={it.id} item={it} index={i} />
        ))}
      </ul>

      {metrics.length > 0 && (
        <InView as="dl" className="ss-metrics m-stagger" delay={100}>
          {metrics.map((m) => (
            <div key={m.label} className="ss-metric">
              <dt>{m.label}</dt>
              <dd>{m.value}</dd>
            </div>
          ))}
        </InView>
      )}
    </section>
  );
}

function AudienceCard({ item: it, index }: { item: Audience; index: number }) {
  return (
    <InView as="li" className="ss-card m-rise" delay={index * 90}>
      <Link to={it.to} className="ss-card-link" draggable={false} aria-label={`${it.title}: talk to us about TierraTrace Studio`}>
        <img
          className="ss-card-img"
          src={it.image.src}
          alt={it.image.alt}
          style={{ objectPosition: it.focus }}
          loading="lazy"
          decoding="async"
          draggable={false}
        />
        <span className="ss-card-shade" aria-hidden />
        <span className="ss-card-body">
          <span className="ss-card-num">{it.number}</span>
          <span className="ss-card-title">{it.title}</span>
          <span className="ss-card-text">{it.body}</span>
          <span className="ss-card-go" aria-hidden>
            <ArrowRight className="h-5 w-5" />
          </span>
        </span>
      </Link>
    </InView>
  );
}

/** Platform capabilities: centred heading and a 3D orbit of the six capability cards. */
export function StudioCapabilitiesSection() {
  const c = STUDIO_CAPABILITIES;
  return (
    <section className="ss ss--caps" aria-labelledby="ss-caps-title">
      <div className="ss-caps-head">
        <Pill>{c.eyebrow}</Pill>
        <h2 id="ss-caps-title" className="ss-title">
          <Words text={c.headline[0]} className="ss-line" />
          <Words text={c.headline[1]} className="ss-line ss-accent" delay={120} />
        </h2>
        <InView as="p" className="ss-body m-rise" delay={200}>
          {c.body}
        </InView>
      </div>
      <CapabilityOrbit items={c.items} />
    </section>
  );
}

/*
 * Orbit geometry. `rot` is an unbounded step counter so the ring always turns the short way; each card's
 * angle is (index - rot) × 360/n, normalised to (-180, 180]. Position, depth, turn and opacity are read
 * from that angle by interpolating between the slot values below (0°, 60°, 120°, 180° for six cards).
 * x is a fraction of the stage width (container query units), so the orbit scales with the viewport.
 */
const SLOTS = [
  { a: 0, x: 0, z: 0, ry: 0, o: 1 },
  { a: 60, x: 0.34, z: -240, ry: 32, o: 1 },
  { a: 120, x: 0.55, z: -560, ry: 44, o: 0.7 },
  { a: 180, x: 0.55, z: -820, ry: 50, o: 0 },
];
function slot(angle: number) {
  const t = Math.abs(angle);
  let i = 0;
  while (i < SLOTS.length - 2 && t > SLOTS[i + 1].a) i++;
  const A = SLOTS[i];
  const B = SLOTS[i + 1];
  const k = Math.min(1, (t - A.a) / (B.a - A.a));
  const lerp = (p: number, q: number) => p + (q - p) * k;
  const sign = angle < 0 ? -1 : 1;
  // right-hand cards turn their outer edge away from the viewer (positive rotateY), left-hand the opposite
  return { x: sign * lerp(A.x, B.x), z: lerp(A.z, B.z), ry: sign * lerp(A.ry, B.ry), o: lerp(A.o, B.o) };
}
const wrap = (deg: number) => {
  const d = ((((deg + 180) % 360) + 360) % 360) - 180;
  return d === -180 ? 180 : d;
};

function CapabilityOrbit({ items }: { items: readonly Capability[] }) {
  const n = items.length;
  const step = 360 / n;
  const [rot, setRot] = useState(0);
  const active = ((rot % n) + n) % n;
  const drag = useRef<{ x: number; y: number } | null>(null);
  const suppress = useRef(false);

  const go = (to: number) => {
    // shortest path to the target index from the current one
    let d = (((to - active) % n) + n) % n;
    if (d > n / 2) d -= n;
    setRot((r) => r + d);
  };
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      setRot((r) => r + 1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setRot((r) => r - 1);
    }
  };
  const onDown = (e: React.PointerEvent) => {
    if (!e.isPrimary || (e.pointerType === 'mouse' && e.button !== 0)) return;
    drag.current = { x: e.clientX, y: e.clientY };
  };
  const onUp = (e: React.PointerEvent) => {
    const d = drag.current;
    drag.current = null;
    if (!d) return;
    const dx = e.clientX - d.x;
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(e.clientY - d.y) * 1.2) {
      suppress.current = true;
      setRot((r) => r + (dx < 0 ? 1 : -1));
    }
  };

  return (
    <InView className="ss-orbit-wrap m-rise" delay={150}>
      <div
        className="ss-orbit"
        role="region"
        aria-roledescription="carousel"
        aria-label="Platform capabilities"
        tabIndex={0}
        onKeyDown={onKey}
        onPointerDown={onDown}
        onPointerUp={onUp}
        onPointerCancel={() => (drag.current = null)}
      >
        <span className="ss-orbit-floor" aria-hidden />
        {items.map((it, i) => {
          const angle = wrap((i - rot) * step);
          const p = slot(angle);
          const isActive = i === active;
          const depth = Math.round(100 - Math.abs(angle));
          return (
            <article
              key={it.number}
              className={`ss-oc ${isActive ? 'is-active' : ''}`}
              aria-hidden={!isActive}
              aria-label={`${it.number}: ${it.title}`}
              style={
                {
                  transform: `translateX(calc(${p.x} * 100cqw)) translateZ(${p.z}px) rotateY(${p.ry}deg)`,
                  opacity: p.o,
                  zIndex: depth,
                  visibility: p.o < 0.02 ? 'hidden' : 'visible',
                } as React.CSSProperties
              }
            >
              <div className="ss-cap-media">
                <img
                  src={it.image.src}
                  alt={isActive ? it.image.alt : ''}
                  style={{ objectPosition: it.focus }}
                  loading={Math.abs(angle) <= step ? 'eager' : 'lazy'}
                  decoding="async"
                  draggable={false}
                />
              </div>
              <div className="ss-cap-body">
                <p className="ss-cap-num">{it.number}</p>
                <h3 className="ss-cap-title">{it.title}</h3>
                <p className="ss-cap-text">{it.body}</p>
              </div>
              {!isActive && p.o > 0.5 && (
                <button
                  type="button"
                  className="ss-oc-hit"
                  aria-label={`Show ${it.title}`}
                  tabIndex={-1}
                  onClick={() => {
                    if (suppress.current) return void (suppress.current = false);
                    go(i);
                  }}
                />
              )}
            </article>
          );
        })}
      </div>

      <div className="ss-orbit-nav">
        <button type="button" className="ss-arrow" onClick={() => setRot((r) => r - 1)} aria-label="Previous capability">
          <ArrowLeft className="h-5 w-5" aria-hidden />
        </button>
        <div className="ss-orbit-dots" role="group" aria-label="Choose a capability">
          {items.map((it, i) => (
            <button
              key={it.number}
              type="button"
              className={i === active ? 'is-on' : ''}
              aria-label={`${it.number}: ${it.title}`}
              aria-current={i === active ? 'true' : undefined}
              onClick={() => go(i)}
            />
          ))}
        </div>
        <button type="button" className="ss-arrow" onClick={() => setRot((r) => r + 1)} aria-label="Next capability">
          <ArrowRight className="h-5 w-5" aria-hidden />
        </button>
      </div>
      <p className="sr-only" aria-live="polite">
        {items[active].number} of {String(n).padStart(2, '0')}: {items[active].title}
      </p>
    </InView>
  );
}
