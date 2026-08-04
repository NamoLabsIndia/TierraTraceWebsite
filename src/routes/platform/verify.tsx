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
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-ink flex items-center justify-center">
      <div className="text-center px-6 py-32">
        <h1 className="text-4xl sm:text-5xl font-bold text-ink mb-6">Coming Soon</h1>
        <p className="text-lg text-ink-muted max-w-md mx-auto">
          The Web Verify platform is currently being updated. Please check back later.
        </p>
      </div>
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
