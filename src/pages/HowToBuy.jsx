import React from 'react';
import { Link } from 'react-router-dom';

export default function HowToBuy() {
    const steps = [
        {
            number: 1,
            icon: "🔍",
            title: "Elige tu Fórmula",
            description: "Selecciona de nuestro catálogo de biofertilizantes diseñados para tipos de cultivo y condiciones de suelo específicas."
        },
        {
            number: 2,
            icon: "📊",
            title: "Calcula el Volumen",
            description: "Usa nuestra guía para determinar la cantidad exacta necesaria para tu área de cultivo."
        },
        {
            number: 3,
            icon: "✅",
            title: "Confirma tu Pedido",
            description: "Paga de forma segura por transferencia, Nequi o Daviplata. Enviamos factura digital al instante."
        },
        {
            number: 4,
            icon: "📦",
            title: "Entrega Inteligente",
            description: "Rastrea tu bio-envío en tiempo real. Nuestra logística asegura frescura en la llegada."
        }
    ];

    return (
        <div className="pb-24">
            {/* Header */}
            <section className="header-rounded pt-8 pb-12 px-6 text-center relative">
                <div className="circuit-bg absolute inset-0 pointer-events-none"></div>
                <div className="relative z-10">
                    <div className="w-16 h-16 bg-[--color-primary] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <span className="text-3xl">📋</span>
                    </div>
                    <h1 className="font-[--font-family-display] font-bold text-3xl text-[--color-secondary] mb-2">
                        How to Buy
                    </h1>
                    <p className="text-[--color-gray-600] text-sm max-w-[280px] mx-auto">
                        Adquiere biofertilizantes inteligentes en 4 simples pasos. Combinamos naturaleza con tecnología.
                    </p>
                </div>
            </section>

            {/* Steps */}
            <section className="px-6 py-8">
                <div className="space-y-4">
                    {steps.map((step, index) => (
                        <div key={step.number} className="flex gap-4">
                            {/* Number indicator */}
                            <div className="flex flex-col items-center">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-[--font-family-display] font-bold text-sm ${index === 0
                                        ? 'bg-[--color-primary] text-white'
                                        : 'bg-[--color-gray-100] text-[--color-gray-500]'
                                    }`}>
                                    {step.number}
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="w-0.5 h-16 bg-[--color-gray-200] my-1"></div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex-1 card">
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">{step.icon}</span>
                                    <div>
                                        <h3 className="font-[--font-family-display] font-bold text-base text-[--color-secondary] mb-1">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-[--color-gray-600] leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Box */}
            <section className="px-6 pb-8">
                <div className="bg-[--color-secondary] rounded-3xl p-6 text-white">
                    <h3 className="font-[--font-family-display] font-bold text-xl mb-2">
                        ¿Listo para Empezar?
                    </h3>
                    <p className="text-white/80 text-sm mb-4">
                        Explora nuestro catálogo de biofertilizantes orgánicos avanzados.
                    </p>
                    <Link
                        to="/productos"
                        className="btn-primary bg-[--color-primary] w-full"
                    >
                        Ver Catálogo →
                    </Link>
                </div>
            </section>

            {/* Help */}
            <section className="px-6 text-center">
                <p className="text-[--color-gray-500] text-sm mb-2">
                    ¿Necesitas ayuda con tu pedido?
                </p>
                <a
                    href="https://wa.me/57XXXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[--color-primary] font-bold text-sm inline-flex items-center gap-1"
                >
                    💬 Contactar Soporte de Ventas
                </a>
            </section>
        </div>
    );
}
