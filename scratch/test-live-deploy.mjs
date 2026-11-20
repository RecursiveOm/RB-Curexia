import https from 'https';

function checkUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({ statusCode: res.statusCode, headers: res.headers, body: data });
      });
    }).on('error', reject);
  });
}

async function testLive() {
  console.log('Testing live deployment at https://rb-curexia.web.app ...');
  const res = await checkUrl('https://rb-curexia.web.app');
  console.log('Status code:', res.statusCode);
  console.log('Body length:', res.body.length);
  
  const hasStarfield = res.body.includes('cosmic-starfield-canvas');
  const hasLenisCss = res.body.includes('lenis') || res.body.includes('assets/');
  console.log('Has cosmic starfield canvas in HTML:', hasStarfield);
  console.log('Assets linked:', hasLenisCss);

  // Extract asset paths
  const scriptMatch = res.body.match(/src="(\/assets\/[^"]+)"/);
  const cssMatch = res.body.match(/href="(\/assets\/[^"]+)"/);

  if (scriptMatch) {
    const scriptUrl = 'https://rb-curexia.web.app' + scriptMatch[1];
    const scriptRes = await checkUrl(scriptUrl);
    console.log(`Script ${scriptMatch[1]} status:`, scriptRes.statusCode, 'size:', scriptRes.body.length);
    const hasLenis = scriptRes.body.includes('lenis') || scriptRes.body.includes('Lenis');
    const hasStarfieldLogic = scriptRes.body.includes('cosmic-starfield-canvas');
    console.log('Script contains Lenis:', hasLenis);
    console.log('Script contains cosmic starfield logic:', hasStarfieldLogic);
  }

  if (cssMatch) {
    const cssUrl = 'https://rb-curexia.web.app' + cssMatch[1];
    const cssRes = await checkUrl(cssUrl);
    console.log(`CSS ${cssMatch[1]} status:`, cssRes.statusCode, 'size:', cssRes.body.length);
  }

  console.log('Live hosting verification complete!');
}

testLive().catch(err => {
  console.error('Test failed:', err);
  process.exit(1);
});
