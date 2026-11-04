import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, MapPin, MessageCircle, Clock, Plus, Minus, Phone } from 'lucide-react';
import { SERVICES, BLOG_POSTS, PRODUCTS, CATEGORIES, BASE_URL, COMPANY_INFO, SITE_ASSETS, NEIGHBORHOODS, CITIES_RMC, normalizeLocationName } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';
import ProductCard from '../components/ProductCard';
import './HomeRedesign.css';

const questions = [
  ['Como pedir uma cotação?', 'Envie sua lista de materiais, as quantidades previstas e o endereço da obra. Se tiver projeto, converse com a equipe sobre os documentos necessários. Preços, disponibilidade, frete e prazo são confirmados no atendimento.'],
  ['Qual material devo usar na minha obra?', 'A escolha depende do ambiente, da aplicação e das especificações do projeto. Informe se o uso é interno ou externo e consulte a ficha técnica do fabricante. Dimensionamento e desempenho devem ser validados pelo responsável técnico.'],
  ['Posso retirar os materiais na loja?', 'Converse com a equipe para confirmar os itens disponíveis, a separação do pedido e as condições de retirada na loja do Cajuru.'],
  ['A KY atende outras cidades?', 'A loja fica em Curitiba. Para atendimento na Região Metropolitana, informe o endereço e consulte as condições de entrega, frete e prazo.'],
];
export default function Home() {
  const [category, setCategory] = useState('Placas');
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);
  const featured = PRODUCTS.filter(p => p.category === category).slice(0, 4);
  const whatsapp = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Olá! Vim pelo site e gostaria de consultar materiais para minha obra.')}`;
  return <div className="ky-new-home">
    <EnhancedSEO title="KY Drywall & Steel Frame | Materiais em Curitiba" description="Sua loja de materiais para Drywall, Steel Frame e construção a seco no Cajuru, Curitiba. Conheça o catálogo e consulte a equipe sobre sua obra." canonical={BASE_URL} ogImage={`${BASE_URL}/og-ky-drywall.png`} />
    <section className="ky-r-hero" aria-labelledby="ky-home-title">
      <div className="ky-r-hero-copy">
        <span className="ky-r-kicker"><span /> CAJURU, CURITIBA</span>
        <h1 id="ky-home-title">Sua obra<br />começa <em>aqui.</em></h1>
        <p className="ky-r-hero-subtitle">Drywall. Steel Frame.<br />Materiais para construir a seco.</p>
        <p className="ky-r-hero-description">Da estrutura ao acabamento, encontre os materiais e converse com quem está perto da sua obra.</p>
        <div className="ky-r-hero-actions"><a className="ky-r-btn" href={whatsapp} target="_blank" rel="noreferrer">Pedir uma cotação <ArrowUpRight size={20}/></a><Link className="ky-r-text-link" to="/produtos">Conhecer o catálogo <ArrowRight size={18}/></Link></div>
        <a className="ky-r-hero-phone" href="tel:+554135284232"><Phone size={17}/> {COMPANY_INFO.phone}</a>
      </div>
      <figure className="ky-r-hero-photo"><img src={SITE_ASSETS.storefront} alt="Fachada real da loja KY Drywall na Rodovia BR-277, no Cajuru, Curitiba" fetchPriority="high" width="1824" height="1361"/><figcaption><div><span>VENHA CONHECER A KY</span><strong>Rod. BR-277, 3641 · Cajuru</strong></div><a href={COMPANY_INFO.mapsUrl} target="_blank" rel="noreferrer" aria-label="Ver endereço da KY no mapa"><ArrowUpRight size={25}/></a></figcaption></figure>
    </section>
    <div className="ky-r-visit"><p><Clock size={19}/><span><strong>Planeje sua visita</strong> Seg. a sex. 7h30–17h30 · Sáb. 7h30–12h</span></p><p><MapPin size={19}/><span>Loja física em Curitiba · Entrega sob consulta</span></p></div>

    <section className="ky-r-section ky-r-catalog" aria-labelledby="catalog-heading">
      <div className="ky-r-section-heading"><div><span className="ky-r-kicker">01 / MATERIAIS</span><h2 id="catalog-heading">O que a sua<br/>obra precisa?</h2></div><div><p>Placas, perfis e complementos para cada etapa. Explore o catálogo e monte sua lista de cotação.</p><Link className="ky-r-text-link" to="/produtos">Ver todos os materiais <ArrowUpRight size={20}/></Link></div></div>
      <div className="ky-r-category-tabs" aria-label="Categorias de materiais">{['Placas','Perfis','Massas','Lã (Isolamento)'].map(c=><button key={c} type="button" onClick={()=>setCategory(c)} aria-pressed={category===c}>{c}<ArrowUpRight size={17}/></button>)}</div>
      <div className="ky-r-products">{featured.map(product=><ProductCard key={product.id} product={product}/>)}</div>
      <p className="ky-r-note">Imagens do catálogo. Consulte modelos, medidas e disponibilidade com a equipe antes da compra.</p>
    </section>

    <section className="ky-r-systems" aria-labelledby="systems-heading"><div className="ky-r-section-heading"><div><span className="ky-r-kicker">02 / SISTEMAS CONSTRUTIVOS</span><h2 id="systems-heading">Uma solução<br/>para cada projeto.</h2></div><p>Conheça as aplicações e os materiais de cada sistema. A especificação deve seguir seu projeto e a orientação do responsável técnico.</p></div><div className="ky-r-system-grid">{SERVICES.slice(0,3).map((service,index)=><Link to={`/servicos/${service.id}`} key={service.id} className="ky-r-system"><div className="ky-r-system-image"><img src={service.image} alt={service.title} loading="lazy"/><span>0{index+1}</span></div><div><h3>{service.title}</h3><ArrowUpRight size={28}/></div><p>Conheça aplicações, componentes e cuidados para planejar sua obra.</p></Link>)}</div><Link to="/servicos" className="ky-r-text-link">Explorar todos os sistemas <ArrowRight size={20}/></Link></section>

    <section className="ky-r-project"><div><span className="ky-r-kicker">03 / VAMOS CONVERSAR</span><h2>Uma boa compra<br/>começa com<br/><em>um bom plano.</em></h2><p>Traga sua lista ou envie as informações da obra. A equipe da KY ajuda você a consultar os materiais e organizar a cotação.</p><a className="ky-r-btn ky-r-btn-light" href={whatsapp} target="_blank" rel="noreferrer">Falar com a equipe <ArrowUpRight size={20}/></a></div><ol>{[['Seu projeto','Informe o sistema, a aplicação, as medidas e o ambiente da obra.'],['Sua lista','Compartilhe os itens e quantidades. Confirme especificações com o responsável técnico.'],['Sua entrega','Informe o endereço para consultar disponibilidade, frete, prazo e condições de descarga.']].map(([title,copy],index)=><li key={title}><span>0{index+1}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol></section>

    <section className="ky-r-section ky-r-guides"><div className="ky-r-section-heading"><div><span className="ky-r-kicker">04 / PARA PLANEJAR MELHOR</span><h2>Informação antes<br/>de colocar a mão na obra.</h2></div><Link className="ky-r-text-link" to="/blog">Ler todos os artigos <ArrowUpRight size={20}/></Link></div><div className="ky-r-guide-grid">{BLOG_POSTS.slice(0,3).map(post=><Link to={`/blog/${post.id}`} key={post.id}><img src={post.img} alt={post.imageAlt || post.title} loading="lazy"/><small className="ky-image-caption">{post.imageCaption}</small><span>{post.tag}</span><h3>{post.title}</h3><p>{post.excerpt}</p><strong>Ler guia <ArrowUpRight size={18}/></strong></Link>)}</div></section>

    <section className="ky-r-faq"><div><span className="ky-r-kicker">05 / PODE PERGUNTAR</span><h2>Antes de<br/>começar.</h2><Link className="ky-r-text-link" to="/faq">Todas as dúvidas <ArrowUpRight size={20}/></Link></div><div>{questions.map(([q,a],index)=><div className="ky-r-question" key={q}><button type="button" aria-expanded={openQuestion===index} aria-controls={`ky-answer-${index}`} onClick={()=>setOpenQuestion(openQuestion===index?null:index)}><span>{q}</span>{openQuestion===index?<Minus size={22}/>:<Plus size={22}/>}</button><p id={`ky-answer-${index}`} hidden={openQuestion!==index}>{a}</p></div>)}</div></section>

    <section className="ky-r-regions"><span className="ky-r-kicker">PERTO DA SUA OBRA</span><h2>Curitiba e Região Metropolitana.</h2><p>Um endereço físico, no Cajuru. Consulte atendimento e entrega para seu bairro ou cidade.</p><div>{['Cajuru','Água Verde','Boqueirão','Centro',...CITIES_RMC.filter(c=>c!=='Curitiba').slice(0,5)].map(name=><Link key={name} to={`/drywall-em/${normalizeLocationName(name)}`}>{name} <ArrowUpRight size={15}/></Link>)}</div><Link to="/sitemap" className="ky-r-text-link">Ver todas as localidades <ArrowRight size={18}/></Link></section>
  </div>;
}
