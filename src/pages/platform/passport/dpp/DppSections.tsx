import { useState } from 'react';
import {
  DPP_ASSETS,
  DPP_CONNECTS,
  DPP_CTA,
  DPP_DEMO,
  DPP_JOURNEYS,
} from '../../../../data/passportContent';
import { InView, Words } from '../../../../lib/motion';
import { PrimaryButton, SmartLink } from '../../../../components/ui';
import { Pill } from '../../../home/sections/shared';
import { PassportPanel } from './PassportPanel';

function Head({ label, headline, body, id, center = false }: { label: string; headline: string; body?: string; id: string; center?: boolean }) {
  return (
    <div className={`dp-head ${center ? 'dp-head--center' : ''}`}>
      <Pill>{label}</Pill>
      <Words as="h2" text={headline} id={id} className="dp-h2" />
      {body && (
        <InView as="p" className="dp-body m-rise" delay={150}>
          {body}
        </InView>
      )}
    </div>
  );
}

/** 02 — what the passport brings together: heading beside a numbered list. */
export function DppConnects() {
  const c = DPP_CONNECTS;
  return (
    <section className="dp-sec" aria-labelledby="dp-connects">
      <div className="dp-split">
        <div>
          <Head label={c.label} headline={c.headline} body={c.body} id="dp-connects" />
        </div>
        <InView as="ol" className="dp-list m-stagger" delay={100}>
          {c.items.map((it) => (
            <li key={it.n}>
              <span className="dp-num">{it.n}</span>
              <div>
                <h3>{it.title}</h3>
                <p>{it.body}</p>
              </div>
            </li>
          ))}
        </InView>
      </div>
    </section>
  );
}

/** 04 — interactive sample passport. */
export function DppDemo() {
  const d = DPP_DEMO;
  const [active, setActive] = useState('overview');
  const t = DPP_ASSETS.tee;
  return (
    <section id={d.id} className="dp-sec scroll-mt-28" aria-labelledby="dp-demo">
      <div className="dp-demo">
        <div className="dp-demo-copy">
          <Head label={d.label} headline={d.headline} body={d.body} id="dp-demo" />
          <InView className="dp-demo-product m-rise" delay={200}>
            <img src={t.src} alt="The sample product: an off-white cotton crew-neck T-shirt" width={t.width} height={t.height} loading="lazy" />
          </InView>
        </div>
        <InView className="dp-demo-panel m-rise" delay={120}>
          <PassportPanel active={active} onSelect={setActive} interactive />
          <p className="dp-disclaimer">{d.disclaimer}</p>
        </InView>
      </div>
    </section>
  );
}

/** 05 — product categories: one large feature image and four smaller ones. */
export function DppJourneys() {
  const j = DPP_JOURNEYS;
  return (
    <section className="dp-sec" aria-labelledby="dp-journeys">
      <Head label={j.label} headline={j.headline} body={j.body} id="dp-journeys" />
      <ul className="dp-journeys">
        {j.items.map((it, i) => (
          <InView as="li" key={it.id} className={`dp-journey m-rise ${i === 0 ? 'is-lead' : ''}`} delay={(i % 3) * 80}>
            <img src={it.image.src} alt={it.image.alt} loading="lazy" decoding="async" />
            <span className="dp-journey-shade" aria-hidden />
            <div className="dp-journey-body">
              <h3>{it.title}</h3>
              <p>{it.body}</p>
            </div>
          </InView>
        ))}
      </ul>
      <p className="dp-note">{j.note}</p>
    </section>
  );
}

/** 06 — closing call to action. */
export function DppCta() {
  const c = DPP_CTA;
  return (
    <section className="dp-sec dp-cta" aria-labelledby="dp-cta">
      <Words as="h2" text={c.headline} id="dp-cta" className="dp-h2" />
      <InView as="p" className="dp-body m-rise" delay={150}>
        {c.body}
      </InView>
      <InView className="dp-ctas dp-ctas--center m-rise" delay={220}>
        <PrimaryButton to={c.primary.to}>{c.primary.label}</PrimaryButton>
        <SmartLink target={c.secondary.to} className="dp-link-btn">
          {c.secondary.label}
        </SmartLink>
      </InView>
    </section>
  );
}
