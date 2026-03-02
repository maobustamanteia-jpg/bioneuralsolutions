import React from 'react';
import { motion } from 'framer-motion';

/**
 * BenefitCard - Tarjeta de Beneficios Premium con estilo dorado
 * BioNeural Solutions
 * 
 * Variantes:
 * - "gold": Fondo dorado completo (default)
 * - "outline": Fondo oscuro con borde dorado
 * - "forest": Fondo verde bosque con acento dorado
 */

export default function BenefitCard({
  icon: Icon,             // Componente de icono (lucide-react)
  title,                  // Título del beneficio
  description,            // Descripción corta
  variant = "gold",       // Variante de estilo
  className = "",         // Clases adicionales
}) {
  
  const variants = {
    gold: {
      container: "bg-gradient-to-br from-gold to-gold-dark text-forest",
      icon: "text-forest",
      title: "text-forest",
      description: "text-forest/80",
      shadow: "shadow-gold-glow",
      hover: "hover:shadow-xl hover:-translate-y-1",
    },
    outline: {
      container: "bg-forest border-2 border-gold/50 text-white",
      icon: "text-gold",
      title: "text-gold",
      description: "text-white/80",
      shadow: "shadow-card",
      hover: "hover:border-gold hover:shadow-gold-glow/30 hover:-translate-y-1",
    },
    forest: {
      container: "bg-forest-dark text-white",
      icon: "text-gold",
      title: "text-white",
      description: "text-white/80",
      shadow: "shadow-card",
      hover: "hover:bg-forest hover:-translate-y-1",
    },
  };

  const style = variants[variant] || variants.gold;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative group ${className}`}
    >
      <div className={`
        ${style.container}
        ${style.shadow}
        ${style.hover}
        rounded-2xl p-6 sm:p-8
        transition-all duration-300
      `}>
        {/* Icono */}
        {Icon && (
          <div className={`${style.icon} mb-4`}>
            <Icon size={32} strokeWidth={1.5} />
          </div>
        )}

        {/* Título */}
        <h3 className={`font-display font-bold text-lg sm:text-xl mb-2 ${style.title}`}>
          {title}
        </h3>

        {/* Descripción */}
        <p className={`text-sm leading-relaxed ${style.description}`}>
          {description}
        </p>

        {/* Decoración de esquina */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <div className={`
            absolute -top-8 -right-8 w-16 h-16 
            bg-white/10 rotate-45
            group-hover:scale-150 transition-transform duration-500
          `} />
        </div>
      </div>
    </motion.div>
  );
}

/**
 * BenefitCardGrid - Grid de tarjetas de beneficios
 */
export function BenefitCardGrid({ children, columns = 3, className = "" }) {
  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${gridCols[columns] || gridCols[3]} gap-6 ${className}`}>
      {children}
    </div>
  );
}
