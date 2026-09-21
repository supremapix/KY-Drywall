
import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

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

  if (!showScroll) return null;

  return (
    <div className="fixed bottom-24 right-6 z-40">
      <button 
        onClick={scrollToTop}
        className="bg-slate-900/90 text-white hover:bg-[#D31219] p-2.5 rounded shadow-md transition-all duration-200 flex items-center justify-center border border-slate-700/50 backdrop-blur-sm"
        title="Voltar ao topo"
        aria-label="Voltar ao topo"
      >
        <ChevronUp size={18} />
      </button>
    </div>
  );
};

export default FloatingActions;
