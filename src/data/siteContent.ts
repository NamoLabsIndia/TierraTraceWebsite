import chipTextile from '../assets/sections/chip-textile.webp';
import chipLogistics from '../assets/sections/chip-logistics.webp';
import chipAgriculture from '../assets/sections/chip-agriculture.webp';
import chipElectronics from '../assets/sections/chip-electronics.webp';
import missionLandscape from '../assets/sections/mission-landscape.webp';
import solutionPassport from '../assets/sections/solution-passport.webp';
import insightLogistics from '../assets/sections/insight-logistics.webp';
import studioFactory from '../assets/sections/studio-factory.webp';
import trustThumb from '../assets/sections/trust-thumb.webp';
import trustTextile from '../assets/sections/trust-textile.webp';
import trustPort from '../assets/sections/trust-port.webp';
import insightTextile from '../assets/sections/insight-textile.webp';
import insightSeedling from '../assets/sections/insight-seedling.webp';
import insightAgriculture from '../assets/sections/insight-agriculture.webp';
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

/**
 * The reference shows a customer testimonial. There is no approved one yet, so this rotates our own
 * statements, clearly labelled as ours. Replace `items` with approved testimonials when they exist.
 */
export const APPROACH = {
  id: 'industries',
  label: 'Our Approach',
  headline: 'We’re passionate about enabling transparent and sustainable supply chains across industries.',
  attribution: { name: 'TierraTrace', role: 'Our approach, by Namo Labs' },
  items: [
    'Building transparent and sustainable supply chains takes collaboration across every stage of the product journey.',
    'Trusted product data starts at the source — with the suppliers, materials and processes behind every product.',
    'Traceability should make compliance readiness simpler, not add another layer of complexity to operations.',
  ],
  images: {
    thumb: { src: trustThumb, alt: 'A worker monitoring spinning machines in a textile mill' },
    main: { src: trustTextile, alt: 'Rolls of fabric on a textile production line' },
    side: { src: trustPort, alt: 'A port worker with a tablet beside stacked shipping containers' },
  },
};

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
