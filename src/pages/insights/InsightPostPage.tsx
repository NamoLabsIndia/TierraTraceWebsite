import { Navigate, useParams } from 'react-router-dom';
import { ACTIVE_CATEGORIES, LEGACY_SLUGS } from '../../data/insights';
import InsightCategoryPage from './InsightCategoryPage';
import InsightNotFound from './InsightNotFound';

/**
 * Resolves /insights/:slug — a topic page (what each homepage card opens), an old card URL (redirected
 * to its topic), or a not-found page.
 */
export default function InsightPostPage() {
  const { slug = '' } = useParams<{ slug: string }>();
  const category = ACTIVE_CATEGORIES.find((c) => c.id === slug);
  if (category) return <InsightCategoryPage key={category.id} category={category} />;
  if (LEGACY_SLUGS[slug]) return <Navigate to={`/insights/${LEGACY_SLUGS[slug]}`} replace />;
  return <InsightNotFound />;
}
