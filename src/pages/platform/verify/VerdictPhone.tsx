import { useState } from 'react';
import { AlertTriangle, Check, CircleHelp, Info, RotateCw, ShieldAlert, ShieldCheck, ShieldQuestion } from 'lucide-react';
import { Segmented } from '../../../components/product';

/*
 * Public verdicts — closed set, normative copy (web-verify PRD §12.1.2, §12.7.6).
 * Never "fake", "counterfeit" or "authentic"; a failure "could not be verified" and routes to a report.
 */
const VERDICTS = {
  verified: {
    label: 'Verified',
    tone: 'bg-tt-green text-white',
    icon: ShieldCheck,
    line: 'Verified',
    sub: 'Checked just now · 8 of 8 checks passed',
  },
  notices: {
    label: 'With notices',
    tone: 'bg-tt-green text-white',
    icon: ShieldCheck,
    line: 'Verified, with 1 notice',
    sub: 'Certificate GOTS C-8812 expires in 14 days',
  },
  inconclusive: {
    label: 'Inconclusive',
    tone: 'bg-[#e6e8eb] text-tt-ink',
    icon: ShieldQuestion,
    line: 'Could not complete verification',
    sub: 'A check is temporarily unavailable — try again',
  },
  failed: {
    label: 'Not verified',
    tone: 'bg-[#b42318] text-white',
    icon: ShieldAlert,
    line: 'This record could not be verified',
    sub: 'You can report a concern to the brand',
  },
  recalled: {
    label: 'Recalled',
    tone: 'bg-tt-amber text-white',
    icon: AlertTriangle,
    line: 'This product has been recalled',
    sub: 'Follow the issuer’s instructions below',
  },
} as const;
type V = keyof typeof VERDICTS;

export function VerdictPhone() {
  const [v, setV] = useState<V>('verified');
  const d = VERDICTS[v];
  const ok = v === 'verified' || v === 'notices';

  return (
    <div>
      <div className="mx-auto w-full max-w-[330px] rounded-[44px] border-[10px] border-tt-ink bg-tt-ink shadow-[0_40px_80px_-30px_rgba(8,12,15,0.5)]">
        <div className="relative overflow-hidden rounded-[34px] bg-white">
          <div aria-hidden className="mx-auto mt-2 h-5 w-24 rounded-full bg-tt-ink" />
          <div key={v} className="tt-swap-enter">
            <div className={`mx-3 mt-3 rounded-2xl px-4 py-4 ${d.tone}`} role="status">
              <d.icon className="h-6 w-6" aria-hidden />
              <p className="mt-2 text-[18px] font-bold leading-tight">{d.line}</p>
              <p className="mt-1 text-[12px] opacity-85">{d.sub}</p>
            </div>

            {v === 'recalled' && (
              <p className="mx-3 mt-2 rounded-xl bg-tt-amber-50 px-3 py-2 text-[11px] text-tt-amber">
                Stop using this item. Return it to any store for a full refund. — Issued by the brand
              </p>
            )}

            <div className="px-4 pt-4">
              <p className="text-[11px] font-medium uppercase tracking-wider text-tt-muted">Combed Cotton Crew Tee</p>
              <p className="text-[16px] font-bold">Made in Tiruppur, India</p>
              <div className="mt-3 flex flex-wrap gap-1 text-[10px] font-semibold">
                {['Journey', 'Sustainability', 'Certificates', 'Proof'].map((t, i) => (
                  <span key={t} className={`rounded-full px-2 py-1 ${i === 3 ? 'bg-tt-ink text-white' : 'bg-[#f3f4f5] text-tt-muted'}`}>
                    {t}
                  </span>
                ))}
              </div>
              <ul className="mt-3 space-y-1.5 pb-4 text-[12px]">
                {[
                  ['Signed by', 'Brand workspace identity'],
                  ['Signature', ok ? 'Valid · Ed25519' : v === 'failed' ? 'Does not match' : v === 'inconclusive' ? 'Not checked' : 'Valid · Ed25519'],
                  ['Ledger anchor', ok || v === 'recalled' ? 'Included · block 1,284,551' : v === 'failed' ? 'Mismatch' : 'Unavailable'],
                ].map(([k, val]) => (
                  <li key={k} className="flex items-center justify-between gap-2 rounded-lg bg-[#fafbfa] px-2.5 py-2">
                    <span className="text-tt-muted">{k}</span>
                    <span className="inline-flex items-center gap-1 font-semibold">
                      {ok && <Check className="h-3 w-3 text-tt-green-ink" aria-hidden />}
                      {val}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between border-t border-tt-border py-3 text-[11px] text-tt-muted">
                {v === 'inconclusive' ? (
                  <span className="inline-flex items-center gap-1 font-semibold text-tt-ink">
                    <RotateCw className="h-3 w-3" aria-hidden /> Try again
                  </span>
                ) : v === 'failed' ? (
                  <span className="font-semibold text-tt-ink">Report a concern</span>
                ) : (
                  <span className="inline-flex items-center gap-1">
                    <Info className="h-3 w-3" aria-hidden /> Download proof
                  </span>
                )}
                <span className="inline-flex items-center gap-1">
                  <CircleHelp className="h-3 w-3" aria-hidden /> How verification works
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <Segmented
          label="Verdict"
          value={v}
          onChange={setV}
          options={(Object.keys(VERDICTS) as V[]).map((k) => ({ id: k, label: VERDICTS[k].label }))}
        />
      </div>
    </div>
  );
}
