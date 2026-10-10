import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Instagram, Facebook, Mail, Clock, Navigation, Star, Users, ShieldCheck, Quote, ChevronRight, Heart, MessageCircle, ChevronDown, Building, Award } from 'lucide-react';
import { SITE_ASSETS, COMPANY_INFO, NEIGHBORHOODS, CITIES_RMC, normalizeLocationName } from '../constants';

export function SupremaCredit() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pt-4 border-t border-slate-800/50 flex justify-center items-center">
      <div className="bg-slate-950/70 border border-slate-800/80 rounded-full px-6 py-2.5 shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]">
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
            className="text-yellow-400 hover:text-yellow-300 transition-all font-black inline-flex items-center gap-2 cursor-pointer border-b border-dashed border-yellow-400/50 hover:border-yellow-300"
          >
            Suprema Sites Express
            
            {/* Logotipo oficial com efeito de iluminação */}
            <img 
              src="https://img.supremamidia.com/suprema-img.png" 
              alt="Suprema" 
              className="h-[18px] w-auto inline select-none shrink-0 filter drop-shadow-[0_0_2px_rgba(250,204,21,0.5)] transition-transform duration-300 hover:scale-110" 
              referrerPolicy="no-referrer"
            />
          </a>
        </p>
      </div>
    </div>
  );
}

const testimonials = [
  { name: "Arq. Ricardo Silveira", role: "Arquiteto • Projetos Residenciais", text: "Material rigorosamente dentro das normas técnicas ABNT e logística pontual. A KY é nossa fornecedora padrão para projetos em Steel Frame em Curitiba." },
  { name: "Eng. Marina Fontana", role: "Engenheira Civil • Gestão de Obras", text: "A assessoria técnica para cálculo de modulação e especificação das chapas e perfis Barbieri otimizou nosso custo de fundação e reduziu o cronograma." },
  { name: "Marcos Guimarães", role: "Empreiteiro Especialista em Drywall", text: "Estoque garantido de placas, montantes e massas. A loja da BR-277 nunca deixa a obra parada e o atendimento de balcão é rápido e direto." }
];

const Footer: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isNeighborhoodsOpen, setIsNeighborhoodsOpen] = useState(false);
  const [isCitiesOpen, setIsCitiesOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-slate-950 text-slate-200 pt-16 pb-12 border-t-4 border-[#D31219] relative bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Prancha Header Blueprint Tag */}
        <div className="mb-10 text-center md:text-left border-b border-slate-800 pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="inline-flex items-center justify-center md:justify-start gap-2 text-xs font-mono tracking-widest text-[#D31219] uppercase bg-slate-900 border border-slate-800 px-3.5 py-1.5 rounded">
            <Award size={14} />
            <span>05 — DISTRIBUIDORA AUTORIZADA & SHOWROOM BR-277</span>
          </div>
          <div className="inline-flex items-center justify-center gap-2 border border-slate-800 bg-slate-900/80 px-3 py-1 rounded text-slate-300 text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Estoque a Pronta Entrega — Desde 1998</span>
          </div>
        </div>

        {/* Social Proof & Testimonials */}
        <div className="mb-14 pb-12 border-b border-slate-800/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Metrics */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-4">
              <div className="bg-slate-900/90 p-6 rounded-xl border border-slate-800 flex items-center justify-between text-center sm:text-left">
                <div>
                  <p className="text-3xl sm:text-4xl font-black text-[#D31219] tracking-tight">+8.500</p>
                  <p className="text-xs sm:text-sm text-slate-300 font-bold mt-1">Obras e projetos atendidos em Curitiba e RMC</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-red-950/60 text-[#D31219] flex items-center justify-center border border-red-900/40 shrink-0 hidden sm:flex">
                  <Users size={24} />
                </div>
              </div>

              <div className="bg-slate-900/90 p-6 rounded-xl border border-slate-800 flex items-center justify-between text-center sm:text-left">
                <div>
                  <div className="flex justify-center sm:justify-start gap-1 mb-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#D31219] text-[#D31219]" />
                    ))}
                  </div>
                  <p className="text-xl font-extrabold text-white">4.9 / 5.0 no Google</p>
                  <p className="text-xs text-slate-400 font-medium">Avaliação real de empreiteiros e construtores</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-slate-800/80 text-slate-300 flex items-center justify-center border border-slate-700/60 shrink-0 hidden sm:flex">
                  <ShieldCheck size={24} />
                </div>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="lg:col-span-8 bg-slate-900/80 p-6 sm:p-8 rounded-xl border border-slate-800 flex flex-col justify-between relative text-center md:text-left">
              <Quote size={40} className="text-[#D31219]/20 absolute top-6 right-6 hidden sm:block" />
              <div>
                <p className="text-xs uppercase tracking-widest text-[#D31219] font-bold mb-3">Depoimento da Engenharia & Balcão</p>
                <blockquote className="text-slate-200 text-base md:text-lg leading-relaxed italic font-normal mb-6">
                  "{testimonials[activeTestimonial].text}"
                </blockquote>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-slate-800/80 gap-4">
                <div>
                  <p className="font-bold text-white text-base">{testimonials[activeTestimonial].name}</p>
                  <p className="text-xs text-slate-400 font-medium">{testimonials[activeTestimonial].role}</p>
                </div>
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTestimonial(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === activeTestimonial ? 'w-8 bg-[#D31219]' : 'w-2 bg-slate-700 hover:bg-slate-500'
                      }`}
                      aria-label={`Ver depoimento ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
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
                <span>Atendimento WhatsApp 24h</span>
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

          <p className="text-slate-400">
            Desenvolvido por{' '}
            <a 
              href="https://supremasite.com.br" 
              target="_blank" 
              rel="noreferrer" 
              className="text-yellow-400 hover:text-yellow-300 font-bold transition-colors underline decoration-yellow-400/40 underline-offset-2"
            >
              Suprema Sites Express
            </a>
          </p>
        </div>

        {/* Suprema Credit Badge - Intact */}
        <SupremaCredit />
      </div>
    </footer>
  );
};

export default Footer;

