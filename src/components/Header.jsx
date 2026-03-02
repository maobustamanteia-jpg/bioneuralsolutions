import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Globe } from 'lucide-react';

/**
 * Header Premium - BioNeural Solutions
 * Estructura: Topbar (Verde Bosque) + Navegación Principal + CTA Dorado
 * "Biotecnología nacida en los Andes"
 */

export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/productos', label: 'Productos' },
    { path: '/quienes-somos', label: 'Nosotros' },
    { path: '/agronomo', label: 'IA Agrónomo' },
    { path: '/contacto', label: 'Contacto' },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-[60]">
      {/* ============================================
          TOPBAR - Verde Bosque con info de contacto
          ============================================ */}
      <div className="hidden sm:block bg-forest text-white/90 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="tel:+573203062007" className="flex items-center gap-1 hover:text-gold transition-colors">
              <Phone size={12} />
              <span>+57 320 306 2007</span>
            </a>
            <span className="text-white/40">|</span>
            <span className="text-white/70">Fresno, Tolima, Colombia</span>
          </div>
          <button className="flex items-center gap-1 hover:text-gold transition-colors">
            <Globe size={12} />
            <span>ES</span>
          </button>
        </div>
      </div>

      {/* ============================================
          NAVEGACIÓN PRINCIPAL - Fondo blanco
          ============================================ */}
      <div className="bg-white dark:bg-forest-dark border-b border-gray-100 dark:border-white/10 px-4 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="/logo.png" 
              alt="BioNeural Solutions" 
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-105 transition-transform" 
            />
            <div className="hidden sm:flex flex-col">
              <span className="font-display font-extrabold text-forest dark:text-white tracking-tight text-sm">
                BioNeural
              </span>
              <span className="text-[8px] text-gray-500 dark:text-white/60 uppercase tracking-widest">
                Solutions
              </span>
            </div>
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold uppercase tracking-wide transition-all relative
                  ${isActive(link.path) 
                    ? 'text-forest dark:text-gold' 
                    : 'text-gray-600 dark:text-white/70 hover:text-forest dark:hover:text-gold'
                  }
                  after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-gold after:transition-all
                  ${isActive(link.path) ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                `}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Premium - Botón Dorado */}
          <div className="hidden sm:flex items-center gap-3">
            <Link 
              to="/contacto"
              className="bg-gold hover:bg-gold-dark text-forest font-display font-bold text-xs sm:text-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-gold-glow hover:shadow-lg transition-all hover:-translate-y-0.5 uppercase tracking-wide"
            >
              Solicitar Cotización
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-forest dark:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 dark:border-white/10 pt-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-semibold uppercase tracking-wide py-2 px-3 rounded-lg transition-all
                    ${isActive(link.path) 
                      ? 'bg-forest text-white' 
                      : 'text-gray-600 dark:text-white/70 hover:bg-forest/10'
                    }
                  `}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                to="/contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-gold text-forest font-display font-bold text-sm py-3 rounded-lg text-center mt-2"
              >
                Solicitar Cotización
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
