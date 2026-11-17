import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = process.cwd();
const requiredFragments = [
  'src/legacy/layout/film-grain.html',
  'src/legacy/layout/opening-curtain.html',
  'src/legacy/layout/main-header.html',
  'src/legacy/layout/editorial-menu-overlay.html',
  'src/legacy/layout/modal-lightbox.html',
  ...['act-hero','act-mission','act-panacea','act-services','act-network','act-concierge']
    .map((id) => `src/legacy/sections/${id}.html`)
];
const requiredIds = [
  'act-hero','act-mission','act-panacea','act-services','act-network','act-concierge',
  'hero-canvas-stage','services-24-grid','concierge-form','newsletter-form','modal-lightbox'
];
const allFragments = [
  ...readdirSync(join(root, 'src/legacy/layout')).map((f) => join(root,'src/legacy/layout',f)),
  ...readdirSync(join(root, 'src/legacy/sections')).map((f) => join(root,'src/legacy/sections',f))
].map((p) => readFileSync(p, 'utf8')).join('\n');
const errors = [];
for (const file of requiredFragments) if (!existsSync(join(root,file))) errors.push(`Missing fragment: ${file}`);
for (const id of requiredIds) {
  if (!allFragments.includes(`id="${id}"`) && !allFragments.includes(`id='${id}'`)) errors.push(`Missing required DOM id: ${id}`);
}
if (/data:image\/[\w.+-]+;base64,/.test(allFragments)) errors.push('Embedded base64 images remain in markup fragments.');
const assetDir = join(root,'public/assets');
const assetFiles = new Set(readdirSync(assetDir));
for (const file of assetFiles) if (!existsSync(join(assetDir,file))) errors.push(`Missing asset: ${file}`);
for (const file of [...requiredFragments, 'src/legacy/legacyExperience.js']) {
  const text = readFileSync(join(root,file), 'utf8');
  for (const match of text.matchAll(/\/assets\/([^\"'\s)]+)/g)) {
    if (!assetFiles.has(match[1])) errors.push(`Missing referenced asset ${match[1]} in ${file}`);
  }
}
const js = readFileSync(join(root,'src/legacy/legacyExperience.js'),'utf8');
const servicesBlock = js.slice(js.indexOf('const ALL_24_SERVICES = ['), js.indexOf('const CLINICIAN_NODES = ['));
const serviceCount = (servicesBlock.match(/\{ id: '/g) || []).length;
if (serviceCount !== 24) errors.push(`Expected 24 service records, found ${serviceCount}.`);
const serviceMarkup = readFileSync(join(root,'src/legacy/sections/act-services.html'),'utf8');
for (const id of ['service-search-input','services-24-grid','featured-service-panel','spot-title']) {
  if (!serviceMarkup.includes(`id=\"${id}\"`)) errors.push(`Redesigned service explorer is missing ${id}.`);
}
if (!serviceMarkup.includes('Clinical support') || !serviceMarkup.includes('Analytics &amp; operations') || !serviceMarkup.includes('Core platforms')) errors.push('The three service pillars are not all present.');
const missionMarkup = readFileSync(join(root,'src/legacy/sections/act-mission.html'),'utf8');
if ((missionMarkup.match(/photo-replacement/g) || []).length !== 3) errors.push('Expected three replacement healthcare photos.');
if (!js.includes("from 'three'")) errors.push('Three.js module import is missing.');
if (!js.includes("from 'gsap/ScrollTrigger'")) errors.push('GSAP ScrollTrigger import is missing.');
if (!js.includes('submitContact(') || !js.includes('subscribeNewsletter(')) errors.push('Contact/newsletter backend handlers are not wired.');
const functions = readFileSync(join(root,'functions/index.js'),'utf8');
if (!functions.includes('export const submitContactInquiry') || !functions.includes('export const subscribeToNewsletter')) errors.push('Expected callable functions are missing.');
if (!functions.includes('enforceAppCheck: true')) errors.push('Callable functions are missing App Check enforcement.');
const rules = readFileSync(join(root,'firestore.rules'),'utf8');
if (!rules.includes('allow read, write: if false')) errors.push('Firestore default-deny rules are missing.');
const packageJson = JSON.parse(readFileSync(join(root,'package.json'),'utf8'));
if (packageJson.devDependencies?.vite?.startsWith('8') && packageJson.devDependencies?.['@vitejs/plugin-react'] !== '6.3.0') {
  errors.push('Vite 8 should use the pinned official @vitejs/plugin-react 6.3.0 release.');
}
if (errors.length) {
  console.error('Static verification failed:\n- ' + errors.join('\n- '));
  process.exit(1);
}
console.log(`Static verification passed. Checked ${requiredFragments.length} markup fragments, ${requiredIds.length} critical DOM IDs, backend exports, App Check, Firestore rules and external assets.`);
