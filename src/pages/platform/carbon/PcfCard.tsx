import { useState } from 'react';
import { BadgeCheck, Factory, FlaskConical, Leaf, Package, ShieldCheck, Truck } from 'lucide-react';
import logo from '../../../assets/tierratrace-logo.png';
import { DemoCard, Segmented } from '../../../components/product';

/*
 * A batch-level Product Carbon Footprint, computed by walking the genealogy (web-carbon PRD §12.7):
 * material inputs + process energy + auxiliaries + intra-site transport = cradle-to-gate PCF.
 * Every component carries its factor, activity record and source class (§3.1, §3.3).
 */
const PARTS = [
  { k: 'Materials', v: 2.31, icon: Package, factor: 'Supplier PCF · PACT v2', activity: '0.21 kg organic cotton / unit', source: 'Supplier primary' },
  { k: 'Process energy', v: 1.12, icon: Factory, factor: 'IEA India grid 2026 · v3', activity: 'Metered 0.94 kWh / unit', source: 'Metered' },
  { k: 'Auxiliaries', v: 0.44, icon: FlaskConical, factor: 'ecoinvent 3.10 · reactive dye', activity: '18 g dye / unit', source: 'Invoiced' },
  { k: 'Transport', v: 0.23, icon: Truck, factor: 'DEFRA 2026 · HGV diesel', activity: '62 km road, 0.24 t-km', source: 'Calculated' },
];
const TOTAL = PARTS.reduce((s, p) => s + p.v, 0);

export function PcfCard() {
  const [view, setView] = useState<'breakdown' | 'lineage'>('breakdown');
  return (
    <DemoCard label="Example product carbon footprint">
      <div className="flex items-center justify-between border-b border-tt-border px-5 py-4 sm:px-6">
        <img src={logo} alt="" className="h-7 w-auto" />
        <span className="inline-flex items-center gap-1.5 rounded-full border border-tt-green/30 bg-tt-green-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-tt-green-ink">
          <ShieldCheck className="h-3.5 w-3.5" aria-hidden /> Verified PCF
        </span>
      </div>

      <div className="px-5 pt-5 sm:px-6">
        <p className="text-[12px] font-medium uppercase tracking-wider text-tt-muted">Batch LOT-ARA-04-26805 · cradle-to-gate</p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
          <p className="text-[44px] font-bold leading-none tracking-tight">
            {TOTAL.toFixed(1)}
            <span className="ml-1.5 text-[16px] font-semibold text-tt-muted">kg CO₂e / unit</span>
          </p>
          <div className="text-right text-[12px]">
            <p className="text-tt-muted">Data quality</p>
            <p className="font-semibold">
              DQR 1.8 <span className="font-normal text-tt-muted">· 71% primary</span>
            </p>
          </div>
        </div>
        <div className="mt-5">
          <Segmented
            label="Footprint view"
            value={view}
            onChange={setView}
            options={[
              { id: 'breakdown', label: 'Breakdown' },
              { id: 'lineage', label: 'Lineage' },
            ]}
          />
        </div>
      </div>

      <ul key={view} className="tt-swap-enter mt-5 space-y-2 px-5 pb-5 sm:px-6">
        {PARTS.map((p) => {
          const pct = (p.v / TOTAL) * 100;
          return (
            <li key={p.k} className="rounded-2xl border border-tt-border px-4 py-3">
              <div className="flex items-center justify-between gap-3 text-[14px]">
                <span className="inline-flex items-center gap-2 font-semibold">
                  <p.icon className="h-4 w-4 text-tt-green-ink" aria-hidden /> {p.k}
                </span>
                <span className="font-semibold tabular-nums">{p.v.toFixed(2)} kg</span>
              </div>
              {view === 'breakdown' ? (
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#eceef0]" aria-hidden>
                  <div className="tt-meter-fill h-full rounded-full bg-tt-green" style={{ width: `${pct}%` }} />
                </div>
              ) : (
                <dl className="mt-2 grid grid-cols-1 gap-1 text-[12px] sm:grid-cols-[auto_1fr] sm:gap-x-3">
                  <dt className="text-tt-muted">Activity</dt>
                  <dd className="font-medium">{p.activity}</dd>
                  <dt className="text-tt-muted">Factor</dt>
                  <dd className="font-medium">{p.factor}</dd>
                  <dt className="text-tt-muted">Source</dt>
                  <dd>
                    <span className="rounded-md bg-tt-green-50 px-1.5 py-0.5 font-semibold text-tt-green-ink">{p.source}</span>
                  </dd>
                </dl>
              )}
            </li>
          );
        })}
      </ul>

      <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-tt-border px-5 py-4 text-[12px] text-tt-muted sm:px-6">
        <span className="inline-flex items-center gap-1.5">
          <Leaf className="h-4 w-4 text-tt-green-ink" aria-hidden /> Methodology GHG-P v4.2 · run #8812
        </span>
        <span className="inline-flex items-center gap-1">
          <BadgeCheck className="h-3.5 w-3.5 text-tt-green-ink" aria-hidden /> Published to passport v3.2
        </span>
      </figcaption>
    </DemoCard>
  );
}
