import { useState, type FormEvent } from 'react';
import { ArrowRight, CircleCheck, Mail, Globe } from 'lucide-react';
import { Container, Reveal, SectionHeading } from '../../components/ui';

const STEPS = [
  ['01 · Discover', 'Product & data-model scoping', 'We analyze your supply chain data and define the passport schema tailored to your product requirements.'],
  ['02 · Design', 'Passport schema, partner onboarding plan', 'We design the end-to-end data flow and establish verification protocols for your suppliers.'],
  ['03 · Deploy', 'Live passports across pilot line', 'We integrate with existing ERPs and issue live passports for your pilot product line.'],
  ['04 · Scale', 'Rollout across sites and categories', 'Once the pilot succeeds, we automate issuance and scale across all categories and facilities.'],
];

export function Pilot() {
  return (
    <section id="pilot" className="scroll-mt-28 py-24 sm:py-32">
      <Container>
        <div className="rounded-[32px] bg-tt-ink px-6 py-14 text-white sm:px-12 sm:py-20">
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-tt-green">Pilot program</p>
          <h2 className="mt-4 max-w-[720px] text-[34px] font-bold leading-[1.1] tracking-[-0.02em] text-balance sm:text-[48px]">
            Ship your first product passport in 12 weeks.
          </h2>
          <p className="mt-5 max-w-[620px] text-[18px] leading-relaxed text-white/70">
            A dedicated TierraTrace team pairs with yours — from a single product line to a full portfolio pilot with 3+ tiers of your supply chain.
          </p>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(([k, t, d], i) => (
              <Reveal as="li" key={k} delay={i * 60}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-[13px] font-semibold text-tt-green">{k}</p>
                  <p className="mt-2 text-[17px] font-semibold">{t}</p>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/60">{d}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="tt-press mt-10 inline-flex h-14 items-center gap-2 rounded-full bg-tt-green px-7 text-[17px] font-semibold text-white hover:bg-tt-green-600"
          >
            Apply for pilot <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </Container>
    </section>
  );
}

const INDUSTRY_OPTIONS = ['Steel & Aluminium', 'Textiles', 'Furniture', 'Tires', 'Chemicals', 'Paints & Lubricants', 'ICT', 'Electronics', 'Government / Regulator', 'Other'];

export function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Front-end only for now — wire to the real endpoint when integrating.
    setSent(true);
  };
  const field =
    'h-12 w-full rounded-2xl border border-tt-border bg-white px-4 text-[16px] outline-none transition-[border-color,box-shadow] duration-200 focus:border-tt-green focus:ring-4 focus:ring-tt-green/15';

  return (
    <section id="contact" className="scroll-mt-28 pb-24 sm:pb-32">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build your product"
            accent="passport strategy."
            lead="Tell us about your products, your supply chain and the regulations you're preparing for. A specialist will reach out within one business day."
          />
          <ul className="mt-8 space-y-3 text-[16px]">
            <li className="flex items-center gap-2.5">
              <Mail className="h-5 w-5 text-tt-green-ink" aria-hidden /> info@namolabs.in
            </li>
            <li className="flex items-center gap-2.5">
              <Globe className="h-5 w-5 text-tt-green-ink" aria-hidden />
              <a href="https://www.namolabs.in/" className="hover:underline">
                www.namolabs.in
              </a>
            </li>
          </ul>
        </div>

        <Reveal delay={60}>
          <div className="rounded-[28px] border border-tt-border bg-white p-6 shadow-[0_30px_80px_-40px_rgba(8,12,15,0.3)] sm:p-8">
            {sent ? (
              <div className="tt-swap-enter flex min-h-[420px] flex-col items-center justify-center text-center">
                <CircleCheck className="h-12 w-12 text-tt-green" aria-hidden />
                <p className="mt-4 text-[22px] font-semibold">Thanks — we'll be in touch.</p>
                <p className="mt-2 text-[16px] text-tt-muted">A specialist will reach out within one business day.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
                {[
                  ['name', 'Full name', 'text', 'name'],
                  ['email', 'Work email', 'email', 'email'],
                  ['company', 'Company', 'text', 'organization'],
                  ['role', 'Role', 'text', 'organization-title'],
                ].map(([id, label, type, ac]) => (
                  <label key={id} className="block text-[14px] font-medium">
                    {label}
                    <input id={id} name={id} type={type} autoComplete={ac} required={id !== 'role'} className={`${field} mt-1.5`} />
                  </label>
                ))}
                <label className="block text-[14px] font-medium sm:col-span-2">
                  Industry
                  <select name="industry" className={`${field} mt-1.5`} defaultValue="">
                    <option value="" disabled>
                      Select your industry
                    </option>
                    {INDUSTRY_OPTIONS.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </label>
                <label className="block text-[14px] font-medium sm:col-span-2">
                  How can we help?
                  <textarea name="message" rows={4} className={`${field} mt-1.5 h-auto py-3`} />
                </label>
                <button
                  type="submit"
                  className="tt-press inline-flex h-14 items-center justify-center gap-2 rounded-full bg-tt-ink text-[17px] font-semibold text-white hover:bg-black sm:col-span-2"
                >
                  Request a briefing <ArrowRight className="h-4 w-4" aria-hidden />
                </button>
                <p className="text-[13px] text-tt-muted sm:col-span-2">By submitting you agree to our privacy policy.</p>
              </form>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
