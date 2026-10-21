import { useState, type FormEvent } from 'react';
import { ArrowRight, ArrowUpRight, CircleCheck } from 'lucide-react';
import { InView, Words } from '../../lib/motion';
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

const INDUSTRY_OPTIONS = ['Steel & Aluminium', 'Textiles', 'Furniture', 'Tires', 'Chemicals', 'Paints & Lubricants', 'ICT', 'Electronics', 'Government / Regulator', 'Other'];

const FIELDS = [
  ['name', 'Full name', 'text', 'name'],
  ['email', 'Work email', 'email', 'email'],
  ['company', 'Company', 'text', 'organization'],
  ['role', 'Role', 'text', 'organization-title'],
] as const;

/** Contact: editorial heading and details on the left, the briefing form in a soft panel on the right. */
export function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Front-end only for now — wire to the real endpoint when integrating.
    setSent(true);
  };

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
        {sent ? (
          <div className="pc-sent tt-swap-enter" role="status">
            <CircleCheck className="h-11 w-11" aria-hidden />
            <p className="pc-sent-title">Thanks — we'll be in touch.</p>
            <p className="pc-lead">A specialist will reach out within one business day.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="pc-form">
            {FIELDS.map(([id, label, type, ac]) => (
              <label key={id} className="pc-field">
                <span>
                  {label}
                  {id === 'role' && <em> (optional)</em>}
                </span>
                <input id={id} name={id} type={type} autoComplete={ac} required={id !== 'role'} />
              </label>
            ))}
            <label className="pc-field pc-field--wide">
              <span>Industry</span>
              <select name="industry" defaultValue="">
                <option value="" disabled>
                  Select your industry
                </option>
                {INDUSTRY_OPTIONS.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>
            <label className="pc-field pc-field--wide">
              <span>How can we help?</span>
              <textarea name="message" rows={4} />
            </label>
            <div className="pc-form-foot">
              <button type="submit" className="pc-btn">
                Request a briefing <ArrowRight className="pc-btn-arrow h-5 w-5" aria-hidden />
              </button>
              <p>By submitting you agree to our privacy policy.</p>
            </div>
          </form>
        )}
      </InView>
    </section>
  );
}
