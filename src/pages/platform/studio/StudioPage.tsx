import { useEffect } from 'react';
import {
  BrainCircuit,
  Check,
  FileText,
  Globe,
  LayoutDashboard,
  Lock,
  Shield,
  UploadCloud,
  Users,
  Zap,
} from 'lucide-react';
import { Container, PrimaryButton, Reveal, SectionHeading } from '../../../components/ui';
import { CTA } from '../../../components/Closing';
import { StudioCanvas } from './StudioCanvas';
import { StudioHero } from './StudioHero';
import { StudioAudiencesSection, StudioFrameworksSection } from './StudioSections';

/* ------------------------------------------------------------------ */
/* Data                                                                  */
/* ------------------------------------------------------------------ */

const PROOF_POINTS = [
  '19+ global frameworks',
  'AI gap detection & drafting',
  'Zero-spreadsheet data collection',
];




const CAPABILITIES = [
  {
    icon: BrainCircuit,
    title: 'AI Drafting Engine',
    body: 'Generative AI trained on 50,000+ sustainability reports drafts narrative disclosures, detects gaps, and maps evidence to every GRI, CSRD, or ISSB indicator.',
  },
  {
    icon: Globe,
    title: '19+ Framework Library',
    body: 'Every standard pre-built with mandatory indicators, annexes, and jurisdiction rules — CSRD, GRI, ISSB, BRSR, EUDR, ESPR, CDP, TCFD, SASB, SFDR, TNFD, UN SDGs and more.',
  },
  {
    icon: UploadCloud,
    title: 'Zero-Spreadsheet Collection',
    body: 'Live connectors to SAP, Oracle, Workday, IoT devices, and TierraTrace Carbon stream data directly into each disclosure. AI parses PDFs, bills, and lab certificates.',
  },
  {
    icon: Users,
    title: 'Stakeholder Collaboration',
    body: 'Built-in materiality surveys, supplier self-assessment portals, and an external auditor workspace with tracked queries, version control, and resolution audit trails.',
  },
  {
    icon: Shield,
    title: 'Cryptographic Audit Trail',
    body: 'Every data point, approval, and edit is timestamped and anchored to Hyperledger Fabric, meeting CSRD Article 33 and third-party assurance requirements out of the box.',
  },
  {
    icon: Lock,
    title: 'Role-Based Access & SOC 2',
    body: 'Granular RBAC assigns each section to the right owner. SOC 2 Type II and ISO 27001 certified infrastructure keeps sensitive ESG disclosures secure and compliant.',
  },
  {
    icon: Zap,
    title: 'Instant iXBRL & JSON-LD Export',
    body: 'One-click export of audit-ready PDF, ESEF iXBRL for European filing, and machine-readable JSON-LD for EU ESAP portal submission — no conversion tools needed.',
  },
  {
    icon: LayoutDashboard,
    title: 'Year-Round Live Dashboard',
    body: 'Monitor every KPI 365 days a year. Automated regression alerts flag a dip in renewable energy share or a Scope 1 spike before it becomes a disclosure problem.',
  },
  {
    icon: FileText,
    title: 'Prior Report Intelligence',
    body: 'Ingest last year\'s PDF or Word report and AI extracts historical values, highlights restatements needed, and pre-fills this year\'s template with verified carry-forwards.',
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                  */
/* ------------------------------------------------------------------ */



export default function StudioPage() {
  useEffect(() => {
    document.title = 'TierraTrace Studio — AI Compliance & Reporting Canvas';
  }, []);

  return (
    <>
      <StudioHero />
      <StudioFrameworksSection />
      <StudioAudiencesSection />

      {/* ── Interactive canvas (previously the hero) ── */}
      <section id="studio-canvas" aria-labelledby="studio-canvas-title" className="relative scroll-mt-28 overflow-hidden py-20 sm:py-28">
        <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <h2 id="studio-canvas-title" className="text-[36px] font-bold leading-[1.08] tracking-[-0.03em] text-balance sm:text-[48px]">
              The AI Compliance
              <span className="mt-1 block text-tt-green">&amp; Reporting Canvas.</span>
            </h2>
            <p className="mt-7 max-w-[560px] text-[18px] leading-[1.65] text-tt-muted text-pretty">
              TierraTrace Studio™ is the visual 6-step workspace where sustainability teams build, AI-draft,
              audit-check, and publish framework-compliant reports — CSRD, GRI, ISSB, BRSR and 15 more —
              without touching a single static spreadsheet.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <PrimaryButton to="/contact?s=pilot">Request Pilot</PrimaryButton>
            </div>
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2">
              {PROOF_POINTS.map((p) => (
                <li key={p} className="inline-flex items-center gap-2 text-[15px] font-medium text-tt-ink/80">
                  <Check className="h-4 w-4 rounded-full bg-tt-green-50 p-0.5 text-tt-green-ink" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-auto w-full max-w-[520px] lg:mr-0">
            <StudioCanvas />
            <p className="mt-4 text-center text-[13px] text-tt-muted">
              Click through the <span className="font-semibold text-tt-ink">6 steps</span> to simulate a live CSRD reporting workflow.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Capabilities grid ── */}
      <section className="bg-[#fafbfa] py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Platform capabilities"
            title="Everything your sustainability team"
            accent="was missing."
            align="center"
          />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal as="li" key={c.title} delay={(i % 3) * 70}>
                  <article className="group h-full rounded-[24px] border border-tt-border bg-white p-7 transition-[box-shadow,border-color] duration-300 hover:border-tt-green/30 hover:shadow-[0_20px_50px_-28px_rgba(8,12,15,0.3)]">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-tt-green-50 text-tt-green-ink transition-colors duration-300 group-hover:bg-tt-green group-hover:text-white">
                      <Icon className="h-[22px] w-[22px]" aria-hidden />
                    </span>
                    <h3 className="mt-6 text-[20px] font-semibold leading-snug tracking-tight">{c.title}</h3>
                    <p className="mt-2.5 text-[15px] leading-[1.65] text-tt-muted">{c.body}</p>
                  </article>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </section>

      <CTA />
    </>
  );
}
