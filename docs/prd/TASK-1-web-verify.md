# TASK-1 — Web Verify

**Owner:** Ayush · part of [TASK-1 — Platform Section](./TASK-1-platform-section.md)
**Route:** `/platform/verify`
**Source:** `TierraTrace/docs/prd/web-verify.md`

No visual design direction here — this is the content the page needs to represent, not how it should look. **The wording rule below is a hard constraint, not a style preference — read it before writing this page.**

---

## Framing

A consumer scans a QR code and gets a defensible answer in under three seconds, no app or account required. Behind that simple moment is a full verification and fraud-detection system.

## Cover

- An **eight-stage verification pipeline** (resolve → integrity → signature → anchor → lifecycle → claims → risk → record) that fails closed — if there's doubt at any stage, the result never says "verified."
- A closed set of seven possible results, not a free-text answer.
- A **downloadable proof bundle plus an open-source verification tool** — anyone can independently re-check a result offline, without ever calling back to TierraTrace's own servers. This is the single strongest trust claim available on the whole site: the platform's own word is never the last word.
- The **GS1 Digital Link resolver** — scanning a product's code redirects to the right destination based on who's asking (a consumer sees the passport, a certification body sees compliance info). Cross-link to Rishabh's `/compliance/gs1-digital-link` for how the standard itself works.
- A **fraud and risk platform** built on ten published, named risk signals (impossible-travel duplicate scans, cloned-label scan patterns, geographic implausibility, and so on) — and every risk score is explainable: it decomposes into which named signals contributed, never a black-box number.
- **Bulk verification** for enterprise compliance teams, up to 50,000 identifiers in one job.

## Wording rule — non-negotiable on this page

The words *counterfeit, fake, fraud, genuine,* and *authentic* must never appear describing a specific item's verdict. Use *verified, could not be verified, no record found, withdrawn, recalled.* This applies to any verdict-style UI on this page, not just literal product copy.
