import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BrainCircuit,
  Car,
  Coffee,
  Cpu,
  Database,
  Fingerprint,
  Gem,
  Landmark,
  Link2,
  Network,
  Pill,
  Recycle,
  ShieldCheck,
  Shirt,
  Ship,
  Wrench,
} from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { Container, Eyebrow, Reveal, SectionHeading } from '../../components/ui';

/* ------------------------------ Logos ------------------------------ */
const LOGOS = ['KPR Mill', 'Vardhman', 'Tata Motors', 'Bosch', 'Sun Pharma', 'Nestlé', 'DHL', 'Maersk', 'Siemens', 'Schneider Electric', 'Samsung', 'Foxconn'];

export function LogoStrip() {
  return (
    <section aria-label="Industries we serve" className="border-y border-tt-border bg-white py-8">
      <p className="text-center text-[15px] font-medium text-tt-muted">Designed for the world's most demanding supply chains</p>
      <div className="relative mt-5 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <ul className="tt-marquee flex w-max gap-14">
          {[...LOGOS, ...LOGOS].map((l, i) => (
            <li key={i} aria-hidden={i >= LOGOS.length} className="whitespace-nowrap text-[20px] font-bold tracking-tight text-tt-ink/35">
              {l}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------ Why ------------------------------ */
const STATS = [
  { n: '42 Bn', l: 'Products tracked', s: '/ yr capacity' },
  { n: '180+', l: 'Countries', s: 'in coverage graph' },
  { n: '99.99%', l: 'Platform SLA', s: 'for enterprise' },
  { n: 'SOC 2', l: 'Type II, ISO 27001', s: 'GDPR Compliant' },
];

export function Why() {
  return (
    <section id="why" className="scroll-mt-28 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why TierraTrace"
          title="The Unified"
          accent="Trust Infrastructure."
          lead="Global regulators, buyers and consumers now demand proof — not claims. TierraTrace turns your supply chain into a source of truth through verifiable traceability, Digital Product Passports and enterprise blockchain infrastructure."
        />
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          <Reveal className="lg:row-span-2">
            <div className="flex h-full flex-col rounded-[28px] bg-tt-ink p-8 text-white">
              <p className="text-[13px] font-semibold uppercase tracking-wider text-tt-green">Secured by Hyperledger Fabric</p>
              <h3 className="mt-4 text-[28px] font-bold leading-tight tracking-tight">Verifiable Trust</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-white/70">
                Built on Hyperledger Fabric, every transaction is cryptographically anchored for immutable, auditable, and
                tamper-proof trust across the ecosystem.
              </p>
              <p className="mt-auto pt-10 text-[12px] font-semibold tracking-[0.3em] text-white/50">TRACK • VERIFY • TRUST • TRANSFORM</p>
            </div>
          </Reveal>
          {[
            {
              e: 'One Platform to Track Everything',
              t: 'Radical Transparency',
              d: 'From raw materials to end customers, track every movement, every event, and every stakeholder in real time on a single, unified platform.',
            },
            {
              e: 'Empowering the Circular Economy',
              t: 'Built for Circularity',
              d: 'Digital Product Passports carry forward a verifiable history — enabling reuse, remanufacture, and responsible end-of-life.',
            },
          ].map((c, i) => (
            <Reveal key={c.t} delay={60 + i * 60} className="lg:col-span-2">
              <div className="h-full rounded-[28px] border border-tt-border bg-white p-8">
                <Eyebrow>{c.e}</Eyebrow>
                <h3 className="mt-3 text-[26px] font-bold tracking-tight">{c.t}</h3>
                <p className="mt-2 max-w-[620px] text-[17px] leading-relaxed text-tt-muted">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <ul className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal as="li" key={s.l} delay={i * 50}>
              <div className="rounded-[24px] border border-tt-border bg-white p-6">
                <p className="text-[34px] font-bold leading-none tracking-tight sm:text-[40px]">{s.n}</p>
                <p className="mt-3 text-[15px] font-semibold">{s.l}</p>
                <p className="text-[13px] text-tt-muted">{s.s}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ------------------------------ Platform (the six products) ------------------------------ */
export function PlatformGrid() {
  return (
    <section id="platform" className="scroll-mt-28 bg-[#fafbfa] py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="The platform"
          title="Six products."
          accent="One source of truth."
          lead="Start with the passport, add traceability, carbon, verification, insights and integrations as you scale — every product shares the same event graph."
          align="center"
        />
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal as="li" key={p.slug} delay={(i % 3) * 70}>
                <Link
                  to={`/platform/${p.slug}`}
                  className="tt-press group flex h-full flex-col rounded-[24px] border border-tt-border bg-white p-7 hover:border-tt-green/35 hover:shadow-[0_20px_50px_-28px_rgba(8,12,15,0.3)]"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-tt-green-50 text-tt-green-ink transition-colors duration-300 group-hover:bg-tt-green group-hover:text-white">
                    <Icon className="h-[22px] w-[22px]" aria-hidden />
                  </span>
                  <h3 className="mt-6 text-[22px] font-semibold tracking-tight">TierraTrace {p.name}</h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-tt-muted">{p.tagline}</p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-6 text-[15px] font-semibold text-tt-green-ink">
                    Explore {p.name}
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

/* ------------------------------ Lifecycle ------------------------------ */
const STAGES = [
  ['Raw material', 'Source origin, certifications and impact captured at point of extraction.'],
  ['Manufacture', 'Batches, components and process events anchored in real time.'],
  ['Logistics', 'Movements, custody transfers and conditions across every leg.'],
  ['Distribution & retail', 'Warehouse, retailer and marketplace flows unified in one graph.'],
  ['Use', 'Ownership, service history and consumer engagement follow the product.'],
  ['Repair & reuse', 'Extend product life with verifiable maintenance and secondhand records.'],
  ['Recycle', 'Certified end-of-life with recovered material claims for the next passport.'],
];

export function Lifecycle() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="End-to-end traceability"
          title="From raw material"
          accent="to reuse."
          lead="A single event graph follows every product through its full lifecycle — no blind spots, no reconciliation, no lost provenance."
        />
        <ol className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
          {STAGES.map(([t, d], i) => (
            <Reveal as="li" key={t} delay={i * 50}>
              <div className="relative h-full rounded-2xl border border-tt-border bg-white p-5">
                <p className="text-[12px] font-semibold tracking-wider text-tt-green-ink">STAGE {String(i + 1).padStart(2, '0')}</p>
                <p className="mt-2 text-[17px] font-semibold leading-snug">{t}</p>
                <p className="mt-2 text-[14px] leading-relaxed text-tt-muted">{d}</p>
              </div>
            </Reveal>
          ))}
        </ol>
        <Link
          to="/platform/trace"
          className="mt-8 inline-flex items-center gap-1 text-[16px] font-semibold text-tt-green-ink hover:underline"
        >
          See how TierraTrace Trace works <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </Container>
    </section>
  );
}

/* ------------------------------ Industries ------------------------------ */
const INDUSTRIES = [
  { t: 'Textile & Apparel', i: Shirt, d: 'Track every garment from fibre to finished product.', b: ['Fibre-to-Garment Traceability', 'ESG & Sustainability', 'EU Digital Product Passport', 'Supplier Transparency'] },
  { t: 'Pharmaceuticals', i: Pill, d: 'Secure every medicine with end-to-end batch traceability.', b: ['Batch & Lot Tracking', 'GMP Compliance', 'Cold Chain Monitoring', 'Anti-Counterfeit Protection'] },
  { t: 'Automotive', i: Car, d: 'Monitor every component from raw material to vehicle assembly.', b: ['Component Traceability', 'Recall Management', 'Warranty Records', 'Supplier Network Visibility'] },
  { t: 'Electronics', i: Cpu, d: 'Trace semiconductors, PCBs, batteries and assemblies.', b: ['Component Traceability', 'Manufacturing History', 'Product Authentication', 'Warranty Lifecycle'] },
  { t: 'Logistics & Shipping', i: Ship, d: 'Track cargo across road, rail, sea and air.', b: ['Multi-Modal Tracking', 'Shipment Visibility', 'Customs Documentation', 'Real-Time Logistics'] },
  { t: 'Coffee', i: Coffee, d: 'Deliver complete farm-to-cup transparency.', b: ['Farm-to-Cup Traceability', 'Origin Verification', 'Sustainability Metrics', 'Fair Trade Records'] },
  { t: 'Luxury Goods', i: Gem, d: 'Authenticate premium products with secure digital identities.', b: ['Digital Authentication', 'Ownership History', 'Provenance Tracking', 'Anti-Counterfeit Security'] },
  { t: 'Custom Enterprise', i: Wrench, d: 'Industry-specific traceability for your requirements.', b: ['Custom Workflows', 'Enterprise Integrations', 'Blockchain Infrastructure', 'Global Compliance'] },
];

export function Industries() {
  return (
    <section id="industries" className="scroll-mt-28 bg-[#fafbfa] py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Industries"
          title="Built for Every Industry."
          accent="Designed to Trace."
          lead="TierraTrace enables end-to-end traceability, transparency and Digital Product Passports across global supply chains."
        />
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((ind, k) => (
            <Reveal as="li" key={ind.t} delay={(k % 4) * 50}>
              <article className="h-full rounded-[24px] border border-tt-border bg-white p-6">
                <ind.i className="h-6 w-6 text-tt-green-ink" aria-hidden />
                <h3 className="mt-4 text-[19px] font-semibold">{ind.t}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-tt-muted">{ind.d}</p>
                <ul className="mt-4 space-y-1.5">
                  {ind.b.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-[13px] font-medium">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-tt-green" /> {b}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ------------------------------ Capabilities ------------------------------ */
const CAPS = [
  { t: 'Identity & Attestation', i: Fingerprint, d: 'Cryptographically verifiable identities for products, batches, serial numbers, QR, NFC and RFID.' },
  { t: 'AI Data Intelligence', i: BrainCircuit, d: 'Models analyse supplier data, detect anomalies, predict risks and generate operational insights.' },
  { t: 'Compliance Engine', i: ShieldCheck, d: 'Automate ESG scoring, Digital Product Passport validation, policy enforcement and regulatory workflows.' },
  { t: 'Immutable Ledger', i: Link2, d: 'Hyperledger Fabric provides tamper-proof records, immutable audit trails and enterprise trust.' },
  { t: 'Global Data Mesh', i: Network, d: 'Federated architecture connecting manufacturers, suppliers, logistics, retailers and regulators.' },
  { t: 'Regulatory Gateway', i: Landmark, d: 'Secure APIs for passport exchanges, customs authorities and regulatory platforms.' },
];

export function Capabilities() {
  return (
    <section id="resources" className="scroll-mt-28 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Platform capabilities"
          title="Enterprise-grade primitives"
          accent="for product truth."
          lead="A modern platform stack engineered to deliver verifiable trust across complex, multi-enterprise supply chains."
          align="center"
        />
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CAPS.map((c, i) => (
            <Reveal as="li" key={c.t} delay={(i % 3) * 60}>
              <div className="h-full rounded-[24px] border border-tt-border bg-white p-7">
                <c.i className="h-6 w-6 text-tt-green-ink" aria-hidden />
                <h3 className="mt-5 text-[20px] font-semibold">{c.t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-tt-muted">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ------------------------------ Compliance ------------------------------ */
const REGS = [
  ['EU Digital Product Passport (ESPR)', 'European Union'],
  ['CBAM', 'European Union'],
  ['EU Battery Regulation', 'European Union'],
  ['France AGEC', 'France'],
  ['UK Plastic Packaging Tax', 'United Kingdom'],
  ['US FTC Green Guides', 'United States'],
];

export function Compliance() {
  return (
    <section id="compliance" className="scroll-mt-28 bg-[#fafbfa] py-24 sm:py-32">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Compliance & sustainability"
            title="Stay ahead of every product mandate —"
            accent="worldwide."
            lead="TierraTrace continuously maps evolving global regulations to your products and automatically generates regulator-ready evidence across the entire supply chain."
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ['Enterprise Data Integration', 'Unified ingestion from ERP, MES, PLM, supplier and logistics systems.', Database],
              ['Trust & Verification Engine', 'Cryptographically verifiable claims powered by Hyperledger Fabric.', ShieldCheck],
              ['Continuous Compliance', 'Audit-ready evidence for every SKU, batch and shipment.', Recycle],
              ['Enterprise ESG Intelligence', 'Sustainability analytics, carbon accounting and executive reporting.', BrainCircuit],
            ].map(([t, d, I]) => {
              const Icon = I as typeof Database;
              return (
                <li key={t as string}>
                  <Icon className="h-5 w-5 text-tt-green-ink" aria-hidden />
                  <p className="mt-2 text-[16px] font-semibold">{t as string}</p>
                  <p className="mt-1 text-[14px] leading-relaxed text-tt-muted">{d as string}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <Reveal delay={80}>
          <div className="rounded-[28px] border border-tt-border bg-white p-5 shadow-[0_30px_80px_-40px_rgba(8,12,15,0.3)] sm:p-7">
            <p className="text-[15px] font-semibold">Compliance Workspace</p>
            <ul className="mt-4 space-y-2">
              {REGS.map(([r, j]) => (
                <li key={r} className="flex items-center justify-between gap-3 rounded-2xl border border-tt-border px-4 py-3">
                  <span>
                    <span className="block text-[15px] font-semibold">{r}</span>
                    <span className="block text-[13px] text-tt-muted">{j}</span>
                  </span>
                  <span className="shrink-0 rounded-full bg-tt-green-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-tt-green-ink">
                    Mapped
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-center text-[12px] font-semibold tracking-[0.2em] text-tt-muted">GS1 · W3C · ISO 14067 · EU DPP · HYPERLEDGER</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
