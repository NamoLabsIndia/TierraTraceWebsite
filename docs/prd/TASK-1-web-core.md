# TASK-1 — Web Core

**Owner:** Ayush · part of [TASK-1 — Platform Section](./TASK-1-platform-section.md)
**Route:** `/platform/core`
**Source:** `TierraTrace/docs/prd/web-core.md`, broadly

No visual design direction here — this is the content the page needs to represent, not how it should look.

---

## Framing

Everything about the day-to-day operations platform that isn't already covered by the dedicated Digital Product Passport and Traceability pages. The framing line worth using somewhere on this page, because it's the clearest explanation of what this product actually is versus an ERP:

> An ERP knows that a quantity of material was sold for a price. This platform knows which raw lots went into it, which machines produced it, who signed off its quality release, and what its carbon intensity was.

## Cover

- **Quality management** — inspection plans with defined characteristics/methods/sampling/limits, and a non-conformance register that runs investigation → root cause → corrective action → closure.
- **Batch release workflow** — before a batch can be released, the system enumerates any blockers: incomplete inspection, a failed characteristic, an open non-conformance report, an expired supplier certificate on a consumed lot, a missing mandatory document, an unreleased or expired parent lot. A release is treated as a regulatory attestation, not a status flip.
- **Operations Center** — a single work inbox aggregating everything that needs the current user's attention across every module: QA releases, inspections due, non-conformance reports, approvals, expiring certificates, document reviews, stock alerts, shipment exceptions, even integration failures surfaced from Web Connect.
- **Certificate lifecycle** — expiry alerts at 90/60/30/14/7 days out, with automatic re-verification against issuing-body systems where that's available, and scope checking (a certificate covering organic cotton doesn't substantiate a claim about polyester).
- **Reports & analytics** — scheduled delivery, generated under the recipient's own access permissions rather than the person who scheduled it.
- **Built for the shop floor**, not just the office — large touch targets, scanner-first input, and offline capture for a defined set of operations that reconciles once connectivity returns.
