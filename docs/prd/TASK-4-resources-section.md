# TASK-4 — Resources Section

**Owner:** Sansitha
**Tracker description:** Build Resources pages including Documentation, Blog, Whitepapers, Case Studies, Downloads, API Reference, Release Notes and Changelog.

Eight content types, plus a `/resources` index tying them together. This section has more real open questions than the other three — flagged inline below — because some of it depends on things that live outside the website (whether an API spec exists to reference, whether any real customer stories exist to publish). Read the flags before you build against assumptions.

No visual design direction here — this is what each area needs to contain, not how it should look.

---

## Pages to build

| Route | Content type |
|---|---|
| `/resources` | Index across all of the below |
| `/resources/documentation` | Documentation |
| `/resources/blog` + `/resources/blog/$slug` | Blog |
| `/resources/whitepapers` | Whitepapers |
| `/resources/case-studies` | Case Studies |
| `/resources/downloads` | Downloads |
| `/resources/api-reference` | API Reference |
| `/resources/release-notes` | Release Notes |
| `/resources/changelog` | Changelog |

---

## Read this one first — Case Studies is a real risk, not just a content gap

A case study is a claim that a specific, named company is a customer. The site already has one live problem exactly like this — a "trusted by" strip naming large companies with nothing to show a real relationship exists — and it's an open item precisely because it's a trademark and false-endorsement risk, not just an SEO issue.

**Do not write placeholder or illustrative case studies with invented or real company names attached.** If there are zero real, permissioned customer stories available right now, the honest options are: ship the page with an empty state ("case studies coming soon" or similar, your call on wording), or don't ship the route yet and note it as blocked. Check with the PM whether any real pilot customer has actually agreed to be named publicly before writing anything here. This is the one part of this task that needs an answer from outside engineering before it can be built for real.

---

## `/resources/documentation`

This is public-facing, conceptual documentation — how the platform works, how a workspace gets set up, what the major modules do — not a full technical reference (that's the separate API Reference page below). Think of it as the on-ramp for someone evaluating the platform who wants more depth than the product pages but isn't a developer yet.

Reasonable sections: getting started / how provisioning works (links to Ayush's `/platform/identity` page for the real detail), an overview of the core modules, and how the pieces connect (traceability → passport → verification → carbon, as a single flow rather than four separate stories). Source the substance from the same platform PRDs Ayush is working from (`TierraTrace/docs/prd/`) rather than writing new claims — this page should agree with the platform pages, not describe things slightly differently.

## `/resources/blog`

Standard article index plus a post template: title, date, author, body content, related-posts. No specific launch content is scoped here — that's an ongoing content need, not a one-time build. Build the infrastructure (index, individual post route, template) so posts can be added going forward without a developer needed each time.

## `/resources/whitepapers`

Long-form guides, more substantial than a blog post. Two are already promised — the site's footer has linked to an "EU DPP guide" and a "CBAM playbook" since before this build started, and neither exists yet. Those are the two to prioritize first; whatever structure you build for whitepapers should make good on those two specifically, not just create the category and leave it empty.

## `/resources/case-studies`

See the flag at the top of this document before building this one. Structurally: company name, industry, a short narrative of the problem and outcome, ideally a named contact or role who can be attributed. Don't build the route with sample/placeholder entries left in — an empty, honest "coming soon" state is better than a fake-looking one.

## `/resources/downloads`

A library of downloadable assets — most naturally, PDF versions of the whitepapers above, plus anything else worth packaging as a download (a one-page platform overview, a spec sheet). Doesn't need much unique content of its own beyond what whitepapers already produce; treat it as a distribution layer over that content rather than a separate writing task.

## `/resources/api-reference`

**Flag: confirm with engineering before building this one.** The platform does have a real API Gateway (Web Connect, on Ayush's pages) that's spec-first — built around OpenAPI 3.1 — but whether an actual publishable OpenAPI spec exists yet, and where it would come from, is outside this website's repo. Before writing endpoint-level content here, check whether there's a real spec to reference or link to. If there isn't yet, this page might need to be scoped down to "how API access works conceptually" (authentication model, rate limits, webhook signing — all described in the Web Connect platform PRD) rather than a full endpoint reference, until a real spec exists to point at.

## `/resources/release-notes` and `/resources/changelog`

These two are closely related — a dated log of what changed. If it's simpler to build one page with both (or one page that is both, under whichever name you prefer), that's a reasonable call; the tracker lists them separately but nothing about the platform requires two distinct systems here. Whichever you choose, it needs to be something that can be updated with a new entry easily going forward, not a one-time static page.
