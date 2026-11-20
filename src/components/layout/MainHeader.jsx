import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PRIMARY_NAV_ITEMS } from '../../data/ecosystemData.js';

export default function MainHeader({ onOpenMenu }) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentPath = location.pathname;

  const handleNavClick = (e, item) => {
    if (item.path === '/overview' && (currentPath === '/overview' || currentPath === '/')) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // For all other numbered items (02 Mission, 03 Panacea, 04 Architecture, etc.),
    // standard Link navigation triggers, opening the dedicated page directly as requested.
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-12 lg:px-16 py-4 sm:py-5 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#05020c]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3.5 sm:py-4 header-scrolled'
          : 'bg-transparent'
      }`}
    >
      {/* Left: 4K Monogram + CUREXIA Brand Typography */}
      <Link to="/overview" className="flex items-center gap-2.5 group">
        <img
          src="/assets/rbcurexia-monogram-4k.webp"
          alt="RB"
          className="h-8 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
        />
        <span className="font-display text-xs font-semibold tracking-[0.34em] text-champagne uppercase">
          CUREXIA
        </span>
      </Link>

      {/* Center: 6 Primary Numbered Navigation Links */}
      <nav
        aria-label="Primary Navigation"
        className="hidden xl:flex items-center gap-7 text-[11px] font-medium tracking-[0.14em] uppercase text-stonewarm"
      >
        {PRIMARY_NAV_ITEMS.map((item) => {
          const isActive =
            currentPath === item.path ||
            (item.path === '/overview' && currentPath === '/');

          return (
            <Link
              key={item.num}
              to={item.path}
              onClick={(e) => handleNavClick(e, item)}
              className={`header-nav-link hover:text-bone transition-colors relative py-1 ${
                isActive ? 'active-sec text-bone font-semibold' : ''
              }`}
            >
              {item.display}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-champagne to-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Right: Book a Demo + Full-Screen Menu Trigger */}
      <div className="flex items-center gap-4 sm:gap-5">
        <Link
          to="/concierge"
          className="hidden sm:inline-flex items-center px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/15 hover:border-champagne/60 text-[10px] font-medium tracking-[0.16em] uppercase text-champagne transition-all hover:scale-105"
        >
          Book a Demo
        </Link>
        <button
          id="btn-menu-trigger"
          type="button"
          onClick={onOpenMenu}
          aria-label="Open Navigation Overlay"
          aria-expanded="false"
          className="menu-btn flex items-center gap-3 pl-2 py-1.5 cursor-pointer"
        >
          <span className="text-[10px] font-medium tracking-[0.24em] uppercase text-champagne/85 hidden sm:inline">
            Index
          </span>
          <div className="flex flex-col gap-[5px]">
            <span className="menu-bar menu-bar-top" />
            <span className="menu-bar menu-bar-bot" />
          </div>
        </button>
      </div>
    </header>
  );
}
