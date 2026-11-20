import { getApp, getApps, initializeApp } from 'firebase/app';
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';
import { getFirestore } from 'firebase/firestore';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const requiredValues = ['apiKey', 'authDomain', 'projectId', 'appId'];
export const isFirebaseConfigured = requiredValues.every((key) => {
  const value = firebaseConfig[key];
  return typeof value === 'string' && value.trim() !== '' && !value.startsWith('REPLACE_');
});

export const firebaseApp = isFirebaseConfigured
  ? (getApps().length ? getApp() : initializeApp(firebaseConfig))
  : null;

const appCheckSiteKey = import.meta.env.VITE_FIREBASE_APPCHECK_SITE_KEY;
const isAppCheckConfigured = typeof appCheckSiteKey === 'string' && appCheckSiteKey.trim() !== '' && !appCheckSiteKey.startsWith('REPLACE_');

if (firebaseApp && isAppCheckConfigured && typeof window !== 'undefined') {
  try {
    initializeAppCheck(firebaseApp, {
      provider: new ReCaptchaV3Provider(appCheckSiteKey),
      isTokenAutoRefreshEnabled: true
    });
  } catch (error) {
    // App Check can only be initialized once per Firebase app.
    if (!String(error?.message || '').toLowerCase().includes('already')) throw error;
  }
}

export const firebaseFunctions = firebaseApp
  ? getFunctions(firebaseApp, import.meta.env.VITE_FIREBASE_FUNCTIONS_REGION || 'asia-south1')
  : null;

export const firebaseFirestore = firebaseApp
  ? getFirestore(firebaseApp)
  : null;

if (firebaseFunctions && import.meta.env.VITE_USE_FIREBASE_EMULATOR === 'true') {
  connectFunctionsEmulator(firebaseFunctions, 'localhost', 5001);
}
