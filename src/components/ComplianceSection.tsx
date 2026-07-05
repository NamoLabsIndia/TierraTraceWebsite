import { motion } from "motion/react";
import {
  Scale,
  ChevronRight,
  Database,
  ShieldCheck,
  FileText,
  LineChart,
  Battery,
  Leaf,
  Shield
} from "lucide-react";


const complianceRows = [
  { id: "eu-dpp", icon: "EU", title: "EU Digital Product Passport (ESPR)", jurisdiction: "European Union", status: "Ready" },
  { id: "cbam", icon: "CBAM", title: "CBAM", jurisdiction: "European Union", status: "Ready" },
  { id: "battery", icon: <Battery className="h-5 w-5" strokeWidth={1.5} />, title: "EU Battery Regulation", jurisdiction: "European Union", status: "Ready" },
  { id: "agec", icon: "AGEC", title: "France AGEC", jurisdiction: "France", status: "Ready" },
  { id: "uk-plastic", icon: <FileText className="h-5 w-5" strokeWidth={1.5} />, title: "UK Plastic Packaging Tax", jurisdiction: "United Kingdom", status: "In review" },
  { id: "ftc", icon: <Leaf className="h-5 w-5" strokeWidth={1.5} />, title: "US FTC Green Guides", jurisdiction: "United States", status: "Ready" },
];

const capabilityRows = [
  {
    icon: <Database className="h-6 w-6" strokeWidth={1.5} />,
    title: "Enterprise Data Integration",
    desc: "Unified ingestion from ERP, MES, PLM, supplier and logistics systems."
  },
  {
    icon: <ShieldCheck className="h-6 w-6" strokeWidth={1.5} />,
    title: "Trust & Verification Engine",
    desc: "Cryptographically verifiable claims powered by Hyperledger Fabric."
  },
  {
    icon: <FileText className="h-6 w-6" strokeWidth={1.5} />,
    title: "Continuous Compliance",
    desc: "Automatically generate audit-ready evidence for every SKU, batch and shipment."
  },
  {
    icon: <LineChart className="h-6 w-6" strokeWidth={1.5} />,
    title: "Enterprise ESG Intelligence",
    desc: "AI-driven sustainability analytics, carbon accounting and executive reporting."
  }
];

export function ComplianceSection() {
  return (
    <section id="compliance" className="relative overflow-hidden bg-white px-6 py-20 lg:px-[80px] lg:py-[120px]">
      
      {/* SECTION HEADER */}
      <div className="mx-auto flex max-w-[900px] flex-col items-center text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 inline-flex rounded-full bg-[#EAF9EF] px-5 py-1.5 text-[14px] font-semibold uppercase tracking-[2px] text-primary"
        >
          COMPLIANCE & SUSTAINABILITY
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-5 text-balance text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[48px] lg:text-[56px]"
        >
          Stay ahead of every <span className="text-primary">product mandate</span> — worldwide.
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-5 max-w-[760px] text-balance text-[16.5px] leading-[1.55] text-ink-muted sm:text-lg"
        >
          TierraTrace continuously maps evolving global regulations to your products and automatically generates regulator-ready evidence across the entire supply chain.
        </motion.p>
      </div>

      {/* THREE-COLUMN LAYOUT */}
      <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-12 lg:flex-row lg:gap-0">
        
        {/* LEFT SIDE: Compliance Workspace (48%) */}
        <div className="relative z-10 w-full lg:w-[48%]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col rounded-[24px] border border-black/5 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
          >
            {/* Header */}
            <div className="mb-6 flex items-center justify-between px-2">
              <span className="text-[13px] font-bold uppercase tracking-widest text-ink-muted">
                Compliance Workspace
              </span>
              <Scale className="h-5 w-5 text-ink-muted" strokeWidth={1.5} />
            </div>

            {/* Rows */}
            <div className="flex flex-col">
              {complianceRows.map((row, idx) => (
                <motion.div
                  key={row.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  viewport={{ once: true }}
                  className={`group relative flex h-[64px] cursor-pointer items-center justify-between rounded-xl border border-transparent px-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-[#FDFDFD] hover:shadow-[0_4px_12px_rgba(22,193,95,0.06)] ${idx !== complianceRows.length - 1 ? "border-b-black/5" : ""}`}
                >
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-[10px] font-bold text-primary">
                      {row.icon}
                    </div>
                    {/* Text */}
                    <div className="flex flex-col gap-0">
                      <span className="text-[14px] font-semibold text-ink">{row.title}</span>
                      <span className="text-[12px] text-ink-muted">{row.jurisdiction}</span>
                    </div>
                  </div>
                  {/* Chevron Only */}
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-ink-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" strokeWidth={2} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Capabilities (48%) */}
        <div className="relative z-10 w-full lg:w-[48%]">
          {/* Capability List */}
          <div className="flex flex-col gap-4">
            {capabilityRows.map((cap, idx) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                viewport={{ once: true }}
                className="group flex items-start gap-4 border-b border-black/5 pb-4 last:border-0 last:pb-0"
              >
                <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                  {cap.icon}
                </div>
                <div className="flex flex-col gap-1 pt-0.5">
                  <h3 className="text-[15px] font-semibold text-ink">{cap.title}</h3>
                  <p className="text-[13px] leading-normal text-ink-muted">{cap.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM TRUST BAR */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="mx-auto mt-20 flex h-auto min-h-[80px] w-full max-w-[1450px] flex-col items-center justify-between gap-6 rounded-[24px] border border-black/5 bg-white px-8 py-5 shadow-[0_8px_24px_rgba(0,0,0,0.03)] lg:flex-row lg:gap-0 lg:py-0"
      >
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <Shield className="h-8 w-8 text-primary" strokeWidth={1.5} />
          <div className="flex flex-col">
            <span className="text-[16px] font-bold leading-tight text-ink">Built for Trust.</span>
            <span className="text-[16px] font-medium leading-tight text-ink-muted">Designed for Scale.</span>
          </div>
        </div>

        {/* Right Side Logos (Typographic representations for enterprise minimalism) */}
        <div className="flex flex-wrap items-center justify-center gap-8 border-t border-black/5 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          
          <div className="flex items-center gap-1.5 opacity-60 grayscale transition-opacity hover:opacity-100">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-[12px] font-bold text-white">GS1</div>
          </div>
          
          <div className="flex items-center gap-1.5 opacity-60 grayscale transition-opacity hover:opacity-100">
            <span className="font-serif text-[28px] font-bold tracking-tighter text-ink">W3C</span>
          </div>
          
          <div className="flex items-center gap-1.5 opacity-60 grayscale transition-opacity hover:opacity-100">
            <span className="text-[24px] font-black tracking-tight text-ink">ISO</span>
            <span className="mt-1 text-[12px] font-bold text-ink">14067</span>
          </div>
          
          <div className="flex items-center gap-1.5 opacity-60 grayscale transition-opacity hover:opacity-100">
            <div className="flex flex-col border-l-2 border-ink pl-2 leading-none">
              <span className="text-[14px] font-bold text-ink">EU</span>
              <span className="text-[14px] font-bold text-ink">DPP</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 opacity-60 grayscale transition-opacity hover:opacity-100">
            <span className="font-mono text-[16px] font-bold text-ink tracking-tight">HYPERLEDGER</span>
          </div>
          
        </div>
      </motion.div>
    </section>
  );
}
