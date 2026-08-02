import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Layers,
  ShieldCheck,
  Route as RouteIcon,
  Leaf,
  CircuitBoard,
  ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/resources/documentation")({
  head: () => ({
    meta: [
      { title: "Documentation — TierraTrace" },
      {
        name: "description",
        content:
          "Platform documentation for TierraTrace — how provisioning works, core modules, and how traceability, passport, verification, and carbon connect as a single flow.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.tierratrace.in/resources/documentation",
      },
    ],
  }),
  component: DocumentationPage,
});

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const MODULES = [
  {
    icon: ShieldCheck,
    title: "TierraTrace Passport",
    href: "/platform/passport",
    desc: "Issue EU-compliant Digital Product Passports with cryptographically verifiable identities for every product, batch, or serial number.",
    tag: "Core",
  },
  {
    icon: RouteIcon,
    title: "TierraTrace Trace",
    href: "/platform/traceability",
    desc: "Track every supply chain event — from raw material sourcing to logistics and retail — in a single, tamper-proof event graph.",
    tag: "Core",
  },
  {
    icon: ShieldCheck,
    title: "TierraTrace Verify",
    href: "/platform/verify",
    desc: "Eight-stage cryptographic verification pipeline. A QR scan resolves to a defensible pass or fail in under three seconds.",
    tag: "Core",
  },
  {
    icon: Leaf,
    title: "TierraTrace Carbon",
    href: "/platform/carbon",
    desc: "Scope 1–3 emissions tracking, CBAM-aligned carbon accounting, and ESG reporting tied to the passport lifecycle.",
    tag: "Sustainability",
  },
  {
    icon: CircuitBoard,
    title: "TierraTrace Connect",
    href: "/platform/connect",
    desc: "OpenAPI 3.1 Gateway, pre-built ERP/MES connectors, webhooks, and event streaming for enterprise system integration.",
    tag: "Integration",
  },
];

const FLOW_STEPS = [
  {
    step: "01",
    title: "Provision a workspace",
    desc: "An organisation gets a TierraTrace workspace — a scoped environment with its own members, product registry, and API keys. Provisioning is handled by the identity layer (see TierraTrace Auth).",
  },
  {
    step: "02",
    title: "Define your product schema",
    desc: "Map your product hierarchy — categories, attributes, certifications, and the data fields each passport must carry. Schemas are validated against the EU ESPR data model and can be customised per product line.",
  },
  {
    step: "03",
    title: "Connect your data sources",
    desc: "Use TierraTrace Connect to wire in your ERP (SAP, Oracle, Dynamics), MES, or supplier portals. Events flow in via webhooks, REST, or direct connector — each one anchored to the Hyperledger Fabric ledger.",
  },
  {
    step: "04",
    title: "Issue passports",
    desc: "Once your schema is live and events are flowing, TierraTrace issues a Digital Product Passport for each product or batch. Every passport gets a QR code, a unique identifier, and a cryptographic signature.",
  },
  {
    step: "05",
    title: "Verify and share",
    desc: "Consumers, regulators, and partners scan the QR code. TierraTrace Verify runs the eight-stage pipeline and returns a signed, human-readable result — no app, no account required.",
  },
];

function DocumentationPage() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-32 pb-16">
        <div
          aria-hidden
          className="absolute -top-24 right-0 w-[560px] h-[560px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(16,195,90,0.09) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-[1240px] px-6">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-[13px] text-ink-muted">
            <Link
              to="/resources"
              className="hover:text-primary transition-colors"
            >
              Resources
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-ink">Documentation</span>
          </nav>

          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-primary">
              <BookOpen className="h-3 w-3" />
              Documentation
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-3xl text-[42px] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-[54px]">
              How TierraTrace{" "}
              <span className="text-primary">works, end to end.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-5 max-w-2xl text-[17px] leading-[1.65] text-ink-muted">
              This is the on-ramp for anyone evaluating the platform who wants
              more depth than the product pages. Conceptual, not a code
              reference — for the API surface, see{" "}
              <Link
                to="/resources/api-reference"
                className="text-primary underline-offset-2 hover:underline"
              >
                API Reference
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* Platform flow */}
      <section className="py-16 border-t border-black/5">
        <div className="mx-auto max-w-[1240px] px-6">
          <Reveal>
            <h2 className="text-[28px] font-semibold tracking-tight text-ink sm:text-[34px]">
              The platform in{" "}
              <span className="text-primary">five steps</span>
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-[1.65] text-ink-muted">
              From workspace provisioning to a consumer scanning a QR code —
              here's how everything fits together.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FLOW_STEPS.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.06}>
                <div className="group relative flex flex-col h-full rounded-2xl border border-black/6 bg-white p-6 transition-all duration-300 hover:border-primary/25 hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.07)]">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-primary/60 mb-3">
                    Step {step.step}
                  </div>
                  <h3 className="text-[17px] font-semibold tracking-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-[1.65] text-ink-muted flex-1">
                    {step.desc}
                  </p>
                  {/* Step connector line */}
                  {i < FLOW_STEPS.length - 1 && (
                    <div className="absolute -right-2 top-1/2 hidden -translate-y-1/2 lg:block">
                      <ArrowRight className="h-4 w-4 text-primary/30" />
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core modules */}
      <section className="py-16 border-t border-black/5 bg-surface/40">
        <div className="mx-auto max-w-[1240px] px-6">
          <Reveal>
            <h2 className="text-[28px] font-semibold tracking-tight text-ink sm:text-[34px]">
              Core modules
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-[1.65] text-ink-muted">
              Each module is a distinct capability — they're designed to work
              together as a single traceability flow, not as standalone tools.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((mod, i) => {
              const Icon = mod.icon;
              return (
                <Reveal key={mod.title} delay={i * 0.05}>
                  <Link
                    to={mod.href}
                    className="group flex h-full flex-col rounded-2xl border border-black/6 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.07)]"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/8 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </div>
                      <span className="rounded-full border border-black/8 px-2.5 py-0.5 text-[11px] font-medium text-ink-muted">
                        {mod.tag}
                      </span>
                    </div>
                    <h3 className="mt-4 text-[16px] font-semibold tracking-tight text-ink">
                      {mod.title}
                    </h3>
                    <p className="mt-2 flex-1 text-[13px] leading-[1.65] text-ink-muted">
                      {mod.desc}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-[13px] font-medium text-primary">
                      <span>Learn more</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* The connected flow */}
      <section className="py-20 border-t border-black/5">
        <div className="mx-auto max-w-[1240px] px-6">
          <Reveal>
            <h2 className="text-[28px] font-semibold tracking-tight text-ink sm:text-[34px]">
              One connected flow
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-[1.75] text-ink-muted">
              Traceability, passport, verification, and carbon aren't four
              separate stories — they're one. A supply chain event feeds
              Traceability. Traceability informs the Passport. The Passport is
              what Verify checks. Carbon accounting runs alongside every leg of
              that journey. The result is a single, verifiable source of truth
              for each product — from raw material to end-of-life.
            </p>
          </Reveal>

          {/* Flow diagram */}
          <Reveal delay={0.1} className="mt-12">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0 overflow-x-auto pb-4">
              {[
                { label: "Supply chain event", color: "bg-surface border-black/8" },
                { label: "Traceability graph", color: "bg-primary/5 border-primary/15" },
                { label: "Digital passport", color: "bg-primary/10 border-primary/25" },
                { label: "Verify", color: "bg-primary/15 border-primary/30" },
                { label: "Carbon accounting", color: "bg-primary/8 border-primary/15" },
              ].map((node, i) => (
                <div key={node.label} className="flex items-center shrink-0">
                  <div
                    className={`flex h-16 w-full sm:w-36 items-center justify-center rounded-xl border px-3 text-center text-[12px] font-semibold text-ink ${node.color}`}
                  >
                    {node.label}
                  </div>
                  {i < 4 && (
                    <ArrowRight className="mx-2 hidden sm:block h-4 w-4 shrink-0 text-primary/40" />
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.18} className="mt-12">
            <div className="rounded-2xl border border-primary/15 bg-primary/5 p-6 sm:p-8">
              <p className="text-[14px] font-medium text-ink/80 leading-[1.7]">
                <span className="text-primary font-semibold">Need more detail?</span>{" "}
                The platform PRDs that this documentation is based on live in
                the engineering repo. If you're an enterprise evaluating the
                platform, the{" "}
                <Link
                  to="/resources/whitepapers"
                  className="text-primary underline-offset-2 hover:underline"
                >
                  EU DPP Whitepaper
                </Link>{" "}
                and{" "}
                <Link
                  to="/resources/whitepapers"
                  className="text-primary underline-offset-2 hover:underline"
                >
                  CBAM Playbook
                </Link>{" "}
                are the best starting points for understanding scope and
                compliance coverage.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
