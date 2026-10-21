import { Fragment, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Check, Copy, Info, Link2, TriangleAlert } from 'lucide-react';
import type { Block } from '../../data/support/types';

/** Turns `[label](href)`, `code` and **bold** in plain text into elements. Everything else stays text. */
export function Inline({ text }: { text: string }) {
  const out: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)\s]+)\)|`([^`]+)`|\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[3] !== undefined) out.push(<code key={m.index}>{m[3]}</code>);
    else if (m[4] !== undefined) out.push(<strong key={m.index}>{m[4]}</strong>);
    else {
      const [label, href] = [m[1], m[2]];
      out.push(
        href.startsWith('/') ? (
          <Link key={m.index} to={href}>
            {label}
          </Link>
        ) : href.startsWith('https://') || href.startsWith('mailto:') ? (
          <a key={m.index} href={href} target={href.startsWith('https://') ? '_blank' : undefined} rel="noopener noreferrer">
            {label}
          </a>
        ) : (
          label
        ),
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}

function CodeBlock({ lang, code, caption }: { lang: string; code: string; caption?: string }) {
  const [copied, setCopied] = useState<'idle' | 'ok' | 'err'>('idle');
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied('ok');
    } catch {
      // Clipboard API refused (no focus, permissions, older browser): fall back to a selection copy
      const ta = document.createElement('textarea');
      ta.value = code;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      ta.remove();
      setCopied(ok ? 'ok' : 'err');
    }
    window.setTimeout(() => setCopied('idle'), 2000);
  };
  return (
    <figure className="st-code">
      <div className="st-code-bar">
        <span>{lang}</span>
        <button type="button" onClick={copy} aria-label="Copy code to clipboard">
          {copied === 'ok' ? <Check className="h-3.5 w-3.5" aria-hidden /> : <Copy className="h-3.5 w-3.5" aria-hidden />}
          {copied === 'ok' ? 'Copied' : copied === 'err' ? 'Copy failed' : 'Copy'}
        </button>
      </div>
      <pre tabIndex={0}>
        <code>{code}</code>
      </pre>
      {caption && (
        <figcaption>
          <Inline text={caption} />
        </figcaption>
      )}
      <span className="sr-only" aria-live="polite">
        {copied === 'ok' ? 'Code copied' : copied === 'err' ? 'Copy failed' : ''}
      </span>
    </figure>
  );
}

/** Renders content blocks. h2 ids become linkable anchors (scrolled in place; the site uses hash routing). */
export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.t) {
          case 'h2':
            return (
              <h2 key={i} id={b.id} className="st-anchor">
                <Inline text={b.text} />
                <a
                  href={`#${b.id}`}
                  className="st-anchor-link"
                  aria-label={`Link to section: ${b.text}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(b.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    const url = new URL(window.location.href);
                    const [route] = url.hash.split('?');
                    window.history.replaceState(null, '', `${route}?s=${b.id}`);
                  }}
                >
                  <Link2 className="h-4 w-4" aria-hidden />
                </a>
              </h2>
            );
          case 'h3':
            return <h3 key={i}>{b.text}</h3>;
          case 'p':
            return (
              <p key={i}>
                <Inline text={b.text} />
              </p>
            );
          case 'list':
            return (
              <ul key={i}>
                {b.items.map((it) => (
                  <li key={it}>
                    <Inline text={it} />
                  </li>
                ))}
              </ul>
            );
          case 'steps':
            return (
              <ol key={i} className="st-steps">
                {b.items.map((it) => (
                  <li key={it}>
                    <Inline text={it} />
                  </li>
                ))}
              </ol>
            );
          case 'code':
            return <CodeBlock key={i} {...b} />;
          case 'note':
            return (
              <aside key={i} className={`st-note is-${b.tone}`}>
                {b.tone === 'caution' ? <TriangleAlert className="h-4 w-4" aria-hidden /> : <Info className="h-4 w-4" aria-hidden />}
                <div>
                  <b>{b.title}</b>
                  <p>
                    <Inline text={b.text} />
                  </p>
                </div>
              </aside>
            );
          case 'table':
            return (
              <div key={i} className="st-table" tabIndex={0} role="region" aria-label="Table">
                <table>
                  <thead>
                    <tr>
                      {b.head.map((h) => (
                        <th key={h} scope="col">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r, ri) => (
                      <tr key={ri}>
                        {r.map((c, ci) => (
                          <Fragment key={ci}>
                            {ci === 0 ? (
                              <th scope="row">
                                <Inline text={c} />
                              </th>
                            ) : (
                              <td>
                                <Inline text={c} />
                              </td>
                            )}
                          </Fragment>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case 'review':
            return (
              <p key={i} className="st-review">
                <span>To be confirmed</span> <Inline text={b.text} />
              </p>
            );
        }
      })}
    </>
  );
}

/** h2 headings of a block list, for tables of contents and search. */
export const headings = (blocks: Block[]) => blocks.filter((b): b is Extract<Block, { t: 'h2' }> => b.t === 'h2');

/** Plain text of blocks, for search. */
export const plainText = (blocks: Block[]) =>
  blocks
    .map((b) => ('text' in b ? b.text : 'items' in b ? b.items.join(' ') : b.t === 'code' ? b.caption ?? '' : b.t === 'table' ? b.rows.flat().join(' ') : ''))
    .join(' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
