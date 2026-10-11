import { Cpu, KeyRound, Server, Wifi, WifiOff } from 'lucide-react';
import { Container, Reveal, SectionHeading } from '../../../components/ui';

/* Edge Fleet (PRD §25) and API Gateway (PRD §26). */
const AGENTS = [
  { id: 'edge-cbe-01', site: 'Coimbatore mill', status: 'online', buffer: 4 },
  { id: 'edge-tpr-02', site: 'Tiruppur unit 2', status: 'online', buffer: 12 },
  { id: 'edge-rjk-01', site: 'Rajkot ginning', status: 'buffering', buffer: 63 },
];

const APIS = [
  ['Passports API', 'v2', 'public'],
  ['Traceability API', 'v1', 'partner'],
  ['Events ingestion', 'v1', 'workspace'],
  ['Verification API', 'v1', 'public'],
];

export function Infrastructure() {
  return (
    <section className="bg-[#fafbfa] py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Inbound and outbound"
          title="From the shop floor"
          accent="to your partners' apps."
          align="center"
        />
        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-[28px] border border-tt-border bg-white p-6 sm:p-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-tt-green-50 px-3 py-1 text-[12px] font-semibold text-tt-green-ink">
                <Cpu className="h-3.5 w-3.5" aria-hidden /> Edge Fleet
              </span>
              <h3 className="mt-5 text-[24px] font-bold leading-tight tracking-tight lg:min-h-[2lh]">Connect PLCs, scanners and sensors inside the plant</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-tt-muted lg:min-h-[2lh]">
                On-site agents dial out securely, buffer through Wi-Fi drops and flush without duplicates when they reconnect.
              </p>
              <ul className="mt-6 space-y-2">
                {AGENTS.map((a) => (
                  <li key={a.id} className="flex items-center gap-3 rounded-2xl border border-tt-border px-4 py-3">
                    {a.status === 'online' ? (
                      <Wifi className="h-4 w-4 shrink-0 text-tt-green-ink" aria-hidden />
                    ) : (
                      <WifiOff className="h-4 w-4 shrink-0 text-tt-amber" aria-hidden />
                    )}
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[13px] font-semibold">{a.id}</span>
                      <span className="block text-[12px] text-tt-muted">{a.site}</span>
                    </span>
                    <span className="w-24 shrink-0">
                      <span className="block text-right text-[11px] text-tt-muted">Buffer {a.buffer}%</span>
                      <span className="mt-1 block h-1.5 overflow-hidden rounded-full bg-[#eceef0]">
                        <span
                          className={`block h-full rounded-full ${a.buffer >= 60 ? 'bg-tt-amber' : 'bg-tt-green'}`}
                          style={{ width: `${a.buffer}%` }}
                        />
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
          <Reveal delay={80}>
            <article className="h-full rounded-[28px] border border-tt-border bg-white p-6 sm:p-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#f3f4f5] px-3 py-1 text-[12px] font-semibold">
                <Server className="h-3.5 w-3.5" aria-hidden /> API Gateway
              </span>
              <h3 className="mt-5 text-[24px] font-bold leading-tight tracking-tight lg:min-h-[2lh]">Publish your data as products partners can use</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-tt-muted lg:min-h-[2lh]">
                Keys, quotas, analytics and a developer portal — every call traced back to a named identity.
              </p>
              <ul className="mt-6 divide-y divide-tt-border rounded-2xl border border-tt-border">
                {APIS.map(([n, v, vis]) => (
                  <li key={n} className="flex items-center justify-between gap-3 px-4 py-3 text-[14px]">
                    <span className="font-semibold">
                      {n} <span className="ml-1 font-mono text-[12px] font-normal text-tt-muted">{v}</span>
                    </span>
                    <span className="rounded-full bg-tt-green-50 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-tt-green-ink">
                      {vis}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 inline-flex items-center gap-1.5 text-[13px] text-tt-muted">
                <KeyRound className="h-4 w-4" aria-hidden /> OpenAPI 3.1 spec required for every published API
              </p>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
