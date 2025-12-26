
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, CheckCircle2, ShieldCheck, Zap, HardHat, Recycle, Timer, ChevronRight, MessageCircle, ArrowLeft, Phone } from 'lucide-react';
import { BASE_URL, SERVICES, NEIGHBORHOODS, getRandomCTA } from '../constants';
import SEO from '../components/SEO';

interface LocationPageProps {
  type: 'drywall' | 'steel';
}

const LocationPage: React.FC<LocationPageProps> = ({ type }) => {
  const { location } = useParams<{ location: string }>();
  const [cta1, setCta1] = useState('');
  
  const formattedName = location ? location.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : '';
  const serviceName = type === 'drywall' ? 'Drywall' : 'Steel Frame';
  
  useEffect(() => {
    setCta1(getRandomCTA());
    window.scrollTo(0, 0);
  }, [location]);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${serviceName} em ${formattedName}`,
    "serviceType": "Construção a Seco",
    "provider": {
      "@type": "LocalBusiness",
      "name": "KY Drywall & Steel Frame",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": formattedName,
        "addressRegion": "PR"
      }
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title={`${serviceName} em ${formattedName} | Curitiba PR`}
        description={`Especialistas em ${serviceName} para o bairro ${formattedName}. Entrega imediata de placas, perfis e acessórios. Solicite orçamento via WhatsApp.`}
        schema={schema}
      />
      
      {/* Hero Header */}
      <section className="bg-[#003366] py-20 md:py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1920" alt={`Obra em ${formattedName}`} className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase text-[#D31219] mb-8 tracking-[0.3em]">
            <Link to="/blog" className="hover:text-white flex items-center gap-1"><ArrowLeft size={12}/> Blog KY</Link>
            <ChevronRight size={10}/>
            <span>Atendimento Regional</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-tight">
            {serviceName} em <span className="text-[#D31219]">{formattedName}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl font-medium leading-relaxed">
            Sistemas certificados de construção a seco para {formattedName}. Materiais de alta performance com logística própria para toda a região em 2025.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/3 space-y-16">
            <div className="grid grid-cols-1 gap-8">
              {[
                { title: `Logística KY em ${formattedName}`, icon: Zap, text: `Atendemos canteiros de obras em ${formattedName} com frota própria, garantindo pontualidade absoluta na entrega de placas de gesso e perfis Barbieri.` },
                { title: `Visita Técnica Regional`, icon: HardHat, text: `Nossa equipe de engenharia oferece suporte em ${formattedName} para conferência de medidas e quantitativo de materiais para Steel Frame.` },
                { title: `Sustentabilidade em ${formattedName}`, icon: Recycle, text: `O sistema de drywall reduz resíduos na sua obra em ${formattedName} em até 80%, sendo a solução ideal para condomínios e áreas residenciais.` }
              ].map((sec, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-8 items-start bg-gray-50 p-10 rounded-[3rem] border border-gray-100 group hover:bg-white hover:shadow-xl transition-all">
                  <div className="bg-[#003366] p-6 rounded-3xl text-[#D31219] group-hover:bg-[#D31219] group-hover:text-white transition-colors">
                    <sec.icon size={40} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black uppercase tracking-tight text-gray-900 mb-4">{sec.title}</h2>
                    <p className="text-gray-600 leading-relaxed font-medium">{sec.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#D31219] p-12 md:p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-none">Cote sua Obra em {formattedName}</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/5541996457421" className="bg-white text-[#D31219] font-black px-10 py-5 rounded-2xl text-[11px] uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-xl flex items-center justify-center gap-3">
                  <MessageCircle size={20}/> {cta1}
                </a>
                <a href="tel:4135284232" className="bg-[#003366] text-white font-black px-10 py-5 rounded-2xl text-[11px] uppercase tracking-widest hover:bg-white hover:text-[#003366] transition-all flex items-center justify-center gap-3">
                  <Phone size={20}/> Falar com Atendente
                </a>
              </div>
            </div>
          </div>

          <aside className="lg:w-1/3">
            <div className="sticky top-28 space-y-8">
              <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-gray-100">
                <h4 className="text-xl font-black uppercase tracking-tight mb-8 border-b-2 border-[#D31219] pb-4 flex items-center gap-2">
                  <MapPin className="text-[#D31219]" size={20}/> Localidades Próximas
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {NEIGHBORHOODS.slice(0, 10).map(n => (
                    <Link key={n} to={`/${type}-em-${n.toLowerCase().replace(/\s+/g, '-')}`} className="group flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 transition-all">
                      <span className="text-xs font-black uppercase tracking-widest text-gray-500 group-hover:text-[#D31219]">{n}</span>
                      <ChevronRight size={14} className="text-gray-200 group-hover:text-[#D31219]" />
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
