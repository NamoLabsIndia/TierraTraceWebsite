/**
 * Content for /platform/verify.
 *
 * Extracted from the route file so the page component stays readable and so the
 * copy that is governed by the PRD lives in one reviewable place.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WORDING RULE — NON-NEGOTIABLE (PRD: docs/prd/web-verify.md)
 *
 * The words `counterfeit`, `fake`, `fraud`, `genuine` and `authentic` must never
 * appear describing a specific item's verdict. The only permitted verdict terms
 * are the members of VERDICT_RESULTS below. This applies to any verdict-style UI
 * on this page, not just literal product copy.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import {
  Archive,
  Building2,
  CheckCircle2,
  Clock,
  HelpCircle,
  MinusCircle,
  PauseCircle,
  RotateCcw,
  ShieldCheck,
  Store,
  Users,
  type LucideIcon,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   Eight-stage verification pipeline
   ═══════════════════════════════════════════════════════════ */

export type PipelineStage = {
  step: number;
  name: string;
  description: string;
  /** What the stage checks, shown as machine-style detail in the tracker. */
  check: string;
};

export const PIPELINE_STAGES: PipelineStage[] = [
  {
    step: 1,
    name: "Resolve",
    description: "Decode the identifier and resolve it to a registered record.",
    check: "identifier → registered record",
  },
  {
    step: 2,
    name: "Integrity",
    description: "Verify the record has not been altered since it was signed.",
    check: "payload hash === signed hash",
  },
  {
    step: 3,
    name: "Signature",
    description:
      "Confirm the cryptographic signature against the issuer's public key.",
    check: "signature ✓ issuer public key",
  },
  {
    step: 4,
    name: "Anchor",
    description: "Cross-check the record hash against the ledger anchor.",
    check: "record hash ✓ ledger anchor",
  },
  {
    step: 5,
    name: "Lifecycle",
    description: "Check the passport's current lifecycle status.",
    check: "lifecycle state = active",
  },
  {
    step: 6,
    name: "Claims",
    description:
      "Validate every sustainability and compliance claim against evidence.",
    check: "every claim → linked evidence",
  },
  {
    step: 7,
    name: "Risk",
    description: "Score the scan against ten published risk signals.",
    check: "10 named signals scored",
  },
  {
    step: 8,
    name: "Record",
    description: "Log the verification event to the transparency audit trail.",
    check: "event → audit trail",
  },
];

/* ═══════════════════════════════════════════════════════════
   The closed set of seven possible results
   ═══════════════════════════════════════════════════════════ */

/**
 * Severity is presentation metadata only — it groups the seven results so a
 * reader can see how to interpret them at a glance. It does not add an eighth
 * result and it never renames one.
 *
 * The palette is deliberately restricted to four tones (the site's primary
 * green, a single caution amber, the existing destructive token, and neutral
 * ink) instead of seven unrelated hues.
 */
export type VerdictSeverity = "confirmed" | "inconclusive" | "restricted" | "critical";

export type VerdictResult = {
  /** Verbatim verdict label. Governed by the wording rule — do not reword. */
  label: string;
  icon: LucideIcon;
  severity: VerdictSeverity;
  description: string;
  /** What a person holding the product should do next. */
  guidance: string;
};

export const VERDICT_RESULTS: VerdictResult[] = [
  {
    label: "verified",
    icon: CheckCircle2,
    severity: "confirmed",
    description: "All eight stages passed. The record is valid and current.",
    guidance: "Proceed. A proof bundle is available for independent re-checking.",
  },
  {
    label: "could not be verified",
    icon: HelpCircle,
    severity: "inconclusive",
    description: "One or more stages returned inconclusive results.",
    guidance: "Treat as unresolved. The pipeline failed closed rather than guessing.",
  },
  {
    label: "no record found",
    icon: MinusCircle,
    severity: "inconclusive",
    description: "The identifier does not match any registered passport.",
    guidance: "No passport exists for this identifier on the platform.",
  },
  {
    label: "withdrawn",
    icon: Archive,
    severity: "restricted",
    description: "The passport has been voluntarily withdrawn by the issuer.",
    guidance: "The issuer has retired this record. Refer to the issuer.",
  },
  {
    label: "recalled",
    icon: RotateCcw,
    severity: "critical",
    description: "The product has been subject to a formal recall.",
    guidance: "Stop distribution and follow the recall notice on the record.",
  },
  {
    label: "expired",
    icon: Clock,
    severity: "restricted",
    description: "The passport's validity period has ended.",
    guidance: "The record is no longer current. Request a reissued passport.",
  },
  {
    label: "suspended",
    icon: PauseCircle,
    severity: "restricted",
    description: "The passport is temporarily suspended pending investigation.",
    guidance: "Hold. The issuer or a regulator has paused this record.",
  },
];

export const SEVERITY_META: Record<VerdictSeverity, { label: string }> = {
  confirmed: { label: "Confirmed" },
  inconclusive: { label: "Inconclusive" },
  restricted: { label: "Restricted" },
  critical: { label: "Action required" },
};

/* ═══════════════════════════════════════════════════════════
   Lifecycle states
   Visualises where the lifecycle-driven results above come from.
   ═══════════════════════════════════════════════════════════ */

export const LIFECYCLE_STATES = [
  { name: "Issued", detail: "Passport signed and anchored by the issuer." },
  { name: "Active", detail: "In circulation and within its validity period." },
  { name: "Suspended", detail: "Temporarily paused pending investigation." },
  { name: "Withdrawn", detail: "Voluntarily retired by the issuer." },
  { name: "Recalled", detail: "Formal recall raised against the product." },
  { name: "Expired", detail: "Validity period has ended." },
] as const;

/* ═══════════════════════════════════════════════════════════
   GS1 Digital Link resolver — audience routing
   ═══════════════════════════════════════════════════════════ */

export type ResolverAudience = {
  audience: string;
  destination: string;
  sees: string;
  linkType: string;
  icon: LucideIcon;
};

export const RESOLVER_AUDIENCES: ResolverAudience[] = [
  {
    audience: "Consumer",
    destination: "Product passport",
    sees: "Origin, materials and certifications in plain language.",
    linkType: "gs1:pip",
    icon: Users,
  },
  {
    audience: "Certification body",
    destination: "Compliance evidence pack",
    sees: "Full evidence pack with the complete audit trail.",
    linkType: "gs1:certificationInfo",
    icon: ShieldCheck,
  },
  {
    audience: "Retailer",
    destination: "Batch provenance",
    sees: "Batch provenance and supplier certification status.",
    linkType: "gs1:traceability",
    icon: Store,
  },
  {
    audience: "Regulator",
    destination: "Regulatory record",
    sees: "Complete evidence record formatted for regulatory review.",
    linkType: "gs1:epcis",
    icon: Building2,
  },
];

/* ═══════════════════════════════════════════════════════════
   Ten published risk signals
   ═══════════════════════════════════════════════════════════ */

export type RiskSignal = {
  id: string;
  name: string;
  detail: string;
  /**
   * Points this signal contributed in the illustrative decomposition below.
   * `0` means the signal was evaluated and did not trigger. The non-zero values
   * sum to EXAMPLE_RISK_SCORE — the whole point of the section is that the score
   * is nothing more than the sum of its named parts.
   */
  contribution: number;
};

/** Sum of the non-zero contributions below. Keep the two in sync when editing. */
export const EXAMPLE_RISK_SCORE = 72;

export const RISK_SIGNALS: RiskSignal[] = [
  {
    id: "impossible-travel",
    name: "Impossible-travel duplicate scans",
    detail:
      "Same identifier scanned from two geographically implausible locations within minutes.",
    contribution: 26,
  },
  {
    id: "cloned-label",
    name: "Cloned-label scan patterns",
    detail:
      "Scan frequency and distribution inconsistent with a single registered unit.",
    contribution: 19,
  },
  {
    id: "geographic-implausibility",
    name: "Geographic implausibility",
    detail:
      "Scan origin inconsistent with the product's certified supply chain geography.",
    contribution: 14,
  },
  {
    id: "scan-velocity",
    name: "Scan velocity anomaly",
    detail:
      "Scan rate far above statistical baseline for that product category.",
    contribution: 8,
  },
  {
    id: "identifier-format",
    name: "Identifier format deviation",
    detail:
      "Identifier structure deviates from the registered GS1 or W3C DID format.",
    contribution: 3,
  },
  {
    id: "lifecycle-conflict",
    name: "Lifecycle state conflict",
    detail: "Scan occurs after a withdrawal or recall event.",
    contribution: 2,
  },
  {
    id: "claim-evidence-gap",
    name: "Claim evidence gap",
    detail:
      "A sustainability claim on the passport lacks a linked evidence record.",
    contribution: 0,
  },
  {
    id: "anchor-timestamp",
    name: "Anchor timestamp deviation",
    detail:
      "Ledger anchor timestamp inconsistent with claimed issuance date.",
    contribution: 0,
  },
  {
    id: "certificate-expiry",
    name: "Certificate expiry proximity",
    detail:
      "Supplier certificate within the 30-day alert window at time of scan.",
    contribution: 0,
  },
  {
    id: "time-of-day",
    name: "Unusual time-of-day pattern",
    detail:
      "Scan cluster concentrated in a time window atypical for that supply chain.",
    contribution: 0,
  },
];

/* ═══════════════════════════════════════════════════════════
   Proof bundle contents
   ═══════════════════════════════════════════════════════════ */

export const PROOF_BUNDLE_CONTENTS = [
  { file: "passport.jsonld", detail: "Signed passport record", size: "8.4 KB" },
  { file: "anchor.proof", detail: "Ledger anchor reference", size: "1.2 KB" },
  { file: "pipeline.trace", detail: "Full eight-stage trace", size: "3.7 KB" },
  { file: "custody.chain", detail: "Cryptographic chain of custody", size: "2.9 KB" },
  { file: "issuer.jwks", detail: "Issuer public keys (W3C VC)", size: "0.9 KB" },
];

/* ═══════════════════════════════════════════════════════════
   Bulk verification
   ═══════════════════════════════════════════════════════════ */

export const BULK_CAPABILITIES = [
  "Full eight-stage pipeline run on every identifier",
  "Structured CSV/JSON results with per-identifier verdicts",
  "Risk signal breakdown included for each result",
  "Audit-ready report format for regulatory submissions",
];

/** Illustrative distribution for the bulk results preview. */
export const BULK_RESULT_BREAKDOWN = [
  { label: "verified", count: 48_912, severity: "confirmed" as VerdictSeverity },
  { label: "could not be verified", count: 604, severity: "inconclusive" as VerdictSeverity },
  { label: "no record found", count: 331, severity: "inconclusive" as VerdictSeverity },
  { label: "withdrawn", count: 92, severity: "restricted" as VerdictSeverity },
  { label: "expired", count: 41, severity: "restricted" as VerdictSeverity },
  { label: "suspended", count: 14, severity: "restricted" as VerdictSeverity },
  { label: "recalled", count: 6, severity: "critical" as VerdictSeverity },
];
