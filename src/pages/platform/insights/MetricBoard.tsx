import { useState } from 'react';
import { ArrowUpRight, Clock, Info, PlugZap } from 'lucide-react';
import logo from '../../../assets/tierratrace-logo.png';
import { DemoCard } from '../../../components/product';

/*
 * Insights principle (web-core PRD §59.3 + docs/plan/web-insights-build-plan.md):
 * every metric has a definition, drills to records, shows freshness — and a metric
 * with no real data source says so instead of showing an invented number.
 */
type Metric = {
  id: string;
  label: string;
  value?: string;
  unit?: string;
  definition: string;
  source: string;
  records?: string;
};

const METRICS: Metric[] = [
  { id: 'output', label: 'Output', value: '1,412', unit: 't', definition: 'Sum of completed quantity across manufacturing orders closed in the period.', source: 'Manufacturing orders', records: '64 orders' },
  { id: 'scrap', label: 'Scrap rate', value: '2.1', unit: '%', definition: 'Scrapped quantity ÷ (completed + scrapped) quantity, per order, volume-weighted.', source: 'Manufacturing orders', records: '64 orders' },
  { id: 'passport', label: 'Passport coverage', value: '86', unit: '%', definition: 'Products with a published passport ÷ active products.', source: 'Passports · Products', records: '43 of 50 products' },
  { id: 'otif', label: 'OTIF', value: '94.3', unit: '%', definition: 'Shipments delivered on time and in full ÷ shipments delivered.', source: 'Shipments', records: '212 shipments' },
  { id: 'oee', label: 'Network OEE', definition: 'Availability × performance × quality per line.', source: 'Needs line telemetry' },
  { id: 'inventory', label: 'Inventory on hand', value: '3,890', unit: 't', definition: 'Sum of available quantity across warehouses at snapshot time.', source: 'Inventory', records: '5 warehouses' },
];

export function MetricBoard() {
  const [sel, setSel] = useState('output');
  const m = METRICS.find((x) => x.id === sel)!;

  return (
    <DemoCard label="Example operations dashboard">
      <div className="flex items-center justify-between border-b border-tt-border px-5 py-4 sm:px-6">
        <img src={logo} alt="" className="h-7 w-auto" />
        <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-tt-muted">
          <Clock className="h-3.5 w-3.5" aria-hidden /> Data as of 4 min ago
        </span>
      </div>
      <div className="px-5 pt-5 sm:px-6">
        <p className="text-[12px] font-medium uppercase tracking-wider text-tt-muted">Operations · September 2026</p>
      </div>
      <ul className="grid grid-cols-2 gap-2 px-5 pt-3 sm:grid-cols-3 sm:px-6">
        {METRICS.map((x) => {
          const active = x.id === sel;
          const missing = !x.value;
          return (
            <li key={x.id}>
              <button
                type="button"
                onClick={() => setSel(x.id)}
                aria-pressed={active}
                className={`tt-press h-full w-full rounded-2xl border p-3 text-left ${
                  active ? 'border-tt-green/45 bg-tt-green-50' : missing ? 'border-dashed border-[#cfd3d8] bg-white' : 'border-tt-border bg-white hover:border-[#d4d4d4]'
                }`}
              >
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-tt-muted">{x.label}</span>
                {missing ? (
                  <span className="mt-1.5 inline-flex items-center gap-1 text-[12px] font-semibold text-tt-muted">
                    <PlugZap className="h-3.5 w-3.5" aria-hidden /> Not measured
                  </span>
                ) : (
                  <span className="mt-1 block text-[22px] font-bold leading-none tracking-tight tabular-nums">
                    {x.value}
                    <span className="ml-0.5 text-[13px] font-semibold text-tt-muted">{x.unit}</span>
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>

      <div key={sel} className="tt-swap-enter mx-5 my-5 rounded-2xl border border-tt-border bg-[#fafbfa] p-4 sm:mx-6">
        <p className="inline-flex items-center gap-1.5 text-[13px] font-semibold">
          <Info className="h-4 w-4 text-tt-green-ink" aria-hidden /> {m.label} — definition
        </p>
        <p className="mt-1.5 text-[13px] leading-relaxed text-tt-muted">{m.definition}</p>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[12px]">
          <span className="text-tt-muted">
            Source: <span className="font-semibold text-tt-ink">{m.source}</span>
          </span>
          {m.records ? (
            <span className="inline-flex items-center gap-1 font-semibold text-tt-green-ink">
              Drill to {m.records} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </span>
          ) : (
            <span className="font-semibold text-tt-muted">Connect line sensors to measure this</span>
          )}
        </div>
      </div>
    </DemoCard>
  );
}
