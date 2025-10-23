// nav.js - Versión actualizada
export function initNav() {
  const nav = document.querySelector('.nav--venta');
  const navToggle = document.querySelector('.nav__toggle');
  const navMenu = document.querySelector('.nav__menu');
  const navOverlay = document.querySelector('.nav__overlay');
  const scrollLinks = document.querySelectorAll('.scroll-link');

  if (!nav) return;

  // Scroll effect
  function handleScroll() {
    if (window.scrollY > 100) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  // Toggle mobile menu
  function toggleMenu() {
    navToggle.classList.toggle('open');
    navMenu.classList.toggle('active');
    navOverlay.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  }

  // Close menu on link click
  function closeMenu() {
    navToggle.classList.remove('open');
    navMenu.classList.remove('active');
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Smooth scroll for anchor links
  function handleScrollClick(e) {
    const href = this.getAttribute('href');
    
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        closeMenu();
      }
    }
  }

  // Event listeners
  window.addEventListener('scroll', handleScroll);
  navToggle.addEventListener('click', toggleMenu);
  navOverlay.addEventListener('click', closeMenu);

  scrollLinks.forEach(link => {
    link.addEventListener('click', handleScrollClick);
  });

  // Initial state
  handleScroll();

  console.log('✅ Navegación inicializada');
}