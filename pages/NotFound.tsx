
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle, ArrowLeft, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-4">
      <SEO 
        title="404 - Página Não Encontrada" 
        description="A página que você procura não foi encontrada. Explore nossos serviços de Drywall e Steel Frame em Curitiba."
      />
      
      <div className="max-w-2xl w-full text-center">
        <div className="relative inline-block mb-12">
          <div className="absolute inset-0 bg-[#D31219] blur-[100px] opacity-10 animate-pulse"></div>
          <AlertTriangle size={120} className="text-[#D31219] mx-auto relative z-10" />
          <h1 className="text-9xl font-black text-[#003366] opacity-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">404</h1>
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter mb-6">
          Obra <span className="text-[#D31219]">Interrompida!</span>
        </h2>
        
        <p className="text-xl text-gray-500 font-medium mb-12 italic">
          "A página que você está tentando acessar não existe em nosso servidor ou foi movida para um novo endereço."
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="bg-[#003366] text-white font-black px-10 py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl uppercase tracking-widest text-xs"
          >
            <Home size={18} /> Voltar ao Início
          </Link>
          
          <a 
            href="https://wa.me/5541996457421" 
            className="bg-white text-[#D31219] border-2 border-[#D31219] font-black px-10 py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#D31219] hover:text-white transition-all text-xs uppercase tracking-widest"
          >
            <MessageCircle size={18} /> Suporte Técnico
          </a>
        </div>

        <div className="mt-20 pt-10 border-t border-gray-100 grid grid-cols-2 md:grid-cols-3 gap-8 text-[10px] font-black uppercase text-gray-400 tracking-widest">
          <Link to="/produtos" className="hover:text-[#D31219] transition-colors">Produtos</Link>
          <Link to="/servicos" className="hover:text-[#D31219] transition-colors">Serviços</Link>
          <Link to="/blog" className="hover:text-[#D31219] transition-colors">Blog Regional</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
