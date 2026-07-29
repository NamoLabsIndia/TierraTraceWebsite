# TASK-1 — Web Connect

**Owner:** Ayush · part of [TASK-1 — Platform Section](./TASK-1-platform-section.md)
**Route:** `/platform/connect`
**Source:** `TierraTrace/docs/prd/web-connect.md`

No visual design direction here — this is the content the page needs to represent, not how it should look.

---

## Framing

The pitch: *every integration is pluggable configuration, never code.* This is the product that makes SAP, MES lines, PLCs, barcode scanners, and partner systems speak to the platform.

## Cover

- **19 certified connectors** at general availability, spanning ERP (SAP S/4HANA, Oracle Fusion Cloud, Microsoft Dynamics 365), industrial protocols (OPC UA, MQTT, barcode, RFID via LLRP), messaging (Kafka, RabbitMQ), cloud events (AWS EventBridge, Azure Event Hubs), and files/APIs (SFTP, CSV, REST, GraphQL, SOAP, webhooks).
- **Transformation Studio** — a visual, three-pane mapper (source schema, canvas, target schema) with a safe expression language that can't touch the network or the filesystem, a test console with a regression suite that has to pass before deploying a mapping, and one-action rollback.
- **Edge Fleet** — agents installed inside a customer's own plant, outbound-only by design (no inbound ports, ever), buffering data securely if the connection drops and flushing it once it's back.
- **API Gateway** — this is the capability that turns the platform's own data into a managed API product: a catalog, API keys and consumers, OAuth clients, rate limiting, traffic analytics, and a branded developer portal with a try-it sandbox. Not a separate page — it lives on this one.
- **Secrets Vault** — write-only. Once a credential is stored, it can never be read back out again through any interface, by any role — including platform staff.
