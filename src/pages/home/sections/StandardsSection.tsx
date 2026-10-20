import type { CSSProperties } from 'react';
import { STANDARDS, type Standard } from '../../../data/siteContent';
import { FRAMEWORK_IMAGES, FRAMEWORK_IMAGE_FALLBACK } from '../../../data/studioContent';
import { InView, Words } from '../../../lib/motion';
import { Pill } from './shared';
import './standards-ticker.css';

/**
 * Reporting frameworks on the landing page as a continuous, automatically moving ticker.
 * The track holds the sequence twice; it moves left by exactly one sequence (-50%) and repeats, so the
 * loop is seamless at any card width. Only the first copy is exposed to assistive technology.
 */
export function StandardsSection() {
  const items = STANDARDS.items;
  return (
    <section id={STANDARDS.id} className="st sx" aria-labelledby="standards-title">
      <div className="st-intro">
        <div>
          <Pill>Standards</Pill>
          <Words as="h2" text={STANDARDS.headline} id="standards-title" className="st-title" />
        </div>
        <InView as="p" className="st-lead m-rise" delay={150}>
          {STANDARDS.intro}
        </InView>
      </div>

      <div className="stt" style={{ '--stt-count': items.length } as CSSProperties}>
        <div className="stt-track">
          <ul className="stt-group" aria-label="Sustainability standards">
            {items.map((s) => (
              <TickerCard key={s.id} standard={s} />
            ))}
          </ul>
          <ul className="stt-group" aria-hidden>
            {items.map((s) => (
              <TickerCard key={`dup-${s.id}`} standard={s} />
            ))}
          </ul>
        </div>
      </div>

      <div className="stt-foot">
        <p className="stt-kicker">
          {STANDARDS.footer.kicker[0]}
          <br />
          {STANDARDS.footer.kicker[1]}
        </p>
        <p className="stt-line">{STANDARDS.footer.line}</p>
      </div>
      <p className="st-note">{STANDARDS.note}</p>
    </section>
  );
}

function TickerCard({ standard: s }: { standard: Standard }) {
  const img = FRAMEWORK_IMAGES[s.id] ?? FRAMEWORK_IMAGE_FALLBACK;
  return (
    <li className="stt-card">
      <div className="stt-media">
        <img
          src={img.src}
          alt=""
          style={{ objectPosition: img.focus }}
          loading="lazy"
          decoding="async"
          draggable={false}
          // a failed image leaves the neutral card surface rather than a broken-image icon
          onError={(e) => (e.currentTarget.style.visibility = 'hidden')}
        />
      </div>
      <div className="stt-body">
        <p className="stt-abbr">{s.abbreviation}</p>
        <p className="stt-name">{s.fullName}</p>
        <span className="stt-rule" aria-hidden />
        {s.region && <p className="stt-region">{s.region}</p>}
      </div>
    </li>
  );
}
