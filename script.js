// ── PAGE NAVIGATION ──
function showPage(id) {
  // hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // show target
  var page = document.getElementById('page-' + id);
  if (page) page.classList.add('active');

  // update nav active state
  document.querySelectorAll('.nl').forEach(a => a.classList.remove('active'));
  var navLink = document.getElementById('nl-' + id);
  if (navLink) navLink.classList.add('active');

  // scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── HAMBURGER MENU ──
function toggleNav() {
  var menu = document.getElementById('mobileNav');
  menu.classList.toggle('open');
}

// ── CONTACT FORM ──
function submitForm() {
  var fname   = document.getElementById('fname').value.trim();
  var email   = document.getElementById('email').value.trim();
  var message = document.getElementById('message').value.trim();

  if (!fname || !email || !message) {
    alert('Please fill in all required fields: First Name, Email, and Message.');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  document.getElementById('formBody').style.display = 'none';
  document.getElementById('formSuccess').style.display = 'block';
}

// ── NAV SHADOW ON SCROLL ──
window.addEventListener('scroll', function () {
  var nav = document.getElementById('navbar');
  if (window.scrollY > 10) {
    nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// ── INIT ──
document.addEventListener('DOMContentLoaded', function () {
  showPage('home');
});
