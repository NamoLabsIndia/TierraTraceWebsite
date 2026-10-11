import { CircleAlert, CircleCheck } from 'lucide-react';
import { Container, Reveal, SectionHeading } from '../../../components/ui';

type Version = {
  v: string;
  state: 'draft' | 'live' | 'superseded';
  title: string;
  meta: string;
};

const VERSIONS: Version[] = [
  { v: 'v3.3', state: 'draft', title: 'Requires update', meta: 'GOTS certificate C-8812 expires in 14 days' },
  { v: 'v3.2', state: 'live', title: '4 new lots linked', meta: 'Published 12 Sep 2026 · approved by Head of Quality' },
  { v: 'v3.1', state: 'superseded', title: 'Carbon result recalculated', meta: 'Published 02 Jul 2026' },
  { v: 'v3.0', state: 'superseded', title: 'ESPR textiles template adopted', meta: 'Published 18 Apr 2026' },
];

const POINTS = [
  'Published versions are frozen — edits open a new draft.',
  'Changes upstream flag the passport before a customer notices.',
  'The public page always resolves to the latest approved version.',
];

export function Versions() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Lifecycle"
            title="A living passport"
            accent="with a permanent memory."
            lead="Products change after launch. Lots are added, certificates renew, footprints get recalculated. TierraTrace keeps the passport current without ever rewriting what was already published."
          />
          <Reveal as="div" className="mt-8">
            <ul className="space-y-3">
              {POINTS.map((p) => (
                <li key={p} className="flex gap-3 text-[17px] leading-relaxed">
                  <CircleCheck className="mt-1 h-5 w-5 shrink-0 text-tt-green-ink" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="rounded-[28px] border border-tt-border bg-white p-3 shadow-[0_30px_80px_-40px_rgba(8,12,15,0.3)] sm:p-4">
            <div className="flex items-center justify-between px-3 pb-3 pt-2">
              <p className="text-[15px] font-semibold">Combed Cotton Crew Tee · Versions</p>
              <span className="text-[13px] text-tt-muted">4 versions</span>
            </div>
            <ol className="space-y-2">
              {VERSIONS.map((ver) => (
                <li
                  key={ver.v}
                  className={`flex items-start gap-4 rounded-2xl border px-4 py-4 ${
                    ver.state === 'live'
                      ? 'border-tt-green/35 bg-tt-green-50'
                      : ver.state === 'draft'
                        ? 'border-dashed border-tt-amber/40 bg-tt-amber-50/60'
                        : 'border-tt-border bg-white'
                  }`}
                >
                  <span
                    className={`mt-0.5 w-12 shrink-0 font-mono text-[14px] font-semibold ${
                      ver.state === 'superseded' ? 'text-tt-muted' : 'text-tt-ink'
                    }`}
                  >
                    {ver.v}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-2">
                      <span className={`text-[15px] font-semibold ${ver.state === 'superseded' ? 'text-tt-ink/70' : ''}`}>
                        {ver.title}
                      </span>
                      <StateBadge state={ver.state} />
                    </span>
                    <span className="mt-0.5 block text-[13px] text-tt-muted">{ver.meta}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function StateBadge({ state }: { state: Version['state'] }) {
  if (state === 'live')
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-tt-green px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-white">
        Live
      </span>
    );
  if (state === 'draft')
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-tt-amber ring-1 ring-tt-amber/30">
        <CircleAlert className="h-3 w-3" aria-hidden /> Draft
      </span>
    );
  return (
    <span className="rounded-full bg-[#f3f4f5] px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-tt-muted">
      Superseded
    </span>
  );
}
