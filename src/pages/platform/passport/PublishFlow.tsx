import { useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import {
  ArrowUpRight,
  CircleAlert,
  CircleCheck,
  FileBadge2,
  Fingerprint,
  Layers,
  Leaf,
  Nfc,
  Package,
  QrCode,
  ScanSearch,
  Send,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';
import { Container, SectionHeading } from '../../../components/ui';

/*
 * The four steps follow PRD journey §8.4 "Passport Publication":
 * assemble from linked records → completeness check → approval with step-up → publish, sign, anchor.
 */
const STEPS = [
  {
    id: 'assemble',
    n: '01',
    title: 'Assemble from your records',
    body: 'Pick a product. Passport fields fill themselves from the product spec, batch attributes, certificates and carbon results already in TierraTrace.',
    icon: Layers,
  },
  {
    id: 'gaps',
    n: '02',
    title: 'Close the gaps at the source',
    body: 'A completeness check scores the passport against the regulatory template. Each missing field links to the record that should supply it — you fix the record, not the passport.',
    icon: ScanSearch,
  },
  {
    id: 'approve',
    n: '03',
    title: 'Approve with step-up',
    body: 'Submission follows your approval workflow. Approvers re-verify their identity before a regulatory claim goes public.',
    icon: UserCheck,
  },
  {
    id: 'publish',
    n: '04',
    title: 'Publish, sign and anchor',
    body: 'The version is signed, anchored on Hyperledger Fabric and frozen. QR and NFC identifiers are issued once and stay stable across every future version.',
    icon: Send,
  },
] as const;

type StepId = (typeof STEPS)[number]['id'];

export function PublishFlow() {
  const [active, setActive] = useState<StepId>('assemble');
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent, i: number) => {
    const dir = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (i + dir + STEPS.length) % STEPS.length;
    setActive(STEPS[next].id);
    tabs.current[next]?.focus();
  };

  return (
    <section id="how-it-works" className="scroll-mt-28 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="How a passport gets published"
          title="Composed from your data."
          accent="Never typed into a form."
          lead="A passport is a regulatory claim. TierraTrace builds it from the records that substantiate it, so every value can be defended — and nothing goes live with a gap."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-10">
          <div role="tablist" aria-label="Publication steps" aria-orientation="vertical" className="flex flex-col gap-2">
            {STEPS.map((s, i) => {
              const selected = active === s.id;
              const Icon = s.icon;
              return (
                <button
                  key={s.id}
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  role="tab"
                  type="button"
                  id={`step-tab-${s.id}`}
                  aria-selected={selected}
                  aria-controls={`step-panel-${s.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(s.id)}
                  onKeyDown={(e) => onKey(e, i)}
                  className={`tt-press group relative w-full rounded-2xl border p-5 text-left ${
                    selected
                      ? 'border-tt-green/40 bg-white shadow-[0_16px_40px_-20px_rgba(8,12,15,0.25)]'
                      : 'border-transparent hover:bg-black/[0.025]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-colors duration-200 ${
                        selected ? 'bg-tt-green text-white' : 'bg-tt-green-50 text-tt-green-ink'
                      }`}
                    >
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[12px] font-semibold tracking-wider text-tt-muted">STEP {s.n}</span>
                      <span className="mt-0.5 block text-[19px] font-semibold leading-snug text-tt-ink">{s.title}</span>
                      <span
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                          selected ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <span className="overflow-hidden">
                          <span className="block pt-2 text-[15px] leading-relaxed text-tt-muted">{s.body}</span>
                        </span>
                      </span>
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`step-panel-${active}`}
            aria-labelledby={`step-tab-${active}`}
            className="relative min-h-[440px] overflow-hidden rounded-[28px] border border-tt-border bg-[linear-gradient(160deg,#f6fcf8,#ffffff_55%)] p-5 sm:p-8"
          >
            <div key={active} className="tt-swap-enter h-full">
              {active === 'assemble' && <AssemblePanel />}
              {active === 'gaps' && <GapsPanel />}
              {active === 'approve' && <ApprovePanel />}
              {active === 'publish' && <PublishPanel />}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- panels ---------- */

function PanelTitle({ children }: { children: ReactNode }) {
  return <p className="text-[13px] font-semibold uppercase tracking-wider text-tt-muted">{children}</p>;
}

function Row({ icon: Icon, title, meta, right }: { icon: typeof Package; title: string; meta: string; right: ReactNode }) {
  return (
    <li className="flex items-center gap-3 rounded-2xl border border-tt-border bg-white px-4 py-3.5">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#f3f4f5]">
        <Icon className="h-5 w-5 text-tt-ink" aria-hidden />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[15px] font-semibold">{title}</span>
        <span className="block truncate text-[13px] text-tt-muted">{meta}</span>
      </span>
      {right}
    </li>
  );
}

const Filled = ({ n }: { n: number }) => (
  <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-tt-green-50 px-2.5 py-1 text-[12px] font-semibold text-tt-green-ink">
    <CircleCheck className="h-3.5 w-3.5" aria-hidden /> {n} fields
  </span>
);

function AssemblePanel() {
  return (
    <div>
      <PanelTitle>Linked source records</PanelTitle>
      <ul className="mt-4 space-y-2.5">
        <Row icon={Package} title="Product spec · PS-114" meta="Materials, composition, care" right={<Filled n={9} />} />
        <Row icon={Layers} title="Batch · LOT-2291" meta="Spinning & knitting, Tiruppur" right={<Filled n={6} />} />
        <Row icon={FileBadge2} title="Certificate · GOTS C-8812" meta="Valid until 14 Mar 2027" right={<Filled n={3} />} />
        <Row icon={Leaf} title="Carbon result · CR-09" meta="Cradle-to-gate, ISO 14067" right={<Filled n={2} />} />
      </ul>
      <p className="mt-5 text-[14px] text-tt-muted">
        20 of 24 fields filled from records. Nothing was typed by hand.
      </p>
    </div>
  );
}

function GapsPanel() {
  const pct = 83;
  return (
    <div>
      <div className="flex items-end justify-between">
        <PanelTitle>Completeness · ESPR textiles template</PanelTitle>
        <span className="text-[34px] font-bold leading-none tracking-tight">{pct}%</span>
      </div>
      <div
        className="mt-4 h-2.5 overflow-hidden rounded-full bg-[#eceef0]"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Passport completeness"
      >
        <div className="tt-meter-fill h-full rounded-full bg-tt-green" style={{ width: `${pct}%` }} />
      </div>
      <div className="mt-2 flex gap-4 text-[12px] text-tt-muted">
        <span>Mandatory 20/22</span>
        <span>Recommended 5/6</span>
      </div>

      <div className="mt-6 rounded-2xl border border-tt-amber/25 bg-tt-amber-50 p-4">
        <p className="flex items-center gap-2 text-[14px] font-semibold text-tt-amber">
          <CircleAlert className="h-4 w-4" aria-hidden /> Publishing blocked — 2 mandatory fields missing
        </p>
        <ul className="mt-3 space-y-2">
          {[
            { f: 'Substances of concern', r: 'Product spec · PS-114' },
            { f: 'Repair instructions', r: 'Document · care & repair' },
          ].map((g) => (
            <li key={g.f} className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-white px-3.5 py-2.5 text-[14px]">
              <span className="font-medium">{g.f}</span>
              <span className="inline-flex items-center gap-1 font-semibold text-tt-green-ink">
                Complete in {g.r} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ApprovePanel() {
  return (
    <div className="flex h-full flex-col">
      <PanelTitle>Approval request</PanelTitle>
      <div className="mt-4 rounded-2xl border border-tt-border bg-white p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[17px] font-semibold">Combed Cotton Crew Tee — v3.2</p>
            <p className="text-[13px] text-tt-muted">Submitted by Compliance · 4 new lots linked</p>
          </div>
          <span className="rounded-full bg-[#f3f4f5] px-2.5 py-1 text-[12px] font-semibold text-tt-muted">Awaiting</span>
        </div>
        <ol className="mt-5 space-y-3 border-l-2 border-tt-border pl-5">
          <li className="relative text-[14px]">
            <span className="absolute -left-[27px] top-1 h-3 w-3 rounded-full bg-tt-green ring-4 ring-white" />
            Completeness 100% — all mandatory fields sourced
          </li>
          <li className="relative text-[14px]">
            <span className="absolute -left-[27px] top-1 h-3 w-3 rounded-full bg-tt-green ring-4 ring-white" />
            Preview matches the public verify page
          </li>
          <li className="relative text-[14px] font-semibold">
            <span className="tt-pulse absolute -left-[27px] top-1 h-3 w-3 rounded-full bg-tt-green ring-4 ring-white" />
            Head of Quality to approve
          </li>
        </ol>
      </div>
      <div className="mt-4 flex items-center gap-3 rounded-2xl border border-tt-green/30 bg-tt-green-50 p-4">
        <Fingerprint className="h-6 w-6 shrink-0 text-tt-green-ink" aria-hidden />
        <p className="text-[14px] leading-snug">
          <span className="font-semibold">Step-up authentication required.</span>{' '}
          <span className="text-tt-muted">The approver re-verifies with MFA before signing off.</span>
        </p>
      </div>
    </div>
  );
}

function PublishPanel() {
  return (
    <div>
      <PanelTitle>Published</PanelTitle>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-tt-border bg-white p-5">
          <ShieldCheck className="h-6 w-6 text-tt-green-ink" aria-hidden />
          <p className="mt-3 text-[15px] font-semibold">Signed &amp; anchored</p>
          <p className="mt-1 break-all font-mono text-[12px] text-tt-muted">tx 0x7f3a9d…41b8c21e</p>
        </div>
        <div className="rounded-2xl border border-tt-border bg-white p-5">
          <div className="flex gap-2">
            <QrCode className="h-6 w-6 text-tt-green-ink" aria-hidden />
            <Nfc className="h-6 w-6 text-tt-green-ink" aria-hidden />
          </div>
          <p className="mt-3 text-[15px] font-semibold">QR &amp; NFC issued</p>
          <p className="mt-1 text-[13px] text-tt-muted">Same identifiers for every future version</p>
        </div>
      </div>
      <div className="mt-3 rounded-2xl border border-tt-border bg-white p-5">
        <div className="flex items-center justify-between">
          <p className="text-[15px] font-semibold">Version v3.2</p>
          <span className="rounded-full bg-tt-ink px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
            Immutable
          </span>
        </div>
        <p className="mt-1 text-[13px] text-tt-muted">
          Live on the public verify page. Editing creates a new draft — v3.2 never changes.
        </p>
      </div>
    </div>
  );
}

