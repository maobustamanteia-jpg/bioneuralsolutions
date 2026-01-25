import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <header className="sticky top-0 left-0 right-0 z-[60] bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-100 dark:border-white/5 px-4 py-3">
            <div className="flex justify-between items-center max-w-md mx-auto">
                <Link to="/" className="flex items-center gap-2">
                    <img src="/logo.png" alt="BioNeural" className="w-8 h-8 object-contain" />
                    <span className="font-display font-bold text-sm text-secondary dark:text-white tracking-tight">BioNeural</span>
                </Link>

                <nav className="flex items-center gap-4">
                    <Link
                        to="/"
                        className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${isActive('/') ? 'text-primary' : 'text-gray-400'}`}
                    >
                        Inicio
                    </Link>
                    <Link
                        to="/productos"
                        className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${isActive('/productos') ? 'text-primary' : 'text-gray-400'}`}
                    >
                        Catálogo
                    </Link>
                    <Link
                        to="/agronomo"
                        className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${isActive('/agronomo') ? 'text-primary' : 'text-gray-400'}`}
                    >
                        IA
                    </Link>
                </nav>
            </div>
        </header>
    );
}
