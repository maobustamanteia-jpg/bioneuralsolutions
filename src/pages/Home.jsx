import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
    // Tomamos el producto destacado (MM)
    const featuredProduct = products.find(p => p.shortName === "MM") || products[0];

    const benefits = [
        { icon: "eco", title: "100% Orgánico", desc: "Sin químicos sintéticos" },
        { icon: "science", title: "Bio-Tecnología", desc: "Sabiduría ancestral" },
        { icon: "terrain", title: "Suelo Vivo", desc: "Regeneración profunda" },
        { icon: "auto_awesome", title: "Alto Rendimiento", desc: "Cultivos vigorosos" }
    ];

    return (
        <div className="animate-fade-in pb-20">
            {/* Hero Section */}
            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 z-0 scale-105 transition-transform duration-[10s] animate-slow-zoom"
                    style={{
                        backgroundImage: "url('/images/hero-bg.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-background dark:to-background-dark"></div>
                </div>

                <div className="relative z-10 text-center px-6 max-w-md">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        <div className="relative inline-block">
                            <div className="absolute inset-0 bg-primary blur-3xl opacity-30 animate-pulse"></div>
                            <img
                                alt="BioNeural Logo"
                                className="w-40 h-40 object-contain relative z-10 drop-shadow-2xl"
                                src="/logo.png"
                            />
                        </div>
                    </motion.div>

                    <h1 className="font-display font-bold text-4xl text-white mb-4 leading-tight tracking-tight drop-shadow-lg">
                        Inteligencia <span className="text-primary italic">Bio-Orgánica</span>
                    </h1>
                    <p className="text-gray-200 text-sm mb-10 font-medium leading-relaxed drop-shadow-md">
                        Transformamos la salud del suelo con microorganismos de montaña y nutrición avanzada.
                    </p>

                    <div className="flex flex-col gap-4">
                        <Link
                            to="/productos"
                            className="btn-stitch-primary py-4 shadow-glow"
                        >
                            <span>Explorar Catálogo</span>
                            <span className="material-icons-round text-sm">arrow_forward</span>
                        </Link>
                        <Link
                            to="/agronomo"
                            className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-display font-bold py-4 rounded-2xl hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                        >
                            <span>Probar Agrónomo AI</span>
                            <span className="material-icons-round text-sm">biotech</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="px-6 -mt-10 relative z-20">
                <div className="grid grid-cols-2 gap-4">
                    {benefits.map((benefit, idx) => (
                        <div
                            key={idx}
                            className="bg-white dark:bg-surface-dark p-6 rounded-[28px] shadow-soft border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center space-y-2 group hover:border-primary/30 transition-all"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-2 group-hover:scale-110 transition-transform">
                                <span className="material-icons-round text-2xl">{benefit.icon}</span>
                            </div>
                            <h3 className="font-display font-bold text-xs text-secondary dark:text-white uppercase tracking-wider">{benefit.title}</h3>
                            <p className="text-[10px] text-gray-500 dark:text-gray-400 font-medium leading-tight">{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Product Section */}
            <section className="px-6 py-16">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="font-display font-bold text-2xl text-secondary dark:text-white tracking-tight">Destacado</h2>
                    <Link to="/productos" className="text-primary text-xs font-bold uppercase tracking-widest hover:underline flex items-center gap-1">
                        Ver todos <span className="material-icons-round text-sm">chevron_right</span>
                    </Link>
                </div>

                <div className="bg-secondary dark:bg-surface-dark rounded-[32px] overflow-hidden shadow-2xl relative border border-white/5 group">
                    <div className="h-64 relative">
                        <img
                            alt={featuredProduct.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            src={featuredProduct.image}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent"></div>
                        <div className="absolute top-6 left-6">
                            <span className="bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-lg uppercase tracking-widest">Recomendado</span>
                        </div>
                    </div>

                    <div className="p-8">
                        <h3 className="font-display font-bold text-2xl text-white mb-3 tracking-tight">{featuredProduct.name}</h3>
                        <p className="text-gray-400 text-sm mb-8 leading-relaxed font-medium">
                            {featuredProduct.description}
                        </p>

                        <div className="flex items-center justify-between gap-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-secondary bg-gray-700 overflow-hidden ring-2 ring-primary/20">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Farmer" className="w-full h-full object-cover grayscale" />
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-secondary bg-primary flex items-center justify-center text-[10px] font-bold text-white">
                                    +50
                                </div>
                            </div>
                            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Agricultores felices</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Farmer CTA */}
            <section className="px-6 pb-12">
                <div className="bg-primary/5 dark:bg-primary/10 rounded-[32px] p-8 border border-primary/10 text-center relative overflow-hidden">
                    <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                    <span className="material-icons-round text-primary text-4xl mb-4">grass</span>
                    <h3 className="font-display font-bold text-xl text-secondary dark:text-white mb-3">¿Eres Productor?</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-xs mb-8 leading-relaxed px-4 font-medium">
                        Tenemos planes especiales por hectárea y asesoría personalizada en campo en la zona de Fresno.
                    </p>
                    <Link
                        to="/agronomo"
                        className="btn-stitch-primary py-4 w-full"
                    >
                        Probar Agrónomo Digital
                    </Link>
                </div>
            </section>
        </div>
    );
}
