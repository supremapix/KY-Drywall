
import React from 'react';
import { Link } from 'react-router-dom';
import { NEIGHBORHOODS, CITIES_RMC, SERVICES, PRODUCTS, BASE_URL, normalizeLocationName } from '../constants';
import { Globe, Map, Package, Wrench, Info, Mail } from 'lucide-react';

const Sitemap: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-24">
      <div className="container mx-auto px-4">
        <header className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">Sitemap <span className="text-[#D31219]">Geral</span></h1>
          <p className="text-xl text-gray-500 font-bold uppercase tracking-widest">Índice Completo KY Drywall & Steel Frame</p>
          <div className="h-2 w-24 bg-[#D31219] mx-auto mt-8 rounded-full"></div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Section: Core Pages */}
          <section className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
            <h2 className="text-xl font-black border-b-2 border-[#D31219] pb-3 mb-6 flex items-center gap-3 uppercase tracking-tight">
              <Info size={24} className="text-[#D31219]" /> Institucional
            </h2>
            <ul className="space-y-3 text-sm font-bold text-gray-600">
              <li><Link to="/" className="hover:text-[#D31219] flex items-center gap-2">• Início (Home)</Link></li>
              <li><Link to="/empresa" className="hover:text-[#D31219] flex items-center gap-2">• A Empresa (Sobre Nós)</Link></li>
              <li><Link to="/produtos" className="hover:text-[#D31219] flex items-center gap-2">• Catálogo de Produtos</Link></li>
              <li><Link to="/servicos" className="hover:text-[#D31219] flex items-center gap-2">• Nossos Serviços</Link></li>
              <li><Link to="/blog" className="hover:text-[#D31219] flex items-center gap-2">• Blog & Regiões</Link></li>
              <li><Link to="/contato" className="hover:text-[#D31219] flex items-center gap-2">• Fale Conosco</Link></li>
            </ul>
          </section>

          {/* Section: Categories & Services */}
          <section className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
            <h2 className="text-xl font-black border-b-2 border-[#D31219] pb-3 mb-6 flex items-center gap-3 uppercase tracking-tight">
              <Package size={24} className="text-[#D31219]" /> Soluções Técnicas
            </h2>
            <div className="space-y-6">
              <ul className="space-y-2 text-xs font-black uppercase text-gray-500">
                {["Massas", "Placas", "Perfis", "Parafusos", "Fitas", "Lã", "Ferragens"].map(c => (
                  <li key={c}><Link to={`/produtos?cat=${c}`} className="hover:text-[#D31219]">• {c}</Link></li>
                ))}
              </ul>
              <h3 className="text-xs font-black text-gray-900 uppercase border-t pt-4">Nossas Especialidades</h3>
              <ul className="space-y-2 text-xs font-bold text-gray-400">
                {SERVICES.map(s => (
                  <li key={s.id}><Link to={`/servicos/${s.id}`} className="hover:text-[#D31219]">• {s.title}</Link></li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section: Strategic Links */}
          <section className="bg-[#1A1A1A] p-10 rounded-[2.5rem] shadow-xl text-white">
            <h2 className="text-xl font-black border-b-2 border-[#D31219] pb-3 mb-6 flex items-center gap-3 uppercase tracking-tight">
              <Wrench size={24} className="text-[#D31219]" /> Suporte & Orçamentos
            </h2>
            <div className="space-y-4">
              <a href="https://wa.me/5541996457421" className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-[#D31219] transition-all">
                <Globe size={18} />
                <span className="text-xs font-black uppercase tracking-widest">Atendimento WhatsApp</span>
              </a>
              <a href="tel:4135284232" className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-[#D31219] transition-all">
                <Mail size={18} />
                <span className="text-xs font-black uppercase tracking-widest">Ligar para Empresa</span>
              </a>
            </div>
          </section>

          {/* Massive Regional Index - Bairros */}
          <section className="lg:col-span-3 bg-white p-12 rounded-[3rem] shadow-2xl border border-gray-100">
            <h2 className="text-2xl font-black border-b-4 border-[#D31219] pb-4 mb-10 flex items-center gap-4 uppercase tracking-tighter">
              <Map size={32} className="text-[#D31219]" /> Bairros de Curitiba
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-6 max-h-[600px] overflow-y-auto pr-6 scrollbar-thin scrollbar-thumb-[#D31219]">
              {NEIGHBORHOODS.map(n => {
                const slug = normalizeLocationName(n);
                return (
                  <div key={n} className="space-y-1">
                    <p className="text-[10px] font-black text-gray-900 border-l-2 border-[#D31219] pl-2 uppercase">{n}</p>
                    <Link to={`/drywall-em/${slug}`} className="block text-[8px] font-bold text-gray-400 hover:text-[#D31219] uppercase">Drywall {n}</Link>
                    <Link to={`/steel-frame-em/${slug}`} className="block text-[8px] font-bold text-gray-400 hover:text-[#D31219] uppercase">Steel Frame {n}</Link>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Regional Index - Cidades RMC */}
          <section className="lg:col-span-3 bg-[#1A1A1A] p-12 rounded-[3rem] shadow-2xl text-white">
            <h2 className="text-2xl font-black border-b-4 border-[#D31219] pb-4 mb-10 flex items-center gap-4 uppercase tracking-tighter">
              <Map size={32} className="text-[#D31219]" /> Região Metropolitana de Curitiba
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-6">
              {CITIES_RMC.map(c => {
                const slug = normalizeLocationName(c);
                return (
                  <div key={c} className="space-y-1">
                    <p className="text-[10px] font-black text-white border-l-2 border-[#D31219] pl-2 uppercase">{c}</p>
                    <Link to={`/drywall-em/${slug}`} className="block text-[8px] font-bold text-gray-400 hover:text-[#D31219] uppercase">Drywall {c}</Link>
                    <Link to={`/steel-frame-em/${slug}`} className="block text-[8px] font-bold text-gray-400 hover:text-[#D31219] uppercase">Steel Frame {c}</Link>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
