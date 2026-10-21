import stageSugarcane from '../assets/trace/stage-sugarcane.webp';
import stageProcessing from '../assets/trace/stage-processing.webp';
import stagePackaging from '../assets/trace/stage-packaging.webp';
import stageDistribution from '../assets/trace/stage-distribution.webp';
import stageRetail from '../assets/trace/stage-retail.webp';
import featureSugarcane from '../assets/trace/feature-sugarcane.webp';
import featureJaggery from '../assets/trace/feature-jaggery.webp';
import featureMill from '../assets/trace/feature-mill.webp';
import featureTruck from '../assets/trace/feature-truck.webp';
import rawCotton from '../assets/trace/raw-cotton.webp';

/**
 * TierraTrace Trace (End-to-End Traceability) page content.
 * The hero reuses the Cotton Crew Tee from the passport page; its hangtag QR opens the sample passport
 * (DPP_DEMO_URL).
 */

export const TRACE_HERO = {
  eyebrow: 'End-to-end traceability',
  headline: ['Every product.', 'Every journey.'] as const,
  accent: 'Fully traceable.',
  body: 'Turn your supply chain data into a trusted Digital Product Passport.',
  cta: { label: 'Explore platform', to: '/?s=solutions' },
  passport: {
    product: 'Cotton Crew Tee',
    lot: 'LOT-ARA-04-26805',
    rows: ['Product Identity', 'Materials & Origin', 'Supply Chain', 'Evidence', 'Carbon Footprint'],
  },
  layers: ['Materials', 'Origin', 'Evidence', 'Impact'],
};

/* ---------- Blockchain-powered traceability (the "open any stage" section) ---------- */

export type LedgerEvidence = { id: string; name: string; type: string; linkedTo: string; hash: string };
export type LedgerStage = {
  id: string;
  n: string;
  name: string;
  place: string;
  image: { src: string; alt: string };
  /** 'recorded' = an event is on the ledger and its references check out; 'pending' = nothing recorded yet. */
  status: 'recorded' | 'pending';
  event: string;
  organisation: string;
  time: string;
  txRef: string;
  eventId: string;
  block: string;
  evidence: LedgerEvidence[];
};

/**
 * One fictional jaggery lot followed through five stages. Every value below is illustrative sample data —
 * organisations, times, references and hashes are invented for the demonstration and are labelled as such
 * on the page. Retail is deliberately left unrecorded to show how a gap is presented.
 */
export const TRACE_LEDGER = {
  id: 'ledger',
  eyebrow: 'Blockchain-powered traceability',
  headline: 'Open any stage.',
  accent: 'See the proof behind it.',
  body: 'Every event is recorded on a tamper-evident ledger, connecting product journeys with verifiable evidence from raw material to customer.',
  capabilities: [
    { title: 'Immutable records', body: 'Supply-chain events are recorded with references that help establish whether records have been altered.' },
    { title: 'Verifiable evidence', body: 'Associate manufacturing records, certificates, inspection reports and supporting documents with individual events.' },
    { title: 'End-to-end visibility', body: 'Connect relevant records across raw materials, processing, packaging, distribution and retail.' },
    { title: 'Independent verification', body: 'Allow authorised users to examine record integrity, evidence references and verification results.' },
  ],
  lot: 'LOT-JAG-2291',
  ledger: 'Hyperledger Fabric · permissioned',
  note: 'Illustrative sample data for a fictional jaggery lot — not a live ledger record. A matching reference shows a record has not changed since it was written; it does not by itself prove the original information was accurate. If the ledger cannot be reached, the result reads “cannot verify”.',
  stages: [
    {
      id: 'raw',
      n: '01',
      name: 'Raw Material',
      place: 'Sugarcane farm',
      image: { src: stageSugarcane, alt: 'Sugarcane growing in a field' },
      status: 'recorded',
      event: 'Harvest recorded',
      organisation: 'Illustrative farmer cooperative',
      time: '02 Mar 2026, 07:40 IST',
      txRef: '0x2c9e…41d7',
      eventId: 'EVT-JAG-01-0098',
      block: '18,437,552',
      evidence: [
        { id: 'harvest', name: 'Harvest log', type: 'PDF', linkedTo: 'Event', hash: 'sha256 · 5e0a…d2c4' },
        { id: 'farm', name: 'Farm registration', type: 'PDF', linkedTo: 'Organisation', hash: 'sha256 · 91c7…0b3e' },
      ],
    },
    {
      id: 'processing',
      n: '02',
      name: 'Processing',
      place: 'Jaggery unit',
      image: { src: stageProcessing, alt: 'Sugarcane juice being boiled down in an open pan' },
      status: 'recorded',
      event: 'Production recorded',
      organisation: 'Illustrative processing facility',
      time: '14 Mar 2026, 09:12 IST',
      txRef: '0x7f3a…c21e',
      eventId: 'EVT-JAG-02-0147',
      block: '18,442,091',
      evidence: [
        { id: 'production', name: 'Production report', type: 'PDF', linkedTo: 'Event', hash: 'sha256 · 3b1f…9a0c' },
        { id: 'quality', name: 'Quality report', type: 'PDF', linkedTo: 'Event', hash: 'sha256 · c84d…17e2' },
        { id: 'process', name: 'Process documentation', type: '4 images', linkedTo: 'Event', hash: 'sha256 · 0fa9…6b51' },
      ],
    },
    {
      id: 'packaging',
      n: '03',
      name: 'Packaging',
      place: 'Packing unit',
      image: { src: stagePackaging, alt: 'Slabs of jaggery packed in clear plastic' },
      status: 'recorded',
      event: 'Packed into 1 kg blocks',
      organisation: 'Illustrative packing unit',
      time: '16 Mar 2026, 15:30 IST',
      txRef: '0x91b0…07fa',
      eventId: 'EVT-JAG-03-0212',
      block: '18,446,870',
      evidence: [
        { id: 'packing', name: 'Packing record', type: 'PDF', linkedTo: 'Event', hash: 'sha256 · 7d22…e840' },
        { id: 'label', name: 'Label proof', type: 'PDF', linkedTo: 'Event', hash: 'sha256 · a613…5fd9' },
      ],
    },
    {
      id: 'distribution',
      n: '04',
      name: 'Distribution',
      place: 'In transit',
      image: { src: stageDistribution, alt: 'A goods truck on a highway' },
      status: 'recorded',
      event: 'Shipment dispatched',
      organisation: 'Illustrative logistics partner',
      time: '18 Mar 2026, 06:05 IST',
      txRef: '0x4d18…b3e2',
      eventId: 'EVT-JAG-04-0263',
      block: '18,450,114',
      evidence: [
        { id: 'delivery', name: 'Delivery note', type: 'PDF', linkedTo: 'Event', hash: 'sha256 · 2e5c…a7b0' },
        { id: 'transport', name: 'Transport log', type: 'CSV', linkedTo: 'Event', hash: 'sha256 · f0d3…3c18' },
      ],
    },
    {
      id: 'retail',
      n: '05',
      name: 'Retail',
      place: 'Store',
      image: { src: stageRetail, alt: 'Pieces of jaggery for sale at a market' },
      status: 'pending',
      event: 'Awaiting receipt at store',
      organisation: 'Illustrative retail outlet',
      time: 'Not yet recorded',
      txRef: 'Not yet recorded',
      eventId: '—',
      block: '—',
      evidence: [],
    },
  ] satisfies LedgerStage[],
};

/* ---------- "Built for real supply chains": six capability cards ---------- */

/**
 * Card visuals reuse the sample jaggery lot from the section above (LOT-JAG-2291); every figure is
 * illustrative and internally consistent (the two sublots sum to the parent; variance = (in − out) / in).
 */
export const TRACE_FEATURES = {
  eyebrow: 'Built for real supply chains',
  headline: 'Traceability that holds up',
  accent: 'under an audit.',
  cards: [
    {
      id: 'stages',
      title: 'Stages that match your industry',
      body: 'Configure and map stages for your supply chain, from raw material to customer. Flexible across industries.',
      image: { src: featureSugarcane, alt: '', position: '50% 50%' },
    },
    {
      id: 'gaps',
      title: 'Gaps you can see',
      body: 'Identify missing data, incomplete documents and unverified stages before they become compliance risks.',
      image: null,
    },
    {
      id: 'splits',
      title: 'Splits and merges, done right',
      body: 'Track sublots, merged lots and batch transformations with complete quantity attribution across the supply chain.',
      image: { src: featureJaggery, alt: '', position: '40% 50%' },
    },
    {
      id: 'mass',
      title: 'Mass balance at every node',
      body: 'Inputs reconcile with outputs at each stage. Variances beyond tolerance are flagged for review.',
      image: { src: featureMill, alt: '', position: '50% 30%' },
    },
    {
      id: 'custody',
      title: 'Custody past the factory gate',
      body: 'Track ownership changes, shipment movements and location handoffs through connected supply-chain records.',
      image: { src: featureTruck, alt: '', position: '78% 60%' },
    },
    {
      id: 'exports',
      title: 'Regulator-ready exports',
      body: 'Export traceability records and supporting evidence in structured formats for review and audit preparation.',
      image: null,
    },
  ],
  stages: ['Raw Material', 'Processing', 'Packaging', 'Distribution', 'Retail'],
  gaps: [
    { stage: 'Raw Material', state: 'ok', label: 'Recorded' },
    { stage: 'Processing', state: 'missing', label: 'Missing record' },
    { stage: 'Packaging', state: 'pending', label: 'Pending' },
    { stage: 'Distribution', state: 'pending', label: 'Pending' },
  ],
  split: { parent: { id: 'LOT-JAG-2291', qty: '8,000 kg' }, children: [{ id: 'SUB-001', qty: '3,200 kg' }, { id: 'SUB-002', qty: '4,800 kg' }] },
  mass: { input: '8,110 kg', output: '7,800 kg', variance: '3.8%', tolerance: '5%', fill: 76 },
  custody: [
    { label: 'Ownership transfer', done: true },
    { label: 'Shipment recorded', done: true },
    { label: 'Location update', done: true },
    { label: 'Receipt confirmed', done: false },
  ],
  exports: ['CSV', 'JSON', 'PDF'],
  evidenceThumbs: [stageProcessing, stagePackaging],
  note: 'Interface details are illustrative, using the sample lot above.',
};

/* ---------- "Recall in seconds": a flagged lot traced downstream ---------- */

export type RecallNode = { id: string; qty: string; kind: 'raw' | 'yarn' | 'garment'; flag?: boolean; children?: RecallNode[] };

/**
 * Illustrative recall walk-through shown inside a laptop mockup. Quantities are consistent: the two yarn
 * lots consume the 12,000 kg supplier lot (7,800 + 4,200) and the three garment batches total 3,830 units.
 */
export const TRACE_RECALL = {
  id: 'impact',
  eyebrow: 'Recall in seconds, not weeks',
  headline: 'One flagged lot.',
  accent: 'Every affected customer, instantly.',
  body: 'When a supplier reports a problem, open the lot and see the full genealogy — through splits and merges, with quantities at every link — and identify downstream impact in seconds.',
  features: [
    { title: 'Full lot genealogy', body: 'Trace through splits, merges and batch transformations.' },
    { title: 'See downstream impact', body: 'Identify affected shipments, batches and customers.' },
    { title: 'Take action, faster', body: 'Export impact sets and open a recall dossier.' },
  ],
  app: {
    nav: ['Home', 'Passport', 'Trace', 'Carbon', 'Verify', 'Insights', 'Studio', 'Connect'],
    workspace: 'Sample workspace',
    lot: { id: 'SUP-CT-7781', meta: 'Raw cotton · 12,000 kg · Flagged by supplier', image: rawCotton },
    impact: { units: '3,830 units', across: 'Across 3 batches, 4 customers' },
    tabs: ['Genealogy', 'Sublots (2)', 'Shipments (6)', 'Customers (4)', 'Documents (12)'],
    metrics: [
      { value: '3', label: 'Garment batches' },
      { value: '3,830', label: 'Units affected' },
      { value: '6', label: 'Shipments' },
      { value: '4', label: 'Customers' },
    ],
    actions: ['View affected customers', 'View shipments', 'Open recall dossier'],
  },
  tree: {
    id: 'SUP-CT-7781',
    qty: '12,000 kg',
    kind: 'raw',
    flag: true,
    children: [
      {
        id: 'LOT-YRN-2291',
        qty: '7,800 kg',
        kind: 'yarn',
        children: [
          { id: 'LOT-ARA-04-26805', qty: '1,240 tees', kind: 'garment' },
          { id: 'LOT-ARA-04-26811', qty: '980 tees', kind: 'garment' },
        ],
      },
      {
        id: 'LOT-YRN-2304',
        qty: '4,200 kg',
        kind: 'yarn',
        children: [{ id: 'LOT-ARA-05-27002', qty: '1,610 tees', kind: 'garment' }],
      },
    ],
  } satisfies RecallNode,
  note: 'Illustrative interface with sample data. Select a lot to see its path through the genealogy.',
};
