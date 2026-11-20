import { chromium } from 'playwright';
import { createServer } from 'http';
import fs from 'fs';
import path from 'path';

// Simple static server for dist
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm'
};

const server = createServer((req, res) => {
  let urlPath = req.url.split('?')[0];
  let filePath = path.join(process.cwd(), 'dist', urlPath);

  // If path doesn't have an extension, serve index.html (SPA fallback)
  if (!path.extname(urlPath)) {
    filePath = path.join(process.cwd(), 'dist', 'index.html');
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    // SPA fallback
    const indexPath = path.join(process.cwd(), 'dist', 'index.html');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(indexPath).pipe(res);
  }
});

server.listen(4173, async () => {
  console.log('Static test server listening on http://localhost:4173');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', err => errors.push(err.message));

  console.log('\n--- 1. Testing /mission ---');
  await page.goto('http://localhost:4173/mission', { waitUntil: 'networkidle' });
  
  // Check header logo
  const logoSrc = await page.$eval('header img', el => el.src);
  console.log('Header logo src:', logoSrc);

  // Check mission nodes coordinates in DOM
  const nodeTransforms = await page.$$eval('#act-mission svg text', texts => 
    texts.map(t => t.textContent.trim()).filter(t => ['Clinicians', 'Hospitals', 'Diagnostics', 'Pharmacies', 'Patients'].includes(t))
  );
  console.log('Mission nodes found:', nodeTransforms);

  // Check manifesto text visibility
  const manifestoColor = await page.$eval('#mission-manifesto .manifesto-phrase', el => {
    const style = window.getComputedStyle(el);
    return { color: style.color, opacity: style.opacity, fontWeight: style.fontWeight };
  });
  console.log('Manifesto phrase computed style on load:', manifestoColor);

  console.log('\n--- 2. Testing /panacea ---');
  await page.goto('http://localhost:4173/panacea', { waitUntil: 'networkidle' });
  
  // Check live queue simulator
  const queueCards = await page.$$eval('[data-patient-card], div:has-text("Mr. Aarav Sharma")', els => els.length);
  const queueTitle = await page.$eval('h3:has-text("Live OPD Patient Queue Simulator")', el => el.textContent.trim()).catch(() => null);
  console.log('Live OPD Queue Title found:', queueTitle);

  // Click + Sim Influx
  const simBtn = await page.$('button:has-text("+ Sim Influx")');
  if (simBtn) {
    console.log('Found "+ Sim Influx" button! Clicking...');
    await simBtn.click();
    await page.waitForTimeout(500);
    const toast = await page.$eval('div:has-text("Simulation: Influx event added")', el => el.textContent.trim()).catch(() => null);
    console.log('Toast after influx:', toast);
  }

  console.log('\n--- 3. Testing /architecture ---');
  await page.goto('http://localhost:4173/architecture', { waitUntil: 'networkidle' });
  const archLabels = await page.$$eval('#act-architecture svg text', texts => 
    texts.map(t => t.textContent.trim()).filter(t => ['CURENEST (IPD)', 'PANACEA (OPD)', 'PHARMIXO (SUPPLY)', 'LABONIX (LABS)'].includes(t))
  );
  console.log('Architecture node labels found:', archLabels);

  console.log('\n--- 4. Testing /pulseport ---');
  await page.goto('http://localhost:4173/pulseport', { waitUntil: 'networkidle' });
  const pulseportKiosk = await page.$eval('svg text:has-text("PULSEPORT KIOSK")', el => el.textContent.trim()).catch(() => null);
  console.log('PulsePort Kiosk visual text found:', pulseportKiosk);

  console.log('\nErrors recorded:', errors);

  await browser.close();
  server.close();
  console.log('All local tests complete!');
});
