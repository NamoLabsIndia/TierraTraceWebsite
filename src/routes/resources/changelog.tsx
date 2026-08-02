import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ChevronRight, GitCommit, ScrollText, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/resources/changelog")({
  head: () => ({
    meta: [
      { title: "Changelog — TierraTrace" },
      {
        name: "description",
        content: "A detailed, dated log of every feature, fix, and infrastructure update to the TierraTrace platform.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://www.tierratrace.in/resources/changelog" },
    ],
  }),
  component: ChangelogPage,
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

// More granular than release notes — meant to be updated frequently
const CHANGELOG = [
  {
    date: "July 28, 2026",
    changes: [
      { type: "added", text: "CBAM carbon declaration export in Carbon module" },
      { type: "added", text: "Webhook event filtering by product category" },
      { type: "fixed", text: "Batch passports >500 items signature validation error" },
    ]
  },
  {
    date: "July 14, 2026",
    changes: [
      { type: "improved", text: "Reduced verification pipeline latency from 3s to 1.8s" },
      { type: "added", text: "Node.js SDK v1.1.0 release with automatic token refresh" },
    ]
  },
  {
    date: "June 15, 2026",
    changes: [
      { type: "added", text: "Supplier portal hosted form submission" },
      { type: "added", text: "SAP S/4HANA bidirectional connector" },
      { type: "improved", text: "Conditional required fields in passport schema editor" },
      { type: "changed", text: "Upgraded Hyperledger Fabric channel to v2.5 LTS" },
    ]
  },
  {
    date: "May 22, 2026",
    changes: [
      { type: "fixed", text: "Race condition in event streaming endpoint" },
      { type: "improved", text: "Web dashboard rendering performance for large event graphs" },
    ]
  },
  {
    date: "May 8, 2026",
    changes: [
      { type: "added", text: "TierraTrace Carbon module GA" },
      { type: "added", text: "Offline verification tool published to GitHub" },
      { type: "improved", text: "QR code generation now embeds cryptographic commitment" },
    ]
  },
  {
    date: "April 1, 2026",
    changes: [
      { type: "added", text: "Platform initial release (Passport, Trace, Verify, Connect)" },
    ]
  },
];

const TYPE_STYLE: Record<string, string> = {
  added: "text-primary bg-primary/10",
  fixed: "text-amber-700 bg-amber-100",
  improved: "text-blue-700 bg-blue-100",
  changed: "text-purple-700 bg-purple-100",
};

function ChangelogPage() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 border-b border-black/5">
        <div
          aria-hidden
          className="absolute -top-24 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-40"
          style={{ background: "radial-gradient(circle, rgba(16,195,90,0.10) 0%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-[1240px] px-6">
          <nav className="mb-8 flex items-center gap-2 text-[13px] text-ink-muted">
            <Link to="/resources" className="hover:text-primary transition-colors">Resources</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-ink">Changelog</span>
          </nav>

          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-primary">
              <GitCommit className="h-3 w-3" />
              Changelog
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-2xl text-[42px] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-[54px]">
              Every update, <span className="text-primary">logged.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 max-w-xl text-[17px] leading-[1.65] text-ink-muted">
              A chronological, granular list of what we've shipped. For high-level narratives on major updates, read the{" "}
              <Link to="/resources/release-notes" className="text-primary underline-offset-2 hover:underline">Release Notes</Link>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Log */}
      <section className="py-16 pb-32">
        <div className="mx-auto max-w-[860px] px-6">
          <div className="space-y-12">
            {CHANGELOG.map((log, i) => (
              <Reveal key={log.date} delay={i * 0.05}>
                <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                  {/* Date column */}
                  <div className="md:w-32 shrink-0 pt-1">
                    <span className="text-[14px] font-medium text-ink-muted sticky top-24">
                      {log.date}
                    </span>
                  </div>

                  {/* Changes */}
                  <div className="flex-1 space-y-4">
                    {log.changes.map((change, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <span className={`mt-0.5 shrink-0 inline-flex rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest ${TYPE_STYLE[change.type] ?? "bg-gray-100 text-gray-700"}`}>
                          {change.type}
                        </span>
                        <p className="text-[14.5px] leading-[1.6] text-ink">
                          {change.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-20">
            <div className="rounded-2xl border border-primary/15 bg-primary/5 p-8 text-center">
              <h3 className="text-[18px] font-semibold tracking-tight text-ink">
                Catching up on major releases?
              </h3>
              <p className="mt-2 text-[14.5px] text-ink-muted max-w-md mx-auto mb-6">
                If you're evaluating the platform and want a summary of major new capabilities rather than a granular fix list.
              </p>
              <Link
                to="/resources/release-notes"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-[14px] font-semibold text-white hover:brightness-[1.05] transition"
              >
                <ScrollText className="h-4 w-4" />
                Read the Release Notes
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
