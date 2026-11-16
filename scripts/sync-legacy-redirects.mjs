import { readFile, writeFile } from 'node:fs/promises';
import { buildLegacyRedirects } from '../src/seo/legacy-redirects.mjs';

const routes = new Set(JSON.parse(await readFile('src/seo/indexable-routes.json', 'utf8')));
const config = JSON.parse(await readFile('vercel.json', 'utf8'));
const kept = (config.redirects || []).filter(rule => rule.statusCode !== 301);
const legacy = buildLegacyRedirects(routes);
config.redirects = [...kept, ...legacy];
config.headers = [
  {
    source: '/:path*',
    has: [{ type: 'host', value: { re: '^(.*\\.)?vercel\\.app$' } }],
    headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
  },
];
await writeFile('vercel.json', JSON.stringify(config, null, 2) + '\n');
const pathRules = legacy.filter(rule => !rule.has).length;
const queryRules = legacy.filter(rule => rule.has).length;
console.log(`Legacy redirects: ${legacy.length} (${pathRules} paths, ${queryRules} WordPress ?p=). Total vercel redirects: ${config.redirects.length}.`);
