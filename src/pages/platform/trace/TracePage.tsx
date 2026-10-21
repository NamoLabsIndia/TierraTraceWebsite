import { useEffect } from 'react';
import { Hero } from './Hero';
import { RecallSection } from './RecallSection';
import { EvidencePanel } from './EvidencePanel';
import { Features } from './Features';
import { CTA } from '../../../components/Closing';

export default function TracePage() {
  useEffect(() => {
    document.title = 'TierraTrace Trace — End-to-end traceability';
  }, []);
  return (
    <>
      <Hero />
      <RecallSection />
      <EvidencePanel />
      <Features />
      <CTA />
    </>
  );
}
