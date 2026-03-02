import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, Zap, Leaf, Droplets, 
  MessageCircle, ShoppingBag, ArrowRight,
  Package, FlaskConical, CheckCircle
} from 'lucide-react';
import { PremiumHero } from '../../components/ui';
import { BenefitCard, BenefitCardGrid } from '../../components/ui';
import { ScienceSection } from '../../components/ui';
import { ProductSpecs } from '../../components/ui';

/**
 * Sulfomax Landing Page - Premium Redesign
 * BioNeural Solutions
 * 
 * Diseño basado en el mockup: Verde Bosque + Dorado
 * Secciones: Hero Premium + Beneficios + Ciencia + Especificaciones
 */

export default function SulfomaxLanding() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Especificaciones técnicas de Sulphomax
  const productSpecs = [
    { label: "Contenedor", value: "Garrafa 20 Litros", icon: Package },
    { label: "Especificaciones", value: "Alta pureza - Grado Agrícola", icon: FlaskConical },
    { label: "Ingrediente Activo", value: "Polisulfuro de Potasio", icon: Droplets },
    { label: "Presentación", value: "20L / 1L", icon: Package },
  ];

  // Puntos científicos
  const sciencePoints = [
    {
      icon: FlaskConical,
      title: "Biotecnología",
      description: "Formulación basada en polisulfuro de potasio, un compuesto natural con acción dual: protege y nutre.",
    },
    {
      icon: Zap,
      title: "Flujo de Energía",
      description: "Activa las fitoalexinas — las defensas naturales que tu cultivo ya tiene pero no está usando al máximo.",
    },
    {
      icon: Leaf,
      title: "Nutrición Directa",
      description: "Aporta azufre y calcio para paredes celulares más fuertes. Menos daño mecánico. Mejor calidad en cosecha.",
    },
  ];

  // Estadísticas del producto
  const productStats = [
    { value: "50+", label: "Hongos controlados" },
    { value: "24h", label: "Acción visible" },
    { value: "0", label: "Residuos en cosecha" },
  ];

  return (
    <div className="min-h-screen bg-background-light">
      
      {/* ============================================
          HERO PREMIUM - Usando el componente
          ============================================ */}
      <PremiumHero
        productName="SULPHOMAX™"
        tagline="Caldo Sulfocálcico Premium"
        description="Un solo producto. Mata ácaros, bloquea hongos, y fortalece la defensa natural de tu cultivo. Sin residuos. Sin resistencia generada. 100% orgánico."
        stats={productStats}
        badges={[
          { text: "100% Orgánico" },
          { text: "Sin Residuos" },
          { text: "Hecho en Colombia" },
        ]}
        ctaPrimary="Solicitar Cotización"
        ctaSecondary="Ficha Técnica"
        onCtaPrimary={() => navigate('/contacto')}
        onCtaSecondary={() => window.open('https://wa.me/573203062007', '_blank')}
      />

      {/* ============================================
          BENEFICIOS - Triple Acción
          ============================================ */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Título */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-forest dark:text-white mb-4">
              Triple Acción Biológica
            </h2>
            <p className="text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
              Sulphomax no solo mata plagas. Activa las defensas de la planta y la nutre al mismo tiempo.
            </p>
          </motion.div>

          {/* Cards de beneficios */}
          <BenefitCardGrid columns={3}>
            <BenefitCard
              icon={ShieldCheck}
              title="Acaricida y Fungicida"
              description="Acción de contacto letal contra arañita roja, ácaros y más de 50 hongos patógenos. Sin generar resistencia."
              variant="gold"
            />
            <BenefitCard
              icon={Zap}
              title="Activa Fitoalexinas"
              description="La planta aprende a defenderse sola. El azufre actúa como precursor de proteínas de defensa."
              variant="outline"
            />
            <BenefitCard
              icon={Leaf}
              title="Fortalece la Planta"
              description="Calcio y silicio endurecen hojas, tallos y frutos. Menos daño mecánico, mejor calidad en cosecha."
              variant="gold"
            />
          </BenefitCardGrid>
        </div>
      </section>

      {/* ============================================
          LA CIENCIA DETRÁS DE SULPHOMAX
          ============================================ */}
      <ScienceSection
        title="¿Por qué funciona Sulphomax cuando otros fallan?"
        subtitle="El secreto está en el mecanismo de acción físico, no químico. Las plagas no pueden generar resistencia."
        points={sciencePoints}
      />

      {/* ============================================
          DOSIFICACIÓN
          ============================================ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-forest rounded-3xl overflow-hidden shadow-xl"
          >
            <div className="p-8 sm:p-12">
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <Droplets size={28} className="text-gold" />
                <h3 className="font-display font-bold text-2xl text-white">
                  Dosificación por Bomba de 20L
                </h3>
              </div>

              {/* Tabla de dosificación */}
              <div className="space-y-4">
                {/* Prevención */}
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-white mb-1">Prevención / Infestación Leve</h4>
                      <p className="text-white/60 text-sm">Roya, oídio, arañita leve</p>
                    </div>
                    <div className="text-right">
                      <div className="text-gold font-display font-bold text-2xl">6 cc/L</div>
                      <div className="text-white/60 text-xs">(120 cc total)</div>
                    </div>
                  </div>
                </div>

                {/* Alta infestación */}
                <div className="bg-gold/20 rounded-2xl p-6 backdrop-blur-sm border border-gold/30">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-white mb-1">Infestación Alta</h4>
                      <p className="text-white/70 text-sm">Arañita activa, hongos avanzados</p>
                    </div>
                    <div className="text-right">
                      <div className="text-gold font-display font-bold text-2xl">15 cc/L</div>
                      <div className="text-white/60 text-xs">(300 cc total)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notas importantes */}
              <div className="mt-8 space-y-3">
                <div className="flex items-start gap-3 text-white/80 text-sm">
                  <CheckCircle size={18} className="text-gold shrink-0 mt-0.5" />
                  <span>Aplicar al amanecer o atardecer. Evitar sol directo.</span>
                </div>
                <div className="flex items-start gap-3 text-white/80 text-sm">
                  <CheckCircle size={18} className="text-gold shrink-0 mt-0.5" />
                  <span>No mezclar con productos cobrizos o ácidos sin prueba previa.</span>
                </div>
                <div className="flex items-start gap-3 text-white/80 text-sm">
                  <CheckCircle size={18} className="text-gold shrink-0 mt-0.5" />
                  <span>Intervalo entre aplicaciones: 7-10 días.</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          ESPECIFICACIONES TÉCNICAS
          ============================================ */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-forest-dark">
        <div className="max-w-6xl mx-auto">
          <ProductSpecs
            title="SULPHOMAX - 20 Litros"
            specs={productSpecs}
          />
        </div>
      </section>

      {/* ============================================
          CTA FINAL
          ============================================ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-forest dark:text-white mb-4">
              ¿Listo para probar Sulphomax?
            </h2>
            <p className="text-gray-600 dark:text-white/70 mb-8 max-w-xl mx-auto">
              Únete a más de 50 agricultores en Fresno que ya recuperaron sus cultivos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/contacto')}
                className="bg-gold hover:bg-gold-dark text-forest font-display font-bold px-8 py-4 rounded-xl transition-all shadow-gold-glow hover:shadow-lg flex items-center justify-center gap-2"
              >
                <ShoppingBag size={20} />
                <span>Solicitar Cotización</span>
              </button>
              <button
                onClick={() => window.open('https://wa.me/573203062007?text=Hola,%20quiero%20información%20sobre%20Sulphomax', '_blank')}
                className="bg-forest hover:bg-forest-dark text-white font-display font-semibold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          STICKY CTA (MÓVIL)
          ============================================ */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-forest-dark border-t border-gray-200 dark:border-white/10 p-4 pb-6 sm:pb-4 z-50 sm:hidden shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="flex gap-3">
          <button
            onClick={() => window.open('https://wa.me/573203062007?text=Hola,%20quiero%20información%20sobre%20Sulphomax', '_blank')}
            className="flex-1 bg-forest text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <MessageCircle size={18} />
            <span>WhatsApp</span>
          </button>
          <button
            onClick={() => navigate('/contacto')}
            className="flex-[1.5] bg-gold text-forest font-bold py-4 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-gold-glow"
          >
            <ShoppingBag size={18} />
            <span>Cotizar Ahora</span>
          </button>
        </div>
      </div>
    </div>
  );
}
