import { chromium } from 'playwright';
import fs from 'node:fs';
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const results = [];
for (const width of [320,390,1440]) {
  const page = await browser.newPage({viewport:{width,height:900}, reducedMotion:'reduce'});
  const errors = [];
  page.on('pageerror', e=>errors.push(e.message));
  await page.goto('http://127.0.0.1:3005', {waitUntil:'networkidle'});
  await page.screenshot({path:`audit/home-${width}.png`});
  const overflow = await page.evaluate(()=>document.documentElement.scrollWidth > innerWidth);
  await page.keyboard.press('Tab');
  const skip = await page.locator(':focus').textContent();
  if(skip !== 'Pular para o conteúdo') errors.push('Skip link is not first');
  if(width < 1000) {
    await page.getByRole('button',{name:'Abrir menu de navegação'}).click();
    await page.keyboard.press('Shift+Tab');
    const trapped = await page.evaluate(()=>Boolean(document.activeElement.closest('[role="dialog"]')));
    if(!trapped) errors.push('Menu focus escaped');
    await page.keyboard.press('Escape');
  }
  await page.evaluate(()=>scrollTo(0,2000));
  await page.getByRole('button',{name:'Voltar ao topo',exact:true}).waitFor();
  const top = await page.getByRole('button',{name:'Voltar ao topo',exact:true}).boundingBox();
  await page.getByRole('button',{name:'Voltar ao topo',exact:true}).click();
  if(await page.evaluate(()=>scrollY)>0) errors.push('Back to top failed');
  await page.getByRole('button',{name:'Atendimento no WhatsApp',exact:true}).click();
  await page.screenshot({path:`audit/whatsapp-${width}.png`});
  await page.getByRole('button',{name:'Atendimento no WhatsApp',exact:true}).click();
  await page.evaluate(()=>scrollTo(0,document.body.scrollHeight));
  await page.screenshot({path:`audit/footer-${width}.png`});
  await page.getByRole('button',{name:'Aumentar texto',exact:true}).click();
  if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth)) errors.push('Large text overflow');
  await page.getByRole('button',{name:'Texto padrão',exact:true}).click();
  await page.evaluate(()=>scrollTo(0,document.body.scrollHeight));
  const notice = await page.getByRole('button',{name:'Entendi',exact:true}).boundingBox();
  const floating = await page.getByRole('button',{name:'Voltar ao topo',exact:true}).boundingBox();
  if(notice && floating && notice.y+notice.height>floating.y) errors.push('Notice overlaps floating controls');
  results.push({width,overflow,skip,top,errors});
  await page.goto('http://127.0.0.1:3005/links',{waitUntil:'networkidle'});
  await page.evaluate(()=>scrollTo(0,document.body.scrollHeight));
  const linksTop=await page.getByRole('button',{name:'Voltar ao topo',exact:true}).count();
  results.at(-1).linksTop=linksTop;
  for(const route of ['/servicos','/servicos/drywall','/produtos','/contato','/drywall-em/cajuru']) {
    await page.goto('http://127.0.0.1:3005'+route,{waitUntil:'networkidle'});
    if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth)) errors.push('Overflow '+route);
  }
  await page.close();
}
await browser.close();
fs.writeFileSync('audit/browser-results.json',JSON.stringify(results,null,2));
console.log(JSON.stringify(results,null,2));
if(results.some(r=>r.overflow||r.errors.length||r.top.width<48||r.top.height<48||!r.linksTop))process.exitCode=1;

