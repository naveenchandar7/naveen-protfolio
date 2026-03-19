// ============================================
// NAVEEN CHANDAR S — Portfolio JS
// File: js/main.js
// ============================================

document.addEventListener('DOMContentLoaded', function () {

  // ── 1. Navbar: Add glass effect on scroll ──
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ── 2. Hamburger menu (mobile) ──
  const ham = document.getElementById('ham');
  const navLinks = document.getElementById('navLinks');

  ham.addEventListener('click', function () {
    ham.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      ham.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // ── 3. Scroll Reveal animation ──
  // Elements with class "reveal" fade in when scrolled into view
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target); // Only animate once
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(function (el) {
    revealObserver.observe(el);
  });

  // ── 4. Scroll to top button ──
  const scrollTopBtn = document.getElementById('scrollTop');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  });

  scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ── 5. Active nav link highlight on scroll ──
  const sections = document.querySelectorAll('section[id], div[id="hero"]');
  const navItems = document.querySelectorAll('.nav-links a');

  const sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // Remove active from all links
        navItems.forEach(function (link) {
          link.classList.remove('active');
        });
        // Add active to matching link
        const activeLink = document.querySelector('.nav-links a[href="#' + entry.target.id + '"]');
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(function (section) {
    sectionObserver.observe(section);
  });

  // ── 6. Contact Form ──
  const form = document.getElementById('cform');
  const formNote = document.getElementById('fnote');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name    = document.getElementById('cname').value.trim();
      const email   = document.getElementById('cemail').value.trim();
      const message = document.getElementById('cmsg').value.trim();

      // Basic validation
      if (!name || !email || !message) {
        formNote.textContent = '⚠️ Please fill in all fields.';
        formNote.style.color = '#f87171';
        return;
      }

      // Opens the user's default email client
      // ✏️ CHANGE: Replace the email below with your real email
      const subject = encodeURIComponent('Project Inquiry from ' + name);
      const body    = encodeURIComponent(
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n\n' +
        'Message:\n' + message
      );
      window.location.href = 'mailto:your@email.com?subject=' + subject + '&body=' + body;

      formNote.textContent = '✅ Opening your email client...';
      formNote.style.color = '#00d4ff';
      form.reset();
    });
  }

}); // end DOMContentLoaded
