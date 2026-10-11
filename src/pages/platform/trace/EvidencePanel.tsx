import { CircleAlert, CircleCheck, FileBadge2, FileText, Link2, Scale, ShieldCheck } from 'lucide-react';
import { Container, Reveal, SectionHeading } from '../../../components/ui';

// What every stepper node exposes, per web-core PRD §53.4 "Evidence Rendering".
const POINTS = [
  { icon: ShieldCheck, title: 'Signed events', body: 'Event type, actor, time and a signature checked when you look — not when it was saved.' },
  { icon: Link2, title: 'Ledger anchors', body: 'Anchor reference and timestamp on Hyperledger Fabric, with live verification status.' },
  { icon: Scale, title: 'Mass balance', body: 'Input against output at every node. Variance beyond tolerance is flagged, not averaged away.' },
  { icon: FileBadge2, title: 'Certificates in force', body: 'Which certificates were valid on the date the event happened — not just today.' },
];

export function EvidencePanel() {
  return (
    <section className="bg-[#fafbfa] py-24 sm:py-32">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Evidence, not assertions"
            title="Open any stage."
            accent="See the proof behind it."
            lead="Every node in the chain carries its evidence. And if the trust service can't be reached, the page says “cannot verify” — it never shows a green badge it hasn't earned."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {POINTS.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 60}>
                <p.icon className="h-5 w-5 text-tt-green-ink" aria-hidden />
                <p className="mt-3 text-[17px] font-semibold">{p.title}</p>
                <p className="mt-1 text-[15px] leading-relaxed text-tt-muted">{p.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={80}>
          <div className="rounded-[28px] border border-tt-border bg-white p-5 shadow-[0_30px_80px_-40px_rgba(8,12,15,0.3)] sm:p-7">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[12px] font-medium uppercase tracking-wider text-tt-muted">Stage · Spinning</p>
                <p className="mt-0.5 font-mono text-[16px] font-semibold">LOT-YRN-2291</p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-tt-green px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                <CircleCheck className="h-3 w-3" aria-hidden /> Verified now
              </span>
            </div>

            <ul className="mt-6 divide-y divide-tt-border rounded-2xl border border-tt-border">
              <Line k="Event" v="Lot produced · Coimbatore mill" />
              <Line k="Signed by" v="R. Kumar, Production lead · 14 Apr 2026, 09:12" ok />
              <Line k="Anchor" v="fabric://tt-main/tx/7f3a…c21e" ok mono />
              <Line k="Certificate" v="GOTS C-8812 · valid on event date" ok />
            </ul>

            <div className="mt-4 rounded-2xl border border-tt-border p-4">
              <div className="flex items-center justify-between text-[13px]">
                <span className="font-semibold">Mass balance</span>
                <span className="text-tt-green-ink">Within tolerance</span>
              </div>
              <div className="mt-3 grid grid-cols-3 text-[13px]">
                <div>
                  <p className="text-tt-muted">Input</p>
                  <p className="font-semibold">8,110 kg</p>
                </div>
                <div>
                  <p className="text-tt-muted">Output</p>
                  <p className="font-semibold">7,800 kg</p>
                </div>
                <div>
                  <p className="text-tt-muted">Variance</p>
                  <p className="font-semibold">3.8% / 5%</p>
                </div>
              </div>
              <div className="relative mt-3 h-2 rounded-full bg-[#eceef0]" aria-hidden>
                <div className="h-full w-[76%] rounded-full bg-tt-green" />
                <span className="absolute top-[-3px] left-full h-[14px] w-[2px] -translate-x-full bg-tt-ink/40" />
              </div>
            </div>

            <div className="mt-4 flex items-start gap-2.5 rounded-2xl bg-[#f3f4f5] p-4 text-[13px]">
              <CircleAlert className="mt-0.5 h-4 w-4 shrink-0 text-tt-muted" aria-hidden />
              <p className="text-tt-muted">
                <span className="font-semibold text-tt-ink">Trust service offline?</span> This badge would read{' '}
                <span className="font-semibold text-tt-ink">“Cannot verify — service unavailable”</span>. Never “Verified”.
              </p>
            </div>

            <p className="mt-4 inline-flex items-center gap-1.5 text-[12px] text-tt-muted">
              <FileText className="h-3.5 w-3.5" aria-hidden /> 3 linked documents · spinning report, QA sheet, dispatch note
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Line({ k, v, ok, mono }: { k: string; v: string; ok?: boolean; mono?: boolean }) {
  return (
    <li className="flex items-start justify-between gap-4 px-4 py-3 text-[13px]">
      <span className="shrink-0 text-tt-muted">{k}</span>
      <span className={`inline-flex items-center gap-1.5 text-right font-medium ${mono ? 'font-mono text-[12px]' : ''}`}>
        {v}
        {ok && <CircleCheck className="h-3.5 w-3.5 shrink-0 text-tt-green-ink" aria-label="verified" />}
      </span>
    </li>
  );
}
