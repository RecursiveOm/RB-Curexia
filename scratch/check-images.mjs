import https from 'https';

const images = [
  'https://rb-curexia.web.app/assets/rbcurexia-monogram-4k.webp',
  'https://rb-curexia.web.app/assets/rbcurexia-logo-4k.webp',
  'https://rb-curexia.web.app/assets/rbcurexia-logo-4k.png'
];

async function check() {
  for (const img of images) {
    await new Promise((resolve) => {
      https.get(img, (res) => {
        console.log(`[${res.statusCode}] ${img} (${res.headers['content-type']}, ${res.headers['content-length']} bytes)`);
        resolve();
      });
    });
  }
}

check();
