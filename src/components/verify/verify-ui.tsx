/**
 * Shared presentation primitives for /platform/verify.
 *
 * These exist so every section on the page shares one type ramp, one card
 * treatment and one motion curve, instead of re-deriving them inline. They are
 * presentation-only — no data fetching, no business logic.
 *
 * Design language is inherited from the rest of the marketing site
 * (see PlatformCapabilities.tsx / ComplianceSection.tsx):
 *   - eyebrow  : #EAF9EF pill, uppercase, tracking-[2px], primary
 *   - heading  : font-semibold, tracking-[-0.03em], text-ink
 *   - body     : text-ink-muted, leading-[1.55]
 *   - card     : rounded-[24px], border-black/5, shadow-[0_8px_30px_rgba(0,0,0,0.04)]
 */
import * as React from "react";
import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────
   Motion
   `motion-safe:` / prefers-reduced-motion is respected by giving
   Reveal a zero-distance variant when the user asks for reduced motion.
   ───────────────────────────────────────────────────────── */

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

/** Scroll-triggered reveal. Collapses to a plain fade when motion is reduced. */
export function Reveal({
  children,
  delay = 0,
  y = 20,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduced = usePrefersReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reduced ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-72px" }}
      transition={{
        duration: reduced ? 0.2 : 0.6,
        delay: reduced ? 0 : delay,
        ease: EASE_OUT_EXPO,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Stagger container for grids/lists that reveal item by item. */
export const staggerParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT_EXPO },
  },
};

/* ─────────────────────────────────────────────────────────
   Layout
   ───────────────────────────────────────────────────────── */

type Tone = "default" | "surface" | "surface-dots";

const SECTION_TONE: Record<Tone, string> = {
  default: "bg-background",
  surface: "bg-surface",
  "surface-dots": "bg-surface bg-dot-grid",
};

/**
 * One vertical rhythm for the whole page. Sections are `scroll-mt-24` so the
 * fixed header never covers a heading when an in-page anchor is followed.
 */
export function Section({
  id,
  tone = "default",
  className,
  children,
  labelledBy,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "relative scroll-mt-24 py-20 lg:py-28",
        SECTION_TONE[tone],
        className,
      )}
    >
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">{children}</div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Typography
   ───────────────────────────────────────────────────────── */

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-[#EAF9EF] px-4 py-1.5",
        "text-[12px] font-semibold uppercase tracking-[2px] text-primary",
        className,
      )}
    >
      {children}
    </span>
  );
}

/**
 * Section header. `align="start"` for split layouts, `align="center"` for
 * full-width sections — matching how the rest of the site alternates.
 */
export function SectionHeading({
  id,
  eyebrow,
  title,
  lede,
  align = "start",
  className,
}: {
  id?: string;
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "start" | "center";
  className?: string;
}) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col",
        centered ? "mx-auto max-w-[820px] items-center text-center" : "max-w-[680px] items-start",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      ) : null}

      <Reveal delay={0.06}>
        <h2
          id={id}
          className={cn(
            "text-balance font-semibold leading-[1.08] tracking-[-0.03em] text-ink",
            "text-[30px] sm:text-[38px] lg:text-[44px]",
            eyebrow && "mt-5",
          )}
        >
          {title}
        </h2>
      </Reveal>

      {lede ? (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "mt-5 text-balance text-[16.5px] leading-[1.6] text-ink-muted sm:text-[17px]",
              centered && "mx-auto max-w-[720px]",
            )}
          >
            {lede}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Actions
   ───────────────────────────────────────────────────────── */

const BUTTON_BASE =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[14px] font-semibold " +
  "transition-all duration-200 motion-reduce:transition-none " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 " +
  "focus-visible:ring-offset-background";

export const buttonStyles = {
  primary: cn(
    BUTTON_BASE,
    "bg-ink text-white shadow-[0_6px_18px_rgba(0,0,0,0.12)] hover:bg-black",
    "hover:shadow-[0_10px_26px_rgba(0,0,0,0.18)]",
  ),
  secondary: cn(
    BUTTON_BASE,
    "border border-black/10 bg-white text-ink hover:border-primary/30 hover:bg-[#FAFDFB]",
  ),
  ghostOnDark: cn(
    BUTTON_BASE,
    "border border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10",
    "focus-visible:ring-offset-transparent",
  ),
};

/* ─────────────────────────────────────────────────────────
   Data display
   ───────────────────────────────────────────────────────── */

/** Headline figure + label, used in the hero proof strip. */
export function Stat({
  value,
  label,
  sub,
}: {
  value: React.ReactNode;
  label: string;
  sub?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[28px] font-semibold leading-none tracking-[-0.03em] text-ink sm:text-[32px]">
        {value}
      </span>
      <span className="text-[13px] font-medium text-ink">{label}</span>
      {sub ? <span className="text-[12px] text-ink-muted">{sub}</span> : null}
    </div>
  );
}

/** Small label above a data value. */
export function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] font-semibold uppercase tracking-[0.07em] text-ink-muted/80">
      {children}
    </span>
  );
}
