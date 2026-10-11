import { useState } from 'react';
import { AlertTriangle, CircleCheck, CircleDashed, CircleHelp, Factory, Link2, ShieldCheck } from 'lucide-react';
import logo from '../../../assets/tierratrace-logo.png';

type NodeState = 'complete' | 'partial' | 'missing' | 'exception';
type Evidence = 'Signed' | 'Anchored' | 'Unsigned' | 'No data';
type Stage = {
  name: string;
  state: NodeState;
  count: string;
  dates: string;
  site: string;
  evidence: Evidence;
  note?: string;
};

/*
 * Stages come from the workspace blueprint, never hardcoded (web-core PRD §53.3).
 * The two industries below use the exact sequences the PRD gives as examples.
 */
const INDUSTRIES: Record<'textile' | 'steel', { label: string; ref: string; stages: Stage[] }> = {
  textile: {
    label: 'Textile',
    ref: 'LOT-ARA-04-26805',
    stages: [
      { name: 'Farm', state: 'complete', count: '3 lots', dates: 'Feb 2026', site: 'Gujarat cotton co-op', evidence: 'Anchored' },
      { name: 'Ginning', state: 'complete', count: '2 lots', dates: 'Mar 2026', site: 'Rajkot ginning unit', evidence: 'Anchored' },
      { name: 'Spinning', state: 'complete', count: '1 lot', dates: 'Apr 2026', site: 'Coimbatore mill', evidence: 'Signed' },
      { name: 'Knitting', state: 'partial', count: '1 lot', dates: 'Apr 2026', site: 'Tiruppur knitting', evidence: 'Unsigned', note: '1 of 2 events awaiting signature' },
      { name: 'Dyeing', state: 'missing', count: '—', dates: '—', site: 'No supplier data yet', evidence: 'No data', note: 'Gap shown explicitly — never hidden' },
      { name: 'Garment', state: 'exception', count: '4 batches', dates: 'May 2026', site: 'Tiruppur unit 2', evidence: 'Signed', note: 'Mass balance variance 6.2% (tolerance 5%)' },
      { name: 'Shipment', state: 'complete', count: '6 shipments', dates: 'Jun 2026', site: 'Chennai port → Hamburg', evidence: 'Anchored' },
    ],
  },
  steel: {
    label: 'Steel',
    ref: 'HEAT-VJN-11-0442',
    stages: [
      { name: 'Ore', state: 'complete', count: '2 lots', dates: 'Jan 2026', site: 'Odisha mine', evidence: 'Anchored' },
      { name: 'Melting', state: 'complete', count: '1 heat', dates: 'Feb 2026', site: 'BF-2, Vijayanagar', evidence: 'Signed' },
      { name: 'Casting', state: 'complete', count: '12 slabs', dates: 'Feb 2026', site: 'Caster 3', evidence: 'Anchored' },
      { name: 'Rolling', state: 'partial', count: '9 coils', dates: 'Mar 2026', site: 'Hot strip mill', evidence: 'Unsigned', note: '3 coils missing roll records' },
      { name: 'Finishing', state: 'complete', count: '9 coils', dates: 'Mar 2026', site: 'Pickling line', evidence: 'Signed' },
      { name: 'Shipment', state: 'complete', count: '3 shipments', dates: 'Apr 2026', site: 'Mumbai → Rotterdam', evidence: 'Anchored' },
    ],
  },
};

const STATE_STYLE: Record<NodeState, { dot: string; label: string; icon: typeof CircleCheck; text: string }> = {
  complete: { dot: 'bg-tt-green border-tt-green text-white', label: 'Complete', icon: CircleCheck, text: 'text-tt-green-ink' },
  partial: { dot: 'bg-white border-tt-green text-tt-green-ink', label: 'Partial', icon: CircleDashed, text: 'text-tt-green-ink' },
  missing: { dot: 'bg-white border-dashed border-[#b8bec6] text-tt-muted', label: 'Gap — no data', icon: CircleHelp, text: 'text-tt-muted' },
  exception: { dot: 'bg-tt-amber border-tt-amber text-white', label: 'Exception', icon: AlertTriangle, text: 'text-tt-amber' },
};

export function LifecycleCard() {
  const [industry, setIndustry] = useState<'textile' | 'steel'>('textile');
  const data = INDUSTRIES[industry];
  const [selected, setSelected] = useState(4); // open on the gap — it's the point
  const stage = data.stages[Math.min(selected, data.stages.length - 1)];
  const st = STATE_STYLE[stage.state];
  const done = data.stages.filter((s) => s.state === 'complete').length;

  return (
    <div className="relative">
      <div aria-hidden className="absolute inset-x-6 -bottom-3 h-full rounded-[28px] border border-tt-border bg-white/60" />
      <figure
        aria-label="Example chain of custody"
        className="relative overflow-hidden rounded-[28px] border border-tt-border bg-white shadow-[0_30px_80px_-30px_rgba(8,12,15,0.28)]"
      >
        <div className="flex items-center justify-between gap-3 border-b border-tt-border px-5 py-4 sm:px-6">
          <img src={logo} alt="" className="h-7 w-auto" />
          <div role="radiogroup" aria-label="Industry blueprint" className="inline-flex rounded-full bg-[#f3f4f5] p-1">
            {(Object.keys(INDUSTRIES) as (keyof typeof INDUSTRIES)[]).map((k) => (
              <button
                key={k}
                type="button"
                role="radio"
                aria-checked={industry === k}
                onClick={() => {
                  setIndustry(k);
                  setSelected(k === 'textile' ? 4 : 3);
                }}
                className={`tt-press rounded-full px-3.5 py-1.5 text-[12px] font-semibold ${
                  industry === k ? 'bg-white text-tt-ink shadow-sm' : 'text-tt-muted hover:text-tt-ink'
                }`}
              >
                {INDUSTRIES[k].label}
              </button>
            ))}
          </div>
        </div>

        <div className="px-5 pt-5 sm:px-6">
          <p className="text-[12px] font-medium uppercase tracking-wider text-tt-muted">Chain of custody</p>
          <div className="mt-1 flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-mono text-[18px] font-semibold tracking-tight sm:text-[20px]">{data.ref}</h3>
            <span className="text-[13px] text-tt-muted">
              {done}/{data.stages.length} stages fully evidenced
            </span>
          </div>
        </div>

        {/* Horizontal stepper. Each node is a button; the list itself is the accessible linear rendering. */}
        <div className="mt-6 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:px-6">
        <ol key={industry} className="tt-swap-enter relative flex w-max min-w-full justify-between" aria-label="Lifecycle stages">
          <span aria-hidden className="absolute left-7 right-7 top-[15px] h-[2px] bg-tt-border" />
          {data.stages.map((s, i) => {
            const style = STATE_STYLE[s.state];
            const Icon = style.icon;
            const active = i === selected;
            return (
              <li key={s.name} className="relative flex min-w-[64px] flex-1 flex-col items-center sm:w-0 sm:min-w-0">
                <button
                  type="button"
                  onClick={() => setSelected(i)}
                  aria-pressed={active}
                  aria-label={`${s.name}: ${style.label}`}
                  className={`tt-press grid h-8 w-8 place-items-center rounded-full border-2 ${style.dot} ${
                    active ? 'ring-4 ring-tt-green/20' : ''
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </button>
                <span className={`mt-2 text-center text-[11px] font-semibold leading-tight sm:text-[12px] ${active ? 'text-tt-ink' : 'text-tt-muted'}`}>
                  {s.name}
                </span>
              </li>
            );
          })}
        </ol>
        </div>

        <div key={`${industry}-${selected}`} className="tt-swap-enter mx-5 mb-5 mt-6 rounded-2xl border border-tt-border bg-[#fafbfa] p-4 sm:mx-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-[17px] font-semibold">{stage.name}</p>
            <span className={`inline-flex items-center gap-1 text-[12px] font-semibold ${st.text}`}>
              <st.icon className="h-3.5 w-3.5" aria-hidden /> {st.label}
            </span>
          </div>
          <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2.5 text-[13px]">
            <div>
              <dt className="text-tt-muted">Entities</dt>
              <dd className="font-semibold">{stage.count}</dd>
            </div>
            <div>
              <dt className="text-tt-muted">Dates</dt>
              <dd className="font-semibold">{stage.dates}</dd>
            </div>
            <div>
              <dt className="text-tt-muted">Facility / supplier</dt>
              <dd className="inline-flex items-center gap-1 font-semibold">
                <Factory className="h-3.5 w-3.5 text-tt-muted" aria-hidden /> {stage.site}
              </dd>
            </div>
            <div>
              <dt className="text-tt-muted">Evidence</dt>
              <dd>
                <EvidenceChip e={stage.evidence} />
              </dd>
            </div>
          </dl>
          {stage.note && (
            <p
              className={`mt-3 rounded-lg px-2.5 py-1.5 text-[12px] font-medium ${
                stage.state === 'exception' ? 'bg-tt-amber-50 text-tt-amber' : 'bg-white text-tt-muted ring-1 ring-tt-border'
              }`}
            >
              {stage.note}
            </p>
          )}
        </div>
      </figure>
    </div>
  );
}

export function EvidenceChip({ e }: { e: Evidence }) {
  const map: Record<Evidence, string> = {
    Anchored: 'bg-tt-green text-white',
    Signed: 'bg-tt-green-50 text-tt-green-ink ring-1 ring-tt-green/25',
    Unsigned: 'bg-white text-tt-amber ring-1 ring-tt-amber/30',
    'No data': 'bg-white text-tt-muted ring-1 ring-tt-border',
  };
  const Icon = e === 'Anchored' ? Link2 : e === 'Signed' ? ShieldCheck : CircleDashed;
  return (
    <span className={`inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[11px] font-semibold ${map[e]}`}>
      <Icon className="h-3 w-3" aria-hidden /> {e}
    </span>
  );
}
