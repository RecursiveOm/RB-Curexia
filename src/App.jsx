import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SiteLayout from './components/layout/SiteLayout.jsx';

// Primary Pages
import OverviewPage from './pages/OverviewPage.jsx';
import MissionPage from './pages/MissionPage.jsx';
import PanaceaPage from './pages/PanaceaPage.jsx';
import ArchitecturePage from './pages/ArchitecturePage.jsx';
import NetworkPage from './pages/NetworkPage.jsx';
import ConciergePage from './pages/ConciergePage.jsx';

// Specialized Product Deep-Dive Pages
import CureNestPage from './pages/CureNestPage.jsx';
import LabonixPage from './pages/LabonixPage.jsx';
import PharmixoPage from './pages/PharmixoPage.jsx';
import PulsePortPage from './pages/PulsePortPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

import { initializeRbcurexiaExperience } from './legacy/legacyExperience.js';
import { submitContactInquiry, subscribeToNewsletter, recordVisitorSession } from './firebase/services.js';

export default function App() {
  useEffect(() => {
    // Initialize core animation & interaction runtime
    try {
      initializeRbcurexiaExperience({
        submitContact: submitContactInquiry,
        subscribeNewsletter: subscribeToNewsletter
      });
    } catch (err) {
      console.warn('Experience initialization fallback:', err);
    }

    // Initial visitor session reporting
    try {
      const sessionKey = 'rbcurexia_visit_reported';
      if (!sessionStorage.getItem(sessionKey)) {
        sessionStorage.setItem(sessionKey, String(Date.now()));
        recordVisitorSession({
          referrer: document.referrer || 'Direct / Bookmark',
          path: window.location.pathname + window.location.search,
          language: navigator.language || 'en',
          screen: `${window.innerWidth}x${window.innerHeight}`,
          timezone: Intl?.DateTimeFormat?.().resolvedOptions?.().timeZone || 'unknown'
        });
      }
    } catch {
      // Ignore strict storage restrictions
    }
  }, []);

  return (
    <BrowserRouter>
      <SiteLayout>
        <Routes>
          {/* Default Route redirects to /overview */}
          <Route path="/" element={<Navigate to="/overview" replace />} />

          {/* Six Primary Numbered Pages */}
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/mission" element={<MissionPage />} />
          <Route path="/panacea" element={<PanaceaPage />} />
          <Route path="/architecture" element={<ArchitecturePage />} />
          <Route path="/network" element={<NetworkPage />} />
          <Route path="/concierge" element={<ConciergePage />} />

          {/* Specialized Product Platforms */}
          <Route path="/curenest" element={<CureNestPage />} />
          <Route path="/labonix" element={<LabonixPage />} />
          <Route path="/pharmixo" element={<PharmixoPage />} />
          <Route path="/pulseport" element={<PulsePortPage />} />

          {/* Safe Fallback for Unknown Routes */}
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  );
}
