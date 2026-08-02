/**
 * Enterprise bulk verification — upload, run, results.
 *
 * ── Critique of the version this replaces ─────────────────────────────────
 * It rendered a finished job: a filename, a distribution bar and seven counts.
 * Accurate, but it skipped two thirds of the story. The PRD describes three
 * acts — "upload a CSV, run the full eight-stage pipeline across the entire
 * batch, and download a structured results report" — and only the third was
 * drawn. A compliance lead evaluating this wants to know what handing over
 * 50,000 identifiers actually feels like.
 *
 * ── What this does instead ───────────────────────────────────────────────
 * Three states in one fixed-height panel: an idle dropzone, a processing run
 * with identifiers streaming through the pipeline, and the results. It advances
 * on its own so the section is never static, and the reader can drive it with
 * the control in the header.
 *
 * IMPORTANT: this accepts no real file and uploads nothing. There is no input,
 * no FileReader, no request — the dropzone is an illustration of the enterprise
 * flow, matching how every other figure on this page is labelled.
 */
import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  Check,
  Download,
  FileSpreadsheet,
  RotateCw,
  UploadCloud,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BULK_RESULT_BREAKDOWN } from "./data";
import { SEVERITY_TONES } from "./severity";
import {
  EASE_OUT_EXPO,
  FieldLabel,
  PANEL,
  usePrefersReducedMotion,
} from "./verify-ui";

const TOTAL = BULK_RESULT_BREAKDOWN.reduce((sum, row) => sum + row.count, 0);
const nf = new Intl.NumberFormat("en-US");

type Phase = "idle" | "running" | "done";

const RUN_MS = 2600;

export function BulkResultsPanel() {
  const reduced = usePrefersReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);

  const [phase, setPhase] = React.useState<Phase>(reduced ? "done" : "idle");
  const [progress, setProgress] = React.useState(reduced ? 1 : 0);
  const [inView, setInView] = React.useState(false);
  const [runId, setRunId] = React.useState(0);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (reduced || !inView) return;

    const timers: Array<ReturnType<typeof setTimeout>> = [];
    let frame = 0;

    setPhase("idle");
    setProgress(0);

    timers.push(
      setTimeout(() => {
        setPhase("running");
        const start = performance.now();

        const tick = (now: number) => {
          const t = Math.min((now - start) / RUN_MS, 1);
          setProgress(t);
          if (t < 1) frame = requestAnimationFrame(tick);
          else setPhase("done");
        };

        frame = requestAnimationFrame(tick);
      }, 900),
    );

    return () => {
      timers.forEach(clearTimeout);
      cancelAnimationFrame(frame);
    };
  }, [reduced, inView, runId]);

  const processed = Math.round(progress * TOTAL);

  return (
    <div ref={ref} className={cn(PANEL, "overflow-hidden")}>
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/[0.06] px-5 py-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <span
            aria-hidden="true"
            className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
          >
            <FileSpreadsheet className="size-5" strokeWidth={1.5} />
          </span>
          <div className="min-w-0">
            <FieldLabel>Illustrative job</FieldLabel>
            <div className="truncate font-mono text-[13px] text-ink">
              batch-2026-Q3-apparel.csv
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setRunId((r) => r + 1)}
          className={cn(
            "inline-flex shrink-0 items-center gap-1.5 rounded-full border border-black/10 bg-white px-2.5 py-1",
            "text-[11.5px] font-medium text-ink-muted transition-all duration-200",
            "hover:border-primary/30 hover:text-ink motion-reduce:transition-none",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          )}
        >
          <RotateCw className="size-3.5" strokeWidth={2} aria-hidden="true" />
          Replay
        </button>
      </div>

      {/* Body — fixed minimum height so the three phases never jolt the layout */}
      <div className="min-h-[420px] px-5 py-5 sm:px-6">
        <AnimatePresence mode="wait">
          {phase === "idle" ? (
            <motion.div
              key="idle"
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduced ? undefined : { opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex min-h-[380px] items-center justify-center"
            >
              <Dropzone />
            </motion.div>
          ) : phase === "running" ? (
            <motion.div
              key="running"
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduced ? undefined : { opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex min-h-[380px] flex-col justify-center"
            >
              <RunningState processed={processed} progress={progress} />
            </motion.div>
          ) : (
            <motion.div
              key="done"
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
            >
              <ResultsState reduced={reduced} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ─── Phase 1: dropzone ─── */

function Dropzone() {
  return (
    <div
      className={cn(
        "relative flex w-full flex-col items-center justify-center gap-4 rounded-2xl",
        "border-2 border-dashed border-primary/25 bg-primary/[0.03] px-6 py-12 text-center",
      )}
    >
      {/* Border beam */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl motion-reduce:hidden"
      >
        <span className="nature-shimmer absolute inset-0 bg-[radial-gradient(120px_circle_at_50%_0%,oklch(0.72_0.19_148/0.18),transparent_70%)]" />
      </span>

      <motion.span
        aria-hidden="true"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="flex size-14 items-center justify-center rounded-2xl bg-white text-primary shadow-[0_8px_24px_-8px_rgba(16,24,40,0.2)]"
      >
        <UploadCloud className="size-6" strokeWidth={1.5} />
      </motion.span>

      <div className="relative">
        <div className="text-[15px] font-semibold text-ink">
          Drop a CSV of identifiers
        </div>
        <div className="mt-1.5 text-[13px] leading-[1.55] text-ink-muted">
          Up to 50,000 per job · one identifier per row
        </div>
      </div>

      <span className="relative rounded-full bg-white px-3 py-1 font-mono text-[11px] text-ink-muted ring-1 ring-black/[0.06]">
        gtin,serial,lot
      </span>
    </div>
  );
}

/* ─── Phase 2: running ─── */

function RunningState({ processed, progress }: { processed: number; progress: number }) {
  return (
    <div className="flex flex-col items-center gap-6 py-6">
      <div className="text-center">
        <FieldLabel>Running the eight-stage pipeline</FieldLabel>
        <div className="mt-2 text-[38px] font-semibold leading-none tracking-[-0.04em] tabular-nums text-ink">
          {nf.format(processed)}
        </div>
        <div className="mt-1.5 text-[13px] text-ink-muted">
          of {nf.format(TOTAL)} identifiers
        </div>
      </div>

      {/* Progress */}
      <div className="w-full max-w-[420px]">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/[0.06]">
          <div
            className="h-full rounded-full bg-primary"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <div className="mt-2 flex justify-between font-mono text-[11px] tabular-nums text-ink-muted/70">
          <span>{Math.round(progress * 100)}%</span>
          <span>8 stages / identifier</span>
        </div>
      </div>

      {/* Identifiers streaming through */}
      <ul className="flex w-full max-w-[420px] list-none flex-col gap-1.5 p-0">
        {[0, 1, 2].map((row) => (
          <li
            key={row}
            className="flex items-center gap-2.5 rounded-lg bg-surface-2/60 px-3 py-2"
          >
            <span
              aria-hidden="true"
              className="size-1.5 shrink-0 rounded-full bg-primary motion-safe:animate-pulse"
              style={{ animationDelay: `${row * 180}ms` }}
            />
            <span className="min-w-0 flex-1 truncate font-mono text-[11.5px] text-ink-muted">
              01/09521000123456/21/
              {(processed + row * 7919).toString(16).toUpperCase().padStart(4, "0").slice(-4)}
            </span>
            <span className="shrink-0 font-mono text-[10.5px] text-primary">
              {String(((processed + row) % 8) + 1).padStart(2, "0")}/08
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Phase 3: results ─── */

function ResultsState({ reduced }: { reduced: boolean }) {
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="flex size-5 items-center justify-center rounded-full bg-primary text-white"
          >
            <Check className="size-3" strokeWidth={4} />
          </span>
          <span className="text-[13.5px] font-semibold text-ink">Job complete</span>
        </div>
        <span className="text-right font-mono text-[12px] tabular-nums text-ink-muted">
          {nf.format(TOTAL)} identifiers
        </span>
      </div>

      {/* Distribution */}
      <div
        className="mt-4 flex h-2.5 w-full gap-[2px] overflow-hidden rounded-full bg-black/[0.04]"
        role="img"
        aria-label={`Result distribution across ${nf.format(TOTAL)} identifiers`}
      >
        {BULK_RESULT_BREAKDOWN.map((row, i) => (
          <motion.span
            key={row.label}
            className={cn("h-full rounded-full", SEVERITY_TONES[row.severity].fill)}
            style={{ minWidth: 4 }}
            initial={reduced ? false : { flexGrow: 0 }}
            animate={{ flexGrow: row.count }}
            transition={{
              duration: reduced ? 0 : 0.7,
              delay: reduced ? 0 : i * 0.04,
              ease: EASE_OUT_EXPO,
            }}
          />
        ))}
      </div>

      {/* Rows */}
      <ul className="mt-5 list-none divide-y divide-black/[0.05] p-0">
        {BULK_RESULT_BREAKDOWN.map((row, i) => {
          const tone = SEVERITY_TONES[row.severity];
          const share = ((row.count / TOTAL) * 100).toFixed(row.count / TOTAL < 0.01 ? 2 : 1);

          return (
            <motion.li
              key={row.label}
              initial={reduced ? false : { opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: reduced ? 0 : 0.25 + i * 0.05 }}
              className="flex items-center gap-3 py-2.5 transition-colors hover:bg-primary/[0.03] motion-reduce:transition-none"
            >
              <span aria-hidden="true" className={cn("size-2 shrink-0 rounded-full", tone.fill)} />
              {/* Verbatim verdict label — governed by the wording rule. */}
              <span className="min-w-0 flex-1 truncate text-[13.5px] text-ink">
                {row.label}
              </span>
              <span className="shrink-0 font-mono text-[12px] tabular-nums text-ink-muted/70">
                {share}%
              </span>
              <span className="w-16 shrink-0 text-right font-mono text-[12.5px] font-medium tabular-nums text-ink">
                {nf.format(row.count)}
              </span>
            </motion.li>
          );
        })}
      </ul>

      <div className="mt-5 flex items-center gap-2 rounded-xl bg-surface-2/70 px-3.5 py-2.5 text-[12.5px] text-ink-muted">
        <Download className="size-3.5 shrink-0 text-primary" strokeWidth={2} aria-hidden="true" />
        <span className="flex-1">
          Results export as CSV or JSON, with the risk signal breakdown attached to
          every identifier.
        </span>
        <ArrowRight className="size-3.5 shrink-0 text-ink-muted/50" strokeWidth={2} aria-hidden="true" />
      </div>
    </div>
  );
}
