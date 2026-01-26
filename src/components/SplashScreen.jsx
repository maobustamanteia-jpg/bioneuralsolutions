import React from 'react';
import { motion } from 'framer-motion';

// Generate particles outside component to ensure purity
const generateParticles = () => {
    return [...Array(20)].map(() => ({
        initialX: Math.random() * 100 + "%",
        initialY: Math.random() * 100 + "%",
        initialOpacity: Math.random(),
        animateY: Math.random() * 100 + "%",
        duration: Math.random() * 5 + 3,
    }));
};

// Pre-generate static particles
const STATIC_PARTICLES = generateParticles();

export default function SplashScreen() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-[#0a0f0d] flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Background Neural Particles Simulation (Simplified) */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                {STATIC_PARTICLES.map((particle, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary rounded-full"
                        initial={{
                            x: particle.initialX,
                            y: particle.initialY,
                            opacity: particle.initialOpacity
                        }}
                        animate={{
                            y: [null, particle.animateY],
                            opacity: [0.2, 0.8, 0.2]
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "backOut" }}
                    className="relative mb-8"
                >
                    <div className="absolute inset-0 bg-primary blur-3xl opacity-20 animate-pulse"></div>
                    <img
                        src="/logo.png"
                        alt="BioNeural Logo"
                        className="w-32 h-32 object-contain relative z-10 drop-shadow-[0_0_20px_rgba(58,99,50,0.5)]"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="font-display font-bold text-2xl text-white tracking-widest uppercase mb-2">
                        BioNeural <span className="text-primary">Solutions</span>
                    </h2>
                    <div className="flex items-center justify-center gap-1">
                        <span className="w-24 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></span>
                        <p className="text-[10px] text-primary font-mono tracking-[0.3em] uppercase">
                            Cargando Inteligencia Bio-Orgánica
                        </p>
                        <span className="w-24 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></span>
                    </div>
                </motion.div>

                {/* Progress Indicator */}
                <div className="mt-12 w-48 h-1 bg-white/5 rounded-full overflow-hidden relative">
                    <motion.div
                        className="absolute inset-y-0 left-0 bg-primary"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                    />
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
                className="absolute bottom-12 text-gray-500 font-mono text-[8px] tracking-widest uppercase"
            >
                v1.0.4 | Fresno & Arbeláez
            </motion.div>
        </motion.div>
    );
}
