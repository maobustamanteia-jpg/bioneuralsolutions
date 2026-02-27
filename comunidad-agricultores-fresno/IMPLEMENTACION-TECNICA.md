# Guía de Implementación Técnica - Landing Page y Automatización

## 🏗️ Stack Tecnológico Recomendado

```
Frontend:    React + Vite + Tailwind CSS
Hosting:     Vercel (gratuito)
Formulario:   Tally.so (gratuito hasta 100 respuestas/mes)
Backend:     N8N (self-hosting o cloud)
Database:    Google Sheets (gratuito)
Analytics:   Google Analytics 4 (gratuito)
WhatsApp:    WhatsApp Business API o WhatsApp Business App
```

---

## 📁 Estructura del Proyecto

```
comunidad-agricultores-fresno/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── ProblemSection.jsx
│   │   ├── BenefitsSection.jsx
│   │   ├── FormSection.jsx
│   │   ├── Testimonials.jsx
│   │   └── FAQ.jsx
│   ├── pages/
│   │   └── LandingPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   ├── images/
│   │   ├── farmer-hero.jpg
│   │   ├── avocado-yellowing.jpg
│   │   └── avocado-healthy.jpg
│   ├── logo.png
│   └── favicon.ico
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## 🚀 Paso 1: Setup Inicial del Proyecto

### 1.1 Crear proyecto Vite con React
```bash
cd comunidad-agricultores-fresno
npm create vite@latest . -- --template react
npm install
```

### 1.2 Instalar dependencias adicionales
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install lucide-react
```

### 1.3 Configurar Tailwind CSS
**Archivo: tailwind.config.js**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3A6332',    // Verde agro
        secondary: '#F59E0B',   // Naranja acción
        accent: '#059669',      // Verde claro
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

### 1.4 Configurar CSS base
**Archivo: src/index.css**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;500;600&display=swap');

body {
  @apply font-sans text-gray-800 antialiased;
}

h1, h2, h3, h4, h5, h6 {
  @apply font-heading;
}

/* Smooth scroll */
html {
  scroll-behavior: smooth;
}

/* Custom animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.6s ease-out;
}
```

---

## 🎨 Paso 2: Componentes de la Landing Page

### 2.1 Hero Section
**Archivo: src/components/Hero.jsx**
```jsx
import { Sprout, Calendar, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              ¿Tus Árboles de Aguacate se Están Amarillando?
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Aprende técnicas probadas para recuperar tus cultivos. Únete a la comunidad de agricultores de Fresno.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#registro"
                className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 text-center"
              >
                Reservar mi cupo GRATIS
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>[FECHA]</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Fresno, Tolima</span>
              </div>
              <div className="flex items-center gap-2">
                <Sprout className="w-5 h-5" />
                <span>100% Orgánico</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <img
                src="/images/avocado-farmer.jpg"
                alt="Agricultor con aguacate"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### 2.2 Problem Section
**Archivo: src/components/ProblemSection.jsx**
```jsx
import { AlertTriangle } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    "Tus árboles de aguacate están perdiendo hojas y color",
    "Has probado soluciones sin resultados",
    "Pierdes dinero cada cosecha",
    "No sabes qué causa el amarillamiento",
    "Te sientes solo frente a este problema",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            ¿Reconoces estos problemas?
          </h2>
          <p className="text-gray-600 text-lg">
            No eres el único. El amarillamiento afecta a cientos de agricultores en Tolima.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid gap-4">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <AlertTriangle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">{problem}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-2xl font-semibold text-primary">
              Pero hay una solución.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### 2.3 Benefits Section
**Archivo: src/components/BenefitsSection.jsx**
```jsx
import { CheckCircle } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    "Causas reales del amarillamiento (no lo que te dicen los vendedores)",
    "Técnicas orgánicas para recuperar árboles afectados",
    "Cómo prevenir futuros casos en tu cultivo",
    "Métodos de fertilización efectivos y económicos",
    "Conectar con agricultores de la zona",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Lo que aprenderás en el taller
          </h2>
          <p className="text-gray-600 text-lg">
            Todo en 3 horas, sin jerga técnica, 100% práctico.
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-green-50 rounded-lg border-2 border-green-100"
            >
              <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### 2.4 Form Section con Tally.so
**Archivo: src/components/FormSection.jsx**
```jsx
import { Users, Clock, Calendar } from 'lucide-react';

export default function FormSection() {
  return (
    <section id="registro" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Detalles del Taller
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Fecha</h3>
                    <p className="text-gray-600">[FECHA POR DEFINIR]</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Horario</h3>
                    <p className="text-gray-600">9:00 AM - 12:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Cupo</h3>
                    <p className="text-gray-600">Solo 30 personas (máximo)</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-4 text-primary">
                  Lo que incluye:
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✅ Materiales del taller</li>
                  <li>✅ Muestra de biofertilizantes</li>
                  <li>✅ Almuerzo</li>
                  <li>✅ Certificado de participación</li>
                </ul>
                <p className="mt-4 font-semibold text-secondary">
                  Costo: 100% GRATUITO
                </p>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Inscríbete en 1 minuto
                </h3>
                <p className="text-gray-600 mb-6">
                  Solo necesitamos algunos datos para reservar tu cupo.
                  Te contactaremos por WhatsApp para confirmar tu asistencia.
                </p>

                {/* Tally.so iframe */}
                <iframe
                  data-tally-src="https://tally.so/embed/[TU-FORM-ID]?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title="Registro Taller de Amarillamiento"
                  className="rounded-lg"
                ></iframe>

                <script src="https://tally.so/widgets/embed.js"></script>

                <p className="text-center text-sm text-gray-500 mt-4">
                  Tus datos están seguros. No compartimos tu información.
                </p>
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-600 mb-2">¿Tienes dudas?</p>
                <a
                  href="https://wa.me/57XXXXXXXXXX"
                  className="text-primary font-semibold hover:underline"
                >
                  Escríbenos al WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### 2.5 FAQ Section
**Archivo: src/components/FAQ.jsx**
```jsx
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "¿Es realmente gratuito?",
      answer: "Sí, el taller es 100% gratuito. Incluye materiales, almuerzo y muestra de productos.",
    },
    {
      question: "¿Necesito conocimientos previos?",
      answer: "No, el taller está diseñado para agricultores de todos los niveles de experiencia.",
    },
    {
      question: "¿Puedo llevar a mi familia?",
      answer: "Claro, siempre que haya cupos disponibles. Cada persona debe inscribirse por separado.",
    },
    {
      question: "¿El taller es teórico o práctico?",
      answer: "Es 90% práctico. Aprenderás técnicas que puedes aplicar en tu cultivo desde el primer día.",
    },
    {
      question: "¿Tendré que comprar productos después?",
      answer: "No. Te daremos conocimiento y técnicas que puedes aplicar con ingredientes locales. Si te interesa nuestros productos, estaremos disponibles, pero no es obligación.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-gray-600 text-lg">
            ¿Tienes otra pregunta? Escríbenos al WhatsApp.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 🔌 Paso 3: Configurar Tally.so

### 3.1 Crear cuenta en Tally.so
1. Ve a https://tally.so
2. Crea una cuenta gratuita
3. Crea un nuevo formulario

### 3.2 Campos del formulario
1. **Nombre completo** (Texto corto)
2. **WhatsApp** (Teléfono con formato +57)
3. **Tipo de cultivo** (Selección: Aguacate, Café, Ambos, Otro)
4. **Cantidad de árboles** (Selección: Menos de 50, 50-100, 100-500, Más de 500)
5. **Vereda/Municipio** (Texto corto)
6. **Pregunta principal** (Texto largo)

### 3.3 Obtener el ID del formulario
1. Abre tu formulario en Tally
2. Copia el ID de la URL (ej: https://tally.so/embed/w5rQ1V?...)
3. El ID es: `w5rQ1V`

### 3.4 Configurar Webhooks en Tally
1. Ve a Settings → Integrations
2. Busca "Webhooks"
3. Agrega tu endpoint de N8N:
   ```
   https://[TU-N8N-URL]/webhook/taller-amarillamiento
   ```
4. Selecciona "On form submission"

---

## ⚙️ Paso 4: Configurar N8N para Automatización

### 4.1 Crear workflow en N8N

```yaml
Workflow: Taller Amarillamiento - Captura de Leads

Nodes:
1. Webhook (Trigger)
   - Method: POST
   - Path: /webhook/taller-amarillamiento
   - Authentication: None (o Header para seguridad)

2. Set Node (Procesar datos)
   - Extraer campos del formulario
   - Normalizar número de WhatsApp (+57 XXX XXX XXXX)

3. Google Sheets Node (Guardar en sheet)
   - Operation: Append
   - Spreadsheet: [TU SPREADSHEET ID]
   - Sheet: "Registros"
   - Columns: fecha, nombre, whatsapp, cultivo, arboles, vereda, pregunta

4. Wait Node (Pequeña pausa)
   - Wait 2 segundos

5. HTTP Request Node (WhatsApp API - Opcional)
   - Method: POST
   - URL: https://api.whatsapp.com/v1/messages
   - Headers: Authorization: Bearer [TOKEN]
   - Body: Mensaje de confirmación

6. Email Node (Opcional - Backup)
   - Enviar email a ti mismo con los datos
```

### 4.2 Código del Set Node (JavaScript)
```javascript
// Extraer datos del webhook
const data = $input.item.json.data;

// Normalizar número de WhatsApp
let whatsapp = data.whatsapp;
if (!whatsapp.startsWith('+57')) {
  whatsapp = '+57' + whatsapp.replace(/\D/g, '');
}

// Fecha actual
const fecha = new Date().toISOString();

return {
  json: {
    fecha: fecha,
    nombre: data.nombre,
    whatsapp: whatsapp,
    cultivo: data.cultivo,
    arboles: data.arboles,
    vereda: data.vereda,
    pregunta: data.pregunta,
  }
};
```

### 4.3 Mensaje de WhatsApp (si usas API)
```javascript
{
  "messaging_product": "whatsapp",
  "to": "{{ $json.whatsapp }}",
  "type": "template",
  "template": {
    "name": "registro_taller_confirmacion",
    "language": {
      "code": "es"
    },
    "components": [
      {
        "type": "body",
        "parameters": [
          {
            "type": "text",
            "text": "{{ $json.nombre }}"
          }
        ]
      }
    ]
  }
}
```

---

## 📊 Paso 5: Configurar Google Sheets

### 5.1 Crear Google Sheet
1. Crea un nuevo Google Sheet
2. Nombre: "Registros Taller Amarillamiento"
3. Crea una hoja llamada "Registros"

### 5.2 Columnas del Sheet
```
Fecha | Nombre | WhatsApp | Cultivo | Árboles | Vereda | Pregunta | Contactado
```

### 5.3 Dar permisos a N8N
1. En N8N, configura las credenciales de Google Sheets
2. Autoriza tu cuenta
3. Copia el ID del spreadsheet de la URL

---

## 🚀 Paso 6: Deploy a Vercel

### 6.1 Configurar Vite para producción
**Archivo: vite.config.js**
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
```

### 6.2 Crear archivo vercel.json
**Archivo: vercel.json**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 6.3 Deploy manual
```bash
npm run build
vercel --prod
```

### 6.4 Deploy automático (recomendado)
```bash
git init
git add .
git commit -m "Initial commit - Landing page taller amarillamiento"
git remote add origin [TU REPO GITHUB]
git push -u origin main
```

Luego en Vercel:
1. Importa tu repositorio
2. Vercel detectará Vite automáticamente
3. Deploy automático en cada push

---

## 📈 Paso 7: Analytics y Rastreo

### 7.1 Google Analytics 4
1. Crea una propiedad en GA4
2. Copia el Measurement ID
3. Agrega a tu index.html:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=[MEASUREMENT-ID]"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '[MEASUREMENT-ID]');
</script>
```

### 7.2 Eventos personalizados
```javascript
// En tu componente FormSection.jsx
const trackFormSubmit = () => {
  if (window.gtag) {
    gtag('event', 'form_submit', {
      'event_category': 'engagement',
      'event_label': 'taller_amarillamiento'
    });
  }
};
```

### 7.3 UTM Parameters para URLs
```
URL de landing page con UTM:
https://tu-dominio.com/?utm_source=facebook&utm_medium=social&utm_campaign=taller_amarillamiento
```

---

## 🔒 Paso 8: Seguridad y Validación

### 8.1 Validación del formulario
Tally.so maneja la validación automáticamente. Puedes configurar:
- Campos obligatorios
- Formato de teléfono
- Validación de email

### 8.2 Seguridad del webhook
```javascript
// En N8N, puedes agregar validación
const webhookData = $input.item.json;

// Validar campos requeridos
if (!webhookData.nombre || !webhookData.whatsapp) {
  return {
    json: { error: 'Campos requeridos faltantes' },
    status: 400
  };
}

// Validar formato de WhatsApp
const whatsappValido = /^\+57\d{10}$/.test(webhookData.whatsapp);
if (!whatsappValido) {
  return {
    json: { error: 'Formato de WhatsApp inválido' },
    status: 400
  };
}
```

### 8.3 Rate limiting
```javascript
// Prevenir múltiples envíos del mismo número
const sheetData = await $node["Google Sheets"].all();
const existe = sheetData.filter(row => row.json.whatsapp === webhookData.whatsapp);

if (existe.length > 0) {
  return {
    json: { message: 'Ya estás registrado' },
    status: 200
  };
}
```

---

## 🧪 Paso 9: Testing

### 9.1 Checklist de Testing
- [ ] Formulario funciona correctamente
- [ ] N8N webhook recibe datos
- [ ] Google Sheets guarda registros
- [ ] WhatsApp API envía mensajes (si aplica)
- [ ] Landing page se ve bien en móvil
- [ ] Landing page se ve bien en desktop
- [ ] Velocidad de carga < 3 segundos
- [ ] Todos los links funcionan
- [ ] FAQ expande/colapsa correctamente
- [ ] Scroll suave funciona
- [ ] Formulario es responsive

### 9.2 Test de conversión
1. Completa el formulario tú mismo
2. Verifica que el dato llega a Google Sheets
3. Verifica que recibes notificación
4. Simula diferentes cultivos y respuestas

### 9.3 Test de cross-browser
- [ ] Chrome
- [ ] Firefox
- [ ] Safari (Mac/iPhone)
- [ ] Edge
- [ ] Móvil (iOS/Android)

---

## 🚨 Paso 10: Solución de Problemas Comunes

### Problema: Formulario no carga
**Solución:**
- Verifica el ID de Tally.so
- Verifica que tengas internet
- Verifica la consola del navegador (F12)

### Problema: N8N no recibe datos
**Solución:**
- Verifica que el webhook esté activo
- Verifica la URL del webhook
- Revisa logs de N8N

### Problema: Google Sheets no guarda datos
**Solución:**
- Verifica permisos del Sheet
- Verifica el ID del spreadsheet
- Revisa nombre exacto de las columnas

### Problema: Landing page lenta
**Solución:**
- Comprime imágenes (usar TinyPNG)
- Minimiza CSS/JS
- Usa CDN para imágenes
- Elimina animaciones pesadas

---

## 📦 Paso 11: Preparación para Producción

### 11.1 Antes del lanzamiento
```bash
# Build de producción
npm run build

# Test local
npm run preview

# Verificar build
ls dist/
```

### 11.2 Pre-flight checklist
- [ ] Todos los placeholders reemplazados ([FECHA], [LUGAR], etc.)
- [ ] Imágenes optimizadas
- [ ] Google Analytics configurado
- [ ] Webhook de N8N funcionando
- [ ] Google Sheets recibiendo datos
- [ ] WhatsApp API probado (si aplica)
- [ ] Links de prueba convertidos a producción
- [ ] SEO básico configurado (meta tags, título)

### 11.3 Post-launch
- [ ] Monitorear Google Analytics
- [ ] Revisar registros en Google Sheets
- [ ] Testear desde dispositivos reales
- [ ] Ajustar según feedback
- [ ] A/B testing de headlines y CTAs

---

## 🔄 Paso 12: Mantenimiento y Optimización

### 12.1 Actualizaciones frecuentes
- Actualizar fecha del próximo taller
- Agregar testimonios nuevos
- Ajustar según feedback
- Optimizar copywriting

### 12.2 A/B Testing
```javascript
// Ejemplo de A/B testing con Google Optimize
// (si quieres integrarlo más adelante)
```

### 12.3 Backup
- Backup regular de Google Sheets
- Guardar logs de N8N
- Version control en Git

---

*Esta guía está diseñada para ser implementada en aprox. 1-2 días si tienes experiencia.
Si es tu primera vez, tómate 3-4 días para aprender y configurar todo.*
