/**
 * Verdict severity → visual tone.
 *
 * Deliberately restricted to four tones so the page never introduces colours
 * outside the TierraTrace palette:
 *   confirmed    → primary (Tierra green)
 *   inconclusive → amber   (the one functional caution hue)
 *   restricted   → neutral ink
 *   critical     → the existing `destructive` token
 *
 * Shared by the verdict cards and the bulk verification breakdown so the same
 * result reads identically wherever it appears.
 */
import type { VerdictSeverity } from "./data";

export type SeverityTone = {
  /** Card surface + border. */
  surface: string;
  /** Icon and label colour. */
  accent: string;
  /** Solid fill for bars and dots. */
  fill: string;
  /** Small pill used for the severity legend. */
  pill: string;
};

export const SEVERITY_TONES: Record<VerdictSeverity, SeverityTone> = {
  confirmed: {
    surface: "border-primary/25 bg-[#F4FCF7]",
    accent: "text-primary",
    fill: "bg-primary",
    pill: "bg-primary/10 text-primary",
  },
  inconclusive: {
    surface: "border-amber-300/50 bg-amber-50/70",
    accent: "text-amber-700",
    fill: "bg-amber-500",
    pill: "bg-amber-100 text-amber-800",
  },
  restricted: {
    surface: "border-black/8 bg-surface-2/60",
    accent: "text-ink-muted",
    fill: "bg-ink-muted/60",
    pill: "bg-black/5 text-ink-muted",
  },
  critical: {
    surface: "border-destructive/25 bg-destructive/5",
    accent: "text-destructive",
    fill: "bg-destructive",
    pill: "bg-destructive/10 text-destructive",
  },
};
