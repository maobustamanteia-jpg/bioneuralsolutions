import { motion as Motion } from 'framer-motion'
import ScrollReveal from '../effects/ScrollReveal'
import Card from '../ui/Card'

export default function CuentaRegresiva() {
  const antesItems = [
    "Hojas amarillas y cayendo",
    "Ramas secas y quebradizas",
    "Frutos pequeños y deformados",
    "Árbol debilitado",
    "Pérdida de cosecha",
    "Altos costos de tratamientos"
  ]

  const despuesItems = [
    "Hojas verdes y saludables",
    "Ramas fuertes y vigorosas",
    "Frutos grandes y de calidad",
    "Árbol robusto y productivo",
    "Cosecha abundante",
    "Menor costo de inversión"
  ]

  return (
    <section className="py-12 md:py-20 bg-cream overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 md:mb-16"
          >
            <Motion.h2
              className="text-2xl md:text-4xl font-bold text-primary mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Transforma tu Cultivo
            </Motion.h2>
            <Motion.p
              className="text-base md:text-lg text-coffee/70 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Mira la diferencia real que lograron agricultores de la zona con nuestras técnicas orgánicas
            </Motion.p>
          </Motion.div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* ANTES */}
          <ScrollReveal delay={0.2}>
            <Motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <Motion.div
                className="flex items-center gap-3 mb-4 md:mb-6"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-100 flex items-center justify-center"
                >
                  <span className="text-xl md:text-2xl">😞</span>
                </Motion.div>
                <Motion.h3
                  className="text-xl md:text-2xl font-bold text-red-600"
                  animate={{ 
                    textShadow: [
                      "0 0 0px rgba(220, 38, 38, 0)",
                      "0 0 10px rgba(220, 38, 38, 0.3)",
                      "0 0 0px rgba(220, 38, 38, 0)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  ANTES
                </Motion.h3>
              </Motion.div>

              <Motion.div
                className="border-l-4 border-red-400 bg-white rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                whileHover={{ 
                  boxShadow: "0 20px 40px rgba(220, 38, 38, 0.2)"
                }}
              >
                <ul className="space-y-2 md:space-y-3">
                  {antesItems.map((item, index) => (
                    <Motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-2 md:gap-3"
                    >
                      <Motion.span
                        className="text-red-400 mt-0.5 md:mt-1 text-sm md:text-base"
                        animate={{ rotate: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      >
                        ✗
                      </Motion.span>
                      <span className="text-coffee text-sm md:text-base">{item}</span>
                    </Motion.li>
                  ))}
                </ul>
              </Motion.div>
            </Motion.div>
          </ScrollReveal>

          {/* DESPUÉS */}
          <ScrollReveal delay={0.4}>
            <Motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <Motion.div
                className="flex items-center gap-3 mb-4 md:mb-6"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-100 flex items-center justify-center"
                >
                  <span className="text-xl md:text-2xl">😊</span>
                </Motion.div>
                <Motion.h3
                  className="text-xl md:text-2xl font-bold text-green-600"
                  animate={{ 
                    textShadow: [
                      "0 0 0px rgba(22, 163, 74, 0)",
                      "0 0 15px rgba(22, 163, 74, 0.5)",
                      "0 0 0px rgba(22, 163, 74, 0)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  DESPUÉS
                </Motion.h3>
              </Motion.div>

              <Motion.div
                className="border-l-4 border-green-500 bg-white rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                whileHover={{ 
                  boxShadow: "0 20px 40px rgba(22, 163, 74, 0.3)"
                }}
              >
                <ul className="space-y-2 md:space-y-3">
                  {despuesItems.map((item, index) => (
                    <Motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-2 md:gap-3"
                    >
                      <Motion.span
                        className="text-green-500 mt-0.5 md:mt-1 text-sm md:text-base"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      >
                        ✓
                      </Motion.span>
                      <span className="text-coffee text-sm md:text-base">{item}</span>
                    </Motion.li>
                  ))}
                </ul>
              </Motion.div>
            </Motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
