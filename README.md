# RBCurexia — React + Firebase website

This project migrates the supplied RBCurexia HTML into a React + Vite application while preserving its six original website sections, CSS design system, embedded artwork, Three.js heart scene, GSAP/ScrollTrigger motion, product lightbox, service search/filtering, queue simulation and three Executive Concierge modes.

## Important implementation note

The original HTML is retained in `reference/rbcurexia-original.html`. The original section markup is split into React section components so the legacy animation and interaction code can continue targeting the same stable element IDs. The custom CSS is retained in `src/styles/site.css`. Embedded WebP images have been externalized into `public/assets/` rather than kept as multi-megabyte base64 strings.

The project includes a Firebase callable-function backend for contact inquiries and newsletter subscriptions. Email delivery uses Resend from Cloud Functions; the Resend key is server-only. No real Firebase project ID, Firebase secrets, sender domain or credentials are included.

## Requirements

- Node.js 22.12 or newer (the selected Vite 8 line requires Node.js 20.19+ or 22.12+)
- npm
- A Firebase project with billing/plan eligibility for Cloud Functions and an App Check registration
- Firebase CLI
- A Resend account and a verified sender domain

## 1. Install dependencies

From this folder:

```bash
npm install
cd functions
npm install
cd ..
```

The package registry was unreachable in the preparation environment, so a verified npm lockfile could not be generated here. Run `npm install` in your environment to create `package-lock.json` and `functions/package-lock.json` before committing or deploying. Do not use `npm ci` until those lockfiles exist.

## 2. Configure the frontend

Copy `.env.example` to `.env.local` and fill in the Firebase Web App configuration from Firebase Console → Project settings → Your apps → Web app.

`VITE_` values are public build-time configuration. They are not private keys. Never put Firebase Admin credentials, Resend keys, SMTP passwords, or service-account JSON in this file.

The `VITE_FIREBASE_APPCHECK_SITE_KEY` value is the public reCAPTCHA v3 site key. Register the web app in Firebase Console → App Check and configure the matching reCAPTCHA secret there. Add localhost and your production domain to the reCAPTCHA site key's allowed domains as appropriate.

## 3. Configure Firebase project

```bash
npm install -g firebase-tools
firebase login
cp .firebaserc.example .firebaserc
```

Edit `.firebaserc` and replace `YOUR_FIREBASE_PROJECT_ID`, or use:

```bash
firebase use --add
```

Enable Cloud Firestore and App Check in the Firebase Console. App Check enforcement is enabled on both callable functions, so configure and initialize App Check before testing form submissions.

## 4. Configure email delivery (Contact inquiries & Visitor alerts)

The backend supports two delivery mechanisms out-of-the-box:
1. **Direct delivery via Resend API (built into Cloud Functions)**: Zero extensions needed, lightweight, server-only secret.
2. **Firebase Extension ("Trigger Email from Firestore" - `firebase/firestore-send-email`)**: All contact inquiries and visitor alerts are simultaneously queued into Firestore's `mail` collection with recipient, HTML body, and metadata. If you install the Firebase Trigger Email extension, it will automatically process and deliver them via your preferred SMTP provider (Gmail, SendGrid, Mailgun, Postmark, etc.).

### Option A: Direct Resend API (Recommended)

Copy `functions/.env.example` to `functions/.env.YOUR_FIREBASE_PROJECT_ID` (replace the suffix with your actual Firebase project ID). Set:

- `CONTACT_NOTIFICATION_TO`: the inbox that should receive new inquiries and visitor alerts.
- `CONTACT_FROM_EMAIL`: a sender address on a domain verified with Resend (or your email provider).

Set the Resend private API key as a Firebase Secret Manager secret:

```bash
firebase functions:secrets:set RESEND_API_KEY
```

Paste the Resend API key into the secure CLI prompt.

### Option B: Firebase Extension (`firebase/firestore-send-email`)

Install the official Firebase extension:
```bash
firebase ext:install firebase/firestore-send-email --save
```
When prompted during extension setup:
- **Email documents collection**: `mail` (already configured in the codebase)
- **SMTP connection URI**: Enter your SMTP URI (e.g. `smtps://username:password@smtp.mailgun.net:465` or SendGrid/Postmark/Gmail SMTP)
- **Default FROM address**: e.g., `notifications@yourdomain.com`

Deploy the extension configuration:
```bash
firebase deploy --only extensions
```

## 5. Run locally

```bash
npm run dev
```

The frontend can be opened before Firebase configuration, but contact and newsletter submissions will show a configuration error until the environment, App Check, Functions and email provider have been configured.

For full local backend integration, start Firebase emulators (after configuring the Firebase project):

```bash
firebase emulators:start --only functions,firestore
```

If using emulators, add emulator connection logic to `src/firebase/config.js` for your local environment before relying on the emulator test path. The current client defaults to the deployed `asia-south1` callable functions region.

## 6. Build and deploy

```bash
npm run build
firebase deploy --only firestore:rules,storage,functions,hosting
```

Cloud Functions deployment may require the Firebase project to be on the Blaze plan and may request enabling the underlying Google Cloud APIs. Review Firebase pricing before enabling billing.

## Backend behavior

### Contact inquiries

The Executive Concierge form keeps the three original modes:

- Hospital & Clinic Demo
- Healthcare Seminars
- Internship Applications

The callable function validates the payload, checks a honeypot and an IP-based rate limit, stores the inquiry in `contactInquiries`, queues the notification in Firestore `mail` for the Trigger Email extension, and delivers the Resend notification. The visitor is told whether email was sent or whether the inquiry was saved but notification delivery is pending/failed. A failed email does not discard the Firestore inquiry.

### Website visitor alerts

When someone visits the site, the client reports session telemetry (referrer, landing path, viewport resolution, timezone, language). The `recordVisitorSession` Cloud Function:
- Always stores an audit record in the `visitorLogs` collection.
- Drops automated search bot crawlers to prevent inbox pollution.
- Applies a cooldown rate-limit (max 1 email alert per IP address every 30 minutes) to prevent mailbox flooding when someone refreshes or browses multiple pages.
- Sends an instant, beautifully formatted dark-clinical email alert to `CONTACT_NOTIFICATION_TO` and queues it in Firestore `mail`.

### Newsletter

Newsletter submissions require the visitor to tick the consent checkbox. The callable function validates the address, rate-limits submissions, hashes the normalized email to prevent duplicate subscriber records, and stores consent metadata in `newsletterSubscribers`. It does not automatically send marketing campaigns; connect an approved mailing-list provider before sending bulk newsletter emails.

### Security

Firestore and Storage client rules deny direct access by default. The callable Cloud Functions use the Admin SDK. App Check enforcement is enabled. Contact/email secrets are not exposed to the browser. The `contactInquiries` collection contains personal contact information; access it only through trusted server/admin tooling and apply your privacy and retention policy.

## Responsive QA checklist

The CSS has been kept and augmented with small responsive refinements. Verify at 320, 360, 375, 390, 430, 768, 820, 1024, 1280, 1440 and 1920 CSS pixels. Check the hero heart, menu overlay, six sections, service grid, queue demo, modals, the three form modes and footer. Also test on actual iOS Safari and Android Chrome devices; emulated widths do not replace device testing.

## Known setup / verification items

- Firebase project configuration and App Check site key are intentionally placeholders.
- `RESEND_API_KEY`, recipient inbox and verified sender must be configured before email delivery can be tested.
- A real delivery test requires deploying the Functions to your Firebase project and submitting a test inquiry.
- The package registry was unavailable while this project was prepared, so npm install/build and browser/device QA could not be run in this environment. Run the install/build steps above before deployment.
- Firebase Storage is not used by the current public website because the source contains no visitor file-upload workflow; the included rules keep Storage closed by default.


## Visual redesign update

The visual update introduces a more editorial dark-clinical design system, a compact three-pillar presentation of all 24 existing service modules, a highlighted interactive module panel, and additional hero orbit labels. The existing module names and descriptions remain in `src/legacy/legacyExperience.js`.

### Photography sources

Three mission-section photos now reference the following free-to-use Unsplash images (with the prior local project imagery retained as an offline/error fallback):

- National Cancer Institute — doctor speaking with a patient: https://unsplash.com/photos/doctor-talking-to-patient-in-clinic-tl447mekwuQ
- Luis Melendez — medical team in a hospital corridor: https://unsplash.com/photos/group-of-doctors-walking-on-hospital-hallway-Pd4lRfKo16U
- Accuray — doctor and patient in a medical room: https://unsplash.com/photos/doctor-and-patient-in-medical-room-ThpS0DVkPBs

These image pages identify the images as free to use under the Unsplash License. Availability still depends on the visitor's network connection; the app falls back to local included images if an external image fails to load.

### Updated frontend tooling

`@vitejs/plugin-react` is pinned to `6.3.0`, the Vite 8-compatible official React plugin release. Run `npm install` from the project root to regenerate the local lockfile.
