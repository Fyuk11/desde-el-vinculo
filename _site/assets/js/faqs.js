// faqs.js
export function initFaqs() {
  const faqCards = document.querySelectorAll('.faq-card');
  
  if (!faqCards.length) return;

  faqCards.forEach(card => {
    const question = card.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Cerrar otros FAQs abiertos
      faqCards.forEach(otherCard => {
        if (otherCard !== card && otherCard.classList.contains('active')) {
          otherCard.classList.remove('active');
        }
      });
      
      // Alternar el actual
      card.classList.toggle('active');
    });
  });

  // Abrir el primer FAQ por defecto (opcional)
  // faqCards[0]?.classList.add('active');
}