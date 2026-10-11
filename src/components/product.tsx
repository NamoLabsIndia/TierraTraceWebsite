import type { ReactNode } from 'react';
import { CircleCheck } from 'lucide-react';
import { Breadcrumb, Container, PrimaryButton, Reveal, SecondaryButton, SectionHeading } from './ui';

/** Shared hero for product pages: copy on the left, the product's interactive object on the right. */
export function ProductHero({
  crumb,
  title,
  accent,
  lead,
  proof,
  secondary,
  visual,
  hint,
}: {
  crumb: string;
  title: string;
  accent: string;
  lead: string;
  proof: string[];
  secondary: { label: string; to: string };
  visual: ReactNode;
  hint?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-20 pt-10 sm:pb-28 sm:pt-16">
      <Container className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <Breadcrumb current={crumb} />
          <h1 className="tt-swap-enter mt-6 text-[44px] font-bold leading-[1.05] tracking-[-0.03em] text-balance sm:text-display">
            {title}
            <span className="mt-1 block text-tt-green">{accent}</span>
          </h1>
          <p className="tt-swap-enter mt-7 max-w-[560px] text-[18px] leading-[1.65] text-tt-muted text-pretty [animation-delay:80ms]">
            {lead}
          </p>
          <div className="tt-swap-enter mt-9 flex flex-wrap gap-3 [animation-delay:140ms]">
            <PrimaryButton to="pilot">Request Pilot</PrimaryButton>
            <SecondaryButton to={secondary.to}>{secondary.label}</SecondaryButton>
          </div>
          <ul className="tt-swap-enter mt-9 flex flex-wrap gap-x-6 gap-y-2 [animation-delay:200ms]">
            {proof.map((p) => (
              <li key={p} className="inline-flex items-center gap-2 text-[15px] font-medium text-tt-ink/80">
                <CircleCheck className="h-4 w-4 text-tt-green-ink" aria-hidden /> {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="tt-swap-enter mx-auto w-full min-w-0 max-w-[540px] [animation-delay:120ms] lg:mr-0">
          {visual}
          {hint && <p className="mt-8 text-center text-[13px] text-tt-muted">{hint}</p>}
        </div>
      </Container>
    </section>
  );
}

/** White card shell used by every interactive hero object. */
export function DemoCard({ children, label, className = '' }: { children: ReactNode; label: string; className?: string }) {
  return (
    <div className="relative">
      <div aria-hidden className="absolute inset-x-6 -bottom-3 h-full rounded-[28px] border border-tt-border bg-white/60" />
      <figure
        aria-label={label}
        className={`relative overflow-hidden rounded-[28px] border border-tt-border bg-white shadow-[0_30px_80px_-30px_rgba(8,12,15,0.28)] ${className}`}
      >
        {children}
      </figure>
    </div>
  );
}

/** Pill segmented control (tabs semantics). */
export function Segmented<T extends string>({
  options,
  value,
  onChange,
  label,
  size = 'sm',
}: {
  options: { id: T; label: ReactNode }[];
  value: T;
  onChange: (v: T) => void;
  label: string;
  size?: 'sm' | 'md';
}) {
  return (
    <div role="tablist" aria-label={label} className="inline-flex max-w-full flex-wrap rounded-full bg-[#f3f4f5] p-1">
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          role="tab"
          aria-selected={value === o.id}
          onClick={() => onChange(o.id)}
          className={`tt-press inline-flex items-center gap-1.5 rounded-full font-semibold ${
            size === 'sm' ? 'px-3.5 py-1.5 text-[12px]' : 'px-4 py-2 text-[13px]'
          } ${value === o.id ? 'bg-white text-tt-ink shadow-sm' : 'text-tt-muted hover:text-tt-ink'}`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export type Feature = { icon: typeof CircleCheck; title: string; body: string };

/** Six-card capability grid. */
export function FeatureGrid({
  eyebrow,
  title,
  accent,
  features,
  tinted,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  features: Feature[];
  tinted?: boolean;
}) {
  return (
    <section className={`py-24 sm:py-32 ${tinted ? 'bg-[#fafbfa]' : ''}`}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} accent={accent} align="center" />
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal as="li" key={f.title} delay={(i % 3) * 70}>
                <article className="group h-full rounded-[24px] border border-tt-border bg-white p-7 transition-[box-shadow,border-color] duration-300 hover:border-tt-green/30 hover:shadow-[0_20px_50px_-28px_rgba(8,12,15,0.3)]">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-tt-green-50 text-tt-green-ink transition-colors duration-300 group-hover:bg-tt-green group-hover:text-white">
                    <Icon className="h-[22px] w-[22px]" aria-hidden />
                  </span>
                  <h3 className="mt-6 text-[22px] font-semibold leading-snug tracking-tight">{f.title}</h3>
                  <p className="mt-2.5 text-[16px] leading-[1.65] text-tt-muted">{f.body}</p>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

/** Horizontal strip of standards / frameworks under the hero. */
export function StandardsStrip({ label, items }: { label: string; items: { code: string; name: string }[] }) {
  return (
    <section aria-label={label} className="border-y border-tt-border bg-white">
      <Container className="flex flex-col gap-6 py-8 lg:flex-row lg:items-center lg:gap-10">
        <p className="shrink-0 text-[15px] font-medium text-tt-muted">{label}</p>
        <ul className="grid flex-1 grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((s) => (
            <li key={s.code} className="leading-tight">
              <span className="block text-[17px] font-bold tracking-tight text-tt-ink">{s.code}</span>
              <span className="block text-[13px] text-tt-muted">{s.name}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
