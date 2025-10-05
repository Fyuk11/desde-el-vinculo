// equipos.js
export function initEquipos() {
  const equipoCards = document.querySelectorAll('.equipo-card');

  equipoCards.forEach(card => {
    const toggleBtn = card.querySelector('.accordion-btn');
    const content = card.querySelector('.equipo-content');

    if (!toggleBtn || !content) return;

    // Inicializar el contenido cerrado
    content.style.maxHeight = "0px";
    card.classList.remove('open');

    toggleBtn.addEventListener('click', () => {
      const isOpen = card.classList.contains('open');
      card.classList.toggle('open');

      if (!isOpen) {
        // Abrir: altura dinámica y texto del botón
        content.style.maxHeight = content.scrollHeight + "px";
        toggleBtn.textContent = "Detalles y accesorios -";
      } else {
        // Cerrar: altura 0 y texto del botón
        content.style.maxHeight = "0px";
        toggleBtn.textContent = "Detalles y accesorios +";
      }
    });
  });
}
