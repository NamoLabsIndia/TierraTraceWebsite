import { ArrowRight, Mail, Phone } from 'lucide-react';
import logoLight from '../../assets/tierratrace-logo-light.png';
import { CLOSING_CTA, FOOTER } from '../../data/siteContent';
import { HERO } from '../../data/heroContent';
import { InView, Words } from '../../lib/motion';
import { SmartLink } from '../ui';
import './site-footer.css';

/** Frame 7 — dark footer with the oversized forest wordmark, followed by the collaboration CTA panel. */
export function Footer() {
  return (
    <>
      <footer className="ft" aria-labelledby="ft-title">
        <div className="ft-inner">
          <div className="ft-brand">
            <div className="ft-logo">
              <img src={logoLight} alt="TierraTrace" width={360} height={163} loading="lazy" />
              <span>{FOOTER.parent}</span>
            </div>
            <Words as="p" text={FOOTER.headline} className="ft-title" />
            <InView as="ul" className="ft-contact m-stagger" delay={200}>
              <li>
                <a href={`mailto:${FOOTER.contact.email}`}>
                  <Mail className="h-5 w-5" aria-hidden /> {FOOTER.contact.email}
                </a>
              </li>
              {FOOTER.contact.phone && (
                <li>
                  <a href={`tel:${FOOTER.contact.phone.replace(/\s/g, '')}`}>
                    <Phone className="h-5 w-5" aria-hidden /> {FOOTER.contact.phone}
                  </a>
                </li>
              )}
            </InView>
          </div>

          <nav className="ft-cols" aria-label="Footer">
            {FOOTER.columns.map((col, ci) => (
              <InView key={col.title} className="ft-col m-stagger" delay={ci * 90}>
                <p className="ft-col-title" id={`ft-${col.title}`}>
                  {col.title}
                </p>
                <ul aria-labelledby={`ft-${col.title}`}>
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {l.to ? (
                        <SmartLink target={l.to} className="ft-link">
                          {l.label}
                        </SmartLink>
                      ) : (
                        <span className="ft-link is-soon">
                          {l.label} <em>Soon</em>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </InView>
            ))}
          </nav>
        </div>

        <p className="ft-legal">
          © {new Date().getFullYear()} Namo Labs India. All rights reserved.
          {HERO.background.credit && (
            <>
              {' · '}
              <a href={HERO.background.credit.href} target="_blank" rel="noreferrer">
                {HERO.background.credit.text}
              </a>
            </>
          )}
        </p>

        <h2 id="ft-title" className="sr-only">
          TierraTrace
        </h2>
        <FooterWordmark />
      </footer>

      <ClosingCta />
    </>
  );
}

/** Oversized forest "TierraTrace" + pin artwork, cut off by the footer's bottom edge. Decorative. */
function FooterWordmark() {
  const w = FOOTER.wordmark;
  return (
    <div className="ft-mark" aria-hidden>
      <img className="ft-mark-img m-parallax" src={w.src} width={w.width} height={w.height} alt="" loading="lazy" decoding="async" />
    </div>
  );
}

function ClosingCta() {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="cta-panel">
        <div className="cta-earth" aria-hidden>
          <img className="m-parallax" src={CLOSING_CTA.image.src} alt="" loading="lazy" decoding="async" />
        </div>
        <div className="cta-copy">
          <h2 id="cta-title" className="cta-title">
            {CLOSING_CTA.headline.map((line, i) => (
              <Words key={line} as="span" text={line} className="cta-line" delay={i * 120} />
            ))}
          </h2>
          <InView className="m-rise" delay={420}>
            <SmartLink target={CLOSING_CTA.cta.to} className="cta-btn">
              {CLOSING_CTA.cta.label} <ArrowRight className="cta-arrow h-6 w-6" aria-hidden />
            </SmartLink>
          </InView>
        </div>
      </div>
    </section>
  );
}
