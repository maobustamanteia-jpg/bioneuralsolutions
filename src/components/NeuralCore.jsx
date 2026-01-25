import React from 'react';
import { motion } from 'framer-motion';

export default function NeuralCore({ size = "md", isAnalyzing = false }) {
    const containerVariants = {
        idle: { scale: 1 },
        analyzing: {
            scale: [1, 1.1, 1],
            transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }
    };

    const orbVariants = {
        idle: {
            boxShadow: "0 0 20px rgba(76, 175, 80, 0.4)",
        },
        analyzing: {
            boxShadow: [
                "0 0 20px rgba(76, 175, 80, 0.4)",
                "0 0 40px rgba(0, 229, 255, 0.6)",
                "0 0 20px rgba(76, 175, 80, 0.4)"
            ],
            transition: { duration: 1.5, repeat: Infinity }
        }
    };

    const sizeClasses = {
        sm: "w-12 h-12",
        md: "w-24 h-24",
        lg: "w-40 h-40"
    };

    return (
        <motion.div
            className={`relative flex items-center justify-center ${sizeClasses[size]}`}
            variants={containerVariants}
            animate={isAnalyzing ? "analyzing" : "idle"}
        >
            {/* Outer Rotating Ring */}
            <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            {/* Inner Rotating Ring (Counter-Clockwise) */}
            <motion.div
                className="absolute inset-2 rounded-full border border-accent/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            />

            {/* Main Neural Orb */}
            <motion.div
                className="relative z-10 w-1/2 h-1/2 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center overflow-hidden"
                variants={orbVariants}
            >
                {/* Core Detail: Neural Lines */}
                <div className="absolute inset-0 opacity-40">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <motion.path
                            d="M20,50 Q50,20 80,50"
                            stroke="#fff"
                            strokeWidth="2"
                            fill="none"
                            animate={{
                                pathLength: [0, 1, 0],
                                opacity: [0.2, 0.6, 0.2]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                        <motion.circle
                            cx="50" cy="50" r="2" fill="#fff"
                            animate={{ scale: [1, 2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </svg>
                </div>

                {/* Gloss Effect */}
                <div className="absolute top-1 left-2 w-1/3 h-1/3 bg-white/20 rounded-full" />
            </motion.div>

            {/* Orbiting Particles (Mini Satellites) */}
            {[0, 120, 240].map((angle, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-accent"
                    animate={{
                        rotate: angle + 360,
                    }}
                    style={{
                        originX: "center",
                        originY: "center",
                        translateX: size === "lg" ? "70px" : size === "md" ? "45px" : "25px",
                    }}
                    transition={{ duration: 4 + i, repeat: Infinity, ease: "linear" }}
                />
            ))}

            {/* Particle Pulse */}
            {isAnalyzing && (
                <motion.div
                    className="absolute inset-0 rounded-full bg-accent/10"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 1, repeat: Infinity }}
                />
            )}
        </motion.div>
    );
}
