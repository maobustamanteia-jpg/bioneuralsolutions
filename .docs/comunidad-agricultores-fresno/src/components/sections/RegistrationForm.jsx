import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import Input from '../ui/Input'
import Button from '../ui/Button'
import ScrollReveal from '../effects/ScrollReveal'
import { Calendar, Clock, Users, Utensils, Award, XCircle } from 'lucide-react'
import { clsx } from 'clsx'

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    whatsapp: '',
    tipoCultivo: '',
    cantidadArboles: '',
    vereda: '',
    preguntaPrincipal: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('https://dep-n8n.n8ntusaguacates.space/webhook/taller-amarillamiento', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSuccess(true)
        // Reset form
        setFormData({
          nombre: '',
          whatsapp: '',
          tipoCultivo: '',
          cantidadArboles: '',
          vereda: '',
          preguntaPrincipal: ''
        })
      } else {
        throw new Error('Error al enviar el formulario')
      }
    } catch (err) {
      setError('Hubo un error al procesar tu inscripción. Por favor intenta nuevamente o contáctanos por WhatsApp.')
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const inputErrors = {}

  // Success Message
  if (success) {
    return (
      <Motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-green-50 to-accent/10 rounded-2xl p-8 text-center"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
          <Award className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-4">
          ¡Inscripción Exitosa!
        </h3>
        <p className="text-coffee mb-6 max-w-md mx-auto">
          Gracias {formData.nombre}, tu cupo ha sido reservado. Te contactaremos por WhatsApp en las próximas 24 horas con los detalles finales.
        </p>
        <div className="inline-flex items-center gap-2 text-sm text-coffee/70">
          <Clock className="w-4 h-4" />
          <span>Revisa tu WhatsApp</span>
        </div>
      </Motion.div>
    )
  }

  return (
    <section id="registro" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Form */}
          <ScrollReveal>
            <div className="bg-cream rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary mb-2">
                  Reserva tu Cupo
                </h2>
                <p className="text-coffee/70">
                  Solo 30 lugares disponibles
                </p>
              </div>

              {error && (
                <Motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3"
                >
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-700">{error}</p>
                </Motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Nombre completo"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre y apellido"
                  required
                  error={inputErrors.nombre}
                />

                <Input
                  label="WhatsApp (con +57)"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="+57 300 123 4567"
                  required
                  error={inputErrors.whatsapp}
                />

                <div>
                  <label className="form-label">Tipo de cultivo principal</label>
                  <select
                    name="tipoCultivo"
                    value={formData.tipoCultivo}
                    onChange={handleChange}
                    className="form-input"
                    required
                  >
                    <option value="">Selecciona...</option>
                    <option value="aguacate">Aguacate</option>
                    <option value="cafe">Café</option>
                    <option value="ambos">Ambos</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="form-label">¿Cuántos árboles tienes aproximadamente?</label>
                  <select
                    name="cantidadArboles"
                    value={formData.cantidadArboles}
                    onChange={handleChange}
                    className="form-input"
                    required
                  >
                    <option value="">Selecciona...</option>
                    <option value="menos-50">Menos de 50</option>
                    <option value="50-100">50 - 100</option>
                    <option value="100-500">100 - 500</option>
                    <option value="mas-500">Más de 500</option>
                  </select>
                </div>

                <Input
                  label="¿De qué vereda/municipio eres?"
                  name="vereda"
                  value={formData.vereda}
                  onChange={handleChange}
                  placeholder="Ej: Vereda La Esperanza, Fresno"
                  required
                  error={inputErrors.vereda}
                />

                <div>
                  <label className="form-label">¿Qué es lo que más te preocupa de tu cultivo?</label>
                  <textarea
                    name="preguntaPrincipal"
                    value={formData.preguntaPrincipal}
                    onChange={handleChange}
                    placeholder="Ej: Amarillamiento de hojas, bajo rendimiento, plagas..."
                    className={clsx(
                      'w-full px-4 py-3 rounded-lg border-2 border-primary/20 bg-white text-coffee placeholder-coffee/50 smooth-transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 h-32 resize-none'
                    )}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={loading}
                  className="w-full"
                >
                  {loading ? 'Procesando...' : 'Reservar mi Cupo GRATIS'}
                </Button>

                <p className="text-center text-sm text-coffee/70 mt-4">
                  Tus datos están seguros. No compartimos tu información con terceros.
                </p>
              </form>
            </div>
          </ScrollReveal>

          {/* Right - Workshop Details */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Detalles del Taller
              </h3>

              <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-primary">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-coffee">Fecha</h4>
                      <p className="text-coffee/70">3 de Marzo de 2026</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-coffee">Horario</h4>
                      <p className="text-coffee/70">9:00 AM - 12:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-coffee">Cupo</h4>
                      <p className="text-coffee/70">Solo 30 personas</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-accent/10 rounded-xl p-6">
                <h4 className="font-semibold text-primary mb-4">Lo que incluye:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-coffee">Material completo del taller</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-coffee">Muestra de biofertilizantes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-coffee">Almuerzo incluido</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-coffee">Certificado de participación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-coffee">Conexión con otros agricultores</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/5 rounded-xl p-6 border border-secondary/20">
                <h4 className="font-semibold text-secondary mb-2">💰 COSTO: GRATIS</h4>
                <p className="text-coffee/70 text-sm">
                  El taller es 100% gratuito. Nuestro objetivo es educar y construir comunidad.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
