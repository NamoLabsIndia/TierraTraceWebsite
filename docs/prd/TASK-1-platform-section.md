# TASK-1 — Platform Section

**Owner:** Ayush
**Tracker description:** Build the complete Platform section including Platform Overview, Architecture, Digital Product Passport, Traceability, Web Auth, Web Core, Web Connect, Web Verify, Web Carbon, Web Trust, Capabilities and related UI/components.

This is the biggest single task in the build — nine real pages. Split into one PRD per page below, the same way the underlying product specs in `TierraTrace/docs/prd/` are split one-per-product. Read the whole list before starting; the pages reference each other (Web Auth's blueprints are the same 13 industries Jebaz is building cards for; Web Core's passport/traceability capabilities are split into their own dedicated pages here because they're the strongest individual selling points).

Read [`docs/prd/README.md`](./README.md) first if you haven't — it has the shared technical baseline (SSR rule, content-accuracy rule) that applies to every page below and isn't repeated in full in each file.

No visual design direction is given anywhere in this task — layout, components, styling are yours. Every file below is the *content* that page needs to represent, sourced from the actual product specs so nothing is invented.

---

## Pages, in the order it makes sense to build them

| # | Route | Page | PRD |
|---|---|---|---|
| 1 | `/platform` | Platform Overview & Architecture | [`TASK-1-platform-overview.md`](./TASK-1-platform-overview.md) |
| 2 | `/platform/identity` | Web Auth (identity & workspaces) | [`TASK-1-web-auth.md`](./TASK-1-web-auth.md) |
| 3 | `/platform/passport` | Digital Product Passport | [`TASK-1-passport.md`](./TASK-1-passport.md) |
| 4 | `/platform/traceability` | Traceability | [`TASK-1-traceability.md`](./TASK-1-traceability.md) |
| 5 | `/platform/core` | Web Core (operations platform) | [`TASK-1-web-core.md`](./TASK-1-web-core.md) |
| 6 | `/platform/connect` | Web Connect | [`TASK-1-web-connect.md`](./TASK-1-web-connect.md) |
| 7 | `/platform/verify` | Web Verify | [`TASK-1-web-verify.md`](./TASK-1-web-verify.md) |
| 8 | `/platform/carbon` | Web Carbon | [`TASK-1-web-carbon.md`](./TASK-1-web-carbon.md) |
| 9 | `/platform/trust` | Web Trust | [`TASK-1-web-trust.md`](./TASK-1-web-trust.md) |

Suggested order, not a hard requirement: Overview and Web Auth first since every other page implicitly assumes a workspace already exists; the rest in whatever order is convenient.

"Capabilities" from the tracker's task description isn't its own page — each PRD below includes a capabilities section for that product; that's the requirement, not a tenth route.
