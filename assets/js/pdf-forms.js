// pdf-forms.js
export function initPdfForms() {
  const forms = document.querySelectorAll('.pdf-form, .pdf-form-main');
  
  if (!forms.length) {
    console.log('📝 No se encontraron formularios PDF');
    return;
  }

  console.log(`📝 Inicializando ${forms.length} formulario(s) PDF`);
  
  forms.forEach((form, index) => {
    form.addEventListener('submit', handlePdfFormSubmit);
    console.log(`✅ Formulario PDF ${index + 1} inicializado`);
  });
}

async function handlePdfFormSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const formData = new FormData(form);
  const email = formData.get('email');
  const formName = form.getAttribute('name') || 'pdf-form';
  
  if (!isValidEmail(email)) {
    showFormMessage(form, 'Por favor, ingresa un email válido', 'error');
    return;
  }

  // Mostrar estado de carga
  const button = form.querySelector('button');
  const originalText = button.innerHTML;
  
  button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
  button.disabled = true;

  try {
    // Enviar a Netlify Forms
    await submitToNetlifyForms(email, formName);
    
    // Éxito - Redirigir al PDF
    showFormMessage(form, '¡Perfecto! Redirigiendo a tu PDF...', 'success');
    button.innerHTML = '<i class="fas fa-check"></i> ¡Enviado!';
    
    // Guardar en localStorage para tracking
    localStorage.setItem('pdf-lead-email', email);
    localStorage.setItem('pdf-download-time', new Date().toISOString());
    localStorage.setItem('pdf-form-source', formName);
    
    // Redirigir al PDF después de 1.5 segundos
    setTimeout(() => {
      // Cambia esta URL por la ruta real de tu PDF
      window.location.href = '/assets/pdf/5-claves-lenguaje-canino.pdf';
    }, 1500);
    
  } catch (error) {
    // Error
    console.error('Error enviando formulario:', error);
    showFormMessage(form, 'Error al enviar. Intenta nuevamente.', 'error');
    button.innerHTML = originalText;
    button.disabled = false;
  }
}

// Función para enviar a Netlify Forms
async function submitToNetlifyForms(email, formName) {
  const formData = new URLSearchParams();
  formData.append('form-name', formName);
  formData.append('email', email);
  formData.append('timestamp', new Date().toISOString());
  formData.append('source', window.location.href);

  const response = await fetch('/', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    },
    body: formData.toString()
  });
  
  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`);
  }
  
  console.log(`✅ Lead capturado en ${formName}:`, email);
  return response;
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
  
  // Estilos básicos para el mensaje
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