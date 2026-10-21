import type { DocPage } from './types';

/**
 * Documentation portal. Rules followed here:
 * - No TierraTrace API endpoint, schema or error code is documented: none is published or present in this
 *   repository. `api-status` says so explicitly.
 * - Code samples use open standards (GS1 identifiers, GS1 Digital Link, EPCIS 2.0) and are labelled as
 *   illustrative; identifiers in them are examples, not customer data.
 * - Module pages summarise the product pages and state that availability is confirmed per engagement.
 * - Security content states only what is verified for this website.
 */
const U = '2026-10-21';

export const DOC_SECTIONS = [
  { id: 'introduction', name: 'Introduction' },
  { id: 'concepts', name: 'Product concepts' },
  { id: 'guides', name: 'Product guides' },
  { id: 'integration', name: 'Integration' },
  { id: 'security', name: 'Security and data' },
  { id: 'troubleshooting', name: 'Troubleshooting' },
] as const;

export const DOCS: DocPage[] = [
  /* ---------------- Introduction ---------------- */
  {
    slug: 'overview',
    section: 'introduction',
    title: 'Overview',
    description: 'What this documentation covers, how it differs from the Help Center, and how content is verified.',
    updated: U,
    body: [
      { t: 'p', text: 'This is the reference documentation for TierraTrace by Namo Labs: platform concepts, terminology, module overviews and integration groundwork. For practical answers to common questions, use the [Help Center](/help).' },
      { t: 'h2', id: 'conventions', text: 'Conventions' },
      {
        t: 'list',
        items: [
          '**Illustrative** marks example values. Identifiers, lot numbers and figures in examples are not customer data.',
          'Standards are linked to their publishers. Where a standard defines a format, the standard is authoritative, not our summary.',
          'Module descriptions summarise the product pages on this website. Availability for your organisation is confirmed during scoping.',
        ],
      },
      { t: 'h2', id: 'not-covered', text: 'What is not published here' },
      {
        t: 'p',
        text: 'A public API reference, product screen-by-screen guides and platform security documentation are not published on this website. See [API documentation status](/docs/api-status) and [Security and data](/docs/security-and-data).',
      },
    ],
  },
  {
    slug: 'concepts-and-terminology',
    section: 'introduction',
    title: 'Concepts and terminology',
    description: 'The terms used across TierraTrace documentation, defined once.',
    updated: U,
    body: [
      { t: 'p', text: 'These definitions are used consistently across the documentation and Help Center.' },
      {
        t: 'table',
        head: ['Term', 'Meaning'],
        rows: [
          ['Digital Product Passport (DPP)', 'A structured digital record about a product, reached through a data carrier on the product, packaging or accompanying documents.'],
          ['Data carrier', 'The physical means of reaching the record, such as a QR code or NFC tag.'],
          ['Unique product identifier', 'A persistent identifier for a product model, batch or item.'],
          ['Lot / batch', 'A quantity of material or product produced or handled under the same conditions and identified together.'],
          ['Event', 'A record that something happened to identified objects — what, when, where and why.'],
          ['Transformation', 'An event in which input lots are consumed to produce output lots.'],
          ['Genealogy', 'The linked history of lots through transformations, upstream and downstream.'],
          ['Chain of custody', 'The process by which inputs, outputs and associated information are transferred, monitored and controlled through each step in a supply chain (see ISO 22095).'],
          ['Evidence', 'A document or record supporting a claim, such as a certificate, declaration or test report.'],
          ['Integrity check', 'A check that a record or document is unchanged since a fingerprint (hash) of it was recorded.'],
        ],
      },
    ],
  },
  {
    slug: 'architecture-overview',
    section: 'introduction',
    title: 'Architecture overview',
    description: 'A conceptual view of how product records, events, evidence and passports relate.',
    updated: U,
    body: [
      {
        t: 'note',
        tone: 'info',
        title: 'Conceptual',
        text: 'This page describes the information model at a conceptual level. It is not a description of deployed infrastructure; deployment architecture is documented for customers as part of a scoped engagement.',
      },
      { t: 'h2', id: 'layers', text: 'Four kinds of information' },
      {
        t: 'list',
        items: [
          '**Identity** — products, materials, organisations and facilities, each with a stable identifier.',
          '**Events** — receipts, transformations, shipments and other lifecycle events that reference those identifiers.',
          '**Evidence** — documents and data linked to the specific claims and events they support.',
          '**Presentation** — passports and reports that select from the above for a given audience.',
        ],
      },
      { t: 'h2', id: 'flow', text: 'How a passport is assembled' },
      {
        t: 'steps',
        items: [
          'Source records are connected from existing systems and supplier submissions.',
          'Records are structured against identifiers and linked to events and evidence.',
          'Integrity references are recorded so later changes can be detected.',
          'A passport view publishes the parts of the record appropriate to each audience.',
        ],
      },
      { t: 'p', text: 'The product pages describe how specific modules implement these steps; see [Product modules](/docs/product-modules).' },
    ],
  },
  {
    slug: 'getting-started',
    section: 'introduction',
    title: 'Getting started',
    description: 'How to begin: scoping, data preparation and a pilot.',
    updated: U,
    body: [
      { t: 'steps', items: ['Read the [Overview](/docs/overview) and [Concepts and terminology](/docs/concepts-and-terminology).', 'Gather a sample of product and supplier data — see [Data preparation](/docs/data-preparation).', '[Request a briefing or pilot](/contact?s=pilot) describing your products and requirements.', 'During scoping, agree which systems to connect and which modules apply.'] },
      { t: 'note', tone: 'info', title: 'No self-service sign-up', text: 'This website does not provide accounts or self-service sign-up. Workspace access is arranged with our team.' },
    ],
  },

  /* ---------------- Product concepts ---------------- */
  {
    slug: 'digital-product-passports',
    section: 'concepts',
    title: 'Digital Product Passports',
    description: 'Passport requirements set by the EU Ecodesign for Sustainable Products Regulation, and the battery passport.',
    updated: U,
    body: [
      { t: 'h2', id: 'espr', text: 'Requirements under the ESPR' },
      {
        t: 'p',
        text: 'Regulation (EU) 2024/1781 (ESPR) entered into force on 18 July 2024. A passport is required for a product group only when a delegated act adopted under its Article 4 says so (Article 9). Articles 10 and 11 set essential requirements that every passport must meet:',
      },
      {
        t: 'list',
        items: [
          'Connected through a data carrier to a persistent unique product identifier (Art. 10(1)(a)).',
          'Data carrier physically present on the product, packaging or accompanying documentation (Art. 10(1)(b)).',
          'Data based on open standards with an interoperable format (Art. 10(1)(d)).',
          'A back-up copy available through a passport service provider (Art. 10(4)).',
          'Interoperable with other passports, with access according to the access rights in the delegated act (Art. 11).',
        ],
      },
      { t: 'h2', id: 'battery', text: 'Battery passport' },
      { t: 'p', text: 'Under Regulation (EU) 2023/1542, from 18 February 2027, LMT batteries, industrial batteries over 2 kWh and electric-vehicle batteries placed on the market must have a battery passport (Art. 77).' },
      { t: 'p', text: 'Sources and dates: [Digital Product Passports: where EU policy stands in 2026](/insights/digital-product-passports/eu-digital-product-passport-policy-2026).' },
    ],
  },
  {
    slug: 'product-identity',
    section: 'concepts',
    title: 'Product identity',
    description: 'Identifying products, batches, locations and logistic units with open standards, and linking them to the web.',
    updated: U,
    body: [
      { t: 'h2', id: 'gs1', text: 'GS1 identifiers' },
      {
        t: 'table',
        head: ['Identifier', 'Identifies'],
        rows: [
          ['GTIN', 'A trade item (product model or variant).'],
          ['Batch/lot number (with GTIN)', 'A batch or lot of that trade item.'],
          ['Serial number (with GTIN)', 'An individual item.'],
          ['GLN', 'A location or party.'],
          ['SSCC', 'A logistic unit, such as a pallet.'],
        ],
      },
      { t: 'h2', id: 'digital-link', text: 'GS1 Digital Link' },
      {
        t: 'p',
        text: '[GS1 Digital Link](https://www.gs1.org/standards/gs1-digital-link) expresses GS1 identifiers as a web URI, so one QR code can be read by retail systems and also resolve to online information. The path uses application identifiers: `01` for GTIN, `10` for batch/lot, `21` for serial.',
      },
      {
        t: 'code',
        lang: 'text',
        code: 'https://id.example.com/01/09506000134352/10/LOT-ARA-04-26805',
        caption: 'Illustrative: a GS1 Digital Link URI for a batch. `id.example.com` stands in for the brand owner’s resolver domain; the GTIN is an example value.',
      },
    ],
  },
  {
    slug: 'records-and-events',
    section: 'concepts',
    title: 'Records and events',
    description: 'Capturing what happened to identified objects, using GS1 EPCIS 2.0 as the reference model.',
    updated: U,
    body: [
      {
        t: 'p',
        text: '[GS1 EPCIS](https://www.gs1.org/standards/epcis) is an open standard for traceability events: the “what, when, where, why and how” of products. Version 2.0 adds JSON/JSON-LD syntax, a REST interface, sensor data and certification details.',
      },
      { t: 'h2', id: 'transformation', text: 'Example: a transformation event' },
      {
        t: 'p',
        text: 'A transformation records inputs consumed and outputs produced, with quantities — the link that genealogy depends on.',
      },
      {
        t: 'code',
        lang: 'json',
        code: `{
  "@context": ["https://ref.gs1.org/standards/epcis/2.0.0/epcis-context.jsonld"],
  "type": "EPCISDocument",
  "schemaVersion": "2.0",
  "creationDate": "2026-03-14T09:30:00Z",
  "epcisBody": {
    "eventList": [
      {
        "type": "TransformationEvent",
        "eventTime": "2026-03-14T09:12:00+05:30",
        "eventTimeZoneOffset": "+05:30",
        "inputQuantityList": [
          { "epcClass": "https://id.gs1.org/01/09506000134352/10/SUP-CT-7781", "quantity": 7800, "uom": "KGM" }
        ],
        "outputQuantityList": [
          { "epcClass": "https://id.gs1.org/01/09506000134369/10/LOT-YRN-2291", "quantity": 7800, "uom": "KGM" }
        ],
        "readPoint": { "id": "https://id.gs1.org/414/9506000134376" }
      }
    ]
  }
}`,
        caption: 'Illustrative, following the EPCIS 2.0 JSON-LD structure. Identifiers and quantities are examples. This is not a TierraTrace API payload; validate real documents against the standard.',
      },
    ],
  },
  {
    slug: 'traceability-and-provenance',
    section: 'concepts',
    title: 'Traceability and provenance',
    description: 'Genealogy, splits and merges, chain-of-custody models and legal minimums.',
    updated: U,
    body: [
      { t: 'h2', id: 'genealogy', text: 'Genealogy' },
      { t: 'p', text: 'Following transformations upstream answers “where did this come from”; downstream answers “where did this go”. Splits (one lot into several) and merges (several into one) must keep quantity attribution, or totals stop reconciling.' },
      { t: 'h2', id: 'coc', text: 'Chain-of-custody models' },
      { t: 'p', text: 'ISO 22095:2020 provides harmonised terminology and general requirements for chain-of-custody models. ISO 22095-2 (mass balance) and ISO 22095-3 (book and claim) were published in 2026. ISO states the framework is not, on its own, sufficient to make or verify claims.' },
      { t: 'h2', id: 'minimum', text: 'One step each way' },
      { t: 'p', text: 'Some legal regimes set a minimum of identifying immediate suppliers and customers — Article 18 of Regulation (EC) No 178/2002 does so for food and feed. Multi-tier genealogy builds on that minimum.' },
    ],
  },
  {
    slug: 'evidence-and-verification',
    section: 'concepts',
    title: 'Evidence and verification',
    description: 'Linking claims to evidence, and the difference between integrity and truth.',
    updated: U,
    body: [
      { t: 'h2', id: 'linking', text: 'Linking claims to evidence' },
      { t: 'p', text: 'Each claim (for example, “100% organic cotton”) should reference the evidence supporting it (for example, a content certificate), and the evidence should reference what it covers and when it is valid.' },
      { t: 'h2', id: 'integrity', text: 'Integrity is not truth' },
      { t: 'p', text: 'Recording a hash of a document or record allows later detection of changes. It does not establish that the original content was accurate, that a document is genuine, or that unrecorded events did not occur.' },
      { t: 'code', lang: 'shell', code: 'shasum -a 256 certificate.pdf', caption: 'Compute a SHA-256 fingerprint of a local file (macOS/Linux). The same file always gives the same value; any change gives a different one.' },
      { t: 'h2', id: 'results', text: 'Verification results' },
      { t: 'table', head: ['Result', 'Meaning'], rows: [['References match', 'The record is unchanged since its integrity reference was recorded.'], ['Mismatch', 'The record differs from what was recorded; investigate before relying on it.'], ['Cannot verify', 'The check could not be completed (for example, a service was unreachable). Treat as unknown.']] },
    ],
  },
  {
    slug: 'sustainability-data',
    section: 'concepts',
    title: 'Sustainability data',
    description: 'Data quality and evidence trails for reported sustainability figures.',
    updated: U,
    body: [
      { t: 'h2', id: 'datapoint', text: 'What a reported figure should carry' },
      { t: 'list', items: ['Source record (meter reading, invoice, supplier declaration).', 'Method and version (emission factor, allocation rule).', 'Status: measured, calculated, estimated or supplier-reported.', 'Owner and change history.'] },
      { t: 'h2', id: 'eu', text: 'EU reporting context' },
      { t: 'p', text: 'Directive (EU) 2026/470 limits CSRD reporting to undertakings with more than EUR 450 million net turnover and more than 1,000 employees. Simplified ESRS (Delegated Regulation (EU) 2026/1563) enter into force on 10 November 2026 and apply to financial years from 1 January 2027. See [Building reliable evidence trails](/insights/sustainability-intelligence/evidence-trails-for-sustainability-data).' },
    ],
  },

  /* ---------------- Product guides ---------------- */
  {
    slug: 'product-modules',
    section: 'guides',
    title: 'Product modules',
    description: 'What each TierraTrace module is for, as described on its product page.',
    updated: U,
    body: [
      { t: 'note', tone: 'info', title: 'Status of these descriptions', text: 'Each section summarises the module’s product page on this website. Detailed product guides are provided to customers; which capabilities apply to your deployment is confirmed during scoping.' },
      { t: 'h2', id: 'passport', text: 'TierraTrace Passport' },
      { t: 'p', text: 'Digital Product Passports: product information, materials, origin, lifecycle records and evidence published behind a scannable identifier. [Product page](/platform/passport).' },
      { t: 'h2', id: 'trace', text: 'TierraTrace Trace' },
      { t: 'p', text: 'End-to-end traceability: lots, transformations, quantities and shipments linked into a genealogy, with missing records shown as gaps. [Product page](/platform/trace).' },
      { t: 'h2', id: 'verify', text: 'TierraTrace Verify' },
      { t: 'p', text: 'Supplier and product verification: checking a scanned record against its integrity references, with “cannot verify” shown when a check cannot complete. [Product page](/platform/verify).' },
      { t: 'h2', id: 'carbon', text: 'TierraTrace Carbon' },
      { t: 'p', text: 'Carbon footprint calculations linked to the activity records they are computed from. [Product page](/platform/carbon).' },
      { t: 'h2', id: 'studio', text: 'TierraTrace Studio' },
      { t: 'p', text: 'Configuration of passports and schemas, and a workspace for sustainability reporting against frameworks. [Product page](/platform/studio).' },
      { t: 'h2', id: 'connect', text: 'TierraTrace Connect' },
      { t: 'p', text: 'Integrations with existing systems such as ERPs. See also [API documentation status](/docs/api-status). [Product page](/platform/connect).' },
      { t: 'h2', id: 'insights', text: 'TierraTrace Insights' },
      { t: 'p', text: 'Dashboards and reports on traceability data, with metrics defined and traceable to records. [Product page](/platform/insights). Not to be confused with the [Insights](/insights) research section of this website.' },
    ],
  },

  /* ---------------- Integration ---------------- */
  {
    slug: 'data-preparation',
    section: 'integration',
    title: 'Data preparation',
    description: 'Preparing product, supplier and movement data for import or integration.',
    updated: U,
    body: [
      { t: 'p', text: 'Whatever the eventual integration method, clean, consistently identified source data shortens every project. The checklist in [Preparing supply chain data](/help/preparing-supply-chain-data) applies; this page adds formatting guidance.' },
      { t: 'h2', id: 'tabular', text: 'Tabular data' },
      { t: 'list', items: ['One row per record, one header row, no merged cells.', 'UTF-8 encoding.', 'ISO 8601 dates (`2026-03-14`) and explicit time zones for timestamps.', 'Quantities and units in separate columns; one unit per column.', 'Identifiers as text, so leading zeros are kept.'] },
      {
        t: 'code',
        lang: 'csv',
        code: `lot_id,product_code,quantity,unit,produced_on,facility,input_lots
LOT-YRN-2291,YARN-30S,7800,kg,2026-03-14,Facility A,SUP-CT-7781
LOT-YRN-2304,YARN-30S,4200,kg,2026-03-15,Facility A,SUP-CT-7781`,
        caption: 'Illustrative layout for production lots and their inputs. Column names are examples; the import format for your deployment is agreed during scoping.',
      },
      { t: 'h2', id: 'documents', text: 'Documents' },
      { t: 'list', items: ['Keep the original file (PDF, image) rather than a re-typed copy.', 'Record what each document covers and its validity dates.', 'Use stable file names that include the issuer and document number.'] },
    ],
  },
  {
    slug: 'api-status',
    section: 'integration',
    title: 'API documentation status',
    description: 'What is and is not published about TierraTrace APIs.',
    updated: U,
    body: [
      { t: 'note', tone: 'caution', title: 'No public API reference', text: 'A public API reference — endpoints, authentication, request and response schemas, webhooks, rate limits and error codes — is not published on this website. We do not document endpoints here that are not published.' },
      { t: 'h2', id: 'how', text: 'How integration details are provided' },
      { t: 'p', text: 'Technical integration documentation is provided as part of a scoped engagement. To start that conversation, [contact support](/support?category=implementation) and choose “Implementation assistance”.' },
      { t: 'h2', id: 'prepare', text: 'What you can prepare now' },
      { t: 'list', items: ['GS1 identifiers for products, locations and logistic units — see [Product identity](/docs/product-identity).', 'Event data structured along EPCIS lines — see [Records and events](/docs/records-and-events).', 'Clean tabular extracts — see [Data preparation](/docs/data-preparation).'] },
    ],
  },

  /* ---------------- Security and data ---------------- */
  {
    slug: 'security-and-data',
    section: 'security',
    title: 'Security and data',
    description: 'What we can state about this website, and how to request platform security information.',
    updated: U,
    body: [
      { t: 'h2', id: 'website', text: 'This website' },
      {
        t: 'table',
        head: ['Topic', 'Current position (checked 21 Oct 2026)'],
        rows: [
          ['Hosting', 'Served by Vercel over HTTPS, with HTTP Strict Transport Security.'],
          ['Accounts', 'None. The website has no sign-in or customer accounts.'],
          ['Cookies and storage', 'The website’s own code sets no cookies and uses no browser storage.'],
          ['Third-party requests', 'Fonts load from Google Fonts, which receives the visitor’s IP address and browser details to serve them.'],
          ['Forms', 'Contact and support forms send to a server-side function that validates input and emails the request to our team. See the [Privacy Policy](/privacy).'],
        ],
      },
      { t: 'h2', id: 'platform', text: 'The TierraTrace platform' },
      { t: 'p', text: 'Security documentation for the TierraTrace platform — authentication, access control, encryption, data residency, retention and certifications — is not published on this website, and we do not make claims about those controls here. Request it through [Support](/support?category=technical) as part of a security review.' },
      { t: 'h2', id: 'integrity', text: 'Integrity versus truth' },
      { t: 'p', text: 'Integrity mechanisms detect changes to records; they do not prove that the information recorded was accurate. See [Evidence and verification](/docs/evidence-and-verification).' },
    ],
  },

  /* ---------------- Troubleshooting ---------------- */
  {
    slug: 'troubleshooting',
    section: 'troubleshooting',
    title: 'Troubleshooting',
    description: 'Form errors on this website, QR scanning and data-file problems.',
    updated: U,
    body: [
      { t: 'h2', id: 'form-errors', text: 'Form errors on this website' },
      {
        t: 'table',
        head: ['Message', 'What it means and what to do'],
        rows: [
          ['A message under a field', 'That field failed validation. Correct it and submit again; your other entries are kept.'],
          ['“Online sending isn’t available right now”', 'The submission service is not reachable or not configured. Use the email option offered; it opens your email app with your text.'],
          ['“Too many requests”', 'Several requests were sent from your connection in a short time. Wait ten minutes and try again.'],
          ['“We couldn’t send your request”', 'The request was not delivered. Try again, or use the email option.'],
        ],
      },
      { t: 'h2', id: 'qr', text: 'QR codes that do not scan' },
      { t: 'list', items: ['Make sure the whole code, including its quiet margin, is in view.', 'Reduce glare and increase screen brightness.', 'Printed codes need enough contrast and size; damaged or very small codes may not scan.'] },
      { t: 'h2', id: 'data-files', text: 'Data files that do not import cleanly' },
      { t: 'list', items: ['Check the file is UTF-8 — accented supplier names are a common failure point.', 'Check identifiers have not lost leading zeros (spreadsheets often convert them to numbers).', 'Check dates are unambiguous; prefer ISO 8601.', 'Check units are consistent within each column.'] },
      { t: 'p', text: 'Still stuck? [Contact support](/support?s=support-form) — see [Contacting support effectively](/help/contacting-support-effectively) for what to include.' },
    ],
  },
];

export const DOC_BY_SLUG = Object.fromEntries(DOCS.map((d) => [d.slug, d])) as Record<string, DocPage>;
