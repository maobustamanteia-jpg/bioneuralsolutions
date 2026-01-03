import React from 'react';
import { companyInfo } from '../data/products';

export default function Contact() {
    return (
        <div className="pb-24">
            {/* Header */}
            <section className="header-rounded pt-8 pb-12 px-6 text-center relative">
                <div className="circuit-bg absolute inset-0 pointer-events-none"></div>
                <div className="relative z-10">
                    <span className="inline-block px-3 py-1 bg-[--color-primary]/10 text-[--color-primary] rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                        GET IN TOUCH
                    </span>
                    <h1 className="font-[--font-family-display] font-bold text-3xl text-[--color-secondary] mb-2">
                        Let's Cultivate Together
                    </h1>
                    <p className="text-[--color-gray-600] text-sm max-w-[280px] mx-auto">
                        ¿Tienes preguntas sobre nuestros biofertilizantes? Estamos aquí para ayudarte a cultivar mejor.
                    </p>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="px-6 py-6">
                <div className="grid grid-cols-2 gap-3 mb-6">
                    <a
                        href="tel:+57XXXXXXXXXX"
                        className="card text-center hover:border-[--color-primary] transition-colors"
                    >
                        <div className="w-12 h-12 bg-[--color-green-100] rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-xl">📞</span>
                        </div>
                        <span className="text-[10px] text-[--color-primary] uppercase font-bold">LLÁMANOS</span>
                        <p className="text-xs text-[--color-secondary] font-medium mt-1">+57 XXX XXX XXXX</p>
                    </a>

                    <a
                        href="mailto:contacto@bioneural.co"
                        className="card text-center hover:border-[--color-primary] transition-colors"
                    >
                        <div className="w-12 h-12 bg-[--color-blue-100] rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-xl">📧</span>
                        </div>
                        <span className="text-[10px] text-[--color-primary] uppercase font-bold">EMAIL</span>
                        <p className="text-xs text-[--color-secondary] font-medium mt-1">info@bioneural.co</p>
                    </a>
                </div>
            </section>

            {/* Contact Form */}
            <section className="px-6 pb-8">
                <div className="card">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-xl">💬</span>
                        <h2 className="font-[--font-family-display] font-bold text-lg text-[--color-secondary]">
                            Send a Message
                        </h2>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-[--color-gray-500] uppercase mb-2">
                                FULL NAME
                            </label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full px-4 py-3 rounded-xl border border-[--color-gray-200] focus:border-[--color-primary] focus:ring-2 focus:ring-[--color-primary]/10 outline-none transition-all text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-[--color-gray-500] uppercase mb-2">
                                EMAIL ADDRESS
                            </label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className="w-full px-4 py-3 rounded-xl border border-[--color-gray-200] focus:border-[--color-primary] focus:ring-2 focus:ring-[--color-primary]/10 outline-none transition-all text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-[--color-gray-500] uppercase mb-2">
                                SUBJECT
                            </label>
                            <select className="w-full px-4 py-3 rounded-xl border border-[--color-gray-200] focus:border-[--color-primary] focus:ring-2 focus:ring-[--color-primary]/10 outline-none transition-all text-sm appearance-none bg-white">
                                <option>General Inquiry</option>
                                <option>Consulta de Productos</option>
                                <option>Solicitar Cotización</option>
                                <option>Soporte Técnico</option>
                                <option>Otros</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-[--color-gray-500] uppercase mb-2">
                                MESSAGE
                            </label>
                            <textarea
                                rows="4"
                                placeholder="¿Cómo podemos ayudarte a mejorar tus cultivos?"
                                className="w-full px-4 py-3 rounded-xl border border-[--color-gray-200] focus:border-[--color-primary] focus:ring-2 focus:ring-[--color-primary]/10 outline-none transition-all text-sm resize-none"
                            ></textarea>
                        </div>

                        <button type="submit" className="btn-primary w-full">
                            Send Message →
                        </button>
                    </form>
                </div>
            </section>

            {/* Map/Location */}
            <section className="px-6 pb-8">
                <div className="card">
                    <div className="h-32 bg-gradient-to-br from-[--color-green-100] to-[--color-gray-100] rounded-xl flex items-center justify-center mb-4">
                        <span className="text-6xl opacity-50">📍</span>
                    </div>
                    <h3 className="font-[--font-family-display] font-bold text-base text-[--color-secondary] mb-1">
                        Nuestra Sede
                    </h3>
                    <p className="text-sm text-[--color-gray-600]">{companyInfo.location}</p>
                    <a
                        href="#"
                        className="text-[--color-primary] font-bold text-sm mt-2 inline-flex items-center gap-1"
                    >
                        Get Directions →
                    </a>
                </div>
            </section>
        </div>
    );
}
