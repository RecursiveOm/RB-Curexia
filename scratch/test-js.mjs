import https from 'https';

https.get('https://rb-curexia.web.app/assets/index-Cq8crNh0.js', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Contains updateStarfieldVisibility:', data.includes('updateStarfieldVisibility'));
    console.log('Contains scroll check for hero:', data.includes('heroHeight'));
  });
});
