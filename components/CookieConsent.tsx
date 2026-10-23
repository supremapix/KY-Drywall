
import React from 'react';

interface CookieConsentProps {
  onAccept: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept }) => {
  return (
    <div className="w-full bg-white border-t border-gray-200 p-4 pb-28 md:p-6 md:pb-28" role="region" aria-label="Armazenamento local">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600 max-w-4xl text-center md:text-left">
          <p className="font-bold text-gray-800 mb-1">Sua lista de cotação neste navegador</p>
          <p>O site usa armazenamento local para guardar a lista de cotação e a confirmação deste aviso. Serviços externos, como mapas e WhatsApp, têm suas próprias políticas de privacidade.</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button 
            onClick={onAccept}
            className="flex-1 md:flex-none bg-[#003366] text-white text-sm font-bold px-8 py-2 rounded-lg hover:bg-[#002244] transition-colors shadow-lg shadow-blue-900/10"
          >
            Entendi
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
