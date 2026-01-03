import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'Consulta General',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = `Hola BioNeural, mi nombre es ${formData.name}. Correo: ${formData.email}. Tema: ${formData.subject}. Mensaje: ${formData.message}`;
        window.open(`https://wa.me/573203062007?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <div className="animate-fade-in pb-12">
            <main className="px-6 pt-20 pb-20 max-w-md mx-auto">
                {/* Header */}
                <div className="mb-10 text-center">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-[10px] font-bold mb-4 tracking-[0.2em] uppercase border border-primary/5">
                        Contacto
                    </span>
                    <h2 className="font-display text-3xl font-bold text-secondary dark:text-white mb-3 tracking-tight">
                        Cultivemos <span className="text-primary">Juntos</span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-[280px] mx-auto font-medium">
                        ¿Preguntas sobre nuestros biofertilizantes? Estamos aquí para ayudar a que tus cultivos crezcan.
                    </p>
                </div>

                {/* Contact Grid */}
                <div className="grid grid-cols-2 gap-4 mb-10">
                    <a
                        href="tel:+573203062007"
                        className="flex flex-col items-center justify-center p-6 bg-white dark:bg-surface-dark rounded-2xl shadow-soft border border-gray-50 dark:border-gray-800 hover:border-primary/30 transition-all group"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                            <span className="material-icons-round text-2xl">phone</span>
                        </div>
                        <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Llámanos</span>
                        <span className="text-xs font-bold text-secondary dark:text-white">320 306 2007</span>
                    </a>

                    <a
                        href="mailto:bioneuralsolutions@gmail.com"
                        className="flex flex-col items-center justify-center p-6 bg-white dark:bg-surface-dark rounded-2xl shadow-soft border border-gray-50 dark:border-gray-800 hover:border-primary/30 transition-all group"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-all transform group-hover:-rotate-6">
                            <span className="material-icons-round text-2xl">alternate_email</span>
                        </div>
                        <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Escríbenos</span>
                        <span className="text-xs font-bold text-secondary dark:text-white">Email</span>
                    </a>
                </div>

                {/* Form Section */}
                <div className="bg-white dark:bg-surface-dark rounded-[32px] shadow-soft p-8 border-t-4 border-primary relative overflow-hidden mb-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 pointer-events-none"></div>
                    <h3 className="font-display text-xl font-bold text-secondary dark:text-white mb-8 flex items-center gap-2">
                        <span className="material-icons-round text-primary">chat_bubble_outline</span>
                        Envía un mensaje
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="block text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] ml-2" htmlFor="name">Nombre Completo</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                                    <span className="material-icons-round text-xl">person</span>
                                </div>
                                <input
                                    className="block w-full pl-12 pr-4 py-4 border-2 border-gray-50 dark:border-white/5 rounded-2xl bg-gray-50 dark:bg-white/5 text-secondary dark:text-white placeholder-gray-400 focus:ring-0 focus:border-primary transition-all text-sm font-medium"
                                    id="name"
                                    placeholder="Pedro Pérez"
                                    required
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] ml-2" htmlFor="subject">¿En qué podemos ayudarte?</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                                    <span className="material-icons-round text-xl">label_important</span>
                                </div>
                                <select
                                    className="block w-full pl-12 pr-10 py-4 border-2 border-gray-50 dark:border-white/5 rounded-2xl bg-gray-50 dark:bg-white/5 text-secondary dark:text-white focus:ring-0 focus:border-primary transition-all text-sm font-medium appearance-none cursor-pointer"
                                    id="subject"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                >
                                    <option>Consulta General</option>
                                    <option>Asesoría Técnica</option>
                                    <option>Ventas y Pedidos</option>
                                    <option>Soporte Post-compra</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400">
                                    <span className="material-icons-round">expand_more</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] ml-2" htmlFor="message">Tu mensaje</label>
                            <textarea
                                className="block w-full px-4 py-4 border-2 border-gray-50 dark:border-white/5 rounded-2xl bg-gray-50 dark:bg-white/5 text-secondary dark:text-white placeholder-gray-400 focus:ring-0 focus:border-primary transition-all text-sm font-medium resize-none"
                                id="message"
                                placeholder="Cuéntanos sobre tu cultivo..."
                                required
                                rows="4"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                        </div>

                        <button
                            className="w-full btn-stitch-primary py-5 shadow-glow"
                            type="submit"
                        >
                            <span>Enviar vía WhatsApp</span>
                            <span className="material-icons-round text-lg">send</span>
                        </button>
                    </form>
                </div>

                {/* Map Section */}
                <div className="bg-white dark:bg-surface-dark rounded-[32px] shadow-soft overflow-hidden border border-gray-100 dark:border-gray-800">
                    <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        {/* Placeholder for Map Visual */}
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}></div>
                        <div className="absolute inset-0 bg-primary/20"></div>
                        <div className="relative bg-white dark:bg-gray-800 p-3 rounded-full shadow-2xl animate-bounce">
                            <span className="material-icons-round text-primary text-3xl">place</span>
                        </div>
                    </div>
                    <div className="p-6">
                        <h4 className="font-display font-bold text-secondary dark:text-white text-lg mb-1">Ubicación Central</h4>
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">
                            Fresno, Tolima, Colombia<br />
                            Zona Industrial Agrosostenible
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
