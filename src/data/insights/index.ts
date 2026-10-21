import insightTextile from '../../assets/sections/insight-textile.webp';
import trustPort from '../../assets/sections/trust-port.webp';
import insightSeedling from '../../assets/sections/insight-seedling.webp';
import insightAgriculture from '../../assets/sections/insight-agriculture.webp';
import { ARTICLES } from './articles';
import { DEVELOPMENTS, REGULATIONS } from './regulations';
import { SOURCES } from './sources';
import type { Article, Category, CategoryId } from './types';

export * from './types';
export { SOURCES, SOURCE_BY_ID, SOURCE_TYPE_LABEL } from './sources';
export { REGULATIONS, DEVELOPMENTS, STATUS_LABEL } from './regulations';

/** The four homepage cards each open one of these. */
export const CATEGORIES: Category[] = [
  {
    id: 'digital-product-passports',
    name: 'Digital Product Passports',
    cardTitle: 'Digital Product Passports for Global Supply Chains',
    description:
      'EU product passport policy, product identification and the data architecture behind a passport — tracked against the legal texts.',
    scope: ['ESPR and Digital Product Passport requirements', 'Battery passport', 'Product identification and GS1 standards', 'Data interoperability'],
    product: { label: 'TierraTrace Passport', to: '/platform/passport' },
    image: { src: insightTextile, alt: 'Fabric being woven on a loom' },
  },
  {
    id: 'supply-chain-traceability',
    name: 'Supply Chain Traceability',
    cardTitle: 'End-to-End Traceability from Source to Shelf',
    description:
      'Origin, lot genealogy, chain of custody and the standards that let traceability data move between partners.',
    scope: ['Lot and batch genealogy', 'Chain-of-custody models', 'Origin and geolocation evidence', 'Traceability event standards'],
    product: { label: 'TierraTrace Trace', to: '/platform/trace' },
    image: { src: trustPort, alt: 'A port worker reviewing containers on a tablet' },
  },
  {
    id: 'sustainability-intelligence',
    name: 'Sustainability Intelligence',
    cardTitle: 'TierraTrace Studio for Sustainability Intelligence',
    description:
      'Sustainability reporting developments, data governance and the evidence trails that make reported figures checkable.',
    scope: ['CSRD and ESRS developments', 'Assurance readiness', 'Evidence and data governance', 'International reporting standards'],
    product: { label: 'TierraTrace Studio', to: '/platform/studio' },
    image: { src: insightSeedling, alt: 'A green seedling growing from dark soil' },
  },
  {
    id: 'compliance-readiness',
    name: 'Regulatory Intelligence',
    cardTitle: 'Building Compliance Readiness Across Industries',
    description:
      'A dated view of EU product and supply-chain rules — what is in force, what applies later and what has changed — with links to the official texts.',
    scope: ['Regulatory status and timelines', 'Supply-chain due diligence', 'Sector-specific product rules', 'Readiness assessment'],
    image: { src: insightAgriculture, alt: 'Hands harvesting coffee cherries on a hillside' },
  },
];

export const CATEGORY_BY_ID = Object.fromEntries(CATEGORIES.map((c) => [c.id, c])) as Record<CategoryId, Category>;

/** Old card URLs, kept working. */
export const LEGACY_SLUGS: Record<string, CategoryId> = {
  'digital-product-passports-for-global-supply-chains': 'digital-product-passports',
  'end-to-end-traceability-from-source-to-shelf': 'supply-chain-traceability',
  'tierratrace-studio-for-sustainability-intelligence': 'sustainability-intelligence',
  'building-compliance-readiness-across-industries': 'compliance-readiness',
};

/** Only published articles ever leave this module. */
export const PUBLISHED: Article[] = ARTICLES.filter((a) => a.status === 'published').sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt),
);

/** Categories that actually have published content, in card order. */
export const ACTIVE_CATEGORIES = CATEGORIES.filter((c) => PUBLISHED.some((a) => a.category === c.id));

export const articlePath = (a: Article) => `/insights/${a.category}/${a.slug}`;

export function readingMinutes(a: Article) {
  const text = [...a.summary, ...a.body.flatMap((b) => ('text' in b ? [b.text] : b.items)), a.perspective].join(' ');
  return Math.max(1, Math.round(text.split(/\s+/).length / 200));
}

/** Numbered references in order of first citation. */
export function articleReferences(a: Article) {
  const ids: string[] = [];
  for (const b of a.body) if ('cite' in b && b.cite) for (const id of b.cite) if (!ids.includes(id)) ids.push(id);
  return ids;
}

export const formatDate = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  const opts: Intl.DateTimeFormatOptions = d ? { day: 'numeric', month: 'short', year: 'numeric' } : { month: 'short', year: 'numeric' };
  return new Date(Date.UTC(y, (m || 1) - 1, d || 1)).toLocaleDateString('en-GB', { ...opts, timeZone: 'UTC' });
};

/* ---------- search over the real content store ---------- */

export type SearchHit =
  | { kind: 'article'; title: string; snippet: string; to: string; meta: string }
  | { kind: 'regulation'; title: string; snippet: string; to: string; meta: string }
  | { kind: 'source'; title: string; snippet: string; href: string; meta: string };

const norm = (s: string) => s.toLowerCase().normalize('NFKD');

function snippetOf(text: string, terms: string[]) {
  const n = norm(text);
  const at = Math.max(0, Math.min(...terms.map((t) => n.indexOf(t)).filter((i) => i >= 0)));
  const start = Math.max(0, at - 60);
  return (start > 0 ? '…' : '') + text.slice(start, start + 180).trim() + (text.length > start + 180 ? '…' : '');
}

export function search(query: string): SearchHit[] {
  const terms = norm(query).split(/\s+/).filter((t) => t.length > 1);
  if (!terms.length) return [];
  const matches = (text: string) => terms.every((t) => norm(text).includes(t));
  const hits: { score: number; hit: SearchHit }[] = [];

  for (const a of PUBLISHED) {
    const body = a.body.map((b) => ('text' in b ? b.text : b.items.join(' '))).join(' ');
    const all = [a.title, a.excerpt, a.tags.join(' '), a.summary.join(' '), body].join(' ');
    if (!matches(all)) continue;
    const score = (matches(a.title) ? 6 : 0) + (matches(a.tags.join(' ')) ? 3 : 0) + 1;
    hits.push({
      score,
      hit: { kind: 'article', title: a.title, snippet: snippetOf(matches(a.excerpt) ? a.excerpt : body, terms), to: articlePath(a), meta: CATEGORY_BY_ID[a.category].name },
    });
  }
  for (const r of REGULATIONS) {
    const all = [r.name, r.shortName, r.identifier, r.statusNote, r.scope, r.milestones.map((m) => m.label).join(' ')].join(' ');
    if (!matches(all)) continue;
    hits.push({
      score: matches(r.name + r.shortName + r.identifier) ? 5 : 1,
      hit: { kind: 'regulation', title: `${r.shortName} — ${r.identifier}`, snippet: snippetOf(r.statusNote + ' ' + r.scope, terms), to: `/insights/compliance-readiness?s=reg-${r.id}`, meta: 'Regulatory tracker' },
    });
  }
  for (const s of SOURCES) {
    const all = [s.title, s.publisher, s.notes ?? ''].join(' ');
    if (!matches(all)) continue;
    hits.push({ score: 0.5, hit: { kind: 'source', title: s.title, snippet: s.publisher, href: s.url, meta: 'Source' } });
  }
  for (const d of DEVELOPMENTS) {
    const all = [d.headline, d.summary, d.publisher].join(' ');
    if (!matches(all)) continue;
    hits.push({ score: 2, hit: { kind: 'source', title: d.headline, snippet: snippetOf(d.summary, terms), href: d.url, meta: `${d.publisher} · ${formatDate(d.publishedAt)}` } });
  }
  return hits.sort((a, b) => b.score - a.score).map((h) => h.hit);
}
