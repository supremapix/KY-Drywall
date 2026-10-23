import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import fs from 'node:fs';
const browser=await chromium.launch({channel:'chrome',headless:true});
const results=[];
const routes=['/','/empresa','/servicos','/servicos/drywall','/steel-frame','/produtos','/produto/m1','/contato','/blog','/blog/b1','/faq','/sitemap','/links','/drywall-em/cajuru','/not-a-page'];
for(const width of [320,390,1440]){
 const context=await browser.newContext({viewport:{width,height:1000},reducedMotion:'reduce'});
 const page=await context.newPage();
 for(const route of routes){
  await page.goto('http://127.0.0.1:3005'+route,{waitUntil:'networkidle'});
  const issues=[];
  if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth))issues.push('horizontal overflow');
  const darkSurfaces=await page.locator('section,footer,header,main').evaluateAll(nodes=>nodes.filter(el=>{const c=getComputedStyle(el).backgroundColor.match(/[\d.]+/g)?.map(Number);return c&&c.length>=3&&(c.length<4||c[3]>0.8)&&Math.max(...c.slice(0,3))<180}).map(el=>el.className));
  if(darkSurfaces.length)issues.push({darkSurfaces});
  const audit=await new AxeBuilder({page}).withRules(['color-contrast','button-name','link-name','image-alt']).analyze();
  const violations=audit.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary})).slice(0,12)}));
  if(route==='/'){
   const photo=page.locator('.ky-store-facade img');
   await photo.scrollIntoViewIfNeeded();
   const image=await photo.evaluate(el=>({loaded:el.complete&&el.naturalWidth>0,ratio:el.width/el.height,naturalRatio:el.naturalWidth/el.naturalHeight}));
   if(!image.loaded||Math.abs(image.ratio-image.naturalRatio)>.02)issues.push({image});
   await page.locator('.ky-store-hero').screenshot({path:`audit/hero-light-${width}.png`});
   if(width<1000){
    await page.getByRole('button',{name:'Abrir menu de navegação'}).click();
    const menuAudit=await new AxeBuilder({page}).withRules(['color-contrast','button-name','link-name']).analyze();
    for(const v of menuAudit.violations)violations.push({id:'menu:'+v.id,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))});
    await page.keyboard.press('Escape');
   }
   await page.getByRole('button',{name:'Atendimento no WhatsApp',exact:true}).click();
   const contactAudit=await new AxeBuilder({page}).withRules(['color-contrast','button-name','link-name']).analyze();
   for(const v of contactAudit.violations)violations.push({id:'whatsapp:'+v.id,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))});
   await page.keyboard.press('Escape');
  }
  results.push({width,route,issues,violations});
 }
 await context.close();
}
await browser.close();
fs.writeFileSync('audit/light-theme-results.json',JSON.stringify(results,null,2));
const failures=results.filter(r=>r.issues.length||r.violations.length);
console.log(JSON.stringify({checked:results.length,failures},null,2));
if(failures.length)process.exitCode=1;
