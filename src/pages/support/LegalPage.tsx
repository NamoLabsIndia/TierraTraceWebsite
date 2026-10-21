import { Link } from 'react-router-dom';
import { FileWarning } from 'lucide-react';
import { PRIVACY, TERMS } from '../../data/support/legal';
import type { LegalDoc } from '../../data/support/types';
import { usePageMeta } from '../../lib/usePageMeta';
import { Blocks } from './Blocks';
import './support.css';

/** /privacy and /terms. Rendered as clearly labelled drafts until the company approves them. */
export default function LegalPage({ which }: { which: 'privacy' | 'terms' }) {
  const doc: LegalDoc = which === 'privacy' ? PRIVACY : TERMS;
  usePageMeta({
    title: `${doc.title} | TierraTrace`,
    description: `${doc.summary} Draft pending legal review.`,
    path: `/${which}`,
  });

  return (
    <div className="st">
      <article className="st-legal sx">
        <nav aria-label="Breadcrumb" className="st-crumbs">
          <Link to="/">Home</Link> <span aria-hidden>/</span> <span aria-current="page">{doc.title}</span>
        </nav>
        <h1 className="st-art-title">{doc.title}</h1>
        <p className="st-lead">{doc.summary}</p>

        <div className="st-draft" role="note">
          <FileWarning className="h-5 w-5" aria-hidden />
          <div>
            <b>Draft — pending legal review. Not yet in effect.</b>
            <p>
              This document has not been approved by Namo Labs and has no effective date yet. Items marked “To be confirmed”
              are awaiting confirmation. Questions: <a href="mailto:info@namolabs.in">info@namolabs.in</a>.
            </p>
          </div>
        </div>

        <div className="st-legal-grid">
          <nav className="st-legal-toc" aria-label="Contents">
            <p>Contents</p>
            <ol>
              {doc.sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                  >
                    {s.title.replace(/^\d+\.\s*/, '')}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="st-prose">
            {doc.sections.map((s) => (
              <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="st-legal-sec">
                <h2 id={`${s.id}-h`}>{s.title}</h2>
                <Blocks blocks={s.body} />
              </section>
            ))}
            <details className="st-checklist">
              <summary>Items pending confirmation ({doc.checklist.length})</summary>
              <ul>
                {doc.checklist.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </details>
          </div>
        </div>
      </article>
    </div>
  );
}
