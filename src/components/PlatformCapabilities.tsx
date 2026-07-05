import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import {
  Fingerprint,
  Brain,
  ClipboardList,
  Blocks,
  Globe2,
  Landmark,
  ShieldCheck,
  Check,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import logoUrl from "@/assets/logo.png";

const FeatureCard = ({
  icon: Icon,
  title,
  desc,
  direction,
}: {
  icon: any;
  title: string;
  desc: string;
  direction: "left" | "right";
}) => {
  // Angled clipping path depending on side
  const clipPath =
    direction === "left"
      ? "polygon(0 0, 93% 0, 100% 50%, 93% 100%, 0 100%)"
      : "polygon(7% 0, 100% 0, 100% 100%, 7% 100%, 0 50%)";

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 p-5 sm:p-6 w-full sm:w-[430px] cursor-pointer bg-white hover:bg-[#fbfbfb] transition-all duration-300 rounded-2xl border border-black/5 lg:border-none lg:rounded-none lg:[clip-path:var(--clip-desktop)]"
      style={{
        "--clip-desktop": clipPath,
        filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.04))",
      } as React.CSSProperties}
    >
      <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <h3 className="text-[18px] sm:text-[20px] font-bold text-ink">{title}</h3>
        </div>
        <p className="text-[13px] leading-[1.6] text-ink-muted">
          {desc}
        </p>
      </div>
      <ArrowRight className="absolute right-6 h-5 w-5 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100 hidden sm:block" />
    </motion.div>
  );
};

const TRUST_PHRASES = ["Built for Trust.", "Built to Trace."];

function TrustTypewriter() {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const full = TRUST_PHRASES[phraseIdx % TRUST_PHRASES.length];
    const speed = isDeleting ? 45 : 90;

    if (!isDeleting && text === full) {
      const t = setTimeout(() => setIsDeleting(true), 1800);
      return () => clearTimeout(t);
    }
    if (isDeleting && text === "") {
      setIsDeleting(false);
      setPhraseIdx((p) => p + 1);
      return;
    }

    const t = setTimeout(() => {
      setText(full.substring(0, text.length + (isDeleting ? -1 : 1)));
    }, speed);
    return () => clearTimeout(t);
  }, [text, isDeleting, phraseIdx]);

  return (
    <span className="relative inline-block">
      {text}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.85 }}
        className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-px rounded-sm bg-primary align-middle"
      />
    </span>
  );
}

export function PlatformCapabilities() {
  const [activeCheck, setActiveCheck] = useState(-1);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      let idx = 0;
      const interval = setInterval(() => {
        setActiveCheck(idx);
        idx = (idx + 1) % 5;
      }, 650);
      return () => clearInterval(interval);
    }, 800);
    return () => clearTimeout(startTimeout);
  }, []);
  return (
    <section id="platform" className="relative overflow-hidden bg-white px-6 py-20 lg:px-[80px] lg:py-[120px]">
      {/* Background corner patterns (Subtle green contour) */}
      <div className="pointer-events-none absolute left-0 top-0 h-[400px] w-[400px] opacity-[0.03]" style={{ background: "radial-gradient(circle at top left, #16C15F 0%, transparent 70%)" }} />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] opacity-[0.03]" style={{ background: "radial-gradient(circle at bottom right, #16C15F 0%, transparent 70%)" }} />

      <div className="mx-auto max-w-[1600px]">
        {/* HEADER */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 inline-flex rounded-full bg-[#EAF9EF] px-5 py-1.5 text-[14px] font-semibold uppercase tracking-[2px] text-primary"
          >
            PLATFORM CAPABILITIES
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-5 text-balance text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[48px] lg:text-[56px]"
          >
            Enterprise-grade <br />primitives for <span className="text-primary">product truth.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-5 max-w-[760px] text-balance text-[16.5px] leading-[1.55] text-ink-muted sm:text-lg"
          >
            A modern platform stack engineered to deliver verifiable trust across
            complex, multi-enterprise supply chains.
          </motion.p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="relative mt-24 flex min-h-[600px] flex-col lg:flex-row items-center justify-between gap-16 lg:gap-0">
          {/* Inward Arrows */}
          <div className="pointer-events-none absolute inset-0 z-0 hidden lg:flex items-center justify-center gap-[340px]">
             <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-[0_8px_16px_rgba(22,193,95,0.2)]">
                <ArrowRight className="h-6 w-6 ml-0.5" strokeWidth={2.5} />
             </div>
             <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-[0_8px_16px_rgba(22,193,95,0.2)]">
                <ArrowLeft className="h-6 w-6 mr-0.5" strokeWidth={2.5} />
             </div>
          </div>

          {/* LEFT COLUMN */}
          <div className="z-10 flex w-full lg:w-auto flex-col gap-4 sm:gap-10">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }} viewport={{ once: true }}>
              <FeatureCard
                direction="left"
                icon={Fingerprint}
                title="Identity & Attestation"
                desc="Create cryptographically verifiable digital identities for products, batches, serial numbers, QR, NFC and RFID."
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }} viewport={{ once: true }}>
              <FeatureCard
                direction="left"
                icon={Brain}
                title="AI Data Intelligence"
                desc="AI models continuously analyse supplier data, detect anomalies, predict risks and generate operational insights."
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }} viewport={{ once: true }}>
              <FeatureCard
                direction="left"
                icon={ClipboardList}
                title="Compliance Engine"
                desc="Automate ESG scoring, Digital Product Passport validation, policy enforcement and regulatory workflows."
              />
            </motion.div>
          </div>

          {/* CENTER HUB */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative z-20 flex h-[400px] w-full max-w-[350px] items-center justify-center"
          >
            {/* Concentric rings removed */}
            
            {/* Hexagon Box */}
            <div
              className="relative flex h-[280px] w-[280px] sm:w-full max-w-[280px] items-center justify-center bg-white shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-transform duration-500 hover:scale-105"
              style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            >
              {/* Inner glowing edge simulation */}
              <div
                className="absolute inset-[2px] flex items-center justify-center bg-white"
                style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              >
                <div className="relative">
                  <img src={logoUrl} alt="TierraTrace Core" className="w-[240px] object-contain opacity-100" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <div className="z-10 flex w-full lg:w-auto flex-col gap-4 sm:gap-10">
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }} viewport={{ once: true }}>
              <FeatureCard
                direction="right"
                icon={Blocks}
                title="Immutable Ledger"
                desc="Powered by Hyperledger Fabric to provide tamper-proof records, immutable audit trails and enterprise trust."
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.55, duration: 0.5, ease: "easeOut" }} viewport={{ once: true }}>
              <FeatureCard
                direction="right"
                icon={Globe2}
                title="Global Data Mesh"
                desc="Federated data architecture connecting manufacturers, suppliers, logistics providers, retailers and regulators."
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.85, duration: 0.5, ease: "easeOut" }} viewport={{ once: true }}>
              <FeatureCard
                direction="right"
                icon={Landmark}
                title="Regulatory Gateway"
                desc="Secure APIs for Digital Product Passport exchanges, customs authorities and regulatory platforms."
              />
            </motion.div>
          </div>
        </div>

        {/* BOTTOM TRUST BAR */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 lg:mt-24 flex flex-col lg:flex-row h-auto lg:h-[110px] w-full max-w-[1450px] items-center justify-between gap-8 lg:gap-0 rounded-[30px] border border-[#ECECEC] bg-white p-8 lg:p-0 lg:px-10 shadow-[0_20px_40px_rgba(0,0,0,0.04)]"
        >
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF9EF] text-primary">
              <ShieldCheck className="h-8 w-8" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-[20px] font-bold text-ink"><TrustTypewriter /></span>
              <span className="text-[20px] font-medium text-ink-muted">Designed for Scale.</span>
            </div>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap lg:h-12 items-center gap-y-3 gap-x-4 sm:gap-x-6 lg:gap-8 border-t lg:border-t-0 lg:border-l border-[#ECECEC] pt-6 lg:pt-0 lg:pl-8 w-full lg:w-auto">
            {[
              "End-to-end Traceability",
              "Enterprise Security",
              "Interoperable by Design",
              "Hyperledger Fabric",
              "AI-Powered Intelligence",
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <motion.div
                  animate={activeCheck === idx ? { scale: [1, 1.45, 1] } : { scale: 1 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                >
                  <Check
                    className="h-5 w-5 transition-colors duration-200"
                    strokeWidth={3}
                    style={{ color: activeCheck === idx ? "#16C15F" : "#bbb" }}
                  />
                </motion.div>
                <span
                  className="text-[14px] font-medium transition-colors duration-200"
                  style={{ color: activeCheck === idx ? "#111111" : "#aaaaaa" }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
