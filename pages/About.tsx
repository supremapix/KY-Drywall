
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Award, ShieldCheck, Building2, HardHat, Warehouse, Clock, Truck } from 'lucide-react';
import { getRandomCTA, COMPANY_INFO } from '../constants';

const About: React.FC = () => {
  const [cta, setCta] = useState('');

  useEffect(() => {
    setCta(getRandomCTA());
  }, []);

  return (
    <div className="bg-white">
      <section className="bg-[#003366] py-32 text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="bg-[#D31219] text-white font-black uppercase tracking-[0.4em] text-[10px] px-6 py-2 rounded-full mb-8 inline-block">A Maior Distribuidora de Curitiba</span>
          <h1 className="text-6xl md:text-9xl font-black mb-10 uppercase tracking-tighter leading-none">KY Drywall <br/><span className="text-gray-400">&amp; Steel Frame</span></h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-200 font-medium">Líder em distribuição de materiais para construção a seco em Curitiba. Especialistas em Steel Frame, Drywall, Telhado Shingle e Isolamento Acústico.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <h2 className="text-4xl md:text-6xl font-black text-[#003366] uppercase tracking-tighter leading-none">Sua Obra <br/><span className="text-[#D31219]">70% Mais Rápida</span></h2>
              <div className="prose prose-lg text-gray-600 font-medium space-y-6">
                <p>A <strong>KY Drywall & Steel Frame</strong> é a maior distribuidora de materiais para construção a seco de Curitiba. Localizada na Rod. BR 277 - 3641, no bairro Cajuru, somos especialistas em sistemas construtivos modernos e eficientes.</p>
                <p>Trabalhamos com as melhores marcas do mercado, incluindo <strong>Barbieri</strong> para perfis steel frame, oferecendo materiais de alta qualidade com entrega rápida em Curitiba e Região Metropolitana.</p>
                <p>Nossa equipe oferece assessoria técnica especializada para arquitetos, engenheiros e construtores, garantindo que você escolha os materiais certos para cada tipo de projeto.</p>
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <p className="text-sm font-bold text-[#003366] mb-2">Horário de Atendimento:</p>
                  <p className="text-sm"><Clock className="inline mr-2" size={16}/>{COMPANY_INFO.hours.weekdays}</p>
                  <p className="text-sm"><Clock className="inline mr-2" size={16}/>{COMPANY_INFO.hours.saturday}</p>
                </div>
              </div>
              <div className="pt-6">
                <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} className="bg-[#D31219] text-white font-black px-12 py-6 rounded-2xl inline-flex items-center gap-4 text-xs uppercase tracking-widest shadow-xl hover:bg-[#003366] transition-all">
                  <MessageCircle size={24} /> {cta}
                </a>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-gray-50 aspect-[3/4]">
                <img src="https://images.pexels.com/photos/8092357/pexels-photo-8092357.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Instalação Drywall" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-10 -right-6 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 text-center">
                 <Award size={40} className="text-[#D31219] mx-auto mb-4" />
                 <p className="text-3xl font-black text-[#003366]">70%</p>
                 <p className="text-[8px] font-black uppercase text-gray-400 tracking-wider">Mais Rápido</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-[#003366] uppercase tracking-tighter mb-6">Por que escolher a <span className="text-[#D31219]">KY?</span></h2>
            <p className="text-gray-600 text-lg font-medium max-w-2xl mx-auto">Mais do que uma distribuidora, somos parceiros do seu projeto</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Warehouse, title: 'Maior Estoque de Curitiba', desc: 'Pronta entrega de placas de drywall, perfis metálicos, parafusos, fitas e todos os acessórios para sua obra.' },
              { icon: HardHat, title: 'Assessoria Técnica Especializada', desc: 'Equipe treinada para orientar na escolha dos materiais ideais para cada tipo de projeto residencial ou comercial.' },
              { icon: Truck, title: 'Entrega Rápida', desc: 'Frota própria garantindo entregas ágeis e seguras em toda Curitiba e Região Metropolitana.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-12 rounded-[3rem] shadow-lg hover:shadow-2xl transition-shadow group">
                <div className="bg-[#003366] p-5 rounded-2xl text-white mb-8 group-hover:bg-[#D31219] transition-colors inline-block"><item.icon size={32} /></div>
                <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">{item.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
