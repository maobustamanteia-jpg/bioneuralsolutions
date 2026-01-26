import React, { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Camera, X, Upload, Zap, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

// Static data for the scanning animation to avoid Math.random() during render
const DATA_STREAM_ITEMS = [
    'RAW_DATA_CHH_k8f7g2h9j :: CONFIDENCE_0.9421',
    'RAW_DATA_CHH_m3n5p8q2w :: CONFIDENCE_0.9637',
    'RAW_DATA_CHH_x4c6v1b9n :: CONFIDENCE_0.8892',
    'RAW_DATA_CHH_t7r3e5y0u :: CONFIDENCE_0.9154',
];

export default function AgronomistCamera({ onCapture, onClose }) {
    const [capturedImage, setCapturedImage] = useState(null);
    const [isScanning, setIsScanning] = useState(false);
    const fileInputRef = useRef(null);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result;
                setCapturedImage(result);
                startScanning(result);
            };
            reader.readAsDataURL(file);
        }
    };

    const startScanning = (img) => {
        setIsScanning(true);
        // Simulate scanning process
        setTimeout(() => {
            setIsScanning(false);
            if (onCapture) onCapture(img || capturedImage);
        }, 2500); // Faster scan for better UX
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[110] bg-black/90 backdrop-blur-xl flex flex-col p-6"
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <Zap className="text-primary" size={20} />
                        Agrónomo Digital
                    </h2>
                    <p className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">
                        Bio-Neural Scan v4.0
                    </p>
                </div>
                <button
                    onClick={onClose}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                    <X size={20} />
                </button>
            </div>

            {/* Viewport / Capture Area */}
            <div className="flex-1 relative rounded-3xl overflow-hidden border border-white/10 bg-gray-900 flex items-center justify-center">
                {!capturedImage ? (
                    <div className="text-center p-8">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/20">
                            <Camera className="text-primary" size={32} />
                        </div>
                        <h3 className="text-white font-bold mb-2 text-lg">Captura una Imagen</h3>
                        <p className="text-gray-400 text-sm mb-8 max-w-[200px] mx-auto">
                            Toma una foto clara de la hoja o tallo afectado para análisis.
                        </p>

                        <div className="flex flex-col gap-4">
                            <button
                                onClick={() => {
                                    const input = document.createElement('input');
                                    input.type = 'file';
                                    input.accept = 'image/*';
                                    input.capture = 'environment';
                                    input.onchange = handleFileUpload;
                                    input.click();
                                }}
                                className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-glow"
                            >
                                <Camera size={20} />
                                Abrir Cámara
                            </button>
                            <button
                                onClick={() => fileInputRef.current.click()}
                                className="bg-white/5 hover:bg-white/10 text-gray-300 font-medium py-3 px-8 rounded-xl transition-all flex items-center justify-center gap-3"
                            >
                                <Upload size={18} />
                                Subir de Galería
                            </button>
                        </div>
                        <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            ref={fileInputRef}
                            onChange={handleFileUpload}
                        />
                    </div>
                ) : (
                    <div className="relative w-full h-full">
                        <img src={capturedImage} alt="Plant Preview" className="w-full h-full object-cover" />

                        {/* Scanning Overlay */}
                        <AnimatePresence>
                            {isScanning && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 bg-black/20"
                                >
                                    {/* Moving Scan Line */}
                                    <motion.div
                                        className="absolute left-0 right-0 h-1 bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)] z-20"
                                        animate={{ top: ["0%", "100%", "0%"] }}
                                        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                                    />

                                    {/* UI Markers */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <div className="w-64 h-64 border-2 border-cyan-400/30 rounded-3xl relative">
                                            <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-cyan-400" />
                                            <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-cyan-400" />
                                            <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-cyan-400" />
                                            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-cyan-400" />

                                            {/* pH Scale Reference for visual proof */}
                                            <div className="absolute -right-10 top-1/2 -translate-y-1/2 flex flex-col gap-1">
                                                {[7, 6, 5, 4, 3].map(n => (
                                                    <div key={n} className={`w-2 h-6 rounded-full ${n > 6 ? 'bg-green-500' : n > 5 ? 'bg-yellow-400' : 'bg-red-500'} opacity-40`} />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="mt-8 bg-black/80 backdrop-blur-md py-4 px-8 rounded-2xl border border-cyan-400/40 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                                            <p className="text-cyan-400 font-mono text-[10px] animate-pulse tracking-[0.3em] text-center font-bold">
                                                BIO-NEURAL SCAN: MODO DUAL ACTIVO
                                            </p>
                                            <p className="text-white/60 font-mono text-[8px] text-center mt-1">
                                                DETECTANDO PATRONES: FOLIAR / PH_STRIP
                                            </p>
                                        </div>
                                    </div>

                                    {/* Data Stream Simulation */}
                                    <div className="absolute bottom-6 left-6 right-6 font-mono text-[8px] text-cyan-400/60 flex flex-col gap-1 overflow-hidden h-20">
                                        {DATA_STREAM_ITEMS.map((item, i) => (
                                            <motion.p
                                                key={i}
                                                animate={{ opacity: [0, 1, 0], x: [0, 10, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                                            >
                                                {item}
                                            </motion.p>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}
            </div>

            {/* Footer Status */}
            <div className="mt-8">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center border border-white/5">
                        <AlertCircle className="text-gray-500" size={24} />
                    </div>
                    <div>
                        <p className="text-white text-sm font-bold">Estado del Sistema</p>
                        <p className="text-gray-400 text-xs">Alineación satelital completa. Listo para escaneo foliar.</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
