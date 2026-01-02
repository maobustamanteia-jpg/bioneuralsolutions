import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Sprout } from 'lucide-react';

export default function BioCard({ product }) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-panel rounded-2xl overflow-hidden relative group"
        >
            <div className="absolute top-0 right-0 p-3 z-10">
                <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-neon-green/30">
                    <span className="text-neon-green text-xs font-mono font-bold flex items-center gap-1">
                        <Sprout size={12} /> {product.target}
                    </span>
                </div>
            </div>

            <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-deep-dark via-transparent to-transparent z-10" />
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            <div className="p-5 relative z-20 -mt-10">
                <div className="mb-2">
                    <span className="text-cyan-tech text-xs font-mono tracking-widest uppercase">{product.category}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 leading-tight">{product.name}</h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>

                <div className="bg-white/5 rounded-lg p-3 mb-4 border border-white/5">
                    <p className="text-xs text-gray-400 font-mono mb-1">TECH-SPECS::</p>
                    <p className="text-xs text-emerald-400 font-mono">{product.tech_specs}</p>
                </div>

                <div className="flex items-center justify-between mt-2">
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-cyan-tech font-mono">
                        ${product.price.toLocaleString('es-CO')}
                    </div>
                    <button className="bg-neon-green/10 hover:bg-neon-green/20 text-neon-green border border-neon-green/50 p-3 rounded-xl transition-all">
                        <Zap size={20} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
