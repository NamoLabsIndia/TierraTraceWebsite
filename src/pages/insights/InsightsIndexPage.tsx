import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock } from 'lucide-react';
import { INSIGHTS } from '../../data/siteContent';
import { Container } from '../../components/ui';
import { CTA } from '../../components/Closing';

export default function InsightsIndexPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Insights & Articles — TierraTrace';
  }, []);

  return (
    <div className="pt-24 sm:pt-28">
      {/* ── Hero ── */}
      <section className="pb-16 pt-8">
        <Container>
          <div className="max-w-[760px]">
            <span className="rounded-full bg-tt-green-50 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-tt-green-ink">
              TierraTrace Blog &amp; Research
            </span>
            <h1 className="mt-4 text-[38px] font-bold leading-[1.1] tracking-tight text-tt-ink sm:text-[50px]">
              {INSIGHTS.headline}
            </h1>
            <p className="mt-5 text-[18px] leading-[1.65] text-tt-muted">
              {INSIGHTS.intro}
            </p>
          </div>
        </Container>
      </section>

      {/* ── Cards Grid ── */}
      <section className="border-t border-tt-border bg-[#fafbfa] py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {INSIGHTS.items.map((item) => (
              <article
                key={item.slug}
                className="group flex flex-col overflow-hidden rounded-[24px] border border-tt-border bg-white transition-[box-shadow,border-color] duration-300 hover:border-tt-green/40 hover:shadow-lg"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-black/5">
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-tt-ink shadow-sm backdrop-blur-xs">
                    {item.category}
                  </span>
                  <span className="absolute right-4 top-4 rounded-full bg-amber-50 border border-amber-200 px-2.5 py-0.5 text-[10px] font-bold text-amber-800">
                    Draft Subpage
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-center gap-2 text-[12px] text-tt-muted">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{item.readTime}</span>
                    <span>·</span>
                    <span>{item.author}</span>
                  </div>
                  <h2 className="mt-3 text-[22px] font-bold leading-snug tracking-tight text-tt-ink group-hover:text-tt-green-ink">
                    {item.title}
                  </h2>
                  <p className="mt-3 flex-1 text-[14px] leading-relaxed text-tt-muted">
                    {item.summary}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-tt-border pt-4">
                    <span className="text-[12px] font-semibold text-tt-muted">
                      Status: Ready to fill
                    </span>
                    <Link
                      to={item.to}
                      className="tt-press inline-flex items-center gap-1.5 rounded-full bg-tt-green-50 px-4 py-1.5 text-[12px] font-bold text-tt-green-ink hover:bg-tt-green hover:text-white"
                    >
                      Open Subpage <ArrowUpRight className="h-3.5 w-3.5" />
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
