import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

/**
 * PremiumHero - Componente de Hero Premium para páginas de producto
 * BioNeural Solutions
 * 
 * Estructura: Fondo Verde Bosque + Imagen Producto + Título Dorado + CTAs
 * Diseño basado en el mockup de Sulphomax
 */

export default function PremiumHero({
  // Props requeridas
  productName,           // Nombre del producto (ej: "SULPHOMAX™")
  tagline,               // Subtítulo corto (ej: "Bioracional Integral")
  description,           // Descripción principal
  productImage,          // URL de la imagen del producto
  
  // Props opcionales
  ctaPrimary,            // Texto del CTA principal (default: "Descubrir más")
  ctaSecondary,          // Texto del CTA secundario (default: "Ficha técnica")
  onCtaPrimary,          // Handler del CTA principal
  onCtaSecondary,        // Handler del CTA secundario
  badges = [],           // Array de badges (ej: [{text: "100% Orgánico", icon: Leaf}])
  stats = [],            // Array de estadísticas (ej: [{value: "50+", label: "Hongos"}])
  className = "",        // Clases adicionales
}) {
  
  const defaultBadges = [
    { text: "100% Orgánico" },
    { text: "Sin Residuos" },
    { text: "Hecho en Colombia" },
  ];

  const displayBadges = badges.length > 0 ? badges : defaultBadges;
  const primaryCtaText = ctaPrimary || "Descubrir más";
  const secondaryCtaText = ctaSecondary || "Ficha técnica";

  return (
    <section className={`relative overflow-hidden bg-forest ${className}`}>
      {/* ============================================
          FONDO CON EFECTOS DE ENERGÍA
          ============================================ */}
      <div className="absolute inset-0 z-0">
        {/* Gradiente base */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest to-forest-dark" />
        
        {/* Efecto de brillo energético */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px] animate-pulse-soft" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-bio-green/10 rounded-full blur-[100px] animate-pulse-soft" style={{ animationDelay: '2s' }} />
        
        {/* Patrón de puntos técnicos */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle, rgba(212, 175, 55, 0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* ============================================
          CONTENIDO PRINCIPAL
          ============================================ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA: Imagen del producto */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end order-2 lg:order-1"
          >
            {/* Contenedor de la imagen con efecto de brillo */}
            <div className="relative">
              {/* Glow detrás del producto */}
              <div className="absolute inset-0 bg-gold/20 rounded-3xl blur-3xl scale-110 animate-pulse-soft" />
              
              {/* Imagen del producto */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-4 sm:p-6 backdrop-blur-sm border border-white/10">
                {productImage ? (
                  <img 
                    src={productImage} 
                    alt={productName}
                    className="w-64 h-80 sm:w-72 sm:h-96 object-contain drop-shadow-2xl"
                  />
                ) : (
                  <div className="w-64 h-80 sm:w-72 sm:h-96 flex items-center justify-center">
                    <div className="text-center text-white/50">
                      <div className="text-gold font-display font-bold text-3xl mb-2">{productName}</div>
                      <div className="text-sm">Imagen del producto</div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Badge flotante */}
              {displayBadges[0] && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -bottom-4 -right-4 bg-gold text-forest font-bold text-xs px-4 py-2 rounded-full shadow-gold-glow"
                >
                  {displayBadges[0].text}
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* COLUMNA DERECHA: Información del producto */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-center lg:text-left order-1 lg:order-2"
          >
            {/* Tagline/Badge superior */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <span className="text-gold text-xs font-bold uppercase tracking-wider">
                BioNeural Solutions
              </span>
            </div>

            {/* Nombre del producto - Dorado */}
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-gold mb-4 tracking-tight">
              {productName}
            </h1>

            {/* Tagline */}
            {tagline && (
              <p className="text-bio-green text-sm sm:text-base uppercase tracking-widest font-semibold mb-4">
                {tagline}
              </p>
            )}

            {/* Descripción */}
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              {description}
            </p>

            {/* Estadísticas */}
            {stats.length > 0 && (
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-gold font-display font-bold text-2xl sm:text-3xl">
                      {stat.value}
                    </div>
                    <div className="text-white/60 text-xs uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* CTA Principal - Blanco */}
              <button
                onClick={onCtaPrimary}
                className="group bg-white text-forest font-display font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                <span>{primaryCtaText}</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* CTA Secundario - Ghost */}
              <button
                onClick={onCtaSecondary}
                className="group bg-transparent border-2 border-white/30 text-white font-display font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-white/10 hover:border-gold hover:text-gold transition-all flex items-center justify-center gap-2"
              >
                <Download size={18} />
                <span>{secondaryCtaText}</span>
              </button>
            </div>

            {/* Badges de confianza */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8">
              {displayBadges.slice(1).map((badge, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/10"
                >
                  {badge.icon && <badge.icon size={14} className="text-gold" />}
                  <span className="text-white/80 text-xs font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ============================================
          ONDA DECORATIVA INFERIOR
          ============================================ */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background-light dark:from-forest-dark to-transparent" />
    </section>
  );
}
