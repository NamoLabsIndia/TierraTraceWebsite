import { useState } from 'react';
import { ChevronRight, FileSpreadsheet, Gauge, Layers, ScrollText } from 'lucide-react';
import { Container, Reveal, SectionHeading } from '../../../components/ui';

/* Disclosed figure → inventory lines → calculation run → activity records, in ≤ 3 clicks (PRD §1.4). */
const LEVELS = [
  {
    icon: ScrollText,
    title: 'CSRD ESRS E1 · Scope 2 (market-based)',
    value: '4,812 tCO₂e',
    rows: [
      ['Coimbatore mill', '2,104 t'],
      ['Tiruppur unit 2', '1,488 t'],
      ['Rajkot ginning', '1,220 t'],
    ],
  },
  {
    icon: Layers,
    title: 'Inventory line · Coimbatore mill electricity',
    value: '2,104 tCO₂e',
    rows: [
      ['Calculation run', '#8790 · 02 Oct 2026'],
      ['Methodology', 'GHG-P v4.2 (locked)'],
      ['Factor', 'IEA India grid 2026 · v3'],
    ],
  },
  {
    icon: Gauge,
    title: 'Calculation run #8790',
    value: '2,104 tCO₂e',
    rows: [
      ['Activity records', '2,184 meter reads'],
      ['Data quality', 'DQR 1.2 · 100% metered'],
      ['Computed by', 'svc-carbon · immutable'],
    ],
  },
  {
    icon: FileSpreadsheet,
    title: 'Activity records · Meter EM-CBE-04',
    value: '2.97 GWh',
    rows: [
      ['Sep 30 · 23:45', '412.8 kWh'],
      ['Sep 30 · 23:30', '409.1 kWh'],
      ['Sep 30 · 23:15', '415.6 kWh'],
    ],
  },
];

const QUALITY = ['Metered', 'Invoiced', 'Calculated', 'Estimated', 'Industry average'];

export function Lineage() {
  const [depth, setDepth] = useState(0);
  const L = LEVELS[depth];

  return (
    <section id="lineage" className="scroll-mt-28 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Every number has a lineage"
          title="Sustainability numbers with"
          accent="the integrity of financial ones."
          lead="Click any disclosed figure and keep going: down to the inventory line, the calculation run and the meter reads it came from. An auditor can sample it without calling engineering."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
          <Reveal>
            <div className="flex h-full flex-col rounded-[28px] border border-tt-border bg-white p-5 shadow-[0_30px_80px_-40px_rgba(8,12,15,0.3)] sm:p-7">
              <nav aria-label="Lineage path">
                <ol className="flex flex-wrap items-center gap-1 text-[13px]">
                  {['Disclosure', 'Inventory', 'Run', 'Activity'].map((s, i) => (
                    <li key={s} className="inline-flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => setDepth(i)}
                        disabled={i > depth}
                        aria-current={i === depth ? 'step' : undefined}
                        className={`tt-press rounded-full px-2.5 py-1 font-semibold ${
                          i === depth ? 'bg-tt-ink text-white' : i < depth ? 'text-tt-green-ink hover:bg-tt-green-50' : 'text-tt-muted/60'
                        }`}
                      >
                        {s}
                      </button>
                      {i < 3 && <ChevronRight className="h-3.5 w-3.5 text-tt-muted" aria-hidden />}
                    </li>
                  ))}
                </ol>
              </nav>

              <div key={depth} className="tt-swap-enter mt-6 flex flex-1 flex-col">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-tt-green-50 text-tt-green-ink">
                      <L.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <p className="text-[17px] font-semibold">{L.title}</p>
                  </div>
                  <p className="text-[26px] font-bold tracking-tight">{L.value}</p>
                </div>
                <ul className="mt-5 divide-y divide-tt-border rounded-2xl border border-tt-border">
                  {L.rows.map(([k, v], i) => (
                    <li key={k}>
                      <button
                        type="button"
                        onClick={() => depth < 3 && setDepth(depth + 1)}
                        disabled={depth === 3}
                        className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left text-[14px] enabled:hover:bg-tt-green-50/60"
                      >
                        <span className="text-tt-muted">{k}</span>
                        <span className="inline-flex items-center gap-1.5 font-semibold">
                          {v}
                          {depth < 3 && i === 0 && <ChevronRight className="h-4 w-4 text-tt-green-ink" aria-hidden />}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-4 text-[13px] text-tt-muted">
                  {depth < 3 ? 'Click a row to go one level deeper.' : 'Bottom of the chain — raw readings, exportable for assurance.'}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="flex h-full flex-col rounded-[28px] bg-tt-ink p-6 text-white sm:p-7">
              <p className="text-[13px] font-semibold uppercase tracking-wider text-tt-green">Data quality ladder</p>
              <p className="mt-3 text-[15px] leading-relaxed text-white/70">
                Every record carries a source class. Every total carries a weighted quality rating — shown next to the number, not
                hidden in a footnote.
              </p>
              <ol className="mt-6 space-y-3">
                {QUALITY.map((q, i) => (
                  <li key={q} className="grid grid-cols-[120px_1fr] items-center gap-3">
                    <span className="text-[13px] font-medium">{q}</span>
                    <span className="h-2 overflow-hidden rounded-full bg-white/10" aria-hidden>
                      <span className="block h-full rounded-full bg-tt-green" style={{ width: `${100 - i * 18}%`, opacity: 1 - i * 0.15 }} />
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-auto pt-6 text-[13px] text-white/55">Defaults are conservative: missing data never understates emissions.</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
