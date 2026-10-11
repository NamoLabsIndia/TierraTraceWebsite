import { CircleCheck } from 'lucide-react';
import { Breadcrumb, Container, PrimaryButton, SecondaryButton } from '../../../components/ui';
import { PassportCard } from './PassportCard';

const PROOF = ['ESPR-ready templates', 'QR & NFC identifiers', 'Signed on Hyperledger Fabric'];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-10 sm:pb-28 sm:pt-16">
      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <Breadcrumb current="Passport" />

          <h1 className="tt-swap-enter mt-6 text-[44px] font-bold leading-[1.05] tracking-[-0.03em] text-balance sm:text-display">
            A passport for every product.
            <span className="mt-1 block text-tt-green">Proof behind every claim.</span>
          </h1>

          <p className="tt-swap-enter mt-7 max-w-[560px] text-[18px] leading-[1.65] text-tt-muted text-pretty [animation-delay:80ms]">
            TierraTrace Passport composes ESPR-ready Digital Product Passports from the records you already keep —
            every field traced to its source, every version signed and anchored, every product one scan away.
          </p>

          <div className="tt-swap-enter mt-9 flex flex-wrap gap-3 [animation-delay:140ms]">
            <PrimaryButton to="pilot">Request Pilot</PrimaryButton>
            <SecondaryButton to="how-it-works">See how it works</SecondaryButton>
          </div>

          <ul className="tt-swap-enter mt-9 flex flex-wrap gap-x-6 gap-y-2 [animation-delay:200ms]">
            {PROOF.map((p) => (
              <li key={p} className="inline-flex items-center gap-2 text-[15px] font-medium text-tt-ink/80">
                <CircleCheck className="h-4 w-4 text-tt-green-ink" aria-hidden /> {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="tt-swap-enter mx-auto w-full max-w-[520px] [animation-delay:120ms] lg:mr-0">
          <PassportCard />
          <p className="mt-10 text-center text-[13px] text-tt-muted">
            Switch to <span className="font-semibold text-tt-ink">Provenance</span> to see where each field comes from.
          </p>
        </div>
      </Container>
    </section>
  );
}
