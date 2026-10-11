import { useState } from 'react';
import { ArrowRight, CheckCircle2, Database, Send, Shuffle, ShieldCheck } from 'lucide-react';
import { Container, Reveal, SectionHeading } from '../../../components/ui';

/*
 * Ingestion pipeline with the mandatory message envelope (web-connect PRD §7.3, §18):
 * source → transform (declarative mapping) → validate → web-core, effectively-once.
 */
const STEPS = [
  { icon: Database, t: 'SAP S/4HANA', d: 'Goods receipt event' },
  { icon: Shuffle, t: 'Transform', d: 'Plant 1100 → Coimbatore mill' },
  { icon: ShieldCheck, t: 'Validate', d: 'Target schema · units explicit' },
  { icon: CheckCircle2, t: 'TierraTrace', d: 'Batch LOT-YRN-2291 updated' },
];

const SOURCE = `{
  "MBLNR": "5000012345",
  "WERKS": "1100",
  "MATNR": "YRN-30S-ORG",
  "MENGE": "7800",
  "MEINS": "KG"
}`;
const TARGET = `{
  "facility": "Coimbatore mill",
  "material": "Organic yarn 30s",
  "quantity": { "value": 7800, "unit": "kg" },
  "lot": "LOT-YRN-2291"
}`;

export function Pipeline() {
  const [sent, setSent] = useState(0);
  const [stage, setStage] = useState(-1);

  const send = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setSent((n) => n + 1);
    if (reduce) return setStage(STEPS.length);
    setStage(0);
    STEPS.forEach((_, i) => window.setTimeout(() => setStage(i + 1), (i + 1) * 320));
  };

  return (
    <section id="how-it-works" className="scroll-mt-28 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Configuration, never code"
          title="From an ERP field"
          accent="to evidence in the product's history."
          lead="Pick a blueprint, bind credentials from the vault, map fields in the Transformation Studio and schedule it. Every message carries an ID, a correlation ID and an idempotency key — so nothing is lost and nothing is counted twice."
        />
        <Reveal className="mt-14">
          <div className="rounded-[28px] border border-tt-border bg-white p-5 shadow-[0_30px_80px_-40px_rgba(8,12,15,0.3)] sm:p-8">
            <ol className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {STEPS.map((s, i) => {
                const done = stage > i;
                return (
                  <li key={s.t} className="relative">
                    <div
                      className={`h-full rounded-2xl border p-4 transition-[background-color,border-color] duration-300 ${
                        done ? 'border-tt-green/40 bg-tt-green-50' : 'border-tt-border'
                      }`}
                    >
                      <s.icon className={`h-5 w-5 ${done ? 'text-tt-green-ink' : 'text-tt-muted'}`} aria-hidden />
                      <p className="mt-3 text-[15px] font-semibold">{s.t}</p>
                      <p className="mt-0.5 text-[13px] text-tt-muted">{s.d}</p>
                    </div>
                    {i < STEPS.length - 1 && (
                      <ArrowRight className="absolute -right-3 top-1/2 z-[1] hidden h-4 w-4 -translate-y-1/2 text-tt-muted lg:block" aria-hidden />
                    )}
                  </li>
                );
              })}
            </ol>

            <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="min-w-0 rounded-2xl bg-tt-ink p-4 text-white">
                <p className="text-[12px] font-semibold uppercase tracking-wider text-white/50">Source payload</p>
                <pre className="mt-2 overflow-x-auto font-mono text-[12px] leading-relaxed text-white/85">{SOURCE}</pre>
              </div>
              <div className="min-w-0 rounded-2xl bg-tt-ink p-4 text-white">
                <p className="text-[12px] font-semibold uppercase tracking-wider text-tt-green">TierraTrace canonical</p>
                <pre className="mt-2 overflow-x-auto font-mono text-[12px] leading-relaxed text-white/85">{TARGET}</pre>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <p className="font-mono text-[12px] text-tt-muted" aria-live="polite">
                {sent === 0
                  ? 'message_id · correlation_id · idempotency_key · source · principal · received_at · schema_ref'
                  : `msg 01J9${(4200 + sent).toString(36).toUpperCase()}… · delivered effectively-once${sent > 1 ? ` · ${sent - 1} duplicate${sent > 2 ? 's' : ''} ignored` : ''}`}
              </p>
              <button
                type="button"
                onClick={send}
                className="tt-press inline-flex h-11 items-center gap-2 rounded-full bg-tt-green px-5 text-[14px] font-semibold text-white hover:bg-tt-green-600"
              >
                <Send className="h-4 w-4" aria-hidden /> {sent ? 'Send it again' : 'Send test event'}
              </button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
