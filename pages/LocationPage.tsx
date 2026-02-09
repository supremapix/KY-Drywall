
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MapPin, CheckCircle2, ShieldCheck, Zap, HardHat, Recycle, Timer, ChevronRight, MessageCircle, ArrowLeft, Phone, Package, Clock, Truck, Star, Home } from 'lucide-react';
import { BASE_URL, SERVICES, NEIGHBORHOODS, CITIES_RMC, getRandomCTA, PRODUCTS, COMPANY_INFO, normalizeLocationName } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';
import ProductCard from '../components/ProductCard';

// Geocoordenadas dos bairros de Curitiba e cidades da RMC
const GEO_COORDINATES: Record<string, { lat: string; lng: string }> = {
  "abranches": { lat: "-25.3730", lng: "-49.2850" },
  "agua-verde": { lat: "-25.4500", lng: "-49.2830" },
  "ahu": { lat: "-25.4100", lng: "-49.2780" },
  "alto-boqueirão": { lat: "-25.5100", lng: "-49.2350" },
  "alto-boqueirao": { lat: "-25.5100", lng: "-49.2350" },
  "alto-da-gloria": { lat: "-25.4200", lng: "-49.2560" },
  "alto-da-xv": { lat: "-25.4280", lng: "-49.2530" },
  "atuba": { lat: "-25.3700", lng: "-49.2400" },
  "augusta": { lat: "-25.3850", lng: "-49.3150" },
  "bacacheri": { lat: "-25.3900", lng: "-49.2500" },
  "bairro-alto": { lat: "-25.3650", lng: "-49.2300" },
  "barreirinha": { lat: "-25.3500", lng: "-49.2700" },
  "batel": { lat: "-25.4400", lng: "-49.2900" },
  "bigorrilho": { lat: "-25.4350", lng: "-49.2980" },
  "boa-vista": { lat: "-25.3800", lng: "-49.2600" },
  "bom-retiro": { lat: "-25.4150", lng: "-49.2650" },
  "boqueirao": { lat: "-25.4900", lng: "-49.2400" },
  "butiatuvinha": { lat: "-25.3600", lng: "-49.3300" },
  "cabral": { lat: "-25.4000", lng: "-49.2650" },
  "cachoeira": { lat: "-25.3400", lng: "-49.2900" },
  "cajuru": { lat: "-25.4500", lng: "-49.2300" },
  "campina-do-siqueira": { lat: "-25.4450", lng: "-49.3050" },
  "campo-comprido": { lat: "-25.4550", lng: "-49.3200" },
  "campo-de-santana": { lat: "-25.5400", lng: "-49.3100" },
  "capao-da-imbuia": { lat: "-25.4400", lng: "-49.2200" },
  "capao-raso": { lat: "-25.5000", lng: "-49.2950" },
  "cascatinha": { lat: "-25.3850", lng: "-49.3200" },
  "centro": { lat: "-25.4290", lng: "-49.2710" },
  "centro-civico": { lat: "-25.4150", lng: "-49.2700" },
  "champagnat": { lat: "-25.4480", lng: "-49.2920" },
  "cic": { lat: "-25.5000", lng: "-49.3400" },
  "cidade-industrial": { lat: "-25.5000", lng: "-49.3400" },
  "cristo-rei": { lat: "-25.4350", lng: "-49.2500" },
  "fanny": { lat: "-25.4700", lng: "-49.2700" },
  "fazendinha": { lat: "-25.4800", lng: "-49.3150" },
  "ganchinho": { lat: "-25.5500", lng: "-49.2600" },
  "guabirotuba": { lat: "-25.4600", lng: "-49.2350" },
  "guaira": { lat: "-25.4600", lng: "-49.2700" },
  "hauer": { lat: "-25.4800", lng: "-49.2600" },
  "hugo-lange": { lat: "-25.4200", lng: "-49.2500" },
  "jardim-botanico": { lat: "-25.4430", lng: "-49.2400" },
  "jardim-das-americas": { lat: "-25.4500", lng: "-49.2250" },
  "jardim-social": { lat: "-25.4300", lng: "-49.2350" },
  "juveve": { lat: "-25.4100", lng: "-49.2650" },
  "lamenha-pequena": { lat: "-25.3600", lng: "-49.3100" },
  "lindoia": { lat: "-25.4650", lng: "-49.2750" },
  "merces": { lat: "-25.4300", lng: "-49.3000" },
  "mossungue": { lat: "-25.4400", lng: "-49.3200" },
  "novo-mundo": { lat: "-25.4900", lng: "-49.2800" },
  "orleans": { lat: "-25.4350", lng: "-49.3100" },
  "parolin": { lat: "-25.4600", lng: "-49.2650" },
  "pilarzinho": { lat: "-25.3800", lng: "-49.2850" },
  "pinheirinho": { lat: "-25.5100", lng: "-49.3050" },
  "portao": { lat: "-25.4700", lng: "-49.2900" },
  "prado-velho": { lat: "-25.4450", lng: "-49.2550" },
  "reboucas": { lat: "-25.4450", lng: "-49.2650" },
  "riviera": { lat: "-25.4500", lng: "-49.3150" },
  "santa-candida": { lat: "-25.3500", lng: "-49.2500" },
  "santa-felicidade": { lat: "-25.3900", lng: "-49.3300" },
  "santa-quiteria": { lat: "-25.4600", lng: "-49.3100" },
  "santo-inacio": { lat: "-25.4550", lng: "-49.3250" },
  "sao-braz": { lat: "-25.4700", lng: "-49.3200" },
  "sao-francisco": { lat: "-25.4250", lng: "-49.2800" },
  "sao-joao": { lat: "-25.4850", lng: "-49.2950" },
  "sao-lourenco": { lat: "-25.3850", lng: "-49.2700" },
  "seminario": { lat: "-25.4450", lng: "-49.3000" },
  "sitio-cercado": { lat: "-25.5300", lng: "-49.2900" },
  "taboao": { lat: "-25.3700", lng: "-49.2700" },
  "taruma": { lat: "-25.4300", lng: "-49.2200" },
  "tatuquara": { lat: "-25.5400", lng: "-49.3200" },
  "tingui": { lat: "-25.3700", lng: "-49.2800" },
  "uberaba": { lat: "-25.4700", lng: "-49.2300" },
  "umbara": { lat: "-25.5600", lng: "-49.2800" },
  "vila-izabel": { lat: "-25.4500", lng: "-49.2950" },
  "vista-alegre": { lat: "-25.4650", lng: "-49.2500" },
  "xaxim": { lat: "-25.5000", lng: "-49.2650" },
  // Cidades RMC
  "curitiba": { lat: "-25.4284", lng: "-49.2733" },
  "pinhais": { lat: "-25.4430", lng: "-49.1930" },
  "sao-jose-dos-pinhais": { lat: "-25.5350", lng: "-49.2060" },
  "colombo": { lat: "-25.2920", lng: "-49.2240" },
  "araucaria": { lat: "-25.5930", lng: "-49.4100" },
  "campo-largo": { lat: "-25.4590", lng: "-49.5290" },
  "almirante-tamandare": { lat: "-25.3230", lng: "-49.3060" },
  "fazenda-rio-grande": { lat: "-25.6620", lng: "-49.3070" },
  "piraquara": { lat: "-25.4420", lng: "-49.0630" },
  "quatro-barras": { lat: "-25.3670", lng: "-49.0760" },
  "campina-grande-do-sul": { lat: "-25.3040", lng: "-49.0550" },
  "campo-magro": { lat: "-25.3680", lng: "-49.3650" },
  "itaperucu": { lat: "-25.2190", lng: "-49.3450" },
  "rio-branco-do-sul": { lat: "-25.1890", lng: "-49.3130" },
};

const getGeoForLocation = (slug: string) => {
  const normalized = slug.toLowerCase();
  return GEO_COORDINATES[normalized] || { lat: "-25.4284", lng: "-49.2733" }; // default Curitiba
};

interface LocationPageProps {
  type: 'drywall' | 'steel';
}

const LocationPage: React.FC<LocationPageProps> = ({ type }) => {
  const { location } = useParams<{ location: string }>();
  const navigate = useNavigate();
  const [cta1, setCta1] = useState('');
  const [cta2, setCta2] = useState('');

  const allLocations = [...NEIGHBORHOODS, ...CITIES_RMC];

  const formattedName = React.useMemo(() => {
    if (!location) return 'Localização';

    const matchedLocation = allLocations.find(loc => normalizeLocationName(loc) === location);
    if (matchedLocation) return matchedLocation;

    return location.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }, [location]);

  const serviceName = type === 'drywall' ? 'Drywall' : 'Steel Frame';
  const isCity = CITIES_RMC.some(c => normalizeLocationName(c) === location);
  const geo = location ? getGeoForLocation(location) : { lat: "-25.4284", lng: "-49.2733" };
  const canonicalUrl = `${BASE_URL}/${type}-em/${location}`;

  useEffect(() => {
    if (!location) {
      navigate('/', { replace: true });
      return;
    }

    setCta1(getRandomCTA());
    setCta2(getRandomCTA());
    window.scrollTo(0, 0);
  }, [location, navigate]);

  const featuredProducts = type === 'drywall'
    ? PRODUCTS.filter(p => ['Placas', 'Massas', 'Fitas', 'Parafusos'].includes(p.category)).slice(0, 6)
    : PRODUCTS.filter(p => ['Perfis', 'Parafusos', 'Ferragens', 'Placas'].includes(p.category)).slice(0, 6);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${BASE_URL}/#organization`,
        "name": "KY Drywall & Steel Frame",
        "image": `${BASE_URL}/logotipo-ky-drywall.png`,
        "url": BASE_URL,
        "telephone": "+554135284232",
        "email": COMPANY_INFO.email,
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rod. BR 277, 3641",
          "addressLocality": "Curitiba",
          "addressRegion": "PR",
          "postalCode": "82920-000",
          "addressCountry": "BR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "-25.4284",
          "longitude": "-49.2733"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "07:30",
            "closes": "17:30"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "07:30",
            "closes": "12:00"
          }
        ],
        "sameAs": [
          "https://facebook.com/kydrywall",
          "https://instagram.com/kydrywall"
        ],
        "areaServed": [
          {
            "@type": isCity ? "City" : "Place",
            "name": formattedName,
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": geo.lat,
              "longitude": geo.lng
            },
            "containedInPlace": {
              "@type": "AdministrativeArea",
              "name": "Região Metropolitana de Curitiba, Paraná, Brasil"
            }
          }
        ]
      },
      {
        "@type": "Service",
        "@id": `${canonicalUrl}/#service`,
        "name": `${serviceName} em ${formattedName}`,
        "serviceType": type === 'drywall' ? "Instalação e Materiais para Drywall" : "Construção e Materiais para Steel Frame",
        "description": `Serviços completos de ${serviceName} em ${formattedName}, Curitiba - PR. Venda de materiais, entrega rápida, assessoria técnica especializada e orçamento gratuito.`,
        "provider": {
          "@type": "LocalBusiness",
          "@id": `${BASE_URL}/#organization`
        },
        "areaServed": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": geo.lat,
            "longitude": geo.lng
          },
          "geoRadius": "15000"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `Materiais para ${serviceName}`,
          "itemListElement": featuredProducts.slice(0, 4).map(p => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": p.name,
              "description": p.description,
              "image": p.image.startsWith('http') ? p.image : `${BASE_URL}${p.image}`,
              "brand": {
                "@type": "Brand",
                "name": "KY Drywall"
              }
            }
          }))
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": canonicalUrl,
          "servicePhone": "+554135284232",
          "serviceLocation": {
            "@type": "Place",
            "name": `Atendimento ${serviceName} em ${formattedName}`,
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": geo.lat,
              "longitude": geo.lng
            }
          }
        }
      },
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}/#webpage`,
        "url": canonicalUrl,
        "name": `${serviceName} em ${formattedName} | KY Drywall & Steel Frame`,
        "description": `${serviceName} em ${formattedName} com a KY Drywall & Steel Frame. Materiais, entrega rápida e assessoria técnica.`,
        "isPartOf": { "@id": `${BASE_URL}/#website` },
        "about": { "@id": `${canonicalUrl}/#service` },
        "breadcrumb": { "@id": `${canonicalUrl}/#breadcrumb` },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "h2", ".hero-description"]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Início",
            "item": BASE_URL
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": type === 'drywall' ? "Drywall" : "Steel Frame",
            "item": `${BASE_URL}/servicos/${type === 'drywall' ? 'drywall' : 'steel-frame'}`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": `${serviceName} em ${formattedName}`,
            "item": canonicalUrl
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}/#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": `A KY Drywall entrega materiais de ${serviceName.toLowerCase()} em ${formattedName}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Sim! A KY Drywall realiza entregas de todos os materiais para ${serviceName.toLowerCase()} em ${formattedName} com frota própria. Entrega no mesmo dia, sujeito a disponibilidade de estoque.`
            }
          },
          {
            "@type": "Question",
            "name": `Qual o prazo de entrega de ${serviceName.toLowerCase()} para ${formattedName}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `O prazo de entrega para ${formattedName} é de até 24 horas úteis após a confirmação do pedido. Para pedidos realizados até as 12h, a entrega pode ser feita no mesmo dia.`
            }
          },
          {
            "@type": "Question",
            "name": `Quais marcas de ${serviceName.toLowerCase()} a KY Drywall trabalha?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Trabalhamos com as melhores marcas do mercado: Barbieri, Gypsum, Holdflex, Eternit, Isover, Placo, Fortíssima e LP. Todas com garantia do fabricante e certificações ABNT."
            }
          },
          {
            "@type": "Question",
            "name": `Como solicitar orçamento de ${serviceName.toLowerCase()} para ${formattedName}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Solicite seu orçamento gratuito pelo WhatsApp (41) 99645-7421 ou pelo telefone (41) 3528-4232. Nossa equipe técnica responde rapidamente com preços e condições especiais para ${formattedName}.`
            }
          }
        ]
      }
    ]
  };

  const pageTitle = `${serviceName} em ${formattedName} | Entrega Rápida | Orçamento Grátis | KY Drywall`;
  const pageDescription = `${serviceName} em ${formattedName}, ${isCity ? 'PR' : 'Curitiba - PR'} com a KY Drywall & Steel Frame. Entrega imediata de placas, perfis, massas e acessórios. Atendimento especializado, orçamento via WhatsApp e os melhores preços. Maior estoque de Curitiba. Ligue: (41) 3528-4232`;
  const pageKeywords = `${serviceName.toLowerCase()} ${formattedName.toLowerCase()}, ${serviceName.toLowerCase()} curitiba, materiais ${serviceName.toLowerCase()}, instalação ${serviceName.toLowerCase()}, orçamento ${serviceName.toLowerCase()}, ${type} ${formattedName.toLowerCase()}, construção a seco ${formattedName.toLowerCase()}, entrega ${formattedName.toLowerCase()}, loja drywall ${formattedName.toLowerCase()}, preço ${serviceName.toLowerCase()} ${formattedName.toLowerCase()}`;

  if (!location) {
    return null;
  }

  return (
    <div className="bg-white min-h-screen">
      <EnhancedSEO
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonical={canonicalUrl}
        schema={schema}
      />

      <section className="bg-gradient-to-br from-[#003366] via-[#002447] to-[#001829] py-16 md:py-28 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase text-[#D31219] mb-8 tracking-[0.3em]">
            <Link to="/" className="hover:text-white flex items-center gap-1 transition-colors"><Home size={14}/> Início</Link>
            <ChevronRight size={10}/>
            <span className="text-white/60">Atendimento em {formattedName}</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-tight">
            {serviceName} em <span className="text-[#D31219]">{formattedName}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl font-medium leading-relaxed mb-10">
            A KY Drywall é a maior distribuidora de materiais para construção a seco em Curitiba. Atendemos {formattedName} com entrega rápida, assessoria técnica especializada e os melhores preços do mercado.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <Truck size={18} className="text-[#D31219]" />
              <span className="text-sm font-bold">Entrega Rápida</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <Package size={18} className="text-[#D31219]" />
              <span className="text-sm font-bold">Maior Estoque</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <Star size={18} className="text-[#D31219]" />
              <span className="text-sm font-bold">Assessoria Técnica</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá! Gostaria de um orçamento para ${serviceName} em ${formattedName}`}
              className="bg-[#D31219] text-white font-black px-10 py-5 rounded-2xl text-xs uppercase tracking-widest hover:bg-white hover:text-[#D31219] transition-all shadow-2xl flex items-center justify-center gap-3 group"
            >
              <MessageCircle size={20} className="group-hover:rotate-12 transition-transform"/> Orçamento Gratuito
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
              className="bg-white/10 backdrop-blur-md text-white font-black px-10 py-5 rounded-2xl text-xs uppercase tracking-widest hover:bg-white hover:text-[#003366] transition-all border-2 border-white/30 flex items-center justify-center gap-3"
            >
              <Phone size={20}/> {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/3 space-y-20">
            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 mb-12 leading-tight">
                Por que escolher a <span className="text-[#D31219]">KY Drywall</span><br/>em {formattedName}?
              </h2>
              <div className="grid grid-cols-1 gap-8">
                {[
                  {
                    title: `Entrega Expressa em ${formattedName}`,
                    icon: Truck,
                    text: `Nossa frota própria garante entrega no mesmo dia para ${formattedName}. Trabalhamos com as melhores marcas como Barbieri, Gypsum e Holdflex. Receba seus materiais rapidamente e comece sua obra sem atrasos.`
                  },
                  {
                    title: `Assessoria Técnica Especializada`,
                    icon: HardHat,
                    text: `Equipe técnica qualificada para orientar na escolha dos materiais ideais para sua obra. Calculamos quantitativos precisos, evitando desperdícios. Suporte completo do projeto à execução em ${formattedName}.`
                  },
                  {
                    title: `Maior Estoque de Curitiba`,
                    icon: Package,
                    text: `Mais de 50 produtos disponíveis em estoque permanente. Placas ST, RU e RF, perfis de todas as medidas, parafusos, fitas, massas e todos os acessórios para ${serviceName.toLowerCase()}. Tudo em pronta entrega para ${formattedName}.`
                  },
                  {
                    title: `Obra 70% Mais Rápida`,
                    icon: Zap,
                    text: `O sistema de construção a seco reduz o tempo de obra drasticamente. Menos resíduos, mais economia e acabamento profissional. Reduza custos com mão de obra e finalize projetos em ${formattedName} no prazo.`
                  },
                  {
                    title: `Garantia de Qualidade`,
                    icon: ShieldCheck,
                    text: `Todos os produtos com certificação e garantia do fabricante. Materiais testados e aprovados para construção civil. Atendemos normas técnicas brasileiras e garantimos a qualidade em cada entrega para ${formattedName}.`
                  },
                  {
                    title: `Sustentabilidade`,
                    icon: Recycle,
                    text: `Construção a seco gera até 80% menos resíduos que obras convencionais. Materiais recicláveis e processos sustentáveis. Contribua para o meio ambiente com tecnologia moderna em sua obra em ${formattedName}.`
                  }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-6 items-start bg-gradient-to-br from-gray-50 to-white p-10 rounded-[3rem] border border-gray-100 group hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
                    <div className="bg-gradient-to-br from-[#003366] to-[#002447] p-6 rounded-3xl text-[#D31219] group-hover:from-[#D31219] group-hover:to-[#a00e13] group-hover:text-white transition-all duration-500 shrink-0 shadow-xl">
                      <item.icon size={40} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-tight text-gray-900 mb-4 leading-tight">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed font-medium text-base">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 mb-4 leading-tight">
                Produtos para <span className="text-[#D31219]">{formattedName}</span>
              </h2>
              <p className="text-gray-600 font-medium mb-12 text-lg leading-relaxed">
                Confira os principais materiais que entregamos em {formattedName} com pronta entrega. Estoque completo para sua obra de {serviceName.toLowerCase()}.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="text-center mt-12">
                <Link to="/produtos" className="inline-flex items-center gap-3 bg-[#003366] text-white font-black px-12 py-6 rounded-2xl text-xs uppercase tracking-widest hover:bg-[#D31219] transition-all shadow-xl hover:scale-105 group">
                  Ver Catálogo Completo <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#D31219] to-[#a00e13] p-12 md:p-20 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                <MessageCircle size={300} />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">
                  Solicite seu<br/>Orçamento Agora
                </h3>
                <p className="text-lg md:text-xl mb-10 text-white/90 font-medium leading-relaxed max-w-2xl">
                  Atendimento especializado para {formattedName}. Resposta rápida via WhatsApp com preços competitivos e condições especiais para sua obra.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá! Gostaria de um orçamento para ${serviceName} em ${formattedName}. Preciso de assessoria técnica.`}
                    className="bg-white text-[#D31219] font-black px-12 py-6 rounded-2xl text-xs uppercase tracking-widest hover:bg-[#003366] hover:text-white transition-all shadow-2xl flex items-center justify-center gap-3 group"
                  >
                    <MessageCircle size={22} className="group-hover:rotate-12 transition-transform"/> {cta1}
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                    className="bg-[#003366] text-white font-black px-12 py-6 rounded-2xl text-xs uppercase tracking-widest hover:bg-white hover:text-[#003366] transition-all shadow-xl flex items-center justify-center gap-3"
                  >
                    <Phone size={22}/> Ligar Agora
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 mb-12 leading-tight">
                Nossos <span className="text-[#D31219]">Serviços</span> em {formattedName}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {SERVICES.map(service => (
                  <Link
                    key={service.id}
                    to={`/servicos/${service.id}`}
                    className="group relative overflow-hidden rounded-[3rem] h-80 hover:shadow-2xl transition-all hover:scale-[1.02] duration-500"
                  >
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                      <h3 className="text-2xl font-black uppercase mb-3 group-hover:text-[#D31219] transition-colors leading-tight">{service.title}</h3>
                      <p className="text-sm text-gray-300 line-clamp-2 leading-relaxed font-medium">{service.description.replace(/<[^>]*>/g, '')}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-12 md:p-16 rounded-[4rem] border border-gray-100 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-gray-900 mb-8 leading-tight">
                Informações de <span className="text-[#D31219]">Entrega</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#D31219] p-3 rounded-2xl text-white shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-black uppercase text-sm mb-2 text-gray-900">Horário de Atendimento</h4>
                      <p className="text-sm text-gray-600 font-medium">{COMPANY_INFO.hours.weekdays}</p>
                      <p className="text-sm text-gray-600 font-medium">{COMPANY_INFO.hours.saturday}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#D31219] p-3 rounded-2xl text-white shrink-0">
                      <Truck size={24} />
                    </div>
                    <div>
                      <h4 className="font-black uppercase text-sm mb-2 text-gray-900">Prazo de Entrega</h4>
                      <p className="text-sm text-gray-600 font-medium">Entrega no mesmo dia para {formattedName} (sujeito a disponibilidade)</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#D31219] p-3 rounded-2xl text-white shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-black uppercase text-sm mb-2 text-gray-900">Loja Física</h4>
                      <p className="text-sm text-gray-600 font-medium">{COMPANY_INFO.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#D31219] p-3 rounded-2xl text-white shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-black uppercase text-sm mb-2 text-gray-900">Contato</h4>
                      <p className="text-sm text-gray-600 font-medium">{COMPANY_INFO.phone}</p>
                      <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} className="text-sm text-[#D31219] font-black hover:underline">WhatsApp: {COMPANY_INFO.whatsapp}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 mb-12 leading-tight">
                Perguntas <span className="text-[#D31219]">Frequentes</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    q: `A KY Drywall entrega materiais de ${serviceName.toLowerCase()} em ${formattedName}?`,
                    a: `Sim! A KY Drywall realiza entregas de todos os materiais para ${serviceName.toLowerCase()} em ${formattedName} com frota própria. Entrega no mesmo dia, sujeito a disponibilidade de estoque. Atendemos ${formattedName} e toda a Região Metropolitana de Curitiba.`
                  },
                  {
                    q: `Qual o prazo de entrega de ${serviceName.toLowerCase()} para ${formattedName}?`,
                    a: `O prazo de entrega para ${formattedName} é de até 24 horas úteis após a confirmação do pedido. Para pedidos realizados até as 12h, a entrega pode ser feita no mesmo dia.`
                  },
                  {
                    q: `Quais marcas de ${serviceName.toLowerCase()} a KY Drywall trabalha?`,
                    a: `Trabalhamos com as melhores marcas do mercado: Barbieri, Gypsum, Holdflex, Eternit, Isover, Placo, Fortíssima e LP. Todas com garantia do fabricante e certificações ABNT.`
                  },
                  {
                    q: `Como solicitar orçamento de ${serviceName.toLowerCase()} para ${formattedName}?`,
                    a: `Solicite seu orçamento gratuito pelo WhatsApp (41) 99645-7421 ou pelo telefone (41) 3528-4232. Nossa equipe técnica responde rapidamente com preços e condições especiais para ${formattedName}.`
                  }
                ].map((faq, i) => (
                  <details key={i} className="bg-gradient-to-br from-gray-50 to-white rounded-[2rem] border border-gray-100 group open:shadow-xl transition-all">
                    <summary className="p-8 cursor-pointer font-black text-lg uppercase tracking-tight text-gray-900 flex items-center justify-between gap-4 list-none [&::-webkit-details-marker]:hidden">
                      <span className="flex-1 leading-tight">{faq.q}</span>
                      <ChevronRight size={20} className="text-[#D31219] shrink-0 group-open:rotate-90 transition-transform" />
                    </summary>
                    <div className="px-8 pb-8 -mt-2">
                      <p className="text-gray-600 leading-relaxed font-medium text-base">{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:w-1/3">
            <div className="sticky top-28 space-y-8">
              <div className="bg-gradient-to-br from-[#003366] to-[#002447] p-10 rounded-[3rem] shadow-2xl text-white border border-white/10">
                <h4 className="text-xl font-black uppercase tracking-tight mb-8 flex items-center gap-2 border-b border-white/20 pb-6">
                  <Phone className="text-[#D31219]" size={24}/> Fale Conosco
                </h4>
                <div className="space-y-6 mb-8">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-black">Telefone</p>
                    <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="text-xl font-black hover:text-[#D31219] transition-colors block">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-black">Horário</p>
                    <p className="text-sm font-bold leading-relaxed">{COMPANY_INFO.hours.weekdays}</p>
                    <p className="text-sm font-bold">{COMPANY_INFO.hours.saturday}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-black">Endereço</p>
                    <p className="text-sm font-bold leading-relaxed">{COMPANY_INFO.address}</p>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá! Vim do site e gostaria de informações sobre ${serviceName} em ${formattedName}`}
                  className="w-full bg-[#D31219] text-white font-black px-8 py-5 rounded-2xl text-xs uppercase tracking-widest hover:bg-white hover:text-[#D31219] transition-all flex items-center justify-center gap-3 shadow-xl hover:scale-105 group"
                >
                  <MessageCircle size={20} className="group-hover:rotate-12 transition-transform"/> {cta2}
                </a>
              </div>

              <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100">
                <h4 className="text-xl font-black uppercase tracking-tight mb-8 border-b-2 border-[#D31219] pb-6 flex items-center gap-2">
                  <MapPin className="text-[#D31219]" size={24}/> Bairros de Curitiba
                </h4>
                <div className="grid grid-cols-1 gap-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {NEIGHBORHOODS.map(n => (
                    <Link
                      key={n}
                      to={`/${type}-em/${normalizeLocationName(n)}`}
                      onClick={() => window.scrollTo(0, 0)}
                      className={`group flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 transition-all ${normalizeLocationName(n) === location ? 'bg-[#D31219]/5 border border-[#D31219]/20' : ''}`}
                    >
                      <span className={`text-xs font-bold ${normalizeLocationName(n) === location ? 'text-[#D31219]' : 'text-gray-600 group-hover:text-[#D31219]'}`}>{n}</span>
                      <ChevronRight size={16} className={`${normalizeLocationName(n) === location ? 'text-[#D31219]' : 'text-gray-300 group-hover:text-[#D31219]'}`} />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100">
                <h4 className="text-xl font-black uppercase tracking-tight mb-8 border-b-2 border-[#D31219] pb-6 flex items-center gap-2">
                  <MapPin className="text-[#D31219]" size={24}/> Região Metropolitana
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {CITIES_RMC.map(c => (
                    <Link
                      key={c}
                      to={`/${type}-em/${normalizeLocationName(c)}`}
                      onClick={() => window.scrollTo(0, 0)}
                      className={`group flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 transition-all ${normalizeLocationName(c) === location ? 'bg-[#D31219]/5 border border-[#D31219]/20' : ''}`}
                    >
                      <span className={`text-xs font-bold ${normalizeLocationName(c) === location ? 'text-[#D31219]' : 'text-gray-600 group-hover:text-[#D31219]'}`}>{c}</span>
                      <ChevronRight size={16} className={`${normalizeLocationName(c) === location ? 'text-[#D31219]' : 'text-gray-300 group-hover:text-[#D31219]'}`} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
