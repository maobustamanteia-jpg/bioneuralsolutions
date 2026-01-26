import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

// Modal de Detalles - Componente externo para evitar re-creación en cada render
function ProductDetailModal({ product, onClose }) {
    if (!product) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-6"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <motion.div
                initial={{ y: 50, scale: 0.9, opacity: 0 }}
                animate={{ y: 0, scale: 1, opacity: 1 }}
                className="relative bg-white dark:bg-surface-dark w-full max-w-sm rounded-[32px] overflow-hidden shadow-2xl border border-white/10 max-h-[85vh] flex flex-col"
            >
                {/* Header Image */}
                <div className="relative h-48 flex-shrink-0">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white"
                    >
                        <span className="material-icons-round">close</span>
                    </button>
                    <div className="absolute bottom-4 left-6">
                        <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-lg uppercase tracking-widest">{product.category}</span>
                        <h3 className="text-white font-display font-bold text-xl mt-1 leading-tight">{product.name}</h3>
                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="p-6 overflow-y-auto custom-scrollbar space-y-6">
                    {/* Descripción extendida */}
                    <section>
                        <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">Descripción</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">{product.description}</p>
                    </section>

                    {/* Aplicaciones */}
                    <section>
                        <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">Aplicaciones Clave</h4>
                        <ul className="space-y-2">
                            {product.applications.map((app, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-secondary dark:text-white font-medium">
                                    <span className="material-icons-round text-primary text-[14px] mt-0.5">check_circle</span>
                                    {app}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Caso de Uso */}
                    <section className="bg-primary/5 dark:bg-primary/10 p-4 rounded-2xl border border-primary/10">
                        <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">Caso de Uso</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-300 italic">"{product.casesOfUse}"</p>
                    </section>

                    {/* Dosificación */}
                    <section>
                        <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">Modo de Empleo</h4>
                        <div className="flex items-start gap-3 bg-gray-50 dark:bg-white/5 p-4 rounded-2xl">
                            <span className="material-icons-round text-primary">biotech</span>
                            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{product.usage}</p>
                        </div>
                    </section>
                </div>

                {/* Footer Actions */}
                <div className="p-6 bg-gray-50 dark:bg-white/5 border-t border-gray-100 dark:border-white/5 flex-shrink-0">
                    <a
                        href={`https://wa.me/573203062007?text=Hola,%20quisiera%20asesoría%20personalizada%20sobre%20${encodeURIComponent(product.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-stitch-primary py-4 w-full flex items-center justify-center gap-2"
                    >
                        <span>Consultar Asesoría</span>
                        <span className="material-icons-round text-sm">whatsapp</span>
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function Products() {
    const [activeCategory, setActiveCategory] = useState('Todos');
    const [selectedProduct, setSelectedProduct] = useState(null);

    const categories = ['Todos', 'Nutrición', 'Suelo', 'Protección'];

    const filteredProducts = activeCategory === 'Todos'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="animate-fade-in pb-24">
            {/* Background Pattern */}
            <div className="fixed inset-0 z-0 circuit-bg pointer-events-none opacity-5"></div>

            <main className="relative z-10 px-6 pt-20">
                {/* Header Section */}
                <header className="mb-10 text-center">
                    <h2 className="font-display font-bold text-3xl text-primary dark:text-green-400 mb-3 tracking-tight">
                        Nutrición Inteligente
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 max-w-[280px] mx-auto leading-relaxed">
                        Potenciamos la sabiduría de la naturaleza con formulaciones biológicas avanzadas.
                    </p>

                    {/* Filtros de Categoría */}
                    <div className="flex overflow-x-auto space-x-3 mt-8 pb-4 no-scrollbar -mx-6 px-6">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 shadow-sm border ${activeCategory === cat
                                    ? 'bg-primary text-white border-primary shadow-md'
                                    : 'bg-white dark:bg-surface-dark text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-800 hover:border-primary/30'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </header>

                {/* Grid de Productos */}
                <div className="grid grid-cols-1 gap-8">
                    {filteredProducts.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedProduct(item)}
                        >
                            <ProductCard item={item} />
                        </motion.div>
                    ))}
                </div>

                {/* Modal de Detalle */}
                <AnimatePresence>
                    {selectedProduct && (
                        <ProductDetailModal
                            product={selectedProduct}
                            onClose={() => setSelectedProduct(null)}
                        />
                    )}
                </AnimatePresence>

                {/* Mensaje de consulta */}
                <div className="mt-12 text-center p-8 bg-white dark:bg-surface-dark rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-soft">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                        <span className="material-icons-round">contact_support</span>
                    </div>
                    <h4 className="font-display font-bold text-secondary dark:text-white mb-2">¿No sabes qué elegir?</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-6 px-4">
                        Nuestros expertos pueden asesorarte para encontrar la mezcla perfecta para tu cultivo.
                    </p>
                    <a
                        href="https://wa.me/573203062007"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
                    >
                        <span>Solicitar asesoría gratuita</span>
                        <span className="material-icons-round text-sm">arrow_forward</span>
                    </a>
                </div>
            </main>
        </div>
    );
}
