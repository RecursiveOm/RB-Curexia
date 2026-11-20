import puppeteer from 'puppeteer';

async function testLiveBrowser() {
  console.log('Launching headless browser to test https://rb-curexia.web.app ...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const consoleLogs = [];
  page.on('console', msg => {
    consoleLogs.push(`[${msg.type()}] ${msg.text()}`);
  });

  page.on('pageerror', err => {
    console.error('Page error:', err.message);
  });

  console.log('Navigating to https://rb-curexia.web.app ...');
  await page.goto('https://rb-curexia.web.app', { waitUntil: 'networkidle2', timeout: 30000 });

  // Check canvas existence
  const starfieldExists = await page.evaluate(() => {
    const canvas = document.getElementById('cosmic-starfield-canvas');
    return !!canvas && canvas.width > 0 && canvas.height > 0;
  });
  console.log('Cosmic Starfield Canvas active on live site:', starfieldExists);

  // Check Lenis
  const lenisSmoothActive = await page.evaluate(() => {
    return document.documentElement.classList.contains('lenis') || document.body.classList.contains('lenis');
  });
  console.log('Lenis smooth scrolling active:', lenisSmoothActive);

  // Take screenshot of hero
  await page.screenshot({ path: 'scratch/live_hero_sky.png' });
  console.log('Saved live hero screenshot to scratch/live_hero_sky.png');

  // Scroll down to Our Mission and take screenshot
  await page.evaluate(() => {
    const mission = document.getElementById('act-mission');
    if (mission) mission.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: 'scratch/live_mission_sky.png' });
  console.log('Saved live mission screenshot to scratch/live_mission_sky.png');

  // Scroll down to Architecture and take screenshot
  await page.evaluate(() => {
    const arch = document.getElementById('act-services');
    if (arch) arch.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: 'scratch/live_architecture_sky.png' });
  console.log('Saved live architecture screenshot to scratch/live_architecture_sky.png');

  console.log('Recent console logs (last 5):');
  console.log(consoleLogs.slice(-5).join('\n'));

  await browser.close();
  console.log('Live browser verification successfully completed!');
}

testLiveBrowser().catch(err => {
  console.error('Browser test failed:', err);
  process.exit(1);
});
