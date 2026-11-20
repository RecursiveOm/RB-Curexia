import https from 'https';

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function verify() {
  console.log('Fetching https://rb-curexia.web.app/...');
  const html = await fetchUrl('https://rb-curexia.web.app/');
  
  const jsMatch = html.match(/src="(\/assets\/index-[^"]+\.js)"/);
  const cssMatch = html.match(/href="(\/assets\/index-[^"]+\.css)"/);

  if (!jsMatch || !cssMatch) {
    console.error('Failed to locate bundles in HTML:', html);
    process.exit(1);
  }

  const jsUrl = `https://rb-curexia.web.app${jsMatch[1]}`;
  const cssUrl = `https://rb-curexia.web.app${cssMatch[1]}`;
  console.log('Live JS bundle:', jsUrl);
  console.log('Live CSS bundle:', cssUrl);

  const jsCode = await fetchUrl(jsUrl);
  console.log(`Downloaded JS bundle: ${(jsCode.length / 1024).toFixed(1)} KB`);

  const checks = [
    ['rbcurexia-monogram-4k.webp', '4K RB Monogram in header & footer'],
    ['Live OPD Patient Queue Simulator', 'Live OPD Queue Simulator Title'],
    ['+ Sim Influx', 'Sim Influx Button'],
    ['Mr. Aarav Sharma', 'Patient Aarav Sharma in queue'],
    ['Ms. Priya Kapoor', 'Patient Priya Kapoor in queue'],
    ['PULSEPORT KIOSK', 'PulsePort visual kiosk'],
    ['MEDICORE WATCH', 'Medicore Watch visual'],
    ['Clinicians', 'Mission node Clinicians'],
    ['CURENEST (IPD)', 'Architecture node CureNest'],
    ['PANACEA (OPD)', 'Architecture node Panacea'],
    ['PHARMIXO (SUPPLY)', 'Architecture node Pharmixo'],
    ['LABONIX (LABS)', 'Architecture node Labonix'],
    ['Longitudinal EHR Dossiers', 'Panacea visual dossier card'],
    ['Potential Drug Interaction', 'Panacea drug warning card']
  ];

  let passed = 0;
  for (const [pattern, label] of checks) {
    const ok = jsCode.includes(pattern);
    console.log(`[${ok ? 'PASS' : 'FAIL'}] ${label}`);
    if (ok) passed++;
  }

  console.log(`\nVerification Score: ${passed}/${checks.length} passed.`);
  if (passed === checks.length) {
    console.log('All checks passed flawlessly on live deployment!');
  } else {
    process.exit(1);
  }
}

verify().catch(console.error);
