import { useState } from 'react'
import {motion as Motion, AnimatePresence } from 'framer-motion'
import { X, Maximize, User } from 'lucide-react'
import ScrollReveal from '../effects/ScrollReveal'

export default function GaleriaInteractiva() {
  const [selectedImage, setSelectedImage] = useState(null)

  // Datos de ejemplo de agricultores con sus fotos
  const agricultores = [
    {
      id: 1,
      nombre: "Juan Pérez",
      vereda: "Vereda La Esperanza",
      imagen: "/images/farmer-juan.webp",
      imagenMobile: "/images/farmer-juan-mobile.webp",
      historia: "Recuperé mis 5 árboles en 21 días usando las técnicas del taller",
      antes: "Árboles amarillentos, hojas cayendo",
      despue: "Árboles verdes con aguacates grandes"
    },
    {
      id: 2,
      nombre: "María González",
      vereda: "Fresno Centro",
      imagen: "/images/farmer-maria.webp",
      imagenMobile: "/images/farmer-maria-mobile.webp",
      historia: "Después del taller, mi cosecha aumentó 40%",
      antes: "Cosecha pequeña, frutos deformados",
      despue: "Cosecha abundante, frutos de calidad premium"
    },
    {
      id: 3,
      nombre: "Carlos Rodríguez",
      vereda: "Vereda El Triunfo",
      imagen: "/images/farmer-carlos.webp",
      imagenMobile: "/images/farmer-carlos-mobile.webp",
      historia: "Ahora prevengo el amarillamiento antes de que empiece",
      antes: "Perdí 3 árboles el año anterior",
      despue: "Todos mis árboles saludables y productivos"
    },
    {
      id: 4,
      nombre: "Ana Martínez",
      vereda: "Vereda San José",
      imagen: "/images/farmer-ana.webp",
      imagenMobile: "/images/farmer-ana-mobile.webp",
      historia: "Las técnicas orgánicas son más económicas y efectivas",
      antes: "Gastaba mucho en químicos sin resultado",
      despue: "Uso métodos naturales, ahorro 60% en insumos"
    }
  ]

  return (
    <>
      <section className="py-12 md:py-20 bg-white overflow-hidden">
        {/* Background effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.02, 0.05, 0.02]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 md:mb-16"
            >
              <Motion.h2
                className="text-2xl md:text-4xl font-bold text-primary mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                Historias Reales de Agricultores
              </Motion.h2>
              <Motion.p
                className="text-base md:text-lg text-coffee/70 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Conoce a algunos de los más de 50 agricultores que ya están transformando sus cultivos
              </Motion.p>
            </Motion.div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {agricultores.map((agricultor, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ 
                    scale: 1.08, 
                    y: -10,
                    zIndex: 10
                  }}
                  onClick={() => setSelectedImage(agricultor)}
                  className="relative group cursor-pointer"
                >
                  <Motion.div
                    className="relative overflow-hidden rounded-xl shadow-lg"
                    whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                  >
                    {/* Image */}
                    <Motion.div
                      className="relative"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                       <img
                        src={agricultor.imagen}
                        srcSet={agricultor.imagenMobile ? `${agricultor.imagenMobile} 400w, ${agricultor.imagen} 800w` : agricultor.imagen}
                        sizes="400w"
                        alt={agricultor.nombre}
                        className="w-full h-48 md:h-64 object-cover"
                        loading="lazy"
                      />
                    </Motion.div>

                    {/* Overlay - Siempre visible en móvil */}
                    <Motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent md:bg-gradient-to-t md:from-black/60"
                      initial={{ opacity: 0.6 }}
                      whileHover={{ opacity: 0.8 }}
                    >
                      <Motion.div
                        className="absolute bottom-3 left-3 right-3"
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        <div className="flex items-center gap-2 text-white">
                          <Motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          >
                            <User className="w-4 h-4 md:w-5 md:h-5" />
                          </Motion.div>
                          <span className="font-semibold text-sm md:text-base">{agricultor.nombre}</span>
                        </div>
                        <p className="text-xs md:text-sm text-white/90 mt-1">{agricultor.vereda}</p>
                      </Motion.div>
                    </Motion.div>

                    {/* Zoom Icon - Siempre visible */}
                    <Motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileHover={{ scale: 1, rotate: 0 }}
                      className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg"
                    >
                      <Motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Maximize className="w-5 h-5 text-primary" />
                      </Motion.div>
                    </Motion.div>
                  </Motion.div>
                </Motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modal para ver detalles */}
      <AnimatePresence>
        {selectedImage && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-end md:items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <Motion.div
              initial={{ scale: 0.9, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 100 }}
              transition={{ duration: 0.4, type: "spring" }}
              className="bg-white rounded-t-3xl md:rounded-2xl w-full max-w-4xl max-h-[95vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Motion.div
                className="flex flex-col h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {/* Header */}
                <div className="flex items-center justify-between p-4 md:p-6 border-b">
                  <Motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-primary">{selectedImage.nombre}</h3>
                    <p className="text-coffee/70 text-sm">{selectedImage.vereda}</p>
                  </Motion.div>
                  <Motion.button
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedImage(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-coffee" />
                  </Motion.button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-4 md:p-6">
                  <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                    <Motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                       <Motion.img
                        src={selectedImage.imagen}
                        srcSet={selectedImage.imagenMobile ? `${selectedImage.imagenMobile} 400w, ${selectedImage.imagen} 800w` : selectedImage.imagen}
                        sizes="800w"
                        alt={selectedImage.nombre}
                        className="w-full rounded-xl shadow-lg"
                        whileHover={{ scale: 1.02 }}
                      />
                    </Motion.div>

                    <div className="space-y-4 md:space-y-6">
                      <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <h4 className="text-base md:text-lg font-semibold text-primary mb-2">
                          Historia
                        </h4>
                        <p className="text-coffee leading-relaxed text-sm md:text-base">
                          {selectedImage.historia}
                        </p>
                      </Motion.div>

                      <div className="space-y-3 md:space-y-4">
                        <Motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 }}
                          className="bg-red-50 p-3 md:p-4 rounded-xl"
                          whileHover={{ scale: 1.02 }}
                        >
                          <h5 className="font-semibold text-red-600 mb-2 flex items-center gap-2 text-sm md:text-base">
                            😞 Antes
                          </h5>
                          <p className="text-coffee text-sm md:text-base">{selectedImage.antes}</p>
                        </Motion.div>

                        <Motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 }}
                          className="bg-green-50 p-3 md:p-4 rounded-xl"
                          whileHover={{ scale: 1.02 }}
                        >
                          <h5 className="font-semibold text-green-600 mb-2 flex items-center gap-2 text-sm md:text-base">
                            😊 Después
                          </h5>
                          <p className="text-coffee text-sm md:text-base">{selectedImage.despues}</p>
                        </Motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </Motion.div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
