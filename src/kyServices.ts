export const kyGroups = {
  coberturas: { slug:'coberturas-e-telhados', title:'Coberturas e telhados', intro:'Planeje estruturas em Steel Frame, telhados embutidos, telhas sanduíche e reformas. Compare o escopo e organize sua lista antes de comprar na região de Curitiba.', clusters:['estrutura','embutido','isolamento-telhado','drenagem','cobertura-comercial'] },
  drywall: { slug:'drywall-gesso-e-fechamentos', title:'Drywall, gesso e sistemas de fechamento', intro:'Compare paredes, forros, sancas, isolamento e fechamentos externos. Saiba o que especificar e quais medidas reunir para uma cotação.', clusters:['paredes','forro','isolamento-parede','fachada'] }
} as const;
export type KyGroup = keyof typeof kyGroups;
export type KyRow = [slug:string,title:string,cluster:string,intro:string,request:string,question:string,answer:string];
export const kyRows:Record<KyGroup,KyRow[]> = {
  "coberturas": [
    [
      "cobertura-em-steel-frame",
      "Cobertura em Steel Frame",
      "estrutura",
      "O sistema inclui apoios, perfis, ligações e camadas de proteção, além da telha. Confira quais peças pertencem à estrutura e quais são apenas fechamentos.",
      "Corte da cobertura com vãos e apoios, tipo de telha e local da obra",
      "Qual a diferença entre perfis estruturais e perfis para drywall?",
      "Perfis para divisórias não substituem componentes estruturais. Informe ao atendimento a especificação do projeto para evitar comprar peças visualmente parecidas."
    ],
    [
      "estrutura-metalica-para-telhado",
      "Estrutura metálica para telhado",
      "estrutura",
      "Compare perfis leves e soluções metálicas convencionais pelo vão, pelos apoios existentes e pelas condições de montagem. Uma troca de material sem cálculo pode alterar as reações nos pilares e paredes.",
      "Croqui com espaçamentos entre apoios, acesso para descarga e desenhos disponíveis",
      "Posso comparar propostas só pelo peso do aço?",
      "Não. Compare ligações, proteção contra corrosão e o escopo de transporte e montagem, além do peso dos perfis."
    ],
    [
      "telhado-steel",
      "Telhado em Steel Frame",
      "estrutura",
      "A estrutura leve e a telha precisam funcionar juntas. Largura útil, inclinação e fixações variam conforme a cobertura escolhida e não devem ser improvisadas após a compra.",
      "Modelo de telha, inclinação prevista e referência de base ou subcobertura",
      "Qual telha combina com a estrutura?",
      "A escolha depende da inclinação, das cargas e da base prevista. Consulte projeto e fabricante antes de comprar ou trocar a telha."
    ],
    [
      "telhado-embutido",
      "Telhado embutido",
      "embutido",
      "A platibanda esconde a cobertura, mas não elimina a necessidade de inclinação, drenagem e acesso. O desenho precisa indicar por onde a água sai e como fazer manutenção.",
      "Corte da platibanda, posição dos condutores e fotos dos pontos de acesso",
      "Por que prever extravasor?",
      "Ele oferece um caminho de segurança se o escoamento principal obstruir, quando previsto e dimensionado no projeto."
    ],
    [
      "telha-sanduiche",
      "Telhado com telha sanduíche",
      "isolamento-telhado",
      "O painel combina faces e um núcleo; a especificação depende de acabamento, exposição, forma de união e inclinação. Compare placas pela área útil, não só pela largura da peça.",
      "Modelo ou desenho do perfil, vãos, inclinação e acabamento interno desejado",
      "Toda telha sanduíche tem o mesmo núcleo?",
      "Não. Compare o núcleo, a ficha técnica, a reação ao fogo quando aplicável e os acessórios do sistema."
    ],
    [
      "cobertura-termoacustica",
      "Cobertura termoacústica",
      "isolamento-telhado",
      "O desconforto provocado por calor ou chuva nem sempre tem a mesma origem. Uma cobertura termoacústica deve ser avaliada junto com o forro, a ventilação e os arremates.",
      "Área da cobertura, incômodo principal e existência de forro interno",
      "A telha resolve sozinha o ruído da chuva?",
      "Nem sempre. Fixação, apoios, forro e frestas interferem no resultado; confira a composição completa."
    ],
    [
      "cobertura-isolamento-termico",
      "Cobertura com isolamento térmico",
      "isolamento-telhado",
      "A posição do isolante depende da composição da cobertura. Em locais sujeitos a condensação, consulte também ventilação, passagem de vapor e continuidade nas bordas.",
      "Fotos do espaço acima do forro, espessuras disponíveis e onde ocorre o desconforto",
      "Como evitar pontos frios junto a apoios?",
      "Detalhe a continuidade do isolamento e os encontros com a estrutura. A solução depende do sistema previsto."
    ],
    [
      "aticos-e-sotaos",
      "Construção de áticos e sótãos",
      "estrutura",
      "Antes de pensar no acabamento, verifique se o espaço pode receber ocupação ou apenas inspeção. Piso, acesso, ventilação e pé-direito podem limitar o uso pretendido.",
      "Uso pretendido, corte com alturas e informações sobre a laje ou estrutura existente",
      "Posso transformar forro em piso de sótão?",
      "Não presuma que o forro suporta cargas de uso. Um profissional habilitado deve avaliar apoio, acesso e estrutura."
    ],
    [
      "reforma-de-telhados",
      "Reforma de telhados",
      "drenagem",
      "Uma mancha no teto não indica sozinha onde a água entrou. O diagnóstico distingue telhas deslocadas, falhas nos encontros e vazamentos na rede de drenagem antes de comprar peças.",
      "Fotos feitas ao nível do solo, região das manchas e histórico de temporais ou reparos",
      "Vale aplicar selante para encerrar a infiltração?",
      "Primeiro identifique a origem. Selante em uma junta aparente não resolve telha quebrada, arremate inadequado ou calha que transborda."
    ],
    [
      "substituicao-de-coberturas",
      "Substituição de coberturas",
      "drenagem",
      "Trocar a cobertura inteira exige verificar o peso da solução nova, o estado dos apoios e a proteção temporária do imóvel entre retirada e montagem.",
      "Tipo de telha atual, fotos acessíveis dos apoios e quais ambientes precisam continuar em uso",
      "A telha nova pode usar as mesmas fixações?",
      "O padrão de fixação deve ser conferido para o produto novo e para os apoios existentes. Não considere as furações antigas como referência suficiente."
    ],
    [
      "estrutura-leve-para-cobertura",
      "Estrutura leve para cobertura",
      "estrutura",
      "Menor peso não dispensa dimensionamento. Em ampliações e instalações com acesso difícil, confira peças transportáveis, sequência de montagem e condições dos apoios.",
      "Largura das passagens, desníveis, vãos projetados e logística de entrega",
      "O menor peso facilita apoiar no imóvel existente?",
      "Pode facilitar a logística, mas a compatibilidade com os apoios depende da avaliação das cargas e das ligações."
    ],
    [
      "coberturas-comerciais",
      "Coberturas comerciais",
      "cobertura-comercial",
      "Em lojas e galpões, pense em interferências com letreiros, ventilação, luminárias e circulação de clientes. Planeje setores de trabalho para reduzir a exposição do interior.",
      "Horários de funcionamento, fotos de interferências e extensão aproximada da cobertura",
      "Dá para reformar mantendo o comércio aberto?",
      "Depende da proteção e da separação possível entre obra e público; o plano operacional precisa desse diagnóstico."
    ],
    [
      "coberturas-residenciais",
      "Coberturas residenciais",
      "isolamento-telhado",
      "Em casas, considere incidência solar, beirais, vizinhos e os pontos de escoamento antes de escolher o acabamento. A cobertura precisa continuar acessível para inspeções futuras.",
      "Planta ou croqui, preferência de acabamento e ambiente afetado pelo calor ou infiltração",
      "O que devo decidir antes de escolher a cor ou o material?",
      "Confirme inclinação, estrutura e formato da drenagem. Depois compare materiais compatíveis com as prioridades de manutenção e conforto."
    ],
    [
      "rufos-e-calhas",
      "Rufos e calhas",
      "drenagem",
      "Rufos protegem encontros da telha com paredes e platibandas; calhas coletam e encaminham água. A cotação precisa distinguir formatos, seções e conexões.",
      "Medidas dos encontros, área drenada e pontos de descarga existentes",
      "Um rufo genérico serve em qualquer encontro?",
      "Não. A geometria deve acompanhar o tipo de telha, o sentido da água e o detalhe de fixação ao suporte."
    ],
    [
      "cobertura-para-ampliacao",
      "Cobertura para ampliação de imóveis",
      "estrutura",
      "O ponto mais delicado é a transição entre construção antiga e nova. Compare níveis, drenagem e movimentação dos dois sistemas antes de especificar as peças.",
      "Fotos da junção, medidas da ampliação e restrições de altura ou acessibilidade",
      "É seguro descarregar a água do trecho novo na calha antiga?",
      "Não presuma capacidade disponível. A drenagem deve considerar a área adicional, a capacidade da calha e o destino da água."
    ]
  ],
  "drywall": [
    [
      "drywall",
      "Instalação de drywall",
      "paredes",
      "Uma instalação começa pela definição de parede ou forro, altura de trabalho, interferências e acabamento. A lista de compra deve separar chapas, perfis, fixações e insumos para juntas.",
      "Planta com medidas, ambiente úmido ou seco e finalidade do fechamento",
      "Posso cotar somente pela metragem?",
      "A área ajuda, mas alturas, aberturas, reforços e tipo de chapa alteram quantitativos e mão de obra."
    ],
    [
      "paredes-em-drywall",
      "Paredes em drywall",
      "paredes",
      "Ao definir uma parede, marque suportes para armários, bancadas ou equipamentos antes de fechar as chapas. Depois, coloque essas posições no desenho de instalações.",
      "Local e peso dos itens fixados, posição de tomadas e existência de portas",
      "Preciso reforçar uma parede para receber armário?",
      "O reforço depende da carga e do sistema de fixação. Identifique os pontos antes do fechamento para escolher a solução."
    ],
    [
      "divisorias-em-drywall",
      "Divisórias em drywall",
      "paredes",
      "Uma divisória para criar dois ambientes precisa considerar porta, circulação, ventilação e iluminação resultante. Em salas comerciais, verifique também as regras do imóvel.",
      "Medidas e uso dos dois novos ambientes, posição da porta e necessidade de privacidade",
      "A divisória termina no forro existente?",
      "Pode haver exigências de estabilidade, acústica ou desempenho que demandem outro detalhe. Mostre a estrutura acima do forro."
    ],
    [
      "forro-de-drywall",
      "Forro de drywall",
      "forro",
      "Um forro contínuo de drywall tem estrutura própria de suspensão. Compatibilize luminárias, grelhas, inspeções e outros equipamentos antes de marcar o nível.",
      "Pé-direito mais baixo, pontos de iluminação e posição das instalações que exigem inspeção",
      "O forro pode sustentar equipamentos?",
      "Não trate o acabamento como apoio universal. Equipamentos e cargas precisam de sustentação conforme a especificação."
    ],
    [
      "forro-de-gesso",
      "Forro de gesso",
      "forro",
      "Quando se fala em forro de gesso, é importante identificar se o projeto prevê placas de gesso convencionais ou chapas acartonadas. Os sistemas não têm os mesmos componentes.",
      "Tipo existente ou pretendido, área do ambiente e pontos acima do teto",
      "Posso usar o mesmo material para consertar qualquer forro de gesso?",
      "Primeiro identifique o sistema existente e a causa do dano; só então escolha peças e acabamento compatíveis."
    ],
    [
      "gesso-rebaixado",
      "Gesso rebaixado",
      "forro",
      "O rebaixo pode esconder tubulações e definir ambientes. A menor altura livre deve ser checada junto a janelas, portas e pontos de ar-condicionado.",
      "Alturas disponíveis, trechos a esconder e aberturas próximas",
      "O rebaixo precisa cobrir todo o cômodo?",
      "Não. Um trecho localizado pode bastar, desde que o encontro com o teto e a manutenção das instalações sejam detalhados."
    ],
    [
      "sancas-de-gesso",
      "Sancas de gesso",
      "forro",
      "A sanca muda a leitura do teto e pode criar bordas ou nichos. Ao definir o perfil, verifique proporção do cômodo e como a peça termina perto de cortinas e armários.",
      "Fotos de encontro com cortinas, altura livre e largura desejada da sanca",
      "Qual a diferença entre sanca aberta e fechada?",
      "Na aberta, um recuo fica visível e pode receber iluminação indireta. Na fechada, o acabamento cobre o vão e pode receber spots definidos no projeto."
    ],
    [
      "sancas-com-led",
      "Sancas com iluminação LED",
      "forro",
      "Para não enxergar pontos de luz indesejados, alinhe fita, perfil e difusor com a posição real de observação. Deixe a fonte acessível e separe instalação elétrica do acabamento.",
      "Comprimento, efeito de luz, tipo de acionamento e localização prevista da fonte",
      "A fonte do LED pode ficar selada atrás do gesso?",
      "Não é uma boa premissa. Preveja acesso e ventilação conforme os equipamentos e o projeto elétrico."
    ],
    [
      "rebaixamento-de-teto",
      "Rebaixamento de teto",
      "forro",
      "Rebaixar o teto é uma decisão de altura e compatibilização, não apenas de material. Compare as alternativas antes de encomendar luminárias, portas ou móveis altos.",
      "Pé-direito medido em vários pontos, interferências e especificações de portas e armários",
      "Quanto se perde de altura?",
      "Depende da estrutura, das instalações e do acabamento. A altura não deve ser estimada só pela espessura da chapa."
    ],
    [
      "paredes-com-isolamento-acustico",
      "Paredes com isolamento acústico",
      "isolamento-parede",
      "Para reduzir transmissão entre ambientes, avalie composição da parede, som que chega por portas e dutos e frestas no perímetro. Uma chapa adicional não corrige todos os caminhos do som.",
      "Origem do ruído, ambientes vizinhos e passagens de portas, dutos e tomadas",
      "Lã mineral resolve a conversa ouvida entre salas?",
      "Pode integrar o sistema, mas desempenho depende de chapas, estrutura, vedação e caminhos laterais. Não há redução universal."
    ],
    [
      "isolamento-termico",
      "Isolamento térmico",
      "isolamento-parede",
      "Defina se o calor vem da cobertura, parede ou janelas. O isolamento deve ser compatível com umidade, espessura disponível e as demais camadas do fechamento.",
      "Horário do desconforto, orientação do ambiente e camadas existentes",
      "Basta colocar o isolante mais grosso?",
      "Não. Continuidade, modelagem da umidade e materiais ao redor influenciam a escolha e o resultado."
    ],
    [
      "isolamento-termoacustico",
      "Isolamento termoacústico",
      "isolamento-parede",
      "Calor e ruído são critérios diferentes. Pré-defina qual incômodo tem prioridade e peça soluções que sejam verificáveis na composição completa do fechamento.",
      "Origem do calor e do som, espessuras disponíveis e prioridade entre conforto e espaço",
      "Uma ficha do enchimento comprova o desempenho da parede?",
      "Não sozinha. O conjunto montado deve ser avaliado conforme materiais, espessuras, fixações e vedação do projeto."
    ],
    [
      "fechamento-externo-glasroc",
      "Fechamento externo em Glasroc",
      "fachada",
      "A escolha de uma placa da linha Glasroc para fachada depende do produto exato e de sua aplicação aprovada. Inclua proteção das juntas, barreiras e detalhes de encontro definidos pelo sistema.",
      "Modelo de placa indicado, altura da fachada, exposição e recortes de janelas",
      "Glasroc é sempre o acabamento final da fachada?",
      "Não. Consulte a ficha da variante e as camadas de proteção e revestimento previstas pelo sistema."
    ],
    [
      "fechamento-placas-cimenticias",
      "Fechamento com placas cimentícias",
      "fachada",
      "Uma placa cimentícia requer especificação de espessura, perfis, fixações e acabamento. Na fachada, encontros, cantos, juntas e proteção contra água precisam aparecer nos detalhes da obra.",
      "Modelo e espessura previstos, desenho dos vãos e acabamento externo",
      "A placa cimentícia impermeabiliza sozinha?",
      "Não. O controle de água depende das camadas de proteção, juntas e arremates da composição."
    ],
    [
      "tratamento-de-juntas",
      "Tratamento de juntas",
      "fachada",
      "Uma junta com falha pode refletir movimentação, suporte inadequado, umidade ou material incompatível. Faça o diagnóstico antes de repor fita e massa.",
      "Tipo de placa, foto próxima e geral da junta e quando o problema reapareceu",
      "Posso trocar fita por selante em todas as juntas?",
      "Não. Use o detalhe do sistema especificado; juntas de movimentação e juntas regulares não pedem o mesmo tratamento."
    ],
    [
      "revestimentos-construcao-a-seco",
      "Revestimentos para construção a seco",
      "fachada",
      "Antes de escolher tinta, cerâmica ou acabamento de fachada, confira a base, a preparação e o peso admissível do conjunto. Áreas molhadas têm requisitos próprios de proteção.",
      "Acabamento pretendido, local de aplicação e base ou chapa especificada",
      "Posso aplicar o mesmo revestimento no interior e no exterior?",
      "Confirme indicação do produto e compatibilidade de toda a composição; exposição, umidade e movimentação mudam o detalhe."
    ]
  ]
};
export const kyServicePath=(slug:string)=>'/servicos/'+slug;
export const kyExtraRoutes=Object.values(kyGroups).map(group=>kyServicePath(group.slug)).concat(Object.values(kyRows).flat().map(row=>kyServicePath(row[0])));
export const isKySpecialty=(path:string)=>kyExtraRoutes.includes(path.replace(/\/+$/,''));
export const kyClusterLabel:Record<string,string>={
 estrutura:'Estrutura e apoios',embutido:'Telhado embutido','isolamento-telhado':'Camadas e conforto',drenagem:'Reforma e escoamento','cobertura-comercial':'Imóveis comerciais',paredes:'Paredes e divisórias',forro:'Forros, sancas e iluminação','isolamento-parede':'Isolamento acústico e térmico',fachada:'Placas externas, juntas e acabamentos'
};
export const kyImageAlt:Record<string,string>={
 estrutura:'Cobertura metálica apoiada em pilares diante de uma loja','isolamento-telhado':'Fachada de galpão com painéis metálicos frisados',drenagem:'Telhado residencial metálico com calha no beiral e rufo junto à parede','cobertura-comercial':'Cobertura metálica apoiada em pilares diante de uma loja',embutido:'Residência com platibanda que esconde a cobertura',paredes:'Divisória interna em drywall em montagem, com passagem de porta e perfis metálicos aparentes',forro:'Sanca com iluminação indireta de LED em uma recepção moderna','isolamento-parede':'Parede interna parcialmente aberta com material isolante entre os perfis',fachada:'Fachada comercial ilustrativa em reforma com placas externas e estrutura metálica à vista'
};
