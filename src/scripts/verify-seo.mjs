import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
const origin = 'https://www.kydrywall.com.br';
const xml = await readFile('dist/sitemap.xml', 'utf8');
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
assert.equal(new Set(urls).size, urls.length);
for (const url of urls) {
  const route = new URL(url).pathname;
  const html = await readFile(route === '/' ? 'dist/index.html' : `dist${route}.html`, 'utf8');
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, url);
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1, url);
  assert.ok(html.includes(`<link rel="canonical" href="${url}">`), url);
  assert.ok(!html.includes('content="noindex'), url);
  const graph = JSON.parse(html.match(/<script id="ky-schema" type="application\/ld\+json">(.*?)<\/script>/)[1])['@graph'];
  const organizations = graph.filter(node => node['@id'] === `${origin}/#organization`);
  assert.equal(organizations.length, 1, url);
  assert.deepEqual(organizations[0].address, { '@type': 'PostalAddress', streetAddress: 'Rod. BR-277, 3641 - Cajuru', addressLocality: 'Curitiba', addressRegion: 'PR', postalCode: '81480-270', addressCountry: 'BR' });
  assert.ok(!/"(?:availability|aggregateRating|review)":/.test(JSON.stringify(graph)), url);
}
const links = await readFile('dist/links.html', 'utf8');
for (const href of ['https://instagram.com/kydrywall', 'https://wa.me/5541996457421', 'https://wa.me/5541999067259', '/qr-ky-links.svg']) assert.ok(links.includes(`href="${href}"`));
assert.ok(links.includes('download="KY-Drywall-QR-Code.svg"'));
assert.ok((await readFile('dist/404.html', 'utf8')).includes('content="noindex, follow"'));
console.log(`${urls.length} sitemap routes verified: canonical, H1, entity/NAP, schemas; official links and 404 verified.`);
