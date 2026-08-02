import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ChevronRight, Download, FileText, LayoutTemplate } from "lucide-react";

export const Route = createFileRoute("/resources/downloads")({
  head: () => ({
    meta: [
      { title: "Downloads — TierraTrace" },
      {
        name: "description",
        content:
          "PDF whitepapers, platform spec sheets, and one-pagers from TierraTrace — ready to download and share with your team.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.tierratrace.in/resources/downloads" }],
  }),
  component: DownloadsPage,
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

const DOWNLOADS = [
  {
    icon: FileText,
    category: "Whitepaper",
    title: "EU Digital Product Passport — A Manufacturer's Guide",
    desc: "34-page guide on the ESPR framework, mandatory data attributes, and how to issue a compliant passport.",
    size: "2.4 MB · PDF",
  },
  {
    icon: FileText,
    category: "Whitepaper",
    title: "CBAM Playbook — Carbon Border Adjustment Mechanism",
    desc: "28-page playbook on embedded carbon calculation, in-scope sectors, and declaration workflows.",
    size: "1.9 MB · PDF",
  },
  {
    icon: LayoutTemplate,
    category: "Spec Sheet",
    title: "TierraTrace Platform Overview",
    desc: "One-page product summary covering all six platform modules, compliance certifications, and integration points.",
    size: "0.8 MB · PDF",
  },
  {
    icon: LayoutTemplate,
    category: "Spec Sheet",
    title: "TierraTrace API Gateway — Integration Reference",
    desc: "Authentication model, rate limits, webhook signing, and event streaming overview for technical evaluators.",
    size: "1.2 MB · PDF",
  },
];

const CATEGORY_STYLE: Record<string, string> = {
  Whitepaper: "border-primary/20 bg-primary/8 text-primary",
  "Spec Sheet": "border-amber-200 bg-amber-50 text-amber-700",
};

function DownloadsPage() {
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
            <span className="text-ink">Downloads</span>
          </nav>

          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-primary">
              <Download className="h-3 w-3" />
              Downloads
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-2xl text-[42px] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-[54px]">
              Assets ready to{" "}
              <span className="text-primary">share with your team.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 max-w-xl text-[17px] leading-[1.65] text-ink-muted">
              PDFs of every whitepaper plus platform spec sheets for technical
              and business evaluators.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Downloads list */}
      <section className="py-12 pb-32">
        <div className="mx-auto max-w-[1240px] px-6 grid gap-4 sm:grid-cols-2">
          {DOWNLOADS.map((dl, i) => {
            const Icon = dl.icon;
            return (
              <Reveal key={dl.title} delay={i * 0.06}>
                <div className="group flex h-full flex-col rounded-2xl border border-black/6 bg-white p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.07)]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface text-primary">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <span className={`self-start shrink-0 inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest ${CATEGORY_STYLE[dl.category]}`}>
                      {dl.category}
                    </span>
                  </div>

                  <h2 className="mt-4 text-[16px] font-semibold leading-snug tracking-tight text-ink">
                    {dl.title}
                  </h2>
                  <p className="mt-2 flex-1 text-[13px] leading-[1.65] text-ink-muted">
                    {dl.desc}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-black/5 pt-4">
                    <span className="text-[12px] text-ink-muted">{dl.size}</span>
                    <button className="inline-flex items-center gap-1.5 rounded-full bg-primary/8 px-4 py-1.5 text-[12.5px] font-semibold text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                      <Download className="h-3.5 w-3.5" />
                      Download
                    </button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
