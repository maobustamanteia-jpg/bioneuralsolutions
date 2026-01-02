import React from 'react';
import BioCard from '../components/BioCard';
import { products } from '../data/products';
import { motion } from 'framer-motion';

export default function ProductCatalog() {
    return (
        <div className="pb-24 pt-24 px-4 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8 border-b border-white/10 pb-4"
            >
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 font-mono">
                    CATÁLOGO_NEURAL
                </h2>
                <span className="text-xs text-neon-green mt-1 block tracking-[0.3em]">BIO-INSUMOS ACTIVOS // FRESNO_NODE</span>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <BioCard product={product} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
