import { Link } from 'react-router-dom';
import logo from '../../assets/tierratrace-logo.png';
import { PRODUCTS } from '../../data/products';
import { Container, SmartLink } from '../ui';

const COMPANY = [
  { label: 'Why TierraTrace', to: 'why' },
  { label: 'Industries', to: 'industries' },
  { label: 'Compliance', to: 'compliance' },
  { label: 'Pilot program', to: 'pilot' },
  { label: 'Contact', to: 'contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-tt-border bg-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <img src={logo} alt="TierraTrace" className="h-10 w-auto" />
          <p className="mt-4 max-w-[340px] text-[15px] leading-relaxed text-tt-muted">
            Digital Product Passports and end-to-end traceability — from raw material to reuse and recycling.
          </p>
          <p className="mt-4 text-[14px] text-tt-muted">
            info@namolabs.in ·{' '}
            <a href="https://www.namolabs.in/" className="font-medium text-tt-green-ink hover:underline">
              namolabs.in
            </a>
          </p>
        </div>
        <nav aria-label="Platform">
          <p className="text-[13px] font-semibold uppercase tracking-wider text-tt-muted">Platform</p>
          <ul className="mt-4 space-y-2.5">
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                <Link to={`/platform/${p.slug}`} className="text-[15px] text-tt-ink hover:text-tt-green-ink">
                  TierraTrace {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Company">
          <p className="text-[13px] font-semibold uppercase tracking-wider text-tt-muted">Company</p>
          <ul className="mt-4 space-y-2.5">
            {COMPANY.map((c) => (
              <li key={c.label}>
                <SmartLink target={c.to} className="text-[15px] text-tt-ink hover:text-tt-green-ink">
                  {c.label}
                </SmartLink>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <div className="border-t border-tt-border">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-[13px] text-tt-muted sm:flex-row">
          <span>© {new Date().getFullYear()} Namo Labs India. All rights reserved.</span>
          <span>SOC 2 Type II · ISO 27001 · GDPR</span>
        </Container>
      </div>
    </footer>
  );
}
