import React, { useState } from 'react';
import { Send, Bot, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AI_Assistant() {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState(null);
    const [analyzing, setAnalyzing] = useState(false);

    const handleAnalyze = (e) => {
        e.preventDefault();
        if (!query) return;

        setAnalyzing(true);
        setResponse(null);

        // Simulate AI processing
        setTimeout(() => {
            setAnalyzing(false);

            // Dummy logic for Fresno context
            let reply = "";
            if (query.toLowerCase().includes('café') || query.toLowerCase().includes('broca')) {
                reply = "ANÁLISIS: Detectada posible infestación en cultivo de Café. SOLUCIÓN RECOMENDADA: Neuro-Café Booster combinado con control biológico. Eficacia proyectada: 94%.";
            } else if (query.toLowerCase().includes('amarillo') || query.toLowerCase().includes('hoja')) {
                reply = "DIAGNÓSTICO: Deficiencia de Nitrógeno o posible Sigatoka. RECOMIENDO: Plátano-Core Energy para refuerzo foliar inmediato.";
            } else {
                reply = `DATOS INSUFICIENTES para "${query}". Recomiendo análisis de suelo completo con Suelo-Matrix Reconstructor para descartar pH ácido.`;
            }

            setResponse(reply);
        }, 2000);
    };

    return (
        <div className="glass-panel p-6 rounded-3xl neon-border max-w-md mx-auto w-full">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-cyan-tech/20 flex items-center justify-center border border-cyan-tech/50">
                    <Bot className="text-cyan-tech animate-pulse" />
                </div>
                <div>
                    <h2 className="text-xl font-bold">Bio-Neural Core</h2>
                    <p className="text-xs text-gray-400 font-mono">v4.5.2 | ONLINE</p>
                </div>
            </div>

            <div className="bg-black/40 rounded-xl p-4 min-h-[150px] mb-4 border border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif')] opacity-5 bg-cover pointer-events-none mix-blend-screen" />

                <AnimatePresence>
                    {analyzing ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center justify-center h-full text-cyan-tech font-mono text-sm"
                        >
                            <span className="animate-pulse">PROCESANDO DATOS BIOLÓGICOS...</span>
                            <div className="w-full bg-gray-800 h-1 mt-2 rounded-full overflow-hidden">
                                <motion.div
                                    className="bg-cyan-tech h-full"
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 2 }}
                                />
                            </div>
                        </motion.div>
                    ) : response ? (
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-emerald-400 font-mono text-sm leading-relaxed"
                        >
                            {">"} {response}
                        </motion.p>
                    ) : (
                        <p className="text-gray-500 font-mono text-xs">Esperando input del operador agrícola...</p>
                    )}
                </AnimatePresence>
            </div>

            <form onSubmit={handleAnalyze} className="relative">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Describe el problema (ej: Café con broca)..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-4 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-neon-green/50 transition-colors font-mono text-sm"
                />
                <button
                    type="submit"
                    className="absolute right-2 top-2 bottom-2 w-10 bg-neon-green/10 rounded-lg flex items-center justify-center text-neon-green hover:bg-neon-green/20 transition-colors"
                >
                    <Send size={18} />
                </button>
            </form>
        </div>
    );
}
