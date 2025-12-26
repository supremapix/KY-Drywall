
import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight } from 'lucide-react';

const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const agents = [
    { name: 'Carlos', phone: '5541996457421', status: 'Online' },
    { name: 'Lucilene', phone: '5541999067259', status: 'Online' }
  ];

  const handleContact = (phone: string) => {
    const msg = "Olá, vim pelo site e gostaria de informações.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-80 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-[#003366] p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-green-500 w-3 h-3 rounded-full border-2 border-white animate-pulse"></div>
              <div>
                <h4 className="font-bold">Atendimento KY</h4>
                <p className="text-[10px] text-gray-300">Em que posso ajudar?</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>
          
          <div className="p-4 space-y-3 bg-gray-50">
            {agents.map((agent) => (
              <button
                key={agent.name}
                onClick={() => handleContact(agent.phone)}
                className="w-full bg-white p-3 rounded-xl border border-gray-100 flex items-center justify-between hover:border-[#003366] hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-500 font-bold">{agent.name[0]}</span>
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-sm text-gray-800">{agent.name}</p>
                    <p className="text-[10px] text-green-500 font-medium uppercase tracking-wider">{agent.status}</p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-gray-300 group-hover:text-[#003366]" />
              </button>
            ))}
          </div>
          
          <div className="p-3 text-center text-[10px] text-gray-400 bg-white">
            Equipe técnica à sua disposição
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
        >
          <MessageCircle size={28} className="fill-white/20" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold text-sm whitespace-nowrap">
            Fale Conosco
          </span>
        </button>
      )}
    </div>
  );
};

export default WhatsAppWidget;
