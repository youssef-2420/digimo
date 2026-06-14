document.documentElement.classList.add('js');

// SCROLL REVEAL
var rvObs = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) { e.target.classList.add('on'); rvObs.unobserve(e.target); }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.rv').forEach(function(el) { rvObs.observe(el); });

// STAT BAR
var barObs = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.sbfill').forEach(function(b) { b.style.width = b.dataset.w || '98%'; });
      barObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.sbwrap').forEach(function(el) { barObs.observe(el); });

// HAMBURGER
var hbg = document.getElementById('hbg');
var mnav = document.getElementById('mnav');
if (hbg && mnav) {
  hbg.addEventListener('click', function() {
    hbg.classList.toggle('open');
    mnav.classList.toggle('open');
  });
}

// HEADER SCROLL
var hdr = document.querySelector('header');
if (hdr) window.addEventListener('scroll', function() {
  hdr.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// ACTIVE NAV
(function() {
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a, .mnav a').forEach(function(a) {
    var base = (a.getAttribute('href') || '').split('/').pop();
    a.classList.toggle('active', base === path || (path === 'index.html' && (base === '' || base === 'index.html')));
  });
})();
