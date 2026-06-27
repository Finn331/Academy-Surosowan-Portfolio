/* ========================================
   Surosowan Cyber Academy — Script.js
   GSAP Choreography + Ambient Canvas + Effects
   ======================================== */

'use strict';

// --- Wait for GSAP ---
function waitForGSAP(callback) {
  if (typeof gsap !== 'undefined' && gsap.registerPlugin) {
    gsap.registerPlugin(ScrollTrigger);
    callback();
  } else {
    setTimeout(() => waitForGSAP(callback), 100);
  }
}

waitForGSAP(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return initStatic();

  // ==========================================
  // 1. AMBIENT CANVAS ORBS
  // ==========================================
  initCanvas();
  // ==========================================
  // 2. ENTRY ANIMATIONS
  // ==========================================
  initEntryAnimations();
  // ==========================================
  // 3. TYPING EFFECT
  // ==========================================
  initTypingEffect();
  // ==========================================
  // 4. STATS COUNTER
  // ==========================================
  initStatsCounter();
  // ==========================================
  // 5. MOUSE PARALLAX
  // ==========================================
  initMouseParallax();
  // ==========================================
  // 6. LINK CARD HOVER MAGNETIC
  // ==========================================
  initMagneticHover();
  // ==========================================
  // 7. SCROLL REVEAL for footer
  // ==========================================
  initScrollReveal();
});

// --- Canvas Ambient Orbs ---
function initCanvas() {
  const canvas = document.getElementById('orb-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h;
  let mouseX = 0, mouseY = 0;
  let time = 0;

  const orbs = [
    { x: 0.3, y: 0.25, r: 0.35, color: '99,102,241', speed: 0.3, pulse: 0 },
    { x: 0.7, y: 0.35, r: 0.25, color: '129,140,248', speed: 0.2, pulse: 0 },
    { x: 0.5, y: 0.7, r: 0.2, color: '139,92,246', speed: 0.15, pulse: 0 },
  ];

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  document.addEventListener('mousemove', e => { mouseX = e.clientX / w; mouseY = e.clientY / h; });

  function draw() {
    ctx.clearRect(0, 0, w, h);
    time += 0.005;

    orbs.forEach((orb, i) => {
      orb.pulse = Math.sin(time * orb.speed + i * 2) * 0.15 + 0.85;
      const cx = (orb.x + Math.sin(time * orb.speed * 0.5 + i) * 0.04 + (mouseX - 0.5) * 0.02) * w;
      const cy = (orb.y + Math.cos(time * orb.speed * 0.4 + i) * 0.04 + (mouseY - 0.5) * 0.02) * h;
      const r = Math.min(w, h) * orb.r * orb.pulse;

      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      gradient.addColorStop(0, `rgba(${orb.color},${0.12 * orb.pulse})`);
      gradient.addColorStop(0.5, `rgba(${orb.color},${0.06 * orb.pulse})`);
      gradient.addColorStop(1, `rgba(${orb.color},0)`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);
    });

    requestAnimationFrame(draw);
  }
  draw();
}

// --- Entry Animations with GSAP Timeline ---
function initEntryAnimations() {
  const mm = gsap.matchMedia();

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    // Set initial invisible states
    gsap.set('.card', { opacity: 0, y: 30 });
    gsap.set('.badge', { opacity: 0, y: -8 });
    gsap.set('.name', { opacity: 0, y: 12 });
    gsap.set('.bio', { opacity: 0, y: 10 });
    gsap.set('.stats', { opacity: 0, y: 10, scale: 0.98 });
    gsap.set('.section-label', { scaleX: 0, transformOrigin: 'left center' });
    gsap.set('.link-card', { opacity: 0, y: 24 });
    gsap.set('.footer', { opacity: 0, y: 16 });

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Card entry
    tl.to('.card', {
      opacity: 1,
      y: 0,
      duration: 0.9,
      clearProps: 'transform',
    })
    // Avatar ring rotation
    .fromTo('.avatar-ring', {
      rotate: 0,
      opacity: 0,
    }, {
      rotate: 360,
      opacity: 1,
      duration: 1.2,
      ease: 'power2.inOut',
    }, '-=0.5')
    // Badge stagger
    .to('.badge', {
      opacity: 1,
      y: 0,
      stagger: 0.08,
      duration: 0.5,
    }, '-=0.6')
    // Name
    .to('.name', {
      opacity: 1,
      y: 0,
      duration: 0.6,
    }, '-=0.4')
    // Bio
    .to('.bio', {
      opacity: 1,
      y: 0,
      duration: 0.5,
    }, '-=0.3')
    // Stats
    .to('.stats', {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
    }, '-=0.2')
    // Section label - animate scale open
    .to('.section-label', {
      scaleX: 1,
      duration: 0.6,
      ease: 'power2.inOut',
      transformOrigin: 'left center',
    }, '+=0.1')
    // Link cards stagger
    .to('.link-card', {
      opacity: 1,
      y: 0,
      stagger: 0.06,
      duration: 0.6,
      ease: 'back.out(1.5)',
      clearProps: 'transform',
    }, '-=0.2')
    // Footer
    .to('.footer', {
      opacity: 1,
      y: 0,
      duration: 0.6,
    }, '-=0.1');
  });

  // Fallback for reduced motion: just show
  mm.add('(prefers-reduced-motion: reduce)', () => {
    gsap.set(['.card', '.link-card', '.section-label', '.footer'], {
      opacity: 1, y: 0, x: 0, scaleX: 1, clearProps: 'all'
    });
  });
}

// --- Typing Effect ---
function initTypingEffect() {
  const el = document.querySelector('.typing-text');
  if (!el) return;
  const roles = [
    'Game Developer',
    'Network Engineer',
    'Unity Developer',
    'Security Enthusiast',
    'Informatics Graduate',
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let currentText = '';

  function type() {
    const target = roles[roleIndex];

    if (!isDeleting) {
      charIndex++;
      currentText = target.substring(0, charIndex);
      el.textContent = currentText;

      if (charIndex === target.length) {
        setTimeout(() => { isDeleting = true; type(); }, 2200);
        return;
      }
    } else {
      charIndex--;
      currentText = target.substring(0, charIndex);
      el.textContent = currentText;

      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    const speed = isDeleting ? 30 : 50 + Math.random() * 40;
    setTimeout(type, speed);
  }

  type();
}

// --- Stats Counter ---
function initStatsCounter() {
  const stats = document.querySelectorAll('.stat-value');
  if (!stats.length) return;

  const mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    stats.forEach(stat => {
      const target = parseInt(stat.dataset.count, 10);
      if (isNaN(target)) return;
      gsap.fromTo(stat, {
        textContent: 0,
      }, {
        textContent: target,
        duration: 2,
        ease: 'power2.out',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: stat,
          start: 'top 90%',
        },
      });
    });
  });

  // Fallback: just show numbers
  stats.forEach(stat => {
    const target = parseInt(stat.dataset.count, 10);
    if (!isNaN(target)) stat.textContent = target;
    else stat.textContent = '0';
  });
}

// --- Mouse Parallax on Card ---
function initMouseParallax() {
  const card = document.querySelector('.card-body');
  if (!card) return;

  const mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    if (!isDesktop) return;

    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to('.card-shell', {
        rotateX: y * -3,
        rotateY: x * 3,
        duration: 0.6,
        ease: 'power2.out',
        transformPerspective: 1000,
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to('.card-shell', {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: 'power2.out',
      });
    });
  });
}

// --- Magnetic Hover on Link Cards ---
function initMagneticHover() {
  const cards = document.querySelectorAll('.link-card');
  if (!cards.length) return;

  const mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.01,
          duration: 0.35,
          ease: 'back.out(1.4)',
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.35,
          ease: 'power2.out',
        });
      });
    });
  });
}

// --- Scroll Reveal for Footer ---
function initScrollReveal() {
  const mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    gsap.from('.footer', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.footer',
        start: 'top 95%',
      },
    });
  });
}

// --- Static fallback for reduced motion ---
function initStatic() {
  gsap.set(['.card', '.link-card', '.section-label', '.footer'], {
    opacity: 1,
    y: 0,
    clearProps: 'all',
  });

  // Show stats numbers
  document.querySelectorAll('.stat-value').forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    if (!isNaN(target)) el.textContent = target;
  });
}
