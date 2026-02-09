import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Clock, ArrowLeft, MessageCircle, Tag } from 'lucide-react';
import { BLOG_POSTS, BASE_URL } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';

const BLOG_CONTENT: Record<string, { sections: { title: string; content: string }[] }> = {
  'b1': {
    sections: [
      {
        title: 'O que e Steel Frame?',
        content: 'O Steel Frame e um sistema construtivo industrializado que utiliza perfis de aco galvanizado como estrutura principal da edificacao. Diferente da construcao convencional em alvenaria, o Steel Frame oferece uma solucao mais rapida, limpa e sustentavel para construcoes residenciais e comerciais em Curitiba e toda a regiao metropolitana.'
      },
      {
        title: 'Vantagens do Steel Frame em Curitiba',
        content: 'Curitiba, com seu clima subtropical e invernos rigorosos, e uma das cidades brasileiras que mais se beneficiam do sistema Steel Frame. A estrutura metalica permite a instalacao de isolamento termico e acustico de alta performance entre os perfis, garantindo conforto durante todo o ano. Alem disso, a construcao e ate 70% mais rapida que o metodo tradicional, reduzindo custos com mao de obra e desperdicio de materiais.'
      },
      {
        title: 'Steel Frame e Sustentabilidade',
        content: 'A construcao em Steel Frame gera ate 80% menos entulho que a construcao tradicional. Os perfis de aco sao 100% reciclaveis e a obra seca elimina o uso excessivo de agua. Em tempos de crescente preocupacao ambiental, o Steel Frame se posiciona como a escolha inteligente para quem deseja construir de forma responsavel no Parana.'
      },
      {
        title: 'Como a KY Drywall pode ajudar',
        content: 'A KY Drywall e referencia em Steel Frame em Curitiba, oferecendo todos os materiais necessarios para sua obra: perfis montantes e guias de 90mm e 140mm, placas OSB, placas cimenticias, isolamento termoacustico e todos os acessorios de fixacao. Nossa equipe tecnica esta pronta para auxiliar no dimensionamento e especificacao dos materiais ideais para seu projeto.'
      }
    ]
  },
  'b2': {
    sections: [
      {
        title: 'Drywall: A solucao moderna para divisorias e forros',
        content: 'O sistema Drywall revolucionou a construcao civil ao oferecer uma alternativa rapida, limpa e eficiente para a criacao de paredes internas, forros e revestimentos. Composto por chapas de gesso acartonado fixadas em perfis metalicos, o Drywall proporciona acabamento perfeito e versatilidade incomparavel para projetos residenciais e comerciais.'
      },
      {
        title: 'Isolamento Acustico com Drywall',
        content: 'Uma das maiores vantagens do Drywall e a possibilidade de incorporar isolamento acustico entre as placas. Com a utilizacao de la de vidro, la de rocha ou la de PET no interior das paredes, e possivel reduzir significativamente a transmissao de ruido entre ambientes. Isso e especialmente importante em Curitiba, onde apartamentos e escritorios comerciais demandam cada vez mais conforto acustico.'
      },
      {
        title: 'Isolamento Termico para o Clima de Curitiba',
        content: 'O frio curitibano exige solucoes eficientes de isolamento termico. O Drywall, combinado com mantas isolantes, cria uma barreira termica que mantem os ambientes aquecidos no inverno e frescos no verao. Essa eficiencia energetica se traduz em economia na conta de energia eletrica ao longo de todo o ano.'
      },
      {
        title: 'Tipos de Chapas Drywall',
        content: 'A KY Drywall oferece todos os tipos de chapas para cada necessidade: a Chapa ST (branca) para ambientes secos como quartos e salas, a Chapa RU (verde) resistente a umidade para banheiros e cozinhas, e a Chapa RF (rosa) resistente ao fogo para rotas de fuga e areas de risco. Trabalhamos com as melhores marcas do mercado, incluindo Placo, Knauf e Fortissima.'
      }
    ]
  },
  'b3': {
    sections: [
      {
        title: 'O que e Telhado Shingle?',
        content: 'O Telhado Shingle, tambem conhecido como telha asfaltica, e um sistema de cobertura amplamente utilizado nos Estados Unidos e que vem ganhando espaco no mercado brasileiro. Composto por mantas asfalticas com granulos minerais na superficie, o Shingle oferece uma combinacao unica de estetica, durabilidade e protecao contra intemperies.'
      },
      {
        title: 'Vantagens do Shingle em relacao ao telhado convencional',
        content: 'Diferente das telhas ceramicas ou de concreto, o Shingle e extremamente leve, reduzindo a carga sobre a estrutura do telhado. Sua instalacao e mais rapida e limpa, e a variedade de cores e texturas permite criar visuais sofisticados que valorizam qualquer projeto arquitetonico. Alem disso, o Shingle oferece excelente estanqueidade, mesmo em chuvas intensas como as que frequentemente ocorrem em Curitiba.'
      },
      {
        title: 'Durabilidade e Resistencia',
        content: 'As telhas Shingle possuem garantia de ate 30 anos contra defeitos de fabricacao. Sao resistentes a ventos de ate 200 km/h e suportam variacoes termicas extremas sem trincar ou deformar. Para o clima variavel de Curitiba, onde temperaturas podem oscilar significativamente em um mesmo dia, o Shingle demonstra performance superior.'
      },
      {
        title: 'Steel Frame + Shingle: A combinacao perfeita',
        content: 'O Telhado Shingle e o complemento ideal para construcoes em Steel Frame. A estrutura metalica leve do Steel Frame suporta perfeitamente o peso reduzido das telhas Shingle, e a combinacao dos dois sistemas resulta em uma construcao moderna, eficiente e esteticamente impecavel. Na KY Drywall, voce encontra todos os materiais para ambos os sistemas, alem de suporte tecnico especializado para seu projeto.'
      }
    ]
  }
};

const BlogPostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();

  const post = useMemo(() =>
    BLOG_POSTS.find(p => p.id === postId),
    [postId]
  );

  const content = postId ? BLOG_CONTENT[postId] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-black uppercase tracking-tighter mb-4">Artigo nao encontrado</h1>
          <Link to="/blog" className="text-[#D31219] font-black uppercase tracking-widest text-xs hover:underline">
            Voltar ao Blog
          </Link>
        </div>
      </div>
    );
  }

  const whatsappUrl = `https://wa.me/5541996457421?text=${encodeURIComponent(`Olá, li o artigo "${post.title}" e gostaria de mais informações.`)}`;

  const blogPostSchema = {
    '@context': 'https://schema.org',
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
  };

  const otherPosts = BLOG_POSTS.filter(p => p.id !== postId);

  return (
    <div className="bg-white min-h-screen">
      <EnhancedSEO
        title={post.title}
        description={post.excerpt}
        keywords={`${post.tag}, drywall curitiba, steel frame curitiba, construcao a seco`}
        canonical={`${BASE_URL}/blog/${post.id}`}
        ogType="article"
        schema={blogPostSchema}
      />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <img
          src={post.img}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto">
            <span className="bg-[#D31219] text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest mb-4 inline-flex items-center gap-2">
              <Tag size={12} /> {post.tag}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-tight max-w-4xl mt-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 mt-6 text-white/60">
              <Clock size={14} />
              <span className="text-xs font-black uppercase tracking-widest">{post.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase text-gray-400 tracking-[0.2em]">
            <Link to="/" className="hover:text-[#D31219]">Home</Link>
            <ChevronRight size={12} />
            <Link to="/blog" className="hover:text-[#D31219]">Blog</Link>
            <ChevronRight size={12} />
            <span className="text-gray-900 truncate">{post.title}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-600 font-medium italic leading-relaxed mb-16 border-l-4 border-[#D31219] pl-6">
              {post.excerpt}
            </p>

            {content?.sections.map((section, i) => (
              <div key={i} className="mb-12">
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-6 text-gray-900">
                  {section.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                  {section.content}
                </p>
              </div>
            ))}

            {/* CTA */}
            <div className="bg-[#003366] rounded-[2rem] p-10 md:p-16 text-white text-center mt-20">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4">
                Precisa de materiais para sua obra?
              </h3>
              <p className="text-gray-300 font-medium mb-8 max-w-xl mx-auto">
                A KY Drywall tem tudo que voce precisa com pronta entrega em Curitiba e regiao metropolitana. Fale com nossos especialistas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#D31219] hover:bg-white hover:text-[#D31219] text-white font-black px-10 py-5 rounded-2xl flex items-center justify-center gap-3 text-xs uppercase tracking-widest transition-all shadow-xl"
                >
                  <MessageCircle size={20} />
                  Falar com Especialista
                </a>
                <Link
                  to="/produtos"
                  className="bg-white/10 hover:bg-white hover:text-[#003366] text-white font-black px-10 py-5 rounded-2xl flex items-center justify-center gap-3 text-xs uppercase tracking-widest transition-all border border-white/20"
                >
                  Ver Catalogo Completo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {otherPosts.length > 0 && (
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-12 text-center">
              Outras <span className="text-[#D31219]">Materias</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {otherPosts.map((p) => (
                <Link
                  key={p.id}
                  to={`/blog/${p.id}`}
                  className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 group hover:-translate-y-2 transition-all"
                >
                  <div className="aspect-video overflow-hidden">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-8">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#D31219] mb-2 block">{p.tag}</span>
                    <h4 className="text-lg font-black uppercase tracking-tight group-hover:text-[#D31219] transition-colors">{p.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog */}
      <div className="py-12 text-center">
        <Link
          to="/blog"
          className="inline-flex items-center gap-3 text-[#D31219] font-black uppercase tracking-widest text-xs hover:gap-5 transition-all"
        >
          <ArrowLeft size={16} /> Voltar ao Blog e Localidades
        </Link>
      </div>
    </div>
  );
};

export default BlogPostPage;
