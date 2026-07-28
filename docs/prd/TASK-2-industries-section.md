# TASK-2 — Industries Section

**Owner:** Jebaz
**Tracker description:** Build a single Industries page with all supported industries in one page using cards/sections.

One route, one page: `/industries`. Thirteen industries, each represented as a card or section. No sub-pages for now — confirmed with the PM as one page for launch, may split out later.

No visual design direction here — card layout, grid, styling are yours. This is the content each card needs to carry, sourced from the actual platform specification so nothing here is invented (the lifecycle stages and module counts below are exact, not illustrative).

---

## Why this page matters

When a customer signs up (on Ayush's `/platform/identity` page), they pick one of these same 13 industries as their **workspace blueprint** — it pre-seeds their terminology, their modules, and their lifecycle stages. This page is the public-facing version of that same list: a visitor should be able to find their own industry and immediately recognize their own vocabulary and process, not generic supply-chain language.

There's a 14th option worth a mention somewhere on the page: a workspace can also start from a blank blueprint with none of these presets, for anyone who doesn't fit the 13. Doesn't need its own card — a line noting it exists is enough.

---

## The 13 industries — exact data

Each row is real, from the platform specification. "Lifecycle" is the sequence of stages the traceability view renders for that industry. "Modules" is the number of platform modules pre-enabled for it. Don't round these or approximate the lifecycle stage names — they're literal.

| Industry | Lifecycle stages | Modules |
|---|---|---|
| Textile & Apparel | Farm → Ginning → Spinning → Weaving/Knitting → Dyeing → Garment → Packaging → Shipment | 22 |
| Automotive | Component Sourcing → Stamping & Body → Machining → Assembly → Testing → Shipment | 21 |
| Electronics | Component → PCB → Assembly → Firmware → Testing → Packaging → Shipment | 22 |
| Food & Beverage | Farm → Processing → Packaging → Cold Chain → Retail → Consumer | 21 |
| Pharmaceuticals | API → Formulation → Batch → Packaging → Serialization → Distribution | 21 |
| Chemicals | Feedstock → Reaction → Blending → QC Release → Packaging → Distribution | 21 |
| Consumer Goods | Sourcing → Production → Packaging → Distribution → Retail | 21 |
| Industrial Equipment | Fabrication → Machining → Assembly & Test → Commissioning → Shipment | 21 |
| Medical Devices | Component → Cleanroom Assembly → Sterilization → Packaging & Labelling → UDI Serialization → Distribution | 21 |
| Packaging | Substrate → Converting → Printing → Finishing → Shipment | 20 |
| Steel & Metals | Ore/Scrap → Melting → Casting → Rolling → Finishing → Shipment | 21 |
| Agriculture | Farm → Harvest → Primary Processing → Storage → Export | 19 |
| Energy | Materials → Cell/Component → Assembly → Testing & Certification → Deployment | 22 |

---

## What each card needs, beyond the table above

For each industry, beyond name/lifecycle/module count, include:

- **A one-line description of who this is for** — a plant manager or compliance lead in that industry should recognize themselves immediately. Keep this specific to the industry, not a generic template sentence with the industry name swapped in.
- **The lifecycle stages, in order** — this is the most concrete, differentiating content on the card. It's what makes 13 cards feel like 13 real industries instead of one template repeated.
- **Regulatory relevance where it's real** — a few of these carry specific compliance weight worth surfacing:
  - **Steel & Metals** is directly exposed to CBAM (the EU's carbon border mechanism covers steel).
  - **Pharmaceuticals** and **Medical Devices** carry serialization/UDI requirements as a named lifecycle stage — that's already visible in the table above.
  - **Textile & Apparel**, **Food & Beverage**, and **Consumer Goods** are the primary targets for the EU Digital Product Passport requirement.
  - Don't invent regulatory claims for industries where the spec doesn't name one — silence is fine, a wrong claim isn't.

## Terminology — one thing worth knowing before you write these

A few of these industries use different words for the same underlying concept, because the platform lets a workspace rename core entities to match its own vocabulary. The clearest example: a **Steel & Metals** workspace calls a production batch a **"Heat"** and calls a plant a **"Mill"** — same data, same functionality, different label. If you want to make that concrete on the Steel & Metals card specifically, that's accurate and worth doing; don't apply invented terminology swaps to industries where none is specified.
