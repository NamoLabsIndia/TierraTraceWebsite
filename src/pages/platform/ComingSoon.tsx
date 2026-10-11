import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Hammer } from 'lucide-react';
import { productBySlug } from '../../data/products';
import { Breadcrumb, Container, PrimaryButton, SecondaryButton } from '../../components/ui';
import { MorePlatform } from '../../components/Closing';

/** Placeholder for product pages not redesigned yet — keeps the menu fully navigable meanwhile. */
export default function ComingSoon() {
  const { slug } = useParams();
  const product = productBySlug(slug);
  useEffect(() => {
    if (product) document.title = `TierraTrace ${product.name}`;
  }, [product]);
  if (!product) return <Navigate to="/" replace />;
  const Icon = product.icon;
  return (
    <>
      <section className="py-20 sm:py-28">
        <Container>
          <Breadcrumb current={product.name} />
          <div className="mt-10 max-w-[720px]">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-tt-green-50 text-tt-green-ink">
              <Icon className="h-6 w-6" aria-hidden />
            </span>
            <h1 className="mt-6 text-[44px] font-bold leading-[1.05] tracking-[-0.03em] sm:text-display">
              TierraTrace {product.name}
            </h1>
            <p className="mt-5 text-[20px] text-tt-muted">{product.tagline}</p>
            <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-dashed border-tt-border bg-white px-4 py-2 text-[14px] text-tt-muted">
              <Hammer className="h-4 w-4" aria-hidden /> This page is being redesigned next.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <PrimaryButton to="/?s=contact">Request Pilot</PrimaryButton>
              <SecondaryButton to="/?s=platform">Back to platform</SecondaryButton>
            </div>
          </div>
        </Container>
      </section>
      <MorePlatform current={product.slug} />
    </>
  );
}
