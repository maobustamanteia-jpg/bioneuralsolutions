import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { History, Trash2, ExternalLink, Leaf, Camera } from 'lucide-react';

export default function DiagnosisHistory() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const loadHistory = () => {
            const saved = JSON.parse(localStorage.getItem('diagnosis_history') || '[]');
            setHistory(saved);
        };
        loadHistory();

        // Listen for storage changes (when new diagnoses are added from other components)
        window.addEventListener('storage', loadHistory);
        return () => window.removeEventListener('storage', loadHistory);
    }, []);

    const clearHistory = () => {
        if (window.confirm('¿Deseas borrar todo el historial de diagnósticos?')) {
            localStorage.removeItem('diagnosis_history');
            setHistory([]);
        }
    };

    if (history.length === 0) return null;

    return (
        <section className="mt-12">
            <div className="flex items-center justify-between mb-6 px-2">
                <h3 className="font-display font-bold text-lg text-secondary dark:text-white flex items-center gap-2">
                    <History className="text-primary" size={20} />
                    Historial de Análisis
                </h3>
                <button
                    onClick={clearHistory}
                    className="text-gray-400 hover:text-red-500 transition-colors p-2"
                    title="Borrar todo"
                >
                    <Trash2 size={18} />
                </button>
            </div>

            <div className="space-y-4">
                <AnimatePresence>
                    {history.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="glass-panel p-4 rounded-2xl border border-white/5 dark:border-white/10 hover:border-primary/30 transition-all group"
                        >
                            <div className="flex gap-4">
                                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                                    {item.type === 'vision' ? (
                                        <Camera className="text-primary" size={20} />
                                    ) : (
                                        <Leaf className="text-primary" size={20} />
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start mb-1">
                                        <p className="text-[10px] font-mono text-primary font-bold uppercase tracking-wider">
                                            {item.date}
                                        </p>
                                        <span className="px-2 py-0.5 rounded-full bg-white/5 text-[8px] font-mono text-gray-500 uppercase">
                                            {item.type}
                                        </span>
                                    </div>
                                    <h4 className="text-sm font-bold text-secondary dark:text-white mb-1 truncate">
                                        {item.query}
                                    </h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                                        {item.diagnosis}
                                    </p>

                                    {item.imageData && (
                                        <div className="mt-3 rounded-lg overflow-hidden h-24 border border-white/5">
                                            <img
                                                src={item.imageData}
                                                alt="Captura"
                                                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </section>
    );
}
