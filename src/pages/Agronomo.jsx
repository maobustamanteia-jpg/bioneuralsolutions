import React from 'react';
import NeuralCore from '../components/NeuralCore';
import AIAssistant from '../components/AIAssistant';
import DiagnosisHistory from '../components/DiagnosisHistory';
import FertilizerCalculator from '../components/FertilizerCalculator';
import RegionalAlerts from '../components/RegionalAlerts';

export default function Agronomo() {
    return (
        <div className="animate-fade-in pb-24 px-6 pt-20 max-w-2xl mx-auto">
            <RegionalAlerts />
            <header className="mb-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex justify-center mb-6"
                >
                    <NeuralCore size="lg" />
                </motion.div>
                <h2 className="font-display font-extrabold text-4xl text-secondary dark:text-white mb-2 tracking-tighter">
                    Agrónomo <span className="text-primary italic">Digital</span>
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 max-w-[280px] mx-auto leading-relaxed">
                    Diagnóstico instantáneo y asesoría técnica impulsada por inteligencia bio-biológica.
                </p>
            </header>

            <AIAssistant />

            <FertilizerCalculator />

            <DiagnosisHistory />

            <section className="mt-12 bg-white dark:bg-surface-dark rounded-[32px] p-8 border border-gray-100 dark:border-gray-800 shadow-soft">
                <h3 className="font-display font-bold text-secondary dark:text-white mb-4">¿Cómo funciona?</h3>
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs shrink-0">1</div>
                        <div>
                            <p className="text-sm font-bold text-secondary dark:text-white">Describe el síntoma</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Escribe lo que observas en tu cultivo o una duda técnica.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs shrink-0">2</div>
                        <div>
                            <p className="text-sm font-bold text-secondary dark:text-white">Usa la Cámara</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Toma una foto clara para que nuestro ojo digital identifique el problema.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs shrink-0">3</div>
                        <div>
                            <p className="text-sm font-bold text-secondary dark:text-white">Recibe el Tratamiento</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Obtén la recomendación exacta de productos BioNeural y dosis.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
