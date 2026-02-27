import { motion as Motion } from 'framer-motion'
import ScrollReveal from '../effects/ScrollReveal'
import { Award, Download, Share2 } from 'lucide-react'

export default function CertificadoDigital() {
  return (
    <section className="py-20 bg-gradient-to-b from-cream to-green-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Lo que Recibirás al Asistir
            </h2>
            <p className="text-lg text-coffee/70 max-w-2xl mx-auto">
              Además de todo el conocimiento, te llevas un certificado oficial que puedes compartir
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left - Certificado Preview */}
          <ScrollReveal delay={0.2}>
            <div className="relative">
              <Motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-primary/20"
              >
                <img
                  src="/images/certificate.webp"
                  alt="Certificado de taller"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </Motion.div>

              {/* Decorative Elements */}
              <Motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -right-6 w-16 h-16 bg-accent/20 rounded-full"
              />
            </div>
          </ScrollReveal>

          {/* Right - Info */}
          <ScrollReveal delay={0.4}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Beneficios del Certificado
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-coffee mb-1">
                      Profesional
                    </h4>
                    <p className="text-coffee/70 text-sm">
                      Certificado oficial que demuestra tu capacitación
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Share2 className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-coffee mb-1">
                      Compartible
                    </h4>
                    <p className="text-coffee/70 text-sm">
                      Compártelo en redes sociales y con otros agricultores
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Download className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-coffee mb-1">
                      Digital
                    </h4>
                    <p className="text-coffee/70 text-sm">
                      Recibe tu certificado digital en formato PDF de alta calidad
                    </p>
                  </div>
                </div>
              </div>

              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 p-6 bg-white rounded-xl shadow-sm border-l-4 border-primary"
              >
                <p className="text-coffee text-sm italic">
                  "El certificado es una prueba tangible de tu compromiso con la mejora continua y la agricultura sostenible."
                </p>
              </Motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
