import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { usePageMeta } from '../../lib/usePageMeta';
import './support.css';

/** Shown for unknown Help, Docs or legal URLs; marked noindex. */
export function NotFoundPanel({ area, back }: { area: string; back: string }) {
  usePageMeta({ title: `Page not found | TierraTrace ${area}`, description: `This ${area} page does not exist.`, path: back, noindex: true });
  return (
    <section className="st-404 sx">
      <p className="st-kicker">404</p>
      <h1 className="st-art-title">We couldn’t find that page.</h1>
      <p className="st-lead">It may have moved, or the link may be mistyped.</p>
      <div className="st-actions">
        <Link to={back} className="st-btn">
          Back to {area} <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
        <Link to="/support" className="st-btn st-btn--ghost">
          Support
        </Link>
      </div>
    </section>
  );
}
