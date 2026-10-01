import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Instagram, Facebook, Mail, Clock, Navigation, Star, Users, ShieldCheck, Quote, ChevronRight, Heart } from 'lucide-react';
import { SITE_ASSETS, COMPANY_INFO } from '../constants';

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
  { name: "Arq. Ricardo Silveira", role: "Arquiteto • Projetos Residenciais", text: "Material rigorosamente dentro das normas técnicas e logística pontual. A KY é nossa fornecedora padrão para projetos em Steel Frame em Curitiba." },
  { name: "Eng. Marina Fontana", role: "Engenheira Civil • Gestão de Obras", text: "A assessoria técnica para cálculo de modulação e especificação das chapas e perfis Barbieri otimizou nosso custo de fundação e reduziu o cronograma." },
  { name: "Marcos Guimarães", role: "Empreiteiro Especialista em Drywall", text: "Estoque garantido de placas, montantes e massas. Nunca deixam a obra parada e o atendimento técnico no balcão é diferenciado." }
];

const Footer: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-slate-950 text-slate-200 pt-16 pb-10 border-t-2 border-[#D31219]">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Social Proof & Testimonials */}
        <div className="mb-16 pb-16 border-b border-slate-800/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Metrics */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-4">
              <div className="bg-slate-900/90 p-6 rounded-lg border border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-3xl font-extrabold text-[#D31219] tracking-tight">+8.500</p>
                  <p className="text-xs text-slate-400 font-medium mt-1">Obras e projetos atendidos no Paraná</p>
                </div>
                <div className="w-12 h-12 rounded bg-red-950/40 text-[#D31219] flex items-center justify-center border border-red-900/30">
                  <Users size={24} />
                </div>
              </div>

              <div className="bg-slate-900/90 p-6 rounded-lg border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="flex gap-1 mb-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} className="fill-[#D31219] text-[#D31219]" />
                    ))}
                  </div>
                  <p className="text-xl font-bold text-white">4.9 / 5.0</p>
                  <p className="text-xs text-slate-400 font-medium">Avaliação de clientes no Google</p>
                </div>
                <div className="w-12 h-12 rounded bg-slate-800/60 text-slate-300 flex items-center justify-center border border-slate-700/50">
                  <ShieldCheck size={24} />
                </div>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="lg:col-span-8 bg-slate-900/60 p-8 rounded-lg border border-slate-800 flex flex-col justify-between relative">
              <Quote size={40} className="text-[#D31219]/20 absolute top-6 right-6" />
              <div>
                <p className="text-xs uppercase tracking-widest text-[#D31219] font-bold mb-3">Depoimento Profissional</p>
                <blockquote className="text-slate-200 text-base md:text-lg leading-relaxed italic font-normal mb-6 max-w-2xl">
                  "{testimonials[activeTestimonial].text}"
                </blockquote>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-800/60">
                <div>
                  <p className="font-semibold text-white text-sm">{testimonials[activeTestimonial].name}</p>
                  <p className="text-xs text-slate-400">{testimonials[activeTestimonial].role}</p>
                </div>
                <div className="flex gap-1.5">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTestimonial(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        i === activeTestimonial ? 'w-6 bg-[#D31219]' : 'w-2 bg-slate-700 hover:bg-slate-500'
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand & Authority */}
          <div className="space-y-4">
            <Link to="/" className="inline-block bg-white p-2.5 rounded border border-slate-200">
              <img 
                src={SITE_ASSETS.logo} 
                alt="KY Drywall & Steel Frame" 
                className="h-10 w-auto" 
                onError={(e) => (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200x80?text=KY+DRYWALL'}
              />
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed">
              Distribuidora especializada em sistemas construtivos industrializados a seco em Curitiba e Região Metropolitana.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
              <ShieldCheck size={16} className="text-[#D31219]" />
              <span>Conformidade ABNT NBR 15253 / 15575</span>
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Atendimento & Vendas
            </h4>
            <div className="space-y-3.5 text-xs text-slate-300">
              <a href="tel:4135284232" className="flex items-center gap-2.5 hover:text-[#D31219] transition-colors">
                <Phone size={15} className="text-[#D31219]" />
                <span className="font-semibold">(41) 3528-4232</span>
              </a>
              <a href="mailto:contato@kydrywall.com.br" className="flex items-center gap-2.5 hover:text-[#D31219] transition-colors">
                <Mail size={15} className="text-[#D31219]" />
                <span>contato@kydrywall.com.br</span>
              </a>
              <div className="flex items-start gap-2.5 text-slate-400 pt-2 border-t border-slate-900">
                <Clock size={15} className="text-[#D31219] mt-0.5" />
                <div className="space-y-0.5">
                  <p>Segunda a Sexta: 07:30 - 17:30</p>
                  <p>Sábado: 07:30 - 12:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Sistemas & Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/steel-frame" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight size={13} className="text-[#D31219]" /> Steel Frame Estrutural
                </Link>
              </li>
              <li>
                <Link to="/servicos/drywall" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight size={13} className="text-[#D31219]" /> Paredes & Forros Drywall
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight size={13} className="text-[#D31219]" /> Catálogo Completo
                </Link>
              </li>
              <li>
                <Link to="/servicos/shingle" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight size={13} className="text-[#D31219]" /> Cobertura Telhado Shingle
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight size={13} className="text-[#D31219]" /> Perguntas Frequentes (FAQ)
                </Link>
              </li>
              <li>
                <Link to="/empresa" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight size={13} className="text-[#D31219]" /> Sobre a KY Drywall
                </Link>
              </li>
            </ul>
          </div>

          {/* Location / Showroom */}
          <div className="bg-slate-900/80 p-5 rounded-lg border border-slate-800">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
              <MapPin size={16} className="text-[#D31219]" />
              Showroom Curitiba
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              {COMPANY_INFO.address}
            </p>
            <a 
              href={COMPANY_INFO.mapsUrl}
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center justify-between w-full bg-[#D31219] text-white px-4 py-2.5 rounded text-xs font-semibold hover:bg-slate-800 transition-colors"
            >
              <span>Abrir no Google Maps</span>
              <Navigation size={14} />
            </a>
            <p className="text-[11px] text-emerald-400 font-medium mt-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Estacionamento próprio no local
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-1">
            <p>© {new Date().getFullYear()} KY Drywall & Steel Frame. Todos os direitos reservados.</p>
            <span className="text-slate-800 hidden sm:inline">•</span>
            <Link 
              to="/sitemap" 
              className="text-slate-600 hover:text-slate-400 transition-colors text-[11px]"
              title="Mapa do Site"
            >
              Mapa do Site
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://facebook.com/kydrywall" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded bg-slate-900 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
            <a 
              href={COMPANY_INFO.instagram} 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded bg-slate-900 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <Link to="/links" className="text-slate-400 hover:text-white transition-colors">
              Canais Oficiais
            </Link>
          </div>

          <p className="text-slate-500">
            Desenvolvido por{' '}
            <a 
              href="https://supremasite.com.br" 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-400 hover:text-white transition-colors underline decoration-slate-700 underline-offset-2"
            >
              Suprema Sites Express
            </a>
          </p>
        </div>

        {/* Suprema Credit Badge */}
        <SupremaCredit />
      </div>
    </footer>
  );
};

export default Footer;
