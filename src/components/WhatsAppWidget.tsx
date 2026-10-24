
import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight, User } from 'lucide-react';

const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const agents = [
    { name: 'Carlos', role: 'Vendas Técnicas & Obras', phone: '5541996457421' },
    { name: 'Lucilene', role: 'Atendimento & Cotações', phone: '5541999067259' }
  ];

  const handleContact = (phone: string, name: string) => {
    const msg = `Olá, ${name}! Acessei o site da KY Drywall & Steel Frame e gostaria de solicitar um orçamento.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-2xl w-80 overflow-hidden border border-slate-200">
          <div className="bg-slate-900 px-4 py-3.5 text-white flex justify-between items-center border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <div>
                <h4 className="font-semibold text-sm leading-tight">Atendimento WhatsApp</h4>
                <p className="text-[11px] text-slate-400">KY Drywall & Steel Frame</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded transition-colors"
              aria-label="Fechar janela"
            >
              <X size={18} />
            </button>
          </div>
          
          <div className="p-3.5 space-y-2 bg-slate-50">
            {agents.map((agent) => (
              <button
                key={agent.name}
                onClick={() => handleContact(agent.phone, agent.name)}
                className="w-full bg-white p-3 rounded border border-slate-200/90 flex items-center justify-between hover:border-[#D31219] hover:bg-red-50/20 transition-all group text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 group-hover:bg-[#D31219] group-hover:text-white transition-colors">
                    <User size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-xs text-slate-900">{agent.name}</p>
                    <p className="text-[10px] text-slate-500">{agent.role}</p>
                  </div>
                </div>
                <ChevronRight size={16} className="text-slate-400 group-hover:text-[#D31219] transition-colors" />
              </button>
            ))}
          </div>
          
          <div className="px-3.5 py-2.5 text-center text-[10px] text-slate-500 bg-white border-t border-slate-100 font-medium">
            Segunda a Sexta: 07:30 - 17:30 • Sábado: 07:30 - 12:00
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:bg-[#20bd5a] transition-all flex items-center gap-2 group"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle size={24} />
          <span className="hidden sm:inline font-semibold text-xs pr-1">
            Falar no WhatsApp
          </span>
        </button>
      )}
    </div>
  );
};

export default WhatsAppWidget;
