export interface RegionalPlace { name: string; slug: string; kind: string; sourceTitle: string; sourceUrl: string; note: string }
export interface RegionalMunicipality { name: string; slug: string; summary: string; coverage: string; sources: {title: string; url: string}[]; places: RegionalPlace[] }
export const checkedDate = '2026-11-04';
export const municipalities: RegionalMunicipality[] = [
  {
    "name": "Curitiba",
    "slug": "curitiba",
    "summary": "Curitiba integra a Região Metropolitana de Curitiba, conforme a relação de municípios da AMEP.",
    "coverage": "Os 75 bairros oficiais estão representados. Nomes populares e subdivisões não constituem uma lista exaustiva; as páginas anteriores do site foram preservadas.",
    "sources": [
      {
        "title": "AMEP: municípios da Região Metropolitana de Curitiba",
        "url": "https://www.amep.pr.gov.br/Pagina/Sobre-RM-de-Curitiba"
      },
      {
        "title": "Prefeitura de Curitiba: bairros por regional",
        "url": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663"
      }
    ],
    "places": [
      {
        "name": "Abranches",
        "slug": "abranches",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Água Verde",
        "slug": "agua-verde",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Ahú",
        "slug": "ahu",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Alto Boqueirão",
        "slug": "alto-boqueirao",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Alto da Glória",
        "slug": "alto-da-gloria",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Alto da Rua XV",
        "slug": "alto-da-rua-xv",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": "Também referido como Alto da XV na relação municipal."
      },
      {
        "name": "Atuba",
        "slug": "atuba",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Augusta",
        "slug": "augusta",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Bacacheri",
        "slug": "bacacheri",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Bairro Alto",
        "slug": "bairro-alto",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Barreirinha",
        "slug": "barreirinha",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Batel",
        "slug": "batel",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Bigorrilho",
        "slug": "bigorrilho",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Boa Vista",
        "slug": "boa-vista",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Bom Retiro",
        "slug": "bom-retiro",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Boqueirão",
        "slug": "boqueirao",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Butiatuvinha",
        "slug": "butiatuvinha",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Cabral",
        "slug": "cabral",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Cachoeira",
        "slug": "cachoeira",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Cajuru",
        "slug": "cajuru",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Campina do Siqueira",
        "slug": "campina-do-siqueira",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Campo Comprido",
        "slug": "campo-comprido",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": "A relação municipal distribui o bairro entre as regionais Portão e Santa Felicidade."
      },
      {
        "name": "Campo de Santana",
        "slug": "campo-de-santana",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Capão Raso",
        "slug": "capao-raso",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Capão da Imbuia",
        "slug": "capao-da-imbuia",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Cascatinha",
        "slug": "cascatinha",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Caximba",
        "slug": "caximba",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Centro",
        "slug": "centro",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Centro Cívico",
        "slug": "centro-civico",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Cidade Industrial",
        "slug": "cidade-industrial",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Cristo Rei",
        "slug": "cristo-rei",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Fanny",
        "slug": "fanny",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Fazendinha",
        "slug": "fazendinha",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Ganchinho",
        "slug": "ganchinho",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Guabirotuba",
        "slug": "guabirotuba",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Guaíra",
        "slug": "guaira",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Hauer",
        "slug": "hauer",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Hugo Lange",
        "slug": "hugo-lange",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Jardim Botânico",
        "slug": "jardim-botanico",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Jardim Social",
        "slug": "jardim-social",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Jardim das Américas",
        "slug": "jardim-das-americas",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Juvevê",
        "slug": "juveve",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Lamenha Pequena",
        "slug": "lamenha-pequena",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Lindóia",
        "slug": "lindoia",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Mercês",
        "slug": "merces",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Mossunguê",
        "slug": "mossungue",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Novo Mundo",
        "slug": "novo-mundo",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Orleans",
        "slug": "orleans",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Parolin",
        "slug": "parolin",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Pilarzinho",
        "slug": "pilarzinho",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Pinheirinho",
        "slug": "pinheirinho",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Portão",
        "slug": "portao",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Prado Velho",
        "slug": "prado-velho",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Rebouças",
        "slug": "reboucas",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Riviera",
        "slug": "riviera",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Santa Cândida",
        "slug": "santa-candida",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Santa Felicidade",
        "slug": "santa-felicidade",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Santa Quitéria",
        "slug": "santa-quiteria",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Santo Inácio",
        "slug": "santo-inacio",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Seminário",
        "slug": "seminario",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Sítio Cercado",
        "slug": "sitio-cercado",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "São Braz",
        "slug": "sao-braz",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "São Francisco",
        "slug": "sao-francisco",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "São João",
        "slug": "sao-joao",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "São Lourenço",
        "slug": "sao-lourenco",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "São Miguel",
        "slug": "sao-miguel",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Taboão",
        "slug": "taboao",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Tarumã",
        "slug": "taruma",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Tatuquara",
        "slug": "tatuquara",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Tingui",
        "slug": "tingui",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Uberaba",
        "slug": "uberaba",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Umbará",
        "slug": "umbara",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Vila Izabel",
        "slug": "vila-izabel",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Vista Alegre",
        "slug": "vista-alegre",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      },
      {
        "name": "Xaxim",
        "slug": "xaxim",
        "kind": "Bairro oficial",
        "sourceTitle": "Prefeitura de Curitiba: bairros por regional",
        "sourceUrl": "https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663",
        "note": ""
      }
    ]
  },
  {
    "name": "Adrianópolis",
    "slug": "adrianopolis",
    "summary": "Adrianópolis integra a Região Metropolitana de Curitiba, conforme a relação de municípios da AMEP.",
    "coverage": "Levantamento em ampliação. Não é uma lista exaustiva de bairros, vilas, loteamentos ou nomes populares.",
    "sources": [
      {
        "title": "AMEP: municípios da Região Metropolitana de Curitiba",
        "url": "https://www.amep.pr.gov.br/Pagina/Sobre-RM-de-Curitiba"
      },
      {
        "title": "Prefeitura: roteiro de atendimento em localidades, 2026",
        "url": "https://www.adrianopolis.pr.gov.br/noticiasView/73096_A-Secretaria-Municipal-de-Agricultura,-Abastecimento-e-Meio-Ambiente,-segue-realizando-a-imunizacao-de-caes-e-gatos-nos-.html"
      },
      {
        "title": "SETI: comunidades de Adrianópolis",
        "url": "https://www.seti.pr.gov.br/Noticia/Quilombolas-organizam-se-e-formalizam-denuncias-ao-MP"
      }
    ],
    "places": [
      {
        "name": "Bairro dos Pimentas",
        "slug": "bairro-dos-pimentas",
        "kind": "Comunidade documentada em fonte estadual",
        "sourceTitle": "SETI: comunidades de Adrianópolis",
        "sourceUrl": "https://www.seti.pr.gov.br/Noticia/Quilombolas-organizam-se-e-formalizam-denuncias-ao-MP",
        "note": ""
      },
      {
        "name": "Barra Grande",
        "slug": "barra-grande",
        "kind": "Localidade mencionada pela Prefeitura",
        "sourceTitle": "Prefeitura: roteiro de atendimento em localidades, 2026",
        "sourceUrl": "https://www.adrianopolis.pr.gov.br/noticiasView/73096_A-Secretaria-Municipal-de-Agricultura,-Abastecimento-e-Meio-Ambiente,-segue-realizando-a-imunizacao-de-caes-e-gatos-nos-.html",
        "note": ""
      },
      {
        "name": "Barrinha",
        "slug": "barrinha",
        "kind": "Localidade mencionada pela Prefeitura",
        "sourceTitle": "Prefeitura: roteiro de atendimento em localidades, 2026",
        "sourceUrl": "https://www.adrianopolis.pr.gov.br/noticiasView/73096_A-Secretaria-Municipal-de-Agricultura,-Abastecimento-e-Meio-Ambiente,-segue-realizando-a-imunizacao-de-caes-e-gatos-nos-.html",
        "note": ""
      },
      {
        "name": "Capelinha",
        "slug": "capelinha",
        "kind": "Localidade mencionada pela Prefeitura",
        "sourceTitle": "Prefeitura: roteiro de atendimento em localidades, 2026",
        "sourceUrl": "https://www.adrianopolis.pr.gov.br/noticiasView/73096_A-Secretaria-Municipal-de-Agricultura,-Abastecimento-e-Meio-Ambiente,-segue-realizando-a-imunizacao-de-caes-e-gatos-nos-.html",
        "note": ""
      },
      {
        "name": "Córrego das Moças",
        "slug": "corrego-das-mocas",
        "kind": "Comunidade documentada em fonte estadual",
        "sourceTitle": "SETI: comunidades de Adrianópolis",
        "sourceUrl": "https://www.seti.pr.gov.br/Noticia/Quilombolas-organizam-se-e-formalizam-denuncias-ao-MP",
        "note": ""
      },
      {
        "name": "Córrego do Franco",
        "slug": "corrego-do-franco",
        "kind": "Comunidade documentada em fonte estadual",
        "sourceTitle": "SETI: comunidades de Adrianópolis",
        "sourceUrl": "https://www.seti.pr.gov.br/Noticia/Quilombolas-organizam-se-e-formalizam-denuncias-ao-MP",
        "note": ""
      },
      {
        "name": "Descampado",
        "slug": "descampado",
        "kind": "Localidade mencionada pela Prefeitura",
        "sourceTitle": "Prefeitura: roteiro de atendimento em localidades, 2026",
        "sourceUrl": "https://www.adrianopolis.pr.gov.br/noticiasView/73096_A-Secretaria-Municipal-de-Agricultura,-Abastecimento-e-Meio-Ambiente,-segue-realizando-a-imunizacao-de-caes-e-gatos-nos-.html",
        "note": ""
      },
      {
        "name": "Estreitinho",
        "slug": "estreitinho",
        "kind": "Comunidade documentada em fonte estadual",
        "sourceTitle": "SETI: comunidades de Adrianópolis",
        "sourceUrl": "https://www.seti.pr.gov.br/Noticia/Quilombolas-organizam-se-e-formalizam-denuncias-ao-MP",
        "note": ""
      },
      {
        "name": "João Surá",
        "slug": "joao-sura",
        "kind": "Comunidade documentada em fonte estadual",
        "sourceTitle": "SETI: comunidades de Adrianópolis",
        "sourceUrl": "https://www.seti.pr.gov.br/Noticia/Quilombolas-organizam-se-e-formalizam-denuncias-ao-MP",
        "note": ""
      },
      {
        "name": "Pinhalzinho",
        "slug": "pinhalzinho",
        "kind": "Localidade mencionada pela Prefeitura",
        "sourceTitle": "Prefeitura: roteiro de atendimento em localidades, 2026",
        "sourceUrl": "https://www.adrianopolis.pr.gov.br/noticiasView/73096_A-Secretaria-Municipal-de-Agricultura,-Abastecimento-e-Meio-Ambiente,-segue-realizando-a-imunizacao-de-caes-e-gatos-nos-.html",
        "note": ""
      },
      {
        "name": "Porto Velho",
        "slug": "porto-velho",
        "kind": "Comunidade documentada em fonte estadual",
        "sourceTitle": "SETI: comunidades de Adrianópolis",
        "sourceUrl": "https://www.seti.pr.gov.br/Noticia/Quilombolas-organizam-se-e-formalizam-denuncias-ao-MP",
        "note": ""
      },
      {
        "name": "Praia do Peixe",
        "slug": "praia-do-peixe",
        "kind": "Comunidade documentada em fonte estadual",
        "sourceTitle": "SETI: comunidades de Adrianópolis",
        "sourceUrl": "https://www.seti.pr.gov.br/Noticia/Quilombolas-organizam-se-e-formalizam-denuncias-ao-MP",
        "note": ""
      },
      {
        "name": "São João",
        "slug": "sao-joao",
        "kind": "Comunidade documentada em fonte estadual",
        "sourceTitle": "SETI: comunidades de Adrianópolis",
        "sourceUrl": "https://www.seti.pr.gov.br/Noticia/Quilombolas-organizam-se-e-formalizam-denuncias-ao-MP",
        "note": ""
      },
      {
        "name": "Sete Barras",
        "slug": "sete-barras",
        "kind": "Comunidade documentada em fonte estadual",
        "sourceTitle": "SETI: comunidades de Adrianópolis",
        "sourceUrl": "https://www.seti.pr.gov.br/Noticia/Quilombolas-organizam-se-e-formalizam-denuncias-ao-MP",
        "note": ""
      },
      {
        "name": "Três Canais",
        "slug": "tres-canais",
        "kind": "Comunidade documentada em fonte estadual",
        "sourceTitle": "SETI: comunidades de Adrianópolis",
        "sourceUrl": "https://www.seti.pr.gov.br/Noticia/Quilombolas-organizam-se-e-formalizam-denuncias-ao-MP",
        "note": ""
      },
      {
        "name": "Vila Mota",
        "slug": "vila-mota",
        "kind": "Localidade mencionada pela Prefeitura",
        "sourceTitle": "Prefeitura: roteiro de atendimento em localidades, 2026",
        "sourceUrl": "https://www.adrianopolis.pr.gov.br/noticiasView/73096_A-Secretaria-Municipal-de-Agricultura,-Abastecimento-e-Meio-Ambiente,-segue-realizando-a-imunizacao-de-caes-e-gatos-nos-.html",
        "note": ""
      }
    ]
  },
  {
    "name": "Agudos do Sul",
    "slug": "agudos-do-sul",
    "summary": "Agudos do Sul integra a Região Metropolitana de Curitiba, conforme a relação de municípios da AMEP.",
    "coverage": "As 28 localidades da página municipal estão relacionadas. A fonte não afirma que sejam 28 bairros oficiais e não esgota apelidos, vilas ou loteamentos.",
    "sources": [
      {
        "title": "AMEP: municípios da Região Metropolitana de Curitiba",
        "url": "https://www.amep.pr.gov.br/Pagina/Sobre-RM-de-Curitiba"
      },
      {
        "title": "Prefeitura: localidades, atualização de 2024",
        "url": "https://www.agudosdosul.pr.gov.br/a-cidade/localidades"
      }
    ],
    "places": [
      {
        "name": "Areia",
        "slug": "areia",
        "kind": "Localidade do inventário municipal",
        "sourceTitle": "Prefeitura: localidades, atualização de 2024",
        "sourceUrl": "https://www.agudosdosul.pr.gov.br/a-cidade/localidades",
        "note": ""
      },
      {
        "name": "Buraco do Bugre",
        "slug": "buraco-do-bugre",
        "kind": "Localidade do inventário municipal",
        "sourceTitle": "Prefeitura: localidades, atualização de 2024",
        "sourceUrl": "https://www.agudosdosul.pr.gov.br/a-cidade/localidades",
        "note": ""
      },
      {
        "name": "Centro",
        "slug": "centro",
        "kind": "Localidade do inventário municipal",
        "sourceTitle": "Prefeitura: localidades, atualização de 2024",
        "sourceUrl": "https://www.agudosdosul.pr.gov.br/a-cidade/localidades",
        "note": ""
      },
      {
        "name": "Cerro",
        "slug": "cerro",
        "kind": "Localidade do inventário municipal",
        "sourceTitle": "Prefeitura: localidades, atualização de 2024",
        "sourceUrl": "https://www.agudosdosul.pr.gov.br/a-cidade/localidades",
        "note": ""
      },
      {
        "name": "Chimbuva",
        "slug": "chimbuva",
        "kind": "Localidade do inventário municipal",
        "sourceTitle": "Prefeitura: localidades, atualização de 2024",
        "sourceUrl": "https://www.agudosdosul.pr.gov.br/a-cidade/localidades",
        "note": ""
      },
      {
        "name": "Colônia Nova",
        "slug": "colonia-nova",
        "kind": "Localidade do inventário municipal",
        "sourceTitle": "Prefeitura: localidades, atualização de 2024",
        "sourceUrl": "https://www.agudosdosul.pr.gov.br/a-cidade/localidades",
        "note": ""
      },
      {
        "name": "Lagoa dos Pretos",
        "slug": "lagoa-dos-pretos",
        "kind": "Localidade do inventário municipal",
        "sourceTitle": "Prefeitura: localidades, atualização de 2024",
        "sourceUrl": "https://www.agudosdosul.pr.gov.br/a-cidade/localidades",
        "note": ""
      },
      {
        "name": "Lagoa dos Souzas",
        "slug": "lagoa-dos-souzas",
        "kind": "Localidade do inventário municipal",
        "sourceTitle": "Prefeitura: localidades, atualização de 2024",
        "sourceUrl": "https://www.agudosdosul.pr.gov.br/a-cidade/localidades",
        "note": ""
      },
      {
        "name": "Lavra",
        "slug": "lavra",
        "kind": "Localidade do inventário municipal",
        "sourceTitle": "Prefeitura: localidades, atualização de 2024",
        "sourceUrl": "https://www.agudosdosul.pr.gov.br/a-cidade/localidades",
        "note": ""
      },
      {
        "name": "Leão",
        "slug": "leao",
        "kind": "Localidade do inventário municipal",
        "sourceTitle": "Prefeitura: localidades, atualização de 2024",
        "sourceUrl": "https://www.agudosdosul.pr.gov.br/a-cidade/localidades",
        "note": ""
      },
      {
        "name": "Palmito de Baixo",
        "slug": "palmito-de-baixo",
        "kind": "Localidade do inventário municipal",
        "sourceTitle": "Prefeitura: localidades, atualização de 2024",
        "sourceUrl": "https://www.agudosdosul.pr.gov.br/a-cidade/localidades",
        "note": ""
      },
      {
        "name": "Palmito de Cima",
        "slug": "palmito-de-cima",
        "kind": "Localidade do inventário municipal",
        "sourceTitle": "Prefeitura: localidades, atualização de 2024",
        "sourceUrl": "https://www.agudosdosul.pr.gov.br/a-cidade/localidades",
        "note": ""
      },
      {
        "name": "Papanduva",
        "slug": "papanduva",
        "kind": "Localidade do inventário municipal",
        "sourceTitle": "Prefeitura: localidades, atualização de 2024",
        "sourceUrl": "https://www.agudosdosul.pr.gov.br/a-cidade/localidades",
        "note": ""
      },
      {
        "name": "Pavão",
        "slug": "pavao",
        "kind": "Localidade do inventário municipal",
        "sourceTitle": "Prefeitura: localidades, atualização de 2024",
        "sourceUrl": "https://www.agudosdosul.pr.gov.br/a-cidade/localidades",
        "note": ""
      },
      {
        "name": "Pavãozinho",
        "slug": "pavaozinho",
        "kind": "Localidade do inventário municipal",
        "sourceTitle": "Prefeitura: localidades, atualização de 2024",
        "sourceUrl": "https://www.agudosdosul.pr.gov.br/a-cidade/localidades",
        "note": ""
      },
      {
        "name": "Pedra Branca",
        "slug": "pedra-branca",
        "kind": "Localidade do inventário municipal",
        "sourceTitle": "Prefeitura: localidades, atualização de 2024",
        "sourceUrl": "https://www.agudosdosul.pr.gov.br/a-cidade/localidades",
        "note": ""
      },
      {
        "name": "Pinhal",
        "slug": "pinhal",
        "kind": "Localidade do inventário municipal",
        "sourceTitle": "Prefeitura: localidades, atualização de 2024",
        "sourceUrl": "https://www.agudosdosul.pr.gov.br/a-cidade/localidades",
        "note": ""
      },
      {
        "name": "Queimados",
        "slug": "queimados",
        "kind": "Localidade do inventário municipal",
        "sourceTitle": "Prefeitura: localidades, atualização de 2024",
        "sourceUrl": "https://www.agudosdosul.pr.gov.br/a-cidade/localidades",
        "note": ""
      },
      {
        "name": "Queimados de Cima",
        "slug": "queimados-de-cima",
        "kind": "Localidade do inventário municipal",
        "sourceTitle": "Prefeitura: localidades, atualização de 2024",
        "sourceUrl": "https://www.agudosdosul.pr.gov.br/a-cidade/localidades",
        "note": ""
      },
      {
        "name": "Ribeirão Grande",
        "slug": "ribeirao-grande",
        "kind": "Localidade do inventário municipal",
        "sourceTitle": "Prefeitura: localidades, atualização de 2024",
        "sourceUrl": "https://www.agudosdosul.pr.gov.br/a-cidade/localidades",
        "note": ""
      },
      {
        "name": "Ribeirão Raso",
        "slug": "ribeirao-raso",
        "kind": "Localidade do inventário municipal",
        "sourceTitle": "Prefeitura: localidades, atualização de 2024",
        "sourceUrl": "https://www.agudosdosul.pr.gov.br/a-cidade/localidades",
        "note": ""
      },
      {
        "name": "Ribeirãozinho",
        "slug": "ribeiraozinho",
        "kind": "Localidade do inventário municipal",
        "sourceTitle": "Prefeitura: localidades, atualização de 2024",
        "sourceUrl": "https://www.agudosdosul.pr.gov.br/a-cidade/localidades",
        "note": ""
      },
      {
        "name": "Rio da Várzea",
        "slug": "rio-da-varzea",
        "kind": "Localidade do inventário municipal",
        "sourceTitle": "Prefeitura: localidades, atualização de 2024",
        "sourceUrl": "https://www.agudosdosul.pr.gov.br/a-cidade/localidades",
        "note": ""
      },
      {
        "name": "Sobrado",
        "slug": "sobrado",
        "kind": "Localidade do inventário municipal",
        "sourceTitle": "Prefeitura: localidades, atualização de 2024",
        "sourceUrl": "https://www.agudosdosul.pr.gov.br/a-cidade/localidades",
        "note": ""
      },
      {
        "name": "Taboão",
        "slug": "taboao",
        "kind": "Localidade do inventário municipal",
        "sourceTitle": "Prefeitura: localidades, atualização de 2024",
        "sourceUrl": "https://www.agudosdosul.pr.gov.br/a-cidade/localidades",
        "note": ""
      },
      {
        "name": "Taquara Lisa",
        "slug": "taquara-lisa",
        "kind": "Localidade do inventário municipal",
        "sourceTitle": "Prefeitura: localidades, atualização de 2024",
        "sourceUrl": "https://www.agudosdosul.pr.gov.br/a-cidade/localidades",
        "note": ""
      },
      {
        "name": "Tarumã",
        "slug": "taruma",
        "kind": "Localidade do inventário municipal",
        "sourceTitle": "Prefeitura: localidades, atualização de 2024",
        "sourceUrl": "https://www.agudosdosul.pr.gov.br/a-cidade/localidades",
        "note": ""
      },
      {
        "name": "Troperaba",
        "slug": "troperaba",
        "kind": "Localidade do inventário municipal",
        "sourceTitle": "Prefeitura: localidades, atualização de 2024",
        "sourceUrl": "https://www.agudosdosul.pr.gov.br/a-cidade/localidades",
        "note": ""
      }
    ]
  },
  {
    "name": "Almirante Tamandaré",
    "slug": "almirante-tamandare",
    "summary": "Almirante Tamandaré integra a Região Metropolitana de Curitiba, conforme a relação de municípios da AMEP.",
    "coverage": "24 nomes urbanos e 20 rurais no diagnóstico FUPEF 2023, além de referências de serviços públicos. Não é cadastro legal atualizado nem lista completa de vilas.",
    "sources": [
      {
        "title": "AMEP: municípios da Região Metropolitana de Curitiba",
        "url": "https://www.amep.pr.gov.br/Pagina/Sobre-RM-de-Curitiba"
      },
      {
        "title": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "url": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf"
      },
      {
        "title": "Agência Estadual: abastecimento em Almirante Tamandaré",
        "url": "https://www.parana.pr.gov.br/aen/Noticia/Obras-afetam-abastecimento-em-bairros-de-Almirante-Tamandare-e-Curitiba-nesta-terca"
      }
    ],
    "places": [
      {
        "name": "Água Boa",
        "slug": "agua-boa",
        "kind": "Bairro rural no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": ""
      },
      {
        "name": "Alto São Sebastião",
        "slug": "alto-sao-sebastiao",
        "kind": "Bairro rural no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": ""
      },
      {
        "name": "Araras",
        "slug": "araras",
        "kind": "Bairro rural no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": ""
      },
      {
        "name": "Areias",
        "slug": "areias",
        "kind": "Bairro urbano no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": "Grafia preservada do diagnóstico de 2023; cadastro e limites atuais sujeitos a confirmação municipal."
      },
      {
        "name": "Barra de Santa Rita",
        "slug": "barra-de-santa-rita",
        "kind": "Bairro rural no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": ""
      },
      {
        "name": "Betara",
        "slug": "betara",
        "kind": "Bairro rural no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": ""
      },
      {
        "name": "Betarinha",
        "slug": "betarinha",
        "kind": "Bairro rural no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": ""
      },
      {
        "name": "Boixininga",
        "slug": "boixininga",
        "kind": "Bairro rural no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": ""
      },
      {
        "name": "Boixininga dos Franca",
        "slug": "boixininga-dos-franca",
        "kind": "Bairro urbano no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": "Grafia preservada do diagnóstico de 2023; cadastro e limites atuais sujeitos a confirmação municipal."
      },
      {
        "name": "Bonfim",
        "slug": "bonfim",
        "kind": "Bairro urbano no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": "Grafia preservada do diagnóstico de 2023; cadastro e limites atuais sujeitos a confirmação municipal."
      },
      {
        "name": "Botiatuba",
        "slug": "botiatuba",
        "kind": "Bairro urbano no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": "Grafia preservada do diagnóstico de 2023; cadastro e limites atuais sujeitos a confirmação municipal."
      },
      {
        "name": "Cachoeira",
        "slug": "cachoeira",
        "kind": "Bairro urbano no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": "Grafia preservada do diagnóstico de 2023; cadastro e limites atuais sujeitos a confirmação municipal."
      },
      {
        "name": "Campina de Santa Rita",
        "slug": "campina-de-santa-rita",
        "kind": "Bairro rural no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": ""
      },
      {
        "name": "Campina do Arruda",
        "slug": "campina-do-arruda",
        "kind": "Bairro urbano no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": "Grafia preservada do diagnóstico de 2023; cadastro e limites atuais sujeitos a confirmação municipal."
      },
      {
        "name": "Campo Grande",
        "slug": "campo-grande",
        "kind": "Bairro rural no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": ""
      },
      {
        "name": "Capivara dos Manfron",
        "slug": "capivara-dos-manfron",
        "kind": "Bairro rural no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": ""
      },
      {
        "name": "Caximba",
        "slug": "caximba",
        "kind": "Bairro rural no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": ""
      },
      {
        "name": "Centro",
        "slug": "centro",
        "kind": "Bairro urbano no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": "Grafia preservada do diagnóstico de 2023; cadastro e limites atuais sujeitos a confirmação municipal."
      },
      {
        "name": "Cercadinho",
        "slug": "cercadinho",
        "kind": "Bairro rural no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": ""
      },
      {
        "name": "Colônia Antônio Prado",
        "slug": "colonia-antonio-prado",
        "kind": "Bairro urbano no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": "Grafia preservada do diagnóstico de 2023; cadastro e limites atuais sujeitos a confirmação municipal."
      },
      {
        "name": "Colônia Santa Gabriela",
        "slug": "colonia-santa-gabriela",
        "kind": "Bairro urbano no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": "Grafia preservada do diagnóstico de 2023; cadastro e limites atuais sujeitos a confirmação municipal."
      },
      {
        "name": "Colônia São Venâncio",
        "slug": "colonia-sao-venancio",
        "kind": "Bairro urbano no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": "Grafia preservada do diagnóstico de 2023; cadastro e limites atuais sujeitos a confirmação municipal."
      },
      {
        "name": "Córrego Fundo",
        "slug": "corrego-fundo",
        "kind": "Bairro rural no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": ""
      },
      {
        "name": "Humaitá",
        "slug": "humaita",
        "kind": "Bairro urbano no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": "Grafia preservada do diagnóstico de 2023; cadastro e limites atuais sujeitos a confirmação municipal."
      },
      {
        "name": "Jardim Gramados",
        "slug": "jardim-gramados",
        "kind": "Localidade citada em serviço público",
        "sourceTitle": "Agência Estadual: abastecimento em Almirante Tamandaré",
        "sourceUrl": "https://www.parana.pr.gov.br/aen/Noticia/Obras-afetam-abastecimento-em-bairros-de-Almirante-Tamandare-e-Curitiba-nesta-terca",
        "note": ""
      },
      {
        "name": "Jardim Montparnasse",
        "slug": "jardim-montparnasse",
        "kind": "Localidade citada em serviço público",
        "sourceTitle": "Agência Estadual: abastecimento em Almirante Tamandaré",
        "sourceUrl": "https://www.parana.pr.gov.br/aen/Noticia/Obras-afetam-abastecimento-em-bairros-de-Almirante-Tamandare-e-Curitiba-nesta-terca",
        "note": ""
      },
      {
        "name": "Jardim Roma",
        "slug": "jardim-roma",
        "kind": "Localidade citada em serviço público",
        "sourceTitle": "Agência Estadual: abastecimento em Almirante Tamandaré",
        "sourceUrl": "https://www.parana.pr.gov.br/aen/Noticia/Obras-afetam-abastecimento-em-bairros-de-Almirante-Tamandare-e-Curitiba-nesta-terca",
        "note": ""
      },
      {
        "name": "Jardim Santa Maria",
        "slug": "jardim-santa-maria",
        "kind": "Localidade citada em serviço público",
        "sourceTitle": "Agência Estadual: abastecimento em Almirante Tamandaré",
        "sourceUrl": "https://www.parana.pr.gov.br/aen/Noticia/Obras-afetam-abastecimento-em-bairros-de-Almirante-Tamandare-e-Curitiba-nesta-terca",
        "note": ""
      },
      {
        "name": "Jardim São Carlos",
        "slug": "jardim-sao-carlos",
        "kind": "Localidade citada em serviço público",
        "sourceTitle": "Agência Estadual: abastecimento em Almirante Tamandaré",
        "sourceUrl": "https://www.parana.pr.gov.br/aen/Noticia/Obras-afetam-abastecimento-em-bairros-de-Almirante-Tamandare-e-Curitiba-nesta-terca",
        "note": ""
      },
      {
        "name": "Juruqui",
        "slug": "juruqui",
        "kind": "Bairro rural no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": ""
      },
      {
        "name": "Lamenha Grande",
        "slug": "lamenha-grande",
        "kind": "Bairro urbano no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": "Grafia preservada do diagnóstico de 2023; cadastro e limites atuais sujeitos a confirmação municipal."
      },
      {
        "name": "Lamenha Pequena",
        "slug": "lamenha-pequena",
        "kind": "Bairro urbano no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": "Grafia preservada do diagnóstico de 2023; cadastro e limites atuais sujeitos a confirmação municipal."
      },
      {
        "name": "Marianã",
        "slug": "mariana",
        "kind": "Bairro rural no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": ""
      },
      {
        "name": "Marinoni",
        "slug": "marinoni",
        "kind": "Localidade citada em serviço público",
        "sourceTitle": "Agência Estadual: abastecimento em Almirante Tamandaré",
        "sourceUrl": "https://www.parana.pr.gov.br/aen/Noticia/Obras-afetam-abastecimento-em-bairros-de-Almirante-Tamandare-e-Curitiba-nesta-terca",
        "note": ""
      },
      {
        "name": "Marmeleiro",
        "slug": "marmeleiro",
        "kind": "Bairro rural no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": ""
      },
      {
        "name": "Mato Dentro",
        "slug": "mato-dentro",
        "kind": "Bairro urbano no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": "Grafia preservada do diagnóstico de 2023; cadastro e limites atuais sujeitos a confirmação municipal."
      },
      {
        "name": "Morro Azul",
        "slug": "morro-azul",
        "kind": "Bairro rural no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": ""
      },
      {
        "name": "Pacotuba",
        "slug": "pacotuba",
        "kind": "Bairro urbano no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": "Grafia preservada do diagnóstico de 2023; cadastro e limites atuais sujeitos a confirmação municipal."
      },
      {
        "name": "Parque São Jorge",
        "slug": "parque-sao-jorge",
        "kind": "Bairro urbano no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": "Grafia preservada do diagnóstico de 2023; cadastro e limites atuais sujeitos a confirmação municipal."
      },
      {
        "name": "Ressaca",
        "slug": "ressaca",
        "kind": "Bairro rural no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": ""
      },
      {
        "name": "Restinga Seca",
        "slug": "restinga-seca",
        "kind": "Bairro urbano no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": "Grafia preservada do diagnóstico de 2023; cadastro e limites atuais sujeitos a confirmação municipal."
      },
      {
        "name": "São Felipe",
        "slug": "sao-felipe",
        "kind": "Bairro urbano no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": "Grafia preservada do diagnóstico de 2023; cadastro e limites atuais sujeitos a confirmação municipal."
      },
      {
        "name": "São Miguel",
        "slug": "sao-miguel",
        "kind": "Bairro urbano no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": "Grafia preservada do diagnóstico de 2023; cadastro e limites atuais sujeitos a confirmação municipal."
      },
      {
        "name": "Sumidouro",
        "slug": "sumidouro",
        "kind": "Bairro urbano no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": "Grafia preservada do diagnóstico de 2023; cadastro e limites atuais sujeitos a confirmação municipal."
      },
      {
        "name": "Taboão",
        "slug": "taboao",
        "kind": "Bairro urbano no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": "Grafia preservada do diagnóstico de 2023; cadastro e limites atuais sujeitos a confirmação municipal."
      },
      {
        "name": "Tanguá",
        "slug": "tangua",
        "kind": "Bairro urbano no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": "Grafia preservada do diagnóstico de 2023; cadastro e limites atuais sujeitos a confirmação municipal."
      },
      {
        "name": "Tijuco Preto",
        "slug": "tijuco-preto",
        "kind": "Bairro rural no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": ""
      },
      {
        "name": "Tranqueira",
        "slug": "tranqueira",
        "kind": "Bairro urbano no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": "Grafia preservada do diagnóstico de 2023; cadastro e limites atuais sujeitos a confirmação municipal."
      },
      {
        "name": "Varova",
        "slug": "varova",
        "kind": "Bairro urbano no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": "Grafia preservada do diagnóstico de 2023; cadastro e limites atuais sujeitos a confirmação municipal."
      },
      {
        "name": "Venda Velha",
        "slug": "venda-velha",
        "kind": "Bairro rural no diagnóstico FUPEF 2023",
        "sourceTitle": "Diagnóstico municipal FUPEF: tabelas de bairros",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_176_0_1_09112023151730.pdf",
        "note": ""
      },
      {
        "name": "Vila Marta",
        "slug": "vila-marta",
        "kind": "Localidade citada em serviço público",
        "sourceTitle": "Agência Estadual: abastecimento em Almirante Tamandaré",
        "sourceUrl": "https://www.parana.pr.gov.br/aen/Noticia/Obras-afetam-abastecimento-em-bairros-de-Almirante-Tamandare-e-Curitiba-nesta-terca",
        "note": ""
      }
    ]
  },
  {
    "name": "Araucária",
    "slug": "araucaria",
    "summary": "Araucária integra a Região Metropolitana de Curitiba, conforme a relação de municípios da AMEP.",
    "coverage": "Levantamento em ampliação. Não é uma lista exaustiva de bairros, vilas, loteamentos ou nomes populares.",
    "sources": [
      {
        "title": "AMEP: municípios da Região Metropolitana de Curitiba",
        "url": "https://www.amep.pr.gov.br/Pagina/Sobre-RM-de-Curitiba"
      },
      {
        "title": "Prefeitura: dados sobre Araucária",
        "url": "https://wiki.araucaria.pr.gov.br/books/turismo-araucaria/page/dados-sobre-araucaria"
      },
      {
        "title": "Governo do Paraná: pavimentação rural de Araucária",
        "url": "https://www.boaspraticasods.pr.gov.br/Iniciativa/Pavimentacao-na-area-rural-de-Araucaria?page=1"
      }
    ],
    "places": [
      {
        "name": "Barigui",
        "slug": "barigui",
        "kind": "Bairro urbano em documentação municipal",
        "sourceTitle": "Prefeitura: dados sobre Araucária",
        "sourceUrl": "https://wiki.araucaria.pr.gov.br/books/turismo-araucaria/page/dados-sobre-araucaria",
        "note": ""
      },
      {
        "name": "Boqueirão",
        "slug": "boqueirao",
        "kind": "Bairro urbano em documentação municipal",
        "sourceTitle": "Prefeitura: dados sobre Araucária",
        "sourceUrl": "https://wiki.araucaria.pr.gov.br/books/turismo-araucaria/page/dados-sobre-araucaria",
        "note": ""
      },
      {
        "name": "Cachoeira",
        "slug": "cachoeira",
        "kind": "Bairro urbano em documentação municipal",
        "sourceTitle": "Prefeitura: dados sobre Araucária",
        "sourceUrl": "https://wiki.araucaria.pr.gov.br/books/turismo-araucaria/page/dados-sobre-araucaria",
        "note": ""
      },
      {
        "name": "Campina da Barra",
        "slug": "campina-da-barra",
        "kind": "Bairro urbano em documentação municipal",
        "sourceTitle": "Prefeitura: dados sobre Araucária",
        "sourceUrl": "https://wiki.araucaria.pr.gov.br/books/turismo-araucaria/page/dados-sobre-araucaria",
        "note": ""
      },
      {
        "name": "Campina das Pedras",
        "slug": "campina-das-pedras",
        "kind": "Localidade rural documentada",
        "sourceTitle": "Governo do Paraná: pavimentação rural de Araucária",
        "sourceUrl": "https://www.boaspraticasods.pr.gov.br/Iniciativa/Pavimentacao-na-area-rural-de-Araucaria?page=1",
        "note": ""
      },
      {
        "name": "Campo Redondo",
        "slug": "campo-redondo",
        "kind": "Localidade rural documentada",
        "sourceTitle": "Governo do Paraná: pavimentação rural de Araucária",
        "sourceUrl": "https://www.boaspraticasods.pr.gov.br/Iniciativa/Pavimentacao-na-area-rural-de-Araucaria?page=1",
        "note": ""
      },
      {
        "name": "Capela Velha",
        "slug": "capela-velha",
        "kind": "Bairro urbano em documentação municipal",
        "sourceTitle": "Prefeitura: dados sobre Araucária",
        "sourceUrl": "https://wiki.araucaria.pr.gov.br/books/turismo-araucaria/page/dados-sobre-araucaria",
        "note": ""
      },
      {
        "name": "Centro",
        "slug": "centro",
        "kind": "Bairro urbano em documentação municipal",
        "sourceTitle": "Prefeitura: dados sobre Araucária",
        "sourceUrl": "https://wiki.araucaria.pr.gov.br/books/turismo-araucaria/page/dados-sobre-araucaria",
        "note": ""
      },
      {
        "name": "Chapada",
        "slug": "chapada",
        "kind": "Bairro urbano em documentação municipal",
        "sourceTitle": "Prefeitura: dados sobre Araucária",
        "sourceUrl": "https://wiki.araucaria.pr.gov.br/books/turismo-araucaria/page/dados-sobre-araucaria",
        "note": ""
      },
      {
        "name": "Colônia Cristina",
        "slug": "colonia-cristina",
        "kind": "Localidade rural documentada",
        "sourceTitle": "Governo do Paraná: pavimentação rural de Araucária",
        "sourceUrl": "https://www.boaspraticasods.pr.gov.br/Iniciativa/Pavimentacao-na-area-rural-de-Araucaria?page=1",
        "note": ""
      },
      {
        "name": "Costeira",
        "slug": "costeira",
        "kind": "Bairro urbano em documentação municipal",
        "sourceTitle": "Prefeitura: dados sobre Araucária",
        "sourceUrl": "https://wiki.araucaria.pr.gov.br/books/turismo-araucaria/page/dados-sobre-araucaria",
        "note": ""
      },
      {
        "name": "Estação",
        "slug": "estacao",
        "kind": "Bairro urbano em documentação municipal",
        "sourceTitle": "Prefeitura: dados sobre Araucária",
        "sourceUrl": "https://wiki.araucaria.pr.gov.br/books/turismo-araucaria/page/dados-sobre-araucaria",
        "note": ""
      },
      {
        "name": "Fazenda Velha",
        "slug": "fazenda-velha",
        "kind": "Bairro urbano em documentação municipal",
        "sourceTitle": "Prefeitura: dados sobre Araucária",
        "sourceUrl": "https://wiki.araucaria.pr.gov.br/books/turismo-araucaria/page/dados-sobre-araucaria",
        "note": ""
      },
      {
        "name": "Iguaçu",
        "slug": "iguacu",
        "kind": "Bairro urbano em documentação municipal",
        "sourceTitle": "Prefeitura: dados sobre Araucária",
        "sourceUrl": "https://wiki.araucaria.pr.gov.br/books/turismo-araucaria/page/dados-sobre-araucaria",
        "note": ""
      },
      {
        "name": "Passaúna",
        "slug": "passauna",
        "kind": "Bairro urbano em documentação municipal",
        "sourceTitle": "Prefeitura: dados sobre Araucária",
        "sourceUrl": "https://wiki.araucaria.pr.gov.br/books/turismo-araucaria/page/dados-sobre-araucaria",
        "note": ""
      },
      {
        "name": "Porto das Laranjeiras",
        "slug": "porto-das-laranjeiras",
        "kind": "Bairro urbano em documentação municipal",
        "sourceTitle": "Prefeitura: dados sobre Araucária",
        "sourceUrl": "https://wiki.araucaria.pr.gov.br/books/turismo-araucaria/page/dados-sobre-araucaria",
        "note": ""
      },
      {
        "name": "Sabiá",
        "slug": "sabia",
        "kind": "Bairro urbano em documentação municipal",
        "sourceTitle": "Prefeitura: dados sobre Araucária",
        "sourceUrl": "https://wiki.araucaria.pr.gov.br/books/turismo-araucaria/page/dados-sobre-araucaria",
        "note": ""
      },
      {
        "name": "São Miguel",
        "slug": "sao-miguel",
        "kind": "Bairro urbano em documentação municipal",
        "sourceTitle": "Prefeitura: dados sobre Araucária",
        "sourceUrl": "https://wiki.araucaria.pr.gov.br/books/turismo-araucaria/page/dados-sobre-araucaria",
        "note": ""
      },
      {
        "name": "Thomaz Coelho",
        "slug": "thomaz-coelho",
        "kind": "Bairro urbano em documentação municipal",
        "sourceTitle": "Prefeitura: dados sobre Araucária",
        "sourceUrl": "https://wiki.araucaria.pr.gov.br/books/turismo-araucaria/page/dados-sobre-araucaria",
        "note": ""
      },
      {
        "name": "Tietê",
        "slug": "tiete",
        "kind": "Localidade rural documentada",
        "sourceTitle": "Governo do Paraná: pavimentação rural de Araucária",
        "sourceUrl": "https://www.boaspraticasods.pr.gov.br/Iniciativa/Pavimentacao-na-area-rural-de-Araucaria?page=1",
        "note": ""
      },
      {
        "name": "Tindiquera",
        "slug": "tindiquera",
        "kind": "Bairro urbano em documentação municipal",
        "sourceTitle": "Prefeitura: dados sobre Araucária",
        "sourceUrl": "https://wiki.araucaria.pr.gov.br/books/turismo-araucaria/page/dados-sobre-araucaria",
        "note": ""
      },
      {
        "name": "Vila Nova",
        "slug": "vila-nova",
        "kind": "Bairro urbano em documentação municipal",
        "sourceTitle": "Prefeitura: dados sobre Araucária",
        "sourceUrl": "https://wiki.araucaria.pr.gov.br/books/turismo-araucaria/page/dados-sobre-araucaria",
        "note": ""
      }
    ]
  },
  {
    "name": "Balsa Nova",
    "slug": "balsa-nova",
    "summary": "Balsa Nova integra a Região Metropolitana de Curitiba, conforme a relação de municípios da AMEP.",
    "coverage": "Levantamento em ampliação. Não é uma lista exaustiva de bairros, vilas, loteamentos ou nomes populares.",
    "sources": [
      {
        "title": "AMEP: municípios da Região Metropolitana de Curitiba",
        "url": "https://www.amep.pr.gov.br/Pagina/Sobre-RM-de-Curitiba"
      },
      {
        "title": "Prefeitura: diagnóstico do Plano Diretor",
        "url": "https://balsanova.pr.gov.br/uploads/pagina/arquivos/6-Diagnostico-PD-Balsa-Nova.pdf"
      }
    ],
    "places": [
      {
        "name": "Balsa Nova",
        "slug": "balsa-nova",
        "kind": "Distrito administrativo no diagnóstico municipal",
        "sourceTitle": "Prefeitura: diagnóstico do Plano Diretor",
        "sourceUrl": "https://balsanova.pr.gov.br/uploads/pagina/arquivos/6-Diagnostico-PD-Balsa-Nova.pdf",
        "note": ""
      },
      {
        "name": "Bugre",
        "slug": "bugre",
        "kind": "Distrito administrativo no diagnóstico municipal",
        "sourceTitle": "Prefeitura: diagnóstico do Plano Diretor",
        "sourceUrl": "https://balsanova.pr.gov.br/uploads/pagina/arquivos/6-Diagnostico-PD-Balsa-Nova.pdf",
        "note": ""
      },
      {
        "name": "Jardim Serrinha",
        "slug": "jardim-serrinha",
        "kind": "Bairro urbano citado no diagnóstico municipal",
        "sourceTitle": "Prefeitura: diagnóstico do Plano Diretor",
        "sourceUrl": "https://balsanova.pr.gov.br/uploads/pagina/arquivos/6-Diagnostico-PD-Balsa-Nova.pdf",
        "note": ""
      },
      {
        "name": "Rodeio Grande",
        "slug": "rodeio-grande",
        "kind": "Localidade no diagnóstico municipal",
        "sourceTitle": "Prefeitura: diagnóstico do Plano Diretor",
        "sourceUrl": "https://balsanova.pr.gov.br/uploads/pagina/arquivos/6-Diagnostico-PD-Balsa-Nova.pdf",
        "note": ""
      },
      {
        "name": "Santo Antônio",
        "slug": "santo-antonio",
        "kind": "Localidade no diagnóstico municipal",
        "sourceTitle": "Prefeitura: diagnóstico do Plano Diretor",
        "sourceUrl": "https://balsanova.pr.gov.br/uploads/pagina/arquivos/6-Diagnostico-PD-Balsa-Nova.pdf",
        "note": ""
      },
      {
        "name": "São Caetano",
        "slug": "sao-caetano",
        "kind": "Bairro urbano citado no diagnóstico municipal",
        "sourceTitle": "Prefeitura: diagnóstico do Plano Diretor",
        "sourceUrl": "https://balsanova.pr.gov.br/uploads/pagina/arquivos/6-Diagnostico-PD-Balsa-Nova.pdf",
        "note": ""
      },
      {
        "name": "São Luiz do Purunã",
        "slug": "sao-luiz-do-puruna",
        "kind": "Distrito administrativo no diagnóstico municipal",
        "sourceTitle": "Prefeitura: diagnóstico do Plano Diretor",
        "sourceUrl": "https://balsanova.pr.gov.br/uploads/pagina/arquivos/6-Diagnostico-PD-Balsa-Nova.pdf",
        "note": ""
      },
      {
        "name": "Tamanduá",
        "slug": "tamandua",
        "kind": "Localidade no diagnóstico municipal",
        "sourceTitle": "Prefeitura: diagnóstico do Plano Diretor",
        "sourceUrl": "https://balsanova.pr.gov.br/uploads/pagina/arquivos/6-Diagnostico-PD-Balsa-Nova.pdf",
        "note": ""
      }
    ]
  },
  {
    "name": "Bocaiúva do Sul",
    "slug": "bocaiuva-do-sul",
    "summary": "Bocaiúva do Sul integra a Região Metropolitana de Curitiba, conforme a relação de municípios da AMEP.",
    "coverage": "Doze bairros oficiais e denominações de loteamentos da Lei 1.059/2026. A lei tem 35 códigos de loteamentos, com nomes sobrepostos e homônimos; este diretório consolida nomes, não códigos. Localidades rurais não estão esgotadas.",
    "sources": [
      {
        "title": "AMEP: municípios da Região Metropolitana de Curitiba",
        "url": "https://www.amep.pr.gov.br/Pagina/Sobre-RM-de-Curitiba"
      },
      {
        "title": "Diário Oficial: Lei 1.059/2026, página 67",
        "url": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao"
      }
    ],
    "places": [
      {
        "name": "Alto da Barra",
        "slug": "alto-da-barra",
        "kind": "Loteamento na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": "A lei relaciona esta denominação ao bairro Barra do Capivari."
      },
      {
        "name": "ASI 1",
        "slug": "asi-1",
        "kind": "Loteamento na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": "A lei relaciona esta denominação ao bairro Panorama."
      },
      {
        "name": "ASI 2",
        "slug": "asi-2",
        "kind": "Loteamento na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": "A lei relaciona esta denominação ao bairro Panorama."
      },
      {
        "name": "ASI 3",
        "slug": "asi-3",
        "kind": "Loteamento na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": "A lei relaciona esta denominação ao bairro Nova Alvorada."
      },
      {
        "name": "Barra do Capivari",
        "slug": "barra-do-capivari",
        "kind": "Bairro oficial na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": ""
      },
      {
        "name": "Belle Vie",
        "slug": "belle-vie",
        "kind": "Bairro oficial na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": ""
      },
      {
        "name": "Cachoeirinha",
        "slug": "cachoeirinha",
        "kind": "Loteamento na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": "A lei relaciona esta denominação ao bairro Nova Alvorada."
      },
      {
        "name": "Centro",
        "slug": "centro",
        "kind": "Bairro oficial na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": ""
      },
      {
        "name": "Chácaras Belle Vie",
        "slug": "chacaras-belle-vie",
        "kind": "Loteamento na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": "A lei relaciona esta denominação ao bairro Belle Vie."
      },
      {
        "name": "Eldorado – Área Industrial",
        "slug": "eldorado-area-industrial",
        "kind": "Loteamento na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": "A lei relaciona esta denominação ao bairro Novo Horizonte."
      },
      {
        "name": "Fazenda São Marcos I",
        "slug": "fazenda-sao-marcos-i",
        "kind": "Loteamento na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": "A lei relaciona esta denominação ao bairro São Marcos."
      },
      {
        "name": "Fazenda São Marcos II",
        "slug": "fazenda-sao-marcos-ii",
        "kind": "Loteamento na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": "A lei relaciona esta denominação ao bairro São Marcos."
      },
      {
        "name": "Fazenda São Marcos III",
        "slug": "fazenda-sao-marcos-iii",
        "kind": "Loteamento na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": "A lei relaciona esta denominação ao bairro São Marcos."
      },
      {
        "name": "Graciosa",
        "slug": "graciosa",
        "kind": "Bairro oficial na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": ""
      },
      {
        "name": "Jardim da Torre I",
        "slug": "jardim-da-torre-i",
        "kind": "Loteamento na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": "A lei relaciona esta denominação ao bairro Torres."
      },
      {
        "name": "Jardim da Torre II",
        "slug": "jardim-da-torre-ii",
        "kind": "Loteamento na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": "A lei relaciona esta denominação ao bairro Torres."
      },
      {
        "name": "Jardim Esperança",
        "slug": "jardim-esperanca",
        "kind": "Loteamento na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": "A lei relaciona esta denominação ao bairro Graciosa."
      },
      {
        "name": "Jardim Iolanda",
        "slug": "jardim-iolanda",
        "kind": "Loteamento na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": "A lei relaciona esta denominação ao bairro Vila Velha."
      },
      {
        "name": "Jardim Lucy",
        "slug": "jardim-lucy",
        "kind": "Loteamento na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": "A lei relaciona esta denominação ao bairro Graciosa."
      },
      {
        "name": "Jardim Paulista",
        "slug": "jardim-paulista",
        "kind": "Loteamento na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": "A lei relaciona esta denominação ao bairro Vila Velha."
      },
      {
        "name": "Jardim Professora Eulália",
        "slug": "jardim-professora-eulalia",
        "kind": "Loteamento na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": "A lei relaciona esta denominação ao bairro Graciosa."
      },
      {
        "name": "Jardim Progresso",
        "slug": "jardim-progresso",
        "kind": "Loteamento na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": "A lei relaciona esta denominação ao bairro Graciosa."
      },
      {
        "name": "Jardim Santa Helena",
        "slug": "jardim-santa-helena",
        "kind": "Loteamento na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": "Jardim Santa Helena aparece vinculado a Vila Velha e Panorama na própria lei. Confirme o endereço e a identificação cadastral; não deduzimos um único enquadramento."
      },
      {
        "name": "Jardim Santo Antônio",
        "slug": "jardim-santo-antonio",
        "kind": "Loteamento na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": "A lei relaciona esta denominação ao bairro Santo Antônio."
      },
      {
        "name": "Macieira",
        "slug": "macieira",
        "kind": "Bairro oficial na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": ""
      },
      {
        "name": "Morro do Cowboy",
        "slug": "morro-do-cowboy",
        "kind": "Loteamento na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": "A lei relaciona esta denominação ao bairro Barra do Capivari."
      },
      {
        "name": "Nova Alvorada",
        "slug": "nova-alvorada",
        "kind": "Bairro oficial na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": ""
      },
      {
        "name": "Novo Horizonte",
        "slug": "novo-horizonte",
        "kind": "Bairro oficial na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": ""
      },
      {
        "name": "Palmeirinha",
        "slug": "palmeirinha",
        "kind": "Loteamento na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": "A lei relaciona esta denominação ao bairro Panorama."
      },
      {
        "name": "Panorama",
        "slug": "panorama",
        "kind": "Bairro oficial na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": ""
      },
      {
        "name": "Santo Antônio",
        "slug": "santo-antonio",
        "kind": "Bairro oficial na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": ""
      },
      {
        "name": "São Marcos",
        "slug": "sao-marcos",
        "kind": "Bairro oficial na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": ""
      },
      {
        "name": "Torres",
        "slug": "torres",
        "kind": "Bairro oficial na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": ""
      },
      {
        "name": "Vila Angélica",
        "slug": "vila-angelica",
        "kind": "Loteamento na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": "A lei relaciona esta denominação ao bairro Novo Horizonte."
      },
      {
        "name": "Vila Boqueirão",
        "slug": "vila-boqueirao",
        "kind": "Loteamento na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": "A lei relaciona esta denominação ao bairro Panorama."
      },
      {
        "name": "Vila Costa",
        "slug": "vila-costa",
        "kind": "Loteamento na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": "A lei relaciona esta denominação ao bairro Vila Velha."
      },
      {
        "name": "Vila Cruzeiro",
        "slug": "vila-cruzeiro",
        "kind": "Loteamento na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": "A lei relaciona esta denominação ao bairro Torres."
      },
      {
        "name": "Vila Dois Pilares",
        "slug": "vila-dois-pilares",
        "kind": "Loteamento na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": "A lei relaciona esta denominação ao bairro Vila Velha."
      },
      {
        "name": "Vila João Paulo II",
        "slug": "vila-joao-paulo-ii",
        "kind": "Loteamento na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": "A lei relaciona esta denominação ao bairro Torres."
      },
      {
        "name": "Vila Olímpia",
        "slug": "vila-olimpia",
        "kind": "Loteamento na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": "A lei relaciona esta denominação ao bairro Novo Horizonte."
      },
      {
        "name": "Vila Palmira",
        "slug": "vila-palmira",
        "kind": "Loteamento na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": "A lei relaciona esta denominação ao bairro Graciosa."
      },
      {
        "name": "Vila Scremin",
        "slug": "vila-scremin",
        "kind": "Loteamento na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": "A lei relaciona esta denominação ao bairro Novo Horizonte."
      },
      {
        "name": "Vila Velha",
        "slug": "vila-velha",
        "kind": "Bairro oficial na Lei 1.059/2026",
        "sourceTitle": "Diário Oficial: Lei 1.059/2026, página 67",
        "sourceUrl": "https://www-storage.voxtecnologia.com.br/?f=4410&i=publicado_118092_2026-05-07_d5402eb1c45413c3ba208950590a5c0a.pdf&m=sigpub.publicacao",
        "note": ""
      }
    ]
  },
  {
    "name": "Campina Grande do Sul",
    "slug": "campina-grande-do-sul",
    "summary": "Campina Grande do Sul integra a Região Metropolitana de Curitiba, conforme a relação de municípios da AMEP.",
    "coverage": "Referências da lei de 2026 e dos serviços municipais. A delimitação de bairros está nos mapas anexos da Lei 1.122/2026; roteiro de coleta não equivale à lista legal de bairros.",
    "sources": [
      {
        "title": "AMEP: municípios da Região Metropolitana de Curitiba",
        "url": "https://www.amep.pr.gov.br/Pagina/Sobre-RM-de-Curitiba"
      },
      {
        "title": "Câmara: Lei 1.122/2026",
        "url": "https://sapl.campinagrandedosul.pr.leg.br/norma/3004"
      },
      {
        "title": "Prefeitura: áreas do abastecimento municipal",
        "url": "https://campinagrandedosul.pr.gov.br/noticia/prefeitura_orienta_populacao_sobre_uso_consciente_da_agua_e_funcionamento_do_sistema_de_abastecimento_municipal"
      },
      {
        "title": "Prefeitura: roteiro de coleta urbano e rural",
        "url": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo"
      }
    ],
    "places": [
      {
        "name": "Área Industrial Campo Fundo",
        "slug": "area-industrial-campo-fundo",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Área Industrial CICAMP",
        "slug": "area-industrial-cicamp",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Área Industrial Pocinho",
        "slug": "area-industrial-pocinho",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Área Industrial Riachuelo La Plata",
        "slug": "area-industrial-riachuelo-la-plata",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Barragem",
        "slug": "barragem",
        "kind": "Localidade em serviço municipal",
        "sourceTitle": "Prefeitura: áreas do abastecimento municipal",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/noticia/prefeitura_orienta_populacao_sobre_uso_consciente_da_agua_e_funcionamento_do_sistema_de_abastecimento_municipal",
        "note": ""
      },
      {
        "name": "Cacaiguera",
        "slug": "cacaiguera",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Canelinha",
        "slug": "canelinha",
        "kind": "Localidade em serviço municipal",
        "sourceTitle": "Prefeitura: áreas do abastecimento municipal",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/noticia/prefeitura_orienta_populacao_sobre_uso_consciente_da_agua_e_funcionamento_do_sistema_de_abastecimento_municipal",
        "note": ""
      },
      {
        "name": "Capivari",
        "slug": "capivari",
        "kind": "Área urbana isolada na Lei 1.122/2026",
        "sourceTitle": "Câmara: Lei 1.122/2026",
        "sourceUrl": "https://sapl.campinagrandedosul.pr.leg.br/norma/3004",
        "note": ""
      },
      {
        "name": "Caraguatá",
        "slug": "caraguata",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Cerne",
        "slug": "cerne",
        "kind": "Localidade em serviço municipal",
        "sourceTitle": "Prefeitura: áreas do abastecimento municipal",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/noticia/prefeitura_orienta_populacao_sobre_uso_consciente_da_agua_e_funcionamento_do_sistema_de_abastecimento_municipal",
        "note": ""
      },
      {
        "name": "Chácaras Bela Vista",
        "slug": "chacaras-bela-vista",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Chácaras Campina Verde",
        "slug": "chacaras-campina-verde",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Chácaras Olhos D'Água",
        "slug": "chacaras-olhos-d-agua",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Chácaras Renascença",
        "slug": "chacaras-renascenca",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Cohapar",
        "slug": "cohapar",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Cupim Vermelho",
        "slug": "cupim-vermelho",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Divisa",
        "slug": "divisa",
        "kind": "Localidade em serviço municipal",
        "sourceTitle": "Prefeitura: áreas do abastecimento municipal",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/noticia/prefeitura_orienta_populacao_sobre_uso_consciente_da_agua_e_funcionamento_do_sistema_de_abastecimento_municipal",
        "note": ""
      },
      {
        "name": "Figueira I",
        "slug": "figueira-i",
        "kind": "Localidade em serviço municipal",
        "sourceTitle": "Prefeitura: áreas do abastecimento municipal",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/noticia/prefeitura_orienta_populacao_sobre_uso_consciente_da_agua_e_funcionamento_do_sistema_de_abastecimento_municipal",
        "note": ""
      },
      {
        "name": "Figueira II",
        "slug": "figueira-ii",
        "kind": "Localidade em serviço municipal",
        "sourceTitle": "Prefeitura: áreas do abastecimento municipal",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/noticia/prefeitura_orienta_populacao_sobre_uso_consciente_da_agua_e_funcionamento_do_sistema_de_abastecimento_municipal",
        "note": ""
      },
      {
        "name": "Graciosa",
        "slug": "graciosa",
        "kind": "Localidade em serviço municipal",
        "sourceTitle": "Prefeitura: áreas do abastecimento municipal",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/noticia/prefeitura_orienta_populacao_sobre_uso_consciente_da_agua_e_funcionamento_do_sistema_de_abastecimento_municipal",
        "note": ""
      },
      {
        "name": "Imbuial",
        "slug": "imbuial",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Jaguatirica",
        "slug": "jaguatirica",
        "kind": "Área urbana isolada na Lei 1.122/2026",
        "sourceTitle": "Câmara: Lei 1.122/2026",
        "sourceUrl": "https://sapl.campinagrandedosul.pr.leg.br/norma/3004",
        "note": ""
      },
      {
        "name": "Jardim Água Doce",
        "slug": "jardim-agua-doce",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Jardim Araçatuba",
        "slug": "jardim-aracatuba",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Jardim Ceccon",
        "slug": "jardim-ceccon",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Jardim da Campina",
        "slug": "jardim-da-campina",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Jardim da Colina",
        "slug": "jardim-da-colina",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Jardim Daher",
        "slug": "jardim-daher",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Jardim Diamante",
        "slug": "jardim-diamante",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Jardim Flórida",
        "slug": "jardim-florida",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Jardim João Paulo II",
        "slug": "jardim-joao-paulo-ii",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Jardim Nesita",
        "slug": "jardim-nesita",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Jardim Nova Campina",
        "slug": "jardim-nova-campina",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Jardim Santa Angelina",
        "slug": "jardim-santa-angelina",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Jardim Santa Rita",
        "slug": "jardim-santa-rita",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Jardim Santa Rosa",
        "slug": "jardim-santa-rosa",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Jardim Senhora das Graças",
        "slug": "jardim-senhora-das-gracas",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Joana Olímpia",
        "slug": "joana-olimpia",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Lagoa Vermelha",
        "slug": "lagoa-vermelha",
        "kind": "Localidade em serviço municipal",
        "sourceTitle": "Prefeitura: áreas do abastecimento municipal",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/noticia/prefeitura_orienta_populacao_sobre_uso_consciente_da_agua_e_funcionamento_do_sistema_de_abastecimento_municipal",
        "note": ""
      },
      {
        "name": "Mandaçaia",
        "slug": "mandacaia",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Mitra",
        "slug": "mitra",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Moradias Timbu",
        "slug": "moradias-timbu",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Paiol Baixo",
        "slug": "paiol-baixo",
        "kind": "Área urbana isolada na Lei 1.122/2026",
        "sourceTitle": "Câmara: Lei 1.122/2026",
        "sourceUrl": "https://sapl.campinagrandedosul.pr.leg.br/norma/3004",
        "note": ""
      },
      {
        "name": "Palmeirinha",
        "slug": "palmeirinha",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Pouso Alegre",
        "slug": "pouso-alegre",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Rancho Alegre",
        "slug": "rancho-alegre",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Recanto Verde",
        "slug": "recanto-verde",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Ribeirão Grande",
        "slug": "ribeirao-grande",
        "kind": "Área urbana isolada na Lei 1.122/2026",
        "sourceTitle": "Câmara: Lei 1.122/2026",
        "sourceUrl": "https://sapl.campinagrandedosul.pr.leg.br/norma/3004",
        "note": ""
      },
      {
        "name": "Ribeirão Vermelho",
        "slug": "ribeirao-vermelho",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "São Cosme",
        "slug": "sao-cosme",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Sede",
        "slug": "sede",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Subdivisão José Alzamora Neto",
        "slug": "subdivisao-jose-alzamora-neto",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Subdivisão Osni Strapasson",
        "slug": "subdivisao-osni-strapasson",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Taquari",
        "slug": "taquari",
        "kind": "Localidade em serviço municipal",
        "sourceTitle": "Prefeitura: áreas do abastecimento municipal",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/noticia/prefeitura_orienta_populacao_sobre_uso_consciente_da_agua_e_funcionamento_do_sistema_de_abastecimento_municipal",
        "note": ""
      },
      {
        "name": "Terra Boa",
        "slug": "terra-boa",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Timbu Velho",
        "slug": "timbu-velho",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Vila Chacrinhas",
        "slug": "vila-chacrinhas",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Vila Fumaça",
        "slug": "vila-fumaca",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Vila Santa Cecília",
        "slug": "vila-santa-cecilia",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Vila Sapo",
        "slug": "vila-sapo",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      },
      {
        "name": "Volta Grande",
        "slug": "volta-grande",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: roteiro de coleta urbano e rural",
        "sourceUrl": "https://campinagrandedosul.pr.gov.br/coleta-de-lixo",
        "note": "Roteiro operacional documenta o nome, mas não comprova que seja bairro legalmente delimitado."
      }
    ]
  },
  {
    "name": "Campo do Tenente",
    "slug": "campo-do-tenente",
    "summary": "Campo do Tenente integra a Região Metropolitana de Curitiba, conforme a relação de municípios da AMEP.",
    "coverage": "Cobertura parcial. Há projeto de definição de bairros no Plano Diretor, mas a lista legal consolidada e seus mapas não foram confirmados; não apresentamos minutas como leis vigentes.",
    "sources": [
      {
        "title": "AMEP: municípios da Região Metropolitana de Curitiba",
        "url": "https://www.amep.pr.gov.br/Pagina/Sobre-RM-de-Curitiba"
      },
      {
        "title": "Embrapa: referência de endereço em Lajeado",
        "url": "https://www.embrapa.br/en/codigo-florestal/produtores-de-sementes"
      },
      {
        "title": "Documento municipal de perímetro urbano, 2023",
        "url": "https://ecrie.com.br/sistema/conteudos/arquivo/a_177_1_1_22112023095936.pdf"
      }
    ],
    "places": [
      {
        "name": "Espírito Santo",
        "slug": "espirito-santo",
        "kind": "Referência territorial em documento de planejamento",
        "sourceTitle": "Documento municipal de perímetro urbano, 2023",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_177_1_1_22112023095936.pdf",
        "note": "A situação legal da proposta não foi confirmada; o registro comprova apenas a denominação na fonte histórica."
      },
      {
        "name": "Lajeado",
        "slug": "lajeado",
        "kind": "Localidade em referência territorial pública",
        "sourceTitle": "Embrapa: referência de endereço em Lajeado",
        "sourceUrl": "https://www.embrapa.br/en/codigo-florestal/produtores-de-sementes",
        "note": ""
      }
    ]
  },
  {
    "name": "Campo Largo",
    "slug": "campo-largo",
    "summary": "Campo Largo integra a Região Metropolitana de Curitiba, conforme a relação de municípios da AMEP.",
    "coverage": "Referências acadêmicas e legislativas, sem comprovação integral dos anexos consolidados da Lei de Bairros 2.421/2012. Distrito e bairro podem compartilhar denominação; não presumimos equivalência.",
    "sources": [
      {
        "title": "AMEP: municípios da Região Metropolitana de Curitiba",
        "url": "https://www.amep.pr.gov.br/Pagina/Sobre-RM-de-Curitiba"
      },
      {
        "title": "Universidade Tuiuti: Retratos da Paisagem",
        "url": "https://tuiuti.edu.br/wp-content/uploads/2022/12/ebook_retratos_paisagem_CC.pdf"
      },
      {
        "title": "Câmara de Campo Largo: relatório de sessão",
        "url": "https://sapl.campolargo.pr.leg.br/relatorios/733/sessao-plenaria-pdf"
      },
      {
        "title": "Prefeitura: arquivos e Lei de Bairros 2.421/2012",
        "url": "https://campolargo.atende.net/cidadao/pagina/arquivos"
      }
    ],
    "places": [
      {
        "name": "Águas Claras",
        "slug": "aguas-claras",
        "kind": "Referência territorial em publicação acadêmica",
        "sourceTitle": "Universidade Tuiuti: Retratos da Paisagem",
        "sourceUrl": "https://tuiuti.edu.br/wp-content/uploads/2022/12/ebook_retratos_paisagem_CC.pdf",
        "note": "Referência histórica. A classificação legal atual e os limites devem ser conferidos no cadastro municipal."
      },
      {
        "name": "Balbino Cunha",
        "slug": "balbino-cunha",
        "kind": "Referência territorial em publicação acadêmica",
        "sourceTitle": "Universidade Tuiuti: Retratos da Paisagem",
        "sourceUrl": "https://tuiuti.edu.br/wp-content/uploads/2022/12/ebook_retratos_paisagem_CC.pdf",
        "note": "Referência histórica. A classificação legal atual e os limites devem ser conferidos no cadastro municipal."
      },
      {
        "name": "Bateias",
        "slug": "bateias",
        "kind": "Referência territorial em publicação acadêmica",
        "sourceTitle": "Universidade Tuiuti: Retratos da Paisagem",
        "sourceUrl": "https://tuiuti.edu.br/wp-content/uploads/2022/12/ebook_retratos_paisagem_CC.pdf",
        "note": "Referência histórica. A classificação legal atual e os limites devem ser conferidos no cadastro municipal."
      },
      {
        "name": "Bom Jesus",
        "slug": "bom-jesus",
        "kind": "Referência territorial em publicação acadêmica",
        "sourceTitle": "Universidade Tuiuti: Retratos da Paisagem",
        "sourceUrl": "https://tuiuti.edu.br/wp-content/uploads/2022/12/ebook_retratos_paisagem_CC.pdf",
        "note": "Referência histórica. A classificação legal atual e os limites devem ser conferidos no cadastro municipal."
      },
      {
        "name": "Botiatuva",
        "slug": "botiatuva",
        "kind": "Referência territorial em publicação acadêmica",
        "sourceTitle": "Universidade Tuiuti: Retratos da Paisagem",
        "sourceUrl": "https://tuiuti.edu.br/wp-content/uploads/2022/12/ebook_retratos_paisagem_CC.pdf",
        "note": "Referência histórica. A classificação legal atual e os limites devem ser conferidos no cadastro municipal."
      },
      {
        "name": "Cambuí",
        "slug": "cambui",
        "kind": "Referência territorial em publicação acadêmica",
        "sourceTitle": "Universidade Tuiuti: Retratos da Paisagem",
        "sourceUrl": "https://tuiuti.edu.br/wp-content/uploads/2022/12/ebook_retratos_paisagem_CC.pdf",
        "note": "Referência histórica. A classificação legal atual e os limites devem ser conferidos no cadastro municipal."
      },
      {
        "name": "Centro",
        "slug": "centro",
        "kind": "Referência territorial em publicação acadêmica",
        "sourceTitle": "Universidade Tuiuti: Retratos da Paisagem",
        "sourceUrl": "https://tuiuti.edu.br/wp-content/uploads/2022/12/ebook_retratos_paisagem_CC.pdf",
        "note": "Referência histórica. A classificação legal atual e os limites devem ser conferidos no cadastro municipal."
      },
      {
        "name": "Cercadinho",
        "slug": "cercadinho",
        "kind": "Referência territorial em publicação acadêmica",
        "sourceTitle": "Universidade Tuiuti: Retratos da Paisagem",
        "sourceUrl": "https://tuiuti.edu.br/wp-content/uploads/2022/12/ebook_retratos_paisagem_CC.pdf",
        "note": "Referência histórica. A classificação legal atual e os limites devem ser conferidos no cadastro municipal."
      },
      {
        "name": "Colônia Dom Pedro",
        "slug": "colonia-dom-pedro",
        "kind": "Referência territorial em publicação acadêmica",
        "sourceTitle": "Universidade Tuiuti: Retratos da Paisagem",
        "sourceUrl": "https://tuiuti.edu.br/wp-content/uploads/2022/12/ebook_retratos_paisagem_CC.pdf",
        "note": "Referência histórica. A classificação legal atual e os limites devem ser conferidos no cadastro municipal."
      },
      {
        "name": "Colônia Figueiredo",
        "slug": "colonia-figueiredo",
        "kind": "Referência territorial em publicação acadêmica",
        "sourceTitle": "Universidade Tuiuti: Retratos da Paisagem",
        "sourceUrl": "https://tuiuti.edu.br/wp-content/uploads/2022/12/ebook_retratos_paisagem_CC.pdf",
        "note": "Referência histórica. A classificação legal atual e os limites devem ser conferidos no cadastro municipal."
      },
      {
        "name": "Colônia Monte Claro",
        "slug": "colonia-monte-claro",
        "kind": "Referência territorial em publicação acadêmica",
        "sourceTitle": "Universidade Tuiuti: Retratos da Paisagem",
        "sourceUrl": "https://tuiuti.edu.br/wp-content/uploads/2022/12/ebook_retratos_paisagem_CC.pdf",
        "note": "Referência histórica. A classificação legal atual e os limites devem ser conferidos no cadastro municipal."
      },
      {
        "name": "Ferraria",
        "slug": "ferraria",
        "kind": "Referência territorial em publicação acadêmica",
        "sourceTitle": "Universidade Tuiuti: Retratos da Paisagem",
        "sourceUrl": "https://tuiuti.edu.br/wp-content/uploads/2022/12/ebook_retratos_paisagem_CC.pdf",
        "note": "Referência histórica. A classificação legal atual e os limites devem ser conferidos no cadastro municipal."
      },
      {
        "name": "Itaboa",
        "slug": "itaboa",
        "kind": "Referência territorial em publicação acadêmica",
        "sourceTitle": "Universidade Tuiuti: Retratos da Paisagem",
        "sourceUrl": "https://tuiuti.edu.br/wp-content/uploads/2022/12/ebook_retratos_paisagem_CC.pdf",
        "note": "Referência histórica. A classificação legal atual e os limites devem ser conferidos no cadastro municipal."
      },
      {
        "name": "Itaqui",
        "slug": "itaqui",
        "kind": "Referência territorial em publicação acadêmica",
        "sourceTitle": "Universidade Tuiuti: Retratos da Paisagem",
        "sourceUrl": "https://tuiuti.edu.br/wp-content/uploads/2022/12/ebook_retratos_paisagem_CC.pdf",
        "note": "Referência histórica. A classificação legal atual e os limites devem ser conferidos no cadastro municipal."
      },
      {
        "name": "Itaqui de Cima",
        "slug": "itaqui-de-cima",
        "kind": "Referência territorial em publicação acadêmica",
        "sourceTitle": "Universidade Tuiuti: Retratos da Paisagem",
        "sourceUrl": "https://tuiuti.edu.br/wp-content/uploads/2022/12/ebook_retratos_paisagem_CC.pdf",
        "note": "Referência histórica. A classificação legal atual e os limites devem ser conferidos no cadastro municipal."
      },
      {
        "name": "Jardim Carmela",
        "slug": "jardim-carmela",
        "kind": "Nome local citado em documento legislativo",
        "sourceTitle": "Câmara de Campo Largo: relatório de sessão",
        "sourceUrl": "https://sapl.campolargo.pr.leg.br/relatorios/733/sessao-plenaria-pdf",
        "note": ""
      },
      {
        "name": "Nossa Senhora Aparecida",
        "slug": "nossa-senhora-aparecida",
        "kind": "Referência territorial em publicação acadêmica",
        "sourceTitle": "Universidade Tuiuti: Retratos da Paisagem",
        "sourceUrl": "https://tuiuti.edu.br/wp-content/uploads/2022/12/ebook_retratos_paisagem_CC.pdf",
        "note": "Referência histórica. A classificação legal atual e os limites devem ser conferidos no cadastro municipal."
      },
      {
        "name": "Nossa Senhora do Pilar",
        "slug": "nossa-senhora-do-pilar",
        "kind": "Referência territorial em publicação acadêmica",
        "sourceTitle": "Universidade Tuiuti: Retratos da Paisagem",
        "sourceUrl": "https://tuiuti.edu.br/wp-content/uploads/2022/12/ebook_retratos_paisagem_CC.pdf",
        "note": "Referência histórica. A classificação legal atual e os limites devem ser conferidos no cadastro municipal."
      },
      {
        "name": "Ouro Verde",
        "slug": "ouro-verde",
        "kind": "Referência territorial em publicação acadêmica",
        "sourceTitle": "Universidade Tuiuti: Retratos da Paisagem",
        "sourceUrl": "https://tuiuti.edu.br/wp-content/uploads/2022/12/ebook_retratos_paisagem_CC.pdf",
        "note": "Referência histórica. A classificação legal atual e os limites devem ser conferidos no cadastro municipal."
      },
      {
        "name": "Rivabem",
        "slug": "rivabem",
        "kind": "Referência territorial em publicação acadêmica",
        "sourceTitle": "Universidade Tuiuti: Retratos da Paisagem",
        "sourceUrl": "https://tuiuti.edu.br/wp-content/uploads/2022/12/ebook_retratos_paisagem_CC.pdf",
        "note": "Referência histórica. A classificação legal atual e os limites devem ser conferidos no cadastro municipal."
      },
      {
        "name": "Rondinha",
        "slug": "rondinha",
        "kind": "Referência territorial em publicação acadêmica",
        "sourceTitle": "Universidade Tuiuti: Retratos da Paisagem",
        "sourceUrl": "https://tuiuti.edu.br/wp-content/uploads/2022/12/ebook_retratos_paisagem_CC.pdf",
        "note": "Referência histórica. A classificação legal atual e os limites devem ser conferidos no cadastro municipal."
      },
      {
        "name": "Salgadinho",
        "slug": "salgadinho",
        "kind": "Referência territorial em publicação acadêmica",
        "sourceTitle": "Universidade Tuiuti: Retratos da Paisagem",
        "sourceUrl": "https://tuiuti.edu.br/wp-content/uploads/2022/12/ebook_retratos_paisagem_CC.pdf",
        "note": "Referência histórica. A classificação legal atual e os limites devem ser conferidos no cadastro municipal."
      },
      {
        "name": "Vila Bancária",
        "slug": "vila-bancaria",
        "kind": "Nome local citado em documento legislativo",
        "sourceTitle": "Câmara de Campo Largo: relatório de sessão",
        "sourceUrl": "https://sapl.campolargo.pr.leg.br/relatorios/733/sessao-plenaria-pdf",
        "note": ""
      },
      {
        "name": "Vila de Lourdes",
        "slug": "vila-de-lourdes",
        "kind": "Nome local citado em documento legislativo",
        "sourceTitle": "Câmara de Campo Largo: relatório de sessão",
        "sourceUrl": "https://sapl.campolargo.pr.leg.br/relatorios/733/sessao-plenaria-pdf",
        "note": ""
      },
      {
        "name": "Vila Solene",
        "slug": "vila-solene",
        "kind": "Nome local citado em documento legislativo",
        "sourceTitle": "Câmara de Campo Largo: relatório de sessão",
        "sourceUrl": "https://sapl.campolargo.pr.leg.br/relatorios/733/sessao-plenaria-pdf",
        "note": ""
      }
    ]
  },
  {
    "name": "Campo Magro",
    "slug": "campo-magro",
    "summary": "Campo Magro integra a Região Metropolitana de Curitiba, conforme a relação de municípios da AMEP.",
    "coverage": "Doze denominações de loteamentos verificadas no artigo 6º da Lei 142/2000. A lista de comunidades rurais e a classificação atual ainda não estão integralmente consolidadas.",
    "sources": [
      {
        "title": "AMEP: municípios da Região Metropolitana de Curitiba",
        "url": "https://www.amep.pr.gov.br/Pagina/Sobre-RM-de-Curitiba"
      },
      {
        "title": "Câmara: Lei 142/2000, artigo 6º",
        "url": "https://sapl.campomagro.pr.leg.br/media/sapl/public/normajuridica/2000/224/lei-142-.-2000.pdf"
      }
    ],
    "places": [
      {
        "name": "Jardim Boa Vista I",
        "slug": "jardim-boa-vista-i",
        "kind": "Loteamento citado na Lei 142/2000",
        "sourceTitle": "Câmara: Lei 142/2000, artigo 6º",
        "sourceUrl": "https://sapl.campomagro.pr.leg.br/media/sapl/public/normajuridica/2000/224/lei-142-.-2000.pdf",
        "note": "Referência documental histórica de loteamento. Não afirmamos que seja bairro legal atual."
      },
      {
        "name": "Jardim Boa Vista II",
        "slug": "jardim-boa-vista-ii",
        "kind": "Loteamento citado na Lei 142/2000",
        "sourceTitle": "Câmara: Lei 142/2000, artigo 6º",
        "sourceUrl": "https://sapl.campomagro.pr.leg.br/media/sapl/public/normajuridica/2000/224/lei-142-.-2000.pdf",
        "note": "Referência documental histórica de loteamento. Não afirmamos que seja bairro legal atual."
      },
      {
        "name": "Jardim Boa Vista III",
        "slug": "jardim-boa-vista-iii",
        "kind": "Loteamento citado na Lei 142/2000",
        "sourceTitle": "Câmara: Lei 142/2000, artigo 6º",
        "sourceUrl": "https://sapl.campomagro.pr.leg.br/media/sapl/public/normajuridica/2000/224/lei-142-.-2000.pdf",
        "note": "Referência documental histórica de loteamento. Não afirmamos que seja bairro legal atual."
      },
      {
        "name": "Jardim Boa Vista IV",
        "slug": "jardim-boa-vista-iv",
        "kind": "Loteamento citado na Lei 142/2000",
        "sourceTitle": "Câmara: Lei 142/2000, artigo 6º",
        "sourceUrl": "https://sapl.campomagro.pr.leg.br/media/sapl/public/normajuridica/2000/224/lei-142-.-2000.pdf",
        "note": "Referência documental histórica de loteamento. Não afirmamos que seja bairro legal atual."
      },
      {
        "name": "Jardim Cecília",
        "slug": "jardim-cecilia",
        "kind": "Loteamento citado na Lei 142/2000",
        "sourceTitle": "Câmara: Lei 142/2000, artigo 6º",
        "sourceUrl": "https://sapl.campomagro.pr.leg.br/media/sapl/public/normajuridica/2000/224/lei-142-.-2000.pdf",
        "note": "Referência documental histórica de loteamento. Não afirmamos que seja bairro legal atual."
      },
      {
        "name": "Jardim D'Água Boa",
        "slug": "jardim-d-agua-boa",
        "kind": "Loteamento citado na Lei 142/2000",
        "sourceTitle": "Câmara: Lei 142/2000, artigo 6º",
        "sourceUrl": "https://sapl.campomagro.pr.leg.br/media/sapl/public/normajuridica/2000/224/lei-142-.-2000.pdf",
        "note": "Referência documental histórica de loteamento. Não afirmamos que seja bairro legal atual."
      },
      {
        "name": "Jardim Novos Horizontes",
        "slug": "jardim-novos-horizontes",
        "kind": "Loteamento citado na Lei 142/2000",
        "sourceTitle": "Câmara: Lei 142/2000, artigo 6º",
        "sourceUrl": "https://sapl.campomagro.pr.leg.br/media/sapl/public/normajuridica/2000/224/lei-142-.-2000.pdf",
        "note": "Referência documental histórica de loteamento. Não afirmamos que seja bairro legal atual."
      },
      {
        "name": "Jardim O Bom Pastor",
        "slug": "jardim-o-bom-pastor",
        "kind": "Loteamento citado na Lei 142/2000",
        "sourceTitle": "Câmara: Lei 142/2000, artigo 6º",
        "sourceUrl": "https://sapl.campomagro.pr.leg.br/media/sapl/public/normajuridica/2000/224/lei-142-.-2000.pdf",
        "note": "Referência documental histórica de loteamento. Não afirmamos que seja bairro legal atual."
      },
      {
        "name": "Jardim Pioneiro",
        "slug": "jardim-pioneiro",
        "kind": "Loteamento citado na Lei 142/2000",
        "sourceTitle": "Câmara: Lei 142/2000, artigo 6º",
        "sourceUrl": "https://sapl.campomagro.pr.leg.br/media/sapl/public/normajuridica/2000/224/lei-142-.-2000.pdf",
        "note": "Referência documental histórica de loteamento. Não afirmamos que seja bairro legal atual."
      },
      {
        "name": "Jardim Veneza",
        "slug": "jardim-veneza",
        "kind": "Loteamento citado na Lei 142/2000",
        "sourceTitle": "Câmara: Lei 142/2000, artigo 6º",
        "sourceUrl": "https://sapl.campomagro.pr.leg.br/media/sapl/public/normajuridica/2000/224/lei-142-.-2000.pdf",
        "note": "Referência documental histórica de loteamento. Não afirmamos que seja bairro legal atual."
      },
      {
        "name": "Jardim Viviane",
        "slug": "jardim-viviane",
        "kind": "Loteamento citado na Lei 142/2000",
        "sourceTitle": "Câmara: Lei 142/2000, artigo 6º",
        "sourceUrl": "https://sapl.campomagro.pr.leg.br/media/sapl/public/normajuridica/2000/224/lei-142-.-2000.pdf",
        "note": "Referência documental histórica de loteamento. Não afirmamos que seja bairro legal atual."
      },
      {
        "name": "São Roque",
        "slug": "sao-roque",
        "kind": "Loteamento citado na Lei 142/2000",
        "sourceTitle": "Câmara: Lei 142/2000, artigo 6º",
        "sourceUrl": "https://sapl.campomagro.pr.leg.br/media/sapl/public/normajuridica/2000/224/lei-142-.-2000.pdf",
        "note": "Referência documental histórica de loteamento. Não afirmamos que seja bairro legal atual."
      }
    ]
  },
  {
    "name": "Cerro Azul",
    "slug": "cerro-azul",
    "summary": "Cerro Azul integra a Região Metropolitana de Curitiba, conforme a relação de municípios da AMEP.",
    "coverage": "Levantamento em ampliação. Não é uma lista exaustiva de bairros, vilas, loteamentos ou nomes populares.",
    "sources": [
      {
        "title": "AMEP: municípios da Região Metropolitana de Curitiba",
        "url": "https://www.amep.pr.gov.br/Pagina/Sobre-RM-de-Curitiba"
      },
      {
        "title": "Prefeitura: Plano Municipal de Saúde 2022–2025",
        "url": "https://www.cerroazul.pr.gov.br/documentos/legislacao/122210-planos-1-2021.pdf"
      }
    ],
    "places": [
      {
        "name": "Bairro das Rosas",
        "slug": "bairro-das-rosas",
        "kind": "Localidade em documento municipal",
        "sourceTitle": "Prefeitura: Plano Municipal de Saúde 2022–2025",
        "sourceUrl": "https://www.cerroazul.pr.gov.br/documentos/legislacao/122210-planos-1-2021.pdf",
        "note": "Classificação operacional do documento, não uma lei de delimitação de bairros."
      },
      {
        "name": "Bomba",
        "slug": "bomba",
        "kind": "Localidade em documento municipal",
        "sourceTitle": "Prefeitura: Plano Municipal de Saúde 2022–2025",
        "sourceUrl": "https://www.cerroazul.pr.gov.br/documentos/legislacao/122210-planos-1-2021.pdf",
        "note": "Classificação operacional do documento, não uma lei de delimitação de bairros."
      },
      {
        "name": "Casa Branca",
        "slug": "casa-branca",
        "kind": "Localidade em documento municipal",
        "sourceTitle": "Prefeitura: Plano Municipal de Saúde 2022–2025",
        "sourceUrl": "https://www.cerroazul.pr.gov.br/documentos/legislacao/122210-planos-1-2021.pdf",
        "note": "Classificação operacional do documento, não uma lei de delimitação de bairros."
      },
      {
        "name": "Centro",
        "slug": "centro",
        "kind": "Localidade em documento municipal",
        "sourceTitle": "Prefeitura: Plano Municipal de Saúde 2022–2025",
        "sourceUrl": "https://www.cerroazul.pr.gov.br/documentos/legislacao/122210-planos-1-2021.pdf",
        "note": "Classificação operacional do documento, não uma lei de delimitação de bairros."
      },
      {
        "name": "Guaraipos",
        "slug": "guaraipos",
        "kind": "Localidade em documento municipal",
        "sourceTitle": "Prefeitura: Plano Municipal de Saúde 2022–2025",
        "sourceUrl": "https://www.cerroazul.pr.gov.br/documentos/legislacao/122210-planos-1-2021.pdf",
        "note": "Classificação operacional do documento, não uma lei de delimitação de bairros."
      },
      {
        "name": "Lageado de Barra Bonita",
        "slug": "lageado-de-barra-bonita",
        "kind": "Localidade em documento municipal",
        "sourceTitle": "Prefeitura: Plano Municipal de Saúde 2022–2025",
        "sourceUrl": "https://www.cerroazul.pr.gov.br/documentos/legislacao/122210-planos-1-2021.pdf",
        "note": "Classificação operacional do documento, não uma lei de delimitação de bairros."
      },
      {
        "name": "Lageado Grande",
        "slug": "lageado-grande",
        "kind": "Localidade em documento municipal",
        "sourceTitle": "Prefeitura: Plano Municipal de Saúde 2022–2025",
        "sourceUrl": "https://www.cerroazul.pr.gov.br/documentos/legislacao/122210-planos-1-2021.pdf",
        "note": "Classificação operacional do documento, não uma lei de delimitação de bairros."
      },
      {
        "name": "Macuco",
        "slug": "macuco",
        "kind": "Localidade em documento municipal",
        "sourceTitle": "Prefeitura: Plano Municipal de Saúde 2022–2025",
        "sourceUrl": "https://www.cerroazul.pr.gov.br/documentos/legislacao/122210-planos-1-2021.pdf",
        "note": "Classificação operacional do documento, não uma lei de delimitação de bairros."
      },
      {
        "name": "Mato Preto",
        "slug": "mato-preto",
        "kind": "Localidade em documento municipal",
        "sourceTitle": "Prefeitura: Plano Municipal de Saúde 2022–2025",
        "sourceUrl": "https://www.cerroazul.pr.gov.br/documentos/legislacao/122210-planos-1-2021.pdf",
        "note": "Classificação operacional do documento, não uma lei de delimitação de bairros."
      },
      {
        "name": "Morro Grande",
        "slug": "morro-grande",
        "kind": "Localidade em documento municipal",
        "sourceTitle": "Prefeitura: Plano Municipal de Saúde 2022–2025",
        "sourceUrl": "https://www.cerroazul.pr.gov.br/documentos/legislacao/122210-planos-1-2021.pdf",
        "note": "Classificação operacional do documento, não uma lei de delimitação de bairros."
      },
      {
        "name": "Pinhal Grande",
        "slug": "pinhal-grande",
        "kind": "Localidade em documento municipal",
        "sourceTitle": "Prefeitura: Plano Municipal de Saúde 2022–2025",
        "sourceUrl": "https://www.cerroazul.pr.gov.br/documentos/legislacao/122210-planos-1-2021.pdf",
        "note": "Classificação operacional do documento, não uma lei de delimitação de bairros."
      },
      {
        "name": "Ribeirão do Rocha",
        "slug": "ribeirao-do-rocha",
        "kind": "Localidade em documento municipal",
        "sourceTitle": "Prefeitura: Plano Municipal de Saúde 2022–2025",
        "sourceUrl": "https://www.cerroazul.pr.gov.br/documentos/legislacao/122210-planos-1-2021.pdf",
        "note": "Classificação operacional do documento, não uma lei de delimitação de bairros."
      },
      {
        "name": "São Sebastião",
        "slug": "sao-sebastiao",
        "kind": "Localidade em documento municipal",
        "sourceTitle": "Prefeitura: Plano Municipal de Saúde 2022–2025",
        "sourceUrl": "https://www.cerroazul.pr.gov.br/documentos/legislacao/122210-planos-1-2021.pdf",
        "note": "Classificação operacional do documento, não uma lei de delimitação de bairros."
      },
      {
        "name": "Taquara",
        "slug": "taquara",
        "kind": "Localidade em documento municipal",
        "sourceTitle": "Prefeitura: Plano Municipal de Saúde 2022–2025",
        "sourceUrl": "https://www.cerroazul.pr.gov.br/documentos/legislacao/122210-planos-1-2021.pdf",
        "note": "Classificação operacional do documento, não uma lei de delimitação de bairros."
      },
      {
        "name": "Teixeira",
        "slug": "teixeira",
        "kind": "Localidade em documento municipal",
        "sourceTitle": "Prefeitura: Plano Municipal de Saúde 2022–2025",
        "sourceUrl": "https://www.cerroazul.pr.gov.br/documentos/legislacao/122210-planos-1-2021.pdf",
        "note": "Classificação operacional do documento, não uma lei de delimitação de bairros."
      },
      {
        "name": "Turvo",
        "slug": "turvo",
        "kind": "Localidade em documento municipal",
        "sourceTitle": "Prefeitura: Plano Municipal de Saúde 2022–2025",
        "sourceUrl": "https://www.cerroazul.pr.gov.br/documentos/legislacao/122210-planos-1-2021.pdf",
        "note": "Classificação operacional do documento, não uma lei de delimitação de bairros."
      }
    ]
  },
  {
    "name": "Colombo",
    "slug": "colombo",
    "summary": "Colombo integra a Região Metropolitana de Curitiba, conforme a relação de municípios da AMEP.",
    "coverage": "42 bairros relacionados pela Prefeitura: 20 rurais e 22 urbanos. O município informa mais de 200 loteamentos, que não estão todos representados neste diretório.",
    "sources": [
      {
        "title": "AMEP: municípios da Região Metropolitana de Curitiba",
        "url": "https://www.amep.pr.gov.br/Pagina/Sobre-RM-de-Curitiba"
      },
      {
        "title": "Prefeitura: dados gerais de Colombo",
        "url": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/"
      }
    ],
    "places": [
      {
        "name": "Águas Fervidas",
        "slug": "aguas-fervidas",
        "kind": "Bairro rural relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Arruda",
        "slug": "arruda",
        "kind": "Bairro urbano relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Atuba",
        "slug": "atuba",
        "kind": "Bairro urbano relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Bacaetava",
        "slug": "bacaetava",
        "kind": "Bairro rural relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Boicininga",
        "slug": "boicininga",
        "kind": "Bairro rural relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Butiatumirim",
        "slug": "butiatumirim",
        "kind": "Bairro rural relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Campestre",
        "slug": "campestre",
        "kind": "Bairro rural relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Campo Pequeno",
        "slug": "campo-pequeno",
        "kind": "Bairro urbano relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Canguiri",
        "slug": "canguiri",
        "kind": "Bairro urbano relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Capivari",
        "slug": "capivari",
        "kind": "Bairro rural relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Centro",
        "slug": "centro",
        "kind": "Bairro urbano relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Colônia Antonio Prado",
        "slug": "colonia-antonio-prado",
        "kind": "Bairro rural relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Colônia Faria",
        "slug": "colonia-faria",
        "kind": "Bairro rural relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Das Graças",
        "slug": "das-gracas",
        "kind": "Bairro urbano relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Embú",
        "slug": "embu",
        "kind": "Bairro urbano relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Fátima",
        "slug": "fatima",
        "kind": "Bairro urbano relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Gabirobal",
        "slug": "gabirobal",
        "kind": "Bairro rural relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Guaraituba",
        "slug": "guaraituba",
        "kind": "Bairro urbano relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Guarani",
        "slug": "guarani",
        "kind": "Bairro urbano relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Imbuial",
        "slug": "imbuial",
        "kind": "Bairro rural relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Itajacuru",
        "slug": "itajacuru",
        "kind": "Bairro rural relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Maracanã",
        "slug": "maracana",
        "kind": "Bairro urbano relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Mauá",
        "slug": "maua",
        "kind": "Bairro urbano relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Monza",
        "slug": "monza",
        "kind": "Bairro urbano relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Morro Grande",
        "slug": "morro-grande",
        "kind": "Bairro rural relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Osasco",
        "slug": "osasco",
        "kind": "Bairro urbano relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Palmital",
        "slug": "palmital",
        "kind": "Bairro urbano relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Paloma",
        "slug": "paloma",
        "kind": "Bairro urbano relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Poço Negro",
        "slug": "poco-negro",
        "kind": "Bairro rural relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Ribeirão das Onças",
        "slug": "ribeirao-das-oncas",
        "kind": "Bairro rural relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Rincão",
        "slug": "rincao",
        "kind": "Bairro urbano relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Rio Verde",
        "slug": "rio-verde",
        "kind": "Bairro urbano relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Roça Grande",
        "slug": "roca-grande",
        "kind": "Bairro urbano relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Roseira",
        "slug": "roseira",
        "kind": "Bairro rural relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Santa Gema",
        "slug": "santa-gema",
        "kind": "Bairro rural relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Santa Terezinha",
        "slug": "santa-terezinha",
        "kind": "Bairro urbano relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "São Dimas",
        "slug": "sao-dimas",
        "kind": "Bairro urbano relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "São Gabriel",
        "slug": "sao-gabriel",
        "kind": "Bairro urbano relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "São João",
        "slug": "sao-joao",
        "kind": "Bairro rural relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Sapopema",
        "slug": "sapopema",
        "kind": "Bairro rural relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Serrinha",
        "slug": "serrinha",
        "kind": "Bairro rural relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      },
      {
        "name": "Uvaranal",
        "slug": "uvaranal",
        "kind": "Bairro rural relacionado pela Prefeitura",
        "sourceTitle": "Prefeitura: dados gerais de Colombo",
        "sourceUrl": "https://prefeitura.colombo.pr.gov.br/dados-gerais-colombo/",
        "note": ""
      }
    ]
  },
  {
    "name": "Contenda",
    "slug": "contenda",
    "summary": "Contenda integra a Região Metropolitana de Curitiba, conforme a relação de municípios da AMEP.",
    "coverage": "Nomes de planejamento e serviços públicos. Variantes Itaperubá/Itapirubá e Shangrilá/Chácara Shangrilá exigem confirmação pelo endereço. Não é inventário integral das leis consolidadas de 2024.",
    "sources": [
      {
        "title": "AMEP: municípios da Região Metropolitana de Curitiba",
        "url": "https://www.amep.pr.gov.br/Pagina/Sobre-RM-de-Curitiba"
      },
      {
        "title": "Prefeitura: Plano Diretor, volume final 2023",
        "url": "https://contenda.pr.gov.br/uploads/pagina/arquivos/RPDM-Contenda-Volume-Final-16-11-23-compactado.pdf"
      },
      {
        "title": "Prefeitura: atendimento em Catanduvas do Sul",
        "url": "https://contenda.pr.gov.br/noticias/detalhes?id=782"
      },
      {
        "title": "Prefeitura: roteiro de coleta",
        "url": "https://contenda.pr.gov.br/noticias/detalhes?id=805"
      }
    ],
    "places": [
      {
        "name": "Campestre",
        "slug": "campestre",
        "kind": "Referência local em roteiro municipal",
        "sourceTitle": "Prefeitura: roteiro de coleta",
        "sourceUrl": "https://contenda.pr.gov.br/noticias/detalhes?id=805",
        "note": ""
      },
      {
        "name": "Catanduvas do Sul",
        "slug": "catanduvas-do-sul",
        "kind": "Distrito citado pela Prefeitura",
        "sourceTitle": "Prefeitura: atendimento em Catanduvas do Sul",
        "sourceUrl": "https://contenda.pr.gov.br/noticias/detalhes?id=782",
        "note": ""
      },
      {
        "name": "Centro",
        "slug": "centro",
        "kind": "Referência em mapa de planejamento",
        "sourceTitle": "Prefeitura: Plano Diretor, volume final 2023",
        "sourceUrl": "https://contenda.pr.gov.br/uploads/pagina/arquivos/RPDM-Contenda-Volume-Final-16-11-23-compactado.pdf",
        "note": ""
      },
      {
        "name": "Conjunto Nossa Senhora Aparecida",
        "slug": "conjunto-nossa-senhora-aparecida",
        "kind": "Referência local em roteiro municipal",
        "sourceTitle": "Prefeitura: roteiro de coleta",
        "sourceUrl": "https://contenda.pr.gov.br/noticias/detalhes?id=805",
        "note": ""
      },
      {
        "name": "Elisabete",
        "slug": "elisabete",
        "kind": "Referência em mapa de planejamento",
        "sourceTitle": "Prefeitura: Plano Diretor, volume final 2023",
        "sourceUrl": "https://contenda.pr.gov.br/uploads/pagina/arquivos/RPDM-Contenda-Volume-Final-16-11-23-compactado.pdf",
        "note": ""
      },
      {
        "name": "Fundo do Mato",
        "slug": "fundo-do-mato",
        "kind": "Referência local em roteiro municipal",
        "sourceTitle": "Prefeitura: roteiro de coleta",
        "sourceUrl": "https://contenda.pr.gov.br/noticias/detalhes?id=805",
        "note": ""
      },
      {
        "name": "Itagassava",
        "slug": "itagassava",
        "kind": "Referência local em roteiro municipal",
        "sourceTitle": "Prefeitura: roteiro de coleta",
        "sourceUrl": "https://contenda.pr.gov.br/noticias/detalhes?id=805",
        "note": ""
      },
      {
        "name": "Itaperubá",
        "slug": "itaperuba",
        "kind": "Referência em mapa de planejamento",
        "sourceTitle": "Prefeitura: Plano Diretor, volume final 2023",
        "sourceUrl": "https://contenda.pr.gov.br/uploads/pagina/arquivos/RPDM-Contenda-Volume-Final-16-11-23-compactado.pdf",
        "note": ""
      },
      {
        "name": "Jardim Ana Maria Cordeiro",
        "slug": "jardim-ana-maria-cordeiro",
        "kind": "Referência local em roteiro municipal",
        "sourceTitle": "Prefeitura: roteiro de coleta",
        "sourceUrl": "https://contenda.pr.gov.br/noticias/detalhes?id=805",
        "note": ""
      },
      {
        "name": "Jardim Carlito Rudek",
        "slug": "jardim-carlito-rudek",
        "kind": "Referência local em roteiro municipal",
        "sourceTitle": "Prefeitura: roteiro de coleta",
        "sourceUrl": "https://contenda.pr.gov.br/noticias/detalhes?id=805",
        "note": ""
      },
      {
        "name": "Jardim Dona Anita",
        "slug": "jardim-dona-anita",
        "kind": "Referência local em roteiro municipal",
        "sourceTitle": "Prefeitura: roteiro de coleta",
        "sourceUrl": "https://contenda.pr.gov.br/noticias/detalhes?id=805",
        "note": ""
      },
      {
        "name": "Jardim Ernesto Henrique Luís Piel",
        "slug": "jardim-ernesto-henrique-luis-piel",
        "kind": "Referência local em roteiro municipal",
        "sourceTitle": "Prefeitura: roteiro de coleta",
        "sourceUrl": "https://contenda.pr.gov.br/noticias/detalhes?id=805",
        "note": ""
      },
      {
        "name": "Jardim Esplanada",
        "slug": "jardim-esplanada",
        "kind": "Referência local em roteiro municipal",
        "sourceTitle": "Prefeitura: roteiro de coleta",
        "sourceUrl": "https://contenda.pr.gov.br/noticias/detalhes?id=805",
        "note": ""
      },
      {
        "name": "Jardim Paraná",
        "slug": "jardim-parana",
        "kind": "Referência local em roteiro municipal",
        "sourceTitle": "Prefeitura: roteiro de coleta",
        "sourceUrl": "https://contenda.pr.gov.br/noticias/detalhes?id=805",
        "note": ""
      },
      {
        "name": "Loteamento Santa Izabel",
        "slug": "loteamento-santa-izabel",
        "kind": "Referência local em roteiro municipal",
        "sourceTitle": "Prefeitura: roteiro de coleta",
        "sourceUrl": "https://contenda.pr.gov.br/noticias/detalhes?id=805",
        "note": ""
      },
      {
        "name": "Olaria",
        "slug": "olaria",
        "kind": "Referência em mapa de planejamento",
        "sourceTitle": "Prefeitura: Plano Diretor, volume final 2023",
        "sourceUrl": "https://contenda.pr.gov.br/uploads/pagina/arquivos/RPDM-Contenda-Volume-Final-16-11-23-compactado.pdf",
        "note": ""
      },
      {
        "name": "Paulista",
        "slug": "paulista",
        "kind": "Referência em mapa de planejamento",
        "sourceTitle": "Prefeitura: Plano Diretor, volume final 2023",
        "sourceUrl": "https://contenda.pr.gov.br/uploads/pagina/arquivos/RPDM-Contenda-Volume-Final-16-11-23-compactado.pdf",
        "note": ""
      },
      {
        "name": "Pedro Machado",
        "slug": "pedro-machado",
        "kind": "Referência em mapa de planejamento",
        "sourceTitle": "Prefeitura: Plano Diretor, volume final 2023",
        "sourceUrl": "https://contenda.pr.gov.br/uploads/pagina/arquivos/RPDM-Contenda-Volume-Final-16-11-23-compactado.pdf",
        "note": ""
      },
      {
        "name": "Pepes",
        "slug": "pepes",
        "kind": "Referência em mapa de planejamento",
        "sourceTitle": "Prefeitura: Plano Diretor, volume final 2023",
        "sourceUrl": "https://contenda.pr.gov.br/uploads/pagina/arquivos/RPDM-Contenda-Volume-Final-16-11-23-compactado.pdf",
        "note": ""
      },
      {
        "name": "São João",
        "slug": "sao-joao",
        "kind": "Referência em mapa de planejamento",
        "sourceTitle": "Prefeitura: Plano Diretor, volume final 2023",
        "sourceUrl": "https://contenda.pr.gov.br/uploads/pagina/arquivos/RPDM-Contenda-Volume-Final-16-11-23-compactado.pdf",
        "note": ""
      },
      {
        "name": "Serrinha",
        "slug": "serrinha",
        "kind": "Referência em mapa de planejamento",
        "sourceTitle": "Prefeitura: Plano Diretor, volume final 2023",
        "sourceUrl": "https://contenda.pr.gov.br/uploads/pagina/arquivos/RPDM-Contenda-Volume-Final-16-11-23-compactado.pdf",
        "note": ""
      },
      {
        "name": "Shangrilá",
        "slug": "shangrila",
        "kind": "Referência em mapa de planejamento",
        "sourceTitle": "Prefeitura: Plano Diretor, volume final 2023",
        "sourceUrl": "https://contenda.pr.gov.br/uploads/pagina/arquivos/RPDM-Contenda-Volume-Final-16-11-23-compactado.pdf",
        "note": ""
      },
      {
        "name": "Vila Camargo",
        "slug": "vila-camargo",
        "kind": "Referência em mapa de planejamento",
        "sourceTitle": "Prefeitura: Plano Diretor, volume final 2023",
        "sourceUrl": "https://contenda.pr.gov.br/uploads/pagina/arquivos/RPDM-Contenda-Volume-Final-16-11-23-compactado.pdf",
        "note": ""
      },
      {
        "name": "Vila Ico",
        "slug": "vila-ico",
        "kind": "Referência em mapa de planejamento",
        "sourceTitle": "Prefeitura: Plano Diretor, volume final 2023",
        "sourceUrl": "https://contenda.pr.gov.br/uploads/pagina/arquivos/RPDM-Contenda-Volume-Final-16-11-23-compactado.pdf",
        "note": ""
      },
      {
        "name": "Vila Vernick",
        "slug": "vila-vernick",
        "kind": "Referência em mapa de planejamento",
        "sourceTitle": "Prefeitura: Plano Diretor, volume final 2023",
        "sourceUrl": "https://contenda.pr.gov.br/uploads/pagina/arquivos/RPDM-Contenda-Volume-Final-16-11-23-compactado.pdf",
        "note": ""
      }
    ]
  },
  {
    "name": "Doutor Ulysses",
    "slug": "doutor-ulysses",
    "summary": "Doutor Ulysses integra a Região Metropolitana de Curitiba, conforme a relação de municípios da AMEP.",
    "coverage": "Levantamento em ampliação. Não é uma lista exaustiva de bairros, vilas, loteamentos ou nomes populares.",
    "sources": [
      {
        "title": "AMEP: municípios da Região Metropolitana de Curitiba",
        "url": "https://www.amep.pr.gov.br/Pagina/Sobre-RM-de-Curitiba"
      },
      {
        "title": "Prefeitura: divisão territorial de atendimento",
        "url": "https://doutorulysses.pr.gov.br/documentos/arquivos/arquivo_divisao-territorial-esf-doutor-ulysses161009.pdf"
      }
    ],
    "places": [
      {
        "name": "Bairro dos Cordeiros",
        "slug": "bairro-dos-cordeiros",
        "kind": "Referência territorial em serviço municipal",
        "sourceTitle": "Prefeitura: divisão territorial de atendimento",
        "sourceUrl": "https://doutorulysses.pr.gov.br/documentos/arquivos/arquivo_divisao-territorial-esf-doutor-ulysses161009.pdf",
        "note": "A divisão do serviço público não equivale a uma lei de criação de bairros."
      },
      {
        "name": "Barra do Teixeira",
        "slug": "barra-do-teixeira",
        "kind": "Referência territorial em serviço municipal",
        "sourceTitle": "Prefeitura: divisão territorial de atendimento",
        "sourceUrl": "https://doutorulysses.pr.gov.br/documentos/arquivos/arquivo_divisao-territorial-esf-doutor-ulysses161009.pdf",
        "note": "A divisão do serviço público não equivale a uma lei de criação de bairros."
      },
      {
        "name": "Caraguatá",
        "slug": "caraguata",
        "kind": "Referência territorial em serviço municipal",
        "sourceTitle": "Prefeitura: divisão territorial de atendimento",
        "sourceUrl": "https://doutorulysses.pr.gov.br/documentos/arquivos/arquivo_divisao-territorial-esf-doutor-ulysses161009.pdf",
        "note": "A divisão do serviço público não equivale a uma lei de criação de bairros."
      },
      {
        "name": "Cedro",
        "slug": "cedro",
        "kind": "Referência territorial em serviço municipal",
        "sourceTitle": "Prefeitura: divisão territorial de atendimento",
        "sourceUrl": "https://doutorulysses.pr.gov.br/documentos/arquivos/arquivo_divisao-territorial-esf-doutor-ulysses161009.pdf",
        "note": "A divisão do serviço público não equivale a uma lei de criação de bairros."
      },
      {
        "name": "Centro",
        "slug": "centro",
        "kind": "Referência territorial em serviço municipal",
        "sourceTitle": "Prefeitura: divisão territorial de atendimento",
        "sourceUrl": "https://doutorulysses.pr.gov.br/documentos/arquivos/arquivo_divisao-territorial-esf-doutor-ulysses161009.pdf",
        "note": "A divisão do serviço público não equivale a uma lei de criação de bairros."
      },
      {
        "name": "Cerrado",
        "slug": "cerrado",
        "kind": "Referência territorial em serviço municipal",
        "sourceTitle": "Prefeitura: divisão territorial de atendimento",
        "sourceUrl": "https://doutorulysses.pr.gov.br/documentos/arquivos/arquivo_divisao-territorial-esf-doutor-ulysses161009.pdf",
        "note": "A divisão do serviço público não equivale a uma lei de criação de bairros."
      },
      {
        "name": "Faxinal de Cima",
        "slug": "faxinal-de-cima",
        "kind": "Referência territorial em serviço municipal",
        "sourceTitle": "Prefeitura: divisão territorial de atendimento",
        "sourceUrl": "https://doutorulysses.pr.gov.br/documentos/arquivos/arquivo_divisao-territorial-esf-doutor-ulysses161009.pdf",
        "note": "A divisão do serviço público não equivale a uma lei de criação de bairros."
      },
      {
        "name": "Joaquim Monteiro",
        "slug": "joaquim-monteiro",
        "kind": "Referência territorial em serviço municipal",
        "sourceTitle": "Prefeitura: divisão territorial de atendimento",
        "sourceUrl": "https://doutorulysses.pr.gov.br/documentos/arquivos/arquivo_divisao-territorial-esf-doutor-ulysses161009.pdf",
        "note": "A divisão do serviço público não equivale a uma lei de criação de bairros."
      },
      {
        "name": "Sete Quedas",
        "slug": "sete-quedas",
        "kind": "Referência territorial em serviço municipal",
        "sourceTitle": "Prefeitura: divisão territorial de atendimento",
        "sourceUrl": "https://doutorulysses.pr.gov.br/documentos/arquivos/arquivo_divisao-territorial-esf-doutor-ulysses161009.pdf",
        "note": "A divisão do serviço público não equivale a uma lei de criação de bairros."
      },
      {
        "name": "Teixeira",
        "slug": "teixeira",
        "kind": "Referência territorial em serviço municipal",
        "sourceTitle": "Prefeitura: divisão territorial de atendimento",
        "sourceUrl": "https://doutorulysses.pr.gov.br/documentos/arquivos/arquivo_divisao-territorial-esf-doutor-ulysses161009.pdf",
        "note": "A divisão do serviço público não equivale a uma lei de criação de bairros."
      },
      {
        "name": "Tigre",
        "slug": "tigre",
        "kind": "Referência territorial em serviço municipal",
        "sourceTitle": "Prefeitura: divisão territorial de atendimento",
        "sourceUrl": "https://doutorulysses.pr.gov.br/documentos/arquivos/arquivo_divisao-territorial-esf-doutor-ulysses161009.pdf",
        "note": "A divisão do serviço público não equivale a uma lei de criação de bairros."
      }
    ]
  },
  {
    "name": "Fazenda Rio Grande",
    "slug": "fazenda-rio-grande",
    "summary": "Fazenda Rio Grande integra a Região Metropolitana de Curitiba, conforme a relação de municípios da AMEP.",
    "coverage": "13 denominações no diagnóstico anterior e quatro nomes de serviços públicos. Diagnóstico de 2025 menciona 14 bairros, mas a relação atual completa ainda não está consolidada neste diretório. Não tratamos Santa Maria automaticamente como o 14º bairro.",
    "sources": [
      {
        "title": "AMEP: municípios da Região Metropolitana de Curitiba",
        "url": "https://www.amep.pr.gov.br/Pagina/Sobre-RM-de-Curitiba"
      },
      {
        "title": "Diagnóstico municipal de 2022",
        "url": "https://ecrie.com.br/sistema/conteudos/arquivo/a_61_2_4_29092022152143.pdf"
      },
      {
        "title": "Sanepar: referências de abastecimento, 2026",
        "url": "https://www.sanepar.com.br/utilidades-publicas/curitiba-sao-jose-dos-pinhais-fazenda-rio-grande-19-04-2026/curitiba-sao-jose-dos-pinhais-fazenda-rio-grande"
      }
    ],
    "places": [
      {
        "name": "Campo do Rio",
        "slug": "campo-do-rio",
        "kind": "Bairro em diagnóstico municipal histórico",
        "sourceTitle": "Diagnóstico municipal de 2022",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_61_2_4_29092022152143.pdf",
        "note": ""
      },
      {
        "name": "Centro",
        "slug": "centro",
        "kind": "Bairro em diagnóstico municipal histórico",
        "sourceTitle": "Diagnóstico municipal de 2022",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_61_2_4_29092022152143.pdf",
        "note": ""
      },
      {
        "name": "Estados",
        "slug": "estados",
        "kind": "Bairro em diagnóstico municipal histórico",
        "sourceTitle": "Diagnóstico municipal de 2022",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_61_2_4_29092022152143.pdf",
        "note": ""
      },
      {
        "name": "Eucaliptos",
        "slug": "eucaliptos",
        "kind": "Bairro em diagnóstico municipal histórico",
        "sourceTitle": "Diagnóstico municipal de 2022",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_61_2_4_29092022152143.pdf",
        "note": ""
      },
      {
        "name": "Gralha Azul",
        "slug": "gralha-azul",
        "kind": "Bairro em diagnóstico municipal histórico",
        "sourceTitle": "Diagnóstico municipal de 2022",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_61_2_4_29092022152143.pdf",
        "note": ""
      },
      {
        "name": "Iguaçu",
        "slug": "iguacu",
        "kind": "Bairro em diagnóstico municipal histórico",
        "sourceTitle": "Diagnóstico municipal de 2022",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_61_2_4_29092022152143.pdf",
        "note": ""
      },
      {
        "name": "Industrial I",
        "slug": "industrial-i",
        "kind": "Bairro em diagnóstico municipal histórico",
        "sourceTitle": "Diagnóstico municipal de 2022",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_61_2_4_29092022152143.pdf",
        "note": ""
      },
      {
        "name": "Industrial II",
        "slug": "industrial-ii",
        "kind": "Bairro em diagnóstico municipal histórico",
        "sourceTitle": "Diagnóstico municipal de 2022",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_61_2_4_29092022152143.pdf",
        "note": ""
      },
      {
        "name": "Jardim Veneza",
        "slug": "jardim-veneza",
        "kind": "Bairro em diagnóstico municipal histórico",
        "sourceTitle": "Diagnóstico municipal de 2022",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_61_2_4_29092022152143.pdf",
        "note": ""
      },
      {
        "name": "Nações",
        "slug": "nacoes",
        "kind": "Bairro em diagnóstico municipal histórico",
        "sourceTitle": "Diagnóstico municipal de 2022",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_61_2_4_29092022152143.pdf",
        "note": ""
      },
      {
        "name": "Parque Tecnológico",
        "slug": "parque-tecnologico",
        "kind": "Bairro em diagnóstico municipal histórico",
        "sourceTitle": "Diagnóstico municipal de 2022",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_61_2_4_29092022152143.pdf",
        "note": ""
      },
      {
        "name": "Pioneiros",
        "slug": "pioneiros",
        "kind": "Bairro em diagnóstico municipal histórico",
        "sourceTitle": "Diagnóstico municipal de 2022",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_61_2_4_29092022152143.pdf",
        "note": ""
      },
      {
        "name": "Santa Helena",
        "slug": "santa-helena",
        "kind": "Localidade citada em serviço público",
        "sourceTitle": "Sanepar: referências de abastecimento, 2026",
        "sourceUrl": "https://www.sanepar.com.br/utilidades-publicas/curitiba-sao-jose-dos-pinhais-fazenda-rio-grande-19-04-2026/curitiba-sao-jose-dos-pinhais-fazenda-rio-grande",
        "note": ""
      },
      {
        "name": "Santa Maria",
        "slug": "santa-maria",
        "kind": "Localidade citada em serviço público",
        "sourceTitle": "Sanepar: referências de abastecimento, 2026",
        "sourceUrl": "https://www.sanepar.com.br/utilidades-publicas/curitiba-sao-jose-dos-pinhais-fazenda-rio-grande-19-04-2026/curitiba-sao-jose-dos-pinhais-fazenda-rio-grande",
        "note": ""
      },
      {
        "name": "Santa Terezinha",
        "slug": "santa-terezinha",
        "kind": "Bairro em diagnóstico municipal histórico",
        "sourceTitle": "Diagnóstico municipal de 2022",
        "sourceUrl": "https://ecrie.com.br/sistema/conteudos/arquivo/a_61_2_4_29092022152143.pdf",
        "note": ""
      },
      {
        "name": "Santarém",
        "slug": "santarem",
        "kind": "Localidade citada em serviço público",
        "sourceTitle": "Sanepar: referências de abastecimento, 2026",
        "sourceUrl": "https://www.sanepar.com.br/utilidades-publicas/curitiba-sao-jose-dos-pinhais-fazenda-rio-grande-19-04-2026/curitiba-sao-jose-dos-pinhais-fazenda-rio-grande",
        "note": ""
      },
      {
        "name": "São Sebastião",
        "slug": "sao-sebastiao",
        "kind": "Localidade citada em serviço público",
        "sourceTitle": "Sanepar: referências de abastecimento, 2026",
        "sourceUrl": "https://www.sanepar.com.br/utilidades-publicas/curitiba-sao-jose-dos-pinhais-fazenda-rio-grande-19-04-2026/curitiba-sao-jose-dos-pinhais-fazenda-rio-grande",
        "note": ""
      }
    ]
  },
  {
    "name": "Itaperuçu",
    "slug": "itaperucu",
    "summary": "Itaperuçu integra a Região Metropolitana de Curitiba, conforme a relação de municípios da AMEP.",
    "coverage": "Nomes documentados no roteiro municipal de coleta. A página de dados do município menciona 38 bairros; este roteiro não comprova cadastro integral nem limites legais.",
    "sources": [
      {
        "title": "AMEP: municípios da Região Metropolitana de Curitiba",
        "url": "https://www.amep.pr.gov.br/Pagina/Sobre-RM-de-Curitiba"
      },
      {
        "title": "Prefeitura: coleta seletiva por bairro",
        "url": "https://itaperucu.pr.gov.br/coleta-seletiva-em-itaperucu-confira-os-dias-de-coleta-em-cada-bairro/"
      }
    ],
    "places": [
      {
        "name": "Bela Vista",
        "slug": "bela-vista",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: coleta seletiva por bairro",
        "sourceUrl": "https://itaperucu.pr.gov.br/coleta-seletiva-em-itaperucu-confira-os-dias-de-coleta-em-cada-bairro/",
        "note": ""
      },
      {
        "name": "Butierinho",
        "slug": "butierinho",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: coleta seletiva por bairro",
        "sourceUrl": "https://itaperucu.pr.gov.br/coleta-seletiva-em-itaperucu-confira-os-dias-de-coleta-em-cada-bairro/",
        "note": ""
      },
      {
        "name": "Campina do Cabral",
        "slug": "campina-do-cabral",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: coleta seletiva por bairro",
        "sourceUrl": "https://itaperucu.pr.gov.br/coleta-seletiva-em-itaperucu-confira-os-dias-de-coleta-em-cada-bairro/",
        "note": ""
      },
      {
        "name": "Candidos",
        "slug": "candidos",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: coleta seletiva por bairro",
        "sourceUrl": "https://itaperucu.pr.gov.br/coleta-seletiva-em-itaperucu-confira-os-dias-de-coleta-em-cada-bairro/",
        "note": ""
      },
      {
        "name": "Capinzal",
        "slug": "capinzal",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: coleta seletiva por bairro",
        "sourceUrl": "https://itaperucu.pr.gov.br/coleta-seletiva-em-itaperucu-confira-os-dias-de-coleta-em-cada-bairro/",
        "note": ""
      },
      {
        "name": "Catarinas",
        "slug": "catarinas",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: coleta seletiva por bairro",
        "sourceUrl": "https://itaperucu.pr.gov.br/coleta-seletiva-em-itaperucu-confira-os-dias-de-coleta-em-cada-bairro/",
        "note": ""
      },
      {
        "name": "Centro",
        "slug": "centro",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: coleta seletiva por bairro",
        "sourceUrl": "https://itaperucu.pr.gov.br/coleta-seletiva-em-itaperucu-confira-os-dias-de-coleta-em-cada-bairro/",
        "note": ""
      },
      {
        "name": "Cimento Itaú",
        "slug": "cimento-itau",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: coleta seletiva por bairro",
        "sourceUrl": "https://itaperucu.pr.gov.br/coleta-seletiva-em-itaperucu-confira-os-dias-de-coleta-em-cada-bairro/",
        "note": ""
      },
      {
        "name": "Jardim Alvorada",
        "slug": "jardim-alvorada",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: coleta seletiva por bairro",
        "sourceUrl": "https://itaperucu.pr.gov.br/coleta-seletiva-em-itaperucu-confira-os-dias-de-coleta-em-cada-bairro/",
        "note": ""
      },
      {
        "name": "Jardim Fabiana",
        "slug": "jardim-fabiana",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: coleta seletiva por bairro",
        "sourceUrl": "https://itaperucu.pr.gov.br/coleta-seletiva-em-itaperucu-confira-os-dias-de-coleta-em-cada-bairro/",
        "note": ""
      },
      {
        "name": "Jardim Itaú",
        "slug": "jardim-itau",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: coleta seletiva por bairro",
        "sourceUrl": "https://itaperucu.pr.gov.br/coleta-seletiva-em-itaperucu-confira-os-dias-de-coleta-em-cada-bairro/",
        "note": ""
      },
      {
        "name": "Jardim Pinheiro",
        "slug": "jardim-pinheiro",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: coleta seletiva por bairro",
        "sourceUrl": "https://itaperucu.pr.gov.br/coleta-seletiva-em-itaperucu-confira-os-dias-de-coleta-em-cada-bairro/",
        "note": ""
      },
      {
        "name": "Jardim Roberta",
        "slug": "jardim-roberta",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: coleta seletiva por bairro",
        "sourceUrl": "https://itaperucu.pr.gov.br/coleta-seletiva-em-itaperucu-confira-os-dias-de-coleta-em-cada-bairro/",
        "note": ""
      },
      {
        "name": "Jardim Saara",
        "slug": "jardim-saara",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: coleta seletiva por bairro",
        "sourceUrl": "https://itaperucu.pr.gov.br/coleta-seletiva-em-itaperucu-confira-os-dias-de-coleta-em-cada-bairro/",
        "note": ""
      },
      {
        "name": "Jardim Verona",
        "slug": "jardim-verona",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: coleta seletiva por bairro",
        "sourceUrl": "https://itaperucu.pr.gov.br/coleta-seletiva-em-itaperucu-confira-os-dias-de-coleta-em-cada-bairro/",
        "note": ""
      },
      {
        "name": "Mossungue",
        "slug": "mossungue",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: coleta seletiva por bairro",
        "sourceUrl": "https://itaperucu.pr.gov.br/coleta-seletiva-em-itaperucu-confira-os-dias-de-coleta-em-cada-bairro/",
        "note": ""
      },
      {
        "name": "Pombas",
        "slug": "pombas",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: coleta seletiva por bairro",
        "sourceUrl": "https://itaperucu.pr.gov.br/coleta-seletiva-em-itaperucu-confira-os-dias-de-coleta-em-cada-bairro/",
        "note": ""
      },
      {
        "name": "Queimadinha",
        "slug": "queimadinha",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: coleta seletiva por bairro",
        "sourceUrl": "https://itaperucu.pr.gov.br/coleta-seletiva-em-itaperucu-confira-os-dias-de-coleta-em-cada-bairro/",
        "note": ""
      },
      {
        "name": "Saibreira",
        "slug": "saibreira",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: coleta seletiva por bairro",
        "sourceUrl": "https://itaperucu.pr.gov.br/coleta-seletiva-em-itaperucu-confira-os-dias-de-coleta-em-cada-bairro/",
        "note": ""
      },
      {
        "name": "Santa Cecília",
        "slug": "santa-cecilia",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: coleta seletiva por bairro",
        "sourceUrl": "https://itaperucu.pr.gov.br/coleta-seletiva-em-itaperucu-confira-os-dias-de-coleta-em-cada-bairro/",
        "note": ""
      },
      {
        "name": "Santa Clara",
        "slug": "santa-clara",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: coleta seletiva por bairro",
        "sourceUrl": "https://itaperucu.pr.gov.br/coleta-seletiva-em-itaperucu-confira-os-dias-de-coleta-em-cada-bairro/",
        "note": ""
      },
      {
        "name": "Santa Maria",
        "slug": "santa-maria",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: coleta seletiva por bairro",
        "sourceUrl": "https://itaperucu.pr.gov.br/coleta-seletiva-em-itaperucu-confira-os-dias-de-coleta-em-cada-bairro/",
        "note": ""
      },
      {
        "name": "Santiago",
        "slug": "santiago",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: coleta seletiva por bairro",
        "sourceUrl": "https://itaperucu.pr.gov.br/coleta-seletiva-em-itaperucu-confira-os-dias-de-coleta-em-cada-bairro/",
        "note": ""
      },
      {
        "name": "São Domingos",
        "slug": "sao-domingos",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: coleta seletiva por bairro",
        "sourceUrl": "https://itaperucu.pr.gov.br/coleta-seletiva-em-itaperucu-confira-os-dias-de-coleta-em-cada-bairro/",
        "note": ""
      },
      {
        "name": "São João",
        "slug": "sao-joao",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: coleta seletiva por bairro",
        "sourceUrl": "https://itaperucu.pr.gov.br/coleta-seletiva-em-itaperucu-confira-os-dias-de-coleta-em-cada-bairro/",
        "note": ""
      },
      {
        "name": "São Miguel",
        "slug": "sao-miguel",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: coleta seletiva por bairro",
        "sourceUrl": "https://itaperucu.pr.gov.br/coleta-seletiva-em-itaperucu-confira-os-dias-de-coleta-em-cada-bairro/",
        "note": ""
      },
      {
        "name": "Vila Camargo",
        "slug": "vila-camargo",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: coleta seletiva por bairro",
        "sourceUrl": "https://itaperucu.pr.gov.br/coleta-seletiva-em-itaperucu-confira-os-dias-de-coleta-em-cada-bairro/",
        "note": ""
      },
      {
        "name": "Vila Gulin",
        "slug": "vila-gulin",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: coleta seletiva por bairro",
        "sourceUrl": "https://itaperucu.pr.gov.br/coleta-seletiva-em-itaperucu-confira-os-dias-de-coleta-em-cada-bairro/",
        "note": ""
      },
      {
        "name": "Vila Isaac",
        "slug": "vila-isaac",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: coleta seletiva por bairro",
        "sourceUrl": "https://itaperucu.pr.gov.br/coleta-seletiva-em-itaperucu-confira-os-dias-de-coleta-em-cada-bairro/",
        "note": ""
      },
      {
        "name": "Vila Tomé",
        "slug": "vila-tome",
        "kind": "Referência no roteiro municipal de coleta",
        "sourceTitle": "Prefeitura: coleta seletiva por bairro",
        "sourceUrl": "https://itaperucu.pr.gov.br/coleta-seletiva-em-itaperucu-confira-os-dias-de-coleta-em-cada-bairro/",
        "note": ""
      }
    ]
  },
  {
    "name": "Lapa",
    "slug": "lapa",
    "summary": "Lapa integra a Região Metropolitana de Curitiba, conforme a relação de municípios da AMEP.",
    "coverage": "Referências urbanas e localidades do documento de mobilidade de 2021. Distritos e bairros não são tratados como equivalentes. Grafias cadastrais divergentes e demais comunidades permanecem fora desta consolidação inicial.",
    "sources": [
      {
        "title": "AMEP: municípios da Região Metropolitana de Curitiba",
        "url": "https://www.amep.pr.gov.br/Pagina/Sobre-RM-de-Curitiba"
      },
      {
        "title": "Câmara: apresentação municipal de mobilidade, 2021",
        "url": "https://www.lapa.pr.leg.br/arquivos-e-documentos/116_apresentacao_audiencia_1.pdf"
      }
    ],
    "places": [
      {
        "name": "2º Faxinal do Castilhos",
        "slug": "2-faxinal-do-castilhos",
        "kind": "Localidade no plano de mobilidade",
        "sourceTitle": "Câmara: apresentação municipal de mobilidade, 2021",
        "sourceUrl": "https://www.lapa.pr.leg.br/arquivos-e-documentos/116_apresentacao_audiencia_1.pdf",
        "note": ""
      },
      {
        "name": "Alto da Cruz",
        "slug": "alto-da-cruz",
        "kind": "Referência urbana no plano de mobilidade",
        "sourceTitle": "Câmara: apresentação municipal de mobilidade, 2021",
        "sourceUrl": "https://www.lapa.pr.leg.br/arquivos-e-documentos/116_apresentacao_audiencia_1.pdf",
        "note": ""
      },
      {
        "name": "Baixo da Lapa",
        "slug": "baixo-da-lapa",
        "kind": "Referência urbana no plano de mobilidade",
        "sourceTitle": "Câmara: apresentação municipal de mobilidade, 2021",
        "sourceUrl": "https://www.lapa.pr.leg.br/arquivos-e-documentos/116_apresentacao_audiencia_1.pdf",
        "note": ""
      },
      {
        "name": "Boqueirão",
        "slug": "boqueirao",
        "kind": "Referência urbana no plano de mobilidade",
        "sourceTitle": "Câmara: apresentação municipal de mobilidade, 2021",
        "sourceUrl": "https://www.lapa.pr.leg.br/arquivos-e-documentos/116_apresentacao_audiencia_1.pdf",
        "note": ""
      },
      {
        "name": "Capão Bonito",
        "slug": "capao-bonito",
        "kind": "Localidade no plano de mobilidade",
        "sourceTitle": "Câmara: apresentação municipal de mobilidade, 2021",
        "sourceUrl": "https://www.lapa.pr.leg.br/arquivos-e-documentos/116_apresentacao_audiencia_1.pdf",
        "note": ""
      },
      {
        "name": "Cascata",
        "slug": "cascata",
        "kind": "Referência urbana no plano de mobilidade",
        "sourceTitle": "Câmara: apresentação municipal de mobilidade, 2021",
        "sourceUrl": "https://www.lapa.pr.leg.br/arquivos-e-documentos/116_apresentacao_audiencia_1.pdf",
        "note": ""
      },
      {
        "name": "Centro",
        "slug": "centro",
        "kind": "Referência urbana no plano de mobilidade",
        "sourceTitle": "Câmara: apresentação municipal de mobilidade, 2021",
        "sourceUrl": "https://www.lapa.pr.leg.br/arquivos-e-documentos/116_apresentacao_audiencia_1.pdf",
        "note": ""
      },
      {
        "name": "Centro Histórico",
        "slug": "centro-historico",
        "kind": "Referência urbana no plano de mobilidade",
        "sourceTitle": "Câmara: apresentação municipal de mobilidade, 2021",
        "sourceUrl": "https://www.lapa.pr.leg.br/arquivos-e-documentos/116_apresentacao_audiencia_1.pdf",
        "note": ""
      },
      {
        "name": "Colônia Johannesdorf",
        "slug": "colonia-johannesdorf",
        "kind": "Localidade no plano de mobilidade",
        "sourceTitle": "Câmara: apresentação municipal de mobilidade, 2021",
        "sourceUrl": "https://www.lapa.pr.leg.br/arquivos-e-documentos/116_apresentacao_audiencia_1.pdf",
        "note": ""
      },
      {
        "name": "Colônia Municipal",
        "slug": "colonia-municipal",
        "kind": "Localidade no plano de mobilidade",
        "sourceTitle": "Câmara: apresentação municipal de mobilidade, 2021",
        "sourceUrl": "https://www.lapa.pr.leg.br/arquivos-e-documentos/116_apresentacao_audiencia_1.pdf",
        "note": ""
      },
      {
        "name": "Dom Pedro II",
        "slug": "dom-pedro-ii",
        "kind": "Referência urbana no plano de mobilidade",
        "sourceTitle": "Câmara: apresentação municipal de mobilidade, 2021",
        "sourceUrl": "https://www.lapa.pr.leg.br/arquivos-e-documentos/116_apresentacao_audiencia_1.pdf",
        "note": ""
      },
      {
        "name": "Engenho",
        "slug": "engenho",
        "kind": "Referência urbana no plano de mobilidade",
        "sourceTitle": "Câmara: apresentação municipal de mobilidade, 2021",
        "sourceUrl": "https://www.lapa.pr.leg.br/arquivos-e-documentos/116_apresentacao_audiencia_1.pdf",
        "note": ""
      },
      {
        "name": "Esplanada",
        "slug": "esplanada",
        "kind": "Referência urbana no plano de mobilidade",
        "sourceTitle": "Câmara: apresentação municipal de mobilidade, 2021",
        "sourceUrl": "https://www.lapa.pr.leg.br/arquivos-e-documentos/116_apresentacao_audiencia_1.pdf",
        "note": ""
      },
      {
        "name": "Mariental",
        "slug": "mariental",
        "kind": "Localidade no plano de mobilidade",
        "sourceTitle": "Câmara: apresentação municipal de mobilidade, 2021",
        "sourceUrl": "https://www.lapa.pr.leg.br/arquivos-e-documentos/116_apresentacao_audiencia_1.pdf",
        "note": ""
      },
      {
        "name": "Olaria",
        "slug": "olaria",
        "kind": "Referência urbana no plano de mobilidade",
        "sourceTitle": "Câmara: apresentação municipal de mobilidade, 2021",
        "sourceUrl": "https://www.lapa.pr.leg.br/arquivos-e-documentos/116_apresentacao_audiencia_1.pdf",
        "note": ""
      },
      {
        "name": "Peri Pau",
        "slug": "peri-pau",
        "kind": "Localidade no plano de mobilidade",
        "sourceTitle": "Câmara: apresentação municipal de mobilidade, 2021",
        "sourceUrl": "https://www.lapa.pr.leg.br/arquivos-e-documentos/116_apresentacao_audiencia_1.pdf",
        "note": ""
      },
      {
        "name": "Ronda",
        "slug": "ronda",
        "kind": "Referência urbana no plano de mobilidade",
        "sourceTitle": "Câmara: apresentação municipal de mobilidade, 2021",
        "sourceUrl": "https://www.lapa.pr.leg.br/arquivos-e-documentos/116_apresentacao_audiencia_1.pdf",
        "note": ""
      },
      {
        "name": "Tamanqueiro",
        "slug": "tamanqueiro",
        "kind": "Referência urbana no plano de mobilidade",
        "sourceTitle": "Câmara: apresentação municipal de mobilidade, 2021",
        "sourceUrl": "https://www.lapa.pr.leg.br/arquivos-e-documentos/116_apresentacao_audiencia_1.pdf",
        "note": ""
      }
    ]
  },
  {
    "name": "Mandirituba",
    "slug": "mandirituba",
    "summary": "Mandirituba integra a Região Metropolitana de Curitiba, conforme a relação de municípios da AMEP.",
    "coverage": "Levantamento em ampliação. Não é uma lista exaustiva de bairros, vilas, loteamentos ou nomes populares.",
    "sources": [
      {
        "title": "AMEP: municípios da Região Metropolitana de Curitiba",
        "url": "https://www.amep.pr.gov.br/Pagina/Sobre-RM-de-Curitiba"
      },
      {
        "title": "Prefeitura: programa de pavimentação",
        "url": "https://mandirituba.pr.gov.br/noticias/maior-programa-de-pavimentacao-da-historia-e-realizado-no-municipio-de-mandirituba"
      },
      {
        "title": "Prefeitura: plano de mobilidade",
        "url": "https://mandirituba.pr.gov.br/wp-content/uploads/2020/04/Atualiza%C3%A7%C3%A3o_-Plano-de-Mobilidade.pdf"
      }
    ],
    "places": [
      {
        "name": "Areia Branca dos Assis",
        "slug": "areia-branca-dos-assis",
        "kind": "Distrito em documento municipal",
        "sourceTitle": "Prefeitura: plano de mobilidade",
        "sourceUrl": "https://mandirituba.pr.gov.br/wp-content/uploads/2020/04/Atualiza%C3%A7%C3%A3o_-Plano-de-Mobilidade.pdf",
        "note": "Documentos podem apresentar variantes do nome; confira o cadastro e o endereço."
      },
      {
        "name": "Campo do Capão",
        "slug": "campo-do-capao",
        "kind": "Bairro citado em comunicação municipal",
        "sourceTitle": "Prefeitura: programa de pavimentação",
        "sourceUrl": "https://mandirituba.pr.gov.br/noticias/maior-programa-de-pavimentacao-da-historia-e-realizado-no-municipio-de-mandirituba",
        "note": ""
      },
      {
        "name": "Centro",
        "slug": "centro",
        "kind": "Bairro citado em comunicação municipal",
        "sourceTitle": "Prefeitura: programa de pavimentação",
        "sourceUrl": "https://mandirituba.pr.gov.br/noticias/maior-programa-de-pavimentacao-da-historia-e-realizado-no-municipio-de-mandirituba",
        "note": ""
      },
      {
        "name": "Jardim Mata Verde",
        "slug": "jardim-mata-verde",
        "kind": "Bairro citado em comunicação municipal",
        "sourceTitle": "Prefeitura: programa de pavimentação",
        "sourceUrl": "https://mandirituba.pr.gov.br/noticias/maior-programa-de-pavimentacao-da-historia-e-realizado-no-municipio-de-mandirituba",
        "note": ""
      },
      {
        "name": "Jardim São Braz",
        "slug": "jardim-sao-braz",
        "kind": "Bairro citado em comunicação municipal",
        "sourceTitle": "Prefeitura: programa de pavimentação",
        "sourceUrl": "https://mandirituba.pr.gov.br/noticias/maior-programa-de-pavimentacao-da-historia-e-realizado-no-municipio-de-mandirituba",
        "note": ""
      },
      {
        "name": "Lagoinha",
        "slug": "lagoinha",
        "kind": "Bairro citado em comunicação municipal",
        "sourceTitle": "Prefeitura: programa de pavimentação",
        "sourceUrl": "https://mandirituba.pr.gov.br/noticias/maior-programa-de-pavimentacao-da-historia-e-realizado-no-municipio-de-mandirituba",
        "note": ""
      },
      {
        "name": "Queimados II",
        "slug": "queimados-ii",
        "kind": "Bairro citado em comunicação municipal",
        "sourceTitle": "Prefeitura: programa de pavimentação",
        "sourceUrl": "https://mandirituba.pr.gov.br/noticias/maior-programa-de-pavimentacao-da-historia-e-realizado-no-municipio-de-mandirituba",
        "note": ""
      },
      {
        "name": "Vila Mandirituba",
        "slug": "vila-mandirituba",
        "kind": "Bairro citado em comunicação municipal",
        "sourceTitle": "Prefeitura: programa de pavimentação",
        "sourceUrl": "https://mandirituba.pr.gov.br/noticias/maior-programa-de-pavimentacao-da-historia-e-realizado-no-municipio-de-mandirituba",
        "note": ""
      },
      {
        "name": "Vila Operária",
        "slug": "vila-operaria",
        "kind": "Bairro citado em comunicação municipal",
        "sourceTitle": "Prefeitura: programa de pavimentação",
        "sourceUrl": "https://mandirituba.pr.gov.br/noticias/maior-programa-de-pavimentacao-da-historia-e-realizado-no-municipio-de-mandirituba",
        "note": ""
      }
    ]
  },
  {
    "name": "Piên",
    "slug": "pien",
    "summary": "Piên integra a Região Metropolitana de Curitiba, conforme a relação de municípios da AMEP.",
    "coverage": "Levantamento em ampliação. Não é uma lista exaustiva de bairros, vilas, loteamentos ou nomes populares.",
    "sources": [
      {
        "title": "AMEP: municípios da Região Metropolitana de Curitiba",
        "url": "https://www.amep.pr.gov.br/Pagina/Sobre-RM-de-Curitiba"
      },
      {
        "title": "Prefeitura: localidades participantes de atividade, 2026",
        "url": "https://www.pien.pr.gov.br/preview/assistenciasocialedefesacivil/noticias/idosos-de-pien-participam-de-viagem-cultural-e-de-lazer-ao-caminho-do-vinho"
      },
      {
        "title": "Prefeitura: Subprefeitura de Trigolândia",
        "url": "https://www.pien.pr.gov.br/noticias/subprefeitura-de-trigolandia-oferece-diversos-servicos"
      },
      {
        "title": "Prefeitura: distribuição de carnês em 2026",
        "url": "https://www.pien.pr.gov.br/noticias/prefeitura-de-pien-inicia-entrega-dos-carnes-do-iptu-2026"
      }
    ],
    "places": [
      {
        "name": "Avencal",
        "slug": "avencal",
        "kind": "Referência local em serviço municipal",
        "sourceTitle": "Prefeitura: distribuição de carnês em 2026",
        "sourceUrl": "https://www.pien.pr.gov.br/noticias/prefeitura-de-pien-inicia-entrega-dos-carnes-do-iptu-2026",
        "note": ""
      },
      {
        "name": "Boa Vista",
        "slug": "boa-vista",
        "kind": "Localidade em notícia municipal",
        "sourceTitle": "Prefeitura: localidades participantes de atividade, 2026",
        "sourceUrl": "https://www.pien.pr.gov.br/preview/assistenciasocialedefesacivil/noticias/idosos-de-pien-participam-de-viagem-cultural-e-de-lazer-ao-caminho-do-vinho",
        "note": ""
      },
      {
        "name": "Campina dos Crespins",
        "slug": "campina-dos-crespins",
        "kind": "Localidade em notícia municipal",
        "sourceTitle": "Prefeitura: localidades participantes de atividade, 2026",
        "sourceUrl": "https://www.pien.pr.gov.br/preview/assistenciasocialedefesacivil/noticias/idosos-de-pien-participam-de-viagem-cultural-e-de-lazer-ao-caminho-do-vinho",
        "note": ""
      },
      {
        "name": "Campina dos Maia",
        "slug": "campina-dos-maia",
        "kind": "Localidade em notícia municipal",
        "sourceTitle": "Prefeitura: localidades participantes de atividade, 2026",
        "sourceUrl": "https://www.pien.pr.gov.br/preview/assistenciasocialedefesacivil/noticias/idosos-de-pien-participam-de-viagem-cultural-e-de-lazer-ao-caminho-do-vinho",
        "note": ""
      },
      {
        "name": "Centro",
        "slug": "centro",
        "kind": "Localidade em notícia municipal",
        "sourceTitle": "Prefeitura: localidades participantes de atividade, 2026",
        "sourceUrl": "https://www.pien.pr.gov.br/preview/assistenciasocialedefesacivil/noticias/idosos-de-pien-participam-de-viagem-cultural-e-de-lazer-ao-caminho-do-vinho",
        "note": ""
      },
      {
        "name": "Fragosos",
        "slug": "fragosos",
        "kind": "Localidade em notícia municipal",
        "sourceTitle": "Prefeitura: localidades participantes de atividade, 2026",
        "sourceUrl": "https://www.pien.pr.gov.br/preview/assistenciasocialedefesacivil/noticias/idosos-de-pien-participam-de-viagem-cultural-e-de-lazer-ao-caminho-do-vinho",
        "note": ""
      },
      {
        "name": "Gramados",
        "slug": "gramados",
        "kind": "Localidade em notícia municipal",
        "sourceTitle": "Prefeitura: localidades participantes de atividade, 2026",
        "sourceUrl": "https://www.pien.pr.gov.br/preview/assistenciasocialedefesacivil/noticias/idosos-de-pien-participam-de-viagem-cultural-e-de-lazer-ao-caminho-do-vinho",
        "note": ""
      },
      {
        "name": "Monjolinho",
        "slug": "monjolinho",
        "kind": "Comunidade citada pela Prefeitura",
        "sourceTitle": "Prefeitura: Subprefeitura de Trigolândia",
        "sourceUrl": "https://www.pien.pr.gov.br/noticias/subprefeitura-de-trigolandia-oferece-diversos-servicos",
        "note": ""
      },
      {
        "name": "Mosquito",
        "slug": "mosquito",
        "kind": "Localidade em notícia municipal",
        "sourceTitle": "Prefeitura: localidades participantes de atividade, 2026",
        "sourceUrl": "https://www.pien.pr.gov.br/preview/assistenciasocialedefesacivil/noticias/idosos-de-pien-participam-de-viagem-cultural-e-de-lazer-ao-caminho-do-vinho",
        "note": ""
      },
      {
        "name": "Palmito",
        "slug": "palmito",
        "kind": "Localidade em notícia municipal",
        "sourceTitle": "Prefeitura: localidades participantes de atividade, 2026",
        "sourceUrl": "https://www.pien.pr.gov.br/preview/assistenciasocialedefesacivil/noticias/idosos-de-pien-participam-de-viagem-cultural-e-de-lazer-ao-caminho-do-vinho",
        "note": ""
      },
      {
        "name": "Paranazinho",
        "slug": "paranazinho",
        "kind": "Comunidade citada pela Prefeitura",
        "sourceTitle": "Prefeitura: Subprefeitura de Trigolândia",
        "sourceUrl": "https://www.pien.pr.gov.br/noticias/subprefeitura-de-trigolandia-oferece-diversos-servicos",
        "note": ""
      },
      {
        "name": "Poço Frio",
        "slug": "poco-frio",
        "kind": "Localidade em notícia municipal",
        "sourceTitle": "Prefeitura: localidades participantes de atividade, 2026",
        "sourceUrl": "https://www.pien.pr.gov.br/preview/assistenciasocialedefesacivil/noticias/idosos-de-pien-participam-de-viagem-cultural-e-de-lazer-ao-caminho-do-vinho",
        "note": ""
      },
      {
        "name": "Ponte Alta",
        "slug": "ponte-alta",
        "kind": "Localidade em notícia municipal",
        "sourceTitle": "Prefeitura: localidades participantes de atividade, 2026",
        "sourceUrl": "https://www.pien.pr.gov.br/preview/assistenciasocialedefesacivil/noticias/idosos-de-pien-participam-de-viagem-cultural-e-de-lazer-ao-caminho-do-vinho",
        "note": ""
      },
      {
        "name": "Trigolândia",
        "slug": "trigolandia",
        "kind": "Localidade em notícia municipal",
        "sourceTitle": "Prefeitura: localidades participantes de atividade, 2026",
        "sourceUrl": "https://www.pien.pr.gov.br/preview/assistenciasocialedefesacivil/noticias/idosos-de-pien-participam-de-viagem-cultural-e-de-lazer-ao-caminho-do-vinho",
        "note": ""
      }
    ]
  },
  {
    "name": "Pinhais",
    "slug": "pinhais",
    "summary": "Pinhais integra a Região Metropolitana de Curitiba, conforme a relação de municípios da AMEP.",
    "coverage": "15 bairros no mapa GeoPinhais. Vilas e conjuntos dentro dos bairros não estão integralmente inventariados.",
    "sources": [
      {
        "title": "AMEP: municípios da Região Metropolitana de Curitiba",
        "url": "https://www.amep.pr.gov.br/Pagina/Sobre-RM-de-Curitiba"
      },
      {
        "title": "GeoPinhais: mapa de bairros",
        "url": "https://geo.pinhais.pr.gov.br/geo/download/Populacao_IBGE_2010.pdf"
      }
    ],
    "places": [
      {
        "name": "Alphaville Graciosa",
        "slug": "alphaville-graciosa",
        "kind": "Bairro no mapa municipal",
        "sourceTitle": "GeoPinhais: mapa de bairros",
        "sourceUrl": "https://geo.pinhais.pr.gov.br/geo/download/Populacao_IBGE_2010.pdf",
        "note": "O mapa utiliza dados populacionais de 2010; aqui aproveitamos apenas as denominações territoriais."
      },
      {
        "name": "Alto Tarumã",
        "slug": "alto-taruma",
        "kind": "Bairro no mapa municipal",
        "sourceTitle": "GeoPinhais: mapa de bairros",
        "sourceUrl": "https://geo.pinhais.pr.gov.br/geo/download/Populacao_IBGE_2010.pdf",
        "note": "O mapa utiliza dados populacionais de 2010; aqui aproveitamos apenas as denominações territoriais."
      },
      {
        "name": "Atuba",
        "slug": "atuba",
        "kind": "Bairro no mapa municipal",
        "sourceTitle": "GeoPinhais: mapa de bairros",
        "sourceUrl": "https://geo.pinhais.pr.gov.br/geo/download/Populacao_IBGE_2010.pdf",
        "note": "O mapa utiliza dados populacionais de 2010; aqui aproveitamos apenas as denominações territoriais."
      },
      {
        "name": "Centro",
        "slug": "centro",
        "kind": "Bairro no mapa municipal",
        "sourceTitle": "GeoPinhais: mapa de bairros",
        "sourceUrl": "https://geo.pinhais.pr.gov.br/geo/download/Populacao_IBGE_2010.pdf",
        "note": "O mapa utiliza dados populacionais de 2010; aqui aproveitamos apenas as denominações territoriais."
      },
      {
        "name": "Emiliano Perneta",
        "slug": "emiliano-perneta",
        "kind": "Bairro no mapa municipal",
        "sourceTitle": "GeoPinhais: mapa de bairros",
        "sourceUrl": "https://geo.pinhais.pr.gov.br/geo/download/Populacao_IBGE_2010.pdf",
        "note": "O mapa utiliza dados populacionais de 2010; aqui aproveitamos apenas as denominações territoriais."
      },
      {
        "name": "Estância Pinhais",
        "slug": "estancia-pinhais",
        "kind": "Bairro no mapa municipal",
        "sourceTitle": "GeoPinhais: mapa de bairros",
        "sourceUrl": "https://geo.pinhais.pr.gov.br/geo/download/Populacao_IBGE_2010.pdf",
        "note": "O mapa utiliza dados populacionais de 2010; aqui aproveitamos apenas as denominações territoriais."
      },
      {
        "name": "Jardim Amélia",
        "slug": "jardim-amelia",
        "kind": "Bairro no mapa municipal",
        "sourceTitle": "GeoPinhais: mapa de bairros",
        "sourceUrl": "https://geo.pinhais.pr.gov.br/geo/download/Populacao_IBGE_2010.pdf",
        "note": "O mapa utiliza dados populacionais de 2010; aqui aproveitamos apenas as denominações territoriais."
      },
      {
        "name": "Jardim Cláudia",
        "slug": "jardim-claudia",
        "kind": "Bairro no mapa municipal",
        "sourceTitle": "GeoPinhais: mapa de bairros",
        "sourceUrl": "https://geo.pinhais.pr.gov.br/geo/download/Populacao_IBGE_2010.pdf",
        "note": "O mapa utiliza dados populacionais de 2010; aqui aproveitamos apenas as denominações territoriais."
      },
      {
        "name": "Jardim Karla",
        "slug": "jardim-karla",
        "kind": "Bairro no mapa municipal",
        "sourceTitle": "GeoPinhais: mapa de bairros",
        "sourceUrl": "https://geo.pinhais.pr.gov.br/geo/download/Populacao_IBGE_2010.pdf",
        "note": "O mapa utiliza dados populacionais de 2010; aqui aproveitamos apenas as denominações territoriais."
      },
      {
        "name": "Maria Antonieta",
        "slug": "maria-antonieta",
        "kind": "Bairro no mapa municipal",
        "sourceTitle": "GeoPinhais: mapa de bairros",
        "sourceUrl": "https://geo.pinhais.pr.gov.br/geo/download/Populacao_IBGE_2010.pdf",
        "note": "O mapa utiliza dados populacionais de 2010; aqui aproveitamos apenas as denominações territoriais."
      },
      {
        "name": "Parque das Águas",
        "slug": "parque-das-aguas",
        "kind": "Bairro no mapa municipal",
        "sourceTitle": "GeoPinhais: mapa de bairros",
        "sourceUrl": "https://geo.pinhais.pr.gov.br/geo/download/Populacao_IBGE_2010.pdf",
        "note": "O mapa utiliza dados populacionais de 2010; aqui aproveitamos apenas as denominações territoriais."
      },
      {
        "name": "Parque das Nascentes",
        "slug": "parque-das-nascentes",
        "kind": "Bairro no mapa municipal",
        "sourceTitle": "GeoPinhais: mapa de bairros",
        "sourceUrl": "https://geo.pinhais.pr.gov.br/geo/download/Populacao_IBGE_2010.pdf",
        "note": "O mapa utiliza dados populacionais de 2010; aqui aproveitamos apenas as denominações territoriais."
      },
      {
        "name": "Pineville",
        "slug": "pineville",
        "kind": "Bairro no mapa municipal",
        "sourceTitle": "GeoPinhais: mapa de bairros",
        "sourceUrl": "https://geo.pinhais.pr.gov.br/geo/download/Populacao_IBGE_2010.pdf",
        "note": "O mapa utiliza dados populacionais de 2010; aqui aproveitamos apenas as denominações territoriais."
      },
      {
        "name": "Vargem Grande",
        "slug": "vargem-grande",
        "kind": "Bairro no mapa municipal",
        "sourceTitle": "GeoPinhais: mapa de bairros",
        "sourceUrl": "https://geo.pinhais.pr.gov.br/geo/download/Populacao_IBGE_2010.pdf",
        "note": "O mapa utiliza dados populacionais de 2010; aqui aproveitamos apenas as denominações territoriais."
      },
      {
        "name": "Weissópolis",
        "slug": "weissopolis",
        "kind": "Bairro no mapa municipal",
        "sourceTitle": "GeoPinhais: mapa de bairros",
        "sourceUrl": "https://geo.pinhais.pr.gov.br/geo/download/Populacao_IBGE_2010.pdf",
        "note": "O mapa utiliza dados populacionais de 2010; aqui aproveitamos apenas as denominações territoriais."
      }
    ]
  },
  {
    "name": "Piraquara",
    "slug": "piraquara",
    "summary": "Piraquara integra a Região Metropolitana de Curitiba, conforme a relação de municípios da AMEP.",
    "coverage": "Os 21 bairros do artigo 15 da Lei 2.672/2026 estão relacionados. Acrescentamos duas referências de uso local, sem afirmar que esgotam nomes populares ou substituem os limites legais.",
    "sources": [
      {
        "title": "AMEP: municípios da Região Metropolitana de Curitiba",
        "url": "https://www.amep.pr.gov.br/Pagina/Sobre-RM-de-Curitiba"
      },
      {
        "title": "Prefeitura: Lei 2.672/2026, artigo 15",
        "url": "https://www.piraquara.pr.gov.br/portal/leis_decretos/81875/"
      },
      {
        "title": "Prefeitura: manutenção de ruas na Vila Macedo e Guarituba",
        "url": "https://www.piraquara.pr.gov.br/portal/noticias/0/3/4224/prefeitura-realiza-a-manutencao-de-ruas-na-vila-macedo-e-guarituba"
      }
    ],
    "places": [
      {
        "name": "Araçatuba",
        "slug": "aracatuba",
        "kind": "Bairro definido na Lei 2.672/2026",
        "sourceTitle": "Prefeitura: Lei 2.672/2026, artigo 15",
        "sourceUrl": "https://www.piraquara.pr.gov.br/portal/leis_decretos/81875/",
        "note": ""
      },
      {
        "name": "Bela Vista",
        "slug": "bela-vista",
        "kind": "Bairro definido na Lei 2.672/2026",
        "sourceTitle": "Prefeitura: Lei 2.672/2026, artigo 15",
        "sourceUrl": "https://www.piraquara.pr.gov.br/portal/leis_decretos/81875/",
        "note": ""
      },
      {
        "name": "Borda do Campo",
        "slug": "borda-do-campo",
        "kind": "Bairro definido na Lei 2.672/2026",
        "sourceTitle": "Prefeitura: Lei 2.672/2026, artigo 15",
        "sourceUrl": "https://www.piraquara.pr.gov.br/portal/leis_decretos/81875/",
        "note": ""
      },
      {
        "name": "Centro",
        "slug": "centro",
        "kind": "Bairro definido na Lei 2.672/2026",
        "sourceTitle": "Prefeitura: Lei 2.672/2026, artigo 15",
        "sourceUrl": "https://www.piraquara.pr.gov.br/portal/leis_decretos/81875/",
        "note": ""
      },
      {
        "name": "Deodoro",
        "slug": "deodoro",
        "kind": "Bairro definido na Lei 2.672/2026",
        "sourceTitle": "Prefeitura: Lei 2.672/2026, artigo 15",
        "sourceUrl": "https://www.piraquara.pr.gov.br/portal/leis_decretos/81875/",
        "note": ""
      },
      {
        "name": "Guarituba",
        "slug": "guarituba",
        "kind": "Denominação local em serviço municipal",
        "sourceTitle": "Prefeitura: manutenção de ruas na Vila Macedo e Guarituba",
        "sourceUrl": "https://www.piraquara.pr.gov.br/portal/noticias/0/3/4224/prefeitura-realiza-a-manutencao-de-ruas-na-vila-macedo-e-guarituba",
        "note": "Nome de uso local documentado; não corresponde automaticamente a um único bairro na divisão de 2026."
      },
      {
        "name": "Guarituba Central",
        "slug": "guarituba-central",
        "kind": "Bairro definido na Lei 2.672/2026",
        "sourceTitle": "Prefeitura: Lei 2.672/2026, artigo 15",
        "sourceUrl": "https://www.piraquara.pr.gov.br/portal/leis_decretos/81875/",
        "note": ""
      },
      {
        "name": "Guarituba Redondo",
        "slug": "guarituba-redondo",
        "kind": "Bairro definido na Lei 2.672/2026",
        "sourceTitle": "Prefeitura: Lei 2.672/2026, artigo 15",
        "sourceUrl": "https://www.piraquara.pr.gov.br/portal/leis_decretos/81875/",
        "note": ""
      },
      {
        "name": "Guaritubinha",
        "slug": "guaritubinha",
        "kind": "Bairro definido na Lei 2.672/2026",
        "sourceTitle": "Prefeitura: Lei 2.672/2026, artigo 15",
        "sourceUrl": "https://www.piraquara.pr.gov.br/portal/leis_decretos/81875/",
        "note": ""
      },
      {
        "name": "Holandês",
        "slug": "holandes",
        "kind": "Bairro definido na Lei 2.672/2026",
        "sourceTitle": "Prefeitura: Lei 2.672/2026, artigo 15",
        "sourceUrl": "https://www.piraquara.pr.gov.br/portal/leis_decretos/81875/",
        "note": ""
      },
      {
        "name": "Jardim dos Estados",
        "slug": "jardim-dos-estados",
        "kind": "Bairro definido na Lei 2.672/2026",
        "sourceTitle": "Prefeitura: Lei 2.672/2026, artigo 15",
        "sourceUrl": "https://www.piraquara.pr.gov.br/portal/leis_decretos/81875/",
        "note": ""
      },
      {
        "name": "Jardim Santa Mônica",
        "slug": "jardim-santa-monica",
        "kind": "Bairro definido na Lei 2.672/2026",
        "sourceTitle": "Prefeitura: Lei 2.672/2026, artigo 15",
        "sourceUrl": "https://www.piraquara.pr.gov.br/portal/leis_decretos/81875/",
        "note": ""
      },
      {
        "name": "Jardim Tropical",
        "slug": "jardim-tropical",
        "kind": "Bairro definido na Lei 2.672/2026",
        "sourceTitle": "Prefeitura: Lei 2.672/2026, artigo 15",
        "sourceUrl": "https://www.piraquara.pr.gov.br/portal/leis_decretos/81875/",
        "note": ""
      },
      {
        "name": "Laranjeiras",
        "slug": "laranjeiras",
        "kind": "Bairro definido na Lei 2.672/2026",
        "sourceTitle": "Prefeitura: Lei 2.672/2026, artigo 15",
        "sourceUrl": "https://www.piraquara.pr.gov.br/portal/leis_decretos/81875/",
        "note": ""
      },
      {
        "name": "Mossoró",
        "slug": "mossoro",
        "kind": "Bairro definido na Lei 2.672/2026",
        "sourceTitle": "Prefeitura: Lei 2.672/2026, artigo 15",
        "sourceUrl": "https://www.piraquara.pr.gov.br/portal/leis_decretos/81875/",
        "note": ""
      },
      {
        "name": "Parque das Águas",
        "slug": "parque-das-aguas",
        "kind": "Bairro definido na Lei 2.672/2026",
        "sourceTitle": "Prefeitura: Lei 2.672/2026, artigo 15",
        "sourceUrl": "https://www.piraquara.pr.gov.br/portal/leis_decretos/81875/",
        "note": ""
      },
      {
        "name": "Santa Maria",
        "slug": "santa-maria",
        "kind": "Bairro definido na Lei 2.672/2026",
        "sourceTitle": "Prefeitura: Lei 2.672/2026, artigo 15",
        "sourceUrl": "https://www.piraquara.pr.gov.br/portal/leis_decretos/81875/",
        "note": ""
      },
      {
        "name": "São Cristóvão",
        "slug": "sao-cristovao",
        "kind": "Bairro definido na Lei 2.672/2026",
        "sourceTitle": "Prefeitura: Lei 2.672/2026, artigo 15",
        "sourceUrl": "https://www.piraquara.pr.gov.br/portal/leis_decretos/81875/",
        "note": ""
      },
      {
        "name": "São Tiago",
        "slug": "sao-tiago",
        "kind": "Bairro definido na Lei 2.672/2026",
        "sourceTitle": "Prefeitura: Lei 2.672/2026, artigo 15",
        "sourceUrl": "https://www.piraquara.pr.gov.br/portal/leis_decretos/81875/",
        "note": ""
      },
      {
        "name": "Vicente",
        "slug": "vicente",
        "kind": "Bairro definido na Lei 2.672/2026",
        "sourceTitle": "Prefeitura: Lei 2.672/2026, artigo 15",
        "sourceUrl": "https://www.piraquara.pr.gov.br/portal/leis_decretos/81875/",
        "note": ""
      },
      {
        "name": "Vila Juliana",
        "slug": "vila-juliana",
        "kind": "Bairro definido na Lei 2.672/2026",
        "sourceTitle": "Prefeitura: Lei 2.672/2026, artigo 15",
        "sourceUrl": "https://www.piraquara.pr.gov.br/portal/leis_decretos/81875/",
        "note": ""
      },
      {
        "name": "Vila Macedo",
        "slug": "vila-macedo",
        "kind": "Denominação local em serviço municipal",
        "sourceTitle": "Prefeitura: manutenção de ruas na Vila Macedo e Guarituba",
        "sourceUrl": "https://www.piraquara.pr.gov.br/portal/noticias/0/3/4224/prefeitura-realiza-a-manutencao-de-ruas-na-vila-macedo-e-guarituba",
        "note": "Nome de uso local documentado; não corresponde automaticamente a um único bairro na divisão de 2026."
      },
      {
        "name": "Vila Rosa",
        "slug": "vila-rosa",
        "kind": "Bairro definido na Lei 2.672/2026",
        "sourceTitle": "Prefeitura: Lei 2.672/2026, artigo 15",
        "sourceUrl": "https://www.piraquara.pr.gov.br/portal/leis_decretos/81875/",
        "note": ""
      }
    ]
  },
  {
    "name": "Quatro Barras",
    "slug": "quatro-barras",
    "summary": "Quatro Barras integra a Região Metropolitana de Curitiba, conforme a relação de municípios da AMEP.",
    "coverage": "Levantamento em ampliação. Não é uma lista exaustiva de bairros, vilas, loteamentos ou nomes populares.",
    "sources": [
      {
        "title": "AMEP: municípios da Região Metropolitana de Curitiba",
        "url": "https://www.amep.pr.gov.br/Pagina/Sobre-RM-de-Curitiba"
      },
      {
        "title": "Prefeitura: Plano Diretor, Lei Complementar 39/2023",
        "url": "https://quatrobarras.pr.gov.br/uploads/pagina/arquivos/Lei-Complementar-39-2023-Plano-Diretor.pdf"
      },
      {
        "title": "Agência Estadual/Sanepar: localidades de Quatro Barras",
        "url": "https://www.parana.pr.gov.br/aen/Noticia/Problemas-operacionais-afetam-abastecimento-em-Fazenda-Rio-Grande-e-Quatro-Barras"
      }
    ],
    "places": [
      {
        "name": "Borda do Campo",
        "slug": "borda-do-campo",
        "kind": "Bairro mencionado no Plano Diretor",
        "sourceTitle": "Prefeitura: Plano Diretor, Lei Complementar 39/2023",
        "sourceUrl": "https://quatrobarras.pr.gov.br/uploads/pagina/arquivos/Lei-Complementar-39-2023-Plano-Diretor.pdf",
        "note": "O Plano Diretor reúne estes bairros na macrozona Borda do Campo–Pinheirinho. A classificação da macrozona não substitui consulta do endereço e projeto."
      },
      {
        "name": "Bosque Merhy",
        "slug": "bosque-merhy",
        "kind": "Referência territorial em serviço público",
        "sourceTitle": "Agência Estadual/Sanepar: localidades de Quatro Barras",
        "sourceUrl": "https://www.parana.pr.gov.br/aen/Noticia/Problemas-operacionais-afetam-abastecimento-em-Fazenda-Rio-Grande-e-Quatro-Barras",
        "note": ""
      },
      {
        "name": "Centro",
        "slug": "centro",
        "kind": "Referência territorial em serviço público",
        "sourceTitle": "Agência Estadual/Sanepar: localidades de Quatro Barras",
        "sourceUrl": "https://www.parana.pr.gov.br/aen/Noticia/Problemas-operacionais-afetam-abastecimento-em-Fazenda-Rio-Grande-e-Quatro-Barras",
        "note": ""
      },
      {
        "name": "Chácaras",
        "slug": "chacaras",
        "kind": "Referência territorial em serviço público",
        "sourceTitle": "Agência Estadual/Sanepar: localidades de Quatro Barras",
        "sourceUrl": "https://www.parana.pr.gov.br/aen/Noticia/Problemas-operacionais-afetam-abastecimento-em-Fazenda-Rio-Grande-e-Quatro-Barras",
        "note": ""
      },
      {
        "name": "Conjunto Itapira",
        "slug": "conjunto-itapira",
        "kind": "Referência territorial em serviço público",
        "sourceTitle": "Agência Estadual/Sanepar: localidades de Quatro Barras",
        "sourceUrl": "https://www.parana.pr.gov.br/aen/Noticia/Problemas-operacionais-afetam-abastecimento-em-Fazenda-Rio-Grande-e-Quatro-Barras",
        "note": ""
      },
      {
        "name": "Granja das Acácias",
        "slug": "granja-das-acacias",
        "kind": "Referência territorial em serviço público",
        "sourceTitle": "Agência Estadual/Sanepar: localidades de Quatro Barras",
        "sourceUrl": "https://www.parana.pr.gov.br/aen/Noticia/Problemas-operacionais-afetam-abastecimento-em-Fazenda-Rio-Grande-e-Quatro-Barras",
        "note": ""
      },
      {
        "name": "Jardim Creplive",
        "slug": "jardim-creplive",
        "kind": "Referência territorial em serviço público",
        "sourceTitle": "Agência Estadual/Sanepar: localidades de Quatro Barras",
        "sourceUrl": "https://www.parana.pr.gov.br/aen/Noticia/Problemas-operacionais-afetam-abastecimento-em-Fazenda-Rio-Grande-e-Quatro-Barras",
        "note": ""
      },
      {
        "name": "Jardim Pinheiros",
        "slug": "jardim-pinheiros",
        "kind": "Referência territorial em serviço público",
        "sourceTitle": "Agência Estadual/Sanepar: localidades de Quatro Barras",
        "sourceUrl": "https://www.parana.pr.gov.br/aen/Noticia/Problemas-operacionais-afetam-abastecimento-em-Fazenda-Rio-Grande-e-Quatro-Barras",
        "note": ""
      },
      {
        "name": "Maria Alice",
        "slug": "maria-alice",
        "kind": "Referência territorial em serviço público",
        "sourceTitle": "Agência Estadual/Sanepar: localidades de Quatro Barras",
        "sourceUrl": "https://www.parana.pr.gov.br/aen/Noticia/Problemas-operacionais-afetam-abastecimento-em-Fazenda-Rio-Grande-e-Quatro-Barras",
        "note": ""
      },
      {
        "name": "Menino Deus",
        "slug": "menino-deus",
        "kind": "Referência territorial em serviço público",
        "sourceTitle": "Agência Estadual/Sanepar: localidades de Quatro Barras",
        "sourceUrl": "https://www.parana.pr.gov.br/aen/Noticia/Problemas-operacionais-afetam-abastecimento-em-Fazenda-Rio-Grande-e-Quatro-Barras",
        "note": ""
      },
      {
        "name": "Nossa Senhora de Fátima",
        "slug": "nossa-senhora-de-fatima",
        "kind": "Referência territorial em serviço público",
        "sourceTitle": "Agência Estadual/Sanepar: localidades de Quatro Barras",
        "sourceUrl": "https://www.parana.pr.gov.br/aen/Noticia/Problemas-operacionais-afetam-abastecimento-em-Fazenda-Rio-Grande-e-Quatro-Barras",
        "note": ""
      },
      {
        "name": "Patrícia",
        "slug": "patricia",
        "kind": "Referência territorial em serviço público",
        "sourceTitle": "Agência Estadual/Sanepar: localidades de Quatro Barras",
        "sourceUrl": "https://www.parana.pr.gov.br/aen/Noticia/Problemas-operacionais-afetam-abastecimento-em-Fazenda-Rio-Grande-e-Quatro-Barras",
        "note": ""
      },
      {
        "name": "Pinheirinho",
        "slug": "pinheirinho",
        "kind": "Bairro mencionado no Plano Diretor",
        "sourceTitle": "Prefeitura: Plano Diretor, Lei Complementar 39/2023",
        "sourceUrl": "https://quatrobarras.pr.gov.br/uploads/pagina/arquivos/Lei-Complementar-39-2023-Plano-Diretor.pdf",
        "note": "O Plano Diretor reúne estes bairros na macrozona Borda do Campo–Pinheirinho. A classificação da macrozona não substitui consulta do endereço e projeto."
      },
      {
        "name": "Santa Luzia",
        "slug": "santa-luzia",
        "kind": "Bairro mencionado no Plano Diretor",
        "sourceTitle": "Prefeitura: Plano Diretor, Lei Complementar 39/2023",
        "sourceUrl": "https://quatrobarras.pr.gov.br/uploads/pagina/arquivos/Lei-Complementar-39-2023-Plano-Diretor.pdf",
        "note": "O Plano Diretor reúne estes bairros na macrozona Borda do Campo–Pinheirinho. A classificação da macrozona não substitui consulta do endereço e projeto."
      },
      {
        "name": "Vita",
        "slug": "vita",
        "kind": "Referência territorial em serviço público",
        "sourceTitle": "Agência Estadual/Sanepar: localidades de Quatro Barras",
        "sourceUrl": "https://www.parana.pr.gov.br/aen/Noticia/Problemas-operacionais-afetam-abastecimento-em-Fazenda-Rio-Grande-e-Quatro-Barras",
        "note": ""
      }
    ]
  },
  {
    "name": "Rio Branco do Sul",
    "slug": "rio-branco-do-sul",
    "summary": "Rio Branco do Sul integra a Região Metropolitana de Curitiba, conforme a relação de municípios da AMEP.",
    "coverage": "Cobertura inicial limitada a nomes confirmados no cadastro municipal. Há proposta de revisão territorial (PLC 7/2026), cuja sanção e lista consolidada precisam de confirmação; não a tratamos como lei vigente.",
    "sources": [
      {
        "title": "AMEP: municípios da Região Metropolitana de Curitiba",
        "url": "https://www.amep.pr.gov.br/Pagina/Sobre-RM-de-Curitiba"
      },
      {
        "title": "Prefeitura: escolas municipais",
        "url": "https://riobrancodosul.atende.net/cidadao/pagina/escolas-municipais"
      }
    ],
    "places": [
      {
        "name": "Centro",
        "slug": "centro",
        "kind": "Localidade em cadastro municipal",
        "sourceTitle": "Prefeitura: escolas municipais",
        "sourceUrl": "https://riobrancodosul.atende.net/cidadao/pagina/escolas-municipais",
        "note": ""
      },
      {
        "name": "Santaria",
        "slug": "santaria",
        "kind": "Localidade em cadastro municipal",
        "sourceTitle": "Prefeitura: escolas municipais",
        "sourceUrl": "https://riobrancodosul.atende.net/cidadao/pagina/escolas-municipais",
        "note": ""
      }
    ]
  },
  {
    "name": "Rio Negro",
    "slug": "rio-negro",
    "summary": "Rio Negro integra a Região Metropolitana de Curitiba, conforme a relação de municípios da AMEP.",
    "coverage": "Levantamento em ampliação. Não é uma lista exaustiva de bairros, vilas, loteamentos ou nomes populares.",
    "sources": [
      {
        "title": "AMEP: municípios da Região Metropolitana de Curitiba",
        "url": "https://www.amep.pr.gov.br/Pagina/Sobre-RM-de-Curitiba"
      },
      {
        "title": "Prefeitura: cronograma de coleta seletiva",
        "url": "https://rionegro.atende.net/cidadao/pagina/cronograma-de-coleta-seletiva"
      }
    ],
    "places": [
      {
        "name": "Campo do Gado",
        "slug": "campo-do-gado",
        "kind": "Referência em roteiro municipal",
        "sourceTitle": "Prefeitura: cronograma de coleta seletiva",
        "sourceUrl": "https://rionegro.atende.net/cidadao/pagina/cronograma-de-coleta-seletiva",
        "note": ""
      },
      {
        "name": "Centro",
        "slug": "centro",
        "kind": "Referência em roteiro municipal",
        "sourceTitle": "Prefeitura: cronograma de coleta seletiva",
        "sourceUrl": "https://rionegro.atende.net/cidadao/pagina/cronograma-de-coleta-seletiva",
        "note": ""
      },
      {
        "name": "Estação Nova",
        "slug": "estacao-nova",
        "kind": "Referência em roteiro municipal",
        "sourceTitle": "Prefeitura: cronograma de coleta seletiva",
        "sourceUrl": "https://rionegro.atende.net/cidadao/pagina/cronograma-de-coleta-seletiva",
        "note": ""
      },
      {
        "name": "Vila Militar",
        "slug": "vila-militar",
        "kind": "Referência em roteiro municipal",
        "sourceTitle": "Prefeitura: cronograma de coleta seletiva",
        "sourceUrl": "https://rionegro.atende.net/cidadao/pagina/cronograma-de-coleta-seletiva",
        "note": ""
      },
      {
        "name": "Vila Paraná",
        "slug": "vila-parana",
        "kind": "Referência em roteiro municipal",
        "sourceTitle": "Prefeitura: cronograma de coleta seletiva",
        "sourceUrl": "https://rionegro.atende.net/cidadao/pagina/cronograma-de-coleta-seletiva",
        "note": ""
      }
    ]
  },
  {
    "name": "São José dos Pinhais",
    "slug": "sao-jose-dos-pinhais",
    "summary": "São José dos Pinhais integra a Região Metropolitana de Curitiba, conforme a relação de municípios da AMEP.",
    "coverage": "41 entradas na página municipal consultada. Camadas cartográficas podem ter atualizações; não inclui todos os loteamentos e nomes populares. Área Institucional Aeroportuária é uma área institucional, não um bairro residencial.",
    "sources": [
      {
        "title": "AMEP: municípios da Região Metropolitana de Curitiba",
        "url": "https://www.amep.pr.gov.br/Pagina/Sobre-RM-de-Curitiba"
      },
      {
        "title": "Prefeitura: mapas do município",
        "url": "https://www.sjp.pr.gov.br/mapas-do-municipio/"
      }
    ],
    "places": [
      {
        "name": "Academia",
        "slug": "academia",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "Afonso Pena",
        "slug": "afonso-pena",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "Águas Belas",
        "slug": "aguas-belas",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "Área Institucional Aeroportuária",
        "slug": "area-institucional-aeroportuaria",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "Aristocrata",
        "slug": "aristocrata",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "Arujá",
        "slug": "aruja",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "Aviação",
        "slug": "aviacao",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "Barro Preto",
        "slug": "barro-preto",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "Bom Jesus",
        "slug": "bom-jesus",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "Boneca do Iguaçu",
        "slug": "boneca-do-iguacu",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "Borda do Campo",
        "slug": "borda-do-campo",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "Cachoeira",
        "slug": "cachoeira",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "Campina do Taquaral",
        "slug": "campina-do-taquaral",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "Campo Largo da Roseira",
        "slug": "campo-largo-da-roseira",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "Centro",
        "slug": "centro",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "Cidade Jardim",
        "slug": "cidade-jardim",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "Colônia Rio Grande",
        "slug": "colonia-rio-grande",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "Contenda",
        "slug": "contenda",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "Costeira",
        "slug": "costeira",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "Cristal",
        "slug": "cristal",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "Cruzeiro",
        "slug": "cruzeiro",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "Del Rey",
        "slug": "del-rey",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "Dom Rodrigo",
        "slug": "dom-rodrigo",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "Guatupê",
        "slug": "guatupe",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "Iná",
        "slug": "ina",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "Ipê",
        "slug": "ipe",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "Itália",
        "slug": "italia",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "Jurema",
        "slug": "jurema",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "Miringuava",
        "slug": "miringuava",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "Ouro Fino",
        "slug": "ouro-fino",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "Parque da Fonte",
        "slug": "parque-da-fonte",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "Pedro Moro",
        "slug": "pedro-moro",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "Quissisana",
        "slug": "quissisana",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "Rio Pequeno",
        "slug": "rio-pequeno",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "Roseira de São Sebastião",
        "slug": "roseira-de-sao-sebastiao",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "Santo Antônio",
        "slug": "santo-antonio",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "São Cristóvão",
        "slug": "sao-cristovao",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "São Domingos",
        "slug": "sao-domingos",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "São Marcos",
        "slug": "sao-marcos",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "São Pedro",
        "slug": "sao-pedro",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      },
      {
        "name": "Zacarias",
        "slug": "zacarias",
        "kind": "Bairro ou área no mapa municipal",
        "sourceTitle": "Prefeitura: mapas do município",
        "sourceUrl": "https://www.sjp.pr.gov.br/mapas-do-municipio/",
        "note": ""
      }
    ]
  },
  {
    "name": "Quitandinha",
    "slug": "quitandinha",
    "summary": "Quitandinha integra a Região Metropolitana de Curitiba, conforme a relação de municípios da AMEP.",
    "coverage": "Referências documentais, sem afirmar subdivisão legal atual. Estudos de planejamento propuseram bairros; proposta não comprova sua criação por lei. Lista de nomes populares incompleta.",
    "sources": [
      {
        "title": "AMEP: municípios da Região Metropolitana de Curitiba",
        "url": "https://www.amep.pr.gov.br/Pagina/Sobre-RM-de-Curitiba"
      },
      {
        "title": "Prefeitura: diagnóstico municipal, 2018",
        "url": "https://www.quitandinha.pr.gov.br/_files/ugd/776578_a350cd1ad0ab4998941ef7894976f9b0.pdf"
      },
      {
        "title": "Prefeitura: Faxinal do Salso",
        "url": "https://www.quitandinha.pr.gov.br/faxinaldosalso"
      }
    ],
    "places": [
      {
        "name": "Bom Jesus",
        "slug": "bom-jesus",
        "kind": "Referência urbana em diagnóstico histórico",
        "sourceTitle": "Prefeitura: diagnóstico municipal, 2018",
        "sourceUrl": "https://www.quitandinha.pr.gov.br/_files/ugd/776578_a350cd1ad0ab4998941ef7894976f9b0.pdf",
        "note": "O diagnóstico não foi tratado como comprovação de delimitação legal atual."
      },
      {
        "name": "Centro",
        "slug": "centro",
        "kind": "Referência urbana em diagnóstico histórico",
        "sourceTitle": "Prefeitura: diagnóstico municipal, 2018",
        "sourceUrl": "https://www.quitandinha.pr.gov.br/_files/ugd/776578_a350cd1ad0ab4998941ef7894976f9b0.pdf",
        "note": "O diagnóstico não foi tratado como comprovação de delimitação legal atual."
      },
      {
        "name": "Engenho Velho",
        "slug": "engenho-velho",
        "kind": "Referência urbana em diagnóstico histórico",
        "sourceTitle": "Prefeitura: diagnóstico municipal, 2018",
        "sourceUrl": "https://www.quitandinha.pr.gov.br/_files/ugd/776578_a350cd1ad0ab4998941ef7894976f9b0.pdf",
        "note": "O diagnóstico não foi tratado como comprovação de delimitação legal atual."
      },
      {
        "name": "Faxinal do Salso",
        "slug": "faxinal-do-salso",
        "kind": "Comunidade tradicional",
        "sourceTitle": "Prefeitura: Faxinal do Salso",
        "sourceUrl": "https://www.quitandinha.pr.gov.br/faxinaldosalso",
        "note": ""
      },
      {
        "name": "Moreiras",
        "slug": "moreiras",
        "kind": "Referência urbana em diagnóstico histórico",
        "sourceTitle": "Prefeitura: diagnóstico municipal, 2018",
        "sourceUrl": "https://www.quitandinha.pr.gov.br/_files/ugd/776578_a350cd1ad0ab4998941ef7894976f9b0.pdf",
        "note": "O diagnóstico não foi tratado como comprovação de delimitação legal atual."
      },
      {
        "name": "Paolini",
        "slug": "paolini",
        "kind": "Referência urbana em diagnóstico histórico",
        "sourceTitle": "Prefeitura: diagnóstico municipal, 2018",
        "sourceUrl": "https://www.quitandinha.pr.gov.br/_files/ugd/776578_a350cd1ad0ab4998941ef7894976f9b0.pdf",
        "note": "O diagnóstico não foi tratado como comprovação de delimitação legal atual."
      }
    ]
  },
  {
    "name": "Tijucas do Sul",
    "slug": "tijucas-do-sul",
    "summary": "Tijucas do Sul integra a Região Metropolitana de Curitiba, conforme a relação de municípios da AMEP.",
    "coverage": "Levantamento em ampliação. Não é uma lista exaustiva de bairros, vilas, loteamentos ou nomes populares.",
    "sources": [
      {
        "title": "AMEP: municípios da Região Metropolitana de Curitiba",
        "url": "https://www.amep.pr.gov.br/Pagina/Sobre-RM-de-Curitiba"
      },
      {
        "title": "Prefeitura: panorama do município",
        "url": "https://tijucasdosul.pr.gov.br/cidade/panorama-do-municipio/panorama-do-municipio"
      }
    ],
    "places": [
      {
        "name": "Ambrósio",
        "slug": "ambrosio",
        "kind": "Localidade histórica no panorama municipal",
        "sourceTitle": "Prefeitura: panorama do município",
        "sourceUrl": "https://tijucasdosul.pr.gov.br/cidade/panorama-do-municipio/panorama-do-municipio",
        "note": "Referência histórica, sem comprovação de cadastro completo ou delimitação legal atual."
      },
      {
        "name": "Barreiro",
        "slug": "barreiro",
        "kind": "Localidade histórica no panorama municipal",
        "sourceTitle": "Prefeitura: panorama do município",
        "sourceUrl": "https://tijucasdosul.pr.gov.br/cidade/panorama-do-municipio/panorama-do-municipio",
        "note": "Referência histórica, sem comprovação de cadastro completo ou delimitação legal atual."
      },
      {
        "name": "Borges",
        "slug": "borges",
        "kind": "Localidade histórica no panorama municipal",
        "sourceTitle": "Prefeitura: panorama do município",
        "sourceUrl": "https://tijucasdosul.pr.gov.br/cidade/panorama-do-municipio/panorama-do-municipio",
        "note": "Referência histórica, sem comprovação de cadastro completo ou delimitação legal atual."
      },
      {
        "name": "Cangoera",
        "slug": "cangoera",
        "kind": "Localidade histórica no panorama municipal",
        "sourceTitle": "Prefeitura: panorama do município",
        "sourceUrl": "https://tijucasdosul.pr.gov.br/cidade/panorama-do-municipio/panorama-do-municipio",
        "note": "Referência histórica, sem comprovação de cadastro completo ou delimitação legal atual."
      },
      {
        "name": "Lagoinha",
        "slug": "lagoinha",
        "kind": "Localidade histórica no panorama municipal",
        "sourceTitle": "Prefeitura: panorama do município",
        "sourceUrl": "https://tijucasdosul.pr.gov.br/cidade/panorama-do-municipio/panorama-do-municipio",
        "note": "Referência histórica, sem comprovação de cadastro completo ou delimitação legal atual."
      },
      {
        "name": "Rio de Una",
        "slug": "rio-de-una",
        "kind": "Localidade histórica no panorama municipal",
        "sourceTitle": "Prefeitura: panorama do município",
        "sourceUrl": "https://tijucasdosul.pr.gov.br/cidade/panorama-do-municipio/panorama-do-municipio",
        "note": "Referência histórica, sem comprovação de cadastro completo ou delimitação legal atual."
      },
      {
        "name": "Salto",
        "slug": "salto",
        "kind": "Localidade histórica no panorama municipal",
        "sourceTitle": "Prefeitura: panorama do município",
        "sourceUrl": "https://tijucasdosul.pr.gov.br/cidade/panorama-do-municipio/panorama-do-municipio",
        "note": "Referência histórica, sem comprovação de cadastro completo ou delimitação legal atual."
      },
      {
        "name": "Tabatinga",
        "slug": "tabatinga",
        "kind": "Localidade histórica no panorama municipal",
        "sourceTitle": "Prefeitura: panorama do município",
        "sourceUrl": "https://tijucasdosul.pr.gov.br/cidade/panorama-do-municipio/panorama-do-municipio",
        "note": "Referência histórica, sem comprovação de cadastro completo ou delimitação legal atual."
      }
    ]
  },
  {
    "name": "Tunas do Paraná",
    "slug": "tunas-do-parana",
    "summary": "Tunas do Paraná integra a Região Metropolitana de Curitiba, conforme a relação de municípios da AMEP.",
    "coverage": "Referências territoriais municipais de 2021. Localidades com associação municipal incerta diante de alterações de divisas foram excluídas. Não é inventário legal atual completo.",
    "sources": [
      {
        "title": "AMEP: municípios da Região Metropolitana de Curitiba",
        "url": "https://www.amep.pr.gov.br/Pagina/Sobre-RM-de-Curitiba"
      },
      {
        "title": "Prefeitura: referências territoriais em boletim de 2021",
        "url": "https://tunasdoparana.pr.gov.br/uploads/pagina/arquivos/BOLETIM-CORONA-24-05-2021.pdf"
      }
    ],
    "places": [
      {
        "name": "Antinha",
        "slug": "antinha",
        "kind": "Nome local documentado pela Prefeitura em 2021",
        "sourceTitle": "Prefeitura: referências territoriais em boletim de 2021",
        "sourceUrl": "https://tunasdoparana.pr.gov.br/uploads/pagina/arquivos/BOLETIM-CORONA-24-05-2021.pdf",
        "note": "Usamos apenas a denominação territorial. A classificação operacional não comprova limites de bairros."
      },
      {
        "name": "Barra Bonita",
        "slug": "barra-bonita",
        "kind": "Nome local documentado pela Prefeitura em 2021",
        "sourceTitle": "Prefeitura: referências territoriais em boletim de 2021",
        "sourceUrl": "https://tunasdoparana.pr.gov.br/uploads/pagina/arquivos/BOLETIM-CORONA-24-05-2021.pdf",
        "note": "Usamos apenas a denominação territorial. A classificação operacional não comprova limites de bairros."
      },
      {
        "name": "Barro Vermelho",
        "slug": "barro-vermelho",
        "kind": "Nome local documentado pela Prefeitura em 2021",
        "sourceTitle": "Prefeitura: referências territoriais em boletim de 2021",
        "sourceUrl": "https://tunasdoparana.pr.gov.br/uploads/pagina/arquivos/BOLETIM-CORONA-24-05-2021.pdf",
        "note": "Usamos apenas a denominação territorial. A classificação operacional não comprova limites de bairros."
      },
      {
        "name": "Caixa d’Água",
        "slug": "caixa-d-agua",
        "kind": "Nome local documentado pela Prefeitura em 2021",
        "sourceTitle": "Prefeitura: referências territoriais em boletim de 2021",
        "sourceUrl": "https://tunasdoparana.pr.gov.br/uploads/pagina/arquivos/BOLETIM-CORONA-24-05-2021.pdf",
        "note": "Usamos apenas a denominação territorial. A classificação operacional não comprova limites de bairros."
      },
      {
        "name": "Campinhos",
        "slug": "campinhos",
        "kind": "Nome local documentado pela Prefeitura em 2021",
        "sourceTitle": "Prefeitura: referências territoriais em boletim de 2021",
        "sourceUrl": "https://tunasdoparana.pr.gov.br/uploads/pagina/arquivos/BOLETIM-CORONA-24-05-2021.pdf",
        "note": "Usamos apenas a denominação territorial. A classificação operacional não comprova limites de bairros."
      },
      {
        "name": "Cavague",
        "slug": "cavague",
        "kind": "Nome local documentado pela Prefeitura em 2021",
        "sourceTitle": "Prefeitura: referências territoriais em boletim de 2021",
        "sourceUrl": "https://tunasdoparana.pr.gov.br/uploads/pagina/arquivos/BOLETIM-CORONA-24-05-2021.pdf",
        "note": "Usamos apenas a denominação territorial. A classificação operacional não comprova limites de bairros."
      },
      {
        "name": "Centro",
        "slug": "centro",
        "kind": "Nome local documentado pela Prefeitura em 2021",
        "sourceTitle": "Prefeitura: referências territoriais em boletim de 2021",
        "sourceUrl": "https://tunasdoparana.pr.gov.br/uploads/pagina/arquivos/BOLETIM-CORONA-24-05-2021.pdf",
        "note": "Usamos apenas a denominação territorial. A classificação operacional não comprova limites de bairros."
      },
      {
        "name": "Colônia João XXIII",
        "slug": "colonia-joao-xxiii",
        "kind": "Nome local documentado pela Prefeitura em 2021",
        "sourceTitle": "Prefeitura: referências territoriais em boletim de 2021",
        "sourceUrl": "https://tunasdoparana.pr.gov.br/uploads/pagina/arquivos/BOLETIM-CORONA-24-05-2021.pdf",
        "note": "Usamos apenas a denominação territorial. A classificação operacional não comprova limites de bairros."
      },
      {
        "name": "Marquês de Abrantes",
        "slug": "marques-de-abrantes",
        "kind": "Nome local documentado pela Prefeitura em 2021",
        "sourceTitle": "Prefeitura: referências territoriais em boletim de 2021",
        "sourceUrl": "https://tunasdoparana.pr.gov.br/uploads/pagina/arquivos/BOLETIM-CORONA-24-05-2021.pdf",
        "note": "Usamos apenas a denominação territorial. A classificação operacional não comprova limites de bairros."
      },
      {
        "name": "Ouro Fino",
        "slug": "ouro-fino",
        "kind": "Nome local documentado pela Prefeitura em 2021",
        "sourceTitle": "Prefeitura: referências territoriais em boletim de 2021",
        "sourceUrl": "https://tunasdoparana.pr.gov.br/uploads/pagina/arquivos/BOLETIM-CORONA-24-05-2021.pdf",
        "note": "Usamos apenas a denominação territorial. A classificação operacional não comprova limites de bairros."
      },
      {
        "name": "Pacas",
        "slug": "pacas",
        "kind": "Nome local documentado pela Prefeitura em 2021",
        "sourceTitle": "Prefeitura: referências territoriais em boletim de 2021",
        "sourceUrl": "https://tunasdoparana.pr.gov.br/uploads/pagina/arquivos/BOLETIM-CORONA-24-05-2021.pdf",
        "note": "Usamos apenas a denominação territorial. A classificação operacional não comprova limites de bairros."
      },
      {
        "name": "Pirizal",
        "slug": "pirizal",
        "kind": "Nome local documentado pela Prefeitura em 2021",
        "sourceTitle": "Prefeitura: referências territoriais em boletim de 2021",
        "sourceUrl": "https://tunasdoparana.pr.gov.br/uploads/pagina/arquivos/BOLETIM-CORONA-24-05-2021.pdf",
        "note": "Usamos apenas a denominação territorial. A classificação operacional não comprova limites de bairros."
      },
      {
        "name": "Pocinhas",
        "slug": "pocinhas",
        "kind": "Nome local documentado pela Prefeitura em 2021",
        "sourceTitle": "Prefeitura: referências territoriais em boletim de 2021",
        "sourceUrl": "https://tunasdoparana.pr.gov.br/uploads/pagina/arquivos/BOLETIM-CORONA-24-05-2021.pdf",
        "note": "Usamos apenas a denominação territorial. A classificação operacional não comprova limites de bairros."
      },
      {
        "name": "Substação",
        "slug": "substacao",
        "kind": "Nome local documentado pela Prefeitura em 2021",
        "sourceTitle": "Prefeitura: referências territoriais em boletim de 2021",
        "sourceUrl": "https://tunasdoparana.pr.gov.br/uploads/pagina/arquivos/BOLETIM-CORONA-24-05-2021.pdf",
        "note": "Usamos apenas a denominação territorial. A classificação operacional não comprova limites de bairros."
      },
      {
        "name": "Tuneiras",
        "slug": "tuneiras",
        "kind": "Nome local documentado pela Prefeitura em 2021",
        "sourceTitle": "Prefeitura: referências territoriais em boletim de 2021",
        "sourceUrl": "https://tunasdoparana.pr.gov.br/uploads/pagina/arquivos/BOLETIM-CORONA-24-05-2021.pdf",
        "note": "Usamos apenas a denominação territorial. A classificação operacional não comprova limites de bairros."
      },
      {
        "name": "Vila Industrial",
        "slug": "vila-industrial",
        "kind": "Nome local documentado pela Prefeitura em 2021",
        "sourceTitle": "Prefeitura: referências territoriais em boletim de 2021",
        "sourceUrl": "https://tunasdoparana.pr.gov.br/uploads/pagina/arquivos/BOLETIM-CORONA-24-05-2021.pdf",
        "note": "Usamos apenas a denominação territorial. A classificação operacional não comprova limites de bairros."
      }
    ]
  }
];
export const regionalRoutes = ['/regiao-metropolitana', ...municipalities.flatMap(city => ['/regiao-metropolitana/'+city.slug, ...city.places.map(place => '/regiao-metropolitana/'+city.slug+'/'+place.slug)])];

