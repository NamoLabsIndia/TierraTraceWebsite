# TASK-1 — Web Trust

**Owner:** Ayush · part of [TASK-1 — Platform Section](./TASK-1-platform-section.md)
**Route:** `/platform/trust`
**Source:** `TierraTrace/docs/prd/web-trust.md`

No visual design direction here — this is the content the page needs to represent, not how it should look.

---

## Framing

The sharpest line from the spec, worth using close to verbatim:

> Almost every competitor claims to be "blockchain-secured." Very few of those claims survive someone actually trying to verify a result offline, without the vendor's own servers. This one does.

## Cover

- **Post-quantum signing** — every long-lived signature (on passport versions, carbon figures, audit records) uses a hybrid classical-plus-post-quantum signature scheme, so records signed today stay verifiable even once quantum computers can break today's classical cryptography.
- **Hardware-backed key custody** — private keys live in certified hardware security modules; there is no code path, in any API or interface, that can export a private key. Not restricted by permission — structurally absent.
- **A public transparency log for every certificate issued** — an appendable, cryptographically checkable log, in the same family as the transparency logs the browser industry uses for HTTPS certificates. Anyone can audit it independently.
- **Ledger anchoring** — batches of record hashes are anchored to a permissioned ledger on a regular short cadence. Only hashes are anchored, never customer data itself, which is what keeps this compatible with data residency requirements. The ledger's own integrity is independently checkable because its roots are periodically cross-anchored to a public, external ledger too.
- **Standards-based digital identity** — W3C-standard decentralized identifiers and verifiable credentials, so credentials issued by this platform are readable by other systems that speak the same open standard, not locked into a proprietary format.
- **A tiny, deliberately narrow public contract** — everything the trust layer does reduces to four operations: sign, verify, resolve, prove. That narrowness is a security property, not a limitation, and is worth stating that way.
- **The same open-source verification tool** referenced on the Web Verify page — signatures and anchors from this platform are verifiable by anyone, without calling TierraTrace at all.
