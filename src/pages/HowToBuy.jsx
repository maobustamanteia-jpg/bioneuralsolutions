import React from 'react';
import { Link } from 'react-router-dom';

const steps = [
    {
        id: 1,
        title: "Elige tu Fórmula",
        description: "Selecciona de nuestro catálogo el biofertilizante inteligente diseñado para tu tipo de cultivo y suelo.",
        icon: "biotech"
    },
    {
        id: 2,
        title: "Calcula el Volumen",
        description: "Determina la cantidad exacta necesaria para tu hectárea. Te asesoramos en la dosificación óptima.",
        icon: "calculate"
    },
    {
        id: 3,
        title: "Pago Seguro",
        description: "Realiza tu pedido vía WhatsApp o transferencia bancaria. Emitimos factura digital instantánea.",
        icon: "verified_user"
    },
    {
        id: 4,
        title: "Entrega Inteligente",
        description: "Rastrea tu bio-envío en tiempo real. Garantizamos la frescura de los microorganismos.",
        icon: "local_shipping"
    }
];

export default function HowToBuy() {
    return (
        <div className="animate-fade-in pb-24">
            {/* Background Pattern */}
            <div className="fixed inset-0 pointer-events-none circuit-bg z-0 opacity-5"></div>

            <main className="relative z-10 px-6 pt-20">
                {/* Header Section */}
                <div className="mb-12 text-center">
                    <div className="inline-flex items-center justify-center p-4 bg-primary/10 dark:bg-primary/20 rounded-full mb-6 text-primary">
                        <span className="material-icons-round text-4xl">shopping_basket</span>
                    </div>
                    <h2 className="font-display font-bold text-3xl text-secondary dark:text-white mb-4">Cómo Comprar</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-[280px] mx-auto">
                        Adquiere biofertilizantes inteligentes en 4 pasos sencillos. Unimos naturaleza y tecnología.
                    </p>
                </div>

                {/* Timeline Section */}
                <div className="space-y-10 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-7 top-6 bottom-6 w-0.5 bg-gray-100 dark:bg-gray-800 -z-10"></div>

                    {steps.map((step) => (
                        <div key={step.id} className="flex gap-6 group">
                            <div className={`flex-shrink-0 w-14 h-14 rounded-full bg-white dark:bg-surface-dark border-2 flex items-center justify-center shadow-md z-10 transition-all duration-300 group-hover:scale-110 ${step.id === 1 ? 'border-primary shadow-glow ring-4 ring-primary/5' : 'border-gray-200 dark:border-gray-700 group-hover:border-primary'
                                }`}>
                                <span className={`font-display font-bold text-xl ${step.id === 1 ? 'text-primary' : 'text-gray-400 dark:text-gray-500 group-hover:text-primary'}`}>
                                    {step.id}
                                </span>
                            </div>

                            <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-soft flex-1 border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all duration-300">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="material-icons-round text-primary text-xl">{step.icon}</span>
                                    <h3 className="font-display font-bold text-secondary dark:text-white">{step.title}</h3>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Ready Section - Dark CTA */}
                <div className="mt-16 mb-12 bg-secondary dark:bg-surface-dark rounded-[32px] p-8 relative overflow-hidden shadow-2xl border border-white/5">
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                        <h3 className="font-display font-bold text-white text-2xl mb-3 tracking-tight">¿Listo para empezar?</h3>
                        <p className="text-gray-300 text-sm mb-8 opacity-90 font-medium">Lleva tu cultivo al siguiente nivel con nuestras soluciones orgánicas avanzadas.</p>
                        <Link
                            to="/productos"
                            className="btn-stitch-primary py-4 w-full"
                        >
                            <span>Ver el Catálogo</span>
                            <span className="material-icons-round text-sm">arrow_forward</span>
                        </Link>
                    </div>
                </div>

                {/* Support Section */}
                <div className="text-center pb-8">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 font-medium">¿Necesitas ayuda personalizada con tu pedido?</p>
                    <a
                        href="https://wa.me/573203062007"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-bold text-sm hover:underline inline-flex items-center justify-center gap-2 group"
                    >
                        <span className="material-icons-round text-lg group-hover:translate-x-1 transition-transform">support_agent</span>
                        Contactar Asesor de Ventas
                    </a>
                </div>
            </main>
        </div>
    );
}
