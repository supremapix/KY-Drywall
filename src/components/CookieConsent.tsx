
import React from 'react';

interface CookieConsentProps {
  onAccept: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-4 md:p-6 z-[100] animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600 max-w-4xl text-center md:text-left">
          <p className="font-bold text-gray-800 mb-1">Uso de dados neste navegador</p>
          <p>A lista de cotação e a preferência deste aviso são guardadas neste navegador. Links de WhatsApp, mapas e redes sociais abrem serviços externos, que seguem suas próprias políticas de privacidade.</p>
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
