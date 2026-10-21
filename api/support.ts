/**
 * POST /api/support — Vercel Function (Web-standard handler) for the Support and Contact forms.
 *
 * Responds `{ ok: true, reference }` only after the email provider has accepted the message; every
 * other outcome is an explicit error, so the browser never shows "sent" for a request that was not.
 *
 * Configuration (Vercel → Project → Settings → Environment Variables; never in frontend code):
 *   RESEND_API_KEY      API key for Resend (https://resend.com), the email provider used here
 *   SUPPORT_EMAIL_TO    inbox that receives requests, e.g. the team's support mailbox
 *   SUPPORT_EMAIL_FROM  sender on a domain verified with Resend, e.g. "TierraTrace <support@…>"
 *   ALLOWED_ORIGINS     optional, comma-separated; defaults to the production origins below
 * If any required variable is missing the function answers 503 `unavailable` and the form offers
 * email instead — requests are never accepted and then dropped.
 */
import { LIMITS, looksAutomated, normalise, SUPPORT_CATEGORIES, validate, type Enquiry, type SubmitResult } from './_lib/validate.js';

declare const process: { env: Record<string, string | undefined> };

const DEFAULT_ORIGINS = ['https://www.tierratrace.in', 'https://tierratrace.in'];
const MAX_BODY_BYTES = 20_000;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

/*
 * Best-effort rate limit, per function instance. Serverless instances are short-lived and not shared,
 * so this slows bursts from one client but is not a guarantee — pair it with a Vercel Firewall
 * rate-limit rule on /api/support for production.
 */
const hits = new Map<string, number[]>();
function rateLimited(key: string, now = Date.now()) {
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

const json = (body: SubmitResult, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', 'x-content-type-options': 'nosniff' },
  });

function emailText(e: Enquiry, reference: string, received: string) {
  const category = SUPPORT_CATEGORIES.find((c) => c.id === e.category)?.label;
  const lines = [
    `Reference: ${reference}`,
    `Received: ${received}`,
    `Form: ${e.kind === 'support' ? 'Support request' : 'Contact / briefing request'}`,
    '',
    `Name: ${e.name}`,
    `Email: ${e.email}`,
    e.organisation && `Organisation: ${e.organisation}`,
    e.role && `Role: ${e.role}`,
    e.industry && `Industry: ${e.industry}`,
    category && `Category: ${category}`,
    e.module && `Product or module: ${e.module}`,
    e.subject && `Subject: ${e.subject}`,
    e.kind === 'support' && `Privacy notice acknowledged: ${e.privacyAck ? 'yes' : 'no'}`,
    '',
    'Message:',
    e.message,
  ];
  return lines.filter((l): l is string => typeof l === 'string').join('\n');
}

/** Sends through Resend's REST API. Plain text only, so submitted content can never inject markup. */
async function sendEmail(e: Enquiry, reference: string) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.SUPPORT_EMAIL_TO;
  const from = process.env.SUPPORT_EMAIL_FROM;
  if (!key || !to || !from) return 'unconfigured' as const;

  const subject = `[${reference}] ${e.kind === 'support' ? e.subject : 'Briefing request'} — ${e.name}`.slice(0, 200);
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 10_000);
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { authorization: `Bearer ${key}`, 'content-type': 'application/json' },
      body: JSON.stringify({ from, to: to.split(',').map((s) => s.trim()), reply_to: e.email, subject, text: emailText(e, reference, new Date().toISOString()) }),
      signal: controller.signal,
    });
    return res.ok ? ('sent' as const) : ('failed' as const);
  } catch {
    return 'failed' as const;
  } finally {
    clearTimeout(timer);
  }
}

export async function POST(request: Request): Promise<Response> {
  const allowed = (process.env.ALLOWED_ORIGINS?.split(',').map((s) => s.trim()).filter(Boolean)) ?? DEFAULT_ORIGINS;
  const origin = request.headers.get('origin');
  if (origin && !allowed.includes(origin)) return json({ ok: false, error: 'failed' }, 403);

  if (!(request.headers.get('content-type') ?? '').includes('application/json')) return json({ ok: false, error: 'failed' }, 415);
  const declared = Number(request.headers.get('content-length') ?? 0);
  if (declared > MAX_BODY_BYTES) return json({ ok: false, error: 'failed' }, 413);

  const ip = (request.headers.get('x-forwarded-for') ?? '').split(',')[0].trim() || request.headers.get('x-real-ip') || 'unknown';
  if (rateLimited(ip)) return json({ ok: false, error: 'rate_limited' }, 429);

  let raw: unknown;
  try {
    const text = await request.text();
    if (text.length > MAX_BODY_BYTES) return json({ ok: false, error: 'failed' }, 413);
    raw = JSON.parse(text);
  } catch {
    return json({ ok: false, error: 'failed' }, 400);
  }

  const enquiry = normalise(raw);
  // Automated submissions get the same generic answer as any failure — no hint about why.
  if (looksAutomated(enquiry)) return json({ ok: false, error: 'failed' }, 400);

  const fields = validate(enquiry);
  if (Object.keys(fields).length) return json({ ok: false, error: 'validation', fields }, 422);
  if (enquiry.message.length > LIMITS.message) return json({ ok: false, error: 'failed' }, 413);

  const reference = `TT-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${crypto.randomUUID().slice(0, 6).toUpperCase()}`;
  const outcome = await sendEmail(enquiry, reference);
  if (outcome === 'unconfigured') return json({ ok: false, error: 'unavailable' }, 503);
  if (outcome === 'failed') {
    // Log the fact, not the content: no personal data or secrets in logs.
    console.error(`support: email provider rejected or timed out (ref ${reference})`);
    return json({ ok: false, error: 'failed' }, 502);
  }
  return json({ ok: true, reference }, 200);
}

export function GET(): Response {
  return new Response('Method Not Allowed', { status: 405, headers: { allow: 'POST' } });
}
