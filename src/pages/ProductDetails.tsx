import { useDialogFocus } from '../components/useDialogFocus';

import React, { useMemo, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, MessageCircle, Star, Shield, Truck, PhoneCall, Info, PlusCircle, Check, Share2, ClipboardList, Target, User, Send } from 'lucide-react';
import { PRODUCTS, getRandomCTA, BASE_URL } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';
import NotFound from './NotFound';
import { Review, QuoteItem } from '../types';

const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [imageOpen, setImageOpen] = useState(false);
  const [failedImage, setFailedImage] = useState<string | null>(null);
  const imageRef = useDialogFocus(imageOpen, () => setImageOpen(false));
  const [storageError, setStorageError] = useState('');
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isAdded, setIsAdded] = useState(false);
  const [ctaPhrase, setCtaPhrase] = useState('');

  // Review form state
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [userName, setUserName] = useState('');
  const [isReviewing, setIsReviewing] = useState(false);

  const product = useMemo(() =>
    PRODUCTS.find(p => p.id === productId),
    [productId]
  );

  useEffect(() => {
    if (productId) {
      try {
      const stored = localStorage.getItem(`ky_reviews_${productId}`);
      if (stored) {
        const parsed = JSON.parse(stored);
        setReviews(Array.isArray(parsed) ? parsed.filter((review: Review) => review && typeof review.id === 'string' && !['1', '2'].includes(review.id) && typeof review.userName === 'string' && typeof review.comment === 'string' && Number.isFinite(review.rating)) : []);
      } else {
        setReviews([]);
      }
      } catch { setReviews([]); }
    }
    setCtaPhrase(getRandomCTA());
    window.scrollTo(0, 0);
  }, [productId]);

  const addToQuote = () => {
    if (!product) return;
    let list: QuoteItem[] = [];
    try {
      const parsed = JSON.parse(localStorage.getItem('ky_quote_list') || '[]');
      list = Array.isArray(parsed) ? parsed.filter(item => item && typeof item.productId === 'string' && typeof item.name === 'string' && Number.isFinite(item.quantity) && item.quantity > 0) : [];
    } catch { list = []; }

    const existingIndex = list.findIndex(item => item.productId === product.id);
    if (existingIndex > -1) {
      list[existingIndex].quantity += 1;
    } else {
      list.push({ productId: product.id, name: product.name, quantity: 1 });
    }

    try { localStorage.setItem('ky_quote_list', JSON.stringify(list)); setStorageError(''); }
    catch { setStorageError('Não foi possível salvar a lista neste navegador. Envie o pedido pelo WhatsApp.'); return; }
    window.dispatchEvent(new CustomEvent('quote-updated'));

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !newComment) return;

    const review: Review = {
      id: Date.now().toString(),
      userName,
      comment: newComment,
      rating: newRating,
      date: new Date().toLocaleDateString('pt-BR')
    };

    const updatedReviews = [review, ...reviews];
    try { localStorage.setItem(`ky_reviews_${productId}`, JSON.stringify(updatedReviews)); setStorageError(''); }
    catch { setStorageError('Não foi possível salvar a anotação neste navegador.'); return; }
    setReviews(updatedReviews);

    setUserName('');
    setNewComment('');
    setIsReviewing(false);
  };

  if (!product) return <NotFound />;

  const whatsappUrl = `https://wa.me/5541996457421?text=${encodeURIComponent(`Olá, gostaria de um orçamento para o produto: ${product.name}`)}`;

  return (
    <div className="ky-interior-page ky-section-white pt-10 md:pt-16 pb-16">
      <EnhancedSEO
        title={`${product.name} | Catálogo KY Drywall`}
        description={product.description}
        canonical={`${BASE_URL}/produto/${product.id}`}
        ogImage={product.image}
        ogType="product"
        schema={{
          '@type': 'Product',
          name: product.name,
          description: product.description,
          image: new URL(product.image, BASE_URL).href,
          url: `${BASE_URL}/produto/${product.id}`
        }}
      />

      {imageOpen && <div className="fixed inset-0 z-[150] bg-black/80 p-4 flex items-center justify-center" onClick={() => setImageOpen(false)}>
        <div ref={imageRef} role="dialog" aria-modal="true" aria-label={`Foto: ${product.name}`} className="bg-white rounded-sm p-4 max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={event => event.stopPropagation()}>
          <button type="button" onClick={() => setImageOpen(false)} className="border rounded px-4 py-3 mb-3 font-bold">Fechar foto</button>
          {failedImage === product.image ? <p role="status" className="p-8 text-center">Imagem indisponível no momento.</p> : <img src={product.image} alt={product.name} className="w-full max-h-[65vh] object-contain" onError={() => setFailedImage(product.image)} />}
          <p className="mt-3 text-base font-bold">{product.name}</p>
        </div>
      </div>}
      {storageError && <p role="alert" className="mx-auto max-w-7xl px-6 py-3 text-red-700">{storageError}</p>}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Breadcrumbs - Blueprint Style */}
        <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase text-slate-400 mb-12 tracking-wide overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide">
          <Link to="/" className="hover:text-[#D31219] transition-colors">Início</Link>
          <ChevronRight size={12} />
          <Link to="/produtos" className="hover:text-[#D31219] transition-colors">Catálogo</Link>
          <ChevronRight size={12} />
          <Link to={`/produtos?cat=${product.category}`} className="hover:text-[#D31219] transition-colors">{product.category}</Link>
          <ChevronRight size={12} />
          <span className="text-slate-900">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
          {/* Left Column: Image Showcase */}
          <div className="lg:col-span-6 space-y-6">
            <figure className="ky-product-photo">
              <div className="ky-product-photo-frame relative ky-card rounded-sm aspect-square overflow-hidden flex items-center justify-center p-6 sm:p-8">
                {failedImage === product.image ? (
                  <p role="status" className="text-center text-sm text-slate-600">Imagem indisponível no momento.<br/>Consulte a equipe para ver este produto.</p>
                ) : (
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain" onError={() => setFailedImage(product.image)} />
                )}
              </div>
              <figcaption className="mt-3 text-xs text-slate-500">Código: KY-{product.id.substring(0, 4).toUpperCase()}</figcaption>
            </figure>

            {failedImage !== product.image && <button type="button" onClick={() => setImageOpen(true)} className="w-full rounded-sm border border-slate-300 px-4 py-3 font-bold">Ampliar foto do produto</button>}
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4">
               <div className="ky-section-alt p-5 rounded-sm border border-slate-100 flex flex-col items-center text-center gap-3">
                 <Shield size={24} className="text-[#D31219]" />
                 <div>
                   <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Qualidade</div>
                   <div className="text-xs font-bold text-slate-800">Consultar ficha técnica</div>
                 </div>
               </div>
               <div className="ky-section-alt p-5 rounded-sm border border-slate-100 flex flex-col items-center text-center gap-3">
                 <Truck size={24} className="text-slate-900" />
                 <div>
                   <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Logística</div>
                   <div className="text-xs font-bold text-slate-800">Consultar disponibilidade</div>
                 </div>
               </div>
            </div>
          </div>

          {/* Right Column: Details & CTA */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-100 rounded text-xs font-sans font-bold text-[#D31219] uppercase tracking-wide mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D31219]"></span>
                {product.category}
              </div>
              <h1 className="ky-title-mark text-3xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                {product.name}
              </h1>

              <p className="text-xs text-slate-500 mb-6">Referência de catálogo. Confirme a ficha técnica, disponibilidade e preço antes da compra.</p>
              <div className="text-lg text-slate-600 leading-relaxed mb-10">
                {product.description}
              </div>

              {/* Technical Tabs (Specs/Applications) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {product.specs && (
                  <div className="space-y-4">
                    <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-900">
                      <ClipboardList size={16} className="text-[#D31219]" />
                      Especificações
                    </h2>
                    <ul className="space-y-2">
                      {product.specs.map((s, i) => (
                        <li key={i} className="text-sm text-slate-500 flex items-start gap-3 py-2 border-b border-slate-50">
                          <span className="font-bold text-[#D31219]">»</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {product.applications && (
                  <div className="space-y-4">
                    <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-900">
                      <Target size={16} className="text-[#D31219]" />
                      Onde Utilizar
                    </h2>
                    <ul className="space-y-2">
                      {product.applications.map((a, i) => (
                        <li key={i} className="text-sm text-slate-500 flex items-start gap-3 py-2 border-b border-slate-50">
                          <span className="font-bold text-slate-400">●</span>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Extended Technical Content - Industrial Showroom Style */}
              <div className="space-y-12 mt-12 border-t border-slate-100 pt-12">
                {product.whatIsIt && (
                  <div className="group">
                    <h2 className="text-xs font-bold uppercase tracking-wide text-[#D31219] mb-4 flex items-center gap-3">
                      <span className="w-8 h-[1px] bg-red-100"></span>
                      O que é o produto
                    </h2>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      {product.whatIsIt}
                    </p>
                  </div>
                )}

                {(product.selectionCriteria || product.compatibility) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {product.selectionCriteria && (
                      <div className="ky-section-alt p-6 rounded-sm border border-slate-100">
                        <h2 className="text-xs font-bold uppercase tracking-wide text-slate-900 mb-4">Critérios de Escolha</h2>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {product.selectionCriteria}
                        </p>
                      </div>
                    )}
                    {product.compatibility && (
                      <div className="bg-red-50/30 p-6 rounded-sm border border-red-100/50">
                        <h2 className="text-xs font-bold uppercase tracking-wide text-[#D31219] mb-4">Compatibilidade Técnica</h2>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {product.compatibility}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {product.faq && product.faq.length > 0 && (
                  <div className="space-y-6">
                    <h2 className="text-xs font-bold uppercase tracking-wide text-slate-900 mb-6">Dúvidas Frequentes</h2>
                    <div className="grid grid-cols-1 gap-4">
                      {product.faq.map((item, idx) => (
                        <div key={idx} className="ky-card p-5 rounded-sm transition-colors">
                          <div className="text-xs font-bold text-slate-800 mb-2 flex items-start gap-2">
                            <span className="text-[#D31219]">Q:</span>
                            {item.question}
                          </div>
                          <div className="text-xs text-slate-500 leading-relaxed flex items-start gap-2">
                            <span className="text-slate-300">A:</span>
                            {item.answer}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sticky/Bottom CTA Section */}
            <div className="mt-auto pt-8 border-t border-slate-200 pb-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 bg-[#D31219] hover:bg-red-700 text-white font-bold py-5 px-6 rounded-sm transition-all text-xs uppercase tracking-wide shadow-none shadow-red-900/10 active:scale-95"
                >
                  <MessageCircle size={20} />
                  {ctaPhrase || 'Solicitar Orçamento'}
                </a>
                <button
                  onClick={addToQuote}
                  className={`flex-1 flex items-center justify-center gap-3 font-bold py-5 px-6 rounded-sm transition-all border-2 text-xs uppercase tracking-wide active:scale-95 ${
                    isAdded
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                      : 'border-slate-200 text-slate-900 hover:border-slate-900 bg-white'
                  }`}
                >
                  {isAdded ? <Check size={20} /> : <PlusCircle size={20} />}
                  {isAdded ? 'Item Adicionado' : 'Adicionar à Lista'}
                </button>
              </div>

              <div className="mt-6 flex flex-wrap gap-6 justify-center sm:justify-start">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wide">
                  <PhoneCall size={14} className="text-slate-300" />
                  <span>Televendas: (41) 3528-4232</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wide">
                  <User size={14} className="text-slate-300" />
                  <span>Consultar Atendimento</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section - Engineering Style */}
        <section className="py-20 border-t border-slate-100">
          <div className="max-w-4xl">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
              <div>
                <div className="text-xs font-sans font-bold text-[#D31219] uppercase tracking-wide mb-2">Uso pessoal</div>
                <h2 className="ky-title-mark text-3xl font-bold text-slate-900 tracking-tight">Minhas anotações</h2>
                <p className="text-slate-500 text-sm mt-2">Anotações privadas salvas apenas neste navegador. Não são publicadas nem enviadas à KY.</p>
              </div>
              <button
                onClick={() => setIsReviewing(!isReviewing)}
                className="bg-slate-900 text-white px-8 py-4 rounded-sm text-xs font-bold uppercase tracking-wide hover:bg-black transition-all shadow-lg"
              >
                {isReviewing ? 'Cancelar' : 'Adicionar anotação'}
              </button>
            </div>

            {isReviewing && (
              <div className="ky-section-alt p-8 rounded-sm mb-12 border border-slate-200 shadow-inner animate-in fade-in slide-in-from-top-4">
                <form onSubmit={handleSubmitReview} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Seu Nome / Construtora</label>
                      <input
                        type="text"
                        required
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-full bg-white border-2 border-slate-200 rounded-sm px-4 py-3 text-sm font-bold focus:outline-none focus:border-[#D31219] transition-all"
                        placeholder="Ex: Pedro — Montador"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Classificação Técnica</label>
                      <div className="flex gap-2 bg-white border-2 border-slate-200 rounded-sm px-4 py-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setNewRating(star)}
                            className="transition-transform active:scale-125"
                          >
                            <Star size={20} className={star <= newRating ? "fill-[#D31219] text-[#D31219]" : "text-slate-200"} />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Comentário sobre o Insumo</label>
                    <textarea
                      required
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="w-full bg-white border-2 border-slate-200 rounded-sm px-4 py-4 text-sm font-bold focus:outline-none focus:border-[#D31219] transition-all h-32 resize-none"
                      placeholder="Fale sobre a resistência, acabamento ou facilidade de instalação..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#D31219] text-white px-10 py-4 rounded-sm text-xs font-bold uppercase tracking-wide hover:bg-red-700 transition-all shadow-none shadow-red-900/10"
                  >
                    Publicar Agora
                  </button>
                </form>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.length > 0 ? reviews.map((review) => (
                <div key={review.id} className="ky-card p-6 rounded-sm transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="font-bold text-sm text-slate-900 uppercase tracking-tight">{review.userName}</h2>
                      <p className="text-xs font-sans text-slate-400 mt-0.5">{review.date}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className={i < review.rating ? "fill-[#D31219] text-[#D31219]" : "text-slate-200"} />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed italic">"{review.comment}"</p>
                </div>
              )) : (
                 <div className="col-span-2 py-10 text-center ky-section-alt rounded-sm border-2 border-dashed border-slate-200">
                    <p className="text-slate-400 font-bold text-sm">Você ainda não salvou anotações sobre este material.</p>
                 </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>

  );
};

export default ProductDetails;
