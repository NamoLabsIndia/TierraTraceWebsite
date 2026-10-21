import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { usePageMeta } from './InsightsUI';
import './insights.css';

/** Unknown Insights URLs render this (marked noindex) instead of silently showing another page. */
export default function InsightNotFound() {
  usePageMeta({ title: 'Page not found | TierraTrace Insights', description: 'This Insights page does not exist.', path: '/insights', noindex: true });
  return (
    <div className="ins">
      <section className="ins-hero ins-404">
        <p className="ins-kicker">404</p>
        <h1>We couldn’t find that page.</h1>
        <p className="ins-lead">The article or topic may have moved, or the link may be mistyped.</p>
        <Link to="/insights" className="ins-btn">
          Go to Insights <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </section>
    </div>
  );
}
