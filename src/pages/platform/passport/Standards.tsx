import { Container } from '../../../components/ui';

// Frameworks named on tierratrace.in and in the repo's type contracts (GS1 EPCIS, W3C VC).
const STANDARDS = [
  { code: 'ESPR', name: 'EU Ecodesign Regulation' },
  { code: 'EU DPP', name: 'Digital Product Passport' },
  { code: 'GS1', name: 'Digital Link & EPCIS' },
  { code: 'W3C', name: 'Verifiable Credentials' },
  { code: 'CBAM', name: 'Carbon Border Adjustment' },
  { code: 'ISO 14067', name: 'Product carbon footprint' },
];

export function Standards() {
  return (
    <section aria-label="Standards supported" className="border-y border-tt-border bg-white">
      <Container className="flex flex-col gap-6 py-8 lg:flex-row lg:items-center lg:gap-10">
        <p className="shrink-0 text-[15px] font-medium text-tt-muted">Passports built to</p>
        <ul className="grid flex-1 grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-6">
          {STANDARDS.map((s) => (
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
