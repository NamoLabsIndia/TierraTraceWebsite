import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ChevronRight, ScrollText, GitCommit, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/resources/release-notes")({
  head: () => ({
    meta: [
      { title: "Release Notes — TierraTrace" },
      {
        name: "description",
        content: "Feature releases, capability changes, and product updates across the TierraTrace platform.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://www.tierratrace.in/resources/release-notes" },
    ],
  }),
  component: ReleaseNotesPage,
});

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const RELEASE_TYPE_STYLE: Record<string, string> = {
  Feature: "border-primary/20 bg-primary/8 text-primary",
  Fix: "border-amber-200 bg-amber-50 text-amber-700",
  "Breaking Change": "border-red-200 bg-red-50 text-red-700",
  Improvement: "border-blue-200 bg-blue-50 text-blue-700",
  Infrastructure: "border-gray-200 bg-gray-50 text-gray-600",
};

const RELEASES = [
  {
    version: "v1.3.0",
    date: "Jul 28, 2026",
    label: "July 2026 Release",
    items: [
      { type: "Feature", text: "CBAM carbon declaration export — generate compliant quarterly reports directly from the Carbon module." },
      { type: "Feature", text: "Webhook event filtering — subscribe to specific event types per product category, reducing unnecessary delivery volume." },
      { type: "Improvement", text: "Verification pipeline latency reduced from ~3s to ~1.8s median on the Resolve and Anchor stages." },
      { type: "Fix", text: "Fixed an edge case where batch passports with >500 serial numbers failed signature validation on the final page." },
    ],
  },
  {
    version: "v1.2.0",
    date: "Jun 15, 2026",
    label: "June 2026 Release",
    items: [
      { type: "Feature", text: "Supplier portal — suppliers can now submit declaration data directly via a hosted form, without API access." },
      { type: "Feature", text: "SAP S/4HANA connector GA — bidirectional sync of production orders and goods movements into the trace event graph." },
      { type: "Improvement", text: "Passport schema editor now supports conditional required fields based on product category selection." },
      { type: "Infrastructure", text: "Upgraded Hyperledger Fabric channel to v2.5 LTS for all enterprise workspaces." },
    ],
  },
  {
    version: "v1.1.0",
    date: "May 8, 2026",
    label: "May 2026 Release",
    items: [
      { type: "Feature", text: "TierraTrace Carbon module launched — Scope 1–3 emissions tracking tied to the passport lifecycle." },
      { type: "Feature", text: "Offline verification tool (open source) published — consumers can verify passports without network access." },
      { type: "Improvement", text: "QR code generation now embeds a cryptographic commitment hash, making the code itself tamper-evident." },
      { type: "Fix", text: "Resolved a race condition in event streaming when two workers wrote to the same product ledger within the same millisecond." },
    ],
  },
  {
    version: "v1.0.0",
    date: "Apr 1, 2026",
    label: "Platform Launch",
    items: [
      { type: "Feature", text: "TierraTrace Passport — issue EU ESPR-aligned Digital Product Passports at scale." },
      { type: "Feature", text: "TierraTrace Trace — end-to-end supply chain event graph with Hyperledger Fabric anchoring." },
      { type: "Feature", text: "TierraTrace Verify — eight-stage cryptographic verification pipeline, sub-3s consumer-facing." },
      { type: "Feature", text: "TierraTrace Connect — OpenAPI 3.1 Gateway, REST/GraphQL/gRPC, webhook registry." },
    ],
  },
];

function ReleaseNotesPage() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16">
        <div
          aria-hidden
          className="absolute -top-24 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-40"
          style={{ background: "radial-gradient(circle, rgba(16,195,90,0.10) 0%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-[1240px] px-6">
          <nav className="mb-8 flex items-center gap-2 text-[13px] text-ink-muted">
            <Link to="/resources" className="hover:text-primary transition-colors">Resources</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-ink">Release Notes</span>
          </nav>

          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-primary">
              <ScrollText className="h-3 w-3" />
              Release Notes
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-2xl text-[42px] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-[54px]">
              What's new in{" "}
              <span className="text-primary">TierraTrace.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 max-w-xl text-[17px] leading-[1.65] text-ink-muted">
              Feature releases and product updates, newest first. For a
              detailed line-by-line log, see the{" "}
              <Link
                to="/resources/changelog"
                className="text-primary underline-offset-2 hover:underline"
              >
                Changelog
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-32">
        <div className="mx-auto max-w-[860px] px-6">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-black/6" />

            <div className="space-y-12">
              {RELEASES.map((release, ri) => (
                <Reveal key={release.version} delay={ri * 0.07}>
                  <div className="relative flex gap-6">
                    {/* Timeline dot */}
                    <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-white z-10">
                      <div className="h-3 w-3 rounded-full bg-primary" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-2">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="text-[18px] font-bold tracking-tight text-ink">
                          {release.version}
                        </span>
                        <span className="text-[13px] text-ink-muted">{release.date}</span>
                        <span className="rounded-full bg-surface border border-black/8 px-2.5 py-0.5 text-[11px] font-medium text-ink-muted">
                          {release.label}
                        </span>
                      </div>

                      <div className="rounded-2xl border border-black/6 bg-white overflow-hidden">
                        {release.items.map((item, ii) => (
                          <div
                            key={ii}
                            className={`flex items-start gap-3 px-5 py-4 ${ii < release.items.length - 1 ? "border-b border-black/5" : ""}`}
                          >
                            <span className={`mt-0.5 shrink-0 inline-flex rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${RELEASE_TYPE_STYLE[item.type] ?? "border-black/8 text-ink-muted bg-white"}`}>
                              {item.type}
                            </span>
                            <p className="text-[13.5px] leading-[1.65] text-ink/80">
                              {item.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1} className="mt-16">
            <div className="flex items-center justify-center">
              <Link
                to="/resources/changelog"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-[14px] font-medium text-ink hover:bg-surface transition"
              >
                <GitCommit className="h-4 w-4 text-primary" />
                View full changelog
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
