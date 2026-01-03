import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Products() {
    const [activeCategory, setActiveCategory] = useState('Todos');

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
                        >
                            <ProductCard item={item} index={index} />
                        </motion.div>
                    ))}
                </div>

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
                        href="https://wa.me/573142750383"
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
