import { useEffect } from 'react';
import { BookText, Clock, GitCompareArrows, MousePointerClick, Share2, ShieldCheck } from 'lucide-react';
import { FeatureGrid, ProductHero } from '../../../components/product';
import { CTA, MorePlatform } from '../../../components/Closing';
import { MetricBoard } from './MetricBoard';
import { Dashboards } from './Dashboards';
import { Reports } from './Reports';

// Content follows docs/prd/web-core.md §58–59 and docs/plan/web-insights-build-plan.md.
export default function InsightsPage() {
  useEffect(() => {
    document.title = 'TierraTrace Insights — Analytics & supply chain intelligence';
  }, []);
  return (
    <>
      <ProductHero
        crumb="Insights"
        title="Analytics you can trust."
        accent="Because every number is real."
        lead="TierraTrace Insights turns your traceability data into dashboards and reports — every metric defined, every chart drillable to its records, and nothing shown that wasn't actually measured."
        proof={['Metric definitions built in', 'Drill to the exact record', 'Freshness always shown']}
        secondary={{ label: 'Explore dashboards', to: 'dashboards' }}
        visual={<MetricBoard />}
        hint={
          <>
            Click a tile — including <span className="font-semibold text-tt-ink">Network OEE</span>, which honestly says it isn't measured yet.
          </>
        }
      />
      <Dashboards />
      <Reports />
      <FeatureGrid
        eyebrow="Decisions, not disputes"
        title="Every metric has a definition."
        accent="Every chart has a source."
        features={[
          { icon: BookText, title: 'Documented metrics', body: 'Open any figure to see exactly how it is calculated. Undefined metrics start arguments — defined ones end them.' },
          { icon: MousePointerClick, title: 'Drill-through everywhere', body: 'Every visualisation opens the underlying batches, orders or shipments, filtered and ready to act on.' },
          { icon: Clock, title: 'Freshness you can see', body: 'Analytics runs on a read-optimised copy. How far behind it is, is always shown on screen.' },
          { icon: GitCompareArrows, title: 'Compare periods', body: 'Period-over-period, year-over-year and against target — segmented by plant, product, supplier or stage.' },
          { icon: ShieldCheck, title: 'Permissions respected', body: 'Facility and role scope are enforced inside the analytics store, not filtered after the fact.' },
          { icon: Share2, title: 'Save and share', body: 'Save analyses, share them with your team and export charts, data or a full dashboard PDF.' },
        ]}
      />
      <MorePlatform current="insights" />
      <CTA />
    </>
  );
}
