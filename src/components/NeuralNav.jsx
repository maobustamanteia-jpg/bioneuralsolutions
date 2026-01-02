import React from 'react';
import { Home, Grid, Cpu, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const NavItem = ({ icon: Icon, label, active, onClick }) => (
    <button
        onClick={onClick}
        className={`relative flex flex-col items-center justify-center w-16 h-16 rounded-xl transition-all duration-300 ${active ? 'text-neon-green' : 'text-gray-400 hover:text-white'}`}
        aria-label={`Ir a ${label}`}
        aria-current={active ? 'page' : undefined}
        type="button"
    >
        {active && (
            <motion.div
                layoutId="active-glow"
                className="absolute inset-0 bg-neon-green/10 rounded-xl blur-md"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
        )}
        <Icon size={24} className="z-10" aria-hidden="true" />
        <span className="text-[10px] mt-1 font-mono tracking-wider z-10">{label}</span>
    </button>
);

export default function NeuralNav({ activeTab, setActiveTab }) {
    return (
        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50" aria-label="Navegación principal">
            <div className="flex items-center gap-2 p-2 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] neon-border">
                <NavItem icon={Home} label="BASE" active={activeTab === 'home'} onClick={() => setActiveTab('home')} />
                <NavItem icon={Grid} label="MARKET" active={activeTab === 'catalog'} onClick={() => setActiveTab('catalog')} />
                <NavItem icon={Cpu} label="AI-BIO" active={activeTab === 'ai'} onClick={() => setActiveTab('ai')} />
                <NavItem icon={Activity} label="DATA" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
            </div>
        </nav>
    );
}
