import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock,
  Copy,
  Edit3,
  FileText,
  Mail,
  Share2,
} from 'lucide-react';
import { INSIGHTS, Insight } from '../../data/siteContent';
import { Container } from '../../components/ui';
import { CTA } from '../../components/Closing';

export default function InsightPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Find the matching insight post or default to the first one
  const post: Insight =
    INSIGHTS.items.find((item) => item.slug === slug) || INSIGHTS.items[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (post) {
      document.title = `${post.title} — TierraTrace Insights`;
    }
  }, [post, slug]);

  const copyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const otherPosts = INSIGHTS.items.filter((item) => item.slug !== post.slug);

  return (
    <div className="pt-24 sm:pt-28">
      {/* ── Top Header & Breadcrumb ── */}
      <section className="pb-8 pt-4">
        <Container>
          {/* Breadcrumb navigation */}
          <nav aria-label="Breadcrumb" className="tt-swap-enter flex items-center gap-2 text-[13px] text-tt-muted">
            <Link to="/" className="hover:text-tt-ink">
              Home
            </Link>
            <span aria-hidden>/</span>
            <Link to="/#insights" className="hover:text-tt-ink">
              Insights
            </Link>
            <span aria-hidden>/</span>
            <span className="font-semibold text-tt-ink line-clamp-1">{post.title}</span>
          </nav>

          {/* Article Header Info */}
          <div className="mt-8 max-w-[840px]">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="rounded-full bg-tt-green-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-tt-green-ink">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1 text-[12px] text-tt-muted">
                <Clock className="h-3.5 w-3.5" /> {post.readTime}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-[11px] font-semibold text-amber-800">
                <Edit3 className="h-3 w-3" /> Editorial Draft · Coming Soon
              </span>
            </div>

            <h1 className="mt-4 text-[32px] font-bold leading-[1.15] tracking-tight text-tt-ink sm:text-[44px]">
              {post.title}
            </h1>

            <p className="mt-5 text-[18px] leading-[1.65] text-tt-muted">
              {post.summary}
            </p>

            {/* Author & Action Bar */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-y border-tt-border py-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-tt-ink font-bold text-white">
                  TT
                </div>
                <div>
                  <p className="text-[13px] font-bold text-tt-ink">{post.author}</p>
                  <p className="text-[12px] text-tt-muted">Sustainability, Traceability &amp; Compliance Research</p>
                </div>
              </div>

              {/* Share & actions */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={copyUrl}
                  className="tt-press inline-flex h-9 items-center gap-1.5 rounded-full border border-tt-border bg-white px-3.5 text-[12px] font-semibold text-tt-ink hover:bg-[#f3f4f5]"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-tt-green-ink" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-tt-muted" /> Copy link
                    </>
                  )}
                </button>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="tt-press inline-flex h-9 items-center gap-1.5 rounded-full border border-tt-border bg-white px-3.5 text-[12px] font-semibold text-tt-ink hover:bg-[#f3f4f5]"
                >
                  <Share2 className="h-3.5 w-3.5 text-tt-muted" /> Share
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Featured Image ── */}
      <section className="py-4">
        <Container>
          <div className="relative overflow-hidden rounded-[24px] border border-tt-border bg-[#080c0f] shadow-lg max-h-[500px]">
            <img
              src={post.image.src}
              alt={post.image.alt}
              className="h-full w-full object-cover object-center max-h-[500px] opacity-90 transition-transform duration-700 hover:scale-[1.02]"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 text-white/90">
              <p className="text-[13px] font-medium">{post.image.alt}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Blank Subpage Body (Ready to Fill Later) ── */}
      <section className="py-12">
        <Container>
          <div className="mx-auto max-w-[800px]">
            {/* Notice Banner */}
            <div className="mb-10 rounded-2xl border border-dashed border-tt-green/50 bg-tt-green-50/40 p-6 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-tt-green text-white shadow-sm">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="mt-3 text-[18px] font-bold text-tt-ink">
                Editorial Subpage · Ready to Fill
              </h3>
              <p className="mx-auto mt-1 max-w-[560px] text-[14px] leading-relaxed text-tt-muted">
                This is a dedicated blank blog subpage for{' '}
                <strong className="text-tt-ink font-semibold">"{post.title}"</strong>.
                You can write and publish your full article, research findings, and interview quotes right here when ready.
              </p>
            </div>

            {/* Structured Article Placeholders for the author */}
            <article className="space-y-8 text-[17px] leading-[1.8] text-tt-ink/90">
              <div className="rounded-2xl border border-tt-border bg-white p-6 shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-wider text-tt-green-ink">
                  Section 1 · Overview &amp; Context
                </span>
                <h2 className="mt-2 text-[24px] font-bold tracking-tight text-tt-ink">
                  1. Executive Summary &amp; Market Drivers
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-tt-muted">
                  [Placeholder for executive summary: Outline the primary regulatory or supply chain challenges, why traditional spreadsheets fail, and what recent global frameworks demand from enterprises in this domain.]
                </p>
                <div className="mt-4 rounded-xl border border-tt-border bg-[#fafbfa] p-4 text-[13px] text-tt-ink/80">
                  <span className="font-bold text-tt-green-ink">Key takeaway focus: </span>
                  Why verifiable digital evidence is displacing self-declared sustainability metrics.
                </div>
              </div>

              <div className="rounded-2xl border border-tt-border bg-white p-6 shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-wider text-tt-green-ink">
                  Section 2 · Technical &amp; Operational Blueprint
                </span>
                <h2 className="mt-2 text-[24px] font-bold tracking-tight text-tt-ink">
                  2. Architectural Blueprint &amp; Data Telemetry
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-tt-muted">
                  [Placeholder for deep-dive: Detail how telemetry connects from factory floors, ERP (SAP/Oracle), IoT sensors, and supplier audit documentation into a unified event graph.]
                </p>
                <ul className="mt-4 space-y-2 text-[14px] text-tt-muted">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-tt-green" />
                    Data ingestion from shop-floor devices and supplier self-service portals.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-tt-green" />
                    Cryptographic hashing and tamper-evident audit trails on Hyperledger Fabric.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-tt-green" />
                    Automated gap-detection and AI-assisted narrative compilation.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-tt-border bg-white p-6 shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-wider text-tt-green-ink">
                  Section 3 · What Leaders Should Do Next
                </span>
                <h2 className="mt-2 text-[24px] font-bold tracking-tight text-tt-ink">
                  3. Practical Steps for Implementation
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-tt-muted">
                  [Placeholder for roadmap: Recommend actionable milestones for chief sustainability officers, procurement directors, and compliance teams over the next 30, 60, and 90 days.]
                </p>
              </div>
            </article>

            {/* Newsletter / Get Notified When Published */}
            <div className="mt-12 rounded-[24px] border border-tt-border bg-[#fafbfa] p-8 text-center sm:p-10">
              <span className="grid h-10 w-10 mx-auto place-items-center rounded-xl bg-tt-green-50 text-tt-green-ink">
                <Mail className="h-5 w-5" />
              </span>
              <h3 className="mt-3 text-[20px] font-bold text-tt-ink">
                Get notified when this insight is published
              </h3>
              <p className="mx-auto mt-1 max-w-[480px] text-[14px] text-tt-muted">
                Be the first to read our full research report and practical compliance guide directly in your inbox.
              </p>

              {subscribed ? (
                <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-tt-green-50 px-5 py-2.5 text-[13px] font-semibold text-tt-green-ink">
                  <Check className="h-4 w-4" /> Thank you! We will notify you upon publication.
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email) setSubscribed(true);
                  }}
                  className="mx-auto mt-5 flex max-w-[420px] gap-2"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 rounded-full border border-tt-border bg-white px-4 py-2.5 text-[13px] outline-none focus:border-tt-green focus:ring-1 focus:ring-tt-green"
                  />
                  <button
                    type="submit"
                    className="tt-press rounded-full bg-tt-green px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-tt-green-600"
                  >
                    Notify Me
                  </button>
                </form>
              )}
            </div>

            {/* Back button */}
            <div className="mt-10 flex justify-center">
              <Link
                to="/#insights"
                className="tt-press inline-flex items-center gap-2 rounded-full border border-tt-border bg-white px-6 py-2.5 text-[14px] font-semibold text-tt-ink hover:bg-[#fafbfa]"
              >
                <ArrowLeft className="h-4 w-4" /> Back to All Insights
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── More Insights Cards (Browse all 4 cards) ── */}
      <section className="border-t border-tt-border bg-[#fafbfa] py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-wider text-tt-green-ink">
                Continue Reading
              </p>
              <h2 className="mt-1 text-[28px] font-bold text-tt-ink">
                Other Insights &amp; Articles
              </h2>
            </div>
            <Link
              to="/#insights"
              className="inline-flex items-center gap-1 text-[14px] font-semibold text-tt-green-ink hover:underline"
            >
              View on homepage <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherPosts.slice(0, 3).map((item) => (
              <article
                key={item.slug}
                className="group flex flex-col overflow-hidden rounded-[22px] border border-tt-border bg-white transition-[box-shadow,border-color] duration-300 hover:border-tt-green/40 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black/5">
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-tt-ink backdrop-blur-xs">
                    {item.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[11px] font-medium text-tt-muted">{item.readTime}</p>
                  <h3 className="mt-1.5 text-[17px] font-bold leading-snug tracking-tight text-tt-ink group-hover:text-tt-green-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 flex-1 text-[13px] leading-relaxed text-tt-muted">
                    {item.summary}
                  </p>
                  <div className="mt-4 pt-3 border-t border-tt-border">
                    <Link
                      to={item.to}
                      className="inline-flex items-center gap-1 text-[13px] font-semibold text-tt-green-ink"
                    >
                      Read Subpage <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </div>
  );
}
