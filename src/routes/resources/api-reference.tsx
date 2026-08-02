import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ChevronRight, Code2, Key, Zap, Bell, Shield, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/resources/api-reference")({
  head: () => ({
    meta: [
      { title: "API Reference — TierraTrace" },
      {
        name: "description",
        content:
          "Authentication, rate limits, webhook signing, and conceptual overview of the TierraTrace API Gateway. Full OpenAPI spec coming once the published spec is available.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.tierratrace.in/resources/api-reference" }],
  }),
  component: ApiReferencePage,
});

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const API_CONCEPTS = [
  {
    icon: Key,
    title: "Authentication",
    desc: "All API calls require a Bearer token issued via the workspace API key. Tokens are scoped to a workspace and carry the organisation's permission set. Short-lived access tokens (1 hour TTL) are issued by exchanging the API key; refresh is handled automatically by the client SDK.",
  },
  {
    icon: Zap,
    title: "Rate limits",
    desc: "The API Gateway enforces per-workspace rate limits. Standard tier: 1,000 requests/minute. Enterprise tier: configurable, negotiated at onboarding. Rate limit headers (X-RateLimit-Remaining, X-RateLimit-Reset) are returned on every response.",
  },
  {
    icon: Bell,
    title: "Webhooks",
    desc: "Subscribe to platform events (passport.issued, event.recorded, verification.completed) via the webhook registry in your workspace settings. Every delivery is signed with HMAC-SHA256 using your webhook secret — validate the X-TierraTrace-Signature header before processing.",
  },
  {
    icon: Shield,
    title: "Webhook signing",
    desc: "The signature is computed over the raw request body. Compute HMAC-SHA256(secret, body) and compare it to the signature value (after stripping the 'sha256=' prefix). Use a constant-time comparison to prevent timing attacks. Reject any delivery where the signature doesn't match.",
  },
  {
    icon: ArrowRight,
    title: "Event streaming",
    desc: "High-throughput integrations can use the streaming endpoint instead of webhooks. The stream uses Server-Sent Events (SSE) and delivers a chronologically ordered sequence of supply chain events for a given product, workspace, or filter set.",
  },
  {
    icon: Code2,
    title: "SDK support",
    desc: "Official SDKs are available for Node.js and Python, covering authentication, event recording, passport issuance, and webhook validation. Community SDKs for Go and Java are in progress. All SDKs are built against the OpenAPI 3.1 spec.",
  },
];

function CodeBlock({ children }: { children: string }) {
  return (
    <div className="rounded-xl bg-ink text-[13px] font-mono text-white/85 overflow-x-auto">
      <div className="flex items-center gap-2 border-b border-white/8 px-4 py-2.5">
        <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
      </div>
      <pre className="px-5 py-4 leading-[1.75] whitespace-pre-wrap">{children}</pre>
    </div>
  );
}

function ApiReferencePage() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16">
        <div
          aria-hidden
          className="absolute -top-24 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-40"
          style={{ background: "radial-gradient(circle, rgba(16,195,90,0.10) 0%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-[1240px] px-6">
          <nav className="mb-8 flex items-center gap-2 text-[13px] text-ink-muted">
            <Link to="/resources" className="hover:text-primary transition-colors">Resources</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-ink">API Reference</span>
          </nav>

          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-primary">
              <Code2 className="h-3 w-3" />
              API Reference
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-3xl text-[42px] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-[54px]">
              TierraTrace{" "}
              <span className="text-primary">API Gateway.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 max-w-xl text-[17px] leading-[1.65] text-ink-muted">
              The Gateway is spec-first — built around OpenAPI 3.1. A full
              publishable spec will be linked here once it's available. Until
              then, this page covers the authentication model, rate limits, and
              webhook integration — the things you need before touching an
              endpoint.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-6 inline-flex items-center gap-2.5 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-[13px] text-amber-700">
              <span className="font-semibold">Note:</span> Full endpoint
              reference is pending publication of the OpenAPI spec. Check back
              or{" "}
              <a
                href="mailto:info@namolabs.in"
                className="font-semibold underline-offset-2 hover:underline"
              >
                contact us
              </a>{" "}
              for early API access.
            </div>
          </Reveal>
        </div>
      </section>

      {/* Concepts */}
      <section className="border-t border-black/5 py-16">
        <div className="mx-auto max-w-[1240px] px-6">
          <Reveal>
            <h2 className="text-[28px] font-semibold tracking-tight text-ink">
              How the API works
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {API_CONCEPTS.map((concept, i) => {
              const Icon = concept.icon;
              return (
                <Reveal key={concept.title} delay={i * 0.05}>
                  <div className="flex h-full flex-col rounded-2xl border border-black/6 bg-white p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.07)]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/8 text-primary mb-4">
                      <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                    </div>
                    <h3 className="text-[16px] font-semibold tracking-tight text-ink">
                      {concept.title}
                    </h3>
                    <p className="mt-2 flex-1 text-[13px] leading-[1.7] text-ink-muted">
                      {concept.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Code samples */}
      <section className="border-t border-black/5 bg-surface/40 py-16 pb-32">
        <div className="mx-auto max-w-[1240px] px-6">
          <Reveal>
            <h2 className="text-[28px] font-semibold tracking-tight text-ink">
              Quick start
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-[1.65] text-ink-muted">
              Exchange your API key for an access token, then authenticate
              requests.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal delay={0.06}>
              <div>
                <p className="mb-3 text-[13px] font-semibold uppercase tracking-widest text-primary">
                  1. Get an access token
                </p>
                <CodeBlock>{`curl -X POST https://api.tierratrace.in/v1/auth/token \\
  -H "Content-Type: application/json" \\
  -d '{
    "api_key": "tt_live_••••••••••••"
  }'

# Response
{
  "access_token": "eyJ...",
  "expires_in": 3600,
  "token_type": "Bearer"
}`}</CodeBlock>
              </div>
            </Reveal>

            <Reveal delay={0.10}>
              <div>
                <p className="mb-3 text-[13px] font-semibold uppercase tracking-widest text-primary">
                  2. Record a supply chain event
                </p>
                <CodeBlock>{`curl -X POST https://api.tierratrace.in/v1/events \\
  -H "Authorization: Bearer eyJ..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "product_id": "tt-prod-abc123",
    "type": "manufacture.complete",
    "location": "Tiruppur, Tamil Nadu",
    "metadata": {
      "batch": "#KNT-8812",
      "co2e_kg": 20.1
    }
  }'`}</CodeBlock>
              </div>
            </Reveal>

            <Reveal delay={0.14} className="lg:col-span-2">
              <div>
                <p className="mb-3 text-[13px] font-semibold uppercase tracking-widest text-primary">
                  3. Validate a webhook signature
                </p>
                <CodeBlock>{`import hmac, hashlib

def is_valid_signature(payload_body: bytes, secret: str, header: str) -> bool:
    expected = hmac.new(
        secret.encode(), payload_body, hashlib.sha256
    ).hexdigest()
    received = header.removeprefix("sha256=")
    return hmac.compare_digest(expected, received)`}</CodeBlock>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} className="mt-10">
            <div className="rounded-2xl border border-primary/15 bg-primary/5 p-6">
              <p className="text-[14px] font-medium text-ink/80 leading-[1.7]">
                <span className="text-primary font-semibold">Building an integration?</span>{" "}
                For enterprise integration details including ERP connectors, see{" "}
                <Link
                  to="/platform/connect"
                  className="text-primary underline-offset-2 hover:underline font-semibold"
                >
                  TierraTrace Connect
                </Link>
                . For early API access or a private spec preview, email{" "}
                <a
                  href="mailto:info@namolabs.in"
                  className="text-primary underline-offset-2 hover:underline font-semibold"
                >
                  info@namolabs.in
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
