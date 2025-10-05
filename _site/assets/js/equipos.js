// equipos.js
export function initEquipos() {
  const equipoCards = document.querySelectorAll('.equipo-card');

  equipoCards.forEach(card => {
    const toggleBtn = card.querySelector('.accordion-btn');
    const content = card.querySelector('.accordion-content');

    if (!toggleBtn || !content) return;

    toggleBtn.addEventListener('click', () => {
      const isOpen = card.classList.contains('open');
      card.classList.toggle('open');

      if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + "px";
        toggleBtn.textContent = "Detalles y accesorios -";
      } else {
        content.style.maxHeight = "0px";
        toggleBtn.textContent = "Detalles y accesorios +";
      }
    });
  });
}
