import { useEffect, useRef, useState } from 'react';
import { Check, Play, RotateCcw } from 'lucide-react';
import { Container, Reveal, SectionHeading } from '../../../components/ui';

/* The eight-stage verification engine (web-verify PRD §12.1.1). Fail-closed at every stage. */
const STAGES = [
  ['Resolve', 'Identifier maps to a published passport version'],
  ['Integrity', 'Payload hash matches the signed manifest'],
  ['Signature', 'Ed25519 signature valid; signer in trust registry'],
  ['Anchor', 'Ledger inclusion proof validates against the root'],
  ['Lifecycle', 'Published — not withdrawn, not recalled'],
  ['Claims', 'Certificates current; supplier in good standing'],
  ['Risk', 'No blocking fraud or watchlist condition'],
  ['Record', 'This verification is itself signed and stored'],
];

export function Pipeline() {
  const [step, setStep] = useState(-1);
  const timer = useRef<number | undefined>(undefined);
  const running = step >= 0 && step < STAGES.length;

  useEffect(() => () => window.clearInterval(timer.current), []);

  const run = () => {
    window.clearInterval(timer.current);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return setStep(STAGES.length);
    setStep(0);
    timer.current = window.setInterval(() => {
      setStep((s) => {
        if (s >= STAGES.length - 1) {
          window.clearInterval(timer.current);
          return STAGES.length;
        }
        return s + 1;
      });
    }, 260);
  };

  return (
    <section id="how-it-works" className="scroll-mt-28 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Behind every two-second scan"
          title="Eight checks."
          accent="Any doubt means no green tick."
          lead="Every scan runs the same engine — public, console and API verdicts can never disagree. If a check can't run, the answer is ‘try again’, never ‘verified’."
        />
        <Reveal className="mt-14">
          <div className="rounded-[28px] border border-tt-border bg-white p-5 shadow-[0_30px_80px_-40px_rgba(8,12,15,0.3)] sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="min-w-0 break-all font-mono text-[13px] font-semibold sm:text-[14px]">id.tierratrace.com/01/08901234567893/10/LOT-2291</p>
              <button
                type="button"
                onClick={run}
                disabled={running}
                className="tt-press inline-flex h-11 items-center gap-2 rounded-full bg-tt-ink px-5 text-[14px] font-semibold text-white hover:bg-black disabled:opacity-60"
              >
                {step === STAGES.length ? <RotateCcw className="h-4 w-4" aria-hidden /> : <Play className="h-4 w-4" aria-hidden />}
                {step === STAGES.length ? 'Run again' : 'Run verification'}
              </button>
            </div>
            <ol className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4" aria-live="polite">
              {STAGES.map(([t, d], i) => {
                const done = step > i || step === STAGES.length;
                const active = step === i;
                return (
                  <li
                    key={t}
                    className={`rounded-2xl border p-4 transition-[background-color,border-color] duration-200 ${
                      done ? 'border-tt-green/35 bg-tt-green-50' : active ? 'border-tt-ink/30 bg-white' : 'border-tt-border bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] font-semibold tracking-wider text-tt-muted">{String(i + 1).padStart(2, '0')}</span>
                      <span
                        className={`grid h-6 w-6 place-items-center rounded-full ${
                          done ? 'bg-tt-green text-white' : active ? 'border-2 border-tt-ink border-t-transparent motion-safe:animate-spin' : 'border-2 border-tt-border'
                        }`}
                      >
                        {done && <Check className="h-3.5 w-3.5" aria-hidden />}
                      </span>
                    </div>
                    <p className="mt-2 text-[16px] font-semibold">{t}</p>
                    <p className="mt-1 text-[13px] leading-snug text-tt-muted">{d}</p>
                  </li>
                );
              })}
            </ol>
            <p className="mt-5 text-[14px] text-tt-muted">
              {step === STAGES.length ? (
                <span className="font-semibold text-tt-green-ink">Verified — and a downloadable proof bundle lets anyone re-check it offline.</span>
              ) : (
                'Press run to watch the checks in order.'
              )}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
