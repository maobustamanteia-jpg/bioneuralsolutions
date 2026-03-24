import { motion as Motion } from 'framer-motion'
import { Leaf, Mail, Phone, Facebook, Instagram, MessageCircle } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo y Descripción */}
          <div className="md:col-span-2">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <span className="text-2xl font-bold">BioCultivo</span>
              </div>
              <p className="text-white/80 leading-relaxed mb-4 max-w-md">
                Educación agrícola para agricultores de Fresno, Tolima. Compartiendo conocimiento, construyendo comunidad.
              </p>
            </Motion.div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <span>+57 320 306 2007</span>
              </li>
              <li className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span>contacto@biocultivo.com</span>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <Motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Motion.a>
              <Motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Motion.a>
              <Motion.a
                whileHover={{ scale: 1.1 }}
                href="https://wa.me/573203062007"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </Motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {currentYear} BioCultivo. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Términos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
