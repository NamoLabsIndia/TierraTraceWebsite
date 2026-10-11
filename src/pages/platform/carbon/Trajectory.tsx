import { useMemo, useState } from 'react';
import { FlaskConical } from 'lucide-react';
import { Container, Reveal, SectionHeading } from '../../../components/ui';

/*
 * Scenarios & forecasts (PRD §12.10–12.11): actuals vs SBTi-style target path vs forecast,
 * with typed drivers that bend the forecast. Scenarios are sandboxed — they never touch actuals.
 */
const YEARS = [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];
const ACTUAL = [100, 97, 95, 92, 90]; // indexed to base year 2022
const TARGET = YEARS.map((_, i) => 100 - (42 / 8) * i); // −42% by 2030, linear
const DRIVERS = [
  { id: 'ppa', label: 'Renewable PPA — 60% from 2027', cut: [0, 0, 7, 11, 13] },
  { id: 'fuel', label: 'Boiler fuel switch to biomass', cut: [0, 3, 5, 6, 7] },
  { id: 'supplier', label: 'Low-carbon yarn supplier', cut: [0, 2, 4, 6, 8] },
  { id: 'eff', label: 'Process efficiency −8% kWh/kg', cut: [1, 2, 3, 4, 4] },
] as const;
type DriverId = (typeof DRIVERS)[number]['id'];

const W = 560;
const H = 260;
const PAD = { l: 36, r: 22, t: 16, b: 28 };
const x = (i: number) => PAD.l + (i / (YEARS.length - 1)) * (W - PAD.l - PAD.r);
const y = (v: number) => PAD.t + ((100 - v) / 50) * (H - PAD.t - PAD.b);
const path = (pts: [number, number][]) => pts.map(([a, b], i) => `${i ? 'L' : 'M'}${x(a).toFixed(1)},${y(b).toFixed(1)}`).join(' ');

export function Trajectory() {
  const [on, setOn] = useState<Set<DriverId>>(new Set(['ppa']));
  const forecast = useMemo(() => {
    const base = [90, 89, 88, 87, 86]; // business-as-usual 2026→2030
    return base.map((b, k) => {
      const cut = DRIVERS.filter((d) => on.has(d.id)).reduce((s, d) => s + d.cut[k], 0);
      return Math.max(50, b - cut);
    });
  }, [on]);
  const end = forecast[forecast.length - 1];
  const gap = end - TARGET[TARGET.length - 1];

  const toggle = (id: DriverId) =>
    setOn((prev) => {
      const n = new Set(prev);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });

  return (
    <section className="bg-[#fafbfa] py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Reduction over reporting"
          title="Model the future."
          accent="Fund the plan that hits the target."
          lead="Toggle decarbonisation levers and watch the forecast move against your science-based target path. Scenarios are sandboxed: they never touch actuals — promote one to a roadmap when you're ready."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
          <Reveal>
            <div className="flex h-full flex-col justify-center rounded-[28px] border border-tt-border bg-white p-5 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-[15px] font-semibold">Scope 1+2 trajectory · index, 2022 = 100</p>
                <ul className="flex flex-wrap gap-4 text-[12px] text-tt-muted">
                  <li className="inline-flex items-center gap-1.5">
                    <span className="h-[3px] w-4 rounded bg-tt-ink" /> Actuals
                  </li>
                  <li className="inline-flex items-center gap-1.5">
                    <span className="h-0 w-4 border-t-2 border-dashed border-tt-muted" /> Target path
                  </li>
                  <li className="inline-flex items-center gap-1.5">
                    <span className="h-[3px] w-4 rounded bg-tt-green" /> Scenario forecast
                  </li>
                </ul>
              </div>
              <svg viewBox={`0 0 ${W} ${H}`} className="mt-4 w-full" role="img" aria-label={`Forecast reaches ${end} by 2030 against a target of ${TARGET[8].toFixed(0)}`}>
                {[100, 90, 80, 70, 60, 50].map((v) => (
                  <g key={v}>
                    <line x1={PAD.l} x2={W - PAD.r} y1={y(v)} y2={y(v)} stroke="#eceef0" />
                    <text x={PAD.l - 8} y={y(v) + 4} textAnchor="end" fontSize="11" fill="#6a7282">
                      {v}
                    </text>
                  </g>
                ))}
                {YEARS.map((yr, i) => (
                  <text key={yr} x={x(i)} y={H - 8} textAnchor="middle" fontSize="11" fill="#6a7282">
                    {yr}
                  </text>
                ))}
                <path d={path(TARGET.map((v, i) => [i, v]))} fill="none" stroke="#6a7282" strokeWidth="2" strokeDasharray="5 5" />
                <path
                  d={path(forecast.map((v, k) => [k + 4, v]))}
                  fill="none"
                  stroke="#31c35a"
                  strokeWidth="3"
                  strokeLinecap="round"
                  style={{ transition: 'd 500ms cubic-bezier(0.77,0,0.175,1)' }}
                />
                <path d={path(ACTUAL.map((v, i) => [i, v]))} fill="none" stroke="#080c0f" strokeWidth="3" strokeLinecap="round" />
                {ACTUAL.map((v, i) => (
                  <circle key={i} cx={x(i)} cy={y(v)} r="4" fill={i === 4 ? '#fff' : '#080c0f'} stroke="#080c0f" strokeWidth="2" />
                ))}
                <circle cx={x(8)} cy={y(end)} r="5" fill="#31c35a" style={{ transition: 'cy 500ms cubic-bezier(0.77,0,0.175,1)' }} />
              </svg>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="flex h-full flex-col rounded-[28px] border border-tt-border bg-white p-5 sm:p-7">
              <p className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wider text-tt-muted">
                <FlaskConical className="h-4 w-4" aria-hidden /> Scenario drivers
              </p>
              <ul className="mt-4 space-y-2">
                {DRIVERS.map((d) => (
                  <li key={d.id}>
                    <label className="tt-press flex cursor-pointer items-center gap-3 rounded-2xl border border-tt-border px-3.5 py-3 text-[14px] font-medium has-[:checked]:border-tt-green/40 has-[:checked]:bg-tt-green-50">
                      <input
                        type="checkbox"
                        checked={on.has(d.id)}
                        onChange={() => toggle(d.id)}
                        className="h-4 w-4 accent-[#31c35a]"
                      />
                      {d.label}
                    </label>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <p className="text-[13px] text-tt-muted">2030 forecast vs target</p>
                <p className={`mt-1 text-[24px] font-bold tracking-tight ${gap <= 0 ? 'text-tt-green-ink' : 'text-tt-amber'}`}>
                  {gap <= 0 ? 'On track' : `${gap.toFixed(0)} pts above target`}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
