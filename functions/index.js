import { createHash } from 'node:crypto';
import { initializeApp } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { logger } from 'firebase-functions';
import { HttpsError, onCall } from 'firebase-functions/v2/https';
import { defineSecret, defineString } from 'firebase-functions/params';
import { Resend } from 'resend';

initializeApp();
const db = getFirestore();
const RESEND_API_KEY = defineSecret('RESEND_API_KEY');
const CONTACT_NOTIFICATION_TO = defineString('CONTACT_NOTIFICATION_TO', { default: 'omkar.zunje123@gmail.com' });
const CONTACT_FROM_EMAIL = defineString('CONTACT_FROM_EMAIL', { default: 'RBCurexia Alerts <onboarding@resend.dev>' });
const REGION = 'asia-south1';

function getEmailCredentials() {
  let recipient = 'omkar.zunje123@gmail.com';
  let sender = 'RBCurexia Alerts <onboarding@resend.dev>';
  let apiKey = '';

  try { recipient = CONTACT_NOTIFICATION_TO.value() || recipient; } catch { recipient = process.env.CONTACT_NOTIFICATION_TO || recipient; }
  try { sender = CONTACT_FROM_EMAIL.value() || sender; } catch { sender = process.env.CONTACT_FROM_EMAIL || sender; }
  try { apiKey = RESEND_API_KEY.value() || ''; } catch { apiKey = process.env.RESEND_API_KEY || ''; }

  return { recipient, sender, apiKey };
}

const allowedModes = new Set([
  'Hospital & Clinic Demo',
  'Healthcare Seminars',
  'Internship Applications'
]);
const allowedSelections = {
  'Hospital & Clinic Demo': [
    'Full Panacea OS + CureNEST Hospital & Ward Suite',
    'Clinical Mode, Digital Pad e-Rx & Labonix Gateway',
    'Biometric ID Scanners, Wristbands & 24/7 Medicore Wearables',
    'Pharmixo GPS Pharmacy Dispatch & Plugins Social Network'
  ],
  'Healthcare Seminars': [
    'AI-Integrated Diagnostics & Panacea Clinical Mode',
    'Cryptographic Blockchain EHR & Biometric Hospital Workflows',
    'Digital Prescription Verification & Next-Gen Clinical Operations'
  ],
  'Internship Applications': [
    'Clinical Team Segment — EHR, CureNEST & Medical Workflows',
    'Tech Team Segment — AI, Blockchain, Panacea & Biosensors',
    'Ground Team Segment — Hospital & Pharmacy Deployment',
    'Marketing Team Segment — Plugins Social & Clinician Outreach'
  ]
};

function cleanString(value, field, maxLength, required = false) {
  if (typeof value !== 'string') {
    if (required) throw new HttpsError('invalid-argument', `${field} is required.`);
    return '';
  }
  const cleaned = value.trim();
  if (required && !cleaned) throw new HttpsError('invalid-argument', `${field} is required.`);
  if (cleaned.length > maxLength) throw new HttpsError('invalid-argument', `${field} is too long.`);
  return cleaned;
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);
}

function safeEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getClientKey(request) {
  const rawIp = request.rawRequest?.ip || request.rawRequest?.headers?.['x-forwarded-for']?.split(',')[0]?.trim() || 'unknown';
  return createHash('sha256').update(rawIp).digest('hex');
}

async function enforceRateLimit(request, action, limit, windowMs) {
  const ipHash = getClientKey(request);
  const ref = db.collection('_rateLimits').doc(`${action}_${ipHash}`);
  const now = Date.now();
  await db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    const previous = snap.exists ? snap.data() : null;
    const expired = !previous || now - previous.windowStart >= windowMs;
    if (expired) {
      tx.set(ref, { windowStart: now, count: 1, action, updatedAt: FieldValue.serverTimestamp() });
      return;
    }
    if ((previous.count || 0) >= limit) {
      throw new HttpsError('resource-exhausted', 'Too many submissions. Please try again later.');
    }
    tx.update(ref, { count: FieldValue.increment(1), updatedAt: FieldValue.serverTimestamp() });
  });
}

function buildContactEmail({ name, contact, organization, mode, selection, notes, referenceId, submittedAt }) {
  const rows = [
    ['Full name', name], ['Phone / Email', contact], ['Organization', organization || 'Not provided'],
    ['Inquiry category', mode], ['Selected program / service', selection],
    ['Additional notes', notes || 'Not provided'], ['Reference ID', referenceId], ['Submission time (UTC)', submittedAt]
  ];
  const tableRows = rows.map(([label, value]) => `<tr><td style="padding:11px 14px;color:#b8accd;border-bottom:1px solid #302141;width:190px">${escapeHtml(label)}</td><td style="padding:11px 14px;color:#f6f4f0;border-bottom:1px solid #302141;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`).join('');
  return `<!doctype html><html><body style="margin:0;background:#040208;color:#f6f4f0;font-family:Arial,sans-serif;padding:24px"><div style="max-width:720px;margin:auto;background:#0d0717;border:1px solid #38254d;border-radius:18px;overflow:hidden"><div style="padding:26px 28px;background:linear-gradient(135deg,#1a0d2d,#090411)"><div style="color:#ede8d0;font-size:12px;letter-spacing:4px;font-weight:bold">RBCUREXIA</div><h1 style="font-size:23px;font-weight:600;margin:18px 0 6px">New website inquiry</h1><p style="margin:0;color:#b8accd;font-size:13px">A visitor submitted the Executive Concierge form.</p></div><table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;border-collapse:collapse;padding:10px 14px">${tableRows}</table><div style="padding:20px 28px;color:#9b8eae;font-size:11px">This is an automated notification from the RBCurexia website.</div></div></body></html>`;
}

function buildVisitorEmail({ referrer, path, language, screen, timezone, userAgent, visitTime, visitId }) {
  const rows = [
    ['Visit Time (UTC)', visitTime],
    ['Page URL / Path', path || '/'],
    ['Traffic Referrer', referrer || 'Direct / Bookmark'],
    ['Device Screen', screen || 'Not reported'],
    ['User Timezone', timezone || 'Not reported'],
    ['Browser Language', language || 'Not reported'],
    ['Browser / Device', userAgent || 'Unknown'],
    ['Session Reference', visitId]
  ];
  const tableRows = rows.map(([label, value]) => `<tr><td style="padding:11px 14px;color:#b8accd;border-bottom:1px solid #302141;width:190px">${escapeHtml(label)}</td><td style="padding:11px 14px;color:#f6f4f0;border-bottom:1px solid #302141;white-space:pre-wrap;word-break:break-all">${escapeHtml(value)}</td></tr>`).join('');
  return `<!doctype html><html><body style="margin:0;background:#040208;color:#f6f4f0;font-family:Arial,sans-serif;padding:24px"><div style="max-width:720px;margin:auto;background:#0d0717;border:1px solid #38254d;border-radius:18px;overflow:hidden"><div style="padding:26px 28px;background:linear-gradient(135deg,#0c1d2d,#090411)"><div style="color:#00f2fe;font-size:12px;letter-spacing:4px;font-weight:bold">RBCUREXIA AUDIT TRAIL</div><h1 style="font-size:23px;font-weight:600;margin:18px 0 6px">New Website Visitor</h1><p style="margin:0;color:#b8accd;font-size:13px">A new visitor session was detected on the RBCurexia web portal.</p></div><table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;border-collapse:collapse;padding:10px 14px">${tableRows}</table><div style="padding:20px 28px;color:#9b8eae;font-size:11px">Automated visitor telemetry powered by RBCurexia Cloud Functions.</div></div></body></html>`;
}

export const submitContactInquiry = onCall({
  region: REGION,
  enforceAppCheck: false, // Set to true once reCAPTCHA v3 site key is configured
  secrets: [RESEND_API_KEY]
}, async (request) => {
  const data = request.data || {};
  // Honeypot: bots that fill this field are rejected without creating a record.
  if (typeof data.website === 'string' && data.website.trim()) {
    throw new HttpsError('invalid-argument', 'Submission could not be accepted.');
  }
  await enforceRateLimit(request, 'contact', 5, 15 * 60 * 1000);

  const name = cleanString(data.name, 'Name', 100, true);
  const contact = cleanString(data.contact, 'Contact', 180, true);
  const organization = cleanString(data.organization, 'Organization', 160);
  const mode = cleanString(data.mode, 'Inquiry category', 80, true);
  const selection = cleanString(data.selection, 'Selected program', 220, true);
  const notes = cleanString(data.notes, 'Inquiry notes', 2500);
  const pageUrl = cleanString(data.pageUrl, 'Page URL', 500);

  if (!allowedModes.has(mode)) throw new HttpsError('invalid-argument', 'Invalid inquiry category.');
  if (!allowedSelections[mode]?.includes(selection)) throw new HttpsError('invalid-argument', 'Invalid program selection.');
  if (!safeEmail(contact) && !/^[+()\d\s.-]{7,20}$/.test(contact)) {
    throw new HttpsError('invalid-argument', 'Provide a valid phone number or email address.');
  }

  const ref = db.collection('contactInquiries').doc();
  const nowIso = new Date().toISOString();
  await ref.set({
    name, contact, organization, mode, selection, notes, pageUrl,
    emailStatus: 'pending', createdAt: FieldValue.serverTimestamp(),
    source: 'website-executive-concierge'
  });

  const { recipient, sender, apiKey } = getEmailCredentials();
  const subject = `New RBCurexia inquiry: ${mode} — ${name}`;
  const html = buildContactEmail({ name, contact, organization, mode, selection, notes, referenceId: ref.id, submittedAt: nowIso });
  const text = `New RBCurexia inquiry\nName: ${name}\nContact: ${contact}\nOrganization: ${organization}\nCategory: ${mode}\nSelection: ${selection}\nNotes: ${notes}\nReference: ${ref.id}\nSubmitted (UTC): ${nowIso}`;

  let emailStatus = 'not_configured';

  // Method 1: Direct Resend API Delivery
  if (recipient && safeEmail(recipient) && sender && apiKey) {
    try {
      const resend = new Resend(apiKey);
      const result = await resend.emails.send({
        from: sender,
        to: [recipient],
        subject,
        html,
        text
      });
      if (result?.error) throw new Error(result.error.message || 'Email provider returned an error.');
      emailStatus = 'sent';
      await ref.update({ emailStatus, emailSentAt: FieldValue.serverTimestamp() });
    } catch (error) {
      emailStatus = 'failed';
      await ref.update({ emailStatus, emailError: String(error?.message || 'Email delivery failed').slice(0, 300) });
      logger.error('RBCurexia contact email delivery failed', { referenceId: ref.id, error });
    }
  } else {
    await ref.update({ emailStatus: 'not_configured' });
    logger.warn('Contact inquiry saved but email notification is pending (missing RESEND_API_KEY).', { referenceId: ref.id });
  }

  // Method 2: Firebase Extension (Trigger Email from Firestore: firebase/firestore-send-email)
  try {
    if (recipient && safeEmail(recipient)) {
      await db.collection('mail').add({
        to: [recipient],
        message: { subject, html, text },
        type: 'contact_inquiry',
        referenceId: ref.id,
        createdAt: FieldValue.serverTimestamp()
      });
    }
  } catch (extensionErr) {
    logger.warn('Failed to queue contact notification in mail collection', { error: extensionErr.message });
  }

  return { success: true, referenceId: ref.id, emailStatus };
});

export const recordVisitorSession = onCall({
  region: REGION,
  enforceAppCheck: false,
  secrets: [RESEND_API_KEY]
}, async (request) => {
  const data = request.data || {};

  const referrer = cleanString(data.referrer, 'Referrer', 300);
  const path = cleanString(data.path, 'Path', 200);
  const language = cleanString(data.language, 'Language', 50);
  const screen = cleanString(data.screen, 'Screen', 50);
  const timezone = cleanString(data.timezone, 'Timezone', 80);

  const ipHash = getClientKey(request);
  const userAgent = String(request.rawRequest?.headers?.['user-agent'] || 'unknown');
  const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(userAgent);
  const nowIso = new Date().toISOString();

  // 1. Always save visitor log in Firestore
  const visitRef = db.collection('visitorLogs').doc();
  await visitRef.set({
    referrer: referrer || 'Direct',
    path: path || '/',
    language,
    screen,
    timezone,
    userAgent: userAgent.slice(0, 300),
    ipHash,
    isBot,
    createdAt: FieldValue.serverTimestamp()
  });

  // 2. Email notification logic with cooldown rate-limit (1 email per IP every 30 minutes)
  let emailSent = false;
  let emailReason = 'not_needed';

  if (!isBot) {
    const rateLimitRef = db.collection('_rateLimits').doc(`visit_email_${ipHash}`);
    const now = Date.now();
    const COOLDOWN_MS = 30 * 60 * 1000;

    let canSend = false;
    await db.runTransaction(async (tx) => {
      const snap = await tx.get(rateLimitRef);
      const prev = snap.exists ? snap.data() : null;
      if (!prev || (now - prev.windowStart) >= COOLDOWN_MS) {
        tx.set(rateLimitRef, { windowStart: now, count: 1, updatedAt: FieldValue.serverTimestamp() });
        canSend = true;
      }
    });

    if (canSend) {
      const { recipient, sender, apiKey } = getEmailCredentials();
      const subject = `New RBCurexia Visitor: ${referrer || 'Direct'}`;
      const html = buildVisitorEmail({
        referrer,
        path,
        language,
        screen,
        timezone,
        userAgent,
        visitTime: nowIso,
        visitId: visitRef.id
      });
      const text = `New RBCurexia visitor\nTime: ${nowIso}\nPath: ${path || '/'}\nReferrer: ${referrer || 'Direct'}\nScreen: ${screen}\nTimezone: ${timezone}\nDevice: ${userAgent}\nReference: ${visitRef.id}`;

      // Method 1: Direct Resend API
      if (recipient && safeEmail(recipient) && sender && apiKey) {
        try {
          const resend = new Resend(apiKey);
          const result = await resend.emails.send({
            from: sender,
            to: [recipient],
            subject,
            html,
            text
          });
          if (!result?.error) {
            emailSent = true;
            emailReason = 'resend_sent';
          }
        } catch (error) {
          logger.error('Visitor email delivery via Resend failed', { error });
        }
      }

      // Method 2: Firebase Extension (Trigger Email from Firestore: firebase/firestore-send-email)
      try {
        if (recipient && safeEmail(recipient)) {
          await db.collection('mail').add({
            to: [recipient],
            message: { subject, html, text },
            type: 'website_visit',
            visitId: visitRef.id,
            createdAt: FieldValue.serverTimestamp()
          });
          if (!emailSent) {
            emailReason = 'queued_in_mail_collection';
          }
        }
      } catch (extensionErr) {
        logger.warn('Failed to queue visitor email in mail collection', { error: extensionErr.message });
      }
    } else {
      emailReason = 'cooldown_rate_limited';
    }
  } else {
    emailReason = 'bot_traffic_ignored';
  }

  return { success: true, visitId: visitRef.id, emailSent, emailReason };
});

export const subscribeToNewsletter = onCall({
  region: REGION,
  enforceAppCheck: true
}, async (request) => {
  const data = request.data || {};
  if (typeof data.website === 'string' && data.website.trim()) {
    throw new HttpsError('invalid-argument', 'Subscription could not be accepted.');
  }
  await enforceRateLimit(request, 'newsletter', 5, 60 * 60 * 1000);
  const email = cleanString(data.email, 'Email', 254, true).toLowerCase();
  if (!safeEmail(email)) throw new HttpsError('invalid-argument', 'Enter a valid email address.');
  if (data.consent !== true) throw new HttpsError('failed-precondition', 'Consent is required to subscribe.');

  const id = createHash('sha256').update(email).digest('hex');
  const ref = db.collection('newsletterSubscribers').doc(id);
  let alreadySubscribed = false;
  await db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    if (snap.exists) {
      alreadySubscribed = true;
      return;
    }
    tx.create(ref, {
      email,
      consent: true,
      consentAt: FieldValue.serverTimestamp(),
      createdAt: FieldValue.serverTimestamp(),
      source: 'website-newsletter'
    });
  });
  return { success: true, alreadySubscribed };
});
