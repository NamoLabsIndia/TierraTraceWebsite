import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { motion } from "motion/react";
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  AlertCircle,
  RotateCcw,
  Archive,
  Clock,
  PauseCircle,
  ArrowRight,
  Download,
  Github,
  Zap,
  Globe,
  BarChart3,
  Users,
  ChevronRight,
} from "lucide-react";

/* ─── SEO head ─── */
export const Route = createFileRoute("/platform/verify")({
  head: () => ({
    meta: [
      { title: "Web Verify — TierraTrace" },
      {
        name: "description",
        content:
          "Instant, defensible product verification in under three seconds. Eight-stage pipeline, explainable risk signals, and an open-source offline verification tool — no app or account required.",
      },
      { property: "og:title", content: "Web Verify — TierraTrace" },
      {
        property: "og:description",
        content:
          "A consumer scans a QR code and gets a defensible answer in under three seconds. Behind that moment is a full verification and fraud-detection system.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://www.tierratrace.in/platform/verify" },
    ],
  }),
  component: WebVerifyPage,
});

/* ─── Reveal animation helper ─── */
function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Pipeline stages data ─── */
const PIPELINE_STAGES = [
  {
    step: 1,
    name: "Resolve",
    description: "Decode the identifier and resolve it to a registered record.",
  },
  {
    step: 2,
    name: "Integrity",
    description: "Verify the record has not been altered since it was signed.",
  },
  {
    step: 3,
    name: "Signature",
    description: "Confirm the cryptographic signature against the issuer's public key.",
  },
  {
    step: 4,
    name: "Anchor",
    description: "Cross-check the record hash against the ledger anchor.",
  },
  {
    step: 5,
    name: "Lifecycle",
    description: "Check the passport's current lifecycle status.",
  },
  {
    step: 6,
    name: "Claims",
    description: "Validate every sustainability and compliance claim against evidence.",
  },
  {
    step: 7,
    name: "Risk",
    description: "Score the scan against ten published risk signals.",
  },
  {
    step: 8,
    name: "Record",
    description: "Log the verification event to the transparency audit trail.",
  },
];

/* ─── Seven possible results (closed set — wording rule enforced) ─── */
const VERDICT_RESULTS = [
  {
    label: "verified",
    icon: CheckCircle2,
    color: "text-emerald-600",
    bg: "bg-emerald-50 border-emerald-200",
    description: "All eight stages passed. The record is valid and current.",
  },
  {
    label: "could not be verified",
    icon: AlertCircle,
    color: "text-amber-600",
    bg: "bg-amber-50 border-amber-200",
    description: "One or more stages returned inconclusive results.",
  },
  {
    label: "no record found",
    icon: XCircle,
    color: "text-slate-600",
    bg: "bg-slate-50 border-slate-200",
    description: "The identifier does not match any registered passport.",
  },
  {
    label: "withdrawn",
    icon: Archive,
    color: "text-orange-600",
    bg: "bg-orange-50 border-orange-200",
    description: "The passport has been voluntarily withdrawn by the issuer.",
  },
  {
    label: "recalled",
    icon: RotateCcw,
    color: "text-red-600",
    bg: "bg-red-50 border-red-200",
    description: "The product has been subject to a formal recall.",
  },
  {
    label: "expired",
    icon: Clock,
    color: "text-slate-500",
    bg: "bg-slate-50 border-slate-200",
    description: "The passport's validity period has ended.",
  },
  {
    label: "suspended",
    icon: PauseCircle,
    color: "text-purple-600",
    bg: "bg-purple-50 border-purple-200",
    description: "The passport is temporarily suspended pending investigation.",
  },
];

/* ─── Risk signals data ─── */
const RISK_SIGNALS = [
  { name: "Impossible-travel duplicate scans", detail: "Same identifier scanned from two geographically implausible locations within minutes." },
  { name: "Cloned-label scan patterns", detail: "Scan frequency and distribution inconsistent with a single genuine unit." },
  { name: "Geographic implausibility", detail: "Scan origin inconsistent with the product's certified supply chain geography." },
  { name: "Scan velocity anomaly", detail: "Scan rate far above statistical baseline for that product category." },
  { name: "Identifier format deviation", detail: "Identifier structure deviates from the registered GS1 or W3C DID format." },
  { name: "Lifecycle state conflict", detail: "Scan occurs after a withdrawal or recall event." },
  { name: "Claim evidence gap", detail: "A sustainability claim on the passport lacks a linked evidence record." },
  { name: "Anchor timestamp deviation", detail: "Ledger anchor timestamp inconsistent with claimed issuance date." },
  { name: "Certificate expiry proximity", detail: "Supplier certificate within the 30-day alert window at time of scan." },
  { name: "Unusual time-of-day pattern", detail: "Scan cluster concentrated in a time window atypical for that supply chain." },
];

/* ─── Page component ─── */
function WebVerifyPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-ink">

      {/* ──────────────────────────────────────────────────
          SECTION 1 — HERO / FRAMING
      ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-topographic pt-36 pb-24 sm:pt-44 sm:pb-32">
        {/* Background orbs */}
        <div className="nature-orb-1 pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="nature-orb-2 pointer-events-none absolute right-0 top-20 h-[400px] w-[400px] rounded-full bg-primary/8 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1240px] px-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-4 py-1.5 text-sm font-medium text-primary">
              <ShieldCheck className="h-4 w-4" />
              Web Verify
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl text-[clamp(2.4rem,5vw,4rem)] font-bold leading-[1.1] tracking-[-0.04em] text-ink">
              A defensible answer in{" "}
              <span className="text-primary">under three seconds.</span>{" "}
              No app. No account.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-[1.125rem] leading-relaxed text-ink-muted">
              A consumer scans a QR code and gets a clear, defensible answer in under three seconds — no app or account required. Behind that simple moment is a full verification and fraud-detection system that never guesses and never gives a free-text answer.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/#pilot"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
              >
                Request pilot <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#proof-bundle"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-surface"
              >
                <Download className="h-4 w-4 text-primary" />
                Proof bundle &amp; open-source tool
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          SECTION 2 — EIGHT-STAGE VERIFICATION PIPELINE
      ────────────────────────────────────────────────── */}
      <section id="pipeline" className="py-24 bg-surface">
        <div className="mx-auto max-w-[1240px] px-6">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">Verification pipeline</p>
              <h2 className="mt-3 text-[2.25rem] font-bold leading-tight tracking-tight text-ink">
                Eight stages. Fails closed.
              </h2>
              <p className="mt-4 text-lg text-ink-muted">
                Every scan runs all eight stages in sequence. If there is doubt at any stage, the result never says <span className="font-semibold text-ink">verified</span>. The system fails closed — not optimistically.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PIPELINE_STAGES.map((stage, i) => (
              <Reveal key={stage.step} delay={i * 0.05}>
                <div className="group relative rounded-2xl border border-black/6 bg-white p-5 shadow-sm transition hover:shadow-md hover:border-primary/30">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">
                      {stage.step}
                    </div>
                    {i < PIPELINE_STAGES.length - 1 && (
                      <ChevronRight className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-muted/40 z-10" />
                    )}
                    <span className="font-semibold text-ink">{stage.name}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{stage.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          SECTION 3 — SEVEN POSSIBLE RESULTS (CLOSED SET)
          Wording rule: counterfeit / fake / fraud / genuine / authentic
          MUST NOT appear as verdict labels. Only the 7 terms below.
      ────────────────────────────────────────────────── */}
      <section id="results" className="py-24 bg-background">
        <div className="mx-auto max-w-[1240px] px-6">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">Results</p>
              <h2 className="mt-3 text-[2.25rem] font-bold leading-tight tracking-tight text-ink">
                A closed set of seven possible results.
              </h2>
              <p className="mt-4 text-lg text-ink-muted">
                There are no free-text answers, no ambiguous messages, and no invented verdicts. Every scan resolves to exactly one of these seven outcomes — nothing else.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {VERDICT_RESULTS.map((result, i) => {
              const Icon = result.icon;
              return (
                <Reveal key={result.label} delay={i * 0.06}>
                  <div className={`rounded-2xl border p-5 ${result.bg}`}>
                    <div className="flex items-center gap-2">
                      <Icon className={`h-5 w-5 shrink-0 ${result.color}`} />
                      <span className={`font-semibold capitalize ${result.color}`}>
                        {result.label}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{result.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          SECTION 4 — PROOF BUNDLE & OPEN-SOURCE TOOL
      ────────────────────────────────────────────────── */}
      <section id="proof-bundle" className="py-24 bg-surface bg-dot-grid">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">Independent verification</p>
                <h2 className="mt-3 text-[2.25rem] font-bold leading-tight tracking-tight text-ink">
                  The platform's own word is never the last word.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-ink-muted">
                  Every verification produces a <strong className="text-ink">downloadable proof bundle</strong> — a self-contained file containing the signed record, the ledger anchor reference, and the full verification trace.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                  Pair it with the <strong className="text-ink">open-source verification tool</strong> and anyone — a regulator, an auditor, a journalist — can independently re-check the result offline, without ever calling back to TierraTrace's own servers. This is the single strongest trust claim available on this platform.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
                  >
                    <Download className="h-4 w-4" />
                    Download proof bundle
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-surface"
                  >
                    <Github className="h-4 w-4" />
                    Open-source tool
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-3xl border border-black/6 bg-white p-8 shadow-lg ring-tierra">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-xl bg-primary-soft flex items-center justify-center">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ink">Proof Bundle</div>
                    <div className="text-xs text-ink-muted">Verifiable offline — no server call required</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {["Signed passport record", "Ledger anchor reference", "Full pipeline trace", "Cryptographic chain of custody", "Open-standard W3C VC format"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-ink-muted">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          SECTION 5 — GS1 DIGITAL LINK RESOLVER
      ────────────────────────────────────────────────── */}
      <section id="gs1-resolver" className="py-24 bg-background">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <Reveal delay={0.1} className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { audience: "Consumer", sees: "Product passport — origin, materials, certifications", icon: Users, color: "bg-emerald-50 border-emerald-200 text-emerald-700" },
                  { audience: "Certification body", sees: "Full compliance evidence pack with audit trail", icon: ShieldCheck, color: "bg-blue-50 border-blue-200 text-blue-700" },
                  { audience: "Retailer", sees: "Batch provenance and supplier certification status", icon: BarChart3, color: "bg-violet-50 border-violet-200 text-violet-700" },
                  { audience: "Regulator", sees: "Complete evidence record for regulatory review", icon: Globe, color: "bg-orange-50 border-orange-200 text-orange-700" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.audience} className={`rounded-2xl border p-4 ${item.color}`}>
                      <Icon className="h-5 w-5 mb-2" />
                      <div className="text-sm font-semibold">{item.audience}</div>
                      <div className="mt-1 text-xs leading-relaxed opacity-80">{item.sees}</div>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal className="order-1 lg:order-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">GS1 Digital Link resolver</p>
                <h2 className="mt-3 text-[2.25rem] font-bold leading-tight tracking-tight text-ink">
                  One scan. The right destination for who's asking.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-ink-muted">
                  Scanning a product's code redirects to the right destination based on who's scanning. A consumer sees the product passport. A certification body sees the compliance evidence. A regulator sees the full audit trail. Same code, right context, every time.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                  This is implemented using the GS1 Digital Link standard. For a detailed explanation of how the standard works, see{" "}
                  {/* Using plain <a> — /compliance/gs1-digital-link is Rishabh's route, not yet merged */}
                  <a
                    href="/compliance/gs1-digital-link"
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    /compliance/gs1-digital-link
                  </a>
                  .
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          SECTION 6 — FRAUD & RISK PLATFORM
          Note: "fraud" appears here only as a feature section name —
          never as a verdict label for a specific item.
      ────────────────────────────────────────────────── */}
      <section id="risk-platform" className="py-24 bg-surface">
        <div className="mx-auto max-w-[1240px] px-6">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">Risk platform</p>
              <h2 className="mt-3 text-[2.25rem] font-bold leading-tight tracking-tight text-ink">
                Ten published risk signals. Every score is explainable.
              </h2>
              <p className="mt-4 text-lg text-ink-muted">
                The risk platform scores every scan against ten named, published signals. A risk score is never a black-box number — it always decomposes into which named signals contributed and by how much. Every factor is auditable.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-3 sm:grid-cols-2">
            {RISK_SIGNALS.map((signal, i) => (
              <Reveal key={signal.name} delay={i * 0.04}>
                <div className="flex gap-4 rounded-2xl border border-black/6 bg-white p-5 shadow-sm transition hover:border-primary/30 hover:shadow-md">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-semibold text-ink">{signal.name}</div>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">{signal.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10 rounded-2xl border border-primary/20 bg-primary-soft p-6">
              <div className="flex items-start gap-4">
                <Zap className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <div className="font-semibold text-ink">Explainable by design</div>
                  <p className="mt-1 text-sm text-ink-muted">
                    Every risk score on this platform is decomposable into its contributing named signals. There are no black-box numbers. If a scan returns a high-risk indicator, the platform shows exactly which of the ten signals triggered and what weight each carried.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          SECTION 7 — ENTERPRISE BULK VERIFICATION
      ────────────────────────────────────────────────── */}
      <section id="bulk-verification" className="py-24 bg-background">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">Enterprise compliance</p>
                <h2 className="mt-3 text-[2.25rem] font-bold leading-tight tracking-tight text-ink">
                  Verify up to 50,000 identifiers in a single job.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-ink-muted">
                  Enterprise compliance teams don't scan one product at a time. Bulk verification accepts up to <strong className="text-ink">50,000 identifiers in a single job</strong> — upload a CSV, run the full eight-stage pipeline across the entire batch, and download a structured results report.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Full eight-stage pipeline run on every identifier",
                    "Structured CSV/JSON results with per-identifier verdicts",
                    "Risk signal breakdown included for each result",
                    "Audit-ready report format for regulatory submissions",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-ink-muted">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a
                    href="/#pilot"
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
                  >
                    Talk to us about bulk verification <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-3xl border border-black/6 bg-gradient-to-br from-[#06331A] via-[#052614] to-[#02140A] p-10 text-white shadow-xl">
                <div className="text-[4rem] font-bold tracking-tight leading-none text-primary">
                  50,000
                </div>
                <div className="mt-2 text-xl font-semibold text-white/90">
                  identifiers per job
                </div>
                <div className="mt-6 space-y-4 text-sm text-white/60">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-4 w-4 shrink-0 text-primary" />
                    Full 8-stage pipeline on every identifier
                  </div>
                  <div className="flex items-center gap-3">
                    <BarChart3 className="h-4 w-4 shrink-0 text-primary" />
                    Structured output with all seven possible verdicts
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-4 w-4 shrink-0 text-primary" />
                    Designed for enterprise compliance teams
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

    </div>
  );
}
