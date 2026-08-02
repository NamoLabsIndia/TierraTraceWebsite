/**
 * The closed set of seven possible results, plus the lifecycle track that
 * produces four of them.
 *
 * Two problems with the previous version are fixed here:
 *  1. Seven results were rendered in seven unrelated hues (emerald, amber,
 *     slate, orange, red, slate, purple). That reads as decoration and gives no
 *     reliable cue about how serious a result is. They are now grouped into four
 *     named severity tiers drawn from the existing palette.
 *  2. There was no visual account of *why* `withdrawn`, `recalled`, `expired`
 *     and `suspended` exist. The lifecycle track now shows that.
 *
 * WORDING RULE: the labels below are rendered verbatim from data.ts. Do not
 * reword, pluralise or substitute them.
 */
import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  LIFECYCLE_STATES,
  SEVERITY_META,
  VERDICT_RESULTS,
  type VerdictSeverity,
} from "./data";
import { SEVERITY_TONES } from "./severity";
import { staggerChild, staggerParent, usePrefersReducedMotion } from "./verify-ui";

const TIER_ORDER: VerdictSeverity[] = [
  "confirmed",
  "inconclusive",
  "restricted",
  "critical",
];

/* ─── Severity legend ─── */

export function SeverityLegend({ className }: { className?: string }) {
  return (
    <ul className={cn("flex list-none flex-wrap gap-2 p-0", className)}>
      {TIER_ORDER.map((tier) => {
        const tone = SEVERITY_TONES[tier];
        const meta = SEVERITY_META[tier];
        const count = VERDICT_RESULTS.filter((r) => r.severity === tier).length;

        return (
          <li key={tier}>
            <span
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[12.5px] font-medium",
                tone.pill,
              )}
            >
              <span
                aria-hidden="true"
                className={cn("size-1.5 rounded-full", tone.fill)}
              />
              {meta.label}
              <span className="opacity-60">{count}</span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}

/* ─── Verdict cards ─── */

export function VerdictGrid() {
  const reduced = usePrefersReducedMotion();

  return (
    <motion.ul
      variants={staggerParent}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-64px" }}
      className="grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 lg:grid-cols-3"
    >
      {VERDICT_RESULTS.map((result) => {
        const Icon = result.icon;
        const tone = SEVERITY_TONES[result.severity];
        const meta = SEVERITY_META[result.severity];

        return (
          <motion.li
            key={result.label}
            variants={reduced ? undefined : staggerChild}
            className={cn(
              "group flex flex-col rounded-[20px] border p-5",
              "transition-all duration-300 motion-reduce:transition-none",
              "hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(0,0,0,0.07)]",
              "motion-reduce:hover:translate-y-0",
              tone.surface,
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <Icon
                className={cn("size-[22px] shrink-0", tone.accent)}
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-[0.06em]",
                  tone.pill,
                )}
              >
                {meta.label}
              </span>
            </div>

            {/* Verbatim verdict label — governed by the wording rule. */}
            <h3 className={cn("mt-4 text-[17px] font-semibold leading-tight", tone.accent)}>
              {result.label}
            </h3>

            <p className="mt-2 text-[13.5px] leading-[1.55] text-ink-muted">
              {result.description}
            </p>

            <p className="mt-auto pt-4 text-[12.5px] leading-[1.5] text-ink-muted/85">
              <span className="font-semibold text-ink/70">What it means: </span>
              {result.guidance}
            </p>
          </motion.li>
        );
      })}

      {/* Eighth cell: states plainly that the set is closed. */}
      <motion.li
        variants={reduced ? undefined : staggerChild}
        className={cn(
          "flex flex-col justify-center rounded-[20px] border border-dashed border-black/12",
          "bg-transparent p-5 text-center sm:col-span-2 lg:col-span-1",
        )}
      >
        <span className="text-[13.5px] font-semibold text-ink">
          There is no eighth result.
        </span>
        <p className="mt-2 text-[13px] leading-[1.55] text-ink-muted">
          No free-text answers, no ambiguous messages, no invented verdicts. Every
          scan resolves to exactly one of the seven above.
        </p>
      </motion.li>
    </motion.ul>
  );
}

/* ─── Lifecycle track ─── */

export function LifecycleTrack() {
  return (
    <div className="rounded-[24px] border border-black/5 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:p-7">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-[17px] font-semibold text-ink">
          Where lifecycle results come from
        </h3>
        <span className="text-[12.5px] text-ink-muted">
          Stage 05 of the pipeline
        </span>
      </div>

      <p className="mt-2 max-w-[680px] text-[14px] leading-[1.6] text-ink-muted">
        Four of the seven results are lifecycle states carried on the passport
        itself. A record can leave the active state at any point, and the pipeline
        reads that state on every single scan — not just at issuance.
      </p>

      <ol className="mt-7 grid list-none grid-cols-2 gap-x-4 gap-y-6 p-0 sm:grid-cols-3 lg:grid-cols-6">
        {LIFECYCLE_STATES.map((state, i) => {
          const isActivePath = i <= 1;

          return (
            <li key={state.name} className="relative flex flex-col gap-2">
              {/* Track line */}
              <div className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    "size-2.5 shrink-0 rounded-full ring-4",
                    isActivePath
                      ? "bg-primary ring-primary/15"
                      : "bg-ink-muted/35 ring-black/[0.04]",
                  )}
                />
                <span
                  aria-hidden="true"
                  className={cn(
                    "h-px flex-1",
                    i === LIFECYCLE_STATES.length - 1
                      ? "bg-transparent"
                      : isActivePath
                        ? "bg-primary/25"
                        : "bg-black/8",
                  )}
                />
              </div>

              <span className="text-[13.5px] font-semibold text-ink">
                {state.name}
              </span>
              <span className="text-[12.5px] leading-[1.5] text-ink-muted">
                {state.detail}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
