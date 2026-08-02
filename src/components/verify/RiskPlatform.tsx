/**
 * Risk platform — ten published signals, and the explainability guarantee.
 *
 * The PRD's claim is that a risk score "decomposes into which named signals
 * contributed, never a black-box number". The previous version stated that in a
 * callout box but never showed it, so the strongest part of the claim was
 * invisible. This renders the decomposition literally: a score, and the named
 * signals that add up to exactly that score.
 *
 * The numbers are illustrative and labelled as such.
 */
import * as React from "react";
import { motion, useInView } from "motion/react";
import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { EXAMPLE_RISK_SCORE, RISK_SIGNALS } from "./data";
import { EASE_OUT_EXPO, FieldLabel, usePrefersReducedMotion } from "./verify-ui";

const CONTRIBUTING = RISK_SIGNALS.filter((s) => s.contribution > 0);
const MAX_CONTRIBUTION = Math.max(...CONTRIBUTING.map((s) => s.contribution));

/* ─── Score decomposition ─── */

export function RiskDecomposition() {
  const reduced = usePrefersReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  const [score, setScore] = React.useState(reduced ? EXAMPLE_RISK_SCORE : 0);

  React.useEffect(() => {
    if (reduced) {
      setScore(EXAMPLE_RISK_SCORE);
      return;
    }
    if (!inView) return;

    let frame: number;
    const start = performance.now();
    const DURATION = 900;

    const tick = (now: number) => {
      const t = Math.min((now - start) / DURATION, 1);
      // easeOutExpo
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setScore(Math.round(eased * EXAMPLE_RISK_SCORE));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduced]);

  return (
    <div
      ref={ref}
      className="rounded-[24px] border border-black/5 bg-white p-5 shadow-[0_18px_50px_rgba(0,0,0,0.07)] sm:p-6"
    >
      <div className="flex items-start justify-between gap-4 border-b border-black/5 pb-5">
        <div>
          <FieldLabel>Illustrative risk score</FieldLabel>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span className="text-[44px] font-semibold leading-none tracking-[-0.04em] text-ink tabular-nums">
              {score}
            </span>
            <span className="text-[16px] font-medium text-ink-muted">/ 100</span>
          </div>
        </div>

        <div className="max-w-[190px] text-right">
          <span className="text-[12.5px] leading-[1.5] text-ink-muted">
            Not a model output. The sum of{" "}
            <span className="font-semibold text-ink">
              {CONTRIBUTING.length} named signals
            </span>{" "}
            below.
          </span>
        </div>
      </div>

      {/* Contribution bars */}
      <ul className="mt-5 flex list-none flex-col gap-3.5 p-0">
        {CONTRIBUTING.map((signal, i) => (
          <li key={signal.id} className="flex flex-col gap-1.5">
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-[13px] font-medium leading-tight text-ink">
                {signal.name}
              </span>
              <span className="shrink-0 font-mono text-[12px] tabular-nums text-ink-muted">
                +{signal.contribution}
              </span>
            </div>
            <div
              className="h-1.5 w-full overflow-hidden rounded-full bg-black/[0.05]"
              role="img"
              aria-label={`${signal.name} contributed ${signal.contribution} of ${EXAMPLE_RISK_SCORE} points`}
            >
              <motion.div
                className="h-full rounded-full bg-primary"
                initial={reduced ? false : { width: 0 }}
                whileInView={{
                  width: `${(signal.contribution / MAX_CONTRIBUTION) * 100}%`,
                }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  duration: reduced ? 0 : 0.7,
                  delay: reduced ? 0 : 0.15 + i * 0.07,
                  ease: EASE_OUT_EXPO,
                }}
              />
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center gap-2 rounded-xl bg-surface-2/70 px-3.5 py-2.5">
        <Minus className="size-3.5 shrink-0 text-ink-muted" strokeWidth={2.5} aria-hidden="true" />
        <span className="text-[12.5px] text-ink-muted">
          The remaining {RISK_SIGNALS.length - CONTRIBUTING.length} signals were
          evaluated and did not trigger.
        </span>
      </div>
    </div>
  );
}

/* ─── The ten published signals ─── */

export function RiskSignalList() {
  return (
    <ol className="grid list-none grid-cols-1 gap-2.5 p-0 lg:grid-cols-2">
      {RISK_SIGNALS.map((signal, i) => {
        const triggered = signal.contribution > 0;

        return (
          <li key={signal.id}>
            <div
              className={cn(
                "flex h-full gap-3.5 rounded-[20px] border bg-white p-4 sm:p-[18px]",
                "transition-all duration-300 motion-reduce:transition-none",
                "hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_12px_30px_rgba(22,193,95,0.09)]",
                "motion-reduce:hover:translate-y-0",
                triggered ? "border-primary/20" : "border-black/6",
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold",
                  triggered
                    ? "bg-primary text-white"
                    : "bg-black/[0.04] text-ink-muted",
                )}
              >
                {triggered ? (
                  <Check className="size-3.5" strokeWidth={3} />
                ) : (
                  String(i + 1).padStart(2, "0")
                )}
              </span>

              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-[14px] font-semibold leading-snug text-ink">
                    {signal.name}
                  </span>
                  {triggered && (
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 font-mono text-[10.5px] font-semibold text-primary">
                      +{signal.contribution}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-[13px] leading-[1.55] text-ink-muted">
                  {signal.detail}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
