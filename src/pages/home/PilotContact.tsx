import { useRef, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CircleCheck } from 'lucide-react';
import { InView, Words } from '../../lib/motion';
import { INDUSTRIES, validate, type Enquiry, type FieldErrors } from '../../../api/_lib/validate';
import { CONTACT_EMAIL, mailtoFor, submitEnquiry } from '../../lib/submitEnquiry';
import { Pill } from './sections/shared';
import './sections/sections.css';
import '../contact/contact.css';

const STEPS = [
  ['01', 'Discover', 'Product & data-model scoping', 'We analyze your supply chain data and define the passport schema tailored to your product requirements.'],
  ['02', 'Design', 'Passport schema, partner onboarding plan', 'We design the end-to-end data flow and establish verification protocols for your suppliers.'],
  ['03', 'Deploy', 'Live passports across pilot line', 'We integrate with existing ERPs and issue live passports for your pilot product line.'],
  ['04', 'Scale', 'Rollout across sites and categories', 'Once the pilot succeeds, we automate issuance and scale across all categories and facilities.'],
];

/** Pilot programme: a warm panel with the four phases set out editorially, like the homepage frames. */
export function Pilot() {
  return (
    <section id="pilot" className="pc-pilot sx" aria-labelledby="pilot-title">
      <div className="pc-panel">
        <div className="pc-pilot-head">
          <div>
            <Pill>Pilot program</Pill>
            <Words as="h2" text="Ship your first product passport in 12 weeks." id="pilot-title" className="pc-title" />
          </div>
          <div className="pc-pilot-side">
            <InView as="p" className="pc-lead m-rise" delay={160}>
              A dedicated TierraTrace team pairs with yours — from a single product line to a full portfolio pilot with 3+ tiers of your supply chain.
            </InView>
            <InView className="m-rise" delay={240}>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="pc-btn"
              >
                Apply for pilot <ArrowRight className="pc-btn-arrow h-5 w-5" aria-hidden />
              </a>
            </InView>
          </div>
        </div>

        <InView as="ol" className="pc-steps m-stagger" delay={120}>
          {STEPS.map(([n, phase, title, body]) => (
            <li key={n}>
              <span className="pc-step-n">{n}</span>
              <p className="pc-step-phase">{phase}</p>
              <h3>{title}</h3>
              <p className="pc-step-body">{body}</p>
            </li>
          ))}
        </InView>
      </div>
    </section>
  );
}

const FIELDS = [
  ['name', 'Full name', 'text', 'name'],
  ['email', 'Work email', 'email', 'email'],
  ['organisation', 'Company', 'text', 'organization'],
  ['role', 'Role', 'text', 'organization-title'],
] as const;

type Status = { s: 'idle' } | { s: 'sending' } | { s: 'sent'; reference: string } | { s: 'error'; kind: 'rate_limited' | 'unavailable' | 'failed' };
const EMPTY = { name: '', email: '', organisation: '', role: '', industry: '', message: '' };

/** Contact: editorial heading and details on the left, the briefing form in a soft panel on the right. */
export function Contact() {
  const [v, setV] = useState(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>({ s: 'idle' });
  const [honeypot, setHoneypot] = useState('');
  const started = useRef(Date.now());
  const formRef = useRef<HTMLFormElement>(null);

  const enquiry = (): Enquiry => ({
    kind: 'contact',
    name: v.name.trim(),
    email: v.email.trim(),
    organisation: v.organisation.trim() || undefined,
    role: v.role.trim() || undefined,
    industry: v.industry || undefined,
    message: v.message.trim(),
    website: honeypot || undefined,
    elapsedMs: Date.now() - started.current,
  });
  const set = (k: keyof typeof EMPTY, value: string) => {
    setV((p) => ({ ...p, [k]: value }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };
  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (status.s === 'sending') return;
    const e = enquiry();
    const fieldErrors = validate(e);
    // the company field is required on this form
    if (!e.organisation) fieldErrors.organisation = 'Enter your company.';
    if (Object.keys(fieldErrors).length) {
      setErrors(fieldErrors);
      formRef.current?.querySelector<HTMLElement>(`[name="${Object.keys(fieldErrors)[0]}"]`)?.focus();
      return;
    }
    setStatus({ s: 'sending' });
    const res = await submitEnquiry(e);
    if (res.ok) setStatus({ s: 'sent', reference: res.reference });
    else if (res.error === 'validation') {
      setErrors(res.fields);
      setStatus({ s: 'idle' });
    } else setStatus({ s: 'error', kind: res.error });
  };
  const a11y = (k: keyof FieldErrors) => ({ 'aria-invalid': Boolean(errors[k]) || undefined, 'aria-describedby': errors[k] ? `cf-${k}-err` : undefined });
  const err = (k: keyof FieldErrors) => (errors[k] ? <span className="pc-err" id={`cf-${k}-err`}>{errors[k]}</span> : null);

  return (
    <section id="contact" className="pc-contact sx" aria-labelledby="contact-title">
      <div className="pc-contact-copy">
        <Pill>Contact</Pill>
        <h1 id="contact-title" className="pc-title pc-title--lg">
          <Words as="span" text="Let's build your product" className="pc-line" />
          <Words as="span" text="passport strategy." className="pc-line pc-accent" delay={140} />
        </h1>
        <InView as="p" className="pc-lead m-rise" delay={200}>
          Tell us about your products, your supply chain and the regulations you're preparing for. A specialist will reach out within one business day.
        </InView>
        <InView as="ul" className="pc-details m-stagger" delay={280}>
          <li>
            <span>Email</span>
            <a href="mailto:info@namolabs.in">info@namolabs.in</a>
          </li>
          <li>
            <span>Web</span>
            <a href="https://www.namolabs.in/" target="_blank" rel="noopener noreferrer">
              www.namolabs.in <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </li>
        </InView>
      </div>

      <InView className="pc-form-panel m-rise" delay={120}>
        {status.s === 'sent' ? (
          <div className="pc-sent tt-swap-enter" role="status">
            <CircleCheck className="h-11 w-11" aria-hidden />
            <p className="pc-sent-title">Thanks — your request has been received.</p>
            <p className="pc-lead">
              Reference <b>{status.reference}</b>. A specialist will reach out within one business day.
            </p>
          </div>
        ) : (
          <form ref={formRef} onSubmit={onSubmit} noValidate className="pc-form" aria-busy={status.s === 'sending'}>
            {status.s === 'error' && (
              <div className="pc-alert" role="alert">
                <p>
                  {status.kind === 'rate_limited'
                    ? 'Too many requests from your connection. Please wait ten minutes and try again — your details are still here.'
                    : status.kind === 'unavailable'
                      ? 'Online sending isn’t available right now, so nothing was sent. You can email your request instead — it opens with your text filled in.'
                      : 'We couldn’t send your request, so nothing was sent. Please try again, or email it to us.'}
                </p>
                {status.kind !== 'rate_limited' && (
                  <a href={mailtoFor(enquiry())} className="pc-alert-link">
                    Email {CONTACT_EMAIL}
                  </a>
                )}
              </div>
            )}
            {FIELDS.map(([id, label, type, ac]) => (
              <label key={id} className="pc-field">
                <span>
                  {label}
                  {id === 'role' && <em> (optional)</em>}
                </span>
                <input id={id} name={id} type={type} autoComplete={ac} value={v[id]} onChange={(e) => set(id, e.target.value)} {...a11y(id)} />
                {err(id)}
              </label>
            ))}
            <label className="pc-field pc-field--wide">
              <span>
                Industry <em>(optional)</em>
              </span>
              <select name="industry" value={v.industry} onChange={(e) => set('industry', e.target.value)} {...a11y('industry')}>
                <option value="">Select your industry</option>
                {INDUSTRIES.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
              {err('industry')}
            </label>
            <label className="pc-field pc-field--wide">
              <span>How can we help?</span>
              <textarea name="message" rows={4} value={v.message} onChange={(e) => set('message', e.target.value)} {...a11y('message')} />
              {err('message')}
            </label>
            <div className="pc-hp" aria-hidden="true">
              <label>
                Leave this field empty
                <input name="website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
              </label>
            </div>
            <div className="pc-form-foot">
              <button type="submit" className="pc-btn" disabled={status.s === 'sending'}>
                {status.s === 'sending' ? 'Sending…' : 'Request a briefing'}
                {status.s !== 'sending' && <ArrowRight className="pc-btn-arrow h-5 w-5" aria-hidden />}
              </button>
              <p>
                See how we handle your information in our <Link to="/privacy">Privacy Policy</Link>.
              </p>
            </div>
          </form>
        )}
      </InView>
    </section>
  );
}
