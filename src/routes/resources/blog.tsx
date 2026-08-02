import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ChevronRight, Newspaper, ArrowRight, Calendar, Clock } from "lucide-react";

export const Route = createFileRoute("/resources/blog")({
  head: () => ({
    meta: [
      { title: "Blog — TierraTrace" },
      {
        name: "description",
        content:
          "Articles on supply chain traceability, Digital Product Passports, EU regulation, and platform updates from the TierraTrace team.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.tierratrace.in/resources/blog" }],
  }),
  component: BlogIndexPage,
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

const CATEGORIES = ["All", "Regulation", "Platform", "Sustainability", "Industry"];

const POSTS = [
  {
    slug: "eu-dpp-espr-timeline",
    tag: "Regulation",
    title: "EU Digital Product Passport: What the ESPR timeline means for manufacturers in 2026",
    excerpt:
      "The ESPR's delegated acts are rolling out by product category. Here's what's in scope first, what data you need to collect, and what a compliant passport actually looks like.",
    author: "TierraTrace Team",
    date: "Jul 28, 2026",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "cbam-transitional-phase",
    tag: "Regulation",
    title: "CBAM transitional phase: what importers need to declare right now",
    excerpt:
      "The Carbon Border Adjustment Mechanism's transitional reporting obligation is live. We break down which sectors are in scope, how to calculate embedded carbon, and what a quarterly report must contain.",
    author: "TierraTrace Team",
    date: "Jul 14, 2026",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "hyperledger-fabric-supply-chain",
    tag: "Platform",
    title: "Why we built TierraTrace on Hyperledger Fabric — and what that means for your data",
    excerpt:
      "Enterprise blockchain often gets dismissed as a solution looking for a problem. Here's the specific problem it solves for supply chain traceability, and why we chose Fabric over alternatives.",
    author: "TierraTrace Team",
    date: "Jul 2, 2026",
    readTime: "10 min read",
    featured: false,
  },
  {
    slug: "scope-3-supply-chain-emissions",
    tag: "Sustainability",
    title: "Getting Scope 3 emissions data from suppliers — a practical guide",
    excerpt:
      "Scope 3 is where most manufacturers' carbon footprint actually lives, and it's the hardest to measure. We walk through the data collection problem and how TierraTrace Carbon structures the solution.",
    author: "TierraTrace Team",
    date: "Jun 20, 2026",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "pharmaceutical-traceability-gmp",
    tag: "Industry",
    title: "Pharmaceutical traceability under GMP: batch records, serialisation, and what a DPP adds",
    excerpt:
      "Pharma already has strict batch traceability requirements. Here's how Digital Product Passports layer on top — and what they add for regulators, wholesalers, and end patients.",
    author: "TierraTrace Team",
    date: "Jun 10, 2026",
    readTime: "9 min read",
    featured: false,
  },
];

const TAG_COLORS: Record<string, string> = {
  Regulation: "border-blue-200 bg-blue-50 text-blue-700",
  Platform: "border-primary/20 bg-primary/8 text-primary",
  Sustainability: "border-green-200 bg-green-50 text-green-700",
  Industry: "border-amber-200 bg-amber-50 text-amber-700",
};

function BlogIndexPage() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-14">
        <div
          aria-hidden
          className="absolute -top-24 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-50"
          style={{ background: "radial-gradient(circle, rgba(16,195,90,0.10) 0%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-[1240px] px-6">
          <nav className="mb-8 flex items-center gap-2 text-[13px] text-ink-muted">
            <Link to="/resources" className="hover:text-primary transition-colors">Resources</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-ink">Blog</span>
          </nav>

          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-primary">
              <Newspaper className="h-3 w-3" />
              Blog
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-2xl text-[42px] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-[54px]">
              Regulation, traceability,{" "}
              <span className="text-primary">and what's next.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 max-w-xl text-[17px] leading-[1.65] text-ink-muted">
              Articles for supply chain and sustainability teams navigating the
              DPP mandate, CBAM, and what enterprise traceability actually looks
              like to implement.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured post */}
      <section className="border-t border-black/5 py-12">
        <div className="mx-auto max-w-[1240px] px-6">
          {POSTS.filter((p) => p.featured).map((post) => (
            <Reveal key={post.slug}>
              <Link
                to="/resources/blog/$slug"
                params={{ slug: post.slug }}
                className="group block rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/5 to-white p-8 sm:p-10 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_20px_60px_-20px_rgba(16,195,90,0.15)]"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest ${TAG_COLORS[post.tag]}`}>
                    {post.tag}
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-widest text-primary/80">
                    Featured
                  </span>
                </div>
                <h2 className="text-[24px] font-semibold leading-snug tracking-tight text-ink sm:text-[30px] group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="mt-3 max-w-2xl text-[14.5px] leading-[1.7] text-ink-muted">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-[12.5px] text-ink-muted">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> {post.readTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[13px] font-semibold text-primary">
                    Read article
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* All articles */}
      <section className="py-8 pb-32">
        <div className="mx-auto max-w-[1240px] px-6">
          <Reveal>
            <div className="flex flex-wrap gap-2 mb-8">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`rounded-full border px-4 py-1.5 text-[12.5px] font-medium transition-colors ${
                    cat === "All"
                      ? "border-primary bg-primary text-white"
                      : "border-black/10 bg-white text-ink hover:border-primary/30 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {POSTS.filter((p) => !p.featured).map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.06}>
                <Link
                  to="/resources/blog/$slug"
                  params={{ slug: post.slug }}
                  className="group flex h-full flex-col rounded-2xl border border-black/6 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.07)]"
                >
                  <span className={`self-start inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest ${TAG_COLORS[post.tag] ?? "border-black/8 text-ink-muted"}`}>
                    {post.tag}
                  </span>
                  <h3 className="mt-3 text-[16px] font-semibold leading-snug tracking-tight text-ink group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[13px] leading-[1.65] text-ink-muted line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-[12px] text-ink-muted border-t border-black/5 pt-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {post.readTime}
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
