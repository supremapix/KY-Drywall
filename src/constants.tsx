
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
    "id": "m1",
    "category": "Massas",
    "name": "Massa para Drywall Holdflex",
    "description": "Massa para tratamento de juntas de drywall.",
    "image": "/massa_para_drywall_holdflex.png",
    "rating": 0,
    "specs": [
      "Embalagem: 28kg",
      "Uso: Juntas Drywall",
      "Marca: Holdflex"
    ],
    "applications": [
      "Preparação e acabamento de superfícies conforme a finalidade indicada na embalagem."
    ],
    "whatIsIt": "Massa para Drywall Holdflex é um item do catálogo KY na categoria Massas. Preparação e acabamento de superfícies conforme a finalidade indicada na embalagem.",
    "selectionCriteria": "Confira o substrato, uso interno ou externo, preparo, consumo e intervalo entre demãos na ficha técnica.",
    "compatibility": "Use massa, fita e placa compatíveis com o sistema especificado. Não substitua massa de junta por massa corrida ou gesso comum.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Massa para Drywall Holdflex?",
        "answer": "Confira o substrato, uso interno ou externo, preparo, consumo e intervalo entre demãos na ficha técnica. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "m2",
    "category": "Massas",
    "name": "Massa para Placa Cimentícia Holdflex",
    "description": "Massa específica para placas cimentícias e fechamentos externos.",
    "image": "/massa_para_placa_cimenticia_holdflex.jpg",
    "rating": 0,
    "specs": [
      "Marca: Holdflex",
      "Uso: Placas Cimentícias"
    ],
    "applications": [
      "Preparação e acabamento de superfícies conforme a finalidade indicada na embalagem."
    ],
    "whatIsIt": "Massa para Placa Cimentícia Holdflex é um item do catálogo KY na categoria Massas. Preparação e acabamento de superfícies conforme a finalidade indicada na embalagem.",
    "selectionCriteria": "Confira o substrato, uso interno ou externo, preparo, consumo e intervalo entre demãos na ficha técnica.",
    "compatibility": "Use massa, fita e placa compatíveis com o sistema especificado. Não substitua massa de junta por massa corrida ou gesso comum.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Massa para Placa Cimentícia Holdflex?",
        "answer": "Confira o substrato, uso interno ou externo, preparo, consumo e intervalo entre demãos na ficha técnica. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "m3",
    "category": "Massas",
    "name": "Massa em pó 20Kg Gypsum",
    "description": "Massa em pó para tratamento de juntas de drywall.",
    "image": "/massa_em_po_20kg,_gypsum.jpg",
    "rating": 0,
    "specs": [
      "Embalagem: 20kg",
      "Marca: Gypsum",
      "Preparo: Água"
    ],
    "applications": [
      "Preparação e acabamento de superfícies conforme a finalidade indicada na embalagem."
    ],
    "whatIsIt": "Massa em pó 20Kg Gypsum é um item do catálogo KY na categoria Massas. Preparação e acabamento de superfícies conforme a finalidade indicada na embalagem.",
    "selectionCriteria": "Confira o substrato, uso interno ou externo, preparo, consumo e intervalo entre demãos na ficha técnica.",
    "compatibility": "Use massa, fita e placa compatíveis com o sistema especificado. Não substitua massa de junta por massa corrida ou gesso comum.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Massa em pó 20Kg Gypsum?",
        "answer": "Confira o substrato, uso interno ou externo, preparo, consumo e intervalo entre demãos na ficha técnica. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "m4",
    "category": "Massas",
    "name": "Massa corrida PVA Induscril 15Kg",
    "description": "Massa corrida PVA para acabamento fino em superfícies internas.",
    "image": "/massa_corrida_pva_branco_15kg,_induscril.jpg",
    "rating": 0,
    "specs": [
      "Embalagem: 15kg",
      "Cor: Extra Branco",
      "Base: PVA"
    ],
    "applications": [
      "Preparação e acabamento de superfícies conforme a finalidade indicada na embalagem."
    ],
    "whatIsIt": "Massa corrida PVA Induscril 15Kg é um item do catálogo KY na categoria Massas. Preparação e acabamento de superfícies conforme a finalidade indicada na embalagem.",
    "selectionCriteria": "Confira o substrato, uso interno ou externo, preparo, consumo e intervalo entre demãos na ficha técnica.",
    "compatibility": "Use massa, fita e placa compatíveis com o sistema especificado. Não substitua massa de junta por massa corrida ou gesso comum.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Massa corrida PVA Induscril 15Kg?",
        "answer": "Confira o substrato, uso interno ou externo, preparo, consumo e intervalo entre demãos na ficha técnica. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "m5",
    "category": "Massas",
    "name": "Massa Base Plus 33",
    "description": "Massa base para revestimentos e acabamentos técnicos.",
    "image": "/massa_base_plus_33.webp",
    "rating": 0,
    "specs": [
      "Tipo: Base Plus",
      "Uso: Profissional"
    ],
    "applications": [
      "Preparação e acabamento de superfícies conforme a finalidade indicada na embalagem."
    ],
    "whatIsIt": "Massa Base Plus 33 é um item do catálogo KY na categoria Massas. Preparação e acabamento de superfícies conforme a finalidade indicada na embalagem.",
    "selectionCriteria": "Confira o substrato, uso interno ou externo, preparo, consumo e intervalo entre demãos na ficha técnica.",
    "compatibility": "Use massa, fita e placa compatíveis com o sistema especificado. Não substitua massa de junta por massa corrida ou gesso comum.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Massa Base Plus 33?",
        "answer": "Confira o substrato, uso interno ou externo, preparo, consumo e intervalo entre demãos na ficha técnica. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "m6",
    "category": "Massas",
    "name": "Massa Base Coat Profort",
    "description": "Massa base coat para sistemas de fechamento externo.",
    "image": "/massa_base_coat.webp",
    "rating": 0,
    "specs": [
      "Marca: Profort",
      "Uso: Fachadas LSF",
      "Cimento Polimérico"
    ],
    "applications": [
      "Preparação e acabamento de superfícies conforme a finalidade indicada na embalagem."
    ],
    "whatIsIt": "Massa Base Coat Profort é um item do catálogo KY na categoria Massas. Preparação e acabamento de superfícies conforme a finalidade indicada na embalagem.",
    "selectionCriteria": "Confira o substrato, uso interno ou externo, preparo, consumo e intervalo entre demãos na ficha técnica.",
    "compatibility": "Use massa, fita e placa compatíveis com o sistema especificado. Não substitua massa de junta por massa corrida ou gesso comum.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Massa Base Coat Profort?",
        "answer": "Confira o substrato, uso interno ou externo, preparo, consumo e intervalo entre demãos na ficha técnica. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "m7",
    "category": "Massas",
    "name": "Gesso Cola 20kg",
    "description": "Gesso cola para fixação de molduras e placas decorativas.",
    "image": "/gesso_cola_saco.jpg",
    "rating": 0,
    "specs": [
      "Embalagem: 20kg",
      "Tipo: Adesivo"
    ],
    "applications": [
      "Preparação e acabamento de superfícies conforme a finalidade indicada na embalagem."
    ],
    "whatIsIt": "Gesso Cola 20kg é um item do catálogo KY na categoria Massas. Preparação e acabamento de superfícies conforme a finalidade indicada na embalagem.",
    "selectionCriteria": "Confira o substrato, uso interno ou externo, preparo, consumo e intervalo entre demãos na ficha técnica.",
    "compatibility": "Use massa, fita e placa compatíveis com o sistema especificado. Não substitua massa de junta por massa corrida ou gesso comum.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Gesso Cola 20kg?",
        "answer": "Confira o substrato, uso interno ou externo, preparo, consumo e intervalo entre demãos na ficha técnica. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "m8",
    "category": "Massas",
    "name": "Gesso em pó Marília 40kg",
    "description": "Gesso em pó massa fina para acabamentos manuais.",
    "image": "/gesso_em_po_marilia.jpg",
    "rating": 0,
    "specs": [
      "Embalagem: 40kg",
      "Marca: Marília",
      "Tipo: Massa Fina"
    ],
    "applications": [
      "Preparação e acabamento de superfícies conforme a finalidade indicada na embalagem."
    ],
    "whatIsIt": "Gesso em pó Marília 40kg é um item do catálogo KY na categoria Massas. Preparação e acabamento de superfícies conforme a finalidade indicada na embalagem.",
    "selectionCriteria": "Confira o substrato, uso interno ou externo, preparo, consumo e intervalo entre demãos na ficha técnica.",
    "compatibility": "Use massa, fita e placa compatíveis com o sistema especificado. Não substitua massa de junta por massa corrida ou gesso comum.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Gesso em pó Marília 40kg?",
        "answer": "Confira o substrato, uso interno ou externo, preparo, consumo e intervalo entre demãos na ficha técnica. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "f1",
    "category": "Drywall",
    "name": "Fita para Cimentícia 102mm x 46m",
    "description": "Fita de malha de vidro para tratamento de juntas em áreas externas.",
    "image": "/fita_para_cimenticia_102mm_x_46m.png",
    "rating": 0,
    "specs": [
      "Largura: 102mm",
      "Material: Fibra de Vidro"
    ],
    "applications": [
      "Componente para sistemas de construção a seco, conforme sua finalidade."
    ],
    "whatIsIt": "Fita para Cimentícia 102mm x 46m é um item do catálogo KY na categoria Drywall. Componente para sistemas de construção a seco, conforme sua finalidade.",
    "selectionCriteria": "Confira se o produto atende ao substrato e à exposição previstos no projeto.",
    "compatibility": "A compatibilidade deve ser confirmada com os demais componentes e com o manual do sistema.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Fita para Cimentícia 102mm x 46m?",
        "answer": "Confira se o produto atende ao substrato e à exposição previstos no projeto. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "f2",
    "category": "Fitas",
    "name": "Fita Telada Azul Ancora",
    "description": "Fita telada em fibra de vidro para reforço de juntas e reparos rápidos.",
    "image": "/fita_telada_azul_-_ancora.jpg",
    "rating": 0,
    "specs": [
      "Material: Fibra de Vidro",
      "Cor: Azul Especial",
      "Autoadesiva"
    ],
    "applications": [
      "Tratamento de juntas, encontros ou interfaces, conforme o tipo de fita."
    ],
    "whatIsIt": "Fita Telada Azul Ancora é um item do catálogo KY na categoria Fitas. Tratamento de juntas, encontros ou interfaces, conforme o tipo de fita.",
    "selectionCriteria": "Compare material, largura e aplicação indicada. Fita de papel, tela e banda acústica têm funções diferentes.",
    "compatibility": "Confirme a combinação com a massa, placa ou perfil do projeto e siga a sequência de aplicação do fabricante.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Fita Telada Azul Ancora?",
        "answer": "Compare material, largura e aplicação indicada. Fita de papel, tela e banda acústica têm funções diferentes. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "f3",
    "category": "Fitas",
    "name": "Fita de Papel Gypsum microperfurada",
    "description": "Fita de papel kraft especial para tratamento de juntas internas normatizado.",
    "image": "/fita_papel.jpg",
    "rating": 0,
    "specs": [
      "Material: Papel Kraft",
      "Característica: Microperfurada",
      "Marca: Gypsum"
    ],
    "applications": [
      "Tratamento de juntas, encontros ou interfaces, conforme o tipo de fita."
    ],
    "whatIsIt": "Fita de Papel Gypsum microperfurada é um item do catálogo KY na categoria Fitas. Tratamento de juntas, encontros ou interfaces, conforme o tipo de fita.",
    "selectionCriteria": "Compare material, largura e aplicação indicada. Fita de papel, tela e banda acústica têm funções diferentes.",
    "compatibility": "Confirme a combinação com a massa, placa ou perfil do projeto e siga a sequência de aplicação do fabricante.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Fita de Papel Gypsum microperfurada?",
        "answer": "Compare material, largura e aplicação indicada. Fita de papel, tela e banda acústica têm funções diferentes. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "f4",
    "category": "Fitas",
    "name": "Fita Metálica para Canto Ancora",
    "description": "Fita para tratamento e acabamento de cantos.",
    "image": "/fita_metalica_para_canto,_ancora.webp",
    "rating": 0,
    "specs": [
      "Material: Papel + Aço",
      "Uso: Cantos Externos",
      "Marca: Ancora"
    ],
    "applications": [
      "Tratamento de juntas, encontros ou interfaces, conforme o tipo de fita."
    ],
    "whatIsIt": "Fita Metálica para Canto Ancora é um item do catálogo KY na categoria Fitas. Tratamento de juntas, encontros ou interfaces, conforme o tipo de fita.",
    "selectionCriteria": "Compare material, largura e aplicação indicada. Fita de papel, tela e banda acústica têm funções diferentes.",
    "compatibility": "Confirme a combinação com a massa, placa ou perfil do projeto e siga a sequência de aplicação do fabricante.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Fita Metálica para Canto Ancora?",
        "answer": "Compare material, largura e aplicação indicada. Fita de papel, tela e banda acústica têm funções diferentes. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "f5",
    "category": "Fitas",
    "name": "Fita Banda Acústica Placo 70mm",
    "description": "Fita de espuma para vedação acústica e estanqueidade de sistemas.",
    "image": "/fita_banda_acustica.webp",
    "rating": 0,
    "specs": [
      "Largura: 70mm",
      "Material: Espuma de Polietileno",
      "Marca: Placo"
    ],
    "applications": [
      "Tratamento de juntas, encontros ou interfaces, conforme o tipo de fita."
    ],
    "whatIsIt": "Fita Banda Acústica Placo 70mm é um item do catálogo KY na categoria Fitas. Tratamento de juntas, encontros ou interfaces, conforme o tipo de fita.",
    "selectionCriteria": "Compare material, largura e aplicação indicada. Fita de papel, tela e banda acústica têm funções diferentes.",
    "compatibility": "Confirme a combinação com a massa, placa ou perfil do projeto e siga a sequência de aplicação do fabricante.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Fita Banda Acústica Placo 70mm?",
        "answer": "Compare material, largura e aplicação indicada. Fita de papel, tela e banda acústica têm funções diferentes. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "pa1",
    "category": "Parafusos",
    "name": "Parafuso 3,5x35 (GN35) Drywall",
    "description": "Parafuso fosfatizado para fixação de chapas de gesso em perfis metálicos.",
    "image": "/parafuso_3,5x35_(gn35)_drywall.jpg",
    "rating": 0,
    "specs": [
      "Bitola: 3,5mm",
      "Comprimento: 35mm",
      "Tipo: GN35"
    ],
    "applications": [
      "Fixação de componentes em sistemas de construção a seco."
    ],
    "whatIsIt": "Parafuso 3,5x35 (GN35) Drywall é um item do catálogo KY na categoria Parafusos. Fixação de componentes em sistemas de construção a seco.",
    "selectionCriteria": "Verifique tipo de ponta, cabeça, comprimento, espessura do suporte e proteção contra corrosão.",
    "compatibility": "A fixação depende do material base e da composição do sistema. Não selecione um parafuso apenas pelo comprimento.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Parafuso 3,5x35 (GN35) Drywall?",
        "answer": "Verifique tipo de ponta, cabeça, comprimento, espessura do suporte e proteção contra corrosão. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "pa2",
    "category": "Parafusos",
    "name": "Parafuso Steel Frame Cabeça Chata Placa OSB",
    "description": "Parafuso especial com acabamento Dacromet para fixação de placas OSB em estruturas steel frame.",
    "image": "/parafuso_stell_frame_cabeca_chata_placa_osb.jpg",
    "rating": 0,
    "specs": [
      "Tipo: Cabeça Chata",
      "Acabamento: Dacromet",
      "Uso: Placa OSB"
    ],
    "applications": [
      "Fixação de componentes em sistemas de construção a seco."
    ],
    "whatIsIt": "Parafuso Steel Frame Cabeça Chata Placa OSB é um item do catálogo KY na categoria Parafusos. Fixação de componentes em sistemas de construção a seco.",
    "selectionCriteria": "Verifique tipo de ponta, cabeça, comprimento, espessura do suporte e proteção contra corrosão.",
    "compatibility": "A fixação depende do material base e da composição do sistema. Não selecione um parafuso apenas pelo comprimento.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Parafuso Steel Frame Cabeça Chata Placa OSB?",
        "answer": "Verifique tipo de ponta, cabeça, comprimento, espessura do suporte e proteção contra corrosão. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "pa3",
    "category": "Parafusos",
    "name": "Parafuso L.B 13x42mm",
    "description": "Parafuso para fixação de perfis metálicos.",
    "image": "/parafuso_l.b.jpg",
    "rating": 0,
    "specs": [
      "Bitola: 13mm",
      "Comprimento: 42mm",
      "Tipo: L.B"
    ],
    "applications": [
      "Fixação de componentes em sistemas de construção a seco."
    ],
    "whatIsIt": "Parafuso L.B 13x42mm é um item do catálogo KY na categoria Parafusos. Fixação de componentes em sistemas de construção a seco.",
    "selectionCriteria": "Verifique tipo de ponta, cabeça, comprimento, espessura do suporte e proteção contra corrosão.",
    "compatibility": "A fixação depende do material base e da composição do sistema. Não selecione um parafuso apenas pelo comprimento.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Parafuso L.B 13x42mm?",
        "answer": "Verifique tipo de ponta, cabeça, comprimento, espessura do suporte e proteção contra corrosão. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "pa4",
    "category": "Parafusos",
    "name": "Parafuso GN 3,5x25 Ponta Agulha Patta",
    "description": "Parafuso de fixação rápida com ponta agulha.",
    "image": "/parafuso_gn3,5x25_ponta_agulha.jpg",
    "rating": 0,
    "specs": [
      "Bitola: 3,5mm",
      "Comprimento: 25mm",
      "Marca: Patta"
    ],
    "applications": [
      "Fixação de componentes em sistemas de construção a seco."
    ],
    "whatIsIt": "Parafuso GN 3,5x25 Ponta Agulha Patta é um item do catálogo KY na categoria Parafusos. Fixação de componentes em sistemas de construção a seco.",
    "selectionCriteria": "Verifique tipo de ponta, cabeça, comprimento, espessura do suporte e proteção contra corrosão.",
    "compatibility": "A fixação depende do material base e da composição do sistema. Não selecione um parafuso apenas pelo comprimento.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Parafuso GN 3,5x25 Ponta Agulha Patta?",
        "answer": "Verifique tipo de ponta, cabeça, comprimento, espessura do suporte e proteção contra corrosão. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "pa5",
    "category": "Parafusos",
    "name": "Parafuso L.A",
    "description": "Parafuso para estruturas metálicas leves.",
    "image": "/parafuso-la.jpg",
    "rating": 0,
    "specs": [
      "Tipo: L.A",
      "Uso: Estruturas Leves"
    ],
    "applications": [
      "Fixação de componentes em sistemas de construção a seco."
    ],
    "whatIsIt": "Parafuso L.A é um item do catálogo KY na categoria Parafusos. Fixação de componentes em sistemas de construção a seco.",
    "selectionCriteria": "Verifique tipo de ponta, cabeça, comprimento, espessura do suporte e proteção contra corrosão.",
    "compatibility": "A fixação depende do material base e da composição do sistema. Não selecione um parafuso apenas pelo comprimento.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Parafuso L.A?",
        "answer": "Verifique tipo de ponta, cabeça, comprimento, espessura do suporte e proteção contra corrosão. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "pl1",
    "category": "Placas",
    "name": "Chapa RF Rosa",
    "description": "Chapa resistente ao fogo (RF) na cor rosa.",
    "image": "/chapa_rf_rosa.jpg",
    "rating": 0,
    "specs": [
      "Dimensão: 1,20 x 1,80m",
      "Cor: Rosa"
    ],
    "applications": [
      "Fechamento ou revestimento conforme o tipo de chapa ou painel."
    ],
    "whatIsIt": "Chapa RF Rosa é um item do catálogo KY na categoria Placas. Fechamento ou revestimento conforme o tipo de chapa ou painel.",
    "selectionCriteria": "Avalie exposição à umidade, cargas, espessura, borda e requisitos térmicos e acústicos do projeto.",
    "compatibility": "A resistência ao fogo deve ser verificada para o sistema completo ensaiado, incluindo chapas, estrutura, juntas e passagens. A cor da chapa não define um tempo de resistência.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Chapa RF Rosa?",
        "answer": "Avalie exposição à umidade, cargas, espessura, borda e requisitos térmicos e acústicos do projeto. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "pl2",
    "category": "Placas",
    "name": "Chapa RU Verde",
    "description": "Chapa resistente à umidade (RU) na cor verde.",
    "image": "/chapa_ru_verde.jpg",
    "rating": 0,
    "specs": [
      "Dimensão: 1,20 x 1,80m",
      "Cor: Verde"
    ],
    "applications": [
      "Fechamento ou revestimento conforme o tipo de chapa ou painel."
    ],
    "whatIsIt": "Chapa RU Verde é um item do catálogo KY na categoria Placas. Fechamento ou revestimento conforme o tipo de chapa ou painel.",
    "selectionCriteria": "Avalie exposição à umidade, cargas, espessura, borda e requisitos térmicos e acústicos do projeto.",
    "compatibility": "A chapa RU é resistente à umidade, não impermeável. Áreas molhadas exigem impermeabilização e revestimentos compatíveis; não presuma uso externo ou contato contínuo com água.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Chapa RU Verde?",
        "answer": "Avalie exposição à umidade, cargas, espessura, borda e requisitos térmicos e acústicos do projeto. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "pl3",
    "category": "Placas",
    "name": "Chapa Drywall ST Branca",
    "description": "Chapa standard para uso geral em forros e paredes divisórias.",
    "image": "/chapa_drywall_st_branca.jpg",
    "rating": 0,
    "specs": [
      "Dimensão: 1,20 x 1,80m",
      "Espessura: 12.5mm",
      "Tipo: ST Branca"
    ],
    "applications": [
      "Fechamento ou revestimento conforme o tipo de chapa ou painel."
    ],
    "whatIsIt": "Chapa Drywall ST Branca é um item do catálogo KY na categoria Placas. Fechamento ou revestimento conforme o tipo de chapa ou painel.",
    "selectionCriteria": "Avalie exposição à umidade, cargas, espessura, borda e requisitos térmicos e acústicos do projeto.",
    "compatibility": "Chapas ST são destinadas a aplicações internas secas. Confira espessura, estrutura, paginação e tratamento de juntas do sistema especificado.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Chapa Drywall ST Branca?",
        "answer": "Avalie exposição à umidade, cargas, espessura, borda e requisitos térmicos e acústicos do projeto. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "pl4",
    "category": "Placas",
    "name": "Chapa Drywall ST Branca Fortissima",
    "description": "Chapa da marca Fortissima.",
    "image": "/chapa_drywall_st_branca_fortissima.webp",
    "rating": 0,
    "specs": [
      "Dimensão: 1,20 x 1,80m",
      "Espessura: 12.5mm",
      "Marca: Fortissima"
    ],
    "applications": [
      "Fechamento ou revestimento conforme o tipo de chapa ou painel."
    ],
    "whatIsIt": "Chapa Drywall ST Branca Fortissima é um item do catálogo KY na categoria Placas. Fechamento ou revestimento conforme o tipo de chapa ou painel.",
    "selectionCriteria": "Avalie exposição à umidade, cargas, espessura, borda e requisitos térmicos e acústicos do projeto.",
    "compatibility": "Chapas ST são destinadas a aplicações internas secas. Confira espessura, estrutura, paginação e tratamento de juntas do sistema especificado.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Chapa Drywall ST Branca Fortissima?",
        "answer": "Avalie exposição à umidade, cargas, espessura, borda e requisitos térmicos e acústicos do projeto. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "pl5",
    "category": "Placas",
    "name": "Chapa Glasroc X",
    "description": "Placa de gesso técnica para fachadas e áreas externas.",
    "image": "/chapa_glasroc.jpg",
    "rating": 0,
    "specs": [
      "Tipo: Gesso com Véu de Vidro",
      "Marca: Placo"
    ],
    "applications": [
      "Fechamento ou revestimento conforme o tipo de chapa ou painel."
    ],
    "whatIsIt": "Chapa Glasroc X é um item do catálogo KY na categoria Placas. Fechamento ou revestimento conforme o tipo de chapa ou painel.",
    "selectionCriteria": "Avalie exposição à umidade, cargas, espessura, borda e requisitos térmicos e acústicos do projeto.",
    "compatibility": "Perfis, fixadores, juntas e revestimentos precisam compor um sistema compatível. Consulte o manual do fabricante.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Chapa Glasroc X?",
        "answer": "Avalie exposição à umidade, cargas, espessura, borda e requisitos térmicos e acústicos do projeto. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "pl6",
    "category": "Placas",
    "name": "Placa Cimentícia Eternit 6/8/10mm",
    "description": "Placa cimentícia Eternit para uso interno e externo.",
    "image": "/placa_cimenticia_eternit_6-8-10mm.jpg",
    "rating": 0,
    "specs": [
      "Marca: Eternit",
      "Espessuras: 6, 8 ou 10mm",
      "Uso Interno/Externo"
    ],
    "applications": [
      "Fechamento ou revestimento conforme o tipo de chapa ou painel."
    ],
    "whatIsIt": "Placa Cimentícia Eternit 6/8/10mm é um item do catálogo KY na categoria Placas. Fechamento ou revestimento conforme o tipo de chapa ou painel.",
    "selectionCriteria": "Avalie exposição à umidade, cargas, espessura, borda e requisitos térmicos e acústicos do projeto.",
    "compatibility": "Perfis, fixadores, juntas e revestimentos precisam compor um sistema compatível. Consulte o manual do fabricante.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Placa Cimentícia Eternit 6/8/10mm?",
        "answer": "Avalie exposição à umidade, cargas, espessura, borda e requisitos térmicos e acústicos do projeto. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "pl7",
    "category": "Placas",
    "name": "Painel LP OSB Home Plus",
    "description": "Painel estrutural OSB.",
    "image": "/painel_lp_osb_home_plus.jpg",
    "rating": 0,
    "specs": [
      "Marca: LP",
      "Tipo: OSB",
      "Uso Estrutural"
    ],
    "applications": [
      "Fechamento ou revestimento conforme o tipo de chapa ou painel."
    ],
    "whatIsIt": "Painel LP OSB Home Plus é um item do catálogo KY na categoria Placas. Fechamento ou revestimento conforme o tipo de chapa ou painel.",
    "selectionCriteria": "Avalie exposição à umidade, cargas, espessura, borda e requisitos térmicos e acústicos do projeto.",
    "compatibility": "Perfis, fixadores, juntas e revestimentos precisam compor um sistema compatível. Consulte o manual do fabricante.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Painel LP OSB Home Plus?",
        "answer": "Avalie exposição à umidade, cargas, espessura, borda e requisitos térmicos e acústicos do projeto. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "pe1",
    "category": "Perfis",
    "name": "Perfil Drywall Guia 48 Barbieri",
    "description": "Perfil guia horizontal de 48mm para drywall.",
    "image": "/perfil_drywall_guia_48_barbieri.webp",
    "rating": 0,
    "specs": [
      "Largura: 48mm",
      "Comprimento: 3000mm"
    ],
    "applications": [
      "Composição de estruturas ou apoios conforme o perfil especificado."
    ],
    "whatIsIt": "Perfil Drywall Guia 48 Barbieri é um item do catálogo KY na categoria Perfis. Composição de estruturas ou apoios conforme o perfil especificado.",
    "selectionCriteria": "Confira seção, espessura, revestimento, comprimento e função no projeto. A largura sozinha não define a capacidade de carga.",
    "compatibility": "Perfis de drywall não substituem perfis estruturais de Steel Frame. O dimensionamento deve ser definido pelo responsável técnico.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Perfil Drywall Guia 48 Barbieri?",
        "answer": "Confira seção, espessura, revestimento, comprimento e função no projeto. A largura sozinha não define a capacidade de carga. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "pe2",
    "category": "Perfis",
    "name": "Perfil Montante 70 Barbieri",
    "description": "Perfil montante de 70mm para estrutura de drywall.",
    "image": "/perfil-montante-70-barbieri.jpg",
    "rating": 0,
    "specs": [
      "Largura: 70mm",
      "Comprimento: 3000mm"
    ],
    "applications": [
      "Composição de estruturas ou apoios conforme o perfil especificado."
    ],
    "whatIsIt": "Perfil Montante 70 Barbieri é um item do catálogo KY na categoria Perfis. Composição de estruturas ou apoios conforme o perfil especificado.",
    "selectionCriteria": "Confira seção, espessura, revestimento, comprimento e função no projeto. A largura sozinha não define a capacidade de carga.",
    "compatibility": "Perfis de drywall não substituem perfis estruturais de Steel Frame. O dimensionamento deve ser definido pelo responsável técnico.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Perfil Montante 70 Barbieri?",
        "answer": "Confira seção, espessura, revestimento, comprimento e função no projeto. A largura sozinha não define a capacidade de carga. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "pe3",
    "category": "Perfis",
    "name": "Perfil Guia de 70 Barbieri",
    "description": "Perfil guia de 70mm para estruturas robustas.",
    "image": "/perfil_guia_de_70_barbieri.jpg",
    "rating": 0,
    "specs": [
      "Largura: 70mm",
      "Comprimento: 3000mm",
      "Marca: Barbieri"
    ],
    "applications": [
      "Composição de estruturas ou apoios conforme o perfil especificado."
    ],
    "whatIsIt": "Perfil Guia de 70 Barbieri é um item do catálogo KY na categoria Perfis. Composição de estruturas ou apoios conforme o perfil especificado.",
    "selectionCriteria": "Confira seção, espessura, revestimento, comprimento e função no projeto. A largura sozinha não define a capacidade de carga.",
    "compatibility": "Perfis de drywall não substituem perfis estruturais de Steel Frame. O dimensionamento deve ser definido pelo responsável técnico.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Perfil Guia de 70 Barbieri?",
        "answer": "Confira seção, espessura, revestimento, comprimento e função no projeto. A largura sozinha não define a capacidade de carga. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "pe4",
    "category": "Perfis",
    "name": "Perfil Guia de 90",
    "description": "Perfil guia de 90mm para estruturas de grande porte e paredes com alto isolamento.",
    "image": "/perfil_guia_de_90.jpg",
    "rating": 0,
    "specs": [
      "Largura: 90mm",
      "Comprimento: 3000mm",
      "Uso: Sistemas de Alto Desempenho"
    ],
    "applications": [
      "Composição de estruturas ou apoios conforme o perfil especificado."
    ],
    "whatIsIt": "Perfil Guia de 90 é um item do catálogo KY na categoria Perfis. Composição de estruturas ou apoios conforme o perfil especificado.",
    "selectionCriteria": "Confira seção, espessura, revestimento, comprimento e função no projeto. A largura sozinha não define a capacidade de carga.",
    "compatibility": "Perfis de drywall não substituem perfis estruturais de Steel Frame. O dimensionamento deve ser definido pelo responsável técnico.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Perfil Guia de 90?",
        "answer": "Confira seção, espessura, revestimento, comprimento e função no projeto. A largura sozinha não define a capacidade de carga. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "pe5",
    "category": "Perfis",
    "name": "Montante de 48 Barbieri",
    "description": "Perfil montante de 48mm para divisórias leves e forros estruturados.",
    "image": "/montante_de_48_barbieri.jpg",
    "rating": 0,
    "specs": [
      "Largura: 48mm",
      "Comprimento: 3000mm",
      "Marca: Barbieri"
    ],
    "applications": [
      "Composição de estruturas ou apoios conforme o perfil especificado."
    ],
    "whatIsIt": "Montante de 48 Barbieri é um item do catálogo KY na categoria Perfis. Composição de estruturas ou apoios conforme o perfil especificado.",
    "selectionCriteria": "Confira seção, espessura, revestimento, comprimento e função no projeto. A largura sozinha não define a capacidade de carga.",
    "compatibility": "Perfis de drywall não substituem perfis estruturais de Steel Frame. O dimensionamento deve ser definido pelo responsável técnico.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Montante de 48 Barbieri?",
        "answer": "Confira seção, espessura, revestimento, comprimento e função no projeto. A largura sozinha não define a capacidade de carga. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "pe6",
    "category": "Perfis",
    "name": "Montante de 90",
    "description": "Montante de 90mm para paredes robustas.",
    "image": "/montante_de_90.png",
    "rating": 0,
    "specs": [
      "Largura: 90mm",
      "Comprimento: 3000mm",
      "Alta Rigidez"
    ],
    "applications": [
      "Composição de estruturas ou apoios conforme o perfil especificado."
    ],
    "whatIsIt": "Montante de 90 é um item do catálogo KY na categoria Perfis. Composição de estruturas ou apoios conforme o perfil especificado.",
    "selectionCriteria": "Confira seção, espessura, revestimento, comprimento e função no projeto. A largura sozinha não define a capacidade de carga.",
    "compatibility": "Perfis de drywall não substituem perfis estruturais de Steel Frame. O dimensionamento deve ser definido pelo responsável técnico.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Montante de 90?",
        "answer": "Confira seção, espessura, revestimento, comprimento e função no projeto. A largura sozinha não define a capacidade de carga. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "pe7",
    "category": "Perfis",
    "name": "Montante Steel Frame 90",
    "description": "Perfil estrutural para steel frame de 90mm.",
    "image": "/montante_de_steel_frame_90.webp",
    "rating": 0,
    "specs": [
      "Largura: 90mm",
      "Espessura: 0.80mm a 1.25mm"
    ],
    "applications": [
      "Composição de estruturas ou apoios conforme o perfil especificado."
    ],
    "whatIsIt": "Montante Steel Frame 90 é um item do catálogo KY na categoria Perfis. Composição de estruturas ou apoios conforme o perfil especificado.",
    "selectionCriteria": "Confira seção, espessura, revestimento, comprimento e função no projeto. A largura sozinha não define a capacidade de carga.",
    "compatibility": "Perfis de drywall não substituem perfis estruturais de Steel Frame. O dimensionamento deve ser definido pelo responsável técnico.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Montante Steel Frame 90?",
        "answer": "Confira seção, espessura, revestimento, comprimento e função no projeto. A largura sozinha não define a capacidade de carga. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "pe8",
    "category": "Perfis",
    "name": "Montante Steel Frame 140",
    "description": "Perfil estrutural para steel frame de 140mm.",
    "image": "/montante_de_steel_frame_140.jpg",
    "rating": 0,
    "specs": [
      "Largura: 140mm",
      "Espessura: 0.95mm a 1.55mm"
    ],
    "applications": [
      "Composição de estruturas ou apoios conforme o perfil especificado."
    ],
    "whatIsIt": "Montante Steel Frame 140 é um item do catálogo KY na categoria Perfis. Composição de estruturas ou apoios conforme o perfil especificado.",
    "selectionCriteria": "Confira seção, espessura, revestimento, comprimento e função no projeto. A largura sozinha não define a capacidade de carga.",
    "compatibility": "Perfis de drywall não substituem perfis estruturais de Steel Frame. O dimensionamento deve ser definido pelo responsável técnico.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Montante Steel Frame 140?",
        "answer": "Confira seção, espessura, revestimento, comprimento e função no projeto. A largura sozinha não define a capacidade de carga. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "la1",
    "category": "Lã (Isolamento)",
    "name": "Lã de Pet",
    "description": "Isolamento termo-acústico ecológico feito de material reciclado.",
    "image": "/la_de_pet.webp",
    "rating": 0,
    "specs": [
      "Material: Pet Reciclado",
      "Espessura: 50mm",
      "Hipoalergênica"
    ],
    "applications": [
      "Preenchimento isolante em sistemas de paredes, forros ou coberturas compatíveis."
    ],
    "whatIsIt": "Lã de Pet é um item do catálogo KY na categoria Lã (Isolamento). Preenchimento isolante em sistemas de paredes, forros ou coberturas compatíveis.",
    "selectionCriteria": "Compare espessura, formato, densidade e dados de desempenho do produto e do sistema completo.",
    "compatibility": "O resultado térmico e acústico depende também das placas, estrutura, juntas, aberturas e execução. Não há um desempenho único para a lã isoladamente.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Lã de Pet?",
        "answer": "Compare espessura, formato, densidade e dados de desempenho do produto e do sistema completo. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "la2",
    "category": "Lã (Isolamento)",
    "name": "Lã de Rocha",
    "description": "Manta de lã de rocha para isolamento conforme o sistema especificado.",
    "image": "/la_de_rocha.webp",
    "rating": 0,
    "specs": [
      "Material: Rocha Basáltica",
      "Densidade: 64kg/m³"
    ],
    "applications": [
      "Preenchimento isolante em sistemas de paredes, forros ou coberturas compatíveis."
    ],
    "whatIsIt": "Lã de Rocha é um item do catálogo KY na categoria Lã (Isolamento). Preenchimento isolante em sistemas de paredes, forros ou coberturas compatíveis.",
    "selectionCriteria": "Compare espessura, formato, densidade e dados de desempenho do produto e do sistema completo.",
    "compatibility": "O resultado térmico e acústico depende também das placas, estrutura, juntas, aberturas e execução. Não há um desempenho único para a lã isoladamente.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Lã de Rocha?",
        "answer": "Compare espessura, formato, densidade e dados de desempenho do produto e do sistema completo. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "la3",
    "category": "Lã (Isolamento)",
    "name": "Lã de Vidro Isover",
    "description": "Lã de vidro Isover.",
    "image": "/la_de_vidro_isover.webp",
    "rating": 0,
    "specs": [
      "Marca: Isover",
      "Material: Vidro Reciclado",
      "Alta Compressibilidade"
    ],
    "applications": [
      "Preenchimento isolante em sistemas de paredes, forros ou coberturas compatíveis."
    ],
    "whatIsIt": "Lã de Vidro Isover é um item do catálogo KY na categoria Lã (Isolamento). Preenchimento isolante em sistemas de paredes, forros ou coberturas compatíveis.",
    "selectionCriteria": "Compare espessura, formato, densidade e dados de desempenho do produto e do sistema completo.",
    "compatibility": "O resultado térmico e acústico depende também das placas, estrutura, juntas, aberturas e execução. Não há um desempenho único para a lã isoladamente.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Lã de Vidro Isover?",
        "answer": "Compare espessura, formato, densidade e dados de desempenho do produto e do sistema completo. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "d1",
    "category": "Ferragens",
    "name": "Adaptador Angular Para Parafusadeira",
    "description": "Adaptador angular para facilitar a aplicação de parafusos em locais de difícil acesso.",
    "image": "/adaptador_angular_para_parafusadeira.webp",
    "rating": 0,
    "specs": [
      "Tipo: Angular",
      "Uso: Parafusadeira",
      "Ângulo: 90°"
    ],
    "applications": [
      "Acessório de montagem, acabamento ou ferramenta conforme o modelo."
    ],
    "whatIsIt": "Adaptador Angular Para Parafusadeira é um item do catálogo KY na categoria Ferragens. Acessório de montagem, acabamento ou ferramenta conforme o modelo.",
    "selectionCriteria": "Confirme medidas, material, encaixe e finalidade antes da compra.",
    "compatibility": "Verifique a compatibilidade com o suporte ou equipamento e respeite as instruções de uso e segurança do fabricante.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Adaptador Angular Para Parafusadeira?",
        "answer": "Confirme medidas, material, encaixe e finalidade antes da compra. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "d2",
    "category": "Ferragens",
    "name": "Adaptador de Tomada 2P+T",
    "description": "Adaptador de tomada reforçado para ferramentas elétricas de canteiro.",
    "image": "/adaptador_de_tomada.webp",
    "rating": 0,
    "specs": [
      "Tipo: 2P+T",
      "Corrente: 10A/20A",
      "Padrão: Brasileiro"
    ],
    "applications": [
      "Acessório de montagem, acabamento ou ferramenta conforme o modelo."
    ],
    "whatIsIt": "Adaptador de Tomada 2P+T é um item do catálogo KY na categoria Ferragens. Acessório de montagem, acabamento ou ferramenta conforme o modelo.",
    "selectionCriteria": "Confirme medidas, material, encaixe e finalidade antes da compra.",
    "compatibility": "Confira tensão, corrente nominal, padrão dos plugues e aterramento. Não use o adaptador para eliminar o aterramento ou exceder a capacidade da tomada; procure um eletricista em caso de dúvida.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Adaptador de Tomada 2P+T?",
        "answer": "Confirme medidas, material, encaixe e finalidade antes da compra. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "d3",
    "category": "Placas",
    "name": "Compensado Fenólico Naval",
    "description": "Compensado fenólico para fôrmas e estruturas auxiliares.",
    "image": "/compensado_fenolico.png",
    "rating": 0,
    "specs": [
      "Tipo: Fenólico (WBP)",
      "Uso: Estrutural"
    ],
    "applications": [
      "Fechamento ou revestimento conforme o tipo de chapa ou painel."
    ],
    "whatIsIt": "Compensado Fenólico Naval é um item do catálogo KY na categoria Placas. Fechamento ou revestimento conforme o tipo de chapa ou painel.",
    "selectionCriteria": "Avalie exposição à umidade, cargas, espessura, borda e requisitos térmicos e acústicos do projeto.",
    "compatibility": "Perfis, fixadores, juntas e revestimentos precisam compor um sistema compatível. Consulte o manual do fabricante.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Compensado Fenólico Naval?",
        "answer": "Avalie exposição à umidade, cargas, espessura, borda e requisitos térmicos e acústicos do projeto. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "d4",
    "category": "Diversos",
    "name": "Adesivo de Silicone Tytan Professional",
    "description": "Adesivo de silicone para vedação técnica e acabamentos de juntas.",
    "image": "/adesivo_de_silicone_tytan_standard.webp",
    "rating": 0,
    "specs": [
      "Marca: Tytan",
      "Tipo: Acético",
      "Cor: Branco/Incolor"
    ],
    "applications": [
      "Material ou acessório complementar conforme a aplicação indicada para o modelo."
    ],
    "whatIsIt": "Adesivo de Silicone Tytan Professional é um item do catálogo KY na categoria Diversos. Material ou acessório complementar conforme a aplicação indicada para o modelo.",
    "selectionCriteria": "Informe o uso pretendido e confira dimensões, condições de exposição e instruções do fabricante.",
    "compatibility": "A compatibilidade varia conforme o modelo e a aplicação. Confirme a especificação antes da instalação.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Adesivo de Silicone Tytan Professional?",
        "answer": "Informe o uso pretendido e confira dimensões, condições de exposição e instruções do fabricante. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "fe1",
    "category": "Diversos",
    "name": "Arame Galvanizado BWG20",
    "description": "Arame galvanizado flexível para amarrações em estruturas de drywall.",
    "image": "/arame_galvanizado_bwg20.webp",
    "rating": 0,
    "specs": [
      "Bitola: BWG20 (0,89mm)",
      "Material: Aço Zincado",
      "Flexibilidade: Alta"
    ],
    "applications": [
      "Material ou acessório complementar conforme a aplicação indicada para o modelo."
    ],
    "whatIsIt": "Arame Galvanizado BWG20 é um item do catálogo KY na categoria Diversos. Material ou acessório complementar conforme a aplicação indicada para o modelo.",
    "selectionCriteria": "Informe o uso pretendido e confira dimensões, condições de exposição e instruções do fabricante.",
    "compatibility": "A compatibilidade varia conforme o modelo e a aplicação. Confirme a especificação antes da instalação.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Arame Galvanizado BWG20?",
        "answer": "Informe o uso pretendido e confira dimensões, condições de exposição e instruções do fabricante. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "fe2",
    "category": "Diversos",
    "name": "Arame Galvanizado BWG10",
    "description": "Arame galvanizado robusto para suspensões e cargas maiores.",
    "image": "/arame_galvanizado_bwg10.webp",
    "rating": 0,
    "specs": [
      "Bitola: BWG10 (3,40mm)",
      "Embalagem: Rolo 5kg"
    ],
    "applications": [
      "Material ou acessório complementar conforme a aplicação indicada para o modelo."
    ],
    "whatIsIt": "Arame Galvanizado BWG10 é um item do catálogo KY na categoria Diversos. Material ou acessório complementar conforme a aplicação indicada para o modelo.",
    "selectionCriteria": "Informe o uso pretendido e confira dimensões, condições de exposição e instruções do fabricante.",
    "compatibility": "A compatibilidade varia conforme o modelo e a aplicação. Confirme a especificação antes da instalação.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Arame Galvanizado BWG10?",
        "answer": "Informe o uso pretendido e confira dimensões, condições de exposição e instruções do fabricante. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "fe3",
    "category": "Parafusos",
    "name": "Bucha de Nylon S6/S8",
    "description": "Bucha de expansão para fixação em alvenaria e concreto.",
    "image": "/bucha_nylon.webp",
    "rating": 0,
    "specs": [
      "Material: Nylon Virgem",
      "Quantidade: 100/200 unidades",
      "Uso: Parede Maciça"
    ],
    "applications": [
      "Fixação de componentes em sistemas de construção a seco."
    ],
    "whatIsIt": "Bucha de Nylon S6/S8 é um item do catálogo KY na categoria Parafusos. Fixação de componentes em sistemas de construção a seco.",
    "selectionCriteria": "Verifique tipo de ponta, cabeça, comprimento, espessura do suporte e proteção contra corrosão.",
    "compatibility": "A fixação depende do material base e da composição do sistema. Não selecione um parafuso apenas pelo comprimento.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Bucha de Nylon S6/S8?",
        "answer": "Verifique tipo de ponta, cabeça, comprimento, espessura do suporte e proteção contra corrosão. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "fe4",
    "category": "Perfis",
    "name": "Cantoneira L 25x30",
    "description": "Cantoneira metálica lisa para proteção de cantos internos e arremates.",
    "image": "/cantoneira.jpg",
    "rating": 0,
    "specs": [
      "Material: Aço Galvanizado",
      "Uso: Arremates",
      "Comprimento: 3000mm"
    ],
    "applications": [
      "Composição de estruturas ou apoios conforme o perfil especificado."
    ],
    "whatIsIt": "Cantoneira L 25x30 é um item do catálogo KY na categoria Perfis. Composição de estruturas ou apoios conforme o perfil especificado.",
    "selectionCriteria": "Confira seção, espessura, revestimento, comprimento e função no projeto. A largura sozinha não define a capacidade de carga.",
    "compatibility": "Perfis de drywall não substituem perfis estruturais de Steel Frame. O dimensionamento deve ser definido pelo responsável técnico.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Cantoneira L 25x30?",
        "answer": "Confira seção, espessura, revestimento, comprimento e função no projeto. A largura sozinha não define a capacidade de carga. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "fe5",
    "category": "Perfis",
    "name": "Cantoneira Perfurada de Alumínio/Aço",
    "description": "Reforço de canto com perfurações para ancoragem química da massa.",
    "image": "/cantoneira_perfurada.webp",
    "rating": 0,
    "specs": [
      "Tipo: Perfurada",
      "Uso: Proteção de Quinas",
      "Acabamento: Invisível"
    ],
    "applications": [
      "Composição de estruturas ou apoios conforme o perfil especificado."
    ],
    "whatIsIt": "Cantoneira Perfurada de Alumínio/Aço é um item do catálogo KY na categoria Perfis. Composição de estruturas ou apoios conforme o perfil especificado.",
    "selectionCriteria": "Confira seção, espessura, revestimento, comprimento e função no projeto. A largura sozinha não define a capacidade de carga.",
    "compatibility": "Perfis de drywall não substituem perfis estruturais de Steel Frame. O dimensionamento deve ser definido pelo responsável técnico.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Cantoneira Perfurada de Alumínio/Aço?",
        "answer": "Confira seção, espessura, revestimento, comprimento e função no projeto. A largura sozinha não define a capacidade de carga. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "fe6",
    "category": "Perfis",
    "name": "Cantoneira PVC com Tela de Fibra",
    "description": "Cantoneira técnica para sistemas de fachada e reboco fino.",
    "image": "/cantoneira_pvc_com_tela.webp",
    "rating": 0,
    "specs": [
      "Material: PVC + Fibra de Vidro",
      "Uso: Externo/EIFS"
    ],
    "applications": [
      "Composição de estruturas ou apoios conforme o perfil especificado."
    ],
    "whatIsIt": "Cantoneira PVC com Tela de Fibra é um item do catálogo KY na categoria Perfis. Composição de estruturas ou apoios conforme o perfil especificado.",
    "selectionCriteria": "Confira seção, espessura, revestimento, comprimento e função no projeto. A largura sozinha não define a capacidade de carga.",
    "compatibility": "Perfis de drywall não substituem perfis estruturais de Steel Frame. O dimensionamento deve ser definido pelo responsável técnico.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Cantoneira PVC com Tela de Fibra?",
        "answer": "Confira seção, espessura, revestimento, comprimento e função no projeto. A largura sozinha não define a capacidade de carga. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "fe7",
    "category": "Perfis",
    "name": "Cantoneira Branca para Forro Modular",
    "description": "Cantoneira com pintura eletrostática para acabamento de forros aparentes.",
    "image": "/cantoneira_branca.jpeg",
    "rating": 0,
    "specs": [
      "Cor: Branco Neve",
      "Acabamento: Pintura Epóxi",
      "Uso: Perimetral"
    ],
    "applications": [
      "Composição de estruturas ou apoios conforme o perfil especificado."
    ],
    "whatIsIt": "Cantoneira Branca para Forro Modular é um item do catálogo KY na categoria Perfis. Composição de estruturas ou apoios conforme o perfil especificado.",
    "selectionCriteria": "Confira seção, espessura, revestimento, comprimento e função no projeto. A largura sozinha não define a capacidade de carga.",
    "compatibility": "Perfis de drywall não substituem perfis estruturais de Steel Frame. O dimensionamento deve ser definido pelo responsável técnico.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Cantoneira Branca para Forro Modular?",
        "answer": "Confira seção, espessura, revestimento, comprimento e função no projeto. A largura sozinha não define a capacidade de carga. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "fe8",
    "category": "Perfis",
    "name": "Tabica Lisa Zincada",
    "description": "Perfil para forro dilatado (\"flutuante\") com efeito estético moderno.",
    "image": "/tabica_lisa_galvanizada.webp",
    "rating": 0,
    "specs": [
      "Material: Aço Zincado",
      "Tipo: Lisa",
      "Funcionalidade: Dilatação"
    ],
    "applications": [
      "Composição de estruturas ou apoios conforme o perfil especificado."
    ],
    "whatIsIt": "Tabica Lisa Zincada é um item do catálogo KY na categoria Perfis. Composição de estruturas ou apoios conforme o perfil especificado.",
    "selectionCriteria": "Confira seção, espessura, revestimento, comprimento e função no projeto. A largura sozinha não define a capacidade de carga.",
    "compatibility": "Perfis de drywall não substituem perfis estruturais de Steel Frame. O dimensionamento deve ser definido pelo responsável técnico.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Tabica Lisa Zincada?",
        "answer": "Confira seção, espessura, revestimento, comprimento e função no projeto. A largura sozinha não define a capacidade de carga. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "fe9",
    "category": "Perfis",
    "name": "Tabica Branca Pronta",
    "description": "Tabica com pintura branca de fábrica para agilidade total na obra.",
    "image": "/tabica_branca.jpg",
    "rating": 0,
    "specs": [
      "Cor: Branco",
      "Acabamento: Pré-pintado",
      "Uso: Decorativo"
    ],
    "applications": [
      "Composição de estruturas ou apoios conforme o perfil especificado."
    ],
    "whatIsIt": "Tabica Branca Pronta é um item do catálogo KY na categoria Perfis. Composição de estruturas ou apoios conforme o perfil especificado.",
    "selectionCriteria": "Confira seção, espessura, revestimento, comprimento e função no projeto. A largura sozinha não define a capacidade de carga.",
    "compatibility": "Perfis de drywall não substituem perfis estruturais de Steel Frame. O dimensionamento deve ser definido pelo responsável técnico.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Tabica Branca Pronta?",
        "answer": "Confira seção, espessura, revestimento, comprimento e função no projeto. A largura sozinha não define a capacidade de carga. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "fe10",
    "category": "Ferragens",
    "name": "Emenda para Perfil F530",
    "description": "Acessório de união para continuidade estrutural de perfis canaleta.",
    "image": "/emenda_para_f530.jpg",
    "rating": 0,
    "specs": [
      "Material: Aço Galvanizado",
      "Uso: Perfil F530",
      "Instalação: Encaixe"
    ],
    "applications": [
      "Acessório de montagem, acabamento ou ferramenta conforme o modelo."
    ],
    "whatIsIt": "Emenda para Perfil F530 é um item do catálogo KY na categoria Ferragens. Acessório de montagem, acabamento ou ferramenta conforme o modelo.",
    "selectionCriteria": "Confirme medidas, material, encaixe e finalidade antes da compra.",
    "compatibility": "Verifique a compatibilidade com o suporte ou equipamento e respeite as instruções de uso e segurança do fabricante.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Emenda para Perfil F530?",
        "answer": "Confirme medidas, material, encaixe e finalidade antes da compra. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "fe11",
    "category": "Ferragens",
    "name": "Plaina Manual para Drywall Plaster",
    "description": "Ferramenta para ajuste de bordas e chanfros em chapas de gesso.",
    "image": "/plaina_para_drywall_plaster.webp",
    "rating": 0,
    "specs": [
      "Marca: Plaster",
      "Tipo: Surform",
      "Corpo: Metálico/Plástico"
    ],
    "applications": [
      "Acessório de montagem, acabamento ou ferramenta conforme o modelo."
    ],
    "whatIsIt": "Plaina Manual para Drywall Plaster é um item do catálogo KY na categoria Ferragens. Acessório de montagem, acabamento ou ferramenta conforme o modelo.",
    "selectionCriteria": "Confirme medidas, material, encaixe e finalidade antes da compra.",
    "compatibility": "Verifique a compatibilidade com o suporte ou equipamento e respeite as instruções de uso e segurança do fabricante.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Plaina Manual para Drywall Plaster?",
        "answer": "Confirme medidas, material, encaixe e finalidade antes da compra. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "fe12",
    "category": "Ferragens",
    "name": "Lâmina de Reposição para Plaina",
    "description": "Lâmina de aço temperado para substituição em plainas Plaster.",
    "image": "/lamina_para_plaina_plaster.webp",
    "rating": 0,
    "specs": [
      "Material: Aço Carbono"
    ],
    "applications": [
      "Acessório de montagem, acabamento ou ferramenta conforme o modelo."
    ],
    "whatIsIt": "Lâmina de Reposição para Plaina é um item do catálogo KY na categoria Ferragens. Acessório de montagem, acabamento ou ferramenta conforme o modelo.",
    "selectionCriteria": "Confirme medidas, material, encaixe e finalidade antes da compra.",
    "compatibility": "Verifique a compatibilidade com o suporte ou equipamento e respeite as instruções de uso e segurança do fabricante.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Lâmina de Reposição para Plaina?",
        "answer": "Confirme medidas, material, encaixe e finalidade antes da compra. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
  },
  {
    "id": "fe13",
    "category": "Ferragens",
    "name": "Bits Phillips PH2 Ciser 25mm",
    "description": "Ponteira magnética para parafusadeiras.",
    "image": "/bits_ponta_phillips_25mm.webp",
    "rating": 0,
    "specs": [
      "Tipo: Phillips PH2"
    ],
    "applications": [
      "Acessório de montagem, acabamento ou ferramenta conforme o modelo."
    ],
    "whatIsIt": "Bits Phillips PH2 Ciser 25mm é um item do catálogo KY na categoria Ferragens. Acessório de montagem, acabamento ou ferramenta conforme o modelo.",
    "selectionCriteria": "Confirme medidas, material, encaixe e finalidade antes da compra.",
    "compatibility": "Verifique a compatibilidade com o suporte ou equipamento e respeite as instruções de uso e segurança do fabricante.",
    "faq": [
      {
        "question": "O que conferir antes de comprar Bits Phillips PH2 Ciser 25mm?",
        "answer": "Confirme medidas, material, encaixe e finalidade antes da compra. Envie a referência e a quantidade à equipe KY para confirmar a versão disponível."
      },
      {
        "question": "Onde consultar medidas, consumo e instalação?",
        "answer": "Solicite a ficha técnica atual do fabricante para a referência escolhida. Embalagem, rendimento e condições de uso podem variar entre versões."
      }
    ]
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
    description: "Sistema construtivo com perfis de aço galvanizado e fechamentos definidos em projeto. Dimensionamento, fundação, proteção contra umidade e desempenho devem ser avaliados pelo responsável técnico. Consulte a KY sobre materiais e escopo do atendimento.",
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/projeto-stell-frame.png-bAiwJLHNjOpiURXX8I0tGfLyNCau5x.jpeg'
  },
  {
    id: 'telhado-steel',
    title: 'Estrutura Steel Frame para Telhado',
    description: "Estrutura de cobertura em perfis de aço, dimensionada conforme cargas, vãos e telhas especificadas. Compatibilidade com Shingle, telhas cerâmicas ou metálicas depende do projeto e dos apoios.",
    image: 'https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'drywall',
    title: 'Forro e Parede com Drywall',
    description: "Paredes e forros com chapas de gesso acartonado. A composição das placas, perfis e isolamento deve considerar o ambiente, cargas e desempenho esperado. Consulte materiais e escopo de instalação.",
    image: '/forro-e-parede-em-drywall.jpeg'
  },
  {
    id: 'shingle',
    title: 'Cobertura com Telhado Shingle',
    description: "Sistema de cobertura com telhas asfálticas. Base, subcobertura, ventilação, inclinação e fixações devem seguir o projeto e as orientações do fabricante escolhido.",
    image: '/telhado-shingle.jpg'
  },
  {
    id: 'pvc-modular',
    title: 'Placa Modular de PVC',
    description: "Forros modulares em placas de PVC, com possibilidade de acesso às instalações acima do forro. Dimensões, acabamento e requisitos de reação ao fogo devem ser confirmados para o produto especificado.",
    image: 'https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: "Steel Frame: como planejar uma obra em Curitiba",
    excerpt: "Entenda os componentes do sistema, a importância do projeto e os cuidados para comparar propostas.",
    img: '/blog/planejamento-steel.webp',
    imageAlt: 'Ilustração por IA: projeto e modelo de estrutura em Steel Frame',
    imageCaption: 'Ilustração por IA • Não representa obra da KY',
    tag: 'Steel Frame',
    date: 'Jan 2025'
  },
  {
    id: 'b2',
    title: "Drywall: como avaliar isolamento térmico e acústico",
    excerpt: "Veja quais partes do sistema influenciam o desempenho de paredes e forros.",
    img: '/blog/isolamento.webp',
    imageAlt: 'Ilustração por IA: camadas de uma parede drywall com isolamento',
    imageCaption: 'Ilustração por IA • Não representa obra da KY',
    tag: 'Drywall',
    date: 'Dez 2024'
  },
  {
    id: 'b3',
    title: "Telhado Shingle: o que conferir no projeto",
    excerpt: "Conheça os itens que precisam ser definidos além da telha.",
    img: '/blog/shingle.webp',
    imageAlt: 'Ilustração por IA: telhas Shingle, base e subcobertura',
    imageCaption: 'Ilustração por IA • Não representa obra da KY',
    tag: 'Telhado',
    date: 'Nov 2024'
  },
  {
    id: 'b4',
    title: "Quanto custa construir em Steel Frame? Itens para comparar",
    excerpt: "Organize materiais, serviços e acabamento para solicitar um orçamento comparável.",
    img: '/blog/custos.webp',
    imageAlt: 'Ilustração por IA: materiais e planilha para comparar custos',
    imageCaption: 'Ilustração por IA • Não representa obra da KY',
    tag: 'Custos & Economia',
    date: 'Fev 2025'
  },
  {
    id: 'b5',
    title: "Steel Frame: perguntas para levar ao responsável técnico",
    excerpt: "Confira pontos sobre cargas, corrosão, conforto e manutenção antes de construir.",
    img: '/blog/tecnico.webp',
    imageAlt: 'Ilustração por IA: consulta de projeto com perfis de aço',
    imageCaption: 'Ilustração por IA • Não representa obra da KY',
    tag: 'Curiosidades & Engenharia',
    date: 'Mar 2025'
  },
  {
    id: 'b6',
    title: "Etapas de uma obra em Steel Frame",
    excerpt: "Do projeto aos acabamentos, entenda a sequência a combinar com a equipe.",
    img: '/blog/etapas.webp',
    imageAlt: 'Ilustração por IA: sequência de estrutura e fechamento',
    imageCaption: 'Ilustração por IA • Não representa obra da KY',
    tag: 'Guia Executivo',
    date: 'Abr 2025'
  },
  {
    id: 'b7',
    title: "Como organizar a compra de materiais na KY Drywall",
    excerpt: "Prepare sua lista e confirme disponibilidade, retirada e entrega com a equipe.",
    img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ky-loja-cajuru-drywall-stell-fame.png-CAi9KHi0wcqQLptb0qLFGSWQZaXr98.jpeg',
    imageAlt: 'Fachada real da loja KY Drywall no Cajuru, Curitiba',
    imageCaption: 'Fachada real da KY • Cajuru, Curitiba',
    tag: 'Distribuição & Logística',
    date: 'Mai 2025'
  },
  {
    id: 'b8',
    title: "Orçamento de drywall e Steel Frame: como calcular o escopo",
    excerpt: "Saiba quais informações reunir para cotar paredes, forros e estruturas.",
    img: '/blog/escopo.webp',
    imageAlt: 'Ilustração por IA: instrumentos e planta para levantar quantitativos',
    imageCaption: 'Ilustração por IA • Não representa obra da KY',
    tag: 'Custos & Orçamento',
    date: 'Jun 2025'
  },
  {
    id: 'b9',
    title: "Steel Frame no clima de Curitiba: cuidados com o conforto",
    excerpt: "Isolamento, umidade e ventilação precisam ser avaliados em conjunto.",
    img: '/blog/conforto.webp',
    imageAlt: 'Ilustração por IA: fechamento com isolamento e janela',
    imageCaption: 'Ilustração por IA • Não representa obra da KY',
    tag: 'Conforto & Engenharia',
    date: 'Jul 2025'
  },
  {
    id: 'b10',
    title: "Placas ST, RU e RF: guia de escolha para drywall",
    excerpt: "Entenda a finalidade de cada chapa e o que conferir na especificação.",
    img: '/blog/chapas.webp',
    imageAlt: 'Ilustração por IA: amostras de chapas ST, RU e RF',
    imageCaption: 'Ilustração por IA • Não representa obra da KY',
    tag: 'Materiais & Aplicação',
    date: 'Ago 2025'
  }
];

export const getRandomCTA = () => [
  "Consultar Preço no WhatsApp",
  "Consultar Condições",
  "Falar com Especialista KY",
  "Solicitar Orçamento"
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
