import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav className="absolute top-0 left-0 right-0 z-50 p-6 flex justify-between items-center pointer-events-none">
            <button className="w-10 h-10 bg-white/90 dark:bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center shadow-md pointer-events-auto active:scale-90 transition-transform">
                <span className="material-icons-round text-primary">menu</span>
            </button>
            <Link to="/" className="pointer-events-auto">
                {/* Opcional: Logo pequeño aquí si se desea, pero Stitch prefiere centrarlo en el header */}
            </Link>
            <button className="w-10 h-10 bg-white/90 dark:bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center shadow-md pointer-events-auto active:scale-90 transition-transform">
                <span className="material-icons-round text-primary">shopping_bag</span>
            </button>
        </nav>
    );
}
