import type { Enquiry, SubmitResult } from '../../api/_lib/validate';
import { FOOTER } from '../data/siteContent';

/** Same-origin Vercel Function by default; override with VITE_SUPPORT_ENDPOINT (a URL, never a secret). */
const ENDPOINT = (import.meta.env.VITE_SUPPORT_ENDPOINT as string | undefined) || '/api/support';

/** The only verified company inbox (shown in the footer). Used for the email fallback. */
export const CONTACT_EMAIL = FOOTER.contact.email;

/**
 * Posts an enquiry. Resolves to the server's answer; any network problem, timeout or non-JSON response
 * (for example, the function not being deployed) becomes `unavailable` or `failed` — never success.
 */
export async function submitEnquiry(e: Enquiry): Promise<SubmitResult> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15_000);
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(e),
      signal: controller.signal,
    });
    const body = (await res.json().catch(() => null)) as SubmitResult | null;
    if (body && typeof body === 'object' && 'ok' in body) return body;
    return { ok: false, error: res.status === 404 || res.status === 503 ? 'unavailable' : 'failed' };
  } catch {
    return { ok: false, error: 'unavailable' };
  } finally {
    clearTimeout(timer);
  }
}

/** A mailto: link carrying the visitor's own text, so nothing typed is lost if online sending fails. */
export function mailtoFor(e: Enquiry) {
  const subject = e.subject || (e.kind === 'contact' ? 'Briefing request' : 'Support request');
  const body = [
    e.message,
    '',
    `— ${e.name}${e.organisation ? `, ${e.organisation}` : ''}`,
    e.category ? `Category: ${e.category}` : '',
    e.module ? `Product or module: ${e.module}` : '',
  ]
    .filter((l, i) => l || i === 1)
    .join('\n');
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
