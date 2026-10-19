import { useState } from 'react';
import { ArrowRight, BrainCircuit, CheckCircle2, ChevronRight, ClipboardCheck, FileText, Globe, LayoutDashboard, Send, Shield, UploadCloud } from 'lucide-react';
import logo from '../../../assets/tierratrace-logo.png';
import { DemoCard } from '../../../components/product';

/* ------------------------------------------------------------------ */
/* Data                                                                  */
/* ------------------------------------------------------------------ */

const FRAMEWORKS = [
  { code: 'CSRD',  name: 'EU Corporate Sustainability', color: '#17803a' },
  { code: 'GRI',   name: 'Global Reporting Initiative',  color: '#17803a' },
  { code: 'ISSB',  name: 'IFRS Sustainability Standards', color: '#17803a' },
  { code: 'BRSR',  name: 'Business Responsibility India', color: '#17803a' },
  { code: 'EUDR',  name: 'EU Deforestation Regulation',  color: '#17803a' },
  { code: 'ESPR',  name: 'EU Digital Product Passport',  color: '#17803a' },
  { code: 'TCFD',  name: 'Climate Financial Disclosures', color: '#17803a' },
  { code: 'CDP',   name: 'Carbon Disclosure Project',    color: '#17803a' },
];

const MATERIALITY_TOPICS = [
  { topic: 'Scope 1 & 2 Emissions', relevance: 92, confirmed: true },
  { topic: 'Supply Chain Labour Rights', relevance: 87, confirmed: true },
  { topic: 'Water Use & Wastewater', relevance: 74, confirmed: false },
  { topic: 'Packaging & Waste', relevance: 68, confirmed: false },
  { topic: 'Biodiversity Impact', relevance: 51, confirmed: false },
];

const DATA_SOURCES = [
  { label: 'ERP — SAP S/4HANA', status: 'live', records: '14,832 events' },
  { label: 'TierraTrace Carbon', status: 'live', records: '291 PCF records' },
  { label: 'HR System (Workday)', status: 'live', records: '2,104 workforce rows' },
  { label: 'Utility Bills (PDF)', status: 'processing', records: '48 files → AI parsing' },
  { label: 'Supplier Self-Assessments', status: 'pending', records: '6 of 12 received' },
];

const AI_GAPS = [
  { section: 'E1 — Climate', gap: 'Scope 3 cat. 11 (use-of-product) PCF values missing', severity: 'high' },
  { section: 'S1 — Workforce', gap: 'Gender pay-gap ratio not yet computed', severity: 'medium' },
  { section: 'G1 — Business Conduct', gap: 'Anti-corruption training completion rate unlinked', severity: 'low' },
];

const APPROVALS = [
  { name: 'Priya Sharma', role: 'CFO', status: 'approved', section: 'Financials & GHG' },
  { name: 'Rahul Mehta',  role: 'EHS Director', status: 'approved', section: 'Environmental' },
  { name: 'Anita Das',    role: 'Legal Counsel', status: 'pending', section: 'Governance' },
  { name: 'Ext. Auditor', role: 'KPMG India',    status: 'queried', section: 'Scope 3 Data' },
];

/* ------------------------------------------------------------------ */

interface StepDef {
  num: number;
  label: string;
  icon: typeof Globe;
  shortLabel: string;
}

const STEPS: StepDef[] = [
  { num: 1, label: 'Select framework',        shortLabel: 'Framework',   icon: Globe          },
  { num: 2, label: 'Define what matters',     shortLabel: 'Materiality', icon: ClipboardCheck },
  { num: 3, label: 'Collect data & evidence', shortLabel: 'Data',        icon: UploadCloud    },
  { num: 4, label: 'AI draft & compile',      shortLabel: 'AI Draft',    icon: BrainCircuit   },
  { num: 5, label: 'Verify, approve & submit',shortLabel: 'Approve',     icon: Shield         },
  { num: 6, label: 'Publish & track',         shortLabel: 'Publish',     icon: LayoutDashboard},
];

/* ------------------------------------------------------------------ */
/* Canvas component                                                      */
/* ------------------------------------------------------------------ */

export function StudioCanvas() {
  const [step, setStep] = useState(1);
  const [selectedFw, setSelectedFw] = useState('CSRD');

  const S = STEPS[step - 1];

  return (
    <DemoCard label="TierraTrace Studio — AI Compliance Canvas">
      {/* ── Header ── */}
      <div className="flex items-center justify-between border-b border-tt-border px-5 py-3.5 sm:px-6">
        <div className="flex items-center gap-2.5">
          <img src={logo} alt="" className="h-6 w-auto" />
          <span className="rounded-full bg-tt-green-50 px-2.5 py-0.5 text-[11px] font-semibold text-tt-green-ink">
            Studio
          </span>
        </div>
        <span className="flex items-center gap-1.5 text-[11px] font-medium text-tt-muted">
          <span className="tt-pulse h-2 w-2 rounded-full bg-tt-green" />
          AI engine active
        </span>
      </div>

      {/* ── Step progress bar ── */}
      <div className="border-b border-tt-border bg-[#fafbfa] px-5 py-3 sm:px-6">
        <div className="flex items-center gap-0.5 overflow-x-auto [scrollbar-width:none]">
          {STEPS.map((s) => {
            const StepIcon = s.icon;
            const active  = step === s.num;
            const done    = step > s.num;
            return (
              <button
                key={s.num}
                type="button"
                onClick={() => setStep(s.num)}
                className={`tt-press flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[11px] font-semibold transition-all ${
                  active ? 'bg-tt-ink text-white' : done ? 'bg-tt-green-50 text-tt-green-ink' : 'text-tt-muted hover:text-tt-ink'
                }`}
              >
                {done ? (
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0" aria-hidden />
                ) : (
                  <StepIcon className="h-3.5 w-3.5 shrink-0" aria-hidden />
                )}
                <span className="hidden sm:inline">{s.shortLabel}</span>
                <span className="sm:hidden">{s.num}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Active Step Content ── */}
      <div className="min-h-[330px] p-5 sm:p-6">

        {/* Step 1 */}
        {step === 1 && (
          <div className="tt-swap-enter space-y-3">
            <p className="text-[12px] font-semibold uppercase tracking-wider text-tt-muted">
              19+ global standards supported — select yours
            </p>
            <div className="grid grid-cols-2 gap-2">
              {FRAMEWORKS.map((f) => (
                <button
                  key={f.code}
                  type="button"
                  onClick={() => setSelectedFw(f.code)}
                  className={`tt-press flex items-start gap-2.5 rounded-xl border p-3 text-left transition-all ${
                    selectedFw === f.code
                      ? 'border-tt-green bg-tt-green-50 shadow-sm'
                      : 'border-tt-border bg-white hover:border-tt-green/40'
                  }`}
                >
                  <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[9px] font-bold ${
                    selectedFw === f.code ? 'bg-tt-green text-white' : 'bg-[#f3f4f5] text-tt-muted'
                  }`}>
                    {selectedFw === f.code ? '✓' : f.code.slice(0, 1)}
                  </span>
                  <span>
                    <span className="block text-[13px] font-semibold text-tt-ink">{f.code}</span>
                    <span className="block text-[11px] text-tt-muted">{f.name}</span>
                  </span>
                </button>
              ))}
            </div>
            <div className="flex justify-end pt-1">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="tt-press inline-flex h-9 items-center gap-1.5 rounded-full bg-tt-green px-5 text-[13px] font-semibold text-white hover:bg-tt-green-600"
              >
                Continue with {selectedFw} <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="tt-swap-enter space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-[12px] font-semibold uppercase tracking-wider text-tt-muted">
                AI-ranked materiality topics · {selectedFw} scope
              </p>
              <span className="rounded-full bg-tt-green-50 px-2 py-0.5 text-[11px] font-semibold text-tt-green-ink">
                AI Pre-assessed
              </span>
            </div>
            <ul className="space-y-2">
              {MATERIALITY_TOPICS.map((t) => (
                <li key={t.topic} className="flex items-center gap-3 rounded-xl border border-tt-border bg-white p-3">
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[13px] font-semibold text-tt-ink">{t.topic}</span>
                      <span className="text-[12px] font-bold text-tt-ink">{t.relevance}%</span>
                    </div>
                    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-[#f3f4f5]">
                      <div
                        className="tt-meter-fill h-full rounded-full bg-tt-green"
                        style={{ width: `${t.relevance}%` }}
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                      t.confirmed
                        ? 'bg-tt-green-50 text-tt-green-ink'
                        : 'bg-[#f3f4f5] text-tt-muted hover:bg-tt-green-50 hover:text-tt-green-ink'
                    }`}
                  >
                    {t.confirmed ? '✓ Confirmed' : 'Confirm'}
                  </button>
                </li>
              ))}
            </ul>
            <StepNav onPrev={() => setStep(1)} onNext={() => setStep(3)} />
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="tt-swap-enter space-y-3">
            <p className="text-[12px] font-semibold uppercase tracking-wider text-tt-muted">
              Connected data sources — no spreadsheets
            </p>
            <ul className="space-y-2">
              {DATA_SOURCES.map((d) => (
                <li key={d.label} className="flex items-center gap-3 rounded-xl border border-tt-border bg-white px-4 py-3">
                  <span className={`h-2 w-2 shrink-0 rounded-full ${
                    d.status === 'live' ? 'bg-tt-green' : d.status === 'processing' ? 'bg-tt-amber' : 'bg-[#d1d5db]'
                  }`} />
                  <span className="flex-1">
                    <span className="block text-[13px] font-semibold text-tt-ink">{d.label}</span>
                    <span className="block text-[11px] text-tt-muted">{d.records}</span>
                  </span>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${
                    d.status === 'live' ? 'bg-tt-green-50 text-tt-green-ink'
                    : d.status === 'processing' ? 'bg-tt-amber-50 text-tt-amber'
                    : 'bg-[#f3f4f5] text-tt-muted'
                  }`}>
                    {d.status}
                  </span>
                </li>
              ))}
            </ul>
            <StepNav onPrev={() => setStep(2)} onNext={() => setStep(4)} />
          </div>
        )}

        {/* Step 4 */}
        {step === 4 && (
          <div className="tt-swap-enter space-y-3">
            <div className="flex items-center gap-2">
              <BrainCircuit className="h-5 w-5 text-tt-green-ink" />
              <p className="text-[13px] font-semibold text-tt-ink">
                AI drafted {selectedFw} report — 3 gaps found
              </p>
            </div>
            <div className="rounded-xl border border-tt-border bg-tt-ink p-4 font-mono text-[11px] leading-relaxed text-white/80">
              <span className="text-tt-green">AI Draft</span> · {selectedFw} · FY 2025–26{'\n\n'}
              <span className="text-white/50">Section E1 · Climate Change</span>{'\n'}
              Total Scope 1 emissions: <span className="text-tt-green font-bold">1,842 tCO₂e</span> (verified){'\n'}
              Scope 2 (market-based):  <span className="text-tt-green font-bold">504 tCO₂e</span> (verified){'\n'}
              Scope 3 cat. 11:         <span className="text-tt-amber font-bold">⚠ DATA MISSING</span>
            </div>
            <ul className="space-y-1.5">
              {AI_GAPS.map((g) => (
                <li key={g.section} className={`flex items-start gap-2.5 rounded-lg px-3 py-2.5 ${
                  g.severity === 'high' ? 'bg-red-50' : g.severity === 'medium' ? 'bg-tt-amber-50' : 'bg-tt-green-50'
                }`}>
                  <span className={`mt-0.5 text-[10px] font-bold uppercase tracking-wider ${
                    g.severity === 'high' ? 'text-red-600' : g.severity === 'medium' ? 'text-tt-amber' : 'text-tt-green-ink'
                  }`}>{g.severity}</span>
                  <span>
                    <span className="block text-[12px] font-semibold text-tt-ink">{g.section}</span>
                    <span className="block text-[11px] text-tt-muted">{g.gap}</span>
                  </span>
                </li>
              ))}
            </ul>
            <StepNav onPrev={() => setStep(3)} onNext={() => setStep(5)} />
          </div>
        )}

        {/* Step 5 */}
        {step === 5 && (
          <div className="tt-swap-enter space-y-3">
            <p className="text-[12px] font-semibold uppercase tracking-wider text-tt-muted">
              Approval workflow · {selectedFw} sign-off
            </p>
            <ul className="space-y-2">
              {APPROVALS.map((a) => (
                <li key={a.name} className="flex items-center gap-3 rounded-xl border border-tt-border bg-white px-4 py-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#f3f4f5] text-[12px] font-bold text-tt-ink">
                    {a.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                  </span>
                  <span className="flex-1">
                    <span className="block text-[13px] font-semibold text-tt-ink">{a.name}
                      <span className="ml-1.5 text-[11px] font-normal text-tt-muted">· {a.role}</span>
                    </span>
                    <span className="block text-[11px] text-tt-muted">{a.section}</span>
                  </span>
                  <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase ${
                    a.status === 'approved' ? 'bg-tt-green-50 text-tt-green-ink'
                    : a.status === 'pending' ? 'bg-[#f3f4f5] text-tt-muted'
                    : 'bg-tt-amber-50 text-tt-amber'
                  }`}>
                    {a.status}
                  </span>
                </li>
              ))}
            </ul>
            <StepNav onPrev={() => setStep(4)} onNext={() => setStep(6)} />
          </div>
        )}

        {/* Step 6 */}
        {step === 6 && (
          <div className="tt-swap-enter space-y-3">
            <div className="rounded-xl border border-tt-green/30 bg-tt-green-50 p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-wider text-tt-green-ink">Published</p>
                  <h4 className="mt-1 text-[16px] font-bold text-tt-ink">
                    {selectedFw} Report FY 2025–26
                  </h4>
                  <p className="mt-0.5 text-[12px] text-tt-muted">Published 19 Oct 2026 · Signed · Audit-ready PDF</p>
                </div>
                <FileText className="h-8 w-8 text-tt-green-ink" />
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <button type="button" className="tt-press inline-flex h-7 items-center gap-1 rounded-full bg-tt-green px-3 text-[11px] font-semibold text-white">
                  <Send className="h-3 w-3" /> Submit to regulator
                </button>
                <button type="button" className="tt-press inline-flex h-7 items-center gap-1 rounded-full border border-tt-border bg-white px-3 text-[11px] font-semibold text-tt-ink">
                  Export PDF
                </button>
                <button type="button" className="tt-press inline-flex h-7 items-center gap-1 rounded-full border border-tt-border bg-white px-3 text-[11px] font-semibold text-tt-ink">
                  Share link
                </button>
              </div>
            </div>
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-tt-muted">Live performance dashboard</p>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'Scope 1+2', value: '2,346 tCO₂e', trend: '↓ 18%' },
                  { label: 'Renewable Energy', value: '67%', trend: '↑ 12%' },
                  { label: 'CSRD Score', value: '94 / 100', trend: '↑ 7 pts' },
                ].map((m) => (
                  <div key={m.label} className="rounded-xl border border-tt-border bg-white p-3 text-center">
                    <p className="text-[11px] text-tt-muted">{m.label}</p>
                    <p className="mt-0.5 text-[14px] font-bold text-tt-ink">{m.value}</p>
                    <p className="text-[11px] font-semibold text-tt-green-ink">{m.trend}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center pt-1">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="tt-press inline-flex h-9 items-center gap-1.5 rounded-full border border-tt-border bg-white px-5 text-[13px] font-semibold text-tt-ink hover:border-tt-green/40"
              >
                Start new report cycle
              </button>
            </div>
          </div>
        )}

      </div>

      {/* ── Footer ── */}
      <figcaption className="flex flex-wrap items-center justify-between border-t border-tt-border bg-[#fafbfa] px-5 py-3 text-[11px] text-tt-muted sm:px-6">
        <span>Step {step} of 6 · {S.label}</span>
        <span className="font-medium text-tt-green-ink">AI-powered · Zero spreadsheets</span>
      </figcaption>
    </DemoCard>
  );
}

/* ── Prev / Next nav ── */
function StepNav({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  return (
    <div className="flex justify-between pt-1">
      <button
        type="button"
        onClick={onPrev}
        className="tt-press inline-flex h-9 items-center gap-1.5 rounded-full border border-tt-border bg-white px-4 text-[12px] font-semibold text-tt-ink hover:border-tt-green/40"
      >
        <ChevronRight className="h-3.5 w-3.5 rotate-180" /> Back
      </button>
      <button
        type="button"
        onClick={onNext}
        className="tt-press inline-flex h-9 items-center gap-1.5 rounded-full bg-tt-green px-5 text-[12px] font-semibold text-white hover:bg-tt-green-600"
      >
        Continue <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
