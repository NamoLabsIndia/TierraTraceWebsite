# TASK-1 — Traceability

**Owner:** Ayush · part of [TASK-1 — Platform Section](./TASK-1-platform-section.md)
**Route:** `/platform/traceability`
**Source:** `TierraTrace/docs/prd/web-core.md` §48, §53

No visual design direction here — this is the content the page needs to represent, not how it should look.

---

## Framing

The headline capability: **recall impact in ten seconds.** A full downstream query — every affected batch, every shipment, every customer — returns in that time. That's the number to lead with; it's a real target from the spec, not marketing rounding.

## Cover

- Batch/lot genealogy is a real data structure, not a report generated after the fact — full upstream lineage to raw-material lots (with quantities at every link) and full downstream impact, to **50 levels of depth**.
- Splits and merges are correctly attributed through the genealogy graph.
- Mass balance is reconciled at every node, with tolerance flagging where it doesn't add up.
- Exportable as CSV, JSON, and a regulator-ready PDF dossier.
- The traceability view renders the workspace's actual lifecycle stages (a textile workspace sees Farm→Ginning→Spinning→...; a steel workspace sees Ore→Melting→Casting→...; the full list per industry is in Jebaz's Industries PRD if useful reference). **Gaps in the chain render explicitly** — a stage with no evidence shows as missing, it's never silently smoothed over. Each node shows its evidence state: signed / anchored / unsigned / unverifiable.
