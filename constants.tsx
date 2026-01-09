
import { Product, Category, Service, NavItem, BlogPost } from './types';

export const BASE_URL = 'https://www.kydrywall.com.br';

export const COMPANY_INFO = {
  name: 'KY Drywall & Steel Frame',
  phone: '(41) 3528-4232',
  whatsapp: '5541996457421',
  email: 'carlos@kydrywall.com.br',
  emailLucilene: 'lucilene@kydrywall.com.br',
  phoneLucilene: '(41) 99906-7259',
  address: 'Rod. BR 277 - 3641, Cajuru, Curitiba, PR',
  hours: {
    weekdays: 'Segunda a Sexta: 7:30 - 17:30',
    saturday: 'Sábado: 7:30 - 12:00'
  }
};

export const SITE_ASSETS = {
  logo: 'https://kydrywall.com.br/produtos/wp-content/uploads/2022/09/logotipo-kydrywall-1-1.png',
  placeholder: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800',
  categories: {
    fitas: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
    massas: 'https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=800',
    parafusos: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=800',
    perfis: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800',
    placas: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
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
      { label: 'Construção com Steel Frame', path: '/servicos/steel-frame' },
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
    image: 'https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 5,
    specs: ['Embalagem: 28kg', 'Uso: Juntas Drywall', 'Marca: Holdflex'],
    applications: ['Paredes Internas', 'Forros', 'Acabamento de Parafusos']
  },
  {
    id: 'pl1',
    category: 'Placas',
    name: 'Chapa Drywall ST Branca',
    description: 'Chapa standard para uso geral em forros e paredes divisórias. Ideal para ambientes secos, oferece excelente acabamento.',
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    specs: ['Dimensão: 1,20 x 1,80m', 'Espessura: 12.5mm', 'Tipo: ST Branca'],
    applications: ['Divisórias', 'Forros', 'Revestimentos']
  },
  {
    id: 'pl2',
    category: 'Placas',
    name: 'Chapa Drywall ST Branca Fortissima',
    description: 'Chapa de alta resistência da marca Fortissima. Maior durabilidade e resistência mecânica para projetos exigentes.',
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 5,
    specs: ['Dimensão: 1,20 x 1,80m', 'Espessura: 12.5mm', 'Marca: Fortissima'],
    applications: ['Áreas de Alto Tráfego', 'Paredes Estruturais', 'Divisórias Reforçadas']
  },
  {
    id: 'pl3',
    category: 'Placas',
    name: 'Chapa RF Rosa',
    description: 'Chapa resistente ao fogo (RF) na cor rosa. Ideal para áreas que necessitam proteção contra incêndio.',
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    specs: ['Dimensão: 1,20 x 1,80m', 'Tipo: RF (Resistente ao Fogo)', 'Cor: Rosa'],
    applications: ['Rotas de Fuga', 'Cozinhas', 'Áreas com Risco de Incêndio']
  },
  {
    id: 'pl4',
    category: 'Placas',
    name: 'Chapa RU Verde',
    description: 'Chapa resistente à umidade (RU) na cor verde. Perfeita para áreas molhadas e com alta umidade.',
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    specs: ['Dimensão: 1,20 x 1,80m', 'Tipo: RU (Resistente à Umidade)', 'Cor: Verde'],
    applications: ['Banheiros', 'Cozinhas', 'Áreas Externas Cobertas']
  },
  {
    id: 'pl5',
    category: 'Placas',
    name: 'Chapa Glasroc',
    description: 'Placa cimentícia de alta performance. Resistência superior à água e ao impacto, ideal para áreas externas.',
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 5,
    specs: ['Tipo: Cimentícia', 'Marca: Glasroc', 'Alta Resistência'],
    applications: ['Fachadas', 'Áreas Externas', 'Ambientes Úmidos']
  },
  {
    id: 'pe1',
    category: 'Perfis',
    name: 'Perfil Drywall Montante 70',
    description: 'Perfil vertical de 70mm com galvanização Z180. Alta resistência estrutural para paredes e divisórias.',
    image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 5,
    specs: ['Largura: 70mm', 'Comprimento: 3000mm', 'Galvanização: Z180'],
    applications: ['Estrutura de Paredes', 'Divisórias', 'Steel Frame']
  },
  {
    id: 'pe2',
    category: 'Perfis',
    name: 'Perfil Drywall Guia 48',
    description: 'Perfil guia horizontal de 48mm. Base essencial para estruturas de drywall, instalado no piso e teto.',
    image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    specs: ['Largura: 48mm', 'Comprimento: 3000mm', 'Uso: Guia Base'],
    applications: ['Base de Paredes', 'Estrutura de Forros', 'Fixação de Montantes']
  },
  {
    id: 'pa1',
    category: 'Parafusos',
    name: 'Parafuso 3,5x35 (GN35) Drywall',
    description: 'Parafuso fosfatizado para fixação de chapas de gesso em perfis metálicos. Ponta agulha para fácil penetração.',
    image: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    specs: ['Bitola: 3,5mm', 'Comprimento: 35mm', 'Tipo: GN35'],
    applications: ['Fixação de Placas ST', 'Fixação de Placas RU', 'Montagem de Forros']
  },
  {
    id: 'pa2',
    category: 'Parafusos',
    name: 'Parafuso GN 3,5x25 Ponta Agulha',
    description: 'Parafuso de fixação rápida com ponta agulha. Ideal para chapas de menor espessura.',
    image: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    specs: ['Bitola: 3,5mm', 'Comprimento: 25mm', 'Marca: Patta'],
    applications: ['Placas Finas', 'Acabamentos', 'Fixação Rápida']
  },
  {
    id: 'pa3',
    category: 'Parafusos',
    name: 'Parafuso L.B 13x42mm',
    description: 'Parafuso para fixação de perfis metálicos. Ideal para união de estruturas steel frame.',
    image: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 5,
    specs: ['Bitola: 13mm', 'Comprimento: 42mm', 'Tipo: L.B'],
    applications: ['Fixação de Perfis', 'Estruturas Metálicas', 'Steel Frame']
  },
  {
    id: 'pa4',
    category: 'Parafusos',
    name: 'Parafuso L.A',
    description: 'Parafuso para estruturas metálicas leves. Essencial para montagem de perfis e estruturas.',
    image: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    specs: ['Tipo: L.A', 'Uso: Estruturas Leves', 'Alta Resistência'],
    applications: ['Montagem de Perfis', 'Estruturas Auxiliares', 'Fixações Leves']
  },
  {
    id: 'pa5',
    category: 'Parafusos',
    name: 'Parafuso Steel Frame Cabeça Chata Placa OSB',
    description: 'Parafuso especial com acabamento Dacromet para fixação de placas OSB em estruturas steel frame.',
    image: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 5,
    specs: ['Tipo: Cabeça Chata', 'Acabamento: Dacromet', 'Uso: Placa OSB'],
    applications: ['Steel Frame', 'Fixação OSB', 'Estruturas de Telhado']
  },
  {
    id: 'f1',
    category: 'Fitas',
    name: 'Fita Papel Gypsum',
    description: 'Fita de papel microperfurada de alta resistência. Ideal para tratamento de juntas e cantos internos.',
    image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 5,
    specs: ['Material: Papel', 'Marca: Gypsum', 'Microperfurada'],
    applications: ['Tratamento de Juntas', 'Reforço de Cantos', 'Acabamento']
  },
  {
    id: 'f2',
    category: 'Fitas',
    name: 'Fita Telada Azul Ancora',
    description: 'Fita telada em fibra de vidro. Maior resistência para juntas e áreas de maior tensão.',
    image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    specs: ['Material: Fibra de Vidro', 'Marca: Ancora', 'Cor: Azul'],
    applications: ['Placas Cimentícias', 'Áreas de Tensão', 'Juntas Estruturais']
  },
  {
    id: 'f3',
    category: 'Fitas',
    name: 'Fita Metálica para Canto Ancora',
    description: 'Fita metálica para proteção e reforço de cantos externos. Acabamento perfeito e durável.',
    image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 5,
    specs: ['Material: Metal', 'Marca: Ancora', 'Uso: Cantos'],
    applications: ['Proteção de Cantos', 'Acabamento Externo', 'Reforço Estrutural']
  },
  {
    id: 'f4',
    category: 'Fitas',
    name: 'Fita Banda Acústica 70mm x 10m Placo',
    description: 'Fita especial para isolamento acústico. Reduz a propagação de ruídos entre ambientes.',
    image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    specs: ['Largura: 70mm', 'Comprimento: 10m', 'Marca: Placo'],
    applications: ['Isolamento Acústico', 'Base de Perfis', 'Redução de Ruído']
  },
  {
    id: 'f5',
    category: 'Fitas',
    name: 'Fita para Cimentícia Cimentape 102mm x 46m',
    description: 'Fita especial para placas cimentícias. Alta aderência e resistência à umidade.',
    image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    specs: ['Largura: 102mm', 'Comprimento: 46m', 'Uso: Placas Cimentícias'],
    applications: ['Placas Cimentícias', 'Áreas Externas', 'Ambientes Úmidos']
  }
];

export const NEIGHBORHOODS = [
  "Abranches", "Água Verde", "Ahú", "Alto Boqueirão", "Alto da Glória", "Alto da XV", "Atuba", "Augusta", 
  "Bacacheri", "Bairro Alto", "Barreirinha", "Batel", "Bigorrilho", "Boa Vista", "Bom Retiro", "Boqueirão", 
  "Butiatuvinha", "Cabral", "Cachoeira", "Cajuru", "Campina do Siqueira", "Campo Comprido", "Campo de Santana", 
  "Capão da Imbuia", "Capão Raso", "Cascatinha", "Centro", "Centro Cívico", "Champagnat", "Cidade Industrial", 
  "Cristo Rei", "Fanny", "Fazendinha", "Ganchinho", "Guabirotuba", "Guaíra", "Hauer", "Hugo Lange", 
  "Jardim Botânico", "Jardim das Américas", "Jardim Social", "Juvevê", "Lamenha Pequena", "Lindoia", 
  "Mercês", "Mossunguê", "Novo Mundo", "Orleans", "Parolin", "Pascoa", "Pilarzinho", "Pinheirinho", 
  "Portão", "Prado Velho", "Rebouças", "Riviera", "Santa Cândida", "Santa Felicidade", "Santa Quitéria", 
  "Santo Inácio", "São Braz", "São Francisco", "São João", "São Lourenço", "Seminário", "Sítio Cercado", 
  "Taboão", "Tarumã", "Tatuquara", "Tingui", "Uberaba", "Umbará", "Vila Izabel", "Vista Alegre", "Xaxim"
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
    description: 'Sistema construtivo industrializado com estrutura metálica. Obra até 70% mais rápida que construção tradicional, sustentável e econômica.',
    image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'telhado-steel',
    title: 'Estrutura Steel Frame para Telhado',
    description: 'Estruturas de aço galvanizado leves e resistentes. Instalação rápida com precisão milimétrica e durabilidade garantida.',
    image: 'https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'drywall',
    title: 'Forro e Parede com Drywall',
    description: 'Acabamento perfeito, isolamento acústico e térmico superior. Ideal para divisórias, forros e revestimentos residenciais e comerciais.',
    image: 'https://images.pexels.com/photos/8092357/pexels-photo-8092357.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'shingle',
    title: 'Cobertura com Telhado Shingle',
    description: 'Telhas asfálticas com beleza estética e estanqueidade absoluta. Resistência garantida contra intempéries.',
    image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'pvc-modular',
    title: 'Placa Modular de PVC',
    description: 'Forros modulares higiênicos e duráveis. Ideal para ambientes comerciais, clínicas e áreas que exigem limpeza facilitada.',
    image: 'https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Steel Frame: A revolução na construção civil em Curitiba',
    excerpt: 'Descubra como o Steel Frame está transformando a construção em Curitiba com obras até 70% mais rápidas e sustentáveis.',
    img: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Steel Frame',
    date: 'Jan 2025'
  },
  {
    id: 'b2',
    title: 'Drywall: Isolamento acústico e térmico para seu conforto',
    excerpt: 'Conheça as vantagens do drywall para projetos residenciais e comerciais. Acabamento perfeito e isolamento superior.',
    img: 'https://images.pexels.com/photos/8092357/pexels-photo-8092357.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Drywall',
    date: 'Dez 2024'
  },
  {
    id: 'b3',
    title: 'Telhado Shingle: Beleza e proteção para sua casa',
    excerpt: 'Saiba por que o telhado shingle é a escolha ideal para quem busca estética, durabilidade e estanqueidade absoluta.',
    img: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Telhado',
    date: 'Nov 2024'
  }
];

export const getRandomCTA = () => [
  "Consultar Preço no WhatsApp",
  "Garantir Oferta Técnica",
  "Falar com Especialista KY",
  "Receber Orçamento em Minutos"
][Math.floor(Math.random() * 4)];
