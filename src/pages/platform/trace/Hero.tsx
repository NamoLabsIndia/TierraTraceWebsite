import type { CSSProperties } from 'react';
import { ArrowRight, ChevronRight, FileText, Fingerprint, Footprints, Leaf, Waypoints } from 'lucide-react';
import logo from '../../../assets/tierratrace-logo.png';
import { DPP_ASSETS } from '../../../data/passportContent';
import { TRACE_HERO } from '../../../data/traceContent';
import { SecondaryButton } from '../../../components/ui';
import './trace-hero.css';

const ROW_ICONS = [Fingerprint, Leaf, Waypoints, FileText, Footprints];

/** Trace hero: copy on the left; the tee, its QR hangtag and the passport it opens on the right. */
export function Hero() {
  const h = TRACE_HERO;
  return (
    <section className="th" data-hero aria-labelledby="th-title">
      <div className="th-copy">
        <p className="th-eyebrow th-in">{h.eyebrow}</p>
        <h1 id="th-title" className="th-title th-in" style={{ animationDelay: '60ms' }}>
          {h.headline.map((l) => (
            <span key={l}>{l}</span>
          ))}
          <span className="th-accent">{h.accent}</span>
        </h1>
        <p className="th-lead th-in" style={{ animationDelay: '120ms' }}>
          {h.body}
        </p>
        <div className="th-cta th-in" style={{ animationDelay: '180ms' }}>
          <SecondaryButton to={h.cta.to}>
            {h.cta.label} <ArrowRight className="th-cta-arrow h-4 w-4" aria-hidden />
          </SecondaryButton>
        </div>
      </div>

      <ProductVisual />
    </section>
  );
}

/** Sized in container units so the whole composition scales as one piece. */
function ProductVisual() {
  const tee = DPP_ASSETS.tee;
  const p = TRACE_HERO.passport;
  return (
    <div className="th-visual">
      <div className="th-stage">
        {/* the product journey: a thin path around the product with a few connection points */}
        <svg className="th-path" viewBox="0 0 100 100" aria-hidden>
          <path d="M14 86 C 2 60, 8 24, 38 10 S 92 6, 98 40" />
          <circle cx="14" cy="86" r="0.9" />
          <circle cx="13.2" cy="38" r="0.9" />
          <circle cx="58" cy="5.6" r="0.9" />
          <circle cx="98" cy="40" r="0.7" className="is-faint" />
        </svg>

        <div className="th-product th-in" style={{ animationDelay: '120ms' }}>
          <img className="th-tee" src={tee.src} alt={tee.alt} width={tee.width} height={tee.height} fetchPriority="high" />
          <svg className="th-string" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
            <path d="M0 0 C 20 30, 60 60, 100 100" />
          </svg>
          <div className="th-tag">
            <span className="th-tag-hole" aria-hidden />
            <img className="th-tag-qr" src={DPP_ASSETS.qr} alt="QR code linking to the sample Digital Product Passport" />
            <img className="th-tag-logo" src={logo} alt="" width={360} height={163} />
          </div>
        </div>

        <ul className="th-layers" aria-label="Passport sections">
          {TRACE_HERO.layers.map((name, i) => (
            <li key={name} className="th-layer" style={{ '--i': i } as CSSProperties}>
              <span>{name}</span>
              <LayerMedia index={i} />
            </li>
          ))}
        </ul>

        <div className="th-card th-in" style={{ animationDelay: '300ms' }}>
          <div className="th-card-top">
            <img src={logo} alt="TierraTrace" width={360} height={163} />
            <span className="th-chip">DPP</span>
          </div>
          <div className="th-card-id">
            <img src={tee.src} alt="" width={64} height={64} />
            <div>
              <p className="th-card-name">{p.product}</p>
              <p className="th-card-lot">{p.lot}</p>
            </div>
          </div>
          <ul className="th-rows">
            {p.rows.map((r, i) => {
              const Icon = ROW_ICONS[i];
              return (
                <li key={r}>
                  <Icon className="th-row-icon" strokeWidth={1.7} aria-hidden />
                  <span>{r}</span>
                  <ChevronRight className="th-row-go" aria-hidden />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

function LayerMedia({ index }: { index: number }) {
  if (index === 0) return <img src={DPP_ASSETS.woven} alt="" loading="lazy" decoding="async" />;
  if (index === 3) return <img src={DPP_ASSETS.forest} alt="" loading="lazy" decoding="async" />;
  if (index === 1)
    return (
      <svg className="th-map" viewBox="0 0 40 100" preserveAspectRatio="none" aria-hidden>
        <path d="M-5 26 C 10 20, 18 34, 45 28" />
        <path d="M-5 62 C 12 56, 22 70, 45 64" />
        <path d="M12 -5 C 16 30, 8 60, 14 105" />
        <path className="th-map-route" d="M6 86 C 14 70, 20 60, 26 46" />
        <circle cx="26" cy="46" r="2.2" />
      </svg>
    );
  return (
    <span className="th-doc" aria-hidden>
      <i />
      <i />
      <i />
      <i />
    </span>
  );
}
