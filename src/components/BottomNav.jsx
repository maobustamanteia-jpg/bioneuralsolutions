import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
    { path: '/', label: 'Inicio', icon: 'home' },
    { path: '/productos', label: 'Productos', icon: 'spa' }, // Use 'spa' for products/nature
    { path: '/como-comprar', label: 'Guía', icon: 'help_outline', isCenter: false },
    { path: '/contacto', label: 'Contacto', icon: 'contact_support' }
];

export default function BottomNav() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="sticky bottom-0 bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 px-2 py-3 flex justify-around items-center z-50 rounded-t-2xl shadow-[0_-5px_20px_rgba(0,0,0,0.03)]">
            <Link to="/" className={`flex flex-col items-center justify-center w-full transition-colors group ${isActive('/') ? 'text-primary' : 'text-gray-400 dark:text-gray-500 hover:text-primary'}`}>
                <span className="material-icons-round text-2xl mb-0.5 group-hover:-translate-y-0.5 transition-transform font-medium">home</span>
                <span className="text-[10px] font-semibold">Inicio</span>
            </Link>

            <Link to="/productos" className={`flex flex-col items-center justify-center w-full transition-colors group ${isActive('/productos') ? 'text-primary' : 'text-gray-400 dark:text-gray-500 hover:text-primary'}`}>
                <span className="material-icons-round text-2xl mb-0.5 group-hover:-translate-y-0.5 transition-transform font-medium">grid_view</span>
                <span className="text-[10px] font-semibold">Catálogo</span>
            </Link>

            <div className="relative -top-6">
                <a
                    href="https://wa.me/57XXXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-primary rounded-full shadow-lg shadow-primary/40 flex items-center justify-center text-white active:scale-95 transition-all transform hover:scale-105 border-4 border-background-light dark:border-background-dark"
                >
                    <span className="material-icons-round text-2xl">chat</span>
                </a>
            </div>

            <Link to="/como-comprar" className={`flex flex-col items-center justify-center w-full transition-colors group ${isActive('/como-comprar') ? 'text-primary' : 'text-gray-400 dark:text-gray-500 hover:text-primary'}`}>
                <span className="material-icons-round text-2xl mb-0.5 group-hover:-translate-y-0.5 transition-transform font-medium">help_outline</span>
                <span className="text-[10px] font-semibold">Guía</span>
            </Link>

            <Link to="/contacto" className={`flex flex-col items-center justify-center w-full transition-colors group ${isActive('/contacto') ? 'text-primary' : 'text-gray-400 dark:text-gray-500 hover:text-primary'}`}>
                <span className="material-icons-round text-2xl mb-0.5 group-hover:-translate-y-0.5 transition-transform font-medium">person</span>
                <span className="text-[10px] font-semibold">Contacto</span>
            </Link>
        </nav>
    );
}
