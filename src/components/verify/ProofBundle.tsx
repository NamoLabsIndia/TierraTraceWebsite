/**
 * Proof bundle + open-source verification tool.
 *
 * ── Critique of the version this replaces ─────────────────────────────────
 * The PRD calls this "the single strongest trust claim available on the whole
 * site", and it was rendered as two static blocks: a file list you cannot
 * inspect, and a terminal transcript that had clearly already finished. A
 * screenshot of proof is not proof. The reader had nothing to do.
 *
 * ── What this does instead ───────────────────────────────────────────────
 * The manifest assembles itself on scroll — files land one by one with their
 * checksums — and every row opens to reveal what that file actually contains.
 * The verification transcript types itself out, so the reader watches the
 * offline re-check resolve rather than being told it did.
 *
 * Nothing here performs a real download or executes anything. The links are
 * unchanged from the previous implementation.
 */
import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ChevronRight,
  Download,
  FileCheck,
  Github,
  ShieldCheck,
  WifiOff,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PROOF_BUNDLE_CONTENTS } from "./data";
import {
  EASE_OUT_EXPO,
  FieldLabel,
  GLASS,
  PANEL,
  Reveal,
  buttonStyles,
  usePrefersReducedMotion,
} from "./verify-ui";

/** Illustrative digests, so an opened row shows something concrete. */
const DIGESTS = [
  "sha256:9f2a…c418",
  "sha256:41bd…7e02",
  "sha256:c70e…19af",
  "sha256:2d55…b6c1",
  "sha256:8ae3…04fd",
];

/* ─── Manifest ─── */

function ManifestRow({
  entry,
  index,
  open,
  onToggle,
  reduced,
}: {
  entry: (typeof PROOF_BUNDLE_CONTENTS)[number];
  index: number;
  open: boolean;
  onToggle: () => void;
  reduced: boolean;
}) {
  return (
    <li className="border-b border-black/[0.05] last:border-b-0">
      <motion.div
        initial={reduced ? false : { opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: reduced ? 0 : 0.15 + index * 0.09, duration: 0.4, ease: EASE_OUT_EXPO }}
      >
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          className={cn(
            "flex w-full items-center gap-3 px-5 py-3 text-left transition-colors duration-200",
            "hover:bg-primary/[0.04] motion-reduce:transition-none",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary",
            open && "bg-primary/[0.04]",
          )}
        >
          <FileCheck className="size-4 shrink-0 text-primary" strokeWidth={1.75} aria-hidden="true" />

          <span className="min-w-0 flex-1">
            <span className="block truncate font-mono text-[12.5px] text-ink">
              {entry.file}
            </span>
            <span className="block text-[12px] text-ink-muted">{entry.detail}</span>
          </span>

          <span className="shrink-0 font-mono text-[11.5px] tabular-nums text-ink-muted/70">
            {entry.size}
          </span>

          <ChevronRight
            className={cn(
              "size-3.5 shrink-0 text-ink-muted/60 transition-transform duration-200",
              "motion-reduce:transition-none",
              open && "rotate-90",
            )}
            strokeWidth={2}
            aria-hidden="true"
          />
        </button>

        {/* grid-rows disclosure: animates height with no DOM measurement */}
        <div
          className={cn(
            "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
            "motion-reduce:transition-none",
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden">
            <div className="mx-5 mb-3 rounded-lg bg-surface-2/70 px-3 py-2.5">
              <FieldLabel>Digest</FieldLabel>
              <div className="mt-0.5 font-mono text-[11.5px] text-ink-muted">
                {DIGESTS[index % DIGESTS.length]}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </li>
  );
}

/* ─── Typed verification transcript ─── */

const COMMAND = "tierratrace-verify proof-bundle.ttz --offline";

const CHECKS = [
  { label: "signature", result: "ok" },
  { label: "integrity", result: "ok" },
  { label: "anchor", result: "ok" },
];

function VerifyTranscript() {
  const reduced = usePrefersReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const [inView, setInView] = React.useState(false);
  const [typed, setTyped] = React.useState(reduced ? COMMAND.length : 0);
  const [checksShown, setChecksShown] = React.useState(reduced ? CHECKS.length : 0);
  const [resolved, setResolved] = React.useState(reduced);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (reduced || !inView) return;

    const timers: Array<ReturnType<typeof setTimeout>> = [];
    let i = 0;

    const type = () => {
      i += 1;
      setTyped(i);
      if (i < COMMAND.length) {
        timers.push(setTimeout(type, 22));
      } else {
        CHECKS.forEach((_, n) =>
          timers.push(setTimeout(() => setChecksShown(n + 1), 320 + n * 260)),
        );
        timers.push(setTimeout(() => setResolved(true), 320 + CHECKS.length * 260));
      }
    };

    timers.push(setTimeout(type, 400));
    return () => timers.forEach(clearTimeout);
  }, [inView, reduced]);

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-[24px] bg-ink shadow-[0_20px_50px_-16px_rgba(16,24,40,0.5)]"
    >
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-3">
        <FieldLabel>
          <span className="text-white/45">Independent re-check</span>
        </FieldLabel>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/45">
          <WifiOff className="size-3" strokeWidth={2.5} aria-hidden="true" />
          No network required
        </span>
      </div>

      <div className="px-5 py-4 font-mono text-[12.5px] leading-[1.75]">
        {/* Command */}
        <div className="text-white">
          <span className="text-white/35">$ </span>
          {COMMAND.slice(0, typed)}
          {typed < COMMAND.length ? (
            <span className="ml-px inline-block h-[1em] w-[7px] translate-y-[2px] bg-primary motion-safe:animate-pulse" />
          ) : null}
        </div>

        {/* Checks */}
        <div className="mt-3 space-y-0.5">
          {CHECKS.map((check, i) => (
            <AnimatePresence key={check.label}>
              {i < checksShown ? (
                <motion.div
                  initial={reduced ? false : { opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
                >
                  <span className="text-white/45">
                    {check.label.padEnd(11, " ").replace(/ /g, " ")}
                  </span>
                  <span className="text-white/25">…&nbsp;</span>
                  <span className="text-primary">{check.result}</span>
                </motion.div>
              ) : null}
            </AnimatePresence>
          ))}
        </div>

        {/* Result */}
        <AnimatePresence>
          {resolved ? (
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
              className="mt-3 border-t border-white/10 pt-3"
            >
              <span className="text-white/45">result:&nbsp;</span>
              {/* Verbatim verdict label — governed by the wording rule. */}
              <span className="font-semibold text-primary">verified</span>
              <div className="mt-1 text-[11.5px] text-white/30">
                {"// resolved without contacting tierratrace.in"}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ─── Public composition ─── */

export function ProofBundleManifest() {
  const reduced = usePrefersReducedMotion();
  const [openRow, setOpenRow] = React.useState<number | null>(null);

  return (
    <div className="relative flex flex-col gap-4">
      {/* Floating "offline" seal, layer 2 over the manifest */}
      <motion.span
        initial={reduced ? false : { opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.55, duration: 0.45, ease: EASE_OUT_EXPO }}
        className={cn(
          "absolute -right-2 -top-3 z-20 hidden items-center gap-1.5 rounded-full px-3 py-1.5",
          "text-[11.5px] font-semibold text-ink sm:inline-flex",
          GLASS,
        )}
      >
        <WifiOff className="size-3 text-primary" strokeWidth={2.5} aria-hidden="true" />
        Verifiable offline
      </motion.span>

      {/* Manifest */}
      <div className={cn(PANEL, "overflow-hidden")}>
        <div className="flex items-center gap-3 border-b border-black/[0.06] px-5 py-4">
          <span
            aria-hidden="true"
            className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
          >
            <ShieldCheck className="size-5" strokeWidth={1.5} />
          </span>
          <div className="min-w-0 flex-1">
            <div className="font-mono text-[13.5px] font-medium text-ink">
              proof-bundle.ttz
            </div>
            <div className="text-[12px] text-ink-muted">
              Self-contained · 17.1 KB · W3C Verifiable Credential format
            </div>
          </div>
        </div>

        <ul className="list-none p-0">
          {PROOF_BUNDLE_CONTENTS.map((entry, index) => (
            <ManifestRow
              key={entry.file}
              entry={entry}
              index={index}
              open={openRow === index}
              onToggle={() => setOpenRow(openRow === index ? null : index)}
              reduced={reduced}
            />
          ))}
        </ul>
      </div>

      <VerifyTranscript />
    </div>
  );
}

export function ProofBundleNarrative() {
  return (
    <div>
      <Reveal>
        <p className="text-[16.5px] leading-[1.65] text-ink-muted">
          Every verification produces a{" "}
          <strong className="font-semibold text-ink">downloadable proof bundle</strong>{" "}
          — a self-contained file containing the signed record, the ledger anchor
          reference, and the full verification trace.
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <p className="mt-4 text-[16.5px] leading-[1.65] text-ink-muted">
          Pair it with the{" "}
          <strong className="font-semibold text-ink">open-source verification tool</strong>{" "}
          and anyone — a regulator, an auditor, a journalist — can independently
          re-check the result offline, without ever calling back to TierraTrace's
          own servers.
        </p>
      </Reveal>

      <Reveal delay={0.16}>
        <blockquote className="relative mt-7 overflow-hidden rounded-2xl bg-primary/[0.06] py-5 pl-6 pr-5">
          <span aria-hidden="true" className="absolute inset-y-0 left-0 w-[3px] bg-primary" />
          <span className="text-[16px] font-medium leading-[1.55] text-ink">
            The platform's own word is never the last word.
          </span>
        </blockquote>
      </Reveal>

      <Reveal delay={0.22}>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#" className={cn(buttonStyles.primary, "group relative overflow-hidden")}>
            {/* Sheen sweeps on hover — signals "this produces a file" */}
            <span
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r",
                "from-transparent via-white/20 to-transparent",
                "transition-transform duration-700 group-hover:translate-x-full",
                "motion-reduce:hidden",
              )}
            />
            <Download
              className="size-4 transition-transform duration-200 group-hover:translate-y-0.5 motion-reduce:transition-none"
              strokeWidth={2}
              aria-hidden="true"
            />
            Download proof bundle
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonStyles.secondary, "group")}
          >
            <Github className="size-4" strokeWidth={2} aria-hidden="true" />
            Open-source tool
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </Reveal>
    </div>
  );
}
