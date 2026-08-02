import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Download,
  Lock,
  ShieldCheck,
  Timer,
} from "lucide-react";

import {
  BULK_CAPABILITIES,
  PIPELINE_STAGES,
  RISK_SIGNALS,
  VERDICT_RESULTS,
} from "@/components/verify/data";
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
  Eyebrow,
  Reveal,
  Section,
  SectionHeading,
  Stat,
  buttonStyles,
} from "@/components/verify/verify-ui";

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

   Section order and anchor ids are unchanged from the previous implementation
   (#pipeline, #results, #proof-bundle, #gs1-resolver, #risk-platform,
   #bulk-verification) so existing inbound links keep working.

   WORDING RULE (PRD): `counterfeit`, `fake`, `fraud`, `genuine` and `authentic`
   never describe a specific item's verdict anywhere on this page. Verdict copy
   is rendered verbatim from VERDICT_RESULTS in components/verify/data.ts.
   ═══════════════════════════════════════════════════════════════════════════ */

function WebVerifyPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-ink">
      {/* ══════════════════════════════════════════════
          1 — HERO
          ══════════════════════════════════════════════ */}
      <section
        aria-labelledby="verify-hero-title"
        className="relative overflow-hidden bg-topographic pt-36 pb-16 sm:pt-44 sm:pb-20"
      >
        <div
          aria-hidden="true"
          className="nature-orb-1 pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="nature-orb-2 pointer-events-none absolute right-0 top-20 h-[400px] w-[400px] rounded-full bg-primary/[0.08] blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-[1240px] px-6 lg:px-10">
          <Reveal>
            <Eyebrow>
              <ShieldCheck className="size-3.5" strokeWidth={2} aria-hidden="true" />
              Web Verify
            </Eyebrow>
          </Reveal>

          <Reveal delay={0.08}>
            <h1
              id="verify-hero-title"
              className="mt-6 max-w-[16ch] text-balance text-[clamp(2.4rem,5.4vw,4.15rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-ink"
            >
              A defensible answer in{" "}
              <span className="text-primary">under three seconds.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-6 max-w-[640px] text-[17px] leading-[1.65] text-ink-muted sm:text-[18px]">
              A consumer scans a QR code and gets a clear, defensible answer — no
              app, no account. Behind that simple moment is a full verification and
              risk-detection system that never guesses and never returns a
              free-text answer.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="/#pilot" className={buttonStyles.primary}>
                Request pilot
                <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
              </a>
              <a href="#proof-bundle" className={buttonStyles.secondary}>
                <Download className="size-4 text-primary" strokeWidth={2} aria-hidden="true" />
                Proof bundle &amp; open-source tool
              </a>
            </div>
          </Reveal>

          {/* Pipeline preview rail */}
          <Reveal delay={0.26}>
            <div className="mt-12">
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted/70">
                Every scan runs all eight stages
              </span>
              <PipelineRail className="mt-3" />
            </div>
          </Reveal>

          {/* Proof strip — the page's substance, surfaced immediately */}
          <Reveal delay={0.32}>
            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-black/8 pt-8 sm:grid-cols-4">
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
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              id="pipeline-title"
              eyebrow="Verification pipeline"
              title={
                <>
                  Eight stages.{" "}
                  <span className="text-primary">Fails closed.</span>
                </>
              }
              lede="Every scan runs all eight stages in sequence. If there is doubt at any stage, the result never says verified. The system fails closed — not optimistically."
            />

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-col gap-3">
                <div className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white p-4">
                  <Lock className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2} aria-hidden="true" />
                  <p className="text-[13.5px] leading-[1.55] text-ink-muted">
                    <span className="font-semibold text-ink">Fail closed.</span>{" "}
                    An inconclusive stage produces an inconclusive result. The
                    pipeline has no path that upgrades doubt into confirmation.
                  </p>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white p-4">
                  <Timer className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2} aria-hidden="true" />
                  <p className="text-[13.5px] leading-[1.55] text-ink-muted">
                    <span className="font-semibold text-ink">Under three seconds.</span>{" "}
                    All eight stages complete inside the budget a person will
                    actually wait at a shelf.
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
          <div className="mt-8 flex justify-center">
            <SeverityLegend />
          </div>
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
                  Re-check the result{" "}
                  <span className="text-primary">without us.</span>
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
                  className="rounded-sm font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
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
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:items-start lg:gap-16">
          <div>
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
          </div>

          <Reveal delay={0.12} className="lg:sticky lg:top-28">
            <RiskDecomposition />
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12">
            <RiskSignalList />
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
                  Verify up to{" "}
                  <span className="text-primary">50,000 identifiers</span> in a
                  single job.
                </>
              }
              lede="Enterprise compliance teams don't scan one product at a time. Bulk verification accepts up to 50,000 identifiers in a single job — upload a CSV, run the full eight-stage pipeline across the entire batch, and download a structured results report."
            />

            <Reveal delay={0.16}>
              <ul className="mt-8 grid list-none gap-2.5 p-0">
                {BULK_CAPABILITIES.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 rounded-xl border border-black/5 bg-white px-4 py-3"
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
                <a href="/#pilot" className={buttonStyles.primary}>
                  Talk to us about bulk verification
                  <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
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
      <section aria-labelledby="verify-cta-title" className="px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-[1240px]">
          <Reveal>
            <div className="relative overflow-hidden rounded-[28px] bg-ink px-7 py-12 sm:px-12 sm:py-14">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 size-[340px] rounded-full bg-primary/15 blur-3xl"
              />

              <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-[620px]">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-primary">
                    Get started
                  </span>
                  <h2
                    id="verify-cta-title"
                    className="mt-5 text-balance text-[28px] font-semibold leading-[1.12] tracking-[-0.03em] text-white sm:text-[36px]"
                  >
                    Put a defensible answer behind every code you print.
                  </h2>
                  <p className="mt-4 text-[15.5px] leading-[1.6] text-white/60">
                    Run a pilot on a single SKU, or bring a compliance backlog
                    through bulk verification. Either way, every result comes with
                    a proof bundle anyone can re-check without us.
                  </p>
                </div>

                <div className="flex shrink-0 flex-wrap gap-3">
                  <a
                    href="/#pilot"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-[14px] font-semibold text-white transition-all duration-200 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-ink motion-reduce:transition-none"
                  >
                    Request pilot
                    <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
                  </a>
                  <a href="#proof-bundle" className={buttonStyles.ghostOnDark}>
                    See the proof bundle
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
