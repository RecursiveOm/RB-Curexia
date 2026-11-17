# Migration notes

- Original HTML: `reference/rbcurexia-original.html`
- Original page sections preserved: act-hero, act-mission, act-panacea, act-services, act-network, act-concierge
- Embedded image assets extracted and deduplicated: 9
- Contact form: Firebase callable function `submitContactInquiry`
- Newsletter: Firebase callable function `subscribeToNewsletter`
- Functions region: `asia-south1`
- Secrets/configuration values are placeholders only.

## Explicitly not verified in this environment

Network access to the npm registry was unavailable, so npm dependency installation, Vite production build, Firebase emulator tests, real email delivery, and browser/device screenshot QA remain pending.

- Visual redesign: new aurora-clinical styling, hero orbit labels, upgraded component surfaces and a three-pillar 24-service explorer.
- Mission photography: Unsplash License image URLs with bundled local-image fallbacks. See README image credits.
- Vite 8 fix: @vitejs/plugin-react upgraded from 5.1.1 to 6.3.0.
