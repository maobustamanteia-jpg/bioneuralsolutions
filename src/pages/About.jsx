import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <div className="animate-fade-in pb-24">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 dark:bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <main className="px-6 pt-20 space-y-10">
                {/* Hero Section */}
                <section className="text-center space-y-6">
                    <div className="relative mx-auto w-32 h-32 mb-6 bg-white dark:bg-surface-dark rounded-full shadow-lg p-2 flex items-center justify-center border-2 border-primary/20">
                        <img
                            alt="BioNeural Logo"
                            className="w-full h-full object-contain rounded-full"
                            src="/logo.png"
                        />
                    </div>
                    <h2 className="font-display font-bold text-2xl text-secondary dark:text-white tracking-tight">
                        Inteligencia Orgánica <br /><span className="text-primary">para el Futuro</span>
                    </h2>
                    <p className="text-xs text-primary font-bold uppercase tracking-widest bg-primary/5 dark:bg-primary/10 py-2 px-4 rounded-full inline-block">
                        Biofertilizantes Artesanales
                    </p>
                </section>

                {/* Nuestra Misión */}
                <section>
                    <div className="bg-white dark:bg-surface-dark p-8 rounded-[32px] shadow-soft border border-gray-100 dark:border-gray-800 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity translate-x-4 -translate-y-4">
                            <span className="material-icons-round text-8xl text-primary font-light">eco</span>
                        </div>
                        <div className="flex items-center space-x-3 mb-4 relative z-10">
                            <div className="p-2.5 bg-primary/10 rounded-xl text-primary">
                                <span className="material-icons-round text-xl">psychology</span>
                            </div>
                            <h3 className="font-display font-bold text-lg text-secondary dark:text-white">Nuestra Misión</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed relative z-10">
                            En BioNeural Solutions, fusionamos la sabiduría de la naturaleza con la innovación biotecnológica. Desarrollamos productos 100% orgánicos que potencian la agricultura sostenible, restaurando la vitalidad del suelo desde Fresno, Tolima.
                        </p>
                    </div>
                </section>

                {/* Origen Fresno Section */}
                <section>
                    <div className="relative rounded-[32px] overflow-hidden h-56 mb-6 shadow-xl border border-white/10">
                        <img
                            alt="Paisaje de cultivos en Fresno, Tolima"
                            className="absolute inset-0 w-full h-full object-cover"
                            src="/images/brand/fresno_tolima.jpg"
                            onError={(e) => {
                                e.target.src = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"; // Fallback landscape
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                            <span className="text-[10px] font-bold text-primary bg-white px-3 py-1 rounded-lg w-max mb-2 uppercase tracking-widest">RAÍCES</span>
                            <h3 className="text-white font-display font-bold text-2xl drop-shadow-md">Fresno, Tolima</h3>
                            <p className="text-gray-200 text-xs mt-1 font-medium italic opacity-90">Corazón agrícola de Colombia</p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed text-center px-4 font-medium">
                        Nacidos en las tierras fértiles del norte del Tolima, entendemos las necesidades reales del agricultor. Transformamos residuos orgánicos en vida.
                    </p>
                </section>

                {/* Grid "Por qué elegirnos" */}
                <section className="space-y-6">
                    <h3 className="font-display font-bold text-lg text-center text-secondary dark:text-white tracking-tight">Nuestros Valores Core</h3>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-2xl flex flex-col items-center text-center space-y-3 border border-primary/10 hover:border-primary/30 transition-all group">
                            <span className="material-icons-round text-primary text-3xl group-hover:scale-110 transition-transform">science</span>
                            <h4 className="font-display font-bold text-xs text-secondary dark:text-white uppercase tracking-wider">Innovación</h4>
                            <p className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">Bio-tecnología aplicada al campo.</p>
                        </div>
                        <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl flex flex-col items-center text-center space-y-3 border border-amber-100 dark:border-amber-800 hover:border-amber-300 transition-all group">
                            <span className="material-icons-round text-amber-600 dark:text-amber-400 text-3xl group-hover:scale-110 transition-transform">spa</span>
                            <h4 className="font-display font-bold text-xs text-secondary dark:text-white uppercase tracking-wider">Orgánico</h4>
                            <p className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">Sin químicos nocivos.</p>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl flex flex-col items-center text-center space-y-3 border border-blue-100 dark:border-blue-800 hover:border-blue-300 transition-all group">
                            <span className="material-icons-round text-blue-600 dark:text-blue-400 text-3xl group-hover:scale-110 transition-transform">water_drop</span>
                            <h4 className="font-display font-bold text-xs text-secondary dark:text-white uppercase tracking-wider">Sostenible</h4>
                            <p className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">Protección de recursos hídricos.</p>
                        </div>
                        <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-2xl flex flex-col items-center text-center space-y-3 border border-emerald-100 dark:border-emerald-800 hover:border-emerald-300 transition-all group">
                            <span className="material-icons-round text-emerald-600 dark:text-emerald-400 text-3xl group-hover:scale-110 transition-transform">handshake</span>
                            <h4 className="font-display font-bold text-xs text-secondary dark:text-white uppercase tracking-wider">Comunidad</h4>
                            <p className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">Apoyo al agro colombiano.</p>
                        </div>
                    </div>
                </section>

                {/* Cita del Fundador */}
                <section className="pb-8">
                    <div className="flex flex-col items-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/50 dark:to-surface-dark p-8 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-soft text-center space-y-4">
                        <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden ring-4 ring-white dark:ring-surface-dark shadow-md">
                            <img
                                alt="Fundador"
                                className="w-full h-full object-cover grayscale opacity-80"
                                src="/images/brand/founder.jpg"
                                onError={(e) => {
                                    e.target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"; // Fallback man
                                }}
                            />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-3">EL FUNDADOR</p>
                            <p className="text-sm text-secondary dark:text-gray-300 italic font-medium leading-relaxed px-4">
                                "La tierra tiene memoria; nuestro deber es darle las herramientas para recordar cómo sanar y prosperar."
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Final */}
                <section className="px-2">
                    <a
                        href="https://wa.me/573142750383"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-primary hover:bg-primary-dark text-white font-display font-bold py-5 rounded-2xl shadow-lg shadow-green-900/20 transform transition-all active:scale-95 flex items-center justify-center gap-3"
                    >
                        <span>Hablar con un experto</span>
                        <span className="material-icons-round text-sm">arrow_forward</span>
                    </a>
                </section>
            </main>
        </div>
    );
}
