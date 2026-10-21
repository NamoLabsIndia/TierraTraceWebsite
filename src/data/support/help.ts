import type { HelpArticle, HelpCategory } from './types';

/**
 * Help Center articles. Product statements summarise the TierraTrace product pages on this website and
 * are worded as such; nothing here describes product screens or steps that have not been verified.
 * Categories with no published article are not listed (see HELP_CATEGORIES_WITH_CONTENT).
 */
const U = '2026-10-21';

export const HELP_CATEGORIES: HelpCategory[] = [
  { id: 'getting-started', name: 'Getting started', description: 'What TierraTrace is and how to begin a conversation or pilot.' },
  { id: 'products', name: 'TierraTrace products', description: 'What each module is for, as described on the product pages.' },
  { id: 'digital-product-passports', name: 'Digital Product Passports', description: 'Passport concepts, and scanning a passport QR code.' },
  { id: 'traceability', name: 'Supply chain traceability', description: 'Lots, events and preparing supply chain data.' },
  { id: 'verification', name: 'Verification and evidence', description: 'What integrity checks show — and what they cannot.' },
  { id: 'integrations', name: 'Integrations', description: 'How connecting your systems is scoped.' },
  { id: 'troubleshooting', name: 'Troubleshooting', description: 'Website issues and how to get help effectively.' },
];

export const HELP_ARTICLES: HelpArticle[] = [
  {
    slug: 'what-is-tierratrace',
    category: 'getting-started',
    title: 'What is TierraTrace?',
    intro:
      'TierraTrace, by Namo Labs, is a platform for Digital Product Passports, end-to-end traceability and sustainability intelligence. This article explains what it is for and how its modules fit together.',
    updated: U,
    keywords: ['overview', 'platform', 'modules', 'namo labs', 'product passport', 'traceability'],
    body: [
      { t: 'h2', id: 'purpose', text: 'What TierraTrace is for' },
      {
        t: 'p',
        text: 'TierraTrace connects product information, supply chain records and supporting evidence so that organisations can describe a product’s identity, origin and journey, and share the right parts of that record with the right people.',
      },
      { t: 'h2', id: 'modules', text: 'The modules' },
      {
        t: 'table',
        head: ['Module', 'What it is for (from its product page)'],
        rows: [
          ['[Passport](/platform/passport)', 'Digital Product Passports: product information, materials, origin and lifecycle records behind a scannable identifier.'],
          ['[Trace](/platform/trace)', 'End-to-end traceability: lots, transformations and shipments linked from source to customer.'],
          ['[Verify](/platform/verify)', 'Supplier and product verification: checking a scanned product record against its integrity references.'],
          ['[Carbon](/platform/carbon)', 'Carbon footprint and sustainability calculations linked to the records they come from.'],
          ['[Studio](/platform/studio)', 'Configuration studio for passports and schemas, and a workspace for sustainability reporting against frameworks.'],
          ['[Connect](/platform/connect)', 'Integrations with existing systems such as ERPs.'],
          ['[Insights](/platform/insights)', 'Analytics and reporting on traceability data.'],
        ],
      },
      {
        t: 'note',
        tone: 'info',
        title: 'Availability',
        text: 'These descriptions summarise the product pages on this website. Which capabilities are available for your organisation, and in what form, is confirmed with our team during scoping — [contact us](/contact) or [request a pilot](/contact?s=pilot).',
      },
      { t: 'h2', id: 'next', text: 'Where to go next' },
      {
        t: 'list',
        items: [
          '[Understanding Digital Product Passports](/help/understanding-digital-product-passports)',
          '[How product traceability works](/help/how-product-traceability-works)',
          '[Requesting a pilot](/help/requesting-a-pilot)',
        ],
      },
    ],
    related: ['requesting-a-pilot', 'understanding-digital-product-passports', 'how-product-traceability-works'],
  },
  {
    slug: 'requesting-a-pilot',
    category: 'getting-started',
    title: 'Requesting a pilot',
    intro: 'How to ask for a TierraTrace pilot, and what the four pilot phases described on our Contact page involve.',
    updated: U,
    keywords: ['pilot', 'getting started', 'onboarding', 'briefing', 'contact sales'],
    body: [
      { t: 'h2', id: 'how', text: 'How to request one' },
      {
        t: 'steps',
        items: [
          'Open the [Contact page](/contact).',
          'Complete the briefing form: your name, work email, company, industry and a short description of the products and regulations you are preparing for.',
          'Submit the form. You will see a reference number when the request has been received. If online sending is unavailable, the form offers to open an email to us with your text already filled in.',
        ],
      },
      { t: 'h2', id: 'phases', text: 'The four phases' },
      { t: 'p', text: 'The pilot programme on the Contact page is organised in four phases:' },
      {
        t: 'table',
        head: ['Phase', 'Focus'],
        rows: [
          ['01 · Discover', 'Product and data-model scoping'],
          ['02 · Design', 'Passport schema and partner onboarding plan'],
          ['03 · Deploy', 'Passports for the pilot product line'],
          ['04 · Scale', 'Rollout across sites and categories'],
        ],
      },
      { t: 'h2', id: 'prepare', text: 'What helps us prepare' },
      {
        t: 'list',
        items: [
          'The product line you want to start with, and roughly how many products, models or batches it covers.',
          'The regulations or customer requirements driving the work, if you know them.',
          'Where your product and supplier data lives today (ERP, PLM, spreadsheets, supplier documents).',
        ],
      },
      { t: 'p', text: 'See also: [Preparing supply chain data](/help/preparing-supply-chain-data).' },
    ],
    related: ['preparing-supply-chain-data', 'what-is-tierratrace'],
  },
  {
    slug: 'understanding-digital-product-passports',
    category: 'digital-product-passports',
    title: 'Understanding Digital Product Passports',
    intro: 'A Digital Product Passport is a structured digital record about a product, reached through an identifier on the product itself. Here is what that means in practice and where EU policy stands.',
    updated: U,
    keywords: ['digital product passport', 'dpp', 'espr', 'product identity', 'qr', 'data carrier', 'battery passport'],
    body: [
      { t: 'h2', id: 'what', text: 'What a passport is' },
      {
        t: 'p',
        text: 'A passport links a physical product to information about it — materials, origin, lifecycle events and supporting documents — through a data carrier such as a QR code. Different audiences can be given different views of the same record.',
      },
      { t: 'h2', id: 'eu', text: 'Where EU policy stands' },
      {
        t: 'list',
        items: [
          'The Ecodesign for Sustainable Products Regulation, Regulation (EU) 2024/1781, has been in force since 18 July 2024. A passport becomes mandatory for a product group only when a delegated act for that group requires one.',
          'Under the Batteries Regulation, Regulation (EU) 2023/1542, a battery passport is required from 18 February 2027 for LMT batteries, industrial batteries over 2 kWh and electric-vehicle batteries.',
        ],
      },
      {
        t: 'p',
        text: 'For the full picture, with links to the official texts, read [Digital Product Passports: where EU policy stands in 2026](/insights/digital-product-passports/eu-digital-product-passport-policy-2026).',
      },
      {
        t: 'note',
        tone: 'info',
        title: 'Not legal advice',
        text: 'Whether a passport is required for your products depends on the legal texts that apply to them. Check the official sources and take advice for your situation.',
      },
    ],
    related: ['scanning-a-passport-qr-code', 'evidence-and-integrity', 'what-is-tierratrace'],
  },
  {
    slug: 'scanning-a-passport-qr-code',
    category: 'digital-product-passports',
    title: 'Scanning a passport QR code',
    intro: 'How to open the sample passport from the hangtag on our Digital Product Passport page, and what to try if a scan does not work.',
    updated: U,
    keywords: ['qr', 'scan', 'hangtag', 'sample passport', 'demo', 'camera'],
    body: [
      { t: 'h2', id: 'sample', text: 'The sample passport' },
      {
        t: 'p',
        text: 'The hangtag on the [Digital Product Passport page](/platform/passport) carries a real QR code. It opens the sample passport demo on that page — a fictional cotton T-shirt with illustrative data, not a verified product record.',
      },
      { t: 'h2', id: 'how', text: 'How to scan' },
      {
        t: 'steps',
        items: [
          'Open your phone’s camera app, or a QR scanner.',
          'Point it at the hangtag on screen so the whole code is visible, then tap the link that appears.',
          'The page opens at the passport demo, where you can switch between Overview, Materials, Origin, Lifecycle and Evidence.',
        ],
      },
      { t: 'h2', id: 'not-working', text: 'If the scan does not work' },
      {
        t: 'list',
        items: [
          'Increase screen brightness and hold the phone a little further away, so the whole code fits inside the frame.',
          'Avoid glare: tilt the screen or phone slightly.',
          'If the camera does not offer a link, open the passport demo directly from the [Digital Product Passport page](/platform/passport?s=dpp-demo).',
        ],
      },
    ],
    related: ['understanding-digital-product-passports', 'website-problems'],
  },
  {
    slug: 'how-product-traceability-works',
    category: 'traceability',
    title: 'How product traceability works',
    intro: 'Traceability means being able to follow a product back to its sources and forward to where it went. This article explains the building blocks: identifiers, lots, events and chain-of-custody models.',
    updated: U,
    keywords: ['traceability', 'lot', 'batch', 'genealogy', 'chain of custody', 'events', 'recall', 'epcis'],
    body: [
      { t: 'h2', id: 'units', text: 'Traceable units' },
      {
        t: 'p',
        text: 'Each stage works with a unit it can identify — a batch of raw material, a production lot, a logistic unit or an individual item. Traceability depends on that identifier being recorded every time the unit is received, transformed or shipped.',
      },
      { t: 'h2', id: 'events', text: 'Events and transformations' },
      {
        t: 'p',
        text: 'A record of “what happened” — received, processed, packed, shipped — is an event. The most important events are transformations, where input lots become output lots. Recording which inputs, in what quantities, went into which outputs is what lets a flagged input be followed to every product it reached.',
      },
      { t: 'h2', id: 'models', text: 'Chain-of-custody models' },
      {
        t: 'p',
        text: 'When materials with a claimed characteristic (for example, organic or recycled) are mixed with others, a chain-of-custody model defines how the claim carries through. ISO 22095:2020 sets out the terminology; ISO 22095-2 (mass balance) and ISO 22095-3 (book and claim) were published in 2026.',
      },
      { t: 'p', text: 'Read more in [Designing lot-level traceability across multi-tier supply chains](/insights/supply-chain-traceability/designing-lot-level-traceability).' },
    ],
    related: ['preparing-supply-chain-data', 'evidence-and-integrity'],
  },
  {
    slug: 'preparing-supply-chain-data',
    category: 'traceability',
    title: 'Preparing supply chain data',
    intro: 'A practical checklist for gathering product and supplier data before a pilot or data conversation. None of it requires TierraTrace — it is the groundwork any traceability project needs.',
    updated: U,
    keywords: ['supplier data', 'data preparation', 'product records', 'spreadsheet', 'csv', 'pilot', 'materials'],
    body: [
      { t: 'h2', id: 'products', text: 'Product records' },
      {
        t: 'list',
        items: [
          'A stable identifier for each product or model — your internal code and, where you use them, GS1 GTINs.',
          'The level you can trace at today: model, batch or individual item.',
          'Bill of materials or material composition, with the source of each figure (measured, declared by a supplier, or estimated).',
        ],
      },
      { t: 'h2', id: 'suppliers', text: 'Supplier records' },
      {
        t: 'list',
        items: [
          'Supplier names and the facilities that actually produced or processed the material.',
          'Which tier each supplier sits at, as far as you know it.',
          'Documents you already hold: certificates, declarations, test reports — with their validity dates.',
        ],
      },
      { t: 'h2', id: 'movements', text: 'Movements and transformations' },
      {
        t: 'list',
        items: [
          'How lot or batch numbers are assigned at receipt, in production and at dispatch.',
          'Where input-to-output links are recorded today, if anywhere.',
          'Quantities in and out at each stage, and the units used.',
        ],
      },
      {
        t: 'note',
        tone: 'caution',
        title: 'Before you share data',
        text: 'Share samples rather than full extracts at first, remove personal data that is not needed, and never send passwords or system credentials. See [Contacting support effectively](/help/contacting-support-effectively).',
      },
    ],
    related: ['how-product-traceability-works', 'requesting-a-pilot', 'connecting-your-systems'],
  },
  {
    slug: 'evidence-and-integrity',
    category: 'verification',
    title: 'Evidence and integrity: what a check can and cannot show',
    intro: 'Integrity checks show whether a record has changed since it was written. They do not, on their own, prove that the original information was true. This distinction matters for anyone relying on a verified record.',
    updated: U,
    keywords: ['verification', 'evidence', 'integrity', 'provenance', 'blockchain', 'ledger', 'hash'],
    body: [
      { t: 'h2', id: 'integrity', text: 'What integrity means' },
      {
        t: 'p',
        text: 'When a record or document is fingerprinted (hashed) and that fingerprint is stored somewhere tamper-evident, anyone with the record can later check that it still matches. A match shows the record has not been altered since the fingerprint was taken.',
      },
      { t: 'h2', id: 'limits', text: 'What it does not show' },
      {
        t: 'list',
        items: [
          'Whether the information was accurate when it was recorded.',
          'Whether the supporting document is genuine or applies to the product it is linked to.',
          'Whether anything happened that was never recorded.',
        ],
      },
      {
        t: 'p',
        text: 'Those questions depend on the quality of sources, evidence and audit. A well-designed record makes them easier to answer by keeping each claim linked to its evidence — it does not replace them.',
      },
      { t: 'h2', id: 'reading', text: 'Reading a verification result' },
      {
        t: 'p',
        text: 'Treat a positive result as “this record is unchanged and its references match”. Treat “cannot verify” — for example, when a verification service cannot be reached — as unknown, not as a failure or a pass.',
      },
    ],
    related: ['understanding-digital-product-passports', 'how-product-traceability-works'],
  },
  {
    slug: 'connecting-your-systems',
    category: 'integrations',
    title: 'Connecting your systems',
    intro: 'How integration with ERPs, PLM and supplier systems is approached, and what we publish about APIs today.',
    updated: U,
    keywords: ['integration', 'api', 'erp', 'plm', 'connect', 'import', 'export', 'webhooks'],
    body: [
      { t: 'h2', id: 'scope', text: 'Integration is scoped per deployment' },
      {
        t: 'p',
        text: 'Which systems are connected, and how, is agreed with each organisation during scoping. The [Connect product page](/platform/connect) describes the integration approach.',
      },
      { t: 'h2', id: 'api', text: 'API documentation' },
      {
        t: 'p',
        text: 'A public API reference is not published on this website. Technical integration details are provided as part of a scoped engagement. The [Documentation](/docs/api-status) explains what is and is not published, and the open standards — such as GS1 identifiers and EPCIS events — that are useful to prepare for.',
      },
      { t: 'p', text: 'To discuss an integration, [contact support](/support?category=implementation) and choose “Implementation assistance”.' },
    ],
    related: ['preparing-supply-chain-data', 'what-is-tierratrace'],
  },
  {
    slug: 'contacting-support-effectively',
    category: 'troubleshooting',
    title: 'Contacting support effectively',
    intro: 'What to include in a support request so we can help quickly — and what to leave out.',
    updated: U,
    keywords: ['support', 'help', 'bug report', 'reproduce', 'contact', 'secrets', 'privacy'],
    body: [
      { t: 'h2', id: 'include', text: 'What to include' },
      {
        t: 'list',
        items: [
          'Which product, module or page the issue concerns.',
          'What you were trying to do, what you expected, and what happened instead.',
          'The exact wording of any error message.',
          'When it happened, and whether it happens every time.',
          'Your browser and device, for website issues.',
        ],
      },
      { t: 'h2', id: 'reproduce', text: 'Describing a reproducible problem' },
      {
        t: 'steps',
        items: [
          'List the steps from a clear starting point, one action per step.',
          'Note the result after the last step.',
          'Say whether the same steps work in another browser or for a colleague.',
        ],
      },
      { t: 'h2', id: 'exclude', text: 'What not to send' },
      {
        t: 'note',
        tone: 'caution',
        title: 'Never include secrets',
        text: 'Do not include passwords, API keys, private keys, access tokens or one-time codes in a support request. We will never ask you for them. Leave out personal data that is not needed to resolve the issue.',
      },
      { t: 'p', text: 'Ready? [Open a support request](/support?s=support-form).' },
    ],
    related: ['website-problems', 'connecting-your-systems'],
  },
  {
    slug: 'website-problems',
    category: 'troubleshooting',
    title: 'Fixing common website problems',
    intro: 'What to try if a page on this website does not load, look right or let you submit a form.',
    updated: U,
    keywords: ['website', 'troubleshooting', 'form', 'error', 'not loading', 'browser', 'access'],
    body: [
      { t: 'h2', id: 'loading', text: 'A page does not load or looks broken' },
      {
        t: 'steps',
        items: [
          'Reload the page.',
          'Make sure your browser is up to date; the site uses current web features.',
          'Try a private window, which runs without extensions that can block scripts or fonts.',
        ],
      },
      { t: 'h2', id: 'forms', text: 'A form will not send' },
      {
        t: 'list',
        items: [
          'Fields with a problem are marked with a message underneath — fix those and submit again. Your text is kept.',
          'If you see “Online sending isn’t available right now”, use the button offered to email us instead; it opens your email app with your message filled in.',
          'If you see “Too many requests”, wait ten minutes before trying again.',
        ],
      },
      { t: 'h2', id: 'access', text: 'Signing in' },
      {
        t: 'p',
        text: 'This website has no customer accounts or sign-in. For access to a TierraTrace workspace, [contact support](/support?category=account) and choose “Account and access”.',
      },
    ],
    related: ['contacting-support-effectively', 'scanning-a-passport-qr-code'],
  },
];

export const HELP_CATEGORIES_WITH_CONTENT = HELP_CATEGORIES.filter((c) => HELP_ARTICLES.some((a) => a.category === c.id));
export const HELP_BY_SLUG = Object.fromEntries(HELP_ARTICLES.map((a) => [a.slug, a])) as Record<string, HelpArticle>;
