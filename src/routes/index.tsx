import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import * as React from "react";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  ChevronRight,
  CircuitBoard,
  Factory,
  Fingerprint,
  Globe2,
  Landmark,
  Leaf,
  Menu,
  Package,
  QrCode,
  Recycle,
  Route as RouteIcon,
  Scale,
  Shield,
  Sparkles,
  Truck,
  Wrench,
  X,
  ShieldCheck,
  Eye,
  FileCheck,
  Network,
  CheckCircle2,
  Building2,
  BookOpen,
  Briefcase,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import logoUrl from "@/assets/logo.png";
import { DigitalProductPassport } from "../components/DigitalProductPassport";
import { EnterpriseIntegrations } from "../components/EnterpriseIntegrations";
import { CobeGlobe } from "../components/CobeGlobe";
import { PlatformCapabilities } from "../components/PlatformCapabilities";
import { ComplianceSection } from "../components/ComplianceSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        property: "og:image",
        content: `https://id-preview--36bc310a-88b6-42a5-b5fc-9b3fa03f1f2d.lovable.app${logoUrl}`,
      },
    ],
  }),
  component: HomePage,
});

/* ---------- Nav ---------- */
function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="relative mx-auto mt-3 flex w-[min(1240px,94%)] items-center justify-between rounded-full border border-black/5 bg-white/75 px-4 py-2.5 shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_10px_40px_-20px_rgba(16,195,90,0.15)] backdrop-blur-xl sm:px-6">
        <a href="#top" className="flex shrink-0 items-center gap-2">
          <img src={logoUrl} alt="TierraTrace" className="h-10 w-auto sm:h-12" />
        </a>
        
        <div className="absolute left-[46%] top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex lg:items-center lg:gap-4">
          <NavigationMenu>
            <NavigationMenuList className="space-x-4">
              <NavigationMenuItem>
                <NavigationMenuLink href="#why" className={navigationMenuTriggerStyle()}>
                  Why TierraTrace
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-black/5">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-primary/10 to-primary/5 p-6 no-underline outline-none focus:shadow-md"
                          href="#passport"
                        >
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                          <div className="mb-2 text-lg font-medium">TierraTrace Passport</div>
                          <p className="text-sm leading-tight text-ink-muted">
                            Secure Digital Product Passports for complete lifecycle transparency.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="#traceability" title="TierraTrace Trace" icon={RouteIcon}>
                      End-to-End Traceability tracking.
                    </ListItem>
                    <ListItem href="#carbon" title="TierraTrace Carbon" icon={Leaf}>
                      Carbon Footprint & Sustainability.
                    </ListItem>
                    <ListItem href="#verify" title="TierraTrace Verify" icon={ShieldCheck}>
                      Supplier & Product Verification.
                    </ListItem>
                    <ListItem href="#insights" title="TierraTrace Insights" icon={Eye}>
                      Analytics & Supply Chain Intelligence.
                    </ListItem>
                    <ListItem href="#connect" title="TierraTrace Connect" icon={CircuitBoard}>
                      APIs & ERP Integrations.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#industries" className={navigationMenuTriggerStyle()}>
                  Industries
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#compliance" className={navigationMenuTriggerStyle()}>
                  Compliance
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList className="space-x-4">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-black/5">About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 p-4">
                    <ListItem href="https://www.namolabs.in/" target="_blank" rel="noopener noreferrer" title="Company" icon={Building2}>
                      Learn about our mission and team.
                    </ListItem>
                    <ListItem href="#resources" title="Resources" icon={BookOpen}>
                      Case studies, whitepapers, and guides.
                    </ListItem>
                    <ListItem href="https://www.namolabs.in/careers" target="_blank" rel="noopener noreferrer" title="Careers" icon={Briefcase}>
                      Join us in building product truth.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full px-4 py-2 text-[13.5px] font-medium text-ink transition hover:bg-black/5 sm:inline-flex"
          >
            Contact sales
          </a>
          <a
            href="#pilot"
            className="hidden items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[13.5px] font-medium text-white transition hover:bg-black sm:inline-flex"
          >
            Request pilot
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full text-ink lg:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute inset-x-4 top-[calc(100%+8px)] rounded-2xl border border-black/5 bg-white p-4 shadow-xl lg:hidden origin-top z-50"
        >
          <div className="flex flex-col">
            <a href="#why" onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-[15px] font-medium text-ink hover:bg-primary-soft">Why TierraTrace</a>
            <a href="#services" onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-[15px] font-medium text-ink hover:bg-primary-soft">Services</a>
            <a href="#industries" onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-[15px] font-medium text-ink hover:bg-primary-soft">Industries</a>
            <a href="#compliance" onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-[15px] font-medium text-ink hover:bg-primary-soft">Compliance</a>
            <div className="flex flex-col border-t border-black/5 pt-2 mt-2">
              <span className="px-3 py-2 text-[12px] font-bold uppercase tracking-wider text-ink-muted">About</span>
              <a href="https://www.namolabs.in/" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2.5 text-[15px] font-medium text-ink hover:bg-primary-soft">Company</a>
              <a href="#resources" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2.5 text-[15px] font-medium text-ink hover:bg-primary-soft">Resources</a>
              <a href="https://www.namolabs.in/careers" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2.5 text-[15px] font-medium text-ink hover:bg-primary-soft">Careers</a>
            </div>
            <a
              href="#pilot"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-1.5 rounded-full bg-ink px-4 py-3 text-sm font-medium text-white"
            >
              Request pilot <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; icon: any }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-black/5 focus:bg-black/5"
          }
          {...props}
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none">
            {Icon && <Icon className="h-4 w-4 text-primary" />}
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-ink-muted mt-1">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";


/* ---------- Reveal helper ---------- */
function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

import { Globe } from "@/components/ui/globe";
import { JOURNEYS, Journey, JourneyStep } from "@/data/journeys";

/* ---------- HERO ---------- */
function Hero() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  const [activeData, setActiveData] = React.useState<{ journey: Journey | null, step: JourneyStep | null }>({
    journey: JOURNEYS[0],
    step: JOURNEYS[0].steps[0],
  });

  return (
    <section ref={ref} id="top" className="relative overflow-hidden bg-white pt-16 sm:pt-20 lg:pt-20 pb-16">
      {/* ── Dynamic Nature Background ── */}
      <div aria-hidden className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

        {/* Base gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-white via-[#f0fdf4] to-white" />

        {/* Floating green orbs */}
        <div className="nature-orb-1 absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(16,195,90,0.12) 0%, rgba(16,195,90,0.04) 50%, transparent 75%)" }} />
        <div className="nature-orb-2 absolute -bottom-48 -left-48 w-[800px] h-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(16,195,90,0.10) 0%, rgba(16,195,90,0.03) 55%, transparent 75%)" }} />
        <div className="nature-orb-3 absolute top-1/2 left-1/3 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(16,195,90,0.07) 0%, transparent 70%)" }} />

        {/* Flowing topographic wave lines */}
        <svg className="nature-wave absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#10C35A" stopOpacity="0" />
              <stop offset="30%" stopColor="#10C35A" stopOpacity="1" />
              <stop offset="70%" stopColor="#10C35A" stopOpacity="1" />
              <stop offset="100%" stopColor="#10C35A" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0,1,2,3,4,5,6,7,8,9,10].map((i) => (
            <path key={i}
              d={`M -100 ${80 + i * 75} C 200 ${40 + i * 75}, 400 ${130 + i * 75}, 720 ${80 + i * 75} S 1200 ${30 + i * 75}, 1540 ${100 + i * 75}`}
              stroke="url(#waveGrad)" strokeWidth="1.2" fill="none"
            />
          ))}
        </svg>

        {/* Shimmer dot grid */}
        <div className="nature-shimmer absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(rgba(16,195,90,0.35) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            maskImage: "radial-gradient(ellipse 80% 60% at 60% 40%, black, transparent)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 60% 40%, black, transparent)",
          }} />

        {/* Floating particles */}
        <div className="particle-1 absolute bottom-24 left-[10%] w-2 h-2 rounded-full bg-primary/30" />
        <div className="particle-2 absolute bottom-32 left-[22%] w-1.5 h-1.5 rounded-full bg-primary/25" />
        <div className="particle-3 absolute bottom-16 left-[38%] w-2.5 h-2.5 rounded-full bg-primary/20" />
        <div className="particle-4 absolute bottom-40 left-[55%] w-1 h-1 rounded-full bg-primary/35" />
        <div className="particle-5 absolute bottom-20 left-[72%] w-2 h-2 rounded-full bg-primary/25" />
        <div className="particle-6 absolute bottom-28 left-[88%] w-1.5 h-1.5 rounded-full bg-primary/20" />

      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto max-w-[1400px] px-6">
        
        {/* STRICT 50/50 LAYOUT GRID */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-start min-h-[calc(100vh-10rem)] pt-8">
          
          {/* LEFT COLUMN: HERO CONTENT (50%) */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left pt-16 lg:pt-20 pl-4 lg:pl-16">


            <Reveal delay={0.15}>
              <h1 className="mt-8 whitespace-nowrap text-[40px] font-semibold leading-[1.1] tracking-tight text-ink sm:text-[52px] lg:text-[60px]">
                Every product.<br/>
                Every journey.<br/>
                <span className="text-primary drop-shadow-sm">We trace it.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="mt-8 max-w-xl text-balance text-[18px] leading-relaxed text-ink-muted">
                TierraTrace enables manufacturers to issue secure Digital Product Passports and achieve end-to-end traceability across the complete product lifecycle—from raw materials to recycling.
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a
                  href="#pilot"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-[16px] font-medium text-white shadow-[0_8px_25px_-8px_rgba(16,195,90,0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(16,195,90,0.7)]"
                >
                  Request Pilot
                  <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#platform"
                  className="group inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-8 py-4 text-[16px] font-medium text-ink shadow-sm transition-all hover:bg-surface hover:-translate-y-0.5"
                >
                  Explore Platform
                </a>
              </div>
            </Reveal>
          </div>

          {/* RIGHT COLUMN: 3D GLOBE (50%) */}
          <div className="relative flex items-center justify-center w-full h-[500px] sm:h-[600px] lg:h-full -mt-12 lg:mt-0">
            
            {/* The Globe Map */}
            <Reveal delay={0.2} className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none opacity-50 lg:opacity-100">
              <Globe />
            </Reveal>

          </div>

        </div>
        {/* BOTTOM FEATURE PANEL (OUTSIDE THE 50/50 GRID) */}
        <Reveal delay={0.45} className="mt-16 lg:mt-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 rounded-[24px] bg-white p-4 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] border border-black/5">
            
            <div className="flex items-start gap-3.5 p-4 rounded-[16px] transition-colors hover:bg-surface/60">
              <div className="flex shrink-0 items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-[14px] font-semibold text-ink">Trusted Identity</h4>
                <p className="mt-0.5 text-[12.5px] text-ink-muted leading-relaxed">Unique digital identity for every product</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-[16px] transition-colors hover:bg-surface/60">
              <div className="flex shrink-0 items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary">
                <Eye className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-[14px] font-semibold text-ink">End-to-End Visibility</h4>
                <p className="mt-0.5 text-[12.5px] text-ink-muted leading-relaxed">Track every movement in real time</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-[16px] transition-colors hover:bg-surface/60">
              <div className="flex shrink-0 items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary">
                <Leaf className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-[14px] font-semibold text-ink">Sustainability by Design</h4>
                <p className="mt-0.5 text-[12.5px] text-ink-muted leading-relaxed">Enable circularity & reduce impact</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-[16px] transition-colors hover:bg-surface/60">
              <div className="flex shrink-0 items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary">
                <FileCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-[14px] font-semibold text-ink">Compliance Ready</h4>
                <p className="mt-0.5 text-[12.5px] text-ink-muted leading-relaxed">Built for global standards & regulations</p>
              </div>
            </div>

          </div>
        </Reveal>

      </motion.div>

      {/* Trusted-by strip */}
      <div className="relative mx-auto mt-8 max-w-[1240px] px-6">
        <p className="text-center text-[12px] font-medium uppercase tracking-[0.18em] text-ink-muted">
          Designed for the world's most demanding supply chains
        </p>
        <div className="mt-6 overflow-hidden mask-[linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max animate-marquee gap-14 py-4">
            {[...Array(2)].flatMap((_, r) =>
              ["KPR Mill", "Vardhman", "Tata Motors", "Bosch", "Sun Pharma", "Nestlé", "DHL", "Maersk", "Siemens", "Schneider Electric", "Samsung", "Foxconn"].map(
                (name, i) => (
                  <span
                    key={`${r}-${i}`}
                    className="whitespace-nowrap text-[19px] font-semibold tracking-tight text-ink/40"
                  >
                    {name}
                  </span>
                ),
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Hero visual: mock passport card ---------- */
function PassportPreview() {
  return (
    <div className="relative">
      {/* soft glow */}
      <div className="absolute -inset-12 -z-10 rounded-[48px] bg-linear-to-b from-primary/10 to-transparent blur-2xl" />

      <div className="rounded-[28px] border border-black/5 bg-white p-3 shadow-[0_40px_120px_-40px_rgba(16,80,40,0.35)]">
        <div className="rounded-[20px] bg-surface p-5 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
            {/* Left: product summary */}
            <div className="rounded-2xl bg-white p-6 text-left shadow-sm ring-1 ring-black/4">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-2.5 py-1 text-[11px] font-medium text-primary">
                  <BadgeCheck className="h-3 w-3" /> Verified passport
                </div>
                <span className="font-mono text-[11px] text-ink-muted">TT-92·AC-1174</span>
              </div>
              <div className="mt-5 text-[13px] font-medium uppercase tracking-widest text-ink-muted">
                Aluminium coil · Batch 92
              </div>
              <div className="mt-1 text-2xl font-semibold tracking-tight text-ink">
                Low-carbon 6061-T6
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4 text-left">
                {[
                  { k: "CO₂e", v: "3.42", u: "kg / kg" },
                  { k: "Recycled", v: "78%", u: "content" },
                  { k: "Origin", v: "IS · NO", u: "verified" },
                ].map((s) => (
                  <div key={s.k}>
                    <div className="text-[11px] uppercase tracking-widest text-ink-muted">{s.k}</div>
                    <div className="mt-1 text-lg font-semibold text-ink">{s.v}</div>
                    <div className="text-[11px] text-ink-muted">{s.u}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-dashed border-black/10 pt-5">
                <div className="text-[11px] font-medium uppercase tracking-widest text-ink-muted">
                  Chain of custody
                </div>
                <ol className="mt-3 space-y-2.5 text-[13px]">
                  {[
                    { s: "Sourced · Ísafjörður", t: "Mar 04" },
                    { s: "Smelted · Sunndalsøra", t: "Mar 09" },
                    { s: "Rolled · Rotterdam", t: "Mar 21" },
                    { s: "Shipped · Hamburg → NYC", t: "Apr 02" },
                  ].map((r, i) => (
                    <li key={r.s} className="flex items-center gap-3">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${i < 3 ? "bg-primary" : "bg-primary/40"}`}
                      />
                      <span className="flex-1 text-ink">{r.s}</span>
                      <span className="font-mono text-[11px] text-ink-muted">{r.t}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Right: QR + lifecycle */}
            <div className="grid gap-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/4">
                <div className="flex items-center justify-between">
                  <div className="text-[11px] font-medium uppercase tracking-widest text-ink-muted">
                    Scan passport
                  </div>
                  <QrCode className="h-4 w-4 text-ink-muted" />
                </div>
                <div className="mt-4 grid grid-cols-2 items-center gap-4">
                  <div className="aspect-square rounded-xl bg-ink p-2">
                    <div
                      className="h-full w-full rounded-md bg-white"
                      style={{
                        backgroundImage:
                          "conic-gradient(from 0deg, #10C35A, #0a0a0a, #10C35A, #0a0a0a)",
                        WebkitMask:
                          "radial-gradient(circle at 20% 20%, black 8%, transparent 9%) 0 0/33% 33%, radial-gradient(circle at 80% 80%, black 8%, transparent 9%) 0 0/33% 33%",
                      }}
                    />
                  </div>
                  <div className="text-left">
                    <div className="text-[13px] font-medium text-ink">tierratrace.id/ac1174</div>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-ink-muted">
                      Consumers, regulators, and partners access the same source of truth.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-ink p-6 text-white shadow-sm">
                <div className="text-[11px] font-medium uppercase tracking-widest text-white/60">
                  Lifecycle score
                </div>
                <div className="mt-2 flex items-end justify-between">
                  <div className="text-4xl font-semibold tracking-tight">A+</div>
                  <div className="text-[12px] text-white/60">EU DPP · CBAM aligned</div>
                </div>
                <div className="mt-5 space-y-2.5">
                  {[
                    { l: "Material integrity", v: 96 },
                    { l: "Carbon transparency", v: 88 },
                    { l: "Circularity readiness", v: 74 },
                  ].map((b) => (
                    <div key={b.l}>
                      <div className="flex items-center justify-between text-[11.5px] text-white/70">
                        <span>{b.l}</span>
                        <span>{b.v}%</span>
                      </div>
                      <div className="mt-1 h-1 rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${b.v}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                          className="h-1 rounded-full bg-primary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Section header ---------- */
function SectionHeader({
  eyebrow,
  title,
  desc,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  desc?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary-soft px-3 py-1 text-[11.5px] font-medium uppercase tracking-[0.14em] text-primary">
        {eyebrow}
      </div>
      <h2 className="mt-5 text-balance text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[48px] lg:text-[56px]">
        {title}
      </h2>
      {desc && (
        <p className="mt-5 text-balance text-[16.5px] leading-[1.55] text-ink-muted sm:text-lg">
          {desc}
        </p>
      )}
    </div>
  );
}

/* ---------- WHY ---------- */
function WhyTierraTrace() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    // no-op: counting is handled per MetricItem
  }, { scope: containerRef });

  return (
    <section id="why" ref={containerRef} className="relative py-28 sm:py-36 bg-white overflow-hidden">
      {/* Background soft network graph (very faint) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
         <NetworkCanvas />
      </div>

      <div className="mx-auto max-w-[1320px] px-6 relative z-10">
        
        {/* HERO COLUMNS */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* LEFT CONTENT (55%) */}
          <div className="w-full lg:w-[55%]">
            <Reveal>
              <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 mb-6">
                <span className="text-[11px] font-bold uppercase tracking-widest text-primary">
                  WHY TIERRATRACE
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-[44px] sm:text-[56px] lg:text-[64px] font-bold leading-[1.05] tracking-tight text-ink">
                The Unified<br className="hidden lg:block"/>
                <span className="text-primary">Trust Infrastructure.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-[17px] sm:text-[19px] leading-[1.65] text-ink/70 max-w-xl font-medium">
                Global regulators, buyers and consumers now demand proof — not claims. TierraTrace turns your supply chain into a source of truth through verifiable traceability, Digital Product Passports and enterprise blockchain infrastructure.
              </p>
            </Reveal>
          </div>
          
          {/* RIGHT CONTENT (45%) */}
          <div className="w-full lg:w-[45%] h-[400px] sm:h-[500px] relative flex flex-col items-center justify-center">
             <div className="absolute inset-0 opacity-[0.15]">
               <NetworkCanvas />
             </div>
             
             {/* Logo */}
             <div className="relative z-10 w-full max-w-[480px] px-8">
               <motion.img 
                 src={logoUrl} 
                 alt="TierraTrace" 
                 className="w-full h-auto object-contain" 
                 animate={{ clipPath: ["polygon(0% 0%, 100% 0%, 100% 55%, 0% 55%, 0% 100%, 0% 100%)", "polygon(0% 0%, 100% 0%, 100% 55%, 100% 55%, 100% 100%, 0% 100%)"] }}
                 transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.7 }}
               />
             </div>
             
             {/* Active words capsule */}
             <ActiveWordsCapsule />
          </div>
        </div>

        {/* THREE PREMIUM FEATURE CARDS */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <FeatureCard 
            icon={<HyperledgerIcon />}
            title="Verifiable Trust"
            subtitle="Secured by Hyperledger Fabric"
            desc="Built on Hyperledger Fabric, every transaction is cryptographically anchored for immutable, auditable, and tamper-proof trust across the ecosystem."
            footer="Enterprise Blockchain Infrastructure"
            delay={0}
            hoverType="hyperledger"
            href="https://share.google/3QHPSD3p99hsGsNPw"
          />
          <FeatureCard 
            icon={<Network className="w-5 h-5" />}
            title="Radical Transparency"
            subtitle="One Platform to Track Everything"
            desc="From raw materials to end customers, track every movement, every event, and every stakeholder in real time on a single, unified platform."
            footer="Unified Supply Chain Intelligence"
            delay={0.1}
            hoverType="network"
          />
          <FeatureCard 
            icon={<Recycle className="w-5 h-5" />}
            title="Built for Circularity"
            subtitle="Empowering the Circular Economy"
            desc="Digital Product Passports carry forward a verifiable history — enabling reuse, remanufacture, and responsible end-of-life."
            footer="Future-ready Compliance"
            delay={0.2}
            hoverType="circular"
          />
        </div>

        {/* PREMIUM METRICS BAND */}
        <Reveal>
          <div className="mt-12 relative overflow-hidden rounded-[24px] bg-[#0B0B0B] px-8 py-8 sm:py-10 sm:px-10 lg:px-12 shadow-2xl">
            {/* Animated green wave bg can be a faint gradient */}
            <div className="absolute -inset-full bg-[radial-gradient(ellipse_at_bottom,#10C35A15_0%,transparent_50%)] opacity-60 mix-blend-screen pointer-events-none" />
            
            <div className="relative z-10 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              <MetricItem icon={<Package className="w-6 h-6"/>} val={42} suffix=" Bn" title="Products tracked" desc="/ yr capacity" />
              <MetricItem icon={<Globe2 className="w-6 h-6"/>} val={180} suffix="+" title="Countries" desc="in coverage graph" />
              <MetricItem icon={<ShieldCheck className="w-6 h-6"/>} val={99.99} suffix="%" title="Platform SLA" desc="for enterprise" />
              <MetricItem icon={<Shield className="w-6 h-6"/>} val="SOC 2" suffix="" title="Type II, ISO 27001," desc="GDPR Compliant" />
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

function ActiveWordsCapsule() {
  const words = ["TRACK", "VERIFY", "TRUST", "TRANSFORM"];
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const int = setInterval(() => {
      setActiveIndex(p => (p + 1) % words.length);
    }, 2000);
    return () => clearInterval(int);
  }, []);

  return (
    <div className="absolute bottom-8 sm:bottom-12 z-10 flex items-center gap-4 sm:gap-6 rounded-full bg-white px-6 sm:px-8 py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-black/4">
      {words.map((w, i) => (
        <React.Fragment key={w}>
          <span className={`text-[11px] sm:text-[12.5px] font-bold tracking-[0.15em] transition-colors duration-500 ${i === activeIndex ? 'text-primary' : 'text-ink'}`}>
            {w}
          </span>
          {i < words.length - 1 && <span className="text-ink/20 text-[12px] font-black">•</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

function FeatureCard({ icon, title, subtitle, desc, footer, delay, hoverType, href }: any) {
  const CardContent = (
    <div className={`group relative h-full flex flex-col overflow-hidden rounded-[24px] border border-black/5 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] hover:border-primary/40`}>
      
      {/* Icon container */}
      <div className={`grid h-10 w-10 place-items-center rounded-xl bg-[#F4F5F7] text-primary transition-transform duration-700 ease-out
        ${hoverType === 'hyperledger' ? 'group-hover:rotate-15' : ''} 
        ${hoverType === 'circular' ? 'group-hover:rotate-180' : ''} 
        ${hoverType === 'network' ? 'group-hover:scale-110' : ''}`
      }>
         {icon}
      </div>
      
      <div className="mt-5 flex-1">
        <div className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">{subtitle}</div>
        <h3 className="text-[17px] font-bold tracking-tight text-ink">{title}</h3>
        <p className="mt-2.5 text-[13.5px] leading-[1.6] text-ink/70">{desc}</p>
      </div>
      
      <div className="mt-6 pt-5 border-t border-black/5 flex items-center gap-2 text-[13px] font-semibold text-primary">
        <span>Learn more</span>
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </div>
  );

  return (
    <Reveal delay={delay}>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full cursor-pointer">
          {CardContent}
        </a>
      ) : (
        <div className="h-full">
          {CardContent}
        </div>
      )}
    </Reveal>
  );
}

function MetricItem({ icon, val, suffix, title, desc }: any) {
  const numRef = React.useRef<HTMLSpanElement>(null);
  const hasAnimated = React.useRef(false);

  React.useEffect(() => {
    const el = numRef.current;
    if (!el || typeof val !== 'number') return;
    const isDecimal = val % 1 !== 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const duration = 7000;
          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = val * eased;
            el.innerText = isDecimal ? current.toFixed(2) : Math.floor(current).toString();
            if (progress < 1) requestAnimationFrame(tick);
            else el.innerText = isDecimal ? val.toFixed(2) : val.toString();
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [val]);

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 px-0 sm:px-6 lg:px-8 first:pl-0 last:pr-0">
      <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
        {icon}
      </div>
      <div className="flex flex-col">
        <div className="text-[28px] lg:text-[36px] font-bold tracking-tight text-white flex items-baseline leading-none mb-1">
           <span ref={numRef}>{typeof val === 'number' ? '0' : val}</span>
           <span>{suffix}</span>
        </div>
        <div className="text-[14px] font-medium text-primary leading-tight">{title}</div>
        <div className="text-[13px] leading-relaxed text-white/50">{desc}</div>
      </div>
    </div>
  );
}

function HyperledgerIcon() {
  return (
    <svg viewBox="0 0 100 100" className="w-6 h-6" fill="none">
      <rect x="22" y="32" width="12" height="24" rx="6" fill="#F05A4E" transform="rotate(45 22 32)"/>
      <rect x="42" y="32" width="12" height="24" rx="6" fill="#88D1D1" transform="rotate(45 42 32)"/>
      <rect x="62" y="32" width="12" height="24" rx="6" fill="#F05A4E" transform="rotate(45 62 32)"/>
      
      <rect x="22" y="52" width="24" height="12" rx="6" fill="#88D1D1" transform="rotate(45 22 52)"/>
      <rect x="22" y="72" width="24" height="12" rx="6" fill="#F05A4E" transform="rotate(45 22 72)"/>
      <rect x="42" y="52" width="24" height="12" rx="6" fill="#F05A4E" transform="rotate(45 42 52)"/>
    </svg>
  );
}

function NetworkCanvas({ opacity = 1 }: { opacity?: number }) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    let particles: {x: number, y: number, vx: number, vy: number}[] = [];
    const numParticles = window.innerWidth < 768 ? 20 : 45;
    let animationFrameId: number;
    
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", resize);
    resize();
    
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      });
    }
    
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#10C35A";
      ctx.strokeStyle = "rgba(16, 195, 90, 0.15)";
      ctx.lineWidth = 1;
      
      for (let i = 0; i < numParticles; i++) {
        let p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
        
        for (let j = i + 1; j < numParticles; j++) {
          let p2 = particles[j];
          let dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.quadraticCurveTo(p.x, p2.y, p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };
    draw();
    
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity }} />;
}



/* ---------- TRACEABILITY + LIFECYCLE ---------- */
const LIFECYCLE = [
  { icon: Leaf, t: "Raw material", d: "Source origin, certifications and impact captured at point of extraction." },
  { icon: Factory, t: "Manufacture", d: "Batches, components and process events anchored in real time." },
  { icon: Truck, t: "Logistics", d: "Movements, custody transfers and conditions across every leg." },
  { icon: Package, t: "Distribution & retail", d: "Warehouse, retailer and marketplace flows unified in one graph." },
  { icon: Fingerprint, t: "Use", d: "Ownership, service history and consumer engagement follow the product." },
  { icon: Wrench, t: "Repair & reuse", d: "Extend product life with verifiable maintenance and secondhand records." },
  { icon: Recycle, t: "Recycle", d: "Certified end-of-life with recovered material claims for the next passport." },
];

const TypewriterText = ({ texts }: { texts: string[] }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[index % texts.length];
    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && text === currentFullText) {
      typingSpeed = 2000;
      setTimeout(() => setIsDeleting(true), typingSpeed);
      return;
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setIndex((prev) => prev + 1);
      typingSpeed = 500;
      return;
    }

    const timeout = setTimeout(() => {
      setText(currentFullText.substring(0, text.length + (isDeleting ? -1 : 1)));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, texts]);

  return (
    <span className="relative inline-block pr-1">
      {text}
      <motion.span 
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="absolute right-0 top-[10%] h-[80%] w-[3px] bg-primary"
      />
    </span>
  );
};

function TraceabilitySection() {
  return (
    <section id="traceability" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-[1240px] px-6">
        <Reveal>
          <SectionHeader
            align="center"
            eyebrow="End-to-end traceability"
            title={<>From raw material to <span className="text-primary"><TypewriterText texts={["reuse and recycling.", "the final consumer.", "secondhand markets.", "responsible end-of-life."]} /></span></>}
            desc="A single event graph follows every product through its full lifecycle — no blind spots, no reconciliation, no lost provenance."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-row items-center justify-center gap-4">
            <span className="text-[14px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">Powered by</span>
            <img src="/hyperledger.jpg" alt="Hyperledger Fabric" className="h-24 md:h-36 object-contain mix-blend-multiply" />
          </div>
        </Reveal>

        {/* Lifecycle path */}
        <div className="relative mt-16">
          <svg
            aria-hidden
            className="absolute left-0 right-0 top-14 mx-auto hidden h-24 w-full max-w-6xl md:block"
            viewBox="0 0 1200 100"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Base faint dashed line */}
            <path
              d="M 20 50 C 200 -10, 300 110, 500 50 S 800 -10, 1000 50 S 1180 90, 1180 50"
              stroke="#10C35A"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              strokeLinecap="round"
              fill="none"
              opacity="0.2"
            />
            {/* Animated drawing line */}
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 6, ease: "easeInOut" }}
              d="M 20 50 C 200 -10, 300 110, 500 50 S 800 -10, 1000 50 S 1180 90, 1180 50"
              stroke="#10C35A"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
            {LIFECYCLE.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.05}>
                <div className="group relative flex h-full flex-col items-center rounded-2xl border border-black/5 bg-white p-5 text-center transition-all duration-300 hover:scale-[1.4] hover:z-10 hover:border-primary/50 hover:shadow-[0_20px_60px_-15px_rgba(16,195,90,0.4)] cursor-pointer">
                  <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary">
                    <s.icon className="relative z-10 h-5.5 w-5.5" />
                  </div>
                  <div className="mt-4 text-[11px] font-medium uppercase tracking-widest text-ink-muted">
                    Stage {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-1 text-[15px] font-semibold text-ink">{s.t}</div>
                  <div className="mt-2 text-[12.5px] leading-snug text-ink-muted">{s.d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}



import indTextilePremium from "@/assets/ind_textile.png";
import indFoodPremium from "@/assets/ind_food.png";
import indPharmaPremium from "@/assets/ind_pharma.png";
import indAutoPremium from "@/assets/ind_auto.png";
import indLogisticsPremium from "@/assets/ind_logistics.png";
import indElectronicsPremium from "@/assets/ind_electronics.png";
import indCoffeePremium from "@/assets/ind_coffee.png";
import indLuxuryPremium from "@/assets/ind_luxury.png";
import indEnterprisePremium from "@/assets/ind_enterprise.png";

const INDUSTRY_CARDS = [
  {
    title: "Textile & Apparel",
    desc: "Track every garment from fibre to finished product with complete supply chain transparency, sustainability insights, and Digital Product Passports.",
    features: [
      "Fibre-to-Garment Traceability",
      "ESG & Sustainability",
      "EU Digital Product Passport",
      "Supplier Transparency"
    ],
    img: indTextilePremium,
  },
  {
    title: "Pharmaceuticals",
    desc: "Secure every medicine with end-to-end batch traceability, regulatory compliance, cold-chain visibility, and tamper-proof manufacturing records.",
    features: [
      "Batch & Lot Tracking",
      "GMP Compliance",
      "Cold Chain Monitoring",
      "Anti-Counterfeit Protection"
    ],
    img: indPharmaPremium,
  },
  {
    title: "Automotive",
    desc: "Monitor every component from raw material to vehicle assembly, enabling complete visibility, recalls, warranty tracking, and supplier accountability.",
    features: [
      "Component Traceability",
      "Recall Management",
      "Warranty Records",
      "Supplier Network Visibility"
    ],
    img: indAutoPremium,
  },
  {
    title: "Electronics",
    desc: "Trace semiconductors, PCBs, batteries, and electronic assemblies through every manufacturing stage with immutable production records.",
    features: [
      "Component Traceability",
      "Manufacturing History",
      "Product Authentication",
      "Warranty Lifecycle"
    ],
    img: indElectronicsPremium,
  },
  {
    title: "Logistics & Shipping",
    desc: "Track cargo across road, rail, sea, and air with real-time shipment visibility, secure documentation, and intelligent logistics monitoring.",
    features: [
      "Multi-Modal Tracking",
      "Shipment Visibility",
      "Customs Documentation",
      "Real-Time Logistics"
    ],
    img: indLogisticsPremium,
  },
  {
    title: "Coffee",
    desc: "Deliver complete farm-to-cup transparency by tracking origin, harvest, processing, export, roasting, and retail with verified product history.",
    features: [
      "Farm-to-Cup Traceability",
      "Origin Verification",
      "Sustainability Metrics",
      "Fair Trade Records"
    ],
    img: indCoffeePremium,
  },
  {
    title: "Luxury Goods",
    desc: "Authenticate premium products through secure digital identities, ownership history, provenance records, and counterfeit protection.",
    features: [
      "Digital Authentication",
      "Ownership History",
      "Provenance Tracking",
      "Anti-Counterfeit Security"
    ],
    img: indLuxuryPremium,
  },
  {
    title: "Custom Enterprise Solutions",
    desc: "Build industry-specific traceability solutions tailored to your manufacturing, compliance, and global supply chain requirements.",
    features: [
      "Custom Workflows",
      "Enterprise Integrations",
      "Blockchain Infrastructure",
      "Global Compliance"
    ],
    img: indEnterprisePremium,
  },
];

const TRUST_ITEMS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "End-to-End Traceability",
    desc: "Complete visibility from raw material to end consumer.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Global Supply Chains",
    desc: "Designed to operate across borders and time zones.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Blockchain Secured",
    desc: "Immutable, tamper-proof records at every supply chain event.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Digital Product Passport",
    desc: "EU-compliant DPPs issued at scale for every product.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: "Compliance Ready",
    desc: "Built for ESPR, CBAM, Battery Regulation and global mandates.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Real-time Analytics",
    desc: "Live supply chain intelligence and ESG reporting dashboards.",
  },
];

function Industries() {
  const containerRef = React.useRef<HTMLElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const trackWrapperRef = React.useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const track = trackRef.current;
      const trackWrapper = trackWrapperRef.current;
      if (!containerRef.current || !track || !trackWrapper) return;

      const cards = gsap.utils.toArray<HTMLElement>('.industry-card');

      // Calculate how far to translate the track
      const getScrollAmount = () => -(track.scrollWidth - trackWrapper.clientWidth);

      // Create the main scrub tween for the track
      const scrollTween = gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${Math.abs(getScrollAmount())}`,
          pin: true,
          scrub: true,
          invalidateOnRefresh: true,
        }
      });

      // Create container animations for each card based on its viewport entry/exit
      cards.forEach((card) => {
        // Initial state: slightly scaled down and faded
        gsap.set(card, { scale: 0.97, opacity: 0.75 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            containerAnimation: scrollTween,
            start: "left right", // When card's left edge hits viewport's right edge
            end: "right left",   // When card's right edge hits viewport's left edge
            scrub: true,
          }
        });

        // Animate up to scale 1 / opacity 1 at the center, then back down
        tl.to(card, { scale: 1, opacity: 1, duration: 0.5, ease: "power1.inOut" })
          .to(card, { scale: 0.97, opacity: 0.75, duration: 0.5, ease: "power1.inOut" });
      });
    });
  }, { scope: containerRef });

  return (
    <>
      <section 
        id="industries" 
        ref={containerRef} 
        className="relative lg:h-screen w-full bg-white flex items-center lg:overflow-hidden py-24 lg:py-0"
      >
        <div className="w-full max-w-[1320px] mx-auto px-6 flex flex-col lg:flex-row items-center h-full lg:pt-16 gap-12 lg:gap-0">
          
          {/* LEFT COLUMN: Fixed Text Content */}
          <div className="w-full lg:w-[38%] shrink-0 z-10 lg:pr-12 text-center lg:text-left">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Industries
            </span>
            <h2 className="mt-5 text-[38px] font-bold leading-[1.1] tracking-tight text-ink lg:text-[52px]">
              Built for<br className="hidden lg:block" />
              Every Industry.<br className="hidden lg:block" />
              <span className="text-primary lg:whitespace-nowrap"> Designed to Trace.</span>
            </h2>
            <p className="mt-6 text-[16px] lg:text-[17px] leading-[1.75] text-ink-muted max-w-[380px] mx-auto lg:mx-0">
              TierraTrace enables end-to-end traceability, transparency and Digital Product Passports across global supply chains.
            </p>
            <a
              href="#"
              className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-primary"
            >
              Explore Industries
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* RIGHT COLUMN: Scroll-driven Horizontal Track (Masked to exactly 2 cards) */}
          <div ref={trackWrapperRef} className="w-full lg:flex-1 lg:max-w-[720px] lg:ml-auto lg:overflow-hidden lg:h-[720px] relative -mx-6 px-6 lg:mx-0 lg:px-0 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
            <div 
              ref={trackRef} 
              className="flex gap-4 lg:gap-6 lg:h-full w-max items-center pb-8 lg:pb-0"
            >
              {INDUSTRY_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="industry-card shrink-0 snap-center group relative flex flex-col overflow-hidden rounded-[28px] border border-black/4 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-300 lg:hover:-translate-y-3 lg:hover:border-primary lg:hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] w-[300px] h-[550px] lg:w-[330px] lg:h-[620px]"
                >
                  {/* Image */}
                  <div className="relative h-[220px] shrink-0 overflow-hidden bg-black/5">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                    />
                  </div>

                  {/* Text content */}
                  <div className="flex flex-1 flex-col justify-between p-7 pt-8">
                    <div>
                      <h3 className="text-[19px] font-semibold tracking-tight text-ink leading-snug">
                        {card.title}
                      </h3>
                      <p className="mt-2.5 text-[13.5px] leading-[1.6] text-ink/70">
                        {card.desc}
                      </p>
                      
                      {/* Features List */}
                      <ul className="mt-5 flex flex-col gap-2.5">
                        {card.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2.5 text-[13px] text-ink/80 font-medium">
                            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                              <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                                <path d="M11.6667 3.5L5.25 9.91667L2.33334 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Arrow link CTA */}
                    <div className="mt-6 flex items-center gap-2 text-[13.5px] font-medium text-ink transition-colors duration-300 group-hover:text-primary">
                      <span>Learn more</span>
                      <ArrowRight className="h-[14px] w-[14px] transition-transform duration-300 group-hover:translate-x-1.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Trust Strip appended natively below the pinned section */}
      <div className="bg-white py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="border-t border-black/6 pt-16">
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
              {TRUST_ITEMS.map((item) => (
                <div key={item.title} className="flex flex-col gap-3">
                  <div className="text-primary">{item.icon}</div>
                  <h4 className="text-[14px] font-semibold leading-tight text-ink">{item.title}</h4>
                  <p className="text-[12.5px] leading-[1.65] text-ink-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------- PLATFORM ---------- */
// Platform is now replaced by PlatformCapabilities

/* ---------- COMPLIANCE ---------- */
// The compliance section is now handled by the ComplianceSection component.

/* ---------- INTEGRATIONS ---------- */
function Integrations() {
  const systems = [
    "SAP S/4HANA",
    "Oracle Fusion",
    "Microsoft Dynamics",
    "Siemens Opcenter",
    "Salesforce",
    "ServiceNow",
    "Snowflake",
    "Databricks",
    "Kafka",
    "REST · GraphQL · gRPC",
  ];
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <SectionHeader
              eyebrow="Enterprise integrations & APIs"
              title={<>Meets your stack <span className="text-primary">where it lives.</span></>}
              desc="Connect ERP, MES, PLM, WMS, CRM and data warehouses through pre-built connectors and typed APIs — no rip-and-replace."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#pilot"
                className="inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white hover:bg-black"
              >
                Talk to integrations <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#platform"
                className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-ink hover:bg-surface"
              >
                See platform
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {systems.map((s, i) => (
                <div
                  key={s}
                  className={`flex h-24 items-center justify-center rounded-2xl border border-black/5 bg-white p-4 text-center text-[13.5px] font-medium text-ink transition hover:border-primary/30 hover:shadow-md ${i % 5 === 0 ? "bg-primary-soft/40" : ""}`}
                >
                  {s}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- PILOT ---------- */
function Pilot() {
  return (
    <section id="pilot" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-ink px-8 py-16 text-white sm:px-16 sm:py-24">
            {/* Ambient green */}
            <div
              aria-hidden
              className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full opacity-40"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(16,195,90,0.55), transparent 70%)",
              }}
            />
            {/* Rotating Earth using Cobe */}
            <div className="absolute left-[-200px] top-1/2 -translate-y-1/2 h-[700px] w-[700px] opacity-80 mix-blend-screen pointer-events-none">
              <CobeGlobe />
            </div>
            <div
              aria-hidden
              className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full opacity-30"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(16,195,90,0.4), transparent 70%)",
              }}
            />
            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11.5px] font-medium uppercase tracking-[0.14em] text-white/80">
                  Pilot program
                </div>
                <h2 className="mt-5 text-balance text-[38px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[56px]">
                  Ship your first product passport in <span className="text-primary">12 weeks.</span>
                </h2>
                <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-white/70">
                  A dedicated TierraTrace team pairs with yours — from a single product line to a
                  full portfolio pilot with 3+ tiers of your supply chain.
                </p>
              </div>
              <div className="grid gap-4">
                {[
                  { w: "01 · Discover", d: "Product & data-model scoping", details: "We analyze your supply chain data and define the passport schema tailored exactly to your product requirements." },
                  { w: "02 · Design", d: "Passport schema, partner onboarding plan", details: "We design the end-to-end data flow and establish verification protocols for your suppliers." },
                  { w: "03 · Deploy", d: "Live passports across pilot line", details: "We integrate with existing ERPs and issue live passports for your pilot product line." },
                  { w: "04 · Scale", d: "Rollout across sites and categories", details: "Once the pilot succeeds, we automate issuance and scale across all categories and facilities." },
                ].map((s) => (
                  <div
                    key={s.w}
                    className="group flex flex-col rounded-2xl border border-white/10 bg-white/4 px-5 py-4 cursor-pointer hover:bg-white/10 hover:border-primary/50 transition-all duration-300 shadow-none hover:shadow-[0_0_20px_rgba(22,193,95,0.15)]"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[13px] font-medium text-white transition-colors group-hover:text-primary">{s.w}</div>
                        <div className="text-[12.5px] text-white/60">{s.d}</div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-white/40 transition-transform duration-300 group-hover:text-primary group-hover:rotate-90" />
                    </div>
                    
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out">
                      <div className="overflow-hidden">
                        <div className="pt-3 text-[12.5px] text-white/70 leading-relaxed border-t border-white/10 mt-3">
                          {s.details}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <a
                  href="#contact"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[15px] font-semibold text-white transition hover:brightness-[1.03]"
                >
                  Apply for pilot <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeader
              eyebrow="Contact"
              title={<>Let's build your <span className="text-primary">product passport</span> strategy.</>}
              desc="Tell us about your products, your supply chain and the regulations you're preparing for. A specialist will reach out within one business day."
            />
            <div className="mt-8 space-y-4 text-[15px] text-ink-muted">
              <div><span className="text-ink">General inquiries</span> — info@namolabs.in</div>
              <div><span className="text-ink">Company website</span> — <a href="https://www.namolabs.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">www.namolabs.in</a></div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mx-auto max-w-4xl rounded-2xl border border-black/6 bg-white px-8 py-10 shadow-sm md:px-12 md:py-16">
              <form
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" placeholder="Your name" />
                  <Field label="Work email" type="email" placeholder="you@company.com" />
                  <Field label="Company" placeholder="Company name" />
                  <Field label="Role" placeholder="e.g. Head of Sustainability" />
                </div>
                <div className="mt-4">
                  <label className="text-[12.5px] font-medium text-ink">Industry</label>
                  <select className="mt-1.5 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-[14px] text-ink outline-none transition focus:border-primary">
                    {["Steel & Aluminium", "Textiles", "Furniture", "Tires", "Chemicals", "Paints & Lubricants", "ICT", "Electronics", "Government / Regulator", "Other"].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div className="mt-4">
                  <label className="text-[12.5px] font-medium text-ink">How can we help?</label>
                  <textarea
                    rows={4}
                    placeholder="Product lines, regions, timelines…"
                    className="mt-1.5 w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-3 text-[14px] text-ink outline-none transition focus:border-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[15px] font-semibold text-white transition hover:brightness-[1.03]"
                >
                  Request a briefing <ArrowRight className="h-4 w-4" />
                </button>
                <p className="mt-3 text-center text-[11.5px] text-ink-muted">
                  By submitting you agree to our privacy policy.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-[12.5px] font-medium text-ink">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-[14px] text-ink outline-none transition focus:border-primary"
      />
    </div>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-br from-[#06331A] via-[#052614] to-[#02140A] text-white py-20 overflow-hidden">
      {/* Sleek subtle background glow */}
      <div className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] opacity-[0.15]" style={{ background: "radial-gradient(circle at top left, #16C15F 0%, transparent 60%)" }} />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[600px] w-[600px] opacity-[0.1]" style={{ background: "radial-gradient(circle at bottom right, #16C15F 0%, transparent 60%)" }} />

      <div className="relative z-10 mx-auto max-w-[1240px] px-6">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <img src={logoUrl} alt="TierraTrace" className="h-16 w-auto brightness-0 invert drop-shadow-sm" />
            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-white/70">
              The global Digital Product Passport & end-to-end traceability platform. A Namo Labs product.
            </p>
          </div>
          {[
            {
              t: "Platform",
              l: ["Product Passport", "Traceability", "Integrations", "Compliance"],
            },
            {
              t: "Company",
              l: ["About Namo Labs", "Careers", "Newsroom", "Contact"],
            },
            {
              t: "Resources",
              l: ["EU DPP guide", "CBAM playbook", "Trust center", "Security"],
            },
          ].map((c) => (
            <div key={c.t}>
              <div className="text-[12px] font-bold uppercase tracking-widest text-white/90">{c.t}</div>
              <ul className="mt-5 space-y-3 text-[14.5px] text-white/60">
                {c.l.map((li) => (
                  <li key={li}>
                    <a href="#" className="transition-colors duration-300 hover:text-white">{li}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 text-[13px] text-white/50 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Namo Labs. All rights reserved. TierraTrace™</div>
          <div className="flex gap-8">
            <a href="#" className="transition-colors hover:text-white">Privacy</a>
            <a href="#" className="transition-colors hover:text-white">Terms</a>
            <a href="#" className="transition-colors hover:text-white">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */
function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-ink">
      <Nav />
      <main>
        <Hero />
        <WhyTierraTrace />
        <DigitalProductPassport />
        <TraceabilitySection />
        <Industries />
        <PlatformCapabilities />
        <ComplianceSection />
        <Pilot />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
