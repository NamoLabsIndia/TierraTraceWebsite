import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import logo from '../../assets/tierratrace-logo.png';
import { PRODUCTS } from '../../data/products';
import { SmartLink } from '../ui';

const LINKS = [
  { label: 'Why TierraTrace', to: 'why' },
  { label: 'Platform', to: 'platform', menu: true },
  { label: 'Industries', to: 'industries' },
  { label: 'Compliance', to: 'compliance' },
  { label: 'Resources', to: 'resources' },
  { label: 'About', to: 'contact', chevron: true },
];

/**
 * Site-wide pill navigation, mirroring tierratrace.in.
 * "Platform" opens the six-product mega menu; each item routes to its own page.
 */
export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const onPlatformPage = location.pathname.startsWith('/platform/');
  const closeTimer = useRef<number | undefined>(undefined);
  const wrapRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close everything on navigation.
  useEffect(() => {
    setMenuOpen(false);
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  // Escape + click outside close the mega menu.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onDown);
    };
  }, [menuOpen]);

  const hoverOpenedAt = useRef(0);
  const openSoon = () => {
    window.clearTimeout(closeTimer.current);
    if (!menuOpen) hoverOpenedAt.current = Date.now();
    setMenuOpen(true);
  };
  // A click right after hover-open shouldn't immediately close the menu again.
  const onPlatformClick = () => {
    if (Date.now() - hoverOpenedAt.current < 500) return setMenuOpen(true);
    setMenuOpen((v) => !v);
  };
  const closeSoon = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMenuOpen(false), 140);
  };

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        aria-label="Main"
        className={`relative mx-auto flex h-[72px] max-w-[1360px] items-center justify-between rounded-full border bg-white/85 pl-5 pr-2.5 backdrop-blur-md transition-shadow duration-300 sm:pl-7 ${
          scrolled || menuOpen ? 'border-tt-border shadow-[0_10px_30px_-12px_rgba(8,12,15,0.18)]' : 'border-transparent'
        }`}
      >
        <Link to="/" className="shrink-0" aria-label="TierraTrace home">
          <img src={logo} alt="TierraTrace" className="h-10 w-auto" />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) =>
            l.menu ? (
              <li key={l.label} ref={wrapRef} onMouseEnter={openSoon} onMouseLeave={closeSoon} className="relative">
                <button
                  type="button"
                  aria-expanded={menuOpen}
                  aria-controls="platform-menu"
                  onClick={onPlatformClick}
                  className={`tt-press inline-flex items-center gap-1 rounded-xl px-4 py-2.5 text-[17px] font-medium text-tt-ink ${
                    menuOpen || onPlatformPage ? 'bg-tt-green-100' : 'hover:bg-black/[0.04]'
                  }`}
                >
                  {l.label}
                  <ChevronDown
                    className={`h-4 w-4 opacity-70 transition-transform duration-200 ease-out ${menuOpen ? 'rotate-180' : ''}`}
                    aria-hidden
                  />
                </button>
                <PlatformMenu open={menuOpen} currentPath={location.pathname} onNavigate={() => setMenuOpen(false)} />
              </li>
            ) : (
              <li key={l.label}>
                <SmartLink
                  target={l.to}
                  className="tt-press inline-flex items-center gap-1 rounded-xl px-4 py-2.5 text-[17px] font-medium text-tt-ink hover:bg-black/[0.04]"
                >
                  {l.label}
                  {l.chevron && <ChevronDown className="h-4 w-4 opacity-70" aria-hidden />}
                </SmartLink>
              </li>
            ),
          )}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <SmartLink target="contact" className="px-3 text-[17px] font-medium text-tt-ink hover:text-tt-green-ink">
            Contact sales
          </SmartLink>
          <SmartLink
            target="pilot"
            className="tt-press inline-flex h-12 items-center gap-2 rounded-full bg-tt-ink px-6 text-[17px] font-semibold text-white hover:bg-black"
          >
            Request pilot <ArrowRight className="h-4 w-4" aria-hidden />
          </SmartLink>
        </div>

        <button
          type="button"
          className="tt-press inline-flex h-12 w-12 items-center justify-center rounded-full hover:bg-black/[0.04] lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileOpen && <MobileMenu currentPath={location.pathname} />}
    </header>
  );
}

/* ---------------- Desktop mega menu (layout copied from tierratrace.in) ---------------- */

function PlatformMenu({ open, currentPath, onNavigate }: { open: boolean; currentPath: string; onNavigate: () => void }) {
  const [featured, ...rest] = PRODUCTS; // Passport is the featured tile
  const right = rest.filter((p) => p.slug !== 'insights');
  const insights = rest.find((p) => p.slug === 'insights')!;
  const F = featured.menuIcon;

  return (
    <div
      id="platform-menu"
      className={`absolute -left-[185px] top-[calc(100%+18px)] w-[750px] origin-top transition-[opacity,transform,visibility] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        open ? 'visible scale-100 opacity-100' : 'invisible pointer-events-none scale-[0.97] opacity-0'
      }`}
    >
      {/* hover bridge so the pointer can travel from the button into the panel */}
      <div aria-hidden className="absolute -top-5 left-0 right-0 h-5" />
      <div className="grid grid-cols-2 gap-x-4 rounded-[22px] border border-tt-border bg-white p-5 shadow-[0_30px_70px_-30px_rgba(8,12,15,0.35)]">
        <div className="flex flex-col gap-2">
          <Link
            to={`/platform/${featured.slug}`}
            onClick={onNavigate}
            aria-current={currentPath === `/platform/${featured.slug}` ? 'page' : undefined}
            className="tt-press group flex min-h-[250px] flex-col justify-end rounded-2xl bg-[linear-gradient(160deg,#eef9f1,#f6fbf7)] p-6 hover:bg-[linear-gradient(160deg,#e3f6e8,#f1faf3)]"
          >
            <F className="h-5 w-5 text-tt-green-ink" aria-hidden />
            <span className="mt-3 text-[22px] font-semibold tracking-tight text-tt-ink">TierraTrace {featured.name}</span>
            <span className="mt-2 text-[16px] leading-snug text-tt-muted">{featured.tagline}</span>
            <span className="mt-4 inline-flex items-center gap-1 text-[14px] font-semibold text-tt-green-ink opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              Explore <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </span>
          </Link>
          <MenuItem p={insights} currentPath={currentPath} onNavigate={onNavigate} />
        </div>
        <div className="flex flex-col gap-1">
          {right.map((p) => (
            <MenuItem key={p.slug} p={p} currentPath={currentPath} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MenuItem({ p, currentPath, onNavigate }: { p: (typeof PRODUCTS)[number]; currentPath: string; onNavigate: () => void }) {
  const Icon = p.menuIcon;
  const active = currentPath === `/platform/${p.slug}`;
  return (
    <Link
      to={`/platform/${p.slug}`}
      onClick={onNavigate}
      aria-current={active ? 'page' : undefined}
      className={`tt-press block rounded-2xl px-4 py-3.5 ${active ? 'bg-tt-green-50' : 'hover:bg-black/[0.03]'}`}
    >
      <span className="flex items-center gap-2.5 text-[17px] font-medium text-tt-ink">
        <Icon className="h-[18px] w-[18px] text-tt-green-ink" aria-hidden />
        TierraTrace {p.name}
      </span>
      <span className="mt-1 block text-[15px] text-tt-muted">{p.tagline}</span>
    </Link>
  );
}

/* ---------------- Mobile menu ---------------- */

function MobileMenu({ currentPath }: { currentPath: string }) {
  const [platformOpen, setPlatformOpen] = useState(currentPath.startsWith('/platform/'));
  return (
    <div
      id="mobile-menu"
      className="tt-swap-enter mx-auto mt-2 max-h-[calc(100dvh-110px)] max-w-[1360px] overflow-y-auto rounded-3xl border border-tt-border bg-white p-3 shadow-xl lg:hidden"
    >
      {LINKS.map((l) =>
        l.menu ? (
          <div key={l.label}>
            <button
              type="button"
              aria-expanded={platformOpen}
              onClick={() => setPlatformOpen((v) => !v)}
              className={`flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-[17px] font-medium ${
                platformOpen ? 'bg-tt-green-100' : 'hover:bg-black/[0.04]'
              }`}
            >
              Platform
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${platformOpen ? 'rotate-180' : ''}`} aria-hidden />
            </button>
            {platformOpen && (
              <ul className="tt-swap-enter my-1 space-y-0.5 pl-2">
                {PRODUCTS.map((p) => {
                  const Icon = p.menuIcon;
                  const active = currentPath === `/platform/${p.slug}`;
                  return (
                    <li key={p.slug}>
                      <Link
                        to={`/platform/${p.slug}`}
                        aria-current={active ? 'page' : undefined}
                        className={`flex items-start gap-3 rounded-2xl px-4 py-3 ${active ? 'bg-tt-green-50' : 'hover:bg-black/[0.03]'}`}
                      >
                        <Icon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-tt-green-ink" aria-hidden />
                        <span>
                          <span className="block text-[16px] font-medium">TierraTrace {p.name}</span>
                          <span className="block text-[14px] text-tt-muted">{p.tagline}</span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ) : (
          <SmartLink key={l.label} target={l.to} className="block rounded-2xl px-4 py-3.5 text-[17px] font-medium hover:bg-black/[0.04]">
            {l.label}
          </SmartLink>
        ),
      )}
      <SmartLink
        target="pilot"
        className="mt-2 flex h-12 items-center justify-center gap-2 rounded-full bg-tt-ink text-[17px] font-semibold text-white"
      >
        Request pilot <ArrowRight className="h-4 w-4" aria-hidden />
      </SmartLink>
    </div>
  );
}
