import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MainHeader from './MainHeader.jsx';
import NavigationOverlay from './NavigationOverlay.jsx';
import GlobalFooter from './GlobalFooter.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import FilmGrain from './FilmGrain.jsx';
import ProductLightbox from './ProductLightbox.jsx';
import { recordVisitorSession } from '../../firebase/services.js';

export default function SiteLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Log visitor session telemetry on route transitions
  useEffect(() => {
    try {
      recordVisitorSession({
        referrer: document.referrer || 'Direct / Internal Navigation',
        path: location.pathname + location.search,
        language: navigator.language || 'en',
        screen: `${window.innerWidth}x${window.innerHeight}`,
        timezone: Intl?.DateTimeFormat?.().resolvedOptions?.().timeZone || 'unknown'
      });
    } catch {
      // Ignore if sessionStorage or analytics are blocked by strict user policies
    }
  }, [location.pathname, location.search]);

  return (
    <div className="relative min-h-screen bg-[#040208] text-bone flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      <ScrollToTop />
      <FilmGrain />

      {/* Cosmic Twinkling Starfield Canvas (Global Background) */}
      <canvas
        id="cosmic-starfield-canvas"
        className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-40 transition-opacity duration-700"
      />

      {/* Main Global Navigation */}
      <MainHeader onOpenMenu={() => setIsMenuOpen(true)} />

      {/* Full-Screen Navigation Index Overlay */}
      <NavigationOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />

      {/* Page Content Outlet */}
      <main className="relative z-10 flex-1 w-full flex flex-col">
        {children}
      </main>

      {/* Global Comprehensive Footer */}
      <GlobalFooter />

      {/* Global Product Lightbox Modal */}
      <ProductLightbox />
    </div>
  );
}
