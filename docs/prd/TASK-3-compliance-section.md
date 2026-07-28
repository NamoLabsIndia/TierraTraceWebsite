# TASK-3 — Compliance Section

**Owner:** Rishabh
**Tracker description:** Build Compliance pages including DPP, ESPR, CBAM, CSRD, GHG Protocol, ISO 14067, GS1 Digital Link and Glossary.

Eight pages: seven regulation/standard explainers plus a glossary. You'll also need a minimal `/compliance` index page linking to all eight — that's a structural necessity for navigation, not extra scope, keep it to a simple list.

No visual design direction here — these are reference pages, the content below is what each one needs to explain accurately. Layout is your call.

---

## Read this before you write anything

These pages state what regulations actually require. The people reading them — compliance officers, sustainability leads — treat that as fact and act on it. A wrong deadline or a misstated obligation isn't a typo, it's the kind of mistake that costs credibility for years and could expose the company to a real claim if someone relied on it.

**Every page in this section needs a subject-matter review before it ships** — not just a code review. Cite primary sources where you can (the actual EU regulation text, the ISO standard, the GHG Protocol itself) rather than paraphrasing secondhand explainers. Flag with the PM who's doing that review before you start writing the regulatory content — worth confirming that person's identified before, not after, a page is written.

---

## Pages to build

| Route | Topic |
|---|---|
| `/compliance` | Index — links to the seven pages below |
| `/compliance/digital-product-passport` | What a DPP is |
| `/compliance/espr` | ESPR |
| `/compliance/cbam` | CBAM |
| `/compliance/csrd` | CSRD |
| `/compliance/ghg-protocol` | GHG Protocol |
| `/compliance/iso-14067` | ISO 14067 |
| `/compliance/gs1-digital-link` | GS1 Digital Link |
| `/glossary` | Term definitions |

---

## `/compliance/digital-product-passport`

Explain, in plain language: what a Digital Product Passport actually is (a structured, verifiable record of a product's material origin, manufacturing history, certifications, and lifecycle events, attached to the physical product via a QR code or similar data carrier), which products will need one and roughly when, and — a specific, concrete detail worth including — that the underlying EU rule requires this data to be accessible **for free, without needing to log in or create an account.** That's a real requirement, not a platform design choice, and it's a detail most explanations of DPPs skip.

Link out to the platform's own passport page (`/platform/passport`, Ayush's section) for how the platform implements this, but keep this page itself about the regulation and concept, not the product.

## `/compliance/espr`

The Ecodesign for Sustainable Products Regulation — explain its scope (it's the EU framework that will require Digital Product Passports for consumer goods, aimed at pushing the market toward a circular economy), how it works mechanically (the regulation sets a framework; specific product categories get their detailed rules through separate delegated acts, so requirements roll out category by category rather than all at once), and what it means for different roles reading this page (a compliance officer needs different information than a sustainability lead).

## `/compliance/cbam`

The Carbon Border Adjustment Mechanism — explain what it does (a carbon price applied at the EU border to imported goods in carbon-intensive sectors, so imports face a comparable carbon cost to EU-produced goods) and the quarterly declaration mechanic (importers report embedded emissions in covered goods each quarter). Worth naming which sectors are actually covered rather than implying it's universal — steel, aluminium, and a defined set of others are the real scope; don't state or imply broader coverage than that.

## `/compliance/csrd`

The Corporate Sustainability Reporting Directive — explain the ESRS E1 datapoint set specifically (that's the climate-change disclosure standard within CSRD's broader reporting framework), the double materiality concept (a company reports both how climate affects its business *and* how its business affects the climate — it's two-directional, which is the detail people usually get wrong), and that disclosures generally require external assurance, not just self-reporting.

## `/compliance/ghg-protocol`

The GHG Protocol — explain the three-scope framework (Scope 1 is direct emissions a company controls, Scope 2 is purchased energy, Scope 3 is everything else in the value chain) and one detail worth making concrete: Scope 2 is properly reported **two ways at once** — once based on the physical grid mix (location-based) and once based on the specific energy contracts a company has purchased (market-based) — not just one number. Scope 3 breaks into 15 defined categories; you don't need to enumerate all 15 on this page, but naming that structure (rather than treating Scope 3 as one vague bucket) is the accurate version.

## `/compliance/iso-14067`

ISO 14067 — explain that this is the international standard specifically for calculating a **product's** carbon footprint (as opposed to a whole company's, which is what the GHG Protocol above covers), and that it builds on the broader life-cycle-assessment standards ISO 14040 and 14044. Worth a line connecting this to PACT (the Partnership for Carbon Transparency) as the industry initiative for actually exchanging these product-level figures between companies in a supply chain.

## `/compliance/gs1-digital-link`

GS1 Digital Link — explain what makes it different from a plain QR code: it's a *standardized URL structure* (GTIN, batch/lot, serial number all encoded in a defined format within the URL itself) rather than an arbitrary link, which means any GS1-compliant scanner or system can parse it consistently, and the same code can resolve to different destinations depending on who's asking (a consumer scanning it sees one thing, a customs system querying it sees another) — that's the "link type negotiation" concept, worth explaining in plain terms rather than by that name alone.

## `/glossary`

A reference list of terms used across the site. At minimum, define:

- **Digital Product Passport**
- **ESPR, CBAM, CSRD** (short definitions, linking to their full pages above)
- **GHG Protocol, Scope 1/2/3**
- **GS1 Digital Link**
- **Batch genealogy / traceability**
- **Workspace blueprint** — an industry preset (terminology, modules, lifecycle stages, compliance standards) applied when a new workspace is created.
- **Connector blueprint** — a completely different thing that happens to share the word "blueprint": a signed, versioned integration package for connecting a specific system (like SAP) to the platform.

**That last pair matters — don't skip it.** The word "blueprint" means two unrelated things on this site depending on context, and the platform's own documentation is strict about never using the bare word "blueprint" without saying which one. This glossary entry is where that gets explained once, clearly, so the rest of the site can link back to it instead of re-explaining it every time.

Add other terms as you write the other seven pages and notice something that needs defining — this list is a floor, not a ceiling.
