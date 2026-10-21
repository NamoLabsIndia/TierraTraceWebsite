import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ThumbsDown, ThumbsUp } from 'lucide-react';
import { HELP_BY_SLUG, HELP_CATEGORIES } from '../../data/support/help';
import type { HelpArticle } from '../../data/support/types';
import { formatDate } from '../../data/insights';
import { usePageMeta } from '../../lib/usePageMeta';
import { Blocks } from './Blocks';
import { NotFoundPanel } from './NotFoundPanel';
import './support.css';

export default function HelpArticlePage() {
  const { slug = '' } = useParams<{ slug: string }>();
  const a = HELP_BY_SLUG[slug];
  if (!a) return <NotFoundPanel area="Help Center" back="/help" />;
  return <Article key={a.slug} a={a} />;
}

function Article({ a }: { a: HelpArticle }) {
  usePageMeta({ title: `${a.title} | TierraTrace Help Center`, description: a.intro, path: `/help/${a.slug}` });
  const cat = HELP_CATEGORIES.find((c) => c.id === a.category);
  const related = a.related.map((s) => HELP_BY_SLUG[s]).filter(Boolean);

  return (
    <div className="st">
      <article className="st-article sx">
        <nav aria-label="Breadcrumb" className="st-crumbs">
          <Link to="/">Home</Link> <span aria-hidden>/</span> <Link to="/help">Help Center</Link> <span aria-hidden>/</span>{' '}
          <span>{cat?.name}</span> <span aria-hidden>/</span> <span aria-current="page">{a.title}</span>
        </nav>
        <p className="st-kicker">{cat?.name}</p>
        <h1 className="st-art-title">{a.title}</h1>
        <p className="st-lead">{a.intro}</p>
        <p className="st-meta">
          Last updated <time dateTime={a.updated}>{formatDate(a.updated)}</time>
        </p>
        <div className="st-prose">
          <Blocks blocks={a.body} />
        </div>
        <Feedback a={a} />
      </article>

      {related.length > 0 && (
        <section className="st-sec st-sec--tint sx" aria-labelledby="rel">
          <h2 id="rel" className="st-h2">
            Related articles
          </h2>
          <ul className="st-alist">
            {related.map((r) => (
              <li key={r.slug}>
                <Link to={`/help/${r.slug}`}>
                  <b>{r.title}</b>
                  <span>{r.intro}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="st-more">
            Still need help? <Link to="/support?s=support-form">Contact support</Link>
          </p>
        </section>
      )}
    </div>
  );
}

/**
 * "Was this helpful?" — answers are not stored anywhere (there is no feedback backend), and the
 * response says so. A "No" offers a pre-filled support request instead of pretending to record a vote.
 */
function Feedback({ a }: { a: HelpArticle }) {
  const [answer, setAnswer] = useState<'yes' | 'no' | null>(null);
  return (
    <section className="st-feedback" aria-labelledby="fb">
      <h2 id="fb">Was this article helpful?</h2>
      {answer === null ? (
        <div className="st-actions">
          <button type="button" className="st-btn st-btn--ghost" onClick={() => setAnswer('yes')}>
            <ThumbsUp className="h-4 w-4" aria-hidden /> Yes
          </button>
          <button type="button" className="st-btn st-btn--ghost" onClick={() => setAnswer('no')}>
            <ThumbsDown className="h-4 w-4" aria-hidden /> No
          </button>
        </div>
      ) : (
        <div role="status">
          <p>
            {answer === 'yes' ? 'Thanks for letting us know.' : 'Sorry this didn’t answer your question.'} Responses here aren’t recorded automatically yet
            {answer === 'no' ? ' — if you tell us what was missing, we can improve the article.' : '.'}
          </p>
          {answer === 'no' && (
            <Link to={`/support?category=documentation&s=support-form`} className="st-link">
              Tell us what was missing <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          )}
          <span className="sr-only">Article: {a.title}</span>
        </div>
      )}
    </section>
  );
}
