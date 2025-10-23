// nav.js - Versión mejorada con scroll en móvil
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
    const isOpening = !navMenu.classList.contains('active');
    
    navToggle.classList.toggle('open');
    navMenu.classList.toggle('active');
    navOverlay.classList.toggle('active');
    
    if (isOpening) {
      document.body.style.overflow = 'hidden';
      // 🔥 NUEVO: Scroll al inicio del menú cuando se abre
      navMenu.scrollTo(0, 0);
    } else {
      document.body.style.overflow = '';
    }
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
        target.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        closeMenu();
      }
    }
  }

  // Cerrar menú al redimensionar (si se abre en móvil y se cambia a desktop)
  function handleResize() {
    if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
      closeMenu();
    }
  }

  // Cerrar menú al hacer click fuera (en el overlay)
  function handleOverlayClick(e) {
    if (e.target === navOverlay) {
      closeMenu();
    }
  }

  // Event listeners
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
  
  navToggle.addEventListener('click', toggleMenu);
  navOverlay.addEventListener('click', handleOverlayClick);

  scrollLinks.forEach(link => {
    link.addEventListener('click', handleScrollClick);
  });

  // Initial state
  handleScroll();

  console.log('✅ Navegación inicializada con scroll móvil');
}