// main.js - Versión limpia para el ebook
import { initNav } from './nav.js';
import { initTestimonios } from './testimonios.js';
import { initScrollAnimations } from './animations.js';
import { initFaqs } from './faqs.js';
import { initPdfForms } from './pdf-forms.js';


document.addEventListener("DOMContentLoaded", () => {
  // Navegación y componentes principales
  initNav();
  initTestimonios();
  initFaqs();
  initPdfForms();
  
  // Animaciones
  initScrollAnimations();
  
  console.log("🎯 Landing Educando desde el Vínculo loaded ✅");
});

// Scroll al inicio al recargar
window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});

window.addEventListener('load', () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0);
});