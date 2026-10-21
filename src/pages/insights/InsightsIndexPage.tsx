import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ACTIVE_CATEGORIES, PUBLISHED, type CategoryId } from '../../data/insights';
import { ArticleCard, Crumbs, Developments, InsightsSearch, SectionHead, SourceDirectory, usePageMeta } from './InsightsUI';
import './insights.css';

const DESCRIPTION =
  'Research, regulatory developments, industry analysis and practical guidance for organisations building more transparent, traceable and accountable supply chains.';

/** Insights hub: search, category filters, articles, dated developments and the source directory. */
export default function InsightsIndexPage() {
  usePageMeta({ title: 'Insights | TierraTrace by Namo Labs', description: DESCRIPTION, path: '/insights' });
  const [filter, setFilter] = useState<CategoryId | 'all'>('all');
  const shown = PUBLISHED.filter((a) => filter === 'all' || a.category === filter);

  return (
    <div className="ins">
      <header className="ins-hero">
        <Crumbs items={[{ label: 'Home', to: '/' }, { label: 'Insights' }]} />
        <h1>
          Supply Chain Intelligence. <span>Backed by Evidence.</span>
        </h1>
        <p className="ins-lead">{DESCRIPTION}</p>
        <InsightsSearch />
      </header>

      <section className="ins-sec" aria-labelledby="ins-topics">
        <SectionHead kicker="Topics" title="Explore by topic" id="ins-topics" />
        <ul className="ins-topics">
          {ACTIVE_CATEGORIES.map((c) => (
            <li key={c.id}>
              <Link to={`/insights/${c.id}`}>
                <img src={c.image.src} alt="" loading="lazy" decoding="async" />
                <span className="ins-topics-shade" aria-hidden />
                <span className="ins-topics-text">
                  <b>{c.name}</b>
                  <span>{c.description}</span>
                </span>
                <ArrowRight className="ins-topics-go h-4 w-4" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="ins-sec ins-sec--tint" aria-labelledby="ins-articles">
        <SectionHead kicker="Analysis" title="Featured insights" id="ins-articles" />
        <div className="ins-filters" role="group" aria-label="Filter articles by topic">
          <button type="button" aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>
            All
          </button>
          {ACTIVE_CATEGORIES.map((c) => (
            <button key={c.id} type="button" aria-pressed={filter === c.id} onClick={() => setFilter(c.id)}>
              {c.name}
            </button>
          ))}
        </div>
        <div className="ins-agrid">
          {shown.map((a, i) => (
            <ArticleCard key={a.slug} a={a} large={filter === 'all' && i === 0} />
          ))}
        </div>
      </section>

      <section className="ins-sec" aria-labelledby="ins-devs">
        <SectionHead
          kicker="Latest developments"
          title="Official publications, dated"
          body="Regulatory acts, official announcements and standards publications, each linked to the original. The publication date and the date we last checked are shown separately. This list is curated by our editors, not a live feed."
          id="ins-devs"
        />
        <Developments />
      </section>

      <section className="ins-sec ins-sec--tint" aria-labelledby="ins-sources">
        <SectionHead
          kicker="Sources"
          title="Research and regulatory sources"
          body="Every source cited in Insights, linked to the original document."
          id="ins-sources"
        />
        <SourceDirectory />
      </section>
    </div>
  );
}
