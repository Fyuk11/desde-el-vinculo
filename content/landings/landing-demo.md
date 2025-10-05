---
layout: landing.njk
title: Landing Demo Cliente
description: Esta es una landing de prueba para mostrar secciones dinámicas.
permalink: index.html
seo:
  canonical: https://startland.netlify.app
  og_title: Startland landing page
  og_description: Startland prueba de landing dinámica con 11ty y Netlify CMS
  og_image: /assets/images/placeholder.jpg
  twitter_title: Startland Landing Demo 
  twitter_description: Startland prueba de landing dinámica con 11ty y Netlify CMS
nav:
  - text: Inicio
    url: "#hero"
  - text: Beneficios
    url: "#benefits"
  - text: Nosotros
    url: "#about"
  - text: Contacto
    url: "#contact"
  - text: WhatsApp
    url: https://wa.me/5491121652703
    external: true
sections:
  - type: hero
    title: "Vuelve al origen de tu esencia divina"
    subheading: "Un camino hacia tu bienestar integral con tecnología escalar"
    subtitle: "Descubrí cómo la tecnología escalar puede ayudarte a mejorar tu bienestar físico, mental y emocional, potenciar tus terapias y transformar la salud de manera integral."
    videos:
     desktopWebm: "/assets/videos/heroDesktop.webm"
     desktopMp4: "/assets/videos/heroDesktop.mp4"
     mobileWebm: "/assets/videos/heroDeskMobile.webm"
     mobileMp4: "/assets/videos/heroDeskMobile.mp4"
    ctas:
     - text: "Conocer más"
       url: "#what-is"
     - text: "Hablar por WhatsApp"
       url: "https://wa.me/5493435616629"
    holisticTitle: "Información para Centros Holísticos"
    holisticText: "Sumá la energía escalar a tu espacio y potencia la experiencia de tus consultantes. Capacitación, soporte y beneficios exclusivos."


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
