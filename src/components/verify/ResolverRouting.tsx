/**
 * GS1 Digital Link resolver — audience routing.
 *
 * Previously four static tiles in four unrelated colours (emerald, blue, violet,
 * orange), which said "here are four boxes" rather than "one code, four
 * destinations". This makes the routing itself the subject: a single identifier
 * at the top, an audience selector, and the destination that identifier resolves
 * to for that audience.
 *
 * Implemented as a real WAI-ARIA tablist with roving tabindex and arrow-key
 * navigation. Selecting an audience only changes what this component displays —
 * no routing, no request, no data flow is touched.
 */
import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, QrCode } from "lucide-react";
import { cn } from "@/lib/utils";
import { RESOLVER_AUDIENCES } from "./data";
import { FieldLabel, usePrefersReducedMotion } from "./verify-ui";

const IDENTIFIER = "id.tierratrace.in/01/09521000123456/21/A7F2";

export function ResolverRouting() {
  const [active, setActive] = React.useState(0);
  const reduced = usePrefersReducedMotion();
  const tabRefs = React.useRef<Array<HTMLButtonElement | null>>([]);

  const onKeyDown = (event: React.KeyboardEvent) => {
    const last = RESOLVER_AUDIENCES.length - 1;
    let next: number | null = null;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = active === last ? 0 : active + 1;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = active === 0 ? last : active - 1;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = last;

    if (next !== null) {
      event.preventDefault();
      setActive(next);
      tabRefs.current[next]?.focus();
    }
  };

  const current = RESOLVER_AUDIENCES[active];

  return (
    <div className="rounded-[24px] border border-black/5 bg-white p-5 shadow-[0_18px_50px_rgba(0,0,0,0.07)] sm:p-6">
      {/* The one identifier */}
      <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-surface-2/60 px-4 py-3">
        <span
          aria-hidden="true"
          className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white text-ink shadow-sm"
        >
          <QrCode className="size-[18px]" strokeWidth={1.75} />
        </span>
        <div className="min-w-0 flex-1">
          <FieldLabel>One scanned identifier</FieldLabel>
          <div className="truncate font-mono text-[12.5px] text-ink">{IDENTIFIER}</div>
        </div>
      </div>

      {/* Audience selector */}
      <div
        role="tablist"
        aria-label="Resolver audience"
        aria-orientation="horizontal"
        onKeyDown={onKeyDown}
        className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4"
      >
        {RESOLVER_AUDIENCES.map((item, index) => {
          const Icon = item.icon;
          const selected = index === active;

          return (
            <button
              key={item.audience}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              role="tab"
              id={`resolver-tab-${index}`}
              aria-selected={selected}
              aria-controls="resolver-panel"
              tabIndex={selected ? 0 : -1}
              type="button"
              onClick={() => setActive(index)}
              className={cn(
                "flex flex-col items-start gap-2 rounded-2xl border px-3.5 py-3 text-left",
                "transition-all duration-200 motion-reduce:transition-none",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                selected
                  ? "border-primary/30 bg-primary/[0.07] shadow-[0_4px_14px_rgba(22,193,95,0.10)]"
                  : "border-black/6 bg-white hover:border-primary/20 hover:bg-[#FAFDFB]",
              )}
            >
              <Icon
                className={cn(
                  "size-[18px] shrink-0",
                  selected ? "text-primary" : "text-ink-muted",
                )}
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <span
                className={cn(
                  "text-[13px] font-semibold leading-tight",
                  selected ? "text-ink" : "text-ink-muted",
                )}
              >
                {item.audience}
              </span>
            </button>
          );
        })}
      </div>

      {/* Resolved destination */}
      <div
        role="tabpanel"
        id="resolver-panel"
        aria-labelledby={`resolver-tab-${active}`}
        className="mt-4 rounded-2xl border border-black/5 bg-surface-2/50 p-4 sm:p-5"
      >
        <div className="flex items-center gap-2 text-[12px] font-medium text-ink-muted">
          <span>{current.audience}</span>
          <ArrowRight className="size-3.5 text-primary" strokeWidth={2} aria-hidden="true" />
          <span className="font-mono text-[11.5px] text-ink-muted/80">
            {current.linkType}
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.audience}
            initial={reduced ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="mt-2 text-[16px] font-semibold text-ink">
              {current.destination}
            </div>
            <p className="mt-1.5 text-[13.5px] leading-[1.55] text-ink-muted">
              {current.sees}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="mt-3 text-[12px] leading-[1.5] text-ink-muted/80">
        Same code, right context, every time — resolved by the GS1 Digital Link
        standard rather than by four separate labels on the product.
      </p>
    </div>
  );
}
