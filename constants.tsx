
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
  placeholder: 'https://kydrywall.com.br/produtos/wp-content/uploads/2022/09/logotipo-kydrywall-1-1.png',
  categories: {
    fitas: 'https://kydrywall.com.br/produtos/wp-content/uploads/2022/10/ftc102_cimentape_galeria.png',
    massas: 'https://kydrywall.com.br/produtos/wp-content/uploads/2022/09/massa-drywall.png',
    parafusos: 'https://kydrywall.com.br/produtos/wp-content/uploads/2022/10/parafusos-gn35.jpg',
    perfis: 'https://kydrywall.com.br/produtos/wp-content/uploads/2022/10/montante-70.jpg',
    placas: 'https://kydrywall.com.br/produtos/wp-content/uploads/2022/11/Chapa-st-768x768.jpg',
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
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2022/09/massa-drywall.png',
    rating: 5,
    specs: ['Embalagem: 28kg', 'Uso: Juntas Drywall', 'Marca: Holdflex'],
    applications: ['Paredes Internas', 'Forros', 'Acabamento de Parafusos']
  },
  {
    id: 'm2',
    category: 'Massas',
    name: 'Massa para Placa Cimentícia Holdflex',
    description: 'Massa específica para placas cimentícias. Alta aderência e resistência à umidade para áreas externas.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2022/10/f6b82793-4e7c-4fde-ba06-a981980ae6d7.jpg',
    rating: 4.9,
    specs: ['Marca: Holdflex', 'Uso: Placas Cimentícias', 'Resistente à Água'],
    applications: ['Áreas Externas', 'Fachadas', 'Áreas Úmidas']
  },
  {
    id: 'm3',
    category: 'Massas',
    name: 'Massa em pó 20Kg Gypsum',
    description: 'Massa em pó para tratamento de juntas. Fácil aplicação e excelente acabamento.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2022/11/massa-po.jpg',
    rating: 4.8,
    specs: ['Embalagem: 20kg', 'Marca: Gypsum', 'Em Pó'],
    applications: ['Juntas', 'Acabamento', 'Revestimentos']
  },
  {
    id: 'm4',
    category: 'Massas',
    name: 'Massa corrida PVA branco 15Kg Induscril',
    description: 'Massa corrida PVA para acabamento fino em paredes e tetos. Cor branca, fácil lixamento.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2022/11/massa-corrida-768x768.jpg',
    rating: 4.7,
    specs: ['Embalagem: 15kg', 'Marca: Induscril', 'Cor: Branco'],
    applications: ['Acabamento Fino', 'Paredes', 'Tetos']
  },
  {
    id: 'm5',
    category: 'Massas',
    name: 'Massa Base plus 33',
    description: 'Massa base de alta performance para revestimentos e acabamentos profissionais.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2023/03/3b4563_dd2d704360dc4202b9dc3bab1be86708mv2.webp',
    rating: 4.9,
    specs: ['Tipo: Base Plus', 'Alta Performance', 'Uso Profissional'],
    applications: ['Base para Pintura', 'Revestimentos', 'Acabamento']
  },
  {
    id: 'm6',
    category: 'Massas',
    name: 'Massa Base Coat Profort',
    description: 'Massa base coat para sistemas de revestimento em fachadas. Alta durabilidade.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2023/03/base-coat.webp',
    rating: 5,
    specs: ['Marca: Profort', 'Uso: Fachadas', 'Alta Durabilidade'],
    applications: ['Fachadas', 'Revestimento Externo', 'Base Coat']
  },
  {
    id: 'm7',
    category: 'Massas',
    name: 'Gesso Cola Saco',
    description: 'Gesso cola para fixação de placas e molduras. Secagem rápida e alta aderência.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2023/03/Gesso-Cola-20-KG-FRENTE-E-VERSO-768x768.jpg',
    rating: 4.8,
    specs: ['Embalagem: 20kg', 'Tipo: Cola', 'Secagem Rápida'],
    applications: ['Fixação de Placas', 'Molduras', 'Sancas']
  },
  {
    id: 'm8',
    category: 'Massas',
    name: 'Gesso em pó Marília',
    description: 'Gesso em pó massa fina para acabamentos e moldagens. Alta qualidade.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2023/03/Saco-Gesso-Massa-Fina-40kg-Gesso-Marilia-1-300x300-1.jpg',
    rating: 4.7,
    specs: ['Embalagem: 40kg', 'Marca: Marília', 'Massa Fina'],
    applications: ['Acabamento', 'Moldagens', 'Detalhes']
  },
  {
    id: 'f1',
    category: 'Drywall',
    name: 'Fita para Cimentícia 102mm x 46m',
    description: 'Fita especial para placas cimentícias. Alta aderência e resistência à umidade.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2022/10/ftc102_cimentape_galeria.png',
    rating: 4.9,
    specs: ['Largura: 102mm', 'Comprimento: 46m', 'Uso: Placas Cimentícias'],
    applications: ['Placas Cimentícias', 'Áreas Externas', 'Ambientes Úmidos']
  },
  {
    id: 'f2',
    category: 'Fitas',
    name: 'Fita Telada Azul Ancora',
    description: 'Fita telada em fibra de vidro. Maior resistência para juntas e áreas de maior tensão.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2022/11/fita-azul-768x768.jpg',
    rating: 4.9,
    specs: ['Material: Fibra de Vidro', 'Marca: Ancora', 'Cor: Azul'],
    applications: ['Placas Cimentícias', 'Áreas de Tensão', 'Juntas Estruturais']
  },
  {
    id: 'f3',
    category: 'Fitas',
    name: 'Fita Papel Gypsum',
    description: 'Fita de papel microperfurada de alta resistência. Ideal para tratamento de juntas e cantos internos.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2022/11/papel.jpg',
    rating: 5,
    specs: ['Material: Papel', 'Marca: Gypsum', 'Microperfurada'],
    applications: ['Tratamento de Juntas', 'Reforço de Cantos', 'Acabamento']
  },
  {
    id: 'f4',
    category: 'Fitas',
    name: 'Fita Metálica para Canto Ancora',
    description: 'Fita metálica para proteção e reforço de cantos externos. Acabamento perfeito e durável.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2022/11/metalica.webp',
    rating: 5,
    specs: ['Material: Metal', 'Marca: Ancora', 'Uso: Cantos'],
    applications: ['Proteção de Cantos', 'Acabamento Externo', 'Reforço Estrutural']
  },
  {
    id: 'f5',
    category: 'Fitas',
    name: 'Fita Banda Acústica 70mm x 10m Placo',
    description: 'Fita especial para isolamento acústico. Reduz a propagação de ruídos entre ambientes.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2023/03/fita_banda_acustica_70mmx10m_placo_1745_1_d07b439764829b24e2bdb7acceba7842-768x768.webp',
    rating: 4.8,
    specs: ['Largura: 70mm', 'Comprimento: 10m', 'Marca: Placo'],
    applications: ['Isolamento Acústico', 'Base de Perfis', 'Redução de Ruído']
  },
  {
    id: 'pa1',
    category: 'Parafusos',
    name: 'Parafuso 3,5x35 (GN35) Drywall',
    description: 'Parafuso fosfatizado para fixação de chapas de gesso em perfis metálicos. Ponta agulha para fácil penetração.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2022/10/parafusos-gn35.jpg',
    rating: 4.9,
    specs: ['Bitola: 3,5mm', 'Comprimento: 35mm', 'Tipo: GN35'],
    applications: ['Fixação de Placas ST', 'Fixação de Placas RU', 'Montagem de Forros']
  },
  {
    id: 'pa2',
    category: 'Parafusos',
    name: 'Parafuso Steel Frame Cabeça Chata Placa OSB',
    description: 'Parafuso especial com acabamento Dacromet para fixação de placas OSB em estruturas steel frame.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2022/10/paraf-placa-osb-dacromet-11.jpg',
    rating: 5,
    specs: ['Tipo: Cabeça Chata', 'Acabamento: Dacromet', 'Uso: Placa OSB'],
    applications: ['Steel Frame', 'Fixação OSB', 'Estruturas de Telhado']
  },
  {
    id: 'pa3',
    category: 'Parafusos',
    name: 'Parafuso L.B 13x42mm',
    description: 'Parafuso para fixação de perfis metálicos. Ideal para união de estruturas steel frame.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2023/03/Parafuso-LB-13-42x13-1-768x374.jpg',
    rating: 5,
    specs: ['Bitola: 13mm', 'Comprimento: 42mm', 'Tipo: L.B'],
    applications: ['Fixação de Perfis', 'Estruturas Metálicas', 'Steel Frame']
  },
  {
    id: 'pa4',
    category: 'Parafusos',
    name: 'Parafuso GN 3,5x25 Ponta Agulha Patta',
    description: 'Parafuso de fixação rápida com ponta agulha. Ideal para chapas de menor espessura.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2023/03/D_NQ_NP_867293-MLB51000462490_082022-O.jpg',
    rating: 4.8,
    specs: ['Bitola: 3,5mm', 'Comprimento: 25mm', 'Marca: Patta'],
    applications: ['Placas Finas', 'Acabamentos', 'Fixação Rápida']
  },
  {
    id: 'pa5',
    category: 'Parafusos',
    name: 'Parafuso L.A',
    description: 'Parafuso para estruturas metálicas leves. Essencial para montagem de perfis e estruturas.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2024/04/1736866683_1GG-e1712690816292.webp',
    rating: 4.8,
    specs: ['Tipo: L.A', 'Uso: Estruturas Leves', 'Alta Resistência'],
    applications: ['Montagem de Perfis', 'Estruturas Auxiliares', 'Fixações Leves']
  },
  {
    id: 'pl1',
    category: 'Placas',
    name: 'Chapa RF Rosa',
    description: 'Chapa resistente ao fogo (RF) na cor rosa. Ideal para áreas que necessitam proteção contra incêndio.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2022/10/Chapa-RF-768x768.jpg',
    rating: 4.9,
    specs: ['Dimensão: 1,20 x 1,80m', 'Tipo: RF (Resistente ao Fogo)', 'Cor: Rosa'],
    applications: ['Rotas de Fuga', 'Cozinhas', 'Áreas com Risco de Incêndio']
  },
  {
    id: 'pl2',
    category: 'Placas',
    name: 'Chapa RU Verde',
    description: 'Chapa resistente à umidade (RU) na cor verde. Perfeita para áreas molhadas e com alta umidade.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2022/10/Chapa-Ru-768x768.jpg',
    rating: 4.8,
    specs: ['Dimensão: 1,20 x 1,80m', 'Tipo: RU (Resistente à Umidade)', 'Cor: Verde'],
    applications: ['Banheiros', 'Cozinhas', 'Áreas Externas Cobertas']
  },
  {
    id: 'pl3',
    category: 'Placas',
    name: 'Chapa Drywall ST Branca',
    description: 'Chapa standard para uso geral em forros e paredes divisórias. Ideal para ambientes secos, oferece excelente acabamento.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2022/11/Chapa-st-768x768.jpg',
    rating: 4.8,
    specs: ['Dimensão: 1,20 x 1,80m', 'Espessura: 12.5mm', 'Tipo: ST Branca'],
    applications: ['Divisórias', 'Forros', 'Revestimentos']
  },
  {
    id: 'pl4',
    category: 'Placas',
    name: 'Chapa Drywall ST Branca Fortissima',
    description: 'Chapa de alta resistência da marca Fortissima. Maior durabilidade e resistência mecânica para projetos exigentes.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2023/03/455dcd0f-9902-4727-a77e-c56fbea3e6f8_13cc124ca34543cd9e28a6f1014254c8_325_365.webp',
    rating: 5,
    specs: ['Dimensão: 1,20 x 1,80m', 'Espessura: 12.5mm', 'Marca: Fortissima'],
    applications: ['Áreas de Alto Tráfego', 'Paredes Estruturais', 'Divisórias Reforçadas']
  },
  {
    id: 'pl5',
    category: 'Placas',
    name: 'Chapa Glasroc',
    description: 'Placa cimentícia de alta performance. Resistência superior à água e ao impacto, ideal para áreas externas.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2023/03/chapa-glasroc-x-placo-768x768.jpg',
    rating: 5,
    specs: ['Tipo: Cimentícia', 'Marca: Glasroc', 'Alta Resistência'],
    applications: ['Fachadas', 'Áreas Externas', 'Ambientes Úmidos']
  },
  {
    id: 'pl6',
    category: 'Placas',
    name: 'Placa Cimentícia Eternit 6/8/10mm',
    description: 'Placa cimentícia Eternit para uso interno e externo. Disponível em diversas espessuras.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2023/03/chapa-cimenticia-superboard-br-10x1200x2400mm-2-1-768x768.jpg',
    rating: 4.9,
    specs: ['Marca: Eternit', 'Espessuras: 6, 8 ou 10mm', 'Uso Interno/Externo'],
    applications: ['Fachadas', 'Áreas Molhadas', 'Revestimentos Externos']
  },
  {
    id: 'pl7',
    category: 'Placas',
    name: 'Painel LP OSB Home Plus',
    description: 'Painel estrutural OSB de alta qualidade. Ideal para construções em steel frame e coberturas.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2023/03/transferir.jpg',
    rating: 5,
    specs: ['Marca: LP', 'Tipo: OSB', 'Uso Estrutural'],
    applications: ['Steel Frame', 'Coberturas', 'Estruturas']
  },
  {
    id: 'pe1',
    category: 'Perfis',
    name: 'Perfil Drywall Guia 48 Barbieri',
    description: 'Perfil guia horizontal de 48mm. Base essencial para estruturas de drywall, instalado no piso e teto.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2022/10/guia-48-768x768.webp',
    rating: 4.9,
    specs: ['Largura: 48mm', 'Comprimento: 3000mm', 'Marca: Barbieri'],
    applications: ['Base de Paredes', 'Estrutura de Forros', 'Fixação de Montantes']
  },
  {
    id: 'pe2',
    category: 'Perfis',
    name: 'Perfil Montante 70 Barbieri',
    description: 'Perfil vertical de 70mm com galvanização Z180. Alta resistência estrutural para paredes e divisórias.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2022/10/montante-70.jpg',
    rating: 5,
    specs: ['Largura: 70mm', 'Comprimento: 3000mm', 'Galvanização: Z180'],
    applications: ['Estrutura de Paredes', 'Divisórias', 'Steel Frame']
  },
  {
    id: 'pe3',
    category: 'Perfis',
    name: 'Perfil Guia de 70 Barbieri',
    description: 'Perfil guia de 70mm para estruturas mais robustas. Barbieri com galvanização premium.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2023/03/perfil-guia-para-drywall-barbieri-70x3000mm-3-768x768.jpg',
    rating: 4.9,
    specs: ['Largura: 70mm', 'Comprimento: 3000mm', 'Marca: Barbieri'],
    applications: ['Estruturas Reforçadas', 'Paredes Duplas', 'Base de Montantes']
  },
  {
    id: 'pe4',
    category: 'Perfis',
    name: 'Perfil Guia de 90',
    description: 'Perfil guia de 90mm para estruturas de grande porte e paredes espessas.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2023/03/s000000000089179993_tmp_1675584696_1.jpg',
    rating: 4.8,
    specs: ['Largura: 90mm', 'Comprimento: 3000mm', 'Uso: Estruturas Grandes'],
    applications: ['Paredes Espessas', 'Isolamento Acústico', 'Estruturas Robustas']
  },
  {
    id: 'pe5',
    category: 'Perfis',
    name: 'Montante de 48 Barbieri',
    description: 'Perfil montante de 48mm. Ideal para divisórias leves e forros.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2023/03/M90.jpg',
    rating: 4.7,
    specs: ['Largura: 48mm', 'Comprimento: 3000mm', 'Marca: Barbieri'],
    applications: ['Divisórias Leves', 'Forros', 'Revestimentos']
  },
  {
    id: 'pe6',
    category: 'Perfis',
    name: 'Montante de 90',
    description: 'Montante de 90mm para paredes com maior isolamento. Alta capacidade estrutural.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2023/03/10.png',
    rating: 4.9,
    specs: ['Largura: 90mm', 'Comprimento: 3000mm', 'Alta Capacidade'],
    applications: ['Isolamento Reforçado', 'Paredes Duplas', 'Áreas Acústicas']
  },
  {
    id: 'pe7',
    category: 'Perfis',
    name: 'Montante Steel Frame 90',
    description: 'Perfil estrutural para steel frame de 90mm. Ideal para construções completas em steel frame.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2023/03/perfil_estrutural_steel_frame_m90_579_1_b5108f7e1870d85da5e70e6b485f5b8f.webp',
    rating: 5,
    specs: ['Largura: 90mm', 'Comprimento: 3000mm', 'Uso: Steel Frame'],
    applications: ['Construção Steel Frame', 'Estruturas de Casas', 'Paredes Portantes']
  },
  {
    id: 'pe8',
    category: 'Perfis',
    name: 'Montante Steel Frame 140',
    description: 'Perfil estrutural para steel frame de 140mm. Máxima capacidade estrutural para grandes vãos.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2023/03/Montante.jpg',
    rating: 5,
    specs: ['Largura: 140mm', 'Comprimento: 3000mm', 'Máxima Capacidade'],
    applications: ['Grandes Vãos', 'Estruturas Principais', 'Paredes Portantes']
  },
  {
    id: 'la1',
    category: 'Lã (Isolamento)',
    name: 'Lã de Pet',
    description: 'Isolamento termo-acústico ecológico feito de material reciclado. Sustentável e eficiente.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2023/03/la_de_pet_acustica_50_07_pacote_149_1_cf0cf7ae2bd55d755864f81bf187d6a1-768x576.webp',
    rating: 4.9,
    specs: ['Material: Pet Reciclado', 'Espessura: 50mm', 'Ecológico'],
    applications: ['Isolamento Térmico', 'Isolamento Acústico', 'Construção Sustentável']
  },
  {
    id: 'la2',
    category: 'Lã (Isolamento)',
    name: 'Lã de Rocha',
    description: 'Manta de lã de rocha com tela. Excelente isolamento térmico e acústico, resistente ao fogo.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2023/03/manta_com_tela_dens_64_x_50mm_rolo_216_1_20180428211209.webp',
    rating: 5,
    specs: ['Material: Lã de Rocha', 'Densidade: 64kg/m³', 'Espessura: 50mm'],
    applications: ['Isolamento Térmico', 'Isolamento Acústico', 'Proteção contra Fogo']
  },
  {
    id: 'la3',
    category: 'Lã (Isolamento)',
    name: 'Lã de Vidro Isover',
    description: 'Lã de vidro Isover de alta performance. Excelente isolamento termo-acústico.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2023/03/1xg.webp',
    rating: 4.9,
    specs: ['Marca: Isover', 'Material: Lã de Vidro', 'Alta Performance'],
    applications: ['Isolamento Térmico', 'Isolamento Acústico', 'Forros e Paredes']
  },
  {
    id: 'd1',
    category: 'Ferragens',
    name: 'Adaptador Angular Para Parafusadeira',
    description: 'Adaptador angular para facilitar a aplicação de parafusos em locais de difícil acesso.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2023/03/adaptador_angular_p_parafusadeira_xmt_60_western_251329_2_10c2ce967340fa139b8a37cec0a13e00_20221108174711-768x768.webp',
    rating: 4.7,
    specs: ['Tipo: Angular', 'Uso: Parafusadeira', 'Ângulo: 60°'],
    applications: ['Locais de Difícil Acesso', 'Cantos', 'Instalações']
  },
  {
    id: 'd2',
    category: 'Ferragens',
    name: 'Adaptador de Tomada',
    description: 'Adaptador de tomada 2P chato para 2P redondo. Prático e seguro.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2023/03/adaptador_tomada_2p_chato_p_2p_10a_250v_daneva_1549_35145_1_0e489dbc8a5dae01de2aeb306f2372cf-768x768.webp',
    rating: 4.5,
    specs: ['Tipo: 2P', 'Corrente: 10A', 'Tensão: 250V'],
    applications: ['Instalações Elétricas', 'Canteiros de Obra', 'Uso Geral']
  },
  {
    id: 'd3',
    category: 'Placas',
    name: 'Compensado Fenólico',
    description: 'Compensado fenólico de alta qualidade. Resistente à água, ideal para formas de concreto e estruturas.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2023/03/altcompensado-madeirite-fenolico.png',
    rating: 4.8,
    specs: ['Tipo: Fenólico', 'Resistente à Água', 'Múltiplos Usos'],
    applications: ['Formas de Concreto', 'Estruturas Temporárias', 'Construção Civil']
  },
  {
    id: 'd4',
    category: 'Diversos',
    name: 'Adesivo de Silicone Tytan Standard',
    description: 'Adesivo de silicone para vedação e fixação. Resistente à água e intempéries.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2024/03/adesivo-de-silicone-tytan-standard-260g-branco-bpehfvmy97.webp',
    rating: 4.7,
    specs: ['Marca: Tytan', 'Embalagem: 260g', 'Cor: Branco'],
    applications: ['Vedação', 'Fixação', 'Acabamento']
  },
  {
    id: 'fe1',
    category: 'Diversos',
    name: 'Arame Galvanizado BWG20',
    description: 'Arame galvanizado BWG20 para amarrações e fixações em estruturas de drywall.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2023/03/arame_galvanizado_fio_20_0_89mm_arcelormittal_11445_1_bfda8f02b4a1e7cf5a821bc2ac9656a8-768x768.webp',
    rating: 4.8,
    specs: ['Bitola: BWG20', 'Diâmetro: 0,89mm', 'Galvanizado'],
    applications: ['Amarrações', 'Fixações', 'Estruturas']
  },
  {
    id: 'fe2',
    category: 'Diversos',
    name: 'Arame Galvanizado BWG10',
    description: 'Arame galvanizado BWG10 para fixações mais robustas. Embalagem de 5kg.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2023/03/arame_galvanizado_bwg10_5kg_ancora_16021_1_fecf308cee84df94a4adb3c7bb51136a-768x768.webp',
    rating: 4.9,
    specs: ['Bitola: BWG10', 'Embalagem: 5kg', 'Marca: Ancora'],
    applications: ['Fixações Robustas', 'Estruturas Pesadas', 'Amarrações']
  },
  {
    id: 'fe3',
    category: 'Parafusos',
    name: 'Bucha Nylon',
    description: 'Bucha nylon para fixação em paredes maciças. Pacote com 200 peças.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2023/03/bucha-06aba-200pc-nylon-parede-macica-403261-worker-1582749392-768x768.webp',
    rating: 4.6,
    specs: ['Material: Nylon', 'Quantidade: 200 peças', 'Uso: Parede Maciça'],
    applications: ['Fixação em Paredes', 'Instalações', 'Montagens']
  },
  {
    id: 'fe4',
    category: 'Perfis',
    name: 'Cantoneira',
    description: 'Cantoneira metálica para proteção e reforço de cantos em drywall.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2023/03/images.jpg',
    rating: 4.8,
    specs: ['Material: Metal', 'Uso: Cantos', 'Proteção'],
    applications: ['Proteção de Cantos', 'Reforço', 'Acabamento']
  },
  {
    id: 'fe5',
    category: 'Perfis',
    name: 'Cantoneira Perfurada',
    description: 'Cantoneira perfurada para melhor aderência da massa. Acabamento profissional.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2023/03/000497c200.webp',
    rating: 4.7,
    specs: ['Tipo: Perfurada', 'Material: Metal', 'Melhor Aderência'],
    applications: ['Acabamento Profissional', 'Cantos', 'Reforço']
  },
  {
    id: 'fe6',
    category: 'Perfis',
    name: 'Cantoneira PVC com Tela',
    description: 'Cantoneira em PVC com tela para melhor fixação e acabamento em cantos.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2023/03/d909a420f4.webp',
    rating: 4.6,
    specs: ['Material: PVC', 'Com Tela', 'Fácil Aplicação'],
    applications: ['Cantos Internos', 'Acabamento', 'Proteção']
  },
  {
    id: 'fe7',
    category: 'Perfis',
    name: 'Cantoneira Branca Isover',
    description: 'Cantoneira branca Isover de alta qualidade. Acabamento premium para cantos.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2023/03/0002561_cantoneira-branca_700.jpeg',
    rating: 4.9,
    specs: ['Marca: Isover', 'Cor: Branco', 'Alta Qualidade'],
    applications: ['Acabamento Premium', 'Cantos Externos', 'Reforço']
  },
  {
    id: 'fe8',
    category: 'Perfis',
    name: 'Tabica Lisa Galvanizada',
    description: 'Tabica lisa galvanizada para acabamento de forros e transições.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2023/03/233288-768x768.webp',
    rating: 4.7,
    specs: ['Material: Galvanizado', 'Tipo: Lisa', 'Uso: Forros'],
    applications: ['Acabamento de Forros', 'Transições', 'Detalhes']
  },
  {
    id: 'fe9',
    category: 'Perfis',
    name: 'Tabica Branca',
    description: 'Tabica branca para acabamento decorativo. Fácil instalação e pintura.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2024/04/download.jpg',
    rating: 4.6,
    specs: ['Cor: Branco', 'Uso: Decorativo', 'Fácil Instalação'],
    applications: ['Acabamento Decorativo', 'Forros', 'Detalhes']
  },
  {
    id: 'fe10',
    category: 'Perfis',
    name: 'Emenda para F530',
    description: 'Emenda específica para perfil F530. Conexão segura e resistente.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2023/03/e88881e2466f17af06168592fe00a039-1605104800-768x512.jpg',
    rating: 4.7,
    specs: ['Uso: Perfil F530', 'Material: Metal', 'Alta Resistência'],
    applications: ['Emenda de Perfis', 'Estruturas de Forro', 'Conexões']
  },
  {
    id: 'fe11',
    category: 'Ferragens',
    name: 'Plaina para Drywall Plaster',
    description: 'Plaina manual para ajuste de bordas em placas de drywall. Acabamento perfeito.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2023/03/29f832863fcf19db48be91ff99bb64e8-768x768.webp',
    rating: 4.8,
    specs: ['Marca: Plaster', 'Uso: Bordas', 'Manual'],
    applications: ['Ajuste de Bordas', 'Acabamento', 'Preparação']
  },
  {
    id: 'fe12',
    category: 'Ferragens',
    name: 'Lâmina para Plaina Plaster',
    description: 'Lâmina de reposição para plaina Plaster. Alta durabilidade e corte preciso.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2023/03/233291-2-768x768.webp',
    rating: 4.7,
    specs: ['Marca: Plaster', 'Tipo: Reposição', 'Alta Durabilidade'],
    applications: ['Reposição', 'Manutenção', 'Acabamento']
  },
  {
    id: 'fe13',
    category: 'Ferragens',
    name: 'Bits Ponta Phillips 25mm Ciser',
    description: 'Jogo de bits Phillips PH2 25mm. Ideal para parafusadeiras em instalações de drywall.',
    image: 'https://kydrywall.com.br/produtos/wp-content/uploads/2023/03/Jogo-de-Bits-Phillips-PH2-25mm-com-Encai-vip-industrial-9000271-768x768.webp',
    rating: 4.8,
    specs: ['Tipo: Phillips PH2', 'Comprimento: 25mm', 'Marca: Ciser'],
    applications: ['Parafusadeiras', 'Instalação de Drywall', 'Fixações']
  }
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
    image: '/forro-e-parede-em-drywall.jpeg'
  },
  {
    id: 'shingle',
    title: 'Cobertura com Telhado Shingle',
    description: 'Telhas asfálticas com beleza estética e estanqueidade absoluta. Resistência garantida contra intempéries.',
    image: '/telhado-shingle.jpg'
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
    img: '/forro-e-parede-em-drywall.jpeg',
    tag: 'Drywall',
    date: 'Dez 2024'
  },
  {
    id: 'b3',
    title: 'Telhado Shingle: Beleza e proteção para sua casa',
    excerpt: 'Saiba por que o telhado shingle é a escolha ideal para quem busca estética, durabilidade e estanqueidade absoluta.',
    img: '/telhado-shingle.jpg',
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
