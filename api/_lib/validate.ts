/**
 * Shared enquiry schema — imported by the browser form (for instant feedback) and by the serverless
 * function (the authority). No dependencies, so it runs in both places unchanged.
 */

export const SUPPORT_CATEGORIES = [
  { id: 'product', label: 'Product support' },
  { id: 'technical', label: 'Technical support' },
  { id: 'implementation', label: 'Implementation assistance' },
  { id: 'documentation', label: 'Documentation' },
  { id: 'account', label: 'Account and access' },
  { id: 'general', label: 'General enquiry' },
] as const;

export const PRODUCT_MODULES = [
  'Not sure / not applicable',
  'TierraTrace Passport',
  'TierraTrace Trace',
  'TierraTrace Verify',
  'TierraTrace Carbon',
  'TierraTrace Studio',
  'TierraTrace Connect',
  'TierraTrace Insights',
  'This website',
] as const;

export const INDUSTRIES = ['Steel & Aluminium', 'Textiles', 'Furniture', 'Tires', 'Chemicals', 'Paints & Lubricants', 'ICT', 'Electronics', 'Government / Regulator', 'Other'] as const;

export const LIMITS = {
  name: 120,
  email: 254,
  organisation: 160,
  role: 120,
  subject: 160,
  message: 5000,
  messageMin: 20,
} as const;

export type EnquiryKind = 'support' | 'contact';

export type Enquiry = {
  kind: EnquiryKind;
  name: string;
  email: string;
  organisation?: string;
  role?: string;
  industry?: string;
  category?: string;
  module?: string;
  subject?: string;
  message: string;
  privacyAck?: boolean;
  /** honeypot: real visitors never see or fill this */
  website?: string;
  /** ms since the form was rendered; very fast submissions are treated as automated */
  elapsedMs?: number;
};

export type FieldErrors = Partial<Record<keyof Enquiry, string>>;

const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[a-z]{2,}$/i;

const str = (v: unknown) => (typeof v === 'string' ? v.trim() : '');

/** Normalises untrusted input into an Enquiry (unknown fields dropped, strings trimmed). */
export function normalise(input: unknown): Enquiry {
  const o = (input && typeof input === 'object' ? input : {}) as Record<string, unknown>;
  return {
    kind: o.kind === 'contact' ? 'contact' : 'support',
    name: str(o.name),
    email: str(o.email),
    organisation: str(o.organisation) || undefined,
    role: str(o.role) || undefined,
    industry: str(o.industry) || undefined,
    category: str(o.category) || undefined,
    module: str(o.module) || undefined,
    subject: str(o.subject) || undefined,
    message: str(o.message),
    privacyAck: o.privacyAck === true,
    website: str(o.website) || undefined,
    elapsedMs: typeof o.elapsedMs === 'number' && Number.isFinite(o.elapsedMs) ? o.elapsedMs : undefined,
  };
}

/** Field-level validation. Returns an empty object when valid. */
export function validate(e: Enquiry): FieldErrors {
  const err: FieldErrors = {};
  const tooLong = (k: keyof typeof LIMITS, v?: string) => (v && v.length > LIMITS[k] ? `Keep this under ${LIMITS[k]} characters.` : '');

  if (!e.name) err.name = 'Enter your full name.';
  else if (tooLong('name', e.name)) err.name = tooLong('name', e.name);

  if (!e.email) err.email = 'Enter your business email.';
  else if (e.email.length > LIMITS.email || !EMAIL_RE.test(e.email)) err.email = 'Enter a valid email address, like name@company.com.';

  if (tooLong('organisation', e.organisation)) err.organisation = tooLong('organisation', e.organisation);
  if (tooLong('role', e.role)) err.role = tooLong('role', e.role);

  if (e.kind === 'support') {
    if (!e.category || !SUPPORT_CATEGORIES.some((c) => c.id === e.category)) err.category = 'Choose a support category.';
    if (e.module && !(PRODUCT_MODULES as readonly string[]).includes(e.module)) err.module = 'Choose a product or module from the list.';
    if (!e.subject) err.subject = 'Add a short subject.';
    else if (tooLong('subject', e.subject)) err.subject = tooLong('subject', e.subject);
    if (!e.privacyAck) err.privacyAck = 'Please confirm you have read how we handle your information.';
  } else if (e.industry && !(INDUSTRIES as readonly string[]).includes(e.industry)) {
    err.industry = 'Choose an industry from the list.';
  }

  if (!e.message) err.message = e.kind === 'support' ? 'Describe the issue or question.' : 'Tell us briefly how we can help.';
  else if (e.kind === 'support' && e.message.length < LIMITS.messageMin) err.message = `Add a little more detail (at least ${LIMITS.messageMin} characters).`;
  else if (e.message.length > LIMITS.message) err.message = `Keep this under ${LIMITS.message} characters.`;

  return err;
}

/** Signals of automated submission. Kept separate from field errors so bots get no hints. */
export function looksAutomated(e: Enquiry) {
  return Boolean(e.website) || (e.elapsedMs !== undefined && e.elapsedMs < 2500);
}

/** Standard response shape from /api/support. */
export type SubmitResult =
  | { ok: true; reference: string }
  | { ok: false; error: 'validation'; fields: FieldErrors }
  | { ok: false; error: 'rate_limited' | 'unavailable' | 'failed' };
