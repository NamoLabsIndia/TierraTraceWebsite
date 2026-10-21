import type { Development, LegalStatus, Regulation } from './types';

/**
 * Regulatory tracker. Each date was read from the Official Journal text of the act (or the amending act)
 * on `lastVerified`. `status: 'upcoming'` on a milestone is relative to that check date, not to the
 * moment a visitor reads the page — the page shows the check date so readers can judge freshness.
 */
const V = '2026-10-21';

export const STATUS_LABEL: Record<LegalStatus, string> = {
  'in-force': 'In force and applying',
  'in-force-applies-later': 'In force · main obligations apply later',
  'adopted-not-yet-in-force': 'Adopted · not yet in force',
  amended: 'In force · amended',
  'voluntary-standard': 'Voluntary standard',
};

export const REGULATIONS: Regulation[] = [
  {
    id: 'espr',
    name: 'Ecodesign for Sustainable Products Regulation',
    shortName: 'ESPR',
    identifier: 'Regulation (EU) 2024/1781',
    jurisdiction: 'European Union',
    authority: 'European Parliament and Council; implemented by the European Commission',
    status: 'in-force-applies-later',
    statusNote:
      'A framework regulation. Product-specific requirements, including whether a Digital Product Passport is required, are set product group by product group in delegated acts under Article 4.',
    adopted: '2024-06-13',
    entryIntoForce: '2024-07-18',
    milestones: [
      { date: '2024-07-18', label: 'Entry into force (20 days after publication on 28 June 2024)', status: 'past' },
      { date: '2026-07-19', label: 'Commission to have set up the digital product passport registry (Art. 13)', status: 'past' },
      { date: '2026-07-19', label: 'Ban on destroying unsold apparel, clothing accessories and footwear applies to large enterprises (Art. 25, Annex VII)', status: 'past' },
      { date: '2030-07-19', label: 'Destruction ban applies to medium-sized enterprises; micro and small enterprises are excluded (Art. 25)', status: 'upcoming' },
    ],
    scope: 'Physical goods placed on the market or put into service, including components and intermediate products; food, feed, medicinal products and certain vehicles are excluded (Art. 1(2)). Obligations attach to the product groups covered by each delegated act.',
    sourceIds: ['espr', 'espr-plan'],
    categories: ['digital-product-passports', 'compliance-readiness'],
    lastVerified: V,
  },
  {
    id: 'battery',
    name: 'Batteries Regulation',
    shortName: 'Batteries',
    identifier: 'Regulation (EU) 2023/1542',
    jurisdiction: 'European Union',
    authority: 'European Parliament and Council; implemented by the European Commission',
    status: 'in-force-applies-later',
    statusNote: 'Applies in stages. The battery passport is the first sector passport with a fixed legal start date.',
    adopted: '2023-07-12',
    milestones: [
      { date: '2024-02-18', label: 'General application date (Art. 96)', status: 'past' },
      { date: '2027-02-18', label: 'Battery passport required for LMT batteries, industrial batteries over 2 kWh and EV batteries (Art. 77)', status: 'upcoming' },
      { date: '2027-02-18', label: 'All batteries to carry a QR code giving access to the passport or required information (Art. 13(6))', status: 'upcoming' },
    ],
    scope: 'All categories of batteries placed on the EU market; the passport obligation covers LMT, industrial (>2 kWh) and electric-vehicle batteries.',
    sourceIds: ['battery'],
    categories: ['digital-product-passports', 'compliance-readiness'],
    lastVerified: V,
  },
  {
    id: 'eudr',
    name: 'EU Deforestation Regulation',
    shortName: 'EUDR',
    identifier: 'Regulation (EU) 2023/1115, as amended by Regulation (EU) 2025/2650',
    jurisdiction: 'European Union',
    authority: 'European Parliament and Council; enforced by national competent authorities',
    status: 'amended',
    statusNote:
      'In force; its core operator and trader obligations have been postponed twice. The current dates are those set by Regulation (EU) 2025/2650.',
    adopted: '2023-05-31',
    amendedBy: ['Regulation (EU) 2025/2650 (published 23 December 2025)'],
    milestones: [
      { date: '2025-12-23', label: 'Amending Regulation (EU) 2025/2650 published; in force three days later', status: 'past' },
      { date: '2026-04-30', label: 'Deadline for the Commission’s simplification review report (Art. 34(1a))', status: 'past' },
      { date: '2026-12-30', label: 'Core obligations apply (Art. 38(2), as amended)', status: 'upcoming' },
      { date: '2027-06-30', label: 'Applies to micro and small operators established by 31 December 2024 (Art. 38(3), as amended)', status: 'upcoming' },
    ],
    scope: 'Cattle, cocoa, coffee, oil palm, rubber, soya and wood, and listed derived products placed on, made available on or exported from the EU market.',
    sourceIds: ['eudr', 'eudr-2025'],
    categories: ['supply-chain-traceability', 'compliance-readiness'],
    lastVerified: V,
  },
  {
    id: 'csrd',
    name: 'Corporate Sustainability Reporting Directive',
    shortName: 'CSRD',
    identifier: 'Directive (EU) 2022/2464, as amended by Directives (EU) 2025/794 and (EU) 2026/470',
    jurisdiction: 'European Union (transposed into national law)',
    authority: 'European Parliament and Council; transposed by Member States',
    status: 'amended',
    statusNote:
      'A directive: obligations reach companies through national transposition. Omnibus I narrows scope to undertakings with more than EUR 450 million net turnover and more than 1,000 employees on average.',
    adopted: '2022-12-14',
    amendedBy: ['Directive (EU) 2025/794 (stop-the-clock)', 'Directive (EU) 2026/470 (Omnibus I)'],
    milestones: [
      { date: '2025-04-16', label: 'Stop-the-clock directive published: later reporting waves moved to financial years from 1 January 2027 and 1 January 2028', status: 'past' },
      { date: '2026-03-18', label: 'Omnibus I Directive enters into force', status: 'past' },
      { date: '2027-03-19', label: 'Member States to transpose the Omnibus I reporting amendments', status: 'upcoming' },
      { date: '2027-07-01', label: 'New deadline for the Commission to adopt limited-assurance standards', status: 'upcoming' },
    ],
    scope: 'After Omnibus I: undertakings with net turnover above EUR 450 million and more than 1,000 employees (individual level), with parallel rules for groups and issuers.',
    sourceIds: ['csrd', 'stop-clock', 'omnibus'],
    categories: ['sustainability-intelligence', 'compliance-readiness'],
    lastVerified: V,
  },
  {
    id: 'esrs',
    name: 'European Sustainability Reporting Standards — simplified',
    shortName: 'ESRS (2026)',
    identifier: 'Delegated Regulation (EU) 2026/1563 amending Delegated Regulation (EU) 2023/2772',
    jurisdiction: 'European Union',
    authority: 'European Commission, on technical advice from EFRAG',
    status: 'adopted-not-yet-in-force',
    statusNote:
      'Adopted on 3 July 2026 and published on 21 September 2026. It enters into force on 10 November 2026 and applies to financial years beginning on or after 1 January 2027.',
    adopted: '2026-07-03',
    entryIntoForce: '2026-11-10',
    milestones: [
      { date: '2026-09-21', label: 'Published in the Official Journal', status: 'past' },
      { date: '2026-11-10', label: 'Entry into force (Art. 3)', status: 'upcoming' },
      { date: '2027-01-01', label: 'Applies to financial years beginning on or after this date; for FY2026 undertakings state which version they apply', status: 'upcoming' },
    ],
    scope: 'Undertakings reporting under the CSRD. Replaces Annexes I and II to Delegated Regulation (EU) 2023/2772; double materiality is retained.',
    sourceIds: ['esrs-2026', 'esrs-1', 'efrag-esrs'],
    categories: ['sustainability-intelligence', 'compliance-readiness'],
    lastVerified: V,
  },
  {
    id: 'csddd',
    name: 'Corporate Sustainability Due Diligence Directive',
    shortName: 'CSDDD',
    identifier: 'Directive (EU) 2024/1760, as amended by Directives (EU) 2025/794 and (EU) 2026/470',
    jurisdiction: 'European Union (transposed into national law)',
    authority: 'European Parliament and Council; transposed by Member States',
    status: 'amended',
    statusNote:
      'Omnibus I raises the thresholds to more than 5,000 employees and more than EUR 1.5 billion net worldwide turnover, removes the climate transition plan obligation and moves application to 26 July 2029.',
    adopted: '2024-06-13',
    amendedBy: ['Directive (EU) 2025/794 (stop-the-clock)', 'Directive (EU) 2026/470 (Omnibus I)'],
    milestones: [
      { date: '2027-07-26', label: 'Commission general due diligence guidelines due', status: 'upcoming' },
      { date: '2028-07-26', label: 'Member States to adopt and publish transposing measures', status: 'upcoming' },
      { date: '2029-07-26', label: 'Member States apply the measures', status: 'upcoming' },
    ],
    scope: 'EU companies with more than 5,000 employees and more than EUR 1.5 billion net worldwide turnover, with equivalent rules for non-EU companies and franchising/licensing structures.',
    sourceIds: ['csddd', 'stop-clock', 'omnibus'],
    categories: ['compliance-readiness'],
    lastVerified: V,
  },
  {
    id: 'forced-labour',
    name: 'Forced Labour Regulation',
    shortName: 'Forced labour',
    identifier: 'Regulation (EU) 2024/3015',
    jurisdiction: 'European Union',
    authority: 'European Parliament and Council; enforced by national authorities and the Commission',
    status: 'in-force-applies-later',
    statusNote: 'In force since December 2024; the prohibition applies from 14 December 2027. Some institutional provisions applied from 13 December 2024.',
    adopted: '2024-11-27',
    entryIntoForce: '2024-12-13',
    milestones: [
      { date: '2024-12-13', label: 'Entry into force; listed provisions apply (Art. 39)', status: 'past' },
      { date: '2027-12-14', label: 'General application: prohibition on placing or exporting products made with forced labour', status: 'upcoming' },
    ],
    scope: 'All products, including components, regardless of sector or origin, whether domestic or imported, made available on or exported from the EU market.',
    sourceIds: ['forced-labour'],
    categories: ['supply-chain-traceability', 'compliance-readiness'],
    lastVerified: V,
  },
];

/** Dated developments, newest first. Each links to the original publication. */
export const DEVELOPMENTS: Development[] = [
  {
    id: 'esrs-oj',
    headline: 'Simplified ESRS published in the Official Journal',
    publisher: 'European Commission · Official Journal of the EU',
    publishedAt: '2026-09-21',
    eventDate: '2026-11-10',
    eventLabel: 'Enters into force',
    summary:
      'Delegated Regulation (EU) 2026/1563, adopted on 3 July 2026, revises the first set of ESRS. It enters into force on 10 November 2026 and applies to financial years beginning on or after 1 January 2027.',
    url: 'https://eur-lex.europa.eu/eli/reg_del/2026/1563/oj',
    categories: ['sustainability-intelligence', 'compliance-readiness'],
    lastVerified: '2026-10-21',
  },
  {
    id: 'esrs-adopted',
    headline: 'Commission adopts revised ESRS and a voluntary reporting standard',
    publisher: 'EFRAG',
    publishedAt: '2026-07-03',
    summary:
      'EFRAG reports that the Commission adopted the revised ESRS delegated act together with a separate delegated act for a voluntary standard, following EFRAG’s technical advice of December 2025, and transmitted both for scrutiny.',
    url: 'https://www.efrag.org/en/news-and-calendar/news/european-commission-publishes-delegated-act-on-revised-esrs-and-voluntary-sustainability-reporting',
    categories: ['sustainability-intelligence'],
    lastVerified: '2026-10-21',
  },
  {
    id: 'iso-coc',
    headline: 'ISO publishes chain-of-custody standards for mass balance and book and claim',
    publisher: 'ISO',
    publishedAt: '2026-03-20',
    summary:
      'ISO 22095-2 (mass balance) and ISO 22095-3 (book and claim) build on ISO 22095:2020 and set operational requirements for two widely used chain-of-custody models.',
    url: 'https://www.iso.org/contents/news/2026/03/new-iso-standards-bring-clarity.html',
    categories: ['supply-chain-traceability'],
    lastVerified: '2026-10-21',
  },
  {
    id: 'omnibus-oj',
    headline: 'Omnibus I Directive narrows CSRD and CSDDD scope',
    publisher: 'European Parliament and Council · Official Journal of the EU',
    publishedAt: '2026-02-26',
    eventDate: '2026-03-18',
    eventLabel: 'Entered into force',
    summary:
      'Directive (EU) 2026/470 limits CSRD reporting to undertakings above EUR 450 million turnover and 1,000 employees, raises CSDDD thresholds to 5,000 employees and EUR 1.5 billion, and moves CSDDD application to 26 July 2029.',
    url: 'https://eur-lex.europa.eu/eli/dir/2026/470/oj',
    categories: ['sustainability-intelligence', 'compliance-readiness'],
    lastVerified: '2026-10-21',
  },
  {
    id: 'eudr-amend',
    headline: 'EUDR application postponed to 30 December 2026',
    publisher: 'European Parliament and Council · Official Journal of the EU',
    publishedAt: '2025-12-23',
    summary:
      'Regulation (EU) 2025/2650 moves the core EUDR obligations to 30 December 2026, and to 30 June 2027 for micro and small operators established by 31 December 2024. It also required a Commission simplification review by 30 April 2026.',
    url: 'https://eur-lex.europa.eu/eli/reg/2025/2650/oj',
    categories: ['supply-chain-traceability', 'compliance-readiness'],
    lastVerified: '2026-10-21',
  },
  {
    id: 'espr-plan',
    headline: 'First ESPR working plan sets product priorities for 2025–2030',
    publisher: 'European Commission',
    publishedAt: '2025-04-16',
    summary:
      'The plan prioritises steel and aluminium, textiles (focused on apparel), furniture, tyres and mattresses, with horizontal repairability and recyclability measures for electrical and electronic equipment, and a mid-term review in 2028.',
    url: 'https://ec.europa.eu/commission/presscorner/detail/en/ip_25_1071',
    categories: ['digital-product-passports', 'compliance-readiness'],
    lastVerified: '2026-10-21',
  },
  {
    id: 'stop-clock',
    headline: '“Stop-the-clock” delays later CSRD waves and CSDDD',
    publisher: 'European Parliament and Council · Official Journal of the EU',
    publishedAt: '2025-04-16',
    summary:
      'Directive (EU) 2025/794 moved the second and third CSRD reporting waves to financial years starting on or after 1 January 2027 and 1 January 2028, and postponed CSDDD transposition and application.',
    url: 'https://eur-lex.europa.eu/eli/dir/2025/794/oj',
    categories: ['sustainability-intelligence', 'compliance-readiness'],
    lastVerified: '2026-10-21',
  },
];
