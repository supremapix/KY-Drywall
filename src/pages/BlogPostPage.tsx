import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ChevronRight,
  Clock,
  ArrowLeft,
  MessageCircle,
  Tag,
  CheckCircle2,
  Building2,
  Truck,
  ShieldCheck,
  DollarSign,
  Sparkles,
  Layers,
  Phone
} from 'lucide-react';
import { BLOG_POSTS, BASE_URL, COMPANY_INFO } from '../constants';
import NotFound from './NotFound';
import EnhancedSEO from '../components/EnhancedSEO';

interface BlogSection {
  title: string;
  content: string;
  bullets?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
}

interface BlogPostContent {
  highlights: string[];
  sections: BlogSection[];
  faq?: { question: string; answer: string }[];
}

const BLOG_CONTENT: Record<string, BlogPostContent> = {
  "b1": {
    "highlights": [
      "Entenda os componentes do sistema, a importância do projeto e os cuidados para comparar propostas.",
      "Confirme especificações no projeto e nos documentos do fabricante.",
      "Disponibilidade, preços e prazos são informados em orçamento."
    ],
    "sections": [
      {
        "title": "O que compõe o sistema",
        "content": "Light Steel Framing utiliza perfis leves de aço na estrutura e diferentes camadas de fechamento. Perfis, ligações, contraventamento, fundação e cobertura devem formar um conjunto dimensionado pelo responsável técnico."
      },
      {
        "title": "Antes de contratar",
        "content": "Defina área, uso, localização, padrão de acabamento e requisitos de desempenho. Solicite projeto executivo, memorial de materiais e uma proposta com escopo claro. Compare prazo e custo com base no mesmo projeto."
      },
      {
        "title": "Umidade e conforto",
        "content": "O desempenho depende da composição das paredes e da cobertura, do isolamento, das aberturas e da execução. Barreiras, impermeabilização, ventilação e manutenção precisam ser previstas para as condições do local."
      }
    ]
  },
  "b2": {
    "highlights": [
      "Veja quais partes do sistema influenciam o desempenho de paredes e forros.",
      "Confirme especificações no projeto e nos documentos do fabricante.",
      "Disponibilidade, preços e prazos são informados em orçamento."
    ],
    "sections": [
      {
        "title": "Sistema completo",
        "content": "O resultado acústico depende das chapas, estrutura, preenchimento, juntas, portas e passagens de instalações. A presença de lã isolante, por si só, não define um índice de isolamento."
      },
      {
        "title": "Escolha das chapas",
        "content": "Chapas ST são usadas em ambientes internos secos. Chapas RU resistem melhor à umidade, mas não substituem impermeabilização. Para exigências de resistência ao fogo, consulte a composição do sistema ensaiado."
      },
      {
        "title": "Detalhes de execução",
        "content": "Planeje reforços para cargas suspensas, pontos elétricos e hidráulicos e encontros com outros elementos. Siga os manuais do sistema e confirme o desempenho exigido com o profissional responsável."
      }
    ]
  },
  "b3": {
    "highlights": [
      "Conheça os itens que precisam ser definidos além da telha.",
      "Confirme especificações no projeto e nos documentos do fabricante.",
      "Disponibilidade, preços e prazos são informados em orçamento."
    ],
    "sections": [
      {
        "title": "Cobertura em camadas",
        "content": "Telhas Shingle integram um sistema com base, subcobertura, fixadores e arremates. Inclinação, ventilação e detalhes de encontro devem seguir o projeto e o manual do fabricante."
      },
      {
        "title": "Antes da compra",
        "content": "Informe a área e inclinação da cobertura, águas, beirais, cumeeiras e interferências. Confirme o modelo, a composição da base, acessórios e condições de transporte."
      },
      {
        "title": "Manutenção e garantia",
        "content": "Solicite as instruções de inspeção e manutenção, o documento de garantia do modelo e as condições do serviço. Não presuma uma vida útil ou resistência ao vento igual para todos os sistemas."
      }
    ]
  },
  "b4": {
    "highlights": [
      "Organize materiais, serviços e acabamento para solicitar um orçamento comparável.",
      "Confirme especificações no projeto e nos documentos do fabricante.",
      "Disponibilidade, preços e prazos são informados em orçamento."
    ],
    "sections": [
      {
        "title": "O valor depende do escopo",
        "content": "Área, terreno, fundação, estrutura, fechamentos, instalações e acabamento influenciam o orçamento. Um preço por metro quadrado sem memorial pode excluir etapas importantes."
      },
      {
        "title": "Compare propostas equivalentes",
        "content": "Separe projeto, materiais, mão de obra, transporte, equipamentos e acabamentos. Confira o que está incluído, prazo de validade, condições de pagamento e responsabilidades de cada contratado."
      },
      {
        "title": "Solicite uma proposta",
        "content": "Envie plantas, medidas e endereço da obra. A KY pode confirmar itens e condições comerciais para sua lista. Valores e prazos devem constar na proposta, sem pressupor economia em relação a outro sistema."
      }
    ]
  },
  "b5": {
    "highlights": [
      "Confira pontos sobre cargas, corrosão, conforto e manutenção antes de construir.",
      "Confirme especificações no projeto e nos documentos do fabricante.",
      "Disponibilidade, preços e prazos são informados em orçamento."
    ],
    "sections": [
      {
        "title": "Estrutura e proteção",
        "content": "Cargas, vãos, ligações e proteção contra corrosão dependem do dimensionamento e da exposição. Revestimento e espessura do aço são características distintas e precisam estar definidos no projeto."
      },
      {
        "title": "Desempenho e documentação",
        "content": "Peça os documentos dos componentes e do sistema adotado. Vida útil, resistência ao fogo e desempenho térmico ou acústico não podem ser deduzidos apenas do nome Steel Frame."
      },
      {
        "title": "Manutenção prevista",
        "content": "Solicite um plano de inspeção e manutenção que contemple cobertura, arremates, juntas, revestimentos e pontos de entrada de água. Alterações posteriores devem ser avaliadas por profissional habilitado."
      }
    ]
  },
  "b6": {
    "highlights": [
      "Do projeto aos acabamentos, entenda a sequência a combinar com a equipe.",
      "Confirme especificações no projeto e nos documentos do fabricante.",
      "Disponibilidade, preços e prazos são informados em orçamento."
    ],
    "sections": [
      {
        "title": "Projeto e preparação",
        "content": "Defina o projeto executivo, compatibilize instalações e estrutura e avalie o terreno e a fundação. A solução de fundação deve resultar da análise técnica, não de um modelo único."
      },
      {
        "title": "Montagem e proteção",
        "content": "A montagem segue a sequência de perfis, ligações e contraventamentos do projeto. Fechamentos, barreiras e cobertura devem proteger o conjunto conforme os detalhes especificados."
      },
      {
        "title": "Instalações e entrega",
        "content": "Antes de fechar as paredes, confira instalações, reforços e isolamento. Registre inspeções e organize documentos, orientações de uso e manutenção. O cronograma depende do porte da obra e dos contratos."
      }
    ]
  },
  "b7": {
    "highlights": [
      "Prepare sua lista e confirme disponibilidade, retirada e entrega com a equipe.",
      "Confirme especificações no projeto e nos documentos do fabricante.",
      "Disponibilidade, preços e prazos são informados em orçamento."
    ],
    "sections": [
      {
        "title": "Uma lista que facilita a cotação",
        "content": "Informe código ou nome do item, medidas, quantidade e aplicação. Inclua placas, perfis, fixadores, fitas, massas e acessórios previstos no projeto para reduzir compras incompletas."
      },
      {
        "title": "Confirmação comercial",
        "content": "Disponibilidade, preço, frete, retirada e prazo são confirmados no orçamento. A exibição no catálogo não representa reserva de estoque ou promessa de entrega imediata."
      },
      {
        "title": "Recebimento e armazenamento",
        "content": "Planeje acesso e descarga e reserve um local adequado de armazenamento. Confira itens e embalagens no recebimento e siga as orientações do fabricante para movimentar e proteger os materiais."
      }
    ]
  },
  "b8": {
    "highlights": [
      "Saiba quais informações reunir para cotar paredes, forros e estruturas.",
      "Confirme especificações no projeto e nos documentos do fabricante.",
      "Disponibilidade, preços e prazos são informados em orçamento."
    ],
    "sections": [
      {
        "title": "Meça cada serviço",
        "content": "Registre área, altura, vãos, recortes e interferências. Paredes, forros e estruturas têm composições diferentes e não devem ser comparados por um único valor genérico por metro quadrado."
      },
      {
        "title": "Descreva a composição",
        "content": "Informe tipos de placas, quantidade de camadas, perfis, isolamento e acabamento. Acrescente transporte, instalação e descarte quando fizerem parte da contratação."
      },
      {
        "title": "Valide a proposta",
        "content": "Confirme as quantidades com o responsável pelo projeto e solicite preço, disponibilidade e condições por escrito. Este guia não publica uma tabela de preços ou substitui orçamento da obra."
      }
    ]
  },
  "b9": {
    "highlights": [
      "Isolamento, umidade e ventilação precisam ser avaliados em conjunto.",
      "Confirme especificações no projeto e nos documentos do fabricante.",
      "Disponibilidade, preços e prazos são informados em orçamento."
    ],
    "sections": [
      {
        "title": "Conforto não depende só da estrutura",
        "content": "Isolamento, fechamentos, cobertura, janelas, orientação solar e ventilação influenciam as condições internas. O sistema deve ser escolhido conforme o projeto e os requisitos de desempenho."
      },
      {
        "title": "Controle de umidade",
        "content": "O detalhamento precisa considerar chuva, condensação, interfaces e áreas molhadas. Barreiras e impermeabilização devem seguir o sistema especificado, sem presumir que uma placa evita mofo sozinha."
      },
      {
        "title": "Compare soluções",
        "content": "Peça ao projetista a avaliação das alternativas para a mesma edificação. Não é possível prometer economia de aquecimento ou superioridade universal de um método sem analisar a composição e as condições de uso."
      }
    ]
  },
  "b10": {
    "highlights": [
      "Entenda a finalidade de cada chapa e o que conferir na especificação.",
      "Confirme especificações no projeto e nos documentos do fabricante.",
      "Disponibilidade, preços e prazos são informados em orçamento."
    ],
    "sections": [
      {
        "title": "ST: ambientes internos secos",
        "content": "A chapa standard é utilizada em vedações e forros internos secos conforme o sistema. Espessura, camadas e espaçamento dos apoios devem seguir a especificação."
      },
      {
        "title": "RU: resistência à umidade",
        "content": "Chapas RU não são impermeáveis e não substituem a impermeabilização de áreas molhadas. Confirme revestimento, selagem de passagens e limites de exposição com o fabricante."
      },
      {
        "title": "RF: desempenho do conjunto",
        "content": "Chapas RF integram sistemas com requisitos de resistência ao fogo. O tempo de resistência é determinado pela composição ensaiada, incluindo fixações, juntas e instalações, não apenas pela chapa isolada."
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

  if (!post) return <NotFound />;

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Olá! Li a matéria "' + post.title + '" no blog da KY Drywall e gostaria de solicitar um orçamento técnico.')}`;

  const blogPostSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.img,
    datePublished: '2025-01-01',
    dateModified: '2025-02-15',
    author: {
      '@type': 'Organization',
      name: 'KY Drywall & Steel Frame',
      url: BASE_URL
    },
    publisher: {
      '@type': 'Organization',
      name: 'KY Drywall & Steel Frame',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logotipo-ky-drywall.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${post.id}`
    },
    keywords: `${post.tag}, steel frame curitiba, drywall curitiba, construcao a seco, custos steel frame, distribuicao drywall paraná`
  };

  const otherPosts = BLOG_POSTS.filter(p => p.id !== postId).slice(0, 3);

  return (
    <div className="ky-interior-page bg-white min-h-screen">
      <EnhancedSEO
        title={`${post.title} | KY Drywall & Steel Frame`}
        description={post.excerpt}
        keywords={`${post.tag}, drywall curitiba, steel frame curitiba, construcao a seco, custos m2 steel frame, fornecedor drywall`}
        canonical={`${BASE_URL}/blog/${post.id}`}
        ogType="article"
        schema={blogPostSchema}
      />

      {/* Hero Header - Industrial Showroom */}
      <header className="ky-interior-hero bg-white py-14 md:py-20 text-slate-900 relative overflow-hidden border-b-2 border-slate-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-10 font-bold uppercase tracking-wide">
              <Link to="/" className="hover:text-[#D31219] transition-colors">INÍCIO</Link>
              <ChevronRight size={10} className="text-slate-300" />
              <Link to="/blog" className="hover:text-[#D31219] transition-colors">BLOG</Link>
            </div>

            <div className="mb-8">
              <span className="text-[#D31219] text-xs font-bold uppercase tracking-wide bg-red-50 border border-red-100 px-4 py-1.5 rounded-full shadow-sm">{post.tag}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] text-slate-950 mb-10">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-8 text-slate-400 text-xs font-bold uppercase tracking-wide pt-10 border-t border-slate-50">
              <div className="flex items-center gap-2.5">
                <Clock size={16} className="text-[#D31219]" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Building2 size={16} className="text-slate-400" />
                <span>CURITIBA - BR-277</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck size={16} className="text-emerald-600" />
                <span>NORMAS ABNT</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="rounded-sm overflow-hidden mb-12 border border-slate-200 shadow-none bg-slate-900 aspect-video">
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            <div className="space-y-12">
              {/* Excerpt Lead */}
              <p className="text-xl sm:text-2xl text-slate-900 font-bold leading-relaxed pb-8 border-b border-slate-100">
                {post.excerpt}
              </p>

              {/* Quick Highlights Box */}
              {content?.highlights && content.highlights.length > 0 && (
                <div className="bg-slate-50 border border-slate-200 rounded-sm p-8 md:p-10 my-10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#D31219]"></div>
                  <div className="flex items-center gap-3 mb-6 text-[#D31219] font-bold text-sm uppercase tracking-wide">
                    <Sparkles size={18} />
                    <span>Destaques Técnicos</span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-base sm:text-lg text-slate-700 font-medium">
                    {content.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-1" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Content Sections */}
              {content?.sections.map((section, i) => (
                <div key={i} className="space-y-6">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                    {section.title}
                  </h2>
                  <p className="text-slate-600 text-lg sm:text-xl leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>

                  {/* Optional Table */}
                  {section.table && (
                    <div className="overflow-x-auto my-10 rounded-sm border border-slate-200 shadow-lg">
                      <table className="w-full text-sm sm:text-base text-left border-collapse">
                        <thead className="bg-slate-950 text-white">
                          <tr>
                            {section.table.headers.map((head, hIdx) => (
                              <th key={hIdx} className="py-5 px-6 font-bold uppercase tracking-wide text-xs border-b border-slate-800">
                                {head}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 bg-white">
                          {section.table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className={`py-5 px-6 ${cIdx === 0 ? 'font-bold text-slate-900' : 'text-slate-600'}`}>
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}

              {/* FAQ Section if available */}
              {content?.faq && content.faq.length > 0 && (
                <div className="pt-16 border-t border-slate-100 space-y-8">
                  <div className="inline-flex items-center gap-3 text-[#D31219] font-bold text-sm uppercase tracking-wide">
                    <ShieldCheck size={20} />
                    <span>Dúvidas Frequentes</span>
                  </div>
                  <div className="grid grid-cols-1 gap-6">
                    {content.faq.map((item, qIdx) => (
                      <div key={qIdx} className="p-6 rounded-sm bg-white border border-slate-200 shadow-sm">
                        <h4 className="text-lg font-bold text-slate-900 mb-3">{item.question}</h4>
                        <p className="text-slate-600 text-base leading-relaxed">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Card CTA */}
              <div className="bg-slate-900 rounded-sm p-8 md:p-12 text-white mt-16 border border-slate-800 relative overflow-hidden group shadow-none">
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10">
                  <div className="text-center md:text-left">
                    <span className="text-[#D31219] text-xs font-bold uppercase tracking-wide block mb-4">Suporte de Engenharia</span>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">
                      Orçamento Técnico de Materiais
                    </h3>
                    <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
                      Envie sua planta ou lista de medidas. Nossa engenharia analisa sem custo para Curitiba e Região.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 shrink-0">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-[#D31219] hover:bg-red-700 text-white text-sm font-bold uppercase tracking-wide px-10 py-5 rounded-sm transition-all flex items-center justify-center gap-3 shadow-lg active:scale-[0.98]"
                    >
                      <MessageCircle size={20} />
                      Falar no WhatsApp
                    </a>
                    <a
                      href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                      className="bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold uppercase tracking-wide px-10 py-5 rounded-sm border-2 border-slate-800 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
                    >
                      <Phone size={18} />
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {otherPosts.length > 0 && (
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-12 border-b border-slate-200 pb-6">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Leia Também</h3>
                <Link to="/blog" className="text-sm font-bold text-[#D31219] hover:underline uppercase tracking-wide">
                  Ver Todo o Blog →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {otherPosts.map((p) => (
                  <Link
                    key={p.id}
                    to={`/blog/${p.id}`}
                    className="group bg-white rounded-sm border border-slate-200 overflow-hidden hover:border-[#D31219]/30 hover:shadow-lg transition-all flex flex-col"
                  >
                    <div className="aspect-video overflow-hidden border-b border-slate-100 bg-slate-900">
                      <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <span className="text-xs font-bold uppercase tracking-wide text-[#D31219] mb-3 block">{p.tag}</span>
                      <h4 className="text-base font-bold text-slate-900 leading-tight group-hover:text-[#D31219] transition-colors line-clamp-2">{p.title}</h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog Footer Link */}
      <div className="py-12 text-center bg-white border-t border-slate-100">
        <Link
          to="/blog"
          className="inline-flex items-center gap-3 text-sm font-bold text-slate-500 hover:text-[#D31219] transition-all uppercase tracking-wide"
        >
          <ArrowLeft size={18} /> Voltar ao Índice
        </Link>
      </div>
    </div>
  );
};

export default BlogPostPage;
