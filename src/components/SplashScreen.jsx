import React from 'react';
import { motion as Motion } from 'framer-motion';

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
    <Motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-forest flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Neural Particles Simulation */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        {STATIC_PARTICLES.map((particle, i) => (
          <Motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full"
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

      {/* Glow de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/20 rounded-full blur-[100px] animate-pulse-soft" />

      <div className="relative z-10 flex flex-col items-center">
        <Motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "backOut" }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 bg-gold blur-3xl opacity-30 animate-pulse"></div>
          <img
            src="/logo.png"
            alt="BioNeural Logo"
            className="w-32 h-32 object-contain relative z-10 drop-shadow-[0_0_30px_rgba(212,175,55,0.5)]"
          />
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-display font-bold text-2xl text-white tracking-widest uppercase mb-2">
            BioNeural <span className="text-gold">Solutions</span>
          </h2>
          <div className="flex items-center justify-center gap-1">
            <span className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent"></span>
            <p className="text-[10px] text-gold font-mono tracking-[0.3em] uppercase">
              Biotecnología Premium
            </p>
            <span className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent"></span>
          </div>
        </Motion.div>

        {/* Progress Indicator */}
        <div className="mt-12 w-48 h-1 bg-white/10 rounded-full overflow-hidden relative">
          <Motion.div
            className="absolute inset-y-0 left-0 bg-gold"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </div>
      </div>

      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-12 text-white/50 font-mono text-[8px] tracking-widest uppercase"
      >
        v2.0.0 | Fresno, Tolima
      </Motion.div>
    </Motion.div>
  );
}
