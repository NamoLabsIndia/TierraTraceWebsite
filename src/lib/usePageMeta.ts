import { useEffect } from 'react';

export const SITE_URL = 'https://www.tierratrace.in';


type Meta = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
  jsonLd?: object;
};

function setMeta(attr: 'name' | 'property', key: string, value: string | null) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (value === null) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    el.dataset.insights = '';
    document.head.appendChild(el);
  }
  el.content = value;
}

/**
 * Title, description, canonical, Open Graph and optional JSON-LD for an Insights page. The site uses hash
 * routing, so canonical URLs include the hash route; tags added here are removed when the page unmounts.
 */
export function usePageMeta({ title, description, path, image, noindex, jsonLd }: Meta) {
  useEffect(() => {
    const prevTitle = document.title;
    const desc = document.head.querySelector<HTMLMetaElement>('meta[name="description"]');
    const prevDesc = desc?.content;
    const url = `${SITE_URL}/#${path}`;
    document.title = title;
    if (desc) desc.content = description;
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:type', jsonLd ? 'article' : 'website');
    setMeta('property', 'og:image', image ? new URL(image, window.location.origin).href : null);
    setMeta('name', 'robots', noindex ? 'noindex' : null);
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const createdLink = !link;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = url;
    let script: HTMLScriptElement | null = null;
    if (jsonLd) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
    return () => {
      document.title = prevTitle;
      if (desc && prevDesc !== undefined) desc.content = prevDesc;
      document.head.querySelectorAll('meta[data-insights]').forEach((m) => m.remove());
      if (createdLink) link?.remove();
      script?.remove();
    };
  }, [title, description, path, image, noindex, jsonLd]);
}

