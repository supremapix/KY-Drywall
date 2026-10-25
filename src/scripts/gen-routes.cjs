
const fs = require('fs');
const NEIGHBORHOODS = [
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

const CITIES_RMC = [
  "Curitiba", "Pinhais", "São José dos Pinhais", "Colombo", "Araucária", "Campo Largo",
  "Almirante Tamandaré", "Fazenda Rio Grande", "Piraquara", "Quatro Barras", "Campina Grande do Sul",
  "Campo Magro", "Itaperuçu", "Rio Branco do Sul"
];

const PRODUCTS = [
  'm1','m2','m3','m4','m5','m6','m7','m8',
  'f1','f2','f3','f4','f5',
  'pa1','pa2','pa3','pa4','pa5',
  'pl1','pl2','pl3','pl4','pl5','pl6','pl7',
  'pe1','pe2','pe3','pe4','pe5','pe6','pe7','pe8',
  'la1','la2','la3',
  'd1','d2','d3','d4',
  'fe1','fe2','fe3','fe4','fe5','fe6','fe7','fe8','fe9','fe10','fe11','fe12','fe13'
];

const BLOGS = ['b1','b2','b3','b4','b5','b6','b7','b8','b9','b10'];

const normalize = (name) => {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-');
};

const routes = [
  "/", "/empresa", "/servicos", "/produtos", "/contato", "/blog", "/sitemap", "/faq", "/links",
  "/servicos/steel-frame", "/servicos/telhado-steel", "/servicos/drywall", "/servicos/shingle", "/servicos/pvc-modular", "/steel-frame"
];

BLOGS.forEach(id => routes.push(`/blog/${id}`));
PRODUCTS.forEach(id => routes.push(`/produto/${id}`));

const allLocs = Array.from(new Set([
  ...NEIGHBORHOODS,
  ...CITIES_RMC
]));

allLocs.sort().forEach(loc => {
  const slug = normalize(loc);
  routes.push(`/drywall-em/${slug}`);
  routes.push(`/steel-frame-em/${slug}`);
});

fs.writeFileSync('src/seo/indexable-routes.json', JSON.stringify(routes, null, 2));
console.log('Generated indexable-routes.json with', routes.length, 'routes');
