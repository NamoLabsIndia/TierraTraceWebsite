import { Building2, FileArchive, Globe, MapPin, Radar, ScanLine, Smartphone, Users } from 'lucide-react';
import { Container, Reveal, SectionHeading } from '../../../components/ui';

/* The two surfaces (PRD "Two Surfaces of web-verify") + the fraud platform (§12.8). */
export function Surfaces() {
  return (
    <section className="bg-[#fafbfa] py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Two surfaces, one engine"
          title="Simple for shoppers."
          accent="Rigorous for your teams."
          align="center"
        />
        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-[28px] border border-tt-border bg-white p-7 sm:p-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-tt-green-50 px-3 py-1 text-[12px] font-semibold text-tt-green-ink">
                <Globe className="h-3.5 w-3.5" aria-hidden /> Public · no account needed
              </span>
              <h3 className="mt-5 text-[26px] font-bold leading-tight tracking-tight">For consumers and regulators</h3>
              <ul className="mt-5 space-y-4">
                {[
                  [Smartphone, 'Scan to verdict in about two seconds', 'Mobile-first, one-handed, in your brand colours — with plain-language results.'],
                  [FileArchive, 'Proof anyone can re-check', 'Regulators download a proof bundle and verify it offline with open tooling — no need to trust us.'],
                  [MapPin, 'Privacy-first', 'No account, no tracking ID, no precise location stored for public scans.'],
                ].map(([I, t, d]) => {
                  const Icon = I as typeof Globe;
                  return (
                    <li key={t as string} className="flex gap-3">
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-tt-green-ink" aria-hidden />
                      <span>
                        <span className="block text-[16px] font-semibold">{t as string}</span>
                        <span className="block text-[14px] leading-relaxed text-tt-muted">{d as string}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </article>
          </Reveal>
          <Reveal delay={80}>
            <article className="h-full rounded-[28px] border border-tt-border bg-white p-7 sm:p-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#f3f4f5] px-3 py-1 text-[12px] font-semibold text-tt-ink">
                <Building2 className="h-3.5 w-3.5" aria-hidden /> Enterprise console
              </span>
              <h3 className="mt-5 text-[26px] font-bold leading-tight tracking-tight">For brand and quality teams</h3>
              <ul className="mt-5 space-y-4">
                {[
                  [ScanLine, 'Bulk verification', 'Check 50,000 identifiers before a shipment leaves, with an evidence report per item.'],
                  [Users, 'Supplier & certificate validation', 'Validate inbound lots and certificates against issuers before you accept them.'],
                  [Radar, 'Human review when needed', 'Inconclusive results and consumer reports route to a review queue with full history.'],
                ].map(([I, t, d]) => {
                  const Icon = I as typeof Globe;
                  return (
                    <li key={t as string} className="flex gap-3">
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-tt-green-ink" aria-hidden />
                      <span>
                        <span className="block text-[16px] font-semibold">{t as string}</span>
                        <span className="block text-[14px] leading-relaxed text-tt-muted">{d as string}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </article>
          </Reveal>
        </div>

        <Reveal className="mt-4">
          <div className="grid grid-cols-1 gap-6 rounded-[28px] bg-tt-ink p-7 text-white sm:p-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-wider text-tt-green">Fraud & risk</p>
              <h3 className="mt-3 text-[28px] font-bold leading-tight tracking-tight">Every scan makes the network smarter.</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-white/70">
                Cloned labels, impossible travel, scans before a lot has shipped — duplicate-code abuse is flagged within minutes, with the
                evidence attached.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#b42318] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider">Critical</span>
                <span className="text-[12px] text-white/50">Alert · 4 min ago</span>
              </div>
              <p className="mt-3 text-[16px] font-semibold">Impossible travel on one unit code</p>
              <p className="mt-1 text-[14px] text-white/70">Verified in São Paulo at 14:02 and Warsaw at 14:19 — over 900 km/h apart.</p>
              <div className="mt-4 flex flex-wrap gap-2 text-[12px]">
                {['Duplicate code', '2 regions', '37 scans', 'Watchlist: no'].map((t) => (
                  <span key={t} className="rounded-full border border-white/15 px-2.5 py-1 text-white/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
