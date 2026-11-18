import { Resend } from 'resend';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

function loadEnvConfig() {
  const envPath = join(process.cwd(), 'functions', '.env');
  let apiKey = process.env.RESEND_API_KEY || '';
  let recipient = process.env.CONTACT_NOTIFICATION_TO || 'omkar.zunje123@gmail.com';
  let sender = process.env.CONTACT_FROM_EMAIL || 'RBCurexia Alerts <onboarding@resend.dev>';

  if (existsSync(envPath)) {
    const lines = readFileSync(envPath, 'utf8').split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('RESEND_API_KEY=')) apiKey = trimmed.split('=')[1].trim();
      if (trimmed.startsWith('CONTACT_NOTIFICATION_TO=')) recipient = trimmed.split('=')[1].trim();
      if (trimmed.startsWith('CONTACT_FROM_EMAIL=')) sender = trimmed.split('=')[1].trim();
    }
  }

  return { apiKey, recipient, sender };
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);
}

function buildContactEmail({ name, contact, organization, mode, selection, notes, referenceId, submittedAt }) {
  const rows = [
    ['Full name', name], ['Phone / Email', contact], ['Organization', organization || 'Not provided'],
    ['Inquiry category', mode], ['Selected program / service', selection],
    ['Additional notes', notes || 'Not provided'], ['Reference ID', referenceId], ['Submission time (UTC)', submittedAt],
    ['Environment', 'Localhost Dev Mode']
  ];
  const tableRows = rows.map(([label, value]) => `<tr><td style="padding:11px 14px;color:#b8accd;border-bottom:1px solid #302141;width:190px">${escapeHtml(label)}</td><td style="padding:11px 14px;color:#f6f4f0;border-bottom:1px solid #302141;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`).join('');
  return `<!doctype html><html><body style="margin:0;background:#040208;color:#f6f4f0;font-family:Arial,sans-serif;padding:24px"><div style="max-width:720px;margin:auto;background:#0d0717;border:1px solid #38254d;border-radius:18px;overflow:hidden"><div style="padding:26px 28px;background:linear-gradient(135deg,#1a0d2d,#090411)"><div style="color:#ede8d0;font-size:12px;letter-spacing:4px;font-weight:bold">RBCUREXIA · LOCALHOST DEV</div><h1 style="font-size:23px;font-weight:600;margin:18px 0 6px">New website inquiry</h1><p style="margin:0;color:#b8accd;font-size:13px">A visitor submitted the Executive Concierge form on localhost.</p></div><table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;border-collapse:collapse;padding:10px 14px">${tableRows}</table><div style="padding:20px 28px;color:#9b8eae;font-size:11px">Automated notification tested via RBCurexia Local Dev Server.</div></div></body></html>`;
}

function buildVisitorEmail({ referrer, path, language, screen, timezone, userAgent, visitTime, visitId }) {
  const rows = [
    ['Visit Time (UTC)', visitTime],
    ['Page URL / Path', path || '/'],
    ['Traffic Referrer', referrer || 'Direct / Bookmark'],
    ['Device Screen', screen || 'Not reported'],
    ['User Timezone', timezone || 'Not reported'],
    ['Browser Language', language || 'Not reported'],
    ['Browser / Device', userAgent || 'Localhost Dev Browser'],
    ['Session Reference', visitId],
    ['Origin', 'Localhost (Development Session)']
  ];
  const tableRows = rows.map(([label, value]) => `<tr><td style="padding:11px 14px;color:#b8accd;border-bottom:1px solid #302141;width:190px">${escapeHtml(label)}</td><td style="padding:11px 14px;color:#f6f4f0;border-bottom:1px solid #302141;white-space:pre-wrap;word-break:break-all">${escapeHtml(value)}</td></tr>`).join('');
  return `<!doctype html><html><body style="margin:0;background:#040208;color:#f6f4f0;font-family:Arial,sans-serif;padding:24px"><div style="max-width:720px;margin:auto;background:#0d0717;border:1px solid #38254d;border-radius:18px;overflow:hidden"><div style="padding:26px 28px;background:linear-gradient(135deg,#0c1d2d,#090411)"><div style="color:#00f2fe;font-size:12px;letter-spacing:4px;font-weight:bold">RBCUREXIA AUDIT TRAIL</div><h1 style="font-size:23px;font-weight:600;margin:18px 0 6px">New Website Visitor (Localhost)</h1><p style="margin:0;color:#b8accd;font-size:13px">A new visitor session was detected on your localhost preview.</p></div><table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;border-collapse:collapse;padding:10px 14px">${tableRows}</table><div style="padding:20px 28px;color:#9b8eae;font-size:11px">Local development visitor telemetry powered by Resend.</div></div></body></html>`;
}

export function localDevEmailPlugin() {
  return {
    name: 'local-dev-email-server',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.method !== 'POST') return next();

        if (req.url === '/api/contact-inquiry') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', async () => {
            try {
              const data = JSON.parse(body || '{}');
              const { apiKey, recipient, sender } = loadEnvConfig();

              console.log('\n[Local Dev Server] Received Contact Form Submission:', data.name, `(${data.contact})`);
              const referenceId = 'DEV-' + Math.random().toString(36).substring(2, 9).toUpperCase();
              const nowIso = new Date().toISOString();

              const resend = new Resend(apiKey);
              const result = await resend.emails.send({
                from: sender,
                to: [recipient],
                subject: `[Localhost] New RBCurexia inquiry: ${data.mode || 'Demo'} — ${data.name || 'Anonymous'}`,
                html: buildContactEmail({
                  name: data.name,
                  contact: data.contact,
                  organization: data.organization,
                  mode: data.mode,
                  selection: data.selection,
                  notes: data.notes,
                  referenceId,
                  submittedAt: nowIso
                }),
                text: `New RBCurexia inquiry (Localhost):\nName: ${data.name}\nContact: ${data.contact}\nCategory: ${data.mode}\nSelection: ${data.selection}\nNotes: ${data.notes}\nRef: ${referenceId}`
              });

              if (result.error) {
                console.error('[Local Dev Server] Resend delivery failed:', result.error);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, error: result.error.message }));
                return;
              }

              console.log(`[Local Dev Server] ✓ Email dispatched successfully to ${recipient}! (Resend ID: ${result.data?.id})`);
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: true, referenceId, emailStatus: 'sent' }));
            } catch (err) {
              console.error('[Local Dev Server] Error handling contact submission:', err);
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: false, error: err.message }));
            }
          });
          return;
        }

        if (req.url === '/api/visitor-session') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', async () => {
            try {
              const data = JSON.parse(body || '{}');
              const { apiKey, recipient, sender } = loadEnvConfig();

              console.log('\n[Local Dev Server] Visitor Session Detected on Localhost:', data.path || '/');
              const visitId = 'VISIT-' + Math.random().toString(36).substring(2, 9).toUpperCase();
              const nowIso = new Date().toISOString();

              const resend = new Resend(apiKey);
              const result = await resend.emails.send({
                from: sender,
                to: [recipient],
                subject: `[Localhost Alert] New RBCurexia Visitor Session`,
                html: buildVisitorEmail({
                  referrer: data.referrer,
                  path: data.path,
                  language: data.language,
                  screen: data.screen,
                  timezone: data.timezone,
                  userAgent: req.headers['user-agent'],
                  visitTime: nowIso,
                  visitId
                }),
                text: `New RBCurexia visitor on localhost:\nTime: ${nowIso}\nPath: ${data.path}\nDevice: ${req.headers['user-agent']}\nRef: ${visitId}`
              });

              if (result.error) {
                console.error('[Local Dev Server] Visitor email failed:', result.error);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, error: result.error.message }));
                return;
              }

              console.log(`[Local Dev Server] ✓ Visitor Alert email dispatched to ${recipient}! (Resend ID: ${result.data?.id})`);
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: true, visitId, emailSent: true }));
            } catch (err) {
              console.error('[Local Dev Server] Error handling visitor session:', err);
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: false, error: err.message }));
            }
          });
          return;
        }

        next();
      });
    }
  };
}
