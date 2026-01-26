import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { AlertTriangle, MapPin, Bell, Shield, ArrowRight, X } from 'lucide-react';

export default function RegionalAlerts() {
    // Initialize profile directly from localStorage (lazy initializer)
    const [profile] = useState(() => {
        const savedProfile = localStorage.getItem('bioneural_user_profile');
        return savedProfile ? JSON.parse(savedProfile) : null;
    });
    const [dismissed, setDismissed] = useState(false);

    // Simulación de alertas basadas en Fresno, Tolima y el cultivo del usuario
    const getAlerts = () => {
        const crop = profile?.crop || 'general';
        const alerts = {
            cafe: {
                title: "Alerta de Roya detectada",
                location: "Vereda Versalles, Fresno",
                severity: "high",
                message: "Se reportan brotes de Roya en cafetales a 1500msnm. La humedad actual favorece la propagación.",
                action: "Aplicar Caldo Sulfocálcico preventivo."
            },
            mora: {
                title: "Riesgo de Mildeo Velloso",
                location: "Vereda El Tablazo, Fresno",
                severity: "medium",
                message: "Condiciones climáticas propicias para Mildeo. Monitoree el envés de las hojas.",
                action: "Reforzar con MM y Jabón Potásico."
            },
            aguacate: {
                title: "Presencia de Pasador del Fruto",
                location: "Vereda La Aguadita, Fresno",
                severity: "high",
                message: "Incremento en capturas de moscas pasaderas. Proteja sus frutos jóvenes.",
                action: "Usar barreras físicas y Ajo-Ají."
            },
            general: {
                title: "Alerta Climática: Lluvias Fuertes",
                location: "Zona Urbana, Fresno",
                severity: "low",
                message: "Se esperan fuertes precipitaciones en las próximas 48h. Asegure drenajes.",
                action: "Revisar cunetas y canales."
            }
        };

        return alerts[crop] || alerts.general;
    };

    const alert = getAlerts();

    if (dismissed) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`relative overflow-hidden rounded-[28px] p-6 border shadow-lg mb-8 ${alert.severity === 'high'
                    ? 'bg-red-500/10 border-red-500/30'
                    : 'bg-amber-500/10 border-amber-500/30'
                    }`}
            >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <AlertTriangle size={80} />
                </div>

                <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                            <MapPin size={12} className="text-primary" />
                            <span className="text-[10px] font-bold text-white uppercase tracking-widest">{alert.location}</span>
                        </div>
                        <button
                            onClick={() => setDismissed(true)}
                            className="p-1 hover:bg-white/10 rounded-full transition-colors"
                        >
                            <X size={16} className="text-white/50" />
                        </button>
                    </div>

                    <div className="flex gap-4">
                        <div className={`p-3 rounded-2xl shrink-0 h-fit ${alert.severity === 'high' ? 'bg-red-500 text-white' : 'bg-amber-500 text-white'
                            }`}>
                            <AlertTriangle size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-display font-bold text-lg leading-tight mb-1">
                                {alert.title}
                            </h4>
                            <p className="text-white/70 text-xs leading-relaxed mb-4">
                                {alert.message}
                            </p>

                            <div className="p-3 bg-black/20 rounded-xl border border-white/5 flex items-center justify-between group cursor-pointer hover:bg-black/40 transition-all">
                                <div className="flex items-center gap-2">
                                    <Shield size={14} className="text-primary" />
                                    <span className="text-[10px] text-white font-bold">{alert.action}</span>
                                </div>
                                <ArrowRight size={14} className="text-white group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pulsating Indicator */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${alert.severity === 'high' ? 'bg-red-400' : 'bg-amber-400'
                            }`}></span>
                        <span className={`relative inline-flex rounded-full h-2 w-2 ${alert.severity === 'high' ? 'bg-red-500' : 'bg-amber-500'
                            }`}></span>
                    </span>
                    <span className="text-[8px] font-black text-white/40 uppercase tracking-[0.2em]">EN VIVO</span>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
