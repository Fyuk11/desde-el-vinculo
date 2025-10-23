---
layout: landing.njk
title: "Educando desde el Vínculo - Curso de Educación Canina Consciente"
description: "Aprendé a educar y acompañar desde el vínculo, con una mirada Sistémica, Emocional y Cognitiva. Transformá tu relación con tu perro."
permalink: index.html

# =======================
# CONFIGURACIÓN SITIO
# =======================
site:
  name: "Educando desde el Vínculo"
  url: "https://desdeelvinculo.netlify.app"
  verification: "tu-codigo-google-search-console" # Opcional

# =======================
# LOGO Y FAVICON
# =======================
logo: "/assets/images/logo.svg"  # o .png
favicon: "/assets/images/logo.svg"

# =======================
# SEO OPTIMIZADO
# =======================
seo:
  canonical: "https://desdeelvinculo.netlify.app"
  robots: "index, follow"
  # Open Graph
  og_title: "Educando desde el Vínculo - Curso de Educación Canina Consciente"
  og_description: "Aprendé a educar desde el vínculo emocional. Curso online para tutores y profesionales que buscan una relación basada en respeto y empatía."
  og_image: "/assets/images/og-image.jpg"
  og_url: "https://desdeelvinculo.netlify.app"
  # Twitter
  twitter_title: "Educando desde el Vínculo - Curso Consciente"
  twitter_description: "Transformá tu relación con tu perro desde la comprensión mutua. Educación canina sin castigos, con amor y respeto."
  twitter_image: "/assets/images/twitter-image.jpg"
  twitter_site: "@educandovinculo"
nav:
  - text: Inicio
    url: "#hero"
  - text: Presentación
    url: "#presentacion"
  - text: Qué lograrás
    url: "#logros"
  - text: Sobre mí
    url: "#sobre-mi"
  - text: Incluye
    url: "#incluye"
  - text: Testimonios
    url: "#testimonios"
  - text: FAQs
    url: "#faqs"
  - text: Comprar
    url: "#comprar"
    external: true
sections:
  
  # 🟩 SECCIÓN 1 - HERO
  - type: hero
    title: "Tu perro no necesita control, necesita comprensión."
    subheading: "Aprendé a educar y acompañar desde el vínculo, con una mirada Sistémica, Emocional y Cognitiva."
    subtitle: "Un curso para tutores y profesionales que buscan una relación basada en respeto, empatía y comunicación real."
    ctas:
      - text: "🌱 Accedé al curso ahora"
        url: "https://hotmart.com/es/marketplace/productos/educando-desde-el-vinculo-curso-de-educacion-canina-consciente/K102549535T"
      # En la sección HERO agregar:
    pdf_regalo:
      activo: true
      texto_linea1: "🎁 Recibí gratis:"
      texto_linea2: "'5 Claves para Comprender el Lenguaje de tu Perro'"
      form_id: "pdf-regalo-hero"    
  
  # 🟩 SECCIÓN 2 - PRESENTACIÓN DEL CURSO
  - type: presentacion
    title: "Una nueva forma de educar, desde el amor y la comprensión."
    textos:
      - "Este curso te invita a repensar el vínculo humano-perro desde la mirada Sistémica–Emocional–Cognitiva."
      - "Porque educar no es imponer, sino acompañar el desarrollo emocional y cognitivo del perro en un entorno seguro, coherente y afectivo."
      - "Vas a descubrir cómo las emociones, los pensamientos y las dinámicas del sistema familiar influyen en la conducta del perro, y cómo podés transformar el vínculo a través de una comunicación consciente."
    modulos:
      - "Módulo 1: Comprendiendo la educación canina desde el vínculo."
      - "Módulo 2: El sistema emocional-cognitivo en humanos y perros."
      - "Módulo 3: Gestión emocional y coherencia energética."
      - "Módulo 4: Comunicación y lenguaje canino."
      - "Módulo 5: Límites, autonomía y convivencia saludable."
      - "Módulo 6: Integración y evolución del vínculo."
    cta_text: "✨ Cambiá la forma de educar, creando una relación más consciente y armónica con tu perro."

      # 🟩 SECCIÓN 3 - QUÉ VAS A LOGRAR
  - type: logros
    title: "Después de este curso, vas a poder…"
    items:
      - icon: "fas fa-heart"
        texto: "Comprender las emociones y necesidades de tu perro desde una mirada integral."
      - icon: "fas fa-brain"
        texto: "Identificar cómo tu propio estado emocional impacta en su conducta."
      - icon: "fas fa-shield-alt"
        texto: "Establecer límites amorosos y coherentes que fomenten la autonomía."
      - icon: "fas fa-comments"
        texto: "Desarrollar una comunicación más empática y respetuosa."
      - icon: "fas fa-sync-alt"
        texto: "Transformar comportamientos no deseados desde la comprensión, no el castigo."
      - icon: "fas fa-home"
        texto: "Crear una convivencia basada en equilibrio, confianza y conexión real."

     # 🟩 SECCIÓN 4 - SOBRE LA CREADORA
  - type: sobre-creadora
    title: "Desde el vínculo, no desde el control."
    texto: "Soy Rodrigo Gomez, educador canino y acompañante en procesos vinculares desde un enfoque Sistémico–Emocional–Cognitivo. A lo largo de mi recorrido, comprendí que detrás de cada conducta hay una historia emocional, tanto en el perro como en la persona que lo acompaña. Este curso nace para compartir una mirada más humana, respetuosa y coherente sobre la educación canina — donde el vínculo es el verdadero punto de partida."
    imagen: "/assets/images/rodrigo-perro.jpg"
    alt: "Rodrigo Gomez con su perro"
    
    
    # 🟩 SECCIÓN 5 - QUÉ INCLUYE EL CURSO
  - type: incluye
    title: "¿Qué vas a encontrar en este recorrido?"
    items:
      - icon: "fas fa-book-open"
        titulo: "6 módulos completos"
        texto: "Con teoría, reflexiones y prácticas aplicables para tu día a día."
      - icon: "fas fa-puzzle-piece"
        titulo: "Herramientas emocionales y cognitivas"
        texto: "Para comprender conductas y transformar tu comunicación."
      - icon: "fas fa-comments"
        titulo: "Ejercicios prácticos"
        texto: "Para mejorar la comunicación humano–perro de manera efectiva."
      - icon: "fas fa-file-pdf"
        titulo: "Material descargable"
        texto: "PDFs con acceso ilimitado para revisar cuando necesites."
      - icon: "fas fa-leaf"
        titulo: "Enfoque respetuoso"
        texto: "Métodos conscientes y sin técnicas invasivas o punitivas."
    cta:
      texto: "👉 Accedé al curso y empezá a construir una relación desde el vínculo."
      url: "https://hotmart.com/es/marketplace/productos/educando-desde-el-vinculo-curso-de-educacion-canina-consciente/K102549535T"
      

    # 🟩 SECCIÓN PDF REGALO
  - type: pdf-regalo
    titulo: "🎁 Recibí tu PDF gratis"
    subtitulo: "5 Claves para Comprender el Lenguaje de tu Perro"
    descripcion: "Un regalo para empezar a transformar tu relación hoy mismo. Ingresá tu email y te lo enviamos al instante."
    form_id: "pdf-regalo-seccion"
    imagen: "/assets/images/pdf-preview.png"

  
    # 🟩 SECCIÓN 6 - TESTIMONIOS
  - type: testimonios
    title: "Historias de transformación"
    items:
      - nombre: "Mariana y Lolo"
        texto: "Entendí que mi perro no me desobedecía, simplemente no me comprendía. Hoy nos comunicamos con calma y empatía."
        imagen: "/assets/images/testimonios/mariana-lolo.jpg"
      - nombre: "Julián y Nube"
        texto: "Aprendí a observar mis emociones antes de pretender cambiar su conducta. Nuestro vínculo cambió completamente."
        imagen: "/assets/images/testimonios/julian-nube.jpg"
      - nombre: "Rodrigo (Creador)"
        texto: "Después de años de educación tradicional, descubrí que el verdadero cambio viene desde la comprensión mutua. Este curso es el resultado de esa transformación personal."
        imagen: "/assets/images/rodrigo-perro.jpg"



    # 🟩 SECCIÓN 7 - PREGUNTAS FRECUENTES
  - type: faqs
    title: "Preguntas antes de empezar"
    items:
      - question: "¿Es solo para educadores?"
        answer: "No, está diseñado tanto para tutores como para profesionales que quieran profundizar en el enfoque emocional–cognitivo."
      - question: "¿Qué necesito para hacerlo?"
        answer: "Solo disposición y curiosidad por comprender mejor el vínculo con tu perro. No se requieren conocimientos previos."
      - question: "¿Incluye prácticas?"
        answer: "Sí, cada módulo incluye ejercicios observacionales y reflexivos para aplicar inmediatamente con tu perro."
      - question: "¿Cuánto dura el curso?"
        answer: "Es autogestionado. Podés hacerlo a tu ritmo y revisarlo las veces que quieras. El contenido equivale a aproximadamente 8 horas de aprendizaje."
      - question: "¿Tengo acceso permanente?"
        answer: "Sí, una vez que adquirís el curso, tenés acceso de por vida a todas las actualizaciones y materiales."
      - question: "¿Ofrecen certificado?"
        answer: "Sí, al completar el curso recibís un certificado digital que acredita tu participación y aprendizaje."



    # 🟩 SECCIÓN 8 - CIERRE / CTA FINAL
  - type: cierre
    title: "Educar desde el vínculo es el verdadero acto de amor."
    subtitle: "Cuando entendés lo que tu perro siente y necesita, el aprendizaje fluye sin conflicto. No se trata de enseñar órdenes, sino de aprender a convivir desde la comprensión y la empatía."
    cta:
      texto: "🐾 Accedé al curso ahora"
      url: "https://hotmart.com/es/marketplace/productos/educando-desde-el-vinculo-curso-de-educacion-canina-consciente/K102549535T"
      
  
    # 🟩 FOOTER
  - type: footer
    email: "desdeel.vinculo@gmail.com"
    texto: "© 2025 Educando desde el Vínculo. Todos los derechos reservados."
    links:
      - text: "Inicio"
        url: "#hero"
      - text: "Presentación"
        url: "#presentacion"
      - text: "Qué lograrás"
        url: "#logros"
      - text: "Sobre mí"
        url: "#sobre-mi"
      - text: "Incluye"
        url: "#incluye"
      - text: "Testimonios"
        url: "#testimonios"
      - text: "FAQs"
        url: "#faqs"
    social:
      - type: "instagram"
        url: "https://www.instagram.com/desdeel.vinculo/"
      - type: "whatsapp"
        url: "https://wa.me/5491121652703"
  
  
  

---

  - type: pain
    title: "¿Te sientes identificado con alguno de estos problemas?"
    subtitle: "No estás solo. Muchos emprendedores y marketers pasan por esto antes de encontrar una solución definitiva."
    cta_text: "Pero existe una forma más fácil de hacer las cosas."
    cta_button: "Quiero conocer la solución"
    cta_link: "#solution" # Puede ser un anchor link a la siguiente sección o un link directo
    points:
    - title: "Inviertes tiempo y dinero en una landing page que no convierte"
      description: "Diseños poco atractivos, mensajes confusos y una estructura que no guía al usuario hacia la acción."
    - title: "Tu tasa de conversión es más baja de lo que esperabas"
      description: "El tráfico llega, pero se va sin dejar sus datos o comprar tu producto. Es como llenar un balde con un agujero."
    - title: "Dependes de un desarrollador para cada pequeño cambio"
      description: "Cada vez que quieres actualizar un texto, un precio o una imagen, tienes que pedir favores, pagar caro y esperar días."
    - title: "No tienes claridad sobre qué está funcionando y qué no"
      description: "Te falta data y pruebas A/B para optimizar tu página y mejorar tus resultados de forma consistente."


  - type: equipos
    title: "Equipos SER"
    subtitle: "Descubrí nuestros dispositivos y accesorios"
    cta:
      title: "Quiero mi equipo"
    equipos:
    - name: "SER AMOR"
      icon: "/assets/images/ser-amor.png"
      description: "Dispositivo de 3 Spark Gap o acelerador de partículas. Diseño en madera con tapa transparente. Electrodos de tungsteno de 6mm."
      price: "$2.000 USD"
      details:
        - "Diseño: caja de madera con tapa transparente grabada, 24x44x15 cm, peso 4kg. Rejilla exterior cubre ventilación con geometría sagrada."
        - "Alimentación: 110-220v, fuente 12v/15A, 50-60Hz."
        - "Fuente de poder: ZVS + flyback sintonizado en resonancia, genera 30.000V."
        - "Consumo de energía: 0.18 kW."
        - "Banco de Capacitores: alta tensión 4,7 nf/6000v para filtrar energía."
        - "Spark Gap externo: triple, electrodos de tungsteno de 6mm."
        - "Sistema de control: botón metálico con LED."
        - "Temporizador: 999 seg. (16.65 min)."
        - "Salida magnética: 1 conector canon izquierdo."
        - "Salida radiante: 2 conectores canon derecho."
        - "Ventilación: 1 ventilador 120mm con LED azul."
        - "Seguridad eléctrica: fusible interno + tecla de corte externa, conexión a tierra."
        - "Emisores de ruido: <60dB."
      accessories:
        - name: "Bobina Oudin"
          icon: "/assets/images/accesorios/bobina-oudin.png"
        - name: "Bobina Pancake Radiante"
          icon: "/assets/images/accesorios/bobina-pancake.png"
        - name: "Bobina Pancake Magnética"
          icon: "/assets/images/accesorios/bobina-magnetica.png"
        - name: "Manguitos"
          icon: "/assets/images/accesorios/manguitos.png"
        - name: "Bobina Corona"
          icon: "/assets/images/accesorios/bobina-corona.png"
        - name: "KIT Alta Frecuencia"
          icon: "/assets/images/accesorios/kit-alta-frecuencia.png"
      cta:
        whatsapp: "5491123456789"
        title: "Quiero mi equipo"

    - name: "SER ORIGEN"
      icon: "/assets/images/ser-origen.png"
      description: "Dispositivo de 3 Spark Gap. Diseño rígido portátil con electrodos de tungsteno de 5mm."
      price: "$1.600 USD"
      details:
        - "Diseño: caja rústica PVC, 25x47x20cm, peso 3kg."
        - "Alimentación: 110-220v, fuente 12v/15A, 50-60Hz."
        - "Fuente de poder: ZVS + flyback, genera 30.000V."
        - "Consumo de energía: 0.18 kW."
        - "Banco de Capacitores: 4,7 nf/6000v."
        - "Spark Gap externo: triple, electrodos de tungsteno de 5mm."
        - "Sistema de control: botón PVC con LED rojo."
        - "Temporizador: 999 seg. (16.65 min)."
        - "Salidas: 2 magnéticas (izquierda) y 2 radiantes (derecha)."
        - "Ventilación: 4 ventiladores 80mm LED azul."
        - "Seguridad eléctrica: fusible interno."
        - "Emisores de ruido: <60dB."
      accessories:
        - name: "Bobina Oudin Mediana"
          icon: "/assets/images/accesorios/bobina-oudin-mediana.png"
        - name: "Bobina Pancake Radiante"
          icon: "/assets/images/accesorios/bobina-pancake.png"
        - name: "Bobina Pancake Magnética"
          icon: "/assets/images/accesorios/bobina-magnetica.png"
        - name: "Manguitos"
          icon: "/assets/images/accesorios/manguitos.png"
        - name: "Bobina Corona"
          icon: "/assets/images/accesorios/bobina-corona.png"
        - name: "KIT Alta Frecuencia"
          icon: "/assets/images/accesorios/kit-alta-frecuencia.png"
      cta:
        whatsapp: "5491123456789"
        title: "Quiero mi equipo"

    - name: "SER ESENCIA"
      icon: "/assets/images/ser-esencia.png"
      description: "Dispositivo de 1 Spark Gap. Diseño portátil con electrodos de tungsteno de 4mm."
      price: "$950 USD"
      details:
        - "Diseño: caja rústica PVC, 25x47x20cm, peso 3kg."
        - "Alimentación: 110-220v, fuente 12v/15A, 50-60Hz."
        - "Fuente de poder: ZVS + flyback, genera 24.000V."
        - "Consumo de energía: 0.18 kW."
        - "Banco de Capacitores: 4,7 nf/2000v."
        - "Spark Gap externo: 1 descarga simple, electrodos cruzados 4mm."
        - "Sistema de control: botón PVC con LED rojo."
        - "Salidas: 1 magnética (izquierda) y 1 radiante (derecha)."
        - "Ventilación: 4 ventiladores 80mm LED azul."
        - "Seguridad eléctrica: fusible interno."
        - "Emisores de ruido: <60dB."
      accessories:
        - name: "Bobina Oudin Chica"
          icon: "/assets/images/accesorios/bobina-oudin-chica.png"
        - name: "Bobina Pancake Radiante"
          icon: "/assets/images/accesorios/bobina-pancake.png"
        - name: "Bobina Pancake Magnética"
          icon: "/assets/images/accesorios/bobina-magnetica.png"
        - name: "Manguitos"
          icon: "/assets/images/accesorios/manguitos.png"
        - name: "Bobina Corona"
          icon: "/assets/images/accesorios/bobina-corona.png"
      cta:
        whatsapp: "5491123456789"
        title: "Quiero mi equipo"












  - type: benefits
    title: Más que una landing, tu identidad digital
    items:
      - icon: /assets/images/svg1.png
        title: Diseño a medida
        text: Cada página nace de vos.
      - icon: /assets/images/svg2.png
        title: Optimización total
        text: Rápida, segura y visible en Google.
      - icon: /assets/images/svg3.png
        title: Conexión inmediata
        text: Tu página habla por vos y enamora a tu audiencia.

  - type: steps
    title: Proceso claro y humano
    steps:
      - number: 1
        title: Escuchamos
        text: Entendemos tu público y tu propuesta.
      - number: 2
        title: Diseñamos
        text: Tu mensaje y estilo pensado para ellos.
      - number: 3
        title: Creamos
        text: Transformamos tu esencia en una experiencia digital única que habla por sí sola.
      - number: 4
        title: Entregamos
        text: Lista para usar, sin estrés ni complicaciones y te enseñamos a gestionarla fácilmente.

  - type: section-divider
    invert: true
    gradient:
      - offset: 0%
        color: "#ff4a57"
        opacity: 0.6
      - offset: 100%
        color: "#ff8a72"
        opacity: 0.6

  - type: about
    title: "Más que una landing: una herramienta de crecimiento"
    text: >
      Creamos sistemas vivos, diseñados para que tu negocio crezca con solidez y transparencia. 
      Nuestras landings están optimizadas desde la base: velocidad, seguridad y diseño responsivo en todos los dispositivos.

    extra_text: >
      Podés actualizar textos, imágenes o secciones en minutos, sin conocimientos técnicos. 
      Además, tenés acceso a estadísticas reales sobre cómo la gente encuentra tu negocio en la web. 
      Y lo mejor: cada landing está pensada para ser escalable, para que tu presencia digital crezca al mismo ritmo que vos.

    images:
      - "/assets/images/about/cms.webp"         # Admin panel
      - "/assets/images/about/googlesearch.webp"            # Google console
      - "/assets/images/about/mockup.webp"          # Ejemplo real de landing
     # - "/assets/images/about/mockup2.jpg"

  - type: faqs
    title: Preguntas frecuentes
    items:
      - question: "¿Puedo editar mi landing yo mismo?"
        answer: "Sí. Con nuestro CMS podés actualizar textos, imágenes y secciones sin conocimientos técnicos."
      - question: "¿Cuánto tarda la entrega?"
        answer: "En promedio entre 3 y 5 días hábiles, con SEO básico incluido. Si necesitás urgencia, podemos agilizar el proceso."
      - question: "¿Se ve bien en celular?"
        answer: "Sí, todas las landings son 100% responsivas, adaptadas a cualquier dispositivo."
      - question: "¿La optimización SEO está incluida?"
        answer: "Sí, entregamos tu página lista para indexarse en Google y con métricas conectadas a Search Console."

  - type: cta-video
    title: Mostrá tu negocio como tus clientes lo esperan
    subtitle: Tu página ya está lista para atraer y enamorar visitantes.
    ctas:
      - text: Quiero mi página
        url: https://wa.me/5491121652703

  - type: contact
    title: Pedí tu landing hoy
    text: Completá el formulario y te contactamos para empezar cuanto antes.

  - type: footer
    text: © 2025 Landing Demo. Todos los derechos reservados.
    email: traduccioncreativadigital@gmail.com
    links:
      - text: Inicio
        url: "#hero"
      - text: Beneficios
        url: "#benefits"
      - text: Nosotros
        url: "#about"
      - text: Contacto
        url: "#contact"
    social:
      - type: instagram
        url: https://instagram.com/demo
      - type: whatsapp
        url: https://wa.me/5491121652703
---
