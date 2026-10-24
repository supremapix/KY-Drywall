
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { NEIGHBORHOODS, CITIES_RMC, BLOG_POSTS, normalizeLocationName, BASE_URL, COMPANY_INFO } from '../constants';
import { Building2, Landmark, Clock, TrendingUp, ShieldCheck, ThermometerSnowflake, MessageCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const Blog: React.FC = () => {
  const { postId } = useParams<{ postId?: string }>();
  const [selectedTag, setSelectedTag] = React.useState<string>('Todos');
  const currentPost = postId ? BLOG_POSTS.find(p => p.id === postId) : null;

  const allTags = ['Todos', ...Array.from(new Set(BLOG_POSTS.map(p => p.tag)))];
  const filteredPosts = selectedTag === 'Todos'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.tag === selectedTag);

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
      {/* Article Hero - Industrial Showroom */}
      <section className="bg-white py-20 md:py-32 text-slate-900 relative overflow-hidden border-b-2 border-slate-100">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-100"></div>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-[10px] font-black text-slate-400 hover:text-[#D31219] uppercase tracking-[0.2em] mb-12 transition-all">
            <ArrowLeft size={16} /> VOLTAR AO ÍNDICE
          </Link>
          <div className="max-w-4xl">
            <div className="mb-8">
              <span className="text-[#D31219] text-[10px] font-black uppercase tracking-[0.2em] bg-red-50 border border-red-100 px-4 py-1.5 rounded-full shadow-sm">{currentPost.tag}</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1] mb-10 text-slate-950">{currentPost.title}</h1>
            <div className="flex items-center gap-4 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
              <Clock size={16} className="text-[#D31219]" /> PUBLICADO EM {currentPost.date}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden mb-12 border border-slate-200 shadow-xl bg-slate-100">
              <img src={currentPost.img} alt={currentPost.title} className="w-full h-full object-cover" />
            </div>
            <div className="space-y-8 text-slate-700 text-lg sm:text-xl leading-relaxed">
              <p className="text-xl sm:text-2xl text-slate-900 font-bold leading-relaxed pb-8 border-b border-slate-100">
                {currentPost.excerpt}
              </p>
              <p>
                A KY Drywall & Steel Frame é distribuidora líder de materiais para construção a seco em Curitiba e Região Metropolitana. Oferecemos linha completa de perfis, chapas e fixações para {currentPost.tag.toLowerCase()}, com suporte técnico especializado para cada fase da sua obra.
              </p>
              <p>
                Trabalhamos exclusivamente com marcas homologadas como Placo, Knauf e Barbieri, garantindo conformidade total com as normas ABNT. Nossa logística é focada na agilidade, atendendo canteiros de obras com prontidão.
              </p>
            </div>

            {/* Post CTA */}
            <div className="bg-slate-900 p-8 md:p-12 rounded-2xl text-white mt-16 border border-slate-800 relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px]"></div>
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10 text-center md:text-left">
                <div>
                  <h3 className="text-2xl font-black mb-3 leading-tight">Precisa de orçamento técnico?</h3>
                  <p className="text-slate-400 text-base leading-relaxed">Nossa equipe calcula seus quantitativos e envia proposta detalhada via WhatsApp.</p>
                </div>
                <div className="flex flex-col gap-3 shrink-0">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá! Vim do blog (${currentPost.title}) e gostaria de um orçamento.`}
                    className="bg-[#D31219] hover:bg-red-700 text-white text-sm font-black uppercase tracking-widest px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg active:scale-[0.98]"
                  >
                    <MessageCircle size={20} /> WhatsApp
                  </a>
                  <Link
                    to="/produtos"
                    className="bg-slate-800 hover:bg-slate-700 text-white text-sm font-black uppercase tracking-widest px-8 py-4 rounded-xl border border-slate-700 transition-all text-center active:scale-[0.98]"
                  >
                    Produtos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black text-slate-900 mb-10 text-center md:text-left">Outras Matérias do Blog</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {BLOG_POSTS.filter(p => p.id !== currentPost.id).slice(0, 3).map(post => (
                <Link key={post.id} to={`/blog/${post.id}`} className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-[#D31219]/30 hover:shadow-md transition-all flex flex-col">
                  <div className="aspect-video overflow-hidden border-b border-slate-100 bg-slate-100">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <span className="text-[#D31219] text-[10px] font-black uppercase tracking-widest block mb-2">{post.tag}</span>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-[#D31219] transition-colors line-clamp-2">{post.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
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
      
      {/* Blog Hero - Industrial Showroom */}
      <section className="bg-white py-20 md:py-32 text-slate-900 relative overflow-hidden border-b-2 border-slate-100">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-100"></div>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 text-[#D31219] text-[10px] font-black uppercase tracking-[0.2em] bg-red-50 border border-red-100 px-4 py-2 rounded-full mb-10 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D31219]"></span>
              <span>01 — CONHECIMENTO TÉCNICO</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[1.05] mb-10 text-slate-950">
              Blog & <span className="text-[#D31219]">Guia</span> Regional
            </h1>
            <p className="text-slate-600 text-lg sm:text-2xl leading-relaxed max-w-2xl font-medium">
              Artigos técnicos sobre montagem, normas da ABNT e diretrizes de atendimento para Curitiba e todos os municípios da RMC.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-slate-100 pb-8">
            <div className="flex items-center gap-3 text-slate-900 font-black text-xl sm:text-2xl uppercase tracking-tight">
              <TrendingUp size={24} className="text-[#D31219]" />
              <span>Artigos Recentes</span>
            </div>

            {/* Tag Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${
                    selectedTag === tag
                      ? 'bg-[#D31219] text-white shadow-md'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-[#D31219]/30 hover:shadow-xl transition-all group">
                <div>
                  <div className="aspect-video relative overflow-hidden bg-slate-900">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <span className="absolute top-4 right-4 bg-slate-950/90 backdrop-blur-sm text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-[0.1em] border border-white/10">
                      {post.tag}
                    </span>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest mb-4">
                      <Clock size={12} className="text-[#D31219]" /> {post.date}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-[#D31219] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 text-base mb-6 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                <div className="p-6 md:p-8 pt-0 mt-auto">
                  <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-sm font-black text-[#D31219] hover:text-red-700 transition-colors uppercase tracking-[0.15em]">
                    Ler Artigo <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Index - Light Theme */}
      <section className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-200">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-100"></div>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 text-[#D31219] text-[10px] font-black uppercase tracking-[0.2em] mb-8 bg-red-50 border border-red-100 px-4 py-2 rounded-full shadow-sm">
              <Building2 size={14} />
              <span>02 — ATENDIMENTO REGIONAL</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-8 text-slate-950">
              Curitiba & <span className="text-[#D31219]">Região</span> Metropolitana
            </h2>
            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed font-medium">
              Consulte as especificações de entrega, prazos e consultoria técnica para sua localidade específica.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-xl">
              <div className="flex items-center gap-5 mb-10 border-b border-slate-50 pb-8">
                <div className="w-16 h-16 rounded-2xl bg-red-50 text-[#D31219] flex items-center justify-center border border-red-100 shadow-sm">
                  <Building2 size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-widest text-slate-950">Bairros de Curitiba</h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{NEIGHBORHOODS.length} regiões atendidas</p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4 max-h-[440px] overflow-y-auto pr-6 custom-scrollbar text-sm">
                {NEIGHBORHOODS.map(n => (
                  <Link key={n} to={`/drywall-em/${normalizeLocationName(n)}`} className="text-slate-600 hover:text-[#D31219] font-bold transition-all border-b border-slate-50 pb-2 hover:translate-x-1 inline-block">
                    • {n}
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-xl">
              <div className="flex items-center gap-5 mb-10 border-b border-slate-50 pb-8">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-lg">
                  <Landmark size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-widest text-slate-950">Cidades da RMC</h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{CITIES_RMC.length} municípios atendidos</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 max-h-[440px] overflow-y-auto pr-6 custom-scrollbar text-sm">
                {CITIES_RMC.map(c => (
                  <Link key={c} to={`/drywall-em/${normalizeLocationName(c)}`} className="text-slate-600 hover:text-[#D31219] font-bold transition-all border-b border-slate-50 pb-2 hover:translate-x-1 inline-block">
                    • {c}
                  </Link>
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
