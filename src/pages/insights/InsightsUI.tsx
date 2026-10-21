import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CalendarCheck2, ChevronRight, Clock, ExternalLink, Search } from 'lucide-react';
import {
  CATEGORY_BY_ID,
  DEVELOPMENTS,
  REGULATIONS,
  SOURCE_BY_ID,
  SOURCE_TYPE_LABEL,
  STATUS_LABEL,
  articlePath,
  formatDate,
  readingMinutes,
  search,
  type Article,
  type CategoryId,
  type Source,
} from '../../data/insights';

export { SITE_URL } from '../../lib/usePageMeta';

export { usePageMeta } from '../../lib/usePageMeta';

/* ---------- small pieces ---------- */

export function Crumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="ins-crumbs">
      <ol>
        {items.map((it, i) => (
          <li key={it.label}>
            {it.to ? <Link to={it.to}>{it.label}</Link> : <span aria-current="page">{it.label}</span>}
            {i < items.length - 1 && <ChevronRight className="h-3.5 w-3.5" aria-hidden />}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Verified({ date }: { date: string }) {
  return (
    <span className="ins-verified">
      <CalendarCheck2 className="h-3.5 w-3.5" aria-hidden /> Sources checked {formatDate(date)}
    </span>
  );
}

export function ArticleCard({ a, large = false, text = false }: { a: Article; large?: boolean; text?: boolean }) {
  const c = CATEGORY_BY_ID[a.category];
  return (
    <article className={`ins-acard ${large ? 'is-large' : ''} ${text ? 'is-text' : ''}`}>
      <Link to={articlePath(a)} className="ins-acard-link">
        {!text && (
          <span className="ins-acard-media">
            <img src={c.image.src} alt="" loading="lazy" decoding="async" />
          </span>
        )}
        <span className="ins-acard-body">
          <span className="ins-kicker">{c.name}</span>
          <span className="ins-acard-title">{a.title}</span>
          <span className="ins-acard-excerpt">{a.excerpt}</span>
          <span className="ins-meta">
            <time dateTime={a.publishedAt}>Published {formatDate(a.publishedAt)}</time>
            {a.updatedAt && <time dateTime={a.updatedAt}>Updated {formatDate(a.updatedAt)}</time>}
            <span>
              <Clock className="h-3.5 w-3.5" aria-hidden /> {readingMinutes(a)} min read
            </span>
          </span>
        </span>
      </Link>
    </article>
  );
}

export function SectionHead({ kicker, title, body, id }: { kicker: string; title: string; body?: string; id: string }) {
  return (
    <div className="ins-shead">
      <p className="ins-kicker">{kicker}</p>
      <h2 id={id}>{title}</h2>
      {body && <p className="ins-shead-body">{body}</p>}
    </div>
  );
}

/* ---------- developments ---------- */

export function Developments({ category, limit }: { category?: CategoryId; limit?: number }) {
  const items = DEVELOPMENTS.filter((d) => !category || d.categories.includes(category)).slice(0, limit);
  return (
    <ol className="ins-devs">
      {items.map((d) => (
        <li key={d.id}>
          <div className="ins-dev-date">
            <time dateTime={d.publishedAt}>{formatDate(d.publishedAt)}</time>
            <small>Published</small>
          </div>
          <div className="ins-dev-body">
            <h3>
              <a href={d.url} target="_blank" rel="noopener noreferrer">
                {d.headline} <ExternalLink className="h-3.5 w-3.5" aria-label="(opens original source)" />
              </a>
            </h3>
            <p>{d.summary}</p>
            <p className="ins-meta">
              <span>{d.publisher}</span>
              {d.eventDate && (
                <span>
                  {d.eventLabel}: <time dateTime={d.eventDate}>{formatDate(d.eventDate)}</time>
                </span>
              )}
              <span>Checked {formatDate(d.lastVerified)}</span>
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/* ---------- regulatory tracker ---------- */

export function RegulationTracker({ category }: { category?: CategoryId }) {
  const regs = REGULATIONS.filter((r) => !category || r.categories.includes(category));
  return (
    <div className="ins-regs">
      {regs.map((r) => (
        <article key={r.id} id={`reg-${r.id}`} className="ins-reg">
          <header>
            <div>
              <h3>
                {r.name} <span>({r.shortName})</span>
              </h3>
              <p className="ins-reg-id">{r.identifier}</p>
            </div>
            <span className={`ins-status is-${r.status}`}>{STATUS_LABEL[r.status]}</span>
          </header>
          <p className="ins-reg-note">{r.statusNote}</p>
          <dl className="ins-reg-facts">
            <div>
              <dt>Adopted</dt>
              <dd>{formatDate(r.adopted)}</dd>
            </div>
            {r.entryIntoForce && (
              <div>
                <dt>Entry into force</dt>
                <dd>{formatDate(r.entryIntoForce)}</dd>
              </div>
            )}
            <div>
              <dt>Authority</dt>
              <dd>{r.authority}</dd>
            </div>
            <div>
              <dt>Scope</dt>
              <dd>{r.scope}</dd>
            </div>
            {r.amendedBy && (
              <div>
                <dt>Amended by</dt>
                <dd>{r.amendedBy.join('; ')}</dd>
              </div>
            )}
          </dl>
          <ol className="ins-milestones" aria-label={`${r.shortName} key dates`}>
            {r.milestones.map((m) => (
              <li key={m.date + m.label} className={`is-${m.status}`}>
                <time dateTime={m.date}>{formatDate(m.date)}</time>
                <span>{m.label}</span>
              </li>
            ))}
          </ol>
          <footer>
            <span className="ins-reg-links">
              {r.sourceIds.map((id) => (
                <a key={id} href={SOURCE_BY_ID[id].url} target="_blank" rel="noopener noreferrer">
                  {shortSourceLabel(SOURCE_BY_ID[id])} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </a>
              ))}
            </span>
            <span className="ins-reg-checked">Checked {formatDate(r.lastVerified)}</span>
          </footer>
        </article>
      ))}
    </div>
  );
}

function shortSourceLabel(s: Source) {
  const m = s.title.match(/^(Commission Delegated Regulation|Regulation|Directive) \((EU|EC)\) (No )?[\d/]+/);
  return m ? m[0].replace('Commission Delegated Regulation', 'Delegated Reg.') : s.publisher.split(' · ')[0];
}

/* ---------- sources ---------- */

export function SourceDirectory({ ids }: { ids?: string[] }) {
  const list = (ids ?? Object.keys(SOURCE_BY_ID)).map((id) => SOURCE_BY_ID[id]);
  return (
    <ul className="ins-sources">
      {list.map((s) => (
        <li key={s.id}>
          <a href={s.url} target="_blank" rel="noopener noreferrer">
            <span className="ins-src-type">{SOURCE_TYPE_LABEL[s.type]}</span>
            <span className="ins-src-title">
              {s.title} <ExternalLink className="h-3.5 w-3.5" aria-label="(opens original source)" />
            </span>
            <span className="ins-meta">
              <span>{s.publisher}</span>
              {s.publishedAt && <span>Published {formatDate(s.publishedAt)}</span>}
              <span>Checked {formatDate(s.lastVerified)}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

/* ---------- search ---------- */

export function InsightsSearch() {
  const [q, setQ] = useState('');
  const hits = useMemo(() => search(q), [q]);
  const active = q.trim().length > 1;
  return (
    <div className="ins-search" role="search">
      <label htmlFor="ins-q" className="sr-only">
        Search insights, regulations and sources
      </label>
      <span className="ins-search-box">
        <Search className="h-4 w-4" aria-hidden />
        <input
          id="ins-q"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search articles, regulations and sources — e.g. EUDR, battery passport, ESRS"
          autoComplete="off"
        />
      </span>
      {active && (
        <div className="ins-results" aria-live="polite">
          <p className="ins-results-count">
            {hits.length ? `${hits.length} result${hits.length > 1 ? 's' : ''}` : 'No results. Try a regulation name, a standard or a topic.'}
          </p>
          <ul>
            {hits.slice(0, 12).map((h) => (
              <li key={h.kind + h.title}>
                {'to' in h ? (
                  <Link to={h.to}>
                    <span className="ins-kicker">{h.meta}</span>
                    <b>{h.title}</b>
                    <span>{h.snippet}</span>
                    <ArrowRight className="ins-results-go h-4 w-4" aria-hidden />
                  </Link>
                ) : (
                  <a href={h.href} target="_blank" rel="noopener noreferrer">
                    <span className="ins-kicker">{h.meta}</span>
                    <b>{h.title}</b>
                    <span>{h.snippet}</span>
                    <ExternalLink className="ins-results-go h-4 w-4" aria-label="(opens original source)" />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
