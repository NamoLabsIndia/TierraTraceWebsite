import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { motion } from "motion/react";
import { ArrowRight, Download, Lock, ShieldCheck, Timer } from "lucide-react";

import {
  BULK_CAPABILITIES,
  PIPELINE_STAGES,
  RISK_SIGNALS,
  VERDICT_RESULTS,
} from "@/components/verify/data";
import { HeroVisual } from "@/components/verify/HeroVisual";
import {
  PipelineRail,
  VerificationPipeline,
} from "@/components/verify/VerificationPipeline";
import {
  LifecycleTrack,
  SeverityLegend,
  VerdictGrid,
} from "@/components/verify/VerdictMatrix";
import {
  ProofBundleManifest,
  ProofBundleNarrative,
} from "@/components/verify/ProofBundle";
import { ResolverRouting } from "@/components/verify/ResolverRouting";
import {
  RiskDecomposition,
  RiskSignalList,
} from "@/components/verify/RiskPlatform";
import { BulkResultsPanel } from "@/components/verify/BulkVerification";
import {
  AmbientMesh,
  EASE_OUT_EXPO,
  Eyebrow,
  Reveal,
  Section,
  SectionHeading,
  Stat,
  buttonStyles,
  usePrefersReducedMotion,
} from "@/components/verify/verify-ui";
import { cn } from "@/lib/utils";

/* ─── SEO head (unchanged) ─── */
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

/* ═══════════════════════════════════════════════════════════════════════════
   Page

   Section order and anchor ids are unchanged (#pipeline, #results,
   #proof-bundle, #gs1-resolver, #risk-platform, #bulk-verification) so existing
   inbound links keep working.

   WORDING RULE (PRD): `counterfeit`, `fake`, `fraud`, `genuine` and `authentic`
   never describe a specific item's verdict anywhere on this page. Verdict copy
   is rendered verbatim from VERDICT_RESULTS in components/verify/data.ts.
   ═══════════════════════════════════════════════════════════════════════════ */

function WebVerifyPage() {
  /**
   * Which risk signal is being inspected. Lifted here so the gauge and the
   * signal cards highlight together — hovering a card isolates its arc segment.
   */
  const [activeSignal, setActiveSignal] = React.useState<string | null>(null);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-ink">
      {/* ══════════════════════════════════════════════
          1 — HERO
          ══════════════════════════════════════════════ */}
      <section
        aria-labelledby="verify-hero-title"
        className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20"
      >
        <AmbientMesh />

        <div className="relative z-10 mx-auto max-w-[1240px] px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-16">
            {/* Copy */}
            <div>
              <Reveal>
                <Eyebrow>
                  <ShieldCheck className="size-3.5" strokeWidth={2} aria-hidden="true" />
                  Web Verify
                </Eyebrow>
              </Reveal>

              <Reveal delay={0.08}>
                <h1
                  id="verify-hero-title"
                  className="mt-6 max-w-[16ch] text-balance text-[clamp(2.4rem,5.2vw,3.9rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-ink"
                >
                  A defensible answer in{" "}
                  <span className="text-primary">under three seconds.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.14}>
                <p className="mt-6 max-w-[560px] text-[17px] leading-[1.65] text-ink-muted">
                  A consumer scans a QR code and gets a clear, defensible answer —
                  no app, no account. Behind that simple moment is a full
                  verification and risk-detection system that never guesses and
                  never returns a free-text answer.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <a href="/#pilot" className={cn(buttonStyles.primary, "group px-7 py-3.5")}>
                    Request pilot
                    <ArrowRight
                      className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </a>
                  <a
                    href="#proof-bundle"
                    className="group inline-flex items-center gap-2 rounded-full px-3 py-3.5 text-[14px] font-semibold text-ink transition-colors duration-200 hover:text-primary motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    <Download className="size-4 text-primary" strokeWidth={2} aria-hidden="true" />
                    Proof bundle &amp; open-source tool
                    <ArrowRight
                      className="size-3.5 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100 motion-reduce:transition-none"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </Reveal>
            </div>

            {/* The verification dial */}
            <Reveal delay={0.24} y={28}>
              <HeroVisual className="mx-auto max-w-[380px] lg:mx-0" />
            </Reveal>
          </div>

          {/* Pipeline preview rail */}
          <Reveal delay={0.3}>
            <div className="mt-14">
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted/70">
                Every scan runs all eight stages
              </span>
              <PipelineRail className="mt-3" />
            </div>
          </Reveal>

          {/* Proof strip */}
          <Reveal delay={0.36}>
            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-black/[0.07] pt-8 sm:grid-cols-4">
              <div>
                <dt className="sr-only">Verification stages</dt>
                <dd>
                  <Stat
                    value={PIPELINE_STAGES.length}
                    label="Verification stages"
                    sub="Fails closed at every one"
                  />
                </dd>
              </div>
              <div>
                <dt className="sr-only">Possible results</dt>
                <dd>
                  <Stat
                    value={VERDICT_RESULTS.length}
                    label="Possible results"
                    sub="A closed set, never free text"
                  />
                </dd>
              </div>
              <div>
                <dt className="sr-only">Published risk signals</dt>
                <dd>
                  <Stat
                    value={RISK_SIGNALS.length}
                    label="Published risk signals"
                    sub="Every score decomposes"
                  />
                </dd>
              </div>
              <div>
                <dt className="sr-only">Identifiers per bulk job</dt>
                <dd>
                  <Stat
                    value="50,000"
                    label="Identifiers per job"
                    sub="Enterprise bulk verification"
                  />
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          2 — EIGHT-STAGE VERIFICATION PIPELINE
          ══════════════════════════════════════════════ */}
      <Section id="pipeline" tone="surface" labelledBy="pipeline-title">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,600px)] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              id="pipeline-title"
              eyebrow="Verification pipeline"
              title={
                <>
                  Eight stages. <span className="text-primary">Fails closed.</span>
                </>
              }
              lede="Every scan runs all eight stages in sequence. If there is doubt at any stage, the result never says verified. The system fails closed — not optimistically."
            />

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-col gap-3">
                <div className="flex items-start gap-3 rounded-2xl border border-black/[0.06] bg-white p-4">
                  <Lock className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2} aria-hidden="true" />
                  <p className="text-[13.5px] leading-[1.55] text-ink-muted">
                    <span className="font-semibold text-ink">Fail closed.</span> An
                    inconclusive stage produces an inconclusive result. The pipeline
                    has no path that upgrades doubt into confirmation.
                  </p>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-black/[0.06] bg-white p-4">
                  <Timer className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2} aria-hidden="true" />
                  <p className="text-[13.5px] leading-[1.55] text-ink-muted">
                    <span className="font-semibold text-ink">Under three seconds.</span>{" "}
                    All eight stages complete inside the budget a person will actually
                    wait at a shelf.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <VerificationPipeline />
          </Reveal>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════
          3 — THE CLOSED SET OF SEVEN RESULTS
          ══════════════════════════════════════════════ */}
      <Section id="results" labelledBy="results-title">
        <SectionHeading
          id="results-title"
          eyebrow="Results"
          title={
            <>
              A closed set of{" "}
              <span className="text-primary">seven possible results.</span>
            </>
          }
          lede="There are no free-text answers, no ambiguous messages, and no invented verdicts. Every scan resolves to exactly one of these seven outcomes — grouped below by how seriously to read them."
          align="center"
        />

        <Reveal delay={0.14}>
          <SeverityLegend className="mt-8" />
        </Reveal>

        <div className="mt-12">
          <VerdictGrid />
        </div>

        <Reveal delay={0.1}>
          <div className="mt-4">
            <LifecycleTrack />
          </div>
        </Reveal>
      </Section>

      {/* ══════════════════════════════════════════════
          4 — PROOF BUNDLE & OPEN-SOURCE TOOL
          ══════════════════════════════════════════════ */}
      <Section id="proof-bundle" tone="surface-dots" labelledBy="proof-bundle-title">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              id="proof-bundle-title"
              eyebrow="Independent verification"
              title={
                <>
                  Re-check the result <span className="text-primary">without us.</span>
                </>
              }
            />
            <div className="mt-6">
              <ProofBundleNarrative />
            </div>
          </div>

          <Reveal delay={0.12}>
            <ProofBundleManifest />
          </Reveal>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════
          5 — GS1 DIGITAL LINK RESOLVER
          ══════════════════════════════════════════════ */}
      <Section id="gs1-resolver" labelledBy="gs1-title">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal className="order-2 lg:order-1" delay={0.1}>
            <ResolverRouting />
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              id="gs1-title"
              eyebrow="GS1 Digital Link resolver"
              title={
                <>
                  One scan. The right destination for{" "}
                  <span className="text-primary">who's asking.</span>
                </>
              }
              lede="Scanning a product's code redirects to the right destination based on who's scanning. A consumer sees the product passport. A certification body sees the compliance evidence. A regulator sees the full audit trail. Same code, right context, every time."
            />

            <Reveal delay={0.18}>
              <p className="mt-6 max-w-[560px] text-[15px] leading-[1.65] text-ink-muted">
                This is implemented using the GS1 Digital Link standard. For a
                detailed explanation of how the standard itself works, see{" "}
                {/* Plain <a>: /compliance/gs1-digital-link is Rishabh's route, not yet merged. */}
                <a
                  href="/compliance/gs1-digital-link"
                  className="rounded-sm font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  /compliance/gs1-digital-link
                </a>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════
          6 — RISK PLATFORM
          ══════════════════════════════════════════════ */}
      <Section id="risk-platform" tone="surface" labelledBy="risk-title">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:items-start lg:gap-16">
          <SectionHeading
            id="risk-title"
            eyebrow="Risk platform"
            title={
              <>
                Ten published signals.{" "}
                <span className="text-primary">Every score is explainable.</span>
              </>
            }
            lede="Every scan is scored against ten named, published signals. A risk score is never a black-box number — it always decomposes into which named signals contributed and by how much. Every factor is auditable."
          />

          <Reveal delay={0.12} className="lg:sticky lg:top-28">
            <RiskDecomposition
              activeSignal={activeSignal}
              onActiveSignal={setActiveSignal}
            />
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12">
            <RiskSignalList
              activeSignal={activeSignal}
              onActiveSignal={setActiveSignal}
            />
          </div>
        </Reveal>
      </Section>

      {/* ══════════════════════════════════════════════
          7 — ENTERPRISE BULK VERIFICATION
          ══════════════════════════════════════════════ */}
      <Section id="bulk-verification" labelledBy="bulk-title">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              id="bulk-title"
              eyebrow="Enterprise compliance"
              title={
                <>
                  Verify up to <span className="text-primary">50,000 identifiers</span>{" "}
                  in a single job.
                </>
              }
              lede="Enterprise compliance teams don't scan one product at a time. Bulk verification accepts up to 50,000 identifiers in a single job — upload a CSV, run the full eight-stage pipeline across the entire batch, and download a structured results report."
            />

            <Reveal delay={0.16}>
              <ul className="mt-8 grid list-none gap-2.5 p-0">
                {BULK_CAPABILITIES.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 rounded-xl border border-black/[0.06] bg-white px-4 py-3 transition-colors duration-200 hover:border-primary/25 motion-reduce:transition-none"
                  >
                    <ShieldCheck
                      className="mt-px size-4 shrink-0 text-primary"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    <span className="text-[13.5px] leading-[1.5] text-ink-muted">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-8">
                <a href="/#pilot" className={cn(buttonStyles.primary, "group")}>
                  Talk to us about bulk verification
                  <ArrowRight
                    className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <BulkResultsPanel />
          </Reveal>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════
          8 — CLOSING CTA
          ══════════════════════════════════════════════ */}
      <ClosingCTA />
    </main>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Closing CTA

   The previous version was a modest dark card. At the bottom of a page this
   long, the close needs to carry as much weight as the hero: full-bleed ink
   panel, a slow aurora behind the type (motion-driven so it respects reduced
   motion), and a single unmistakable primary action.
   ═══════════════════════════════════════════════════════════════════════════ */

function ClosingCTA() {
  const reduced = usePrefersReducedMotion();

  return (
    <section aria-labelledby="verify-cta-title" className="px-6 pb-24 lg:px-10">
      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[32px] bg-ink px-7 py-16 sm:px-14 sm:py-20">
            {/* Aurora — slow, low-opacity, primary only */}
            {!reduced ? (
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-1/2 opacity-[0.30]"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, oklch(0.72 0.19 148 / 0.55) 70deg, transparent 150deg, transparent 230deg, oklch(0.72 0.19 148 / 0.35) 300deg, transparent 360deg)",
                  filter: "blur(70px)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
              />
            ) : null}

            {/* Hairline grid */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.6]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px)," +
                  "linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
                backgroundSize: "56px 56px",
                maskImage:
                  "radial-gradient(ellipse 70% 90% at 50% 50%, black 20%, transparent 80%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 70% 90% at 50% 50%, black 20%, transparent 80%)",
              }}
            />

            <div className="relative z-10 mx-auto flex max-w-[760px] flex-col items-center text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-primary backdrop-blur-sm">
                Get started
              </span>

              <h2
                id="verify-cta-title"
                className="mt-7 text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-[46px]"
              >
                Put a defensible answer behind every code you print.
              </h2>

              <p className="mt-5 max-w-[560px] text-[16px] leading-[1.65] text-white/55">
                Run a pilot on a single SKU, or bring a compliance backlog through
                bulk verification. Either way, every result comes with a proof
                bundle anyone can re-check without us.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href="/#pilot"
                  className={cn(
                    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full",
                    "bg-primary px-8 py-4 text-[15px] font-semibold text-white",
                    "shadow-[0_10px_34px_-8px_rgba(22,193,95,0.65)]",
                    "transition-all duration-200 hover:shadow-[0_14px_44px_-8px_rgba(22,193,95,0.8)]",
                    "motion-reduce:transition-none",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full motion-reduce:hidden"
                  />
                  Request pilot
                  <ArrowRight
                    className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </a>

                <a
                  href="#proof-bundle"
                  className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5",
                    "px-8 py-4 text-[15px] font-semibold text-white backdrop-blur-sm",
                    "transition-all duration-200 hover:border-white/30 hover:bg-white/10",
                    "motion-reduce:transition-none",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
                  )}
                >
                  See the proof bundle
                </a>
              </div>

              {/* Standards footnote */}
              <ul className="mt-12 flex list-none flex-wrap items-center justify-center gap-x-8 gap-y-3 p-0 text-[12px] font-medium text-white/35">
                {["GS1 Digital Link", "W3C Verifiable Credentials", "Hyperledger Fabric", "EU DPP"].map(
                  (standard, i) => (
                    <motion.li
                      key={standard}
                      initial={reduced ? false : { opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.07, duration: 0.4, ease: EASE_OUT_EXPO }}
                    >
                      {standard}
                    </motion.li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
