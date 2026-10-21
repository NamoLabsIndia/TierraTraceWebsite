import type { Article } from './types';

/**
 * Published articles. Factual statements carry `cite` ids from sources.ts and were checked against the
 * original documents on `lastVerified`. Analysis and recommendations are written as such, and the
 * TierraTrace view is kept in `perspective`, separate from the reporting. Nothing here is legal advice.
 */
const AUTHOR = 'TierraTrace Editorial Team';
const V = '2026-10-21';

export const ARTICLES: Article[] = [
  /* ---------------------------------------------------------------- Digital Product Passports */
  {
    slug: 'eu-digital-product-passport-policy-2026',
    category: 'digital-product-passports',
    status: 'published',
    title: 'Digital Product Passports: where EU policy stands in 2026',
    excerpt:
      'The ESPR is in force and defines what a passport must be, but product-specific obligations arrive only through delegated acts. Batteries get the first fixed passport date, in February 2027.',
    summary: [
      'The Ecodesign for Sustainable Products Regulation (ESPR) has been in force since 18 July 2024. It is a framework: a passport becomes mandatory for a product group only when a delegated act for that group requires one.',
      'The regulation already fixes what any passport must do — a data carrier linked to a persistent unique product identifier, open and interoperable standards, and access rights by audience.',
      'The Batteries Regulation sets the first firm date: from 18 February 2027, LMT, industrial (over 2 kWh) and electric-vehicle batteries need a battery passport.',
      'The 2025–2030 working plan names the next priorities — steel and aluminium, apparel, furniture, tyres and mattresses — but the timing of each delegated act is indicative until adopted.',
    ],
    author: AUTHOR,
    publishedAt: V,
    lastVerified: V,
    tags: ['ESPR', 'Digital Product Passport', 'Batteries Regulation', 'EU policy'],
    body: [
      { t: 'h2', text: 'What is in force today' },
      {
        t: 'p',
        text: 'Regulation (EU) 2024/1781, the ESPR, was adopted on 13 June 2024, published in the Official Journal on 28 June 2024 and entered into force twenty days later, on 18 July 2024. It replaces the Ecodesign Directive and widens ecodesign from energy-related products to almost any physical good placed on the EU market, including components and intermediate products. Food, feed, medicinal products and certain vehicles are excluded.',
        cite: ['espr'],
      },
      {
        t: 'p',
        text: 'The ESPR does not, on its own, require a passport for any product. Article 9 states that a product may only be placed on the market if a digital product passport is available “in accordance with the applicable delegated acts adopted pursuant to Article 4”. In practice, each product group gets its own delegated act, which sets the information to be carried, the data carrier and who may see what.',
        cite: ['espr'],
      },
      { t: 'h2', text: 'What every passport will have to do' },
      { t: 'p', text: 'Articles 10 and 11 set essential requirements that apply to every passport once a delegated act triggers it:', cite: ['espr'] },
      {
        t: 'list',
        items: [
          'It is connected through a data carrier to a persistent unique product identifier, and the carrier is physically present on the product, its packaging or accompanying documentation (Art. 10(1)(a)–(b)).',
          'The data carrier and identifier comply with the standards referred to in Annex III, or equivalent European or international standards, until harmonised standards are published (Art. 10(1)(c)).',
          'All data is based on open standards, developed with an interoperable format (Art. 10(1)(d)).',
          'The economic operator makes a back-up copy available through a digital product passport service provider (Art. 10(4)).',
          'Passports are fully interoperable with each other, and customers, repairers, recyclers, authorities and other actors get free and easy access according to the access rights set in the delegated act (Art. 11).',
        ],
        cite: ['espr'],
      },
      {
        t: 'p',
        text: 'By 19 July 2026 the Commission was to set up a passport registry storing, at least, the unique identifiers — and, for products released for free circulation, the commodity code (Art. 13). The registry is a lookup of identifiers, not a central store of passport content: the regulation describes the passport itself as a decentralised system set up and managed by economic operators.',
        cite: ['espr'],
      },
      { t: 'h2', text: 'Which products come first' },
      {
        t: 'p',
        text: 'On 16 April 2025 the Commission adopted the first ESPR and Energy Labelling Working Plan for 2025–2030. Its priority products are steel and aluminium, textiles (with a focus on apparel), furniture, tyres and mattresses, alongside horizontal measures on repairability — including a repairability score — and recyclability for electrical and electronic equipment. A mid-term review is planned for 2028.',
        cite: ['espr-plan'],
      },
      {
        t: 'note',
        title: 'Indicative, not binding',
        text: 'A working plan is a programme of work, not a legal obligation. Adoption years reported for individual delegated acts vary between secondary sources, so we do not cite them here. A passport obligation for a product group exists only from the application date set in its adopted delegated act.',
        cite: ['espr-plan'],
      },
      { t: 'h2', text: 'Batteries: the first fixed date' },
      {
        t: 'p',
        text: 'The Batteries Regulation, Regulation (EU) 2023/1542, sets its own passport. From 18 February 2027, each LMT battery, each industrial battery with a capacity above 2 kWh and each electric-vehicle battery placed on the market or put into service must have a “battery passport” (Art. 77). From the same date, all batteries must carry a QR code that gives access to the passport or, for other batteries, the required information (Art. 13(6)).',
        cite: ['battery'],
      },
      { t: 'h2', text: 'A related obligation already applying: unsold goods' },
      {
        t: 'p',
        text: 'Separately from the passport, Article 25 of the ESPR prohibits the destruction of unsold consumer products listed in Annex VII — apparel, clothing accessories and footwear — from 19 July 2026. The prohibition does not apply to micro and small enterprises and applies to medium-sized enterprises from 19 July 2030.',
        cite: ['espr'],
      },
      { t: 'h2', text: 'What this means for manufacturers and exporters' },
      {
        t: 'p',
        text: 'The information a passport will carry is set per product group, but the plumbing is common: a stable identifier per product, model or batch, a data carrier on the product, structured data in open formats, and controlled access. Those foundations can be built ahead of any delegated act without guessing its content.',
      },
      {
        t: 'checklist',
        title: 'Practical next steps',
        items: [
          'Map which of your product groups appear in the 2025–2030 working plan, and which fall under the Batteries Regulation.',
          'Decide the identification level you can sustain — model, batch or item — and where the identifier is assigned in production.',
          'Inventory where the likely passport data lives today (ERP, PLM, supplier declarations, test reports) and who owns each field.',
          'Choose open identification standards for products, operators and facilities rather than proprietary codes.',
          'Track the Commission’s ESPR pages for draft delegated acts on your product groups and respond to consultations.',
        ],
      },
    ],
    perspective:
      'Most of the work in a passport is not the QR code. It is knowing, for each product or batch, which records support each attribute and who can see them. TierraTrace Passport is built around that: structured product records linked to their sources, published through a data carrier. It can support the evidence and data work a delegated act will require; it does not by itself make a product compliant.',
    product: { label: 'TierraTrace Passport', to: '/platform/passport' },
  },

  /* ---------------------------------------------------------------- Supply Chain Traceability */
  {
    slug: 'designing-lot-level-traceability',
    category: 'supply-chain-traceability',
    status: 'published',
    title: 'Designing lot-level traceability across multi-tier supply chains',
    excerpt:
      'Legal minimums often require knowing one step back and one step forward. Answering a recall or a due diligence question needs more: identified lots, recorded transformations and an explicit chain-of-custody model.',
    summary: [
      'Some laws set a “one step back, one step forward” minimum — EU food law is the clearest example. Multi-tier questions need lot genealogy built on top of it.',
      'Open standards already cover the building blocks: GS1 identifiers for products, locations and logistic units, and EPCIS 2.0 for capturing what happened, where, when and why.',
      'How material characteristics move through mixing and processing depends on the chain-of-custody model. ISO 22095 defines the terminology; new 2026 parts set requirements for mass balance and book and claim.',
      'Quantities, transformations and gaps are where traceability systems most often fail under scrutiny.',
    ],
    author: AUTHOR,
    publishedAt: V,
    lastVerified: V,
    tags: ['Traceability', 'Chain of custody', 'GS1', 'EPCIS', 'Lot genealogy'],
    body: [
      { t: 'h2', text: 'The legal minimum: one step each way' },
      {
        t: 'p',
        text: 'EU food law shows the baseline many regimes start from. Article 18 of Regulation (EC) No 178/2002 requires traceability “at all stages of production, processing and distribution”, and requires food and feed businesses to identify who supplied them and to which businesses they supplied, and to make that information available to authorities on demand.',
        cite: ['gfl'],
      },
      {
        t: 'p',
        text: 'Each business holding its own links is enough to reconstruct a chain eventually. It is not enough to answer quickly which finished products contain a flagged input — that requires the internal transformations, not just the trading links.',
      },
      { t: 'h2', text: 'Where newer rules push further' },
      {
        t: 'p',
        text: 'The EU Deforestation Regulation moves the question upstream. In its text as adopted in 2023, Article 9(1) requires operators to collect information for each relevant product, accompanied by evidence — including quantity, country of production and the geolocation of all plots of land where the commodities were produced — and to keep it for five years. Its core obligations now apply from 30 December 2026, following Regulation (EU) 2025/2650.',
        cite: ['eudr', 'eudr-2025'],
      },
      {
        t: 'p',
        text: 'The Forced Labour Regulation applies from 14 December 2027 to all products, including components, regardless of sector or origin. Investigations are expected to focus on the parts of supply chains closest to where risk is likely to occur, which again puts weight on knowing which upstream sources fed which products.',
        cite: ['forced-labour'],
      },
      { t: 'h2', text: 'Building blocks that already exist' },
      {
        t: 'p',
        text: 'GS1 identifiers give each thing a stable key: GTINs for products, GLNs for locations and parties, SSCCs for logistic units, with batch and serial numbers alongside. GS1 Digital Link encodes those identifiers in a web URI, so one 2D barcode can both scan at a till and resolve to online information such as traceability data.',
        cite: ['digital-link'],
      },
      {
        t: 'p',
        text: 'GS1’s EPCIS standard captures the “what, when, where, why and how” of products as events. Version 2.0 adds sensor data, certification details, JSON/JSON-LD syntax, a REST API for capturing and querying events, and GS1 Digital Link URIs within event data.',
        cite: ['epcis'],
      },
      { t: 'h2', text: 'Choosing a chain-of-custody model' },
      {
        t: 'p',
        text: 'Whether a claim such as “organic” or “recycled” survives processing depends on the chain-of-custody model in use. ISO 22095:2020 provides harmonised terminology, general requirements for different models and guidance on when each might be appropriate. ISO is explicit that the standard is not intended to be used on its own to make or verify claims.',
        cite: ['iso-22095'],
      },
      {
        t: 'p',
        text: 'In March 2026 ISO published two further parts. ISO 22095-2 covers mass balance, where material with and without a characteristic can be mixed and what matters is accurate accounting of quantities in and out. ISO 22095-3 covers book and claim, where the characteristic is transferred through administrative instruments rather than physical flows.',
        cite: ['iso-22095-news'],
      },
      { t: 'h2', text: 'Where traceability breaks under scrutiny' },
      {
        t: 'list',
        items: [
          'Transformations are not recorded: an input lot is consumed but the output lots it fed are not linked, so the genealogy stops at the factory door.',
          'Splits and merges lose quantities: sublots and merged lots exist, but how much of each input went where does not.',
          'Gaps are hidden: a stage with no data looks the same as a stage with good data.',
          'Identifiers change hands: each party re-keys a lot under its own code without keeping the mapping.',
        ],
      },
      {
        t: 'checklist',
        title: 'Practical next steps',
        items: [
          'Decide the traceable unit at each stage (batch, lot, logistic unit, item) and where it is created.',
          'Record transformations as events with input and output lots and quantities, not only shipments.',
          'State the chain-of-custody model behind each claim, and check it against ISO 22095 terminology.',
          'Adopt GS1 identifiers and EPCIS events where partners can support them, and keep mappings where they cannot.',
          'Show missing records as gaps rather than omitting them.',
        ],
      },
    ],
    perspective:
      'TierraTrace Trace is designed around the failure points above: lots, transformations and quantities recorded as linked events, with gaps shown rather than hidden, so a flagged input can be followed to the batches and shipments it reached. How complete that picture is depends on the records partners provide.',
    product: { label: 'TierraTrace Trace', to: '/platform/trace' },
  },

  /* ---------------------------------------------------------------- Sustainability Intelligence */
  {
    slug: 'evidence-trails-for-sustainability-data',
    category: 'sustainability-intelligence',
    status: 'published',
    title: 'Building reliable evidence trails for sustainability data',
    excerpt:
      'EU reporting scope has narrowed and the ESRS have been simplified, but assurance has not gone away. Reported figures still need to trace back to records someone can check.',
    summary: [
      'Omnibus I (Directive (EU) 2026/470) limits CSRD reporting to undertakings with more than EUR 450 million net turnover and more than 1,000 employees.',
      'The simplified ESRS (Delegated Regulation (EU) 2026/1563) were published on 21 September 2026, enter into force on 10 November 2026 and apply to financial years from 1 January 2027. Double materiality is retained.',
      'Limited assurance remains; the deadline for the Commission to adopt EU limited-assurance standards moved to 1 July 2027.',
      'Fewer datapoints raise the value of each one: every reported figure should resolve to a source record, a method and an owner.',
    ],
    author: AUTHOR,
    publishedAt: V,
    lastVerified: V,
    tags: ['CSRD', 'ESRS', 'Assurance', 'Data governance', 'ISSB'],
    body: [
      { t: 'h2', text: 'What changed in 2025 and 2026' },
      {
        t: 'p',
        text: 'Three legal acts reshaped EU sustainability reporting. Directive (EU) 2025/794, published on 16 April 2025, moved the second and third CSRD reporting waves to financial years starting on or after 1 January 2027 and 1 January 2028.',
        cite: ['stop-clock'],
      },
      {
        t: 'p',
        text: 'Directive (EU) 2026/470 — Omnibus I — was adopted on 24 February 2026, published on 26 February 2026 and entered into force twenty days later. It limits individual-level reporting to undertakings with net turnover above EUR 450 million and more than 1,000 employees on average. Member States must transpose the reporting amendments by 19 March 2027.',
        cite: ['omnibus'],
      },
      {
        t: 'p',
        text: 'Delegated Regulation (EU) 2026/1563, adopted on 3 July 2026 and published on 21 September 2026, revises the first set of ESRS. It enters into force on 10 November 2026 and applies to financial years beginning on or after 1 January 2027; for financial year 2026, undertakings must state which version of the standards they apply. Double materiality remains part of the standards.',
        cite: ['esrs-2026', 'efrag-esrs'],
      },
      {
        t: 'note',
        title: 'Status as of our last check',
        text: 'On 21 October 2026 the simplified ESRS had been adopted and published but were not yet in force. Until 10 November 2026, the first set of ESRS (Delegated Regulation (EU) 2023/2772) is the standard in force.',
        cite: ['esrs-2026', 'esrs-1'],
      },
      { t: 'h2', text: 'Assurance has been delayed, not removed' },
      {
        t: 'p',
        text: 'Statutory auditors carry out limited assurance of sustainability reporting under the Audit Directive. Omnibus I postponed the deadline for the Commission to adopt EU limited-assurance standards from 1 October 2026 to 1 July 2027, to allow time to develop them.',
        cite: ['omnibus'],
      },
      {
        t: 'p',
        text: 'Outside the EU, the ISSB issued IFRS S1 and IFRS S2 in June 2023. Jurisdictions decide whether and how to adopt them, so the same company may face more than one framework — another reason to keep figures traceable to a single underlying record.',
        cite: ['issb'],
      },
      { t: 'h2', text: 'What an evidence trail needs' },
      {
        t: 'p',
        text: 'An assurance provider testing a reported figure needs to move from the number back to its basis and forward again. In our experience that requires five things to be recorded together:',
      },
      {
        t: 'list',
        items: [
          'The source record — meter reading, invoice, supplier declaration or test report — rather than a re-typed value.',
          'The method — emission factor, allocation rule or estimate approach — and its version.',
          'The transformation — how source records were aggregated, converted or adjusted, and by whom.',
          'The status — measured, calculated, estimated or supplier-reported — visible at the datapoint.',
          'The history — what changed after first entry, when and why.',
        ],
      },
      {
        t: 'checklist',
        title: 'Practical next steps',
        items: [
          'Confirm whether you remain in scope after Omnibus I, and when your first in-scope financial year starts under national transposition.',
          'Decide which ESRS version you will apply for FY2026, and plan for the revised standards from FY2027.',
          'For each material datapoint, record its source, method, owner and estimate status.',
          'Keep supplier-provided figures linked to the supplier’s document, not only the value.',
          'Run a dry-run evidence walk-through with your assurance provider before the first assured report.',
        ],
      },
    ],
    perspective:
      'TierraTrace Studio is built for the reporting workflow: assembling disclosures against reporting frameworks and keeping each figure linked to the records behind it. What it can show is only as good as the records connected to it, and it does not replace the judgement of preparers or assurance providers.',
    product: { label: 'TierraTrace Studio', to: '/platform/studio' },
  },

  /* ---------------------------------------------------------------- Regulatory Intelligence */
  {
    slug: 'compliance-readiness-in-force-and-upcoming',
    category: 'compliance-readiness',
    status: 'published',
    title: 'Compliance readiness: what is in force, what applies later, and what has moved',
    excerpt:
      'Between April 2025 and September 2026, four EU acts changed the dates or scope of product and supply-chain rules. A dated view of where each stands, and how to prepare without over-reading proposals.',
    summary: [
      'Several EU acts are in force but apply later — the Batteries Regulation passport (February 2027), EUDR core obligations (December 2026) and the Forced Labour Regulation (December 2027).',
      'Dates have moved: the EUDR twice, CSRD waves through “stop-the-clock”, and CSDDD application to 26 July 2029 through Omnibus I.',
      'Scope has narrowed for CSRD and CSDDD; it has not narrowed for the EUDR or the Forced Labour Regulation, which turn on products rather than company size thresholds.',
      'Readiness work that holds across these changes is product and supply-chain evidence: identifiers, origin, transformations and supporting documents.',
    ],
    author: AUTHOR,
    publishedAt: V,
    lastVerified: V,
    tags: ['EUDR', 'CSDDD', 'CSRD', 'Forced Labour Regulation', 'Batteries Regulation'],
    body: [
      { t: 'h2', text: 'Read the status before the summary' },
      {
        t: 'p',
        text: 'Commentary often blurs four different states: an act that is in force and applying; one that is in force but whose obligations apply later; one that has been adopted but has not yet entered into force; and proposals or guidance that are not law. The tracker on this page labels each act separately and links to its Official Journal text.',
      },
      { t: 'h2', text: 'Product rules with fixed dates' },
      {
        t: 'p',
        text: 'EUDR. Regulation (EU) 2025/2650, published on 23 December 2025, moved the core obligations of the EU Deforestation Regulation to 30 December 2026, and to 30 June 2027 for micro and small operators established by 31 December 2024. It also required the Commission to present a simplification review by 30 April 2026.',
        cite: ['eudr-2025'],
      },
      {
        t: 'p',
        text: 'Batteries. The battery passport applies from 18 February 2027 to LMT batteries, industrial batteries above 2 kWh and electric-vehicle batteries, and all batteries must carry a QR code from the same date.',
        cite: ['battery'],
      },
      {
        t: 'p',
        text: 'Forced labour. Regulation (EU) 2024/3015 entered into force in December 2024 and applies from 14 December 2027, prohibiting products made with forced labour from being placed or made available on the EU market or exported.',
        cite: ['forced-labour'],
      },
      {
        t: 'p',
        text: 'Ecodesign. The ESPR’s ban on destroying unsold apparel, clothing accessories and footwear has applied to large enterprises since 19 July 2026. Passport requirements depend on product-specific delegated acts.',
        cite: ['espr'],
      },
      { t: 'h2', text: 'Corporate rules that have moved' },
      {
        t: 'p',
        text: 'CSDDD. Omnibus I raised the thresholds to more than 5,000 employees and more than EUR 1.5 billion net worldwide turnover, removed the climate transition plan obligation, and requires Member States to transpose by 26 July 2028 and apply the measures from 26 July 2029. The Commission is to adopt general due diligence guidelines by 26 July 2027.',
        cite: ['omnibus', 'csddd'],
      },
      {
        t: 'p',
        text: 'CSRD and ESRS. Reporting is limited to undertakings above EUR 450 million turnover and 1,000 employees, and simplified ESRS apply to financial years from 1 January 2027.',
        cite: ['omnibus', 'esrs-2026'],
      },
      {
        t: 'note',
        title: 'Scope is legal, not sectoral',
        text: 'None of these acts applies to “every company in an industry”. Each has its own scope: product categories (EUDR, Batteries), product groups under delegated acts (ESPR), all products regardless of origin (Forced Labour), or company size thresholds (CSRD, CSDDD). Check scope against the legal text for your products and entities.',
      },
      {
        t: 'checklist',
        title: 'A readiness assessment that survives date changes',
        items: [
          'List your products by EU regime: EUDR commodities, battery categories, ESPR priority groups, and all products for forced labour risk.',
          'For each, record whether the obligation is in force, applies later, or depends on a future delegated act — with the date and source.',
          'Assess evidence you can already produce: product identifiers, origin and geolocation, supplier records, transformations and documents.',
          'Close evidence gaps that matter under several regimes first, such as supplier origin data and lot-level transformation records.',
          'Re-check dates against the Official Journal before each planning cycle; record the date you checked.',
        ],
      },
    ],
    perspective:
      'Dates move; the underlying evidence does not. TierraTrace Trace and Passport may support evidence collection and traceability workflows relevant to these requirements — origin, lots, transformations and documents in one record. Whether a company complies depends on its own obligations and on the legal assessment of its advisers.',
    product: { label: 'TierraTrace Trace', to: '/platform/trace' },
  },
];
