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
  },
  'b8': {
    highlights: [
      'Valores atualizados por m² para paredes, forros de drywall e estruturas de Steel Frame em Curitiba.',
      'Comparativo claro entre custos de materiais e economia em fundações.',
      'Redução de encargos trabalhistas com prazos de execução até 70% menores.',
      'Orçamento direto com preço de distribuidor na Rod. BR-277 (Cajuru).'
    ],
    sections: [
      {
        title: 'Quanto custa o m² de Drywall e Steel Frame em Curitiba em 2026?',
        content: 'O investimento em construção a seco varia de acordo com a tipologia da obra. Para paredes divisorias de drywall com isolamento acústico, o custo médio instalado fica entre R$ 90 e R$ 160 por m². Já para forros de gesso acartonado, os valores oscilam de R$ 65 a R$ 110 por m². No caso de residências completas em Light Steel Frame (chassi estrutural, vedações, cobertura e isolamento), o custo por metro quadrado construído fica entre R$ 2.100 e R$ 3.800, dependendo do padrão de acabamento.'
      },
      {
        title: 'Tabela Prática de Referência de Custos e Materiais',
        content: 'Veja os valores médios de referência para insumos essenciais fornecidos pela KY Drywall:',
        table: {
          headers: ['Sistema / Insumo', 'Faixa de Preço Média', 'Rendimento / Unidade'],
          rows: [
            ['Parede Drywall ST (Simples)', 'R$ 90 - R$ 120 / m²', 'Chapa 1.20 x 2.40m + Perfis 48mm'],
            ['Parede Drywall RU (Áreas Úmidas)', 'R$ 110 - R$ 145 / m²', 'Chapa Verde + Tratamento Antimofo'],
            ['Forro Drywall F530', 'R$ 65 - R$ 95 / m²', 'Perfis F530 + Placa ST 12.5mm'],
            ['Estrutura Steel Frame (Chassi)', 'R$ 800 - R$ 1.250 / m²', 'Perfis Z180 Barbieri + Cargas'],
            ['Manta Lã de Rocha / Vidro', 'R$ 22 - R$ 48 / m²', 'Espessura 50mm a 100mm']
          ]
        }
      },
      {
        title: 'Onde está a verdadeira economia?',
        content: 'Muitos clientes olham apenas para o preço unitário da chapa ou do perfil, mas a economia real do Steel Frame e do Drywall reside na fundação (laje radier mais leve), na ausência de caçambas de entulho (desperdício menor que 2%) e no fato de que a obra é concluída em meses, economizando meses de aluguel ou juros de financiamento.'
      },
      {
        title: 'Faça seu orçamento personalizado na KY Drywall',
        content: 'Envie sua planta ou lista de materiais para nossa equipe na Rodovia BR-277 (Cajuru). Elaboramos o quantitativo completo com preços competitivos para Curitiba e região.'
      }
    ],
    faq: [
      {
        question: 'O orçamento inclui a mão de obra de instalação?',
        answer: 'A KY Drywall atua como fornecedora especializada de materiais e sistemas completos, fornecendo indicação de instaladores e parceiros homologados na região de Curitiba.'
      },
      {
        question: 'Posso retirar os materiais na loja física?',
        answer: 'Sim! Nosso centro de distribuição no Cajuru possui amplo estoque e estacionamento para fácil carregamento.'
      }
    ]
  },
  'b9': {
    highlights: [
      'Isolamento térmico contínuo impede a troca de calor com o exterior gelado de Curitiba.',
      'Ausência de pontes térmicas e condensação reduz drásticamente o risco de mofo e umidade.',
      'Aço galvanizado Z180 com alta inércia estrutural e estabilidade milimétrica.',
      'Aquecimento dos ambientes mais rápido e eficiente com menor consumo de energia.'
    ],
    sections: [
      {
        title: 'O desafio climático de Curitiba para a construção civil',
        content: 'Curitiba é conhecida por seu clima subtropical úmido, com invernos rigorosos, geadas frequentes e períodos prolongados de chuvas e neblina. Nas construções tradicionais de alvenaria com blocos cerâmicos maciços ou vazados, a parede absorve a umidade e o frio externo, criando a clássica sensação de "parede gelada" e propiciando o surgimento de bolor.'
      },
      {
        title: 'Como o Steel Frame resolve o problema do frio',
        content: 'O sistema Light Steel Framing utiliza uma abordagem multicamadas de alta tecnologia. O espaço oco entre os montantes metálicos recebe espessa camada de lã de vidro ou lã de rocha. Pelo lado externo, a placa OSB e a membrana hidrófuga barram a infiltração de vento e água, enquanto mantêm a temperatura interna estável. O resultado é um ambiente aconchegante sem precisar de aquecedores ligados 24 horas por dia.'
      },
      {
        title: 'Fim do mofo e da umidade nas paredes',
        content: 'Como as paredes a seco não utilizam água na montagem estrutural e contam com barreiras de vapor e ventilação adequada nos painéis, a umidade relativa do ar interna não condensa nas superfícies, protegendo a saúde da família e preservando a pintura e a mobília.'
      }
    ],
    faq: [
      {
        question: 'Casas em Steel Frame são quentes no verão?',
        answer: 'Sim, o isolamento térmico bidirecional funciona mantendo a casa fresca no verão e aquecida no inverno, garantindo conforto térmico o ano todo.'
      }
    ]
  },
  'b10': {
    highlights: [
      'Diferença prática entre chapas ST (branca), RU (verde) e RF (rosa).',
      'Normas ABNT NBR 15758 para instalação correta em ambientes secos e úmidos.',
      'Dicas para evitar patologias e garantir acabamento perfeito em pinturas.',
      'Disponibilidade imediata de todas as linhas de chapas e perfis na KY Drywall.'
    ],
    sections: [
      {
        title: 'Conhecendo os tipos de chapas de gesso acartonado (Drywall)',
        content: 'O drywall não é apenas uma "placa de gesso comum". Existem formulações específicas desenvolvidas para atender a exigências rigorosas de umidade, resistência mecânica e proteção contra incêndio.'
      },
      {
        title: '1. Chapa ST (Standard / Branca)',
        content: 'Indicada para áreas secas, como salas, quartos, corredores e escritórios. É a mais utilizada em forros e divisórias internas de uso geral.'
      },
      {
        title: '2. Chapa RU (Resistente à Umidade / Verde)',
        content: 'Aditivada com silicone e agentes fungicidas em seu núcleo de gesso, a chapa verde é obrigatória em banheiros, lavabos, cozinhas e áreas de serviço sujeitas a vapor e respingos.'
      },
      {
        title: '3. Chapa RF (Resistente ao Fogo / Rosa)',
        content: 'Contém fibras de vidro em sua composição, o que retarda a propagação de chamas em caso de incêndio. Ideal para shafts de elevadores, saídas de emergência e cozinhas industriais.'
      },
      {
        title: 'Onde comprar com garantia em Curitiba?',
        content: 'A KY Drywall (Cajuru, BR-277) oferece todas as linhas de chapas Placo e Knauf com selo de conformidade e entrega ágil.'
      }
    ],
    faq: [
      {
        question: 'Posso usar chapa ST no banheiro se impermeabilizar bem?',
        answer: 'Não é recomendado pelas normas técnicas ABNT. A umidade do vapor do chuveiro danificará a placa ST com o tempo. Utilize sempre a Chapa RU (verde) em áreas molhadas.'
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

      {/* Hero Header - Industrial Showroom */}
      <header className="bg-white py-24 md:py-32 text-slate-900 relative overflow-hidden border-b-2 border-slate-100">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-100"></div>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-[10px] text-slate-400 mb-10 font-black uppercase tracking-[0.2em]">
              <Link to="/" className="hover:text-[#D31219] transition-colors">INÍCIO</Link>
              <ChevronRight size={10} className="text-slate-300" />
              <Link to="/blog" className="hover:text-[#D31219] transition-colors">BLOG</Link>
            </div>

            <div className="mb-8">
              <span className="text-[#D31219] text-[10px] font-black uppercase tracking-[0.2em] bg-red-50 border border-red-100 px-4 py-1.5 rounded-full shadow-sm">{post.tag}</span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[1.05] text-slate-950 mb-10">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-8 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] pt-10 border-t border-slate-50">
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
            <div className="rounded-2xl overflow-hidden mb-12 border border-slate-200 shadow-xl bg-slate-900 aspect-video">
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
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-10 my-10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#D31219]"></div>
                  <div className="flex items-center gap-3 mb-6 text-[#D31219] font-black text-sm uppercase tracking-[0.2em]">
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
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
                    {section.title}
                  </h2>
                  <p className="text-slate-600 text-lg sm:text-xl leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>

                  {/* Optional Table */}
                  {section.table && (
                    <div className="overflow-x-auto my-10 rounded-2xl border border-slate-200 shadow-lg">
                      <table className="w-full text-sm sm:text-base text-left border-collapse">
                        <thead className="bg-slate-950 text-white">
                          <tr>
                            {section.table.headers.map((head, hIdx) => (
                              <th key={hIdx} className="py-5 px-6 font-black uppercase tracking-widest text-[11px] border-b border-slate-800">
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
                  <div className="inline-flex items-center gap-3 text-[#D31219] font-black text-sm uppercase tracking-[0.2em]">
                    <ShieldCheck size={20} />
                    <span>Dúvidas Frequentes</span>
                  </div>
                  <div className="grid grid-cols-1 gap-6">
                    {content.faq.map((item, qIdx) => (
                      <div key={qIdx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h4 className="text-lg font-bold text-slate-900 mb-3">{item.question}</h4>
                        <p className="text-slate-600 text-base leading-relaxed">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Card CTA */}
              <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white mt-16 border border-slate-800 relative overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px]"></div>
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10">
                  <div className="text-center md:text-left">
                    <span className="text-[#D31219] text-[10px] font-black uppercase tracking-[0.2em] block mb-4">Suporte de Engenharia</span>
                    <h3 className="text-2xl sm:text-3xl font-black mb-4 leading-tight">
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
                      className="bg-[#D31219] hover:bg-red-700 text-white text-sm font-black uppercase tracking-widest px-10 py-5 rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg active:scale-[0.98]"
                    >
                      <MessageCircle size={20} />
                      Falar no WhatsApp
                    </a>
                    <a
                      href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                      className="bg-slate-800 hover:bg-slate-700 text-white text-sm font-black uppercase tracking-widest px-10 py-5 rounded-xl border-2 border-slate-800 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
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
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Leia Também</h3>
                <Link to="/blog" className="text-sm font-bold text-[#D31219] hover:underline uppercase tracking-widest">
                  Ver Todo o Blog →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {otherPosts.map((p) => (
                  <Link
                    key={p.id}
                    to={`/blog/${p.id}`}
                    className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-[#D31219]/30 hover:shadow-lg transition-all flex flex-col"
                  >
                    <div className="aspect-video overflow-hidden border-b border-slate-100 bg-slate-900">
                      <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#D31219] mb-3 block">{p.tag}</span>
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
          className="inline-flex items-center gap-3 text-sm font-black text-slate-500 hover:text-[#D31219] transition-all uppercase tracking-widest"
        >
          <ArrowLeft size={18} /> Voltar ao Índice
        </Link>
      </div>
    </div>
  );
};

export default BlogPostPage;
