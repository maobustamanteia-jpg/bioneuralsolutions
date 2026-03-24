import { motion as Motion } from 'framer-motion'
import { Calendar, MapPin, Sprout, Leaf } from 'lucide-react'
import Button from '../ui/Button'
import ScrollReveal from '../effects/ScrollReveal'
import ParticleBackground from '../effects/ParticleBackground'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-cream via-green-50 to-accent/10 overflow-hidden pb-20 md:pb-0">
      {/* Partículas animadas */}
      <ParticleBackground />

      {/* Decorative elements - Siempre visible */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        />
        <Motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl"
        />
        <Motion.div
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-primary/10 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* Left Content */}
          <Motion.div variants={itemVariants} className="order-2 md:order-1">
            <div className="space-y-6 md:space-y-8">
              {/* Badge */}
              <Motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="badge badge-accent inline-flex items-center gap-2 text-xs md:text-sm"
              >
                <Motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Leaf className="w-4 h-4" />
                </Motion.div>
                <span>100% Orgánico y Natural</span>
              </Motion.div>

              {/* Title */}
              <Motion.h1
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                ¿Tus Árboles de Aguacate se Están Amarillando y Muriendo?
              </Motion.h1>

              {/* Subtitle */}
              <Motion.p
                className="text-lg md:text-xl text-coffee/80 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Aprende técnicas probadas para recuperar tus cultivos. Aplicable a cualquier cultivo y ganadería. Únete a la comunidad de agricultores de Fresno, Tolima.
              </Motion.p>

              {/* CTA Buttons */}
              <Motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <Button variant="primary" size="lg" className="w-full sm:w-auto">
                    Reservar mi cupo GRATIS
                  </Button>
                </Motion.div>
              </Motion.div>

              {/* Info Pills - Responsive */}
              <Motion.div
                className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 text-xs md:text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {[
                  { icon: Calendar, text: "3 de Marzo, 2026" },
                  { icon: MapPin, text: "Fresno, Tolima" },
                  { icon: Sprout, text: "1h 30m - 2h • 30 cupos" }
                ].map((item, index) => (
                  <Motion.div
                    key={index}
                    className="flex items-center gap-2 text-coffee/70 bg-white/50 p-3 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.8)" }}
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                    <span>{item.text}</span>
                  </Motion.div>
                ))}
              </Motion.div>
            </div>
          </Motion.div>

          {/* Right Content - Hero Image */}
          <Motion.div variants={itemVariants} className="relative order-1 md:order-2">
            <div className="relative">
              {/* Main Image with Reveal */}
              <ScrollReveal>
                <div className="image-reveal rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/biocultivo-hero-image.webp"
                    srcSet="/images/biocultivo-hero-image-mobile.webp 800w, /images/biocultivo-hero-image.webp 1200w"
                    sizes="(max-width: 640px) 800px, 1200px"
                    alt="Agricultor con aguacates saludables"
                    className="w-full h-auto"
                    loading="lazy"
                    width="1200"
                    height="800"
                  />
                </div>
              </ScrollReveal>

              {/* Floating Elements */}
              <Motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.1 }}
                className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <Motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sprout className="w-6 h-6 text-accent" />
                  </Motion.div>
                  <span className="font-semibold text-sm">30+ Agricultores</span>
                </div>
              </Motion.div>
            </div>
          </Motion.div>
        </Motion.div>
      </div>

      {/* Animated Bottom Wave */}
      <Motion.div
        className="absolute bottom-0 left-0 right-0"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, duration: 1, type: "spring" }}
      >
        <svg viewBox="0 0 1440 320" className="w-full">
          <Motion.path
            fill="#FEFAE0"
            d="M0,96L48,64L96,32L144,0V320H0V96Z"
            transform="scale(10, 1)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
          />
        </svg>
      </Motion.div>
    </section>
  )
}
