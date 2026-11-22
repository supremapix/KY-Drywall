import React,{useEffect,useRef} from 'react';
import {Link} from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';
import {BASE_URL} from '../constants';
import './DrywallHistory.css';

const route='/blog/historia-do-drywall';
const title='História do drywall e do Light Steel Frame';
const description='Da patente de 1894 aos perfis estruturais de aço: conheça as duas histórias, sua adoção no Brasil e onde a construção a seco pode ganhar tempo.';
const hero='/guias-ky/drywall-construcao-a-seco.webp';
const og='/guias-ky/historia-drywall-og.jpg';
const sources=[
  {name:'Patente US520123A, Augustine Sackett',url:'https://patents.google.com/patent/US520123A/en'},
  {name:'História dos painéis de gesso, USG',url:'https://www.usg.com/en-US/about-usg/history'},
  {name:'Evolução do painel em 1916, CGC',url:'https://assemblies-tools.usg.com/content/usgcom/en_CA_east/about-cgc/history-of-cgc.html'},
  {name:'Drywall no Brasil, Associação Brasileira do Drywall',url:'https://drywall.org.br/drywall-no-brasil-reflexoes-tecnologicas-2/'},
  {name:'História dos perfis de aço conformados a frio, CFSEI',url:'https://www.cfsei.org/history'},
  {name:'Guia de estruturas em aço conformado a frio, NIST',url:'https://nvlpubs.nist.gov/nistpubs/gcr/2016/NIST.GCR.16-917-38.pdf'},
  {name:'Relatório de Atividades 2024, CBCA',url:'https://www.cbca-acobrasil.org.br/upfiles/downloads/relatorios/CBCA_Relatorio-de-Atividades_2024.pdf'},
];
const timeline=[
 ['1894','Uma patente para revestir paredes por dentro','Augustine Sackett patenteou uma placa rígida feita de camadas alternadas de papel e gesso. Era uma alternativa ao revestimento aplicado sobre ripas, não a parede de drywall que se especifica hoje.',0],
 ['1909','A produção passa à USG','A United States Gypsum adquiriu a Sackett Plaster Board Company. O produto ainda era um painel multicamadas; a compra não foi a invenção da primeira placa.',1],
 ['1916–1917','Uma chapa mais próxima da atual','A CGC registra em 1916 um avanço que permitiu unir painéis de maneira mais nivelada. A USG registra o lançamento do painel Sheetrock® em 1917. Sheetrock é marca; drywall é o nome do sistema.',2],
 ['Anos 1970','A primeira fábrica brasileira de chapas','Segundo a Associação Brasileira do Drywall, a fabricação nacional de chapas de gesso acartonado começou nessa década. A possibilidade de comprar a chapa no país ainda não significava adoção ampla.',3],
 ['Anos 1990','A construção a seco ganha espaço no Brasil','A associação destaca que a busca pela industrialização da construção acelerou a incorporação do drywall na década de 1990. A chapa passou a ser pensada junto de perfis, fixações, juntas e demais componentes.',3],
] as const;
const faq=[
 ['Por que o nome drywall?','A expressão remete à montagem com chapas prontas, sem erguer a parede pela sequência de tijolo e argamassa. Ainda há tratamento de juntas e acabamento; a expressão não significa obra sem massa, poeira ou umidade.'],
 ['Drywall e Steel Frame são a mesma coisa?','Não. O drywall é usado para paredes internas, forros e revestimentos conforme o sistema especificado. O Light Steel Frame é um sistema construtivo que pode exercer função estrutural; o drywall pode fazer parte dos seus fechamentos internos.'],
 ['Uma chapa verde torna a parede impermeável?','Não. Chapas resistentes à umidade não substituem a impermeabilização exigida para a situação. A exposição à água e o detalhe de projeto determinam quais componentes e proteções usar.'],
 ['O que levar para cotar drywall em Curitiba?','Leve medidas, fotos e o uso do ambiente. Indique portas, instalações, armários e se a prioridade é privacidade acústica, resistência à umidade ou passagem de instalações. A KY fica no Cajuru; confirme materiais, condições de entrega e disponibilidade com a loja.'],
] as const;
function Stamp({stack=false}:{stack?:boolean}){return <svg aria-hidden="true" width="56" height="56" viewBox="0 0 56 56" fill="none"><rect x="3" y="3" width="50" height="50" rx="15" fill="#fff1ef"/><path d={stack?'M12 24l16-9 16 9-16 9-16-9zm0 7l16 9 16-9m-32 7l16 9 16-9':'M16 41V15h24v26H16zm6-26v26m12-26v26m-18-15h24'} stroke="#a82024" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>}
export default function DrywallHistory(){
 const article=useRef<HTMLElement>(null);
 useEffect(()=>{
  if(!article.current||typeof IntersectionObserver==='undefined'||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const observer=new IntersectionObserver(items=>{items.forEach(({isIntersecting,target})=>{if(isIntersecting){target.classList.add('kyh-in');observer.unobserve(target)}})},{threshold:.14});
  article.current.querySelectorAll('[data-kyh-reveal]').forEach(node=>observer.observe(node));
  return ()=>observer.disconnect();
 },[]);
 const url=BASE_URL+route;
 return <main className="kyh" ref={article}>
  <EnhancedSEO title={title} description={description} canonical={url} ogImage={og} ogType="article" schema={{'@type':'BlogPosting',headline:title,description,datePublished:'2026-11-22',author:{'@type':'Organization',name:'KY Drywall & Steel Frame',url:BASE_URL},image:BASE_URL+og,mainEntityOfPage:url,citation:sources.map(x=>x.url)}}/>
  <div className="kyh-wrap">
   <nav aria-label="Breadcrumb"><Link to="/">Início</Link> / <Link to="/blog">Blog</Link> / História do drywall</nav>
   <header className="kyh-hero">
    <div><p className="kyh-kicker"><Stamp/> HISTÓRIA DA CONSTRUÇÃO A SECO</p><h1>{title}</h1><p className="kyh-lead">O drywall não surgiu de uma vez. A patente de uma placa de papel e gesso, as mudanças industriais nos EUA e a fabricação nacional explicam como a obra ganhou outra maneira de dividir e organizar espaços.</p><a className="kyh-button" href="#linha-do-tempo">Ver linha do tempo</a></div>
    <figure><img src={hero} width="1200" height="675" alt="Instalador diante de uma estrutura metálica leve e chapa de gesso" decoding="async"/><figcaption>Ilustração gerada por IA. Não representa obra da KY Drywall.</figcaption></figure>
   </header>
   <section id="linha-do-tempo" aria-labelledby="kyh-time"><p className="kyh-kicker">05 MARCOS</p><h2 id="kyh-time">Da patente de Sackett à fabricação no Brasil</h2>
    <ol className="kyh-timeline">{timeline.map(([year,heading,copy,source])=><li key={year} data-kyh-reveal><strong>{year}</strong><div><h3>{heading}</h3><p>{copy}</p><a href={sources[source].url}>Fonte: {sources[source].name}</a></div></li>)}</ol>
   </section>
   <section className="kyh-grid" aria-labelledby="kyh-today"><div><p className="kyh-kicker"><Stamp stack/> CURIOSIDADES</p><h2 id="kyh-today">A placa é só uma parte da parede</h2><p>Perfis, placas, fixações, juntas e, quando previsto, o preenchimento da cavidade formam um conjunto. Por isso duas paredes que parecem iguais por fora podem ter comportamentos diferentes em relação a ruído, umidade e cargas.</p><p>Uma vantagem de planejar antes do fechamento é decidir onde passar instalações e onde prever apoios. Quer fixar um armário ou uma TV? Informe os pontos e as cargas antes de escolher a solução.</p><p>Em Curitiba e na RMC, separe as medidas por ambiente antes de cotar. A KY Drywall atende no Cajuru; confirme o escopo de fornecimento e as condições para o seu endereço.</p></div><figure data-kyh-reveal><img src="/guias-ky/camadas-parede-drywall.webp" width="1200" height="675" alt="Parede de drywall seccionada com placas de gesso, perfis metálicos e preenchimento na cavidade" loading="lazy" decoding="async"/><figcaption>Ilustração gerada por IA. Não é desenho de montagem nem especificação técnica.</figcaption></figure></section>
   <section id="historia-light-steel-frame" aria-labelledby="kyh-lsf"><p className="kyh-kicker"><Stamp/> AÇO LEVE ESTRUTURAL</p><h2 id="kyh-lsf">O Light Steel Frame tem outra história</h2>
    <p>Enquanto o drywall desenvolvia revestimentos e divisórias, outra linha de pesquisa buscava usar perfis finos de aço como parte da estrutura do edifício. As duas técnicas se encontram no canteiro, mas não fazem o mesmo trabalho.</p>
    <ol className="kyh-timeline">
     <li data-kyh-reveal><strong>1933</strong><div><h3>Casas com estrutura de aço em Chicago</h3><p>Na exposição Century of Progress, uma casa apresentada como moradia do futuro usava estrutura de aço. A feira é um marco documentado, não a data de invenção de todo o sistema moderno.</p><a href={sources[4].url}>Fonte: CFSEI</a></div></li>
     <li data-kyh-reveal><strong>1946</strong><div><h3>Primeira especificação do AISI</h3><p>Pesquisas em Cornell sobre perfis conformados a frio deram base à primeira especificação do American Iron and Steel Institute. A engenharia dos elementos passou a ter um referencial próprio de cálculo.</p><a href={sources[5].url}>Fonte: NIST</a></div></li>
     <li data-kyh-reveal><strong>Brasil · 2023</strong><div><h3>Uma cadeia produtiva que já pode ser medida</h3><p>O CBCA registrou 107,6 mil toneladas de perfis fabricados em 2023 pelas empresas participantes da pesquisa, somando Light Steel Frame e drywall. O número não é exclusivo de Steel Frame nem indica a participação desses sistemas no total das obras brasileiras.</p><a href={sources[6].url}>Fonte: CBCA</a></div></li>
    </ol>
   </section>
   <section className="kyh-grid" aria-labelledby="kyh-gains"><div><p className="kyh-kicker"><Stamp stack/> ANTES DE COMPARAR ORÇAMENTOS</p><h2 id="kyh-gains">Onde a construção a seco pode economizar</h2><p><strong>Tempo:</strong> estudo prévio e fabricação de painéis fora do canteiro podem acontecer enquanto se prepara a base. Mudanças tardias, falta de equipe, transporte ou atraso nos insumos podem reduzir essa vantagem.</p><p><strong>Bagunça:</strong> peças pré-cortadas podem reduzir cortes, sobras e etapas úmidas no local. Ainda há fundação, acabamento e resíduos a recolher; a obra não é livre de sujeira.</p><p><strong>Custo:</strong> compare projetos com o mesmo escopo. Inclua fundação, frete, proteção contra água, conforto térmico e acústico, acabamentos e mão de obra. O sistema não é automaticamente mais barato, e desempenho depende da solução especificada.</p></div><figure data-kyh-reveal><img src="/guias-ky/estrutura-light-steel-frame.webp" width="1200" height="675" alt="Estrutura de aço leve com perfis e vãos de uma construção em andamento" loading="lazy" decoding="async"/><figcaption>Ilustração gerada por IA. Não representa obra da KY nem substitui projeto estrutural.</figcaption></figure></section>
   <section className="kyh-faq" aria-labelledby="kyh-faq"><p className="kyh-kicker">RESPOSTAS DIRETAS</p><h2 id="kyh-faq">Perguntas sobre drywall e construção a seco</h2>{faq.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>
   <section className="kyh-end" aria-labelledby="kyh-next"><h2 id="kyh-next">Veja o que a KY oferece para sua obra</h2><p>Consulte o catálogo ou separe suas dúvidas de material, instalação e entrega antes de falar com a equipe.</p><div><Link className="kyh-button" to="/servicos/drywall">Conhecer drywall</Link><Link className="kyh-secondary" to="/steel-frame">Conhecer Steel Frame</Link><Link className="kyh-secondary" to="/produtos">Ver materiais</Link><Link className="kyh-secondary" to="/contato">Falar com a KY</Link></div></section>
   <aside className="kyh-sources"><h2>Fontes e nota editorial</h2><p>Publicado em 22 de novembro de 2026. Os marcos históricos não são instruções de instalação. A especificação depende do projeto e dos requisitos do ambiente.</p><ul>{sources.map(s=><li key={s.url}><a href={s.url}>{s.name}</a></li>)}</ul></aside>
  </div>
 </main>
}
