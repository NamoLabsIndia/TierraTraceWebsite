import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Menu, Search, X } from 'lucide-react';
import { DOC_BY_SLUG, DOC_SECTIONS, DOCS } from '../../data/support/docs';
import { formatDate } from '../../data/insights';
import { usePageMeta } from '../../lib/usePageMeta';
import { Blocks, headings, plainText } from './Blocks';
import { NotFoundPanel } from './NotFoundPanel';
import './support.css';

/** /docs and /docs/:slug — one layout: sidebar, article, and an on-this-page list on wide screens. */
export default function DocsPage() {
  const { slug = 'overview' } = useParams<{ slug: string }>();
  const page = DOC_BY_SLUG[slug];
  if (!page) return <NotFoundPanel area="Documentation" back="/docs" />;
  return <DocView key={page.slug} slug={page.slug} />;
}

function DocView({ slug }: { slug: string }) {
  const page = DOC_BY_SLUG[slug];
  const section = DOC_SECTIONS.find((s) => s.id === page.section);
  const i = DOCS.indexOf(page);
  const prev = DOCS[i - 1];
  const next = DOCS[i + 1];
  const toc = headings(page.body);
  const [navOpen, setNavOpen] = useState(false);

  usePageMeta({
    title: slug === 'overview' ? 'TierraTrace Documentation | Product and API Reference' : `${page.title} | TierraTrace Documentation`,
    description: page.description,
    path: slug === 'overview' ? '/docs' : `/docs/${slug}`,
  });

  // close the mobile drawer on Escape
  useEffect(() => {
    if (!navOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setNavOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [navOpen]);

  return (
    <div className="st st-docs-wrap">
      <div className="st-docs">
        <button type="button" className="st-docs-toggle" aria-expanded={navOpen} aria-controls="docs-nav" onClick={() => setNavOpen((v) => !v)}>
          {navOpen ? <X className="h-4 w-4" aria-hidden /> : <Menu className="h-4 w-4" aria-hidden />}
          {navOpen ? 'Close menu' : 'Documentation menu'}
        </button>

        <aside id="docs-nav" className={`st-docs-nav ${navOpen ? 'is-open' : ''}`} aria-label="Documentation">
          <DocsNav current={slug} onNavigate={() => setNavOpen(false)} />
        </aside>

        <article className="st-docs-main">
          <nav aria-label="Breadcrumb" className="st-crumbs">
            <Link to="/">Home</Link> <span aria-hidden>/</span> <Link to="/docs">Documentation</Link> <span aria-hidden>/</span> <span>{section?.name}</span>{' '}
            <span aria-hidden>/</span> <span aria-current="page">{page.title}</span>
          </nav>
          <h1 className="st-art-title">{page.title}</h1>
          <p className="st-lead">{page.description}</p>
          <p className="st-meta">
            Last updated <time dateTime={page.updated}>{formatDate(page.updated)}</time>
          </p>
          <div className="st-prose">
            <Blocks blocks={page.body} />
          </div>

          <nav className="st-pager" aria-label="Previous and next pages">
            {prev ? (
              <Link to={`/docs/${prev.slug}`} rel="prev">
                <small>
                  <ArrowLeft className="h-3.5 w-3.5" aria-hidden /> Previous
                </small>
                <b>{prev.title}</b>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link to={`/docs/${next.slug}`} rel="next" className="is-next">
                <small>
                  Next <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </small>
                <b>{next.title}</b>
              </Link>
            )}
          </nav>
        </article>

        {toc.length > 1 && <Toc items={toc} />}
      </div>
    </div>
  );
}

function DocsNav({ current, onNavigate }: { current: string; onNavigate: () => void }) {
  const [q, setQ] = useState('');
  const results = useMemo(() => {
    const terms = q.toLowerCase().split(/\s+/).filter((t) => t.length > 1);
    if (!terms.length) return null;
    return DOCS.filter((d) => {
      const all = [d.title, d.description, plainText(d.body)].join(' ').toLowerCase();
      return terms.every((t) => all.includes(t));
    });
  }, [q]);

  return (
    <>
      <div className="st-docs-search" role="search">
        <label htmlFor="docs-q" className="sr-only">
          Search documentation
        </label>
        <Search className="h-4 w-4" aria-hidden />
        <input id="docs-q" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search docs" autoComplete="off" />
      </div>
      {results ? (
        <div aria-live="polite">
          <p className="st-docs-count">{results.length ? `${results.length} result${results.length > 1 ? 's' : ''}` : 'No pages match. Try another term.'}</p>
          <ul className="st-docs-list">
            {results.map((d) => (
              <li key={d.slug}>
                <Link to={`/docs/${d.slug}`} onClick={onNavigate} aria-current={d.slug === current ? 'page' : undefined}>
                  {d.title}
                  <small>{d.description}</small>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        DOC_SECTIONS.map((s) => (
          <div key={s.id} className="st-docs-group">
            <p>{s.name}</p>
            <ul className="st-docs-list">
              {DOCS.filter((d) => d.section === s.id).map((d) => (
                <li key={d.slug}>
                  <Link to={`/docs/${d.slug}`} onClick={onNavigate} aria-current={d.slug === current ? 'page' : undefined}>
                    {d.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </>
  );
}

/** "On this page", highlighting the section in view. */
function Toc({ items }: { items: { id: string; text: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);
  useEffect(() => {
    const els = items.map((h) => document.getElementById(h.id)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-90px 0px -65% 0px' },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [items]);
  return (
    <nav className="st-toc" aria-label="On this page">
      <p>On this page</p>
      <ul>
        {items.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              aria-current={active === h.id ? 'true' : undefined}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              {h.text.replace(/\*\*|`/g, '')}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
