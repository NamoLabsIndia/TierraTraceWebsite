import { MapPin } from 'lucide-react';
import { ABOUT } from '../../../data/siteContent';
import { CountUp, InView, Words } from '../../../lib/motion';
import { Pill } from './shared';

/** Frame 2 — asymmetric editorial intro: small label left, large statement right, grey platform panel below. */
export function AboutSection() {
  const p = ABOUT.panel;
  return (
    <section id="about" className="ab sx" aria-labelledby="about-title">
      <div className="ab-top">
        <Pill className="ab-pill">{ABOUT.label}</Pill>
        <div className="ab-main">
          <Words as="h2" text={ABOUT.headline} id="about-title" className="ab-title" step={22} />
          <InView className="ab-support m-rise" delay={250}>
            <InView as="ul" className="ab-chips m-stagger" delay={300}>
              {ABOUT.chips.map((c) => (
                <li key={c.src}>
                  <img src={c.src} alt={c.alt} width={160} height={160} loading="lazy" decoding="async" />
                </li>
              ))}
            </InView>
            <p>
              {ABOUT.support[0]}
              <br className="ab-br" /> {ABOUT.support[1]}
            </p>
          </InView>
        </div>
      </div>

      <InView className="ab-panel m-rise" delay={100}>
        <div className="ab-panel-left">
          <p className="ab-kicker">{p.kicker}</p>
          <div className="ab-stat">
            <span className="ab-stat-icon" aria-hidden>
              <MapPin className="h-7 w-7" fill="currentColor" stroke="#dff3cf" strokeWidth={1.6} />
            </span>
            <span className="ab-stat-value">
              <CountUp to={p.stat.value} />
            </span>
            <span className="ab-stat-label">{p.stat.label}</span>
          </div>
        </div>
        <div className="ab-panel-right">
          <p className="ab-eyebrow">{p.eyebrow}</p>
          <h3 className="ab-platform">
            {p.title.map((t, i) => (
              <span key={t}>
                {i > 0 && (
                  <span className="ab-dot" aria-hidden>
                    {' '}·{' '}
                  </span>
                )}
                {t}
              </span>
            ))}
          </h3>
          <p className="ab-body">{p.body}</p>
        </div>
      </InView>
    </section>
  );
}
