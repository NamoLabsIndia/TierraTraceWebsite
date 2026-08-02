/**
 * Eight-stage verification pipeline.
 *
 * Replaces the previous 4x2 card grid, which read as eight unrelated tiles and
 * lost the one thing that matters about the pipeline: it is *sequential* and it
 * *fails closed*. This renders it as an ordered, self-playing trace so a visitor
 * sees the sequence and the sub-three-second budget rather than reading about it.
 *
 * Presentation only — no request is made, nothing is fetched. The trace is an
 * illustration of the pipeline described in the PRD and is labelled as such.
 */
import * as React from "react";
import { motion, useInView } from "motion/react";
import { Check, Lock, RotateCw, Timer } from "lucide-react";
import { cn } from "@/lib/utils";
import { PIPELINE_STAGES } from "./data";
import { usePrefersReducedMotion, FieldLabel } from "./verify-ui";

type StageStatus = "pending" | "running" | "passed";

/** ~280ms per stage keeps the full trace inside the sub-three-second budget. */
const STAGE_MS = 280;
const HOLD_MS = 2400;
const TOTAL = PIPELINE_STAGES.length;

/* ─── Stage indicator ─── */

function StageIndicator({ status }: { status: StageStatus }) {
  if (status === "passed") {
    return (
      <span
        aria-hidden="true"
        className={cn(
          "flex size-7 shrink-0 items-center justify-center rounded-full",
          "border border-primary bg-primary text-white shadow-[0_2px_8px_rgba(22,193,95,0.35)]",
          "transition-all duration-300 motion-reduce:transition-none",
        )}
      >
        <Check className="size-4" strokeWidth={3} />
      </span>
    );
  }

  if (status === "running") {
    return (
      <span
        aria-hidden="true"
        className={cn(
          "flex size-7 shrink-0 items-center justify-center rounded-full",
          "border border-primary/40 bg-white shadow-[0_0_0_4px_rgba(22,193,95,0.10)]",
          "transition-all duration-300 motion-reduce:transition-none",
        )}
      >
        <span className="size-2.5 rounded-full bg-primary motion-safe:animate-pulse" />
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className="flex size-7 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white"
    >
      <span className="size-1.5 rounded-full bg-black/15" />
    </span>
  );
}

/* ─── The trace card ─── */

export function VerificationPipeline() {
  const reduced = usePrefersReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35 });

  /**
   * `completed` = number of stages that have passed.
   * Initial value is TOTAL so server-rendered and reduced-motion output shows
   * the finished, meaningful state rather than an empty skeleton.
   */
  const [completed, setCompleted] = React.useState(TOTAL);
  const [runId, setRunId] = React.useState(0);

  React.useEffect(() => {
    if (reduced || !inView) return;

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    const play = () => {
      setCompleted(0);
      let n = 0;

      const tick = () => {
        if (cancelled) return;
        n += 1;
        setCompleted(n);
        if (n < TOTAL) {
          timer = setTimeout(tick, STAGE_MS);
        } else {
          timer = setTimeout(play, HOLD_MS);
        }
      };

      timer = setTimeout(tick, STAGE_MS);
    };

    play();
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [reduced, inView, runId]);

  const isComplete = completed >= TOTAL;
  const elapsed = (Math.min(completed, TOTAL) * STAGE_MS) / 1000;

  const statusFor = (index: number): StageStatus => {
    if (index < completed) return "passed";
    if (index === completed && !isComplete) return "running";
    return "pending";
  };

  return (
    <div
      ref={ref}
      className="rounded-[24px] border border-black/5 bg-white p-5 shadow-[0_18px_50px_rgba(0,0,0,0.07)] sm:p-6"
      role="group"
      aria-label="Illustrative eight-stage verification trace"
    >
      {/* Card header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/5 pb-4">
        <div className="flex flex-col gap-1">
          <FieldLabel>Illustrative trace</FieldLabel>
          <span className="font-mono text-[13px] text-ink">
            01/09521/00012345/21/A7F2
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-2.5 py-1 font-mono text-[12px] text-ink-muted">
            <Timer className="size-3.5" strokeWidth={2} />
            <time dateTime={`PT${elapsed.toFixed(2)}S`}>{elapsed.toFixed(2)}s</time>
          </span>

          <button
            type="button"
            onClick={() => setRunId((r) => r + 1)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-2.5 py-1",
              "text-[12px] font-medium text-ink-muted transition-colors",
              "hover:border-primary/30 hover:text-ink",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
            )}
          >
            <RotateCw className="size-3.5" strokeWidth={2} />
            Replay
          </button>
        </div>
      </div>

      {/*
        Stage list.

        Deliberately NOT an aria-live region: the trace loops continuously, and a
        live region here would re-announce eight status changes to a screen
        reader every few seconds. The stage names and descriptions are static,
        readable content; only the pass/pending styling animates, and every
        indicator that carries it is aria-hidden.
      */}
      <ol className="mt-4 flex list-none flex-col gap-1 p-0">
        {PIPELINE_STAGES.map((stage, index) => {
          const status = statusFor(index);
          const isRunning = status === "running";

          return (
            <li
              key={stage.step}
              aria-current={isRunning ? "step" : undefined}
              className="relative"
            >
              {index < TOTAL - 1 && (
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute left-[1.6875rem] top-9 h-[calc(100%-1rem)] w-px transition-colors duration-300",
                    "motion-reduce:transition-none",
                    index < completed ? "bg-primary/35" : "bg-black/8",
                  )}
                />
              )}

              <div
                className={cn(
                  "relative flex items-start gap-3 rounded-xl px-2.5 py-2 transition-colors duration-300",
                  "motion-reduce:transition-none",
                  isRunning && "bg-primary/5",
                )}
              >
                <span className="relative z-10 mt-0.5">
                  <StageIndicator status={status} />
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                    <span
                      className={cn(
                        "font-mono text-[11px] tabular-nums transition-colors duration-300",
                        status === "pending" ? "text-ink-muted/50" : "text-primary",
                      )}
                    >
                      {String(stage.step).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "text-[14px] font-semibold transition-colors duration-300",
                        status === "pending" ? "text-ink-muted/70" : "text-ink",
                      )}
                    >
                      {stage.name}
                    </span>
                  </div>

                  {/* Grid-rows trick: animates height without measuring the DOM. */}
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                      "motion-reduce:transition-none",
                      status === "pending"
                        ? "grid-rows-[0fr] opacity-0"
                        : "grid-rows-[1fr] opacity-100",
                    )}
                    aria-hidden={status === "pending"}
                  >
                    <div className="overflow-hidden">
                      <p className="pt-0.5 text-[13px] leading-[1.5] text-ink-muted">
                        {stage.description}
                      </p>
                      <p className="mt-1 font-mono text-[11.5px] text-ink-muted/70">
                        {stage.check}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      {/* Result footer — the only verdict word permitted here is "verified". */}
      <div
        className={cn(
          "mt-4 flex items-center gap-2.5 rounded-2xl border px-4 py-3 transition-all duration-500",
          "motion-reduce:transition-none",
          isComplete
            ? "border-primary/25 bg-[#F4FCF7]"
            : "border-black/5 bg-surface-2/60",
        )}
      >
        {isComplete ? (
          <>
            <Check className="size-4 shrink-0 text-primary" strokeWidth={3} />
            <span className="text-[13.5px] font-semibold text-ink">verified</span>
            <span className="text-[13px] text-ink-muted">
              — all eight stages passed
            </span>
          </>
        ) : (
          <>
            <Lock className="size-4 shrink-0 text-ink-muted" strokeWidth={2} />
            <span className="text-[13px] text-ink-muted">
              No result is issued until every stage has passed.
            </span>
          </>
        )}
      </div>
    </div>
  );
}

/* ─── Compact horizontal rail, used in the hero ─── */

export function PipelineRail({ className }: { className?: string }) {
  const reduced = usePrefersReducedMotion();

  return (
    <ol className={cn("flex list-none flex-wrap items-center gap-1.5 p-0", className)}>
      {PIPELINE_STAGES.map((stage, i) => (
        <React.Fragment key={stage.step}>
          <motion.li
            initial={reduced ? false : { opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.05, duration: 0.4 }}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border border-black/8 bg-white/80 px-3 py-1.5",
              "text-[12px] font-medium text-ink-muted backdrop-blur-sm",
            )}
          >
            <span className="font-mono text-[10.5px] text-primary">
              {String(stage.step).padStart(2, "0")}
            </span>
            {stage.name}
          </motion.li>
          {i < PIPELINE_STAGES.length - 1 && (
            <span aria-hidden="true" className="text-ink-muted/30">
              ·
            </span>
          )}
        </React.Fragment>
      ))}
    </ol>
  );
}
