
import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Mail, ChevronUp } from 'lucide-react';

const FloatingActions: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 left-6 z-[60] flex flex-col gap-4">
      {/* Call Button */}
      <a 
        href="tel:4135284232" 
        className="bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        title="Ligar Agora"
      >
        <Phone size={24} />
      </a>

      {/* Email Button */}
      <a 
        href="mailto:contato@kydrywall.com.br" 
        className="bg-[#D31219] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        title="Enviar E-mail"
      >
        <Mail size={24} />
      </a>

      {/* Back to Top */}
      {showScroll && (
        <button 
          onClick={scrollToTop}
          className="bg-black text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center animate-in fade-in zoom-in duration-300"
          title="Voltar ao Topo"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
};

export default FloatingActions;
