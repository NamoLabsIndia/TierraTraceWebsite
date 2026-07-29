# TASK-1 — Platform Overview & Architecture

**Owner:** Ayush · part of [TASK-1 — Platform Section](./TASK-1-platform-section.md)
**Route:** `/platform`

No visual design direction here — this is the content the page needs to communicate, not how it should look.

---

## What this page needs to do

This is the page that explains how the eight products relate to each other before a visitor goes deep on any single one. It should communicate the real architecture, not an idealized or simplified version of it:

- **TierraTrace Platform** sits behind **Web Auth** — every workspace, every user, every machine identity authenticates through it first. Nothing else is reachable without it.
- From there, the workspace reaches five product surfaces: **Web Core**, **Web Connect**, **Web Verify**, **Web Carbon**, **Web Trust**.
- **Web Core** contains **Compliance** and **Insights** as capabilities within it — they are not separate products with their own pages.
- **Web Connect** contains the **API Gateway** as a capability within it — same reasoning.

This is one platform with a single identity plane underneath five product surfaces, not five separate products that happen to share a login screen. That distinction is the entire point of this page. The individual product pages linked from here go deep on their own product without needing to repeat this architecture each time — this page is where it gets said once, clearly.

## What to link to from here

Cards or links to all eight other pages in this task: Web Auth, Digital Product Passport, Traceability, Web Core, Web Connect, Web Verify, Web Carbon, Web Trust. Each of those has its own PRD in this same folder if you want the detail behind any one of them before deciding how to represent it here.
