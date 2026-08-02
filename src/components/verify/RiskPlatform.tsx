/**
 * Risk platform — ten published signals, and the explainability guarantee.
 *
 * ── Critique of the version this replaces ─────────────────────────────────
 * A stack of flat horizontal bars is a spreadsheet, not a chart. Worse, it
 * never made the PRD's actual claim visible: that the score *decomposes*. The
 * reader saw a number (72), then six unrelated bars, and had to take on faith
 * that one was the sum of the others.
 *
 * ── What this does instead ───────────────────────────────────────────────
 * The score is a gauge, and the gauge arc is physically built out of one
 * segment per contributing signal, sized by its contribution. You can see the
 * 72 being assembled from named parts. Hovering or focusing a signal isolates
 * its segment in the arc, so "which named signals contributed and by how much"
 * becomes a direct manipulation rather than a sentence.
 *
 * The numbers are illustrative and labelled as such.
 */
import * as React from "react";
import { motion } from "motion/react";
import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { EXAMPLE_RISK_SCORE, RISK_SIGNALS } from "./data";
import {
  EASE_OUT_EXPO,
  FieldLabel,
  PANEL,
  SpotlightCard,
  useCountUp,
  usePrefersReducedMotion,
} from "./verify-ui";

const CONTRIBUTING = RISK_SIGNALS.filter((s) => s.contribution > 0);
const DORMANT = RISK_SIGNALS.filter((s) => s.contribution === 0);

/* ─── Gauge geometry ─── */

const SIZE = 232;
const CX = SIZE / 2;
const CY = SIZE / 2 + 8;
const R = 92;
const SWEEP = 264;
const START = -SWEEP / 2;

function polar(r: number, deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
}

function arc(fromDeg: number, toDeg: number, r = R) {
  const a = polar(r, fromDeg);
  const b = polar(r, toDeg);
  const large = Math.abs(toDeg - fromDeg) > 180 ? 1 : 0;
  return `M ${a.x} ${a.y} A ${r} ${r} 0 ${large} 1 ${b.x} ${b.y}`;
}

/** Cumulative start angle for each contributing signal. */
const SEGMENTS = (() => {
  let cum = 0;
  return CONTRIBUTING.map((signal) => {
    const from = START + (cum / 100) * SWEEP;
    cum += signal.contribution;
    const to = START + (cum / 100) * SWEEP;
    return { id: signal.id, from, to, signal };
  });
})();

/* ─── Score gauge ─── */

export function RiskDecomposition({
  activeSignal,
  onActiveSignal,
}: {
  activeSignal: string | null;
  onActiveSignal: (id: string | null) => void;
}) {
  const reduced = usePrefersReducedMotion();
  const { ref, value } = useCountUp(EXAMPLE_RISK_SCORE, 1100);

  return (
    <div ref={ref} className={cn(PANEL, "p-5 sm:p-6")}>
      <FieldLabel>Illustrative risk score</FieldLabel>

      {/* Gauge */}
      <div className="relative mx-auto mt-2 w-full max-w-[232px]">
        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="w-full overflow-visible" role="presentation">
          {/* Track */}
          <path
            d={arc(START, START + SWEEP)}
            fill="none"
            stroke="oklch(0.15 0.01 250 / 0.07)"
            strokeWidth={14}
            strokeLinecap="round"
          />

          {/* One segment per contributing signal */}
          {SEGMENTS.map((seg, i) => {
            const dimmed = activeSignal !== null && activeSignal !== seg.id;
            const isActive = activeSignal === seg.id;

            return (
              <motion.path
                key={seg.id}
                d={arc(seg.from, seg.to)}
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth={isActive ? 17 : 14}
                strokeLinecap="butt"
                initial={reduced ? false : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: reduced ? 0 : 0.55,
                  delay: reduced ? 0 : 0.2 + i * 0.11,
                  ease: EASE_OUT_EXPO,
                }}
                style={{
                  opacity: dimmed ? 0.18 : 1 - i * 0.11,
                  transition: "opacity 200ms, stroke-width 200ms",
                  filter: isActive
                    ? "drop-shadow(0 0 8px oklch(0.72 0.19 148 / 0.55))"
                    : undefined,
                }}
              />
            );
          })}

          {/* Hairline separators between segments */}
          {SEGMENTS.slice(1).map((seg) => {
            const inner = polar(R - 8, seg.from);
            const outer = polar(R + 8, seg.from);
            return (
              <line
                key={`sep-${seg.id}`}
                x1={inner.x}
                y1={inner.y}
                x2={outer.x}
                y2={outer.y}
                stroke="white"
                strokeWidth={1.5}
              />
            );
          })}
        </svg>

        {/* Readout */}
        <div className="pointer-events-none absolute inset-x-0 top-[46%] flex -translate-y-1/2 flex-col items-center">
          <div className="flex items-baseline gap-1">
            <span className="text-[46px] font-semibold leading-none tracking-[-0.04em] tabular-nums text-ink">
              {value}
            </span>
            <span className="text-[15px] font-medium text-ink-muted">/ 100</span>
          </div>
          <span className="mt-1.5 font-mono text-[11px] text-ink-muted/80">
            {CONTRIBUTING.length} of {RISK_SIGNALS.length} signals
          </span>
        </div>
      </div>

      {/* Legend — hovering a row isolates its arc segment */}
      <ul className="mt-1 flex list-none flex-col gap-0.5 p-0">
        {CONTRIBUTING.map((signal, i) => {
          const dimmed = activeSignal !== null && activeSignal !== signal.id;

          return (
            <li key={signal.id}>
              <button
                type="button"
                onMouseEnter={() => onActiveSignal(signal.id)}
                onMouseLeave={() => onActiveSignal(null)}
                onFocus={() => onActiveSignal(signal.id)}
                onBlur={() => onActiveSignal(null)}
                aria-label={`${signal.name} contributed ${signal.contribution} of ${EXAMPLE_RISK_SCORE} points`}
                className={cn(
                  "flex w-full items-center gap-2.5 rounded-lg px-2 py-1.5 text-left",
                  "transition-all duration-200 hover:bg-primary/[0.05]",
                  "motion-reduce:transition-none",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  dimmed && "opacity-45",
                )}
              >
                <span
                  aria-hidden="true"
                  className="size-2 shrink-0 rounded-full bg-primary"
                  style={{ opacity: 1 - i * 0.11 }}
                />
                <span className="min-w-0 flex-1 truncate text-[12.5px] text-ink">
                  {signal.name}
                </span>
                <span className="shrink-0 font-mono text-[12px] tabular-nums text-ink-muted">
                  +{signal.contribution}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="mt-3 flex items-start gap-2 rounded-xl bg-surface-2/70 px-3.5 py-2.5">
        <Minus className="mt-0.5 size-3.5 shrink-0 text-ink-muted" strokeWidth={2.5} aria-hidden="true" />
        <span className="text-[12.5px] leading-[1.5] text-ink-muted">
          Not a model output — the arc above is built from these named parts. The
          remaining {DORMANT.length} signals were evaluated and did not trigger.
        </span>
      </div>
    </div>
  );
}

/* ─── The ten published signals ─── */

export function RiskSignalList({
  activeSignal,
  onActiveSignal,
}: {
  activeSignal: string | null;
  onActiveSignal: (id: string | null) => void;
}) {
  return (
    <ol className="grid list-none grid-cols-1 gap-3 p-0 md:grid-cols-2">
      {RISK_SIGNALS.map((signal, i) => {
        const triggered = signal.contribution > 0;
        const isActive = activeSignal === signal.id;
        const dimmed = activeSignal !== null && !isActive;

        return (
          <li
            key={signal.id}
            onMouseEnter={() => triggered && onActiveSignal(signal.id)}
            onMouseLeave={() => triggered && onActiveSignal(null)}
          >
            <SpotlightCard
              className={cn(
                "flex h-full gap-3.5 rounded-[20px] border bg-white p-4 sm:p-[18px]",
                "transition-all duration-300 motion-reduce:transition-none",
                "hover:-translate-y-1 hover:shadow-[0_18px_40px_-14px_rgba(16,24,40,0.18)]",
                "motion-reduce:hover:translate-y-0",
                triggered ? "border-primary/25" : "border-black/[0.06]",
                isActive && "border-primary/50 shadow-[0_18px_40px_-14px_rgba(22,193,95,0.3)]",
                dimmed && "opacity-55",
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-[10.5px] font-bold",
                  "transition-colors duration-200 motion-reduce:transition-none",
                  triggered ? "bg-primary text-white" : "bg-black/[0.04] text-ink-muted",
                )}
              >
                {triggered ? (
                  <Check className="size-3.5" strokeWidth={3} />
                ) : (
                  String(i + 1).padStart(2, "0")
                )}
              </span>

              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="text-[14px] font-semibold leading-snug text-ink">
                    {signal.name}
                  </span>
                  {triggered ? (
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 font-mono text-[10.5px] font-semibold tabular-nums text-primary">
                      +{signal.contribution}
                    </span>
                  ) : (
                    <span className="rounded-full bg-black/[0.04] px-2 py-0.5 font-mono text-[10.5px] font-semibold text-ink-muted/70">
                      no trigger
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-[13px] leading-[1.55] text-ink-muted">
                  {signal.detail}
                </p>
              </div>
            </SpotlightCard>
          </li>
        );
      })}
    </ol>
  );
}
