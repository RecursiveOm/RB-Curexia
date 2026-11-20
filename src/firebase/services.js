import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { httpsCallable } from 'firebase/functions';
import { firebaseFirestore, firebaseFunctions, isFirebaseConfigured } from './config.js';

function requireFirebase() {
  if (!isFirebaseConfigured || !firebaseFirestore) {
    throw new Error('Firebase is not configured. Complete the environment setup in the README.');
  }
}

/**
 * Submit Executive Concierge / Contact Us inquiry.
 * Always writes directly to Cloud Firestore 'contactInquiries' collection.
 */
export async function submitContactInquiry(payload) {
  requireFirebase();

  let emailStatus = 'pending';
  let referenceId = '';

  // 1. Direct write to Cloud Firestore
  try {
    const docRef = await addDoc(collection(firebaseFirestore, 'contactInquiries'), {
      name: payload.name || '',
      contact: payload.contact || '',
      organization: payload.organization || '',
      mode: payload.mode || 'Hospital & Clinic Demo',
      selection: payload.selection || '',
      notes: payload.notes || '',
      pageUrl: payload.pageUrl || (typeof window !== 'undefined' ? window.location.href : ''),
      source: 'website-executive-concierge',
      createdAt: serverTimestamp(),
      submittedAt: new Date().toISOString()
    });
    referenceId = docRef.id;
  } catch (firestoreErr) {
    console.error('Firestore contact inquiry write failed:', firestoreErr);
    throw firestoreErr;
  }

  // 2. Dispatch email notification (via local dev mailer or Cloud Function if available)
  if (import.meta.env.DEV) {
    try {
      const res = await fetch('/api/contact-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, referenceId })
      });
      if (res.ok) {
        const devData = await res.json();
        emailStatus = devData.emailStatus || 'sent';
      }
    } catch {
      // Local dev mailer optional
    }
  } else if (firebaseFunctions) {
    try {
      const callable = httpsCallable(firebaseFunctions, 'submitContactInquiry');
      const response = await callable(payload);
      if (response?.data?.emailStatus) {
        emailStatus = response.data.emailStatus;
      }
    } catch {
      emailStatus = 'saved_in_firestore';
    }
  }

  return { success: true, referenceId, emailStatus };
}

/**
 * Subscribe to clinical community newsletter.
 * Always writes directly to Cloud Firestore 'newsletterSubscribers' collection.
 */
export async function subscribeToNewsletter(payload) {
  requireFirebase();

  try {
    const docRef = await addDoc(collection(firebaseFirestore, 'newsletterSubscribers'), {
      email: payload.email || '',
      source: 'footer-newsletter',
      createdAt: serverTimestamp(),
      subscribedAt: new Date().toISOString()
    });
    return { success: true, referenceId: docRef.id };
  } catch (firestoreErr) {
    console.error('Firestore newsletter write failed:', firestoreErr);
    throw firestoreErr;
  }
}

/**
 * Record real-time website visitor session telemetry.
 * Always writes directly to Cloud Firestore 'visitorLogs' collection.
 */
export async function recordVisitorSession(payload = {}) {
  if (!isFirebaseConfigured || !firebaseFirestore) {
    return { success: false, reason: 'unconfigured' };
  }

  try {
    const path = payload.path || (typeof window !== 'undefined' ? window.location.pathname + window.location.search : '/');
    const referrer = payload.referrer || (typeof document !== 'undefined' ? document.referrer || 'Direct / Bookmark' : 'Direct');
    const language = payload.language || (typeof navigator !== 'undefined' ? navigator.language || 'en' : 'en');
    const screen = payload.screen || (typeof window !== 'undefined' ? `${window.innerWidth}x${window.innerHeight}` : '');
    const timezone = payload.timezone || (typeof Intl !== 'undefined' ? Intl?.DateTimeFormat?.().resolvedOptions?.().timeZone || 'unknown' : 'unknown');
    const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown';

    const docRef = await addDoc(collection(firebaseFirestore, 'visitorLogs'), {
      path,
      referrer,
      language,
      screen,
      timezone,
      userAgent: userAgent.slice(0, 300),
      createdAt: serverTimestamp(),
      visitedAt: new Date().toISOString()
    });

    // Optional local dev reporting
    if (import.meta.env.DEV) {
      try {
        await fetch('/api/visitor-session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...payload, visitId: docRef.id })
        });
      } catch {
        // Optional
      }
    }

    return { success: true, visitId: docRef.id };
  } catch (error) {
    console.debug('Visitor telemetry write skipped:', error?.message);
    return { success: false, error: error?.message };
  }
}
