import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Calculator, Box, Droplets, Leaf, Info, ShoppingCart } from 'lucide-react';
import { products } from '../data/products';

export default function FertilizerCalculator() {
    // Initialize profile directly from localStorage (lazy initializer)
    const [profile] = useState(() => {
        const savedProfile = localStorage.getItem('bioneural_user_profile');
        return savedProfile ? JSON.parse(savedProfile) : null;
    });
    const [area, setArea] = useState(1); // Default 1 hectare or 1000 plants
    const [unit, setUnit] = useState('hectares'); // 'hectares' or 'plants'

    // Simulación de lógica de dosificación avanzada
    const calculateDosage = () => {
        const factor = unit === 'hectares' ? area : area / 2000; // Aproximación: 2000 plantas/ha
        const crop = profile?.crop || 'cafe';

        const dosages = {
            cafe: {
                mm: 20 * factor, // Litros de MM/ha
                qm: 0.5 * factor, // Litros de QM/ha
                cs: 10 * factor,  // Litros de CS/ha (Roya prevention)
            },
            mora: {
                mm: 15 * factor,
                qm: 1.2 * factor, // Alta demanda nutricional
                jp: 5 * factor,   // Prevención pulgón
            },
            aguacate: {
                mm: 25 * factor, // Mucha materia orgánica
                ba: 2 * factor,  // Bambusina para silicio y raíces
                le: 5 * factor,  // Leonarditas para el suelo
            },
            citricos: {
                mm: 18 * factor,
                qm: 0.8 * factor,
                cs: 8 * factor,
            },
            otro: {
                mm: 10 * factor,
                qm: 0.5 * factor,
            }
        };

        return dosages[crop] || dosages.otro;
    };

    const results = calculateDosage();

    const getProductInfo = (shortName) => products.find(p => p.shortName === shortName);

    return (
        <section className="bg-white dark:bg-surface-dark/50 backdrop-blur-md rounded-[32px] p-8 border border-gray-100 dark:border-white/5 shadow-soft mt-8 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10"></div>

            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <Calculator size={24} />
                </div>
                <div>
                    <h3 className="font-display font-bold text-secondary dark:text-white">Calculadora de Dosis</h3>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-none">Bio-Nutrición Precisa</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-tight">Tamaño del Lote / Cultivo</label>
                    <div className="flex gap-2">
                        <input
                            type="number"
                            value={area}
                            onChange={(e) => setArea(parseFloat(e.target.value) || 0)}
                            className="bg-gray-100 dark:bg-white/5 border border-transparent dark:border-white/10 rounded-xl px-4 py-3 w-full text-secondary dark:text-white font-bold focus:ring-2 focus:ring-primary outline-none transition-all"
                            placeholder="Ej: 1.5"
                        />
                        <select
                            value={unit}
                            onChange={(e) => setUnit(e.target.value)}
                            className="bg-secondary dark:bg-white/10 text-white rounded-xl px-3 py-3 text-xs font-bold outline-none cursor-pointer"
                        >
                            <option value="hectares">Hectáreas</option>
                            <option value="plants">Plantas</option>
                        </select>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-xl border border-primary/10">
                        <Leaf size={14} className="text-primary" />
                        <span className="text-[10px] text-gray-600 dark:text-gray-300 font-medium italic">
                            Optimizando dosis para: <b className="text-primary capitalize">{profile?.crop || 'Cultivo General'}</b>
                        </span>
                    </div>
                </div>

                <div className="space-y-4">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-tight">Cálculo Estimado (Bimestral)</label>
                    <div className="grid grid-cols-1 gap-2">
                        {Object.entries(results).map(([shortName, liters]) => {
                            const prod = getProductInfo(shortName.toUpperCase());
                            return (
                                <motion.div
                                    layout
                                    key={shortName}
                                    className="flex items-center justify-between p-3 bg-white dark:bg-black/20 rounded-xl border border-gray-50 dark:border-white/5"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center text-xs font-bold text-primary">
                                            {shortName.toUpperCase()}
                                        </div>
                                        <span className="text-xs font-bold text-secondary dark:text-white truncate max-w-[120px]">
                                            {prod?.name || 'Insumo'}
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-sm font-black text-primary">{liters.toFixed(1)} L</span>
                                        <p className="text-[8px] text-gray-400 uppercase font-bold">Total Necesario</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <button
                    onClick={() => {
                        const message = `Hola BioNeural! He calculado mis dosis para ${area} ${unit === 'hectares' ? 'Hectáreas' : 'Plantas'} de ${profile?.crop || 'mi cultivo'}. Necesito: ${Object.entries(results).map(([n, l]) => `${l.toFixed(1)}L de ${n.toUpperCase()}`).join(', ')}. ¿Me envían una cotización?`;
                        window.open(`https://wa.me/573203062007?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                    className="btn-stitch-primary py-4 w-full group shadow-glow"
                >
                    <ShoppingCart size={18} />
                    <span>Cotizar este Plan</span>
                </button>
                <div className="flex items-center justify-center gap-2 text-[10px] text-gray-500 text-center px-4 leading-tight">
                    <Info size={12} />
                    <span>Estas dosis son sugeridas. Recomendamos validarlas con un análisis de suelo reciente.</span>
                </div>
            </div>
        </section>
    );
}
