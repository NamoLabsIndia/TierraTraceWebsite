/**
 * Proof bundle + open-source verification tool.
 *
 * The PRD calls this "the single strongest trust claim available on the whole
 * site". Previously it was a bulleted list inside a plain card, which gave it
 * less visual weight than the risk-signal grid below it. It is now the visual
 * centrepiece of the page: a concrete bundle manifest plus the offline command
 * that re-checks it, so the claim is *shown* rather than asserted.
 *
 * The terminal block is static illustrative markup — it runs nothing.
 */
import { FileCheck, Github, Download, ShieldCheck, WifiOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { PROOF_BUNDLE_CONTENTS } from "./data";
import { FieldLabel, Reveal, buttonStyles } from "./verify-ui";

export function ProofBundleManifest() {
  return (
    <div className="flex flex-col gap-4">
      {/* ── Bundle manifest ── */}
      <div className="overflow-hidden rounded-[24px] border border-black/5 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-3 border-b border-black/5 px-5 py-4">
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
          <span className="hidden shrink-0 items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary sm:inline-flex">
            <WifiOff className="size-3" strokeWidth={2.5} />
            Offline
          </span>
        </div>

        <ul className="list-none divide-y divide-black/5 p-0">
          {PROOF_BUNDLE_CONTENTS.map((entry) => (
            <li
              key={entry.file}
              className="flex items-center gap-3 px-5 py-3 transition-colors hover:bg-[#FAFDFB] motion-reduce:transition-none"
            >
              <FileCheck
                className="size-4 shrink-0 text-primary"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <div className="min-w-0 flex-1">
                <div className="truncate font-mono text-[12.5px] text-ink">
                  {entry.file}
                </div>
                <div className="text-[12px] text-ink-muted">{entry.detail}</div>
              </div>
              <span className="shrink-0 font-mono text-[11.5px] tabular-nums text-ink-muted/70">
                {entry.size}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Offline re-check ── */}
      <div className="overflow-hidden rounded-[24px] border border-white/5 bg-ink shadow-[0_18px_50px_rgba(0,0,0,0.20)]">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-3">
          <FieldLabel>
            <span className="text-white/45">Independent re-check</span>
          </FieldLabel>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/45">
            <WifiOff className="size-3" strokeWidth={2.5} aria-hidden="true" />
            No network required
          </span>
        </div>

        <pre className="overflow-x-auto px-5 py-4 font-mono text-[12.5px] leading-[1.75]">
          <code>
            <span className="text-white/35">$ </span>
            <span className="text-white">tierratrace-verify </span>
            <span className="text-white/70">proof-bundle.ttz </span>
            <span className="text-primary">--offline</span>
            {"\n\n"}
            <span className="text-white/45">signature ..... </span>
            <span className="text-primary">ok</span>
            {"\n"}
            <span className="text-white/45">integrity ..... </span>
            <span className="text-primary">ok</span>
            {"\n"}
            <span className="text-white/45">anchor ........ </span>
            <span className="text-primary">ok</span>
            {"\n\n"}
            <span className="text-white/45">result: </span>
            <span className="font-semibold text-primary">verified</span>
            {"\n"}
            <span className="text-white/35">
              {"// resolved without contacting tierratrace.in"}
            </span>
          </code>
        </pre>
      </div>
    </div>
  );
}

export function ProofBundleNarrative() {
  return (
    <div>
      <Reveal>
        <p className="text-[16.5px] leading-[1.65] text-ink-muted">
          Every verification produces a{" "}
          <strong className="font-semibold text-ink">
            downloadable proof bundle
          </strong>{" "}
          — a self-contained file containing the signed record, the ledger anchor
          reference, and the full verification trace.
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <p className="mt-4 text-[16.5px] leading-[1.65] text-ink-muted">
          Pair it with the{" "}
          <strong className="font-semibold text-ink">
            open-source verification tool
          </strong>{" "}
          and anyone — a regulator, an auditor, a journalist — can independently
          re-check the result offline, without ever calling back to TierraTrace's
          own servers.
        </p>
      </Reveal>

      <Reveal delay={0.16}>
        <blockquote
          className={cn(
            "mt-7 rounded-2xl border-l-2 border-primary bg-primary/5 py-4 pl-5 pr-5",
            "text-[15px] font-medium leading-[1.6] text-ink",
          )}
        >
          The platform's own word is never the last word.
        </blockquote>
      </Reveal>

      <Reveal delay={0.22}>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#" className={buttonStyles.primary}>
            <Download className="size-4" strokeWidth={2} aria-hidden="true" />
            Download proof bundle
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyles.secondary}
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
