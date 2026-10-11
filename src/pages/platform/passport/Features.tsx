import { BellRing, FileCheck2, GitBranch, Link2, Nfc, ShieldCheck } from 'lucide-react';
import { Container, Reveal, SectionHeading } from '../../../components/ui';

// Each card maps to a requirement in web-core PRD §56.3 / §56.4.
const FEATURES = [
  {
    icon: Link2,
    title: 'Provenance on every field',
    body: 'Each value names the record it came from. Anything entered by hand is flagged as manually asserted — visibly, for you and for auditors.',
  },
  {
    icon: FileCheck2,
    title: 'Completeness you can trust',
    body: 'Scored against per-category, per-regulation templates: mandatory, recommended and optional fields, with format and code-list validation.',
  },
  {
    icon: GitBranch,
    title: 'Immutable versions',
    body: 'Published versions never change. Edits open a new draft, so the history of every claim stays intact and auditable.',
  },
  {
    icon: ShieldCheck,
    title: 'Signed and anchored',
    body: 'Every publication is signed and its anchor recorded on Hyperledger Fabric — tamper-evident proof of what was claimed, and when.',
  },
  {
    icon: Nfc,
    title: 'Stable QR & NFC identity',
    body: 'Identifiers are issued at first publication and resolve to the latest version forever. Print the label once.',
  },
  {
    icon: BellRing,
    title: 'Always current',
    body: 'Certificate expiry, a recall, new lots or a spec change flag the passport for update. Withdrawals show a notice, never a broken link.',
  },
];

export function Features() {
  return (
    <section className="bg-[#fafbfa] py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="What makes it defensible"
          title="Built like a regulatory record,"
          accent="not a product page."
          align="center"
        />
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
