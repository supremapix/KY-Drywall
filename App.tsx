
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
import NotFound from './pages/NotFound';
import WhatsAppWidget from './components/WhatsAppWidget';
import FloatingActions from './components/FloatingActions';
import CookieConsent from './components/CookieConsent';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
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
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/empresa" element={<About />} />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/servicos/:serviceId" element={<ServicesPage />} />
            <Route path="/produtos" element={<ProductList />} />
            <Route path="/produto/:productId" element={<ProductDetails />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/drywall-em/:location" element={<LocationPage type="drywall" />} />
            <Route path="/steel-frame-em/:location" element={<LocationPage type="steel" />} />
            <Route path="/localizacao/:location" element={<LocationPage type="drywall" />} />
            <Route path="/blog/:postId" element={<Blog />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppWidget />
        <FloatingActions />
        {!isCookieAccepted && <CookieConsent onAccept={handleAcceptCookies} />}
      </div>
    </Router>
  );
};

export default App;
