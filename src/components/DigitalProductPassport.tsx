import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Fingerprint, Box, Share2, Scan, CheckCircle2, QrCode, FileText, Beaker } from 'lucide-react';
import logoUrl from '../assets/logo.png';

const Reveal = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export function DigitalProductPassport() {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const JOURNEY_STEPS = [
    { step: "Raw Cotton Harvest", loc: "Rajkot, Gujarat", date: "May 12, 2025", time: "07:45 UTC" },
    { step: "Yarn Spinning", loc: "KPR Mills", date: "May 16, 2025", time: "10:30 UTC" },
    { step: "Garment Manufacturing", loc: "Tiruppur", date: "May 20, 2025", time: "11:05 UTC" },
    { step: "Retail", loc: "Paris", date: "May 26, 2025", time: "10:00 UTC" },
  ];

  // Interactive scanning flow
  const [visibleCount, setVisibleCount] = useState(0);
  const [viewState, setViewState] = useState<'idle' | 'scanning' | 'passport'>('idle');

  useEffect(() => {
    let timeouts: ReturnType<typeof setTimeout>[] = [];

    if (viewState === 'scanning') {
      // 1. Simulate scan delay
      timeouts.push(setTimeout(() => {
        setViewState('passport');
        setVisibleCount(0);
      }, 2500));
    } else if (viewState === 'passport') {
      // 2. Animate passport steps
      const stepDelay = 1500;
      const showNext = (count: number) => {
        if (count < JOURNEY_STEPS.length) {
          timeouts.push(setTimeout(() => {
            setVisibleCount(count + 1);
            showNext(count + 1);
          }, stepDelay));
        } else {
          // 3. Reset to idle after showing all steps for a while
          timeouts.push(setTimeout(() => {
            setViewState('idle');
          }, 6000));
        }
      };
      timeouts.push(setTimeout(() => showNext(0), 800));
    }

    return () => timeouts.forEach(clearTimeout);
  }, [viewState]);

  return (
    <section id="passport" className="relative bg-white w-full overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 pt-20 pb-0 lg:px-[80px] lg:pt-[120px] lg:pb-0">
        
        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Text & Cards */}
          <Reveal className="flex flex-col">
            {/* Pill */}
            <div className="inline-flex items-center self-start rounded-full bg-[#16C15F]/10 px-3 py-1 mb-8">
              <span className="text-[12px] font-bold uppercase tracking-widest text-[#16C15F]">
                Digital Product Passport
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[42px] sm:text-[52px] xl:text-[64px] 2xl:text-[72px] font-bold text-black leading-[1.05] tracking-tight mb-8">
              Every Product.<br />
              One <span className="text-[#16C15F]">Trusted Identity.</span>
            </h2>

            {/* Paragraph */}
            <p className="text-[16px] xl:text-[18px] text-gray-500 leading-relaxed mb-10 max-w-[520px]">
              Every product receives a cryptographically verifiable digital identity containing its origin, manufacturing history, certifications, sustainability data and lifecycle events.
            </p>



            {/* Feature Cards Grid (2x2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
              {[
                { icon: Fingerprint, t: "Product Identity", d: "Every item receives a globally unique Digital Product Passport linked to QR, NFC and enterprise identifiers." },
                { icon: Box, t: "Blockchain Verification", d: "Every supply chain event is cryptographically secured using Hyperledger Fabric." },
                { icon: ShieldCheck, t: "Compliance Ready", d: "Built for ESPR, EU Digital Product Passport, CBAM, ESG and global regulatory frameworks." },
                { icon: Share2, t: "Enterprise APIs", d: "Connect seamlessly with ERP, PLM, MES, WMS and enterprise supply chain systems." }
              ].map((f, i) => (
                <div key={i} className="group flex flex-col rounded-[28px] border border-gray-100 bg-white p-7 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.05] hover:z-10 hover:border-[#16C15F]/40 hover:shadow-2xl cursor-pointer">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#F5FCF7] text-[#16C15F] mb-6 border border-[#16C15F]/10 transition-colors duration-300 group-hover:bg-[#16C15F] group-hover:text-white">
                    <f.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-[17px] font-bold text-black mb-2">{f.t}</h4>
                  <p className="text-[14px] leading-relaxed text-gray-500">{f.d}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* RIGHT COLUMN: iPhone UI */}
          <Reveal delay={0.2} className="relative w-full h-[600px] lg:h-[750px] flex justify-center items-center rounded-[40px] overflow-hidden">
            {/* Background Image of Dress */}
            <img src="/dress_with_qr.png" alt="Organic Dress with QR" className="absolute inset-0 w-full h-full object-cover object-[35%_65%] scale-[1.25]" />
            <div className="absolute inset-0 bg-black/20" />

            {/* iPhone Frame */}
            <div className="relative z-10 w-full max-w-[300px] lg:max-w-[340px] h-[600px] lg:h-[680px] mx-auto lg:mx-0 rounded-[48px] border-12 border-black shadow-2xl overflow-hidden flex flex-col bg-transparent ring-1 ring-white/20">
              
              {/* iPhone Notch */}
              <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-50">
                <div className="w-24 h-6 bg-black rounded-b-2xl"></div>
              </div>

              {/* Viewport for Screen Content */}
              <div className="relative w-full h-full overflow-hidden">

                {/* 1) Scanning Camera / Idle View (Always underneath, visible when transparent) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pt-8 pointer-events-none">
                  
                  {/* Idle State: Tap to Scan Button */}
                  <AnimatePresence>
                    {viewState === 'idle' && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="relative z-20 flex flex-col items-center pointer-events-auto cursor-pointer group"
                        onClick={() => setViewState('scanning')}
                      >
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-lg group-hover:scale-110 transition-transform mb-4 group-hover:bg-white/30">
                          <Scan className="w-8 h-8 text-white drop-shadow-md" />
                        </div>
                        <h3 className="text-white text-sm font-bold tracking-[0.15em] uppercase bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm shadow-md">
                          Tap to Scan Tag
                        </h3>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Scanning State: Reticle */}
                  <AnimatePresence>
                    {viewState === 'scanning' && (
                      <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="relative z-10 flex flex-col items-center"
                      >
                        <div className="relative w-40 h-40 border-2 border-[#16C15F]/60 rounded-2xl flex items-center justify-center mb-6 bg-black/10 backdrop-blur-[1px] shadow-[0_0_30px_rgba(22,193,95,0.2)] overflow-hidden">
                          <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-[#16C15F] rounded-tl-xl -translate-x-1 -translate-y-1"></div>
                          <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-[#16C15F] rounded-tr-xl translate-x-1 -translate-y-1"></div>
                          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-[#16C15F] rounded-bl-xl -translate-x-1 translate-y-1"></div>
                          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-[#16C15F] rounded-br-xl translate-x-1 translate-y-1"></div>
                          
                          <motion.div 
                            animate={{ y: [-70, 70] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", repeatType: "reverse" }}
                            className="w-full h-0.5 bg-[#16C15F] shadow-[0_0_12px_rgba(22,193,95,1)]" 
                          />
                        </div>
                        <h3 className="text-white text-sm font-bold tracking-[0.2em] uppercase bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-sm">Scanning Tag...</h3>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 2) Digital Product Passport App View */}
                <AnimatePresence>
                  {viewState === 'passport' && (
                    <motion.div
                      key="dpp-app"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 z-20 bg-white overflow-y-auto overflow-x-hidden no-scrollbar flex flex-col"
                    >
                      {/* Passport Header */}
                      <div className="flex flex-col gap-4 p-5 border-b border-gray-100 bg-gray-50/50 pt-10">
                        <div className="flex items-center gap-3">
                          <img 
                            src="/polo_shirt.png" 
                            alt="Organic Cotton Polo Shirt" 
                            className="w-16 h-16 object-cover rounded-xl bg-white border border-gray-100 shadow-sm"
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1.5">
                              <img src={logoUrl} alt="TierraTrace" className="h-6 w-auto object-contain" />
                              <span className="w-1 h-1 rounded-full bg-gray-300" />
                              <span className="inline-flex items-center gap-1 rounded-full bg-[#E8F8F0] px-1.5 py-0.5 text-[9px] font-bold text-[#16C15F]">
                                Live
                              </span>
                            </div>
                            <h3 className="text-[15px] font-bold text-black leading-tight">Organic Cotton Polo Shirt</h3>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between bg-white border border-gray-100 rounded-xl p-3 shadow-sm">
                          <div>
                            <div className="text-[11px] text-gray-500 font-medium">Passport ID</div>
                            <div className="text-black font-bold text-[13px]">TT-DPP-009382</div>
                          </div>
                          <div className="w-10 h-10 bg-white border border-gray-100 rounded-lg p-1">
                            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://tierratrace.com/p/TT-DPP-009382" alt="QR" className="w-full h-full opacity-90" />
                          </div>
                        </div>

                        <div className="flex flex-col gap-2">
                          <div className="inline-flex w-fit items-center gap-1.5 rounded-lg bg-[#F5FCF7] px-2.5 py-1.5 border border-[#16C15F]/20 text-[#16C15F]">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span className="text-[11px] font-bold uppercase tracking-wide">Verified Identity</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Issued Timestamp */}
                      <div className="px-5 py-2.5 bg-white border-b border-gray-100 text-[11px] font-medium text-gray-500 text-center">
                        Issued on <span className="text-gray-800">May 28, 2025 • 11:20 UTC</span>
                      </div>

                      {/* Supply Chain Journey */}
                      <div className="p-5 border-b border-gray-100">
                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Supply Chain Journey</h4>
                        
                        <div className="relative pl-5">
                          <div className="absolute left-[9px] top-2 bottom-2 w-[2px] bg-[#16C15F]/20" />
                          
                          <div className="space-y-5">
                            {JOURNEY_STEPS.map((item, i) => (
                              <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={i < visibleCount ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                transition={{ duration: 0.4 }}
                                className="relative grid grid-cols-[1fr_auto] gap-2 items-start"
                              >
                                <div className="absolute left-[-26px] top-0.5 bg-white rounded-full">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16C15F] fill-[#F5FCF7]" />
                                </div>
                                <div>
                                  <div className="text-[13px] font-bold text-black leading-tight">{item.step}</div>
                                  {item.loc && <div className="text-[11px] text-gray-500 mt-0.5">{item.loc}</div>}
                                </div>
                                <div className="text-right shrink-0">
                                  <div className="text-[10px] font-bold text-[#16C15F]">Verified</div>
                                  <div className="text-[10px] text-gray-400 mt-0.5">{item.date}</div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Product Information */}
                      <div className="p-5 bg-gray-50/50 pb-8">
                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Product Information</h4>
                        <div className="space-y-2.5">
                          {[
                            { k: "Origin", v: "India", icon: Globe2 },
                            { k: "Manufacturer", v: "KPR Mills", icon: Box },
                            { k: "Material", v: "100% Organic", icon: FileText },
                            { k: "Footprint", v: "31.4kg CO₂e", icon: ShieldCheck },
                          ].map((row, i) => (
                            <div key={i} className="flex justify-between items-center bg-white p-2.5 rounded-xl border border-gray-100 shadow-sm">
                              <div className="flex items-center gap-2 text-gray-500">
                                <row.icon className="w-3.5 h-3.5 text-gray-400" />
                                <span className="text-[12px]">{row.k}</span>
                              </div>
                              <span className="text-[12px] font-bold text-black">{row.v}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Developed By (Moved inside iPhone) */}
                      <div className="flex justify-center mt-6 mb-8">
                        <div className="flex flex-col items-center gap-0.5 opacity-80">
                          <span className="text-[8px] font-bold text-gray-400 uppercase tracking-[0.3em] leading-none">developed by</span>
                          <img src="/Namo Labs Logo.png" alt="Namo Labs" className="h-16 w-auto object-contain" />
                        </div>
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

const Globe2 = (props: any) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>;
