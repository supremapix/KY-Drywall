
import { Product, Category, Service, NavItem, BlogPost } from './types';

export const BASE_URL = 'https://www.kydrywall.com.br';

export const SITE_ASSETS = {
  logo: 'https://kydrywall.com.br/produtos/wp-content/uploads/2022/09/logotipo-kydrywall-1-1.png',
  placeholder: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800',
  categories: {
    fitas: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800',
    massas: 'https://images.unsplash.com/photo-1628745277862-bc0f2d7e1231?auto=format&fit=crop&q=80&w=800',
    parafusos: 'https://images.unsplash.com/photo-1581244276894-8a3b8321075c?auto=format&fit=crop&q=80&w=800',
    perfis: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=800',
    placas: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
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
    name: 'Massa para Drywall Holdflex (28kg)',
    description: 'Massa para tratamento de juntas de drywall de alta qualidade. Secagem rápida e acabamento extra liso.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2022/09/massa-drywall.png',
    rating: 5,
    specs: ['Peso: 28kg', 'Uso: Juntas Drywall', 'Marca: Holdflex'],
    applications: ['Paredes Internas', 'Forros', 'Acabamento de Parafusos']
  },
  {
    id: 'pl1',
    category: 'Placas',
    name: 'Chapa Drywall ST Branca (1,20x1,80m)',
    description: 'Chapa standard para uso geral em forros e paredes divisórias. Tecnologia Gypsum.',
    image: 'https://images.unsplash.com/photo-1628745277862-bc0f2d7e1231?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    specs: ['Dimensão: 1,20 x 1,80m', 'Espessura: 12.5mm', 'Tipo: ST'],
    applications: ['Divisórias', 'Forros F530', 'Revestimentos']
  },
  {
    id: 'pe1',
    category: 'Perfis',
    name: 'Perfil Montante 70 - Barbieri',
    description: 'Perfil vertical de 70mm com galvanização Z180. Alta resistência estrutural.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2022/09/montante-70.jpg',
    rating: 5,
    specs: ['Largura: 70mm', 'Comprimento: 3000mm', 'Marca: Barbieri'],
    applications: ['Estrutura de Paredes', 'Shafts', 'Steel Frame']
  },
  {
    id: 'pa1',
    category: 'Parafusos',
    name: 'Parafuso GN 3,5x25 Ponta Agulha',
    description: 'Parafuso fosfatizado para fixação de chapas de gesso em perfis metálicos.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2022/09/parafuso.jpg',
    rating: 4.9,
    specs: ['Tipo: GN', 'Bitola: 3.5mm', 'Comprimento: 25mm'],
    applications: ['Fixação de Placas ST', 'Fixação de Placas RU']
  },
  {
    id: 'f1',
    category: 'Fitas',
    name: 'Fita de Papel Microperfurada (150m)',
    description: 'Fita de papel de alta resistência para tratamento de juntas e cantos internos.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800',
    rating: 5,
    specs: ['Largura: 50mm', 'Comprimento: 150m', 'Tipo: Microperfurada'],
    applications: ['Tratamento de Juntas', 'Reforço de Cantos']
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
  { id: 'steel-frame', title: 'Construção com Steel Frame', description: 'Sistema construtivo industrializado e sustentável.', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800' },
  { id: 'telhado-steel', title: 'Estrutura Steel Frame para Telhado', description: 'Estruturas de aço leves e resistentes.', image: 'https://images.unsplash.com/photo-1635424710928-0544e8512eea?auto=format&fit=crop&q=80&w=800' },
  { id: 'drywall', title: 'Forro e Parede com Drywall', description: 'Acabamento perfeito e isolamento acústico superior.', image: 'https://images.unsplash.com/photo-1505015920881-0f83c2f7c95e?auto=format&fit=crop&q=80&w=800' },
  { id: 'shingle', title: 'Cobertura com Telhado Shingle', description: 'Beleza e estanqueidade absoluta.', image: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=800' },
  { id: 'pvc-modular', title: 'Placa Modular de PVC', description: 'Higiene e durabilidade para ambientes comerciais.', image: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800' },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Tendências de Arquitetura Curitibana para 2025',
    excerpt: 'Descubra como o Steel Frame está dominando os condomínios de luxo em bairros como Ecoville e Santa Felicidade.',
    img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600',
    tag: 'Steel Frame',
    date: 'Jan 2025'
  },
  {
    id: 'b2',
    title: 'Isolamento Acústico: Como lidar com o ruído urbano em 2026',
    excerpt: 'Novos materiais e técnicas de drywall para garantir o silêncio absoluto em apartamentos no Batel e Água Verde.',
    img: 'https://images.unsplash.com/photo-1505015920881-0f83c2f7c95e?auto=format&fit=crop&q=80&w=600',
    tag: 'Isolamento',
    date: 'Dez 2024'
  },
  {
    id: 'b3',
    title: 'Eficiência Energética: O segredo das fachadas cimentícias',
    excerpt: 'Por que o sistema EIFS será a norma para construções comerciais sustentáveis na RMC nos próximos anos.',
    img: 'https://images.unsplash.com/photo-1635424710928-0544e8512eea?auto=format&fit=crop&q=80&w=600',
    tag: 'Fachadas',
    date: 'Nov 2024'
  }
];

export const getRandomCTA = () => [
  "Consultar Preço no WhatsApp",
  "Garantir Oferta Técnica",
  "Falar com Especialista KY",
  "Receber Orçamento em Minutos"
][Math.floor(Math.random() * 4)];
