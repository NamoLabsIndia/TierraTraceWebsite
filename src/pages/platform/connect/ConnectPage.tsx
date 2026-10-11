import { useEffect } from 'react';
import { Blocks, FileClock, History, LockKeyhole, RotateCcw, Waypoints } from 'lucide-react';
import { FeatureGrid, ProductHero, StandardsStrip } from '../../../components/product';
import { CTA, MorePlatform } from '../../../components/Closing';
import { Marketplace } from './Marketplace';
import { Pipeline } from './Pipeline';
import { Infrastructure } from './Infrastructure';

// Content follows docs/prd/web-connect.md (§1–2, §7.3, §8.4, §18, §25, §26).
export default function ConnectPage() {
  useEffect(() => {
    document.title = 'TierraTrace Connect — APIs & ERP integrations';
  }, []);
  return (
    <>
      <ProductHero
        crumb="Connect"
        title="Your systems speak TierraTrace."
        accent="Without writing code."
        lead="TierraTrace Connect plugs your ERP, MES, shop-floor devices and partners into the platform with certified connector blueprints, declarative mappings and an operations console built for the person on call."
        proof={['19 certified connectors', 'Zero custom code', 'Nothing lost, nothing doubled']}
        secondary={{ label: 'Watch an event flow', to: 'how-it-works' }}
        visual={<Marketplace />}
        hint="Filter by category to browse the connector catalogue."
      />
      <StandardsStrip
        label="Connect what you run"
        items={[
          { code: 'SAP', name: 'S/4HANA' },
          { code: 'Oracle', name: 'Fusion Cloud' },
          { code: 'Dynamics', name: 'Microsoft 365' },
          { code: 'OPC UA', name: 'Industrial machines' },
          { code: 'Kafka', name: 'Event streams' },
          { code: 'REST', name: 'GraphQL · SOAP · Webhooks' },
        ]}
      />
      <Pipeline />
      <Infrastructure />
      <FeatureGrid
        eyebrow="Built for 2 a.m."
        title="Integrations you can operate,"
        accent="not just build."
        features={[
          { icon: Blocks, title: 'Certified blueprints', body: 'ERP, messaging, files, APIs and industrial protocols — each security-graded and versioned, ready to configure.' },
          { icon: Waypoints, title: 'Transformation Studio', body: 'Map source fields to TierraTrace schemas visually, test against real samples, and deploy immutable versions.' },
          { icon: RotateCcw, title: 'Retry center', body: 'Find any failed message by correlation ID in under a minute, see why, and replay a backlog in a few clicks.' },
          { icon: LockKeyhole, title: 'Secrets vault', body: 'Credentials are encrypted and never shown again. Expiring secrets are flagged before they break a job.' },
          { icon: History, title: 'Every change audited', body: 'Configuration edits, promotions from sandbox to production and API calls are attributed and logged.' },
          { icon: FileClock, title: 'Jobs & monitoring', body: 'Schedules, queues, live event monitoring and per-connector health — with the status bar to match.' },
        ]}
      />
      <MorePlatform current="connect" />
      <CTA />
    </>
  );
}
