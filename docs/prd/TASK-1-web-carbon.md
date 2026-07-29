# TASK-1 — Web Carbon

**Owner:** Ayush · part of [TASK-1 — Platform Section](./TASK-1-platform-section.md)
**Route:** `/platform/carbon`
**Source:** `TierraTrace/docs/prd/web-carbon.md`

No visual design direction here — this is the content the page needs to represent, not how it should look.

---

## Framing

The differentiator, worth stating directly: corporate carbon-accounting tools produce estimates layered on industry averages. This computes a carbon footprint **per batch, from what actually happened on the factory floor** — the same operational data that drives traceability, not a separate estimate bolted on afterward.

## Cover

- **Batch-level product carbon footprint**, computed automatically within 60 seconds of a batch completing — no manual trigger required in normal operation. It walks the real genealogy graph: material inputs, metered machine and process energy, auxiliaries, and transport.
- **Full GHG Protocol coverage** — Scope 1, Scope 2 (calculated *both* location-based and market-based every time, not one or the other), and all 15 Scope 3 categories, each one showing which calculation method was used (supplier-specific data ranks above activity-based estimates, which rank above spend-based ones). Cross-link to Rishabh's `/compliance/ghg-protocol` for how the framework itself works.
- **Every calculation is immutable and fully traceable** — a figure can always be decomposed back to the exact activity records and emission-factor versions that produced it. Corrections never edit a closed calculation; they produce a new one, following the same discipline financial restatements use.
- **Disclosure packs generated with no manual re-entry** — CSRD's ESRS E1 datapoint set, a CBAM quarterly declaration, a GHG Protocol inventory report, ISO-aligned reports. Regenerating from the same inputs always produces the same output.
- **A Data Quality Rating on every number** — metered data outranks invoiced data, which outranks a calculated estimate, which outranks an industry average. The rating is visible next to the figure, not hidden in a footnote.
- **Any public sustainability claim** ("carbon-neutral," "100% renewable") is gated behind actual evidence before it can be published — an unsupported claim type is rejected at setup, not caught after the fact.
- **Carbon offsets never reduce the reported gross emissions number** — they only ever appear in a separate, clearly labelled net view. This is a deliberate integrity rule, worth stating on the page.
