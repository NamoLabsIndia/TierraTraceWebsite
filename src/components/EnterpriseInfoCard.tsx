import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Layers, 
  Factory, 
  Barcode, 
  Leaf, 
  BadgeCheck, 
  Calendar, 
  MapPin,
  Box,
  Truck,
  Activity,
  PackageCheck,
  ShieldCheck,
} from 'lucide-react';
import logoUrl from '../assets/logo.png';
import { Journey, JourneyStep } from '../data/journeys';

const iconMap: Record<string, any> = {
  'Material': Layers,
  'Supplier': Factory,
  'Manufacturer': Factory,
  'Batch': Barcode,
  'Carbon': Leaf,
  'Certificate': BadgeCheck,
  'Timestamp': Calendar,
  'Origin': MapPin,
  'Component': Box,
  'Transporter': Truck,
  'Temperature': Activity,
  'Quality': PackageCheck,
};

const containerVariants: any = {
  hidden: { opacity: 0, scale: 0.97, y: 16 },
  visible: { 
    opacity: 1, scale: 1, y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.06 } 
  }
};
const fadeVariants: any = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } }
};
const slideUpVariants: any = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
};
const badgeVariants: any = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'backOut' } }
};
const rowVariants: any = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }
};

export function EnterpriseInfoCard({ journey, step }: { journey: Journey, step: JourneyStep }) {
  const dataRows = Object.entries(step.metadata || {}).map(([key, val]) => {
    return {
      label: key,
      value: val,
      icon: iconMap[key] || Box
    };
  });

  return (
    <motion.div
      key={`${journey.id}-${step.id}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="group relative w-full bg-white/96 backdrop-blur-xl rounded-[32px] overflow-hidden"
      style={{
        width: 560,
        maxWidth: '100%',
        border: '1px solid rgba(0,0,0,0.06)',
        boxShadow: '0 28px 70px rgba(0,0,0,0.14)',
      }}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: '0 36px 90px rgba(0,0,0,0.18)' }} />

      {/* ── HEADER: Stacked portrait layout ── */}
      <div className="px-8 pt-8 pb-6 border-b border-black/5">
        
        {/* Logo + Badge row */}
        <div className="flex items-center justify-between mb-6">
          <motion.div variants={fadeVariants} className="shrink-0">
            <img src={logoUrl} alt="TierraTrace" className="h-14 w-auto object-contain" />
          </motion.div>
          <motion.div variants={badgeVariants} className="shrink-0">
            <div className="flex items-center gap-1.5 bg-[#F0FBF4] rounded-full px-3 py-1.5 border border-[#16C15F]/20">
              <div className="w-1.5 h-1.5 rounded-full bg-[#16C15F] animate-pulse shrink-0" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={step.event}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="text-[10.5px] font-bold text-[#16C15F] tracking-[0.08em] uppercase whitespace-nowrap"
                >
                  {step.event}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Journey name */}
        <motion.h2 variants={slideUpVariants} className="text-[26px] font-bold text-black leading-tight tracking-tight mb-1.5">
          {journey.name}
        </motion.h2>

        {/* Location */}
        <motion.div variants={slideUpVariants} className="flex items-center gap-1.5">
          <MapPin className="w-4 h-4 text-[#16C15F] shrink-0" strokeWidth={2} />
          <span className="text-[14px] font-medium text-gray-500 truncate">{step.location}</span>
        </motion.div>
      </div>

      {/* ── DATA GRID: 2 columns ── */}
      <div className="grid grid-cols-2 gap-0 px-4 py-4">
        {dataRows.map((row, i) => (
          <motion.div
            key={row.label}
            variants={rowVariants}
            className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-black/2 transition-colors"
          >
            {/* Icon */}
            <div className="w-8 h-8 rounded-lg bg-[#F4F5F7] text-[#16C15F] flex items-center justify-center shrink-0 mt-0.5">
              <row.icon strokeWidth={1.5} className="w-4 h-4" />
            </div>

            {/* Label + Value */}
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.07em] mb-0.5">
                {row.label}
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={row.value}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.18 }}
                  className="text-[14px] font-semibold text-black leading-snug"
                  style={{ wordBreak: 'break-word' }}
                >
                  {row.value}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── BOTTOM BAR: Verified ── */}
      <motion.div
        variants={fadeVariants}
        className="flex items-center gap-2.5 px-7 py-3.5 bg-[#F5FCF7] border-t border-[#16C15F]/10"
      >
        <ShieldCheck className="w-4 h-4 text-[#16C15F] shrink-0" strokeWidth={2} />
        <span className="text-[12px] font-medium text-gray-500">
          Verified on <span className="font-bold text-[#16C15F]">TierraTrace</span> Platform
        </span>
        <span className="ml-auto text-[11px] text-gray-400 font-medium">{step.status}</span>
      </motion.div>
    </motion.div>
  );
}
