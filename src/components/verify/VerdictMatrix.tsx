/**
 * The closed set of seven possible results, plus the lifecycle timeline that
 * produces four of them.
 *
 * ── Critique of the version this replaces ──────────────────────────────────
 * Seven cards in a three-column grid leaves a hole in the last row, and the
 * previous pass filled it with an eighth "there is no eighth result" card. That
 * was a layout problem solved with copy — and on a page whose entire thesis is
 * that the result set is closed and exactly seven, an eighth card is precisely
 * the wrong object to draw.
 *
 * ── What this does instead ────────────────────────────────────────────────
 * The seven are asymmetric in meaning, so the layout is asymmetric too:
 * `verified` is the single confirmed outcome and gets a wide feature card; the
 * other six are all reasons a scan did not reach confirmation and sit in an
 * even 3x2 grid beneath it. Seven items, no filler, and the hierarchy now
 * encodes something true instead of balancing a grid.
 *
 * WORDING RULE: labels are rendered verbatim from data.ts. Do not reword,
 * pluralise or substitute them.
 */
import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  LIFECYCLE_STATES,
  SEVERITY_META,
  VERDICT_RESULTS,
  type VerdictResult,
  type VerdictSeverity,
} from "./data";
import { SEVERITY_TONES } from "./severity";
import {
  EASE_OUT_EXPO,
  FieldLabel,
  PANEL,
  SpotlightCard,
  staggerChild,
  staggerParent,
  usePrefersReducedMotion,
} from "./verify-ui";

const TIER_ORDER: VerdictSeverity[] = [
  "confirmed",
  "inconclusive",
  "restricted",
  "critical",
];

const PRIMARY_RESULT = VERDICT_RESULTS[0];
const OTHER_RESULTS = VERDICT_RESULTS.slice(1);

/* ─── Severity legend ─── */

export function SeverityLegend({ className }: { className?: string }) {
  return (
    <ul className={cn("flex list-none flex-wrap justify-center gap-2 p-0", className)}>
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
              <span aria-hidden="true" className={cn("size-1.5 rounded-full", tone.fill)} />
              {meta.label}
              <span className="tabular-nums opacity-55">{count}</span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}

/* ─── Verdict cards ─── */

function ResultCard({ result, feature = false }: { result: VerdictResult; feature?: boolean }) {
  const Icon = result.icon;
  const tone = SEVERITY_TONES[result.severity];
  const meta = SEVERITY_META[result.severity];

  return (
    <SpotlightCard
      className={cn(
        "flex h-full flex-col rounded-[20px] border",
        "transition-all duration-300 motion-reduce:transition-none",
        "hover:-translate-y-1 hover:shadow-[0_18px_40px_-12px_rgba(16,24,40,0.16)]",
        "motion-reduce:hover:translate-y-0",
        tone.surface,
        feature ? "p-6 sm:p-7" : "p-5",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          aria-hidden="true"
          className={cn(
            "flex shrink-0 items-center justify-center rounded-xl bg-white/70 ring-1 ring-black/[0.04]",
            feature ? "size-11" : "size-9",
          )}
        >
          <Icon className={cn(feature ? "size-[22px]" : "size-[18px]", tone.accent)} strokeWidth={1.75} />
        </span>
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
      <h3
        className={cn(
          "font-semibold leading-tight tracking-[-0.01em]",
          tone.accent,
          feature ? "mt-5 text-[24px] sm:text-[28px]" : "mt-4 text-[17px]",
        )}
      >
        {result.label}
      </h3>

      <p
        className={cn(
          "leading-[1.55] text-ink-muted",
          feature ? "mt-3 max-w-[42ch] text-[15px]" : "mt-2 text-[13.5px]",
        )}
      >
        {result.description}
      </p>

      <p
        className={cn(
          "mt-auto leading-[1.5] text-ink-muted/85",
          feature ? "pt-6 text-[13.5px]" : "pt-4 text-[12.5px]",
        )}
      >
        <span className="font-semibold text-ink/70">What it means: </span>
        {result.guidance}
      </p>
    </SpotlightCard>
  );
}

export function VerdictGrid() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="flex flex-col gap-3">
      {/* The one confirmed outcome */}
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-64px" }}
        transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
      >
        <ResultCard result={PRIMARY_RESULT} feature />
      </motion.div>

      {/* The six ways a scan does not reach confirmation */}
      <motion.ul
        variants={staggerParent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-64px" }}
        className="grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 lg:grid-cols-3"
      >
        {OTHER_RESULTS.map((result) => (
          <motion.li key={result.label} variants={reduced ? undefined : staggerChild}>
            <ResultCard result={result} />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

/* ─── Lifecycle timeline (interactive) ─── */

export function LifecycleTrack() {
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = React.useState(0);
  const tabRefs = React.useRef<Array<HTMLButtonElement | null>>([]);

  const onKeyDown = (event: React.KeyboardEvent) => {
    const last = LIFECYCLE_STATES.length - 1;
    let next: number | null = null;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = active === last ? 0 : active + 1;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = active === 0 ? last : active - 1;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = last;

    if (next !== null) {
      event.preventDefault();
      setActive(next);
      tabRefs.current[next]?.focus();
    }
  };

  const current = LIFECYCLE_STATES[active];
  const progress = (active / (LIFECYCLE_STATES.length - 1)) * 100;

  return (
    <div className={cn(PANEL, "p-6 sm:p-7")}>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-[17px] font-semibold text-ink">
          Where lifecycle results come from
        </h3>
        <span className="font-mono text-[11.5px] text-ink-muted">Stage 05</span>
      </div>

      <p className="mt-2 max-w-[680px] text-[14px] leading-[1.6] text-ink-muted">
        Four of the seven results are lifecycle states carried on the passport
        itself. A record can leave the active state at any point, and the pipeline
        reads that state on every single scan — not just at issuance.
      </p>

      {/* Track */}
      <div
        role="tablist"
        aria-label="Passport lifecycle states"
        onKeyDown={onKeyDown}
        className="relative mt-9"
      >
        {/* Rail */}
        <span
          aria-hidden="true"
          className="absolute left-0 right-0 top-[7px] h-[2px] rounded-full bg-black/[0.07]"
        />
        <motion.span
          aria-hidden="true"
          className="absolute left-0 top-[7px] h-[2px] rounded-full bg-primary"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: reduced ? 0 : 0.45, ease: EASE_OUT_EXPO }}
        />

        <div className="relative grid grid-cols-3 gap-y-6 sm:grid-cols-6">
          {LIFECYCLE_STATES.map((state, i) => {
            const selected = i === active;
            const reached = i <= active;

            return (
              <button
                key={state.name}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                id={`lifecycle-tab-${i}`}
                aria-selected={selected}
                aria-controls="lifecycle-panel"
                tabIndex={selected ? 0 : -1}
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "group flex flex-col items-start gap-3 rounded-lg pr-2 text-left",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                )}
              >
                <span className="relative flex h-4 items-center">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "size-4 rounded-full border-2 bg-white transition-all duration-300",
                      "motion-reduce:transition-none",
                      selected
                        ? "border-primary shadow-[0_0_0_4px_rgba(22,193,95,0.15)]"
                        : reached
                          ? "border-primary"
                          : "border-black/15 group-hover:border-primary/40",
                    )}
                  >
                    {selected ? (
                      <motion.span
                        layoutId="lifecycle-dot"
                        className="block size-full rounded-full bg-primary"
                        transition={{ duration: reduced ? 0 : 0.3, ease: EASE_OUT_EXPO }}
                      />
                    ) : null}
                  </span>
                </span>

                <span
                  className={cn(
                    "text-[13px] font-semibold transition-colors duration-200",
                    "motion-reduce:transition-none",
                    selected ? "text-ink" : "text-ink-muted group-hover:text-ink",
                  )}
                >
                  {state.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detail */}
      <div
        role="tabpanel"
        id="lifecycle-panel"
        aria-labelledby={`lifecycle-tab-${active}`}
        className="mt-7 min-h-[76px] rounded-2xl border border-black/[0.06] bg-surface-2/50 p-4 sm:p-5"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current.name}
            initial={reduced ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: EASE_OUT_EXPO }}
          >
            <FieldLabel>Lifecycle state</FieldLabel>
            <div className="mt-1 flex flex-wrap items-center gap-2">
              <span className="text-[16px] font-semibold text-ink">{current.name}</span>
              <ArrowRight className="size-3.5 text-primary" strokeWidth={2} aria-hidden="true" />
              <span className="text-[13.5px] leading-[1.55] text-ink-muted">
                {current.detail}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
