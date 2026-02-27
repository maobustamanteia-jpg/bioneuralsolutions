import { motion as Motion } from 'framer-motion'
import ScrollReveal from '../effects/ScrollReveal'
import Card from '../ui/Card'
import { CheckCircle, Leaf, Zap, Users, BookOpen, Shield, MessageCircle, Microscope, Coffee } from 'lucide-react'

const benefits = [
    {
      icon: CheckCircle,
      title: "Causas Reales",
      description: "Aprende qué realmente causa el amarillamiento (no lo que te dicen los vendedores)",
      color: "primary"
    },
    {
      icon: Leaf,
      title: "Técnicas Orgánicas",
      description: "Métodos 100% naturales sin químicos dañinos para tu salud y el medio ambiente",
      color: "accent"
    },
    {
      icon: Zap,
      title: "Recuperación Rápida",
      description: "Resultados visibles en 15-30 días con la aplicación correcta",
      color: "secondary"
    },
    {
      icon: Users,
      title: "Conéctate con Otros",
      description: "Forma parte de la comunidad de agricultores de Fresno y Tolima",
      color: "primary"
    },
    {
      icon: MessageCircle,
      title: "Preguntas y Respuestas en Vivo",
      description: "Sesión interactiva donde podrás resolver todas tus dudas con los expertos",
      color: "accent"
    },
    {
      icon: BookOpen,
      title: "Material Incluido",
      description: "Recibe guía completa en formato digital para aplicar en cualquier cultivo y ganadería",
      color: "secondary"
    },
    {
      icon: Shield,
      title: "Prevención Futura",
      description: "Aprende a prevenir que el problema se repita en futuras cosechas",
      color: "primary"
    },
    {
      icon: Coffee,
      title: "Refrigerio Incluido",
      description: "Disfruta de refrigerio durante el taller. Es una reunión de acercamiento",
      color: "accent"
    },
     {
      icon: Microscope,
      title: "Demostración Visual con Microscopio",
      description: "Llevaremos una planta de aguacate para mostrarte con microscopio cómo es la raíz y dónde parte el problema",
      color: "secondary"
    }
  ]


export default function Benefits() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-green-50 to-cream overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
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
              Lo que Aprenderás en el Taller
            </Motion.h2>
            <Motion.p
              className="text-base md:text-lg text-coffee/70 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              En 1h 30m - 2h, dominarás técnicas que puedes aplicar desde el primer día
            </Motion.p>
          </Motion.div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                >
                  <Card>
                    <div className="flex items-start gap-4 mb-4">
                      <Motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ 
                          delay: index * 0.15,
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{ 
                          scale: 1.2,
                          rotate: 10
                        }}
                        className={`p-3 rounded-xl bg-${benefit.color}/10`}
                      >
                        <Motion.div
                          animate={{ rotate: 360 }}
                          transition={{ 
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        >
                          <Icon className={`w-6 h-6 text-${benefit.color}`} />
                        </Motion.div>
                      </Motion.div>
                    </div>
                    <Motion.h3
                      className="text-xl font-bold text-coffee mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.2 }}
                    >
                      {benefit.title}
                    </Motion.h3>
                    <Motion.p
                      className="text-coffee/70 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                    >
                      {benefit.description}
                    </Motion.p>
                  </Card>
                </Motion.div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
