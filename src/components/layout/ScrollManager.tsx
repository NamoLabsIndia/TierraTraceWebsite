import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * New page → start at the top. `/?s=platform` → scroll to that section once the page renders
 * (used by nav links like "Platform" or "Contact sales" when clicked from a product page).
 */
export function ScrollManager() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    const target = new URLSearchParams(search).get('s');
    if (!target) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      return;
    }
    const id = window.setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
    return () => window.clearTimeout(id);
  }, [pathname, search]);
  return null;
}
