import { Resend } from '../functions/node_modules/resend/dist/index.mjs';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const envPath = join(process.cwd(), 'functions', '.env');
let apiKey = process.env.RESEND_API_KEY;
let recipient = process.env.CONTACT_NOTIFICATION_TO || 'omkar.zunje123@gmail.com';
let sender = process.env.CONTACT_FROM_EMAIL || 'RBCurexia Alerts <onboarding@resend.dev>';

if (existsSync(envPath)) {
  const content = readFileSync(envPath, 'utf8');
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (trimmed.startsWith('RESEND_API_KEY=')) apiKey = trimmed.split('=')[1].trim();
    if (trimmed.startsWith('CONTACT_NOTIFICATION_TO=')) recipient = trimmed.split('=')[1].trim();
    if (trimmed.startsWith('CONTACT_FROM_EMAIL=')) sender = trimmed.split('=')[1].trim();
  }
}

console.log('--- Testing RBCurexia Email Dispatch ---');
console.log(`Recipient: ${recipient}`);
console.log(`Sender:    ${sender}`);
console.log(`API Key:   ${apiKey ? apiKey.slice(0, 7) + '...' : 'NOT FOUND'}`);

if (!apiKey) {
  console.error('Error: RESEND_API_KEY not found in functions/.env');
  process.exit(1);
}

const resend = new Resend(apiKey);
const timeIso = new Date().toISOString();

try {
  const result = await resend.emails.send({
    from: sender,
    to: [recipient],
    subject: `RBCurexia System Test: Connection Verified (${timeIso.slice(11, 19)} UTC)`,
    html: `<!doctype html>
<html>
<body style="margin:0;background:#040208;color:#f6f4f0;font-family:Arial,sans-serif;padding:24px">
  <div style="max-width:680px;margin:auto;background:#0d0717;border:1px solid #38254d;border-radius:18px;overflow:hidden">
    <div style="padding:26px 28px;background:linear-gradient(135deg,#1a0d2d,#090411)">
      <div style="color:#00f2fe;font-size:12px;letter-spacing:4px;font-weight:bold">RBCUREXIA ENGINE</div>
      <h1 style="font-size:23px;font-weight:600;margin:18px 0 6px">Test Email Successful</h1>
      <p style="margin:0;color:#b8accd;font-size:13px">Your Resend API key and inbox configuration are fully working.</p>
    </div>
    <div style="padding:24px 28px;line-height:1.6;font-size:14px;color:#d8cde6">
      <p>This confirms that:</p>
      <ul>
        <li>Resend API authentication is successful.</li>
        <li>Your inbox <strong>${recipient}</strong> can receive alerts.</li>
        <li>Executive Concierge inquiries and Website Visitor alerts are active.</li>
      </ul>
      <p style="color:#9b8eae;font-size:12px;margin-top:24px">Sent from RBCurexia Production Engine at ${timeIso}</p>
    </div>
  </div>
</body>
</html>`,
    text: `RBCurexia Test Email Successful!\nTime: ${timeIso}\nRecipient: ${recipient}\nYour Resend configuration is active!`
  });

  if (result.error) {
    console.error('Resend delivery error:', result.error);
    process.exit(1);
  }

  console.log('SUCCESS! Test email sent successfully.');
  console.log('Resend Response ID:', result.data?.id);
} catch (err) {
  console.error('Unexpected error during test:', err);
  process.exit(1);
}
