import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Container, Reveal, SmartLink } from './ui';

/** "Works with the rest of the platform" — links to the five sibling product pages. */
export function MorePlatform({ current }: { current: string }) {
  const product = PRODUCTS.find((p) => p.slug === current);
  return (
    <section aria-labelledby="more-platform" className="border-t border-tt-border bg-[#fafbfa] py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="more-platform" className="text-[26px] font-bold tracking-tight">
            {product?.name} works with the rest of the platform
          </h2>
          <Link to="/?s=platform" className="inline-flex items-center gap-1 text-[16px] font-semibold text-tt-green-ink hover:underline">
            View full platform <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {PRODUCTS.filter((p) => p.slug !== current).map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal as="li" key={p.slug} delay={i * 50}>
                <Link
                  to={`/platform/${p.slug}`}
                  className="tt-press group flex h-full flex-col rounded-2xl border border-tt-border bg-white p-5 hover:border-tt-green/35 hover:shadow-[0_14px_36px_-24px_rgba(8,12,15,0.35)]"
                >
                  <Icon className="h-5 w-5 text-tt-green-ink" aria-hidden />
                  <span className="mt-4 text-[17px] font-semibold">TierraTrace {p.name}</span>
                  <span className="mt-1 text-[14px] leading-snug text-tt-muted">{p.tagline}</span>
                  <ArrowRight
                    className="mt-auto h-8 w-4 pt-4 text-tt-muted transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:text-tt-ink"
                    aria-hidden
                  />
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

/** Dark pilot band used at the foot of every product page. */
export function CTA() {
  return (
    <section id="pilot" className="scroll-mt-28 py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-tt-ink px-6 py-16 text-center text-white sm:px-12 sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(49,195,90,0.35),transparent_70%)]"
            />
            <div className="relative mx-auto max-w-[680px]">
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-tt-green">Pilot program</p>
              <h2 className="mt-4 text-[34px] font-bold leading-[1.1] tracking-[-0.02em] text-balance sm:text-[48px]">
                Ship your first product passport in 12 weeks.
              </h2>
              <p className="mx-auto mt-5 max-w-[560px] text-[18px] leading-relaxed text-white/70">
                A dedicated TierraTrace team pairs with yours — from passport schema to live QR codes on your pilot line.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Link
                  to="/?s=contact"
                  className="tt-press inline-flex h-14 items-center gap-2 rounded-full bg-tt-green px-7 text-[17px] font-semibold text-white hover:bg-tt-green-600"
                >
                  Request Pilot <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <SmartLink
                  target="/?s=contact"
                  className="tt-press inline-flex h-14 items-center rounded-full border border-white/20 px-7 text-[17px] font-semibold text-white hover:bg-white/10"
                >
                  Contact sales
                </SmartLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
