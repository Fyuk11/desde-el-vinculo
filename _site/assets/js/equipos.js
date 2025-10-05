// equipos.js
export function initEquipos() {
  const equipoCards = document.querySelectorAll('.equipo-card');

  equipoCards.forEach(card => {
    const toggleBtn = card.querySelector('.equipo-toggle');
    const content = card.querySelector('.equipo-content');

    if (!toggleBtn || !content) return;

    // Inicializar todo cerrado
    content.style.maxHeight = "0px";
    card.classList.remove('open');

    toggleBtn.addEventListener('click', () => {
      const isOpen = card.classList.contains('open');
      card.classList.toggle('open');

      if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + "px";
        toggleBtn.textContent = "Cerrar detalles";
      } else {
        content.style.maxHeight = "0px";
        toggleBtn.textContent = "Ver detalles";
      }
    });
  });
}

