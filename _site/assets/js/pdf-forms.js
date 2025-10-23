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
  
  if (!isValidEmail(email)) {
    showFormMessage(form, 'Por favor, ingresa un email válido', 'error');
    return;
  }

  // Mostrar estado de carga
  const button = form.querySelector('button');
  const originalText = button.innerHTML;
  const originalBg = button.style.background;
  
  button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
  button.disabled = true;

  try {
    // Simular envío (reemplazar con tu lógica real)
    await submitToEmailService(email, form.name);
    
    // Éxito
    showFormMessage(form, '¡Perfecto! Revisa tu email para descargar el PDF', 'success');
    button.innerHTML = '<i class="fas fa-check"></i> ¡Enviado!';
    button.style.background = '#27ae60';
    
    // Reset después de éxito
    setTimeout(() => {
      form.reset();
      button.innerHTML = originalText;
      button.style.background = originalBg;
      button.disabled = false;
      clearFormMessage(form);
    }, 5000);
    
  } catch (error) {
    // Error
    showFormMessage(form, 'Error al enviar. Intenta nuevamente.', 'error');
    button.innerHTML = originalText;
    button.style.background = originalBg;
    button.disabled = false;
  }
}

// Función para enviar a servicio de email (personalizar según tu setup)
async function submitToEmailService(email, formName) {
  // Aquí integras con tu servicio de email marketing
  // Ejemplos: Mailchimp, ConvertKit, SendGrid, Netlify Forms, etc.
  
  console.log(`📧 Email capturado desde ${formName}:`, email);
  
  // Simular delay de red
  return new Promise((resolve) => {
    setTimeout(resolve, 1500);
  });
  
  // Ejemplo con Netlify Forms (si usas Netlify):
  /*
  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      'form-name': formName,
      'email': email
    }).toString()
  });
  
  if (!response.ok) throw new Error('Error en el envío');
  */
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
    padding: 10px 15px;
    margin: 10px 0;
    border-radius: 8px;
    font-size: 0.9rem;
    text-align: center;
    background: ${type === 'success' ? '#d4edda' : '#f8d7da'};
    color: ${type === 'success' ? '#155724' : '#721c24'};
    border: 1px solid ${type === 'success' ? '#c3e6cb' : '#f5c6cb'};
  `;
  
  form.insertBefore(messageEl, form.firstChild);
}

function clearFormMessage(form) {
  const existingMessage = form.querySelector('.form-message');
  if (existingMessage) {
    existingMessage.remove();
  }
}