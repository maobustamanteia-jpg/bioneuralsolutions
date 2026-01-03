import React from 'react';
import { motion } from 'framer-motion';

export default function ProductCard({ item, index }) {
    // Definimos un icono por defecto basado en la categoría o nombre
    const getIcon = () => {
        if (item.category === "Suelo") return "terrain";
        if (item.category === "Protección") return "shield";
        return "water_drop";
    };

    const getIconColor = () => {
        if (item.category === "Suelo") return "text-amber-600 bg-amber-100 dark:bg-amber-900/30";
        if (item.category === "Protección") return "text-blue-600 bg-blue-100 dark:bg-blue-900/30";
        return "text-primary bg-green-100 dark:bg-green-900/30";
    };

    return (
        <article id={item.shortName} className="bg-white dark:bg-surface-dark rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
                <img
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={item.image || "https://images.unsplash.com/photo-1599420186946-7b6fb4eaba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                />

                {item.bestSeller && (
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/70 backdrop-blur-md text-primary text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-sm uppercase tracking-widest border border-primary/10">
                        Popular
                    </div>
                )}
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                    <div>
                        <h3 className="font-display font-bold text-xl text-secondary dark:text-white leading-tight mb-2">
                            {item.name}
                        </h3>
                        <div className="flex items-center gap-2">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getIconColor()}`}>
                                <span className="material-icons-round text-lg">{getIcon()}</span>
                            </div>
                            <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                                {item.category}
                            </span>
                        </div>
                    </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-6 leading-relaxed">
                    {item.description}
                </p>

                <div className="flex items-center justify-between gap-3">
                    <a
                        href={`https://wa.me/573142750383?text=Hola,%20quisiera%20más%20información%20sobre%20${encodeURIComponent(item.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-stitch-primary py-3 px-4 text-xs"
                    >
                        <span>Pedir Info</span>
                        <span className="material-icons-round text-sm">whatsapp</span>
                    </a>

                    <button className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-white/5 text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary border border-gray-100 dark:border-white/5 transition-colors flex items-center justify-center">
                        <span className="material-icons-round text-xl">bookmark_border</span>
                    </button>
                </div>
            </div>
        </article>
    );
}
