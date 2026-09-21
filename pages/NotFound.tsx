
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { COMPANY_INFO } from '../constants';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4 py-16">
      <SEO
        noindex
        title="404 - Página Não Encontrada | KY Drywall"
        description="A página solicitada não foi encontrada. Navegue pelo catálogo de produtos e serviços da KY Drywall & Steel Frame."
      />
      
      <div className="max-w-lg w-full text-center">
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D31219]">Erro 404</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-1 mb-3">
            Página Não Encontrada
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
            O endereço acessado não existe, foi alterado ou está temporariamente indisponível. Utilize as opções abaixo para continuar sua navegação.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <Link 
            to="/" 
            className="bg-[#D31219] hover:bg-red-700 text-white font-semibold px-5 py-2.5 rounded flex items-center justify-center gap-2 text-xs uppercase tracking-wider transition-colors"
          >
            <Home size={15} /> Ir para Página Inicial
          </Link>
          
          <a 
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá! Estava navegando no site e encontrei um link quebrado.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-5 py-2.5 rounded flex items-center justify-center gap-2 text-xs uppercase tracking-wider transition-colors"
          >
            <MessageCircle size={15} /> Falar com Suporte
          </a>
        </div>

        <div className="pt-6 border-t border-slate-100">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Principais Seções
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-700 font-medium">
            <Link to="/produtos" className="hover:text-[#D31219] transition-colors">Produtos</Link>
            <Link to="/steel-frame" className="hover:text-[#D31219] transition-colors">Steel Frame</Link>
            <Link to="/servicos" className="hover:text-[#D31219] transition-colors">Serviços</Link>
            <Link to="/blog" className="hover:text-[#D31219] transition-colors">Blog & Regiões</Link>
            <Link to="/contato" className="hover:text-[#D31219] transition-colors">Contato</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
