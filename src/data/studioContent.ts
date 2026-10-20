import collage from '../assets/studio/studio-collage.webp';
import col1 from '../assets/studio/studio-col-1.webp';
import col2 from '../assets/studio/studio-col-2.webp';
import col3 from '../assets/studio/studio-col-3.webp';
import col4 from '../assets/studio/studio-col-4.webp';
import col5 from '../assets/studio/studio-col-5.webp';
import indManufacturers from '../assets/industries/automotive-supply-chain.webp';
import indListed from '../assets/industries/listed-companies.webp';
import indSme from '../assets/industries/sme-exporters.webp';
import indConsulting from '../assets/industries/consulting-audit.webp';
import indTextiles from '../assets/industries/textiles-apparel.webp';
import indElectronics from '../assets/industries/electronics-semiconductors.webp';
import indCoffee from '../assets/industries/coffee-provenance.webp';
import indBattery from '../assets/industries/battery-manufacturing.webp';
import indConsumer from '../assets/industries/consumer-goods.webp';
import fwEu from '../assets/frameworks/eu-commission.webp';
import fwForest from '../assets/frameworks/forest-mist.webp';
import heroLandscape from '../assets/hero/tierratrace-hero-landscape.webp';
import missionLandscape from '../assets/sections/mission-landscape.webp';
import passportPhoto from '../assets/sections/solution-passport.webp';
import portPhoto from '../assets/sections/trust-port.webp';
import earthPhoto from '../assets/sections/cta-earth.webp';
import seedlingPhoto from '../assets/sections/insight-seedling.webp';

/**
 * TierraTrace Studio hero. The card collage is one supplied image (1672×941); the five column layers
 * are cut from it along seams that run through the gaps between cards, so each column can drift
 * vertically and the image reassembles exactly at rest. Regenerate the columns if the collage changes.
 */
export const STUDIO_HERO = {
  eyebrow: 'The AI Compliance & Reporting Canvas',
  headline: ['AI-powered Studio', 'for', 'ESG reporting.'] as const,
  body: 'A simple 6-step procedure for all companies to collect, analyse, report and comply with global sustainability standards.',
  primary: { label: 'Explore TierraTrace Studio', to: 'studio-canvas' },
  video: {
    label: 'Watch video',
    /** Set to a video file or embeddable URL when the overview video exists; null shows a "coming soon" dialog. */
    src: null as string | null,
  },
  background: {
    src: collage,
    width: 1672,
    height: 941,
    alt: 'A wall of TierraTrace cards: ESG performance, compliance, carbon intelligence, product passports and traceability',
    // left / width as % of the collage; amp in px; dur in s; phase as a fraction of the cycle
    columns: [
      { src: col1, left: 0, width: 20.634, amp: 12, dur: 8, phase: 0.1 },
      { src: col2, left: 13.935, width: 25.897, amp: 15, dur: 10.5, phase: 0.55 },
      { src: col3, left: 36.722, width: 24.282, amp: 10, dur: 7.5, phase: 0.3 },
      { src: col4, left: 54.246, width: 26.974, amp: 14, dur: 11, phase: 0.8 },
      { src: col5, left: 77.033, width: 22.967, amp: 11, dur: 9, phase: 0.45 },
    ],
  },
};


/** Studio frameworks section (cards reuse STANDARDS from siteContent). */
export const STUDIO_FRAMEWORKS = {
  eyebrow: 'Frameworks',
  headline: ['Pre-built frameworks.', 'Always up to date.'] as const,
  body: 'TierraTrace Studio supports global reporting frameworks through pre-built data models, disclosure mappings, and reporting logic — helping sustainability teams work with greater clarity and confidence.',
};

export type Audience = { id: string; number: string; title: string; body: string; image: { src: string; alt: string }; focus?: string; to: string };

export const STUDIO_AUDIENCES = {
  eyebrow: 'Built for sustainability teams',
  headline: ['Every company that reports', 'sustainability, anywhere.'] as const,
  body: 'TierraTrace Studio is designed for organisations across industries, providing one connected workspace for sustainability reporting, evidence management, and compliance workflows.',
  items: [
    {
      id: 'manufacturers',
      number: '01',
      title: 'Large Manufacturers',
      body: 'Coordinate multi-site sustainability data, operational evidence, and reporting workflows in one workspace.',
      image: { src: indManufacturers, alt: 'Cars moving along a vehicle assembly line' },
      focus: '45% 60%',
      to: '/contact',
    },
    {
      id: 'listed',
      number: '02',
      title: 'Listed Companies',
      body: 'Bring sustainability reporting, governance, and review workflows into one connected environment.',
      image: { src: indListed, alt: 'Glass facade of a modern office tower against the sky' },
      focus: '55% 40%',
      to: '/contact',
    },
    {
      id: 'sme',
      number: '03',
      title: 'SME Exporters',
      body: 'Organise supplier data and supporting evidence for customer and market reporting requirements.',
      image: { src: indSme, alt: 'Shipping containers stacked beneath gantry cranes at a container terminal' },
      focus: '50% 50%',
      to: '/contact',
    },
    {
      id: 'consulting',
      number: '04',
      title: 'Consulting & Audit Firms',
      body: 'Coordinate reporting projects, evidence reviews, and client workflows with greater consistency.',
      image: { src: indConsulting, alt: 'Glass office building with clipped hedges in front' },
      focus: '50% 50%',
      to: '/contact',
    },
  ] satisfies Audience[],
};

/**
 * Metrics strip. Only `verified: true` entries are rendered — set a value to verified once the product
 * owner has confirmed it. "19+" matches the existing Studio copy; the others are from a design comp.
 */
export const STUDIO_METRICS = [
  { value: '19+', label: 'Global reporting frameworks', verified: true },
  { value: '180+', label: 'Countries supported', verified: false },
  { value: '12+', label: 'Industries', verified: false },
  { value: '1', label: 'Connected workspace', verified: true },
];

/**
 * Photo per framework card in the Studio carousel (keyed by STANDARDS id). Photos are thematic, not
 * official imagery of the bodies concerned. Unmapped ids fall back to `fallback`.
 */
export const FRAMEWORK_IMAGES: Record<string, { src: string; focus?: string }> = {
  csrd: { src: fwEu, focus: '30% 60%' },
  gri: { src: missionLandscape, focus: '30% 50%' },
  issb: { src: indListed, focus: '55% 40%' },
  brsr: { src: indConsulting, focus: '50% 45%' },
  eudr: { src: indCoffee, focus: '50% 40%' },
  espr: { src: passportPhoto, focus: '50% 50%' },
  cbam: { src: indSme, focus: '50% 50%' },
  csddd: { src: indTextiles, focus: '50% 55%' },
  'ghg-protocol': { src: heroLandscape, focus: '60% 45%' },
  tcfd: { src: indListed, focus: '30% 70%' },
  cdp: { src: earthPhoto, focus: '70% 60%' },
  sasb: { src: indElectronics, focus: '50% 50%' },
  sfdr: { src: indConsulting, focus: '30% 30%' },
  tnfd: { src: fwForest, focus: '50% 60%' },
  'sec-climate': { src: fwEu, focus: '80% 40%' },
  'ca-sb253': { src: portPhoto, focus: '50% 35%' },
  'iso-14064': { src: indBattery, focus: '40% 60%' },
  'iso-14067': { src: indConsumer, focus: '50% 60%' },
  'un-sdgs': { src: seedlingPhoto, focus: '50% 40%' },
};
export const FRAMEWORK_IMAGE_FALLBACK = { src: missionLandscape, focus: '50% 50%' };
