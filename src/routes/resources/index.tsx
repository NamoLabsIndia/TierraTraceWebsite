import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  BookOpen,
  FileText,
  Download,
  Code2,
  ScrollText,
  GitCommit,
  ArrowRight,
  Users,
  Newspaper,
} from "lucide-react";

export const Route = createFileRoute("/resources/")({
  head: () => ({
    meta: [
      { title: "Resources — TierraTrace" },
      {
        name: "description",
        content:
          "Documentation, whitepapers, blog posts, API reference, and release notes for the TierraTrace Digital Product Passport platform.",
      },
      { property: "og:title", content: "Resources — TierraTrace" },
    ],
    links: [{ rel: "canonical", href: "https://www.tierratrace.in/resources" }],
  }),
  component: ResourcesIndexPage,
});

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
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const RESOURCE_CARDS = [
  {
    icon: BookOpen,
    label: "Documentation",
    href: "/resources/documentation",
    desc: "Conceptual guides on how the platform works — from provisioning to passports, traceability, and verification.",
    cta: "Read docs",
    accent: false,
  },
  {
    icon: Newspaper,
    label: "Blog",
    href: "/resources/blog",
    desc: "Articles on supply chain traceability, Digital Product Passports, EU regulations, and platform updates.",
    cta: "Read articles",
    accent: false,
  },
  {
    icon: FileText,
    label: "Whitepapers",
    href: "/resources/whitepapers",
    desc: "In-depth guides on the EU DPP mandate and CBAM compliance. Practical playbooks for manufacturers and supply chain teams.",
    cta: "View whitepapers",
    accent: true,
  },
  {
    icon: Users,
    label: "Case Studies",
    href: "/resources/case-studies",
    desc: "Real-world deployments showing how TierraTrace delivers traceability and compliance for production supply chains.",
    cta: "View case studies",
    accent: false,
  },
  {
    icon: Download,
    label: "Downloads",
    href: "/resources/downloads",
    desc: "PDF exports of whitepapers, platform spec sheets, and one-page overviews — ready to share with your team.",
    cta: "Browse downloads",
    accent: false,
  },
  {
    icon: Code2,
    label: "API Reference",
    href: "/resources/api-reference",
    desc: "Authentication, rate limits, webhook signing, and conceptual overview of the TierraTrace API Gateway.",
    cta: "View API docs",
    accent: false,
  },
  {
    icon: ScrollText,
    label: "Release Notes",
    href: "/resources/release-notes",
    desc: "Feature releases, capability changes, and product updates across the TierraTrace platform.",
    cta: "See releases",
    accent: false,
  },
  {
    icon: GitCommit,
    label: "Changelog",
    href: "/resources/changelog",
    desc: "A detailed, dated log of every change — features, fixes, and infrastructure updates — in one place.",
    cta: "See changelog",
    accent: false,
  },
];

function ResourcesIndexPage() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-32 pb-20">
        {/* Background orbs */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-32 right-0 w-[600px] h-[600px] rounded-full opacity-50"
            style={{
              background:
                "radial-gradient(circle, rgba(16,195,90,0.10) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full opacity-40"
            style={{
              background:
                "radial-gradient(circle, rgba(16,195,90,0.08) 0%, transparent 70%)",
            }}
          />
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(16,195,90,1) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1240px] px-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-primary">
              Resources
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-3xl text-[42px] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-[56px] lg:text-[68px]">
              Everything you need{" "}
              <span className="text-primary">to build with TierraTrace.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-[17px] leading-[1.65] text-ink-muted">
              Documentation, whitepapers, API reference, release notes, and more
              — in one place, for every team building on or evaluating the
              platform.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Cards grid */}
      <section className="py-16 pb-32">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {RESOURCE_CARDS.map((card, i) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.label} delay={i * 0.04}>
                  <Link
                    to={card.href}
                    className={`group flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-10px_rgba(0,0,0,0.08)] ${
                      card.accent
                        ? "border-primary/20 bg-primary/5 hover:border-primary/40"
                        : "border-black/6 bg-white hover:border-primary/20"
                    }`}
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                        card.accent
                          ? "bg-primary/15 text-primary group-hover:bg-primary group-hover:text-white"
                          : "bg-surface text-primary group-hover:bg-primary group-hover:text-white"
                      }`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>

                    <div className="mt-4 flex flex-1 flex-col">
                      <h2 className="text-[17px] font-semibold tracking-tight text-ink">
                        {card.label}
                      </h2>
                      <p className="mt-2 flex-1 text-[13.5px] leading-[1.65] text-ink-muted">
                        {card.desc}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center gap-1.5 text-[13px] font-medium text-primary">
                      <span>{card.cta}</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
