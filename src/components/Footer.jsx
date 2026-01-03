import React from 'react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../data/products';

export default function Footer() {
    // Footer mínimo porque tenemos la navegación inferior
    return (
        <footer className="bg-[--color-secondary] text-white py-8 px-6 pb-28">
            <div className="container mx-auto text-center">
                <img
                    src="/logo.png"
                    alt="BioNeural Solutions"
                    className="h-12 w-auto mx-auto mb-4 brightness-0 invert opacity-80"
                />
                <p className="text-white/60 text-xs mb-4">
                    {companyInfo.tagline}
                </p>
                <p className="text-white/50 text-xs">
                    📍 {companyInfo.location}
                </p>
                <div className="border-t border-white/10 mt-6 pt-6">
                    <p className="text-white/40 text-[10px]">
                        © {new Date().getFullYear()} BioNeural Solutions. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
