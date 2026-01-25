import React, { useState } from 'react';
import { Send, Bot, AlertTriangle, Camera, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AgronomistCamera from './AgronomistCamera';

export default function AI_Assistant() {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState(null);
    const [analyzing, setAnalyzing] = useState(false);
    const [showCamera, setShowCamera] = useState(false);
    const [diagnosisData, setDiagnosisData] = useState(null);

    const handleAnalyze = (e) => {
        e.preventDefault();
        if (!query) return;

        setAnalyzing(true);
        setResponse(null);
        setDiagnosisData(null);

        // Simulate AI processing
        setTimeout(() => {
            setAnalyzing(false);

            const lowerQuery = query.toLowerCase();
            let matchedProduct = null;
            let diagnosis = "";

            // Dynamic matching logic based on products.js
            import('../data/products').then(({ products }) => {
                // Check for diseases/plags mentions in casesOfUse or applications
                for (const product of products) {
                    const searchSpace = `${product.name} ${product.description} ${product.category} ${product.casesOfUse} ${product.applications.join(' ')}`.toLowerCase();

                    // Simple keyword matching for demo purposes
                    const keywords = lowerQuery.split(/\s+/).filter(w => w.length > 3);
                    const matchCount = keywords.reduce((acc, kw) => searchSpace.includes(kw) ? acc + 1 : acc, 0);

                    if (matchCount > 0) {
                        matchedProduct = product;
                        break;
                    }
                }

                if (matchedProduct) {
                    diagnosis = `ANÁLISIS BIO-NEURAL: He identificado que tu cultivo presenta síntomas relacionados con ${lowerQuery}. Recomiendo nuestro producto ${matchedProduct.name} (${matchedProduct.shortName}). ${matchedProduct.casesOfUse}. Dosis sugerida: ${matchedProduct.usage}.`;
                } else {
                    diagnosis = `CONSULTA TÉCNICA: He analizado tu reporte sobre "${query}". Aunque no detecto una patología crítica inmediata en mi base de datos de Fresno/Tolima, te recomiendo aplicar Microorganismos de Montaña (MM) para fortalecer el vigor general. ¿Deseas hablar con un agrónomo humano?`;
                }

                const finalResponse = {
                    text: diagnosis,
                    product: matchedProduct,
                    cta: "https://wa.me/573203062007?text=" + encodeURIComponent(`Hola, necesito asesoría técnica sobre ${query}. El Asistente me recomendó ${matchedProduct?.name || 'revisión general'}.`)
                };

                setResponse(finalResponse);

                // Save to history (to be implemented)
                const newEntry = {
                    id: Date.now(),
                    date: new Date().toLocaleString(),
                    query,
                    diagnosis: finalResponse.text,
                    type: 'chat'
                };
                const history = JSON.parse(localStorage.getItem('diagnosis_history') || '[]');
                localStorage.setItem('diagnosis_history', JSON.stringify([newEntry, ...history]));
            });
        }, 2000);
    };

    const handleCameraCapture = (imageData) => {
        setShowCamera(false);
        setAnalyzing(true);
        setResponse(null);
        setDiagnosisData(null);
        setQuery("Captura de imagen analizada...");

        // Simulate expert visual analysis
        setTimeout(() => {
            setAnalyzing(false);
            const capturedDiagnosis = {
                disease: "Roya del Café (Hemileia vastatrix)",
                confidence: 96.8,
                treatment: "Neuro-Café + Caldo Sulfocálcico",
                zone: "Sector Fresno/Arbeláez",
                cta: "https://wa.me/573203062007?text=" + encodeURIComponent("Hola, mi escaneo AI detectó Roya del Café. Necesito el tratamiento indicado.")
            };
            setDiagnosisData(capturedDiagnosis);

            const reply = {
                text: "DIAGNÓSTICO VISUAL COMPLETADO: Se detectan pústulas activas compatibles con Hemileia vastatrix. Se recomienda aplicación inmediata de Caldo Sulfocálcico en mezcla con MM Líquido para control y recuperación foliar.",
                cta: capturedDiagnosis.cta
            };
            setResponse(reply);

            // Save to history
            const newEntry = {
                id: Date.now(),
                date: new Date().toLocaleString(),
                query: "Análisis Visual",
                diagnosis: capturedDiagnosis.disease,
                type: 'vision',
                imageData
            };
            const history = JSON.parse(localStorage.getItem('diagnosis_history') || '[]');
            localStorage.setItem('diagnosis_history', JSON.stringify([newEntry, ...history]));
        }, 3000);
    };

    return (
        <div className="glass-panel p-6 rounded-3xl neon-border max-w-md mx-auto w-full">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-cyan-tech/20 flex items-center justify-center border border-cyan-tech/50">
                    <Bot className="text-cyan-tech animate-pulse" />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-white">Bio-Neural Core</h2>
                    <p className="text-[10px] text-primary font-mono tracking-widest uppercase">Orchestrator v5.0.1 | ONLINE</p>
                </div>
            </div>

            <div className={`bg-black/40 rounded-xl p-4 min-h-[160px] mb-4 border border-white/5 relative overflow-hidden transition-all duration-500 ${diagnosisData ? 'ring-1 ring-primary/30' : ''}`}>
                <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif')] opacity-5 bg-cover pointer-events-none mix-blend-screen" />

                <AnimatePresence mode="wait">
                    {analyzing ? (
                        <motion.div
                            key="analyzing"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center justify-center h-40 text-primary font-mono text-xs"
                        >
                            <div className="relative mb-4">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    className="w-12 h-12 border border-primary/20 rounded-full border-t-primary"
                                />
                                <Bot className="absolute inset-0 m-auto text-primary animate-pulse" size={16} />
                            </div>
                            <span className="tracking-[0.2em] uppercase">Sincronizando con Agentes...</span>
                            <div className="w-full max-w-[150px] bg-white/5 h-[1px] mt-3 rounded-full overflow-hidden">
                                <motion.div
                                    className="bg-primary h-full"
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 2 }}
                                />
                            </div>
                        </motion.div>
                    ) : response ? (
                        <motion.div
                            key="response"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-4"
                        >
                            {diagnosisData && (
                                <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 flex items-center gap-3">
                                    <Sparkles className="text-primary" size={16} />
                                    <div>
                                        <p className="text-[10px] text-primary font-bold uppercase tracking-wider">Resultado de Visión AI</p>
                                        <p className="text-xs text-white font-medium">{diagnosisData.disease} - Confianza: {diagnosisData.confidence}%</p>
                                    </div>
                                </div>
                            )}
                            <div className="text-emerald-400 font-mono text-xs leading-relaxed">
                                <span className="text-primary mr-2"> {">"} </span>
                                {response.text}
                            </div>

                            {response.cta && (
                                <a
                                    href={response.cta}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-3 bg-primary/20 hover:bg-primary/30 border border-primary/40 rounded-xl text-center text-[10px] text-primary font-bold uppercase tracking-widest transition-all"
                                >
                                    Hablar con Asesor Técnico
                                </a>
                            )}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="idle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-col items-center justify-center h-40 opacity-40"
                        >
                            <Bot className="mb-2 text-primary" size={24} />
                            <p className="text-gray-400 font-mono text-[10px] tracking-widest uppercase">Esperando entrada del productor...</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <form onSubmit={handleAnalyze} className="relative group">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Describe el síntoma o usa la cámara..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-4 pr-24 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-all font-mono text-xs focus:bg-white/10"
                />
                <div className="absolute right-2 top-2 bottom-2 flex gap-1">
                    <button
                        type="button"
                        onClick={() => setShowCamera(true)}
                        className="w-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary hover:bg-primary/20 transition-all border border-primary/20 group-hover:shadow-[0_0_15px_rgba(58,99,50,0.3)]"
                        title="Abrir Agrónomo Digital"
                    >
                        <Camera size={18} />
                    </button>
                    <button
                        type="submit"
                        disabled={!query || analyzing}
                        className="w-10 bg-primary rounded-xl flex items-center justify-center text-white disabled:opacity-20 disabled:grayscale hover:bg-primary-dark transition-all shadow-glow"
                    >
                        <Send size={18} />
                    </button>
                </div>
            </form>

            <AnimatePresence>
                {showCamera && (
                    <AgronomistCamera
                        onCapture={handleCameraCapture}
                        onClose={() => setShowCamera(false)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
