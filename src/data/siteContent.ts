import chipTextile from '../assets/sections/chip-textile.webp';
import chipLogistics from '../assets/sections/chip-logistics.webp';
import chipAgriculture from '../assets/sections/chip-agriculture.webp';
import chipElectronics from '../assets/sections/chip-electronics.webp';
import missionLandscape from '../assets/sections/mission-landscape.webp';
import solutionPassport from '../assets/sections/solution-passport.webp';
import insightLogistics from '../assets/sections/insight-logistics.webp';
import studioFactory from '../assets/sections/studio-factory.webp';
import trustPort from '../assets/sections/trust-port.webp';
import insightTextile from '../assets/sections/insight-textile.webp';
import insightSeedling from '../assets/sections/insight-seedling.webp';
import insightAgriculture from '../assets/sections/insight-agriculture.webp';
import indTextiles from '../assets/industries/textiles-apparel.webp';
import indAutomotive from '../assets/industries/automotive-supply-chain.webp';
import indBattery from '../assets/industries/battery-manufacturing.webp';
import indElectronics from '../assets/industries/electronics-semiconductors.webp';
import indCoffee from '../assets/industries/coffee-provenance.webp';
import indConsumer from '../assets/industries/consumer-goods.webp';
import ctaEarth from '../assets/sections/cta-earth.webp';
import footerWordmark from '../assets/sections/footer-wordmark.webp';

/**
 * Copy, links and imagery for the homepage sections below the hero, the footer and the closing CTA.
 * Link targets follow SmartLink: a bare id scrolls to that home section, "/path" routes, null = not live yet.
 */

export type Img = { src: string; alt: string };
export type NavItem = { label: string; to: string | null };

export const ABOUT = {
  label: 'About TierraTrace',
  headline: 'We help businesses connect product information, traceability and sustainability data across their supply chains.',
  // Industry imagery, not people — nobody pictured is presented as a customer.
  chips: [
    { src: chipTextile, alt: 'Textile manufacturing' },
    { src: chipLogistics, alt: 'Container shipping' },
    { src: chipAgriculture, alt: 'Agricultural sourcing' },
    { src: chipElectronics, alt: 'Electronics manufacturing' },
  ] satisfies Img[],
  support: ['From global manufacturers to growing brands,', 'we help build more transparent and sustainable supply chains.'],
  panel: {
    kicker: '// TIERRATRACE',
    // The three solution areas below — a product fact, not a traction metric.
    stat: { value: 3, label: 'Connected solutions' },
    eyebrow: 'Our platform',
    title: ['Passports', 'Traceability', 'Studio'],
    body: 'A unified platform to create digital product passports, enable end-to-end traceability and unlock sustainability intelligence.',
  },
};

export const MISSION = {
  label: 'Our Mission',
  parent: 'by Namo Labs',
  headline: 'We aim to build more transparent and sustainable supply chains.',
  body: 'At Namo Labs, we build TierraTrace — a unified platform for digital product passports, traceability and sustainability intelligence. Our mission is to help businesses create more transparent, resilient and sustainable supply chains for a better future.',
  cta: { label: 'Learn More', to: 'solutions' },
  image: { src: missionLandscape, alt: 'Wind turbines across rolling green fields at sunset' } satisfies Img,
};

export type Solution = { id: string; title: string; body: string; to: string; image: Img };

export const SOLUTIONS = {
  label: 'Solutions',
  headline: 'Our Sustainability Solutions',
  intro:
    'We help businesses connect product information, traceability and sustainability data across their supply chains. Our solutions are designed to bring transparency, compliance readiness and measurable impact across industries.',
  defaultOpen: 'studio',
  items: [
    {
      id: 'passport',
      title: 'Digital Product Passport Solutions',
      body: 'Create structured digital product records that connect product information, provenance, documentation and lifecycle data.',
      to: '/platform/passport',
      image: { src: solutionPassport, alt: 'A phone verifying a digital product passport attached to a garment' },
    },
    {
      id: 'traceability',
      title: 'End-to-End Traceability',
      body: 'Connect product and material journeys across suppliers, manufacturing, distribution and downstream stakeholders.',
      to: '/platform/trace',
      image: { src: insightLogistics, alt: 'A container ship at sea' },
    },
    {
      id: 'studio',
      title: 'TierraTrace Studio',
      body: 'A powerful workspace to configure product data, traceability workflows and sustainability reporting for your supply chain.',
      to: '/platform/studio',
      image: { src: studioFactory, alt: 'A worker with a tablet inspecting boxes on a factory production line' },
    },
  ] satisfies Solution[],
};

export type Industry = {
  id: string;
  number: string;
  /** Short uppercase category, shown with the index. */
  capabilityLabel: string;
  title: string;
  subtitle: string;
  description: string;
  image: Img;
  /** object-position for the photo crop. */
  focus?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

/**
 * "Our Approach" — the industries TierraTrace is built for, shown as a three-position showcase.
 * Order here is display order; add an industry by adding an entry. Descriptions are intended use
 * cases, not claims about existing deployments.
 */
export const APPROACH = {
  id: 'industries',
  label: 'Our Approach',
  headline: 'We’re passionate about enabling transparent and sustainable supply chains across industries.',
  industries: [
    {
      id: 'textiles',
      number: '01',
      capabilityLabel: 'Textiles & Apparel',
      title: 'Textiles & Apparel',
      subtitle: 'From fibre to finished garment.',
      description:
        'Connect material origins, manufacturing stages, supplier records, and product-level information to improve supply-chain visibility across textile and apparel operations.',
      image: { src: indTextiles, alt: 'Fabric being woven on an industrial loom' },
      focus: '50% 55%',
    },
    {
      id: 'automotive',
      number: '02',
      capabilityLabel: 'Automotive OEMs & Tier 1 / Tier 2 Suppliers',
      title: 'Automotive Supply Chains',
      subtitle: 'From component suppliers to OEMs.',
      description:
        'Connect component identity, material provenance, manufacturing events, and quality evidence across automotive suppliers and original equipment manufacturers.',
      image: { src: indAutomotive, alt: 'Cars moving along a vehicle assembly line' },
      focus: '50% 60%',
    },
    {
      id: 'battery',
      number: '03',
      capabilityLabel: 'Battery Manufacturers',
      title: 'Battery Manufacturing',
      subtitle: 'Trace materials through the battery lifecycle.',
      description:
        'Structure product and material information across battery manufacturing, supplier relationships, production records, and lifecycle documentation.',
      image: { src: indBattery, alt: 'Pouch-cell forming and electrode punching machines on a battery production line' },
      focus: '40% 60%',
    },
    {
      id: 'electronics',
      number: '04',
      capabilityLabel: 'Electronics & Semiconductors',
      title: 'Electronics & Semiconductors',
      subtitle: 'Product identity for complex supply chains.',
      description:
        'Connect component information, manufacturing records, supplier data, and product documentation across electronics and semiconductor supply chains.',
      image: { src: indElectronics, alt: 'Close-up of a processor on a populated circuit board' },
      focus: '50% 50%',
    },
    {
      id: 'coffee',
      number: '05',
      capabilityLabel: 'Coffee & Indigenous Species',
      title: 'Coffee & Indigenous Species',
      subtitle: 'From origin to market.',
      description:
        'Connect geographic origin, producer information, sourcing records, processing events, and product identity to make provenance information more accessible across agricultural supply chains.',
      image: { src: indCoffee, alt: 'Hands harvesting ripe coffee cherries' },
      focus: '50% 45%',
    },
    {
      id: 'consumer-goods',
      number: '06',
      capabilityLabel: 'Consumer Goods',
      title: 'Consumer Goods',
      subtitle: 'Product information across every journey.',
      description:
        'Bring product identity, sourcing information, manufacturing records, and relevant sustainability data together across consumer-goods supply chains.',
      image: { src: indConsumer, alt: 'Quality checks on bottles at the end of a bottling line' },
      focus: '50% 60%',
    },
  ] satisfies Industry[],
  cta: { label: 'Discuss your supply chain', href: '/contact' },
};

/** Third-party photos that require attribution (rendered in the footer). */
export const PHOTO_CREDITS = [
  { text: 'Automotive line: Tupungato, CC BY 3.0', href: 'https://commons.wikimedia.org/w/index.php?curid=116381370' },
  { text: 'Battery lab: Oak Ridge National Laboratory, CC BY 2.0', href: 'https://commons.wikimedia.org/w/index.php?curid=125279741' },
  { text: 'Bottling line: Allagash Brewing, CC BY 2.0', href: 'https://www.flickr.com/photos/89562459@N03/28540500774' },
];

export type Insight = {
  slug: string;
  title: string;
  to: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  author: string;
  image: Img;
  body?: {
    lead?: string;
    sections?: {
      heading: string;
      content: string;
    }[];
  };
};

export const INSIGHTS = {
  label: 'Insights',
  headline: 'Building a More Transparent and Sustainable World',
  intro:
    'In today’s rapidly changing world, product traceability and sustainability data are becoming more critical than ever. As industries seek to reduce environmental impact and meet global compliance requirements, digital product passports, end-to-end traceability and trusted product data are at the forefront of change.',
  items: [
    {
      slug: 'digital-product-passports-for-global-supply-chains',
      title: 'Digital Product Passports for Global Supply Chains',
      to: '/insights/digital-product-passports-for-global-supply-chains',
      category: 'Digital Product Passport',
      readTime: '5 min read',
      date: 'Coming Soon',
      author: 'TierraTrace Editorial Team',
      summary:
        'How global manufacturers and exporters are adopting ESPR-ready digital product passports to unify bill-of-materials, carbon telemetry, and verified provenance into one scannable identity.',
      image: { src: insightTextile, alt: 'Fabric being woven on a loom' },
    },
    {
      slug: 'end-to-end-traceability-from-source-to-shelf',
      title: 'End-to-End Traceability from Source to Shelf',
      to: '/insights/end-to-end-traceability-from-source-to-shelf',
      category: 'Supply Chain Traceability',
      readTime: '6 min read',
      date: 'Coming Soon',
      author: 'TierraTrace Editorial Team',
      summary:
        'Moving past disconnected spreadsheets and siloed supplier declarations to cryptographic, audit-ready chain-of-custody logging from raw material origin to final retail shelf.',
      image: { src: trustPort, alt: 'A port worker tracing containers on a tablet' },
    },
    {
      slug: 'tierratrace-studio-for-sustainability-intelligence',
      title: 'TierraTrace Studio for Sustainability Intelligence',
      to: '/insights/tierratrace-studio-for-sustainability-intelligence',
      category: 'ESG Compliance & AI',
      readTime: '4 min read',
      date: 'Coming Soon',
      author: 'TierraTrace Editorial Team',
      summary:
        'Streamlining ESG disclosures across CSRD, GRI, ISSB, and BRSR with continuous live telemetry, AI narrative drafting, and automated gap detection without spreadsheets.',
      image: { src: insightSeedling, alt: 'A green seedling growing from dark soil at sunset' },
    },
    {
      slug: 'building-compliance-readiness-across-industries',
      title: 'Building Compliance Readiness Across Industries',
      to: '/insights/building-compliance-readiness-across-industries',
      category: 'Regulatory Standards',
      readTime: '5 min read',
      date: 'Coming Soon',
      author: 'TierraTrace Editorial Team',
      summary:
        'Navigating the wave of EUDR deforestation diligence, ESPR mandates, and SEBI BRSR Core with automated data pipelines and tamper-proof verification frameworks.',
      image: { src: insightAgriculture, alt: 'Hands harvesting coffee cherries on a hillside plantation' },
    },
  ] satisfies Insight[],
};

export const FOOTER = {
  parent: 'by Namo Labs',
  headline: 'Building a More Transparent and Sustainable World',
  // Only confirmed details. Add a phone number here when one is approved; null hides it.
  contact: { email: 'info@namolabs.in', phone: null as string | null },
  columns: [
    {
      title: 'About',
      links: [
        { label: 'Our Story', to: 'about' },
        { label: 'Our Mission', to: 'mission' },
        { label: 'Careers', to: null },
        { label: 'Newsroom', to: null },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Digital Product Passports', to: '/platform/passport' },
        { label: 'End-to-End Traceability', to: '/platform/trace' },
        { label: 'TierraTrace Studio', to: '/platform/studio' },
        { label: 'Industries', to: 'industries' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', to: '/contact' },
        { label: 'Documentation', to: null },
        { label: 'Privacy Policy', to: null },
        { label: 'Terms of Use', to: null },
      ],
    },
  ] satisfies { title: string; links: NavItem[] }[],
  // Oversized forest wordmark artwork (taken from the footer design comp); 1488×240.
  wordmark: { src: footerWordmark, width: 1488, height: 240 },
};

export const CLOSING_CTA = {
  headline: ['Have a Sustainability', 'Challenge?', 'Let’s collaborate now!'],
  cta: { label: 'Get in Touch', to: '/contact' },
  image: { src: ctaEarth, alt: '' } satisfies Img, // decorative
};

/**
 * Compliance section. The frameworks are illustrative examples of regulations the platform's data and
 * evidence can support — not completed assessments. `kind` describes the regulation, not a status.
 */
export const COMPLIANCE = {
  label: 'Compliance',
  headline: ['Stay ahead of every', 'product mandate —'],
  accent: 'worldwide.',
  body: 'TierraTrace helps businesses organize product data, map applicable requirements, and prepare traceable evidence across their supply chains.',
  capabilities: [
    { icon: 'database', title: 'Enterprise Data Integration', body: 'Connect relevant product and supplier information from ERP, MES, PLM, and other business systems.' },
    { icon: 'shield', title: 'Trust & Verification', body: 'Maintain traceable records and verifiable evidence associated with product and supply-chain events.' },
    { icon: 'file', title: 'Compliance Evidence', body: 'Organize supporting documents and product records for reviews, audits, and reporting workflows.' },
    { icon: 'leaf', title: 'Sustainability Data', body: 'Bring material, product, and environmental information together to support sustainability reporting.' },
  ] as const,
  panel: {
    title: 'Compliance',
    subtitle: 'Example frameworks',
    frameworks: [
      { name: 'EU Digital Product Passport', region: 'European Union', code: 'EU', kind: 'Product passport' },
      { name: 'Carbon Border Adjustment Mechanism (CBAM)', region: 'European Union', code: 'EU', kind: 'Carbon reporting' },
      { name: 'EU Battery Regulation', region: 'European Union', code: 'EU', kind: 'Product regulation' },
      { name: 'AGEC', region: 'France', code: 'FR', kind: 'Circular economy' },
      { name: 'Plastic Packaging Tax', region: 'United Kingdom', code: 'UK', kind: 'Packaging' },
      { name: 'FTC Green Guides', region: 'United States', code: 'US', kind: 'Environmental claims' },
    ],
    note: 'Illustrative examples. Which requirements apply depends on your products and markets — TierraTrace organizes the data and evidence; it does not provide legal advice.',
  },
};
