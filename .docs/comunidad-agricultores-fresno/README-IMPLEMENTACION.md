# BioCultivo - Landing Page Premium

Landing page premium para taller de amarillamiento de aguacate en Fresno, Tolima.

## 🎨 Características

- ✅ Diseño orgánico/natural premium
- ✅ Animaciones fluidas con Framer Motion
- ✅ Smooth scrolling con Lenis
- ✅ Optimizado para conexiones lentas
- ✅ Responsive (móvil, tablet, desktop)
- ✅ Integración con N8N para captura de leads
- ✅ Cuenta regresiva visual (antes/después)
- ✅ Galería interactiva de fotos
- ✅ Certificado digital estático
- ✅ 100% gratis y open source

## 🛠️ Stack Tecnológico

- React 18.2+ con Vite
- Framer Motion (animaciones)
- Tailwind CSS 4 (estilos)
- Lenis (smooth scrolling)
- Lucide React (iconos)
- N8N (automatización en tu servidor)

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📂 Estructura del Proyecto

```
src/
├── components/
│   ├── ui/              # Componentes reutilizables
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Card.jsx
│   │   └── Accordion.jsx
│   ├── effects/         # Efectos y animaciones
│   │   ├── ScrollReveal.jsx
│   │   └── CounterAnimado.jsx
│   ├── sections/        # Secciones de la página
│   │   ├── Hero.jsx
│   │   ├── CuentaRegresiva.jsx
│   │   ├── Benefits.jsx
│   │   ├── GaleriaInteractiva.jsx
│   │   ├── CertificadoDigital.jsx
│   │   ├── RegistrationForm.jsx
│   │   ├── FAQ.jsx
│   │   └── Footer.jsx
│   └── layout/         # Layout components
│       └── SmoothScroll.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Colores del Diseño

| Elemento | Color | Código |
|----------|-------|--------|
| Verde Principal | Forest Green | `#1B4332` |
| Verde Secundario | Sage | `#52796F` |
| Verde Claro | Mint | `#95D5B2` |
| Acento Naranja | Amber | `#F59E0B` |
| Fondo | Crema Natural | `#FEFAE0` |
| Texto Oscuro | Coffee | `#2D3436` |

## 🚀 Deploy en Vercel

### 1. Subir a GitHub

```bash
git init
git add .
git commit -m "Initial commit - BioCultivo landing page"
git branch -M main
git remote add origin https://github.com/tu-usuario/biocultivo.git
git push -u origin main
```

### 2. Conectar en Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Clic en "Add New Project"
3. Importa tu repositorio de GitHub
4. Vercel detectará automáticamente Vite + React
5. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `comunidad-agricultores-fresno` (si está en subcarpeta)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

6. Clic en "Deploy"

## 🔧 Configuración de N8N

### Webhook URL

```
https://dep-n8n.n8ntusaguacates.space/webhook/taller-amarillamiento
```

### Flujo de Datos

```
Landing Page (Formulario)
    ↓
Fetch POST
    ↓
N8N Webhook
    ├── Google Sheets (guardar datos)
    ├── WhatsApp (enviar confirmación)
    └── Email (notificación opcional)
```

## 📝 Personalización

### Cambiar Fecha del Taller

Archivo: `src/components/sections/RegistrationForm.jsx`

Busca y modifica:
```javascript
<p className="text-coffee/70">3 de Marzo de 2026</p>
```

### Cambiar Imágenes

Las imágenes se encuentran en `public/images/`. Puedes reemplazarlas con tus propias imágenes optimizadas:

- `hero-avocado.jpg` - Imagen principal del hero
- `agricultor-1.jpg` a `agricultor-4.jpg` - Fotos de agricultores para galería

Recomendación: Usar imágenes WebP optimizadas (máximo 800x600px para desktop, 400x300px para móvil).

### Cambiar Colores

Archivo: `tailwind.config.js`

Modifica los valores de `colors` según tu preferencia.

## ⚡ Optimización para Conexiones Lentas

### Imágenes Optimizadas

El proyecto está configurado para usar:
- Formato WebP (90% más pequeño que JPG/PNG)
- Lazy loading (cargar solo cuando sea visible)
- Múltiples tamaños según dispositivo

### Code Splitting

Los componentes se dividen en chunks para cargar solo lo necesario:
- `react-vendor` - React y React DOM
- `motion-vendor` - Framer Motion
- `utils-vendor` - Iconos y utilidades

### Animaciones Adaptativas

- **Desktop**: Todas las animaciones activas
- **Móvil**: Solo animaciones críticas (sin Three.js, partículas reducidas)

## 🐛 Solución de Problemas

### Formulario no envía datos

1. Verifica que N8N esté corriendo en tu servidor
2. Verifica la URL del webhook
3. Revisa la consola del navegador (F12) por errores
4. Verifica CORS en N8N (debe permitir solicitudes desde tu dominio)

### Animaciones no funcionan

1. Verifica que `framer-motion` esté instalado
2. Verifica que no haya errores en la consola
3. Desactiva "Reduced motion" en configuración del navegador

### Build falla

1. Borra `node_modules` y `package-lock.json`
2. Ejecuta `npm install`
3. Ejecuta `npm run build` nuevamente

## 📊 Métricas

### Conversiones a Medir

- Visitas a landing page
- Tasa de conversión del formulario
- Fuente de tráfico (UTM parameters)
- Tasa de rebote
- Tiempo en página

### UTM Parameters

```
https://biocultivo.com/?utm_source=facebook&utm_medium=social&utm_campaign=taller_amarillamiento
```

## 📄 Archivos de Documentación

- `PLAN-ESTRATEGICO.md` - Plan estratégico completo
- `COPYWRITING-GUIDE.md` - Guía de copywriting
- `DIFUSION-REDES-SOCIALES.md` - Estrategia en redes sociales
- `IMPLEMENTACION-TECNICA.md` - Guía técnica detallada
- `HOJA-DE-RUTA.md` - Hoja de ruta de 4 semanas

## 🤝 Contribución

Este proyecto es parte de la iniciativa BioCultivo para educar a agricultores de Fresno, Tolima.

## 📞 Contacto

- WhatsApp: +57 320 306 2007
- Email: contacto@biocultivo.com
- Web: https://biocultivo.com

## 📜 Licencia

© 2026 BioCultivo. Todos los derechos reservados.
