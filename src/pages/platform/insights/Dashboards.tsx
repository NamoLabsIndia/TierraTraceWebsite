import { useState } from 'react';
import { Container, Reveal, SectionHeading } from '../../../components/ui';
import { Segmented } from '../../../components/product';

/* Prebuilt dashboards (web-core PRD §59.2): every bar drills to its records. */
const BOARDS = {
  production: {
    label: 'Production',
    title: 'Output by plant · t',
    bars: [
      ['Coimbatore', 512],
      ['Tiruppur 1', 388],
      ['Tiruppur 2', 301],
      ['Rajkot', 211],
    ],
  },
  quality: {
    label: 'Quality',
    title: 'Defects by cause · count',
    bars: [
      ['Shade variation', 41],
      ['Holes', 23],
      ['GSM out of spec', 17],
      ['Stains', 9],
    ],
  },
  suppliers: {
    label: 'Suppliers',
    title: 'On-time delivery by supplier · %',
    bars: [
      ['Gujarat co-op', 97],
      ['Rajkot ginning', 93],
      ['DyeChem Ltd', 88],
      ['PackRight', 81],
    ],
  },
  inventory: {
    label: 'Inventory',
    title: 'Stock age · t',
    bars: [
      ['0–30 days', 2410],
      ['31–60 days', 920],
      ['61–90 days', 380],
      ['90+ days', 180],
    ],
  },
  sustainability: {
    label: 'Sustainability',
    title: 'Carbon by product · kg CO₂e / unit',
    bars: [
      ['Crew tee', 4.1],
      ['Polo', 5.6],
      ['Hoodie', 11.8],
      ['Joggers', 8.3],
    ],
  },
} as const;
type B = keyof typeof BOARDS;

export function Dashboards() {
  const [b, setB] = useState<B>('production');
  const d = BOARDS[b];
  const max = Math.max(...d.bars.map((x) => x[1]));
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section id="dashboards" className="scroll-mt-28 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Prebuilt dashboards"
          title="From the macro pattern"
          accent="to the exact record."
          lead="Start with ready-made views for production, quality, suppliers, inventory and sustainability. Every bar opens the records behind it — no exporting to a spreadsheet to find out why."
        />
        <Reveal className="mt-14">
          <div className="rounded-[28px] border border-tt-border bg-white p-5 shadow-[0_30px_80px_-40px_rgba(8,12,15,0.3)] sm:p-8">
            <Segmented
              label="Dashboard"
              size="md"
              value={b}
              onChange={(v) => {
                setB(v);
                setHover(null);
              }}
              options={(Object.keys(BOARDS) as B[]).map((k) => ({ id: k, label: BOARDS[k].label }))}
            />
            <div key={b} className="tt-swap-enter mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_300px]">
              <div>
                <p className="text-[15px] font-semibold">{d.title}</p>
                <ul className="mt-5 space-y-3">
                  {d.bars.map(([k, v], i) => (
                    <li key={k}>
                      <button
                        type="button"
                        onMouseEnter={() => setHover(i)}
                        onFocus={() => setHover(i)}
                        onClick={() => setHover(i)}
                        className="group grid w-full grid-cols-[110px_1fr_auto] items-center gap-3 text-left sm:grid-cols-[150px_1fr_auto]"
                      >
                        <span className="truncate text-[14px] text-tt-muted">{k}</span>
                        <span className="h-7 overflow-hidden rounded-lg bg-[#f3f4f5]">
                          <span
                            className={`tt-meter-fill block h-full rounded-lg ${hover === i ? 'bg-tt-green-600' : 'bg-tt-green'}`}
                            style={{ width: `${(v / max) * 100}%` }}
                          />
                        </span>
                        <span className="w-14 text-right text-[14px] font-semibold tabular-nums">{v.toLocaleString()}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-tt-border bg-[#fafbfa] p-5">
                {hover === null ? (
                  <p className="text-[14px] text-tt-muted">Hover or tap a bar to drill through to its records.</p>
                ) : (
                  <div className="tt-swap-enter">
                    <p className="text-[12px] font-semibold uppercase tracking-wider text-tt-muted">Drill-through</p>
                    <p className="mt-1 text-[17px] font-semibold">{d.bars[hover][0]}</p>
                    <ul className="mt-3 space-y-1.5 text-[13px]">
                      {[1, 2, 3].map((n) => (
                        <li key={n} className="flex justify-between rounded-lg bg-white px-3 py-2 ring-1 ring-tt-border">
                          <span className="font-mono">REC-{(4410 + hover * 13 + n).toString()}</span>
                          <span className="text-tt-muted">open →</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 text-[12px] text-tt-muted">Filtered to this bar, with the same permissions as the user.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
