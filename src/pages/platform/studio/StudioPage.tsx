import { useEffect } from 'react';
import { Check } from 'lucide-react';
import { Container, PrimaryButton } from '../../../components/ui';
import { CTA } from '../../../components/Closing';
import { StudioCanvas } from './StudioCanvas';
import { StudioHero } from './StudioHero';
import { StudioAudiencesSection, StudioCapabilitiesSection, StudioFrameworksSection } from './StudioSections';

/* ------------------------------------------------------------------ */
/* Data                                                                  */
/* ------------------------------------------------------------------ */

const PROOF_POINTS = [
  '19+ global frameworks',
  'AI gap detection & drafting',
  'Zero-spreadsheet data collection',
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

      <StudioCapabilitiesSection />

      <CTA />
    </>
  );
}
