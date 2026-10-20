import {
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
  type LucideIcon,
} from 'lucide-react';
import type { Standard } from '../../data/siteContent';
import { InView } from '../../lib/motion';
import './standards-grid.css';

/** Generic line icons — never the frameworks' official marks. Used by the Studio framework carousel. */
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

/** Grid of reporting frameworks as static information cards (no interaction). */
export function StandardsGrid({ items, note }: { items: Standard[]; note?: string }) {
  return (
    <>
      <InView as="ul" className="st-grid m-stagger" delay={100}>
        {items.map((s) => (
          <li key={s.id} className="st-card">
            <span className="st-abbr">{s.abbreviation}</span>
            <span className="st-name">{s.fullName}</span>
            {s.region && <span className="st-region">{s.region}</span>}
          </li>
        ))}
      </InView>
      {note && <p className="st-note">{note}</p>}
    </>
  );
}
