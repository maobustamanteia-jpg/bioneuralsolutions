import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
    const featuredProduct = products.find(p => p.shortName === "MM") || products[0];

    return (
        <div className="animate-fade-in flex flex-col">
            {/* Header / Hero Section de Stitch */}
            <header className="relative bg-white dark:bg-surface-dark pt-20 pb-12 px-6 rounded-b-[40px] shadow-lg border-b border-gray-100 dark:border-gray-800 overflow-hidden">
                {/* Background Image con overlay */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center opacity-10"
                    style={{ backgroundImage: "url('/images/brand/hero_concept.png')" }}
                ></div>
                <div className="absolute inset-0 circuit-bg pointer-events-none z-10"></div>

                <div className="relative z-20 flex flex-col items-center text-center">
                    {/* Logo con efecto glow */}
                    <div className="mb-8 relative group">
                        <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-125 group-hover:scale-150 transition-transform duration-700"></div>
                        <img
                            alt="BioNeural Logo"
                            className="w-40 h-40 object-contain relative z-10 drop-shadow-2xl"
                            src="/logo.png"
                        />
                    </div>

                    <h1 className="font-display font-bold text-3xl text-secondary dark:text-white mb-2 tracking-tight">
                        BioNeural <span className="text-primary">Solutions</span>
                    </h1>

                    <p className="text-primary font-bold text-xs mb-6 uppercase tracking-[0.2em] dark:text-green-400">
                        Fertilizantes Orgánicos Inteligentes
                    </p>

                    <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-10 max-w-[280px]">
                        Fusionamos la sabiduría de la naturaleza con biotecnología para cultivos más fuertes y sostenibles.
                    </p>

                    <div className="flex flex-col w-full gap-4 max-w-sm mx-auto">
                        <Link to="/productos" className="btn-stitch-primary py-4 px-6">
                            <span>Explorar Productos</span>
                            <span className="material-icons-round text-sm">arrow_forward</span>
                        </Link>
                        <Link to="/quienes-somos" className="btn-stitch-secondary py-4 px-6">
                            Nuestra Tecnología
                        </Link>
                    </div>
                </div>
            </header>

            {/* Beneficios - Grid de Stitch */}
            <section className="py-12 px-6">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="font-display font-bold text-xl text-secondary dark:text-white tracking-tight">¿Por qué BioNeural?</h2>
                    <Link to="/quienes-somos" className="text-xs font-bold text-primary dark:text-green-400">LEER MÁS</Link>
                </div>

                <div className="grid grid-cols-2 gap-5">
                    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow group">
                        <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4 text-primary dark:text-green-400 group-hover:scale-110 transition-transform">
                            <span className="material-icons-round">eco</span>
                        </div>
                        <h3 className="font-display font-bold text-sm text-secondary dark:text-white mb-2">100% Orgánico</h3>
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-snug">Certificado y seguro para el medio ambiente.</p>
                    </div>

                    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow group">
                        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                            <span className="material-icons-round">psychology</span>
                        </div>
                        <h3 className="font-display font-bold text-sm text-secondary dark:text-white mb-2">Bio-Inteligencia</h3>
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-snug">Formulaciones optimizadas por biotecnología.</p>
                    </div>

                    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow group">
                        <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-4 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
                            <span className="material-icons-round">trending_up</span>
                        </div>
                        <h3 className="font-display font-bold text-sm text-secondary dark:text-white mb-2">Alto Rendimiento</h3>
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-snug">Maximiza tu cosecha sosteniblemente.</p>
                    </div>

                    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow group">
                        <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-4 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform">
                            <span className="material-icons-round">biotech</span>
                        </div>
                        <h3 className="font-display font-bold text-sm text-secondary dark:text-white mb-2">Artesanal</h3>
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-snug">Técnicas tradicionales y biotecnología.</p>
                    </div>
                </div>
            </section>

            {/* Producto Destacado - De Stitch */}
            <section className="px-6 pb-12">
                <h2 className="font-display font-bold text-xl text-secondary dark:text-white mb-6 tracking-tight">Producto Destacado</h2>
                <div className="relative w-full h-80 rounded-[32px] overflow-hidden shadow-2xl group cursor-pointer transition-transform hover:scale-[1.02] duration-500">
                    <img
                        alt={featuredProduct.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                        src={featuredProduct.image || "https://images.unsplash.com/photo-1599420186946-7b6fb4eaba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="flex justify-between items-end">
                            <div className="flex-1">
                                <span className="inline-block px-3 py-1 bg-primary/90 backdrop-blur-md rounded-lg text-[10px] font-bold text-white mb-3 uppercase tracking-widest border border-white/10">BIO-ACTIVO</span>
                                <h3 className="text-white font-display font-bold text-2xl mb-2 drop-shadow-md">
                                    {featuredProduct.name}
                                </h3>
                                <p className="text-gray-300 text-sm line-clamp-2 max-w-[240px] opacity-90">
                                    {featuredProduct.description}
                                </p>
                            </div>
                            <Link
                                to={`/productos#${featuredProduct.shortName}`}
                                className="bg-white hover:bg-primary hover:text-white text-primary w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg active:scale-90 transition-all transform group-hover:rotate-12"
                            >
                                <span className="material-icons-round text-2xl">add</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Agricultor */}
            <section className="px-6 pb-12">
                <div className="bg-primary/10 dark:bg-primary/20 rounded-3xl p-8 flex items-center gap-6 border border-primary/5">
                    <div className="flex-1">
                        <h4 className="font-display font-bold text-secondary dark:text-white text-xl leading-tight mb-2">¿Eres agricultor?</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">Obtén una consulta gratuita para optimizar tu suelo y rendimiento.</p>
                    </div>
                    <a
                        href="https://wa.me/57XXXXXXXXXX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-4 bg-secondary dark:bg-white dark:text-secondary text-white rounded-2xl text-sm font-bold shadow-lg hover:brightness-110 active:scale-95 transition-all"
                    >
                        Contactar
                    </a>
                </div>
            </section>
        </div>
    );
}
