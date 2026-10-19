import type { ReactNode } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { InView, useMagnetic } from '../../../lib/motion';

/** Outlined uppercase section label ("ABOUT TIERRATRACE", "SOLUTIONS", …). */
export function Pill({ children, className = '', tone = 'dark' }: { children: ReactNode; className?: string; tone?: 'dark' | 'plain' }) {
  return (
    <InView as="p" className={`sx-pill m-pop ${tone === 'plain' ? 'sx-pill--plain' : ''} ${className}`}>
      {children}
    </InView>
  );
}

/** Round outlined control used for carousels. */
export function RoundButton({ dir, onClick, label, disabled }: { dir: 'prev' | 'next'; onClick: () => void; label: string; disabled?: boolean }) {
  const ref = useMagnetic<HTMLButtonElement>();
  const Icon = dir === 'prev' ? ArrowLeft : ArrowRight;
  return (
    <button ref={ref} type="button" className="sx-round" onClick={onClick} aria-label={label} disabled={disabled}>
      <Icon className="h-5 w-5" aria-hidden />
    </button>
  );
}

/** prev ─────── next, with a fill showing progress (0–1). */
export function CarouselControls({
  progress,
  onPrev,
  onNext,
  canPrev = true,
  canNext = true,
  label,
}: {
  progress: number;
  onPrev: () => void;
  onNext: () => void;
  canPrev?: boolean;
  canNext?: boolean;
  label: string;
}) {
  return (
    <div className="sx-controls" role="group" aria-label={label}>
      <RoundButton dir="prev" onClick={onPrev} label="Previous" disabled={!canPrev} />
      <span className="sx-track" aria-hidden>
        <span className="sx-track-fill" style={{ transform: `scaleX(${Math.max(0.04, Math.min(1, progress))})` }} />
      </span>
      <RoundButton dir="next" onClick={onNext} label="Next" disabled={!canNext} />
    </div>
  );
}
