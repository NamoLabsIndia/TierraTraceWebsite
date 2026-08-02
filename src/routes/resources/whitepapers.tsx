import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, ChevronRight, FileText, Download } from "lucide-react";

export const Route = createFileRoute("/resources/whitepapers")({
  head: () => ({
    meta: [
      { title: "Whitepapers — TierraTrace" },
      {
        name: "description",
        content:
          "In-depth guides on EU Digital Product Passport compliance and CBAM playbooks for manufacturers and supply chain leaders.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.tierratrace.in/resources/whitepapers",
      },
    ],
  }),
  component: WhitepapersPage,
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

const WHITEPAPERS = [
  {
    tag: "EU Regulation",
    title: "EU Digital Product Passport — A Manufacturer's Guide",
    desc: "A practical deep-dive into the ESPR framework, what data a DPP must carry, which product categories are in scope first, and how TierraTrace maps to each requirement. Written for sustainability, compliance, and product teams — not lawyers.",
    pages: "34 pages",
    updated: "July 2026",
    topics: [
      "ESPR scope and timeline",
      "Mandatory data attributes per category",
      "Supply chain data collection requirements",
      "How a passport gets issued and verified",
      "What 'compliance' actually looks like operationally",
    ],
    primary: true,
    downloadLabel: "Download PDF",
  },
  {
    tag: "Carbon & Trade",
    title: "CBAM Playbook — Carbon Border Adjustment Mechanism",
    desc: "The Carbon Border Adjustment Mechanism is already in its transitional phase. This playbook explains what embedded carbon data you need to collect, how it maps to the six in-scope sectors, and how TierraTrace Carbon structures that data for declaration.",
    pages: "28 pages",
    updated: "July 2026",
    topics: [
      "CBAM transitional timeline and obligations",
      "Embedded carbon calculation methodology",
      "In-scope sectors and HS code mapping",
      "Declaration workflows and reporting",
      "Integration with Carbon footprint tracking",
    ],
    primary: false,
    downloadLabel: "Download PDF",
  },
];

function WhitepapersPage() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16">
        <div
          aria-hidden
          className="absolute -top-24 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(16,195,90,0.10) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-[1240px] px-6">
          <nav className="mb-8 flex items-center gap-2 text-[13px] text-ink-muted">
            <Link
              to="/resources"
              className="hover:text-primary transition-colors"
            >
              Resources
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-ink">Whitepapers</span>
          </nav>

          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-primary">
              <FileText className="h-3 w-3" />
              Whitepapers
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-3xl text-[42px] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-[54px]">
              Long-form guides on{" "}
              <span className="text-primary">the mandates that matter.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-5 max-w-xl text-[17px] leading-[1.65] text-ink-muted">
              Two guides promised since day one — the EU DPP mandate and the
              CBAM playbook. Both are substantive, practical, and aimed at
              practitioners, not policy readers.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Whitepapers */}
      <section className="py-12 pb-32">
        <div className="mx-auto max-w-[1240px] px-6 grid gap-6">
          {WHITEPAPERS.map((wp, i) => (
            <Reveal key={wp.title} delay={i * 0.08}>
              <div
                className={`group relative overflow-hidden rounded-3xl border p-8 sm:p-10 transition-all duration-300 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.08)] ${
                  wp.primary
                    ? "border-primary/20 bg-gradient-to-br from-primary/6 to-white"
                    : "border-black/6 bg-white"
                }`}
              >
                {/* Top accent line for primary */}
                {wp.primary && (
                  <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-3xl bg-primary" />
                )}

                <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
                  {/* Left content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/8 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">
                        {wp.tag}
                      </span>
                      <span className="text-[12px] text-ink-muted">
                        {wp.pages} · Updated {wp.updated}
                      </span>
                    </div>

                    <h2 className="mt-4 text-[24px] font-semibold leading-snug tracking-tight text-ink sm:text-[28px]">
                      {wp.title}
                    </h2>

                    <p className="mt-3 text-[14.5px] leading-[1.7] text-ink-muted max-w-2xl">
                      {wp.desc}
                    </p>

                    <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                      {wp.topics.map((t) => (
                        <li
                          key={t}
                          className="flex items-start gap-2.5 text-[13px] text-ink/80"
                        >
                          <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                            <svg
                              width="8"
                              height="8"
                              viewBox="0 0 10 10"
                              fill="none"
                            >
                              <path
                                d="M8.5 2.5L4 7.5L1.5 5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right CTA */}
                  <div className="mt-8 lg:mt-0 lg:flex-shrink-0 lg:w-52 flex flex-col gap-3">
                    <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-[14px] font-semibold text-white transition hover:brightness-[1.05] shadow-[0_6px_20px_-6px_rgba(16,195,90,0.45)]">
                      <Download className="h-4 w-4" />
                      {wp.downloadLabel}
                    </button>
                    <Link
                      to="/resources/downloads"
                      className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-black/10 bg-white px-5 py-3 text-[14px] font-medium text-ink transition hover:bg-surface"
                    >
                      All downloads
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
