
import { Product, Category, Service, NavItem, BlogPost } from './types';

export const BASE_URL = 'https://www.kydrywall.com.br';

export const COMPANY_INFO = {
  name: 'KY Drywall & Steel Frame',
  phone: '(41) 3528-4232',
  whatsapp: '5541996457421',
  email: 'carlos@kydrywall.com.br',
  emailLucilene: 'lucilene@kydrywall.com.br',
  phoneLucilene: '(41) 99906-7259',
  address: 'Rod. BR-277, 3641 - Cajuru, Curitiba - PR, CEP 81480-270',
  instagram: 'https://instagram.com/kydrywall',
  mapsUrl: 'https://maps.app.goo.gl/RcpAnuqvVRpjQBQD6',
  phoneCarlos: '(41) 99645-7421',
  whatsappLucilene: '5541999067259',
  hours: {
    weekdays: 'Segunda a Sexta: 7:30 - 17:30',
    saturday: 'Sábado: 7:30 - 12:00'
  }
};

export const SITE_ASSETS = {
  logo: '/logotipo-ky-drywall.png',
  placeholder: 'https://images.pexels.com/photos/1292294/pexels-photo-1292294.jpeg?auto=compress&cs=tinysrgb&w=800',
  storefront: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ky-loja-cajuru-drywall-stell-fame.png-CAi9KHi0wcqQLptb0qLFGSWQZaXr98.jpeg',
  categories: {
    fitas: 'https://images.pexels.com/photos/5691551/pexels-photo-5691551.jpeg?auto=compress&cs=tinysrgb&w=600',
    massas: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600',
    parafusos: '/parafuso-la.jpg',
    perfis: '/perfil-montante-70-barbieri.jpg',
    placas: 'https://images.pexels.com/photos/5691593/pexels-photo-5691593.jpeg?auto=compress&cs=tinysrgb&w=600',
  }
};

export const CATEGORIES: Category[] = [
  'Diversos', 'Drywall', 'Ferragens', 'Fitas', 'Lã (Isolamento)', 'Massas', 'Parafusos', 'Perfis', 'Placas'
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', path: '/' },
  { label: 'A Empresa', path: '/empresa' },
  {
    label: 'Serviços',
    path: '/servicos',
    children: [
      { label: 'Construção com Steel Frame', path: '/steel-frame' },
      { label: 'Estrutura Steel Frame para Telhado', path: '/servicos/telhado-steel' },
      { label: 'Forro e Parede com Drywall', path: '/servicos/drywall' },
      { label: 'Cobertura com Telhado Shingle', path: '/servicos/shingle' },
      { label: 'Placa Modular de PVC', path: '/servicos/pvc-modular' },
    ]
  },
  { label: 'Nossos Produtos', path: '/produtos' },
  { label: 'Contato', path: '/contato' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'm1',
    category: 'Massas',
    name: 'Massa para Drywall Holdflex',
    description: 'Massa para tratamento de juntas de drywall de alta qualidade. Secagem rápida e acabamento extra liso.',
    image: '/massa_para_drywall_holdflex.png',
    rating: 5,
    specs: ['Embalagem: 28kg', 'Uso: Juntas Drywall', 'Marca: Holdflex'],
    applications: ['Paredes Internas', 'Forros', 'Acabamento de Parafusos', 'Reparos Rápidos'],
    whatIsIt: 'A Massa Holdflex é um composto pronto para uso, formulado especificamente para o tratamento de juntas em chapas de gesso para drywall. Sua composição balanceada garante excelente aderência e flexibilidade.',
    selectionCriteria: 'Escolha a Holdflex quando buscar produtividade (secagem rápida) e um acabamento que dispense múltiplas demãos de lixamento.',
    compatibility: 'Compatível com fitas de papel microperfuradas e fitas teladas de fibra de vidro em ambientes internos.',
    faq: [
      { question: 'Quanto tempo demora para secar?', answer: 'A secagem total ocorre entre 12 a 24 horas, dependendo da umidade e ventilação do local.' },
      { question: 'Pode ser usada em áreas externas?', answer: 'Não, para áreas externas utilize a Massa para Placa Cimentícia específica para resistir à chuva.' }
    ]
  },
  {
    id: 'm2',
    category: 'Massas',
    name: 'Massa para Placa Cimentícia Holdflex',
    description: 'Massa específica para placas cimentícias e fechamentos externos. Alta resistência à umidade.',
    image: '/massa_para_placa_cimenticia_holdflex.jpg',
    rating: 4.9,
    specs: ['Marca: Holdflex', 'Uso: Placas Cimentícias', 'Resistente à Água'],
    applications: ['Fachadas de Steel Frame', 'Áreas Externas', 'Beirais', 'Ambientes Industriais'],
    whatIsIt: 'Composto cimentício monocomponente de alta elasticidade desenvolvido para o tratamento de juntas em placas cimentícias e fechamentos externos em LSF.',
    selectionCriteria: 'Indicada para projetos que exigem estanqueidade absoluta e resistência a variações térmicas intensas em Curitiba.',
    compatibility: 'Deve ser aplicada em conjunto com fita telada de 102mm para garantir a estabilidade da junta externa.',
    faq: [
      { question: 'Pode ser pintada diretamente?', answer: 'Sim, após a secagem total e lixamento, aceita diversos tipos de acabamentos e tintas para exterior (elastroméricas ou acrílicas).' }
    ]
  },
  {
    id: 'm3',
    category: 'Massas',
    name: 'Massa em pó 20Kg Gypsum',
    description: 'Massa em pó para tratamento de juntas de drywall. Excelente custo-benefício para grandes obras.',
    image: '/massa_em_po_20kg,_gypsum.jpg',
    rating: 4.8,
    specs: ['Embalagem: 20kg', 'Marca: Gypsum', 'Preparo: Água'],
    applications: ['Juntas de Drywall', 'Preenchimento de Fendas', 'Fixação de Cantoneiras'],
    whatIsIt: 'Massa em pó de base gesso para preparo imediato em obra, permitindo o controle da consistência ideal para cada etapa do trabalho.',
    selectionCriteria: 'Ideal para grandes canteiros onde o transporte de massa pronta é logisticamente difícil ou para quando se deseja uma massa mais densa para preenchimentos.',
    compatibility: 'Compatível com todas as chapas Gypsum e Placo em ambientes internos.',
    faq: [
      { question: 'Quanto tempo dura depois de misturada?', answer: 'O tempo de trabalho (open time) é de aproximadamente 60 a 90 minutos após a mistura com água.' }
    ]
  },
  {
    id: 'm4',
    category: 'Massas',
    name: 'Massa corrida PVA Induscril 15Kg',
    description: 'Massa corrida PVA para acabamento fino em superfícies internas. Fácil lixamento.',
    image: '/massa_corrida_pva_branco_15kg,_induscril.jpg',
    rating: 4.7,
    specs: ['Embalagem: 15kg', 'Cor: Extra Branco', 'Base: PVA'],
    applications: ['Nivelamento de Paredes', 'Acabamento sobre Drywall', 'Paredes de Alvenaria'],
    whatIsIt: 'Massa niveladora de base PVA para superfícies internas de alvenaria ou gesso acartonado, proporcionando um acabamento liso e uniforme pronto para pintura.',
    selectionCriteria: 'Ideal para regularizar pequenas imperfeições superficiais antes da aplicação de tintas látex ou acrílicas em ambientes secos.',
    compatibility: 'Uso exclusivo em áreas internas sobre drywall ou reboco fino.',
    faq: [
      { question: 'Pode lixar?', answer: 'Sim, possui excelente lixabilidade, permitindo um acabamento extra liso com baixo esforço.' }
    ]
  },
  {
    id: 'm5',
    category: 'Massas',
    name: 'Massa Base Plus 33',
    description: 'Massa base de alta performance para revestimentos e acabamentos técnicos.',
    image: '/massa_base_plus_33.webp',
    rating: 4.9,
    specs: ['Tipo: Base Plus', 'Uso: Profissional', 'Acabamento Nível 5'],
    applications: ['Base para Pintura de Alto Brilho', 'Revestimentos Nobres', 'Sistemas EIFS'],
    whatIsIt: 'Composto técnico de alta tecnologia para preparação de superfícies que receberão acabamentos críticos ou tintas de alto brilho que evidenciam imperfeições.',
    selectionCriteria: 'Utilizada quando o projeto exige o Nível 5 de acabamento em drywall (superfície totalmente recoberta por massa).',
    compatibility: 'Compatível com chapas Glasroc e cimentícias em sistemas de fachada leve.',
    faq: [
      { question: 'Qual a espessura da camada?', answer: 'Deve ser aplicada em camadas extra finas (até 1mm) para regularização superficial total.' }
    ]
  },
  {
    id: 'm6',
    category: 'Massas',
    name: 'Massa Base Coat Profort',
    description: 'Massa base coat para sistemas de fechamento externo. Máxima durabilidade.',
    image: '/massa_base_coat.webp',
    rating: 5,
    specs: ['Marca: Profort', 'Uso: Fachadas LSF', 'Cimento Polimérico'],
    applications: ['Revestimento de Placas Cimentícias', 'Base para Texturas Externas', 'Tratamento de Superfície'],
    whatIsIt: 'Cimento polimérico reforçado com fibras, essencial para garantir a flexibilidade e resistência de fachadas em Steel Frame contra fissuras.',
    selectionCriteria: 'Fundamental para assegurar a estanqueidade e a estabilidade da fachada contra vibrações estruturais e variações climáticas.',
    compatibility: 'Deve ser usada com malha de fibra de vidro em toda a superfície da fachada.',
    faq: [
      { question: 'Pode ser usada como massa única?', answer: 'Sim, em sistemas de fachada LSF ela atua como camada de base, regularização e acabamento técnico.' }
    ]
  },
  {
    id: 'm7',
    category: 'Massas',
    name: 'Gesso Cola 20kg',
    description: 'Gesso cola para fixação de molduras e placas decorativas. Secagem rápida.',
    image: '/gesso_cola_saco.jpg',
    rating: 4.8,
    specs: ['Embalagem: 20kg', 'Tipo: Adesivo', 'Secagem: Rápida'],
    applications: ['Fixação de Molduras de Gesso', 'Sancas', 'Placas 3D', 'Rodapés de Gesso'],
    whatIsIt: 'Adesivo em pó de base gesso com aditivos químicos que garantem uma "pega" rápida e colagem estrutural de elementos decorativos.',
    selectionCriteria: 'Indicado para instaladores que buscam segurança na fixação de molduras pesadas ou sancas amplas.',
    compatibility: 'Pode ser aplicado sobre drywall, reboco de cimento ou concreto.',
    faq: [
      { question: 'Quanto tempo demora para secar?', answer: 'O tempo de trabalho é de aproximadamente 30 a 50 minutos; a cura total ocorre em 24h.' }
    ]
  },
  {
    id: 'm8',
    category: 'Massas',
    name: 'Gesso em pó Marília 40kg',
    description: 'Gesso em pó massa fina para acabamentos manuais. Alta pureza e brancura.',
    image: '/gesso_em_po_marilia.jpg',
    rating: 4.7,
    specs: ['Embalagem: 40kg', 'Marca: Marília', 'Tipo: Massa Fina'],
    applications: ['Revestimento de Paredes', 'Pequenos Reparos', 'Moldagens em Obra'],
    whatIsIt: 'Gesso natural de alta pureza, com moagem controlada para garantir superfícies extremamente lisas e brancas.',
    selectionCriteria: 'O preferido por gesseiros tradicionais de Curitiba para revestimento direto sobre blocos de concreto ou lajes.',
    compatibility: 'Ideal para superfícies porosas internas que necessitam de regularização manual.',
    faq: [
      { question: 'Dá para usar como massa de junta?', answer: 'Não recomendado. O gesso comum não possui a flexibilidade necessária para juntas de drywall, podendo causar trincas.' }
    ]
  },
  {
    id: 'f1',
    category: 'Drywall',
    name: 'Fita para Cimentícia 102mm x 46m',
    description: 'Fita de malha de vidro para tratamento de juntas em áreas externas.',
    image: '/fita_para_cimenticia_102mm_x_46m.png',
    rating: 4.9,
    specs: ['Largura: 102mm', 'Material: Fibra de Vidro', 'Resistente a Álcalis'],
    applications: ['Juntas de Placas Cimentícias', 'Juntas de Glasroc X', 'Reforço de Fachadas'],
    whatIsIt: 'Fita de malha de fibra de vidro com tratamento especial para suportar a alcalinidade do cimento, projetada para absorver tensões externas.',
    selectionCriteria: 'Essencial para evitar fissuras nas juntas de sistemas externos. A largura de 102mm garante a cobertura ideal da zona de tensão.',
    compatibility: 'Obrigatória em fechamentos de fachada LSF com massa base coat.',
    faq: [
      { question: 'Pode usar fita de papel na cimentícia?', answer: 'Não. O papel apodrece com a umidade externa e não resiste à alcalinidade das massas cimentícias.' }
    ]
  },
  {
    id: 'f2',
    category: 'Fitas',
    name: 'Fita Telada Azul Ancora',
    description: 'Fita telada em fibra de vidro para reforço de juntas e reparos rápidos.',
    image: '/fita_telada_azul_-_ancora.jpg',
    rating: 4.9,
    specs: ['Material: Fibra de Vidro', 'Cor: Azul Especial', 'Autoadesiva'],
    applications: ['Reparo de Trincas', 'Reforço de Cantos', 'Drywall Interno'],
    whatIsIt: 'Fita autoadesiva de malha de fibra de vidro, diferenciada pela cor azul que indica tratamento superior de resistência.',
    selectionCriteria: 'Recomendada para manutenção e reparos em drywall ou para reforçar áreas de maior vibração estrutural interna.',
    compatibility: 'Utilizar com massa pronta para drywall em camadas finas.',
    faq: [
      { question: 'Substitui a fita de papel?', answer: 'Em juntas estruturais novas, a fita de papel é a norma. A fita telada é excelente para reparos e reforços localizados.' }
    ]
  },
  {
    id: 'f3',
    category: 'Fitas',
    name: 'Fita de Papel Gypsum microperfurada',
    description: 'Fita de papel kraft especial para tratamento de juntas internas normatizado.',
    image: '/fita_papel.jpg',
    rating: 5,
    specs: ['Material: Papel Kraft', 'Característica: Microperfurada', 'Marca: Gypsum'],
    applications: ['Tratamento de Juntas de Drywall', 'Reforço de Ângulos Internos'],
    whatIsIt: 'Fita de papel especial com fibras longas dispostas para máxima resistência mecânica, com microperfurações que impedem a formação de bolhas de ar.',
    selectionCriteria: 'A fita de papel é a única recomendada pelas normas NBR para o tratamento de juntas em paredes e forros de drywall internos.',
    compatibility: 'Ideal para chapas ST, RU e RF.',
    faq: [
      { question: 'Por que usar papel se a tela é autoadesiva?', answer: 'O papel "trava" a junta quimicamente com a massa, oferecendo uma resistência mecânica muito superior e prevenindo trincas futuras.' }
    ]
  },
  {
    id: 'f4',
    category: 'Fitas',
    name: 'Fita Metálica para Canto Ancora',
    description: 'Fita de papel reforçada com tiras de aço para cantos externos perfeitos.',
    image: '/fita_metalica_para_canto,_ancora.webp',
    rating: 5,
    specs: ['Material: Papel + Aço', 'Uso: Cantos Externos', 'Marca: Ancora'],
    applications: ['Proteção de Cantos de Paredes', 'Acabamento de Vigas e Pilares', 'Sancas'],
    whatIsIt: 'Fita de papel reforçada com duas tiras paralelas de aço galvanizado, que garantem rigidez e alinhamento milimétrico em quinas.',
    selectionCriteria: 'Indispensável para cantos de alto tráfego que necessitam de proteção contra batidas e um acabamento reto impecável.',
    compatibility: 'Aplicável em qualquer sistema drywall interno.',
    faq: [
      { question: 'Como fazer o corte?', answer: 'Pode ser cortada com tesoura de aviação para metais ou estilete reforçado.' }
    ]
  },
  {
    id: 'f5',
    category: 'Fitas',
    name: 'Fita Banda Acústica Placo 70mm',
    description: 'Fita de espuma para vedação acústica e estanqueidade de sistemas.',
    image: '/fita_banda_acustica.webp',
    rating: 4.8,
    specs: ['Largura: 70mm', 'Material: Espuma de Polietileno', 'Marca: Placo'],
    applications: ['Base de Perfis de Drywall', 'Vedações de Janelas LSF', 'Isolamento de Vibração'],
    whatIsIt: 'Fita de espuma autoadesiva aplicada no verso dos perfis (guias) que ficam em contato com a estrutura (laje/piso).',
    selectionCriteria: 'Essencial para projetos que exigem conforto acústico, pois elimina a "ponte sonora" entre a parede e a estrutura do prédio.',
    compatibility: 'Essencial para perfis de 48, 70 e 90mm em sistemas de drywall e steel frame.',
    faq: [
      { question: 'É obrigatório usar?', answer: 'Sim, se você deseja que o isolamento acústico das placas e da lã funcione conforme o esperado no projeto.' }
    ]
  },
  {
    id: 'pa1',
    category: 'Parafusos',
    name: 'Parafuso 3,5x35 (GN35) Drywall',
    description: 'Parafuso fosfatizado para fixação de chapas de gesso em perfis metálicos. Ponta agulha para fácil penetração.',
    image: '/parafuso_3,5x35_(gn35)_drywall.jpg',
    rating: 4.9,
    specs: ['Bitola: 3,5mm', 'Comprimento: 35mm', 'Tipo: GN35'],
    applications: ['Fixação de Placas ST', 'Fixação de Placas RU', 'Montagem de Forros'],
    whatIsIt: 'Parafuso trombeta com rosca fina e tratamento fosfatizado para prevenir corrosão sob a massa.',
    selectionCriteria: 'O modelo de 35mm é ideal para a fixação de segunda camada de placas ou chapas de 15mm.',
    compatibility: 'Uso em perfis de drywall de espessura 0.50mm.',
    faq: [
      { question: 'Pode ser usado em metal?', answer: 'Sim, é ideal para fixar chapas em perfis metálicos de até 0.50mm.' },
      { question: 'Precisa de pré-furo?', answer: 'Não, a ponta agulha permite a perfuração direta no drywall e no metal leve.' }
    ]
  },
  {
    id: 'pa2',
    category: 'Parafusos',
    name: 'Parafuso Steel Frame Cabeça Chata Placa OSB',
    description: 'Parafuso especial com acabamento Dacromet para fixação de placas OSB em estruturas steel frame.',
    image: '/parafuso_stell_frame_cabeca_chata_placa_osb.jpg',
    rating: 5,
    specs: ['Tipo: Cabeça Chata', 'Acabamento: Dacromet', 'Uso: Placa OSB'],
    applications: ['Steel Frame', 'Fixação OSB', 'Estruturas de Telhado'],
    whatIsIt: 'Parafuso autoperfurante com aletas que fresam a placa OSB, permitindo o embutimento perfeito da cabeça chata.',
    selectionCriteria: 'Obrigatório para sistemas LSF para garantir que a cabeça do parafuso não ressalte sob a barreira de água.',
    compatibility: 'Utilize com parafusadeiras de alto torque configuradas corretamente para não romper as fibras do OSB.',
    faq: [
      { question: 'Pode usar em madeira comum?', answer: 'Sim, porém sua performance de embutimento da cabeça é otimizada para a densidade de painéis OSB.' }
    ]
  },
  {
    id: 'pa3',
    category: 'Parafusos',
    name: 'Parafuso L.B 13x42mm',
    description: 'Parafuso para fixação de perfis metálicos. Ideal para união de estruturas steel frame.',
    image: '/parafuso_l.b.jpg',
    rating: 5,
    specs: ['Bitola: 13mm', 'Comprimento: 42mm', 'Tipo: L.B'],
    applications: ['Fixação de Perfis', 'Estruturas Metálicas', 'Steel Frame'],
    whatIsIt: 'Parafuso "lentilha baixo" autoperfurante, projetado para unir perfis metálicos com mínima interferência na superfície.',
    selectionCriteria: 'Indicado para junção de guia com montante onde o ressalto da cabeça deve ser mínimo.',
    compatibility: 'Uso em perfis de aço galvanizado de até 2.0mm em Steel Frame.',
    faq: [
      { question: 'Ele fura o perfil sozinho?', answer: 'Sim, possui ponta broca capaz de perfurar chapas de aço sem necessidade de furação prévia.' }
    ]
  },
  {
    id: 'pa4',
    category: 'Parafusos',
    name: 'Parafuso GN 3,5x25 Ponta Agulha Patta',
    description: 'Parafuso de fixação rápida com ponta agulha. Ideal para chapas de menor espessura.',
    image: '/parafuso_gn3,5x25_ponta_agulha.jpg',
    rating: 4.8,
    specs: ['Bitola: 3,5mm', 'Comprimento: 25mm', 'Marca: Patta'],
    applications: ['Placas Finas', 'Acabamentos', 'Fixação Rápida'],
    whatIsIt: 'Parafuso padrão para fixação de chapas de gesso de 12.5mm em perfis de aço leve.',
    selectionCriteria: 'O parafuso mais utilizado em obras de drywall residencial.',
    compatibility: 'Compatível com perfis de 48, 70 e 90mm de drywall.',
    faq: [
      { question: 'Quantos parafusos por placa?', answer: 'Recomenda-se o uso de aproximadamente 25 a 30 parafusos por placa de drywall padrão.' }
    ]
  },
  {
    id: 'pa5',
    category: 'Parafusos',
    name: 'Parafuso L.A',
    description: 'Parafuso para estruturas metálicas leves. Essencial para montagem de perfis e estruturas.',
    image: '/parafuso-la.jpg',
    rating: 4.8,
    specs: ['Tipo: L.A', 'Uso: Estruturas Leves', 'Alta Resistência'],
    applications: ['Montagem de Perfis', 'Estruturas Auxiliares', 'Fixações Leves'],
    whatIsIt: 'Parafuso "lentilha agulha" para união de perfis metálicos de espessura até 0.5mm.',
    selectionCriteria: 'Ideal para montagem de caixilhos e reforços internos em paredes de drywall.',
    compatibility: 'Uso em estruturas de drywall interno.',
    faq: [
      { question: 'Qual a diferença para o L.B?', answer: 'O L.A possui ponta agulha para perfis finos (0.5mm), enquanto o L.B possui ponta broca para perfis mais grossos.' }
    ]
  },
  {
    id: 'pl1',
    category: 'Placas',
    name: 'Chapa RF Rosa',
    description: 'Chapa resistente ao fogo (RF) na cor rosa. Ideal para áreas que necessitam proteção contra incêndio.',
    image: '/chapa_rf_rosa.jpg',
    rating: 4.9,
    specs: ['Dimensão: 1,20 x 1,80m', 'Tipo: RF (Resistente ao Fogo)', 'Cor: Rosa'],
    applications: ['Rotas de Fuga', 'Cozinhas', 'Áreas com Risco de Incêndio', 'Enclausuramento de Escadas'],
    whatIsIt: 'A Chapa RF (Resistente ao Fogo) possui aditivos em seu núcleo de gesso e fibra de vidro, o que retarda a propagação do fogo e mantém a integridade estrutural por mais tempo em caso de sinistro.',
    selectionCriteria: 'Obrigatória em caixas de escada, rotas de fuga e compartimentação de riscos de incêndio conforme normas NBR 15758 e exigências do corpo de bombeiros.',
    compatibility: 'Deve ser utilizada em conjunto com estrutura metálica normatizada e massa para juntas que suporte as mesmas condições térmicas.',
    faq: [
      { question: 'Ela é totalmente à prova de fogo?', answer: 'Ela é resistente, o que significa que retarda a queima por um período determinado (ex: 30, 60 ou 120 min dependendo do sistema), mas não é indestrutível.' },
      { question: 'Pode ser usada no teto?', answer: 'Sim, inclusive é muito recomendada para forros de cozinhas industriais e áreas técnicas.' }
    ]
  },
  {
    id: 'pl2',
    category: 'Placas',
    name: 'Chapa RU Verde',
    description: 'Chapa resistente à umidade (RU) na cor verde. Perfeita para áreas molhadas e com alta umidade.',
    image: '/chapa_ru_verde.jpg',
    rating: 4.8,
    specs: ['Dimensão: 1,20 x 1,80m', 'Tipo: RU (Resistente à Umidade)', 'Cor: Verde'],
    applications: ['Banheiros', 'Cozinhas', 'Áreas Externas Cobertas', 'Lavanderias'],
    whatIsIt: 'Chapa de gesso com hidrofugantes em seu núcleo, que reduzem a absorção de água por capilaridade. Identificada pela cor verde do papel cartão.',
    selectionCriteria: 'Essencial para paredes de banheiros, cozinhas e lavanderias onde haverá aplicação de revestimento cerâmico ou contato com vapor.',
    compatibility: 'Recomendado o uso de massa hidrofugante e fitas de papel para garantir a estanqueidade das juntas.',
    faq: [
      { question: 'Pode tomar chuva?', answer: 'Não diretamente. Ela resiste à umidade ambiente e respingos, mas não deve ser exposta diretamente à chuva contínua sem proteção externa.' }
    ]
  },
  {
    id: 'pl3',
    category: 'Placas',
    name: 'Chapa Drywall ST Branca',
    description: 'Chapa standard para uso geral em forros e paredes divisórias. Ideal para ambientes secos, oferece excelente acabamento.',
    image: '/chapa_drywall_st_branca.jpg',
    rating: 4.8,
    specs: ['Dimensão: 1,20 x 1,80m', 'Espessura: 12.5mm', 'Tipo: ST Branca'],
    applications: ['Divisórias Internas', 'Forros', 'Revestimentos de Alvenaria', 'Closets'],
    whatIsIt: 'A placa standard (ST) é a base de qualquer sistema drywall interno, composta por um núcleo de gesso natural e aditivos, revestida por papel cartão cinza/branco.',
    selectionCriteria: 'A solução mais econômica e eficiente para divisórias internas de escritórios e residências em ambientes sem umidade.',
    compatibility: 'Compatível com todos os perfis de drywall (48, 70, 90mm) e massas de base gesso.',
    faq: [
      { question: 'Posso pendurar TV nela?', answer: 'Sim, desde que utilize buchas específicas para drywall (foguete ou basculante) e, preferencialmente, fixe o suporte nos montantes metálicos.' }
    ]
  },
  {
    id: 'pl4',
    category: 'Placas',
    name: 'Chapa Drywall ST Branca Fortissima',
    description: 'Chapa de alta resistência da marca Fortissima. Maior durabilidade e resistência mecânica para projetos exigentes.',
    image: '/chapa_drywall_st_branca_fortissima.webp',
    rating: 5,
    specs: ['Dimensão: 1,20 x 1,80m', 'Espessura: 12.5mm', 'Marca: Fortissima'],
    applications: ['Áreas de Alto Tráfego', 'Paredes de Escolas', 'Hospitais', 'Divisórias Reforçadas'],
    whatIsIt: 'Placa premium com densidade superior e reforço de fibras minerais, oferecendo maior resistência a impactos e melhor isolamento acústico que a ST comum.',
    selectionCriteria: 'Indicada para corredores de grande circulação ou locais onde a parede sofrerá batidas mecânicas constantes.',
    compatibility: 'Utiliza os mesmos perfis e acessórios do sistema drywall padrão, mas exige parafusos de alta performance para perfuração.',
    faq: [
      { question: 'Ela é mais pesada que a comum?', answer: 'Sim, devido à sua maior densidade e reforços internos, o que também garante sua maior resistência.' }
    ]
  },
  {
    id: 'pl5',
    category: 'Placas',
    name: 'Chapa Glasroc X',
    description: 'Placa de gesso técnica para fachadas e áreas externas. Alta resistência a intempéries e raios UV.',
    image: '/chapa_glasroc.jpg',
    rating: 5,
    specs: ['Tipo: Gesso com Véu de Vidro', 'Marca: Placo', 'Resistência Externa'],
    applications: ['Fachadas', 'Áreas Externas', 'Beirais', 'Ambientes Muito Úmidos'],
    whatIsIt: 'Placa técnica composta por núcleo de gesso aditivado com biocidas e vidro, revestida em ambas as faces por véu de vidro alcalino-resistente. Não contém papel cartão.',
    selectionCriteria: 'A escolha para fechamentos externos em Light Steel Frame que buscam rapidez de instalação com alta resistência.',
    compatibility: 'Deve ser instalada com massa base coat e fita de malha de vidro de 102mm para garantir a integridade da fachada.',
    faq: [
      { question: 'Ela racha como o cimento?', answer: 'Devido à sua estabilidade dimensional superior, a Glasroc X possui baixíssima dilatação térmica, o que reduz significativamente o risco de fissuras.' }
    ]
  },
  {
    id: 'pl6',
    category: 'Placas',
    name: 'Placa Cimentícia Eternit 6/8/10mm',
    description: 'Placa cimentícia Eternit para uso interno e externo. Disponível em diversas espessuras.',
    image: '/placa_cimenticia_eternit_6-8-10mm.jpg',
    rating: 4.9,
    specs: ['Marca: Eternit', 'Espessuras: 6, 8 ou 10mm', 'Uso Interno/Externo'],
    applications: ['Fachadas', 'Áreas Molhadas', 'Revestimentos Externos', 'Placas de Piso'],
    whatIsIt: 'Placa de fibrocimento produzida com a tecnologia CRFS (Cimento Reforçado com Fio Sintético), oferecendo alta dureza superficial.',
    selectionCriteria: 'Versátil para fechamentos externos e áreas que exigem máxima resistência à abrasão e impactos severos.',
    compatibility: 'Exige estrutura metálica com espaçamento reduzido e parafusos específicos para cimentícia (com aletas).',
    faq: [
      { question: 'Pode ficar no tempo?', answer: 'Sim, é totalmente resistente à água e ao sol, sendo uma solução clássica para fechamentos externos.' }
    ]
  },
  {
    id: 'pl7',
    category: 'Placas',
    name: 'Painel LP OSB Home Plus',
    description: 'Painel estrutural OSB de alta qualidade. Ideal para construções em steel frame e coberturas.',
    image: '/painel_lp_osb_home_plus.jpg',
    rating: 5,
    specs: ['Marca: LP', 'Tipo: OSB', 'Uso Estrutural'],
    applications: ['Contraventamento Steel Frame', 'Bases de Telhado Shingle', 'Mezaninos', 'Pisos'],
    whatIsIt: 'Painel de tiras de madeira orientadas (Oriented Strand Board) prensadas com resinas MDI, garantindo alta rigidez e resistência estrutural.',
    selectionCriteria: 'Indispensável para conferir rigidez estrutural às paredes de LSF e servir de base plana para telhados asfálticos.',
    compatibility: 'Deve ser protegido pela membrana hidrófuga (barreira de água) imediatamente após a instalação.',
    faq: [
      { question: 'Pode pegar chuva?', answer: 'O modelo Home Plus resiste à umidade durante a obra, mas não foi projetado para exposição permanente ao tempo sem revestimento.' }
    ]
  },
  {
    id: 'pe1',
    category: 'Perfis',
    name: 'Perfil Drywall Guia 48 Barbieri',
    description: 'Perfil guia horizontal de 48mm para drywall. Base do sistema de paredes e divisórias.',
    image: '/perfil_drywall_guia_48_barbieri.webp',
    rating: 4.9,
    specs: ['Largura: 48mm', 'Comprimento: 3000mm', 'Galvanização: Z270/Z180'],
    applications: ['Base de Paredes', 'Estrutura de Forros', 'Fixação de Montantes', 'Sancas'],
    whatIsIt: 'Perfil de aço galvanizado em formato de "U", normatizado para garantir o alinhamento e fixação de paredes divisórias no piso e no teto.',
    selectionCriteria: 'Utilize para paredes de espessura final reduzida (aprox. 73mm), ideal para ganhar área útil em apartamentos.',
    compatibility: 'Compatível exclusivamente com Montante de 48mm e parafusos metal-metal (LA ou LB).',
    faq: [
      { question: 'Pode ser usado em Steel Frame?', answer: 'Não. Este perfil é exclusivo para drywall (vedação interna). Para Steel Frame (estrutural), utilize perfis com espessura de aço superior e galvanização Z275.' }
    ]
  },
  {
    id: 'pe2',
    category: 'Perfis',
    name: 'Perfil Montante 70 Barbieri',
    description: 'Perfil vertical de 70mm com galvanização Z180. Alta rigidez para paredes e divisórias.',
    image: '/perfil-montante-70-barbieri.jpg',
    rating: 5,
    specs: ['Largura: 70mm', 'Comprimento: 3000mm', 'Aço: Galvanizado Z180'],
    applications: ['Estrutura de Paredes', 'Divisórias Corporativas', 'Forros Pesados'],
    whatIsIt: 'Perfil em formato de "C" com furações para passagem de instalações elétricas e hidráulicas sem necessidade de cortes em obra.',
    selectionCriteria: 'O montante de 70mm é o mais versátil para divisórias que exigem maior rigidez e espaço para passagens técnicas de até 1.5 polegadas.',
    compatibility: 'Deve ser encaixado em Guia de 70mm e fixado com parafusos metal-metal.',
    faq: [
      { question: 'Qual a distância entre montantes?', answer: 'Geralmente 40cm ou 60cm, dependendo da altura da parede e do tipo de placa.' }
    ]
  },
  {
    id: 'pe3',
    category: 'Perfis',
    name: 'Perfil Guia de 70 Barbieri',
    description: 'Perfil guia de 70mm para estruturas robustas. Galvanização premium Barbieri.',
    image: '/perfil_guia_de_70_barbieri.jpg',
    rating: 4.9,
    specs: ['Largura: 70mm', 'Comprimento: 3000mm', 'Marca: Barbieri'],
    applications: ['Estruturas Reforçadas', 'Paredes Duplas', 'Base de Montantes 70'],
    whatIsIt: 'Guia horizontal correspondente ao montante de 70mm, fabricada com aço de alta qualidade Barbieri para garantir prumo e nível.',
    selectionCriteria: 'Indicada para bases de paredes que receberão portas de madeira ou grandes vãos de vidro.',
    compatibility: 'Utilizada sempre em par com montantes de 70mm.',
    faq: [
      { question: 'Precisa de bucha para fixar no chão?', answer: 'Sim, recomendamos o uso de buchas S6 ou S8 e parafusos adequados a cada 60cm.' }
    ]
  },
  {
    id: 'pe4',
    category: 'Perfis',
    name: 'Perfil Guia de 90',
    description: 'Perfil guia de 90mm para estruturas de grande porte e paredes com alto isolamento.',
    image: '/perfil_guia_de_90.jpg',
    rating: 4.8,
    specs: ['Largura: 90mm', 'Comprimento: 3000mm', 'Uso: Sistemas de Alto Desempenho'],
    applications: ['Paredes Espessas', 'Salas de Cinema', 'Estúdios', 'Divisórias Acústicas'],
    whatIsIt: 'Guia larga para sistemas de drywall de alto desempenho, permitindo preenchimento com lãs minerais de maior espessura.',
    selectionCriteria: 'Ideal para projetos que exigem isolamento acústico superior a 45dB ou paredes técnicas com tubulações de esgoto.',
    compatibility: 'Exclusiva para montantes de 90mm.',
    faq: [
      { question: 'Cabe tubo de 75mm dentro?', answer: 'Sim, a largura de 90mm acomoda confortavelmente tubulações de esgoto e águas pluviais de médio porte.' }
    ]
  },
  {
    id: 'pe5',
    category: 'Perfis',
    name: 'Montante de 48 Barbieri',
    description: 'Perfil montante de 48mm para divisórias leves e forros estruturados.',
    image: '/montante_de_48_barbieri.jpg',
    rating: 4.7,
    specs: ['Largura: 48mm', 'Comprimento: 3000mm', 'Marca: Barbieri'],
    applications: ['Divisórias de Escritório', 'Forros F530', 'Revestimentos Estreitos'],
    whatIsIt: 'Montante vertical estreito projetado para economizar espaço interno sem comprometer a estabilidade do plaqueamento.',
    selectionCriteria: 'Escolha para revestimentos de paredes existentes (drylining) onde se deseja perder o mínimo de área útil possível.',
    compatibility: 'Encaixe em Guia 48mm.',
    faq: [
      { question: 'Posso usar para forro?', answer: 'Sim, o perfil de 48mm é muito utilizado em forros estruturados (F530).' }
    ]
  },
  {
    id: 'pe6',
    category: 'Perfis',
    name: 'Montante de 90',
    description: 'Montante de 90mm para paredes robustas. Máxima capacidade de isolamento interno.',
    image: '/montante_de_90.png',
    rating: 4.9,
    specs: ['Largura: 90mm', 'Comprimento: 3000mm', 'Alta Rigidez'],
    applications: ['Paredes Altas', 'Isolamento Reforçado', 'Paredes Técnicas'],
    whatIsIt: 'Perfil vertical robusto que permite a criação de paredes com até 150mm de espessura final, garantindo estabilidade para pés-direitos elevados.',
    selectionCriteria: 'Utilizado em auditórios ou paredes industriais onde a resistência à pressão do vento e carga é crítica.',
    compatibility: 'Encaixe em Guia 90mm.',
    faq: [
      { question: 'Qual a altura máxima dessa parede?', answer: 'Pode chegar a mais de 4 metros dependendo da modulação e do plaqueamento duplo.' }
    ]
  },
  {
    id: 'pe7',
    category: 'Perfis',
    name: 'Montante Steel Frame 90',
    description: 'Perfil estrutural para steel frame de 90mm. Aço Z275 de alta resistência.',
    image: '/montante_de_steel_frame_90.webp',
    rating: 5,
    specs: ['Largura: 90mm', 'Espessura: 0.80mm a 1.25mm', 'Galvanização: Z275'],
    applications: ['Construção Steel Frame', 'Estruturas de Casas', 'Paredes Portantes', 'Vigas'],
    whatIsIt: 'Perfil estrutural produzido em aço galvanizado Z275 de alta resistência. É a espinha dorsal de construções residenciais em LSF (Light Steel Framing).',
    selectionCriteria: 'O montante de 90mm é o padrão para paredes portantes de casas térreas e sobrados, oferecendo segurança estrutural conforme NBR 16970.',
    compatibility: 'Deve ser calculado por engenheiro responsável. Compatível com Guias de 90mm (Z275) e parafusos de cabeça chata ou flangeada específicos.',
    faq: [
      { question: 'Pode construir sobrado com esse perfil?', answer: 'Sim, desde que dimensionado corretamente por um projeto estrutural, o perfil de 90mm é a base comum para sobrados em LSF.' }
    ]
  },
  {
    id: 'pe8',
    category: 'Perfis',
    name: 'Montante Steel Frame 140',
    description: 'Perfil estrutural para steel frame de 140mm. Máxima capacidade para grandes vãos.',
    image: '/montante_de_steel_frame_140.jpg',
    rating: 5,
    specs: ['Largura: 140mm', 'Espessura: 0.95mm a 1.55mm', 'Galvanização: Z275'],
    applications: ['Vigas de Transição', 'Grandes Vãos', 'Estruturas de Cobertura', 'Paredes de Sobrados'],
    whatIsIt: 'Perfil de alma larga e alta espessura de aço (Z275), projetado para suportar cargas elevadas e vencer vãos maiores sem flexão indesejada.',
    selectionCriteria: 'Indicado para paredes externas de sobrados de dois ou mais pavimentos e vigas que suportam lajes úmidas ou secas.',
    compatibility: 'Exige fixadores de alta resistência e guias de 140mm (Z275).',
    faq: [
      { question: 'Serve para fazer telhado?', answer: 'Sim, o perfil de 140mm é excelente para tesouras de telhado com grandes vãos.' }
    ]
  },
  {
    id: 'la1',
    category: 'Lã (Isolamento)',
    name: 'Lã de Pet',
    description: 'Isolamento termo-acústico ecológico feito de material reciclado. 100% sustentável.',
    image: '/la_de_pet.webp',
    rating: 4.9,
    specs: ['Material: Pet Reciclado', 'Espessura: 50mm', 'Hipoalergênica'],
    applications: ['Isolamento Térmico', 'Isolamento Acústico', 'Hospitais', 'Residências'],
    whatIsIt: 'Manta isolante produzida a partir da reciclagem de garrafas PET, sem adição de resinas fenólicas ou colas tóxicas.',
    selectionCriteria: 'A melhor opção para quem busca saúde e facilidade de manuseio, pois não solta poeira irritante e pode ser tocada sem luvas.',
    compatibility: 'Pode ser usada em qualquer sistema de drywall ou steel frame.',
    faq: [
      { question: 'É inflamável?', answer: 'Não. Ela possui tratamento antichamas autoextinguível, atendendo às normas de segurança contra incêndio.' }
    ]
  },
  {
    id: 'la2',
    category: 'Lã (Isolamento)',
    name: 'Lã de Rocha',
    description: 'Manta de lã de rocha de alta densidade. Máximo isolamento acústico e corta-fogo.',
    image: '/la_de_rocha.webp',
    rating: 5,
    specs: ['Material: Rocha Basáltica', 'Densidade: 64kg/m³', 'Resistente a 750°C'],
    applications: ['Isolamento Pesado', 'Cinemas', 'Salas de Máquinas', 'Proteção Passiva contra Fogo'],
    whatIsIt: 'Fibras minerais obtidas a partir de rochas basálticas fundidas, oferecendo o mais alto nível de resistência ao calor e absorção sonora.',
    selectionCriteria: 'Obrigatória em áreas com altíssima exigência acústica ou onde o projeto exige proteção passiva contra fogo reforçada.',
    compatibility: 'Ideal para preenchimento de paredes RF (Rosa).',
    faq: [
      { question: 'Qual a diferença para a lã de vidro?', answer: 'A lã de rocha é muito mais densa e suporta temperaturas significativamente mais altas, sendo superior em proteção contra incêndio.' }
    ]
  },
  {
    id: 'la3',
    category: 'Lã (Isolamento)',
    name: 'Lã de Vidro Isover',
    description: 'Lã de vidro Isover de alta performance. O padrão ouro em isolamento termo-acústico.',
    image: '/la_de_vidro_isover.webp',
    rating: 4.9,
    specs: ['Marca: Isover', 'Material: Vidro Reciclado', 'Alta Compressibilidade'],
    applications: ['Isolamento Térmico', 'Isolamento Acústico em Forros', 'Divisórias Drywall'],
    whatIsIt: 'Manta isolante flexível, leve e de fácil instalação, com alto poder de absorção sonora devido à sua estrutura porosa.',
    selectionCriteria: 'A solução clássica e mais equilibrada em custo-benefício para isolamento de forros e divisórias residenciais em Curitiba.',
    compatibility: 'Compatível com todos os sistemas drywall e LSF.',
    faq: [
      { question: 'Dá coceira?', answer: 'A tecnologia moderna da Isover reduz drasticamente o desprendimento de fibras, mas ainda recomendamos o uso de EPIs básicos para manuseio prolongado.' }
    ]
  },
  {
    id: 'd1',
    category: 'Ferragens',
    name: 'Adaptador Angular Para Parafusadeira',
    description: 'Adaptador angular para facilitar a aplicação de parafusos em locais de difícil acesso.',
    image: '/adaptador_angular_para_parafusadeira.webp',
    rating: 4.7,
    specs: ['Tipo: Angular', 'Uso: Parafusadeira', 'Ângulo: 90°'],
    applications: ['Locais de Difícil Acesso', 'Cantos de Sancas', 'Instalações em Nichos'],
    whatIsIt: 'Acessório de impacto para parafusadeiras que permite o acesso a locais estreitos ou em ângulos onde o corpo da máquina não entra, transmitindo o torque de forma eficiente.',
    selectionCriteria: 'Essencial para montagem de estruturas complexas de forros decorativos e móveis de drywall.',
    compatibility: 'Compatível com qualquer parafusadeira de encaixe hexagonal padrão 1/4".',
    faq: [
      { question: 'Pode ser usado em parafusadeira de impacto?', answer: 'Sim, o modelo é projetado para suportar o torque de máquinas de impacto de 1/4".' }
    ]
  },
  {
    id: 'd2',
    category: 'Ferragens',
    name: 'Adaptador de Tomada 2P+T',
    description: 'Adaptador de tomada reforçado para ferramentas elétricas de canteiro.',
    image: '/adaptador_de_tomada.webp',
    rating: 4.5,
    specs: ['Tipo: 2P+T', 'Corrente: 10A/20A', 'Padrão: Brasileiro'],
    applications: ['Canteiros de Obra', 'Uso de Furadeiras', 'Ferramentas de Bancada'],
    whatIsIt: 'Adaptador elétrico de alta resistência para compatibilização de ferramentas e extensões no padrão NBR 14136.',
    selectionCriteria: 'Garante a segurança elétrica no canteiro ao utilizar ferramentas com plugues de diferentes amperagens.',
    compatibility: 'Ferramentas elétricas padrão brasileiro de 10A ou 20A.',
    faq: [
      { question: 'Suporta ferramentas potentes?', answer: 'Sim, mas verifique se a amperagem da ferramenta não excede a capacidade do adaptador e da rede local.' }
    ]
  },
  {
    id: 'd3',
    category: 'Placas',
    name: 'Compensado Fenólico Naval',
    description: 'Compensado fenólico de alta qualidade para fôrmas e estruturas auxiliares.',
    image: '/compensado_fenolico.png',
    rating: 4.8,
    specs: ['Tipo: Fenólico (WBP)', 'Resistência: Água/Umidade', 'Uso: Estrutural'],
    applications: ['Fôrmas de Concreto', 'Canteiros de LSF', 'Fechamentos Temporários', 'Mezaninos'],
    whatIsIt: 'Chapa de madeira laminada colada com resina fenólica resistente à fervura, garantindo estabilidade e reuso em condições úmidas.',
    selectionCriteria: 'Utilizado em obras de Steel Frame para criação de fôrmas de radier e bases de apoio que necessitam de alta rigidez.',
    compatibility: 'Pode receber pintura ou verniz para maior durabilidade.',
    faq: [
      { question: 'Pode ser usado como piso definitivo?', answer: 'Apesar da resistência, é um material técnico. Para pisos, recomendamos o uso de placas cimentícias ou OSB estrutural.' }
    ]
  },
  {
    id: 'd4',
    category: 'Diversos',
    name: 'Adesivo de Silicone Tytan Professional',
    description: 'Adesivo de silicone para vedação técnica e acabamentos de juntas.',
    image: '/adesivo_de_silicone_tytan_standard.webp',
    rating: 4.7,
    specs: ['Marca: Tytan', 'Tipo: Acético', 'Cor: Branco/Incolor'],
    applications: ['Vedação de Banheiros', 'Acabamento de Louças', 'Passagens de Tubos'],
    whatIsIt: 'Selante de silicone profissional com fungicida, ideal para vedações em áreas molhadas plaqueadas com RU, prevenindo o bolor.',
    selectionCriteria: 'Garante a estanqueidade elástica necessária em encontros de materiais com diferentes coeficientes de dilatação.',
    compatibility: 'Compatível com chapas RU (Verde), cerâmicas, vidros e metais galvanizados.',
    faq: [
      { question: 'Pode usar no Steel Frame externo?', answer: 'Para juntas externas, recomendamos o uso de selante de PU (Poliuretano), que possui maior resistência a UV e aceita pintura.' }
    ]
  },
  {
    id: 'fe1',
    category: 'Diversos',
    name: 'Arame Galvanizado BWG20',
    description: 'Arame galvanizado flexível para amarrações em estruturas de drywall.',
    image: '/arame_galvanizado_bwg20.webp',
    rating: 4.8,
    specs: ['Bitola: BWG20 (0,89mm)', 'Material: Aço Zincado', 'Flexibilidade: Alta'],
    applications: ['Amarração de Pendurais', 'Nivelamento de Forros', 'Fixação de Lãs'],
    whatIsIt: 'Arame macio com camada de zinco que protege contra a oxidação em ambientes com umidade controlada.',
    selectionCriteria: 'Utilizado para o ajuste fino da altura de forros F530 e amarrações auxiliares que não exigem carga estrutural elevada.',
    compatibility: 'Uso em ambientes internos.',
    faq: [
      { question: 'Qual a metragem do rolo?', answer: 'Vendemos por peso (kg) ou rolos fechados. Consulte a metragem exata com nossa equipe.' }
    ]
  },
  {
    id: 'fe2',
    category: 'Diversos',
    name: 'Arame Galvanizado BWG10',
    description: 'Arame galvanizado robusto para suspensões e cargas maiores.',
    image: '/arame_galvanizado_bwg10.webp',
    rating: 4.9,
    specs: ['Bitola: BWG10 (3,40mm)', 'Embalagem: Rolo 5kg', 'Resistência: Alta'],
    applications: ['Suspensão de Dutos', 'Grandes Forros', 'Reforços de Estrutura'],
    whatIsIt: 'Arame de bitola grossa com alta resistência à tração, ideal para suportar elementos pesados sobre o forro.',
    selectionCriteria: 'Escolha quando o projeto prever cargas suspensas que excedam a capacidade do arame BWG18/20.',
    compatibility: 'Uso estrutural pesado em forros.',
    faq: [
      { question: 'Ele é difícil de dobrar?', answer: 'Por ser mais grosso, exige o uso de alicates profissionais para a correta dobra e ancoragem.' }
    ]
  },
  {
    id: 'fe3',
    category: 'Parafusos',
    name: 'Bucha de Nylon S6/S8',
    description: 'Bucha de expansão para fixação em alvenaria e concreto.',
    image: '/bucha_nylon.webp',
    rating: 4.6,
    specs: ['Material: Nylon Virgem', 'Quantidade: 100/200 unidades', 'Uso: Parede Maciça'],
    applications: ['Fixação de Guias no Piso', 'Montagem de Suportes', 'Quadros'],
    whatIsIt: 'Bucha de expansão em nylon de alta qualidade que não resseca, garantindo fixação permanente em substratos sólidos.',
    selectionCriteria: 'Essencial para a ancoragem inicial das guias de drywall no piso de concreto ou paredes de bloco.',
    compatibility: 'Utilizar com parafusos de rosca soberba compatíveis com o diâmetro da bucha.',
    faq: [
      { question: 'Serve para tijolo furado?', answer: 'Para tijolos furados, recomendamos buchas específicas de expansão lateral ou buchas universais.' }
    ]
  },
  {
    id: 'fe4',
    category: 'Perfis',
    name: 'Cantoneira L 25x30',
    description: 'Cantoneira metálica lisa para proteção de cantos internos e arremates.',
    image: '/cantoneira.jpg',
    rating: 4.8,
    specs: ['Material: Aço Galvanizado', 'Uso: Arremates', 'Comprimento: 3000mm'],
    applications: ['Proteção de Cantos', 'Arremates de Forro', 'Encontros de Parede'],
    whatIsIt: 'Perfil em "L" de aço leve utilizado para dar acabamento e proteção mecânica a cantos onde não haverá massa de rejunte aparente.',
    selectionCriteria: 'Ideal para fechamentos de shafts e arremates perimetrais simples.',
    compatibility: 'Uso em drywall interno.',
    faq: [
      { question: 'Pode ser usada na parte externa?', answer: 'Não recomendado. Para áreas externas, utilize cantoneiras de PVC com tela de fibra de vidro.' }
    ]
  },
  {
    id: 'fe5',
    category: 'Perfis',
    name: 'Cantoneira Perfurada de Alumínio/Aço',
    description: 'Reforço de canto com perfurações para ancoragem química da massa.',
    image: '/cantoneira_perfurada.webp',
    rating: 4.7,
    specs: ['Tipo: Perfurada', 'Uso: Proteção de Quinas', 'Acabamento: Invisível'],
    applications: ['Cantos Externos de Paredes', 'Nichos', 'Vigas Drywall'],
    whatIsIt: 'Reforço de quina com furos que permitem o traspasse da massa de junta, criando uma quina reta e extremamente resistente a impactos.',
    selectionCriteria: 'Obrigatória em todas as quinas externas de drywall para evitar o esfarelamento do gesso com o uso diário.',
    compatibility: 'Aplicada sobre a placa e recoberta com massa de acabamento.',
    faq: [
      { question: 'Alumínio ou aço?', answer: 'O alumínio é mais leve e não oxida, sendo ideal para áreas com maior umidade relativa.' }
    ]
  },
  {
    id: 'fe6',
    category: 'Perfis',
    name: 'Cantoneira PVC com Tela de Fibra',
    description: 'Cantoneira técnica para sistemas de fachada e reboco fino.',
    image: '/cantoneira_pvc_com_tela.webp',
    rating: 4.6,
    specs: ['Material: PVC + Fibra de Vidro', 'Uso: Externo/EIFS', 'Resistente a Álcalis'],
    applications: ['Cantos de Fachadas LSF', 'Encontros de Janelas', 'Placas Cimentícias'],
    whatIsIt: 'Acessório que combina a rigidez do PVC com a flexibilidade da tela de vidro, garantindo que o acabamento externo da fachada não apresente fissuras.',
    selectionCriteria: 'Indispensável para o acabamento de janelas e portas em sistemas de construção a seco externa.',
    compatibility: 'Deve ser fixada com massa base coat.',
    faq: [
      { question: 'Por que usar PVC em vez de metal?', answer: 'O PVC não sofre corrosão e sua flexibilidade evita que a dilatação térmica da fachada cause trincas na massa.' }
    ]
  },
  {
    id: 'fe7',
    category: 'Perfis',
    name: 'Cantoneira Branca para Forro Modular',
    description: 'Cantoneira com pintura eletrostática para acabamento de forros aparentes.',
    image: '/cantoneira_branca.jpeg',
    rating: 4.9,
    specs: ['Cor: Branco Neve', 'Acabamento: Pintura Epóxi', 'Uso: Perimetral'],
    applications: ['Forro de PVC Modular', 'Forro de Isopor', 'Forro de Lã de Vidro'],
    whatIsIt: 'Perfil perimetral com acabamento final em branco, dispensando pintura em obra e garantindo limpeza visual.',
    selectionCriteria: 'Utilizada como suporte de borda para forros modulares de 625x625mm.',
    compatibility: 'Uso em forros modulares.',
    faq: [
      { question: 'Descasca com o tempo?', answer: 'A pintura eletrostática é altamente resistente e mantém a brancura por muitos anos em ambientes internos.' }
    ]
  },
  {
    id: 'fe8',
    category: 'Perfis',
    name: 'Tabica Lisa Zincada',
    description: 'Perfil para forro dilatado ("flutuante") com efeito estético moderno.',
    image: '/tabica_lisa_galvanizada.webp',
    rating: 4.7,
    specs: ['Material: Aço Zincado', 'Tipo: Lisa', 'Funcionalidade: Dilatação'],
    applications: ['Forros de Gesso', 'Design de Interiores', 'Prevenção de Trincas'],
    whatIsIt: 'Perfil perimetral que cria um vão (sombra) entre o forro e a parede, absorvendo as micro-movimentações da estrutura do prédio.',
    selectionCriteria: 'Utilizada para evitar trincas perimetrais e conferir um acabamento sofisticado de "forro solto".',
    compatibility: 'Encaixe perfeito em perfis F530 e chapas de 12.5mm.',
    faq: [
      { question: 'Pode pintar?', answer: 'Sim, a tabica lisa aceita pintura após a limpeza da camada de proteção galvânica.' }
    ]
  },
  {
    id: 'fe9',
    category: 'Perfis',
    name: 'Tabica Branca Pronta',
    description: 'Tabica com pintura branca de fábrica para agilidade total na obra.',
    image: '/tabica_branca.jpg',
    rating: 4.6,
    specs: ['Cor: Branco', 'Acabamento: Pré-pintado', 'Uso: Decorativo'],
    applications: ['Forros Residenciais', 'Instalações Rápidas', 'Sancas'],
    whatIsIt: 'Perfil de dilatação com acabamento em pintura eletrostática, pronto para instalação, eliminando a necessidade de pintura manual no teto.',
    selectionCriteria: 'Ideal para reformas rápidas onde se deseja reduzir a sujeira e o tempo de finalização.',
    compatibility: 'Uso em forros de drywall internos com junta de dilatação.',
    faq: [
      { question: 'Precisa pintar depois?', answer: 'Não, ela já vem com acabamento branco industrial, economizando tempo de pintura em obra.' }
    ]
  },
  {
    id: 'fe10',
    category: 'Ferragens',
    name: 'Emenda para Perfil F530',
    description: 'Acessório de união para continuidade estrutural de perfis canaleta.',
    image: '/emenda_para_f530.jpg',
    rating: 4.7,
    specs: ['Material: Aço Galvanizado', 'Uso: Perfil F530', 'Instalação: Encaixe'],
    applications: ['Grandes Forros', 'Extensão de Trilhos', 'União de Perfis'],
    whatIsIt: 'Peça de encaixe por pressão que une dois perfis F530, garantindo o alinhamento perfeito e a resistência mecânica da estrutura do forro.',
    selectionCriteria: 'Obrigatória em vãos de forro que excedam os 3 metros de comprimento do perfil padrão.',
    compatibility: 'Exclusiva para perfis canaleta F530.',
    faq: [
      { question: 'Precisa parafusar?', answer: 'Geralmente o encaixe é por pressão, mas em áreas de grande vibração, um parafuso metal-metal (LA) pode ser usado para travamento extra.' }
    ]
  },
  {
    id: 'fe11',
    category: 'Ferragens',
    name: 'Plaina Manual para Drywall Plaster',
    description: 'Ferramenta para ajuste de bordas e chanfros em chapas de gesso.',
    image: '/plaina_para_drywall_plaster.webp',
    rating: 4.8,
    specs: ['Marca: Plaster', 'Tipo: Surform', 'Corpo: Metálico/Plástico'],
    applications: ['Chanfro de Bordas', 'Ajuste de Medidas', 'Regularização de Cortes'],
    whatIsIt: 'Ferramenta manual de desbaste essencial para preparar as bordas cortadas das chapas, permitindo que a massa de junta penetre corretamente.',
    selectionCriteria: 'Acessório indispensável para o montador que preza pelo acabamento invisível das juntas.',
    compatibility: 'Chapas de gesso Standard (ST), Resistente à Umidade (RU) e Resistente ao Fogo (RF).',
    faq: [
      { question: 'A lâmina perde o corte?', answer: 'Sim, a lâmina é um item de reposição e deve ser trocada quando começar a rasgar o papel cartão da placa.' }
    ]
  },
  {
    id: 'fe12',
    category: 'Ferragens',
    name: 'Lâmina de Reposição para Plaina',
    description: 'Lâmina de aço temperado para substituição em plainas Plaster.',
    image: '/lamina_para_plaina_plaster.webp',
    rating: 4.7,
    specs: ['Material: Aço Carbono', 'Tipo: Universal Plaster', 'Durabilidade: Alta'],
    applications: ['Manutenção de Ferramentas', 'Troca de Lâmina Cega'],
    whatIsIt: 'Lâmina de corte intercambiável que mantém a eficiência do desbaste do gesso sem "rasgar" o papel cartão.',
    selectionCriteria: 'Mantenha lâminas reserva para garantir produtividade e acabamento perfeito em todas as chapas.',
    compatibility: 'Exclusiva para plainas tipo Surform e modelos Plaster.',
    faq: [
      { question: 'Como saber a hora de trocar?', answer: 'Quando a plaina começar a exigir muito esforço ou começar a esfarelar a borda da chapa em vez de cortar limpo.' }
    ]
  },
  {
    id: 'fe13',
    category: 'Ferragens',
    name: 'Bits Phillips PH2 Ciser 25mm',
    description: 'Ponteira magnética de alta durabilidade para parafusadeiras.',
    image: '/bits_ponta_phillips_25mm.webp',
    rating: 4.8,
    specs: ['Tipo: Phillips PH2', 'Material: Aço S2', 'Magnético: Sim'],
    applications: ['Fixação de Drywall', 'Montagem de Perfis', 'Instalações em Geral'],
    whatIsIt: 'Ponteira de precisão projetada para o encaixe perfeito na cabeça dos parafusos GN e metal-metal, evitando o desgaste prematuro.',
    selectionCriteria: 'Essencial para garantir que o parafuso entre no prumo correto sem "pular" da ferramenta.',
    compatibility: 'Compatível com todas as parafusadeiras de mandril hexagonal.',
    faq: [
      { question: 'Serve em qualquer parafusadeira?', answer: 'Sim, o encaixe de 1/4" é o padrão universal para parafusadeiras e furadeiras.' },
      { question: 'Ele segura o parafuso?', answer: 'Sim, o bits possui imã integrado para manter o parafuso firme durante a aplicação.' }
    ]
  },
];

export const CIC_LOCATIONS = {
  main: 'Cidade Industrial de Curitiba',
  divisions: ['CIC Norte', 'CIC Central', 'CIC Sul'],
  vilas: [
    'Vila Nossa Senhora da Luz',
    'Vila Verde',
    'Vila Barigui',
    'Vila Reno',
    'Vila Audi',
    'Vila Caiuá',
    'Conjunto Caiuá',
    'Conjunto Parigot de Souza',
    'Vila Sabará',
    'Vila Tecnológica',
    'Vila São José',
    'Vila São Pedro',
    'Vila Osternack',
    'Vila Gabineto',
    'Vila Pompéia',
    'Vila União'
  ],
  areas: [
    'Área Industrial CIC',
    'Polo Industrial CIC',
    'Distrito Industrial CIC',
    'Parque Industrial CIC'
  ]
};

export const NEIGHBORHOODS = [
  "Abranches", "Água Verde", "Ahú", "Alto Boqueirão", "Alto da Glória", "Alto da XV", "Atuba", "Augusta",
  "Bacacheri", "Bairro Alto", "Barreirinha", "Batel", "Bigorrilho", "Boa Vista", "Bom Retiro", "Boqueirão",
  "Butiatuvinha", "Cabral", "Cachoeira", "Cajuru", "Campina do Siqueira", "Campo Comprido", "Campo de Santana",
  "Capão da Imbuia", "Capão Raso", "Cascatinha", "Centro", "Centro Cívico", "Champagnat", "CIC",
  "Conjunto Caiuá", "Conjunto Parigot de Souza",
  "Cristo Rei", "Fanny", "Fazendinha", "Ganchinho", "Guabirotuba", "Guaíra", "Hauer", "Hugo Lange",
  "Jardim Botânico", "Jardim das Américas", "Jardim Social", "Juvevê", "Lamenha Pequena", "Lindoia",
  "Mercês", "Mossunguê", "Novo Mundo", "Orleans", "Parolin", "Pascoa", "Pilarzinho", "Pinheirinho",
  "Portão", "Prado Velho", "Rebouças", "Riviera", "Santa Cândida", "Santa Felicidade", "Santa Quitéria",
  "Santo Inácio", "São Braz", "São Francisco", "São João", "São Lourenco", "Seminário", "Sítio Cercado",
  "Taboão", "Tarumã", "Tatuquara", "Tingui", "Uberaba", "Umbará",
  "Vila Audi", "Vila Barigui", "Vila Caiuá", "Vila Gabineto", "Vila Izabel", "Vila Nossa Senhora da Luz",
  "Vila Osternack", "Vila Pompéia", "Vila Reno", "Vila Sabará", "Vila São José", "Vila São Pedro",
  "Vila Tecnológica", "Vila União", "Vila Verde", "Vista Alegre", "Xaxim"
];

export const ALL_CIC_LOCATIONS = [
  CIC_LOCATIONS.main
];

export const CITIES_RMC = [
  "Curitiba", "Pinhais", "São José dos Pinhais", "Colombo", "Araucária", "Campo Largo",
  "Almirante Tamandaré", "Fazenda Rio Grande", "Piraquara", "Quatro Barras", "Campina Grande do Sul",
  "Campo Magro", "Itaperuçu", "Rio Branco do Sul"
];

export const SERVICES: Service[] = [
  {
    id: 'steel-frame',
    title: 'Construção com Steel Frame',
    description: 'Sistema construtivo industrializado com estrutura de aço galvanizado Z275 de alta resistência. Proporciona obras limpas, precisão milimétrica e cronogramas até 70% mais rápidos. Ideal para residências de alto padrão e prédios comerciais que exigem sustentabilidade e isolamento térmico superior no inverno de Curitiba.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/projeto-stell-frame.png-bAiwJLHNjOpiURXX8I0tGfLyNCau5x.jpeg'
  },
  {
    id: 'telhado-steel',
    title: 'Estrutura Steel Frame para Telhado',
    description: 'Substituição moderna da madeira por perfis de aço galvanizado. Estruturas leves que não empenam, são imunes a cupins e possuem montagem simplificada. Compatível com telhas Shingle, cerâmicas ou metálicas, garantindo alinhamento perfeito e segurança estrutural.',
    image: 'https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'drywall',
    title: 'Forro e Parede com Drywall',
    description: 'Soluções versáteis com placas de gesso acartonado para divisórias e forros. Oferecemos sistemas com isolamento acústico em lã mineral para máximo conforto. Ideal para reformas rápidas, sancas decorativas e paredes resistentes à umidade (RU) em banheiros e cozinhas.',
    image: '/forro-e-parede-em-drywall.jpeg'
  },
  {
    id: 'shingle',
    title: 'Cobertura com Telhado Shingle',
    description: 'O sistema de cobertura mais utilizado nos EUA e Europa, agora disponível para o Paraná. Telhas asfálticas que oferecem estanqueidade absoluta, resistência a ventos de até 100km/h e design sofisticado. Requer base em OSB Home Plus e subcobertura asfáltica para performance ideal.',
    image: '/telhado-shingle.jpg'
  },
  {
    id: 'pvc-modular',
    title: 'Placa Modular de PVC',
    description: 'Forros removíveis de PVC em placas de 625x625mm. Solução prática para ambientes que exigem assepsia constante, como clínicas, laboratórios e cozinhas industriais. Facilita o acesso às instalações sobre o forro e não propaga chamas.',
    image: 'https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Steel Frame: A revolução na construção civil em Curitiba',
    excerpt: 'Descubra como o Steel Frame está transformando a construção em Curitiba com obras até 70% mais rápidas, sustentáveis e precisas.',
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/projeto-stell-frame.png-bAiwJLHNjOpiURXX8I0tGfLyNCau5x.jpeg',
    tag: 'Steel Frame',
    date: 'Jan 2025'
  },
  {
    id: 'b2',
    title: 'Drywall: Isolamento acústico e térmico para seu conforto',
    excerpt: 'Conheça as vantagens do drywall para projetos residenciais e comerciais em Curitiba. Acabamento perfeito e isolamento acústico superior.',
    img: '/forro-e-parede-em-drywall.jpeg',
    tag: 'Drywall',
    date: 'Dez 2024'
  },
  {
    id: 'b3',
    title: 'Telhado Shingle: Beleza e proteção contra intempéries',
    excerpt: 'Saiba por que o telhado shingle é a escolha ideal para quem busca estética moderna, resistência a vendavais e estanqueidade absoluta no Paraná.',
    img: '/telhado-shingle.jpg',
    tag: 'Telhado',
    date: 'Nov 2024'
  },
  {
    id: 'b4',
    title: 'Quanto Custa Construir em Steel Frame em Curitiba? Guia de Custos e Economia Real',
    excerpt: 'Análise detalhada de custos por metro quadrado de obras em Steel Frame em Curitiba e RMC. Entenda o comparativo real com a alvenaria, economia em fundações e retorno do investimento.',
    img: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Custos & Economia',
    date: 'Fev 2025'
  },
  {
    id: 'b5',
    title: '7 Curiosidades e Fatos do Steel Frame que Você Precisa Saber Antes de Construir',
    excerpt: 'Descubra dados surpreendentes do Light Steel Framing: resistência a vendavais, durabilidade de mais de 100 anos do aço galvanizado Z180, conforto no inverno curitibano e manutenção descomplicada.',
    img: 'https://images.pexels.com/photos/5691593/pexels-photo-5691593.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Curiosidades & Engenharia',
    date: 'Mar 2025'
  },
  {
    id: 'b6',
    title: 'Guia Passo a Passo da Obra em Steel Frame: Do Radier ao Acabamento',
    excerpt: 'Conheça o cronograma executivo detalhado de uma construção industrializada a seco: dimensionamento estrutural, montagem de painéis, barreiras hidrófugas, isolamento e fechamento.',
    img: 'https://images.pexels.com/photos/8092357/pexels-photo-8092357.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Guia Executivo',
    date: 'Abr 2025'
  },
  {
    id: 'b7',
    title: 'Como a KY Drywall Otimiza sua Obra a Seco em Curitiba e Região Metropolitana',
    excerpt: 'Descubra como o centro de distribuição da KY Drywall na BR-277 reduz custos de canteiro através de estoque permanente a pronta entrega, memorial de cálculo de quantitativos e logística ágil.',
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ky-loja-cajuru-drywall-stell-fame.png-CAi9KHi0wcqQLptb0qLFGSWQZaXr98.jpeg',
    tag: 'Distribuição & Logística',
    date: 'Mai 2025'
  },
  {
    id: 'b8',
    title: 'Custos Detalhados de Drywall e Steel Frame por m² em Curitiba (2026)',
    excerpt: 'Planilha de custos atualizada para construção e reforma a seco em Curitiba e RMC. Entenda o valor por m² de paredes, forros e estruturas completas.',
    img: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Custos & Orçamento',
    date: 'Jun 2025'
  },
  {
    id: 'b9',
    title: 'Por que o Steel Frame Supera a Alvenaria no Rigoroso Inverno de Curitiba',
    excerpt: 'Entenda como o isolamento térmico avançado com lã mineral em estruturas LSF elimina paredes geladas, mofo e garante economia com aquecimento.',
    img: 'https://images.pexels.com/photos/1292294/pexels-photo-1292294.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Conforto & Engenharia',
    date: 'Jul 2025'
  },
  {
    id: 'b10',
    title: 'Guia Definitivo do Drywall: Placas ST, RU e RF na Construção a Seco',
    excerpt: 'Saiba exatamente quando usar placa padrão (branca), resistente à umidade (verde) e resistente ao fogo (rosa) em projetos residenciais e comerciais.',
    img: 'https://images.pexels.com/photos/5691551/pexels-photo-5691551.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Materiais & Aplicação',
    date: 'Ago 2025'
  }
];

export const getRandomCTA = () => [
  "Consultar Preço no WhatsApp",
  "Garantir Oferta Técnica",
  "Falar com Especialista KY",
  "Receber Orçamento em Minutos"
][Math.floor(Math.random() * 4)];

export const normalizeLocationName = (name: string): string => {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-');
};

export const denormalizeLocationName = (slug: string): string => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const REDIRECTIONS: Record<string, string> = {
  'cidade-industrial-de-curitiba': 'cic',
  'cidade-industrial': 'cic',
  'cic-norte': 'cic',
  'cic-central': 'cic',
  'cic-sul': 'cic',
  'area-industrial-cic': 'cic',
  'polo-industrial-cic': 'cic',
  'distrito-industrial-cic': 'cic',
  'parque-industrial-cic': 'cic'
};
