import { useEffect } from 'react';
import HomePage from './pages/HomePage.jsx';
import { initializeRbcurexiaExperience } from './legacy/legacyExperience.js';
import { submitContactInquiry, subscribeToNewsletter, recordVisitorSession } from './firebase/services.js';

export default function App() {
  useEffect(() => {
    initializeRbcurexiaExperience({
      submitContact: submitContactInquiry,
      subscribeNewsletter: subscribeToNewsletter
    });

    // Notify backend on new visitor session (once per browser tab session)
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
      // Ignore if sessionStorage is restricted (e.g. strict private window settings)
    }
  }, []);

  return <HomePage />;
}
