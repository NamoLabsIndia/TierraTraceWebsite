import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import logo from '../../assets/tierratrace-logo.png';
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
const SALES = { label: 'Contact sales', to: '/contact' };
const PILOT = { label: 'Request pilot', to: '/contact?s=pilot' };

/**
 * Translucent pill header, shared by every page. On the homepage it floats over the full-bleed hero
 * (the hero reserves its height); elsewhere it is sticky. Highlights the section currently in view.
 */
export function Nav() {
  const location = useLocation();
  const onHome = location.pathname === '/';
  const [open, setOpen] = useState(false);
  // Glass while floating over the homepage hero; firmer pill once light content is underneath.
  const [overHero, setOverHero] = useState(onHome);
  // Deeper into the hero the photo behind the bar is darker (forest, towers): frost the glass more.
  const [deep, setDeep] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector('[data-hero]');
      setOverHero(!!hero && hero.getBoundingClientRect().bottom > 90);
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

  return (
    <header className={`hd ${onHome ? 'hd--overlay' : ''} ${overHero ? `is-glass${deep ? ' is-deep' : ''}` : 'is-solid'}`}>
      <nav aria-label="Main" className="hd-nav">
        <Link to="/" className="hd-logo" aria-label="TierraTrace home">
          <img src={logo} alt="TierraTrace" width={360} height={163} />
        </Link>

        <ul className="hd-links">
          {LINKS.map((l) => (
            <li key={l.to}>
              <SmartLink target={l.to} className={`hd-link ${active === l.to ? 'is-active' : ''}`}>
                {l.label}
              </SmartLink>
            </li>
          ))}
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
        <div id="site-menu" className="hd-panel tt-swap-enter" onClick={() => setOpen(false)}>
          <ul>
            {LINKS.map((l) => (
              <li key={l.to}>
                <SmartLink target={l.to} className="hd-link">
                  {l.label}
                </SmartLink>
              </li>
            ))}
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
