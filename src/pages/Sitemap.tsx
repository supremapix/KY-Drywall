import React from 'react';
import { Link } from 'react-router-dom';
import { 
  NEIGHBORHOODS, 
  CITIES_RMC, 
  SERVICES, 
  PRODUCTS, 
  BLOG_POSTS,
  CATEGORIES,
  BASE_URL, 
  normalizeLocationName, 
  COMPANY_INFO 
} from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';
import { 
  Map, 
  MapPin,
  Landmark,
  Package, 
  Wrench, 
  Info, 
  MessageCircle, 
  Phone, 
  BookOpen, 
  FileCode, 
  Home, 
  ChevronRight, 
  Building2,
  Layers,
  Sparkles,
  ExternalLink
} from 'lucide-react';

const Sitemap: React.FC = () => {
  const totalProducts = PRODUCTS.length;
  const totalServices = SERVICES.length;
  const totalPosts = BLOG_POSTS.length;
  const totalNeighborhoods = NEIGHBORHOODS.length;
  const totalCities = CITIES_RMC.length;
  const totalPages = 9 + totalServices + totalPosts + totalProducts + (totalNeighborhoods * 2) + (totalCities * 2) + 3;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${BASE_URL}/sitemap/#webpage`,
        "url": `${BASE_URL}/sitemap`,
        "name": "Mapa do Site Completo | KY Drywall & Steel Frame",
        "description": "Índice estruturado com todas as páginas institucionais, catálogo de produtos, serviços técnicos, artigos e páginas regionais.",
        "isPartOf": { "@id": `${BASE_URL}/#website` }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Início",
            "item": BASE_URL
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Mapa do Site",
            "item": `${BASE_URL}/sitemap`
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-[#FDFDFD] min-h-screen pt-24 pb-20">
      <EnhancedSEO
        title="Mapa do Site Completo | KY Drywall Curitiba"
        description="Índice estruturado com todas as páginas, produtos e cobertura regional por bairro em Curitiba e Região Metropolitana."
        canonical={`${BASE_URL}/sitemap`}
        schema={schema}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header - Showroom Style */}
        <div className="relative bg-white rounded-[40px] border border-slate-200 p-8 sm:p-16 mb-12 overflow-hidden shadow-sm text-center">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full text-[10px] font-mono font-bold text-[#D31219] uppercase tracking-widest mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#D31219]"></span>
              01 — ESTRUTURA DIGITAL
            </div>
            
            <h1 className="text-4xl sm:text-7xl font-black text-slate-900 tracking-tight leading-[1.05] mb-8">
              Índice <span className="text-[#D31219]">Completo</span> do Site.
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-12 max-w-2xl mx-auto font-medium">
              Navegue por todas as sessões institucionais, catálogo técnico de insumos e nosso guia regional de atendimento.
            </p>

            {/* Metrics Grid */}
            <div className="flex flex-wrap justify-center gap-4">
               <div className="bg-slate-50 px-8 py-4 rounded-2xl border border-slate-100 shadow-sm text-center min-w-[140px]">
                  <div className="text-2xl font-black text-slate-900">{totalPages}+</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Páginas</div>
               </div>
               <div className="bg-slate-50 px-8 py-4 rounded-2xl border border-slate-100 shadow-sm text-center min-w-[140px]">
                  <div className="text-2xl font-black text-[#D31219]">{totalProducts}</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Insumos</div>
               </div>
               <div className="bg-slate-50 px-8 py-4 rounded-2xl border border-slate-100 shadow-sm text-center min-w-[140px]">
                  <div className="text-2xl font-black text-slate-900">{totalNeighborhoods + totalCities}</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Regiões</div>
               </div>
            </div>
          </div>
        </div>

        <div className="space-y-16 lg:space-y-24 mt-20">
          {/* Section 02: Core Navigation */}
          <section>
            <div className="flex items-center gap-4 mb-10 pb-4 border-b-2 border-slate-900/5">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                <Map size={20} />
              </div>
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">02 — Navegação Principal</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-[#D31219]/20 transition-all">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Info size={16} className="text-[#D31219]" /> Institucional
                </h3>
                <ul className="space-y-3 text-sm">
                  <li><Link to="/" className="text-slate-500 hover:text-[#D31219] font-bold block py-1 transition-colors">• Início</Link></li>
                  <li><Link to="/empresa" className="text-slate-500 hover:text-[#D31219] font-bold block py-1 transition-colors">• A Empresa</Link></li>
                  <li><Link to="/servicos" className="text-slate-500 hover:text-[#D31219] font-bold block py-1 transition-colors">• Nossos Sistemas</Link></li>
                  <li><Link to="/produtos" className="text-slate-500 hover:text-[#D31219] font-bold block py-1 transition-colors">• Catálogo Técnico</Link></li>
                  <li><Link to="/contato" className="text-slate-500 hover:text-[#D31219] font-bold block py-1 transition-colors">• Fale Conosco</Link></li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-[#D31219]/20 transition-all">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <BookOpen size={16} className="text-[#D31219]" /> Conhecimento
                </h3>
                <ul className="space-y-3 text-sm">
                  <li><Link to="/blog" className="text-slate-500 hover:text-[#D31219] font-bold block py-1 transition-colors">• Portal do Blog</Link></li>
                  <li><Link to="/faq" className="text-slate-500 hover:text-[#D31219] font-bold block py-1 transition-colors">• Perguntas Frequentes</Link></li>
                  <li><Link to="/links" className="text-slate-500 hover:text-[#D31219] font-bold block py-1 transition-colors">• Links Úteis</Link></li>
                  <li><Link to="/steel-frame" className="text-slate-500 hover:text-[#D31219] font-bold block py-1 transition-colors">• Guia Steel Frame</Link></li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-[#D31219]/20 transition-all">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Sparkles size={16} className="text-[#D31219]" /> Especialidades
                </h3>
                <ul className="space-y-3 text-sm">
                  {SERVICES.slice(0, 5).map(s => (
                    <li key={s.id}>
                      <Link to={`/servicos/${s.id}`} className="text-slate-500 hover:text-[#D31219] font-bold block py-1 transition-colors truncate">
                        • {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Section 03: Products Catalog */}
          <section>
            <div className="flex items-center gap-4 mb-10 pb-4 border-b-2 border-slate-900/5">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                <Package size={20} />
              </div>
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">03 — Insumos e Materiais Técnicos</h2>
            </div>
            
            <div className="bg-white rounded-[40px] border border-slate-200 p-8 md:p-12 shadow-sm">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {CATEGORIES.map(cat => (
                  <div key={cat} className="space-y-4">
                    <h4 className="text-[10px] font-black text-[#D31219] uppercase tracking-widest border-b border-red-50 pb-2">{cat}</h4>
                    <ul className="space-y-2">
                      {PRODUCTS.filter(p => p.category === cat).slice(0, 8).map(p => (
                        <li key={p.id}>
                          <Link to={`/produto/${p.id}`} className="text-[11px] text-slate-500 hover:text-slate-900 font-bold block truncate transition-colors">
                            {p.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-12 pt-8 border-t border-slate-50 text-center">
                <Link to="/produtos" className="bg-slate-900 text-white font-black px-10 py-5 rounded-2xl text-xs uppercase tracking-widest hover:bg-black transition-all shadow-lg active:scale-95">
                  Acessar Catálogo Completo
                </Link>
              </div>
            </div>
          </section>

          {/* Section 04: Regional Pages */}
          <section>
            <div className="flex items-center gap-4 mb-10 pb-4 border-b-2 border-slate-900/5">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">04 — Cobertura em Curitiba e RMC</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Bairros */}
              <div className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm">
                <h3 className="text-lg font-black text-slate-900 uppercase tracking-widest mb-8 flex items-center gap-3">
                  <Building2 size={24} className="text-[#D31219]" /> Bairros de Curitiba
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 text-[11px] max-h-[400px] overflow-y-auto pr-4 custom-scrollbar font-bold text-slate-500">
                  {NEIGHBORHOODS.map(n => (
                    <Link key={n} to={`/drywall-em/${normalizeLocationName(n)}`} className="hover:text-[#D31219] transition-colors py-1 border-b border-slate-50">
                      • {n}
                    </Link>
                  ))}
                </div>
              </div>

              {/* RMC */}
              <div className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm">
                <h3 className="text-lg font-black text-slate-900 uppercase tracking-widest mb-8 flex items-center gap-3">
                  <Landmark size={24} className="text-[#D31219]" /> Cidades da Região
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-[11px] max-h-[400px] overflow-y-auto pr-4 custom-scrollbar font-bold text-slate-500">
                  {CITIES_RMC.map(c => (
                    <Link key={c} to={`/drywall-em/${normalizeLocationName(c)}`} className="hover:text-[#D31219] transition-colors py-1 border-b border-slate-50">
                      • {c}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Technical Files Footer */}
          <section className="bg-slate-950 text-white rounded-[40px] p-10 md:p-16 relative overflow-hidden shadow-2xl">
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px]"></div>
             <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center gap-2 text-[#D31219] text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                    <FileCode size={14} />
                    <span>Indexing & Bots</span>
                  </div>
                  <h3 className="text-3xl font-black mb-4">Recursos de Indexação</h3>
                  <p className="text-slate-400 max-w-md leading-relaxed font-medium">Arquivos estruturados para motores de busca e diretrizes de conformidade técnica digital.</p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-3">
                   <a href="/sitemap.xml" target="_blank" className="bg-white/10 hover:bg-[#D31219] text-white px-8 py-4 rounded-xl border border-white/10 transition-all font-black text-[10px] uppercase tracking-widest">sitemap.xml</a>
                   <a href="/robots.txt" target="_blank" className="bg-white/10 hover:bg-[#D31219] text-white px-8 py-4 rounded-xl border border-white/10 transition-all font-black text-[10px] uppercase tracking-widest">robots.txt</a>
                   <a href="/llms.txt" target="_blank" className="bg-white/10 hover:bg-[#D31219] text-white px-8 py-4 rounded-xl border border-white/10 transition-all font-black text-[10px] uppercase tracking-widest">llms.txt</a>
                </div>
             </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
