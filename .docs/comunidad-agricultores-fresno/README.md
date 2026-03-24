# BioCultivo - Comunidad de Agricultores

## 📋 Resumen del Proyecto

Landing page premium para taller gratuito de amarillamiento de aguacate en Fresno, Tolima.

**Tecnología:** React 18.2+ + Vite + Tailwind CSS + Framer Motion + Lucide React

**Objetivo:** Crear comunidad de agricultores a través de educación gratuita.

---

## 🏗️ Estructura del Proyecto

```
comunidad-agricultores-fresno/
├── public/                          # Assets estáticos
│   ├── images/                   # Imágenes optimizadas
│   ├── favicon.ico
│   └── logo.svg               # Logo
├── src/
│   ├── components/
│   │   ├── ui/              # Componentes reutilizables
│   │   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Card.jsx
│   │   ├── Accordion.jsx
│   │   ├── ToastContainer.jsx    # (opcional)
│   │   └── effects/           # Efectos y animaciones
│   │       ├── ScrollReveal.jsx   # Scroll-triggered animations
│   │       ├── SmoothScroll.jsx    # Smooth scrolling
│   │       └── CounterAnimado.jsx  # Animated counter
│   │   └── layouts/          # Layout components
│   │       ├── SmoothScroll.jsx   # Wrapper para scroll suave
│   │       └── Navigation.jsx    # Header con navegación
│   │   └── sections/          # Secciones de la página
│   │       ├── Hero.jsx           # Hero section
│   │       ├── CuentaRegresiva.jsx # Comparativa antes/después
│   │       ├── Benefits.jsx         # Beneficios del taller
│   │       ├── GaleriaInteractiva.jsx  # Galería interactiva
│   │       ├── CertificadoDigital.jsx # Certificado digital
│   │       ├── RegistrationForm.jsx # Formulario de registro
│   │       ├── FAQ.jsx           # Preguntas frecuentes
│   │       └── Footer.jsx           # Footer de página
│   │   └── App.jsx              # Componente principal
│   │       ├── main.jsx
│   │       └── index.css          # Estilos globales
├── .gitignore                 # Archivos ignorados por Git
├── package.json              # Dependencias del proyecto
├── vite.config.js            # Configuración de Vite
├── tailwind.config.js          # Configuración de Tailwind
├── vercel.json              # Configuración de Vercel
└── README.md                # Este archivo
└── PLAN-ESTRATEGICO.md          # Plan estratégico completo
├── PLAN-ACTUAL.md              # Plan de acción actual
```

---

## 🚀 Inicio Rápido

### Paso 1: Instalación
```bash
cd comunidad-agricultores-fresno
npm install
```

### Paso 2: Verificar estructura
```bash
ls src/ components/
```

### Paso 3: Correr `npm run dev`
```bash
npm run dev
```

### Paso 4: Abrir en navegador
```bash
# El servidor correrá en:
http://localhost:5173
```

---

## 📚 Documentación

### README.md - Guía principal
Contiene información general del proyecto, objetivos y tecnología.

### PLAN-ESTRATEGICO.md - Plan completo de estrategia
Documentación detallada para:
- Visión del proyecto
- Objetivos SMART
- Estrategia de captura de leads
- Infraestructura técnica
- Calendario de implementación

### PLAN-ACTUAL.md - Plan de acción actual
Estado actual de cada tarea (pendiente/en progreso/completado)

---

## 🎨 Stack Tecnológico

### Frontend
- **React 18.2+** - Framework JavaScript
- **Vite 5** - Build tool
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animación library
- **Lucide React** - Icon library

### Backend
- **N8N** - Automatización (en tu servidor)
- **Google Sheets** - Almacenamiento de datos
- **WhatsApp Business** - Notificaciones

---

## 🔧 Comandos Útiles

### Desarrollo
```bash
# Iniciar servidor
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

### Testing
```bash
# Verificar responsive
# Probar componentes individualmente

# Revisar consola por errores
```

---

## 📝 Checklist de Pre-Lanzamiento

### Técnico
- [x] Estructura del proyecto creada
- [x] Dependencias instaladas correctamente
- [ ] No hay errores de sintaxis en los componentes
- [ ] Formulario conectado a N8N
- [ ] Webhook configurado: https://dep-n8n.n8ntusaguacates.space/webhook/taller-amarillamiento
- [ ] Responsive en móvil y tablet
- [ ] Smooth scroll implementado con Lenis

### Contenido
- [ ] Copywriting optimizado para conversión
- [ ] Imágenes listas para agregar
- [ ] SEO configurado para búsquedas

### Difusión
- [ ] Documentación completa lista para redes sociales
- [ ] Estrategia definida para Facebook y WhatsApp

---

## 🚀 Prioridades

### Prioridad ALTA
- [ ] Corregir Benefits.jsx (completado)
- [ ] Probar responsive en diferentes dispositivos
- [ ] Optimizar imágenes para conexiones lentas
- [ ] Implementar micro-animaciones opcionales (dark mode)

### Prioridad MEDIA
- [ ] Validar formulario antes de producción
- [ ] Testear scroll en todos los dispositivos
- [ ] Probar N8N webhook
- [ ] Preparar imágenes placeholder

---

## 📊 Notas Importantes

- **Seguridad:** El archivo `../instancia tus/CONNECT.md` contiene datos sensibles de otros clientes. Solo lectura permitido.
- **Backups:** No has hecho backups recientes.
- **Seguridad del proyecto:** N8N está en un servidor dedicado. Mantenlo seguro.

---

## 💡 Soporte

### Documentación oficial
- React: https://react.dev/
- Framer Motion: https://motion.dev/
- Tailwind CSS: https://tailwindcss.com/
- Vite: https://vitejs.dev/

### Tutoriales
- Lucide React: https://lucide.dev/
- N8N Docs: https://docs.n8n.io/

---

## 📞 Contacto

### Equipo
- **Desarrollador:** Tu equipo de BioCultivo
- **Agrónomos:** Los socios del proyecto

---

## 🎯 Próximos Pasos

1. ✅ Estructura creada
2. ⏳️ Instalar dependencias
3. ⏳️ Crear componentes base
4. ⏳️ Implementar efectos y scroll
5. ⏳️ Crear secciones principales
6. ⏳️ Configurar N8N workflow
7. ⏳️ Testing y optimización
8. ⏳️ Deploy y lanzamiento

---

## ✅ Estado Actual

**Completados:**
- [x] package.json
- [x] vite.config.js
- [x] tailwind.config.js
- [x] vercel.json
- [x] Estructura de carpetas
- [x] README.md (este archivo)

**En progreso:**
- [ ] SmoothScroll.jsx - Listo
- [ ] ScrollReveal.jsx - Pendiente
- [ ] CounterAnimado.jsx - Pendiente
- [ ] Hero.jsx - Pendiente
- [ ] Benefits.jsx - Pendiente
- [ ] GaleriaInteractiva.jsx - Pendiente
- [ ] CertificadoDigital.jsx - Pendiente
- [ ] RegistrationForm.jsx - Pendiente
- [ ] FAQ.jsx - Pendiente
- [ ] Footer.jsx - Pendiente
- [ ] App.jsx - Pendiente

**Pendientes:**
- [ ] Button.jsx - Pendiente
- [ ] Input.jsx - Pendiente
- [ ] Card.jsx - Pendiente
- [ ] Accordion.jsx - Pendiente
- [ ] ToastContainer.jsx - Opcional
- [ ] SmoothScroll.jsx - Pendiente
- [ ] CounterAnimado.jsx - Pendiente

---

**Estado:** ✅ Fundamentos sólidos. El proyecto está listo para desarrollarse.
