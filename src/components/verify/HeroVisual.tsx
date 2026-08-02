/**
 * Hero visual — the verification dial.
 *
 * ── Why this shape ────────────────────────────────────────────────────────
 * The hero's claim is "a defensible answer in under three seconds". A headline
 * plus a gradient orb asserts that; it doesn't show it. The subject here is a
 * measuring instrument, so the hero renders one: eight arc segments around a
 * dial, filling in sequence, with the elapsed clock running in the centre and
 * resolving to `verified`.
 *
 * Eight segments is not decoration — it is the eight pipeline stages, so the
 * hero and the pipeline section are the same object at two levels of detail.
 *
 * Presentation only. Nothing is fetched; the dial illustrates the pipeline
 * described in the PRD.
 */
import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Fingerprint } from "lucide-react";
import { cn } from "@/lib/utils";
import { PIPELINE_STAGES } from "./data";
import { EASE_OUT_EXPO, GLASS, usePrefersReducedMotion } from "./verify-ui";

const TOTAL = PIPELINE_STAGES.length;
const STAGE_MS = 280;
const HOLD_MS = 2600;

const SIZE = 300;
const CENTER = SIZE / 2;
const RADIUS = 116;
const GAP_DEG = 6;
const SEG_DEG = 360 / TOTAL - GAP_DEG;

function polar(cx: number, cy: number, r: number, deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function arcPath(index: number, radius: number) {
  const start = index * (360 / TOTAL) + GAP_DEG / 2;
  const end = start + SEG_DEG;
  const a = polar(CENTER, CENTER, radius, start);
  const b = polar(CENTER, CENTER, radius, end);
  return `M ${a.x} ${a.y} A ${radius} ${radius} 0 0 1 ${b.x} ${b.y}`;
}

export function HeroVisual({ className }: { className?: string }) {
  const reduced = usePrefersReducedMotion();
  const [completed, setCompleted] = React.useState(reduced ? TOTAL : 0);

  React.useEffect(() => {
    if (reduced) {
      setCompleted(TOTAL);
      return;
    }

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    const play = () => {
      setCompleted(0);
      let n = 0;
      const tick = () => {
        if (cancelled) return;
        n += 1;
        setCompleted(n);
        timer = setTimeout(n < TOTAL ? tick : play, n < TOTAL ? STAGE_MS : HOLD_MS);
      };
      timer = setTimeout(tick, 600);
    };

    play();
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [reduced]);

  const isComplete = completed >= TOTAL;
  const elapsed = (Math.min(completed, TOTAL) * STAGE_MS) / 1000;

  return (
    <div
      className={cn("relative flex items-center justify-center", className)}
      aria-hidden="true"
    >
      {/* Ambient bloom behind the dial */}
      <div className="pointer-events-none absolute size-[340px] rounded-full bg-primary/[0.09] blur-[70px]" />

      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="relative w-full max-w-[300px] overflow-visible"
        role="presentation"
      >
        {/* Track */}
        {Array.from({ length: TOTAL }).map((_, i) => (
          <path
            key={`track-${i}`}
            d={arcPath(i, RADIUS)}
            fill="none"
            stroke="oklch(0.15 0.01 250 / 0.08)"
            strokeWidth={6}
            strokeLinecap="round"
          />
        ))}

        {/* Filled segments */}
        {Array.from({ length: TOTAL }).map((_, i) => (
          <motion.path
            key={`fill-${i}`}
            d={arcPath(i, RADIUS)}
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth={6}
            strokeLinecap="round"
            initial={false}
            animate={{ pathLength: i < completed ? 1 : 0 }}
            transition={{
              duration: reduced ? 0 : STAGE_MS / 1000,
              ease: "easeOut",
            }}
            style={{ filter: "drop-shadow(0 0 6px oklch(0.72 0.19 148 / 0.35))" }}
          />
        ))}

        {/* Inner hairline ring */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS - 22}
          fill="none"
          stroke="oklch(0.15 0.01 250 / 0.06)"
          strokeWidth={1}
        />

        {/* Sweep hand — only while running */}
        {!reduced && !isComplete ? (
          <motion.line
            x1={CENTER}
            y1={CENTER}
            x2={CENTER}
            y2={CENTER - (RADIUS - 26)}
            stroke="var(--color-primary)"
            strokeWidth={1.5}
            strokeLinecap="round"
            opacity={0.35}
            animate={{ rotate: 360 }}
            transition={{ duration: 2.24, ease: "linear", repeat: Infinity }}
            style={{ originX: `${CENTER}px`, originY: `${CENTER}px` }}
          />
        ) : null}
      </svg>

      {/* Dial centre */}
      <div className="absolute flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {isComplete ? (
            <motion.div
              key="done"
              initial={reduced ? false : { opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduced ? undefined : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
              className="flex flex-col items-center gap-2.5"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-primary text-white shadow-[0_6px_20px_rgba(22,193,95,0.4)]">
                <Check className="size-5" strokeWidth={3.5} />
              </span>
              <span className="text-[15px] font-semibold text-ink">verified</span>
              <span className="font-mono text-[11px] tabular-nums text-ink-muted">
                {elapsed.toFixed(2)}s
              </span>
            </motion.div>
          ) : (
            <motion.div
              key="running"
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduced ? undefined : { opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center gap-2.5"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-white text-ink-muted shadow-[0_2px_10px_rgba(16,24,40,0.10)]">
                <Fingerprint className="size-5" strokeWidth={1.5} />
              </span>
              <span className="font-mono text-[11px] tabular-nums text-ink-muted">
                {completed}/{TOTAL} stages
              </span>
              <span className="font-mono text-[11px] tabular-nums text-primary">
                {elapsed.toFixed(2)}s
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating standards badges (layer 2 — glass over the dial) */}
      <FloatingBadge
        label="GS1 Digital Link"
        className="left-[-6%] top-[14%]"
        delay={0.5}
        reduced={reduced}
      />
      <FloatingBadge
        label="W3C Verifiable Credential"
        className="right-[-10%] top-[38%]"
        delay={0.7}
        reduced={reduced}
      />
      <FloatingBadge
        label="Re-checkable offline"
        className="bottom-[12%] left-[2%]"
        delay={0.9}
        reduced={reduced}
      />
    </div>
  );
}

function FloatingBadge({
  label,
  className,
  delay,
  reduced,
}: {
  label: string;
  className?: string;
  delay: number;
  reduced: boolean;
}) {
  return (
    <motion.span
      initial={reduced ? false : { opacity: 0, y: 10, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: EASE_OUT_EXPO }}
      className={cn(
        "absolute whitespace-nowrap rounded-full px-3 py-1.5 text-[11.5px] font-medium text-ink",
        GLASS,
        className,
      )}
    >
      <span className="mr-1.5 inline-block size-1.5 rounded-full bg-primary align-middle" />
      {label}
    </motion.span>
  );
}
