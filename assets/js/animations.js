// animations.js - Solo scroll animations
export function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-on-scroll');
      }
    });
  }, observerOptions);

  // Observar todos los elementos con clases de animación
  const animatedElements = document.querySelectorAll(
    '.fade-up, .fade-left, .fade-right, .fade-down'
  );
  
  animatedElements.forEach(el => observer.observe(el));

  console.log('🎭 Scroll animations inicializadas');
}