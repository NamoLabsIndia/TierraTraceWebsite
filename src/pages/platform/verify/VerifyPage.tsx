import { useEffect } from 'react';
import { BellRing, FileArchive, Languages, Palette, QrCode, Webhook } from 'lucide-react';
import { FeatureGrid, ProductHero, StandardsStrip } from '../../../components/product';
import { CTA, MorePlatform } from '../../../components/Closing';
import { VerdictPhone } from './VerdictPhone';
import { Pipeline } from './Pipeline';
import { Surfaces } from './Surfaces';

// Content follows docs/prd/web-verify.md (§1–3, §12.1, §12.7, §12.8).
export default function VerifyPage() {
  useEffect(() => {
    document.title = 'TierraTrace Verify — Supplier & product verification';
  }, []);
  return (
    <>
      <ProductHero
        crumb="Verify"
        title="Verify it yourself."
        accent="In about two seconds."
        lead="TierraTrace Verify turns the QR on a label into something as trustworthy as a card chip. Anyone can scan it — and behind the answer stands a cryptographic chain they can check without trusting us."
        proof={['No account needed to scan', 'Fail-closed verdicts', 'Offline proof bundles']}
        secondary={{ label: 'See the eight checks', to: 'how-it-works' }}
        visual={<VerdictPhone />}
        hint="Tap a verdict to see exactly what a shopper would see."
      />
      <StandardsStrip
        label="Scan anything"
        items={[
          { code: 'QR', name: 'On-pack codes' },
          { code: 'GS1', name: 'Digital Link resolver' },
          { code: 'NFC', name: 'Tap-to-verify tags' },
          { code: 'Barcode', name: 'GTIN & serials' },
          { code: 'Batch', name: 'Lot codes' },
          { code: 'DPP ID', name: 'Passport identifiers' },
        ]}
      />
      <Pipeline />
      <Surfaces />
      <FeatureGrid
        eyebrow="Built to be trusted"
        title="Credibility is the product."
        accent="So the verifier stays boring."
        features={[
          { icon: Languages, title: 'Careful, legal-safe language', body: 'Public results never call an item fake or counterfeit. A failure “could not be verified” and offers a way to report it.' },
          { icon: FileArchive, title: 'Independent proof', body: 'Every verified item comes with a self-contained proof bundle and an open-source verifier to re-check it offline.' },
          { icon: QrCode, title: 'Identifiers & QR management', body: 'Issue, print and manage unit, lot and product codes — GS1 Digital Link compatible and stable for the product’s life.' },
          { icon: Palette, title: 'Your brand, guarded layout', body: 'Logo, colours and custom domain are yours. The verdict system and attribution stay fixed so nothing can fake a pass.' },
          { icon: BellRing, title: 'Alerts in minutes', body: 'Duplicate-code abuse and suspicious scan patterns raise alerts within five minutes, with an explainable signal trail.' },
          { icon: Webhook, title: 'Verification APIs', body: 'Public, partner and webhook APIs through the TierraTrace gateway — the same engine, the same verdicts.' },
        ]}
      />
      <MorePlatform current="verify" />
      <CTA />
    </>
  );
}
