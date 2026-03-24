# POTAMAX Landing Page - Specification Document

## 1. Project Overview

**Project Name:** POTAMAX Landing Page  
**Project Type:** Single-page promotional website (Landing Page)  
**Core Functionality:** Premium agricultural product showcase for POTAMAX - Agricultural Potassium Soap with Titanium Nanotechnology  
**Target Users:** Farmers, agricultural engineers, agronomists, and agricultural product distributors in Colombia/Latin America

---

## 2. UI/UX Specification

### 2.1 Layout Structure

**Page Sections (in order):**
1. **Hero Section** - Full viewport height (100vh), product showcase with animated title
2. **Introduction** - What is POTAMAX and its titanium nanotechnology
3. **Benefits** - Grid of 4 cards with icons and golden borders
4. **Usage Instructions** - Accordion with dosage and application methods
5. **CTA Section** - Contact form and WhatsApp floating button
6. **Footer** - Legal links and company info

**Grid/Layout:**
- Max container width: 1200px
- Hero: 2-column grid (text left, product right)
- Introduction: 2-column grid (text + features left, card right)
- Benefits: 3-column grid (3 cards top, 1 card centered bottom)
- Usage: Single column accordion
- CTA: 2-column grid (text left, form right)

**Responsive Breakpoints:**
- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px

### 2.2 Visual Design

**Color Palette (POTAMAX - Nanotechnology/Tech Theme):**
- Primary (Navy Blue): `#003366` - Technology, trust
- Primary Dark: `#002244` - Depth
- Accent (Gold): `#D4AF37` - Premium, quality
- Accent Light: `#E8C84A` - Highlights
- Bio Green: `#7CB342` - Agriculture, nature
- Background Light: `#F0F6FA` - Clean, professional
- Background Cream: `#E8EFF5` - Subtle contrast
- Text Dark: `#1A1A1A`
- Text Light: `#666666`
- White: `#FFFFFF`

**Typography:**
- Headings: `Montserrat` (400, 500, 600, 700, 800)
- Body: `Inter` (300, 400, 500, 600)
- Hero Title: 4rem max, 2.5rem min, weight 800
- Section Titles: 2.5rem max, 1.8rem min, weight 700
- Body Text: 1rem, line-height 1.6

**Spacing System:**
- Section padding: 100px vertical
- Container padding: 20px horizontal
- Card padding: 2rem
- Grid gaps: 2rem desktop, 1.5rem mobile

**Visual Effects:**
- Glassmorphism on cards: `backdrop-filter: blur(10px)`
- Golden borders: `rgba(212,175,55,0.4)`
- Golden shadows: `rgba(212,175,55,0.25)`
- Particle background (nanotechnology representation)
- Gradient overlays on hero
- Hover transforms: `translateY(-8px)` with golden glow
- Staggered reveal animations on scroll

### 2.3 Components

**Hero Section:**
- Full-screen with gradient background (navy to dark)
- Animated particle canvas (gold and green particles)
- Floating product image with glow effect
- Badge: "Nanotecnologia de Titanio"
- Main title with gradient text accent
- Subtitle text
- CTA button

**Introduction Section:**
- Split layout with feature list
- Icon-enhanced feature items
- Glass card with technology description

**Benefits Cards:**
- White background with golden hover border
- Icon container (navy gradient)
- SVG icons (stroke: gold)
- Title and description
- Green tag indicator

**Usage Accordion:**
- Expandable/collapsible items
- Golden accent on active state
- Dosage table inside
- Smooth height transition

**Contact Form:**
- Glass card container
- Input fields with focus states
- Dropdown for product interest
- Submit button with hover animation

**Floating WhatsApp Button:**
- Fixed position (bottom-right)
- Green gradient background
- Pulse animation
- Hover scale effect

---

## 3. Functionality Specification

### 3.1 Core Features

1. **Particle Animation System**
   - Canvas-based particle system
   - 50 particles (gold and green)
   - Floating movement with boundary reset
   - Respects prefers-reduced-motion

2. **Scroll Reveal Animations**
   - Staggered entrance animations
   - Elements fade in and translate up
   - Trigger at 100px from viewport
   - Multiple delay variants (0.1s - 0.6s)

3. **Accordion System**
   - Single-item expand at a time
   - Smooth height transitions
   - Icon rotation on expand
   - Click handler with toggle logic

4. **Form Handling**
   - Client-side validation
   - Submit event prevention
   - Success feedback message
   - Form reset after submission

5. **Smooth Scroll**
   - All anchor links
   - Smooth behavior polyfill
   - Header offset consideration

### 3.2 User Interactions

- **Hover on cards:** Lift effect with golden glow
- **Hover on buttons:** Scale and shadow increase
- **Click accordion:** Expand/collapse with animation
- **Scroll:** Reveal animations trigger
- **Form submit:** Success message display

### 3.3 Edge Cases

- Reduced motion preference: Disable animations
- Small screens: Stack all grid layouts
- Form empty submit: Browser validation
- JavaScript disabled: Basic functionality maintained

---

## 4. Acceptance Criteria

### Visual Checkpoints:
- [ ] Hero section fills viewport with navy gradient
- [ ] Particle animation visible in hero background
- [ ] Product image displays with glow effect
- [ ] Title has gold gradient accent
- [ ] All 4 benefit cards visible in grid
- [ ] Benefit cards have golden border on hover
- [ ] Accordion expands smoothly
- [ ] Form has proper focus states
- [ ] WhatsApp button floats with animation
- [ ] Footer displays company info
- [ ] Mobile layout stacks properly
- [ ] Animations respect reduced-motion preference

### Functional Checkpoints:
- [ ] Page loads without console errors
- [ ] All animations trigger on scroll
- [ ] Accordion toggles correctly
- [ ] Form shows success message on submit
- [ ] Smooth scroll works on anchor links
- [ ] Responsive at all breakpoints
- [ ] No broken image links

---

## 5. Content Specification

### Product: POTAMAX

**Tagline:** La Revolucion en Proteccion de Cultivos

**Description:** Jabon Potasico Agricola conologia de Titan Nanotecnio. Solucion avanzada que combina el poder del jabon potasico con nanotecnologia de titanio para proteccion integral de cultivos.

### Benefits (4 cards):

1. **Bloqueador Solar y Bioestimillante**
   - El titanio recubre la hoja protegiendola de la radiacion solar extrema, mientras estimula la fotosintesis
   - Tag: Proteccion UV

2. **Asfixia sin Resistencia**
   - Elimina insectos por contacto fisico (asfixia) al ablandar el exoesqueleto y bloquear los espiraculos
   - Tag: Control Natural

3. **Poder Limpiador**
   - Lava la "fumagina" (el hongo negro que dejan plagas como la mosca blanca), permitiendo que los estomas de la hoja se destapen
   - Tag: Limpieza Total

4. **Coadyuvante de Elite**
   - Ayuda a que otros agroquimicos se peggen y esparzan mejor por la hoja
   - Tag: Maxima Eficiencia

### Usage Information:

**Doses:**
- Foliar: 200-300 cc/200L de agua
- Frecuencia: Cada 7-15 dias segun presion de plagas
- Aplicar en horas de la manana o atardecer

**Compatibility:**
- Compatible con la mayoria de agroquimicos
- No mezclar con productos de reaccion acida

---

## 6. Technical Notes

- Single HTML file with embedded CSS and JS
- Google Fonts: Montserrat, Inter
- SVG icons inline (Heroicons style)
- No external JS libraries
- Mobile-first CSS approach
- CSS custom properties for theming
- Semantic HTML5 structure
