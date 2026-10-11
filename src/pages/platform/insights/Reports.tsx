import { CalendarClock, FileSignature, Lock } from 'lucide-react';
import { Container, Reveal, SectionHeading } from '../../../components/ui';

/* Report catalogue (web-core PRD §58.2) and the reporting guarantees (§58.3). */
const CATALOG = [
  ['Production', ['Order status', 'Yield analysis', 'Line utilization', 'Throughput']],
  ['Quality', ['Pass rate', 'Defect Pareto', 'NCR ageing', 'CAPA effectiveness']],
  ['Inventory', ['Stock on hand', 'Ageing', 'Movements', 'Expiry']],
  ['Supply chain', ['Supplier scorecard', 'OTIF', 'Lead time', 'Shipment status']],
  ['Compliance', ['Certificate register', 'Expiry forecast', 'Evidence coverage', 'Audit trail summary']],
  ['Traceability', ['Genealogy report', 'Mass balance', 'Chain-of-custody dossier']],
] as const;

export function Reports() {
  return (
    <section className="bg-[#fafbfa] py-24 sm:py-32">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Reports"
            title="The reports you run every month,"
            accent="ready and scheduled."
            lead="Standard, parameterised reports for production, quality, inventory, supply chain, compliance and traceability — delivered by email as PDF, XLSX or CSV."
          />
          <ul className="mt-8 space-y-4">
            {[
              [CalendarClock, 'Scheduled safely', 'A scheduled report runs with the recipient’s permissions, never the scheduler’s.'],
              [FileSignature, 'Signed for regulators', 'Regulator-facing reports are signed, producing a tamper-evident file.'],
              [Lock, 'Read-only by design', 'Analytics never writes back. Every report shows who ran it, when and with which filters.'],
            ].map(([I, t, d]) => {
              const Icon = I as typeof Lock;
              return (
                <li key={t as string} className="flex gap-3">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-tt-green-ink" aria-hidden />
                  <span>
                    <span className="block text-[16px] font-semibold">{t as string}</span>
                    <span className="block text-[14px] leading-relaxed text-tt-muted">{d as string}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <Reveal delay={80}>
          <ul className="grid gap-3 sm:grid-cols-2">
            {CATALOG.map(([cat, items]) => (
              <li key={cat} className="rounded-[22px] border border-tt-border bg-white p-5">
                <p className="text-[17px] font-semibold">{cat}</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {items.map((r) => (
                    <li key={r} className="rounded-full bg-[#f3f4f5] px-2.5 py-1 text-[12px] font-medium">
                      {r}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
