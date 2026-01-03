import React, { useState, lazy, Suspense } from 'react';
import NeuralNav from './components/NeuralNav';
import { motion, AnimatePresence } from 'framer-motion';

// Lazy loading de componentes pesados para mejor performance
const ProductCatalog = lazy(() => import('./pages/ProductCatalog'));
const MarketDashboard = lazy(() => import('./pages/MarketDashboard'));
const AI_Assistant = lazy(() => import('./components/AI_Assistant'));

// Componente de loading
const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="text-[--color-neon-green] font-[--font-family-mono]">Cargando...</div>
  </div>
);

function HomeView() {
  return (
    <section className="h-screen flex flex-col items-center justify-center p-6 text-center relative overflow-hidden" aria-label="Página de inicio">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1000&auto=format&fit=crop')] opacity-20 bg-center bg-cover" role="img" aria-label="Imagen de fondo de agricultura" />
      <div className="absolute inset-0 bg-gradient-to-b from-[--color-deep-dark] via-[--color-deep-dark]/80 to-[--color-deep-dark]" />

      <article className="relative z-10">
        <header>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 relative inline-block"
          >
            <div className="absolute -inset-4 bg-[--color-neon-green]/20 blur-xl rounded-full" />
            <h1 className="text-5xl font-black font-[--font-family-mono] text-white tracking-tighter">
              BIO<span className="text-[--color-neon-green]">NEURAL</span>
            </h1>
            <p className="text-[--color-cyan-tech] tracking-[0.5em] text-xs mt-2 font-bold" role="doc-subtitle">SOLUTIONS</p>
          </motion.div>
        </header>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-300 max-w-xs mx-auto mb-8 font-light"
        >
          Tecnología alienígena aplicada al campo colombiano.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[--color-neon-green] text-black font-bold py-3 px-8 rounded-full shadow-[0_0_20px_rgba(0,255,157,0.4)]"
          onClick={() => document.dispatchEvent(new CustomEvent('nav-change', { detail: 'catalog' }))}
          aria-label="Iniciar sistema BioNeural Solutions"
          type="button"
        >
          INICIAR SISTEMA
        </motion.button>
      </article>
    </section>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Listen for custom nav events from Home
  React.useEffect(() => {
    const handler = (e) => setActiveTab(e.detail);
    document.addEventListener('nav-change', handler);
    return () => document.removeEventListener('nav-change', handler);
  }, []);

  return (
    <main className="min-h-screen bg-[--color-deep-dark] text-white font-[--font-family-sans] selection:bg-[--color-neon-green] selection:text-black" role="main">
      <Suspense fallback={<LoadingSpinner />}>
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <HomeView />
            </motion.div>
          )}
          {activeTab === 'catalog' && (
            <motion.div key="catalog" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <ProductCatalog />
            </motion.div>
          )}
          {activeTab === 'dashboard' && (
            <motion.div key="dashboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <MarketDashboard />
            </motion.div>
          )}
          {activeTab === 'ai' && (
            <motion.div key="ai" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-24 px-4 h-screen flex flex-col justify-center">
              <AI_Assistant />
            </motion.div>
          )}
        </AnimatePresence>
      </Suspense>

      <NeuralNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </main>
  );
}

export default App;
