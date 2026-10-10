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
    <div className="bg-white min-h-screen">
      <EnhancedSEO
        title="Mapa do Site Completo | KY Drywall & Steel Frame Curitiba"
        description="Índice completo com todas as páginas, produtos, serviços, artigos técnicos e guias de distribuição por bairro em Curitiba e Região Metropolitana."
        canonical={`${BASE_URL}/sitemap`}
        schema={schema}
      />

      {/* Hero Header */}
      <section className="bg-slate-950 py-16 md:py-24 text-white relative overflow-hidden bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-[#D31219] text-xs font-mono font-bold uppercase tracking-wider bg-[#D31219]/10 border border-[#D31219]/30 px-3 py-1 rounded mb-6">
            <span>01 — ESTRUTURA COMPLETA</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6">
            Mapa do Site
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Acesse integralmente o índice de soluções, produtos e cobertura regional da KY Drywall em Curitiba.
          </p>

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { value: `${totalPages}+`, label: 'Páginas' },
              { value: totalProducts, label: 'Produtos' },
              { value: totalNeighborhoods + totalCities, label: 'Regiões' }
            ].map((stat, i) => (
              <div key={i} className="bg-slate-900/50 backdrop-blur-sm px-6 py-3 rounded-xl border border-slate-800 text-center min-w-[120px]">
                <div className="text-xl font-black text-[#D31219]">{stat.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-20">
        {/* Core Top Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Section: Institucional */}
          <section className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2.5 mb-4 flex items-center gap-2">
                <Info size={16} className="text-[#D31219]" />
                <span>Institucional & Principal</span>
              </h2>
              <ul className="space-y-2 text-xs text-slate-700">
                <li><Link to="/" className="hover:text-[#D31219] transition-colors font-medium">Página Inicial (Home)</Link></li>
                <li><Link to="/empresa" className="hover:text-[#D31219] transition-colors font-medium">A Empresa (Sobre a KY)</Link></li>
                <li><Link to="/steel-frame" className="hover:text-[#D31219] transition-colors font-medium">Construção em Steel Frame</Link></li>
                <li><Link to="/produtos" className="hover:text-[#D31219] transition-colors font-medium">Catálogo Geral de Produtos</Link></li>
                <li><Link to="/servicos" className="hover:text-[#D31219] transition-colors font-medium">Serviços & Sistemas</Link></li>
                <li><Link to="/blog" className="hover:text-[#D31219] transition-colors font-medium">Blog & Notícias Técnicas</Link></li>
                <li><Link to="/faq" className="hover:text-[#D31219] transition-colors font-medium">Perguntas Frequentes (FAQ)</Link></li>
                <li><Link to="/links" className="hover:text-[#D31219] transition-colors font-medium">Central de Links & Bio</Link></li>
                <li><Link to="/contato" className="hover:text-[#D31219] transition-colors font-medium">Fale Conosco & Localização</Link></li>
              </ul>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] text-slate-500">
              Acesso rápido para contato e diretrizes corporativas.
            </div>
          </section>

          {/* Section: Sistemas e Soluções Construtivas */}
          <section className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2.5 mb-4 flex items-center gap-2">
                <Layers size={16} className="text-[#D31219]" />
                <span>Sistemas Construtivos</span>
              </h2>
              <ul className="space-y-2.5 text-xs text-slate-700">
                {SERVICES.map(s => (
                  <li key={s.id}>
                    <Link to={`/servicos/${s.id}`} className="hover:text-[#D31219] transition-colors flex items-start gap-1.5">
                      <ChevronRight size={13} className="text-[#D31219] shrink-0 mt-0.5" />
                      <span className="font-medium">{s.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100">
              <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Página Especializada</span>
              <Link to="/steel-frame" className="text-xs font-semibold text-[#D31219] hover:underline flex items-center gap-1">
                Especial Steel Frame Curitiba →
              </Link>
            </div>
          </section>

          {/* Section: Artigos do Blog & Recursos Técnicos */}
          <section className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2.5 mb-4 flex items-center gap-2">
                <BookOpen size={16} className="text-[#D31219]" />
                <span>Artigos & Conteúdo Técnico</span>
              </h2>
              <ul className="space-y-2.5 text-xs text-slate-700">
                {BLOG_POSTS.map(post => (
                  <li key={post.id}>
                    <Link to={`/blog/${post.id}`} className="hover:text-[#D31219] transition-colors flex items-start gap-1.5">
                      <ChevronRight size={13} className="text-slate-400 shrink-0 mt-0.5" />
                      <span className="font-medium line-clamp-2">{post.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <Link to="/blog" className="text-xs font-semibold text-[#D31219] hover:underline">
                Acessar Portal do Blog →
              </Link>
            </div>
          </section>
        </div>

        {/* Section: Catálogo Completo de Produtos (Categorias e Itens) */}
        <section className="bg-white p-6 md:p-8 rounded-lg border border-slate-200 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-6">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <Package size={20} className="text-[#D31219]" />
                <span>Catálogo Completo de Insumos & Produtos</span>
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Itens normatizados em estoque a pronta entrega no Centro de Distribuição Cajuru.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {CATEGORIES.map(cat => (
                <Link
                  key={cat}
                  to={`/produtos?cat=${encodeURIComponent(cat)}`}
                  className="px-2.5 py-1 rounded bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-[#D31219] text-[11px] font-medium transition-colors"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
            {PRODUCTS.map(product => (
              <Link
                key={product.id}
                to={`/produto/${product.id}`}
                className="p-2.5 rounded border border-slate-100 hover:border-slate-300 hover:bg-slate-50/70 transition-all flex items-start gap-2.5 group"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-10 h-10 object-cover rounded shrink-0 border border-slate-200 bg-white"
                  onError={(e) => (e.target as HTMLImageElement).src = '/chapa_drywall_st_branca.jpg'}
                />
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] text-slate-400 font-semibold uppercase block truncate">
                    {product.category}
                  </span>
                  <p className="font-semibold text-slate-800 group-hover:text-[#D31219] transition-colors truncate">
                    {product.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Section: Guia de Atendimento por Bairro em Curitiba */}
        <section className="bg-white p-6 md:p-8 rounded-lg border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3 mb-6">
            <Map size={20} className="text-[#D31219]" />
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Páginas de Atendimento por Bairro em Curitiba
              </h2>
              <p className="text-xs text-slate-500">
                Cobertura logística diária com pronta entrega de drywall e steel frame para todos os bairros.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-3 text-xs">
            {NEIGHBORHOODS.map(n => {
              const slug = normalizeLocationName(n);
              return (
                <div key={n} className="p-2 rounded bg-slate-50/60 border border-slate-100 hover:border-slate-200 transition-colors">
                  <span className="font-semibold text-slate-900 block truncate mb-1">{n}</span>
                  <div className="flex flex-col gap-0.5 text-[11px]">
                    <Link
                      to={`/drywall-em/${slug}`}
                      className="text-[#D31219] hover:underline flex items-center gap-1"
                    >
                      <ChevronRight size={10} /> Drywall
                    </Link>
                    <Link
                      to={`/steel-frame-em/${slug}`}
                      className="text-slate-600 hover:text-slate-900 hover:underline flex items-center gap-1"
                    >
                      <ChevronRight size={10} /> Steel Frame
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section: Guia de Atendimento na Região Metropolitana de Curitiba */}
        <section className="bg-white p-6 md:p-8 rounded-lg border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3 mb-6">
            <Map size={20} className="text-[#003366]" />
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Páginas de Atendimento na Região Metropolitana de Curitiba (RMC)
              </h2>
              <p className="text-xs text-slate-500">
                Expedição direta e suporte para canteiros de obras nas cidades vizinhas.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-xs">
            {CITIES_RMC.map(c => {
              const slug = normalizeLocationName(c);
              return (
                <div key={c} className="p-3 rounded bg-slate-50/60 border border-slate-100 hover:border-slate-200 transition-colors">
                  <span className="font-semibold text-slate-900 block truncate mb-1">{c}</span>
                  <div className="flex flex-col gap-1 text-[11px]">
                    <Link
                      to={`/drywall-em/${slug}`}
                      className="text-[#D31219] hover:underline flex items-center gap-1"
                    >
                      <ChevronRight size={10} /> Drywall {c}
                    </Link>
                    <Link
                      to={`/steel-frame-em/${slug}`}
                      className="text-slate-600 hover:text-slate-900 hover:underline flex items-center gap-1"
                    >
                      <ChevronRight size={10} /> Steel Frame {c}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Technical & Indexation Files Bar */}
        <section className="bg-slate-900 text-white p-6 rounded-lg border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <FileCode size={18} className="text-[#D31219]" />
              <h3 className="text-sm font-bold">Arquivos Técnicos para Motores de Busca & Bots</h3>
            </div>
            <p className="text-xs text-slate-400">
              Estruturas XML e diretrizes de indexação atualizadas para robôs de busca.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 text-xs">
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-3.5 py-2 rounded border border-slate-700 transition-colors flex items-center gap-1.5"
            >
              <span>sitemap.xml</span>
              <ExternalLink size={12} />
            </a>
            <a
              href="/robots.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-3.5 py-2 rounded border border-slate-700 transition-colors flex items-center gap-1.5"
            >
              <span>robots.txt</span>
              <ExternalLink size={12} />
            </a>
            <a
              href="/llms.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-3.5 py-2 rounded border border-slate-700 transition-colors flex items-center gap-1.5"
            >
              <span>llms.txt</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sitemap;
