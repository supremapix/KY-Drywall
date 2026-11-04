// Regional membership published by Prefeitura de Curitiba. Locality aliases are not assumed to be official bairros.
export const REGIONAL_SOURCE = 'https://www.curitiba.pr.gov.br/noticias/populacao-recebe-noticias-personalizadas-dos-bairros-via-whatsapp/50663';
const groups: Record<string, string[]> = {
  'Bairro Novo': ['Ganchinho', 'Sítio Cercado', 'Umbará'],
  'Boa Vista': ['Abranches', 'Atuba', 'Bacacheri', 'Bairro Alto', 'Barreirinha', 'Boa Vista', 'Cachoeira', 'Pilarzinho', 'Santa Cândida', 'São Lourenco', 'Taboão', 'Tingui'],
  'Boqueirão': ['Alto Boqueirão', 'Boqueirão', 'Hauer', 'Xaxim'],
  'Cajuru': ['Cajuru', 'Capão da Imbuia', 'Guabirotuba', 'Jardim das Américas', 'Uberaba', 'Tarumã'],
  'CIC': ['Augusta', 'CIC', 'Riviera'],
  'Portão': ['Água Verde', 'Fazendinha', 'Guaíra', 'Parolin', 'Portão', 'Santa Quitéria', 'Seminário', 'Vila Izabel'],
  'Matriz': ['Ahú', 'Alto da Glória', 'Alto da XV', 'Batel', 'Bigorrilho', 'Bom Retiro', 'Cabral', 'Centro', 'Centro Cívico', 'Cristo Rei', 'Hugo Lange', 'Jardim Botânico', 'Jardim Social', 'Juvevê', 'Mercês', 'Prado Velho', 'Rebouças', 'São Francisco'],
  'Pinheirinho': ['Capão Raso', 'Fanny', 'Lindoia', 'Novo Mundo', 'Pinheirinho'],
  'Santa Felicidade': ['Butiatuvinha', 'Campina do Siqueira', 'Cascatinha', 'Lamenha Pequena', 'Mossunguê', 'Orleans', 'Santa Felicidade', 'Santo Inácio', 'São Braz', 'São João', 'Vista Alegre'],
  'Tatuquara': ['Campo de Santana', 'Tatuquara']
};
export function regionalFor(name: string) { return Object.entries(groups).find(([,names]) => names.includes(name))?.[0]; }
