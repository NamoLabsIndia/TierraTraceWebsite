import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ChevronRight, Users } from "lucide-react";

export const Route = createFileRoute("/resources/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — TierraTrace" },
      {
        name: "description",
        content:
          "Real-world TierraTrace deployments across supply chain industries. Case studies coming soon.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://www.tierratrace.in/resources/case-studies" },
    ],
  }),
  component: CaseStudiesPage,
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

function CaseStudiesPage() {
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
            <span className="text-ink">Case Studies</span>
          </nav>

          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-primary">
              <Users className="h-3 w-3" />
              Case Studies
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-3xl text-[42px] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-[54px]">
              How teams use{" "}
              <span className="text-primary">TierraTrace in production.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 max-w-xl text-[17px] leading-[1.65] text-ink-muted">
              Real deployments, real supply chains, real outcomes — with named
              customers who've agreed to share their story.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Empty state */}
      <section className="py-16 pb-32">
        <div className="mx-auto max-w-[1240px] px-6">
          <Reveal>
            <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-black/12 bg-surface/40 px-8 py-24 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/8 text-primary mb-6">
                <Users className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <h2 className="text-[24px] font-semibold tracking-tight text-ink">
                Case studies coming soon
              </h2>
              <p className="mt-3 max-w-md text-[14.5px] leading-[1.7] text-ink-muted">
                We only publish customer stories with explicit permission from
                the companies involved. If you're a current pilot customer and
                want to share your experience,{" "}
                <a
                  href="mailto:info@namolabs.in"
                  className="text-primary underline-offset-2 hover:underline"
                >
                  reach out to us.
                </a>
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/resources/whitepapers"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-[13.5px] font-semibold text-white hover:brightness-[1.05] transition"
                >
                  Read our whitepapers
                </Link>
                <a
                  href="/#pilot"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-[13.5px] font-medium text-ink hover:bg-surface transition"
                >
                  Request a pilot
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
