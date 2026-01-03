import React from 'react';
import { Link } from 'react-router-dom';
import { products, companyInfo } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
    const featuredProducts = products.slice(0, 3);

    return (
        <div className="pb-24">
            {/* Hero Section - estilo Stitch */}
            <section className="header-rounded pt-8 pb-12 px-6 text-center relative">
                <div className="circuit-bg absolute inset-0 pointer-events-none"></div>

                <div className="relative z-10">
                    {/* Logo grande con efecto glow */}
                    <div className="mb-6 relative inline-block">
                        <div className="absolute inset-0 bg-[--color-primary]/20 blur-xl rounded-full scale-110"></div>
                        <img
                            src="/logo.png"
                            alt="BioNeural Logo"
                            className="w-32 h-32 mx-auto object-contain relative z-10 drop-shadow-xl animate-fade-in"
                        />
                    </div>

                    {/* Título */}
                    <h1 className="font-[--font-family-display] font-bold text-3xl text-[--color-secondary] mb-2 tracking-tight">
                        BioNeural <span className="text-[--color-primary]">Solutions</span>
                    </h1>

                    <p className="text-[--color-primary] font-medium text-sm mb-6 uppercase tracking-wider">
                        Fertilizantes Orgánicos Inteligentes
                    </p>

                    <p className="text-[--color-gray-600] text-base leading-relaxed mb-8 max-w-[300px] mx-auto">
                        Fusionamos la sabiduría de la naturaleza con técnicas artesanales para cultivos más fuertes y sostenibles.
                    </p>

                    {/* Botones */}
                    <div className="flex flex-col w-full gap-3 max-w-sm mx-auto">
                        <Link to="/productos" className="btn-primary">
                            <span>Explorar Productos</span>
                            <span>→</span>
                        </Link>
                        <Link to="/quienes-somos" className="btn-secondary">
                            Nuestra Historia
                        </Link>
                    </div>
                </div>
            </section>

            {/* ¿Por qué BioNeural? - 4 beneficios en grid */}
            <section className="section px-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="font-[--font-family-display] font-bold text-xl text-[--color-secondary]">
                        ¿Por qué BioNeural?
                    </h2>
                    <Link to="/quienes-somos" className="text-xs font-bold text-[--color-primary]">
                        LEER MÁS
                    </Link>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="benefit-card">
                        <div className="benefit-icon bg-[--color-green-100] text-[--color-primary]">🌿</div>
                        <h3 className="font-[--font-family-display] font-bold text-sm text-[--color-secondary] mb-1">100% Orgánico</h3>
                        <p className="text-xs text-[--color-gray-500] leading-snug">Productos naturales sin químicos dañinos.</p>
                    </div>

                    <div className="benefit-card">
                        <div className="benefit-icon bg-[--color-blue-100] text-blue-600">🧬</div>
                        <h3 className="font-[--font-family-display] font-bold text-sm text-[--color-secondary] mb-1">Bio-Inteligencia</h3>
                        <p className="text-xs text-[--color-gray-500] leading-snug">Formulaciones optimizadas para cada cultivo.</p>
                    </div>

                    <div className="benefit-card">
                        <div className="benefit-icon bg-[--color-amber-100] text-amber-600">📈</div>
                        <h3 className="font-[--font-family-display] font-bold text-sm text-[--color-secondary] mb-1">Alto Rendimiento</h3>
                        <p className="text-xs text-[--color-gray-500] leading-snug">Maximiza tu cosecha de forma sostenible.</p>
                    </div>

                    <div className="benefit-card">
                        <div className="benefit-icon bg-[--color-teal-100] text-teal-600">🔬</div>
                        <h3 className="font-[--font-family-display] font-bold text-sm text-[--color-secondary] mb-1">Artesanal</h3>
                        <p className="text-xs text-[--color-gray-500] leading-snug">Hecho con técnicas tradicionales.</p>
                    </div>
                </div>
            </section>

            {/* Producto Destacado */}
            <section className="px-6 pb-8">
                <h2 className="font-[--font-family-display] font-bold text-xl text-[--color-secondary] mb-6">
                    Producto Destacado
                </h2>

                <div className="product-card h-64">
                    <div className="absolute inset-0 bg-gradient-to-br from-[--color-primary]/80 to-[--color-primary-dark] flex items-center justify-center">
                        <span className="text-8xl opacity-30">🌱</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex justify-between items-end">
                            <div>
                                <span className="badge badge-new mb-2">Nuevo</span>
                                <h3 className="text-white font-[--font-family-display] font-bold text-2xl mb-1">
                                    Microorganismos de Montaña
                                </h3>
                                <p className="text-gray-300 text-sm">
                                    Mejora la salud del suelo con microorganismos nativos de los bosques colombianos.
                                </p>
                            </div>
                            <Link
                                to="/productos"
                                className="bg-white text-[--color-primary] w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                            >
                                <span className="text-xl">+</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 pb-8">
                <div className="cta-section">
                    <div className="flex-1">
                        <h4 className="font-[--font-family-display] font-bold text-[--color-secondary] text-lg leading-tight mb-2">
                            ¿Eres agricultor?
                        </h4>
                        <p className="text-sm text-[--color-gray-600]">
                            Obtén una consulta gratuita para optimizar tu suelo.
                        </p>
                    </div>
                    <a
                        href="https://wa.me/57XXXXXXXXXX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-contact"
                    >
                        Contactar
                    </a>
                </div>
            </section>

            {/* Productos Grid */}
            <section className="px-6 pb-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="font-[--font-family-display] font-bold text-xl text-[--color-secondary]">
                        Nuestros Productos
                    </h2>
                    <Link to="/productos" className="text-xs font-bold text-[--color-primary]">
                        VER TODOS
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {featuredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </div>
    );
}
