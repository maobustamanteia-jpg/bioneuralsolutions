import React from 'react';
import { Link } from 'react-router-dom';
import { products, categories } from '../data/products';

export default function Products() {
    return (
        <div className="pb-24">
            {/* Header */}
            <section className="header-rounded pt-8 pb-12 px-6 text-center relative">
                <div className="circuit-bg absolute inset-0 pointer-events-none"></div>
                <div className="relative z-10">
                    <div className="w-16 h-16 bg-[--color-primary] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <span className="text-3xl">🌿</span>
                    </div>
                    <h1 className="font-[--font-family-display] font-bold text-3xl text-[--color-secondary] mb-2">
                        Smart Nutrition
                    </h1>
                    <p className="text-[--color-gray-600] text-sm max-w-[280px] mx-auto">
                        Combinamos la ciencia natural con tradición para nutrición óptima de cultivos.
                    </p>
                </div>
            </section>

            {/* Filtros */}
            <section className="px-6 py-4 flex gap-2 overflow-x-auto">
                <button className="px-4 py-2 bg-[--color-primary] text-white rounded-full text-xs font-bold whitespace-nowrap">
                    All Products
                </button>
                {Object.entries(categories).slice(0, 3).map(([key, cat]) => (
                    <button
                        key={key}
                        className="px-4 py-2 bg-white border border-[--color-gray-200] text-[--color-secondary] rounded-full text-xs font-medium whitespace-nowrap hover:border-[--color-primary] transition-colors"
                    >
                        {cat.icon} {cat.name}
                    </button>
                ))}
            </section>

            {/* Lista de productos */}
            <section className="px-6">
                <div className="space-y-4">
                    {products.map((product) => {
                        const cat = categories[product.category];
                        return (
                            <div
                                key={product.id}
                                id={product.shortName}
                                className="bg-white rounded-2xl shadow-sm border border-[--color-gray-100] overflow-hidden"
                            >
                                <div className="flex">
                                    {/* Imagen */}
                                    <div className="w-28 h-28 bg-gradient-to-br from-[--color-green-100] to-[--color-gray-100] flex items-center justify-center flex-shrink-0">
                                        <span className="text-5xl opacity-70">{cat?.icon || '🌿'}</span>
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 p-4">
                                        <div className="flex justify-between items-start mb-1">
                                            <span className="inline-block px-2 py-0.5 bg-[--color-primary]/10 text-[--color-primary] rounded text-[10px] font-bold uppercase">
                                                {cat?.name}
                                            </span>
                                            <span className="text-[--color-primary] font-bold text-sm">Consultar</span>
                                        </div>

                                        <h3 className="font-[--font-family-display] font-bold text-base text-[--color-secondary] mb-1">
                                            {product.name}
                                        </h3>

                                        <p className="text-xs text-[--color-gray-500] line-clamp-2 mb-2">
                                            {product.description}
                                        </p>

                                        <a
                                            href="https://wa.me/57XXXXXXXXXX"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs text-[--color-primary] font-bold inline-flex items-center gap-1"
                                        >
                                            <span>Consultar</span>
                                            <span>→</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Beneficios expandibles */}
                                <div className="px-4 pb-4 border-t border-[--color-gray-100] pt-3 mt-2">
                                    <p className="text-xs text-[--color-gray-600] mb-2">
                                        <strong>Uso:</strong> {product.usage}
                                    </p>
                                    <div className="flex flex-wrap gap-1">
                                        {product.benefits.slice(0, 2).map((benefit, idx) => (
                                            <span
                                                key={idx}
                                                className="text-[10px] px-2 py-1 bg-[--color-green-100] text-[--color-primary] rounded-full"
                                            >
                                                ✓ {benefit}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 pt-8">
                <div className="cta-section">
                    <div className="flex-1">
                        <h4 className="font-[--font-family-display] font-bold text-[--color-secondary] text-lg mb-1">
                            ¿Necesitas asesoría?
                        </h4>
                        <p className="text-sm text-[--color-gray-600]">
                            Te ayudamos a elegir el producto ideal para tu cultivo.
                        </p>
                    </div>
                    <a
                        href="https://wa.me/57XXXXXXXXXX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-contact"
                    >
                        WhatsApp
                    </a>
                </div>
            </section>
        </div>
    );
}
