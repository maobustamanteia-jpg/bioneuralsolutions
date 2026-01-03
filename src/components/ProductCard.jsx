import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/products';

export default function ProductCard({ product, showPrice = false }) {
    const category = categories[product.category];

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-[--color-gray-100] overflow-hidden hover:shadow-md transition-all">
            <div className="flex">
                {/* Imagen/Icono del producto */}
                <div className="w-24 h-24 bg-gradient-to-br from-[--color-green-100] to-[--color-gray-100] flex items-center justify-center flex-shrink-0">
                    <span className="text-4xl opacity-80">{category?.icon || '🌿'}</span>
                </div>

                {/* Info */}
                <div className="flex-1 p-4">
                    <span className="inline-block px-2 py-0.5 bg-[--color-primary]/10 text-[--color-primary] rounded text-[10px] font-bold uppercase mb-1">
                        {category?.name || product.category}
                    </span>
                    <h3 className="font-[--font-family-display] font-bold text-sm text-[--color-secondary] mb-1">
                        {product.name}
                    </h3>
                    <p className="text-xs text-[--color-gray-500] line-clamp-2">
                        {product.description}
                    </p>

                    {showPrice && (
                        <div className="mt-2 flex items-center justify-between">
                            <span className="text-[--color-primary] font-bold">Consultar</span>
                            <Link
                                to={`/productos#${product.shortName}`}
                                className="text-xs text-[--color-primary] font-bold"
                            >
                                Ver más →
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
