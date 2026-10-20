import { useId, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { STANDARDS, type Standard } from '../../../data/siteContent';
import { InView, Words } from '../../../lib/motion';
import { SmartLink } from '../../../components/ui';
import { Pill } from './shared';

/** Reporting frameworks grid; selecting a standard opens a short factual note beneath the grid. */
export function StandardsSection() {
  const [selected, setSelected] = useState<string | null>(null);
  const panelId = useId();
  const current = STANDARDS.items.find((s) => s.id === selected);

  return (
    <section id={STANDARDS.id} className="st sx" aria-labelledby="standards-title">
      <div className="st-intro">
        <div>
          <Pill>Standards</Pill>
          <Words as="h2" text={STANDARDS.headline} id="standards-title" className="st-title" />
        </div>
        <InView as="p" className="st-lead m-rise" delay={150}>
          {STANDARDS.intro}
        </InView>
      </div>

      <InView as="ul" className="st-grid m-rise" delay={100}>
        {STANDARDS.items.map((s) => (
          <StandardCard
            key={s.id}
            standard={s}
            selected={s.id === selected}
            panelId={panelId}
            onToggle={() => setSelected((v) => (v === s.id ? null : s.id))}
          />
        ))}
      </InView>

      <div id={panelId} className="st-detail" aria-live="polite" hidden={!current}>
        {current && (
          <div className="st-detail-inner">
            <div>
              <p className="st-detail-meta">
                <span>{current.abbreviation}</span>
                {current.region}
              </p>
              <p className="st-detail-name">{current.fullName}</p>
              {current.description && <p className="st-detail-body">{current.description}</p>}
              {current.destination && (
                <SmartLink target={current.destination} className="st-detail-link">
                  Related: TierraTrace Passport <ArrowRight className="h-4 w-4" aria-hidden />
                </SmartLink>
              )}
            </div>
            <button type="button" className="st-close" onClick={() => setSelected(null)} aria-label="Close details">
              <X className="h-4 w-4" aria-hidden />
            </button>
          </div>
        )}
      </div>

      <p className="st-note">{STANDARDS.note}</p>
    </section>
  );
}

function StandardCard({
  standard: s,
  selected,
  panelId,
  onToggle,
}: {
  standard: Standard;
  selected: boolean;
  panelId: string;
  onToggle: () => void;
}) {
  return (
    <li>
      <button
        type="button"
        className={`st-card ${selected ? 'is-selected' : ''}`}
        aria-expanded={selected}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="st-abbr">{s.abbreviation}</span>
        <span className="st-name">{s.fullName}</span>
      </button>
    </li>
  );
}
