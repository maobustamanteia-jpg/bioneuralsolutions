import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import SplashScreen from './components/SplashScreen';
import Onboarding from './components/Onboarding';

// Lazy loading components
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const About = lazy(() => import('./pages/About'));
const HowToBuy = lazy(() => import('./pages/HowToBuy'));
const Contact = lazy(() => import('./pages/Contact'));
const Agronomo = lazy(() => import('./pages/Agronomo'));
const SulfomaxLanding = lazy(() => import('./pages/landing-pages/Sulfomax'));
const ProductLandingPage = lazy(() => import('./pages/ProductLandingPage'));

// Loading spinner con nueva identidad
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[60vh] bg-background-light">
    <div className="w-12 h-12 border-4 border-forest/20 border-t-gold rounded-full animate-spin"></div>
  </div>
);

// App interior para tener acceso al hook useLocation
function AppContent() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen">
      <Header />

      <main id="main-content" role="main" className="relative z-10">
        <AnimatePresence mode="wait">
          <Suspense fallback={<LoadingSpinner />}>
            <Motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/productos" element={<Products />} />
                <Route path="/quienes-somos" element={<About />} />
                <Route path="/como-comprar" element={<HowToBuy />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="/agronomo" element={<Agronomo />} />
                <Route path="/sulfomax" element={<SulfomaxLanding />} />
                <Route path="/producto/:slug" element={<ProductLandingPage />} />
              </Routes>
            </Motion.div>
          </Suspense>
        </AnimatePresence>
      </main>

      <BottomNav />
    </div>
  );
}

function App() {
  const [showSplash, setShowSplash] = React.useState(true);
  const [showOnboarding, setShowOnboarding] = React.useState(false);

  React.useEffect(() => {
    // Check if user has already onboarded
    const hasOnboarded = localStorage.getItem('bioneural_onboarded');
    if (!hasOnboarded) {
      setShowOnboarding(true);
    }
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence>
        {showSplash && <SplashScreen key="splash" />}
        {showOnboarding && !showSplash && (
          <Onboarding
            key="onboarding"
            onComplete={() => setShowOnboarding(false)}
          />
        )}
      </AnimatePresence>
      
      {/* Contenedor principal con nueva identidad */}
      <div className="min-h-screen bg-background-light dark:bg-forest-dark">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;
