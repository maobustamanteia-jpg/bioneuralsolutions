'use strict';
/* ═══════════════════════════════════════════════════════════
   SULPHOMAX™ — script.js v2
   1. Partículas globales en canvas (toda la página)
   2. Animación hero canvas (objeto 3D verde/dorado)
   3. Header scroll + mobile nav
   4. Scroll reveal (IntersectionObserver)
   5. Contadores animados
   6. Acordeón
   7. Formulario con validación
   8. Smooth scroll
   9. Efecto tilt en cards
═══════════════════════════════════════════════════════════ */

/* ──────────────────────────────────────────────────────────────
   1. CANVAS GLOBAL DE PARTÍCULAS — fluye por toda la página
   Verde bosque + dorado: visibles sobre cualquier fondo
────────────────────────────────────────────────────────────── */
(function initGlobalParticles() {
  const canvas = document.getElementById('globalCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const isCorp = document.documentElement.getAttribute('data-theme') === 'corp';
  const COLORS = isCorp ? [
    'rgba(46, 139, 87,',   // verde medio
    'rgba(26, 77, 46,',    // verde bosque (para contraste)
    'rgba(61, 170, 104,',  // verde claro
    'rgba(200, 162, 39,',  // dorado tenue
    'rgba(46, 139, 87,'    // verde medio (repetido)
  ] : [
    'rgba(200,162,39,',   // dorado
    'rgba(240,192,64,',   // dorado brillante
    'rgba(46,139,87,',    // verde medio
    'rgba(61,170,104,',   // verde claro
    'rgba(200,162,39,',   // dorado (más frecuente)
  ];

  let W, H, particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = document.body.scrollHeight;
    canvas.style.width  = W + 'px';
    canvas.style.height = H + 'px';
    buildParticles();
  }

  function buildParticles() {
    particles = [];
    const count = isCorp ? 90 : Math.min(Math.floor((W * H) / 28000), 160);
    const speedFactor = isCorp ? 0.35 : 1; // Súper lentas y elegantes en el tema claro corporativo
    for (let i = 0; i < count; i++) {
      const r = Math.random() * 3 + 1;
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r,
        vx: (Math.random() - 0.5) * .35 * speedFactor,
        vy: (Math.random() - 0.5) * .25 * speedFactor,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        alpha: Math.random() * .45 + .12,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: (.008 + Math.random() * .014) * speedFactor,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    particles.forEach(p => {
      p.pulse += p.pulseSpeed;
      const a = p.alpha * (0.7 + 0.3 * Math.sin(p.pulse));

      // Glow halo
      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
      grad.addColorStop(0, p.color + (a * .7).toFixed(2) + ')');
      grad.addColorStop(1, p.color + '0)');
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Core dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color + a.toFixed(2) + ')';
      ctx.fill();

      // Move
      p.x += p.vx;
      p.y += p.vy;

      // Wrap
      if (p.x < -10) p.x = W + 10;
      if (p.x > W + 10) p.x = -10;
      if (p.y < -10) p.y = H + 10;
      if (p.y > H + 10) p.y = -10;
    });

    // Subtle connection lines between nearby particles (brand-colored)
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const a = (1 - dist / 120) * 0.07;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(200,162,39,${a.toFixed(3)})`;
          ctx.lineWidth = .6;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  // Rebuild on resize/scroll (page height may change)
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 250);
  });
  // Rebuild when DOM content shifts (accordion, etc.)
  new MutationObserver(() => {
    const newH = document.body.scrollHeight;
    if (newH !== H) resize();
  }).observe(document.body, { childList: true, subtree: true, attributes: true });

  resize();
  draw();
})();

/* ──────────────────────────────────────────────────────────────
   2. HERO CANVAS — Animación 3D propia en verde/dorado
   Esferas orbitales, anillos giratorios, partículas lumínicas
────────────────────────────────────────────────────────────── */
(function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, mouse = { x: .5, y: .5 }, tick = 0;

  function resize() {
    const hero  = canvas.parentElement;
    const isMobile = window.innerWidth <= 820;
    // En móvil: fondo completo. En desktop: mitad derecha
    if (isMobile) {
      W = canvas.width  = hero.offsetWidth;
      H = canvas.height = hero.offsetHeight;
    } else {
      W = canvas.width  = hero.offsetWidth * 0.6;
      H = canvas.height = hero.offsetHeight;
    }
    canvas.style.left = isMobile ? '0' : 'auto';
    canvas.style.right = isMobile ? 'auto' : '0';
    // Ajustar radios de anillos al tamaño disponible
    const scale = Math.min(W, H) / 700;
    RINGS.forEach((r, i) => {
      const bases = [140, 200, 260, 320];
      r.computedRadius = bases[i] * Math.max(0.42, scale);
    });
  }

  // Mouse parallax (hero only)
  const heroSection = document.getElementById('hero');
  if (heroSection) {
    heroSection.addEventListener('mousemove', e => {
      const r = heroSection.getBoundingClientRect();
      mouse.x = (e.clientX - r.left) / r.width;
      mouse.y = (e.clientY - r.top)  / r.height;
    });
  }

  /* ── Helpers ── */
  function radGrad(x, y, r0, r1, c0, c1) {
    const g = ctx.createRadialGradient(x, y, r0, x, y, r1);
    g.addColorStop(0, c0); g.addColorStop(1, c1); return g;
  }

  /* ── Orbital sphere system ── */
  const RINGS = [
    { radius: 140, computedRadius: 140, speed: .007, thickness: 1,   color: 'rgba(46,139,87,',   nodes: 3, tilt: .3  },
    { radius: 200, computedRadius: 200, speed: -.006,  thickness: 1.5, color: 'rgba(200,162,39,',  nodes: 5, tilt: .6  },
    { radius: 260, computedRadius: 260, speed: .0045, thickness: 1,   color: 'rgba(61,170,104,',  nodes: 4, tilt: -.4 },
    { radius: 320, computedRadius: 320, speed: -.003,  thickness: .8,  color: 'rgba(240,192,64,',  nodes: 6, tilt: .8  },
  ];

  // Inicializar ángulos
  RINGS.forEach((r, i) => { r.angle = (i * Math.PI) / RINGS.length; });

  /* ── Core plasma glow ── */
  function drawCore(cx, cy, t) {
    const base = Math.min(W, H) * 0.14;
    const s = 1 + .04 * Math.sin(t * .8);
    // Outer atmosphere
    ctx.beginPath();
    ctx.arc(cx, cy, base * 1.8 * s, 0, Math.PI * 2);
    ctx.fillStyle = radGrad(cx, cy, 0, base * 1.8 * s,
      'rgba(46,139,87,0.12)', 'rgba(13,40,24,0)');
    ctx.fill();

    // Inner glow
    ctx.beginPath();
    ctx.arc(cx, cy, base * s, 0, Math.PI * 2);
    ctx.fillStyle = radGrad(cx, cy, 0, base * s,
      'rgba(200,162,39,0.25)', 'rgba(46,139,87,0.05)');
    ctx.fill();

    // Core nucleus
    ctx.beginPath();
    ctx.arc(cx, cy, base * .44 * s, 0, Math.PI * 2);
    ctx.fillStyle = radGrad(cx, cy, 0, base * .44 * s,
      'rgba(240,192,64,0.9)', 'rgba(200,162,39,0.3)');
    ctx.fill();

    // center highlight
    ctx.beginPath();
    ctx.arc(cx, cy, base * .16, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.fill();
  }

  /* ── Single orbital ring ── */
  function drawRing(cx, cy, ring, t) {
    ring.angle += ring.speed;
    const r = ring.computedRadius || ring.radius;
    const tiltX = ring.tilt;

    // Draw ellipse (perspective flatten on Y)
    ctx.beginPath();
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(ring.angle * .3);
    ctx.scale(1, Math.abs(Math.cos(tiltX + t * .05)) * .45 + .15);
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.restore();

    ctx.strokeStyle = ring.color + '0.18)';
    ctx.lineWidth   = ring.thickness;
    ctx.stroke();

    // Nodes (glowing spheres on the ring)
    for (let n = 0; n < ring.nodes; n++) {
      const a = ring.angle + (n / ring.nodes) * Math.PI * 2;
      const scaleY = Math.abs(Math.cos(tiltX + t * .05)) * .45 + .15;
      const nx = cx + Math.cos(a) * r;
      const ny = cy + Math.sin(a) * r * scaleY;
      const nodeR = 4 + 2 * Math.sin(t * .5 + n * 1.2);
      const nodeA = .6 + .4 * Math.sin(t * .4 + n);

      ctx.beginPath();
      ctx.arc(nx, ny, nodeR, 0, Math.PI * 2);
      ctx.fillStyle = ring.color + nodeA.toFixed(2) + ')';
      ctx.fill();

      // node glow
      ctx.beginPath();
      ctx.arc(nx, ny, nodeR * 4, 0, Math.PI * 2);
      ctx.fillStyle = ring.color + (nodeA * .12).toFixed(3) + ')';
      ctx.fill();
    }
  }

  /* ── Floating energy particles ── */
  const MAX_DIST = 320;
  const FLOATS = Array.from({ length: 60 }, () => ({
    angle: Math.random() * Math.PI * 2,
    dist:  80 + Math.random() * MAX_DIST,
    speed: (.003 + Math.random() * .006) * (Math.random() < .5 ? 1 : -1),
    size:  Math.random() * 2.5 + .5,
    color: Math.random() < .6 ? 'rgba(200,162,39,' : 'rgba(61,170,104,',
    alpha: Math.random() * .55 + .1,
    pulse: Math.random() * Math.PI * 2,
    pSpeed: .015 + Math.random() * .02,
    tiltY: Math.random() * .8 + .2,
  }));

  function drawFloats(cx, cy, t) {
    // Escalar radio máximo al tamaño del canvas
    const maxR = Math.min(W, H) * 0.46;
    FLOATS.forEach(f => {
      f.angle += f.speed;
      f.pulse += f.pSpeed;
      const a = f.alpha * (0.5 + 0.5 * Math.sin(f.pulse));
      const scaledDist = (f.dist / MAX_DIST) * maxR;
      const x = cx + Math.cos(f.angle) * scaledDist;
      const y = cy + Math.sin(f.angle) * scaledDist * f.tiltY;

      ctx.beginPath();
      ctx.arc(x, y, f.size, 0, Math.PI * 2);
      ctx.fillStyle = f.color + a.toFixed(2) + ')';
      ctx.fill();
    });
  }

  /* ── Main render loop ── */
  function render() {
    ctx.clearRect(0, 0, W, H);

    tick += .016;

    // Center with subtle mouse parallax
    const cx = W * .5 + (mouse.x - .5) * 30;
    const cy = H * .5 + (mouse.y - .5) * 20;

    // Ambient background fog
    ctx.beginPath();
    ctx.arc(cx, cy, 340, 0, Math.PI * 2);
    ctx.fillStyle = radGrad(cx, cy, 0, 340, 'rgba(26,77,46,0.18)', 'rgba(13,40,24,0)');
    ctx.fill();

    drawFloats(cx, cy, tick);
    RINGS.forEach(r => drawRing(cx, cy, r, tick));
    drawCore(cx, cy, tick);

    requestAnimationFrame(render);
  }

  window.addEventListener('resize', resize);
  resize();
  render();
})();

/* ──────────────────────────────────────────────────────────────
   3. HEADER — scroll + mobile nav
────────────────────────────────────────────────────────────── */
const header     = document.getElementById('header');
const menuToggle = document.getElementById('menuToggle');
const nav        = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (header) header.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = !nav.classList.contains('open');
    nav.classList.toggle('open', open);
    menuToggle.classList.toggle('active', open);
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  document.querySelectorAll('.nav-link').forEach(l => {
    l.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Active nav on scroll
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link[data-section]');
window.addEventListener('scroll', () => {
  const mid = window.scrollY + window.innerHeight / 2;
  sections.forEach(sec => {
    if (mid >= sec.offsetTop && mid < sec.offsetTop + sec.offsetHeight) {
      navLinks.forEach(l => l.classList.remove('active'));
      const a = document.querySelector(`.nav-link[data-section="${sec.id}"]`);
      if (a) a.classList.add('active');
    }
  });
}, { passive: true });

/* ──────────────────────────────────────────────────────────────
   4. SCROLL REVEAL
────────────────────────────────────────────────────────────── */
const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const d = e.target.style.getPropertyValue('--delay') || '0s';
      e.target.style.transitionDelay = d;
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealEls.forEach(el => revealObs.observe(el));

/* ──────────────────────────────────────────────────────────────
   5. CONTADORES ANIMADOS
────────────────────────────────────────────────────────────── */
document.querySelectorAll('.stat-number[data-target]').forEach(el => {
  new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    const target = +el.dataset.target;
    const dur    = 1800;
    const start  = performance.now();
    (function step(now) {
      const p = Math.min((now - start) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(e * target);
      if (p < 1) requestAnimationFrame(step);
    })(start);
    revealObs.unobserve(el);
  }, { threshold: .6 }).observe(el);
});

/* ──────────────────────────────────────────────────────────────
   6. ACORDEÓN
────────────────────────────────────────────────────────────── */
document.querySelectorAll('.accordion-header').forEach(btn => {
  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    const parent = btn.closest('.accordion');
    if (parent) {
      parent.querySelectorAll('.accordion-header').forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        const body = b.nextElementSibling;
        if (body) body.classList.remove('open');
      });
    }
    if (!isOpen) {
      btn.setAttribute('aria-expanded', 'true');
      const body = btn.nextElementSibling;
      if (body) body.classList.add('open');
    }
  });
});

/* ──────────────────────────────────────────────────────────────
   7. FORMULARIO
────────────────────────────────────────────────────────────── */
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const submitBtn   = document.getElementById('submitBtn');

if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById('name');
    const nameErr = document.getElementById('nameError');
    if (!name.value.trim() || name.value.trim().length < 2) {
      nameErr.textContent = 'Ingresa tu nombre completo.';
      name.style.borderColor = '#c0392b';
      valid = false;
    } else { nameErr.textContent = ''; name.style.borderColor = ''; }

    const email = document.getElementById('email');
    const emailErr = document.getElementById('emailError');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      emailErr.textContent = 'Ingresa un correo válido.';
      email.style.borderColor = '#c0392b';
      valid = false;
    } else { emailErr.textContent = ''; email.style.borderColor = ''; }

    const msg = document.getElementById('message');
    const msgErr = document.getElementById('messageError');
    if (!msg.value.trim() || msg.value.trim().length < 10) {
      msgErr.textContent = 'Escribe tu mensaje (mín. 10 caracteres).';
      msg.style.borderColor = '#c0392b';
      valid = false;
    } else { msgErr.textContent = ''; msg.style.borderColor = ''; }

    if (!valid) return;

    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    await new Promise(r => setTimeout(r, 1800));
    submitBtn.classList.remove('loading');
    submitBtn.disabled = false;
    contactForm.reset();
    formSuccess.classList.add('visible');
    setTimeout(() => formSuccess.classList.remove('visible'), 6000);
  });

  contactForm.querySelectorAll('input, textarea').forEach(el => {
    el.addEventListener('input', () => { el.style.borderColor = ''; });
  });
}

/* ──────────────────────────────────────────────────────────────
   8. SMOOTH SCROLL
────────────────────────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) {
      e.preventDefault();
      const offset = header ? header.offsetHeight : 70;
      window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
    }
  });
});

/* ──────────────────────────────────────────────────────────────
   9. CARD TILT (desktop)
────────────────────────────────────────────────────────────── */
if (window.matchMedia('(pointer:fine)').matches) {
  document.querySelectorAll('.benefit-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r  = card.getBoundingClientRect();
      const dx = (e.clientX - r.left  - r.width  / 2) / (r.width  / 2);
      const dy = (e.clientY - r.top   - r.height / 2) / (r.height / 2);
      card.style.transform = `translateY(-10px) rotateY(${dx*5}deg) rotateX(${-dy*4}deg)`;
      card.style.transition = 'none';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = '';
    });
  });
}

// Science points stagger
document.querySelectorAll('.science-point').forEach((pt, i) => {
  pt.classList.add('reveal-up');
  pt.style.setProperty('--delay', `${i * .15}s`);
  revealObs.observe(pt);
});

window.addEventListener('load', () => document.body.classList.add('loaded'));
console.log('%cSULPHOMAX™ — Bio Neural Solutions © 2026', 'color:#C8A227;font-family:monospace;font-weight:bold;font-size:13px');