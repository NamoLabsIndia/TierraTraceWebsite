import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ChevronRight, ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/resources/blog/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.slug.replace(/-/g, " ")} — TierraTrace Blog` },
      {
        name: "description",
        content: "TierraTrace blog — supply chain traceability, EU DPP, CBAM compliance, and platform deep-dives.",
      },
    ],
  }),
  component: BlogPostPage,
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

/* ── Post content registry — add real posts here ── */
const POST_CONTENT: Record<
  string,
  {
    tag: string;
    title: string;
    date: string;
    readTime: string;
    body: React.ReactNode;
  }
> = {
  "eu-dpp-espr-timeline": {
    tag: "Regulation",
    title: "EU Digital Product Passport: What the ESPR timeline means for manufacturers in 2026",
    date: "Jul 28, 2026",
    readTime: "8 min read",
    body: (
      <>
        <p>
          The European Sustainability Products Regulation (ESPR) is the legislative
          foundation for the EU Digital Product Passport. It doesn't apply to every
          product at once — the Commission is issuing delegated acts by product category,
          with textiles and electronics at the front of the queue.
        </p>
        <h2>What's actually in scope first</h2>
        <p>
          Textile products (clothing, footwear, home textiles) are the first category
          with a firm delegated act expected. Electronics and ICT equipment follow.
          Furniture, steel, aluminium, chemicals, and tyres are all on the roadmap — the
          ordering is still subject to Commission prioritisation.
        </p>
        <h2>What a compliant DPP must carry</h2>
        <p>
          At minimum: a unique product identifier (compatible with GS1 or ISO/IEC 15459),
          the manufacturer's identity and contact information, the product's material
          composition, durability and repairability data, and a link to verified
          sustainability claims. The specific mandatory fields vary per delegated act —
          textiles will require more fibre-origin data than, say, tyres.
        </p>
        <h2>What this means operationally</h2>
        <p>
          The DPP is not a document — it's a machine-readable data record accessible via
          a QR code or NFC. That means your supply chain data collection has to be
          structured and digital upstream, not assembled at the end. If you're collecting
          supplier declarations in PDFs today, that's the first thing to fix.
        </p>
        <p>
          TierraTrace maps each mandatory field to a structured schema at product
          registration time. Suppliers contribute data via the platform's API or supplier
          portal; the passport is issued and signed once the required fields are complete.
        </p>
        <h2>Timeline to plan against</h2>
        <p>
          Delegated acts for the first product categories are expected in late 2026 / early
          2027, with a transition period before mandatory compliance. If you're in textiles
          or electronics, now is the right time to be building data infrastructure —
          waiting for the delegated act to be finalised before starting will leave you with
          very little runway.
        </p>
      </>
    ),
  },
};

function BlogPostPage() {
  const { slug } = Route.useParams();
  const post = POST_CONTENT[slug];

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 pt-24 text-center px-6">
        <p className="text-[13px] font-medium uppercase tracking-widest text-ink-muted">
          Post not found
        </p>
        <h1 className="text-[32px] font-semibold tracking-tight text-ink">
          This article doesn't exist yet.
        </h1>
        <Link
          to="/resources/blog"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-[14px] font-semibold text-white hover:brightness-[1.05] transition"
        >
          <ArrowLeft className="h-4 w-4" /> Back to blog
        </Link>
      </div>
    );
  }

  const TAG_COLORS: Record<string, string> = {
    Regulation: "border-blue-200 bg-blue-50 text-blue-700",
    Platform: "border-primary/20 bg-primary/8 text-primary",
    Sustainability: "border-green-200 bg-green-50 text-green-700",
    Industry: "border-amber-200 bg-amber-50 text-amber-700",
  };

  return (
    <div className="relative min-h-screen bg-white">
      <div className="mx-auto max-w-[780px] px-6 pt-32 pb-32">
        {/* Breadcrumb */}
        <Reveal>
          <nav className="mb-8 flex items-center gap-2 text-[13px] text-ink-muted">
            <Link to="/resources" className="hover:text-primary transition-colors">Resources</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/resources/blog" className="hover:text-primary transition-colors">Blog</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-ink truncate max-w-[180px]">{post.title.slice(0, 40)}…</span>
          </nav>
        </Reveal>

        {/* Post header */}
        <Reveal delay={0.06}>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest ${TAG_COLORS[post.tag] ?? "border-black/8 text-ink-muted"}`}>
              {post.tag}
            </span>
            <span className="flex items-center gap-1.5 text-[12.5px] text-ink-muted">
              <Calendar className="h-3.5 w-3.5" /> {post.date}
            </span>
            <span className="flex items-center gap-1.5 text-[12.5px] text-ink-muted">
              <Clock className="h-3.5 w-3.5" /> {post.readTime}
            </span>
          </div>
          <h1 className="text-[32px] font-semibold leading-[1.12] tracking-[-0.02em] text-ink sm:text-[40px]">
            {post.title}
          </h1>
        </Reveal>

        {/* Divider */}
        <Reveal delay={0.1}>
          <div className="my-10 border-t border-black/8" />
        </Reveal>

        {/* Body */}
        <Reveal delay={0.12}>
          <div className="prose prose-lg max-w-none text-ink [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-[22px] [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-ink [&_p]:mb-5 [&_p]:text-[16px] [&_p]:leading-[1.75] [&_p]:text-ink/80">
            {post.body}
          </div>
        </Reveal>

        {/* Footer nav */}
        <Reveal delay={0.18}>
          <div className="mt-16 border-t border-black/8 pt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to="/resources/blog"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-ink-muted hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> All articles
            </Link>
            <Link
              to="/resources/whitepapers"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-[14px] font-semibold text-white hover:brightness-[1.05] transition"
            >
              Related: EU DPP Whitepaper <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
