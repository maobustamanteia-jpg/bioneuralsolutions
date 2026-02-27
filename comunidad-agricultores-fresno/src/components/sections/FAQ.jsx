import ScrollReveal from '../effects/ScrollReveal'
import Accordion from '../ui/Accordion'

export default function FAQ() {
  const faqItems = [
    {
      question: "¿Es realmente gratuito el taller?",
      answer: "Sí, el taller es 100% gratuito. Incluye materiales, almuerzo y muestra de productos. Nuestro objetivo es educar y construir comunidad con los agricultores de Fresno y Tolima."
    },
    {
      question: "¿Necesito conocimientos previos?",
      answer: "No, el taller está diseñado para agricultores de todos los niveles de experiencia. Explicaremos todo de manera clara y práctica, sin jerga técnica complicada."
    },
    {
      question: "¿Puedo llevar a mi familia o compañeros?",
      answer: "Claro, siempre que haya cupos disponibles. Cada persona debe inscribirse por separado para que podamos planificar correctamente el espacio y los materiales."
    },
    {
      question: "¿El taller es teórico o práctico?",
      answer: "Es 90% práctico. Aprenderás técnicas que puedes aplicar en tu cultivo desde el primer día. Habrá demostraciones en vivo y podrás hacer preguntas."
    },
    {
      question: "¿Tendré que comprar productos después?",
      answer: "No. Te daremos conocimiento y técnicas que puedes aplicar con ingredientes locales y métodos orgánicos. Si te interesa nuestros productos, estaremos disponibles, pero no es obligación de ninguna manera."
    },
    {
      question: "¿Qué debo llevar al taller?",
      answer: "Solo ganas de aprender. Te proporcionaremos todos los materiales necesarios para el taller, incluyendo cuadernos, lápices y las muestras de productos."
    },
    {
      question: "¿Cómo confirmo mi asistencia?",
      answer: "Después de inscribirte, te contactaremos por WhatsApp en las próximas 24 horas para confirmar tu asistencia y enviarte la ubicación exacta del taller."
    },
    {
      question: "¿Qué pasa si no puedo asistir?",
      answer: "Por favor avísanos lo antes posible por WhatsApp o email para liberar tu cupo. Hay otros agricultores en lista de espera que agradecerían el espacio."
    },
    {
      question: "¿Dará taller en otras fechas?",
      answer: "Dependiendo de la demanda, planeamos realizar más talleres en el futuro. Inscribirte ahora nos ayuda a planificar mejor los próximos eventos."
    },
    {
      question: "¿Puedo inscribirme si no soy de Fresno?",
      answer: "Sí, el taller está abierto a todos los agricultores interesados. Sin embargo, priorizamos a agricultores de Fresno y zonas cercanas por la logística y el costo de traslado."
    }
  ]

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-coffee/70">
              ¿Tienes otra duda? Escríbenos al WhatsApp y te respondemos rápidamente.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Accordion items={faqItems} />
        </ScrollReveal>
      </div>
    </section>
  )
}
