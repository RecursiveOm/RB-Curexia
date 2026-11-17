import { httpsCallable } from 'firebase/functions';
import { firebaseFunctions, isFirebaseConfigured } from './config.js';

function requireFirebase() {
  if (!isFirebaseConfigured || !firebaseFunctions) {
    throw new Error('Firebase is not configured. Complete the environment setup in the README.');
  }
}

export async function submitContactInquiry(payload) {
  requireFirebase();
  const callable = httpsCallable(firebaseFunctions, 'submitContactInquiry');
  const response = await callable(payload);
  return response.data;
}

export async function subscribeToNewsletter(payload) {
  requireFirebase();
  const callable = httpsCallable(firebaseFunctions, 'subscribeToNewsletter');
  const response = await callable(payload);
  return response.data;
}

export async function recordVisitorSession(payload = {}) {
  if (!isFirebaseConfigured || !firebaseFunctions) {
    return { success: false, reason: 'unconfigured' };
  }
  try {
    const callable = httpsCallable(firebaseFunctions, 'recordVisitorSession');
    const response = await callable(payload);
    return response.data;
  } catch (error) {
    console.debug('Visitor telemetry skipped:', error?.message);
    return { success: false, error: error?.message };
  }
}
