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
        answer: 'Drywall é um sistema construtivo composto por placas de gesso acartonado fixadas em estruturas de perfis metálicos - geralmente aço galvanizado. É conhecido como construção a seco pois não usa água nem argamassa. Amplamente usado para paredes, divisórias, forros e revestimentos em residências, comércios e indústrias em Curitiba e em todo o Brasil.'
      },
      {
        question: 'Quais são os tipos de placa de drywall?',
        answer: 'Os principais tipos são: Standard (ST) - para ambientes secos e internos; Resistente à Umidade (RU) - verde, para banheiros e áreas úmidas; Resistente ao Fogo (RF) - rosa, com aditivos que retardam a propagação de chamas. A KY Drywall fornece todos os tipos com assessoria técnica gratuita para escolher o correto.'
      },
      {
        question: 'Drywall é o mesmo que gesso acartonado?',
        answer: 'Sim! Drywall, gesso acartonado, placa de gesso e divisória seca são nomes diferentes para o mesmo sistema. O nome "drywall" é o mais utilizado tecnicamente e vem do inglês (dry = seco / wall = parede).'
      },
      {
        question: 'Quais são as vantagens do drywall?',
        answer: 'As principais vantagens são: instalação rápida (até 3x mais rápido que alvenaria), peso muito menor, não gera entulho, permite passagem de instalações elétricas e hidráulicas, excelente acabamento, adaptável a qualquer projeto e pode ser desmontado e reaproveitado.'
      },
      {
        question: 'Drywall é resistente?',
        answer: 'Sim! Drywall instalado corretamente tem excelente resistência para uso normal. Para locais com maior impacto existem placas de alta dureza. Suporta quadros, TVs e objetos com ancoragem adequada.'
      },
      {
        question: 'Drywall pode ser usado em área úmida?',
        answer: 'Sim! Para banheiros, cozinhas e áreas úmidas usa-se a placa RU (resistente à umidade) identificada pela cor verde. Com impermeabilização adequada suporta azulejos e revestimentos cerâmicos normalmente.'
      },
      {
        question: 'Drywall pega fogo?',
        answer: 'O drywall padrão não é inflamável mas pode propagar chamas em situação extrema. Para maior segurança existe a placa RF (resistente ao fogo) que retarda a propagação de incêndio por até 30 ou 60 minutos conforme a espessura e o sistema instalado.'
      },
      {
        question: 'Posso parafusar coisas na parede de drywall?',
        answer: 'Sim! Use buchas específicas para drywall como a bucha borboleta ou âncora metálica. Para objetos mais pesados como TVs e armários pesados é necessário fixar diretamente na estrutura metálica interna.'
      },
      {
        question: 'Qual a espessura das placas de drywall?',
        answer: 'As espessuras mais comuns são 12,5mm para uso geral, 15mm para maior resistência e 10mm para forros e aplicações curvas. A KY Drywall orienta sobre a espessura correta para cada aplicação.'
      },
      {
        question: 'Drywall tem isolamento térmico?',
        answer: 'A placa de gesso em si tem isolamento térmico moderado. Para melhor desempenho térmico é comum instalar lã de vidro, lã de rocha ou EPS dentro da parede de drywall. A KY Drywall fornece sistemas completos com isolamento.'
      },
      {
        question: 'Drywall tem isolamento acústico?',
        answer: 'Sim! Com o sistema correto o drywall oferece excelente isolamento acústico. O desempenho depende do número de placas, do material de preenchimento e do tipo de perfil. A KY Drywall projeta sistemas acústicos para home theater, escritórios e ambientes que exigem silêncio.'
      },
      {
        question: 'Quanto tempo dura uma parede de drywall?',
        answer: 'Com instalação correta e manutenção adequada uma parede de drywall dura mais de 30 anos. A estrutura metálica galvanizada não enferruja e as placas mantêm a integridade por décadas em ambientes internos secos.'
      },
      {
        question: 'Drywall é mais barato que alvenaria?',
        answer: 'Depende do projeto. Em muitos casos o drywall tem custo similar ou superior ao tijolo mas compensa pela velocidade de execução (redução de mão de obra), menor peso na estrutura, ausência de entulho e facilidade de reformas futuras.'
      },
      {
        question: 'Qual a diferença entre drywall e divisória de vidro?',
        answer: 'Drywall é opaco e oferece melhor isolamento acústico e térmico. Divisória de vidro permite iluminação natural e visibilidade. Em projetos comerciais muitas vezes os dois sistemas são combinados.'
      },
      {
        question: 'Posso fazer curvas com drywall?',
        answer: 'Sim! O drywall pode ser curvado para criar paredes curvas, arcos, nichos e formas orgânicas. Existem técnicas com cortes na placa e com molhagem para curvas mais acentuadas. A KY Drywall executa projetos curvos.'
      },
      {
        question: 'O que é forro de drywall?',
        answer: 'Forro de drywall é a aplicação do sistema no teto em vez de paredes. Cria teto falso com excelente acabamento, permite instalação de luminárias, sancas, spots e sistemas de iluminação embutida. Muito usado em reformas residenciais e comerciais.'
      },
      {
        question: 'O que é sanca em drywall?',
        answer: 'Sanca é um rebaixo ou moldura no encontro entre a parede e o forro. Em drywall pode ter diversas formas e abrigar fitas de LED, perfis de iluminação indireta e efeitos decorativos. É um dos itens mais solicitados em reformas em Curitiba.'
      },
      {
        question: 'Drywall pode mofar?',
        answer: 'Drywall padrão não deve ser instalado em áreas úmidas. Umidade excessiva sem ventilação pode causar mofo. Para áreas úmidas usa-se a placa RU com impermeabilização adequada. A KY Drywall orienta sobre a solução correta para cada caso.'
      },
      {
        question: 'É possível revestir drywall com cerâmica?',
        answer: 'Sim! Com placa RU e impermeabilização correta o drywall recebe cerâmica, porcelanato e azulejo normalmente. É necessário usar argamassa específica para drywall. Muito usado em banheiros e cozinhas em Curitiba.'
      },
      {
        question: 'O que é drywall decorativo?',
        answer: 'Drywall decorativo vai além das paredes simples - cria nichos, painéis texturizados, molduras, cortineiros embutidos, painéis de TV, sancas complexas e elementos arquitetônicos. A KY Drywall executa projetos decorativos personalizados.'
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
        answer: 'Sim! A estrutura metálica leve do Steel Frame tem alta flexibilidade e resistência a cargas laterais. É muito usado em regiões de alto risco sísmico exatamente por essa característica. Em Curitiba com ventos sulinos o Steel Frame apresenta excelente desempenho estrutural.'
      },
      {
        question: 'Steel Frame é mais caro que construção convencional?',
        answer: 'O custo do Steel Frame é comparável ao da construção convencional quando se considera o prazo de obra muito menor (30 a 50% mais rápido), menor geração de resíduos, menor necessidade de mão de obra especializada em grande número e menor custo de fundação pelo peso reduzido.'
      },
      {
        question: 'Quanto tempo leva para construir uma casa em Steel Frame?',
        answer: 'Uma residência de 100m² em Steel Frame pode ser construída em 60 a 120 dias dependendo da complexidade do projeto. Isso é significativamente mais rápido que a construção convencional que pode levar 12 a 18 meses.'
      },
      {
        question: 'Steel Frame pode ser usado em Curitiba com clima frio?',
        answer: 'Sim! Steel Frame é excelente para o clima de Curitiba. O sistema permite instalação de isolamento térmico de alta performance entre os perfis garantindo conforto térmico no inverno frio e no verão. O desempenho térmico é superior à alvenaria convencional.'
      },
      {
        question: 'Casa em Steel Frame é durável?',
        answer: 'Sim! Edificações em Steel Frame projetadas e executadas corretamente tem vida útil de 50 a 100 anos. O aço galvanizado é altamente resistente à corrosão e a estrutura mantém a integridade por décadas.'
      },
      {
        question: 'Steel Frame suporta segundo pavimento?',
        answer: 'Sim! O Steel Frame é amplamente usado em edificações de 2 e 3 pavimentos. O dimensionamento correto dos perfis pelo engenheiro estrutural garante a segurança para múltiplos andares em Curitiba e região.'
      },
      {
        question: 'Que tipo de fundação usa o Steel Frame?',
        answer: 'Pelo peso muito menor da estrutura o Steel Frame geralmente usa fundações mais simples e econômicas como radier de concreto ou baldrame, reduzindo significativamente o custo da fundação comparado à construção convencional.'
      },
      {
        question: 'Steel Frame tem bom isolamento acústico?',
        answer: 'Com o sistema correto de preenchimento das paredes o Steel Frame oferece excelente isolamento acústico. A lã de vidro ou lã de rocha entre os perfis combinada com múltiplas camadas de drywall proporciona alto desempenho acústico.'
      },
      {
        question: 'É possível reformar uma casa em Steel Frame?',
        answer: 'Sim! É muito mais fácil reformar uma casa em Steel Frame que uma convencional. As paredes podem ser removidas, deslocadas e reconfiguradas com muito menos tempo, custo e entulho.'
      },
      {
        question: 'Steel Frame é sustentável?',
        answer: 'Sim! O aço é o material mais reciclado do mundo. Steel Frame gera muito menos resíduo de obra, usa materiais recicláveis, consome menos água e pode ser desmontado e reaproveitado. É uma das construções mais sustentáveis disponíveis.'
      },
      {
        question: 'Steel Frame serve para construção comercial?',
        answer: 'Sim! O Steel Frame é amplamente usado em escritórios, lojas, clínicas, hospitais e edifícios comerciais. A velocidade de construção e a flexibilidade de layout são vantagens especialmente valorizadas no setor comercial.'
      },
      {
        question: 'O que é Light Steel Frame?',
        answer: 'Light Steel Frame é o sistema que usa perfis de aço leve - diferente do Steel Frame industrial que usa perfis pesados. É o sistema residencial e comercial de pequeno e médio porte mais comum. A KY Drywall é especialista em Light Steel Frame em Curitiba.'
      },
      {
        question: 'Steel Frame precisa de projeto de engenharia?',
        answer: 'Sim! O Steel Frame requer projeto estrutural assinado por engenheiro responsável. A KY Drywall assessora na elaboração do projeto e indicação de engenheiros parceiros para legalizar a construção corretamente.'
      },
      {
        question: 'O que vai dentro das paredes de Steel Frame?',
        answer: 'As paredes de Steel Frame são preenchidas com isolante térmico (lã de vidro ou lã de rocha), membranas impermeabilizantes, OSB ou placa cimentícia externamente e drywall internamente. O resultado é uma parede de alta performance.'
      },
      {
        question: 'Steel Frame enferruja?',
        answer: 'Os perfis de aço galvanizado usados no Steel Frame tem excelente resistência à corrosão. Com instalação correta, sem contato direto com água e umidade excessiva, os perfis mantêm a integridade estrutural por dezenas de anos.'
      },
      {
        question: 'Posso instalar revestimento cerâmico em parede de Steel Frame?',
        answer: 'Sim! Com placa cimentícia ou drywall RU e impermeabilização adequada o Steel Frame recebe cerâmica, porcelanato e qualquer revestimento normalmente.'
      },
      {
        question: 'O que é OSB e para que serve no Steel Frame?',
        answer: 'OSB (Oriented Strand Board) é uma placa de madeira prensada usada no fechamento externo do Steel Frame. Fornece travamento da estrutura, suporte para revestimento externo e barreira de vento. É um componente essencial no sistema.'
      },
      {
        question: 'Steel Frame aceita telha shingle?',
        answer: 'Sim! Telha shingle é um dos revestimentos de cobertura mais usados com Steel Frame. A estrutura leve do shingle é perfeitamente compatível com a estrutura do Steel Frame. A KY Drywall fornece e instala o sistema completo.'
      },
      {
        question: 'KY Drywall faz construção completa em Steel Frame em Curitiba?',
        answer: 'Sim! A KY Drywall oferece o projeto, fornecimento dos materiais, execução e acompanhamento de construções completas em Steel Frame em Curitiba e toda a região metropolitana. Orçamento gratuito e visita técnica sem custo.'
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
        answer: 'Construção a seco é qualquer método construtivo que não utiliza água, argamassa ou processos molhados. Inclui sistemas como drywall, steel frame, wood frame e painéis pré-fabricados. É mais rápida, limpa e sustentável que construção convencional.'
      },
      {
        question: 'Construção a seco é mais rápida que convencional?',
        answer: 'Sim! Construção a seco pode ser até 70% mais rápida que métodos convencionais. Não há tempo de cura de concreto ou argamassa, permitindo montagem contínua e simultânea de diferentes etapas da obra.'
      },
      {
        question: 'Construção a seco é mais cara?',
        answer: 'O custo direto pode ser similar ou ligeiramente superior, mas quando consideramos velocidade de execução, menor desperdício, redução de mão de obra e economia em fundações, a construção a seco geralmente tem melhor custo-benefício total.'
      },
      {
        question: 'Construção a seco é aprovada pela prefeitura de Curitiba?',
        answer: 'Sim! Construção a seco com projeto estrutural assinado por engenheiro responsável é totalmente legalizada e aprovada pela prefeitura de Curitiba. Segue normas ABNT NBR 15253 para steel frame e NBR 14715 para drywall.'
      },
      {
        question: 'O que é melhor - alvenaria ou drywall?',
        answer: 'Depende da aplicação. Drywall é superior em velocidade, isolamento acústico planejado, flexibilidade de reforma e acabamento. Alvenaria tem maior resistência a impactos e menor custo em algumas situações. Para divisórias internas, drywall é tecnicamente superior.'
      },
      {
        question: 'Posso mesclar construção a seco e alvenaria?',
        answer: 'Sim! É muito comum usar estrutura de concreto ou alvenaria estrutural com fechamentos internos em drywall. Esta combinação aproveita as vantagens de cada sistema - resistência estrutural da alvenaria e flexibilidade do drywall.'
      },
      {
        question: 'Construção a seco suporta móveis pesados?',
        answer: 'Sim! Com fixação adequada usando âncoras específicas ou reforços estruturais planejados, construção a seco suporta armários, prateleiras, TVs e qualquer mobiliário pesado. É essencial informar no projeto os pontos de carga.'
      },
      {
        question: 'Construção a seco é indicada para Curitiba?',
        answer: 'Absolutamente! O clima de Curitiba é ideal para construção a seco. Sistema permite excelente isolamento térmico para o frio intenso do inverno e não sofre com umidade quando usa materiais adequados como placas RU em áreas molhadas.'
      },
      {
        question: 'Qual a diferença entre Steel Frame e Wood Frame?',
        answer: 'Steel Frame usa perfis de aço galvanizado e Wood Frame usa madeira tratada. Steel Frame tem maior durabilidade, não apodrece, não sofre com cupins e é incombustível. Wood Frame pode ter custo menor em regiões com madeira abundante.'
      },
      {
        question: 'Construção a seco tem garantia?',
        answer: 'Sim! A KY Drywall oferece garantia nos serviços executados conforme contrato. Fabricantes de materiais também oferecem garantias específicas - placas de drywall tem garantia de fábrica e perfis metálicos tem durabilidade comprovada.'
      },
      {
        question: 'Posso financiar imóvel em Steel Frame?',
        answer: 'Sim! Bancos brasileiros financiam imóveis em steel frame normalmente através de programas como Minha Casa Minha Vida e financiamentos tradicionais. É necessário ter projeto aprovado e ART (Anotação de Responsabilidade Técnica) do engenheiro.'
      },
      {
        question: 'Construção a seco tem valor de revenda?',
        answer: 'Sim! Imóveis construídos com steel frame e drywall tem o mesmo valor de mercado que construções convencionais. Em alguns casos, características como melhor acabamento e isolamento podem até valorizar o imóvel.'
      },
      {
        question: 'Qual o tempo de execução de construção a seco?',
        answer: 'Uma casa de 100m² pode ficar pronta em 3 a 6 meses com steel frame, contra 12 a 18 meses da construção convencional. Divisórias em drywall podem ser instaladas em dias. A velocidade é uma das maiores vantagens do sistema.'
      },
      {
        question: 'Construção a seco tem certificação ABNT?',
        answer: 'Sim! Sistemas de construção a seco seguem normas ABNT rigorosas: NBR 15253 (Steel Frame), NBR 14715 e 15758 (Drywall), NBR 15575 (Desempenho de Edificações). A KY Drywall trabalha conforme todas as normas técnicas.'
      },
      {
        question: 'KY Drywall faz construção a seco residencial completa?',
        answer: 'Sim! A KY Drywall executa projetos completos residenciais e comerciais em Curitiba e região metropolitana. Oferecemos projeto técnico, fornecimento de materiais, execução e pós-obra. Agende visita técnica gratuita pelo WhatsApp.'
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
        answer: 'Telha shingle é uma cobertura composta por lâminas de asfalto modificado com grânulos minerais na superfície. Leve, flexível e com excelente acabamento estético. Muito popular em projetos modernos e construções em Steel Frame em Curitiba e região.'
      },
      {
        question: 'Telha shingle é resistente ao granizo?',
        answer: 'Sim! A telha shingle tem boa resistência ao granizo pelo material flexível que absorve impactos sem quebrar como telhas cerâmicas ou de concreto. Para regiões com granizo muito intenso existem opções de shingle com classificação de impacto mais alta.'
      },
      {
        question: 'Qual a vida útil da telha shingle?',
        answer: 'Telha shingle de qualidade tem vida útil de 20 a 30 anos conforme a marca e modelo. Marcas premium podem chegar a 50 anos de garantia. A KY Drywall trabalha apenas com marcas certificadas e de alta durabilidade.'
      },
      {
        question: 'Telha shingle é impermeável?',
        answer: 'Sim! Telha shingle é 100% impermeável quando instalada corretamente. O asfalto modificado cria barreira total contra água. Sistema inclui também manta asfáltica sob as telhas para dupla proteção.'
      },
      {
        question: 'Qual a inclinação mínima para telha shingle?',
        answer: 'A inclinação mínima recomendada é de 18% (aproximadamente 10 graus). Para inclinações menores são necessários sistemas especiais de impermeabilização. A KY Drywall avalia cada projeto para garantir instalação correta.'
      },
      {
        question: 'Telha shingle precisa de manutenção?',
        answer: 'A manutenção é mínima. Recomenda-se limpeza anual para remoção de folhas e detritos, e inspeção visual a cada 2 anos. Calhas devem ser limpas regularmente. Com manutenção básica a durabilidade é maximizada.'
      },
      {
        question: 'Qual o peso da telha shingle por m²?',
        answer: 'Telha shingle pesa aproximadamente 10 a 13 kg/m², muito mais leve que telha cerâmica (45kg/m²) ou concreto (50kg/m²). Este peso reduzido permite estruturas mais econômicas e é ideal para steel frame.'
      },
      {
        question: 'Telha shingle pode ser instalada sobre telha existente?',
        answer: 'Em alguns casos sim, mas não é o ideal. O melhor resultado é sempre com instalação sobre base de OSB ou compensado estrutural. A KY Drywall avalia tecnicamente cada situação para recomendar a melhor solução.'
      },
      {
        question: 'Qual a diferença entre shingle e telha cerâmica?',
        answer: 'Shingle é muito mais leve, tem instalação mais rápida, melhor impermeabilização e estética moderna. Telha cerâmica tem estética tradicional e maior resistência a altíssimas temperaturas. Shingle é tecnicamente superior em desempenho.'
      },
      {
        question: 'Telha shingle tem isolamento térmico?',
        answer: 'A telha shingle em si tem isolamento térmico moderado. Para melhor desempenho recomenda-se manta térmica sob as telhas e forro com isolamento. O sistema completo oferece excelente conforto térmico.'
      },
      {
        question: 'Qual o custo do m² de shingle?',
        answer: 'O custo varia conforme marca, modelo e complexidade do telhado. Incluindo material e instalação profissional, o investimento é competitivo com telhas premium. A KY Drywall oferece orçamento gratuito detalhado.'
      },
      {
        question: 'KY Drywall instala telha shingle em Curitiba?',
        answer: 'Sim! A KY Drywall é especialista em instalação de telha shingle em Curitiba e região metropolitana. Executamos desde pequenas coberturas até grandes projetos residenciais e comerciais. Equipe técnica certificada.'
      },
      {
        question: 'Quais marcas de shingle a KY Drywall trabalha?',
        answer: 'Trabalhamos com as melhores marcas do mercado brasileiro certificadas pelo INMETRO. Oferecemos várias opções de cores e modelos para cada tipo de projeto. Consulte nossos especialistas para recomendação específica.'
      },
      {
        question: 'Como limpar telha shingle?',
        answer: 'Limpeza com água e sabão neutro uma vez por ano é suficiente. Evite jato de alta pressão muito próximo que pode danificar os grânulos. Remova folhas e galhos regularmente. Não use produtos químicos agressivos.'
      },
      {
        question: 'Telha shingle pode ser usada em garagem?',
        answer: 'Sim! Telha shingle é excelente para garagens, pergolados e áreas de lazer. Oferece proteção total contra chuva, ótimo acabamento estético e instalação rápida. Muito usado em projetos modernos em Curitiba.'
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
        answer: 'Forro de PVC é um sistema de revestimento de teto formado por lâminas ou placas modulares de policloreto de vinila. É resistente à umidade, fácil de limpar, não propaga chamas e tem instalação rápida. Muito indicado para banheiros, cozinhas, lavanderias e áreas externas cobertas em Curitiba.'
      },
      {
        question: 'Forro PVC é resistente à umidade?',
        answer: 'Sim! PVC é 100% resistente à umidade e água. Não apodrece, não mofa e não se deforma com umidade. É a melhor opção para banheiros, cozinhas, lavanderias e áreas externas cobertas.'
      },
      {
        question: 'Forro PVC pode ser instalado em área externa?',
        answer: 'Sim, mas apenas em áreas cobertas sem exposição direta ao sol intenso. PVC pode amarelar e deformar com exposição solar prolongada. Para varandas e áreas cobertas é perfeito e muito durável.'
      },
      {
        question: 'Qual a diferença entre forro PVC e forro de drywall?',
        answer: 'PVC é mais resistente à umidade e mais fácil de limpar, ideal para áreas molhadas. Drywall oferece melhor isolamento acústico, permite sancas mais elaboradas e tem acabamento mais sofisticado. Ambos têm suas aplicações ideais.'
      },
      {
        question: 'Forro PVC aceita pintura?',
        answer: 'Tecnicamente sim, mas não é recomendado. O PVC já vem com acabamento de fábrica em diversas cores e a pintura pode descascar com o tempo. Se deseja mudança de cor, melhor optar por drywall ou substituir as réguas.'
      },
      {
        question: 'Como é feita a instalação de forro PVC?',
        answer: 'Instalação é feita com estrutura de madeira ou perfis metálicos fixados ao teto. As réguas de PVC encaixam-se uma na outra por sistema de macho e fêmea. Instalação é rápida e limpa, sem entulho significativo.'
      },
      {
        question: 'Forro PVC esquenta o ambiente?',
        answer: 'PVC tem baixo isolamento térmico. Para melhor conforto térmico recomenda-se manta térmica sobre o forro ou uso de telhas termoacústicas na cobertura. O conforto final depende do projeto completo do telhado.'
      },
      {
        question: 'Qual a vida útil do forro PVC?',
        answer: 'Com instalação correta e sem exposição solar direta, forro PVC dura 15 a 25 anos. Em áreas internas protegidas a durabilidade é ainda maior. Manutenção é mínima, apenas limpeza periódica.'
      },
      {
        question: 'Forro PVC modular é o mesmo que forro régua?',
        answer: 'Sim! São nomes diferentes para o mesmo produto. Réguas são as lâminas individuais que formam o forro. Sistema modular permite fácil acesso para manutenção de instalações acima do forro.'
      },
      {
        question: 'Quais cores de forro PVC estão disponíveis?',
        answer: 'As cores mais comuns são branco, marfim, amadeirado (diversas tonalidades de madeira) e cinza. Branco é o mais usado por ser atemporal e refletir melhor a luz. A KY Drywall tem diversas opções em estoque.'
      },
      {
        question: 'Forro PVC tem isolamento acústico?',
        answer: 'O isolamento acústico do PVC é limitado. Para projetos que exigem alto desempenho acústico, drywall com lã mineral é mais indicado. PVC é escolhido principalmente por resistência à umidade e facilidade de manutenção.'
      },
      {
        question: 'Como limpar forro de PVC?',
        answer: 'Limpeza simples com pano úmido e detergente neutro. Evite produtos abrasivos que podem arranhar. Para manchas difíceis pode-se usar esponja macia. A facilidade de limpeza é uma grande vantagem do PVC.'
      },
      {
        question: 'Forro PVC pode ser instalado em garagem?',
        answer: 'Sim! É muito usado em garagens pelo custo-benefício e facilidade de limpeza. Protege contra poeira, resiste a umidade e tem ótima durabilidade. Instalação rápida permite uso imediato do espaço.'
      },
      {
        question: 'KY Drywall instala forro PVC em Curitiba?',
        answer: 'Sim! A KY Drywall fornece material e instala forro PVC em Curitiba e região metropolitana. Equipe técnica especializada garante instalação rápida e acabamento perfeito. Solicite orçamento gratuito.'
      },
      {
        question: 'Qual o preço do m² de forro PVC?',
        answer: 'O preço varia conforme qualidade do PVC, cor escolhida e complexidade da instalação. É geralmente mais econômico que drywall. A KY Drywall oferece orçamento detalhado gratuito com todas as especificações.'
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
        answer: 'A instalação de drywall segue estas etapas: marcação e fixação das guias no piso e teto, instalação dos montantes verticais nos espaçamentos técnicos, passagem das instalações elétricas e hidráulicas, fixação das placas com parafusos específicos, acabamento das juntas com fita e massa, lixamento e preparação para pintura.'
      },
      {
        question: 'Quanto tempo leva a instalação de drywall?',
        answer: 'Uma parede divisória simples de 10m² pode ser instalada em 1 dia. Forro de 30m² leva aproximadamente 2 a 3 dias incluindo acabamento. Projetos completos dependem da complexidade, mas são sempre muito mais rápidos que alvenaria.'
      },
      {
        question: 'Drywall pode ser instalado em qualquer ambiente?',
        answer: 'Sim! Com a placa adequada para cada situação: ST para áreas secas, RU para áreas úmidas, RF para proteção contra fogo. Até áreas externas cobertas podem receber drywall com placas cimentícias. Consulte a KY Drywall para especificação correta.'
      },
      {
        question: 'Como é feita a manutenção de parede de drywall?',
        answer: 'Manutenção é mínima. Pequenos furos podem ser reparados com massa corrida. Trincas nas juntas são corrigidas com fita e massa específica. Limpeza com pano úmido é suficiente. Repintura segue os mesmos procedimentos de parede comum.'
      },
      {
        question: 'Como consertar furo em drywall?',
        answer: 'Furos pequenos (até 2cm): aplicar massa corrida, lixar e pintar. Furos médios (até 10cm): usar tela de reparo ou pedaço de placa com massa. Furos grandes: cortar em formato quadrado e inserir pedaço novo de placa fixado na estrutura.'
      },
      {
        question: 'Como consertar trinca em drywall?',
        answer: 'Abrir levemente a trinca com espátula, aplicar fita de papel ou fibra sobre a trinca, cobrir com massa para drywall em camadas finas, lixar após secagem completa e repintar. Trincas persistentes podem indicar movimentação estrutural a ser investigada.'
      },
      {
        question: 'Posso instalar drywall sobre parede existente?',
        answer: 'Sim! É possível fixar perfis sobre parede existente para melhorar isolamento acústico, térmico ou corrigir imperfeições. Técnica muito usada em reformas para evitar demolição e entulho. Reduz área útil em aproximadamente 5 a 10cm.'
      },
      {
        question: 'Como instalar TV na parede de drywall?',
        answer: 'Para TVs até 32": buchas metálicas específicas para drywall. Para TVs maiores: reforço estrutural com madeira ou perfil metálico adicional entre os montantes, ou fixação direta nos montantes metálicos identificados com detector eletrônico.'
      },
      {
        question: 'Como instalar prateleiras em drywall?',
        answer: 'Prateleiras leves (até 5kg): buchas metálicas para drywall. Prateleiras médias (até 20kg): âncoras metálicas ou fixação nos montantes. Prateleiras pesadas ou bibliotecas: reforço estrutural planejado com perfis ou madeira adicional.'
      },
      {
        question: 'Como instalar ar-condicionado em parede de drywall?',
        answer: 'É necessário reforço estrutural planejado na área onde será fixada a unidade interna. Perfis adicionais ou chapa de madeira entre os montantes distribuem o peso. Instalação deve ser feita por profissional que conheça sistemas de drywall.'
      },
      {
        question: 'Drywall pode ter piso vinílico ou cerâmico?',
        answer: 'Drywall não é usado em pisos. É sistema para paredes e forros. Para pisos existe o sistema de piso elevado que é diferente. Se pergunta é sobre parede de drywall receber cerâmica: sim, com placa RU e impermeabilização.'
      },
      {
        question: 'Drywall precisa de acabamento especial?',
        answer: 'O acabamento das juntas com fita e massa específica para drywall é obrigatório. Após lixamento, aplicar primer PVA antes da pintura. Massa corrida em toda a superfície é opcional mas recomendada para acabamento premium tipo "nível 5".'
      },
      {
        question: 'Qual a tinta ideal para drywall?',
        answer: 'Tintas acrílicas ou látex PVA são ideais. Para áreas úmidas usar tinta acrílica com fungicida. Evitar tintas muito líquidas que podem encharcar a placa. Aplicação com rolo de lã ou pistola. A KY Drywall recomenda marcas adequadas.'
      },
      {
        question: 'Como preparar drywall para pintura?',
        answer: 'Após instalação e tratamento de juntas: lixar toda superfície, limpar o pó completamente, aplicar primer PVA ou selador acrílico, aguardar secagem, aplicar massa corrida se desejado (opcional), lixar novamente, limpar e aplicar tinta.'
      },
      {
        question: 'O que é fita de tratamento para drywall?',
        answer: 'Fita especial aplicada sobre juntas entre placas antes da massa. Pode ser de papel microperfurado (mais comum) ou fibra de vidro. Reforça juntas evitando trincas futuras. É item obrigatório para acabamento técnico correto.'
      },
      {
        question: 'O que é massa para drywall?',
        answer: 'Massa específica para tratamento de juntas e fixações em drywall. Tem secagem mais rápida e menos retração que massa comum. Principais tipos: massa pronta em pasta ou massa em pó para misturar com água. Ambas têm excelente desempenho.'
      },
      {
        question: 'É possível desmontar e remontar drywall?',
        answer: 'Sim! Uma das grandes vantagens do drywall. Placas podem ser removidas com cuidado e reaproveitadas. Perfis metálicos são totalmente reaproveitáveis. Sistema permite reforma completa de layout sem demolição e com mínimo de resíduos.'
      },
      {
        question: 'Qual o espaçamento correto entre montantes?',
        answer: 'Espaçamento padrão é de 40cm ou 60cm entre eixos dos montantes, conforme a altura da parede e carga prevista. Para paredes até 2,80m altura usa-se geralmente 60cm. Projeto estrutural define espaçamento adequado para cada caso.'
      },
      {
        question: 'KY Drywall faz instalação ou só vende material?',
        answer: 'A KY Drywall oferece as duas opções! Você pode comprar apenas os materiais se tiver equipe própria, ou contratar nosso serviço completo de instalação com equipe técnica especializada. Consulte-nos para orçamento de ambas as modalidades.'
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
        answer: 'Sim! A KY Drywall oferece orçamento 100% gratuito e sem compromisso. Realizamos visita técnica ao seu projeto, fazemos o levantamento de materiais e entregamos proposta detalhada com valores, prazos e especificações técnicas.'
      },
      {
        question: 'Quanto custa o m² de drywall em Curitiba?',
        answer: 'O preço do m² de drywall varia conforme o tipo de sistema, número de camadas, tipo de placa e complexidade do projeto. A KY Drywall garante o melhor custo-benefício do mercado em Curitiba com orçamento detalhado e transparente.'
      },
      {
        question: 'KY Drywall é distribuidora ou instaladora?',
        answer: 'Somos ambos! A KY Drywall é distribuidora oficial de grandes marcas E também executa instalações com equipe técnica própria. Oferecemos desde venda de materiais avulsos até projetos completos chave na mão.'
      },
      {
        question: 'KY Drywall vende material e instala?',
        answer: 'Sim! Você pode optar apenas pela compra de materiais, apenas pela instalação (se já tiver o material), ou pelo serviço completo que geralmente oferece melhor custo-benefício e garantia integrada do sistema.'
      },
      {
        question: 'Como solicitar orçamento na KY Drywall?',
        answer: 'Formas de solicitar orçamento: WhatsApp (41) 99645-7421 com Carlos ou (41) 99906-7259 com Lucilene, telefone (41) 3528-4232, e-mail carlos@kydrywall.com.br ou lucilene@kydrywall.com.br, ou visita presencial na BR-277, 3641 - Cajuru.'
      },
      {
        question: 'Qual o horário de atendimento?',
        answer: 'Segunda a Sexta: 7h30 às 17h30 / Sábado: 7h30 às 12h00. Atendimento por WhatsApp pode ser feito fora deste horário com resposta no próximo dia útil. Loja física na BR-277 aberta nos horários informados.'
      },
      {
        question: 'Aceitam PIX e cartão?',
        answer: 'Sim! Aceitamos PIX, cartão de débito, cartão de crédito (consultar condições de parcelamento), transferência bancária, boleto bancário e dinheiro. Condições especiais para pagamento à vista. Consulte nossa equipe comercial.'
      },
      {
        question: 'Parcelam os serviços?',
        answer: 'Sim! Oferecemos condições especiais de parcelamento conforme o valor do projeto. Para obras maiores trabalhamos com cronograma de pagamento por etapas. Consulte Carlos ou Lucilene para condições personalizadas.'
      },
      {
        question: 'KY Drywall emite nota fiscal?',
        answer: 'Sim! Emitimos nota fiscal para todos os produtos e serviços. Somos empresa regularizada com CNPJ, totalmente legalizada e em conformidade com legislação tributária. Nota fiscal garante procedência e garantia dos produtos.'
      },
      {
        question: 'Tem garantia nos serviços?',
        answer: 'Sim! Serviços executados pela KY Drywall tem garantia contratual conforme acordo comercial. Materiais tem garantia de fábrica. Placas de drywall, perfis e componentes de marcas renomadas tem garantia comprovada de durabilidade.'
      },
      {
        question: 'Quais regiões de Curitiba atendem?',
        answer: 'Atendemos TODA Curitiba! Desde o Batel até o CIC, de Santa Felicidade ao Boqueirão. Fazemos entrega e instalação em todos os bairros de Curitiba com frota própria. Consulte frete para seu endereço específico.'
      },
      {
        question: 'KY Drywall atende fora de Curitiba?',
        answer: 'Sim! Atendemos toda Região Metropolitana de Curitiba: São José dos Pinhais, Pinhais, Colombo, Araucária, Campo Largo, Fazenda Rio Grande, Almirante Tamandaré, Piraquara e demais cidades. Consulte disponibilidade.'
      },
      {
        question: 'Como agendar visita técnica?',
        answer: 'Entre em contato por WhatsApp (41) 99645-7421 ou (41) 99906-7259, informe endereço e tipo de projeto. Agendamos visita técnica gratuita conforme agenda. Técnico avalia o local e retorna com orçamento detalhado em até 48h.'
      },
      {
        question: 'Quanto tempo leva para receberem o material após o pedido?',
        answer: 'Materiais em estoque: entrega em 24 a 48h em Curitiba e região. Materiais sob encomenda: 3 a 7 dias úteis conforme produto. Mantemos grande estoque de itens mais comuns para atendimento imediato. Retirada na loja é instantânea.'
      },
      {
        question: 'KY Drywall tem estoque para pronta entrega?',
        answer: 'Sim! Mantemos um dos maiores estoques de materiais para construção a seco de Curitiba. Placas de drywall, perfis Barbieri, parafusos, massas, fitas e acessórios disponíveis para retirada imediata ou entrega rápida. Visite nosso showroom!'
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
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: filteredSections.flatMap(section =>
      section.questions.map(q => ({
        '@type': 'Question',
        name: q.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: q.answer
        }
      }))
    )
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BASE_URL
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Perguntas Frequentes',
        item: `${BASE_URL}/faq`
      }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <EnhancedSEO
        title="119 Perguntas sobre Drywall e Steel Frame em Curitiba | KY Drywall"
        description="Respondemos as 119 perguntas mais frequentes sobre drywall, steel frame e construção a seco em Curitiba. Guia técnico completo da KY Drywall - a maior distribuidora de Curitiba. Orçamento grátis!"
        keywords="faq drywall, perguntas steel frame, duvidas construcao seco, drywall curitiba, steel frame curitiba, telha shingle, forro pvc"
        canonical={`${BASE_URL}/faq`}
        schema={[faqSchema, breadcrumbSchema]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#111] via-[#1a1a1a] to-[#111] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <pattern id="faqGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#faqGrid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link to="/" className="hover:text-[#D31219] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white">Perguntas Frequentes</span>
          </div>

          <div className="max-w-4xl">
            <span className="inline-block bg-[#D31219] text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.3em] mb-6 animate-pulse">
              Central de Conhecimento
            </span>

            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
              Perguntas Frequentes sobre <span className="text-[#D31219]">Drywall</span> e <span className="text-[#D31219]">Steel Frame</span>
            </h1>

            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              O guia técnico mais completo sobre construção a seco em Curitiba — respondido pelos especialistas da KY Drywall com mais de 10 anos de experiência no mercado.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { value: totalQuestions, label: 'Perguntas' },
                { value: '10+', label: 'Anos' },
                { value: FAQ_DATA.length, label: 'Temas' },
                { value: 'Curitiba', label: 'e RMC' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center">
                  <div className="text-2xl md:text-3xl font-black text-[#D31219]">{stat.value}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar pergunta..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl py-5 pl-16 pr-6 text-white placeholder-gray-400 focus:outline-none focus:border-[#D31219] transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-white border-b border-gray-200 sticky top-[68px] md:top-[72px] z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-4 no-scrollbar">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-xl font-black uppercase text-xs tracking-wider whitespace-nowrap transition-all ${
                activeCategory === 'all'
                  ? 'bg-[#D31219] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Todos ({totalQuestions})
            </button>
            {FAQ_DATA.map(section => (
              <button
                key={section.id}
                onClick={() => setActiveCategory(section.id)}
                className={`px-6 py-3 rounded-xl font-black uppercase text-xs tracking-wider whitespace-nowrap transition-all ${
                  activeCategory === section.id
                    ? 'bg-[#D31219] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {section.title.split(' - ')[0]} ({section.questions.length})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          {filteredSections.map((section: any) => (
            <div key={section.id} id={section.id} className="mb-16 scroll-mt-32">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-[#D31219] text-white rounded-2xl">
                  {section.icon}
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                    {section.title}
                  </h2>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mt-1">
                    {section.questions.length} {section.questions.length === 1 ? 'Pergunta' : 'Perguntas'}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {section.questions.map((item: FAQItem, idx: number) => {
                  const isOpen = openQuestions.has(`${section.id}-${idx}`);
                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:border-[#D31219]/20 transition-all"
                    >
                      <button
                        onClick={() => toggleQuestion(section.id, idx)}
                        aria-expanded={isOpen} aria-controls={`answer-${section.id}-${idx}`}
                        className="w-full flex items-start gap-4 p-6 text-left"
                      >
                        <span className="flex-shrink-0 w-8 h-8 bg-[#D31219]/10 text-[#D31219] rounded-lg flex items-center justify-center font-black text-sm">
                          {idx + 1}
                        </span>
                        <h3 className="flex-1 text-lg font-black text-gray-900 uppercase tracking-tight">
                          {item.question}
                        </h3>
                        <div className="flex-shrink-0">
                          {isOpen ? (
                            <ChevronUp className="text-[#D31219]" size={24} />
                          ) : (
                            <ChevronDown className="text-gray-400" size={24} />
                          )}
                        </div>
                      </button>

                      {(
                        <div hidden={!isOpen} id={`answer-${section.id}-${idx}`} className="px-6 pb-6">
                          <div className="pl-12 border-l-4 border-[#D31219]/20 ml-4">
                            <p className="text-gray-700 leading-relaxed pl-4">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {filteredSections.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">
                Nenhuma pergunta encontrada
              </h3>
              <p className="text-gray-600 mb-8">
                Tente buscar com outras palavras ou entre em contato conosco
              </p>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá! Tenho uma dúvida que não está no FAQ`}
                className="inline-flex items-center gap-3 bg-green-600 text-white font-black px-8 py-4 rounded-xl hover:bg-green-700 transition-all"
              >
                <MessageCircle size={20} /> Falar com Especialista
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              Artigos Técnicos sobre <span className="text-[#D31219]">Construção a Seco</span>
            </h2>
            <p className="text-gray-600 font-medium">
              Conteúdo especializado para seu projeto em Curitiba
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {BLOG_ARTICLES.map((article, idx) => (
              <Link
                key={idx}
                to={article.link}
                className="group bg-gray-50 rounded-3xl p-8 hover:bg-[#D31219] hover:text-white transition-all duration-500 border-2 border-transparent hover:border-[#D31219]"
              >
                <div className="w-12 h-12 bg-[#D31219] group-hover:bg-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen size={24} className="text-white group-hover:text-[#D31219]" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight leading-tight group-hover:text-white">
                  {article.title}
                </h3>
                <div className="mt-6 flex items-center gap-2 text-sm font-black uppercase text-[#D31219] group-hover:text-white">
                  Ler artigo <ArrowUp size={16} className="rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-[#111] text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
            Não encontrou sua <span className="text-[#D31219]">resposta?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Nossa equipe técnica está pronta para atender você com assessoria especializada
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá! Vim do FAQ e tenho uma dúvida`}
              className="bg-[#D31219] text-white font-black px-10 py-6 rounded-2xl flex items-center justify-center gap-3 hover:bg-white hover:text-[#D31219] transition-all shadow-xl"
            >
              <MessageCircle size={22} /> WhatsApp Direto
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
              className="bg-white/10 text-white font-black px-10 py-6 rounded-2xl flex items-center justify-center gap-3 border-2 border-white/20 hover:bg-white/20 transition-all"
            >
              <Phone size={22} /> {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 bg-[#D31219] text-white p-4 rounded-full shadow-2xl hover:bg-black transition-all z-50 animate-bounce"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default FAQPage;
