import { useState } from 'react';
import {
  BadgeCheck,
  Box,
  Factory,
  FileBadge2,
  Leaf,
  Link2,
  MapPin,
  PenLine,
  QrCode,
  Recycle,
  ShieldCheck,
} from 'lucide-react';
import logo from '../../../assets/tierratrace-logo.png';

type Field = {
  label: string;
  value: string;
  icon: typeof Box;
  source: string;
  manual?: boolean;
};

// Example passport, modelled on the "Combed Cotton Crew Tee — v3.2" pilot in the web-core PRD (§56.4).
const FIELDS: Field[] = [
  { label: 'Material', value: '100% organic cotton', icon: Box, source: 'Product spec · PS-114' },
  { label: 'Spun & knitted', value: 'Tiruppur, India', icon: Factory, source: 'Batch · LOT-2291' },
  { label: 'Certificate', value: 'GOTS 7.0 — valid', icon: FileBadge2, source: 'Certificate · C-8812' },
  { label: 'Carbon footprint', value: '4.1 kg CO₂e', icon: Leaf, source: 'Carbon result · CR-09' },
  { label: 'Recyclability', value: 'Mono-material, 92%', icon: Recycle, source: 'Manually asserted', manual: true },
  { label: 'Lots linked', value: '4 new in v3.2', icon: Link2, source: 'Traceability · 4 lots' },
];

const VIEWS = [
  { id: 'consumer', label: 'Consumer view' },
  { id: 'provenance', label: 'Provenance' },
] as const;
type View = (typeof VIEWS)[number]['id'];

/**
 * The hero object: one passport, two lenses. "Consumer view" is what a scan
 * shows; "Provenance" reveals the source record behind every field, which is
 * the single idea that sets the product apart (PRD §56.3 "Provenance mandatory").
 */
export function PassportCard() {
  const [view, setView] = useState<View>('consumer');

  return (
    <div className="relative">
      {/* depth layers behind the card */}
      <div aria-hidden className="absolute inset-x-6 -bottom-3 h-full rounded-[28px] border border-tt-border bg-white/60" />
      <div aria-hidden className="absolute inset-x-12 -bottom-6 h-full rounded-[28px] border border-tt-border bg-white/40" />

      <figure
        aria-label="Example Digital Product Passport"
        className="relative overflow-hidden rounded-[28px] border border-tt-border bg-white shadow-[0_30px_80px_-30px_rgba(8,12,15,0.28)]"
      >
        <div className="flex items-center justify-between border-b border-tt-border px-5 pt-5 pb-4 sm:px-6">
          <img src={logo} alt="" className="h-7 w-auto" />
          <span className="inline-flex items-center gap-1.5 rounded-full border border-tt-green/30 bg-tt-green-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-tt-green-ink">
            <span className="tt-pulse h-1.5 w-1.5 rounded-full bg-tt-green" />
            Published · v3.2
          </span>
        </div>

        <div className="px-5 pt-5 sm:px-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[12px] font-medium uppercase tracking-wider text-tt-muted">Digital Product Passport</p>
              <h3 className="mt-1 text-[22px] font-bold leading-tight tracking-tight sm:text-[26px]">
                Combed Cotton Crew Tee
              </h3>
              <p className="mt-1.5 inline-flex items-center gap-1 text-[13px] text-tt-muted">
                <MapPin className="h-3.5 w-3.5 text-tt-green-ink" aria-hidden /> Tiruppur, India
              </p>
            </div>
            <div className="grid h-[72px] w-[72px] shrink-0 place-items-center rounded-2xl border border-tt-border bg-[#fafafa]">
              <QrCode className="h-10 w-10 text-tt-ink" aria-hidden strokeWidth={1.5} />
            </div>
          </div>

          <div role="tablist" aria-label="Passport view" className="mt-5 inline-flex rounded-full bg-[#f3f4f5] p-1">
            {VIEWS.map((v) => (
              <button
                key={v.id}
                role="tab"
                type="button"
                aria-selected={view === v.id}
                aria-controls="passport-fields"
                onClick={() => setView(v.id)}
                className={`tt-press rounded-full px-4 py-2 text-[13px] font-semibold ${
                  view === v.id ? 'bg-white text-tt-ink shadow-sm' : 'text-tt-muted hover:text-tt-ink'
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>

        <dl id="passport-fields" role="tabpanel" key={view} className="tt-swap-enter grid grid-cols-2 gap-px bg-tt-border/70 mt-5 border-y border-tt-border">
          {FIELDS.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.label} className="bg-white px-5 py-4 sm:px-6">
                <dt className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-tt-muted">
                  <Icon className="h-3.5 w-3.5 text-tt-green-ink" aria-hidden /> {f.label}
                </dt>
                <dd className="mt-1 text-[15px] font-semibold text-tt-ink">{f.value}</dd>
                {view === 'provenance' && (
                  <dd
                    className={`mt-2 inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[11px] font-medium ${
                      f.manual
                        ? 'bg-tt-amber-50 text-tt-amber ring-1 ring-tt-amber/20'
                        : 'bg-tt-green-50 text-tt-green-ink ring-1 ring-tt-green/20'
                    }`}
                  >
                    {f.manual ? <PenLine className="h-3 w-3" aria-hidden /> : <Link2 className="h-3 w-3" aria-hidden />}
                    {f.source}
                  </dd>
                )}
              </div>
            );
          })}
        </dl>

        <figcaption className="flex items-center justify-between gap-3 px-5 py-4 text-[12px] text-tt-muted sm:px-6">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-tt-green-ink" aria-hidden />
            Signed &amp; anchored on Hyperledger Fabric
          </span>
          <span className="inline-flex items-center gap-1 font-mono text-[11px]">
            <BadgeCheck className="h-3.5 w-3.5 text-tt-green-ink" aria-hidden /> 0x7f3a…c21e
          </span>
        </figcaption>
      </figure>
    </div>
  );
}
