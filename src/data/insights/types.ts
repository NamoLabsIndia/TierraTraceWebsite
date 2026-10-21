/**
 * Content model for TierraTrace Insights.
 *
 * Editorial workflow (there is no CMS or backend in this project): content lives in these typed modules
 * and changes go through code review. Only records with `status: 'published'` are exported to pages, so
 * a draft never renders. Dates are ISO strings (YYYY-MM-DD). `publishedAt` is when the source or article
 * was published; `lastVerified` is when an editor last checked it against the original — the two are
 * kept separate and both are shown.
 */

export type CategoryId = 'digital-product-passports' | 'supply-chain-traceability' | 'sustainability-intelligence' | 'compliance-readiness';

export type SourceType = 'legislation' | 'delegated-act' | 'official-publication' | 'standard' | 'standards-body' | 'reporting-body';

export type Source = {
  id: string;
  title: string;
  publisher: string;
  url: string;
  type: SourceType;
  /** official publication date, where the document states one */
  publishedAt?: string;
  lastVerified: string;
  notes?: string;
};

/** Legal status, kept deliberately distinct. */
export type LegalStatus =
  | 'in-force'
  | 'in-force-applies-later'
  | 'adopted-not-yet-in-force'
  | 'amended'
  | 'voluntary-standard';

export type Milestone = { date: string; label: string; status: 'past' | 'upcoming' };

export type Regulation = {
  id: string;
  name: string;
  shortName: string;
  identifier: string;
  jurisdiction: string;
  authority: string;
  status: LegalStatus;
  statusNote: string;
  adopted: string;
  entryIntoForce?: string;
  milestones: Milestone[];
  amendedBy?: string[];
  scope: string;
  sourceIds: string[];
  categories: CategoryId[];
  lastVerified: string;
};

export type Development = {
  id: string;
  headline: string;
  publisher: string;
  /** date the document or announcement was published */
  publishedAt: string;
  /** date of the underlying act or event, when different */
  eventDate?: string;
  eventLabel?: string;
  summary: string;
  url: string;
  categories: CategoryId[];
  lastVerified: string;
};

export type Block =
  | { t: 'h2'; text: string }
  | { t: 'p'; text: string; cite?: string[] }
  | { t: 'list'; items: string[]; cite?: string[] }
  | { t: 'checklist'; title: string; items: string[] }
  | { t: 'note'; title: string; text: string; cite?: string[] };

export type Article = {
  slug: string;
  category: CategoryId;
  status: 'draft' | 'review' | 'published';
  title: string;
  excerpt: string;
  summary: string[];
  author: string;
  publishedAt: string;
  updatedAt?: string;
  lastVerified: string;
  tags: string[];
  body: Block[];
  /** TierraTrace analysis, kept apart from the factual sections */
  perspective: string;
  product?: { label: string; to: string };
};

export type Category = {
  id: CategoryId;
  name: string;
  /** title of the homepage card that opens this category */
  cardTitle: string;
  description: string;
  scope: string[];
  product?: { label: string; to: string };
  image: { src: string; alt: string };
};
