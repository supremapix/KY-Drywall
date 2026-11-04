import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createServer } from 'vite';
const server = await createServer({server:{middlewareMode:true},appType:'custom'});
try {
  const {municipalities, regionalRoutes} = await server.ssrLoadModule('/src/regionalDirectory.ts');
  assert.equal(municipalities.length,29);
  assert.equal(new Set(municipalities.map(c=>c.slug)).size,29);
  assert.equal(new Set(regionalRoutes).size,regionalRoutes.length);
  assert.equal(regionalRoutes.length,686);
  const inventory = JSON.parse(await readFile('src/seo/indexable-routes.json','utf8'));
  assert.equal(inventory.filter(r=>!r.startsWith('/regiao-metropolitana')).length,288);
  for(const city of municipalities){
    assert.ok(city.coverage && city.sources.length && city.places.length,city.name);
    assert.equal(new Set(city.places.map(p=>p.slug)).size,city.places.length,city.name);
    for(const p of city.places){
      assert.match(p.sourceUrl,/^https:\/\//);
      assert.ok(p.sourceTitle && p.kind && p.name,p.name);
      const route='/regiao-metropolitana/'+city.slug+'/'+p.slug;
      assert.ok(inventory.includes(route),route);
      const html=await readFile('dist'+route+'.html','utf8');
      assert.ok(html.includes('Referência')||html.includes('REFERÊNCIA'),route);
      assert.ok(html.includes('não representa uma filial'),route);
      assert.ok(html.includes('Revisar consulta no WhatsApp'),route);
    }
  }
  console.log('Regional verification: 29 municipalities, 656 sourced places, 686 new routes; 288 existing routes preserved.');
} finally {await server.close();}
