import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  ClipboardCheck,
  Cpu,
  Database,
  Globe,
  LayoutDashboard,
  Lock,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  UploadCloud,
} from 'lucide-react';
import logo from '../../../assets/tierratrace-logo.png';

/* ------------------------------------------------------------------ */
/* Types & Step Definitions                                           */
/* ------------------------------------------------------------------ */

interface StepData {
  num: number;
  label: string;
  shortLabel: string;
  icon: typeof Globe;
  tagline: string;
  userSees: string;
  description: string;
  backendPower: string;
  proof: string[];
}

const WORKFLOW_STEPS: StepData[] = [
  {
    num: 1,
    label: 'Select your framework',
    shortLabel: 'Framework',
    icon: Globe,
    tagline: '19+ Global Standards',
    userSees: 'Choosing from 19+ global standards (CSRD, GRI, ISSB, EUDR, ESPR, BRSR).',
    description:
      'Choose the sustainability disclosure standards that apply to your business. Studio auto-configures mandatory indicators, data schemas, sector annexes, and jurisdiction-specific filing formats.',
    backendPower:
      'The backend pre-loads compliant templates, cross-references overlapping disclosure requirements across standards to avoid redundant work, and binds regulatory XBRL taxonomies.',
    proof: [
      '19+ standards pre-loaded (CSRD, GRI, ISSB, BRSR, EUDR, ESPR)',
      'Cross-standard indicator harmonisation',
      'Automatic jurisdiction-specific annex attachment',
    ],
  },
  {
    num: 2,
    label: 'Define what matters',
    shortLabel: 'Materiality',
    icon: ClipboardCheck,
    tagline: 'Double Materiality & Stakeholder Matrix',
    userSees: 'Materiality assessment and stakeholder engagement modules.',
    description:
      'Conduct your double materiality assessment with guided impact and financial scoring. Engage employees, investors, community stakeholders, and supply chain partners through built-in survey modules.',
    backendPower:
      'AI analyses your historical operational telemetry, supply chain risk maps, and peer industry benchmarks to pre-rank materiality topics — turning months of manual stakeholder interviews into hours.',
    proof: [
      'CSRD-compliant Double Materiality (Impact & Financial)',
      'Automated stakeholder survey distribution & sentiment scoring',
      'Live peer benchmark calibration',
    ],
  },
  {
    num: 3,
    label: 'Collect data and evidence',
    shortLabel: 'Data & Evidence',
    icon: UploadCloud,
    tagline: 'Centralized Telemetry Hub — No Spreadsheets',
    userSees: 'Centralized hub for metrics and document uploads (No spreadsheets, no chasing).',
    description:
      'Connect your ERP, energy management systems, HR software, and supply chain partners directly. Upload utility bills, audit certificates, and lab reports — AI automatically extracts and verifies the numbers.',
    backendPower:
      'Direct API connectors stream live telemetry from SAP, Oracle, IoT energy meters, and TierraTrace Carbon. Intelligent OCR parses unstructured PDFs and tags evidence to disclosure line items.',
    proof: [
      'Direct SAP S/4HANA, Oracle & MES data pipelines',
      'AI document parser for utility bills, lab tests & certificates',
      'Supplier self-assessment portal with automated reminder rules',
    ],
  },
  {
    num: 4,
    label: 'AI draft and compile',
    shortLabel: 'AI Draft',
    icon: BrainCircuit,
    tagline: 'Generative Narrative & Gap Detection',
    userSees: 'Uploading existing reports; AI extracts data, finds gaps, and generates draft responses.',
    description:
      'Upload your previous year’s reports. Studio’s AI extracts baseline metrics, detects disclosure gaps against this year’s standards, and drafts complete narrative disclosures citeable to raw evidence.',
    backendPower:
      'Fine-tuned sustainability LLM identifies missing indicators, checks math across Scope 1–3 calculations, highlights delta variances vs prior years, and drafts audit-defensible text.',
    proof: [
      'Automatic gap analysis vs selected framework requirements',
      'Narrative responses drafted with clickable source evidence',
      'Prior-year report ingestion & delta variance highlighting',
    ],
  },
  {
    num: 5,
    label: 'Verify, Approve and Submit',
    shortLabel: 'Approve & Audit',
    icon: ShieldCheck,
    tagline: 'Multi-Tier Signoff & Auditor Collaboration',
    userSees: 'Tracking approvals, resolving queries, and collaborating with external auditors.',
    description:
      'Route sections to designated executives — CFO, EHS Director, Chief Legal Officer. External assurance providers (e.g., KPMG, PwC, EY) log into an auditor workspace with resolution threads and sign-offs.',
    backendPower:
      'Every revision, query resolution, and data point is cryptographically stamped on Hyperledger Fabric, generating an immutable audit trail fulfilling CSRD Article 33 assurance criteria.',
    proof: [
      'Role-based signoff matrix with SLA deadline tracking',
      'Dedicated external auditor collaboration workspace',
      'Cryptographically anchored tamper-proof audit trail',
    ],
  },
  {
    num: 6,
    label: 'Publish and track performance',
    shortLabel: 'Publish & Live KPIs',
    icon: LayoutDashboard,
    tagline: 'Instant Filing & 365-Day Monitoring',
    userSees: 'Exporting audit-ready reports, sharing results, and monitoring live dashboards year-round.',
    description:
      'Export audit-certified PDFs, iXBRL files for regulator portals, or interactive public microsites. Keep monitoring sustainability metrics year-round with predictive regression alerts.',
    backendPower:
      'One-click packaging into ESEF-compliant iXBRL tags and direct regulator API submission. 24/7 background telemetry engine alerts your team if emissions or energy targets slip.',
    proof: [
      'One-click ESEF iXBRL, CSRD PDF & JSON-LD exports',
      'Direct API submission to regulatory repositories',
      'Live 365-day KPI dashboard with automated regression alerts',
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Interactive Step Cards (The Right-Hand Screen)                     */
/* ------------------------------------------------------------------ */

export function StepWorkflowCanvas() {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedFw, setSelectedFw] = useState('CSRD');
  const [frameworkFilter, setFrameworkFilter] = useState<'all' | 'mandatory' | 'global'>('all');

  // Step 2 state
  const [materialityScores, setMaterialityScores] = useState<Record<string, number>>({
    'Scope 1 & 2 Decarbonization': 94,
    'Supply Chain Labor & Human Rights': 89,
    'Circular Economy & Packaging Waste': 76,
    'Water Stewardship & Effluents': 72,
    'Biodiversity & Land Use (EUDR)': 82,
  });

  // Step 5 state
  const [approvals, setApprovals] = useState([
    { role: 'CFO', name: 'Priya Sharma', section: 'Financial Risk & Scope 1/2', status: 'approved' },
    { role: 'EHS Director', name: 'Rahul Mehta', section: 'Energy, Water & Waste', status: 'approved' },
    { role: 'Chief Legal Officer', name: 'Anita Das', section: 'EUDR & Governance', status: 'pending' },
    { role: 'Assurance Partner', name: 'KPMG India', section: 'Scope 3 Supply Chain', status: 'in-review' },
  ]);

  const stepData = WORKFLOW_STEPS[activeStep - 1];

  const goNext = () => {
    if (activeStep < 6) setActiveStep((s) => s + 1);
    else setActiveStep(1);
  };

  const goPrev = () => {
    if (activeStep > 1) setActiveStep((s) => s - 1);
  };

  return (
    <div className="rounded-[28px] border border-tt-border bg-white shadow-[0_25px_70px_-30px_rgba(8,12,15,0.18)]">
      {/* ── Top Stepper Bar: Cards come one by one ── */}
      <div className="border-b border-tt-border bg-[#fafbfa] px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-tt-green-ink">
              Interactive 6-Step Workflow
            </span>
            <h3 className="text-[17px] font-bold text-tt-ink sm:text-[20px]">
              Step-by-step canvas: telemetry to audit-ready filing
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-tt-green-50 px-3 py-1 font-mono text-[12px] font-bold text-tt-green-ink">
              Step {activeStep} of 6
            </span>
            <div className="flex items-center gap-1 rounded-full border border-tt-border bg-white p-1">
              <button
                type="button"
                onClick={goPrev}
                disabled={activeStep === 1}
                className="grid h-8 w-8 place-items-center rounded-full text-tt-ink hover:bg-[#f3f4f5] disabled:cursor-not-allowed disabled:opacity-30"
                aria-label="Previous step"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="grid h-8 w-8 place-items-center rounded-full bg-tt-green text-white hover:bg-tt-green-600"
                aria-label="Next step"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ── Steps pill strip ── */}
        <div className="mt-4 flex items-center gap-1.5 overflow-x-auto pb-1 [scrollbar-width:none]">
          {WORKFLOW_STEPS.map((s) => {
            const Icon = s.icon;
            const isActive = activeStep === s.num;
            const isDone = activeStep > s.num;
            return (
              <button
                key={s.num}
                type="button"
                onClick={() => setActiveStep(s.num)}
                className={`tt-press flex shrink-0 items-center gap-2 rounded-full px-3.5 py-1.5 text-[12px] font-semibold transition-all ${
                  isActive
                    ? 'bg-tt-ink text-white shadow-sm ring-2 ring-tt-ink/10'
                    : isDone
                    ? 'bg-tt-green-50 text-tt-green-ink hover:bg-tt-green-100'
                    : 'bg-white text-tt-muted hover:border-tt-border hover:bg-[#f3f4f5] hover:text-tt-ink border border-transparent'
                }`}
              >
                {isDone ? (
                  <CheckCircle2 className="h-3.5 w-3.5 text-tt-green-ink" />
                ) : (
                  <Icon className={`h-3.5 w-3.5 ${isActive ? 'text-tt-green' : 'text-tt-muted'}`} />
                )}
                <span>{s.shortLabel}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Main Side-by-Side Area ── */}
      <div className="grid grid-cols-1 gap-8 p-6 lg:grid-cols-[1.1fr_1.3fr] lg:p-8">
        {/* ── LEFT SIDE: What the user does & Backend Power ── */}
        <div className="flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-tt-green-50 text-tt-green-ink">
                <stepData.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-tt-green-ink">
                  Step {stepData.num} · {stepData.tagline}
                </p>
                <h4 className="text-[24px] font-bold tracking-tight text-tt-ink sm:text-[28px]">
                  {stepData.label}
                </h4>
              </div>
            </div>

            {/* What the user sees on screen highlight */}
            <div className="mt-4 rounded-xl border border-tt-green/20 bg-tt-green-50/50 p-3.5 text-[13px] leading-relaxed text-tt-ink">
              <span className="font-bold text-tt-green-ink">User Experience: </span>
              {stepData.userSees}
            </div>

            <p className="mt-4 text-[15px] leading-relaxed text-tt-muted">
              {stepData.description}
            </p>

            {/* How Backend Engine Powers This */}
            <div className="mt-5 rounded-2xl border border-tt-border bg-[#fafbfa] p-4.5">
              <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-tt-ink">
                <Cpu className="h-4 w-4 text-tt-green-ink" />
                How the Backend Engine Powers This
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-tt-muted">
                {stepData.backendPower}
              </p>
            </div>

            {/* Key highlights / proof */}
            <ul className="mt-5 space-y-2">
              {stepData.proof.map((p) => (
                <li key={p} className="flex items-start gap-2 text-[13px] font-medium text-tt-ink/85">
                  <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-tt-green-50 text-[9px] text-tt-green-ink">
                    ✓
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Step progression actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-tt-border pt-5">
            <button
              type="button"
              onClick={goPrev}
              disabled={activeStep === 1}
              className="tt-press inline-flex h-10 items-center gap-2 rounded-full border border-tt-border bg-white px-4 text-[13px] font-semibold text-tt-ink hover:bg-[#fafbfa] disabled:opacity-40"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Previous Step
            </button>
            <button
              type="button"
              onClick={goNext}
              className="tt-press inline-flex h-10 items-center gap-2 rounded-full bg-tt-green px-5 text-[13px] font-semibold text-white shadow-sm hover:bg-tt-green-600"
            >
              {activeStep === 6 ? 'Restart from Step 1' : `Next: ${WORKFLOW_STEPS[activeStep].shortLabel}`}
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* ── RIGHT SIDE: The Live Card (Shown One by One) ── */}
        <div className="rounded-[24px] border border-tt-border bg-white p-5 shadow-sm sm:p-6">
          {/* Card header */}
          <div className="mb-4 flex items-center justify-between border-b border-tt-border pb-3">
            <div className="flex items-center gap-2">
              <img src={logo} alt="" className="h-5 w-auto" />
              <span className="font-mono text-[11px] font-bold text-tt-green-ink">
                STUDIO CANVAS · STEP {activeStep}
              </span>
            </div>
            <span className="flex items-center gap-1.5 rounded-full bg-tt-green-50 px-2.5 py-0.5 text-[10px] font-bold text-tt-green-ink">
              <span className="tt-pulse h-1.5 w-1.5 rounded-full bg-tt-green" />
              LIVE TELEMETRY
            </span>
          </div>

          {/* ── STEP 1 CARD: Select your framework ── */}
          {activeStep === 1 && (
            <div className="tt-swap-enter space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="text-[15px] font-bold text-tt-ink">Choose Reporting Standard</h5>
                  <p className="text-[12px] text-tt-muted">19+ global compliance frameworks supported</p>
                </div>
                <div className="flex gap-1 rounded-lg border border-tt-border bg-[#f8f9fa] p-0.5 text-[11px]">
                  <button
                    type="button"
                    onClick={() => setFrameworkFilter('all')}
                    className={`rounded px-2 py-0.5 ${frameworkFilter === 'all' ? 'bg-white font-bold text-tt-ink shadow-xs' : 'text-tt-muted'}`}
                  >
                    All
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrameworkFilter('mandatory')}
                    className={`rounded px-2 py-0.5 ${frameworkFilter === 'mandatory' ? 'bg-white font-bold text-tt-ink shadow-xs' : 'text-tt-muted'}`}
                  >
                    Mandatory EU
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrameworkFilter('global')}
                    className={`rounded px-2 py-0.5 ${frameworkFilter === 'global' ? 'bg-white font-bold text-tt-ink shadow-xs' : 'text-tt-muted'}`}
                  >
                    Global
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-2">
                {[
                  { code: 'CSRD', name: 'Corporate Sustainability Reporting (EU)', tag: 'ESRS Standards', rec: true },
                  { code: 'GRI', name: 'Global Reporting Initiative', tag: 'Universal 2021', rec: true },
                  { code: 'ISSB', name: 'IFRS S1 & S2 Climate Disclosures', tag: 'Financial Focus', rec: true },
                  { code: 'BRSR', name: 'Business Responsibility & Sustainability (SEBI)', tag: 'Top 1000 Listed', rec: true },
                  { code: 'EUDR', name: 'EU Deforestation Regulation', tag: 'Due Diligence Statement', rec: false },
                  { code: 'ESPR', name: 'Ecodesign Digital Product Passport', tag: 'Article 8 Traced', rec: false },
                  { code: 'TCFD', name: 'Task Force on Climate Financial Risk', tag: 'Governance & Risk', rec: false },
                  { code: 'CDP', name: 'Carbon Disclosure Project Questionnaire', tag: 'Climate, Forest, Water', rec: false },
                ].map((f) => {
                  const isSelected = selectedFw === f.code;
                  return (
                    <button
                      key={f.code}
                      type="button"
                      onClick={() => setSelectedFw(f.code)}
                      className={`tt-press flex flex-col justify-between rounded-xl border p-3 text-left transition-all ${
                        isSelected
                          ? 'border-tt-green bg-tt-green-50/70 shadow-xs ring-1 ring-tt-green'
                          : 'border-tt-border bg-white hover:border-tt-green/40'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-tt-ink">{f.code}</span>
                        {isSelected && (
                          <span className="grid h-4 w-4 place-items-center rounded-full bg-tt-green text-[9px] text-white">
                            ✓
                          </span>
                        )}
                      </div>
                      <p className="mt-1 line-clamp-1 text-[11px] text-tt-muted">{f.name}</p>
                      <span className="mt-2 inline-block rounded bg-[#f1f3f4] px-1.5 py-0.5 text-[9px] font-semibold text-tt-ink/70">
                        {f.tag}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="rounded-xl border border-tt-border bg-[#fafbfa] p-3 text-[12px]">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-tt-ink">Selected Framework: {selectedFw}</span>
                  <span className="text-tt-green-ink font-semibold">1,148 metrics auto-configured</span>
                </div>
                <p className="mt-1 text-[11px] text-tt-muted">
                  Auto-loaded ESRS E1–E5, S1–S4, and G1 modules. Zero manual setup needed.
                </p>
              </div>

              <button
                type="button"
                onClick={goNext}
                className="tt-press flex w-full items-center justify-center gap-2 rounded-xl bg-tt-green py-2.5 text-[13px] font-semibold text-white hover:bg-tt-green-600"
              >
                Proceed with {selectedFw} <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* ── STEP 2 CARD: Define what matters (Materiality) ── */}
          {activeStep === 2 && (
            <div className="tt-swap-enter space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="text-[15px] font-bold text-tt-ink">Double Materiality Matrix</h5>
                  <p className="text-[12px] text-tt-muted">Impact significance vs. Financial materiality</p>
                </div>
                <span className="rounded-full bg-tt-green-50 px-2.5 py-0.5 text-[10px] font-bold text-tt-green-ink">
                  AI Pre-Scored
                </span>
              </div>

              <div className="space-y-3">
                {Object.entries(materialityScores).map(([topic, score]) => (
                  <div key={topic} className="rounded-xl border border-tt-border bg-white p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] font-semibold text-tt-ink">{topic}</span>
                      <span className="font-mono text-[12px] font-bold text-tt-ink">{score}%</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#e5e7eb]">
                        <div
                          className="h-full rounded-full bg-tt-green transition-all duration-300"
                          style={{ width: `${score}%` }}
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          setMaterialityScores((prev) => ({
                            ...prev,
                            [topic]: prev[topic] === 100 ? 80 : 100,
                          }))
                        }
                        className="rounded bg-[#f3f4f5] px-2 py-0.5 text-[10px] font-semibold text-tt-ink hover:bg-tt-green-50 hover:text-tt-green-ink"
                      >
                        {score >= 90 ? 'Material (Mandatory)' : 'Include in scope'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-tt-border bg-[#fafbfa] p-3 text-[12px]">
                <div className="flex items-center justify-between font-semibold">
                  <span>Stakeholder Surveys Completed</span>
                  <span className="text-tt-green-ink">842 / 900 Responses (93%)</span>
                </div>
                <p className="mt-1 text-[11px] text-tt-muted">
                  Investors, factory employees, and tier-1 suppliers polled via automated WhatsApp & email workflows.
                </p>
              </div>

              <button
                type="button"
                onClick={goNext}
                className="tt-press flex w-full items-center justify-center gap-2 rounded-xl bg-tt-green py-2.5 text-[13px] font-semibold text-white hover:bg-tt-green-600"
              >
                Confirm Material Topics <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* ── STEP 3 CARD: Collect data & evidence (Zero Spreadsheets) ── */}
          {activeStep === 3 && (
            <div className="tt-swap-enter space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="text-[15px] font-bold text-tt-ink">Telemetry & Evidence Ingestion</h5>
                  <p className="text-[12px] text-tt-muted">No spreadsheets, no manual email chasing</p>
                </div>
                <span className="rounded-full bg-tt-green-50 px-2 py-0.5 text-[10px] font-bold text-tt-green-ink">
                  4 Live Connectors
                </span>
              </div>

              <div className="space-y-2">
                {[
                  { name: 'SAP S/4HANA (Plant 102 & 204)', type: 'ERP Connector', status: 'Streaming', rows: '14,832 goods receipts' },
                  { name: 'TierraTrace Carbon Engine', type: 'Product Carbon Footprint', status: 'Streaming', rows: '291 batch records' },
                  { name: 'Utility Bills PDF Parser', type: 'AI Document OCR', status: 'Processed', rows: '48 bills → 1,842 kWh data' },
                  { name: 'Supplier Self-Assessment Portal', type: 'Tier-1 Suppliers', status: '8/10 done', rows: 'Chain-of-custody proofs' },
                ].map((s) => (
                  <div key={s.name} className="flex items-center justify-between rounded-xl border border-tt-border bg-white p-3">
                    <div className="flex items-center gap-2.5">
                      <span className="grid h-7 w-7 place-items-center rounded-lg bg-tt-green-50 text-tt-green-ink">
                        <Database className="h-3.5 w-3.5" />
                      </span>
                      <div>
                        <p className="text-[12px] font-semibold text-tt-ink">{s.name}</p>
                        <p className="text-[10px] text-tt-muted">{s.rows}</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-tt-green-50 px-2 py-0.5 text-[10px] font-bold text-tt-green-ink">
                      {s.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Upload Dropzone Preview */}
              <div className="rounded-xl border border-dashed border-tt-green/40 bg-tt-green-50/30 p-4 text-center">
                <UploadCloud className="mx-auto h-6 w-6 text-tt-green-ink" />
                <p className="mt-1 text-[12px] font-semibold text-tt-ink">Drop PDFs, energy bills or audit certificates</p>
                <p className="text-[11px] text-tt-muted">AI reads tables, isolates emissions values, and links to CSRD E1-6</p>
              </div>

              <button
                type="button"
                onClick={goNext}
                className="tt-press flex w-full items-center justify-center gap-2 rounded-xl bg-tt-green py-2.5 text-[13px] font-semibold text-white hover:bg-tt-green-600"
              >
                Compile Collected Evidence <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* ── STEP 4 CARD: AI draft and compile ── */}
          {activeStep === 4 && (
            <div className="tt-swap-enter space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="text-[15px] font-bold text-tt-ink">AI Disclosure Generator</h5>
                  <p className="text-[12px] text-tt-muted">Draft narrative responses + gap alerts</p>
                </div>
                <span className="flex items-center gap-1 rounded-full bg-tt-ink px-2.5 py-0.5 text-[10px] font-bold text-white">
                  <Sparkles className="h-3 w-3 text-tt-green" /> AI Generated
                </span>
              </div>

              {/* Monospace draft preview */}
              <div className="rounded-xl border border-tt-border bg-[#0f172a] p-3.5 font-mono text-[11px] text-slate-200">
                <div className="mb-2 flex items-center justify-between border-b border-slate-700 pb-1.5 text-slate-400">
                  <span>ESRS E1 — Climate Change Disclosure</span>
                  <span className="text-tt-green">AI Confidence: 98%</span>
                </div>
                <p className="leading-relaxed">
                  "During FY 2025–26, the company recorded total Scope 1 emissions of{' '}
                  <span className="font-bold text-tt-green">1,842.6 tCO₂e</span> (down 12.4% YoY) across 4 production plants.{' '}
                  <span className="underline decoration-tt-green decoration-2">Source: SAP Goods Receipts + CEMS Sensors.</span>"
                </p>
              </div>

              {/* Gap flags */}
              <div className="space-y-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-tt-muted">
                  3 Compliance Gaps Found &amp; Highlighted
                </p>
                {[
                  { tag: 'HIGH SEVERITY', text: 'Scope 3 Category 11 (Use of sold goods) missing primary vendor data', action: 'Requested from 4 vendors' },
                  { tag: 'MEDIUM', text: 'Renewable energy certificates (RECs) expire before year-end', action: 'Flagged to EHS' },
                  { tag: 'RESOLVED', text: 'Water consumption intensity per ton produced aligned to GRI 303-3', action: 'Verified' },
                ].map((g) => (
                  <div
                    key={g.text}
                    className={`flex items-center justify-between rounded-xl p-2.5 text-[11px] ${
                      g.tag === 'HIGH SEVERITY'
                        ? 'border border-red-200 bg-red-50 text-red-900'
                        : g.tag === 'MEDIUM'
                        ? 'border border-amber-200 bg-amber-50 text-amber-900'
                        : 'border border-tt-border bg-[#fafbfa] text-tt-ink'
                    }`}
                  >
                    <div>
                      <span className="font-bold">{g.tag}: </span>
                      <span>{g.text}</span>
                    </div>
                    <span className="shrink-0 font-semibold">{g.action}</span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={goNext}
                className="tt-press flex w-full items-center justify-center gap-2 rounded-xl bg-tt-green py-2.5 text-[13px] font-semibold text-white hover:bg-tt-green-600"
              >
                Send to Approval Workflow <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* ── STEP 5 CARD: Verify, Approve and Submit ── */}
          {activeStep === 5 && (
            <div className="tt-swap-enter space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="text-[15px] font-bold text-tt-ink">Approval &amp; Assurance Trail</h5>
                  <p className="text-[12px] text-tt-muted">Executive signoffs &amp; external auditor collaboration</p>
                </div>
                <span className="flex items-center gap-1 rounded-full bg-tt-green-50 px-2.5 py-0.5 text-[10px] font-bold text-tt-green-ink">
                  <Lock className="h-3 w-3" /> Hyperledger Anchored
                </span>
              </div>

              <div className="space-y-2">
                {approvals.map((a, i) => (
                  <div key={a.role} className="flex items-center justify-between rounded-xl border border-tt-border bg-white p-3">
                    <div className="flex items-center gap-2.5">
                      <div className="grid h-8 w-8 place-items-center rounded-full bg-tt-ink font-mono text-[11px] font-bold text-white">
                        {a.role.slice(0, 2)}
                      </div>
                      <div>
                        <p className="text-[12px] font-semibold text-tt-ink">
                          {a.name} <span className="font-normal text-tt-muted">({a.role})</span>
                        </p>
                        <p className="text-[11px] text-tt-muted">{a.section}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const copy = [...approvals];
                        copy[i].status = copy[i].status === 'approved' ? 'in-review' : 'approved';
                        setApprovals(copy);
                      }}
                      className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase transition-colors ${
                        a.status === 'approved'
                          ? 'bg-tt-green-50 text-tt-green-ink'
                          : a.status === 'in-review'
                          ? 'bg-amber-50 text-amber-800'
                          : 'bg-[#f3f4f5] text-tt-muted hover:bg-tt-green-50 hover:text-tt-green-ink'
                      }`}
                    >
                      {a.status === 'approved' ? '✓ Approved' : a.status === 'in-review' ? 'Auditor Query' : 'Sign Off'}
                    </button>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-tt-border bg-[#fafbfa] p-3 text-[11px] font-mono text-tt-muted">
                <span className="font-bold text-tt-ink">Cryptographic Proof: </span>
                <span>SHA-256: 8f4a39d2e1b... Anchored to Fabric Block #49,201</span>
              </div>

              <button
                type="button"
                onClick={goNext}
                className="tt-press flex w-full items-center justify-center gap-2 rounded-xl bg-tt-green py-2.5 text-[13px] font-semibold text-white hover:bg-tt-green-600"
              >
                Finalize &amp; Prepare Publication <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* ── STEP 6 CARD: Publish and track performance ── */}
          {activeStep === 6 && (
            <div className="tt-swap-enter space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="text-[15px] font-bold text-tt-ink">Publish &amp; 365-Day Monitoring</h5>
                  <p className="text-[12px] text-tt-muted">Regulator iXBRL export + live continuous KPIs</p>
                </div>
                <span className="rounded-full bg-tt-green-50 px-2.5 py-0.5 text-[10px] font-bold text-tt-green-ink">
                  Filing Ready
                </span>
              </div>

              {/* Export options */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'ESEF iXBRL', desc: 'EU CSRD tagged', ready: true },
                  { label: 'Audit PDF', desc: 'Assurance signed', ready: true },
                  { label: 'JSON-LD API', desc: 'ESAP Machine readable', ready: true },
                ].map((e) => (
                  <div key={e.label} className="rounded-xl border border-tt-border bg-[#fafbfa] p-2.5 text-center">
                    <p className="text-[12px] font-bold text-tt-ink">{e.label}</p>
                    <p className="text-[10px] text-tt-muted">{e.desc}</p>
                    <span className="mt-1.5 inline-block rounded bg-tt-green px-2 py-0.5 text-[9px] font-bold text-white">
                      Download
                    </span>
                  </div>
                ))}
              </div>

              {/* Live year-round dashboard preview */}
              <div className="rounded-xl border border-tt-border bg-white p-3.5">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-tt-muted">
                    365-Day Continuous Sustainability Telemetry
                  </p>
                  <span className="text-[10px] font-semibold text-tt-green-ink">Live Sync</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-lg bg-[#fafbfa] p-2">
                    <p className="text-[10px] text-tt-muted">Scope 1+2</p>
                    <p className="font-mono text-[13px] font-bold text-tt-ink">2,346 t</p>
                    <p className="text-[10px] font-semibold text-tt-green-ink">↓ 14% YoY</p>
                  </div>
                  <div className="rounded-lg bg-[#fafbfa] p-2">
                    <p className="text-[10px] text-tt-muted">Clean Power</p>
                    <p className="font-mono text-[13px] font-bold text-tt-ink">74.2%</p>
                    <p className="text-[10px] font-semibold text-tt-green-ink">↑ 8% Target</p>
                  </div>
                  <div className="rounded-lg bg-[#fafbfa] p-2">
                    <p className="text-[10px] text-tt-muted">Compliance</p>
                    <p className="font-mono text-[13px] font-bold text-tt-ink">100%</p>
                    <p className="text-[10px] font-semibold text-tt-green-ink">Audit Cleared</p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveStep(1)}
                className="tt-press flex w-full items-center justify-center gap-2 rounded-xl border border-tt-border bg-white py-2.5 text-[13px] font-semibold text-tt-ink hover:bg-[#fafbfa]"
              >
                <RefreshCw className="h-3.5 w-3.5 text-tt-green-ink" /> Start New Reporting Cycle
              </button>
            </div>
          )}

          {/* Card footer indicator */}
          <div className="mt-4 flex items-center justify-between border-t border-tt-border pt-3 text-[11px] text-tt-muted">
            <span>
              Showing Card <strong className="text-tt-ink">{activeStep} of 6</strong>
            </span>
            <span className="font-medium text-tt-green-ink">Click next to advance one by one</span>
          </div>
        </div>
      </div>
    </div>
  );
}
