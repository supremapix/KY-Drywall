
import EnhancedSEO from '../components/EnhancedSEO';
import React from 'react';
import { Link } from 'react-router-dom';
import { NEIGHBORHOODS, CITIES_RMC, SERVICES, PRODUCTS, BASE_URL, normalizeLocationName, COMPANY_INFO } from '../constants';
import { Map, Package, Wrench, Info, MessageCircle, Phone } from 'lucide-react';

const Sitemap: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <EnhancedSEO
        title="Mapa do Site | KY Drywall"
        description="Índice completo com todas as páginas, produtos, serviços e atendimento por bairro em Curitiba e RMC."
        canonical={`${BASE_URL}/sitemap`}
      />

      <section className="bg-slate-900 py-14 text-white border-b border-slate-800">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <span className="text-[#D31219] text-xs font-bold uppercase tracking-wider block mb-2">
            Navegação & Estrutura
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight mb-3">
            Mapa do Site
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Acesso rápido e estruturado a todas as seções institucionais, catálogo técnico de produtos e guias de distribuição regional.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Section: Core Pages */}
          <section className="bg-white p-6 rounded border border-slate-200">
            <h2 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2.5 mb-4 flex items-center gap-2">
              <Info size={16} className="text-[#D31219]" />
              <span>Institucional</span>
            </h2>
            <ul className="space-y-2 text-xs text-slate-700">
              <li><Link to="/" className="hover:text-[#D31219] transition-colors">Início (Home)</Link></li>
              <li><Link to="/empresa" className="hover:text-[#D31219] transition-colors">A Empresa (Sobre Nós)</Link></li>
              <li><Link to="/steel-frame" className="hover:text-[#D31219] transition-colors">Steel Frame</Link></li>
              <li><Link to="/produtos" className="hover:text-[#D31219] transition-colors">Catálogo de Produtos</Link></li>
              <li><Link to="/servicos" className="hover:text-[#D31219] transition-colors">Nossos Serviços</Link></li>
              <li><Link to="/blog" className="hover:text-[#D31219] transition-colors">Blog & Regiões</Link></li>
              <li><Link to="/faq" className="hover:text-[#D31219] transition-colors">Perguntas Frequentes (FAQ)</Link></li>
              <li><Link to="/links" className="hover:text-[#D31219] transition-colors">Canais Oficiais</Link></li>
              <li><Link to="/contato" className="hover:text-[#D31219] transition-colors">Fale Conosco</Link></li>
            </ul>
          </section>

          {/* Section: Categories & Services */}
          <section className="bg-white p-6 rounded border border-slate-200">
            <h2 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2.5 mb-4 flex items-center gap-2">
              <Package size={16} className="text-[#D31219]" />
              <span>Categorias & Serviços</span>
            </h2>
            <div className="space-y-4">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5">Categorias de Insumos</span>
                <div className="flex flex-wrap gap-1.5">
                  {["Massas", "Placas", "Perfis", "Parafusos", "Fitas", "Lã", "Ferragens"].map(c => (
                    <Link
                      key={c}
                      to={`/produtos?cat=${c}`}
                      className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 hover:text-[#D31219] text-[11px] font-medium"
                    >
                      {c}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-slate-100">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5">Sistemas Construtivos</span>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {SERVICES.map(s => (
                    <li key={s.id}>
                      <Link to={`/servicos/${s.id}`} className="hover:text-[#D31219] transition-colors block truncate">
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Section: Contact & Support */}
          <section className="bg-slate-900 p-6 rounded border border-slate-800 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-sm font-bold border-b border-slate-800 pb-2.5 mb-4 flex items-center gap-2">
                <Wrench size={16} className="text-[#D31219]" />
                <span>Atendimento & Orçamentos</span>
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Expedições com pronta entrega e assistência técnica para quantitativos.
              </p>
              <div className="space-y-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá! Gostaria de um orçamento.`}
                  className="flex items-center gap-2 bg-[#D31219] hover:bg-red-700 text-white text-xs font-semibold uppercase tracking-wider p-2.5 rounded transition-colors"
                >
                  <MessageCircle size={15} /> WhatsApp Comercial
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                  className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold uppercase tracking-wider p-2.5 rounded border border-slate-700 transition-colors"
                >
                  <Phone size={15} /> {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 mt-4">
              <p>{COMPANY_INFO.address}</p>
            </div>
          </section>
        </div>

        {/* Regional Index - Bairros */}
        <section className="bg-white p-6 rounded border border-slate-200 mb-8">
          <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-2.5">
            <Map size={18} className="text-[#D31219]" />
            <h2 className="text-sm font-bold text-slate-900">
              Guia de Atendimento por Bairro em Curitiba
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-2 text-xs">
            {NEIGHBORHOODS.map(n => {
              const slug = normalizeLocationName(n);
              return (
                <div key={n} className="flex flex-col border-b border-slate-50 pb-1">
                  <Link to={`/drywall-em/${slug}`} className="text-slate-700 hover:text-[#D31219] font-medium truncate">
                    Drywall {n}
                  </Link>
                  <Link to={`/steel-frame-em/${slug}`} className="text-[10px] text-slate-400 hover:text-slate-900 truncate">
                    Steel Frame {n}
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* Regional Index - Cidades RMC */}
        <section className="bg-white p-6 rounded border border-slate-200">
          <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-2.5">
            <Map size={18} className="text-[#003366]" />
            <h2 className="text-sm font-bold text-slate-900">
              Guia de Atendimento na Região Metropolitana de Curitiba (RMC)
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-2 text-xs">
            {CITIES_RMC.map(c => {
              const slug = normalizeLocationName(c);
              return (
                <div key={c} className="flex flex-col border-b border-slate-50 pb-1">
                  <Link to={`/drywall-em/${slug}`} className="text-slate-700 hover:text-[#D31219] font-medium truncate">
                    Drywall {c}
                  </Link>
                  <Link to={`/steel-frame-em/${slug}`} className="text-[10px] text-slate-400 hover:text-slate-900 truncate">
                    Steel Frame {c}
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sitemap;
