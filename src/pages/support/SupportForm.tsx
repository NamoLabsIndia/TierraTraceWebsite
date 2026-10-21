import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CircleCheck, Mail, TriangleAlert } from 'lucide-react';
import { LIMITS, PRODUCT_MODULES, SUPPORT_CATEGORIES, validate, type Enquiry, type FieldErrors } from '../../../api/_lib/validate';
import { CONTACT_EMAIL, mailtoFor, submitEnquiry } from '../../lib/submitEnquiry';

type Status =
  | { s: 'idle' }
  | { s: 'sending' }
  | { s: 'sent'; reference: string }
  | { s: 'error'; kind: 'rate_limited' | 'unavailable' | 'failed' };

const EMPTY = { name: '', email: '', organisation: '', category: '', module: '', subject: '', message: '', privacyAck: false };

/** The support request form. Success is shown only when the server returns a reference. */
export function SupportForm({ category, onCategory }: { category: string; onCategory: (c: string) => void }) {
  const [v, setV] = useState({ ...EMPTY, category });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>({ s: 'idle' });
  const [honeypot, setHoneypot] = useState('');
  const started = useRef(Date.now());
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  // a category chosen elsewhere on the page (category cards, ?category=) flows into the form
  useEffect(() => setV((p) => ({ ...p, category })), [category]);

  const set = <K extends keyof typeof EMPTY>(k: K, value: (typeof EMPTY)[K]) => {
    setV((p) => ({ ...p, [k]: value }));
    if (errors[k as keyof FieldErrors]) setErrors((e) => ({ ...e, [k]: undefined }));
    if (k === 'category') onCategory(value as string);
  };

  const enquiry = (): Enquiry => ({
    kind: 'support',
    name: v.name.trim(),
    email: v.email.trim(),
    organisation: v.organisation.trim() || undefined,
    category: v.category || undefined,
    module: v.module || undefined,
    subject: v.subject.trim(),
    message: v.message.trim(),
    privacyAck: v.privacyAck,
    website: honeypot || undefined,
    elapsedMs: Date.now() - started.current,
  });

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (status.s === 'sending') return; // no double submits
    const e = enquiry();
    const fieldErrors = validate(e);
    if (Object.keys(fieldErrors).length) {
      setErrors(fieldErrors);
      const first = Object.keys(fieldErrors)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus({ s: 'sending' });
    const res = await submitEnquiry(e);
    if (res.ok) {
      setStatus({ s: 'sent', reference: res.reference });
    } else if (res.error === 'validation') {
      setErrors(res.fields);
      setStatus({ s: 'idle' });
    } else {
      setStatus({ s: 'error', kind: res.error });
    }
    requestAnimationFrame(() => statusRef.current?.focus());
  };

  if (status.s === 'sent') {
    return (
      <div className="st-sent" role="status" tabIndex={-1} ref={statusRef}>
        <CircleCheck className="h-10 w-10" aria-hidden />
        <h3>Your request has been received.</h3>
        <p>
          Reference <b>{status.reference}</b>. Please quote it if you write to us about this request. A copy of your request
          is with our team, and we will reply to {v.email}.
        </p>
        <button
          type="button"
          className="st-btn st-btn--ghost"
          onClick={() => {
            setV({ ...EMPTY, category: '' });
            setStatus({ s: 'idle' });
            started.current = Date.now();
          }}
        >
          Send another request
        </button>
      </div>
    );
  }

  const err = (k: keyof FieldErrors) =>
    errors[k] ? (
      <span className="st-err" id={`sf-${k}-err`}>
        {errors[k]}
      </span>
    ) : null;
  const a11y = (k: keyof FieldErrors, hint?: string) => ({
    'aria-invalid': Boolean(errors[k]) || undefined,
    'aria-describedby': [errors[k] ? `sf-${k}-err` : '', hint ?? ''].filter(Boolean).join(' ') || undefined,
  });
  const sending = status.s === 'sending';

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="st-form" aria-busy={sending}>
      {status.s === 'error' && (
        <div className="st-alert" role="alert" tabIndex={-1} ref={statusRef}>
          <TriangleAlert className="h-5 w-5" aria-hidden />
          <div>
            {status.kind === 'rate_limited' ? (
              <p>
                <b>Too many requests.</b> Several requests were sent from your connection in a short time. Please wait ten minutes and try again — your text is still here.
              </p>
            ) : status.kind === 'unavailable' ? (
              <p>
                <b>Online sending isn’t available right now.</b> Your request has not been sent. You can email it to us instead — the button opens your email app with your text filled in.
              </p>
            ) : (
              <p>
                <b>We couldn’t send your request.</b> Nothing was sent. Please try again, or email it to us.
              </p>
            )}
            {status.kind !== 'rate_limited' && (
              <a className="st-btn st-btn--ghost" href={mailtoFor(enquiry())}>
                <Mail className="h-4 w-4" aria-hidden /> Email {CONTACT_EMAIL}
              </a>
            )}
          </div>
        </div>
      )}

      <label className="st-field">
        <span>Full name</span>
        <input name="name" autoComplete="name" value={v.name} maxLength={LIMITS.name} onChange={(e) => set('name', e.target.value)} {...a11y('name')} />
        {err('name')}
      </label>
      <label className="st-field">
        <span>Business email</span>
        <input name="email" type="email" autoComplete="email" value={v.email} maxLength={LIMITS.email} onChange={(e) => set('email', e.target.value)} {...a11y('email')} />
        {err('email')}
      </label>
      <label className="st-field">
        <span>
          Organisation <em>(optional)</em>
        </span>
        <input name="organisation" autoComplete="organization" value={v.organisation} maxLength={LIMITS.organisation} onChange={(e) => set('organisation', e.target.value)} {...a11y('organisation')} />
        {err('organisation')}
      </label>
      <label className="st-field">
        <span>Support category</span>
        <select name="category" value={v.category} onChange={(e) => set('category', e.target.value)} {...a11y('category')}>
          <option value="" disabled>
            Choose a category
          </option>
          {SUPPORT_CATEGORIES.map((c) => (
            <option key={c.id} value={c.id}>
              {c.label}
            </option>
          ))}
        </select>
        {err('category')}
      </label>
      <label className="st-field st-field--wide">
        <span>
          Product or module <em>(optional)</em>
        </span>
        <select name="module" value={v.module} onChange={(e) => set('module', e.target.value)} {...a11y('module')}>
          <option value="">Choose if relevant</option>
          {PRODUCT_MODULES.map((m) => (
            <option key={m}>{m}</option>
          ))}
        </select>
        {err('module')}
      </label>
      <label className="st-field st-field--wide">
        <span>Subject</span>
        <input name="subject" value={v.subject} maxLength={LIMITS.subject} onChange={(e) => set('subject', e.target.value)} {...a11y('subject')} />
        {err('subject')}
      </label>
      <label className="st-field st-field--wide">
        <span>Description</span>
        <textarea
          name="message"
          rows={7}
          value={v.message}
          maxLength={LIMITS.message}
          onChange={(e) => set('message', e.target.value)}
          {...a11y('message', 'sf-message-hint')}
        />
        <small id="sf-message-hint" className="st-hint">
          What you were doing, what you expected, what happened, and any error message. Don’t include passwords or keys. {v.message.length}/{LIMITS.message}
        </small>
        {err('message')}
      </label>

      {/* honeypot: hidden from people and assistive tech; automated form-fillers tend to complete it */}
      <div className="st-hp" aria-hidden="true">
        <label>
          Leave this field empty
          <input name="website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
        </label>
      </div>

      <div className="st-field st-field--wide">
        <label className="st-check">
          <input type="checkbox" name="privacyAck" checked={v.privacyAck} onChange={(e) => set('privacyAck', e.target.checked)} {...a11y('privacyAck')} />
          <span>
            I have read how my information will be handled in the <Link to="/privacy">Privacy Policy</Link>.
          </span>
        </label>
        {err('privacyAck')}
      </div>

      <div className="st-form-foot">
        <button type="submit" className="st-btn" disabled={sending}>
          {sending ? 'Sending…' : 'Send request'} {!sending && <ArrowRight className="h-4 w-4" aria-hidden />}
        </button>
        <p>Attachments aren’t accepted through this form. If we need files, we’ll agree a secure way to share them.</p>
      </div>
    </form>
  );
}
