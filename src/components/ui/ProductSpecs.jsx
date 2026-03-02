import React from 'react';
import { motion } from 'framer-motion';
import { Package, Droplets, FlaskConical, Ruler } from 'lucide-react';

/**
 * ProductSpecs - Tabla de Especificaciones Técnicas Premium
 * BioNeural Solutions
 * 
 * Estructura: Imagen producto + Tabla de especificaciones
 * Diseño limpio y profesional
 */

const defaultSpecs = [
  { label: "Contenedor", value: "Garrafa 20L", icon: Package },
  { label: "Especificaciones", value: "Alta pureza", icon: FlaskConical },
  { label: "Presentación", value: "20 Litros", icon: Droplets },
  { label: "Ingrediente Activo", value: "Polisulfuro de Potasio", icon: Ruler },
];

export default function ProductSpecs({
  title,                  // Título del producto (ej: "SULPHOMAX - 20L")
  specs = defaultSpecs,   // Array de especificaciones
  productImage,           // URL de la imagen del producto
  className = "",
}) {
  
  return (
    <section className={`py-12 sm:py-16 ${className}`}>
      <div className="max-w-5xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-forest-dark rounded-3xl shadow-card overflow-hidden border border-gray-100 dark:border-white/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            
            {/* Imagen del producto */}
            {productImage && (
              <div className="relative bg-gradient-to-br from-gray-50 to-white dark:from-forest dark:to-forest-dark p-8 flex items-center justify-center">
                <motion.img 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  src={productImage} 
                  alt={title}
                  className="max-h-64 lg:max-h-80 object-contain drop-shadow-xl"
                />
              </div>
            )}

            {/* Especificaciones */}
            <div className="p-6 sm:p-8 lg:p-10">
              {/* Título */}
              {title && (
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-forest dark:text-white mb-6">
                  {title}
                </h3>
              )}

              {/* Tabla de especificaciones */}
              <div className="space-y-4">
                {specs.map((spec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 py-3 border-b border-gray-100 dark:border-white/10 last:border-b-0"
                  >
                    {/* Icono */}
                    {spec.icon && (
                      <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                        <spec.icon size={18} className="text-gold" />
                      </div>
                    )}

                    {/* Label */}
                    <span className="text-sm text-gray-500 dark:text-white/60 font-medium min-w-[120px]">
                      {spec.label}
                    </span>

                    {/* Valor */}
                    <span className="text-sm font-semibold text-forest dark:text-white flex-1">
                      {spec.value}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Nota adicional */}
              <div className="mt-6 p-4 bg-gold/5 rounded-xl border border-gold/20">
                <p className="text-xs text-gray-600 dark:text-white/70">
                  <span className="text-gold font-semibold">Nota:</span> Las especificaciones pueden variar según el lote de producción. Consulte la ficha técnica oficial para información detallada.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/**
 * ProductSpecsCompact - Versión compacta para móvil
 */
export function ProductSpecsCompact({ specs = defaultSpecs, className = "" }) {
  return (
    <div className={`bg-white dark:bg-forest-dark rounded-2xl p-4 shadow-card ${className}`}>
      <div className="grid grid-cols-2 gap-3">
        {specs.map((spec, index) => (
          <div key={index} className="text-center p-3 bg-gray-50 dark:bg-forest rounded-xl">
            {spec.icon && (
              <spec.icon size={20} className="mx-auto text-gold mb-2" />
            )}
            <div className="text-[10px] text-gray-500 dark:text-white/60 uppercase tracking-wider mb-1">
              {spec.label}
            </div>
            <div className="text-sm font-semibold text-forest dark:text-white">
              {spec.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
