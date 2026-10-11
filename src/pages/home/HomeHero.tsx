import { lazy, Suspense, useEffect, useState } from 'react';
import { BadgeCheck, Calendar, Factory, FileBadge2, Fingerprint, Globe2, Layers, Leaf, MapPin, Recycle, ShieldCheck, Truck } from 'lucide-react';
import logo from '../../assets/tierratrace-logo.png';
import { Container, PrimaryButton, SecondaryButton, Reveal } from '../../components/ui';

const EarthGlobe = lazy(() => import('./EarthGlobe'));

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-10 sm:pt-16">
      <Container className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h1 className="tt-swap-enter text-[48px] font-bold leading-[1.02] tracking-[-0.035em] sm:text-[72px]">
            Every product.
            <br />
            Every journey.
            <span className="block text-tt-green">We trace it.</span>
          </h1>
          <p className="tt-swap-enter mt-8 max-w-[620px] text-[18px] leading-[1.65] text-tt-muted text-pretty [animation-delay:80ms] sm:text-[20px]">
            TierraTrace enables manufacturers to issue secure Digital Product Passports and achieve end-to-end traceability
            across the complete product lifecycle—from raw materials to recycling.
          </p>
          <div className="tt-swap-enter mt-10 flex flex-wrap gap-3 [animation-delay:140ms]">
            <PrimaryButton to="pilot">Request Pilot</PrimaryButton>
            <SecondaryButton to="platform">Explore Platform</SecondaryButton>
          </div>
        </div>

        <HeroGlobe />
      </Container>

      <Container className="relative mt-16">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: 'Trusted Identity', d: 'Unique digital identity for every product', i: Fingerprint },
            { t: 'End-to-End Visibility', d: 'Track every movement in real time', i: Globe2 },
            { t: 'Sustainability by Design', d: 'Enable circularity & reduce impact', i: Recycle },
            { t: 'Compliance Ready', d: 'Built for global standards & regulations', i: ShieldCheck },
          ].map((p, i) => (
            <Reveal as="li" key={p.t} delay={i * 60}>
              <div className="flex h-full items-start gap-3.5 rounded-2xl border border-tt-border bg-white/80 p-5 backdrop-blur">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-tt-green-50 text-tt-green-ink">
                  <p.i className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-[17px] font-semibold">{p.t}</span>
                  <span className="mt-0.5 block text-[14px] text-tt-muted">{p.d}</span>
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

const STOPS = [
  {
    lat: 36.6, lng: 117.0, tag: 'Raw API sourced', title: 'Pharmaceutical Supply Chain', place: 'Shandong, China',
    rows: [['API source', 'Shandong Pharma Chem', Factory], ['Batch', '#API-CH-9001', Layers], ['GMP cert', 'China GMP', ShieldCheck], ['Carbon', '35.0 kg CO₂e', Leaf], ['Certificate', 'ICH Q7 Compliant', FileBadge2], ['Timestamp', '04:00 UTC', Calendar]],
  },
  {
    lat: 18.95, lng: 72.95, tag: 'Global export', title: 'Pharmaceutical Supply Chain', place: 'Nhava Sheva Port, India',
    rows: [['Supplier', 'JNPT Port Authority', Truck], ['Batch', '#SHP-4490', Layers], ['Reg approval', 'EMA Cleared', ShieldCheck], ['Carbon', '210.0 kg CO₂e', Leaf], ['Certificate', 'Export Licence', FileBadge2], ['Timestamp', '18:30 UTC', Calendar]],
  },
  {
    lat: 52.52, lng: 13.4, tag: 'Administered to patient', title: 'Pharmaceutical Supply Chain', place: 'Berlin, Germany',
    rows: [['Supplier', 'End Patient', Truck], ['Batch', '#PAT-0001', Layers], ['DPP scan', 'Verified', ShieldCheck], ['Carbon', '214.2 kg CO₂e', Leaf], ['Certificate', 'Safe & Authentic', FileBadge2], ['Timestamp', '11:00 UTC', Calendar]],
  },
] as const;

/** Satellite globe + the journey card, cycling through each stop of one shipment's route. */
function HeroGlobe() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % STOPS.length), 5200);
    return () => window.clearInterval(id);
  }, [paused]);
  const s = STOPS[active];

  return (
    <div
      className="tt-swap-enter relative mx-auto aspect-square w-full max-w-[600px] [animation-delay:120ms] lg:mr-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0">
        <Suspense fallback={<div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle_at_35%_30%,#2b5f8a,#0a1d2e_75%)]" />}>
          <EarthGlobe stops={STOPS.map(({ lat, lng }) => ({ lat, lng }))} active={active} />
        </Suspense>
      </div>

      <div
        key={active}
        className="tt-swap-enter pointer-events-none absolute left-1/2 top-[6%] w-[64%] min-w-[250px] max-w-[350px] -translate-x-1/2 rounded-[18px] border border-white/80 bg-white/92 p-4 shadow-[0_24px_60px_-24px_rgba(8,12,15,0.45)] backdrop-blur-md"
        aria-live="polite"
      >
        <div className="flex items-center justify-between gap-2">
          <img src={logo} alt="" className="h-5 w-auto" />
          <span className="rounded-full border border-tt-green/30 bg-tt-green-50 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-tt-green-ink">
            ● {s.tag}
          </span>
        </div>
        <p className="mt-3 text-[15px] font-bold tracking-tight">{s.title}</p>
        <p className="mt-0.5 inline-flex items-center gap-1 text-[10px] text-tt-muted">
          <MapPin className="h-3 w-3 text-tt-green-ink" aria-hidden /> {s.place}
        </p>
        <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 border-t border-tt-border pt-3 text-[10px]">
          {s.rows.map(([k, v, I]) => (
            <div key={k} className="flex gap-1.5">
              <I className="mt-0.5 h-3 w-3 shrink-0 text-tt-green-ink" aria-hidden />
              <div className="min-w-0">
                <dt className="text-[8px] font-semibold uppercase tracking-wider text-tt-muted">{k}</dt>
                <dd className="truncate font-semibold">{v}</dd>
              </div>
            </div>
          ))}
        </dl>
        <div className="mt-3 flex items-center justify-between border-t border-tt-border pt-2 text-[9px] text-tt-muted">
          <span className="inline-flex items-center gap-1">
            <BadgeCheck className="h-3 w-3 text-tt-green-ink" aria-hidden /> Verified on <span className="text-tt-green-ink">TierraTrace</span> Platform
          </span>
          <span>Verified</span>
        </div>
      </div>

      <div className="absolute bottom-[2%] left-1/2 flex -translate-x-1/2 gap-1.5" role="tablist" aria-label="Journey stop">
        {STOPS.map((st, i) => (
          <button
            key={st.place}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={st.place}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-[width,background-color] duration-300 ease-out ${i === active ? 'w-6 bg-tt-green' : 'w-2 bg-tt-ink/20 hover:bg-tt-ink/40'}`}
          />
        ))}
      </div>
    </div>
  );
}
