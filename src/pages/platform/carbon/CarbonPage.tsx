import { useEffect } from 'react';
import { Ban, BookOpenCheck, FileLock2, Layers3, ShieldCheck, Users } from 'lucide-react';
import { FeatureGrid, ProductHero, StandardsStrip } from '../../../components/product';
import { CTA, MorePlatform } from '../../../components/Closing';
import { PcfCard } from './PcfCard';
import { Lineage } from './Lineage';
import { Trajectory } from './Trajectory';

// Content follows docs/prd/web-carbon.md (§1–3, §8, §12.7–12.19).
export default function CarbonPage() {
  useEffect(() => {
    document.title = 'TierraTrace Carbon — Carbon footprint & sustainability';
  }, []);
  return (
    <>
      <ProductHero
        crumb="Carbon"
        title="Carbon you can audit."
        accent="Computed from what actually happened."
        lead="TierraTrace Carbon calculates emissions per batch, per machine and per kilometre from the same events that power traceability — then rolls them up to inventories that reconcile and down to passports that consumers can verify."
        proof={['Scope 1, 2 & 3 — all 15 categories', 'Batch-level product footprints', 'CSRD & CBAM ready']}
        secondary={{ label: 'Follow a number', to: 'lineage' }}
        visual={<PcfCard />}
        hint={
          <>
            Switch to <span className="font-semibold text-tt-ink">Lineage</span> to see the factor and record behind each part.
          </>
        }
      />
      <StandardsStrip
        label="Disclosures from live data"
        items={[
          { code: 'CSRD', name: 'ESRS E1 datapoints' },
          { code: 'CBAM', name: 'Quarterly declarations' },
          { code: 'GHG Protocol', name: 'Corporate & Scope 3' },
          { code: 'ISO 14067', name: 'Product footprints' },
          { code: 'SBTi', name: 'Science-based targets' },
          { code: 'PACT', name: 'PCF exchange v2' },
        ]}
      />
      <Lineage />
      <Trajectory />
      <FeatureGrid
        eyebrow="Built for assurance"
        title="Conservative by default,"
        accent="transparent by design."
        features={[
          { icon: Layers3, title: 'Full Scope 1, 2 & 3', body: 'Location- and market-based Scope 2 and all 15 GHG Protocol Scope 3 categories, from facility down to shipment.' },
          { icon: BookOpenCheck, title: 'Governed factor library', body: 'DEFRA, EPA, IPCC, IEA and ecoinvent factors — effective-dated, approval-gated and traceable to every result.' },
          { icon: FileLock2, title: 'Immutable runs', body: 'New data creates a new run. Published figures never change silently; restatements follow a governed, approved workflow.' },
          { icon: ShieldCheck, title: 'Verified PCFs in passports', body: 'Footprints pass completeness and quality gates, get signed, and appear in the Digital Product Passport with their method.' },
          { icon: Ban, title: 'Claims gated by evidence', body: '“Carbon-neutral” can’t be typed in. Every consumer-facing claim binds to the evidence that proves it before it publishes.' },
          { icon: Users, title: 'Supplier scorecards', body: 'Run data campaigns, import supplier PCFs and score the value chain — with data coverage shown on every score.' },
        ]}
      />
      <MorePlatform current="carbon" />
      <CTA />
    </>
  );
}
