# TASK-1 — Digital Product Passport

**Owner:** Ayush · part of [TASK-1 — Platform Section](./TASK-1-platform-section.md)
**Route:** `/platform/passport`
**Source:** `TierraTrace/docs/prd/web-core.md` §56

No visual design direction here — this is the content the page needs to represent, not how it should look.

---

## Framing

A Digital Product Passport in this platform is not a static document — every field on it is either sourced from a real operational record, or explicitly flagged as manually entered because no source record exists yet. That distinction is the core idea of this page: **provenance is visible, not asserted.**

## Cover

- Every field displays which record supplied it — manual entry is permitted only where no source exists, and is visually flagged as manually asserted wherever it appears.
- Publication is blocked on incomplete mandatory fields, and each gap is linked to the record that would fill it — a passport can't go live with silent holes.
- Versions are immutable. A passport's history doesn't get rewritten; corrections create new versions.
- The QR/NFC identifier printed on the product stays stable across every version of that passport.
- Each version is cryptographically signed (by Web Trust) with an anchor reference, so its authenticity is independently checkable — this is the bridge to Web Verify, worth a cross-link to `/platform/verify`.
