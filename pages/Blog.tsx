
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { NEIGHBORHOODS, CITIES_RMC, BLOG_POSTS, normalizeLocationName, BASE_URL, COMPANY_INFO } from '../constants';
import { Building2, Landmark, Clock, TrendingUp, ShieldCheck, ThermometerSnowflake, MessageCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const Blog: React.FC = () => {
  const { postId } = useParams<{ postId?: string }>();
  const currentPost = postId ? BLOG_POSTS.find(p => p.id === postId) : null;

  if (currentPost) {
    return (
      <div className="bg-white min-h-screen">
        <EnhancedSEO
          title={`${currentPost.title} | Blog KY Drywall`}
          description={currentPost.excerpt}
          keywords={`${currentPost.tag}, drywall curitiba, steel frame, construção a seco`}
          canonical={`${BASE_URL}/blog/${currentPost.id}`}
          ogType="article"
          schema={{
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: currentPost.title,
            description: currentPost.excerpt,
            image: currentPost.img,
            datePublished: '2025-01-01',
            author: { '@type': 'Organization', name: 'KY Drywall & Steel Frame' },
            publisher: { '@type': 'Organization', name: 'KY Drywall & Steel Frame' }
          }}
        />
        <section className="bg-slate-900 py-14 text-white border-b border-slate-800">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white font-medium mb-4 transition-colors">
              <ArrowLeft size={14} /> Voltar ao Blog
            </Link>
            <div className="mb-2">
              <span className="text-[#D31219] text-xs font-bold uppercase tracking-wider">{currentPost.tag}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight mb-3">{currentPost.title}</h1>
            <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
              <Clock size={13} /> {currentPost.date}
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="aspect-video rounded overflow-hidden mb-8 border border-slate-200">
              <img src={currentPost.img} alt={currentPost.title} className="w-full h-full object-cover" />
            </div>
            <div className="space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p className="text-base sm:text-lg text-slate-900 font-medium leading-relaxed pb-2 border-b border-slate-100">
                {currentPost.excerpt}
              </p>
              <p>
                A KY Drywall & Steel Frame é distribuidora de materiais para construção a seco em Curitiba e Região Metropolitana. Oferecemos linha completa de perfis, chapas e fixações para {currentPost.tag.toLowerCase()}, com suporte técnico para calcular e orçar sua obra.
              </p>
              <p>
                Trabalhamos com marcas homologadas no mercado nacional como Placo, Knauf, Barbieri e Gypsum, assegurando estanqueidade, resistência ao fogo e isolamento acústico em conformidade com as normas ABNT.
              </p>
              <p>
                Nossa logística atende obras comerciais e residenciais com agilidade. Envie sua relação de materiais ou projeto para orçamento sem compromisso.
              </p>
            </div>
            <div className="bg-slate-900 p-6 sm:p-8 rounded text-white mt-10 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-bold mb-1">Deseja cotar materiais para seu projeto?</h3>
                <p className="text-xs sm:text-sm text-slate-300">Nossa equipe calcula quantitativos e envia proposta detalhada via WhatsApp.</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá! Vim do blog (${currentPost.title}) e gostaria de um orçamento.`}
                  className="bg-[#D31219] hover:bg-red-700 text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded transition-colors flex items-center gap-2"
                >
                  <MessageCircle size={15} /> WhatsApp
                </a>
                <Link
                  to="/produtos"
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded border border-slate-700 transition-colors"
                >
                  Produtos
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Outras Matérias do Blog</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {BLOG_POSTS.filter(p => p.id !== currentPost.id).map(post => (
                <Link key={post.id} to={`/blog/${post.id}`} className="bg-white rounded border border-slate-200 overflow-hidden hover:border-slate-400 transition-colors flex flex-col justify-between">
                  <div className="aspect-video overflow-hidden border-b border-slate-100">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <span className="text-[#D31219] text-[10px] font-bold uppercase tracking-wider">{post.tag}</span>
                    <h3 className="text-xs font-bold text-slate-900 mt-1 line-clamp-2 leading-snug">{post.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog KY Drywall',
    description: 'Notícias, tendências e guias técnicos sobre construção a seco, Drywall, Steel Frame e Telhado Shingle para Curitiba e Região Metropolitana',
    url: `${BASE_URL}/blog`,
    publisher: {
      '@type': 'Organization',
      name: 'KY Drywall & Steel Frame',
      logo: {
        '@type': 'ImageObject',
        url: 'https://images.pexels.com/photos/1292294/pexels-photo-1292294.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    },
    blogPost: BLOG_POSTS.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      image: post.img,
      datePublished: '2025-01-01',
      author: {
        '@type': 'Organization',
        name: 'KY Drywall & Steel Frame'
      },
      publisher: {
        '@type': 'Organization',
        name: 'KY Drywall & Steel Frame'
      },
      keywords: post.tag
    })),
    about: {
      '@type': 'Thing',
      name: 'Construção a Seco'
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <EnhancedSEO
        title="Blog & Localidades - Guia Regional"
        description="Blog com notícias, tendências e guias técnicos sobre construção a seco. Guia regional completo de Drywall e Steel Frame para todos os bairros de Curitiba e cidades da RMC."
        keywords="blog drywall, notícias steel frame, guia regional curitiba, drywall por bairro, steel frame rmc, tendências construção 2025, bairros curitiba, cidades rmc, isolamento térmico, clima curitiba"
        canonical={`${BASE_URL}/blog`}
        ogType="website"
        schema={blogSchema}
      />
      <section className="bg-slate-900 py-16 text-white border-b border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="text-[#D31219] font-bold uppercase tracking-wider text-xs mb-2 block">
            Publicações & Normas Técnicas
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight mb-3">
            Blog & Guia Regional de Atendimento
          </h1>
          <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Artigos técnicos sobre montagem, normas da ABNT e diretrizes de logística para Curitiba e todos os municípios da Região Metropolitana.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-14">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-2 mb-6 text-slate-900 font-bold text-base">
            <TrendingUp size={18} className="text-[#D31219]" />
            <span>Matérias Técnicas em Destaque</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post, i) => (
              <div key={i} className="bg-white rounded border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-slate-400 transition-colors">
                <div>
                  <div className="aspect-video relative overflow-hidden border-b border-slate-100">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
                    <span className="absolute top-3 right-3 bg-slate-900/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded uppercase tracking-wider">
                      {post.tag}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-2 font-medium">
                      <Clock size={12} /> {post.date}
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug">{post.title}</h3>
                    <p className="text-slate-600 text-xs mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                  </div>
                </div>
                <div className="p-5 pt-0">
                  <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D31219] hover:text-red-700 transition-colors">
                    Ler Artigo Completo <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Index */}
      <section className="py-14 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">
              Guia Regional: Curitiba & Região Metropolitana
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Páginas dedicadas com especificações de entrega, dados climáticos e atendimento para cada bairro e município.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded border border-slate-200">
              <div className="flex items-center gap-2.5 mb-4 border-b border-slate-100 pb-3">
                <Building2 size={20} className="text-[#D31219]" />
                <h3 className="text-base font-bold text-slate-900">Bairros de Curitiba</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2.5 max-h-[360px] overflow-y-auto pr-2 text-xs">
                {NEIGHBORHOODS.map(n => (
                  <div key={n} className="flex flex-col gap-0.5 border-b border-slate-50 pb-1.5">
                    <Link to={`/drywall-em/${normalizeLocationName(n)}`} className="text-slate-700 hover:text-[#D31219] font-medium truncate">
                      Drywall {n}
                    </Link>
                    <Link to={`/steel-frame-em/${normalizeLocationName(n)}`} className="text-[10px] text-slate-400 hover:text-slate-900 truncate">
                      Steel Frame {n}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded border border-slate-200">
              <div className="flex items-center gap-2.5 mb-4 border-b border-slate-100 pb-3">
                <Landmark size={20} className="text-[#003366]" />
                <h3 className="text-base font-bold text-slate-900">Cidades da RMC</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 max-h-[360px] overflow-y-auto pr-2 text-xs">
                {CITIES_RMC.map(c => (
                  <div key={c} className="flex flex-col gap-0.5 border-b border-slate-50 pb-1.5">
                    <Link to={`/drywall-em/${normalizeLocationName(c)}`} className="text-slate-700 hover:text-[#D31219] font-medium truncate">
                      Drywall em {c}
                    </Link>
                    <Link to={`/steel-frame-em/${normalizeLocationName(c)}`} className="text-[10px] text-slate-400 hover:text-slate-900 truncate">
                      Steel Frame em {c}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Notes Section */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded border border-slate-200 bg-slate-50/60">
              <div className="flex items-center gap-2.5 text-slate-900 font-bold text-sm mb-2">
                <ShieldCheck className="text-[#D31219]" size={20} />
                <h4>Assessoria Técnica e Quantitativos</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                A KY Drywall orienta a especificação correta de montantes, guias, cantoneiras e chapas específicas (RU para umidade, RF para corta-fogo, Performa para acústica), evitando desperdício de insumos na obra.
              </p>
            </div>
            <div className="p-5 rounded border border-slate-200 bg-slate-50/60">
              <div className="flex items-center gap-2.5 text-slate-900 font-bold text-sm mb-2">
                <ThermometerSnowflake className="text-[#003366]" size={20} />
                <h4>Desempenho Térmico no Clima Paranaense</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Em função das oscilações térmicas de Curitiba e região serrana, a combinação de chapas de gesso com lã mineral ou de vidro proporciona controle bioclimático superior com redução no consumo de aquecedores e ar-condicionado.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
