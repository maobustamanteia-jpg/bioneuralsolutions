import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();

    const navItems = [
        { path: '/', label: 'Inicio', icon: '🏠' },
        { path: '/productos', label: 'Productos', icon: '📦' },
        { path: '/quienes-somos', label: 'Nosotros', icon: '👥' },
        { path: '/como-comprar', label: 'Guía', icon: '📋' },
        { path: '/contacto', label: 'Contacto', icon: '💬' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <>
            {/* Header superior */}
            <header className="sticky top-0 z-50 bg-white shadow-sm">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Menu button */}
                        <button className="w-10 h-10 bg-[--color-background] rounded-full flex items-center justify-center shadow-sm">
                            <span className="text-[--color-primary] text-lg">☰</span>
                        </button>

                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2">
                            <img
                                src="/logo.png"
                                alt="BioNeural Solutions Logo"
                                className="h-8 w-auto"
                            />
                            <span className="font-[--font-family-display] font-bold text-[--color-secondary] hidden sm:block">
                                Bio<span className="text-[--color-primary]">Neural</span>
                            </span>
                        </Link>

                        {/* Cart button */}
                        <button className="w-10 h-10 bg-[--color-background] rounded-full flex items-center justify-center shadow-sm">
                            <span className="text-[--color-primary] text-lg">🛒</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Navegación inferior estilo Stitch */}
            <nav className="bottom-nav">
                <Link to="/" className={`nav-item ${isActive('/') ? 'active' : ''}`}>
                    <span className="text-xl">🏠</span>
                    <span>Inicio</span>
                </Link>
                <Link to="/productos" className={`nav-item ${isActive('/productos') ? 'active' : ''}`}>
                    <span className="text-xl">📦</span>
                    <span>Productos</span>
                </Link>

                {/* Botón central */}
                <a
                    href="https://wa.me/57XXXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-center-btn"
                >
                    <span className="text-2xl">💬</span>
                </a>

                <Link to="/quienes-somos" className={`nav-item ${isActive('/quienes-somos') ? 'active' : ''}`}>
                    <span className="text-xl">📖</span>
                    <span>Nosotros</span>
                </Link>
                <Link to="/contacto" className={`nav-item ${isActive('/contacto') ? 'active' : ''}`}>
                    <span className="text-xl">👤</span>
                    <span>Contacto</span>
                </Link>
            </nav>
        </>
    );
}
