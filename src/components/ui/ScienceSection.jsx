import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Zap, Leaf } from 'lucide-react';

/**
 * ScienceSection - Sección "La Ciencia Detrás" Premium
 * BioNeural Solutions
 * 
 * Estructura: Título + Gráfico Central + 3 Cards apuntando al centro
 * Basado en el diseño del mockup de Sulphomax
 */

const defaultSciencePoints = [
  {
    icon: Atom,
    title: "Biotecnología",
    description: "Microorganismos nativos aislados y formulados con precisión científica.",
  },
  {
    icon: Zap,
    title: "Flujo de Energía",
    description: "Activa las defensas naturales de la planta (fitoalexinas) de forma natural.",
  },
  {
    icon: Leaf,
    title: "Nutrición Directa",
    description: "Aporta azufre y calcio para estructuras celulares más fuertes.",
  },
];

export default function ScienceSection({
  title = "La Ciencia Detrás",
  subtitle,
  points = defaultSciencePoints,
  centerImage,           // URL de imagen central (render 3D, molécula, etc.)
  className = "",
}) {
  
  return (
    <section className={`py-16 sm:py-24 bg-background-light dark:bg-forest-dark ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Título de la sección */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-forest dark:text-white mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Contenido: Gráfico central + Cards */}
        <div className="relative">
          
          {/* Gráfico Central */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="relative w-64 h-64 xl:w-80 xl:h-80">
              {/* Glow de fondo */}
              <div className="absolute inset-0 bg-gold/20 rounded-full blur-3xl animate-pulse-soft" />
              
              {/* Imagen central */}
              {centerImage ? (
                <img 
                  src={centerImage} 
                  alt="Ilustración científica"
                  className="relative w-full h-full object-contain drop-shadow-2xl"
                />
              ) : (
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Placeholder con patrón */}
                  <div className="w-40 h-40 xl:w-56 xl:h-56 rounded-full bg-gradient-to-br from-gold/30 to-bio-green/30 flex items-center justify-center backdrop-blur-sm border border-gold/20">
                    <Atom size={64} className="text-gold animate-float" />
                  </div>
                  
                  {/* Partículas decorativas */}
                  <div className="absolute top-4 left-4 w-3 h-3 bg-gold rounded-full animate-pulse" />
                  <div className="absolute bottom-8 right-8 w-2 h-2 bg-bio-green rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  <div className="absolute top-1/2 left-0 w-2 h-2 bg-gold rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
                </div>
              )}
            </div>
          </motion.div>

          {/* Cards de puntos científicos */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={`relative ${index === 1 ? 'lg:mt-0' : 'lg:mt-32'}`}
              >
                <ScienceCard 
                  icon={point.icon}
                  title={point.title}
                  description={point.description}
                  index={index}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * ScienceCard - Card individual de punto científico
 */
function ScienceCard({ icon: Icon, title, description, index }) {
  // Posición de la línea conectora según el índice
  const connectorPosition = {
    0: 'lg:right-0 lg:mr-8 lg:pr-8 lg:border-r-2 lg:border-gold/30',
    1: 'lg:left-1/2 lg:-translate-x-1/2',
    2: 'lg:left-0 lg:ml-8 lg:pl-8 lg:border-l-2 lg:border-gold/30',
  };

  return (
    <div className={`
      ${connectorPosition[index] || ''}
      relative group
    `}>
      <div className="bg-forest dark:bg-forest text-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
        {/* Icono */}
        {Icon && (
          <div className="text-gold mb-4">
            <Icon size={28} strokeWidth={1.5} />
          </div>
        )}

        {/* Título */}
        <h3 className="font-display font-bold text-lg mb-2 text-gold">
          {title}
        </h3>

        {/* Descripción */}
        <p className="text-white/80 text-sm leading-relaxed">
          {description}
        </p>

        {/* Indicador visual */}
        <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-gold text-xs font-bold">{index + 1}</span>
        </div>
      </div>
    </div>
  );
}
