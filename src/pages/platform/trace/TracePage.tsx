import { useEffect } from 'react';
import { Hero } from './Hero';
import { ImpactExplorer } from './ImpactExplorer';
import { EvidencePanel } from './EvidencePanel';
import { Features } from './Features';
import { CTA, MorePlatform } from '../../../components/Closing';

export default function TracePage() {
  useEffect(() => {
    document.title = 'TierraTrace Trace — End-to-end traceability';
  }, []);
  return (
    <>
      <Hero />
      <ImpactExplorer />
      <EvidencePanel />
      <Features />
      <MorePlatform current="trace" />
      <CTA />
    </>
  );
}
