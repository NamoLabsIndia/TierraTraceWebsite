import type { CSSProperties } from 'react';
import {
  Boxes,
  ChevronRight,
  Database,
  Factory,
  FileCheck2,
  FileText,
  Fingerprint,
  Footprints,
  Leaf,
  Link2,
  MapPin,
  Menu,
  ShieldCheck,
  Shirt,
  Truck,
} from 'lucide-react';
import logo from '../../../../assets/tierratrace-logo.png';
import { DEMO_PASSPORT, DPP_ASSETS, DPP_HOW } from '../../../../data/passportContent';
import { InView, Words } from '../../../../lib/motion';
import './how-it-works.css';

const VISUALS = [ConnectVisual, StructureVisual, VerifyVisual, ShareVisual];
const VISUAL_LABELS = [
  'Example enterprise systems — SAP, Oracle and Microsoft Dynamics ERP, supplier and manufacturing systems — connected to a TierraTrace interface on a desktop monitor.',
  'The TierraTrace platform organising product data into a Digital Product Passport: product identity, materials and origin, lifecycle records, supporting evidence and carbon data.',
  'TierraTrace Verify listing product claims with their linked evidence, source records, documents and integrity checks.',
  'A Digital Product Passport for a cotton crew tee on a smartphone, with materials, origin, evidence and carbon cards beside it.',
];

/** 03 — four connected stages, each with an illustrative product representation. */
export function HowItWorks() {
  const h = DPP_HOW;
  return (
    <section id="how-it-works" className="dp-sec hw scroll-mt-28" aria-labelledby="hw-title">
      <div className="hw-intro">
        <InView as="p" className="dp-eyebrow hw-eyebrow m-rise">
          {h.eyebrow}
        </InView>
        <Words as="h2" text={h.headline} id="hw-title" className="dp-h2 hw-h2" />
        <InView as="p" className="dp-body hw-body m-rise" delay={150}>
          {h.body}
        </InView>
      </div>

      <InView as="ol" className="hw-stages" delay={0}>
        {h.stages.map((s, i) => {
          const Visual = VISUALS[i];
          return (
            <li key={s.n} className="hw-stage" style={{ '--i': i } as CSSProperties}>
              <span className="hw-marker">{s.n}</span>
              {i < h.stages.length - 1 && <span className="hw-step-arrow" aria-hidden />}
              <h3 className="hw-title">{s.title}</h3>
              <p className="hw-text">{s.body}</p>
              <div className="hw-vis" role="img" aria-label={VISUAL_LABELS[i]}>
                <div className="hw-vis-in">
                  <Visual />
                </div>
                {i < h.stages.length - 1 && <span className="hw-vis-arrow" aria-hidden />}
              </div>
              <p className="hw-caption">{s.caption}</p>
              <p className="hw-detail">{s.detail}</p>
            </li>
          );
        })}
      </InView>
      <p className="hw-note">{h.note}</p>
    </section>
  );
}

/* ---------- 01 connect: source systems wired into a desktop app ---------- */

const SOURCE_ICONS = [Database, Database, Database, Truck, Factory];
// vertical centres of the five source cards, in the 100 × 80 viewBox (see .hw-sys)
const SOURCE_Y = [9, 24.5, 40, 55.5, 71];

function ConnectVisual() {
  return (
    <>
      <svg className="hw-wires" viewBox="0 0 100 80" aria-hidden>
        {SOURCE_Y.map((y) => (
          <path key={y} className="hw-wire" d={`M33 ${y} C 37.5 ${y}, 36.5 40, 40.5 40`} />
        ))}
        <path className="hw-wire" d="M40.5 40 L45 40" />
        {SOURCE_Y.map((y, i) => (
          <path
            key={`p${y}`}
            className="hw-pulse"
            pathLength={100}
            style={{ animationDelay: `${i * 0.7}s` } as CSSProperties}
            d={`M33 ${y} C 37.5 ${y}, 36.5 40, 40.5 40 L45 40`}
          />
        ))}
        <circle className="hw-hub" cx="40.5" cy="40" r="0.9" />
      </svg>

      <ul className="hw-sys">
        {DPP_HOW.sources.map((s, i) => {
          const Icon = SOURCE_ICONS[i];
          return (
            <li key={s.name}>
              <Icon className="hw-sys-icon" strokeWidth={1.6} />
              <span>
                <b>{s.name}</b>
                <small>{s.type}</small>
              </span>
              <i className="hw-sys-dot" />
            </li>
          );
        })}
      </ul>

      <div className="hw-mon">
        <div className="hw-mon-display">
          <div className="hw-mon-screen">
            <div className="hw-app-side">
              <img src={logo} alt="" width={360} height={163} />
              {Array.from({ length: 7 }, (_, i) => (
                <span key={i} className={i === 1 ? 'is-on' : ''} />
              ))}
            </div>
            <div className="hw-app-main">
              <div className="hw-app-bar">
                <b>Product records</b>
                <span className="hw-app-search" />
                <span className="hw-app-btn" />
              </div>
              {Array.from({ length: 8 }, (_, i) => (
                <div key={i} className="hw-app-row">
                  <i className={i % 3 === 2 ? 'is-wait' : ''} />
                  <span style={{ width: `${34 - (i % 4) * 4}%` }} />
                  <span style={{ width: `${18 + (i % 3) * 4}%` }} />
                  <span className="hw-app-tag" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hw-mon-neck" />
        <div className="hw-mon-foot" />
      </div>
    </>
  );
}

/* ---------- 02 structure: the passport data model ---------- */

const STRUCTURE_ICONS = [Shirt, Leaf, Boxes, FileText, Footprints];

function StructureVisual() {
  return (
    <div className="hw-dpp-wrap">
      {[3, 2, 1].map((n) => (
        <span key={n} className="hw-dpp-layer" style={{ '--n': n } as CSSProperties} />
      ))}
      <div className="hw-card hw-dpp">
        <div className="hw-dpp-head">
          <img src={logo} alt="" width={360} height={163} />
          <span className="hw-chip">DPP</span>
        </div>
        <ul>
          {DPP_HOW.structure.map((label, i) => {
            const Icon = STRUCTURE_ICONS[i];
            return (
              <li key={label}>
                <span className="hw-ico">
                  <Icon strokeWidth={1.7} />
                </span>
                <span className="hw-dpp-label">{label}</span>
                <span className="hw-bar" style={{ '--w': `${[70, 55, 62, 48, 40][i]}%` } as CSSProperties} />
                <ChevronRight className="hw-go" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

/* ---------- 03 verify: claims and the records behind them ---------- */

const VERIFY_ICONS = [Shirt, MapPin, FileCheck2, Link2];

function VerifyVisual() {
  return (
    <div className="hw-card hw-ver">
      <div className="hw-ver-head">
        <ShieldCheck className="hw-ver-shield" strokeWidth={1.6} />
        <b>TierraTrace Verify</b>
      </div>
      <ul>
        {DPP_HOW.verify.map((r, i) => {
          const Icon = VERIFY_ICONS[i];
          return (
            <li key={r.label} style={{ '--r': i } as CSSProperties}>
              <Icon className="hw-ver-icon" strokeWidth={1.7} />
              <span className="hw-ver-label">{r.label}</span>
              <span className="hw-status">{r.status}</span>
              <ChevronRight className="hw-go" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* ---------- 04 share: the passport on a phone, with its sections fanned out behind ---------- */

const PHONE_ICONS = [Fingerprint, Leaf, MapPin, Boxes, FileText, Footprints];

function ShareVisual() {
  const tee = DPP_ASSETS.tee;
  return (
    <div className="hw-share">
      <div className="hw-cards">
        <div className="hw-pcard" style={{ '--c': 0 } as CSSProperties}>
          <b>Materials</b>
          <div className="hw-pcard-media">
            <img src={DPP_ASSETS.woven} alt="" loading="lazy" decoding="async" />
          </div>
          <p>100% organic cotton</p>
        </div>
        <div className="hw-pcard" style={{ '--c': 1 } as CSSProperties}>
          <b>Origin</b>
          <div className="hw-pcard-media hw-map">
            <svg className="hw-map-lines" viewBox="0 0 60 90" preserveAspectRatio="none">
              <path d="M-5 20 C 12 14, 22 30, 38 24 S 60 30, 70 22" />
              <path d="M-5 52 C 10 46, 24 60, 40 54 S 58 62, 70 56" />
              <path d="M14 -5 C 18 20, 10 46, 18 95" />
              <path d="M44 -5 C 40 26, 50 58, 42 95" />
              <path className="hw-map-route" d="M8 78 C 18 66, 22 60, 30 46" />
            </svg>
            <MapPin className="hw-map-pin" strokeWidth={2} />
          </div>
          <p>{DEMO_PASSPORT.origin}</p>
        </div>
        <div className="hw-pcard" style={{ '--c': 2 } as CSSProperties}>
          <b>Evidence</b>
          <div className="hw-pcard-media hw-doc">
            <span className="hw-doc-sheet">
              <i />
              <i />
              <i />
              <i />
              <span className="hw-doc-seal" />
            </span>
          </div>
          <p>Content certificate</p>
        </div>
        <div className="hw-pcard" style={{ '--c': 3 } as CSSProperties}>
          <b>Carbon</b>
          <div className="hw-pcard-media">
            <img src={DPP_ASSETS.forest} alt="" loading="lazy" decoding="async" />
          </div>
          <p>
            4.1 kg CO₂e <small>Estimate</small>
          </p>
        </div>
      </div>

      <div className="hw-phone">
        <div className="hw-phone-screen">
          <div className="hw-phone-top">
            <img src={logo} alt="" width={360} height={163} />
            <Menu className="hw-phone-menu" />
          </div>
          <p className="hw-phone-kicker">Digital Product Passport</p>
          <p className="hw-phone-name">{DEMO_PASSPORT.product}</p>
          <div className="hw-phone-media">
            <img src={tee.src} alt="" width={tee.width} height={tee.height} loading="lazy" decoding="async" />
          </div>
          <ul>
            {DPP_HOW.passportRows.map((r, i) => {
              const Icon = PHONE_ICONS[i];
              return (
                <li key={r}>
                  <Icon strokeWidth={1.8} />
                  <span>{r}</span>
                  <ChevronRight className="hw-go" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
