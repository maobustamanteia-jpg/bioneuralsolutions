import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, MessageCircle, ShieldCheck, Zap, Droplets, Leaf } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SulfomaxLanding() {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when loading the landing page
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* HEADER / HERO SECTION */}
      <section className="relative w-full rounded-b-3xl overflow-hidden bg-gradient-to-b from-[#d4e8c1] to-white shadow-sm pb-10">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          {/* Subtle tech grid background pattern */}
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3da8b5" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="px-6 pt-12 pb-6 flex flex-col items-center relative z-10">
          <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-1 mb-6 border border-[#5ba83c]/30 shadow-sm">
            <span className="text-[#1c2d4a] text-xs font-bold uppercase tracking-wider">BioNeural Solutions</span>
          </div>
          
          <h1 className="text-5xl font-extrabold text-[#1c2d4a] text-center tracking-tight mb-2">
            Sulfo<span className="text-[#5ba83c]">max</span>
          </h1>
          <p className="text-sm font-medium text-[#3da8b5] uppercase tracking-widest text-center mb-8">
            Caldo Sulfocálcico Premium
          </p>

          {/* Product Image Placeholder (Can be replaced with real bottle) */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-48 h-64 rounded-2xl mb-8 relative flex items-center justify-center shadow-2xl border-4 border-white"
            style={{
              background: 'linear-gradient(135deg, #c5a82b 0%, #7a8220 100%)', // Dorado verdoso intenso
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white/90">
              <ShieldCheck size={48} className="mb-2 opacity-80" />
              <span className="font-bold text-xl tracking-wider">SULFOMAX</span>
              <span className="text-[10px] opacity-75 mt-1">100% ORGÁNICO</span>
            </div>
            
            {/* Sello Prohibido Ácaros (Requested in meeting) */}
            <div className="absolute -bottom-4 -right-4 bg-red-500 rounded-full p-2 border-2 border-white shadow-lg flex items-center justify-center w-14 h-14">
              <span className="text-white text-[10px] font-black leading-tight text-center">CERO<br/>PLAGAS</span>
            </div>
          </motion.div>

          <h2 className="text-2xl font-bold text-center text-[#1c2d4a] mb-3 leading-tight">
            Poder natural del Azufre, Calcio y Silicio.
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-sm px-4">
            Erradica ácaros y hongos de contacto mientras activa el sistema de defensas (fitoalexinas) de tu cultivo.
          </p>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="px-6 py-10">
        <h3 className="text-[#1c2d4a] font-bold text-xl mb-6">Triple Acción Biológica</h3>
        
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
            <div className="bg-[#5ba83c]/10 p-3 rounded-xl text-[#5ba83c]">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="font-bold text-[#1c2d4a]">Acaricida y Fungicida</h4>
              <p className="text-sm text-gray-500 mt-1">Acción de contacto letal contra la arañita roja y hongos patógenos.</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
            <div className="bg-[#3da8b5]/10 p-3 rounded-xl text-[#3da8b5]">
              <Zap size={24} />
            </div>
            <div>
              <h4 className="font-bold text-[#1c2d4a]">Activa Fitoalexinas</h4>
              <p className="text-sm text-gray-500 mt-1">Actúa como precursor de proteínas, activando las defensas naturales de la planta.</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
            <div className="bg-[#1c2d4a]/10 p-3 rounded-xl text-[#1c2d4a]">
              <Leaf size={24} />
            </div>
            <div>
              <h4 className="font-bold text-[#1c2d4a]">Nutrición Estructural</h4>
              <p className="text-sm text-gray-500 mt-1">El aporte de Calcio y Silicio fortalece las paredes celulares de hojas y frutos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DOSAGE & SPECS */}
      <section className="px-6 py-6 bg-[#1c2d4a] text-white rounded-3xl mx-4 mb-10 shadow-xl relative overflow-hidden">
        <div className="absolute -right-10 -top-10 opacity-10">
          <Droplets size={120} />
        </div>
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <Droplets size={20} className="text-[#5ba83c]" /> 
          Dosificación Sugerida
        </h3>
        <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
          <div className="flex justify-between items-center border-b border-white/20 pb-3 mb-3">
            <span className="text-gray-300 text-sm">Prevención / Infestación Leve</span>
            <span className="font-bold text-[#d4e8c1]">120 cm³</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300 text-sm">Infestación Alta</span>
            <span className="font-bold text-[#5ba83c]">300 ml</span>
          </div>
          <p className="text-center text-xs text-gray-400 mt-4 italic">* Dosis calculada por bomba de 20 Litros.</p>
        </div>
      </section>

      {/* STICKY CTA BUTTONS (Bottom) */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 pb-8 sm:pb-4 z-50 flex gap-3 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        
        {/* Secondary: Ask Agronomist (WhatsApp/YCloud CRM flow) */}
        <button 
          onClick={() => window.open('https://wa.me/573000000000?text=Hola,%20escaneé%20el%20Sulfomax%20y%20quiero%20un%20diagnóstico%20por%20IA', '_blank')}
          className="flex-1 bg-[#d4e8c1] text-[#1c2d4a] font-bold py-4 rounded-xl flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform"
        >
          <div className="flex items-center gap-2">
            <MessageCircle size={18} />
            <span>Asesoría IA</span>
          </div>
          <span className="text-[10px] font-normal opacity-80">WhatsApp</span>
        </button>

        {/* Primary: Buy Now */}
        <button 
          onClick={() => navigate('/productos')}
          className="flex-[1.5] bg-[#1c2d4a] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-lg shadow-[#1c2d4a]/30"
        >
          <ShoppingBag size={20} className="text-[#5ba83c]" />
          Añadir a tienda
        </button>
      </div>

    </div>
  );
}
