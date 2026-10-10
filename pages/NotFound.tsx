
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { COMPANY_INFO } from '../constants';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-5 py-20 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      <SEO
        noindex
        title="404 - Página Não Encontrada | KY Drywall"
        description="A página solicitada não foi encontrada. Navegue pelo catálogo de produtos e serviços da KY Drywall & Steel Frame."
      />
      
      <div className="max-w-xl w-full text-center relative z-10">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-[#D31219]/10 border border-[#D31219]/20 px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest text-[#D31219] mb-6">
            Erro 404
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight mt-1 mb-6 leading-tight">
            Página Não Encontrada
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-md mx-auto font-medium">
            O endereço acessado não existe ou foi alterado. Utilize os links abaixo para continuar sua navegação técnica.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link 
            to="/" 
            className="bg-[#D31219] hover:bg-red-700 text-white font-black px-8 py-4 rounded-xl flex items-center justify-center gap-3 text-sm uppercase tracking-widest transition-all shadow-lg active:scale-[0.98]"
          >
            <Home size={18} /> Início
          </Link>
          
          <a 
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá! Estava navegando no site e encontrei um link quebrado.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 hover:bg-slate-800 text-white font-black px-8 py-4 rounded-xl flex items-center justify-center gap-3 text-sm uppercase tracking-widest transition-all active:scale-[0.98]"
          >
            <MessageCircle size={18} /> Suporte
          </a>
        </div>

        <div className="pt-10 border-t border-slate-100">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">
            Navegação Rápida
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs text-slate-900 font-black uppercase tracking-widest">
            <Link to="/produtos" className="hover:text-[#D31219] transition-colors">Produtos</Link>
            <Link to="/steel-frame" className="hover:text-[#D31219] transition-colors">Steel Frame</Link>
            <Link to="/servicos" className="hover:text-[#D31219] transition-colors">Serviços</Link>
            <Link to="/blog" className="hover:text-[#D31219] transition-colors">Blog</Link>
            <Link to="/contato" className="hover:text-[#D31219] transition-colors">Contato</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
