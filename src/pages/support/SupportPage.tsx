import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, BookOpen, Boxes, Building2, KeyRound, LifeBuoy, MessageSquare, Wrench } from 'lucide-react';
import { SUPPORT_CATEGORIES } from '../../../api/_lib/validate';
import { usePageMeta } from '../../lib/usePageMeta';
import { CONTACT_EMAIL } from '../../lib/submitEnquiry';
import { InView, Words } from '../../lib/motion';
import { Pill } from '../home/sections/shared';
import { SupportForm } from './SupportForm';
import '../home/sections/sections.css';
import './support.css';

const CARDS = [
  { id: 'product', icon: Boxes, title: 'Product support', body: 'Questions about TierraTrace products and features.', help: '/help/what-is-tierratrace' },
  { id: 'technical', icon: Wrench, title: 'Technical support', body: 'Technical issues, integrations, API questions and implementation problems.', help: '/docs/troubleshooting' },
  { id: 'implementation', icon: Building2, title: 'Implementation assistance', body: 'Configuration, onboarding and enterprise deployment.', help: '/docs/getting-started' },
  { id: 'documentation', icon: BookOpen, title: 'Documentation', body: 'Guides, references and technical resources.', link: '/docs' },
  { id: 'account', icon: KeyRound, title: 'Account and access', body: 'Access to a TierraTrace workspace. This website has no sign-in of its own.', help: '/help/website-problems' },
  { id: 'general', icon: MessageSquare, title: 'General enquiries', body: 'Anything else about TierraTrace.', help: '/contact' },
] as const;

const valid = (c: string | null) => (c && SUPPORT_CATEGORIES.some((x) => x.id === c) ? c : '');

export default function SupportPage() {
  usePageMeta({
    title: 'TierraTrace Support | Product and Technical Assistance',
    description: 'Get assistance with TierraTrace, explore product resources, or contact our team for technical and implementation support.',
    path: '/support',
  });
  const [params] = useSearchParams();
  const [category, setCategory] = useState(valid(params.get('category')));

  const choose = (id: string) => {
    setCategory(id);
    document.getElementById('support-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="st">
      <header className="st-hero sx">
        <nav aria-label="Breadcrumb" className="st-crumbs">
          <Link to="/">Home</Link> <span aria-hidden>/</span> <span aria-current="page">Support</span>
        </nav>
        <Pill>Support</Pill>
        <h1 className="st-title">
          <Words as="span" text="How Can We Help?" />
        </h1>
        <InView as="p" className="st-lead m-rise" delay={140}>
          Get assistance with TierraTrace, explore product resources, or contact our team for technical and implementation support.
        </InView>
        <InView className="st-actions m-rise" delay={220}>
          <a
            href="#support-form"
            className="st-btn"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('support-form')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact Support <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
          <Link to="/docs" className="st-btn st-btn--ghost">
            Explore Documentation
          </Link>
        </InView>
      </header>

      <section className="st-sec sx" aria-labelledby="st-cats">
        <h2 id="st-cats" className="st-h2">
          Choose a topic
        </h2>
        <ul className="st-cards">
          {CARDS.map((c) => (
            <li key={c.id}>
              <c.icon className="st-card-icon" strokeWidth={1.6} aria-hidden />
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <div className="st-card-actions">
                {'link' in c ? (
                  <Link to={c.link} className="st-link">
                    Browse documentation <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                ) : (
                  <>
                    <button type="button" className="st-link" onClick={() => choose(c.id)}>
                      Contact us about this <ArrowRight className="h-4 w-4" aria-hidden />
                    </button>
                    <Link to={c.help} className="st-link st-link--muted">
                      Related help
                    </Link>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="st-sec st-sec--tint sx" aria-labelledby="st-guide">
        <h2 id="st-guide" className="st-h2">
          Before you write
        </h2>
        <div className="st-guide">
          <div>
            <h3>Include</h3>
            <ul>
              <li>The product, module or page concerned.</li>
              <li>What you were doing, what you expected and what happened.</li>
              <li>The exact text of any error message.</li>
              <li>Whether it happens every time, and since when.</li>
            </ul>
          </div>
          <div>
            <h3>For a technical problem</h3>
            <ol>
              <li>Start from a clear point (for example, “on the passport page”).</li>
              <li>List one action per step.</li>
              <li>Describe the result after the last step.</li>
              <li>Say whether another browser or colleague sees the same.</li>
            </ol>
          </div>
          <div className="st-guide-warn">
            <h3>Never include</h3>
            <ul>
              <li>Passwords, API keys, private keys, access tokens or one-time codes. We will never ask for them.</li>
              <li>Personal data that isn’t needed to resolve the issue.</li>
            </ul>
          </div>
        </div>
        <p className="st-more">
          More guidance: <Link to="/help/contacting-support-effectively">Contacting support effectively</Link> · <Link to="/help">Help Center</Link>
        </p>
      </section>

      <section id="support-form" className="st-sec st-formsec sx" aria-labelledby="st-form-title">
        <div className="st-formsec-copy">
          <LifeBuoy className="st-card-icon" strokeWidth={1.6} aria-hidden />
          <h2 id="st-form-title" className="st-h2">
            Send a support request
          </h2>
          <p className="st-lead">Every field except Organisation and Product is required. We’ll reply to the email address you give.</p>
          <p className="st-lead">
            Prefer email? Write to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        </div>
        <div className="st-panel">
          <SupportForm category={category} onCategory={setCategory} />
        </div>
      </section>
    </div>
  );
}
