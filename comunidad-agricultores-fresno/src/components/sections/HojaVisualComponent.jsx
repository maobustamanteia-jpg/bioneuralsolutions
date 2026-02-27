import { motion as Motion } from 'framer-motion'
import ScrollReveal from '../effects/ScrollReveal'
import { Eye, Leaf } from 'lucide-react'

export default function HojaVisual() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <Motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full mb-6"
            >
              <Eye className="w-5 h-5" />
              <span className="font-semibold">Visualiza el Problema</span>
            </Motion.div>

            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
              Compara: Hojas Amarillas vs Hojas Verdes
            </h2>
            <p className="text-base md:text-lg text-coffee/70 max-w-3xl mx-auto">
              Mira la diferencia visible en los árboles afectados por amarillamiento
            </p>
          </Motion.div>
        </ScrollReveal>

        {/* Comparación Visual */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* ANTES - Hojas Amarillas */}
          <ScrollReveal delay={0.2}>
            <Motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative group"
            >
              {/* Badge */}
              <Motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="absolute -top-4 -right-4 z-10 bg-red-500 text-white px-4 py-2 rounded-full shadow-lg"
              >
                <span className="font-bold text-sm md:text-base">ANTES</span>
              </Motion.div>

              {/* Image */}
              <Motion.div
                className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-red-300"
                whileHover={{ borderColor: 'rgba(220, 38, 38, 0.5)' }}
              >
                <img
                  src="/images/leaves-yellow.webp"
                  srcSet="/images/leaves-yellow-mobile.webp 400w, /images/leaves-yellow.webp 800w"
                  sizes="(max-width: 640px) 400px, 800px"
                  alt="Hojas amarillas de aguacate"
                  className="w-full h-auto"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm md:text-base font-semibold">
                      Árboles afectados
                    </p>
                    <p className="text-white/80 text-xs md:text-sm">
                      Amarillamiento visible
                    </p>
                  </div>
                </div>

                {/* Warning Icon */}
                <Motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-4 left-4 bg-red-500 text-white rounded-full p-3 shadow-lg"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Leaf className="w-6 h-6 md:w-8 md:h-8" />
                </Motion.div>
              </Motion.div>

              {/* Caption */}
              <Motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-center mt-4 text-red-600 font-semibold text-base md:text-lg"
              >
                Hojas amarillas y débiles
              </Motion.p>
            </Motion.div>
          </ScrollReveal>

          {/* DESPUÉS - Hojas Verdes */}
          <ScrollReveal delay={0.4}>
            <Motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative group"
            >
              {/* Badge */}
              <Motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="absolute -top-4 -right-4 z-10 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg"
              >
                <span className="font-bold text-sm md:text-base">DESPUÉS</span>
              </Motion.div>

              {/* Image */}
              <Motion.div
                className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-green-300"
                whileHover={{ borderColor: 'rgba(22, 163, 74, 0.5)' }}
              >
                <img
                  src="/images/leaves-green.webp"
                  srcSet="/images/leaves-green-mobile.webp 400w, /images/leaves-green.webp 800w"
                  sizes="(max-width: 640px) 400px, 800px"
                  alt="Hojas verdes de aguacate"
                  className="w-full h-auto"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm md:text-base font-semibold">
                      Árboles recuperados
                    </p>
                    <p className="text-white/80 text-xs md:text-sm">
                      Tratamientos aplicados
                    </p>
                  </div>
                </div>

                {/* Success Icon */}
                <Motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.7 }}
                  className="absolute top-4 left-4 bg-green-500 text-white rounded-full p-3 shadow-lg"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.15, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Leaf className="w-6 h-6 md:w-8 md:h-8" />
                </Motion.div>
              </Motion.div>

              {/* Caption */}
              <Motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-center mt-4 text-green-600 font-semibold text-base md:text-lg"
              >
                Hojas verdes y saludables
              </Motion.p>
            </Motion.div>
          </ScrollReveal>
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.6}>
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-center mt-12 md:mt-16"
          >
            <Motion.div
              animate={{
                y: [0, -10, 0],
                opacity: [1, 0.7, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="bg-gradient-to-r from-green-50 to-white p-6 md:p-8 rounded-2xl border-2 border-green-200 max-w-2xl mx-auto shadow-lg"
            >
              <p className="text-lg md:text-xl font-bold text-primary mb-2">
                ¿Quieres transformar tus árboles?
              </p>
              <p className="text-coffee/70 text-sm md:text-base">
                Únete al taller y aprende las técnicas para recuperarlo.
              </p>
              <Motion.div
                className="mt-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Motion.a
                  href="#registro"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors shadow-lg"
                  whileHover={{ boxShadow: "0 10px 30px rgba(27, 67, 50, 0.3)" }}
                >
                  <span>Reservar mi cupo GRATIS</span>
                  <Leaf className="w-5 h-5" />
                </Motion.a>
              </Motion.div>
            </Motion.div>
          </Motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
