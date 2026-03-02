import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/products';

/**
 * Footer Premium - BioNeural Solutions
 * Estructura: 3 columnas (Contacto + Logo + Legal)
 * Fondo Verde Bosque con acentos dorados
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest text-white">
      {/* ============================================
          CONTENIDO PRINCIPAL - 3 COLUMNAS
          ============================================ */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {/* COLUMNA 1: Contacto y Redes */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-gold text-sm uppercase tracking-wider mb-4">
              Contacto
            </h3>
            
            <div className="space-y-3">
              <a 
                href={`tel:${companyInfo.phone}`}
                className="flex items-center gap-3 text-white/80 hover:text-gold transition-colors text-sm"
              >
                <Phone size={16} className="text-gold" />
                <span>{companyInfo.phone}</span>
              </a>
              
              <a 
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-3 text-white/80 hover:text-gold transition-colors text-sm"
              >
                <Mail size={16} className="text-gold" />
                <span>{companyInfo.email}</span>
              </a>
              
              <div className="flex items-start gap-3 text-white/80 text-sm">
                <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
                <span>{companyInfo.location}</span>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="flex items-center gap-4 pt-4">
              <a 
                href="https://wa.me/573203062007" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-forest transition-all"
              >
                <MessageCircle size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-forest transition-all"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-forest transition-all"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* COLUMNA 2: Logo y Slogan */}
          <div className="flex flex-col items-center justify-center text-center py-8 md:py-0">
            <img 
              src="/logo.png" 
              alt="BioNeural Solutions" 
              className="w-20 h-20 object-contain mb-4 brightness-0 invert opacity-90"
            />
            <h4 className="font-display font-bold text-xl text-white mb-2">
              BioNeural Solutions
            </h4>
            <p className="text-gold text-sm font-medium mb-4">
              Biotecnología Agrícola Bioracional
            </p>
            <p className="text-white/60 text-xs max-w-xs">
              Biotecnología nacida en los Andes. Formulada para el campo colombiano.
            </p>
          </div>

          {/* COLUMNA 3: Navegación y Legal */}
          <div className="space-y-4 md:text-right">
            <h3 className="font-display font-bold text-gold text-sm uppercase tracking-wider mb-4">
              Navegación
            </h3>
            
            <nav className="space-y-2">
              {[
                { path: '/', label: 'Inicio' },
                { path: '/productos', label: 'Productos' },
                { path: '/quienes-somos', label: 'Nosotros' },
                { path: '/agronomo', label: 'IA Agrónomo' },
                { path: '/contacto', label: 'Contacto' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-white/70 hover:text-gold transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="pt-4 space-y-1 text-xs text-white/50">
              <Link to="/como-comprar" className="block hover:text-white/70 transition-colors">
                Cómo Comprar
              </Link>
              <Link to="/contacto" className="block hover:text-white/70 transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================
          BARRA DE COPYRIGHT
          ============================================ */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
            <p>
              © {currentYear} BioNeural Solutions. Todos los derechos reservados.
            </p>
            <p className="text-center sm:text-right">
              Hecho con 💚 en Fresno, Tolima, Colombia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
