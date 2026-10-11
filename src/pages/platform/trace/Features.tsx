import { FileDown, GitFork, Layers3, PackageCheck, Scale, ScanEye } from 'lucide-react';
import { Container, Reveal, SectionHeading } from '../../../components/ui';

// Each card maps to web-core PRD §48.4 (Genealogy), §52 (Shipments) and §53 (Traceability).
const FEATURES = [
  {
    icon: Layers3,
    title: 'Stages that match your industry',
    body: 'Farm to garment for textiles, ore to coil for steel. The chain follows your workspace blueprint — nothing is hardcoded.',
  },
  {
    icon: ScanEye,
    title: 'Gaps you can see',
    body: 'A stage with no data shows up as a gap. Hiding it would overstate your traceability, so TierraTrace never does.',
  },
  {
    icon: GitFork,
    title: 'Splits and merges, done right',
    body: 'Sublots and merged lots keep their quantity attribution, so every kilogram is accounted for up to 50 levels deep.',
  },
  {
    icon: Scale,
    title: 'Mass balance at every node',
    body: 'Inputs reconcile against outputs at each step. Variance beyond tolerance is flagged for review, with a reason.',
  },
  {
    icon: PackageCheck,
    title: 'Custody past the factory gate',
    body: 'Shipments record lots, not just products. Only released batches can ship, so recalls stay scoped and precise.',
  },
  {
    icon: FileDown,
    title: 'Regulator-ready exports',
    body: 'Export any genealogy as CSV, JSON or a PDF dossier — with the evidence attached, ready for an auditor.',
  },
];

export function Features() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Built for real supply chains" title="Traceability that holds up" accent="under an audit." align="center" />
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => {
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
