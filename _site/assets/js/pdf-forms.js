// pdf-forms.js - Versión Netlify Forms
export function initPdfForms() {
  const forms = document.querySelectorAll('.pdf-form, .pdf-form-main');
  
  if (!forms.length) {
    console.log('📝 No se encontraron formularios PDF');
    return;
  }

  console.log(`📝 Inicializando ${forms.length} formulario(s) PDF`);
  
  forms.forEach((form, index) => {
    // Netlify maneja el envío, nosotros solo el feedback visual
    form.addEventListener('submit', handlePdfFormSubmit);
    console.log(`✅ Formulario PDF ${index + 1} inicializado`);
  });
}

function handlePdfFormSubmit(e) {
  const form = e.target;
  const email = form.querySelector('input[type="email"]').value;
  const formName = form.getAttribute('name');
  
  if (!isValidEmail(email)) {
    e.preventDefault(); // Prevenir envío si el email no es válido
    showFormMessage(form, 'Por favor, ingresa un email válido', 'error');
    return;
  }

  // Mostrar estado de carga
  const button = form.querySelector('button');
  const originalText = button.innerHTML;
  
  button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
  button.disabled = true;

  // Netlify se encarga del envío, nosotros del feedback
  console.log(`📧 Enviando formulario ${formName} con email:`, email);
  
  // Guardar para tracking
  localStorage.setItem('pdf-lead-email', email);
  localStorage.setItem('pdf-download-time', new Date().toISOString());
  localStorage.setItem('pdf-form-source', formName);
  
  // Netlify redirigirá después del envío, pero podemos agregar un timeout de seguridad
  setTimeout(() => {
    // Solo si Netlify no redirigió automáticamente
    if (!window.location.href.includes('pdf')) {
      window.location.href = '/assets/pdf/5-claves-lenguaje-canino.pdf';
    }
  }, 3000);
}

// Validación de email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Mostrar mensajes en el formulario
function showFormMessage(form, message, type) {
  clearFormMessage(form);
  
  const messageEl = document.createElement('div');
  messageEl.className = `form-message form-message-${type}`;
  messageEl.innerHTML = `
    <i class="fas fa-${type === 'success' ? 'check' : 'exclamation'}"></i>
    ${message}
  `;
  
  messageEl.style.cssText = `
    padding: 12px 16px;
    margin: 1rem 0;
    border-radius: 10px;
    font-size: 0.95rem;
    text-align: center;
    font-weight: 500;
    background: ${type === 'success' ? '#d4edda' : '#f8d7da'};
    color: ${type === 'success' ? '#155724' : '#721c24'};
    border: 2px solid ${type === 'success' ? '#c3e6cb' : '#f5c6cb'};
  `;
  
  form.insertBefore(messageEl, form.firstChild);
}

function clearFormMessage(form) {
  const existingMessage = form.querySelector('.form-message');
  if (existingMessage) {
    existingMessage.remove();
  }
}

// Después de localStorage.setItem...
if (typeof gtag !== 'undefined') {
  gtag('event', 'generate_lead', {
    'event_category': 'pdf_download',
    'event_label': formName
  });
}

// O para Facebook Pixel
if (typeof fbq !== 'undefined') {
  fbq('track', 'Lead', {
    content_name: 'PDF Gratuito',
    content_category: 'Educación Canina'
  });
}