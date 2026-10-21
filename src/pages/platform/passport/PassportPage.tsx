import { useEffect } from 'react';
import { DppHero } from './dpp/DppHero';
import { DppConnects, DppCta, DppDemo, DppJourneys } from './dpp/DppSections';
import { HowItWorks } from './dpp/HowItWorks';
import '../../home/sections/sections.css';
import './dpp/dpp.css';

const TITLE = 'Digital Product Passport | TierraTrace by Namo Labs';
const DESCRIPTION =
  'Explore TierraTrace Digital Product Passports for connected product information, provenance, supporting evidence and lifecycle records.';

/** Digital Product Passport sub-landing page. */
export default function PassportPage() {
  useEffect(() => {
    document.title = TITLE;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previous = meta?.content;
    if (meta) meta.content = DESCRIPTION;
    return () => {
      if (meta && previous !== undefined) meta.content = previous;
    };
  }, []);

  return (
    <div className="dp">
      <DppHero />
      <DppConnects />
      <HowItWorks />
      <DppDemo />
      <DppJourneys />
      <DppCta />
    </div>
  );
}
