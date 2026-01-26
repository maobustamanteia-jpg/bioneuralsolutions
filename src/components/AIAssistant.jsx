import React, { useState } from 'react';
import { Send, Bot, AlertTriangle, Camera, Sparkles, Binary } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import AgronomistCamera from './AgronomistCamera';
import NeuralCore from './NeuralCore';

export default function AIAssistant() {
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
                    diagnosis = `ANÁLISIS BIO-NEURAL [Fresno, Tolima]: He identificado que tu reporte sobre ${lowerQuery} coincide con las aplicaciones de ${matchedProduct.name} (${matchedProduct.shortName}). ${matchedProduct.casesOfUse}. Dosis sugerida: ${matchedProduct.usage}.`;
                } else if (lowerQuery.includes('ph') || lowerQuery.includes('suelo')) {
                    diagnosis = `ANÁLISIS DE SUELO: Detecto una consulta sobre la salud del suelo. Para una precisión completa, te recomiendo usar nuestras cintas reactivas de pH BioNeural y subir una foto aquí. Generalmente, en nuestra zona de Fresno, el Kit de Arranque Bio-Orgánico ayuda a estabilizar la microbiología de base.`;
                    matchedProduct = products.find(p => p.shortName === "KAB");
                } else {
                    diagnosis = `CONSULTA TÉCNICA: He analizado tu reporte sobre "${query}". Aunque no detecto una patología crítica inmediata en mi base de datos regional, te recomiendo aplicar el Kit de Arranque Bio-Orgánico para fortalecer la resiliencia del cultivo.`;
                    matchedProduct = products.find(p => p.shortName === "KAB");
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

            // Randomly simulate a pH strip diagnosis or a disease one
            const isPH = Math.random() > 0.5;

            let capturedDiagnosis;
            if (isPH) {
                capturedDiagnosis = {
                    disease: "Análisis de Suelo: pH 5.5",
                    confidence: 94.2,
                    treatment: "Kit de Arranque Bio-Orgánico",
                    zone: "Sector Fresno",
                    cta: "https://wa.me/573203062007?text=" + encodeURIComponent("Hola, mi escaneo AI detectó suelo ácido. Necesito el Kit de Arranque.")
                };
            } else {
                capturedDiagnosis = {
                    disease: "Roya del Café detectada",
                    confidence: 96.8,
                    treatment: "Kit de Rescate Fitosanitario",
                    zone: "Fresno, Tolima",
                    cta: "https://wa.me/573203062007?text=" + encodeURIComponent("Hola, mi escaneo AI detectó Roya del Café. Necesito el Kit de Rescate.")
                };
            }

            setDiagnosisData(capturedDiagnosis);

            const reply = {
                text: isPH
                    ? `RESULTADO: Tu suelo presenta una acidez moderada (pH 5.5). Para optimizar la siembra en Fresno, te recomiendo nuestro Kit de Arranque que regula la microbiología.`
                    : `ALERTA: Se detectan signos iniciales de Roya. No permitas que avance; nuestro Kit de Rescate Fitosanitario es la solución orgánica ideal.`,
                cta: capturedDiagnosis.cta
            };
            setResponse(reply);

            // Save to history
            const newEntry = {
                id: Date.now(),
                date: new Date().toLocaleString(),
                query: isPH ? "Análisis de Suelo" : "Diagnóstico Visual",
                diagnosis: capturedDiagnosis.disease,
                type: 'vision',
                imageData
            };
            const history = JSON.parse(localStorage.getItem('diagnosis_history') || '[]');
            localStorage.setItem('diagnosis_history', JSON.stringify([newEntry, ...history]));
        }, 1500); // Shorter analysis time for smoother feel
    };

    return (
        <div className="glass-panel p-6 rounded-3xl neon-border max-w-md mx-auto w-full">
            <div className="flex items-center gap-4 mb-6 relative">
                <NeuralCore size="sm" isAnalyzing={analyzing} />
                <div className="flex-1">
                    <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                        Bio-Neural Core
                        {analyzing && <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity }}><Binary size={14} className="text-accent" /></motion.span>}
                    </h2>
                    <p className="text-[10px] text-primary-light font-mono tracking-widest uppercase">Orchestrator v5.1.0 | <span className="text-accent">ONLINE</span></p>
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
                            <div className="mb-6">
                                <NeuralCore size="md" isAnalyzing={true} />
                            </div>
                            <span className="tracking-[0.3em] uppercase font-bold text-accent">Procesando Bio-Data...</span>
                            <div className="w-full max-w-[200px] bg-white/5 h-[2px] mt-6 rounded-full overflow-hidden border border-white/10">
                                <motion.div
                                    className="bg-gradient-to-r from-primary to-accent h-full"
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                            </div>
                            <div className="mt-4 flex flex-col gap-1 items-center opacity-40 font-mono text-[8px]">
                                <span>SYNCING_MICROBIOTA_DATABASE...</span>
                                <span>FRESNO_SECTOR_7_CONNECTED</span>
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
