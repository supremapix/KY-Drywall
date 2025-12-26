
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Award, ShieldCheck, Building2, HardHat, Warehouse } from 'lucide-react';
import { getRandomCTA } from '../constants';

const About: React.FC = () => {
  const [cta, setCta] = useState('');

  useEffect(() => {
    setCta(getRandomCTA());
  }, []);

  return (
    <div className="bg-white">
      <section className="bg-[#003366] py-32 text-white relative overflow-hidden text-center">
        <div className="container mx-auto px-4 relative z-10">
          <span className="bg-[#D31219] text-white font-black uppercase tracking-[0.4em] text-[10px] px-6 py-2 rounded-full mb-8 inline-block">KY Drywall em Curitiba</span>
          <h1 className="text-6xl md:text-9xl font-black mb-10 uppercase tracking-tighter leading-none">KY <span className="text-gray-400">Desde 1998</span></h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-200 font-medium italic">"Liderança absoluta em tecnologias de **Steel Frame** e **Drywall** para o mercado paranaense."</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <h2 className="text-4xl md:text-6xl font-black text-[#003366] uppercase tracking-tighter leading-none">Assessoria <br/><span className="text-[#D31219]">Técnica KY</span></h2>
              <div className="prose prose-lg text-gray-600 font-medium">
                <p>A **KY Drywall & Steel Frame** consolidou-se em **Curitiba** como o principal parceiro estratégico de arquitetos e construtoras. Oferecemos muito mais do que materiais; entregamos **especificações técnicas precisas** para cada obra.</p>
                <p>Nosso diferencial está na parceria com marcas líderes como **Barbieri**, fornecendo **perfis galvanizados Z180** que garantem a longevidade da sua estrutura. Se você busca por <Link to="/servicos/steel-frame" className="text-[#D31219] hover:underline">**Steel Frame em Curitiba**</Link>, a KY é o seu lugar.</p>
                <p>Com sede na Rodovia BR 277, atendemos rapidamente todos os bairros da capital, do **Batel** ao **Cajuru**, com logística própria e consultores treinados.</p>
              </div>
              <div className="pt-6">
                <a href="https://wa.me/5541996457421" className="bg-[#D31219] text-white font-black px-12 py-6 rounded-2xl inline-flex items-center gap-4 text-xs uppercase tracking-widest shadow-xl">
                  <MessageCircle size={24} /> {cta}
                </a>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-gray-50 aspect-[3/4]">
                <img src="https://kydrywall.com.br/produtos/wp-content/uploads/2022/09/operario-de-obra_-1-767x1024.png" alt="Equipe KY Drywall" className="w-full h-full object-cover grayscale" />
              </div>
              <div className="absolute -top-10 -right-6 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 text-center">
                 <Award size={40} className="text-[#D31219] mx-auto mb-4" />
                 <p className="text-3xl font-black text-[#003366]">26</p>
                 <p className="text-[8px] font-black uppercase text-gray-400">Anos de Sucesso</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: Warehouse, title: 'Estoque de Atacado', desc: 'A maior pronta entrega de **placas de gesso** e **perfis metálicos** de Curitiba.' },
            { icon: HardHat, title: 'Know-how Técnico', desc: 'Assessoria completa na interpretação de projetos de <Link to="/servicos/steel-frame" class="text-[#D31219]">Steel Frame</Link>.' },
            { icon: Building2, title: 'Frota Própria', desc: 'Entregas ágeis e seguras em toda a **Região Metropolitana de Curitiba**.' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-12 rounded-[3rem] shadow-lg group">
              <div className="bg-[#003366] p-5 rounded-2xl text-white mb-8 group-hover:bg-[#D31219] transition-colors inline-block"><item.icon size={32} /></div>
              <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">{item.title}</h3>
              <p className="text-gray-500 font-medium" dangerouslySetInnerHTML={{ __html: item.desc }} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
