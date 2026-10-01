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
  'b1': {
    highlights: [
      'Construção até 70% mais rápida comparada à alvenaria tradicional.',
      'Aço galvanizado Z180 Barbieri em conformidade com ABNT NBR 15253 e 15575.',
      'Redução de até 80% na geração de entulho e desperdício de água no canteiro.',
      'Isolamento termoacústico superior planejado para o inverno rigoroso de Curitiba.'
    ],
    sections: [
      {
        title: 'O que é Light Steel Frame e como funciona?',
        content: 'O Light Steel Framing (LSF) é um sistema construtivo industrializado e estrutural formado por perfis leves de aço galvanizado 100% recicláveis. Em vez de vigas pesadas de concreto e tijolos cerâmicos que exigem longos períodos de cura, a edificação em Steel Frame é montada com precisão milimétrica através de painéis estruturais autoportantes, contraventamentos e fechamentos multicamadas.'
      },
      {
        title: 'Por que o Steel Frame é a escolha ideal para o clima de Curitiba e RMC?',
        content: 'Curitiba e os municípios metropolitanos apresentam expressivas oscilações térmicas, com invernos frios, geadas pontuais e alta umidade. Nas construções convencionais de alvenaria, a inércia térmica faz com que as paredes fiquem geladas e propensas a mofo. No Steel Frame, o espaço entre os montantes de aço é preenchido com mantas de lã de vidro, lã de rocha ou lã de PET, criando uma barreira térmica contínua que mantém o ambiente aquecido com menor gasto em aquecedores.'
      },
      {
        title: 'Sustentabilidade e canteiro limpo: 80% menos resíduos',
        content: 'Enquanto uma obra tradicional consome milhares de litros de água para massas e rebocos, a construção a seco dispensa água na estrutura. O aço utilizado possui certificação de sustentabilidade e pode ser reciclado infinitas vezes sem perder suas propriedades mecânicas, garantindo uma pegada de carbono reduzida para construtores conscientes.'
      },
      {
        title: 'Como a KY Drywall apoia sua obra em Curitiba',
        content: 'Localizada estrategicamente na Rodovia BR-277 (Cajuru), a KY Drywall & Steel Frame fornece a estrutura completa: perfis montantes e guias homologados Barbieri, placas OSB estruturais, chapas cimentícias, membranas hidrófugas, mantas termoacústicas e fixações especiais. Nossa equipe técnica auxilia engenheiros, arquitetos e instaladores no dimensionamento e no quantitativo exato dos materiais.'
      }
    ],
    faq: [
      {
        question: 'O Steel Frame aguenta ventos fortes em Curitiba?',
        answer: 'Sim. Projetos em Steel Frame são calculados por engenheiros estruturais para resistir a ventos de mais de 150 km/h, superando com folga os parâmetros da norma ABNT NBR 6123.'
      },
      {
        question: 'Posso financiar uma casa em Steel Frame pela Caixa?',
        answer: 'Sim, o sistema Light Steel Framing é homologado pelo SINAT/PBQP-H e aceito em financiamentos imobiliários da Caixa Econômica Federal e demais bancos.'
      }
    ]
  },
  'b2': {
    highlights: [
      'Divisórias e forros de rápida instalação com superfície lisa para pintura imediata.',
      'Opções de chapas específicas: ST (padrão), RU (resistente à umidade) e RF (resistente ao fogo).',
      'Desempenho acústico com atenuação de até 50 dB quando associado a lãs isolantes.',
      'Facilidade de embutir tubulações elétricas, hidráulicas e dutos de ar-condicionado.'
    ],
    sections: [
      {
        title: 'Drywall: Versatilidade arquitetônica e execução limpa',
        content: 'O sistema drywall (gesso acartonado) transformou a engenharia de interiores ao substituir paredes pesadas de tijolos por paredes leves estruturadas com guias e montantes de aço galvanizado. Isso permite reformar apartamentos e salas comerciais em Curitiba sem sobrecarregar a laje do edifício.'
      },
      {
        title: 'Isolamento Acústico de Alta Eficiência',
        content: 'Para estúdios, consultórios, salas de reunião e dormitórios residenciais, o drywall oferece isolamento sonoro superior ao da alvenaria tradicional. Ao combinar placas duplas de gesso com lã de rocha ou lã de vidro de alta densidade no miolo da parede, bloqueia-se tanto o ruído aéreo quanto as vibrações estruturais.'
      },
      {
        title: 'Chapas Especiais: ST, RU e RF',
        content: 'A KY Drywall distribui os três tipos essenciais de chapas homologadas:\n• Chapa ST (Branca): para áreas secas, salas, quartos e corredores;\n• Chapa RU (Verde): enriquecida com silicone para banheiros, lavabos e cozinhas com umidade moderada;\n• Chapa RF (Rosa): com fibra de vidro antichamas para rotas de fuga, shafts elétricos e cozinhas industriais.'
      },
      {
        title: 'Estoque de massas, fitas e perfis na KY Drywall',
        content: 'O acabamento perfeito das juntas depende de produtos normatizados. Na KY Drywall você encontra massas prontas para acabamento, fitas teladas de fibra de vidro, fitas de papel microperfuradas, cantoneiras metálicas e parafusos ponta agulha GN e ponta broca.'
      }
    ]
  },
  'b3': {
    highlights: [
      'Garantia de estanqueidade e resistência a vendavais de até 200 km/h.',
      'Peso reduzido: até 4 vezes mais leve que a telha cerâmica ou de concreto.',
      'Estética americana sofisticada com ampla gama de cores e texturas.',
      'Compatibilidade total com estruturas de madeira ou Steel Frame.'
    ],
    sections: [
      {
        title: 'O que é o Telhado Shingle e como é composto?',
        content: 'O Telhado Shingle é uma cobertura composta por mantas asfálticas de alta resistência revestidas com grânulos minerais basálticos na superfície e fibra de vidro no núcleo. Esse conjunto confere flexibilidade, durabilidade de décadas e proteção contra radiação UV e intempéries severas.'
      },
      {
        title: 'Performance comprovada contra temporais e granizo no Paraná',
        content: 'Diferente das telhas cerâmicas que trincam ou voam com ventos fortes, as telhas shingle são sobrepostas e vulcanizadas termicamente, formando uma barreira monolítica contínua e impermeável. São projetadas para suportar granizo e ventos com velocidade de furacão sem deslocamentos.'
      },
      {
        title: 'Estrutura Leve em Steel Frame + Telhado Shingle',
        content: 'A integração de tesouras em perfis de aço leve com compensado OSB e telha shingle cria um sistema de cobertura ultra leve. Isso gera economia direta na fundação da casa e elimina o risco de infiltrações e goteiras.'
      },
      {
        title: 'Linha Completa Shingle na KY Drywall Curitiba',
        content: 'Fornecemos telhas shingle de marcas consagradas, mantas de subcobertura autoaderentes, pregos galvanizados específicos, cumeeiras ventiladas e calhas para acabamento impecável do seu telhado.'
      }
    ]
  },
  'b4': {
    highlights: [
      'Custo por m² competitivo com previsibilidade orçamentária e sem surpresas no canteiro.',
      'Economia de até 50% na etapa de fundações devido ao baixo peso estrutural.',
      'Retorno financeiro acelerado: entrega da obra em 3 a 5 meses contra 12 a 18 meses da alvenaria.',
      'Desperdício de material próximo a 1% versus 20% a 30% na construção convencional.'
    ],
    sections: [
      {
        title: 'Quanto custa construir em Steel Frame em Curitiba e RMC em 2025/2026?',
        content: 'O custo do metro quadrado construído em Steel Frame em Curitiba varia em média entre R$ 2.100 e R$ 3.800 por m², dependendo do padrão de acabamento escolhido (médio a alto padrão). Embora o custo inicial dos insumos industrializados seja equivalente ou ligeiramente superior aos tijolos avulsos, o custo global da obra é substancialmente menor quando consideramos mão de obra, tempo e fundações.'
      },
      {
        title: 'Tabela Comparativa: Steel Frame vs. Alvenaria Convencional',
        content: 'Confira as diferenças práticas entre os dois métodos construtivos para uma residência unifamiliar de 150 m²:',
        table: {
          headers: ['Item Analisado', 'Construção em Steel Frame', 'Alvenaria Tradicional'],
          rows: [
            ['Prazo de Entrega', '3 a 5 meses', '10 a 16 meses'],
            ['Carga na Fundação', 'Leve (Radier econômico de 12-15cm)', 'Pesada (Sapatas profundas e brocas)'],
            ['Desperdício de Material', '< 2% (Perfis calculados)', '20% a 30% (Entulho e quebras)'],
            ['Precisão Orçamentária', 'Memorial de cálculo exato', 'Variações de 15% a 35% no custo final'],
            ['Desempenho Térmico', 'Isolamento contínuo em lã', 'Paredes frias e condutivas'],
            ['Manutenção e Reparos', 'Abertura limpa sem marreta', 'Quebra de alvenaria e retrabalho']
          ]
        }
      },
      {
        title: 'A Economia Oculta que poucos conhecem',
        content: 'Em uma obra de alvenaria, os maiores vilões do orçamento são o tempo estendido de contratação de mão de obra (diárias e encargos por mais de um ano), aluguel prolongado de caçambas de entulho e consumo contínuo de água e energia. No Steel Frame, a equipe monta a estrutura completa em poucas semanas, permitindo habitar ou alugar o imóvel muito antes.'
      },
      {
        title: 'Cotação transparente com a KY Drywall',
        content: 'Na KY Drywall você tem acesso a preços direto de distribuição para perfis Barbieri Z180, placas OSB LP, placas cimentícias Eternit/Brasilit, massas Base Coat e fitas de tratamento. Enviamos orçamentos discriminados por etapa para facilitar seu planejamento financeiro.'
      }
    ],
    faq: [
      {
        question: 'O Steel Frame é mais caro que alvenaria?',
        answer: 'No custo direto dos materiais isolados o valor é similar, mas no custo total da obra (fundação, tempo de mão de obra, caçambas e acabamento) o Steel Frame costuma gerar uma economia global de 15% a 25%.'
      },
      {
        question: 'Qual é o valor do frete para bairros de Curitiba e RMC?',
        answer: 'A KY Drywall conta com frota própria para entrega rápida em todos os 75 bairros de Curitiba e cidades vizinhas com valores de frete logístico acessíveis e agendamento pontual.'
      }
    ]
  },
  'b5': {
    highlights: [
      'Aço galvanizado Z180 projetado para durabilidade superior a 100 anos sem oxidação.',
      'Construções em LSF são projetadas para resistir a terremotos e ventos de furacão nos EUA e Japão.',
      'Gera 90% menos entulho no canteiro de obras e economiza milhares de litros de água.',
      'Paredes perfeitamente aprumadas que eliminam o reboco torto e facilitam a marcenaria planejada.'
    ],
    sections: [
      {
        title: '1. O aço não enferruja com o tempo?',
        content: 'Mito! Os perfis estruturais de Steel Frame recebem galvanização pesada por imersão a quente (camada Z180 ou Z275 de zinco). Essa camada atua como ânodo de sacrifício, impedindo que o aço entre em contato com oxigênio e umidade. Testes laboratoriais e edificações históricas comprovam vida útil superior a 100 anos.'
      },
      {
        title: '2. Resistência extrema comprovada mundialmente',
        content: 'O Steel Frame é o sistema construtivo padrão em países com alta incidência de furacões e terremotos, como Estados Unidos, Japão, Chile e Nova Zelândia. A elasticidade e a ancoragem rígida dos perfis dissipam a energia dos ventos sem risco de colapso estrutural repentino.'
      },
      {
        title: '3. Conforto térmico incomparável no inverno curitibano',
        content: 'Uma parede de Steel Frame de 15 cm com lã mineral no interior tem um coeficiente de isolamento térmico até 3 vezes superior a uma parede de tijolo maciço de 20 cm. O ar frio do inverno de Curitiba não passa para o interior da residência, garantindo eficiência energética.'
      },
      {
        title: '4. Marcenaria planejada sem surpresas',
        content: 'Quem já tentou instalar móveis sob medida em paredes de alvenaria tortas sabe a dor de cabeça com calços e acabamentos irregulares. No Steel Frame, a precisão milimétrica dos perfis garante esquadro, prumo e nivelamento perfeitos em 100% dos cômodos.'
      },
      {
        title: '5. Fixação de quadros e armários pesados é simples',
        content: 'É perfeitamente seguro pendurar televisores, armários de cozinha e espelhos pesados. Basta utilizar buchas especiais para drywall (como a bucha basculante/fly) ou fixar diretamente nos montantes de aço com o auxílio de um detector magnético.'
      }
    ]
  },
  'b6': {
    highlights: [
      'Cronograma técnico estruturado em 6 etapas claras e controladas.',
      'Fundação tipo Radier: execução em apenas 3 a 5 dias.',
      'Montagem dos painéis estruturais pré-cortados com ferramentas de fixação rápida.',
      'Fechamento multicamadas garantindo estanqueidade total à água e ao vento.'
    ],
    sections: [
      {
        title: 'Fase 1: Projeto Executivo e Engenharia de Cargas',
        content: 'Antes do primeiro parafuso, todo o projeto estrutural é modelado em software especializado (BIM / cálculo LSF). São definidas as espessuras dos perfis (0.80mm a 1.25mm), a modulação dos montantes a cada 40cm ou 60cm, os pontos de ancoragem química e as passagens de tubulação.'
      },
      {
        title: 'Fase 2: Fundação Radier Nivelada',
        content: 'Como a edificação em Steel Frame é muito mais leve que a alvenaria, a fundação mais comum é o Radier (uma laje de concreto armado de 12 a 15 cm). As tubulações de esgoto e água fria são posicionadas antes da concretagem, garantindo uma base plana e estanque.'
      },
      {
        title: 'Fase 3: Montagem e Ancoragem dos Painéis de Aço',
        content: 'Os perfis de aço estrutural são parafusados com parafusos sextavados e ponta broca, formando os painéis de parede, vigas de entrepiso e tesouras de cobertura. Os painéis são fixados na fundação com chumbadores mecânicos ou químicos de alta ancoragem.'
      },
      {
        title: 'Fase 4: Fechamentos Externos e Membrana Hidrófuga',
        content: 'Pelo lado de fora, a estrutura recebe placas estruturais OSB (para enrijecimento contra ventos) e placas cimentícias ou Glasroc. É fundamental aplicar a membrana hidrófuga (barreira de água e vento que permite a saída de vapor interno) antes do acabamento Base Coat.'
      },
      {
        title: 'Fase 5: Isolamento Termoacústico e Fechamento Interno',
        content: 'No interior dos painéis, após a passagem dos conduítes e tubos de água/gás, é inserida a manta de lã de rocha, lã de vidro ou lã de PET. Em seguida, as paredes são fechadas com chapas de drywall (ST ou RU) e finalizadas com fita de papel e massa de junta.'
      },
      {
        title: 'Fase 6: Cobertura Shingle e Acabamento Final',
        content: 'A cobertura recebe o contraplacado de OSB, a subcobertura asfáltica e as telhas shingle. O resultado é uma casa moderna, energeticamente eficiente, entregue em um terço do tempo convencional.'
      }
    ]
  },
  'b7': {
    highlights: [
      'Showroom e Centro de Distribuição localizado estrategicamente na Rod. BR-277 (Cajuru).',
      'Estoque permanente de chapas, perfis Barbieri, massas, fitas e fixações a pronta entrega.',
      'Assessoria técnica de quantitativos para instaladores, engenheiros e construtores.',
      'Frota própria com rotas diárias de entrega para Curitiba e todos os municípios da RMC.'
    ],
    sections: [
      {
        title: 'O Papel Estratégico de um Distribuidor Especializado em Curitiba',
        content: 'Em uma obra a seco, o maior risco para o cronograma é a falta de insumos específicos no canteiro. Comprar em lojas convencionais de material de construção muitas vezes resulta em perfis fora de norma, parafusos inadequados ou massas ressecadas. A KY Drywall & Steel Frame nasceu para suprir essa demanda com estoque real e produtos certificados.'
      },
      {
        title: 'Suporte Técnico e Memoriais de Quantitativos',
        content: 'Nossa equipe técnica analisa a planta baixa ou a relação de ambientes da sua obra e calcula exatamente a quantidade de montantes, guias, placas ST/RU/RF, parafusos GN/LA/LB, fitas e sacos de massa necessários. Isso reduz sobras desnecessárias e evita compras fracionadas emergenciais.'
      },
      {
        title: 'Marcas Homologadas e Laudos de Conformidade',
        content: 'Trabalhamos exclusivamente com fabricantes líderes que atendem rigorosamente às normas ABNT NBR 15758 (Drywall) e NBR 15253/16970 (Steel Frame), como Barbieri, Placo, Knauf, Gypsum, Holdflex e Ancora. Sua obra tem garantia comprovada de fábrica e aprovação técnica nos laudos de vistoria.'
      },
      {
        title: 'Logística Ágil: Da BR-277 Direto para o Seu Canteiro',
        content: 'Nosso centro de distribuição na Rodovia BR-277, 3641 (Cajuru) possui fácil acesso às principais vias expressas de Curitiba (Linha Verde, Contorno Leste, Av. das Torres). Realizamos entregas diárias com cuidado rigoroso no manuseio de placas e perfis.'
      }
    ],
    faq: [
      {
        question: 'A KY Drywall atende apenas empresas ou também pessoas físicas?',
        answer: 'Atendemos construtoras, engenheiros, gesseiros, instaladores autônomos e clientes finais que estão construindo ou reformando sua própria residência.'
      },
      {
        question: 'Como faço para receber um orçamento rápido?',
        answer: 'Você pode enviar sua lista de materiais ou projeto pelo WhatsApp oficial (41) 99645-7421 / (41) 99906-7259 ou ligar para (41) 3528-4232. Retornamos com proposta técnica imediata.'
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
    <div className="bg-white min-h-screen">
      <EnhancedSEO
        title={`${post.title} | KY Drywall & Steel Frame`}
        description={post.excerpt}
        keywords={`${post.tag}, drywall curitiba, steel frame curitiba, construcao a seco, custos m2 steel frame, fornecedor drywall`}
        canonical={`${BASE_URL}/blog/${post.id}`}
        ogType="article"
        schema={blogPostSchema}
      />

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-12 md:py-16 border-b border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-6 font-medium">
            <Link to="/" className="hover:text-white transition-colors">Início</Link>
            <ChevronRight size={11} />
            <Link to="/blog" className="hover:text-white transition-colors">Blog & Engenharia</Link>
            <ChevronRight size={11} />
            <span className="text-slate-200 truncate">{post.title}</span>
          </div>

          <div>
            <div className="inline-flex items-center gap-1.5 bg-red-950/70 border border-red-800/80 px-3 py-1 rounded text-xs font-semibold text-red-300 uppercase tracking-wider mb-4">
              <Tag size={13} className="text-[#D31219]" />
              <span>{post.tag}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-slate-400 text-xs font-medium pt-2 border-t border-slate-800">
              <div className="flex items-center gap-1.5">
                <Clock size={13} className="text-[#D31219]" />
                <span>{post.date}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Building2 size={13} className="text-[#D31219]" />
                <span>Centro de Distribuição KY Drywall — BR-277 (Cajuru)</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={13} className="text-emerald-400" />
                <span>Normas ABNT NBR 15253 / 15758</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Featured Image */}
          <div className="rounded-xl overflow-hidden mb-8 border border-slate-200 shadow-sm bg-slate-900 aspect-video">
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          <div className="space-y-8">
            {/* Excerpt Lead */}
            <p className="text-base sm:text-xl text-slate-900 font-medium leading-relaxed pb-4 border-b border-slate-100">
              {post.excerpt}
            </p>

            {/* Quick Highlights Box (AIO / Rich Snippets Ready) */}
            {content?.highlights && content.highlights.length > 0 && (
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 md:p-6 my-6">
                <div className="flex items-center gap-2 mb-3 text-[#D31219] font-bold text-sm uppercase tracking-wider">
                  <Sparkles size={16} />
                  <span>Destaques Técnicos & Principais Conclusões</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700">
                  {content.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Content Sections */}
            {content?.sections.map((section, i) => (
              <div key={i} className="pt-4 space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                  {section.title}
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>

                {/* Optional Table */}
                {section.table && (
                  <div className="overflow-x-auto my-6 rounded-lg border border-slate-200 shadow-sm">
                    <table className="w-full text-xs sm:text-sm text-left border-collapse">
                      <thead className="bg-slate-900 text-white">
                        <tr>
                          {section.table.headers.map((head, hIdx) => (
                            <th key={hIdx} className="py-3 px-4 font-semibold border-b border-slate-800">
                              {head}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className={`py-3 px-4 ${cIdx === 0 ? 'font-semibold text-slate-900' : 'text-slate-700'}`}>
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
              <div className="pt-8 border-t border-slate-200 space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <ShieldCheck size={20} className="text-[#D31219]" />
                  <span>Dúvidas Frequentes sobre {post.tag}</span>
                </h3>
                <div className="space-y-3">
                  {content.faq.map((item, qIdx) => (
                    <div key={qIdx} className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                      <h4 className="text-sm font-bold text-slate-900 mb-1.5">{item.question}</h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Card CTA */}
            <div className="bg-slate-900 rounded-xl p-6 sm:p-8 text-white mt-10 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl">
              <div>
                <span className="text-[#D31219] text-xs font-bold uppercase tracking-wider block mb-1">
                  Atendimento Técnico Especializado
                </span>
                <h3 className="text-lg sm:text-xl font-bold mb-1">
                  Solicite seu Orçamento de Materiais
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-lg">
                  Envie seu projeto ou lista de medidas. A equipe técnica da KY Drywall elabora o quantitativo exato com pronta entrega em Curitiba e RMC.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#D31219] hover:bg-red-700 text-white text-xs font-semibold uppercase tracking-wider px-5 py-3 rounded transition-colors flex items-center gap-2 shadow-lg shadow-red-900/30"
                >
                  <MessageCircle size={16} />
                  Falar no WhatsApp
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold uppercase tracking-wider px-4 py-3 rounded border border-slate-700 transition-colors flex items-center gap-1.5"
                >
                  <Phone size={14} />
                  Ligar
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {otherPosts.length > 0 && (
        <section className="py-12 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-4 max-w-4xl">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-6 flex items-center justify-between">
              <span>Outras Matérias Recomendadas</span>
              <Link to="/blog" className="text-xs font-semibold text-[#D31219] hover:underline">
                Ver Todo o Blog →
              </Link>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {otherPosts.map((p) => (
                <Link
                  key={p.id}
                  to={`/blog/${p.id}`}
                  className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:border-slate-400 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="aspect-video overflow-hidden border-b border-slate-100 bg-slate-900">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#D31219] mb-1 block">{p.tag}</span>
                      <h4 className="text-xs font-bold text-slate-900 leading-snug group-hover:text-[#D31219] transition-colors line-clamp-2">{p.title}</h4>
                    </div>
                    <span className="text-[11px] text-slate-400 mt-2 block">{p.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog */}
      <div className="py-8 text-center bg-white border-t border-slate-100">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-[#D31219] transition-colors uppercase tracking-wider"
        >
          <ArrowLeft size={14} /> Voltar ao Índice do Blog & Regiões
        </Link>
      </div>
    </div>
  );
};

export default BlogPostPage;
