
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
    description: 'Massa para tratamento de juntas de drywall de alta qualidade. Secagem rápida e acabamento extra liso, ideal para juntas e fixações.',
    image: '/massa_para_drywall_holdflex.png',
    rating: 5,
    specs: ['Embalagem: 28kg', 'Uso: Juntas Drywall', 'Marca: Holdflex'],
    applications: ['Paredes Internas', 'Forros', 'Acabamento de Parafusos'],
    whatIsIt: 'A Massa Holdflex é um composto pronto para uso, formulado especificamente para o tratamento de juntas em chapas de gesso para drywall. Sua composição balanceada garante excelente aderência e flexibilidade.',
    selectionCriteria: 'Escolha a Holdflex quando buscar produtividade (secagem rápida) e um acabamento que dispense múltiplas demãos de lixamento.',
    compatibility: 'Compatível com fitas de papel microperfuradas e fitas teladas de fibra de vidro em ambientes internos.',
    faq: [
      { question: 'Quanto tempo demora para secar?', answer: 'A secagem total ocorre entre 12 a 24 horas, dependendo da umidade e ventilação do local.' },
      { question: 'Pode ser usada em áreas externas?', answer: 'Não, para áreas externas utilize a Massa para Placa Cimentícia.' }
    ]
  },
  {
    id: 'm2',
    category: 'Massas',
    name: 'Massa para Placa Cimentícia Holdflex',
    description: 'Massa específica para placas cimentícias. Alta aderência e resistência à umidade para áreas externas.',
    image: '/massa_para_placa_cimenticia_holdflex.jpg',
    rating: 4.9,
    specs: ['Marca: Holdflex', 'Uso: Placas Cimentícias', 'Resistente à Água'],
    applications: ['Áreas Externas', 'Fachadas', 'Áreas Úmidas'],
    whatIsIt: 'Composto cimentício monocomponente desenvolvido para o tratamento de juntas em placas cimentícias e fechamentos externos em steel frame.',
    selectionCriteria: 'Indicada para projetos que exigem estanqueidade e resistência a intempéries em fachadas e áreas externas.',
    compatibility: 'Deve ser aplicada em conjunto com fita telada de 102mm para garantir a estabilidade da junta.',
    faq: [
      { question: 'Pode ser pintada?', answer: 'Sim, após a secagem total e lixamento, aceita diversos tipos de acabamentos e tintas para exterior.' }
    ]
  },
  {
    id: 'm3',
    category: 'Massas',
    name: 'Massa em pó 20Kg Gypsum',
    description: 'Massa em pó para tratamento de juntas. Fácil aplicação e excelente acabamento.',
    image: '/massa_em_po_20kg,_gypsum.jpg',
    rating: 4.8,
    specs: ['Embalagem: 20kg', 'Marca: Gypsum', 'Em Pó'],
    applications: ['Juntas', 'Acabamento', 'Revestimentos'],
    whatIsIt: 'Massa em pó de base gesso para preparo em obra, ideal para grandes volumes de tratamento de juntas em sistemas drywall.',
    selectionCriteria: 'Escolha quando o custo-benefício em grandes obras for prioritário, permitindo controle da consistência no momento do preparo.',
    compatibility: 'Compatível com chapas ST, RU e RF em ambientes internos.'
  },
  {
    id: 'm4',
    category: 'Massas',
    name: 'Massa corrida PVA branco 15Kg Induscril',
    description: 'Massa corrida PVA para acabamento fino em paredes e tetos. Cor branca, fácil lixamento.',
    image: '/massa_corrida_pva_branco_15kg,_induscril.jpg',
    rating: 4.7,
    specs: ['Embalagem: 15kg', 'Marca: Induscril', 'Cor: Branco'],
    applications: ['Acabamento Fino', 'Paredes', 'Tetos'],
    whatIsIt: 'Massa niveladora de base PVA para superfícies internas de alvenaria ou gesso, proporcionando um acabamento liso e uniforme.',
    selectionCriteria: 'Ideal para regularizar pequenas imperfeições antes da pintura final em ambientes secos.',
    compatibility: 'Uso exclusivo em áreas internas não molháveis.'
  },
  {
    id: 'm5',
    category: 'Massas',
    name: 'Massa Base plus 33',
    description: 'Massa base de alta performance para revestimentos e acabamentos profissionais.',
    image: '/massa_base_plus_33.webp',
    rating: 4.9,
    specs: ['Tipo: Base Plus', 'Alta Performance', 'Uso Profissional'],
    applications: ['Base para Pintura', 'Revestimentos', 'Acabamento'],
    whatIsIt: 'Composto de alta tecnologia para preparação de superfícies que receberão acabamentos nobres e tintas de alto brilho.',
    selectionCriteria: 'Utilizada por profissionais que buscam o mais alto nível de nivelamento (Nível 5 de acabamento).'
  },
  {
    id: 'm6',
    category: 'Massas',
    name: 'Massa Base Coat Profort',
    description: 'Massa base coat para sistemas de revestimento em fachadas. Alta durabilidade.',
    image: '/massa_base_coat.webp',
    rating: 5,
    specs: ['Marca: Profort', 'Uso: Fachadas', 'Alta Durabilidade'],
    applications: ['Fachadas', 'Revestimento Externo', 'Base Coat'],
    whatIsIt: 'Cimento polimérico reforçado com fibras, essencial para o sistema EIFS e fechamentos externos em steel frame.',
    selectionCriteria: 'Fundamental para garantir a integridade e flexibilidade da fachada contra variações térmicas.',
    faq: [
      { question: 'Quanto rende um saco?', answer: 'O rendimento médio é de 1,2 kg/m² por mm de espessura aplicada.' }
    ]
  },
  {
    id: 'm7',
    category: 'Massas',
    name: 'Gesso Cola Saco',
    description: 'Gesso cola para fixação de placas e molduras. Secagem rápida e alta aderência.',
    image: '/gesso_cola_saco.jpg',
    rating: 4.8,
    specs: ['Embalagem: 20kg', 'Tipo: Cola', 'Secagem Rápida'],
    applications: ['Fixação de Placas', 'Molduras', 'Sancas'],
    whatIsIt: 'Adesivo à base de gesso com aditivos que prolongam o tempo de trabalho e garantem fixação química superior.',
    selectionCriteria: 'Indicado para colagem de molduras de gesso e placas decorativas em substratos de gesso ou alvenaria.'
  },
  {
    id: 'm8',
    category: 'Massas',
    name: 'Gesso em pó Marília',
    description: 'Gesso em pó massa fina para acabamentos e moldagens. Alta qualidade.',
    image: '/gesso_em_po_marilia.jpg',
    rating: 4.7,
    specs: ['Embalagem: 40kg', 'Marca: Marília', 'Massa Fina'],
    applications: ['Acabamento', 'Moldagens', 'Detalhes'],
    whatIsIt: 'Gesso natural de alta pureza e brancura, moagem extrafina para garantir superfícies espelhadas.',
    selectionCriteria: 'Preferido por gesseiros para revestimento direto sobre laje ou blocos de concreto em Curitiba.'
  },
  {
    id: 'f1',
    category: 'Drywall',
    name: 'Fita para Cimentícia 102mm x 46m',
    description: 'Fita especial para placas cimentícias. Alta aderência e resistência à umidade.',
    image: '/fita_para_cimenticia_102mm_x_46m.png',
    rating: 4.9,
    specs: ['Largura: 102mm', 'Comprimento: 46m', 'Uso: Placas Cimentícias'],
    applications: ['Placas Cimentícias', 'Áreas Externas', 'Ambientes Úmidos'],
    whatIsIt: 'Fita de malha de fibra de vidro alcalino-resistente, projetada para absorver as tensões das juntas em fachadas externas.',
    selectionCriteria: 'Essencial para evitar fissuras nas juntas de placas cimentícias em sistemas de fachada.',
    compatibility: 'Deve ser utilizada com massa base coat ou massa para cimentícia específica.'
  },
  {
    id: 'f2',
    category: 'Fitas',
    name: 'Fita Telada Azul Ancora',
    description: 'Fita telada em fibra de vidro. Maior resistência para juntas e áreas de maior tensão.',
    image: '/fita_telada_azul_-_ancora.jpg',
    rating: 4.9,
    specs: ['Material: Fibra de Vidro', 'Marca: Ancora', 'Cor: Azul'],
    applications: ['Placas Cimentícias', 'Áreas de Tensão', 'Juntas Estruturais'],
    whatIsIt: 'Fita autoadesiva de fibra de vidro com tratamento especial para resistência a álcalis, diferenciada pela cor azul.',
    selectionCriteria: 'Recomendada para reparos rápidos e reforço de juntas em áreas críticas de movimentação estrutural.'
  },
  {
    id: 'f3',
    category: 'Fitas',
    name: 'Fita Papel Gypsum',
    description: 'Fita de papel microperfurada de alta resistência. Ideal para tratamento de juntas e cantos internos.',
    image: '/fita_papel.jpg',
    rating: 5,
    specs: ['Material: Papel', 'Marca: Gypsum', 'Microperfurada'],
    applications: ['Tratamento de Juntas', 'Reforço de Cantos', 'Acabamento'],
    whatIsIt: 'Fita de papel kraft especial com fibras longas e microperfurações que facilitam a saída do ar durante a aplicação.',
    selectionCriteria: 'A fita de papel é a única recomendada por normas técnicas para o tratamento de juntas em sistemas drywall internos.',
    faq: [
      { question: 'Por que usar papel em vez de tela?', answer: 'O papel possui maior resistência mecânica e evita microfissuras que a fita telada simples pode permitir no drywall.' }
    ]
  },
  {
    id: 'f4',
    category: 'Fitas',
    name: 'Fita Metálica para Canto Ancora',
    description: 'Fita metálica para proteção e reforço de cantos externos. Acabamento perfeito e durável.',
    image: '/fita_metalica_para_canto,_ancora.webp',
    rating: 5,
    specs: ['Material: Metal', 'Marca: Ancora', 'Uso: Cantos'],
    applications: ['Proteção de Cantos', 'Acabamento Externo', 'Reforço Estrutural'],
    whatIsIt: 'Fita de papel reforçada com duas tiras de aço galvanizado, flexível para se ajustar a qualquer ângulo de canto.',
    selectionCriteria: 'Indispensável para cantos externos de drywall, protegendo contra impactos e garantindo alinhamento perfeito.'
  },
  {
    id: 'f5',
    category: 'Fitas',
    name: 'Fita Banda Acústica 70mm x 10m Placo',
    description: 'Fita especial para isolamento acústico. Reduz a propagação de ruídos entre ambientes.',
    image: '/fita_banda_acustica.webp',
    rating: 4.8,
    specs: ['Largura: 70mm', 'Comprimento: 10m', 'Marca: Placo'],
    applications: ['Isolamento Acústico', 'Base de Perfis', 'Redução de Ruído'],
    whatIsIt: 'Fita de espuma de polietileno autoadesiva aplicada na base de guias e montantes em contato com a estrutura.',
    selectionCriteria: 'Utilizada para vedar a passagem de som pelo piso, teto e paredes laterais, essencial para o desempenho acústico do sistema.'
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
    selectionCriteria: 'O modelo de 35mm é ideal para a fixação de segunda camada de placas ou chapas de 15mm.'
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
    compatibility: 'Utilize com parafusadeiras de alto torque configuradas corretamente para não romper as fibras do OSB.'
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
    selectionCriteria: 'Indicado para junção de guia com montante onde o ressalto da cabeça deve ser mínimo.'
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
    selectionCriteria: 'O parafuso mais utilizado em obras de drywall residencial.'
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
    selectionCriteria: 'Ideal para montagem de caixilhos e reforços internos em paredes de drywall.'
  },
  {
    id: 'pl1',
    category: 'Placas',
    name: 'Chapa RF Rosa',
    description: 'Chapa resistente ao fogo (RF) na cor rosa. Ideal para áreas que necessitam proteção contra incêndio.',
    image: '/chapa_rf_rosa.jpg',
    rating: 4.9,
    specs: ['Dimensão: 1,20 x 1,80m', 'Tipo: RF (Resistente ao Fogo)', 'Cor: Rosa'],
    applications: ['Rotas de Fuga', 'Cozinhas', 'Áreas com Risco de Incêndio'],
    whatIsIt: 'A Chapa RF (Resistente ao Fogo) possui aditivos em seu núcleo de gesso e fibra de vidro, o que retarda a propagação do fogo e mantém a integridade estrutural por mais tempo.',
    selectionCriteria: 'Obrigatória em caixas de escada, rotas de fuga e compartimentação de riscos de incêndio conforme normas do corpo de bombeiros.',
    compatibility: 'Deve ser utilizada com massa e fitas específicas que também suportem altas temperaturas.',
    faq: [
      { question: 'Ela é totalmente à prova de fogo?', answer: 'Ela é resistente, o que significa que retarda a queima por um período determinado (ex: 30, 60 ou 90 min), mas não é indestrutível.' }
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
    applications: ['Banheiros', 'Cozinhas', 'Áreas Externas Cobertas'],
    whatIsIt: 'Chapa de gesso com hidrofugantes em seu núcleo, que reduzem a absorção de água por capilaridade.',
    selectionCriteria: 'Essencial para paredes de banheiros, cozinhas e lavanderias onde haverá aplicação de revestimento cerâmico.',
    faq: [
      { question: 'Pode tomar chuva?', answer: 'Não. Ela resiste à umidade ambiente, mas não ao contato direto e prolongado com água ou chuva.' }
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
    applications: ['Divisórias', 'Forros', 'Revestimentos'],
    whatIsIt: 'A placa standard (ST) é a base de qualquer sistema drywall interno, composta por um núcleo de gesso natural e aditivos, revestida por papel cartão.',
    selectionCriteria: 'A solução mais econômica para divisórias internas de escritórios e residências em ambientes sem umidade.',
    faq: [
      { question: 'Posso pendurar TV nela?', answer: 'Sim, desde que utilize buchas específicas para drywall (foguete ou basculante) e, se possível, fixe na estrutura metálica.' }
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
    applications: ['Áreas de Alto Tráfego', 'Paredes Estruturais', 'Divisórias Reforçadas'],
    whatIsIt: 'Placa premium com densidade superior e reforço de fibras, oferecendo maior resistência a impactos e fixação de cargas.',
    selectionCriteria: 'Indicada para corredores de escolas, hospitais ou locais onde a parede sofrerá batidas constantes.'
  },
  {
    id: 'pl5',
    category: 'Placas',
    name: 'Chapa Glasroc',
    description: 'Placa cimentícia de alta performance. Resistência superior à água e ao impacto, ideal para áreas externas.',
    image: '/chapa_glasroc.jpg',
    rating: 5,
    specs: ['Tipo: Cimentícia', 'Marca: Glasroc', 'Alta Resistência'],
    applications: ['Fachadas', 'Áreas Externas', 'Ambientes Úmidos'],
    whatIsIt: 'Placa técnica de gesso com faces revestidas por véu de vidro alcalino-resistente, combinando a leveza do drywall com a resistência externa.',
    selectionCriteria: 'A melhor escolha para fachadas arquitetônicas que exigem acabamento liso e alta estabilidade dimensional.'
  },
  {
    id: 'pl6',
    category: 'Placas',
    name: 'Placa Cimentícia Eternit 6/8/10mm',
    description: 'Placa cimentícia Eternit para uso interno e externo. Disponível em diversas espessuras.',
    image: '/placa_cimenticia_eternit_6-8-10mm.jpg',
    rating: 4.9,
    specs: ['Marca: Eternit', 'Espessuras: 6, 8 ou 10mm', 'Uso Interno/Externo'],
    applications: ['Fachadas', 'Áreas Molhadas', 'Revestimentos Externos'],
    whatIsIt: 'Placa de fibrocimento produzida com a tecnologia CRFS (Cimento Reforçado com Fio Sintético).',
    selectionCriteria: 'Versátil para fechamentos externos, mezaninos e paredes com alta exigência de dureza superficial.'
  },
  {
    id: 'pl7',
    category: 'Placas',
    name: 'Painel LP OSB Home Plus',
    description: 'Painel estrutural OSB de alta qualidade. Ideal para construções em steel frame e coberturas.',
    image: '/painel_lp_osb_home_plus.jpg',
    rating: 5,
    specs: ['Marca: LP', 'Tipo: OSB', 'Uso Estrutural'],
    applications: ['Steel Frame', 'Coberturas', 'Estruturas'],
    whatIsIt: 'Painel de tiras de madeira orientadas e prensadas com resinas especiais que garantem alta resistência estrutural e rigidez.',
    selectionCriteria: 'Indispensável para o contraventamento de paredes e suporte de telhados shingle em sistemas LSF.',
    faq: [
      { question: 'Pode ficar exposto ao sol?', answer: 'O modelo Home Plus possui proteção temporária, mas deve ser coberto pela barreira de água o quanto antes.' }
    ]
  },
  {
    id: 'pe1',
    category: 'Perfis',
    name: 'Perfil Drywall Guia 48 Barbieri',
    description: 'Perfil guia horizontal de 48mm. Base essencial para estruturas de drywall, instalado no piso e teto.',
    image: '/perfil_drywall_guia_48_barbieri.webp',
    rating: 4.9,
    specs: ['Largura: 48mm', 'Comprimento: 3000mm', 'Marca: Barbieri'],
    applications: ['Base de Paredes', 'Estrutura de Forros', 'Fixação de Montantes'],
    whatIsIt: 'Perfil de aço galvanizado em formato de "U", normatizado para garantir o alinhamento de paredes divisórias.',
    selectionCriteria: 'Utilize para paredes de espessura final aproximada de 73mm (chapa simples em ambos os lados).'
  },
  {
    id: 'pe2',
    category: 'Perfis',
    name: 'Perfil Montante 70 Barbieri',
    description: 'Perfil vertical de 70mm com galvanização Z180. Alta resistência estrutural para paredes e divisórias.',
    image: '/perfil-montante-70-barbieri.jpg',
    rating: 5,
    specs: ['Largura: 70mm', 'Comprimento: 3000mm', 'Galvanização: Z180'],
    applications: ['Estrutura de Paredes', 'Divisórias', 'Steel Frame'],
    whatIsIt: 'Perfil em formato de "C" com furações para passagem de instalações elétricas e hidráulicas.',
    selectionCriteria: 'O montante de 70mm é o mais versátil para divisórias de escritórios que exigem maior rigidez e espaço para dutos.'
  },
  {
    id: 'pe3',
    category: 'Perfis',
    name: 'Perfil Guia de 70 Barbieri',
    description: 'Perfil guia de 70mm para estruturas mais robustas. Barbieri com galvanização premium.',
    image: '/perfil_guia_de_70_barbieri.jpg',
    rating: 4.9,
    specs: ['Largura: 70mm', 'Comprimento: 3000mm', 'Marca: Barbieri'],
    applications: ['Estruturas Reforçadas', 'Paredes Duplas', 'Base de Montantes'],
    whatIsIt: 'Guia horizontal correspondente ao montante de 70mm, fabricada com aço de alta qualidade Barbieri.',
    selectionCriteria: 'Indicada para bases de paredes que receberão portas pesadas ou grandes vãos.'
  },
  {
    id: 'pe4',
    category: 'Perfis',
    name: 'Perfil Guia de 90',
    description: 'Perfil guia de 90mm para estruturas de grande porte e paredes espessas.',
    image: '/perfil_guia_de_90.jpg',
    rating: 4.8,
    specs: ['Largura: 90mm', 'Comprimento: 3000mm', 'Uso: Estruturas Grandes'],
    applications: ['Paredes Espessas', 'Isolamento Acústico', 'Estruturas Robustas'],
    whatIsIt: 'Guia larga para sistemas de drywall de alto desempenho, permitindo preenchimento com maior espessura de isolamento.',
    selectionCriteria: 'Ideal para salas de cinema, estúdios ou paredes divisórias entre apartamentos.'
  },
  {
    id: 'pe5',
    category: 'Perfis',
    name: 'Montante de 48 Barbieri',
    description: 'Perfil montante de 48mm. Ideal para divisórias leves e forros.',
    image: '/montante_de_48_barbieri.jpg',
    rating: 4.7,
    specs: ['Largura: 48mm', 'Comprimento: 3000mm', 'Marca: Barbieri'],
    applications: ['Divisórias Leves', 'Forros', 'Revestimentos'],
    whatIsIt: 'Montante estreito para economia de espaço interno em apartamentos e escritórios pequenos.',
    selectionCriteria: 'Escolha para revestimentos de paredes existentes ("drylining") onde se deseja perder o mínimo de área útil.'
  },
  {
    id: 'pe6',
    category: 'Perfis',
    name: 'Montante de 90',
    description: 'Montante de 90mm para paredes com maior isolamento. Alta capacidade estrutural.',
    image: '/montante_de_90.png',
    rating: 4.9,
    specs: ['Largura: 90mm', 'Comprimento: 3000mm', 'Alta Capacidade'],
    applications: ['Isolamento Reforçado', 'Paredes Duplas', 'Áreas Acústicas'],
    whatIsIt: 'Perfil vertical robusto que permite a criação de paredes com até 150mm de espessura final, dependendo do plaqueamento.',
    selectionCriteria: 'Utilizado em paredes técnicas onde há necessidade de passagens hidráulicas de grande diâmetro.'
  },
  {
    id: 'pe7',
    category: 'Perfis',
    name: 'Montante Steel Frame 90',
    description: 'Perfil estrutural para steel frame de 90mm. Ideal para construções completas em steel frame.',
    image: '/montante_de_steel_frame_90.webp',
    rating: 5,
    specs: ['Largura: 90mm', 'Comprimento: 3000mm', 'Uso: Steel Frame'],
    applications: ['Construção Steel Frame', 'Estruturas de Casas', 'Paredes Portantes'],
    whatIsIt: 'Perfil estrutural produzido em aço galvanizado Z275 de alta resistência. É a espinha dorsal de construções residenciais e comerciais em LSF.',
    selectionCriteria: 'O montante de 90mm é o padrão para paredes portantes de casas térreas e sobrados, oferecendo o equilíbrio ideal entre custo e desempenho estrutural.',
    compatibility: 'Compatível com Guias de 90mm e parafusos de cabeça chata ou flangeada para steel frame.'
  },
  {
    id: 'pe8',
    category: 'Perfis',
    name: 'Montante Steel Frame 140',
    description: 'Perfil estrutural para steel frame de 140mm. Máxima capacidade estrutural para grandes vãos.',
    image: '/montante_de_steel_frame_140.jpg',
    rating: 5,
    specs: ['Largura: 140mm', 'Comprimento: 3000mm', 'Máxima Capacidade'],
    applications: ['Grandes Vãos', 'Estruturas Principais', 'Paredes Portantes'],
    whatIsIt: 'Perfil de alma larga e alta espessura de aço, projetado para suportar cargas elevadas e vencer vãos maiores sem flexão.',
    selectionCriteria: 'Indicado para paredes externas de sobrados de dois ou mais pavimentos e vigas de transição.',
    compatibility: 'Combine com parafusos de alta resistência e guias de 140mm.'
  },
  {
    id: 'la1',
    category: 'Lã (Isolamento)',
    name: 'Lã de Pet',
    description: 'Isolamento termo-acústico ecológico feito de material reciclado. Sustentável e eficiente.',
    image: '/la_de_pet.webp',
    rating: 4.9,
    specs: ['Material: Pet Reciclado', 'Espessura: 50mm', 'Ecológico'],
    applications: ['Isolamento Térmico', 'Isolamento Acústico', 'Construção Sustentável'],
    whatIsIt: 'Manta isolante produzida a partir da reciclagem de garrafas PET, sem adição de resinas fenólicas.',
    selectionCriteria: 'A melhor opção para quem busca sustentabilidade e facilidade de manuseio, pois não solta poeira irritante.',
    faq: [
      { question: 'É inflamável?', answer: 'Não, ela possui tratamento antichamas e não propaga o fogo.' }
    ]
  },
  {
    id: 'la2',
    category: 'Lã (Isolamento)',
    name: 'Lã de Rocha',
    description: 'Manta de lã de rocha com tela. Excelente isolamento térmico e acústico, resistente ao fogo.',
    image: '/la_de_rocha.webp',
    rating: 5,
    specs: ['Material: Lã de Rocha', 'Densidade: 64kg/m³', 'Espessura: 50mm'],
    applications: ['Isolamento Térmico', 'Isolamento Acústico', 'Proteção contra Fogo'],
    whatIsIt: 'Fibras minerais obtidas a partir de rochas basálticas fundidas, oferecendo o mais alto nível de resistência ao fogo.',
    selectionCriteria: 'Obrigatória em salas de máquinas, cinemas e áreas que exigem isolamento acústico pesado e segurança contra incêndio.',
    faq: [
      { question: 'Qual a diferença para a lã de vidro?', answer: 'A lã de rocha possui maior densidade e resistência a temperaturas extremas (até 750°C).' }
    ]
  },
  {
    id: 'la3',
    category: 'Lã (Isolamento)',
    name: 'Lã de Vidro Isover',
    description: 'Lã de vidro Isover de alta performance. Excelente isolamento termo-acústico.',
    image: '/la_de_vidro_isover.webp',
    rating: 4.9,
    specs: ['Marca: Isover', 'Material: Lã de Vidro', 'Alta Performance'],
    applications: ['Isolamento Térmico', 'Isolamento Acústico', 'Forros e Paredes'],
    whatIsIt: 'Manta isolante flexível e leve, com alto poder de compressão e absorção sonora.',
    selectionCriteria: 'A solução clássica e mais econômica para isolamento de forros e divisórias de drywall em Curitiba.'
  },
  {
    id: 'd1',
    category: 'Ferragens',
    name: 'Adaptador Angular Para Parafusadeira',
    description: 'Adaptador angular para facilitar a aplicação de parafusos em locais de difícil acesso.',
    image: '/adaptador_angular_para_parafusadeira.webp',
    rating: 4.7,
    specs: ['Tipo: Angular', 'Uso: Parafusadeira', 'Ângulo: 60°'],
    applications: ['Locais de Difícil Acesso', 'Cantos', 'Instalações'],
    whatIsIt: 'Acessório de impacto para parafusadeiras que permite o acesso a locais estreitos ou em ângulos onde o corpo da máquina não entra.',
    selectionCriteria: 'Essencial para montagem de estruturas complexas de forros e sancas decorativas.'
  },
  {
    id: 'd2',
    category: 'Ferragens',
    name: 'Adaptador de Tomada',
    description: 'Adaptador de tomada 2P chato para 2P redondo. Prático e seguro.',
    image: '/adaptador_de_tomada.webp',
    rating: 4.5,
    specs: ['Tipo: 2P', 'Corrente: 10A', 'Tensão: 250V'],
    applications: ['Instalações Elétricas', 'Canteiros de Obra', 'Uso Geral'],
    whatIsIt: 'Adaptador elétrico universal para compatibilização de ferramentas de canteiro com o padrão brasileiro de tomadas.'
  },
  {
    id: 'd3',
    category: 'Placas',
    name: 'Compensado Fenólico',
    description: 'Compensado fenólico de alta qualidade. Resistente à água, ideal para formas de concreto e estruturas.',
    image: '/compensado_fenolico.png',
    rating: 4.8,
    specs: ['Tipo: Fenólico', 'Resistente à Água', 'Múltiplos Usos'],
    applications: ['Formas de Concreto', 'Estruturas Temporárias', 'Construção Civil'],
    whatIsIt: 'Chapa de madeira laminada colada com resina fenólica (WBP), garantindo alta resistência à umidade e reuso em formas.',
    selectionCriteria: 'Utilizado em canteiros de steel frame para criação de fôrmas de radier e fechamentos temporários.'
  },
  {
    id: 'd4',
    category: 'Diversos',
    name: 'Adesivo de Silicone Tytan Standard',
    description: 'Adesivo de silicone para vedação e fixação. Resistente à água e intempéries.',
    image: '/adesivo_de_silicone_tytan_standard.webp',
    rating: 4.7,
    specs: ['Marca: Tytan', 'Embalagem: 260g', 'Cor: Branco'],
    applications: ['Vedação', 'Fixação', 'Acabamento'],
    whatIsIt: 'Selante de silicone acético com fungicida, ideal para vedações em banheiros e cozinhas plaqueados com RU.',
    selectionCriteria: 'Garante a estanqueidade em passagens de tubulações e encontros de paredes em áreas molháveis.'
  },
  {
    id: 'fe1',
    category: 'Diversos',
    name: 'Arame Galvanizado BWG20',
    description: 'Arame galvanizado BWG20 para amarrações e fixações em estruturas de drywall.',
    image: '/arame_galvanizado_bwg20.webp',
    rating: 4.8,
    specs: ['Bitola: BWG20', 'Diâmetro: 0,89mm', 'Galvanizado'],
    applications: ['Amarrações', 'Fixações', 'Estruturas'],
    whatIsIt: 'Arame macio e flexível com camada de zinco para proteção contra oxidação.',
    selectionCriteria: 'Utilizado para pendural de forros F530 e amarrações auxiliares de perfis.'
  },
  {
    id: 'fe2',
    category: 'Diversos',
    name: 'Arame Galvanizado BWG10',
    description: 'Arame galvanizado BWG10 para fixações mais robustas. Embalagem de 5kg.',
    image: '/arame_galvanizado_bwg10.webp',
    rating: 4.9,
    specs: ['Bitola: BWG10', 'Embalagem: 5kg', 'Marca: Ancora'],
    applications: ['Fixações Robustas', 'Estruturas Pesadas', 'Amarrações'],
    whatIsIt: 'Arame de bitola grossa para sustentação de cargas maiores em sistemas de teto.'
  },
  {
    id: 'fe3',
    category: 'Parafusos',
    name: 'Bucha Nylon',
    description: 'Bucha nylon para fixação em paredes maciças. Pacote com 200 peças.',
    image: '/bucha_nylon.webp',
    rating: 4.6,
    specs: ['Material: Nylon', 'Quantidade: 200 peças', 'Uso: Parede Maciça'],
    applications: ['Fixação em Paredes', 'Instalações', 'Montagens'],
    whatIsIt: 'Bucha de expansão em nylon de alta qualidade para fixação de guias de drywall em alvenaria ou concreto.'
  },
  {
    id: 'fe4',
    category: 'Perfis',
    name: 'Cantoneira',
    description: 'Cantoneira metálica para proteção e reforço de cantos em drywall.',
    image: '/cantoneira.jpg',
    rating: 4.8,
    specs: ['Material: Metal', 'Uso: Cantos', 'Proteção'],
    applications: ['Proteção de Cantos', 'Reforço', 'Acabamento'],
    whatIsIt: 'Perfil em "L" de aço galvanizado utilizado para dar acabamento e proteção mecânica a cantos externos de 90°.'
  },
  {
    id: 'fe5',
    category: 'Perfis',
    name: 'Cantoneira Perfurada',
    description: 'Cantoneira perfurada para melhor aderência da massa. Acabamento profissional.',
    image: '/cantoneira_perfurada.webp',
    rating: 4.7,
    specs: ['Tipo: Perfurada', 'Material: Metal', 'Melhor Aderência'],
    applications: ['Acabamento Profissional', 'Cantos', 'Reforço'],
    whatIsIt: 'Reforço de canto com múltiplas perfurações que permitem que a massa de rejunte transpasse o metal, criando uma fixação mecânica superior.'
  },
  {
    id: 'fe6',
    category: 'Perfis',
    name: 'Cantoneira PVC com Tela',
    description: 'Cantoneira em PVC com tela para melhor fixação e acabamento em cantos.',
    image: '/cantoneira_pvc_com_tela.webp',
    rating: 4.6,
    specs: ['Material: PVC', 'Com Tela', 'Fácil Aplicação'],
    applications: ['Cantos Internos', 'Acabamento', 'Proteção'],
    whatIsIt: 'Acessório para sistemas de fachadas (EIFS) ou reboco fino, garantindo que o canto não trinque e fique perfeitamente reto.'
  },
  {
    id: 'fe7',
    category: 'Perfis',
    name: 'Cantoneira Branca Isover',
    description: 'Cantoneira branca Isover de alta qualidade. Acabamento premium para cantos.',
    image: '/cantoneira_branca.jpeg',
    rating: 4.9,
    specs: ['Marca: Isover', 'Cor: Branco', 'Alta Qualidade'],
    applications: ['Acabamento Premium', 'Cantos Externos', 'Reforço'],
    whatIsIt: 'Cantoneira com pintura eletrostática branca, ideal para acabamentos aparentes em forros modulares ou sancas que não receberão pintura posterior.'
  },
  {
    id: 'fe8',
    category: 'Perfis',
    name: 'Tabica Lisa Galvanizada',
    description: 'Tabica lisa galvanizada para acabamento de forros e transições.',
    image: '/tabica_lisa_galvanizada.webp',
    rating: 4.7,
    specs: ['Material: Galvanizado', 'Tipo: Lisa', 'Uso: Forros'],
    applications: ['Acabamento de Forros', 'Transições', 'Detalhes'],
    whatIsIt: 'Perfil perimetral para forros de drywall que cria um efeito de "forro dilatado" ou flutuante, absorvendo as movimentações estruturais.',
    selectionCriteria: 'Utilizada para evitar trincas no encontro entre o forro e a parede.'
  },
  {
    id: 'fe9',
    category: 'Perfis',
    name: 'Tabica Branca',
    description: 'Tabica branca para acabamento decorativo. Fácil instalação e pintura.',
    image: '/tabica_branca.jpg',
    rating: 4.6,
    specs: ['Cor: Branco', 'Uso: Decorativo', 'Fácil Instalação'],
    applications: ['Acabamento Decorativo', 'Forros', 'Detalhes'],
    whatIsIt: 'Tabica com acabamento em pintura branca, pronta para instalação, agilizando a etapa de pintura do forro.'
  },
  {
    id: 'fe10',
    category: 'Perfis',
    name: 'Emenda para F530',
    description: 'Emenda específica para perfil F530. Conexão segura e resistente.',
    image: '/emenda_para_f530.jpg',
    rating: 4.7,
    specs: ['Uso: Perfil F530', 'Material: Metal', 'Alta Resistência'],
    applications: ['Emenda de Perfis', 'Estruturas de Forro', 'Conexões'],
    whatIsIt: 'Acessório de encaixe por pressão para unir dois perfis canaleta F530, garantindo o alinhamento e a continuidade estrutural do forro.'
  },
  {
    id: 'fe11',
    category: 'Ferragens',
    name: 'Plaina para Drywall Plaster',
    description: 'Plaina manual para ajuste de bordas em placas de drywall. Acabamento perfeito.',
    image: '/plaina_para_drywall_plaster.webp',
    rating: 4.8,
    specs: ['Marca: Plaster', 'Uso: Bordas', 'Manual'],
    applications: ['Ajuste de Bordas', 'Acabamento', 'Preparação'],
    whatIsIt: 'Ferramenta manual de corte para desbastar e chanfrar as bordas das chapas de gesso, facilitando o rejuntamento.',
    selectionCriteria: 'Ferramenta básica para todo montador de drywall que busca acabamento de nível superior.'
  },
  {
    id: 'fe12',
    category: 'Ferragens',
    name: 'Lâmina para Plaina Plaster',
    description: 'Lâmina de reposição para plaina Plaster. Alta durabilidade e corte preciso.',
    image: '/lamina_para_plaina_plaster.webp',
    rating: 4.7,
    specs: ['Marca: Plaster', 'Tipo: Reposição', 'Alta Durabilidade'],
    applications: ['Reposição', 'Manutenção', 'Acabamento'],
    whatIsIt: 'Lâmina de aço temperado para substituição em plainas Plaster, mantendo o poder de corte original.'
  },
  {
    id: 'fe13',
    category: 'Ferragens',
    name: 'Bits Ponta Phillips 25mm Ciser',
    description: 'Jogo de bits Phillips PH2 25mm. Ideal para parafusadeiras em instalações de drywall.',
    image: '/bits_ponta_phillips_25mm.webp',
    rating: 4.8,
    specs: ['Tipo: Phillips PH2', 'Comprimento: 25mm', 'Marca: Ciser'],
    applications: ['Parafusadeiras', 'Instalação de Drywall', 'Fixações'],
    whatIsIt: 'Ponteira magnética de alta resistência (S2), projetada para o encaixe perfeito nos parafusos de drywall GN e metal-metal.',
    selectionCriteria: 'Evita que a cabeça do parafuso "espane", garantindo agilidade na montagem.'
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
  "Capão da Imbuia", "Capão Raso", "Cascatinha", "Centro", "Centro Cívico", "Champagnat", "CIC", "Cidade Industrial",
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
  CIC_LOCATIONS.main,
  ...CIC_LOCATIONS.divisions,
  ...CIC_LOCATIONS.vilas,
  ...CIC_LOCATIONS.areas
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
