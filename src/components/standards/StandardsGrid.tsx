import { useId, useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  Building2,
  Cloud,
  Factory,
  Flame,
  Footprints,
  Gauge,
  Handshake,
  Scale,
  FileText,
  Globe2,
  Landmark,
  Layers,
  Leaf,
  Package,
  ShieldCheck,
  Sprout,
  Target,
  X,
  type LucideIcon,
} from 'lucide-react';
import type { Standard } from '../../data/siteContent';
import { InView } from '../../lib/motion';
import { SmartLink } from '../ui';
import './standards-grid.css';

/** Generic line icons — never the frameworks' official marks. */
export const STANDARD_ICONS: Record<string, LucideIcon> = {
  csrd: Landmark,
  gri: Globe2,
  issb: BarChart3,
  brsr: Building2,
  eudr: Leaf,
  espr: Package,
  tcfd: Layers,
  cdp: Cloud,
  sasb: FileText,
  sfdr: ShieldCheck,
  tnfd: Sprout,
  'un-sdgs': Target,
  cbam: Factory,
  csddd: Handshake,
  'ghg-protocol': Flame,
  'sec-climate': Scale,
  'ca-sb253': Gauge,
  'iso-14064': Gauge,
  'iso-14067': Footprints,
};

/**
 * Grid of reporting frameworks; selecting one opens a short factual note beneath the grid.
 * `variant="icons"` adds a generic icon and arrow per card (Studio page).
 */
export function StandardsGrid({
  items,
  note,
  variant = 'plain',
  initialSelected = null,
}: {
  items: Standard[];
  note?: string;
  variant?: 'plain' | 'icons';
  initialSelected?: string | null;
}) {
  const [selected, setSelected] = useState<string | null>(initialSelected);
  const panelId = useId();
  const current = items.find((s) => s.id === selected);

  return (
    <>
      <InView as="ul" className={`st-grid m-stagger ${variant === 'icons' ? 'st-grid--icons' : ''}`} delay={100}>
        {items.map((s) => (
          <StandardCard
            key={s.id}
            standard={s}
            variant={variant}
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
                  {current.destinationLabel ?? 'Learn more'} <ArrowRight className="h-4 w-4" aria-hidden />
                </SmartLink>
              )}
            </div>
            <button type="button" className="st-close" onClick={() => setSelected(null)} aria-label="Close details">
              <X className="h-4 w-4" aria-hidden />
            </button>
          </div>
        )}
      </div>

      {note && <p className="st-note">{note}</p>}
    </>
  );
}

function StandardCard({
  standard: s,
  variant,
  selected,
  panelId,
  onToggle,
}: {
  standard: Standard;
  variant: 'plain' | 'icons';
  selected: boolean;
  panelId: string;
  onToggle: () => void;
}) {
  const Icon = STANDARD_ICONS[s.id] ?? FileText;
  return (
    <li>
      <button
        type="button"
        className={`st-card ${selected ? 'is-selected' : ''}`}
        aria-expanded={selected}
        aria-controls={panelId}
        onClick={onToggle}
      >
        {variant === 'icons' && (
          <span className="st-icon" aria-hidden>
            <Icon className="h-[18px] w-[18px]" strokeWidth={1.7} />
          </span>
        )}
        {variant === 'icons' ? (
          <span className="st-text">
            <span className="st-abbr">{s.abbreviation}</span>
            <span className="st-name">{s.fullName}</span>
          </span>
        ) : (
          <>
            <span className="st-abbr">{s.abbreviation}</span>
            <span className="st-name">{s.fullName}</span>
          </>
        )}
        {variant === 'icons' && <ArrowRight className="st-arrow h-4 w-4" aria-hidden />}
      </button>
    </li>
  );
}
