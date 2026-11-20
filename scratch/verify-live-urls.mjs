const routes = [
  '/',
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
  '/404',
  '/unknown-test-route'
];

const baseUrl = 'https://rb-curexia.web.app';

async function checkAll() {
  console.log(`Checking ${routes.length} live routes against ${baseUrl}...\n`);
  let allPassed = true;

  for (const r of routes) {
    const url = `${baseUrl}${r}`;
    try {
      const res = await fetch(url);
      const isOk = res.status === 200;
      const contentType = res.headers.get('content-type');
      console.log(`${isOk ? '✓' : '✗'} [${res.status}] ${url.padEnd(46)} | Content-Type: ${contentType}`);
      if (!isOk) allPassed = false;
    } catch (err) {
      console.error(`✗ [ERROR] ${url}: ${err.message}`);
      allPassed = false;
    }
  }

  console.log(`\nAll routes returned 200 OK: ${allPassed ? 'YES' : 'NO'}`);
  process.exit(allPassed ? 0 : 1);
}

checkAll();
