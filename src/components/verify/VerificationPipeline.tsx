/**
 * Eight-stage verification pipeline — horizontal instrument rail.
 *
 * ── Critique of the version this replaces ──────────────────────────────────
 * It rendered the eight stages as a vertical <ol>, one row each. That was
 * accurate but cost ~700px of height to carry a single idea ("these run in
 * order and it fails closed"), and every row had to reserve space for a
 * description only one row shows at a time. The panel dominated its own
 * section, pushed the fail-closed narrative off-screen on laptops, and read
 * like a log file rather than an instrument.
 *
 * ── What this does instead ────────────────────────────────────────────────
 * Sequence moves to the x-axis, where eight steps cost ~72px instead of ~560px.
 * A single fixed-height detail panel shows the active stage, so the card never
 * reflows as the trace advances — total height is ~340px and constant. The rail
 * doubles as the progress indicator: a beam sweeps across it.
 *
 * Auto-plays, but any click or arrow key hands control to the reader and stops
 * the loop — the animation is never fighting the person using it.
 *
 * Presentation only: nothing is fetched, no request is made. The trace is an
 * illustration of the pipeline described in the PRD and is labelled as such.
 */
import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Lock, RotateCw, Timer } from "lucide-react";
import { cn } from "@/lib/utils";
import { PIPELINE_STAGES } from "./data";
import {
  EASE_OUT_EXPO,
  FieldLabel,
  PANEL,
  usePrefersReducedMotion,
} from "./verify-ui";

/** ~280ms per stage keeps the full trace inside the sub-three-second budget. */
const STAGE_MS = 280;
const HOLD_MS = 2600;
const TOTAL = PIPELINE_STAGES.length;

export function VerificationPipeline() {
  const reduced = usePrefersReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const tabRefs = React.useRef<Array<HTMLButtonElement | null>>([]);

  /** Stages that have passed. Starts complete so SSR renders a meaningful card. */
  const [completed, setCompleted] = React.useState(TOTAL);
  /** Which stage the detail panel is showing. */
  const [focused, setFocused] = React.useState(TOTAL - 1);
  /** Set once the reader takes over; stops the loop for good. */
  const [manual, setManual] = React.useState(false);
  const [runId, setRunId] = React.useState(0);
  const [inView, setInView] = React.useState(false);

  /* Play only while visible — an off-screen loop is wasted work. */
  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (reduced || manual || !inView) return;

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    const play = () => {
      setCompleted(0);
      setFocused(0);
      let n = 0;

      const tick = () => {
        if (cancelled) return;
        n += 1;
        setCompleted(n);
        setFocused(Math.min(n, TOTAL - 1));
        timer = setTimeout(n < TOTAL ? tick : play, n < TOTAL ? STAGE_MS : HOLD_MS);
      };

      timer = setTimeout(tick, STAGE_MS);
    };

    play();
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [reduced, manual, inView, runId]);

  const isComplete = completed >= TOTAL;
  const elapsed = (Math.min(completed, TOTAL) * STAGE_MS) / 1000;
  const stage = PIPELINE_STAGES[focused];

  const select = (index: number) => {
    setManual(true);
    setFocused(index);
    setCompleted(index + 1);
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    const last = TOTAL - 1;
    let next: number | null = null;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = focused === last ? 0 : focused + 1;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = focused === 0 ? last : focused - 1;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = last;

    if (next !== null) {
      event.preventDefault();
      select(next);
      tabRefs.current[next]?.focus();
    }
  };

  const replay = () => {
    setManual(false);
    setCompleted(0);
    setFocused(0);
    setRunId((r) => r + 1);
  };

  return (
    <div ref={ref} className={cn(PANEL, "overflow-hidden")}>
      {/* ── Header: identifier, elapsed, replay ── */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/[0.06] px-5 py-3.5 sm:px-6">
        <div className="min-w-0">
          <FieldLabel>Illustrative trace</FieldLabel>
          <div className="truncate font-mono text-[12.5px] text-ink">
            01/09521/00012345/21/A7F2
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-2.5 py-1 font-mono text-[11.5px] tabular-nums text-ink-muted">
            <Timer className="size-3.5" strokeWidth={2} aria-hidden="true" />
            <time dateTime={`PT${elapsed.toFixed(2)}S`}>{elapsed.toFixed(2)}s</time>
          </span>

          <button
            type="button"
            onClick={replay}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-2.5 py-1",
              "text-[11.5px] font-medium text-ink-muted transition-all duration-200",
              "hover:border-primary/30 hover:text-ink motion-reduce:transition-none",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
            )}
          >
            <RotateCw className="size-3.5" strokeWidth={2} aria-hidden="true" />
            Replay
          </button>
        </div>
      </div>

      {/* ── The rail ── */}
      <div className="px-5 pt-5 sm:px-6">
        <div
          role="tablist"
          aria-label="Verification stages"
          onKeyDown={onKeyDown}
          className="-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {PIPELINE_STAGES.map((s, index) => {
            const passed = index < completed;
            const active = index === focused;

            return (
              <button
                key={s.step}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                role="tab"
                id={`stage-tab-${index}`}
                aria-selected={active}
                aria-controls="stage-panel"
                tabIndex={active ? 0 : -1}
                type="button"
                onClick={() => select(index)}
                className={cn(
                  "group relative flex min-w-[74px] flex-1 flex-col gap-2 rounded-lg px-1.5 pb-1 pt-1.5 text-left",
                  "transition-colors duration-200 motion-reduce:transition-none",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                )}
              >
                {/* Segment bar — the progress instrument itself */}
                <span
                  aria-hidden="true"
                  className="relative h-[3px] w-full overflow-hidden rounded-full bg-black/[0.07]"
                >
                  <motion.span
                    className="absolute inset-y-0 left-0 rounded-full bg-primary"
                    initial={false}
                    animate={{ width: passed ? "100%" : "0%" }}
                    transition={{
                      duration: reduced ? 0 : STAGE_MS / 1000,
                      ease: "linear",
                    }}
                  />
                </span>

                <span className="flex items-center gap-1.5">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "flex size-[15px] shrink-0 items-center justify-center rounded-full",
                      "transition-all duration-300 motion-reduce:transition-none",
                      passed
                        ? "bg-primary text-white"
                        : "border border-black/12 bg-white",
                    )}
                  >
                    {passed ? <Check className="size-2.5" strokeWidth={4} /> : null}
                  </span>
                  <span
                    className={cn(
                      "font-mono text-[10px] tabular-nums transition-colors duration-200",
                      passed ? "text-primary" : "text-ink-muted/45",
                    )}
                  >
                    {String(s.step).padStart(2, "0")}
                  </span>
                </span>

                <span
                  className={cn(
                    "truncate text-[12px] font-semibold transition-colors duration-200",
                    active ? "text-ink" : passed ? "text-ink/70" : "text-ink-muted/60",
                    "group-hover:text-ink",
                  )}
                >
                  {s.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Detail panel: fixed height, so the card never reflows ── */}
      <div
        role="tabpanel"
        id="stage-panel"
        aria-labelledby={`stage-tab-${focused}`}
        className="mx-5 mt-4 min-h-[124px] rounded-2xl border border-black/[0.06] bg-surface-2/50 p-4 sm:mx-6 sm:p-5"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={stage.step}
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease: EASE_OUT_EXPO }}
          >
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-[11px] text-primary">
                Stage {String(stage.step).padStart(2, "0")}
              </span>
              <span className="text-[15px] font-semibold text-ink">{stage.name}</span>
            </div>

            <p className="mt-2 text-[13.5px] leading-[1.55] text-ink-muted">
              {stage.description}
            </p>

            <p className="mt-2.5 inline-block rounded-md bg-white px-2 py-1 font-mono text-[11.5px] text-ink-muted/80 ring-1 ring-black/[0.05]">
              {stage.check}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Result footer — "verified" is the only verdict word permitted here ── */}
      <div className="p-5 sm:p-6">
        <div
          className={cn(
            "flex items-center gap-2.5 rounded-2xl border px-4 py-3",
            "transition-colors duration-500 motion-reduce:transition-none",
            isComplete
              ? "border-primary/25 bg-primary/[0.06]"
              : "border-black/[0.06] bg-surface-2/60",
          )}
        >
          {isComplete ? (
            <>
              <span
                aria-hidden="true"
                className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-white"
              >
                <Check className="size-3" strokeWidth={4} />
              </span>
              <span className="text-[13.5px] font-semibold text-ink">verified</span>
              <span className="truncate text-[13px] text-ink-muted">
                — all eight stages passed
              </span>
            </>
          ) : (
            <>
              <Lock className="size-4 shrink-0 text-ink-muted" strokeWidth={2} aria-hidden="true" />
              <span className="text-[13px] text-ink-muted">
                No result is issued until every stage has passed.
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Compact rail, used in the hero ─── */

export function PipelineRail({ className }: { className?: string }) {
  const reduced = usePrefersReducedMotion();

  return (
    <ol className={cn("flex list-none flex-wrap items-center gap-1.5 p-0", className)}>
      {PIPELINE_STAGES.map((stage, i) => (
        <motion.li
          key={stage.step}
          initial={reduced ? false : { opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 + i * 0.045, duration: 0.4 }}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full border border-black/[0.07] bg-white/70 px-2.5 py-1",
            "text-[11.5px] font-medium text-ink-muted backdrop-blur-sm",
            "transition-colors duration-200 hover:border-primary/25 hover:text-ink",
            "motion-reduce:transition-none",
          )}
        >
          <span className="font-mono text-[10px] text-primary">
            {String(stage.step).padStart(2, "0")}
          </span>
          {stage.name}
        </motion.li>
      ))}
    </ol>
  );
}
