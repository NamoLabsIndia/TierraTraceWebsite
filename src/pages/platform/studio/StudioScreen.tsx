import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  Bell,
  Check,
  CircleHelp,
  ClipboardCheck,
  Database,
  FileText,
  LayoutGrid,
  Search,
  Settings,
  Sparkles,
  Target,
} from 'lucide-react';
import logo from '../../../assets/tierratrace-logo.png';
import { STANDARDS } from '../../../data/siteContent';

/**
 * The TierraTrace Studio application shown inside the hero monitor. Rendered as real HTML at a fixed
 * design size and scaled to the screen, so it stays crisp at any width. All figures are illustrative
 * sample data and are labelled as such on screen.
 */

export const STEPS = ['Framework', 'Materiality', 'Data & Evidence', 'AI Draft', 'Review & Approve', 'Publish & Monitor'] as const;

const FRAMEWORK_IDS = ['csrd', 'gri', 'issb', 'eudr', 'espr', 'cdp'];
const FRAMEWORK_META: Record<string, { tags: string[]; group: 'Environmental' | 'Social' | 'Governance' }> = {
  csrd: { tags: ['ESG', 'EU', 'Mandatory'], group: 'Governance' },
  gri: { tags: ['ESG', 'Global', 'Voluntary'], group: 'Social' },
  issb: { tags: ['ESG', 'Global', 'Voluntary'], group: 'Governance' },
  eudr: { tags: ['Environment', 'EU', 'Mandatory'], group: 'Environmental' },
  espr: { tags: ['Environment', 'EU', 'Mandatory'], group: 'Environmental' },
  cdp: { tags: ['Environment', 'Global', 'Voluntary'], group: 'Environmental' },
};

const NAV = [
  { label: 'Overview', icon: LayoutGrid },
  { label: 'Reporting', icon: FileText, active: true },
  { label: 'Data & Evidence', icon: Database },
  { label: 'Materiality', icon: Target },
  { label: 'AI Draft', icon: Sparkles },
  { label: 'Review & Approve', icon: ClipboardCheck },
  { label: 'Analytics', icon: BarChart3 },
];

/** Fixed design size of the app; the monitor scales it to fit. */
const BASE = { w: 1200, h: 720 };

export function StudioScreen() {
  const host = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setScale(e.contentRect.width / BASE.w));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={host} className="sa-host">
      <div
        className="sa"
        style={{ width: BASE.w, height: BASE.h, transform: `scale(${scale})`, visibility: scale ? 'visible' : 'hidden' }}
      >
        <header className="sa-top">
          <div className="sa-brand">
            <img src={logo} alt="TierraTrace" width={360} height={163} />
            <span className="sa-product">Studio</span>
          </div>
          <div className="sa-search" aria-hidden>
            <Search className="h-4 w-4" />
            Search disclosures, evidence or frameworks
            <kbd>⌘K</kbd>
          </div>
          <div className="sa-top-right" aria-hidden>
            <Bell className="h-[18px] w-[18px]" />
            <span className="sa-ws">Sample workspace</span>
          </div>
        </header>

        <div className="sa-body">
          <aside className="sa-side" aria-hidden>
            <ul>
              {NAV.map((n) => (
                <li key={n.label} className={n.active ? 'is-active' : ''}>
                  <n.icon className="h-4 w-4" />
                  {n.label}
                </li>
              ))}
            </ul>
            <ul className="sa-side-foot">
              <li>
                <Settings className="h-4 w-4" />
                Settings
              </li>
              <li>
                <CircleHelp className="h-4 w-4" />
                Help
              </li>
            </ul>
          </aside>

          <main className="sa-main">
            <ol className="sa-steps" aria-label="Reporting workflow">
              {STEPS.map((label, i) => (
                <li key={label} className={i < step ? 'is-done' : i === step ? 'is-current' : ''}>
                  <button type="button" onClick={() => setStep(i)} aria-current={i === step ? 'step' : undefined}>
                    <span className="sa-dot">{i < step ? <Check className="h-3.5 w-3.5" /> : String(i + 1).padStart(2, '0')}</span>
                    <span className="sa-step-label">{label}</span>
                  </button>
                </li>
              ))}
            </ol>

            <div className="sa-panel" key={step}>
              <StepView step={step} onNext={() => setStep((s) => Math.min(STEPS.length - 1, s + 1))} />
            </div>

            <p className="sa-sample">Illustrative sample data</p>
          </main>
        </div>
      </div>
    </div>
  );
}

function StepHead({ step, title, body, onNext }: { step: number; title: string; body: string; onNext?: () => void }) {
  return (
    <div className="sa-head">
      <div>
        <p className="sa-kicker">
          Step {step + 1} of {STEPS.length}
        </p>
        <h3 className="sa-title">{title}</h3>
        <p className="sa-desc">{body}</p>
      </div>
      {onNext && (
        <button type="button" className="sa-next" onClick={onNext}>
          Continue to {STEPS[step + 1]} <ArrowRight className="h-4 w-4" aria-hidden />
        </button>
      )}
    </div>
  );
}

function StepView({ step, onNext }: { step: number; onNext: () => void }) {
  switch (step) {
    case 0:
      return <FrameworkStep onNext={onNext} />;
    case 1:
      return (
        <>
          <StepHead step={1} title="Assess material topics" body="Rate impact and financial materiality for each topic to scope the disclosures you need." onNext={onNext} />
          <div className="sa-table">
            <div className="sa-tr sa-th">
              <span>Topic</span>
              <span>Impact</span>
              <span>Financial</span>
              <span>Status</span>
            </div>
            {[
              ['Climate change', 4, 4, 'Material'],
              ['Pollution', 3, 2, 'Material'],
              ['Water & marine resources', 2, 2, 'Under review'],
              ['Biodiversity & ecosystems', 3, 1, 'Under review'],
              ['Own workforce', 3, 3, 'Material'],
              ['Business conduct', 2, 3, 'Material'],
            ].map(([t, a, b, s]) => (
              <div className="sa-tr" key={t as string}>
                <span className="sa-strong">{t}</span>
                <Bars n={a as number} />
                <Bars n={b as number} />
                <Tag tone={s === 'Material' ? 'green' : 'grey'}>{s}</Tag>
              </div>
            ))}
          </div>
        </>
      );
    case 2:
      return (
        <>
          <StepHead step={2} title="Collect data & evidence" body="Link each data point to its source so every figure in the report can be traced back." onNext={onNext} />
          <div className="sa-table">
            <div className="sa-tr sa-th">
              <span>Data point</span>
              <span>Source</span>
              <span>Owner</span>
              <span>Status</span>
            </div>
            {[
              ['Scope 1 emissions', 'Fuel invoices · PDF', 'Operations', 'Verified', 'green'],
              ['Scope 2 emissions', 'Electricity bills · PDF', 'Facilities', 'Verified', 'green'],
              ['Water withdrawal', 'Meter export · CSV', 'Facilities', 'Needs review', 'amber'],
              ['Supplier declarations', 'Supplier portal', 'Procurement', 'In progress', 'grey'],
              ['Waste by type', 'Not connected', 'Operations', 'Missing', 'red'],
            ].map(([d, src, o, s, tone]) => (
              <div className="sa-tr" key={d}>
                <span className="sa-strong">{d}</span>
                <span>{src}</span>
                <span>{o}</span>
                <Tag tone={tone as ToneName}>{s}</Tag>
              </div>
            ))}
          </div>
        </>
      );
    case 3:
      return (
        <>
          <StepHead step={3} title="Draft disclosures" body="AI-assisted drafts reference the evidence behind each statement and flag what is missing." onNext={onNext} />
          <div className="sa-split">
            <div className="sa-doc">
              <p className="sa-doc-ref">ESRS E1-6 · Gross Scope 1, 2 and 3 GHG emissions</p>
              <p className="sa-doc-text">
                In the reporting period, the company’s gross Scope 1 emissions were calculated from fuel consumption across its
                production sites <span className="sa-cite">1</span>, and Scope 2 emissions from purchased electricity using the
                location-based method <span className="sa-cite">2</span>. Scope 3 categories 1 and 4 are estimated from supplier
                data <span className="sa-cite">3</span>.
              </p>
              <p className="sa-doc-flag">Draft — requires review before approval</p>
            </div>
            <div className="sa-aside">
              <p className="sa-aside-h">Sources</p>
              <ol className="sa-src">
                <li>Fuel invoices · Operations</li>
                <li>Electricity bills · Facilities</li>
                <li>Supplier declarations · Procurement</li>
              </ol>
              <p className="sa-aside-h">Gaps</p>
              <p className="sa-gap">Scope 3 category 4 transport data incomplete</p>
            </div>
          </div>
        </>
      );
    case 4:
      return (
        <>
          <StepHead step={4} title="Review & approve" body="Route each disclosure to its owner, resolve comments, and close remaining gaps." onNext={onNext} />
          <div className="sa-table">
            <div className="sa-tr sa-th">
              <span>Disclosure</span>
              <span>Reviewer</span>
              <span>Comments</span>
              <span>Status</span>
            </div>
            {[
              ['E1-6 GHG emissions', 'Sustainability lead', '2', 'In review', 'amber'],
              ['E1-5 Energy consumption', 'Finance', '0', 'Approved', 'green'],
              ['S1-6 Own workforce', 'HR', '1', 'Changes requested', 'red'],
              ['G1-1 Business conduct', 'Legal', '0', 'Approved', 'green'],
            ].map(([d, r, c, s, tone]) => (
              <div className="sa-tr" key={d}>
                <span className="sa-strong">{d}</span>
                <span>{r}</span>
                <span>{c}</span>
                <Tag tone={tone as ToneName}>{s}</Tag>
              </div>
            ))}
          </div>
        </>
      );
    default:
      return (
        <>
          <StepHead step={5} title="Publish & monitor" body="Prepare report outputs and keep track of data completeness through the year." />
          <div className="sa-tiles">
            {[
              ['Report PDF', 'Ready to export'],
              ['ESEF iXBRL', 'Mapping in progress'],
              ['JSON data export', 'Ready to export'],
            ].map(([t, s]) => (
              <div className="sa-tile" key={t}>
                <p className="sa-strong">{t}</p>
                <p className="sa-muted">{s}</p>
              </div>
            ))}
            <div className="sa-tile">
              <p className="sa-muted">Data completeness</p>
              <p className="sa-big">86%</p>
              <span className="sa-meter">
                <span style={{ width: '86%' }} />
              </span>
            </div>
            <div className="sa-tile">
              <p className="sa-muted">Open gaps</p>
              <p className="sa-big">3</p>
            </div>
            <div className="sa-tile">
              <p className="sa-muted">Disclosures approved</p>
              <p className="sa-big">2 of 4</p>
            </div>
          </div>
        </>
      );
  }
}

function FrameworkStep({ onNext }: { onNext: () => void }) {
  const [selected, setSelected] = useState<string[]>(['csrd']);
  const [filter, setFilter] = useState<'All' | 'Environmental' | 'Social' | 'Governance'>('All');
  const [query, setQuery] = useState('');
  const items = useMemo(
    () =>
      STANDARDS.items
        .filter((s) => FRAMEWORK_IDS.includes(s.id))
        .filter((s) => filter === 'All' || FRAMEWORK_META[s.id].group === filter)
        .filter((s) => `${s.abbreviation} ${s.fullName}`.toLowerCase().includes(query.trim().toLowerCase())),
    [filter, query],
  );
  const toggle = (id: string) => setSelected((v) => (v.includes(id) ? v.filter((x) => x !== id) : [...v, id]));

  return (
    <>
      <StepHead
        step={0}
        title="Select reporting frameworks"
        body="Choose the frameworks that apply to your business and let Studio set up the required disclosures, data points and structure."
        onNext={onNext}
      />
      <div className="sa-filters">
        <span className="sa-strong">19+ global frameworks</span>
        <label className="sa-field">
          <Search className="h-3.5 w-3.5" aria-hidden />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search frameworks…" aria-label="Search frameworks" />
        </label>
        <div className="sa-chips" role="group" aria-label="Filter frameworks">
          {(['All', 'Environmental', 'Social', 'Governance'] as const).map((f) => (
            <button key={f} type="button" className={filter === f ? 'is-on' : ''} aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </div>
      </div>
      <ul className="sa-cards">
        {items.map((s) => {
          const on = selected.includes(s.id);
          return (
            <li key={s.id}>
              <button type="button" className={`sa-card ${on ? 'is-on' : ''}`} aria-pressed={on} onClick={() => toggle(s.id)}>
                <span className="sa-check" aria-hidden>
                  {on && <Check className="h-3 w-3" />}
                </span>
                <span className="sa-card-body">
                  <span className="sa-card-abbr">{s.abbreviation}</span>
                  <span className="sa-card-name">{s.fullName}</span>
                  <span className="sa-card-tags">
                    {FRAMEWORK_META[s.id].tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
        {items.length === 0 && <li className="sa-empty">No frameworks match.</li>}
      </ul>
    </>
  );
}

type ToneName = 'green' | 'amber' | 'red' | 'grey';
function Tag({ tone, children }: { tone: ToneName; children: React.ReactNode }) {
  return <span className={`sa-tag sa-tag--${tone}`}>{children}</span>;
}
function Bars({ n }: { n: number }) {
  return (
    <span className="sa-bars" aria-label={`${n} of 4`}>
      {[1, 2, 3, 4].map((i) => (
        <span key={i} className={i <= n ? 'is-on' : ''} />
      ))}
    </span>
  );
}
