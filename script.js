/* =====================================================
   TAZ PORTFOLIO — SCRIPT
   Vanilla JS only. No dependencies.
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.getElementById('navToggle');
  var primaryNav = document.getElementById('primaryNav');

  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = primaryNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close mobile menu when a nav link is clicked
    primaryNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        primaryNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Scroll-triggered fade-in animations ---------- */
  var fadeEls = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window && fadeEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    fadeEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: no IntersectionObserver support — just show everything
    fadeEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Active nav-link highlighting on scroll ---------- */
  var sections = document.querySelectorAll('main section[id]');
  var navLinks = document.querySelectorAll('.primary-nav a[href^="#"]');

  if ('IntersectionObserver' in window && sections.length && navLinks.length) {
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var id = entry.target.getAttribute('id');
        var matchingLink = document.querySelector('.primary-nav a[href="#' + id + '"]');
        if (!matchingLink) return;

        if (entry.isIntersecting) {
          navLinks.forEach(function (l) { l.classList.remove('active'); });
          matchingLink.classList.add('active');
        }
      });
    }, { threshold: 0.4, rootMargin: '-80px 0px -60% 0px' });

    sections.forEach(function (s) { navObserver.observe(s); });
  }

});
