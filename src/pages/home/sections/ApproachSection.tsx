import { useState } from 'react';
import { APPROACH } from '../../../data/siteContent';
import { InView, Words } from '../../../lib/motion';
import { CarouselControls, Pill } from './shared';

/**
 * Frame 5 layout. The reference holds a customer testimonial; until an approved one exists this rotates
 * TierraTrace's own statements, attributed to TierraTrace (see APPROACH in siteContent).
 */
export function ApproachSection() {
  const [i, setI] = useState(0);
  const n = APPROACH.items.length;
  const img = APPROACH.images;
  const go = (d: number) => setI((v) => (v + d + n) % n);

  return (
    <section id={APPROACH.id} className="ap sx" aria-labelledby="approach-title">
      <div className="ap-top">
        <Pill>{APPROACH.label}</Pill>
        <Words as="h2" text={APPROACH.headline} id="approach-title" className="ap-title" step={24} />
      </div>

      <div className="ap-row">
        <InView className="ap-thumb m-rise">
          <img className="ap-thumb-img" src={img.thumb.src} alt={img.thumb.alt} loading="lazy" decoding="async" />
        </InView>

        <InView className="ap-main m-img" delay={80}>
          <div className="ap-fill m-parallax" style={{ ['--m-par-from' as string]: '-5%', ['--m-par-to' as string]: '5%', ['--m-par-scale' as string]: '1.12' }}>
            <img src={img.main.src} alt={img.main.alt} loading="lazy" decoding="async" />
          </div>
        </InView>

        <InView as="figure" className="ap-quote m-rise" delay={160}>
          <blockquote aria-live="polite">
            <Words key={i} as="p" text={`“${APPROACH.items[i]}”`} className="ap-quote-text" step={18} />
          </blockquote>
          <figcaption>
            <span className="ap-name">{APPROACH.attribution.name}</span>
            <span className="ap-role">
              {APPROACH.attribution.role} · {String(i + 1).padStart(2, '0')}/{String(n).padStart(2, '0')}
            </span>
          </figcaption>
        </InView>

        <div className="ap-side">
          <InView className="ap-side-img m-img" delay={240}>
            <img src={img.side.src} alt={img.side.alt} loading="lazy" decoding="async" />
          </InView>
          {n > 1 && <CarouselControls label="Our approach statements" progress={(i + 1) / n} onPrev={() => go(-1)} onNext={() => go(1)} />}
        </div>
      </div>
    </section>
  );
}
