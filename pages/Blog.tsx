
import React from 'react';
import { Link } from 'react-router-dom';
import { NEIGHBORHOODS, CITIES_RMC, BLOG_POSTS, normalizeLocationName, BASE_URL } from '../constants';
import { MapPin, ArrowRight, Building2, Landmark, Clock, TrendingUp, ShieldAlert, ThermometerSnowflake } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const Blog: React.FC = () => {
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
        url: 'https://kydrywall.com.br/produtos/wp-content/uploads/2022/09/logotipo-kydrywall-1-1.png'
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
        description="Blog com notícias, tendências e guias técnicos sobre construção a seco 2025/2026. Guia regional completo de Drywall e Steel Frame para todos os bairros de Curitiba e cidades da RMC. Informações técnicas personalizadas por localidade."
        keywords="blog drywall, notícias steel frame, guia regional curitiba, drywall por bairro, steel frame rmc, tendências construção 2025, bairros curitiba, cidades rmc, isolamento térmico, clima curitiba"
        canonical={`${BASE_URL}/blog`}
        ogType="website"
        schema={blogSchema}
      />
      <section className="bg-[#1A1A1A] py-24 text-white relative">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-b from-[#D31219]/20 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-[#D31219] font-black uppercase tracking-widest text-xs mb-4 block">Conteúdo Técnico Atualizado</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
            Blog & <span className="text-[#D31219]">Localidades</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed">
            Notícias, tendências e guias técnicos de construção a seco para 2025 e 2026 em Curitiba e toda a Região Metropolitana.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-12 text-[#D31219] font-black uppercase tracking-widest text-xs">
            <TrendingUp size={20} /> Matérias de Destaque 2025/2026
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {BLOG_POSTS.map((post, i) => (
              <div key={i} className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 group transition-all hover:-translate-y-2">
                <div className="aspect-video relative overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <span className="absolute top-4 right-4 bg-[#1A1A1A] text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest">{post.tag}</span>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-gray-400 text-[10px] font-black mb-4 uppercase tracking-widest">
                    <Clock size={12} /> {post.date}
                  </div>
                  <h3 className="text-xl font-black mb-4 leading-tight group-hover:text-[#D31219] transition-colors uppercase tracking-tight">{post.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed font-medium">{post.excerpt}</p>
                  <button className="flex items-center gap-2 text-[#D31219] font-black uppercase tracking-widest text-[10px] hover:gap-4 transition-all">
                    Ler Conteúdo Completo <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Index */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Guia Regional de <span className="text-[#D31219]">Curitiba & RMC</span></h2>
            <p className="text-gray-500 font-medium">Acesse as páginas dedicadas de cada bairro e cidade com informações técnicas personalizadas.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100">
              <div className="flex items-center gap-4 mb-10 border-b-2 border-[#D31219] pb-4">
                <Building2 size={32} className="text-[#D31219]" />
                <h3 className="text-2xl font-black uppercase tracking-tight">Bairros de Curitiba</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4 max-h-[500px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-[#D31219]">
                {NEIGHBORHOODS.map(n => (
                  <div key={n} className="flex flex-col gap-1 border-b border-gray-50 pb-2">
                    <Link to={`/drywall-em-${normalizeLocationName(n)}`} className="text-[10px] font-bold text-gray-700 hover:text-[#D31219] uppercase tracking-tighter">Drywall {n}</Link>
                    <Link to={`/steel-frame-em-${normalizeLocationName(n)}`} className="text-[8px] font-black text-gray-400 hover:text-black uppercase">Steel Frame {n}</Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1A1A1A] p-12 rounded-[3rem] shadow-xl text-white">
              <div className="flex items-center gap-4 mb-10 border-b-2 border-white/20 pb-4">
                <Landmark size={32} className="text-[#D31219]" />
                <h3 className="text-2xl font-black uppercase tracking-tight">Cidades da RMC</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 max-h-[500px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-white/20">
                {CITIES_RMC.map(c => (
                  <div key={c} className="flex flex-col gap-1 border-b border-white/5 pb-2">
                    <Link to={`/drywall-em-${normalizeLocationName(c)}`} className="text-[10px] font-bold text-gray-300 hover:text-[#D31219] uppercase tracking-widest">Drywall em {c}</Link>
                    <Link to={`/steel-frame-em-${normalizeLocationName(c)}`} className="text-[8px] font-black text-white/20 hover:text-white uppercase">Steel Frame em {c}</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Information Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12">
            <div className="flex gap-6 items-start">
              <ShieldAlert className="text-[#D31219] shrink-0" size={32} />
              <div>
                <h4 className="text-xl font-black uppercase mb-4 tracking-tight">Assessoria Técnica KY 2025</h4>
                <p className="text-gray-600 leading-relaxed font-medium">A KY Drywall não apenas fornece materiais; nós oferecemos um ecossistema de soluções técnicas para the mercado paranaense. Em 2025, focamos na capacitação de equipes locais em bairros periféricos e centrais de Curitiba, elevando o padrão técnico das instalações de drywall e steel frame.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <ThermometerSnowflake className="text-[#D31219] shrink-0" size={32} />
              <div>
                <h4 className="text-xl font-black uppercase mb-4 tracking-tight">O Clima de Curitiba e a Construção Seca</h4>
                <p className="text-gray-600 leading-relaxed font-medium">Com as previsões climáticas para 2026, a eficiência térmica tornou-se o maior diferencial imobiliário em Curitiba. O sistema Steel Frame oferece o melhor isolamento do mercado, mantendo casas quentes no rigoroso inverno curitibano e frescas nos verões úmidos da capital paranaense.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
