import { useEffect } from 'react';
import { LandingHero } from './LandingHero';
import { AboutSection } from './sections/AboutSection';
import { MissionSection } from './sections/MissionSection';
import { SolutionsSection } from './sections/SolutionsSection';
import { ApproachSection } from './sections/ApproachSection';
import { InsightsSection } from './sections/InsightsSection';
import { ComplianceSection } from './sections/ComplianceSection';
import './sections/sections.css';

/** Homepage: hero, then the editorial sections (header, footer + closing CTA come from the app shell). */
export default function Home() {
  useEffect(() => {
    document.title = 'TierraTrace — Digital Product Passports, Traceability & Sustainability Intelligence';
  }, []);
  return (
    <>
      <LandingHero />
      <AboutSection />
      <MissionSection />
      <SolutionsSection />
      <ApproachSection />
      <ComplianceSection />
      <InsightsSection />
    </>
  );
}
