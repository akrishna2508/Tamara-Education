// ── NAVIGATION ──
  function navigate(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + page).classList.add('active');
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    const navEl = document.getElementById('nav-' + page);
    if (navEl) navEl.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(initReveal, 100);
    // Reset FAQ sections when navigating to FAQ
    if (page === 'faq') {
      showFAQSection('basics');
    }
  }

  // ── HAMBURGER ──
  function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
  }

  // ── FAQ TOGGLE ──
  function toggleFAQ(el) {
    const item = el.parentElement;
    item.classList.toggle('open');
  }

  function toggleFAQSection(id) {
    showFAQSection(id);
  }

  function showFAQSection(id) {
    const sections = ['basics','registration','ideas','certificates','mentorship','general'];
    sections.forEach(s => {
      const el = document.getElementById('faq-' + s);
      if (el) el.style.display = s === id ? 'block' : 'none';
    });
    // Scroll to accordion
    const target = document.getElementById('faq-' + id);
    if (target) {
      setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    }
  }

  // ── CONTACT FORM ──
  function submitForm() {
    const fname = document.getElementById('fname').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!fname || !email || !message) {
      alert('Please fill in all required fields (Name, Email, and Message).');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    document.getElementById('contactFormWrap').style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
  }

  // ── SCROLL REVEAL ──
  function initReveal() {
    const reveals = document.querySelectorAll('.page.active .reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));
  }

  // ── NAV SCROLL EFFECT ──
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    nav.style.background = window.scrollY > 50
      ? 'rgba(15,23,41,1)'
      : 'rgba(15,23,41,0.96)';
  });

  // ── INIT ──
  document.addEventListener('DOMContentLoaded', () => {
    initReveal();
    showFAQSection('basics');
  });