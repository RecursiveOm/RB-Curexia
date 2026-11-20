import puppeteer from 'puppeteer';
import { spawn } from 'node:child_process';

async function runTests() {
  console.log('--- Starting Preview Server ---');
  const server = spawn('npx', ['vite', 'preview', '--port', '4173'], {
    shell: true,
    stdio: 'pipe'
  });

  await new Promise((resolve) => setTimeout(resolve, 2500));

  console.log('--- Launching Headless Chrome ---');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });
  page.on('pageerror', (err) => {
    consoleErrors.push(err.message);
  });

  const routes = [
    '/overview',
    '/mission',
    '/panacea',
    '/architecture',
    '/network',
    '/concierge',
    '/curenest',
    '/labonix',
    '/pharmixo',
    '/pulseport',
    '/404'
  ];

  console.log('--- Testing Routes ---');
  for (const route of routes) {
    console.log(`Testing route: ${route}`);
    const res = await page.goto(`http://localhost:4173${route}`, { waitUntil: 'networkidle0' });
    const status = res.status();
    console.log(`Route ${route} loaded with status ${status}`);

    // Check if main header is visible
    const headerExists = await page.$('#main-header') !== null;
    const footerExists = await page.$('footer') !== null;
    console.log(`  Header present: ${headerExists}, Footer present: ${footerExists}`);

    // Take screenshot
    const cleanRouteName = route.replace('/', '') || 'root';
    await page.screenshot({ path: `scratch/page-${cleanRouteName}.png` });
  }

  // Test root redirect
  console.log('Testing root redirect (/) ...');
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });
  const url = page.url();
  console.log(`Root redirected to: ${url}`);

  // Test navigation click
  console.log('Testing client navigation click to /mission ...');
  const missionLink = await page.$('a[href="/mission"]');
  if (missionLink) {
    await missionLink.click();
    await new Promise((r) => setTimeout(r, 1000));
    console.log(`Clicked /mission, current URL: ${page.url()}`);
  }

  console.log('--- Summary ---');
  console.log(`Total Console Errors: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) {
    console.error('Console Errors:', consoleErrors);
  }

  await browser.close();
  server.kill();
  process.exit(consoleErrors.length > 0 ? 1 : 0);
}

runTests().catch((err) => {
  console.error('Test error:', err);
  process.exit(1);
});
