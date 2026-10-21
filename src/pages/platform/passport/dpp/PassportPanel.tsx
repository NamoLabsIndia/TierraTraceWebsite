import { useId, useRef, type KeyboardEvent } from 'react';
import { ChevronRight, MapPin } from 'lucide-react';
import logo from '../../../../assets/tierratrace-logo.png';
import { DEMO_PASSPORT, DPP_ASSETS } from '../../../../data/passportContent';

/**
 * The sample passport record. `interactive` turns the category row into a real tablist (demo section);
 * otherwise the row is a static indication of the categories (hero preview).
 */
export function PassportPanel({
  active,
  onSelect,
  interactive = false,
  compact = false,
}: {
  active: string;
  onSelect?: (id: string) => void;
  interactive?: boolean;
  compact?: boolean;
}) {
  const p = DEMO_PASSPORT;
  const uid = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const index = Math.max(0, p.tabs.findIndex((t) => t.id === active));
  const tab = p.tabs[index];

  const onKey = (e: KeyboardEvent) => {
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!d) return;
    e.preventDefault();
    const next = (index + d + p.tabs.length) % p.tabs.length;
    onSelect?.(p.tabs[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className={`dp-panel ${compact ? 'dp-panel--compact' : ''}`}>
      <div className="dp-panel-top">
        <img className="dp-panel-logo" src={logo} alt="TierraTrace" width={360} height={163} />
        <span className="dp-panel-chip">DPP</span>
      </div>
      <div className="dp-panel-id">
        <div>
          <p className="dp-panel-kicker">Digital Product Passport</p>
          <p className="dp-panel-name">{p.product}</p>
          <p className="dp-panel-origin">
            <MapPin className="h-3.5 w-3.5" aria-hidden /> {p.origin}
          </p>
        </div>
        <img className="dp-panel-thumb" src={DPP_ASSETS.tee.src} alt="" width={64} height={64} />
      </div>

      {interactive ? (
        <div className="dp-tabs" role="tablist" aria-label="Passport categories" onKeyDown={onKey}>
          {p.tabs.map((t, i) => (
            <button
              key={t.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${uid}-tab-${t.id}`}
              aria-selected={t.id === tab.id}
              aria-controls={`${uid}-panel`}
              tabIndex={t.id === tab.id ? 0 : -1}
              className={t.id === tab.id ? 'is-on' : ''}
              onClick={() => onSelect?.(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
      ) : (
        <div className="dp-tabs" aria-hidden>
          {p.tabs.slice(0, compact ? 3 : 5).map((t) => (
            <span key={t.id} className={t.id === tab.id ? 'is-on' : ''}>
              {t.label}
            </span>
          ))}
        </div>
      )}

      <dl
        key={tab.id}
        className="dp-rows"
        {...(interactive ? { role: 'tabpanel', id: `${uid}-panel`, 'aria-labelledby': `${uid}-tab-${tab.id}` } : {})}
      >
        {tab.rows.map((r) => (
          <div key={r.label} className="dp-row">
            <dt>{r.label}</dt>
            <dd>
              <span>{r.value}</span>
              {r.note && <em>{r.note}</em>}
            </dd>
            <ChevronRight className="dp-row-go h-4 w-4" aria-hidden />
          </div>
        ))}
      </dl>
      <p className="dp-panel-foot">Sample data · {p.id}</p>
    </div>
  );
}
