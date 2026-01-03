import React from 'react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../data/products';

export default function About() {
    return (
        <div className="pb-24">
            {/* Header */}
            <section className="header-rounded pt-8 pb-12 px-6 text-center relative">
                <div className="circuit-bg absolute inset-0 pointer-events-none"></div>
                <div className="relative z-10">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-2 border-[--color-primary]/20">
                        <img src="/logo.png" alt="BioNeural" className="w-12 h-12 object-contain" />
                    </div>
                    <h1 className="font-[--font-family-display] font-bold text-2xl text-[--color-secondary] mb-1">
                        Inteligencia Orgánica
                    </h1>
                    <p className="text-[--color-primary] font-semibold">para el Futuro</p>
                    <p className="text-[--color-gray-500] text-sm mt-2">Fertilizantes Orgánicos Inteligentes</p>
                </div>
            </section>

            {/* Misión */}
            <section className="px-6 py-8">
                <div className="card">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-[--color-green-100] rounded-full flex items-center justify-center">
                            <span className="text-xl">🎯</span>
                        </div>
                        <h2 className="font-[--font-family-display] font-bold text-lg text-[--color-secondary]">
                            Nuestra Misión
                        </h2>
                    </div>
                    <p className="text-[--color-gray-600] text-sm leading-relaxed">
                        En BioNeural Solutions, fusionamos la sabiduría de la naturaleza con innovación tecnológica.
                        Desarrollamos productos 100% naturales que potencian la agricultura sostenible,
                        restaurando la vitalidad del suelo sin comprometer el ecosistema.
                    </p>
                </div>
            </section>

            {/* Origen */}
            <section className="px-6 pb-8">
                <div className="rounded-3xl overflow-hidden shadow-lg relative h-40">
                    <div className="absolute inset-0 bg-gradient-to-br from-[--color-primary] to-[--color-primary-dark] flex items-center justify-center">
                        <span className="text-8xl opacity-20">🏔️</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                        <span className="badge badge-new mb-2">ORIGEN</span>
                        <h3 className="text-white font-[--font-family-display] font-bold text-xl">Fresno, Tolima</h3>
                        <p className="text-gray-300 text-sm">Corazón agrícola de Colombia</p>
                    </div>
                </div>
            </section>

            {/* Descripción */}
            <section className="px-6 pb-8">
                <p className="text-[--color-gray-600] text-sm leading-relaxed">
                    Nacidos en las tierras fértiles del norte del Tolima, entendemos las necesidades reales
                    del agricultor colombiano. Nuestra sede en Fresno nos permite trabajar mano a mano con
                    la comunidad, transformando residuos orgánicos en vida.
                </p>
            </section>

            {/* Por qué elegirnos */}
            <section className="px-6 pb-8">
                <h2 className="font-[--font-family-display] font-bold text-xl text-[--color-secondary] mb-6">
                    Por qué elegirnos
                </h2>

                <div className="grid grid-cols-2 gap-3">
                    <div className="benefit-card text-center">
                        <div className="benefit-icon bg-[--color-green-100] text-[--color-primary] mx-auto">🔬</div>
                        <h4 className="font-[--font-family-display] font-bold text-xs text-[--color-secondary]">Innovación</h4>
                        <p className="text-[10px] text-[--color-gray-500]">Bio-tecnología aplicada al campo.</p>
                    </div>

                    <div className="benefit-card text-center">
                        <div className="benefit-icon bg-[--color-green-100] text-[--color-primary] mx-auto">🌿</div>
                        <h4 className="font-[--font-family-display] font-bold text-xs text-[--color-secondary]">100% Orgánico</h4>
                        <p className="text-[10px] text-[--color-gray-500]">Sin químicos nocivos.</p>
                    </div>

                    <div className="benefit-card text-center">
                        <div className="benefit-icon bg-[--color-teal-100] text-teal-600 mx-auto">💧</div>
                        <h4 className="font-[--font-family-display] font-bold text-xs text-[--color-secondary]">Sostenible</h4>
                        <p className="text-[10px] text-[--color-gray-500]">Protección de fuentes hídricas.</p>
                    </div>

                    <div className="benefit-card text-center">
                        <div className="benefit-icon bg-[--color-amber-100] text-amber-600 mx-auto">🇨🇴</div>
                        <h4 className="font-[--font-family-display] font-bold text-xs text-[--color-secondary]">Local</h4>
                        <p className="text-[10px] text-[--color-gray-500]">Apoyo al agro colombiano.</p>
                    </div>
                </div>
            </section>

            {/* Fundador Quote */}
            <section className="px-6 pb-8">
                <div className="card bg-[--color-primary]/5 border-l-4 border-[--color-primary]">
                    <span className="text-[10px] font-bold text-[--color-primary] uppercase tracking-wider">FUNDADOR</span>
                    <p className="text-[--color-secondary] text-sm mt-2 italic">
                        "La tierra tiene memoria: nuestro deber es ayudarla a recordar cómo sanar."
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6">
                <Link to="/contacto" className="btn-primary w-full">
                    Contáctanos →
                </Link>
            </section>
        </div>
    );
}
