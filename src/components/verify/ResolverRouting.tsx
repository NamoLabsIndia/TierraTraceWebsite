/**
 * GS1 Digital Link resolver — animated audience routing.
 *
 * ── Critique of the version this replaces ─────────────────────────────────
 * It was a correct tablist, but switching audience only swapped two lines of
 * text. The interesting thing about a Digital Link resolver — that one
 * identifier *routes*, and the destination changes underneath you — happened
 * instantly and invisibly. Nothing conveyed motion from code to destination.
 *
 * ── What this does instead ───────────────────────────────────────────────
 * A shared `layoutId` pill slides between audiences, so the selection travels
 * rather than teleports, and a pulse runs down the connector from the
 * identifier to the destination card on every change — the routing is the
 * animation. The destination card carries the resolved link type in mono,
 * reinforcing that this is a standards-defined redirect, not a lookup table.
 *
 * Selecting an audience only changes what this component displays. No routing,
 * no request, no data flow is touched.
 */
import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { CornerDownRight, QrCode } from "lucide-react";
import { cn } from "@/lib/utils";
import { RESOLVER_AUDIENCES } from "./data";
import {
  EASE_OUT_EXPO,
  FieldLabel,
  PANEL,
  usePrefersReducedMotion,
} from "./verify-ui";

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
    <div className={cn(PANEL, "p-5 sm:p-6")}>
      {/* The one identifier */}
      <div className="flex items-center gap-3 rounded-2xl border border-black/[0.06] bg-surface-2/60 px-4 py-3">
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
        className="mt-5 grid grid-cols-2 gap-1.5 rounded-2xl bg-surface-2/60 p-1.5 sm:grid-cols-4"
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
                "relative flex flex-col items-start gap-2 rounded-xl px-3 py-2.5 text-left",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              )}
            >
              {/* Sliding selection pill */}
              {selected ? (
                <motion.span
                  layoutId="resolver-pill"
                  aria-hidden="true"
                  className="absolute inset-0 rounded-xl bg-white shadow-[0_1px_2px_rgba(16,24,40,0.06),0_6px_16px_-6px_rgba(16,24,40,0.14)] ring-1 ring-primary/20"
                  transition={{ duration: reduced ? 0 : 0.32, ease: EASE_OUT_EXPO }}
                />
              ) : null}

              <span className="relative z-10 flex flex-col items-start gap-2">
                <Icon
                  className={cn(
                    "size-[18px] shrink-0 transition-colors duration-200",
                    "motion-reduce:transition-none",
                    selected ? "text-primary" : "text-ink-muted",
                  )}
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <span
                  className={cn(
                    "text-[12.5px] font-semibold leading-tight transition-colors duration-200",
                    "motion-reduce:transition-none",
                    selected ? "text-ink" : "text-ink-muted",
                  )}
                >
                  {item.audience}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Connector — a pulse travels it on every change */}
      <div className="relative mx-auto h-7 w-px" aria-hidden="true">
        <span className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/10" />
        {!reduced ? (
          <motion.span
            key={`pulse-${active}`}
            className="absolute left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_8px_rgba(22,193,95,0.7)]"
            initial={{ top: 0, opacity: 0 }}
            animate={{ top: "100%", opacity: [0, 1, 1, 0] }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
          />
        ) : null}
      </div>

      {/* Resolved destination */}
      <div
        role="tabpanel"
        id="resolver-panel"
        aria-labelledby={`resolver-tab-${active}`}
        className="min-h-[132px] rounded-2xl border border-primary/15 bg-primary/[0.04] p-4 sm:p-5"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current.audience}
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease: EASE_OUT_EXPO }}
          >
            <div className="flex flex-wrap items-center gap-2 text-[12px] font-medium text-ink-muted">
              <CornerDownRight className="size-3.5 text-primary" strokeWidth={2} aria-hidden="true" />
              <span>{current.audience}</span>
              <span className="rounded-md bg-white px-1.5 py-0.5 font-mono text-[11px] text-ink-muted/85 ring-1 ring-black/[0.05]">
                {current.linkType}
              </span>
            </div>

            <div className="mt-2.5 text-[17px] font-semibold tracking-[-0.01em] text-ink">
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
