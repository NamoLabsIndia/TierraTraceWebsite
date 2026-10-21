import tee from '../assets/passport/cotton-tee.webp';
import qr from '../assets/passport/demo-qr.svg';
import imgApparel from '../assets/industries/textiles-apparel.webp';
import imgAutomotive from '../assets/industries/automotive-supply-chain.webp';
import imgBattery from '../assets/industries/battery-manufacturing.webp';
import imgElectronics from '../assets/industries/electronics-semiconductors.webp';
import imgConsumer from '../assets/industries/consumer-goods.webp';
import imgWoven from '../assets/sections/insight-textile.webp';
import imgForest from '../assets/frameworks/forest-mist.webp';

/**
 * Digital Product Passport page content.
 * Everything under DEMO_PASSPORT is illustrative sample data for a fictional product; nothing on the page
 * presents it as a verified record. The hangtag QR encodes DPP_DEMO_URL (regenerate with
 * scripts/make-passport-qr.py if it changes).
 */

export const DPP_DEMO_URL = 'https://tierratrace.in/#/platform/passport?s=dpp-demo';

export const DPP_ASSETS = {
  tee: { src: tee, width: 1278, height: 1275, alt: 'An off-white organic cotton crew-neck T-shirt with a TierraTrace hangtag' },
  qr,
  woven: imgWoven,
  forest: imgForest,
};

export const DPP_HERO = {
  headline: ['A passport for', 'every product.'] as const,
  accent: ['Proof behind', 'every claim.'] as const,
  body: 'Create and manage Digital Product Passports with connected product information, materials, origin and lifecycle records — turning transparency into a competitive advantage.',
  secondary: { label: 'See how it works', to: 'how-it-works' },
  capabilities: ['Product information', 'QR and NFC identifiers', 'Traceability records'],
};

export const DPP_CONNECTS = {
  label: 'What it connects',
  headline: 'More than a product label.',
  body: 'Connect product information, supporting evidence and lifecycle records through a structured digital product identity.',
  items: [
    { n: '01', title: 'Product Identity', body: 'Core product identifiers and product information.' },
    { n: '02', title: 'Materials & Origin', body: 'Material composition, origin and relevant supplier information.' },
    { n: '03', title: 'Lifecycle Records', body: 'Relevant manufacturing, distribution and lifecycle events.' },
    { n: '04', title: 'Supporting Evidence', body: 'Documents, certificates and evidence associated with product claims.' },
  ],
};

/** "How it works": four stages, each with an illustrative product representation (see dpp/HowItWorks.tsx). */
export const DPP_HOW = {
  eyebrow: 'How it works',
  headline: 'From product data to a connected passport.',
  body: 'Our microservices connect your product data, structure it, verify claims and make relevant information accessible through a digital product passport.',
  stages: [
    {
      n: '01',
      title: 'Connect',
      body: 'Bring together relevant product data from across your supply chain.',
      caption: 'Connect to your existing systems',
      detail: 'Ingest and harmonise product information from suppliers, manufacturing, logistics and enterprise systems.',
    },
    {
      n: '02',
      title: 'Structure',
      body: 'Organise and enrich with identifiers, materials, origin and lifecycle records.',
      caption: 'TierraTrace platform',
      detail: 'Structure connected product data into a Digital Product Passport with a consistent data model and linked records.',
    },
    {
      n: '03',
      title: 'Verify',
      body: 'Validate product claims with linked evidence and integrity checks.',
      caption: 'TierraTrace Verify',
      detail: 'Associate product information with supporting evidence, provenance and integrity checks.',
    },
    {
      n: '04',
      title: 'Share',
      body: 'Make trusted product information accessible through the passport.',
      caption: 'Digital Product Passport',
      detail: 'Present relevant, trusted product information to authorised users through a secure and accessible passport.',
    },
  ],
  /** Examples of systems a deployment may draw from — labels only, no implied partnership. */
  sources: [
    { name: 'SAP', type: 'ERP system' },
    { name: 'Oracle', type: 'ERP system' },
    { name: 'Microsoft Dynamics', type: 'ERP system' },
    { name: 'Supplier', type: 'systems' },
    { name: 'Manufacturing', type: 'systems' },
  ],
  structure: ['Product Identity', 'Materials & Origin', 'Lifecycle Records', 'Supporting Evidence', 'Carbon Data'],
  verify: [
    { label: 'Material claim', status: 'Evidence linked' },
    { label: 'Origin information', status: 'Source record available' },
    { label: 'Certificate', status: 'Document linked' },
    { label: 'Supply chain record', status: 'Integrity check' },
  ],
  passportRows: ['Product identity', 'Materials', 'Origin', 'Lifecycle', 'Evidence', 'Carbon footprint'],
  note: 'Interfaces shown are illustrative, with sample data. Source systems are examples; connection scope is agreed per deployment.',
};

export type PassportRow = { label: string; value: string; note?: string };
export type PassportTab = { id: string; label: string; rows: PassportRow[] };

/** Sample passport for a fictional product. Values are illustrative, not measured or certified. */
export const DEMO_PASSPORT = {
  product: 'Cotton Crew Tee',
  origin: 'Tiruppur, India',
  id: 'TT-DEMO-0001',
  tabs: [
    {
      id: 'overview',
      label: 'Overview',
      rows: [
        { label: 'Material', value: '100% organic cotton', note: 'Declared' },
        { label: 'Origin', value: 'Tiruppur, India' },
        { label: 'Certificate', value: 'Organic content certificate', note: 'Document on file' },
        { label: 'Carbon footprint', value: '4.1 kg CO₂e', note: 'Estimate' },
        { label: 'Recyclability', value: 'Mono-material' },
      ],
    },
    {
      id: 'materials',
      label: 'Materials',
      rows: [
        { label: 'Main fabric', value: '100% organic cotton, single jersey', note: 'Declared' },
        { label: 'Fabric weight', value: '180 g/m²' },
        { label: 'Sewing thread', value: 'Cotton' },
        { label: 'Care label', value: 'Printed cotton tape' },
      ],
    },
    {
      id: 'origin',
      label: 'Origin',
      rows: [
        { label: 'Fibre', value: 'Organic cotton, India', note: 'Supplier record' },
        { label: 'Spinning', value: 'Tamil Nadu, India' },
        { label: 'Knitting & dyeing', value: 'Tiruppur, India' },
        { label: 'Garment making', value: 'Tiruppur, India' },
      ],
    },
    {
      id: 'lifecycle',
      label: 'Lifecycle',
      rows: [
        { label: 'Yarn spun', value: 'Batch YN-2041' },
        { label: 'Fabric knitted & dyed', value: 'Lot FB-118' },
        { label: 'Garment produced', value: 'Order GM-3307' },
        { label: 'Shipped', value: 'Shipment SH-0912' },
        { label: 'End of life', value: 'Mono-material — suitable for textile recycling streams' },
      ],
    },
    {
      id: 'evidence',
      label: 'Evidence',
      rows: [
        { label: 'Organic content certificate', value: 'PDF', note: 'Linked to Material' },
        { label: 'Supplier declaration', value: 'PDF', note: 'Linked to Origin' },
        { label: 'Fabric test report', value: 'PDF', note: 'Linked to Materials' },
        { label: 'Footprint calculation', value: 'Spreadsheet', note: 'Linked to Carbon footprint' },
      ],
    },
  ] satisfies PassportTab[],
};

export const DPP_DEMO = {
  id: 'dpp-demo',
  label: 'Passport demo',
  headline: 'Explore what a passport can reveal.',
  body: 'A sample passport for a cotton T-shirt. Select a category to see how product information, origin, lifecycle events and evidence sit together in one record.',
  disclaimer: 'Illustrative sample data for a fictional product. Not a verified product record.',
};

export const DPP_JOURNEYS = {
  label: 'Product journeys',
  headline: 'Built for different product journeys.',
  body: 'The structure of a passport follows the product. What matters for a garment is not what matters for a battery.',
  note: 'Information requirements differ by product category and market; a passport supports them but does not by itself establish compliance.',
  items: [
    { id: 'apparel', title: 'Apparel', body: 'Fibre composition, processing stages, care and end-of-life information.', image: { src: imgApparel, alt: 'Fabric on an industrial loom' } },
    { id: 'automotive', title: 'Automotive components', body: 'Part identity, material provenance and supplier tiers.', image: { src: imgAutomotive, alt: 'Cars on an assembly line' } },
    { id: 'batteries', title: 'Batteries', body: 'Chemistry, material sourcing and lifecycle documentation.', image: { src: imgBattery, alt: 'Battery cell production equipment' } },
    { id: 'electronics', title: 'Electronics', body: 'Component information, repair and recycling details.', image: { src: imgElectronics, alt: 'A processor on a circuit board' } },
    { id: 'consumer', title: 'Consumer goods', body: 'Packaging, ingredients or materials, and sourcing records.', image: { src: imgConsumer, alt: 'Bottles on a bottling line' } },
  ],
};

export const DPP_CTA = {
  headline: 'Give every product a clearer story.',
  body: 'Explore how TierraTrace can help connect product information, provenance and lifecycle records across your supply chain.',
  primary: { label: 'Request Pilot', to: '/contact?s=pilot' },
  secondary: { label: 'Contact Sales', to: '/contact' },
};
