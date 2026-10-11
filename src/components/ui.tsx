import type { ReactNode, CSSProperties } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useReveal } from '../lib/useReveal';

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-tt-green-ink">{children}</p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  lead,
  align = 'left',
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  lead?: string;
  align?: 'left' | 'center';
}) {
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-[760px] text-center' : 'max-w-[760px]'}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-[34px] font-bold leading-[1.1] tracking-[-0.02em] text-balance sm:text-[44px]">
        {title} {accent && <span className="text-tt-green">{accent}</span>}
      </h2>
      {lead && <p className="mt-5 text-[18px] leading-[1.65] text-tt-muted text-pretty">{lead}</p>}
    </Reveal>
  );
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'li' | 'article';
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={`tt-reveal min-w-0 ${className}`}
      style={{ '--tt-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

/** Target is either a route ("/platform/trace") or a section id on the current page ("pilot"). */
export function SmartLink({
  target,
  className,
  children,
}: {
  target: string;
  className?: string;
  children: ReactNode;
}) {
  const navigate = useNavigate();
  if (target.startsWith('/')) {
    return (
      <Link to={target} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={`#${target}`}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        else navigate(`/?s=${target}`);
      }}
    >
      {children}
    </a>
  );
}

export function PrimaryButton({ children, to = 'pilot' }: { children: ReactNode; to?: string }) {
  return (
    <SmartLink
      target={to}
      className="tt-press group inline-flex h-14 items-center gap-2 rounded-full bg-tt-green px-7 text-[17px] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(49,195,90,0.6)] hover:bg-tt-green-600"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5" aria-hidden />
    </SmartLink>
  );
}

export function SecondaryButton({ children, to }: { children: ReactNode; to: string }) {
  return (
    <SmartLink
      target={to}
      className="tt-press inline-flex h-14 items-center gap-2 rounded-full border border-tt-border bg-white px-7 text-[17px] font-semibold text-tt-ink shadow-[0_2px_10px_-4px_rgba(8,12,15,0.12)] hover:border-[#d4d4d4]"
    >
      {children}
    </SmartLink>
  );
}

export function Breadcrumb({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="tt-swap-enter">
      <ol className="flex items-center gap-1.5 text-[14px] text-tt-muted">
        <li>
          <Link to="/" className="hover:text-tt-ink">Home</Link>
        </li>
        <li aria-hidden>
          <ChevronRight className="h-3.5 w-3.5" />
        </li>
        <li>
          <Link to="/?s=platform" className="hover:text-tt-ink">Platform</Link>
        </li>
        <li aria-hidden>
          <ChevronRight className="h-3.5 w-3.5" />
        </li>
        <li aria-current="page" className="font-medium text-tt-ink">
          {current}
        </li>
      </ol>
    </nav>
  );
}
