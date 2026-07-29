# TASK-1 — Web Auth (Identity & Workspaces)

**Owner:** Ayush · part of [TASK-1 — Platform Section](./TASK-1-platform-section.md)
**Route:** `/platform/identity`
**Source:** `TierraTrace/docs/prd/web-auth.md`

No visual design direction here — this is the content the page needs to represent, not how it should look.

---

## Framing

This is the front door for the whole platform, and the page should read that way — every other product page in this task assumes a workspace already exists, and this is where one gets created. If you're building pages in order, this one (along with the Overview) makes sense to do first.

## Cover

- **Thirteen industry blueprints** — signing up doesn't hand a customer a blank system; it pre-seeds the right terminology, modules, lifecycle stages and compliance standards for their specific industry from day one. The full list and detail belongs on Jebaz's Industries page (`/industries`) — link to it rather than repeating the list here.
- **A six-step provisioning wizard** that takes a new customer from signing up to a fully operational workspace in around eight minutes, self-service, without needing anyone from TierraTrace involved.
- **Enterprise single sign-on done properly** — SAML and OpenID Connect, with a test-before-activate step that shows exactly what the identity provider sent and what role it would assign, without ever creating a real session, so an admin isn't left debugging SSO in production.
- **Automated user provisioning** (SCIM) so adding or removing someone in the customer's own identity system automatically reflects in the platform.
- **Modern authentication** including passkeys as the default option, not an afterthought, plus offline-capable one-time codes for shop-floor use where a phone signal isn't reliable.
- **Tenant isolation enforced at the database layer** — not just application logic. A missing permission filter fails safe and returns nothing, rather than accidentally returning another customer's data.
- **Time-boxed guest access for external auditors** — expires automatically, requires strong authentication, read-only, scoped to exactly what they need to see, and revokes itself without anyone having to remember to do it.
