# PLAN DE IDENTIDAD VISUAL PARA ETIQUETAS FRONTALES
## BioNeural Solutions - Sistema de Etiquetas Unificado

---

## 1. RESUMEN EJECUTIVO

Este documento establece las directrices de diseño para crear un sistema de etiquetas frontales coherente y profesional para todos los productos de BioNeural Solutions. El objetivo es mantener consistencia visual con la identidad de marca web mientras se diferencia cada línea de productos.

---

## 2. ANÁLISIS DE SITUACIÓN ACTUAL

### 2.1 Productos Identificados
| Producto | Línea | Categoría |
|----------|-------|-----------|
| **SULPHOMAX** | Protección | Fungicida/Acaricida Bioracional |
| **AMINOMAX** | Nutrición | Bioestimulante de Aminoácidos |
| **HUMIMAX** | Suelos | Ácidos Húmicos y Fúlvicos |
| **POTAMAX** | Control | Jabón Potásico Agrícola |
| **ENTOMAX** | Control | Extracto de Neem |
| **NUTRIQUEL-MAX** | Nutrición | Quelatos Multiminerales |

### 2.2 Problemas Identificados en Etiquetas Actuales
- Inconsistencia en paletas de color entre productos
- Falta de jerarquía visual estandarizada
- Estilos tipográficos variables
- Formatos de dosis no unificados
- Elementos de marca dispersos

---

## 3. IDENTIDAD VISUAL BASE

### 3.1 Paleta de Colores Corporativa

#### Colores Primarios (Identidad Web)
| Nombre | HEX | Uso |
|--------|-----|-----|
| **Neural Deep Blue** | `#233D5E` | Estructura, títulos principales |
| **Emerald Innovation** | `#3BA74C` | Marca, elementos primarios |
| **Bio Leaf** | `#76BC43` | Acentos, elementos secundarios |
| **Solar Yellow** | `#F9C21A` | Llamados de atención, alertas |

#### Colores de Diferenciación por Categoría
| Categoría | Color Primario | Color Secundario | HEX Primario |
|-----------|----------------|------------------|--------------|
| **Protección** | Verde Oscuro | Naranja Alerta | `#2E7D32` |
| **Nutrición** | Azul Confianza | Verde Esmeralda | `#2563EB` |
| **Suelos** | Marrón Tierra | Verde Natural | `#78350F` |
| **Control** | Verde Intenso | Amarillo Solar | `#16A34A` |

### 3.2 Tipografía

| Elemento | Fuente | Peso | Tamaño Recomendado |
|----------|--------|------|-------------------|
| **Nombre Producto** | Montserrat | 800-900 | 48-72pt |
| **Subtítulos** | Montserrat | 600-700 | 18-24pt |
| **Texto Técnico** | Inter | 400-600 | 10-14pt |
| **Datos Numéricos** | Space Mono | 500-700 | 12-16pt |

### 3.3 Elementos Gráficos Recurrentes
- Logo BNS (versión simplificada: "Bio" o "BNS")
- Ícono de check verde para listas de control
- Pastillas/píldoras con border-radius: 30px
- Bordes de contenedor: border-radius: 12px
- Sombras suaves: `0 10px 30px rgba(0,0,0,0.1)`

---

## 4. ESTRUCTURA DE ETIQUETA FRONTAL

### 4.1 Layout Propuesto (División 55/45)

```
┌─────────────────────────────────────────────────────────────┐
│  ┌──────────────────────┐  ┌─────────────────────────────┐ │
│  │                      │  │                             │ │
│  │   SECCIÓN            │  │    SECCIÓN                  │ │
│  │   IZQUIERDA          │  │    DERECHA                  │ │
│  │   (55%)              │  │    (45%)                    │ │
│  │                      │  │                             │ │
│  │  • Logo              │  │  • Imagen de producto       │ │
│  │  • Título producto   │  │  • Imagen cultivo/plaga     │ │
│  │  • Ingrediente activo│  │  • QR Code                  │ │
│  │  • Dosis pastilla    │  │  • Beneficios destacados    │ │
│  │  • Alerta de uso     │  │                             │ │
│  │  • Lista de control  │  │                             │ │
│  │  • Footer contacto   │  │                             │ │
│  │                      │  │                             │ │
│  └──────────────────────┘  └─────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### 4.2 Elementos Obligatorios (Orden de Importancia)

1. **LOGO BNS** - Esquina superior izquierda (50x50px)
2. **TIPO DE PRODUCTO** - Subtítulo clasificador
3. **NOMBRE DEL PRODUCTO** - Título principal (2 líneas máximo)
4. **INGREDIENTE ACTIVO** - Destacado bajo el título
5. **DOSIS SUGERIDA** - Pastilla verde prominente
6. **ALERTA DE USO** - Caja naranja con ícono ⚠️
7. **LISTA DE CONTROL/BENEFICIOS** - Con checks verdes ✓
8. **FOOTER** - Logo pequeño + nombre marca + contacto

---

## 5. SISTEMA DE NOMENCLATURA

### 5.1 Convención de Archivos
```
ETIQUETA-[PRODUCTO]-[VERSION].html
ETIQUETA-[PRODUCTO]-[VERSION].png

Ejemplos:
ETIQUETA-SULPHOMAX-v1.html
ETIQUETA-HUMIMAX-premium.png
```

### 5.2 Versiones de Etiqueta
- `v1` - Versión estándar completa
- `resumida` - Versión compacta (para botellas pequeñas)
- `premium` - Versión con acabados especiales

---

## 6. PROMPTS PARA GENERACIÓN DE ETIQUETAS

### 6.1 PROMPT MAESTRO - Estructura Base

```
Diseña una etiqueta frontal profesional para producto agrícola bioracional con las siguientes especificaciones:

[IDENTIDAD DE MARCA]
- Estilo: Tecnología agrícola premium + naturaleza orgánica
- Colores principales: Verde esmeralda (#3BA74C), Verde oscuro (#2E7D32), Blanco (#FFFFFF)
- Acentos: Amarillo solar (#F9C21A) para alertas, Naranja (#FF9800) para precauciones
- Tipografía títulos: Montserrat Black (800-900)
- Tipografía cuerpo: Inter Regular/Medium

[ESTRUCTURA LAYOUT - 800x900px]
- División: 55% izquierda (contenido), 45% derecha (visual)
- Fondo: Blanco limpio con forma orgánica verde en lado derecho
- Border-radius contenedor: 12px
- Sombras: Suaves, tipo difuminado (0 15px 35px rgba(0,0,0,0.1))

[ELEMENTOS OBLIGATORIOS SECCIÓN IZQUIERDA]
1. Logo circular (50x50px) con iniciales "Bio" o "BNS" - esquina superior
2. Tipo de producto (texto pequeño, peso 600)
3. Nombre producto en 2 líneas (tamaño 72pt, peso 900, color verde oscuro)
4. Ingrediente activo destacado (tamaño 18pt, peso 600)
5. Pastilla dosis verde (border-radius: 30px, padding generoso)
6. Caja alerta naranja con ícono ⚠️ y borde izquierdo sólido
7. Lista de control con checks verdes circulares (✓)
8. Footer: Logo pequeño + "BIONEURAL SOLUTIONS" + contacto WhatsApp

[ELEMENTOS OBLIGATORIOS SECCIÓN DERECHA]
1. Tres círculos superpuestos con imágenes:
   - Círculo grande (550x550px) - imagen cultivo principal
   - Círculo mediano (250x250px) - imagen plaga/enfermedad
   - Círculo pequeño (130x130px) - QR code
2. Todos con borde verde (#4CAF50) de 6-8px
3. Caja de texto con beneficios principales (esquina superior)

[ESTILOS ESPECÍFICOS]
- Título producto: text-shadow sutil (2px 2px rgba(0,0,0,0.1))
- Pastillas: Verde (#4CAF50) con texto blanco
- Checks: Círculos verdes con ✓ blanco adentro
- Alertas: Fondo rgba(255,152,0,0.1), borde izquierdo 4px naranja
```

---

### 6.2 PROMPT ESPECÍFICO - SULPHOMAX

```
Genera etiqueta frontal para SULPHOMAX - Fungicida/Acaricida Bioracional

[DATOS DEL PRODUCTO]
- Nombre: SULPHOMAX (dividido: SULPHO / MAX)
- Tipo: "Producto de control Bioracional y precursor de proteínas"
- Ingrediente activo: "Con Polisulfuro de potasio"
- Dosis: "200 - 300 ML / 20 L"
- Alerta: "NO aplicar en plena floración ni con sol intenso"
- Controla: "ÁCAROS (ARAÑITA ROJA)", "MÁS DE 50 ENFERMEDADES FÚNGICAS"

[BENEFICIOS DESTACADOS]
- Fungicida Preventivo y Erradicante
- Aporta Azufre y Calcio

[IMÁGENES SUGERIDAS]
- Imagen grande: Cultivo de espárrago o similar
- Imagen pequeña: Trips o ácaro (plaga objetivo)
- QR: Código para ficha técnica

[COLORES ESPECÍFICOS]
- Fondo forma orgánica: Verde oscuro (#2E7D32)
- Pastilla dosis: Verde principal (#4CAF50)
- Acentos: Naranja (#FF9800)

[FOOTER]
- Elaborado por: BIONEURAL SOLUTIONS
- Descripción: "Biotecnología Agrícola y Regeneración de Suelos"
- Contacto: WhatsApp 321 365 7236
```

---

### 6.3 PROMPT ESPECÍFICO - AMINOMAX

```
Genera etiqueta frontal para AMINOMAX - Bioestimulante de Aminoácidos

[DATOS DEL PRODUCTO]
- Nombre: AMINOMAX
- Tipo: "Bioestimulante Agrícola y Recuperador de Estrés"
- Ingrediente activo: "L-Aminoácidos Libres y Péptidos"
- Dosis: "250 - 500 cc / Caneca 200 L"
- Beneficios: "Recuperación de estrés", "Ahorro energético", "Efecto Carrier"

[CATEGORÍA: NUTRICIÓN - PALETA AZUL]
- Color principal: Azul (#2563EB)
- Secundario: Verde esmeralda (#3BA74C)
- Acentos: Naranja (#FF9800) para alertas

[ESTRUCTURA]
- Encabezado azul con patrón de puntos
- Nombre producto grande con fondo azul
- Pastilla dosis azul (no verde)
- Tarjetas de beneficios con íconos

[ALERTA DE COMPATIBILIDAD]
"No mezclar con aceites minerales, productos alcalinos, cobre o azufre sin prueba previa"

[FOOTER]
- Elaborado por: BIONEURAL SOLUTIONS
- Contacto: WhatsApp 321 365 7236
```

---

### 6.4 PROMPT ESPECÍFICO - HUMIMAX

```
Genera etiqueta frontal para HUMIMAX - Ácidos Húmicos y Fúlvicos

[DATOS DEL PRODUCTO]
- Nombre: HUMIMAX
- Tipo: "Enmienda Orgánica Líquida / Mejorador de Suelos"
- Ingrediente activo: "Extracto Húmico Total de Leonardita"
- Dosis edáfica: "2 a 5 Litros / Hectárea"
- Dosis fertirriego: "1 a 2 Litros / Hectárea"

[CATEGORÍA: SUELOS - PALETA TIERRA]
- Color principal: Marrón tierra (#78350F)
- Secundario: Verde natural (#16A34A)
- Acentos: Beige (#D4A574)

[BENEFICIOS CLAVE]
- Desbloqueo Nutricional (Quelatante)
- Mejora Estructura Física del Suelo
- Activación Biológica
- Resistencia a Salinidad

[ESTRUCTURA VISUAL]
- Fondo con textura de tierra/suelo sutil
- Círculos con imágenes de suelo saludable
- Íconos de raíces y microorganismos
- Paleta cálida y orgánica

[FOOTER]
- Elaborado por: BIONEURAL SOLUTIONS
- Contacto: WhatsApp 321 365 7236
```

---

### 6.5 PROMPT ESPECÍFICO - POTAMAX

```
Genera etiqueta frontal para POTAMAX - Jabón Potásico Agrícola

[DATOS DEL PRODUCTO]
- Nombre: POTAMAX
- Tipo: "Control Biorracional de Plagas / Coadyuvante"
- Ingrediente activo: "Sales potásicas de ácidos grasos vegetales + Titanio"
- Dosis control: "6 a 10 cc / Litro"
- Dosis coadyuvante: "2 a 3 cc / Litro"

[CATEGORÍA: CONTROL - PALETA VERDE INTENSO]
- Color principal: Verde intenso (#16A34A)
- Secundario: Amarillo solar (#F9C21A)
- Acentos: Blanco para contraste

[BENEFICIOS CLAVE]
- Bloqueador Solar y Bioestimulante (Titanio)
- Asfixia sin Resistencia
- Poder Limpiador (Fumagina)
- Coadyuvante de Élite

[CONTROLA]
- Mosca Blanca
- Pulgones
- Trips

[ALERTA]
"El efecto lupa del jabón bajo sol picante puede quemar brotes nuevos. Aplicar sin alta radiación."

[FOOTER]
- Elaborado por: BIONEURAL SOLUTIONS
- Contacto: WhatsApp 321 365 7236
```

---

### 6.6 PROMPT ESPECÍFICO - ENTOMAX

```
Genera etiqueta frontal para ENTOMAX - Extracto de Neem

[DATOS DEL PRODUCTO]
- Nombre: ENTOMAX
- Tipo: "Control Biorracional de Insectos"
- Ingrediente activo: "Extracto de Neem (Azadiractina)"
- Dosis: "Consultar según plaga objetivo"

[CATEGORÍA: CONTROL - PALETA VERDE INTENSO]
- Color principal: Verde intenso (#16A34A)
- Secundario: Amarillo solar (#F9C21A)
- Acentos: Naranja para alertas

[BENEFICIOS]
- Control natural de insectos
- No genera resistencia
- Biodegradable
- Seguro para fauna benéfica

[FOOTER]
- Elaborado por: BIONEURAL SOLUTIONS
- Contacto: WhatsApp 321 365 7236
```

---

### 6.7 PROMPT ESPECÍFICO - NUTRIQUEL-MAX

```
Genera etiqueta frontal para NUTRIQUEL-MAX - Quelatos Multiminerales

[DATOS DEL PRODUCTO]
- Nombre: NUTRIQUEL-MAX
- Tipo: "Nutrición Especial / Corrector Multimineral"
- Ingrediente activo: "Quelatos de Fe, Zn, Mn, Cu, B, Mo"
- Dosis foliar: "Consultar según cultivo"

[CATEGORÍA: NUTRICIÓN - PALETA AZUL]
- Color principal: Azul (#2563EB)
- Secundario: Verde esmeralda (#3BA74C)
- Acentos: Amarillo para micronutrientes

[BENEFICIOS]
- Corrección rápida de deficiencias
- Alta asimilación foliar
- Estimula fotosíntesis
- Mejora calidad de frutos

[FOOTER]
- Elaborado por: BIONEURAL SOLUTIONS
- Contacto: WhatsApp 321 365 7236
```

---

## 7. ESPECIFICACIONES TÉCNICAS

### 7.1 Dimensiones Recomendadas
| Formato | Ancho | Alto | Uso |
|---------|-------|------|-----|
| Estándar | 800px | 900px | Botellas 1L-4L |
| Compacta | 600px | 700px | Botellas pequeñas |
| Premium | 900px | 1000px | Presentaciones especiales |

### 7.2 Resolución y Formato
- Resolución mínima: 300 DPI (impresión)
- Formatos de salida: PNG, PDF, SVG
- Modo de color: CMYK (impresión) / RGB (digital)

### 7.3 Márgenes de Seguridad
- Margen interior: 15mm
- Zona de corte: 3mm
- Sangrado: 5mm

---

## 8. ELEMENTOS DE MARCA RECURRENTES

### 8.1 Logo BNS
- Versión completa: "BIONEURAL SOLUTIONS"
- Versión compacta: "Bio" (círculo verde)
- Versión siglas: "BNS"
- Color: Verde esmeralda (#3BA74C) sobre blanco

### 8.2 Slogan Principal
"Biotecnología Agrícola y Regeneración de Suelos"

### 8.3 Contacto Unificado
- WhatsApp: 321 365 7236
- Web: bioneuralsolutions.com.co

---

## 9. CHECKLIST DE VALIDACIÓN

Antes de finalizar cada etiqueta, verificar:

- [ ] Logo BNS visible y correcto
- [ ] Nombre del producto legible (mínimo 48pt)
- [ ] Dosis claramente visible
- [ ] Alerta de seguridad presente
- [ ] Colores según categoría
- [ ] Contacto visible
- [ ] QR code funcional
- [ ] Imágenes de calidad
- [ ] Ortografía verificada
- [ ] Coherencia con otras etiquetas de la línea

---

## 10. PRÓXIMOS PASOS

1. **Validar identidad visual** con imagen de referencia SULPHOMAX
2. **Generar mockups** para cada producto usando los prompts
3. **Revisar coherencia** entre todas las etiquetas
4. **Ajustar detalles** según feedback
5. **Exportar versiones finales** en formatos de impresión

---

*Documento generado para BioNeural Solutions*
*Fecha: 2026-02-28*
*Versión: 1.0*
