# SULPHOMAX Landing Page Specification

## 1. Project Overview

**Project Name:** SULPHOMAX Landing Page  
**Type:** Premium Agricultural Product Landing Page  
**Core Functionality:** Showcase SULPHOMAX bioproduct with premium visual experience, highlighting benefits, composition, and usage instructions  
**Target Users:** Farmers, agricultural technicians, distributors seeking high-end crop protection solutions

---

## 2. UI/UX Specification

### Layout Structure

**Page Sections (in order):**
1. **Hero Section** - Full viewport height (100vh), product showcase, animated title
2. **Introduction** - What is SULPHOMAX and its technology
3. **Benefits** - Grid of benefit cards with icons
4. **Composition** - Technical information visual display
5. **Usage Instructions** - Doses and applications (accordion style)
6. **Contact/CTA** - Contact form and WhatsApp button
7. **Footer** - Legal links

**Responsive Breakpoints:**
- Mobile: < 768px (primary focus)
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Visual Design

**Color Palette:**
- Primary: `#004B30` (Forest Green)
- Accent: `#D4AF37` (Gold)
- Bio Indicator: `#7CB342` (Bio Green)
- Background Light: `#F9FCF0`
- Dark Text: `#1A1A1A`
- White: `#FFFFFF`
- Glass: `rgba(255, 255, 255, 0.1)`

**Typography:**
- Titles: Montserrat (Google Fonts)
  - H1: 4rem (mobile: 2.5rem), weight 800
  - H2: 2.5rem (mobile: 1.8rem), weight 700
  - H3: 1.5rem (mobile: 1.25rem), weight 600
- Body: Inter/Roboto (Google Fonts)
  - Body: 1rem, weight 400
  - Small: 0.875rem

**Spacing System:**
- Section padding: 100px vertical (mobile: 60px)
- Container max-width: 1200px
- Grid gap: 2rem (mobile: 1rem)
- Card padding: 2rem

**Visual Effects:**
- Glassmorphism cards: `backdrop-filter: blur(10px)`, semi-transparent backgrounds
- Golden borders: 1px solid rgba(212, 175, 55, 0.5)
- Golden shadows: `0 10px 40px rgba(212, 175, 55, 0.2)`
- Animated gradients: Subtle background animation on hero
- Particle system: Floating particles in hero section

### Components

**Hero Section:**
- Full viewport with gradient overlay
- Animated particle canvas background (green/gold particles)
- Product bottle image (centered or right-aligned)
- Animated headline with typewriter or fade-in effect
- Subtitle with product tagline
- CTA button with golden gradient

**Introduction Section:**
- Large typography headline
- Feature cards with icons
- Glassmorphism container

**Benefits Grid:**
- 2x3 grid (desktop), 1 column (mobile)
- Card hover effects with lift and glow
- Golden border accents
- Icons for each benefit

**Composition Section:**
- Visual technical data display
- Progress bars or circular indicators
- Clean data presentation

**Usage Accordion:**
- Collapsible sections
- Smooth expand/collapse animation
- Icon rotation on open

**Contact Section:**
- Floating WhatsApp button (fixed position)
- Contact form with validation
- Submit button with loading state

**Footer:**
- Minimal design
- Legal links
- Copyright

### Animations

**Hero:**
- Particle system: Continuous floating dots (CSS/JS)
- Title: Fade-in + slide-up on load (0.8s ease-out)
- Subtitle: Fade-in delayed (1.2s)
- Product image: Scale-in with fade (1s)
- CTA button: Pulse animation on hover

**Scroll Animations:**
- Stagger effect: Elements appear with 0.1s delay between each
- Intersection Observer for triggering
- Fade-up transform: translateY(30px) → translateY(0)
- Duration: 0.6s ease-out

**Micro-interactions:**
- Buttons: Scale(1.05) on hover, background shift
- Cards: Lift effect (translateY(-5px)) on hover
- Accordion: Smooth height transition (0.3s)

**Reduced Motion:**
- Respects `prefers-reduced-motion: reduce`
- Disables particle system
- Simplifies scroll animations

---

## 3. Functionality Specification

### Core Features

1. **Responsive Navigation** - Not required (single page scroll)
2. **Particle Background** - Canvas-based floating particles
3. **Scroll-triggered Animations** - Intersection Observer API
4. **Accordion System** - Pure CSS/JS toggle
5. **Form Validation** - Client-side validation
6. **WhatsApp Floating Button** - Fixed position, always visible

### User Interactions

- Scroll to reveal sections with animations
- Click accordion items to expand/collapse
- Hover effects on all interactive elements
- Form submission (visual feedback only)

### Data Handling

- No backend integration
- Form shows success message on submit (frontend only)

### Edge Cases

- Image load failure: Show fallback background color
- JavaScript disabled: Content remains visible
- Slow connection: Lazy loading for images

---

## 4. Acceptance Criteria

### Visual Checkpoints

- [ ] Hero fills 100% viewport height
- [ ] Particle animation runs smoothly
- [ ] Product image displays correctly
- [ ] All colors match spec (#004B30, #D4AF37, #7CB342, #F9FCF0)
- [ ] Typography uses Montserrat/Inter
- [ ] Cards have glassmorphism effect
- [ ] Golden borders visible on cards
- [ ] Mobile layout is single column
- [ ] Animations trigger on scroll

### Functional Checkpoints

- [ ] Page loads without console errors
- [ ] Accordion expands/collapses smoothly
- [ ] WhatsApp button is fixed and clickable
- [ ] Form shows validation feedback
- [ ] Reduced motion is respected
- [ ] All images load correctly

### Performance

- [ ] First contentful paint < 2s
- [ ] Smooth 60fps animations
- [ ] Mobile-first optimization

---

## 5. Technical Implementation

**Single HTML File Structure:**
- Embedded CSS in `<style>` tag
- Embedded JavaScript in `<script>` tag
- Google Fonts via CDN
- No external JS libraries (vanilla JS only)

**Image Paths:**
- Product bottle: `images/sulphomax_bottle_1772241667175.png`
- Logo: Use existing or SVG inline

**Browser Support:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
