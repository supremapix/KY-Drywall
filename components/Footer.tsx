import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Instagram, Facebook, Mail, Clock, Navigation, Star, Users, ShieldCheck, Quote, ChevronRight, Heart, MessageCircle, ChevronDown, Building, Award } from 'lucide-react';
import { SITE_ASSETS, COMPANY_INFO, NEIGHBORHOODS, CITIES_RMC, normalizeLocationName } from '../constants';

export function SupremaCredit() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pt-4 border-t border-slate-800/50 flex justify-center items-center">
      <div className="bg-slate-950/70 border border-slate-800/80 rounded-2xl px-6 py-5 shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]">
        <p className="text-slate-200 hover:text-white transition-colors duration-200 text-sm sm:text-base font-bold flex flex-wrap items-center justify-center gap-2">
          <span className="opacity-90">Desenvolvido com</span>

          {/* Coração pulsante com efeito de sombra */}
          <Heart
            size={14}
            className="text-red-500 animate-[pulse_1.5s_infinite] shrink-0 filter drop-shadow-[0_0_3px_rgba(239,68,68,0.7)]"
          />

          <span className="opacity-90">por</span>

          {/* Link para o site da Suprema */}
          <a
            id="developer-suprema-link"
            href="https://supremasite.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300 transition-all font-black inline-flex flex-wrap justify-center items-center gap-3 cursor-pointer border-b border-dashed border-yellow-400/50 hover:border-yellow-300"
          >
            Suprema Sites Express

            {/* Logotipo oficial com efeito de iluminação */}
            <img
              src="/suprema-oficial.png"
              alt="Suprema"
              className="h-12 sm:h-16 w-auto max-w-[180px] inline select-none shrink-0 filter drop-shadow-[0_0_2px_rgba(250,204,21,0.5)] transition-transform duration-300 hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </a>
        </p>
      </div>
    </div>
  );
}



const Footer: React.FC = () => {

  const [isNeighborhoodsOpen, setIsNeighborhoodsOpen] = useState(false);
  const [isCitiesOpen, setIsCitiesOpen] = useState(false);
  const [largeText, setLargeText] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('reading-large', largeText);
    return () => document.documentElement.classList.remove('reading-large');
  }, [largeText]);



  return (
    <footer className="bg-slate-950 text-slate-200 pt-16 pb-12 border-t-4 border-[#D31219] relative bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Prancha Header Blueprint Tag */}
        <div className="mb-10 text-center md:text-left border-b border-slate-800 pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="inline-flex items-center justify-center md:justify-start gap-2 text-xs font-mono tracking-widest text-[#D31219] uppercase bg-slate-900 border border-slate-800 px-3.5 py-1.5 rounded">
            <Award size={14} />
            <span>LOJA KY DRYWALL • BR-277</span>
          </div>
          <div className="inline-flex items-center justify-center gap-2 border border-slate-800 bg-slate-900/80 px-3 py-1 rounded text-slate-300 text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Consulte disponibilidade e retirada</span>
          </div>
        </div>

        {/* Main Columns - Centralized on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14 text-center md:text-left">
          {/* Brand & Authority */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link to="/" className="inline-block bg-white p-3 rounded-lg border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D31219]">
              <img
                src={SITE_ASSETS.logo}
                alt="KY Drywall & Steel Frame"
                className="h-12 w-auto"
                onError={(e) => (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200x80?text=KY+DRYWALL'}
              />
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Distribuidora e centro de apoio técnico para construção a seco em Curitiba e Região Metropolitana. Placas, perfis galvanizados Barbieri, massas, parafusos e isolamento com entrega no canteiro.
            </p>

            {/* Direct Call & WhatsApp Buttons */}
            <div className="w-full pt-2 space-y-2">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                className="w-full flex items-center justify-center gap-2 bg-[#D31219] hover:bg-red-700 text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors min-h-[48px] shadow-md"
              >
                <Phone size={18} />
                <span>Ligar (41) 3528-4232</span>
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors min-h-[48px] shadow-md"
              >
                <MessageCircle size={18} />
                <span>Atendimento WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Contacts & Hours */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider border-b-2 border-[#D31219] pb-2 w-full">
              Atendimento & Vendas
            </h4>
            <div className="space-y-4 text-sm text-slate-200 w-full">
              <a href="tel:4135284232" className="flex items-center justify-center md:justify-start gap-3 hover:text-[#D31219] transition-colors p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                <Phone size={18} className="text-[#D31219] shrink-0" />
                <span className="font-bold text-base">(41) 3528-4232</span>
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center justify-center md:justify-start gap-3 hover:text-[#D31219] transition-colors p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                <Mail size={18} className="text-[#D31219] shrink-0" />
                <span className="font-medium text-xs sm:text-sm">{COMPANY_INFO.email}</span>
              </a>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1">
                <div className="flex items-center justify-center md:justify-start gap-2 text-slate-300 font-bold text-xs uppercase tracking-wider mb-2">
                  <Clock size={16} className="text-[#D31219]" />
                  <span>Horário de Funcionamento</span>
                </div>
                <p className="text-xs text-slate-300 font-medium">Segunda a Sexta: 07:30 - 17:30</p>
                <p className="text-xs text-slate-300 font-medium">Sábado: 07:30 - 12:00</p>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider border-b-2 border-[#D31219] pb-2 w-full">
              Sistemas & Links
            </h4>
            <ul className="space-y-1 w-full">
              {[
                { label: 'Steel Frame Estrutural', path: '/steel-frame' },
                { label: 'Paredes & Forros Drywall', path: '/servicos/drywall' },
                { label: 'Catálogo de Produtos', path: '/produtos' },
                { label: 'Cobertura Telhado Shingle', path: '/servicos/shingle' },
                { label: 'Perguntas Frequentes (FAQ)', path: '/faq' },
                { label: 'Sobre a KY Drywall', path: '/empresa' },
                { label: 'Blog & Dicas de Obra', path: '/blog' },
                { label: 'Contato & Orçamento', path: '/contato' },
              ].map((linkItem) => (
                <li key={linkItem.path}>
                  <Link
                    to={linkItem.path}
                    className="text-slate-300 hover:text-white hover:bg-slate-900 px-3 py-2.5 rounded-lg transition-colors flex items-center justify-center md:justify-start gap-2 text-base font-semibold min-h-[48px]"
                  >
                    <ChevronRight size={16} className="text-[#D31219] shrink-0" />
                    <span>{linkItem.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location / Showroom & Address */}
          <div className="bg-slate-900/90 p-6 rounded-xl border border-slate-800 flex flex-col items-center md:items-start justify-between">
            <div>
              <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-3 flex items-center justify-center md:justify-start gap-2">
                <MapPin size={18} className="text-[#D31219]" />
                <span>Showroom & Loja Física</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {COMPANY_INFO.address}
              </p>
            </div>

            <div className="w-full space-y-3 pt-2">
              <a
                href={COMPANY_INFO.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-[#D31219] hover:bg-red-700 text-white px-4 py-3 rounded-xl text-xs font-bold transition-colors min-h-[48px] shadow-md"
              >
                <span>Como Chegar no Google Maps</span>
                <Navigation size={16} />
              </a>
              <p className="text-xs text-emerald-400 font-bold flex items-center justify-center md:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Estacionamento próprio para carga e descarga</span>
              </p>
            </div>
          </div>
        </div>

        {/* Accordion Sections for Neighborhoods and Cities (SEO & Regiões) */}
        <div className="mb-12 border-t border-b border-slate-800/80 py-6 space-y-4">
          {/* Accordion Bairros Curitiba */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl overflow-hidden">
            <button
              onClick={() => setIsNeighborhoodsOpen(!isNeighborhoodsOpen)}
              className="w-full p-4 flex items-center justify-between text-left text-sm font-bold text-white hover:bg-slate-800 transition-colors"
              aria-expanded={isNeighborhoodsOpen}
            >
              <div className="flex items-center gap-2.5">
                <Building size={18} className="text-[#D31219]" />
                <span>Atendimento por Bairros em Curitiba ({NEIGHBORHOODS.length} regiões)</span>
              </div>
              <ChevronDown size={18} className={`text-slate-400 transition-transform duration-200 ${isNeighborhoodsOpen ? 'rotate-180 text-[#D31219]' : ''}`} />
            </button>
            {isNeighborhoodsOpen && (
              <div className="p-5 border-t border-slate-800 bg-slate-950/60 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 text-xs">
                {NEIGHBORHOODS.map((bairro) => (
                  <Link
                    key={bairro}
                    to={`/drywall-em/${normalizeLocationName(bairro)}`}
                    className="text-slate-400 hover:text-white hover:underline py-1 px-1.5 transition-colors line-clamp-1"
                  >
                    Drywall {bairro}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Accordion Cidades RMC */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl overflow-hidden">
            <button
              onClick={() => setIsCitiesOpen(!isCitiesOpen)}
              className="w-full p-4 flex items-center justify-between text-left text-sm font-bold text-white hover:bg-slate-800 transition-colors"
              aria-expanded={isCitiesOpen}
            >
              <div className="flex items-center gap-2.5">
                <MapPin size={18} className="text-[#D31219]" />
                <span>Atendimento na Região Metropolitana de Curitiba (RMC)</span>
              </div>
              <ChevronDown size={18} className={`text-slate-400 transition-transform duration-200 ${isCitiesOpen ? 'rotate-180 text-[#D31219]' : ''}`} />
            </button>
            {isCitiesOpen && (
              <div className="p-5 border-t border-slate-800 bg-slate-950/60 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 text-xs">
                {CITIES_RMC.map((cidade) => (
                  <Link
                    key={cidade}
                    to={`/steel-frame-em/${normalizeLocationName(cidade)}`}
                    className="text-slate-400 hover:text-white hover:underline py-1 px-1.5 transition-colors line-clamp-1"
                  >
                    Steel Frame {cidade}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar - Centralized on Mobile */}
        <div className="pt-6 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-2">
            <p>© {new Date().getFullYear()} KY Drywall & Steel Frame. Todos os direitos reservados.</p>
            <span className="text-slate-700 hidden sm:inline">•</span>
            {/* Mapa do Site link MUST remain intact */}
            <Link
              to="/sitemap"
              className="text-slate-300 hover:text-white underline decoration-slate-600 underline-offset-2 font-bold transition-colors text-xs p-1"
              title="Mapa do Site"
            >
              Mapa do Site
            </Link>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a
              href="https://facebook.com/kydrywall"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-lg bg-slate-900 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="Facebook da KY Drywall"
            >
              <Facebook size={18} />
            </a>
            <a
              href={COMPANY_INFO.instagram}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-lg bg-slate-900 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="Instagram da KY Drywall"
            >
              <Instagram size={18} />
            </a>
            <Link to="/links" className="text-slate-300 hover:text-white font-bold transition-colors underline decoration-slate-700 underline-offset-2 p-2 text-xs">
              Canais Oficiais
            </Link>
          </div>


        </div>

        <div className="mt-8 rounded-xl border border-slate-700 p-5 text-center">
          <h3 className="text-xl font-bold text-white">Leitura confortável</h3>
          <p className="my-3 text-slate-200">Amplie os textos de leitura e os links do rodapé.</p>
          <button type="button" aria-pressed={largeText} onClick={() => setLargeText(!largeText)} className="min-h-[48px] rounded-lg bg-white text-slate-950 px-5 py-3 text-base font-bold">
            {largeText ? 'Texto padrão' : 'Aumentar texto'}
          </button>
        </div>

        {/* Crédito Suprema: identidade e logo oficial da referência Paver. */}
        <SupremaCredit />
      </div>
    </footer>
  );
};

export default Footer;

