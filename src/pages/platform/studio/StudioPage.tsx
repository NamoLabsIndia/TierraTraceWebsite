import { useEffect } from 'react';
import { CTA } from '../../../components/Closing';
import { StudioHero } from './StudioHero';
import { StudioWorkspaceSection } from './StudioWorkspaceSection';
import { StudioAudiencesSection, StudioCapabilitiesSection, StudioFrameworksSection } from './StudioSections';

export default function StudioPage() {
  useEffect(() => {
    document.title = 'TierraTrace Studio — AI Compliance & Reporting Canvas';
  }, []);

  return (
    <>
      <StudioHero />
      <StudioFrameworksSection />
      <StudioCapabilitiesSection />
      <StudioWorkspaceSection />
      <StudioAudiencesSection />
      <CTA />
    </>
  );
}
