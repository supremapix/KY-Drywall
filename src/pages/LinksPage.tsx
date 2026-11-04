import React from 'react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';
import { BASE_URL, COMPANY_INFO, SITE_ASSETS } from '../constants';
import { ArrowUpRight, ArrowLeft, Instagram, MessageCircle, MapPin, Download, Phone, Package, BookOpen } from 'lucide-react';
import './LinksRedesign.css';

export default function LinksPage() {
  const contacts = [
    { name: 'Carlos', detail: 'Converse sobre sua lista de materiais', number: COMPANY_INFO.whatsapp },
    { name: 'Lucilene', detail: 'Consulte produtos e condições de atendimento', number: COMPANY_INFO.whatsappLucilene },
  ];
  return <div className="ky-links-new">
    <EnhancedSEO title="Contatos e links | KY Drywall & Steel Frame" description="Os canais oficiais da KY Drywall em um só lugar: WhatsApp, catálogo, Instagram, localização e QR Code." canonical={`${BASE_URL}/links`} ogImage={`${BASE_URL}/og-ky-drywall.png`}/>
    <div className="ky-links-shell">
      <header className="ky-links-top"><Link to="/" aria-label="KY Drywall, página inicial"><img src={SITE_ASSETS.logo} alt="KY Drywall & Steel Frame"/></Link><Link to="/"><ArrowLeft size={18}/> Voltar ao site</Link></header>
      <div className="ky-links-layout"><div className="ky-links-intro"><span className="ky-links-label">LOJA FÍSICA NO CAJURU · CURITIBA</span><h1>A KY,<br/>mais perto<br/><em>de você.</em></h1><p>Escolha como quer conversar com a gente. Todos os nossos canais estão aqui.</p><figure><img src={SITE_ASSETS.storefront} alt="Fachada real da loja KY Drywall no Cajuru" width="1824" height="1361" fetchPriority="high"/><figcaption>Rod. BR-277, 3641 · Cajuru, Curitiba</figcaption></figure><div className="ky-links-hours"><strong>Horários da loja</strong><p>Segunda a sexta: 7h30–17h30<br/>Sábado: 7h30–12h</p></div></div>
      <div className="ky-links-options"><h2>Fale com a equipe</h2>{contacts.map((person,index)=><a className={`ky-links-contact ${index===0?'ky-links-primary':''}`} href={`https://wa.me/${person.number}`} target="_blank" rel="noopener noreferrer" key={person.name}><MessageCircle size={27}/><span><strong>{person.name} no WhatsApp</strong><small>{person.detail}</small></span><ArrowUpRight size={23}/></a>)}<a className="ky-links-call" href="tel:+554135284232"><Phone size={20}/><span>Ligar para a loja <strong>{COMPANY_INFO.phone}</strong></span><ArrowUpRight size={22}/></a>
      <h2>Explore a KY</h2><div className="ky-links-explore"><Link to="/produtos"><Package size={24}/><strong>Catálogo de produtos</strong><span>Materiais para cada etapa</span><ArrowUpRight size={20}/></Link><Link to="/blog"><BookOpen size={24}/><strong>Guias e artigos</strong><span>Informação para planejar</span><ArrowUpRight size={20}/></Link><a href={COMPANY_INFO.instagram} target="_blank" rel="noreferrer"><Instagram size={24}/><strong>Instagram</strong><span>@kydrywall</span><ArrowUpRight size={20}/></a><a href={COMPANY_INFO.mapsUrl} target="_blank" rel="noreferrer"><MapPin size={24}/><strong>Como chegar</strong><span>Veja a localização da loja</span><ArrowUpRight size={20}/></a></div>
      <div className="ky-links-qr"><img src="/qr-ky-links.svg" alt="QR Code para os canais oficiais da KY" width="120" height="120"/><div><h2>Leve os contatos com você.</h2><p>Salve o QR Code para acessar esta página quando precisar.</p><a href="/qr-ky-links.svg" download="KY-Drywall-Central.svg"><Download size={18}/> Baixar QR Code</a></div></div></div></div>
    </div>
  </div>;
}
