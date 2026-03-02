import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Leaf, ShieldCheck, Zap, Droplets, 
  Camera, Brain, FileText, ArrowRight,
  ChevronRight, Users, MapPin
} from 'lucide-react';
import { products, companyInfo } from '../data/products';
import { BenefitCard, BenefitCardGrid } from '../components/ui';

/**
 * Home Premium - BioNeural Solutions
 * Nueva identidad: Verde Bosque + Dorado Premium
 * "Biotecnología nacida en los Andes. Formulada para el campo colombiano."
 */

export default function Home() {
  // Producto destacado: Sulphomax
  const featuredProduct = products.find(p => p.shortName === "CS") || products[3];
  
  // Productos de la línea MAX (Kits)
  const kitProducts = products.filter(p => p.category === "Kits");

  return (
    <div className="min-h-screen">
      {/* ============================================
          HERO PREMIUM - Verde Bosque con energía
          ============================================ */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-forest">
        {/* Fondo con efectos */}
        <div className="absolute inset-0">
          {/* Gradiente base */}
          <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest to-forest-dark" />
          
          {/* Efectos de energía */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[150px] animate-pulse-soft" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-bio-green/10 rounded-full blur-[100px] animate-pulse-soft" style={{ animationDelay: '2s' }} />
          
          {/* Patrón técnico */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'radial-gradient(circle, rgba(212, 175, 55, 0.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Contenido */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Columna izquierda: Info */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Badge superior */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-gold/30">
                <span className="text-gold text-xs font-bold uppercase tracking-wider">
                  Biotecnología Agrícola Premium
                </span>
              </div>

              {/* Título principal */}
              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-4 tracking-tight">
                Biotecnología
                <span className="text-gold block">nacida en los Andes</span>
              </h1>

              {/* Subtítulo */}
              <p className="text-white/80 text-lg sm:text-xl mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Bioinsumos bioracionales para el control de hongos, ácaros y nutrición vegetal. 
                Formulados con precisión científica en Fresno, Tolima.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/agronomo"
                  className="group bg-gold hover:bg-gold-dark text-forest font-display font-bold px-8 py-4 rounded-xl shadow-gold-glow hover:shadow-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Brain size={20} />
                  <span>Diagnóstico IA Gratuito</span>
                </Link>

                <Link
                  to="/productos"
                  className="group bg-transparent border-2 border-white/30 text-white font-display font-semibold px-8 py-4 rounded-xl hover:bg-white/10 hover:border-gold hover:text-gold transition-all flex items-center justify-center gap-2"
                >
                  <span>Ver Productos</span>
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-10">
                <div className="text-center">
                  <div className="text-gold font-display font-bold text-3xl">50+</div>
                  <div className="text-white/60 text-xs uppercase tracking-wider">Agricultores</div>
                </div>
                <div className="text-center">
                  <div className="text-gold font-display font-bold text-3xl">10+</div>
                  <div className="text-white/60 text-xs uppercase tracking-wider">Productos</div>
                </div>
                <div className="text-center">
                  <div className="text-gold font-display font-bold text-3xl">100%</div>
                  <div className="text-white/60 text-xs uppercase tracking-wider">Orgánico</div>
                </div>
              </div>
            </motion.div>

            {/* Columna derecha: Logo/Imagen */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative">
                {/* Glow */}
                <div className="absolute inset-0 bg-gold/20 rounded-full blur-3xl scale-150 animate-pulse-soft" />
                
                {/* Logo container */}
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
                  <img 
                    src="/logo.png" 
                    alt="BioNeural Solutions"
                    className="w-64 h-64 object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Onda decorativa inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-light to-transparent" />
      </section>

      {/* ============================================
          BENEFICIOS PREMIUM - Tarjetas Doradas
          ============================================ */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Título */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-forest dark:text-white mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
              Biotecnología que funciona. Sin químicos sintéticos. Con respaldo científico.
            </p>
          </motion.div>

          {/* Tarjetas de beneficios */}
          <BenefitCardGrid columns={4}>
            <BenefitCard
              icon={Leaf}
              title="100% Orgánico"
              description="Sin residuos en cosecha. Aprobado para agricultura ecológica y mercados premium."
              variant="gold"
            />
            <BenefitCard
              icon={Zap}
              title="Acción Rápida"
              description="Resultados visibles en 24-48 horas. Control de plagas por contacto."
              variant="outline"
            />
            <BenefitCard
              icon={ShieldCheck}
              title="Sin Resistencia"
              description="Mecanismo físico, no químico. Las plagas no generan resistencia."
              variant="gold"
            />
            <BenefitCard
              icon={Droplets}
              title="Nutrición Integral"
              description="No solo protege, alimenta. Calcio y azufre para cultivos más fuertes."
              variant="outline"
            />
          </BenefitCardGrid>
        </div>
      </section>

      {/* ============================================
          CÓMO FUNCIONA - Agrónomo IA
          ============================================ */}
      <section className="py-16 sm:py-24 bg-background-light dark:bg-forest-dark px-4">
        <div className="max-w-4xl mx-auto">
          {/* Título */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-forest dark:text-white mb-4">
              Tu Agrónomo Digital
            </h2>
            <p className="text-gold text-sm uppercase tracking-widest font-semibold">
              3 Pasos para salvar tu cosecha
            </p>
          </motion.div>

          {/* Pasos */}
          <div className="space-y-8">
            {[
              { icon: Camera, title: "Toma una Foto", desc: "Captura la hoja o tallo afectado con tu celular.", step: 1 },
              { icon: Brain, title: "Análisis Bio-Neural", desc: "Nuestra IA identifica el problema fitosanitario en segundos.", step: 2 },
              { icon: FileText, title: "Recibe tu Receta", desc: "Obtén la recomendación exacta de productos BioNeural.", step: 3 },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex items-start gap-6 group"
              >
                {/* Número */}
                <div className="w-14 h-14 rounded-2xl bg-forest text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-lg shadow-forest/30 group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                
                {/* Contenido */}
                <div className="flex-1 pt-2">
                  <h3 className="font-display font-bold text-xl text-forest dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-white/70">
                    {item.desc}
                  </p>
                </div>

                {/* Icono */}
                <item.icon size={32} className="text-gold opacity-30 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Link
              to="/agronomo"
              className="w-full bg-forest hover:bg-forest-dark text-white font-display font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-forest/30 hover:shadow-forest-glow"
            >
              <Brain size={24} />
              <span>Probar Diagnóstico Ahora</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          PRODUCTOS DESTACADOS
          ============================================ */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="font-display font-bold text-3xl text-forest dark:text-white mb-2">
                Nuestros Productos
              </h2>
              <p className="text-gray-500 text-sm uppercase tracking-widest">
                Línea Premium BioNeural
              </p>
            </div>
            <Link 
              to="/productos" 
              className="hidden sm:flex items-center gap-2 text-gold hover:text-gold-dark font-bold text-sm uppercase tracking-wide transition-colors"
            >
              Ver todos <ChevronRight size={18} />
            </Link>
          </div>

          {/* Grid de productos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 6).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link 
                  to={`/producto/${product.shortName.toLowerCase()}`}
                  className="block bg-white dark:bg-forest rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all border border-gray-100 dark:border-white/10 hover:border-gold/50"
                >
                  {/* Imagen */}
                  <div className="h-48 bg-gradient-to-br from-gray-50 to-white dark:from-forest dark:to-forest-dark overflow-hidden relative">
                    {product.image ? (
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Leaf size={48} className="text-gold/30" />
                      </div>
                    )}
                    
                    {/* Badge de categoría */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold/90 text-forest text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-wide">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="font-display font-bold text-lg text-forest dark:text-white mb-2 group-hover:text-gold transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 dark:text-white/60 text-sm line-clamp-2 mb-4">
                      {product.description}
                    </p>
                    
                    {/* CTA */}
                    <div className="flex items-center gap-2 text-gold text-sm font-semibold">
                      <span>Ver detalles</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Móvil */}
          <div className="sm:hidden mt-8">
            <Link 
              to="/productos" 
              className="w-full bg-gold text-forest font-display font-bold py-4 rounded-xl flex items-center justify-center gap-2"
            >
              Ver Catálogo Completo <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          PRODUCTO DESTACADO - Sulphomax
          ============================================ */}
      <section className="py-16 sm:py-24 px-4 bg-forest">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <span className="text-gold text-sm uppercase tracking-widest font-semibold mb-4 block">
                Producto Estrella
              </span>
              
              <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
                <span className="text-gold">SULPHOMAX</span>
                <span className="block text-white/90">Caldo Sulfocálcico Premium</span>
              </h2>
              
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                Control natural de ácaros y hongos. Activa las defensas de la planta sin generar resistencia. 
                100% permitido en agricultura orgánica.
              </p>

              {/* Beneficios clave */}
              <div className="space-y-3 mb-8">
                {[
                  "Controla +50 enfermedades fúngicas",
                  "Mata ácaros por contacto (sin resistencia)",
                  "Activa fitoalexinas naturalmente",
                  "Sin residuos en cosecha"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center">
                      <svg className="w-3 h-3 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/90 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/sulfomax"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-forest font-display font-bold px-8 py-4 rounded-xl transition-all shadow-gold-glow"
              >
                <span>Ver Sulphomax</span>
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            {/* Imagen placeholder */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* Glow */}
                <div className="absolute inset-0 bg-gold/30 rounded-3xl blur-3xl scale-110" />
                
                {/* Card */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-gold/30">
                  {featuredProduct?.image ? (
                    <img 
                      src={featuredProduct.image} 
                      alt="Sulphomax"
                      className="w-48 h-64 object-contain mx-auto drop-shadow-2xl"
                    />
                  ) : (
                    <div className="w-48 h-64 flex items-center justify-center">
                      <div className="text-center">
                        <ShieldCheck size={64} className="mx-auto text-gold mb-4" />
                        <span className="text-gold font-display font-bold text-xl">SULPHOMAX</span>
                        <span className="block text-white/60 text-sm mt-2">20 Litros</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA FINAL - Contacto
          ============================================ */}
      <section className="py-16 sm:py-24 px-4 bg-background-light dark:bg-forest-dark">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Users className="w-16 h-16 text-gold mx-auto mb-6" />
            
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-forest dark:text-white mb-4">
              ¿Eres Productor Agrícola?
            </h2>
            
            <p className="text-gray-600 dark:text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Tenemos planes especiales por hectárea y asesoría personalizada en campo. 
              Conectamos biotecnología con las necesidades reales del agricultor colombiano.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contacto"
                className="bg-gold hover:bg-gold-dark text-forest font-display font-bold px-8 py-4 rounded-xl transition-all shadow-gold-glow"
              >
                Solicitar Cotización
              </Link>
              <a
                href={`https://wa.me/573203062007?text=Hola,%20quiero%20información%20sobre%20productos%20BioNeural`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-forest hover:bg-forest-dark text-white font-display font-semibold px-8 py-4 rounded-xl transition-all border border-forest"
              >
                WhatsApp
              </a>
            </div>

            {/* Info de contacto */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-white/60">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gold" />
                <span>Fresno, Tolima, Colombia</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold">📞</span>
                <span>{companyInfo.phone}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
