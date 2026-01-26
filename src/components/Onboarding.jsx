import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
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
            subtitle: "Tu puente entre la sabiduría de la tierra y la inteligencia artificial.",
            icon: <NeuralCore size="md" isAnalyzing={false} />,
            color: "var(--color-primary)"
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
        <div className="fixed inset-0 z-[100] bg-background-dark flex items-center justify-center p-6 sm:p-0">
            <div className="absolute inset-0 circuit-bg opacity-10"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="relative w-full max-w-md bg-surface-dark/80 backdrop-blur-xl rounded-[40px] border border-white/10 p-8 shadow-2xl overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
                    <motion.div
                        className="h-full bg-primary shadow-glow"
                        initial={{ width: "0%" }}
                        animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
                    />
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
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
                                <div className="p-4 bg-primary/10 rounded-3xl text-primary animate-pulse">
                                    {step === 1 && <Sprout size={48} />}
                                    {step === 2 && <Layout size={48} />}
                                    {step === 3 && <Bell size={48} />}
                                </div>
                            )}
                        </div>

                        <h2 className="text-3xl font-display font-bold text-white mb-2 tracking-tight leading-tight">
                            {currentStepData.title}
                        </h2>
                        <p className="text-gray-400 text-sm mb-10 px-4 leading-relaxed">
                            {currentStepData.subtitle}
                        </p>

                        {currentStepData.type === 'selection' && (
                            <div className="grid grid-cols-1 w-full gap-3">
                                {currentStepData.options.map(opt => (
                                    <button
                                        key={opt.id}
                                        onClick={() => selectOption(currentStepData.field, opt.id)}
                                        className={`flex items-center justify-between p-4 rounded-2xl border transition-all active:scale-95 ${profile[currentStepData.field] === opt.id
                                            ? 'bg-primary/20 border-primary text-white shadow-glow'
                                            : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                                            }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="text-2xl">{opt.icon}</span>
                                            <span className="font-bold">{opt.label}</span>
                                        </div>
                                        {profile[currentStepData.field] === opt.id && <Check className="text-primary" size={20} />}
                                    </button>
                                ))}
                            </div>
                        )}

                        {currentStepData.type === 'permissions' && (
                            <div className="flex flex-col w-full gap-4">
                                <button
                                    onClick={() => requestPermission('location')}
                                    className={`flex items-center gap-4 p-5 rounded-3xl border transition-all ${profile.locationEnabled
                                        ? 'bg-primary/10 border-primary/30 text-primary'
                                        : 'bg-white/5 border-white/10 text-white'
                                        }`}
                                >
                                    <MapPin className={profile.locationEnabled ? 'text-primary' : 'text-gray-500'} />
                                    <div className="text-left">
                                        <p className="font-bold text-sm">Ubicación</p>
                                        <p className="text-[10px] text-gray-500 uppercase tracking-widest">Para alertas locales</p>
                                    </div>
                                    {profile.locationEnabled && <Check className="ml-auto" size={16} />}
                                </button>

                                <button
                                    onClick={() => requestPermission('notifications')}
                                    className={`flex items-center gap-4 p-5 rounded-3xl border transition-all ${profile.notificationsEnabled
                                        ? 'bg-primary/10 border-primary/30 text-primary'
                                        : 'bg-white/5 border-white/10 text-white'
                                        }`}
                                >
                                    <Bell className={profile.notificationsEnabled ? 'text-primary' : 'text-gray-500'} />
                                    <div className="text-left">
                                        <p className="font-bold text-sm">Notificaciones</p>
                                        <p className="text-[10px] text-gray-500 uppercase tracking-widest">Alertas de plagas</p>
                                    </div>
                                    {profile.notificationsEnabled && <Check className="ml-auto" size={16} />}
                                </button>

                                <button
                                    onClick={nextStep}
                                    className="btn-stitch-primary py-5 mt-4 group"
                                >
                                    <span>Comenzar</span>
                                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        )}

                        {step === 0 && (
                            <button
                                onClick={nextStep}
                                className="btn-stitch-primary py-5 w-full group overflow-hidden relative"
                            >
                                <span className="relative z-10">Continuar</span>
                                <ChevronRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                            </button>
                        )}
                    </motion.div>
                </AnimatePresence>

                <div className="flex justify-center gap-2 mt-4 pb-2">
                    {steps.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-300 ${i === step ? 'w-8 bg-primary shadow-glow' : 'w-2 bg-white/10'}`}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
