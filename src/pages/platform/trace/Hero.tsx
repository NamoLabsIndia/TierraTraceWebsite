import { CircleCheck } from 'lucide-react';
import { Breadcrumb, Container, PrimaryButton, SecondaryButton } from '../../../components/ui';
import { LifecycleCard } from './LifecycleCard';

const PROOF = ['Upstream & downstream genealogy', 'Gaps shown, never hidden', 'Evidence at every stage'];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-10 sm:pb-28 sm:pt-16">
      <Container className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <Breadcrumb current="Trace" />

          <h1 className="tt-swap-enter mt-6 text-[44px] font-bold leading-[1.05] tracking-[-0.03em] text-balance sm:text-display">
            Every lot. Every link.
            <span className="mt-1 block text-tt-green">Every stage, proven.</span>
          </h1>

          <p className="tt-swap-enter mt-7 max-w-[560px] text-[18px] leading-[1.65] text-tt-muted text-pretty [animation-delay:80ms]">
            TierraTrace Trace follows each lot from raw material to customer — across splits, merges, plants and borders —
            with signed evidence at every stage and an honest gap wherever data is missing.
          </p>

          <div className="tt-swap-enter mt-9 flex flex-wrap gap-3 [animation-delay:140ms]">
            <PrimaryButton to="pilot">Request Pilot</PrimaryButton>
            <SecondaryButton to="impact">See a recall in seconds</SecondaryButton>
          </div>

          <ul className="tt-swap-enter mt-9 flex flex-wrap gap-x-6 gap-y-2 [animation-delay:200ms]">
            {PROOF.map((p) => (
              <li key={p} className="inline-flex items-center gap-2 text-[15px] font-medium text-tt-ink/80">
                <CircleCheck className="h-4 w-4 text-tt-green-ink" aria-hidden /> {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="tt-swap-enter mx-auto w-full min-w-0 max-w-[540px] [animation-delay:120ms] lg:mr-0">
          <LifecycleCard />
          <p className="mt-8 text-center text-[13px] text-tt-muted">
            Click any stage. Switch to <span className="font-semibold text-tt-ink">Steel</span> — stages follow your industry.
          </p>
        </div>
      </Container>
    </section>
  );
}
