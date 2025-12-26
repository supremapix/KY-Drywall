
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Fixed: Added ChevronRight to the lucide-react imports
import { MapPin, Phone, Instagram, Facebook, Mail, Clock, Navigation, Star, Users, ShieldCheck, CheckCircle2, Quote, Map, ChevronRight } from 'lucide-react';
import { SITE_ASSETS } from '../constants';

const testimonials = [
  { name: "Arq. Ricardo S.", role: "Arquiteto", text: "Material de primeira e entrega no prazo. Recomendo para todas as obras de alto padrão em Curitiba!" },
  { name: "Eng. Marina F.", role: "Gestora", text: "O suporte técnico da KY fez toda a diferença na especificação do Steel Frame para nosso projeto comercial." },
  { name: "Marcos G.", role: "Gesseiro", text: "Melhor preço da região e estoque sempre em dia. A KY é parceira de verdade de quem está no canteiro." }
];

const Footer: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-[#050505] text-white pt-24 pb-8 border-t-[12px] border-[#D31219]">
      <div className="container mx-auto px-4">
        
        {/* Prova Social Section */}
        <div className="mb-24">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            <div className="lg:w-1/3 flex flex-col gap-6">
              <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 relative overflow-hidden group hover:border-[#D31219]/50 transition-all shadow-2xl">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:scale-125 transition-transform"><Users size={120} /></div>
                <div className="relative z-10">
                  <p className="text-6xl font-black mb-2 tracking-tighter text-[#D31219]">+8.500</p>
                  <p className="text-[10px] font-black uppercase text-gray-500 tracking-[0.2em]">Clientes Atendidos no PR</p>
                </div>
              </div>
              <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 flex items-center justify-between shadow-2xl">
                <div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (<Star key={i} size={14} className="fill-[#D31219] text-[#D31219]" />))}
                  </div>
                  <p className="text-2xl font-black">4.9 / 5.0</p>
                  <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Avaliação Google</p>
                </div>
                <div className="bg-white/10 p-5 rounded-3xl animate-pulse"><CheckCircle2 size={40} className="text-[#D31219]" /></div>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="h-full bg-gradient-to-br from-white/10 to-transparent p-12 md:p-20 rounded-[4rem] border border-white/10 relative shadow-2xl overflow-hidden group">
                <div className="absolute -bottom-10 -right-10 p-20 opacity-5 pointer-events-none group-hover:rotate-12 transition-transform"><Quote size={200} /></div>
                <Quote size={80} className="absolute top-12 right-12 opacity-10 text-[#D31219]" />
                <div className="relative z-10">
                  <p className="text-2xl md:text-4xl font-medium italic text-gray-100 mb-12 leading-relaxed tracking-tight">
                    "{testimonials[activeTestimonial].text}"
                  </p>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-[#D31219] rounded-full flex items-center justify-center font-black text-2xl shadow-xl shadow-[#D31219]/20">{testimonials[activeTestimonial].name[0]}</div>
                    <div>
                      <p className="font-black text-lg uppercase tracking-tight">{testimonials[activeTestimonial].name}</p>
                      <p className="text-[11px] font-black text-[#D31219] uppercase tracking-[0.3em]">{testimonials[activeTestimonial].role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 border-t border-white/5 pt-20">
          <div className="space-y-8">
            <Link to="/" className="bg-white p-4 rounded-3xl inline-block shadow-2xl hover:scale-105 transition-transform">
              <img 
                src={SITE_ASSETS.logo} 
                alt="KY Drywall" 
                className="h-14 w-auto" 
                onError={(e) => (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200x80?text=KY+DRYWALL'}
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed font-bold uppercase tracking-tight">Referência técnica em sistemas construtivos a seco no Paraná há mais de duas décadas.</p>
            <div className="flex items-center gap-3 text-[10px] font-black uppercase text-white/40"><ShieldCheck size={20} className="text-[#D31219]" /> Certificado ABNT NBR 15575</div>
          </div>

          <div>
            <h3 className="text-2xl font-black mb-10 uppercase tracking-tighter border-b border-[#D31219]/50 pb-3">Contatos</h3>
            <div className="space-y-6">
              <a href="tel:4135284232" className="flex items-center gap-4 text-gray-300 hover:text-[#D31219] transition-colors group">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-[#D31219] group-hover:text-white transition-all"><Phone size={20} /></div>
                <span className="text-base font-black">(41) 3528-4232</span>
              </a>
              <a href="mailto:contato@kydrywall.com.br" className="flex items-center gap-4 text-gray-300 hover:text-[#D31219] transition-colors group">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-[#D31219] group-hover:text-white transition-all"><Mail size={20} /></div>
                <span className="text-sm font-black uppercase tracking-tight">contato@kydrywall.com.br</span>
              </a>
              <div className="flex items-start gap-4 mt-8">
                <div className="p-3 bg-white/5 rounded-2xl text-[#D31219]"><Clock size={20} /></div>
                <div className="text-[11px] font-black uppercase text-gray-500 tracking-widest pt-1">
                  <p className="text-white">Seg-Sex: 07:30 - 17:30</p>
                  <p>Sáb: 07:30 - 12:00</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-black mb-10 uppercase tracking-tighter border-b border-[#D31219]/50 pb-3">Navegação</h3>
            <ul className="grid grid-cols-1 gap-4 text-xs font-black uppercase text-gray-600 tracking-widest">
              <li><Link to="/empresa" className="hover:text-white hover:pl-2 transition-all flex items-center gap-2"><ChevronRight size={14} className="text-[#D31219]"/> A Empresa</Link></li>
              <li><Link to="/produtos" className="hover:text-white hover:pl-2 transition-all flex items-center gap-2"><ChevronRight size={14} className="text-[#D31219]"/> Produtos</Link></li>
              <li><Link to="/servicos" className="hover:text-white hover:pl-2 transition-all flex items-center gap-2"><ChevronRight size={14} className="text-[#D31219]"/> Serviços</Link></li>
              <li><Link to="/blog" className="hover:text-white hover:pl-2 transition-all flex items-center gap-2"><ChevronRight size={14} className="text-[#D31219]"/> Blog Regional</Link></li>
            </ul>
          </div>

          {/* Onde Estamos Destaque Animado */}
          <div className="bg-[#111] p-10 rounded-[3.5rem] border-2 border-[#D31219] shadow-[0_0_50px_rgba(211,18,25,0.2)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D31219] opacity-5 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl animate-pulse"></div>
            <h3 className="text-2xl font-black mb-8 flex items-center gap-3 uppercase tracking-tighter text-white">
              <MapPin size={24} className="text-[#D31219] animate-bounce" /> Onde Estamos
            </h3>
            <div className="space-y-8 relative z-10">
              <div className="space-y-2">
                <p className="text-xs font-black text-[#D31219] uppercase tracking-[0.3em]">Showroom Curitiba</p>
                <p className="text-lg font-black text-white leading-tight uppercase tracking-tight">Rod. BR 277 <br/>Nº 3641 - Cajuru</p>
              </div>
              <a 
                href="https://maps.app.goo.gl/RcpAnuqvVRpjQBQD6" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center justify-between bg-[#D31219] text-white p-5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-white hover:text-[#D31219] transition-all group/btn shadow-xl"
              >
                Abrir GPS 
                <Navigation size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </a>
              <div className="flex items-center gap-2 text-[9px] font-black uppercase text-gray-600 tracking-tighter">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></span> Aberto para Visitação Técnica
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-center">
          <p className="text-[10px] font-black uppercase text-gray-600 tracking-widest">© {new Date().getFullYear()} KY Drywall & Steel Frame. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="https://facebook.com/kydrywall" className="p-4 bg-white/5 rounded-full hover:bg-[#D31219] transition-colors shadow-xl group">
              <Facebook size={20} className="group-hover:scale-110 transition-transform"/>
            </a>
            <a href="https://instagram.com/kydrywall" className="p-4 bg-white/5 rounded-full hover:bg-[#D31219] transition-colors shadow-xl group">
              <Instagram size={20} className="group-hover:scale-110 transition-transform"/>
            </a>
          </div>
          <p className="text-[10px] font-black uppercase text-gray-600 tracking-widest">Tecnologia por <a href="https://supremamidia.com.br" className="text-white hover:text-[#D31219] transition-colors underline decoration-[#D31219] underline-offset-4">Suprema Mídia</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
