import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Activity } from 'lucide-react';

const StatCard = ({ label, value, trend, positive }) => (
    <div className="glass-panel p-4 rounded-xl">
        <p className="text-gray-400 text-xs font-mono uppercase tracking-wider mb-1">{label}</p>
        <div className="flex items-end justify-between">
            <h3 className="text-2xl font-bold text-white">{value}</h3>
            <span className={`text-xs font-bold ${positive ? 'text-neon-green' : 'text-red-400'} flex items-center gap-1`}>
                {positive ? <TrendingUp size={12} /> : <TrendingUp size={12} className="rotate-180" />}
                {trend}
            </span>
        </div>
    </div>
);

export default function MarketDashboard() {
    return (
        <div className="pb-24 pt-24 px-4 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-8"
            >
                <h2 className="text-3xl font-bold font-mono px-2 border-l-4 border-cyan-tech">MARKET_PULSE</h2>
                <p className="text-gray-400 text-sm mt-2 font-mono">Tiempo Real: Fresno, Tolima</p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 mb-8">
                <StatCard label="Precio Café (Carga)" value="$1,850,000" trend="+2.4%" positive={true} />
                <StatCard label="Aguacate Hass (Kg)" value="$6,200" trend="-1.1%" positive={false} />
                <StatCard label="Humedad Relativa" value="78%" trend="Estable" positive={true} />
                <StatCard label="Predicción Bio" value="Muy Alta" trend="Demanda" positive={true} />
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                    <Activity size={100} className="text-cyan-tech" />
                </div>
                <h3 className="text-lg font-bold mb-4 z-10 relative">Tendencias de Cultivo</h3>
                <div className="h-40 flex items-end justify-between gap-2 z-10 relative">
                    {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
                        <div key={i} className="w-full bg-cyan-tech/20 hover:bg-cyan-tech/40 transition-colors rounded-t-sm relative group">
                            <div
                                style={{ height: `${h}%` }}
                                className="absolute bottom-0 w-full bg-gradient-to-t from-cyan-tech to-transparent border-t border-cyan-tech/50"
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
