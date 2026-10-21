import { FileText, QrCode, Route } from 'lucide-react';
import logo from '../../../../assets/tierratrace-logo.png';
import { DPP_ASSETS, DPP_HERO } from '../../../../data/passportContent';
import { SecondaryButton } from '../../../../components/ui';
import { PassportPanel } from './PassportPanel';

const CAP_ICONS = [FileText, QrCode, Route];

/** Copy on the left; the shirt, its hangtag and the passport it opens on the right. */
export function DppHero() {
  const h = DPP_HERO;
  return (
    <section className="dp-hero" data-hero aria-labelledby="dp-title">
      <div className="dp-hero-copy">
        <h1 id="dp-title" className="dp-title dp-in">
          {h.headline.map((l) => (
            <span key={l}>{l}</span>
          ))}
          {h.accent.map((l) => (
            <span key={l} className="dp-title-accent">
              {l}
            </span>
          ))}
        </h1>
        <p className="dp-lead dp-in" style={{ animationDelay: '120ms' }}>
          {h.body}
        </p>
        <div className="dp-ctas dp-in" style={{ animationDelay: '180ms' }}>
          <SecondaryButton to={h.secondary.to}>{h.secondary.label}</SecondaryButton>
        </div>
        <ul className="dp-caps dp-in" style={{ animationDelay: '240ms' }}>
          {h.capabilities.map((c, i) => {
            const Icon = CAP_ICONS[i];
            return (
              <li key={c}>
                <Icon className="h-4 w-4" aria-hidden />
                {c}
              </li>
            );
          })}
        </ul>
      </div>

      <ProductVisual />
    </section>
  );
}

/** The product composition. Sized in container units so it scales as one piece at every width. */
function ProductVisual() {
  const t = DPP_ASSETS.tee;
  return (
    <div className="dp-visual dp-in" style={{ animationDelay: '120ms' }}>
      <div className="dp-stage">
        <span className="dp-orbit" aria-hidden />
        <div className="dp-float">
          <img className="dp-tee" src={t.src} alt={t.alt} width={t.width} height={t.height} fetchPriority="high" />
          {/* cotton string from the collar to the tag */}
          <svg className="dp-string" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
            <path d="M0 0 C 10 40, 70 70, 100 100" />
          </svg>
          <Hangtag />
        </div>
        <p className="dp-scan" aria-hidden>
          <span className="dp-scan-qr">
            <img src={DPP_ASSETS.qr} alt="" />
          </span>
          Scan to view
          <br />
          Digital Product Passport
        </p>
        <div className="dp-panel-wrap">
          <PassportPanel active="overview" compact />
        </div>
      </div>
    </div>
  );
}

function Hangtag() {
  return (
    <div className="dp-tag">
      <span className="dp-tag-hole" aria-hidden />
      <img className="dp-tag-qr" src={DPP_ASSETS.qr} alt="QR code linking to the sample Digital Product Passport" />
      <img className="dp-tag-logo" src={logo} alt="" width={360} height={163} />
      <p className="dp-tag-label">Demo passport</p>
    </div>
  );
}
