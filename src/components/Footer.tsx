import logoUrl from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-br from-[#06331A] via-[#052614] to-[#02140A] text-white py-20 overflow-hidden">
      {/* Sleek subtle background glow */}
      <div className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] opacity-[0.15]" style={{ background: "radial-gradient(circle at top left, #16C15F 0%, transparent 60%)" }} />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[600px] w-[600px] opacity-[0.1]" style={{ background: "radial-gradient(circle at bottom right, #16C15F 0%, transparent 60%)" }} />

      <div className="relative z-10 mx-auto max-w-[1240px] px-6">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <img src={logoUrl} alt="TierraTrace" className="h-16 w-auto brightness-0 invert drop-shadow-sm" />
            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-white/70">
              The global Digital Product Passport &amp; end-to-end traceability platform. A Namo Labs product.
            </p>
          </div>
          {[
            {
              t: "Platform",
              l: [
                { label: "Product Passport", href: "/platform/passport" },
                { label: "Traceability", href: "/platform/traceability" },
                { label: "Web Verify", href: "/platform/verify" },
                { label: "Compliance", href: "/#compliance" },
              ],
            },
            {
              t: "Company",
              l: [
                { label: "About Namo Labs", href: "https://www.namolabs.in/about" },
                { label: "Careers", href: "https://www.namolabs.in/careers" },
                { label: "Contact", href: "https://www.namolabs.in/contact" },
              ],
            },
            {
              t: "Resources",
              l: [
                { label: "EU DPP guide", href: "#" },
                { label: "CBAM playbook", href: "#" },
                { label: "Trust center", href: "#" },
                { label: "Security", href: "#" },
              ],
            },
          ].map((c) => (
            <div key={c.t}>
              <div className="text-[12px] font-bold uppercase tracking-widest text-white/90">{c.t}</div>
              <ul className="mt-5 space-y-3 text-[14.5px] text-white/60">
                {c.l.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="transition-colors duration-300 hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 text-[13px] text-white/50 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Namo Labs. All rights reserved. TierraTrace™</div>
          <div className="flex gap-8">
            <a href="https://www.namolabs.in/privacy" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">Privacy</a>
            <a href="https://www.namolabs.in/terms" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">Terms</a>
            <a href="#" className="transition-colors hover:text-white">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
