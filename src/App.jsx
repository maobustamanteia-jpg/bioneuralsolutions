import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import SplashScreen from './components/SplashScreen';

// Lazy loading components
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const About = lazy(() => import('./pages/About'));
const HowToBuy = lazy(() => import('./pages/HowToBuy'));
const Contact = lazy(() => import('./pages/Contact'));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-12 h-12 border-4 border-[--color-primary]/20 border-t-[--color-primary] rounded-full animate-spin"></div>
  </div>
);

// App interior para tener acceso al hook useLocation
function AppContent() {
  const location = useLocation();

  return (
    <div className="mobile-shell relative min-h-screen">
      <Header />

      <main id="main-content" role="main" className="relative z-10 pt-4">
        <AnimatePresence mode="wait">
          <Suspense fallback={<LoadingSpinner />}>
            <motion.div
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
              </Routes>
            </motion.div>
          </Suspense>
        </AnimatePresence>
      </main>

      <BottomNav />
      {/* El Footer y Nav están integrados en el componente Header o por separado según Stitch */}
    </div>
  );
}

function App() {
  const [showSplash, setShowSplash] = React.useState(true);

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
      </AnimatePresence>
      <div className="min-h-screen bg-gray-100 dark:bg-[#0a0f0a] flex items-center justify-center py-0 sm:py-8 lg:py-12">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;
