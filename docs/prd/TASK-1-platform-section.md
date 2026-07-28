# TASK-1 — Platform Section

**Owner:** Ayush
**Tracker description:** Build the complete Platform section including Platform Overview, Architecture, Digital Product Passport, Traceability, Web Auth, Web Core, Web Connect, Web Verify, Web Carbon, Web Trust, Capabilities and related UI/components.

This is the biggest single task in the build — nine real pages. Read the whole thing before starting; the pages reference each other (Web Auth's blueprints are the same 13 industries Jebaz is building cards for, Web Core's passport/traceability capabilities are split into their own dedicated pages here because they're the strongest individual selling points).

No visual design direction is given here on purpose — layout, components, styling are yours to design. This is the *content* each page needs to represent, sourced from the actual product specs so nothing on the page is invented.

---

## Pages to build

| Route | Page |
|---|---|
| `/platform` | Platform Overview |
| `/platform/passport` | Digital Product Passport |
| `/platform/traceability` | Traceability |
| `/platform/core` | Web Core (operations platform, beyond passport/traceability) |
| `/platform/connect` | Web Connect |
| `/platform/verify` | Web Verify |
| `/platform/carbon` | Web Carbon |
| `/platform/trust` | Web Trust |
| `/platform/identity` | Web Auth (identity & workspaces) |

"Capabilities" from the tracker description isn't a separate page — each product page below needs a capabilities section; that's the requirement, not a tenth route.

---

## `/platform` — Overview & Architecture

This is the page that explains how the eight products relate to each other before a visitor goes deep on any one of them. It should communicate the real architecture:

- **TierraTrace Platform** sits behind **Web Auth** — every workspace, every user, every machine identity authenticates through it first. Nothing else is reachable without it.
- From there, the workspace reaches five product surfaces: **Web Core**, **Web Connect**, **Web Verify**, **Web Carbon**, **Web Trust**.
- **Web Core** itself contains **Compliance** and **Insights** as capabilities within it (not separate products).
- **Web Connect** contains the **API Gateway** as a capability within it.

This is a single platform with one identity plane underneath five product surfaces — not five separate products that happen to share a login. That's the framing for this page specifically; the individual product pages below can go deep on their own product without repeating the whole architecture each time.

---

## `/platform/passport` — Digital Product Passport

Source: `web-core.md` §56.

A Digital Product Passport in this platform is not a static document — every field on it is either sourced from a real operational record, or explicitly flagged as manually entered because no source record exists yet. That distinction is the core idea of this page: **provenance is visible, not asserted.**

Cover:
- Every field displays which record supplied it — manual entry is permitted only where no source exists, and is visually flagged as manually asserted wherever it appears.
- Publication is blocked on incomplete mandatory fields, and each gap is linked to the record that would fill it — a passport can't go live with silent holes.
- Versions are immutable. A passport's history doesn't get rewritten; corrections create new versions.
- The QR/NFC identifier printed on the product stays stable across every version of that passport.
- Each version is cryptographically signed (by Web Trust) with an anchor reference, so its authenticity is independently checkable — this is the bridge to Web Verify, worth a cross-link.

## `/platform/traceability` — Traceability

Source: `web-core.md` §48, §53.

The headline capability: **recall impact in ten seconds.** A full downstream query — every affected batch, every shipment, every customer — returns in that time. That's the number to lead with; it's a real target from the spec, not marketing rounding.

Cover:
- Batch/lot genealogy is a real data structure, not a report generated after the fact — full upstream lineage to raw-material lots (with quantities at every link) and full downstream impact, to **50 levels of depth**.
- Splits and merges are correctly attributed through the genealogy graph.
- Mass balance is reconciled at every node, with tolerance flagging where it doesn't add up.
- Exportable as CSV, JSON, and a regulator-ready PDF dossier.
- The traceability view renders the workspace's actual lifecycle stages (a textile workspace sees Farm→Ginning→Spinning→...; a steel workspace sees Ore→Melting→Casting→...). **Gaps in the chain render explicitly** — a stage with no evidence shows as missing, it's never silently smoothed over. Each node shows its evidence state: signed / anchored / unsigned / unverifiable.

## `/platform/core` — Web Core

Source: `web-core.md`, broadly — everything about the day-to-day operations platform that isn't already covered by the Passport and Traceability pages above.

The framing line worth using somewhere on this page, because it's the clearest explanation of what this product actually is versus an ERP: *an ERP knows that a quantity of material was sold for a price. This platform knows which raw lots went into it, which machines produced it, who signed off its quality release, and what its carbon intensity was.*

Cover:
- **Quality management** — inspection plans with defined characteristics/methods/sampling/limits, and a non-conformance register that runs investigation → root cause → corrective action → closure.
- **Batch release workflow** — before a batch can be released, the system enumerates any blockers: incomplete inspection, a failed characteristic, an open non-conformance report, an expired supplier certificate on a consumed lot, a missing mandatory document, an unreleased or expired parent lot. A release is treated as a regulatory attestation, not a status flip.
- **Operations Center** — a single work inbox aggregating everything that needs the current user's attention across every module: QA releases, inspections due, non-conformance reports, approvals, expiring certificates, document reviews, stock alerts, shipment exceptions, even integration failures surfaced from Web Connect.
- **Certificate lifecycle** — expiry alerts at 90/60/30/14/7 days out, with automatic re-verification against issuing-body systems where that's available, and scope checking (a certificate covering organic cotton doesn't substantiate a claim about polyester).
- **Reports & analytics** — scheduled delivery, generated under the recipient's own access permissions rather than the person who scheduled it.
- **Built for the shop floor**, not just the office — large touch targets, scanner-first input, and offline capture for a defined set of operations that reconciles once connectivity returns.

## `/platform/connect` — Web Connect

Source: `web-connect.md`.

The pitch: *every integration is pluggable configuration, never code.* This is the product that makes SAP, MES lines, PLCs, barcode scanners, and partner systems speak to the platform.

Cover:
- **19 certified connectors** at general availability, spanning ERP (SAP S/4HANA, Oracle Fusion Cloud, Microsoft Dynamics 365), industrial protocols (OPC UA, MQTT, barcode, RFID via LLRP), messaging (Kafka, RabbitMQ), cloud events (AWS EventBridge, Azure Event Hubs), and files/APIs (SFTP, CSV, REST, GraphQL, SOAP, webhooks).
- **Transformation Studio** — a visual, three-pane mapper (source schema, canvas, target schema) with a safe expression language that can't touch the network or the filesystem, a test console with a regression suite that has to pass before deploying a mapping, and one-action rollback.
- **Edge Fleet** — agents installed inside a customer's own plant, outbound-only by design (no inbound ports, ever), buffering data securely if the connection drops and flushing it once it's back.
- **API Gateway** — this is the capability that turns the platform's own data into a managed API product: a catalog, API keys and consumers, OAuth clients, rate limiting, traffic analytics, and a branded developer portal with a try-it sandbox.
- **Secrets Vault** — write-only. Once a credential is stored, it can never be read back out again through any interface, by any role — including platform staff.

## `/platform/verify` — Web Verify

Source: `web-verify.md`. **Read the wording rule below before writing this page — it's a hard constraint, not a style preference.**

The pitch: a consumer scans a QR code and gets a defensible answer in under three seconds, no app or account required. Behind that simple moment is a full verification and fraud-detection system.

Cover:
- An **eight-stage verification pipeline** (resolve → integrity → signature → anchor → lifecycle → claims → risk → record) that fails closed — if there's doubt at any stage, the result never says "verified."
- A closed set of seven possible results, not a free-text answer.
- A **downloadable proof bundle plus an open-source verification tool** — anyone can independently re-check a result offline, without ever calling back to TierraTrace's own servers. This is the single strongest trust claim available on the whole site: the platform's own word is never the last word.
- The **GS1 Digital Link resolver** — scanning a product's code redirects to the right destination based on who's asking (a consumer sees the passport, a certification body sees compliance info).
- A **fraud and risk platform** built on ten published, named risk signals (impossible-travel duplicate scans, cloned-label scan patterns, geographic implausibility, and so on) — and every risk score is explainable: it decomposes into which named signals contributed, never a black-box number.
- **Bulk verification** for enterprise compliance teams, up to 50,000 identifiers in one job.

**Wording rule for this page specifically:** the words *counterfeit, fake, fraud, genuine,* and *authentic* must never appear describing a specific item's verdict. Use *verified, could not be verified, no record found, withdrawn, recalled.* This applies to any verdict-style UI on this page, not just literal product copy.

## `/platform/carbon` — Web Carbon

Source: `web-carbon.md`.

The differentiator, worth stating directly: corporate carbon-accounting tools produce estimates layered on industry averages. This computes a carbon footprint **per batch, from what actually happened on the factory floor** — the same operational data that drives traceability, not a separate estimate bolted on afterward.

Cover:
- **Batch-level product carbon footprint**, computed automatically within 60 seconds of a batch completing — no manual trigger required in normal operation. It walks the real genealogy graph: material inputs, metered machine and process energy, auxiliaries, and transport.
- **Full GHG Protocol coverage** — Scope 1, Scope 2 (calculated *both* location-based and market-based every time, not one or the other), and all 15 Scope 3 categories, each one showing which calculation method was used (supplier-specific data ranks above activity-based estimates, which rank above spend-based ones).
- **Every calculation is immutable and fully traceable** — a figure can always be decomposed back to the exact activity records and emission-factor versions that produced it. Corrections never edit a closed calculation; they produce a new one, following the same discipline financial restatements use.
- **Disclosure packs generated with no manual re-entry** — CSRD's ESRS E1 datapoint set, a CBAM quarterly declaration, a GHG Protocol inventory report, ISO-aligned reports. Regenerating from the same inputs always produces the same output.
- **A Data Quality Rating on every number** — metered data outranks invoiced data, which outranks a calculated estimate, which outranks an industry average. The rating is visible next to the figure, not hidden in a footnote.
- **Any public sustainability claim** ("carbon-neutral," "100% renewable") is gated behind actual evidence before it can be published — an unsupported claim type is rejected at setup, not caught after the fact.
- **Carbon offsets never reduce the reported gross emissions number** — they only ever appear in a separate, clearly labelled net view. This is a deliberate integrity rule, worth stating on the page.

## `/platform/trust` — Web Trust

Source: `web-trust.md`.

The sharpest line from the spec, worth using close to verbatim: *almost every competitor claims to be "blockchain-secured." Very few of those claims survive someone actually trying to verify a result offline, without the vendor's own servers. This one does.*

Cover:
- **Post-quantum signing** — every long-lived signature (on passport versions, carbon figures, audit records) uses a hybrid classical-plus-post-quantum signature scheme, so records signed today stay verifiable even once quantum computers can break today's classical cryptography.
- **Hardware-backed key custody** — private keys live in certified hardware security modules; there is no code path, in any API or interface, that can export a private key. Not restricted by permission — structurally absent.
- **A public transparency log for every certificate issued** — an appendable, cryptographically checkable log, in the same family as the transparency logs the browser industry uses for HTTPS certificates. Anyone can audit it independently.
- **Ledger anchoring** — batches of record hashes are anchored to a permissioned ledger on a regular short cadence. Only hashes are anchored, never customer data itself, which is what keeps this compatible with data residency requirements. The ledger's own integrity is independently checkable because its roots are periodically cross-anchored to a public, external ledger too.
- **Standards-based digital identity** — W3C-standard decentralized identifiers and verifiable credentials, so credentials issued by this platform are readable by other systems that speak the same open standard, not locked into a proprietary format.
- **A tiny, deliberately narrow public contract** — everything the trust layer does reduces to four operations: sign, verify, resolve, prove. That narrowness is a security property, not a limitation, and is worth stating that way.
- **The same open-source verification tool** referenced on the Web Verify page — signatures and anchors from this platform are verifiable by anyone, without calling TierraTrace at all.

## `/platform/identity` — Web Auth

Source: `web-auth.md`.

This is the front door for the whole platform, and the page should read that way — every other product page assumes a workspace already exists, and this is where one gets created.

Cover:
- **Thirteen industry blueprints** — signing up doesn't hand a customer a blank system; it pre-seeds the right terminology, modules, lifecycle stages and compliance standards for their industry from day one. Full list and detail belongs on Jebaz's Industries page — link to it rather than repeating it here.
- **A six-step provisioning wizard** that takes a new customer from signing up to a fully operational workspace in around eight minutes, self-service, without needing anyone from TierraTrace involved.
- **Enterprise single sign-on done properly** — SAML and OpenID Connect, with a test-before-activate step that shows exactly what the identity provider sent and what role it would assign, without ever creating a real session, so an admin isn't debugging SSO in production.
- **Automated user provisioning** (SCIM) so adding or removing someone in the customer's own identity system automatically reflects in the platform.
- **Modern authentication** including passkeys as the default option, not an afterthought, plus offline-capable one-time codes for shop-floor use where a phone signal isn't reliable.
- **Tenant isolation enforced at the database layer** — not just application logic. A missing permission filter fails safe and returns nothing, rather than accidentally returning another customer's data.
- **Time-boxed guest access for external auditors** — expires automatically, requires strong authentication, read-only, scoped to exactly what they need to see, and revokes itself without anyone having to remember to do it.
