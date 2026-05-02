// ---------- MENÚ MÓVIL ----------
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navOverlay = document.getElementById('navOverlay');
const mainNav = document.getElementById('mainNav');

function openMenu() {
  navToggle.classList.add('active');
  navToggle.setAttribute('aria-expanded', 'true');
  navMenu.classList.add('active');
  navOverlay.classList.add('active');
}

function closeMenu() {
  navToggle.classList.remove('active');
  navToggle.setAttribute('aria-expanded', 'false');
  navMenu.classList.remove('active');
  navOverlay.classList.remove('active');
}

navToggle.addEventListener('click', () => {
  if (navMenu.classList.contains('active')) {
    closeMenu();
  } else {
    openMenu();
  }
});

navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});
navOverlay.addEventListener('click', closeMenu);

window.addEventListener('scroll', () => {
  mainNav.classList.toggle('scrolled', window.scrollY > 50);
});

// ---------- FORMULARIO MAILERLITE ----------
// ---------- FORMULARIO MAILERLITE ----------
const form = document.getElementById('mailerlite-form');
const successMsg = document.getElementById('successMsg');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    if (!email) return alert('Por favor, ingresá tu email.');

    // URL que obtuviste de tu código de MailerLite
    const MAILERLITE_URL = 'https://assets.mailerlite.com/jsonp/2040570/forms/186035030338832236/subscribe';

    const formData = new FormData();
    formData.append('fields[email]', email);
    formData.append('ml-submit', '1');
    formData.append('anticsrf', 'true');

    try {
      const response = await fetch(MAILERLITE_URL, {
        method: 'POST',
        body: formData,
        mode: 'cors'   // importante: no usamos 'no-cors' porque MailerLite espera POST normal
      });

      if (response.ok) {
        form.reset();
        successMsg.style.display = 'block';
        setTimeout(() => successMsg.style.display = 'none', 6000);
      } else {
        alert('Hubo un error. Por favor intentá de nuevo.');
      }
    } catch (error) {
      alert('Error de conexión. Revisá tu internet.');
      console.error(error);
    }
  });
}

// ---------- MURO DE COMUNIDAD ----------
// ---------- MURO DE COMUNIDAD (envío a Google Sheets + visual) ----------
/*
const comunidadForm = document.getElementById('comunidad-form');
const comunidadWall = document.getElementById('comunidadWall');

// 🔁 REEMPLAZÁ ESTA URL POR LA DE TU WEB APP DE GOOGLE
const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbz6UNEOk6T4VD07CrfPzsQklKXfSldbrpKQ_sO2eoNcy-Tojly_TWWGQ827gw08YnKp0Q/exec';

if (comunidadForm) {
  comunidadForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre_comunidad').value.trim();
    const mensaje = document.getElementById('mensaje_comunidad').value.trim();

    if (!nombre || !mensaje) {
      alert('Por favor, completá al menos tu nombre y el mensaje.');
      return;
    }

    // Mostrar en el muro localmente (siempre visible)
    const nuevoMensaje = document.createElement('div');
    nuevoMensaje.classList.add('comunidad-msg');
    nuevoMensaje.innerHTML = `
      <p>“${mensaje.replace(/"/g, '\\"')}”</p>
      <span class="comunidad-autor">— ${nombre} 🐾</span>
    `;
    comunidadWall.insertBefore(nuevoMensaje, comunidadWall.firstChild);
    
    // Enviar a Google Sheets en segundo plano
    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, mensaje })
      });
    } catch (error) {
      console.warn('No se pudo guardar en Sheets, pero el mensaje queda en el muro.', error);
    }

    comunidadForm.reset();
    alert('¡Gracias por compartir! Tu historia ya es parte de la comunidad.');
  });
} */


  // ---------- MURO DE COMUNIDAD (rotativo, guardado en Google Sheets) ----------
const comunidadForm = document.getElementById('comunidad-form');
const testimonioActivo = document.getElementById('testimonioActivo');
const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbz6UNEOk6T4VD07CrfPzsQklKXfSldbrpKQ_sO2eoNcy-Tojly_TWWGQ827gw08YnKp0Q/exec'; // 🔁 Reemplazar

// Array con los mensajes, arranca con algunos precargados
const mensajes = [
  { texto: "Quiero que mi perra no le ladre a otros perros en el paseo. ¡Gracias por la guía!", autor: "Andrea, con Nala 🐕" },
  { texto: "Ayer paseamos sin tirones por primera vez. No lo podía creer.", autor: "Leo, con Pancho 🐶" }
];

let indiceActual = 0;
let intervalo;

function mostrarMensaje(index) {
  if (mensajes.length === 0) return;
  const msg = mensajes[index];
  testimonioActivo.style.opacity = '0';
  setTimeout(() => {
    testimonioActivo.innerHTML = `
      <p>“${msg.texto.replace(/"/g, '\\"')}”</p>
      <span class="comunidad-autor">— ${msg.autor}</span>
    `;
    testimonioActivo.style.opacity = '1';
  }, 300);
}

function iniciarRotacion() {
  if (mensajes.length <= 1) {
    // Solo mostramos el primer mensaje sin rotar
    mostrarMensaje(0);
    return;
  }
  mostrarMensaje(indiceActual);
  intervalo = setInterval(() => {
    indiceActual = (indiceActual + 1) % mensajes.length;
    mostrarMensaje(indiceActual);
  }, 4000); // cambia cada 4 segundos
}

// Detener y reiniciar rotación cuando se agregue un mensaje nuevo
function reiniciarRotacion() {
  clearInterval(intervalo);
  iniciarRotacion();
}

// Al cargar la página
mostrarMensaje(0);
iniciarRotacion();

// Manejo del formulario
if (comunidadForm) {
  comunidadForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre_comunidad').value.trim();
    const mensajeTexto = document.getElementById('mensaje_comunidad').value.trim();

    if (!nombre || !mensajeTexto) {
      alert('Por favor, completá al menos tu nombre y el mensaje.');
      return;
    }

    // Agregar al array y rotar
    mensajes.push({ texto: mensajeTexto, autor: `${nombre} 🐾` });
    reiniciarRotacion();

    // Enviar a Google Sheets
    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, mensaje: mensajeTexto })
      });
    } catch (error) {
      console.warn('No se pudo guardar en Sheets', error);
    }

    comunidadForm.reset();
    alert('¡Gracias por compartir! Tu historia ya es parte de la comunidad.');
  });
}