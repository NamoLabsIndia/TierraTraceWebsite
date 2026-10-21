import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Check, Clock } from 'lucide-react';
import {
  CATEGORY_BY_ID,
  PUBLISHED,
  SOURCE_BY_ID,
  articlePath,
  articleReferences,
  formatDate,
  readingMinutes,
  type Article,
} from '../../data/insights';
import { ArticleCard, Crumbs, SITE_URL, Verified, usePageMeta } from './InsightsUI';
import InsightNotFound from './InsightNotFound';
import './insights.css';

export default function InsightArticlePage() {
  const { category, article } = useParams<{ category: string; article: string }>();
  const a = PUBLISHED.find((x) => x.slug === article && x.category === category);
  if (!a) return <InsightNotFound />;
  return <ArticleView a={a} />;
}

function ArticleView({ a }: { a: Article }) {
  const c = CATEGORY_BY_ID[a.category];
  const refs = articleReferences(a);
  const num = (id: string) => refs.indexOf(id) + 1;
  const related = PUBLISHED.filter((x) => x.slug !== a.slug).slice(0, 3);

  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: a.title,
      description: a.excerpt,
      datePublished: a.publishedAt,
      dateModified: a.updatedAt ?? a.publishedAt,
      author: { '@type': 'Organization', name: a.author },
      publisher: { '@type': 'Organization', name: 'Namo Labs' },
      mainEntityOfPage: `${SITE_URL}/#${articlePath(a)}`,
      citation: refs.map((id) => SOURCE_BY_ID[id].url),
    }),
    [a, refs],
  );
  usePageMeta({ title: `${a.title} | TierraTrace Insights`, description: a.excerpt, path: articlePath(a), image: c.image.src, jsonLd });

  const Cite = ({ ids }: { ids?: string[] }) =>
    ids?.length ? (
      <sup className="ins-cite">
        {ids.map((id) => (
          <a
            key={id}
            href={`#ref-${id}`}
            aria-label={`Source ${num(id)}: ${SOURCE_BY_ID[id].title}`}
            onClick={(e) => {
              // hash routing: scroll to the reference instead of changing the route
              e.preventDefault();
              document.getElementById(`ref-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
          >
            {num(id)}
          </a>
        ))}
      </sup>
    ) : null;

  return (
    <div className="ins">
      <article className="ins-article">
        <header className="ins-art-head">
          <Crumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Insights', to: '/insights' },
              { label: c.name, to: `/insights/${c.id}` },
              { label: a.title },
            ]}
          />
          <Link to={`/insights/${c.id}`} className="ins-kicker">
            {c.name}
          </Link>
          <h1>{a.title}</h1>
          <p className="ins-lead">{a.excerpt}</p>
          <p className="ins-meta ins-art-meta">
            <span>{a.author}</span>
            <time dateTime={a.publishedAt}>Published {formatDate(a.publishedAt)}</time>
            {a.updatedAt && <time dateTime={a.updatedAt}>Updated {formatDate(a.updatedAt)}</time>}
            <span>
              <Clock className="h-3.5 w-3.5" aria-hidden /> {readingMinutes(a)} min read
            </span>
            <Verified date={a.lastVerified} />
          </p>
        </header>

        <section className="ins-summary" aria-labelledby="exec-sum">
          <h2 id="exec-sum">Executive summary</h2>
          <ul>
            {a.summary.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>

        <div className="ins-prose">
          {a.body.map((b, i) => {
            switch (b.t) {
              case 'h2':
                return <h2 key={i}>{b.text}</h2>;
              case 'p':
                return (
                  <p key={i}>
                    {b.text}
                    <Cite ids={b.cite} />
                  </p>
                );
              case 'list':
                return (
                  <ul key={i}>
                    {b.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                    {b.cite && (
                      <li className="ins-list-cite">
                        Source <Cite ids={b.cite} />
                      </li>
                    )}
                  </ul>
                );
              case 'note':
                return (
                  <aside key={i} className="ins-note">
                    <b>{b.title}</b>
                    <p>
                      {b.text}
                      <Cite ids={b.cite} />
                    </p>
                  </aside>
                );
              case 'checklist':
                return (
                  <section key={i} className="ins-check" aria-label={b.title}>
                    <h2>{b.title}</h2>
                    <ul>
                      {b.items.map((it) => (
                        <li key={it}>
                          <Check className="h-4 w-4" aria-hidden />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </section>
                );
            }
          })}
        </div>

        <section className="ins-perspective" aria-labelledby="persp">
          <h2 id="persp">TierraTrace perspective</h2>
          <p className="ins-persp-note">Analysis and opinion, separate from the reporting above.</p>
          <p>{a.perspective}</p>
          {a.product && (
            <Link to={a.product.to} className="ins-btn ins-btn--ghost">
              About {a.product.label} <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          )}
        </section>

        <section className="ins-refs" aria-labelledby="refs">
          <h2 id="refs">Sources and references</h2>
          <ol>
            {refs.map((id) => {
              const s = SOURCE_BY_ID[id];
              return (
                <li key={id} id={`ref-${id}`}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.title}
                  </a>
                  <span className="ins-meta">
                    <span>{s.publisher}</span>
                    {s.publishedAt && <span>Published {formatDate(s.publishedAt)}</span>}
                    <span>Checked {formatDate(s.lastVerified)}</span>
                  </span>
                </li>
              );
            })}
          </ol>
          <p className="ins-disclaimer">
            This article summarises public sources for general information. It is not legal advice; check the official
            texts and take advice on how they apply to your organisation.
          </p>
        </section>
      </article>

      {related.length > 0 && (
        <section className="ins-sec ins-sec--tint" aria-labelledby="related">
          <div className="ins-shead">
            <p className="ins-kicker">Continue reading</p>
            <h2 id="related">Related insights</h2>
          </div>
          <div className="ins-agrid">
            {related.map((r) => (
              <ArticleCard key={r.slug} a={r} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
