import { Database, FileCheck2, Leaf, ShieldCheck } from 'lucide-react';
import landscape from '../../../assets/sections/compliance-landscape.webp';
import { COMPLIANCE } from '../../../data/siteContent';
import { InView, Words } from '../../../lib/motion';
import { Pill } from './shared';

const ICONS = { database: Database, shield: ShieldCheck, file: FileCheck2, leaf: Leaf };

/** Compliance — headline + four capabilities on the left, an example-frameworks panel on the right. */
export function ComplianceSection() {
  const c = COMPLIANCE;
  return (
    <section id="compliance" className="cp" aria-labelledby="compliance-title">
      {/* the hero landscape, widened (extra hills/fields on the left) so it shows smaller with the turbine mid-frame */}
      <div className="cp-scene" aria-hidden>
        <img src={landscape} alt="" width={1734} height={997} loading="lazy" decoding="async" />
      </div>

      <div className="cp-inner">
        <div className="cp-copy">
          <Pill>{c.label}</Pill>
          <h2 id="compliance-title" className="cp-title">
            <Words text={c.headline[0]} className="cp-line" />
            <Words text={c.headline[1]} className="cp-line" delay={120} />
            <Words text={c.accent} className="cp-line cp-accent" delay={240} />
          </h2>
          <InView as="p" className="cp-body m-rise" delay={300}>
            {c.body}
          </InView>
          <InView as="ul" className="cp-caps m-stagger" delay={380}>
            {c.capabilities.map((cap) => {
              const Icon = ICONS[cap.icon];
              return (
                <li key={cap.title} className="cp-cap">
                  <span className="cp-cap-icon" aria-hidden>
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3>{cap.title}</h3>
                  <p>{cap.body}</p>
                </li>
              );
            })}
          </InView>
        </div>

        <InView as="article" className="cp-panel m-rise" delay={200} aria-label={`${c.panel.title}: ${c.panel.subtitle}`}>
          <header className="cp-panel-head">
            <p className="cp-panel-title">{c.panel.title}</p>
            <p className="cp-panel-sub">{c.panel.subtitle}</p>
          </header>
          <InView as="ul" className="cp-rows m-stagger" delay={320}>
            {c.panel.frameworks.map((f) => (
              <li key={f.name} className="cp-row">
                <span className="cp-code" aria-hidden>
                  {f.code}
                </span>
                <span className="cp-row-text">
                  <span className="cp-row-name">{f.name}</span>
                  <span className="cp-row-region">{f.region}</span>
                </span>
                <span className="cp-kind">{f.kind}</span>
              </li>
            ))}
          </InView>
          <p className="cp-note">{c.panel.note}</p>
        </InView>
      </div>
    </section>
  );
}
