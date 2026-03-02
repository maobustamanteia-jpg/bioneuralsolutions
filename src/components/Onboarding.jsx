import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { Sprout, Layout, Bell, MapPin, ChevronRight, Check } from 'lucide-react';
import NeuralCore from './NeuralCore';

export default function Onboarding({ onComplete }) {
  const [step, setStep] = useState(0);
  const [profile, setProfile] = useState({
    crop: '',
    farmType: '',
    locationEnabled: false,
    notificationsEnabled: false
  });

  const steps = [
    {
      title: "Bienvenido a BioNeural",
      subtitle: "Biotecnología nacida en los Andes. Formulada para el campo colombiano.",
      icon: <NeuralCore size="md" isAnalyzing={false} />,
      color: "#004B30"
    },
    {
      title: "¿Qué cultivas hoy?",
      subtitle: "Personalizaremos tus recomendaciones según tu cultivo principal.",
      options: [
        { id: 'cafe', label: 'Café', icon: '☕' },
        { id: 'mora', label: 'Mora', icon: '🫐' },
        { id: 'aguacate', label: 'Aguacate', icon: '🥑' },
        { id: 'citricos', label: 'Cítricos', icon: '🍋' },
        { id: 'otro', label: 'Otro', icon: '🌿' }
      ],
      type: 'selection',
      field: 'crop'
    },
    {
      title: "Tu tipo de siembra",
      subtitle: "Esto nos ayuda a calcular las dosis exactas.",
      options: [
        { id: 'comercial', label: 'Campo / Comercial', icon: '🚜' },
        { id: 'pequena', label: 'Pequeña Escala', icon: '🏡' },
        { id: 'huerta', label: 'Huerta / Macetas', icon: '🪴' }
      ],
      type: 'selection',
      field: 'farmType'
    },
    {
      title: "Conexión Inteligente",
      subtitle: "Activa los permisos para recibir alertas climáticas y de plagas en tu zona.",
      type: 'permissions'
    }
  ];

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      localStorage.setItem('bioneural_onboarded', 'true');
      localStorage.setItem('bioneural_user_profile', JSON.stringify(profile));
      onComplete();
    }
  };

  const selectOption = (field, value) => {
    setProfile({ ...profile, [field]: value });
    setTimeout(nextStep, 400);
  };

  const requestPermission = async (type) => {
    if (type === 'location') {
      try {
        await navigator.geolocation.getCurrentPosition(() => {
          setProfile(prev => ({ ...prev, locationEnabled: true }));
        });
      } catch {
        console.error("Location denied");
      }
    } else if (type === 'notifications') {
      const permission = await Notification.requestPermission();
      setProfile(prev => ({ ...prev, notificationsEnabled: permission === 'granted' }));
    }
  };

  const currentStepData = steps[step];

  return (
    <div className="fixed inset-0 z-[100] bg-forest flex items-center justify-center p-6 sm:p-0">
      {/* Fondo con efecto */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-bio-green/10 rounded-full blur-[80px]" />
      </div>
      
      <div className="absolute inset-0 circuit-bg opacity-5"></div>

      <Motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-md bg-forest-dark/80 backdrop-blur-xl rounded-[40px] border border-gold/20 p-8 shadow-2xl overflow-hidden"
      >
        {/* Progress bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
          <Motion.div
            className="h-full bg-gold shadow-gold-glow"
            initial={{ width: "0%" }}
            animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>

        <AnimatePresence mode="wait">
          <Motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col items-center text-center py-6"
          >
            <div className="mb-8">
              {currentStepData.icon ? (
                currentStepData.icon
              ) : (
                <div className="p-4 bg-gold/10 rounded-3xl text-gold animate-pulse">
                  {step === 1 && <Sprout size={48} />}
                  {step === 2 && <Layout size={48} />}
                  {step === 3 && <Bell size={48} />}
                </div>
              )}
            </div>

            <h2 className="text-3xl font-display font-bold text-white mb-2 tracking-tight leading-tight">
              {currentStepData.title}
            </h2>
            <p className="text-white/60 text-sm mb-10 px-4 leading-relaxed">
              {currentStepData.subtitle}
            </p>

            {currentStepData.type === 'selection' && (
              <div className="grid grid-cols-1 w-full gap-3">
                {currentStepData.options.map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => selectOption(currentStepData.field, opt.id)}
                    className={`flex items-center justify-between p-4 rounded-2xl border transition-all active:scale-95 ${
                      profile[currentStepData.field] === opt.id
                        ? 'bg-gold/20 border-gold text-white shadow-gold-glow'
                        : 'bg-white/5 border-white/10 text-white/70 hover:border-gold/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{opt.icon}</span>
                      <span className="font-bold">{opt.label}</span>
                    </div>
                    {profile[currentStepData.field] === opt.id && <Check className="text-gold" size={20} />}
                  </button>
                ))}
              </div>
            )}

            {currentStepData.type === 'permissions' && (
              <div className="flex flex-col w-full gap-4">
                <button
                  onClick={() => requestPermission('location')}
                  className={`flex items-center gap-4 p-5 rounded-3xl border transition-all ${
                    profile.locationEnabled
                      ? 'bg-gold/10 border-gold/30 text-gold'
                      : 'bg-white/5 border-white/10 text-white'
                  }`}
                >
                  <MapPin className={profile.locationEnabled ? 'text-gold' : 'text-white/50'} />
                  <div className="text-left">
                    <p className="font-bold text-sm">Ubicación</p>
                    <p className="text-[10px] text-white/50 uppercase tracking-widest">Para alertas locales</p>
                  </div>
                  {profile.locationEnabled && <Check className="ml-auto" size={16} />}
                </button>

                <button
                  onClick={() => requestPermission('notifications')}
                  className={`flex items-center gap-4 p-5 rounded-3xl border transition-all ${
                    profile.notificationsEnabled
                      ? 'bg-gold/10 border-gold/30 text-gold'
                      : 'bg-white/5 border-white/10 text-white'
                  }`}
                >
                  <Bell className={profile.notificationsEnabled ? 'text-gold' : 'text-white/50'} />
                  <div className="text-left">
                    <p className="font-bold text-sm">Notificaciones</p>
                    <p className="text-[10px] text-white/50 uppercase tracking-widest">Alertas de plagas</p>
                  </div>
                  {profile.notificationsEnabled && <Check className="ml-auto" size={16} />}
                </button>

                <button
                  onClick={nextStep}
                  className="bg-gold hover:bg-gold-dark text-forest font-display font-bold py-5 mt-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-gold-glow"
                >
                  <span>Comenzar</span>
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}

            {step === 0 && (
              <button
                onClick={nextStep}
                className="bg-gold hover:bg-gold-dark text-forest font-display font-bold py-5 w-full rounded-2xl flex items-center justify-center gap-2 transition-all shadow-gold-glow"
              >
                <span>Continuar</span>
                <ChevronRight size={18} />
              </button>
            )}
          </Motion.div>
        </AnimatePresence>

        {/* Step indicators */}
        <div className="flex justify-center gap-2 mt-4 pb-2">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === step ? 'w-8 bg-gold shadow-gold-glow' : 'w-2 bg-white/10'
              }`}
            />
          ))}
        </div>
      </Motion.div>
    </div>
  );
}
