/**
 * Enterprise bulk verification.
 *
 * The previous version paired the copy with a dark card carrying a bespoke
 * three-stop gradient (#06331A → #052614 → #02140A) that appears nowhere else on
 * the site, and whose only content was the number 50,000 repeated from the
 * heading. This replaces it with an actual job-results panel: the same closed
 * set of seven results, counted across a batch, which is what a compliance team
 * receives and is far more persuasive than a large number.
 *
 * Figures are illustrative and labelled as such.
 */
import { motion } from "motion/react";
import { Download, FileSpreadsheet } from "lucide-react";
import { cn } from "@/lib/utils";
import { BULK_RESULT_BREAKDOWN } from "./data";
import { SEVERITY_TONES } from "./severity";
import { EASE_OUT_EXPO, FieldLabel, usePrefersReducedMotion } from "./verify-ui";

const TOTAL = BULK_RESULT_BREAKDOWN.reduce((sum, row) => sum + row.count, 0);
const nf = new Intl.NumberFormat("en-US");

export function BulkResultsPanel() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="rounded-[24px] border border-black/5 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.07)]">
      {/* Job header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/5 px-5 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
          >
            <FileSpreadsheet className="size-5" strokeWidth={1.5} />
          </span>
          <div>
            <FieldLabel>Illustrative job</FieldLabel>
            <div className="font-mono text-[13px] text-ink">
              batch-2026-Q3-apparel.csv
            </div>
          </div>
        </div>

        <div className="text-right">
          <div className="text-[20px] font-semibold leading-none tracking-[-0.03em] text-ink tabular-nums">
            {nf.format(TOTAL)}
          </div>
          <div className="text-[12px] text-ink-muted">identifiers</div>
        </div>
      </div>

      <div className="px-5 py-5 sm:px-6">
        {/* Distribution bar */}
        <div
          className="flex h-2.5 w-full gap-[2px] overflow-hidden rounded-full bg-black/[0.04]"
          role="img"
          aria-label={`Result distribution across ${nf.format(TOTAL)} identifiers`}
        >
          {BULK_RESULT_BREAKDOWN.map((row, i) => (
            <motion.span
              key={row.label}
              className={cn("h-full rounded-full", SEVERITY_TONES[row.severity].fill)}
              style={{ minWidth: 4 }}
              initial={reduced ? false : { flexGrow: 0 }}
              whileInView={{ flexGrow: row.count }}
              viewport={{ once: true }}
              transition={{
                duration: reduced ? 0 : 0.8,
                delay: reduced ? 0 : i * 0.05,
                ease: EASE_OUT_EXPO,
              }}
            />
          ))}
        </div>

        {/* Per-result rows */}
        <ul className="mt-5 list-none divide-y divide-black/5 p-0">
          {BULK_RESULT_BREAKDOWN.map((row) => {
            const tone = SEVERITY_TONES[row.severity];
            const share = ((row.count / TOTAL) * 100).toFixed(row.count / TOTAL < 0.01 ? 2 : 1);

            return (
              <li
                key={row.label}
                className="flex items-center gap-3 py-2.5 transition-colors hover:bg-[#FAFDFB] motion-reduce:transition-none"
              >
                <span
                  aria-hidden="true"
                  className={cn("size-2 shrink-0 rounded-full", tone.fill)}
                />
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
              </li>
            );
          })}
        </ul>

        <div className="mt-5 flex items-center gap-2 rounded-xl bg-surface-2/70 px-3.5 py-2.5 text-[12.5px] text-ink-muted">
          <Download className="size-3.5 shrink-0 text-primary" strokeWidth={2} aria-hidden="true" />
          Results export as CSV or JSON, with the risk signal breakdown attached to
          every identifier.
        </div>
      </div>
    </div>
  );
}
