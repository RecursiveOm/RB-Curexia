import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PRIMARY_NAV_ITEMS, SPECIALIZED_PRODUCTS, MUMBAI_HQ_INFO } from '../../data/ecosystemData.js';

export default function NavigationOverlay({ isOpen, onClose }) {
  const location = useLocation();

  // Close overlay on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const currentPath = location.pathname;

  return (
    <div
      id="editorial-menu-overlay"
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-[70] bg-[#040208]/95 backdrop-blur-2xl flex flex-col justify-between px-6 sm:px-16 lg:px-24 py-6 sm:py-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen
          ? 'opacity-100 pointer-events-auto translate-y-0'
          : 'opacity-0 pointer-events-none -translate-y-4'
      }`}
    >
      {/* Top Bar: Brand & Close Button */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
        <div className="flex items-center gap-2.5">
          <img
            src="/assets/rbcurexia-monogram-4k.webp"
            alt="RB"
            className="h-7 w-auto object-contain"
          />
          <span className="font-display text-[11px] tracking-[0.32em] text-champagne/75 uppercase">
            CUREXIA · NAVIGATION DIRECTORY
          </span>
        </div>
        <button
          id="btn-close-menu"
          type="button"
          onClick={onClose}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 text-[10px] font-medium tracking-[0.24em] uppercase text-champagne hover:border-champagne transition-colors cursor-pointer"
        >
          <span>Close</span>
          <span className="text-sm leading-none">✕</span>
        </button>
      </div>

      {/* Main Grid: Primary Pages Left, Specialized Products & HQ Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-auto py-8 items-start overflow-y-auto max-h-[75vh]">
        {/* Left Column: 6 Primary Pages */}
        <nav aria-label="Full Screen Section Directory" className="lg:col-span-7 space-y-1">
          <span className="text-[10px] font-mono tracking-widest uppercase text-purple-400 block mb-3">
            PRIMARY PAGES
          </span>
          {PRIMARY_NAV_ITEMS.map((item) => {
            const isActive =
              currentPath === item.path ||
              (item.path === '/overview' && currentPath === '/');

            return (
              <Link
                key={item.num}
                to={item.path}
                onClick={onClose}
                className="menu-nav-link group flex items-baseline gap-5 sm:gap-6 py-3 border-b border-white/[0.07] hover:border-champagne/40 transition-colors"
              >
                <span className="font-display text-sm sm:text-base tracking-[0.2em] text-purple-400 font-semibold">
                  {item.num}
                </span>
                <div>
                  <span className="satin-headline text-xl sm:text-3xl font-light group-hover:translate-x-3 transition-transform duration-300 block text-white">
                    {item.title}
                  </span>
                  <span className="text-xs text-stonewarm/70 font-light block mt-0.5 line-clamp-1">
                    {item.desc}
                  </span>
                </div>
                {isActive && (
                  <span className="ml-auto text-[10px] tracking-[0.2em] uppercase text-champagne shrink-0 font-mono px-2 py-0.5 rounded bg-purple-950/60 border border-purple-500/30">
                    Active
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Column: Specialized Product Portals & Mumbai HQ */}
        <div className="lg:col-span-5 space-y-8 lg:pl-10 lg:border-l lg:border-white/10">
          {/* Specialized Platforms */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono tracking-widest uppercase text-champagne block">
              SPECIALIZED PRODUCT PLATFORMS
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {SPECIALIZED_PRODUCTS.map((prod) => (
                <Link
                  key={prod.id}
                  to={prod.path}
                  onClick={onClose}
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-purple-400/50 hover:bg-white/[0.06] transition-all group"
                >
                  <span className="text-[9px] font-mono block text-purple-300 mb-0.5">
                    {prod.badge}
                  </span>
                  <span className="text-xs font-semibold text-white group-hover:text-champagne transition-colors block">
                    {prod.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mumbai HQ */}
          <div className="space-y-2">
            <span className="text-[10px] font-semibold tracking-[0.24em] uppercase text-stonewarm block">
              MUMBAI HEADQUARTERS
            </span>
            <p className="text-xs text-bone/80 leading-relaxed font-light">
              <strong className="text-champagne">Campus I:</strong> {MUMBAI_HQ_INFO.campus1}<br />
              <strong className="text-champagne">Campus II:</strong> {MUMBAI_HQ_INFO.campus2}
            </p>
          </div>

          {/* Direct Desk */}
          <div>
            <span className="text-[10px] font-semibold tracking-[0.24em] uppercase text-stonewarm block mb-1">
              DIRECT CLINICAL CONCIERGE
            </span>
            <p className="font-display text-lg text-champagne">{MUMBAI_HQ_INFO.phone}</p>
            <p className="text-xs text-purple-300 font-mono">{MUMBAI_HQ_INFO.email}</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar: System Identifier */}
      <div className="flex flex-wrap items-center justify-between text-[10px] tracking-[0.22em] uppercase text-stonewarm/80 pt-4 border-t border-white/[0.08] gap-2">
        <span>INTEGRATED MEDICAL &amp; HEALTH ASSISTANCE SYSTEM</span>
        <span>MUMBAI · INDIA</span>
      </div>
    </div>
  );
}
