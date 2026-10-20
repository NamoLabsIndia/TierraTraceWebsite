import { useEffect, useId, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import logo from '../../assets/tierratrace-logo.png';
import logoLight from '../../assets/tierratrace-logo-light.png';
import { SmartLink } from '../ui';
import './site-header.css';

/** The one site header: logo · section links · sales actions. Targets follow SmartLink. */
const LINKS = [
  { label: 'Mission', to: 'mission' },
  { label: 'Solutions', to: 'solutions' },
  { label: 'Industries', to: 'industries' },
  { label: 'Compliance', to: 'compliance' },
  { label: 'Insights', to: 'insights' },
];
/** The three solutions behind "Solutions"; each routes to its existing product page. */
const SOLUTIONS = [
  { label: 'Digital Product Passports', to: '/platform/passport' },
  { label: 'End-to-End Traceability', to: '/platform/trace' },
  { label: 'TierraTrace Studio', to: '/platform/studio' },
];
const SALES = { label: 'Contact sales', to: '/contact' };
const PILOT = { label: 'Request pilot', to: '/contact?s=pilot' };
/** Pages that open with a full-bleed hero ([data-hero]); the header floats over them. */
const OVERLAY_ROUTES = new Set(['/', '/platform/studio']);

/**
 * Translucent pill header, shared by every page. On the homepage it floats over the full-bleed hero
 * (the hero reserves its height); elsewhere it is sticky. Highlights the section currently in view.
 */
export function Nav() {
  const location = useLocation();
  const onHome = location.pathname === '/';
  const overlay = OVERLAY_ROUTES.has(location.pathname);
  const [open, setOpen] = useState(false);
  // Glass while floating over a full-bleed hero; firmer pill once light content is underneath.
  const [overHero, setOverHero] = useState(overlay);
  // Hero marked data-hero-tone="dark" (e.g. Studio): light text and logo on the glass.
  const [darkHero, setDarkHero] = useState(false);
  // Deeper into the hero the photo behind the bar is darker (forest, towers): frost the glass more.
  const [deep, setDeep] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector('[data-hero]');
      setOverHero(!!hero && hero.getBoundingClientRect().bottom > 90);
      setDarkHero(hero?.getAttribute('data-hero-tone') === 'dark');
      setDeep(window.scrollY > 160);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [location.pathname]);

  useEffect(() => setOpen(false), [location.pathname, location.search]);
  const [mobileSolutions, setMobileSolutions] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  // Which homepage section is under the header.
  useEffect(() => {
    setActive(null);
    if (!onHome || !('IntersectionObserver' in window)) return;
    const els = LINKS.map((l) => document.getElementById(l.to)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [onHome]);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);
    if (onHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (location.search || location.hash) {
        window.history.pushState(null, '', '/');
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`hd ${overlay ? 'hd--overlay' : ''} ${overHero ? `is-glass${deep ? ' is-deep' : ''}${darkHero ? ' is-on-dark' : ''}` : 'is-solid'}`}
    >
      <nav aria-label="Main" className="hd-nav">
        <Link to="/" className="hd-logo" aria-label="TierraTrace home" onClick={handleLogoClick}>
          <img className="hd-logo-default" src={logo} alt="TierraTrace" width={360} height={163} />
          <img className="hd-logo-light" src={logoLight} alt="" aria-hidden width={360} height={163} />
        </Link>

        <ul className="hd-links">
          {LINKS.map((l) =>
            l.to === 'solutions' ? (
              <SolutionsMenu key={l.to} label={l.label} active={active === l.to} />
            ) : (
              <li key={l.to}>
                <SmartLink target={l.to} className={`hd-link ${active === l.to ? 'is-active' : ''}`}>
                  {l.label}
                </SmartLink>
              </li>
            ),
          )}
        </ul>

        <div className="hd-actions">
          <SmartLink target={SALES.to} className="hd-link hd-sales">
            {SALES.label}
          </SmartLink>
          <SmartLink target={PILOT.to} className="hd-cta">
            {PILOT.label} <ArrowRight className="h-4 w-4" aria-hidden />
          </SmartLink>
        </div>

        <button
          type="button"
          className="hd-menubtn"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </nav>

      {open && (
        <div
          id="site-menu"
          className="hd-panel tt-swap-enter"
          onClick={(e) => (e.target as HTMLElement).closest('a') && setOpen(false)}
        >
          <ul>
            {LINKS.map((l) =>
              l.to === 'solutions' ? (
                <li key={l.to}>
                  <button
                    type="button"
                    className="hd-link hd-disclose"
                    aria-expanded={mobileSolutions}
                    aria-controls="site-menu-solutions"
                    onClick={() => setMobileSolutions((v) => !v)}
                  >
                    {l.label}
                    <ChevronDown className="hd-chev h-4 w-4" aria-hidden />
                  </button>
                  {mobileSolutions && (
                    <ul id="site-menu-solutions" className="hd-subs">
                      {SOLUTIONS.map((sol) => (
                        <li key={sol.to}>
                          <SmartLink target={sol.to} className="hd-sub">
                            {sol.label}
                          </SmartLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={l.to}>
                  <SmartLink target={l.to} className="hd-link">
                    {l.label}
                  </SmartLink>
                </li>
              ),
            )}
            <li>
              <SmartLink target={SALES.to} className="hd-link">
                {SALES.label}
              </SmartLink>
            </li>
          </ul>
          <SmartLink target={PILOT.to} className="hd-cta">
            {PILOT.label} <ArrowRight className="h-4 w-4" aria-hidden />
          </SmartLink>
        </div>
      )}
    </header>
  );
}

/** "Solutions" disclosure with the three product pages. Click / Enter / Space toggles; Escape and outside clicks close. */
function SolutionsMenu({ label, active }: { label: string; active: boolean }) {
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLLIElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const panelId = useId();
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname, location.search]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (wrap.current && !wrap.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setOpen(false);
      button.current?.focus();
    };
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const items = () => Array.from(wrap.current?.querySelectorAll<HTMLAnchorElement>('.hd-sol') ?? []);
  const focusItem = (i: number) => {
    const list = items();
    list[(i + list.length) % list.length]?.focus();
  };

  const onButtonKey = (e: ReactKeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setOpen(true);
      requestAnimationFrame(() => focusItem(0));
    }
  };
  const onPanelKey = (e: ReactKeyboardEvent) => {
    const i = items().indexOf(document.activeElement as HTMLAnchorElement);
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusItem(i + 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (i <= 0) button.current?.focus();
      else focusItem(i - 1);
    }
  };

  // closing when focus leaves the menu keeps Tab order natural
  const onBlur = (e: React.FocusEvent) => {
    if (!wrap.current?.contains(e.relatedTarget as Node)) setOpen(false);
  };

  return (
    <li ref={wrap} className="hd-menu" onBlur={onBlur}>
      <button
        ref={button}
        type="button"
        className={`hd-link hd-trigger ${active || open ? 'is-active' : ''}`}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onButtonKey}
      >
        {label}
        <ChevronDown className="hd-chev h-4 w-4" aria-hidden />
      </button>
      <div id={panelId} className="hd-drop" data-open={open} inert={!open} onKeyDown={onPanelKey}>
        <ul>
          {SOLUTIONS.map((sol) => (
            <li key={sol.to}>
              <SmartLink target={sol.to} className="hd-sol">
                {sol.label}
              </SmartLink>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
