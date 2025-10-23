// testimonios.js
export function initTestimonios() {
  const slider = document.querySelector('.testimonios-slider');
  if (!slider) return;

  const track = slider.querySelector('.testimonios-track');
  const slides = slider.querySelectorAll('.testimonio-slide');
  const prevBtn = slider.querySelector('.testimonio-prev');
  const nextBtn = slider.querySelector('.testimonio-next');
  const indicators = slider.querySelectorAll('.testimonio-indicator');
  
  let currentIndex = 0;
  const totalSlides = slides.length;

  // Función para actualizar slider
  function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Actualizar indicadores
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentIndex);
    });
    
    // Actualizar estado de botones
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === totalSlides - 1;
  }

  // Event listeners
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
      updateSlider();
    }
  });

  // Indicadores
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentIndex = index;
      updateSlider();
    });
  });

  // Auto-slide opcional (descomenta si quieres)
  /*
  setInterval(() => {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlider();
  }, 5000);
  */

  // Inicializar
  updateSlider();
}