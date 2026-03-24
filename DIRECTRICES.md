# Directrices para Agentes - BioNeural Solutions

## 🎯 Contexto del Proyecto

Eres un agente trabajando en el proyecto **BioNeural Solutions**, una biofábrica de biofertilizantes artesanales ubicada en Fresno, Tolima, Colombia.

### Información Clave del Proyecto

**LEE PRIMERO:** `PROJECT.md` - Contiene la visión completa del proyecto.

### Quiénes Son los Socios

| Nombre | Rol | Contacto |
|--------|-----|----------|
| **Usuario** | Co-fundador | coordina todo, desarrollo web, investigación |
| **Tío Ángel** (Rodrigo Ángel) | Co-fundador / Agrónomo | director técnico de la biofábrica, presidente de Asofrutos |

### CómoTrabaja el Usuario

1. **Comunicación directa y concisa** - El usuario responde mejor a mensajes cortos y directos
2. **Trabajo en equipo con agentes** - delegar es bienvenido, pero siempre verificar resultados
3. **Enfoque práctico** - Prefiere acción sobre análisis excesivo
4. **Documentación** - Todo se documenta en archivos markdown para referencia futura
5. **Iteración rápida** - Mejor hacer algo y corregir que esperar perfection

---

## 📋 Estructura de Documentación

```
├── PROJECT.md              ← Información general del proyecto
├── DIRECTRICES.md          ← Este archivo
├── MEMORIA.md             ← Notas, ideas, comentarios acumulados
├── TAREAS.md              ← Lista de tareas pendientes
├── investigacion-polilla-guatemalteca/  ← Investigación completa
├── comunidad-agricultores-fresno/      ← Proyecto comunidad
└── src/                  ← Código fuente del sitio web
```

---

## 🧠 Directrices de Estilo

### Para Escritura

- **Idioma:** Español (los documentos del proyecto están en español)
- **Tono:** Profesional pero accesible (no muy formal, no muy casual)
- **Estructura:** Encabezados claros, listas, tablas cuando corresponda
- **Código:** Comentado en español cuando sea necesario

### Para Código

- **Estándar:** Sigue las convenciones existentes en el proyecto
- **Calidad:** Código limpio, bien indentado, sin TypeScript/ESLint errors
- **Testing:** Verifica que todo funcione antes de报告ar "completo"

### Para Respuestas al Usuario

- **Sé directo:** Ve al grano, sin introductions extensas
- **Opciones:** Cuando haya varias opciones, preséntalas brevemente
- **Confirmación:** Antes de hacer algo importante, pregunta
- **Evita:** Frases como "¡Buena pregunta!" o alabanzas innecesarias

---

## 🔧 Herramientas y Tecnologías del Proyecto

### Stack Principal
- React 18 + Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- Vercel (deployment)

### Herramientas Auxiliares
- N8N (automatización)
- Google Sheets (datos)
- Tally.so (formularios)
- Git (control de versiones)

---

## 📌 Reglas Importantes

1. **Siempre lee PROJECT.md primero** al comenzar cualquier trabajo
2. **No supongas información** - verifica antes de actuar
3. **Documenta todo** - nuevas ideas van en MEMORIA.md
4. **Usa TAREAS.md** - para rastrear progreso de tareas multi-paso
5. **Verifica tu trabajo** - no asumas que todo funciona,pruébalo
6. **Pideclarificación** si algo no está claro

---

## 🚫 Cosas a Evitar

- ❌ Usar `as any`, `@ts-ignore` o suprimir errores de tipo
- ❌ Dejar código roto sin报告ar
- ❌ Hacer cambios grandes sin antes discutir el enfoque
- ❌ Ignorar advertencias del linter o errores de compilación
- ❌ Asumir que el usuario ya sabe algo - pregunta si no estás seguro

---

## 📞 Cómo reportar progreso

- Para tareas simples: "Listo" + lo que se hizo
- Para tareas complejas: Estado, qué se ha hecho, qué falta, blockers
- Para problemas: Qué esperaba, qué obtuvo, posible solución

---

*Estas directrices aplican a cualquier agente trabajando en el proyecto BioNeural Solutions.*
