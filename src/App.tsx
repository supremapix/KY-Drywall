
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import LocationPage from './pages/LocationPage';
import Sitemap from './pages/Sitemap';
import BlogPostPage from './pages/BlogPostPage';
import SteelFramePage from './pages/SteelFramePage';
import FAQPage from './pages/FAQPage';
import LinksPage from './pages/LinksPage';
import NotFound from './pages/NotFound';
import FloatingActions from './components/FloatingActions';
import CookieConsent from './components/CookieConsent';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const AppContent: React.FC = () => {
  const isLinksPage = useLocation().pathname.replace(/\/+$/, '') === '/links';
  const [isCookieAccepted, setIsCookieAccepted] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (consent === 'true') {
      setIsCookieAccepted(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsCookieAccepted(true);
  };

  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen overflow-x-hidden bg-white text-slate-900 font-sans antialiased">
        {!isLinksPage && <Header />}
        
        <main className="flex-grow pb-28 md:pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/links" element={<LinksPage />} />
            <Route path="/empresa" element={<About />} />
            <Route path="/steel-frame" element={<SteelFramePage />} />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/servicos/:serviceId" element={<ServicesPage />} />
            <Route path="/produtos" element={<ProductList />} />
            <Route path="/produto/:productId" element={<ProductDetails />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postId" element={<BlogPostPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/drywall-em/:location" element={<LocationPage type="drywall" />} />
            <Route path="/steel-frame-em/:location" element={<LocationPage type="steel" />} />
            <Route path="/localizacao/:location" element={<LocationPage type="drywall" />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/mapa-do-site" element={<Sitemap />} />
            <Route path="/mapa-site" element={<Sitemap />} />
            <Route path="*" element={<CatchAllRoute />} />
          </Routes>
        </main>

        {!isLinksPage && <Footer />}
        {!isLinksPage && <FloatingActions />}
        {!isLinksPage && !isCookieAccepted && <CookieConsent onAccept={handleAcceptCookies} />}
      </div>
    </>
  );
};

// Routing logic fix to handle slugs without slashes as per critical routing rule
const CatchAllRoute = () => {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  // Check for drywall-em-prefix
  if (path.startsWith('/drywall-em-')) {
    const slug = path.replace('/drywall-em-', '');
    return <LocationPage type="drywall" overrideSlug={slug} />;
  }

  // Check for steel-frame-em-prefix
  if (path.startsWith('/steel-frame-em-')) {
    const slug = path.replace('/steel-frame-em-', '');
    return <LocationPage type="steel" overrideSlug={slug} />;
  }

  // Check for localizacao-prefix (fallback)
  if (path.startsWith('/localizacao-')) {
    const slug = path.replace('/localizacao-', '');
    return <LocationPage type="drywall" overrideSlug={slug} />;
  }

  return <NotFound />;
};

const App = () => <Router><AppContent /></Router>;
export default App;
