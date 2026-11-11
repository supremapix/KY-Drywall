import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, ChevronUp, ArrowUp, MessageCircle, Phone, BookOpen, Home as HomeIcon, ChevronRight, Zap, Award, Clock, Users } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import { BASE_URL, COMPANY_INFO } from '../constants';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  count: number;
  questions: FAQItem[];
}

const FAQ_DATA: FAQSection[] = [
  {
    id: 'drywall',
    title: 'Drywall - O que é e Como Funciona',
    icon: <BookOpen size={24} />,
    count: 20,
    questions: [
      {"question": "Como solicitar orçamento?", "answer": "Fale com Carlos pelo WhatsApp (41) 99645-7421 ou com Lucilene pelo (41) 99906-7259. Informe o material ou serviço, medidas, quantidades e cidade ou bairro da obra. Telefone da loja: (41) 3528-4232."},
      {"question": "KY Drywall atende Curitiba e RMC?", "answer": "Sim. A KY Drywall & Steel Frame atende Curitiba e Região Metropolitana a partir da loja no Cajuru. Consulte a equipe sobre atendimento, entrega e instalação no endereço da sua obra."},
      {"question": "O que é telha Shingle?", "answer": "Telha Shingle é uma telha asfáltica, geralmente reforçada com fibra de vidro e revestida por grânulos minerais. Integra um sistema de cobertura que exige base e instalação compatíveis com as especificações do fabricante."},
      {"question": "Onde comprar material para Steel Frame?", "answer": "Consulte o catálogo da KY Drywall & Steel Frame para perfis, placas, isolamento e acessórios. A loja fica no Cajuru, em Curitiba. Envie o projeto para confirmar especificações, quantidades, disponibilidade e condições de entrega."},
      {"question": "Drywall ou alvenaria?", "answer": "A escolha depende do projeto. Drywall é usado em vedações e forros internos, com montagem a seco e facilidade de acesso às instalações. Alvenaria utiliza blocos ou tijolos e argamassa. Desempenho, cargas, umidade e custo devem ser avaliados para cada ambiente."},
      {"question": "Onde encontrar loja de drywall em Curitiba?", "answer": "A loja física da KY Drywall & Steel Frame fica na Rod. BR-277, 3641 - Cajuru, Curitiba. Telefone: (41) 3528-4232. Os bairros e cidades citados no site são áreas atendidas, não filiais."},
      {"question": "Onde comprar drywall em Curitiba?", "answer": "A KY Drywall & Steel Frame fornece materiais para drywall na Rod. BR-277, 3641 - Cajuru, Curitiba - PR, CEP 81480-270. Consulte os itens e solicite orçamento pelos canais oficiais."},
      {"question": "Quanto custa drywall?", "answer": "O custo depende da área, tipo de placa, estrutura, isolamento, acabamento e mão de obra. Envie as medidas e o local da obra para a KY Drywall solicitar um orçamento específico, com materiais e instalação discriminados."},
      {
        question: 'O que é drywall?',
        answer: "Drywall é um sistema construtivo composto por placas de gesso acartonado fixadas em estruturas de perfis metálicos - geralmente aço galvanizado. É conhecido como construção a seco pois reduz etapas úmidas na montagem. Amplamente usado para paredes, divisórias, forros e revestimentos em residências, comércios e indústrias em Curitiba e em todo o Brasil."
      },
      {
        question: 'Quais são os tipos de placa de drywall?',
        answer: "Os principais tipos são: Standard (ST) - para ambientes secos e internos; Resistente à Umidade (RU) - verde, para banheiros e áreas úmidas; Resistente ao Fogo (RF) - rosa, com aditivos que retardam a propagação de chamas. A KY Drywall fornece todos os tipos com orientação sobre os itens disponíveis para escolher o correto."
      },
      {
        question: 'Drywall é o mesmo que gesso acartonado?',
        answer: "Sim! Drywall, gesso acartonado, placa de gesso e divisória seca são nomes diferentes para o mesmo sistema. O nome \"drywall\" é o mais utilizado tecnicamente e vem do inglês (dry = seco / wall = parede)."
      },
      {
        question: 'Quais são as vantagens do drywall?',
        answer: "A montagem a seco permite organizar etapas, passagem de instalações e mudanças de layout. Prazo, resíduos e custo dependem do projeto e da execução; compare propostas com o mesmo escopo."
      },
      {
        question: 'Drywall é resistente?',
        answer: "Sim! Drywall instalado corretamente tem excelente resistência para uso normal. Para locais com maior impacto existem placas de alta dureza. Suporta quadros, TVs e objetos com ancoragem adequada."
      },
      {
        question: 'Drywall pode ser usado em área úmida?',
        answer: "Sim! Para banheiros, cozinhas e áreas úmidas usa-se a placa RU (resistente à umidade) identificada pela cor verde. Com impermeabilização adequada suporta azulejos e revestimentos cerâmicos normalmente."
      },
      {
        question: 'Drywall pega fogo?',
        answer: "O comportamento ao fogo deve ser verificado para o produto e para o sistema completo, com documentação aplicável. Não deduza um tempo de resistência ou uma classificação apenas do nome ou da cor da placa. Consulte um profissional habilitado."
      },
      {
        question: 'Posso parafusar coisas na parede de drywall?',
        answer: "Cargas e fixações precisam ser previstas conforme o suporte, o sistema e o peso do objeto. Confirme buchas, reforços e pontos de apoio com o fabricante e o responsável técnico; não use um limite genérico para qualquer parede."
      },
      {
        question: 'Qual a espessura das placas de drywall?',
        answer: "A medida correta depende do produto e da função no sistema. Confira a referência, espessura, espaçamento dos apoios e demais dimensões no projeto e na ficha técnica, antes de definir a quantidade de compra."
      },
      {
        question: 'Drywall tem isolamento térmico?',
        answer: "O desempenho depende do conjunto: placas, estrutura, isolamento, juntas, aberturas e execução. Solicite a composição especificada e dados do sistema para o ambiente. Não há superioridade universal ou desempenho único apenas pelo nome do material."
      },
      {
        question: 'Drywall tem isolamento acústico?',
        answer: "O desempenho depende do conjunto: placas, estrutura, isolamento, juntas, aberturas e execução. Solicite a composição especificada e dados do sistema para o ambiente. Não há superioridade universal ou desempenho único apenas pelo nome do material."
      },
      {
        question: 'Quanto tempo dura uma parede de drywall?',
        answer: "O prazo ou a vida útil depende do produto, projeto, condições de uso, execução e manutenção. Consulte a documentação do fabricante e solicite um cronograma específico para o serviço, sem assumir um período único para todos os casos."
      },
      {
        question: 'Drywall é mais barato que alvenaria?',
        answer: "O custo depende de medidas, composição dos materiais, acabamento, acesso ao local e mão de obra. Compare propostas para o mesmo escopo e solicite valores, validade, frete e condições de pagamento à equipe KY."
      },
      {
        question: 'Qual a diferença entre drywall e divisória de vidro?',
        answer: "Drywall forma uma vedação opaca; divisórias de vidro podem permitir iluminação e visibilidade. O desempenho depende da composição de cada sistema. A escolha deve considerar privacidade, luz, acústica e requisitos do projeto."
      },
      {
        question: 'Posso fazer curvas com drywall?',
        answer: "Sistemas de drywall podem formar superfícies curvas quando a placa, a estrutura e o raio de curvatura seguem o projeto e as instruções do fabricante. Não corte nem umedeça chapas sem verificar o procedimento indicado para o produto. Envie o desenho à equipe para consultar os materiais e confirmar se há atendimento para a execução desejada."
      },
      {
        question: 'O que é forro de drywall?',
        answer: "Forro de drywall é a aplicação do sistema no teto em vez de paredes. Cria teto falso com excelente acabamento, permite instalação de luminárias, sancas, spots e sistemas de iluminação embutida. Muito usado em reformas residenciais e comerciais."
      },
      {
        question: 'O que é sanca em drywall?',
        answer: "Sanca é um rebaixo ou moldura no encontro entre a parede e o forro. Em drywall pode ter diversas formas e abrigar fitas de LED, perfis de iluminação indireta e efeitos decorativos. É um dos itens mais solicitados em reformas em Curitiba."
      },
      {
        question: 'Drywall pode mofar?',
        answer: "A exposição à água deve ser avaliada conforme o material e o sistema. Resistência à umidade não equivale a impermeabilidade. Confira impermeabilização, selagem, revestimentos, ventilação e limites de uso na documentação do fabricante."
      },
      {
        question: 'É possível revestir drywall com cerâmica?',
        answer: "Sim! Com placa RU e impermeabilização correta o drywall recebe cerâmica, porcelanato e azulejo normalmente. É necessário usar argamassa específica para drywall. Muito usado em banheiros e cozinhas em Curitiba."
      },
      {
        question: 'O que é drywall decorativo?',
        answer: "Drywall decorativo vai além das paredes simples - cria nichos, painéis texturizados, molduras, cortineiros embutidos, painéis de TV, sancas complexas e elementos arquitetônicos. A KY Drywall executa projetos decorativos personalizados."
      }
    ]
  },
  {
    id: 'steelframe',
    title: 'Steel Frame - Sistema Construtivo Completo',
    icon: <HomeIcon size={24} />,
    count: 20,
    questions: [
      {
        question: 'O que é Steel Frame?',
        answer: "Steel Frame é um sistema construtivo que utiliza perfis de aço galvanizado dimensionados por projeto para formar a estrutura da edificação. Os fechamentos, isolamento e revestimentos são especificados conforme o uso."
      },
      {
        question: 'Steel Frame é resistente a terremotos e ventos fortes?',
        answer: "A capacidade da estrutura depende de dimensionamento por profissional habilitado, considerando cargas, vãos, ligações, terreno e condições locais. Não é possível confirmar um limite ou resistência apenas pelo tipo de sistema."
      },
      {
        question: 'Steel Frame é mais caro que construção convencional?',
        answer: "O custo depende de medidas, composição dos materiais, acabamento, acesso ao local e mão de obra. Compare propostas para o mesmo escopo e solicite valores, validade, frete e condições de pagamento à equipe KY."
      },
      {
        question: 'Quanto tempo leva para construir uma casa em Steel Frame?',
        answer: "O prazo ou a vida útil depende do produto, projeto, condições de uso, execução e manutenção. Consulte a documentação do fabricante e solicite um cronograma específico para o serviço, sem assumir um período único para todos os casos."
      },
      {
        question: 'Steel Frame pode ser usado em Curitiba com clima frio?',
        answer: "O desempenho depende do conjunto: placas, estrutura, isolamento, juntas, aberturas e execução. Solicite a composição especificada e dados do sistema para o ambiente. Não há superioridade universal ou desempenho único apenas pelo nome do material."
      },
      {
        question: 'Casa em Steel Frame é durável?',
        answer: "A solução depende do produto, do ambiente e da composição do sistema. Confira a ficha técnica, as instruções de execução e os requisitos do projeto com o profissional responsável. A equipe KY pode ajudar a localizar os materiais do catálogo para sua cotação."
      },
      {
        question: 'Steel Frame suporta segundo pavimento?',
        answer: "Cargas e fixações precisam ser previstas conforme o suporte, o sistema e o peso do objeto. Confirme buchas, reforços e pontos de apoio com o fabricante e o responsável técnico; não use um limite genérico para qualquer parede."
      },
      {
        question: 'Que tipo de fundação usa o Steel Frame?',
        answer: "Pelo peso muito menor da estrutura o Steel Frame geralmente usa fundações mais simples e econômicas como radier de concreto ou baldrame, reduzindo significativamente o custo da fundação comparado à construção convencional."
      },
      {
        question: 'Steel Frame tem bom isolamento acústico?',
        answer: "O desempenho depende do conjunto: placas, estrutura, isolamento, juntas, aberturas e execução. Solicite a composição especificada e dados do sistema para o ambiente. Não há superioridade universal ou desempenho único apenas pelo nome do material."
      },
      {
        question: 'É possível reformar uma casa em Steel Frame?',
        answer: "Sim! É muito mais fácil reformar uma casa em Steel Frame que uma convencional. As paredes podem ser removidas, deslocadas e reconfiguradas com muito menos tempo, custo e entulho."
      },
      {
        question: 'Steel Frame é sustentável?',
        answer: "Sim! O aço é o material mais reciclado do mundo. Steel Frame gera muito menos resíduo de obra, usa materiais recicláveis, consome menos água e pode ser desmontado e reaproveitado. É uma das construções mais sustentáveis disponíveis."
      },
      {
        question: 'Steel Frame serve para construção comercial?',
        answer: "Sim! O Steel Frame é amplamente usado em escritórios, lojas, clínicas, hospitais e edifícios comerciais. A velocidade de construção e a flexibilidade de layout são vantagens especialmente valorizadas no setor comercial."
      },
      {
        question: 'O que é Light Steel Frame?',
        answer: "Light Steel Frame é o sistema que usa perfis de aço leve - diferente do Steel Frame industrial que usa perfis pesados. É o sistema residencial e comercial de pequeno e médio porte mais comum. A KY Drywall é especialista em Light Steel Frame em Curitiba."
      },
      {
        question: 'Steel Frame precisa de projeto de engenharia?',
        answer: "Sim! O Steel Frame requer projeto estrutural assinado por engenheiro responsável. A KY Drywall assessora na elaboração do projeto e indicação de engenheiros parceiros para legalizar a construção corretamente."
      },
      {
        question: 'O que vai dentro das paredes de Steel Frame?',
        answer: "As paredes de Steel Frame são preenchidas com isolante térmico (lã de vidro ou lã de rocha), membranas impermeabilizantes, OSB ou placa cimentícia externamente e drywall internamente. O resultado é uma parede de alta performance."
      },
      {
        question: 'Steel Frame enferruja?',
        answer: "A galvanização contribui para a proteção do aço. O revestimento, a exposição, os detalhes de montagem e a manutenção devem ser especificados para controlar corrosão. Confira o projeto e a documentação do fabricante."
      },
      {
        question: 'Posso instalar revestimento cerâmico em parede de Steel Frame?',
        answer: "A KY apresenta materiais e serviços de construção a seco. Consulte o escopo disponível para o local e tipo de obra, incluindo quem executa, quais materiais estão incluídos e as responsabilidades contratuais."
      },
      {
        question: 'O que é OSB e para que serve no Steel Frame?',
        answer: "OSB (Oriented Strand Board) é uma placa de madeira prensada usada no fechamento externo do Steel Frame. Fornece travamento da estrutura, suporte para revestimento externo e barreira de vento. É um componente essencial no sistema."
      },
      {
        question: 'Steel Frame aceita telha shingle?',
        answer: "Sim! Telha shingle é um dos revestimentos de cobertura mais usados com Steel Frame. A estrutura leve do shingle é perfeitamente compatível com a estrutura do Steel Frame. A KY Drywall fornece e instala o sistema completo."
      },
      {
        question: 'KY Drywall faz construção completa em Steel Frame em Curitiba?',
        answer: "A solução depende do produto, do ambiente e da composição do sistema. Confira a ficha técnica, as instruções de execução e os requisitos do projeto com o profissional responsável. A equipe KY pode ajudar a localizar os materiais do catálogo para sua cotação."
      }
    ]
  },
  {
    id: 'construcao',
    title: 'Construção a Seco - Comparativos',
    icon: <Award size={24} />,
    count: 15,
    questions: [
      {
        question: 'O que é construção a seco?',
        answer: "Construção a seco é qualquer método construtivo que não utiliza água, argamassa ou processos molhados. Inclui sistemas como drywall, steel frame, wood frame e painéis pré-fabricados. É mais rápida, limpa e sustentável que construção convencional."
      },
      {
        question: 'Construção a seco é mais rápida que convencional?',
        answer: "Sim! Construção a seco pode ser até planejada por etapas que métodos convencionais. Não há tempo de cura de concreto ou argamassa, permitindo montagem contínua e simultânea de diferentes etapas da obra."
      },
      {
        question: 'Construção a seco é mais cara?',
        answer: "A solução depende do produto, do ambiente e da composição do sistema. Confira a ficha técnica, as instruções de execução e os requisitos do projeto com o profissional responsável. A equipe KY pode ajudar a localizar os materiais do catálogo para sua cotação."
      },
      {
        question: 'Construção a seco é aprovada pela prefeitura de Curitiba?',
        answer: "Sim! Construção a seco com projeto estrutural assinado por engenheiro responsável é totalmente legalizada e aprovada pela prefeitura de Curitiba. Segue normas ABNT NBR 15253 para steel frame e NBR 14715 para drywall."
      },
      {
        question: 'O que é melhor - alvenaria ou drywall?',
        answer: "A solução depende do produto, do ambiente e da composição do sistema. Confira a ficha técnica, as instruções de execução e os requisitos do projeto com o profissional responsável. A equipe KY pode ajudar a localizar os materiais do catálogo para sua cotação."
      },
      {
        question: 'Posso mesclar construção a seco e alvenaria?',
        answer: "Sim! É muito comum usar estrutura de concreto ou alvenaria estrutural com fechamentos internos em drywall. Esta combinação aproveita as vantagens de cada sistema - resistência estrutural da alvenaria e flexibilidade do drywall."
      },
      {
        question: 'Construção a seco suporta móveis pesados?',
        answer: "Cargas e fixações precisam ser previstas conforme o suporte, o sistema e o peso do objeto. Confirme buchas, reforços e pontos de apoio com o fabricante e o responsável técnico; não use um limite genérico para qualquer parede."
      },
      {
        question: 'Construção a seco é indicada para Curitiba?',
        answer: "Absolutamente! O clima de Curitiba é ideal para construção a seco. Sistema permite excelente isolamento térmico para o frio intenso do inverno e não sofre com umidade quando usa materiais adequados como placas RU em áreas molhadas."
      },
      {
        question: 'Qual a diferença entre Steel Frame e Wood Frame?',
        answer: "Steel Frame utiliza perfis de aço; Wood Frame utiliza componentes de madeira. Ambos dependem de projeto, proteção adequada e manutenção. Compare composição, desempenho e custo para o mesmo escopo, sem presumir superioridade universal."
      },
      {
        question: 'Construção a seco tem garantia?',
        answer: "Solicite as condições de garantia do produto e do serviço na proposta e no contrato. Cobertura, prazos, exclusões e manutenção exigida dependem do fabricante, da referência e do escopo contratado."
      },
      {
        question: 'Posso financiar imóvel em Steel Frame?',
        answer: "Consulte diretamente a instituição financeira sobre critérios, documentos e sistemas aceitos para o seu projeto. A análise e a aprovação dependem do imóvel, da documentação e das condições vigentes."
      },
      {
        question: 'Construção a seco tem valor de revenda?',
        answer: "O valor do imóvel depende da localização, área, conservação, documentação, qualidade da execução e condições do mercado. O sistema construtivo, isoladamente, não garante valorização."
      },
      {
        question: 'Qual o tempo de execução de construção a seco?',
        answer: "A solução depende do produto, do ambiente e da composição do sistema. Confira a ficha técnica, as instruções de execução e os requisitos do projeto com o profissional responsável. A equipe KY pode ajudar a localizar os materiais do catálogo para sua cotação."
      },
      {
        question: 'Construção a seco tem certificação ABNT?',
        answer: "A documentação deve ser conferida para cada produto e sistema. Peça fichas técnicas e documentos aplicáveis e valide os requisitos normativos com o responsável técnico. Citar uma norma não equivale a certificação de toda a obra."
      },
      {
        question: 'KY Drywall faz construção a seco residencial completa?',
        answer: "A solução depende do produto, do ambiente e da composição do sistema. Confira a ficha técnica, as instruções de execução e os requisitos do projeto com o profissional responsável. A equipe KY pode ajudar a localizar os materiais do catálogo para sua cotação."
      }
    ]
  },
  {
    id: 'shingle',
    title: 'Telha Shingle',
    icon: <Zap size={24} />,
    count: 15,
    questions: [
      {
        question: 'O que é telha shingle?',
        answer: "Telha shingle é uma cobertura composta por lâminas de asfalto modificado com grânulos minerais na superfície. Leve, flexível e com excelente acabamento estético. Muito popular em projetos modernos e construções em Steel Frame em Curitiba e região."
      },
      {
        question: 'Telha shingle é resistente ao granizo?',
        answer: "Sim! A telha shingle tem boa resistência ao granizo pelo material flexível que absorve impactos sem quebrar como telhas cerâmicas ou de concreto. Para regiões com granizo muito intenso existem opções de shingle com classificação de impacto mais alta."
      },
      {
        question: 'Qual a vida útil da telha shingle?',
        answer: "A solução depende do produto, do ambiente e da composição do sistema. Confira a ficha técnica, as instruções de execução e os requisitos do projeto com o profissional responsável. A equipe KY pode ajudar a localizar os materiais do catálogo para sua cotação."
      },
      {
        question: 'Telha shingle é impermeável?',
        answer: "A exposição à água deve ser avaliada conforme o material e o sistema. Resistência à umidade não equivale a impermeabilidade. Confira impermeabilização, selagem, revestimentos, ventilação e limites de uso na documentação do fabricante."
      },
      {
        question: 'Qual a inclinação mínima para telha shingle?',
        answer: "A inclinação admissível varia conforme o modelo e o sistema de cobertura. Consulte o manual do fabricante e o projeto, incluindo base, subcobertura, fixações, arremates e drenagem."
      },
      {
        question: 'Telha shingle precisa de manutenção?',
        answer: "Siga o manual de uso e manutenção do fabricante e do sistema instalado. Inspecione juntas, fixações, revestimentos e sinais de umidade conforme o plano da edificação. Evite produtos ou técnicas de limpeza não recomendados."
      },
      {
        question: 'Qual o peso da telha shingle por m²?',
        answer: "Cargas e fixações precisam ser previstas conforme o suporte, o sistema e o peso do objeto. Confirme buchas, reforços e pontos de apoio com o fabricante e o responsável técnico; não use um limite genérico para qualquer parede."
      },
      {
        question: 'Telha shingle pode ser instalada sobre telha existente?',
        answer: "A KY apresenta materiais e serviços de construção a seco. Consulte o escopo disponível para o local e tipo de obra, incluindo quem executa, quais materiais estão incluídos e as responsabilidades contratuais."
      },
      {
        question: 'Qual a diferença entre shingle e telha cerâmica?',
        answer: "A solução depende do produto, do ambiente e da composição do sistema. Confira a ficha técnica, as instruções de execução e os requisitos do projeto com o profissional responsável. A equipe KY pode ajudar a localizar os materiais do catálogo para sua cotação."
      },
      {
        question: 'Telha shingle tem isolamento térmico?',
        answer: "O desempenho depende do conjunto: placas, estrutura, isolamento, juntas, aberturas e execução. Solicite a composição especificada e dados do sistema para o ambiente. Não há superioridade universal ou desempenho único apenas pelo nome do material."
      },
      {
        question: 'Qual o custo do m² de shingle?',
        answer: "O custo depende de medidas, composição dos materiais, acabamento, acesso ao local e mão de obra. Compare propostas para o mesmo escopo e solicite valores, validade, frete e condições de pagamento à equipe KY."
      },
      {
        question: 'KY Drywall instala telha shingle em Curitiba?',
        answer: "A KY apresenta materiais e serviços de construção a seco. Consulte o escopo disponível para o local e tipo de obra, incluindo quem executa, quais materiais estão incluídos e as responsabilidades contratuais."
      },
      {
        question: 'Quais marcas de shingle a KY Drywall trabalha?',
        answer: "Consulte o catálogo e confirme a marca, referência e documentação do item disponível com a equipe. Opções e modelos podem variar; a escolha deve atender à especificação do projeto."
      },
      {
        question: 'Como limpar telha shingle?',
        answer: "Limpeza com água e sabão neutro uma vez por ano é suficiente. Evite jato de alta pressão muito próximo que pode danificar os grânulos. Remova folhas e galhos regularmente. Não use produtos químicos agressivos."
      },
      {
        question: 'Telha shingle pode ser usada em garagem?',
        answer: "Sim! Telha shingle é excelente para garagens, pergolados e áreas de lazer. Oferece proteção total contra chuva, ótimo acabamento estético e instalação rápida. Muito usado em projetos modernos em Curitiba."
      }
    ]
  },
  {
    id: 'pvc',
    title: 'Forro PVC',
    icon: <Users size={24} />,
    count: 15,
    questions: [
      {
        question: 'O que é forro de PVC?',
        answer: "Forro de PVC é um sistema de revestimento de teto formado por lâminas ou placas modulares de policloreto de vinila. É resistente à umidade, fácil de limpar, não propaga chamas e tem instalação rápida. Muito indicado para banheiros, cozinhas, lavanderias e áreas externas cobertas em Curitiba."
      },
      {
        question: 'Forro PVC é resistente à umidade?',
        answer: "A exposição à água deve ser avaliada conforme o material e o sistema. Resistência à umidade não equivale a impermeabilidade. Confira impermeabilização, selagem, revestimentos, ventilação e limites de uso na documentação do fabricante."
      },
      {
        question: 'Forro PVC pode ser instalado em área externa?',
        answer: "A KY apresenta materiais e serviços de construção a seco. Consulte o escopo disponível para o local e tipo de obra, incluindo quem executa, quais materiais estão incluídos e as responsabilidades contratuais."
      },
      {
        question: 'Qual a diferença entre forro PVC e forro de drywall?',
        answer: "Compare acabamento, manutenção, exposição à umidade e desempenho do sistema completo. PVC e drywall têm aplicações diferentes; a escolha deve atender às condições do ambiente e à especificação do projeto."
      },
      {
        question: 'Forro PVC aceita pintura?',
        answer: "Tecnicamente sim, mas não é recomendado. O PVC já vem com acabamento de fábrica em diversas cores e a pintura pode descascar com o tempo. Se deseja mudança de cor, melhor optar por drywall ou substituir as réguas."
      },
      {
        question: 'Como é feita a instalação de forro PVC?',
        answer: "A KY apresenta materiais e serviços de construção a seco. Consulte o escopo disponível para o local e tipo de obra, incluindo quem executa, quais materiais estão incluídos e as responsabilidades contratuais."
      },
      {
        question: 'Forro PVC esquenta o ambiente?',
        answer: "PVC tem baixo isolamento térmico. Para melhor conforto térmico recomenda-se manta térmica sobre o forro ou uso de telhas termoacústicas na cobertura. O conforto final depende do projeto completo do telhado."
      },
      {
        question: 'Qual a vida útil do forro PVC?',
        answer: "A solução depende do produto, do ambiente e da composição do sistema. Confira a ficha técnica, as instruções de execução e os requisitos do projeto com o profissional responsável. A equipe KY pode ajudar a localizar os materiais do catálogo para sua cotação."
      },
      {
        question: 'Forro PVC modular é o mesmo que forro régua?',
        answer: "Sim! São nomes diferentes para o mesmo produto. Réguas são as lâminas individuais que formam o forro. Sistema modular permite fácil acesso para manutenção de instalações acima do forro."
      },
      {
        question: 'Quais cores de forro PVC estão disponíveis?',
        answer: "As cores mais comuns são branco, marfim, amadeirado (diversas tonalidades de madeira) e cinza. Branco é o mais usado por ser atemporal e refletir melhor a luz. Consulte as cores e versões disponíveis com a equipe KY."
      },
      {
        question: 'Forro PVC tem isolamento acústico?',
        answer: "O desempenho depende do conjunto: placas, estrutura, isolamento, juntas, aberturas e execução. Solicite a composição especificada e dados do sistema para o ambiente. Não há superioridade universal ou desempenho único apenas pelo nome do material."
      },
      {
        question: 'Como limpar forro de PVC?',
        answer: "Limpeza simples com pano úmido e detergente neutro. Evite produtos abrasivos que podem arranhar. Para manchas difíceis pode-se usar esponja macia. A facilidade de limpeza é uma grande vantagem do PVC."
      },
      {
        question: 'Forro PVC pode ser instalado em garagem?',
        answer: "A KY apresenta materiais e serviços de construção a seco. Consulte o escopo disponível para o local e tipo de obra, incluindo quem executa, quais materiais estão incluídos e as responsabilidades contratuais."
      },
      {
        question: 'KY Drywall instala forro PVC em Curitiba?',
        answer: "A KY apresenta materiais e serviços de construção a seco. Consulte o escopo disponível para o local e tipo de obra, incluindo quem executa, quais materiais estão incluídos e as responsabilidades contratuais."
      },
      {
        question: 'Qual o preço do m² de forro PVC?',
        answer: "A solução depende do produto, do ambiente e da composição do sistema. Confira a ficha técnica, as instruções de execução e os requisitos do projeto com o profissional responsável. A equipe KY pode ajudar a localizar os materiais do catálogo para sua cotação."
      }
    ]
  },
  {
    id: 'instalacao',
    title: 'Instalação e Manutenção',
    icon: <Clock size={24} />,
    count: 19,
    questions: [
      {
        question: 'Como é feita a instalação de drywall?',
        answer: "A KY apresenta materiais e serviços de construção a seco. Consulte o escopo disponível para o local e tipo de obra, incluindo quem executa, quais materiais estão incluídos e as responsabilidades contratuais."
      },
      {
        question: 'Quanto tempo leva a instalação de drywall?',
        answer: "O prazo ou a vida útil depende do produto, projeto, condições de uso, execução e manutenção. Consulte a documentação do fabricante e solicite um cronograma específico para o serviço, sem assumir um período único para todos os casos."
      },
      {
        question: 'Drywall pode ser instalado em qualquer ambiente?',
        answer: "A KY apresenta materiais e serviços de construção a seco. Consulte o escopo disponível para o local e tipo de obra, incluindo quem executa, quais materiais estão incluídos e as responsabilidades contratuais."
      },
      {
        question: 'Como é feita a manutenção de parede de drywall?',
        answer: "Siga o manual de uso e manutenção do fabricante e do sistema instalado. Inspecione juntas, fixações, revestimentos e sinais de umidade conforme o plano da edificação. Evite produtos ou técnicas de limpeza não recomendados."
      },
      {
        question: 'Como consertar furo em drywall?',
        answer: "A solução depende do produto, do ambiente e da composição do sistema. Confira a ficha técnica, as instruções de execução e os requisitos do projeto com o profissional responsável. A equipe KY pode ajudar a localizar os materiais do catálogo para sua cotação."
      },
      {
        question: 'Como consertar trinca em drywall?',
        answer: "Abrir levemente a trinca com espátula, aplicar fita de papel ou fibra sobre a trinca, cobrir com massa para drywall em camadas finas, lixar após secagem completa e repintar. Trincas persistentes podem indicar movimentação estrutural a ser investigada."
      },
      {
        question: 'Posso instalar drywall sobre parede existente?',
        answer: "A KY apresenta materiais e serviços de construção a seco. Consulte o escopo disponível para o local e tipo de obra, incluindo quem executa, quais materiais estão incluídos e as responsabilidades contratuais."
      },
      {
        question: 'Como instalar TV na parede de drywall?',
        answer: "A KY apresenta materiais e serviços de construção a seco. Consulte o escopo disponível para o local e tipo de obra, incluindo quem executa, quais materiais estão incluídos e as responsabilidades contratuais."
      },
      {
        question: 'Como instalar prateleiras em drywall?',
        answer: "A KY apresenta materiais e serviços de construção a seco. Consulte o escopo disponível para o local e tipo de obra, incluindo quem executa, quais materiais estão incluídos e as responsabilidades contratuais."
      },
      {
        question: 'Como instalar ar-condicionado em parede de drywall?',
        answer: "A KY apresenta materiais e serviços de construção a seco. Consulte o escopo disponível para o local e tipo de obra, incluindo quem executa, quais materiais estão incluídos e as responsabilidades contratuais."
      },
      {
        question: 'Drywall pode ter piso vinílico ou cerâmico?',
        answer: "Drywall não é usado em pisos. É sistema para paredes e forros. Para pisos existe o sistema de piso elevado que é diferente. Se pergunta é sobre parede de drywall receber cerâmica: sim, com placa RU e impermeabilização."
      },
      {
        question: 'Drywall precisa de acabamento especial?',
        answer: "O acabamento das juntas com fita e massa específica para drywall é obrigatório. Após lixamento, aplicar primer PVA antes da pintura. Massa corrida em toda a superfície é opcional mas recomendada para acabamento premium tipo \"nível 5\"."
      },
      {
        question: 'Qual a tinta ideal para drywall?',
        answer: "Tintas acrílicas ou látex PVA são ideais. Para áreas úmidas usar tinta acrílica com fungicida. Evitar tintas muito líquidas que podem encharcar a placa. Aplicação com rolo de lã ou pistola. A KY Drywall recomenda marcas adequadas."
      },
      {
        question: 'Como preparar drywall para pintura?',
        answer: "Após instalação e tratamento de juntas: lixar toda superfície, limpar o pó completamente, aplicar primer PVA ou selador acrílico, aguardar secagem, aplicar massa corrida se desejado (opcional), lixar novamente, limpar e aplicar tinta."
      },
      {
        question: 'O que é fita de tratamento para drywall?',
        answer: "Fita especial aplicada sobre juntas entre placas antes da massa. Pode ser de papel microperfurado (mais comum) ou fibra de vidro. Reforça juntas evitando trincas futuras. É item obrigatório para acabamento técnico correto."
      },
      {
        question: 'O que é massa para drywall?',
        answer: "Massa específica para tratamento de juntas e fixações em drywall. Tem secagem mais rápida e menos retração que massa comum. Principais tipos: massa pronta em pasta ou massa em pó para misturar com água. Ambas têm excelente desempenho."
      },
      {
        question: 'É possível desmontar e remontar drywall?',
        answer: "Sim! Uma das grandes vantagens do drywall. Placas podem ser removidas com cuidado e reaproveitadas. Perfis metálicos são podem ser avaliados para reaproveitamento. Sistema permite reforma completa de layout sem demolição e com mínimo de resíduos."
      },
      {
        question: 'Qual o espaçamento correto entre montantes?',
        answer: "A medida correta depende do produto e da função no sistema. Confira a referência, espessura, espaçamento dos apoios e demais dimensões no projeto e na ficha técnica, antes de definir a quantidade de compra."
      },
      {
        question: 'KY Drywall faz instalação ou só vende material?',
        answer: "A KY apresenta materiais e serviços de construção a seco. Consulte o escopo disponível para o local e tipo de obra, incluindo quem executa, quais materiais estão incluídos e as responsabilidades contratuais."
      }
    ]
  },
  {
    id: 'orcamento',
    title: 'Orçamento e Comercial',
    icon: <MessageCircle size={24} />,
    count: 15,
    questions: [
      {
        question: 'O orçamento é gratuito?',
        answer: "Consulte a equipe sobre disponibilidade e condições de orçamento ou visita técnica. Envie medidas, fotos e localização para definir o escopo; confirme eventuais custos e prazos antes de agendar."
      },
      {
        question: 'Quanto custa o m² de drywall em Curitiba?',
        answer: "O custo depende de medidas, composição dos materiais, acabamento, acesso ao local e mão de obra. Compare propostas para o mesmo escopo e solicite valores, validade, frete e condições de pagamento à equipe KY."
      },
      {
        question: 'KY Drywall é distribuidora ou instaladora?',
        answer: "A KY apresenta materiais e serviços de construção a seco. Consulte o escopo disponível para o local e tipo de obra, incluindo quem executa, quais materiais estão incluídos e as responsabilidades contratuais."
      },
      {
        question: 'KY Drywall vende material e instala?',
        answer: "A KY apresenta materiais e serviços de construção a seco. Consulte o escopo disponível para o local e tipo de obra, incluindo quem executa, quais materiais estão incluídos e as responsabilidades contratuais."
      },
      {
        question: 'Como solicitar orçamento na KY Drywall?',
        answer: "Formas de solicitar orçamento: WhatsApp (41) 99645-7421 com Carlos ou (41) 99906-7259 com Lucilene, telefone (41) 3528-4232, e-mail carlos@kydrywall.com.br ou lucilene@kydrywall.com.br, ou visita presencial na BR-277, 3641 - Cajuru."
      },
      {
        question: 'Qual o horário de atendimento?',
        answer: "Segunda a Sexta: 7h30 às 17h30 / Sábado: 7h30 às 12h00. Atendimento por WhatsApp pode ser feito fora deste horário com resposta no próximo dia útil. Loja física na BR-277 aberta nos horários informados."
      },
      {
        question: 'Aceitam PIX e cartão?',
        answer: "Consulte as formas de pagamento e eventuais condições de parcelamento na proposta comercial. Não presuma disponibilidade de uma modalidade, desconto ou prazo antes da confirmação da equipe."
      },
      {
        question: 'Parcelam os serviços?',
        answer: "Consulte as formas de pagamento e eventuais condições de parcelamento na proposta comercial. Não presuma disponibilidade de uma modalidade, desconto ou prazo antes da confirmação da equipe."
      },
      {
        question: 'KY Drywall emite nota fiscal?',
        answer: "Solicite à equipe os dados de faturamento e os documentos previstos para sua compra ou contratação. Confira a descrição dos itens e serviços na proposta."
      },
      {
        question: 'Tem garantia nos serviços?',
        answer: "Solicite as condições de garantia do produto e do serviço na proposta e no contrato. Cobertura, prazos, exclusões e manutenção exigida dependem do fabricante, da referência e do escopo contratado."
      },
      {
        question: 'Quais regiões de Curitiba atendem?',
        answer: "Informe os itens, quantidades e endereço da obra para confirmar disponibilidade, prazo, frete e condições de descarga. Produtos no catálogo e localidades citadas no site não representam estoque reservado, entrega imediata ou existência de filiais."
      },
      {
        question: 'KY Drywall atende fora de Curitiba?',
        answer: "Informe os itens, quantidades e endereço da obra para confirmar disponibilidade, prazo, frete e condições de descarga. Produtos no catálogo e localidades citadas no site não representam estoque reservado, entrega imediata ou existência de filiais."
      },
      {
        question: 'Como agendar visita técnica?',
        answer: "Consulte a equipe sobre disponibilidade e condições de orçamento ou visita técnica. Envie medidas, fotos e localização para definir o escopo; confirme eventuais custos e prazos antes de agendar."
      },
      {
        question: 'Quanto tempo leva para receberem o material após o pedido?',
        answer: "O prazo ou a vida útil depende do produto, projeto, condições de uso, execução e manutenção. Consulte a documentação do fabricante e solicite um cronograma específico para o serviço, sem assumir um período único para todos os casos."
      },
      {
        question: 'KY Drywall tem estoque para pronta entrega?',
        answer: "Informe os itens, quantidades e endereço da obra para confirmar disponibilidade, prazo, frete e condições de descarga. Produtos no catálogo e localidades citadas no site não representam estoque reservado, entrega imediata ou existência de filiais."
      }
    ]
  }
];

const BLOG_ARTICLES = [
  {
    title: 'Drywall x Alvenaria — comparativo completo para projetos em Curitiba',
    link: '/blog/b2'
  },
  {
    title: 'Tudo sobre Steel Frame — guia para quem quer construir em Curitiba',
    link: '/blog/b1'
  },
  {
    title: 'Telha Shingle — por que é a preferida nos projetos modernos',
    link: '/blog/b3'
  },
  {
    title: 'Isolamento acústico com drywall — como ter silêncio em casa',
    link: '/blog'
  },
  {
    title: 'Quanto custa construir em Steel Frame em Curitiba em 2025',
    link: '/blog'
  },
  {
    title: 'Forro de PVC ou drywall — qual escolher para cada ambiente',
    link: '/blog'
  }
];

const FAQPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop((document.getElementById('ky-page-scroll')?.scrollTop || window.scrollY) > 400);
    };
    (document.getElementById('ky-page-scroll') || window).addEventListener('scroll', handleScroll);
    return () => (document.getElementById('ky-page-scroll') || window).removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    (document.getElementById('ky-page-scroll') || window).scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleQuestion = (sectionId: string, questionIndex: number) => {
    const key = `${sectionId}-${questionIndex}`;
    const newOpenQuestions = new Set(openQuestions);
    if (newOpenQuestions.has(key)) {
      newOpenQuestions.delete(key);
    } else {
      newOpenQuestions.add(key);
    }
    setOpenQuestions(newOpenQuestions);
  };

  const filteredSections = FAQ_DATA.map(section => {
    if (activeCategory !== 'all' && section.id !== activeCategory) {
      return null;
    }

    const filteredQuestions = section.questions.filter(q =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredQuestions.length === 0 && searchTerm) {
      return null;
    }

    return {
      ...section,
      questions: searchTerm ? filteredQuestions : section.questions
    };
  }).filter(Boolean);

  const totalQuestions = FAQ_DATA.reduce((sum, section) => sum + section.count, 0);

  return (
    <div className="ky-interior-page bg-white min-h-screen">
      <EnhancedSEO
        title="Dúvidas Frequentes - FAQ KY Drywall Curitiba"
        description="Encontre respostas técnicas sobre Drywall, Steel Frame e Telhado Shingle. Guia completo para obras em Curitiba e Região Metropolitana."
        canonical={`${BASE_URL}/faq`}
        ogType="website"
      />

      {/* Hero Section - Industrial Showroom */}
      <section className="ky-interior-hero bg-white py-14 md:py-20 text-slate-900 relative overflow-hidden border-b-2 border-slate-100">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 text-[#D31219] text-xs font-bold uppercase tracking-wide bg-red-50 border border-red-100 px-4 py-2 rounded-full mb-10 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D31219]"></span>
              <span>01 — BASE DE CONHECIMENTO (FAQ)</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] mb-10 text-slate-950">
              Dúvidas <span className="text-[#D31219]">Técnicas</span> Frequentes
            </h1>
            <p className="text-slate-600 text-lg sm:text-2xl leading-relaxed max-w-2xl font-medium mb-12">
              Consulte especificações técnicas sobre placas, isolamento acústico e normas ABNT para obras em Curitiba.
            </p>

            {/* Search Bar - Industrial Style */}
            <div className="relative max-w-2xl group">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-slate-400 group-focus-within:text-[#D31219] transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Busque por placa RU, perfis Barbieri, isolamento..."
                className="block w-full pl-16 pr-6 py-6 border-2 border-slate-100 rounded-sm bg-white text-lg text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-[#D31219] focus:ring-4 focus:ring-red-50 transition-all shadow-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

        {/* Categories Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 px-4">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-8 py-4 rounded-sm text-xs font-bold uppercase tracking-wide transition-all border-2 ${activeCategory === 'all' ? 'bg-slate-900 border-slate-900 text-white shadow-none' : 'bg-white border-slate-100 text-slate-500 hover:border-slate-300'}`}
          >
            Todas as Áreas
          </button>
          {FAQ_DATA.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-8 py-4 rounded-sm text-xs font-bold uppercase tracking-wide transition-all border-2 ${activeCategory === cat.id ? 'bg-slate-900 border-slate-900 text-white shadow-none' : 'bg-white border-slate-100 text-slate-500 hover:border-slate-300'}`}
            >
              {cat.title.split(' - ')[0]}
            </button>
          ))}
        </div>

        {/* FAQ Content - High Contrast Accordions */}
        <div className="max-w-4xl mx-auto space-y-16">
          {filteredSections.map((section: any) => (
            <div key={section.id} className="animate-in fade-in slide-in-from-bottom-4">
              <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-slate-900/5">
                <div className="w-14 h-14 rounded-sm bg-[#D31219] text-white flex items-center justify-center shadow-lg shadow-red-900/20">
                  {section.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight uppercase">{section.title}</h2>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mt-1">{section.questions.length} perguntas frequentes</p>
                </div>
              </div>

              <div className="space-y-4">
                {section.questions.map((q: any, idx: number) => {
                  const isOpen = openQuestions.has(`${section.id}-${idx}`);
                  return (
                    <div
                      key={idx}
                      className={`group rounded-sm border-2 transition-all duration-300 ${isOpen ? 'bg-white border-slate-900 shadow-none' : 'bg-white border-slate-100 hover:border-slate-300 shadow-sm'}`}
                    >
                      <button
                        onClick={() => toggleQuestion(section.id, idx)}
                        className="w-full text-left px-8 py-6 flex items-center justify-between gap-4"
                        aria-expanded={isOpen}
                      >
                        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-[#D31219]' : 'text-slate-800'}`}>
                          {q.question}
                        </span>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-[#D31219] text-white rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'}`}>
                          <ChevronDown size={20} />
                        </div>
                      </button>

                      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="px-8 pb-8 text-lg text-slate-600 leading-relaxed border-t border-slate-50 pt-6">
                          {q.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {filteredSections.length === 0 && (
            <div className="py-24 text-center bg-white rounded-sm border-2 border-dashed border-slate-200">
               <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search size={32} className="text-slate-300" />
               </div>
               <h3 className="text-2xl font-bold text-slate-900 mb-2">Nenhum resultado encontrado</h3>
               <p className="text-slate-500 mb-8 max-w-sm mx-auto">Tente buscar por termos mais genéricos ou selecione uma categoria específica acima.</p>
               <button
                 onClick={() => {setSearchTerm(''); setActiveCategory('all');}}
                 className="bg-slate-900 text-white font-bold px-10 py-5 rounded-sm text-xs uppercase tracking-wide hover:bg-black transition-all shadow-lg active:scale-95"
               >
                 Ver Todas as Dúvidas
               </button>
            </div>
          )}
        </div>

        {/* CTA Section - Engineering Support */}
        <div className="max-w-4xl mx-auto mt-24">
          <div className="bg-slate-900 rounded-sm p-10 md:p-16 text-white relative overflow-hidden shadow-none group">

             <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="text-center md:text-left">
                   <div className="inline-flex items-center gap-2 text-[#D31219] text-xs font-bold uppercase tracking-wide mb-6">
                      <Zap size={14} />
                      <span>Suporte Personalizado</span>
                   </div>
                   <h3 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">Ainda tem dúvidas <br className="hidden sm:block" /> sobre o seu projeto?</h3>
                   <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
                      Nossa engenharia oferece consultoria gratuita para especificação de materiais e cálculo de quantitativos em Curitiba.
                   </p>
                </div>

                <div className="flex flex-col gap-4 w-full md:w-auto shrink-0">
                   <a
                     href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá! Gostaria de tirar uma dúvida técnica sobre meu projeto.`}
                     className="bg-[#D31219] hover:bg-red-700 text-white font-bold px-10 py-6 rounded-sm flex items-center justify-center gap-3 transition-all shadow-none shadow-red-900/10 active:scale-95 text-xs uppercase tracking-wide"
                   >
                     <MessageCircle size={24} /> Falar com Especialista
                   </a>
                   <a
                     href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                     className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-10 py-6 rounded-sm flex items-center justify-center gap-3 transition-all border-2 border-slate-700 active:scale-95 text-xs uppercase tracking-wide"
                   >
                     <Phone size={20} /> (41) 3528-4232
                   </a>
                </div>
             </div>
          </div>
        </div>

      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 p-4 bg-white border-2 border-slate-900 text-slate-900 rounded-full shadow-none hover:bg-slate-50 transition-all z-50 animate-in fade-in slide-in-from-bottom-4"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default FAQPage;
