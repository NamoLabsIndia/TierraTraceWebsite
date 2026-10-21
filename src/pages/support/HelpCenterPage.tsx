import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { HELP_ARTICLES, HELP_CATEGORIES_WITH_CONTENT } from '../../data/support/help';
import type { HelpArticle } from '../../data/support/types';
import { usePageMeta } from '../../lib/usePageMeta';
import { Words } from '../../lib/motion';
import { Pill } from '../home/sections/shared';
import { plainText } from './Blocks';
import '../home/sections/sections.css';
import './support.css';

const norm = (s: string) => s.toLowerCase().normalize('NFKD');

/** Ranked search over the published help articles. */
export function searchHelp(q: string): HelpArticle[] {
  const terms = norm(q).split(/\s+/).filter((t) => t.length > 1);
  if (!terms.length) return [];
  return HELP_ARTICLES.map((a) => {
    const title = norm(a.title);
    const kw = norm(a.keywords.join(' '));
    const all = [title, norm(a.intro), kw, norm(plainText(a.body))].join(' ');
    if (!terms.every((t) => all.includes(t))) return null;
    const score = terms.reduce((s, t) => s + (title.includes(t) ? 5 : 0) + (kw.includes(t) ? 3 : 0) + 1, 0);
    return { a, score };
  })
    .filter((x): x is { a: HelpArticle; score: number } => x !== null)
    .sort((x, y) => y.score - x.score)
    .map((x) => x.a);
}

const SUGGESTIONS = ['Digital Product Passport', 'Traceability', 'Supplier data', 'Verification', 'Integration', 'QR'];

export default function HelpCenterPage() {
  usePageMeta({
    title: 'TierraTrace Help Center | Product Guidance',
    description: 'Practical answers, product guidance and resources to help you understand and use TierraTrace.',
    path: '/help',
  });
  const [q, setQ] = useState('');
  const results = useMemo(() => searchHelp(q), [q]);
  const searching = q.trim().length > 1;

  return (
    <div className="st">
      <header className="st-hero sx">
        <nav aria-label="Breadcrumb" className="st-crumbs">
          <Link to="/">Home</Link> <span aria-hidden>/</span> <span aria-current="page">Help Center</span>
        </nav>
        <Pill>Help Center</Pill>
        <h1 className="st-title">
          <Words as="span" text="TierraTrace Help Center" />
        </h1>
        <p className="st-lead">Find practical answers, product guidance, and resources to help you understand and use TierraTrace.</p>
        <div className="st-search" role="search">
          <label htmlFor="help-q" className="sr-only">
            Search help articles
          </label>
          <span className="st-search-box">
            <Search className="h-4 w-4" aria-hidden />
            <input id="help-q" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search help — e.g. supplier data, QR, verification" autoComplete="off" />
          </span>
          {!searching && (
            <p className="st-suggest">
              Try:{' '}
              {SUGGESTIONS.map((s) => (
                <button key={s} type="button" onClick={() => setQ(s)}>
                  {s}
                </button>
              ))}
            </p>
          )}
        </div>
      </header>

      {searching ? (
        <section className="st-sec sx" aria-labelledby="help-results" aria-live="polite">
          <h2 id="help-results" className="st-h2">
            {results.length ? `${results.length} article${results.length > 1 ? 's' : ''} for “${q.trim()}”` : `No articles match “${q.trim()}”`}
          </h2>
          {results.length ? (
            <ul className="st-alist">
              {results.map((a) => (
                <li key={a.slug}>
                  <Link to={`/help/${a.slug}`}>
                    <b>{a.title}</b>
                    <span>{a.intro}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="st-empty">
              <p>Try fewer or different words, or browse the topics below. If you can’t find what you need, our team can help.</p>
              <div className="st-actions">
                <button type="button" className="st-btn st-btn--ghost" onClick={() => setQ('')}>
                  Clear search
                </button>
                <Link to="/support?s=support-form" className="st-btn">
                  Contact support <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          )}
        </section>
      ) : null}

      <section className={`st-sec sx ${searching ? 'st-sec--tint' : ''}`} aria-labelledby="help-topics">
        <h2 id="help-topics" className="st-h2">
          Browse by topic
        </h2>
        <div className="st-topics">
          {HELP_CATEGORIES_WITH_CONTENT.map((c) => (
            <section key={c.id} className="st-topic" aria-labelledby={`hc-${c.id}`}>
              <h3 id={`hc-${c.id}`}>{c.name}</h3>
              <p>{c.description}</p>
              <ul>
                {HELP_ARTICLES.filter((a) => a.category === c.id).map((a) => (
                  <li key={a.slug}>
                    <Link to={`/help/${a.slug}`}>
                      {a.title} <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <section className="st-sec st-sec--tint sx st-cta" aria-label="More help">
        <div>
          <h2 className="st-h2">Looking for technical reference?</h2>
          <p className="st-lead">Concepts, terminology, data preparation and integration groundwork are in the documentation.</p>
        </div>
        <div className="st-actions">
          <Link to="/docs" className="st-btn">
            Documentation <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link to="/support" className="st-btn st-btn--ghost">
            Support
          </Link>
        </div>
      </section>
    </div>
  );
}
