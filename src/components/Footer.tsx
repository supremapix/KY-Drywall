import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Instagram, Facebook, Mail, Clock, Navigation, Star, Users, ShieldCheck, Quote, ChevronRight, Heart, MessageCircle, ChevronDown, Building, Award } from 'lucide-react';
import { SITE_ASSETS, COMPANY_INFO, NEIGHBORHOODS, CITIES_RMC, normalizeLocationName } from '../constants';

export function SupremaCredit() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-10 border-t border-slate-200 flex justify-center items-center">
      <div className="bg-white border border-slate-200 rounded-full px-10 py-4 shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <p className="text-slate-700 text-sm sm:text-base font-bold flex flex-wrap items-center justify-center gap-3">
          <span className="opacity-90">Orgulhosamente desenvolvido por</span>
          <a 
            id="developer-suprema-link"
            href="https://supremasite.com.br" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-900 hover:text-[#D31219] transition-all font-black inline-flex items-center gap-3 cursor-pointer group"
          >
            <span className="border-b-2 border-yellow-400 group-hover:border-[#D31219]">Suprema Sites Express</span>
            <img 
              src="https://img.supremamidia.com/suprema-img.png" 
              alt="Suprema" 
              className="h-[36px] w-auto inline select-none shrink-0 transition-all duration-500 group-hover:scale-110" 
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
    <footer className="ky-section-tech text-slate-800 pt-20 pb-16 border-t-8 border-[#D31219] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Prancha Header Blueprint Tag */}
        <div className="mb-14 text-center md:text-left border-b border-slate-200 pb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="inline-flex items-center justify-center md:justify-start gap-3 text-[10px] font-black tracking-[0.2em] text-[#D31219] uppercase bg-white border border-red-100 px-5 py-2.5 rounded-full shadow-sm">
            <Award size={14} />
            <span>05 — DISTRIBUIDORA AUTORIZADA & SHOWROOM BR-277</span>
          </div>
          <div className="inline-flex items-center justify-center gap-2 border border-slate-200 bg-white px-5 py-2.5 rounded-full text-slate-600 text-xs font-black shadow-sm uppercase tracking-widest">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Estoque Pronta Entrega — Curitiba</span>
          </div>
        </div>

        {/* Social Proof & Testimonials */}
        <div className="mb-16 pb-16 border-b border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Metrics */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-6">
              <div className="ky-card p-8 rounded-3xl flex items-center justify-between text-center sm:text-left transition-shadow">
                <div>
                  <p className="text-4xl font-black text-slate-950 tracking-tighter">Engenharia</p>
                  <p className="text-xs font-black text-[#D31219] mt-2 uppercase tracking-widest">Suporte Técnico Especializado</p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-red-50 text-[#D31219] flex items-center justify-center border border-red-100 shrink-0 hidden sm:flex">
                  <Users size={28} />
                </div>
              </div>

              <div className="ky-card p-8 rounded-3xl flex items-center justify-between text-center sm:text-left transition-shadow">
                <div>
                  <div className="flex justify-center sm:justify-start gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="fill-[#D31219] text-[#D31219]" />
                    ))}
                  </div>
                  <p className="text-2xl font-black text-slate-900 tracking-tight leading-none">Qualidade Técnica</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-2">Normas ABNT NBR</p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center border border-slate-200 shrink-0 hidden sm:flex">
                  <ShieldCheck size={28} />
                </div>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="lg:col-span-8 ky-card p-10 sm:p-12 rounded-[40px] flex flex-col justify-between relative text-center md:text-left shadow-xl">
              <Quote size={56} className="text-slate-100 absolute top-10 right-10 hidden sm:block" />
              <div className="relative z-10">
                <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-[#D31219] font-black mb-6">Voz da Engenharia</span>
                <blockquote className="text-slate-800 text-xl md:text-3xl leading-relaxed italic font-medium mb-10">
                  "{testimonials[activeTestimonial].text}"
                </blockquote>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-slate-100 gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-black text-xl">
                    {testimonials[activeTestimonial].name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-black text-slate-950 text-lg leading-none">{testimonials[activeTestimonial].name}</p>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-2">{testimonials[activeTestimonial].role}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTestimonial(i)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        i === activeTestimonial ? 'w-12 bg-[#D31219]' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                      }`}
                      aria-label={`Ver depoimento ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          {/* Brand & Authority */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <Link to="/" className="inline-block ky-card p-4 rounded-2xl transition-transform hover:scale-105">
              <img 
                src={SITE_ASSETS.logo} 
                alt="KY Drywall & Steel Frame" 
                className="h-14 w-auto" 
                onError={(e) => (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200x80?text=KY+DRYWALL'}
              />
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Distribuidora líder em construção a seco de Curitiba. Showroom técnico na BR-277 com assessoria especializada para sua obra.
            </p>
            
            <div className="w-full pt-4 space-y-3">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                className="w-full flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-black py-4 px-6 rounded-2xl text-sm uppercase tracking-widest transition-all shadow-lg active:scale-95"
              >
                <Phone size={18} />
                <span>Central: {COMPANY_INFO.phone}</span>
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-[#D31219] hover:bg-red-700 text-white font-black py-4 px-6 rounded-2xl text-sm uppercase tracking-widest transition-all shadow-lg active:scale-95"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Orçamentos</span>
              </a>
            </div>
          </div>

          {/* Contacts & Hours */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h4 className="text-slate-950 text-xs font-black uppercase tracking-[0.2em] border-b-2 border-[#D31219] pb-3 w-full">
              Atendimento Técnico
            </h4>
            <div className="space-y-4 text-slate-800 w-full">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-50 text-[#D31219] flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <span className="font-black text-xl">(41) 3528-4232</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-4 pt-4 border-t border-slate-50">
                  <div className="w-10 h-10 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <span className="font-bold text-xs truncate">{COMPANY_INFO.email}</span>
                </div>
              </div>
              
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="flex items-center justify-center md:justify-start gap-2 text-slate-900 font-black text-[10px] uppercase tracking-widest mb-4">
                  <Clock size={14} className="text-[#D31219]" />
                  <span>Horários Showroom</span>
                </div>
                <div className="space-y-2 text-xs font-bold text-slate-600 uppercase tracking-tight">
                  <p className="flex justify-between"><span>Seg a Sex:</span> <span>07:30 - 17:30</span></p>
                  <p className="flex justify-between"><span>Sábado:</span> <span>07:30 - 12:00</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h4 className="text-slate-950 text-xs font-black uppercase tracking-[0.2em] border-b-2 border-[#D31219] pb-3 w-full">
              Links Rápidos
            </h4>
            <ul className="space-y-1 w-full">
              {[
                { label: 'Steel Frame Estrutural', path: '/steel-frame' },
                { label: 'Drywall Paredes e Forros', path: '/servicos/drywall' },
                { label: 'Catálogo de Produtos', path: '/produtos' },
                { label: 'A Empresa KY Drywall', path: '/empresa' },
                { label: 'Central de Ajuda (FAQ)', path: '/faq' },
                { label: 'Blog & Manuais Técnicos', path: '/blog' },
              ].map((linkItem) => (
                <li key={linkItem.path}>
                  <Link 
                    to={linkItem.path} 
                    className="text-slate-600 hover:text-[#D31219] hover:bg-white px-4 py-3 rounded-2xl transition-all flex items-center justify-center md:justify-start gap-4 text-base font-bold min-h-[52px] group"
                  >
                    <ChevronRight size={18} className="text-slate-300 group-hover:text-[#D31219] group-hover:translate-x-1 transition-all" />
                    <span>{linkItem.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location / Showroom & Address */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h4 className="text-slate-950 text-xs font-black uppercase tracking-[0.2em] border-b-2 border-[#D31219] pb-3 w-full">
              Onde Estamos
            </h4>
            <div className="ky-card p-6 rounded-3xl w-full space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={24} className="text-[#D31219] shrink-0 mt-1" />
                <p className="text-sm text-slate-700 font-bold leading-relaxed">
                  {COMPANY_INFO.address}
                </p>
              </div>
              
              <a 
                href={COMPANY_INFO.mapsUrl}
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center justify-center gap-3 w-full bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 px-6 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-sm active:scale-95"
              >
                <span>Google Maps</span>
                <Navigation size={18} className="text-[#D31219]" />
              </a>
              <div className="flex items-center justify-center md:justify-start gap-2 pt-2 border-t border-slate-50">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Estacionamento para Carga</p>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Regions Accordions */}
        <div className="mb-20 space-y-4">
          <div className="ky-card rounded-3xl overflow-hidden">
            <button
              onClick={() => setIsNeighborhoodsOpen(!isNeighborhoodsOpen)}
              className="w-full p-6 flex items-center justify-between text-left text-sm font-black text-slate-900 hover:bg-slate-50 transition-all"
              aria-expanded={isNeighborhoodsOpen}
            >
              <div className="flex items-center gap-4">
                <Building size={24} className="text-[#D31219]" />
                <span className="uppercase tracking-[0.1em]">Bairros de Curitiba Atendidos ({NEIGHBORHOODS.length})</span>
              </div>
              <ChevronDown size={24} className={`text-slate-400 transition-transform duration-300 ${isNeighborhoodsOpen ? 'rotate-180 text-[#D31219]' : ''}`} />
            </button>
            {isNeighborhoodsOpen && (
              <div className="p-8 border-t border-slate-100 bg-slate-50/30 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {NEIGHBORHOODS.map((bairro) => (
                  <Link
                    key={bairro}
                    to={`/drywall-em/${normalizeLocationName(bairro)}`}
                    className="text-slate-500 hover:text-[#D31219] hover:font-black text-[11px] transition-all line-clamp-1 py-1 uppercase tracking-tight"
                  >
                    • {bairro}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="ky-card rounded-3xl overflow-hidden">
            <button
              onClick={() => setIsCitiesOpen(!isCitiesOpen)}
              className="w-full p-6 flex items-center justify-between text-left text-sm font-black text-slate-900 hover:bg-slate-50 transition-all"
              aria-expanded={isCitiesOpen}
            >
              <div className="flex items-center gap-4">
                <MapPin size={24} className="text-[#D31219]" />
                <span className="uppercase tracking-[0.1em]">Região Metropolitana (RMC)</span>
              </div>
              <ChevronDown size={24} className={`text-slate-400 transition-transform duration-300 ${isCitiesOpen ? 'rotate-180 text-[#D31219]' : ''}`} />
            </button>
            {isCitiesOpen && (
              <div className="p-8 border-t border-slate-100 bg-slate-50/30 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {CITIES_RMC.map((cidade) => (
                  <Link
                    key={cidade}
                    to={`/steel-frame-em/${normalizeLocationName(cidade)}`}
                    className="text-slate-500 hover:text-[#D31219] hover:font-black text-[11px] transition-all line-clamp-1 py-1 uppercase tracking-tight"
                  >
                    • {cidade}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-200 flex flex-col lg:flex-row justify-between items-center gap-10 text-center lg:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
            <p>© {new Date().getFullYear()} KY Drywall & Steel Frame</p>
            <div className="flex items-center gap-4">
              <Link to="/sitemap" className="text-slate-900 hover:text-[#D31219] underline underline-offset-4 decoration-slate-200">Mapa do Site</Link>
              <Link to="/links" className="text-slate-900 hover:text-[#D31219] underline underline-offset-4 decoration-slate-200">Canais Oficiais</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://facebook.com/kydrywall" target="_blank" rel="noreferrer" className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white border border-slate-200 text-slate-600 hover:text-white hover:bg-slate-900 transition-all shadow-sm active:scale-90" aria-label="Facebook">
              <Facebook size={24} />
            </a>
            <a href={COMPANY_INFO.instagram} target="_blank" rel="noreferrer" className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white border border-slate-200 text-slate-600 hover:text-white hover:bg-slate-900 transition-all shadow-sm active:scale-90" aria-label="Instagram">
              <Instagram size={24} />
            </a>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Powered by</span>
            <a href="https://supremasite.com.br" target="_blank" rel="noreferrer" className="text-xs font-black text-slate-900 hover:text-yellow-600 transition-colors uppercase tracking-widest border-b-2 border-yellow-400/20">Suprema Sites</a>
          </div>
        </div>

        <SupremaCredit />
      </div>
    </footer>
  );
};

export default Footer;

