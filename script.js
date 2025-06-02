const frases = [
  { texto: "El observador que soy condiciona las acciones que tomo.", modulo: "Coaching Ontológico" },
  { texto: "Si no estás incluyendo activamente, estás excluyendo sin querer.", modulo: "Coaching de Equipos y Liderazgo" },
  { texto: "Tomamos más de 30.000 decisiones al día, pero solo el 1% son conscientes.", modulo: "Neuroliderazgo y Coaching" },
  { texto: "Somos seres lingüísticos, emocionales y corporales.", modulo: "Coaching Ontológico" },
  { texto: "El coaching no busca dar respuestas, sino hacer las preguntas correctas.", modulo: "Fundamentos del Coaching" },
  { texto: "El quiebre no es un problema, es una oportunidad.", modulo: "Coaching Ontológico" },
  { texto: "El mapa no es el territorio.", modulo: "PNL para el Liderazgo Personal" },
  { texto: "El equipo también es un sistema con identidad propia.", modulo: "Coaching de Equipos y Liderazgo" },
  { texto: "No puedes guiar a nadie a un lugar al que tú no has ido.", modulo: "Fundamentos del Coaching" },
  { texto: "Las conversaciones son el corazón de los equipos.", modulo: "Coaching de Equipos y Liderazgo" },
  { texto: "La emoción dura solo 90 segundos... si no la alimentas con tus pensamientos.", modulo: "Neuroliderazgo y Coaching" },
  { texto: "No hay fracasos, solo resultados.", modulo: "PNL para el Liderazgo Personal" },
  { texto: "El coaching es más una forma de ser que una técnica.", modulo: "Fundamentos del Coaching" },
  { texto: "Las palabras crean mundos.”", modulo: "Coaching Ontológico" },
  { texto: "No todo grupo es un equipo.", modulo: "Coaching de Equipos y Liderazgo" },
  { texto: "No vemos las cosas como son, sino como somos.", modulo: "Coaching Ontológico" },
  { texto: "No se trata de quién tiene la razón, sino de qué necesita el sistema.", modulo: "Coaching de Equipos y Liderazgo" },
  { texto: "Quien tiene más opciones, tiene más poder.", modulo: "PNL para el Liderazgo Personal" },
  { texto: "Lo que no se comunica bien, se interpreta mal.", modulo: "Neuroliderazgo y Coaching" },
  { texto: "La transformación no es enseñar, sino despertar.", modulo: "Fundamentos del Coaching" },
  { texto: "Tu estado interno determina tu resultado externo.", modulo: "PNL para el Liderazgo Personal" },
  { texto: "El cerebro premia la coherencia entre emoción y acción.", modulo: "Neuroliderazgo y Coaching" },
  { texto: "La calidad de tu vida depende de la calidad de tu comunicación interna.", modulo: "PNL para el Liderazgo Personal" },
  { texto: "Cada persona tiene dentro de sí los recursos que necesita.", modulo: "Fundamentos del Coaching" },
  { texto: "La dopamina responde tanto a metas como a pequeños logros.", modulo: "Neuroliderazgo y Coaching" }
];

const modulos = [
  { nombre: "Fundamentos del Coaching", emoji: "📘" },
  { nombre: "Coaching Ontológico", emoji: "🧠" },
  { nombre: "Neuroliderazgo y Coaching", emoji: "🔬" },
  { nombre: "PNL para el Liderazgo Personal", emoji: "🎯" },
  { nombre: "Coaching de Equipos y Liderazgo", emoji: "🤝" }
];

let actual = 0;

function reproducirSonido(id) {
  const sonido = document.getElementById(id);
  if (sonido) sonido.play();
}

function iniciarJuego() {
  reproducirSonido('sound-start');
  document.getElementById('start').classList.remove('active');
  document.getElementById('game').classList.add('active');
  cargarFrase();
}

function cargarFrase() {
  const frase = frases[actual];
  document.getElementById('quote').textContent = `"${frase.texto}"`;

  const grid = document.getElementById('grid');
  grid.innerHTML = '';

  modulos.forEach(modulo => {
    const card = document.createElement('div');
    card.className = 'card';
    card.onclick = () => verificar(modulo.nombre);

    const emoji = document.createElement('div');
    emoji.className = 'emoji';
    emoji.textContent = modulo.emoji;

    const label = document.createElement('div');
    label.className = 'label';
    label.textContent = modulo.nombre;

    card.appendChild(emoji);
    card.appendChild(label);
    grid.appendChild(card);
  });

  document.getElementById('feedback').textContent = '';
}

function verificar(opcion) {
  const correcto = frases[actual].modulo;
  const feedback = document.getElementById('feedback');

  if (opcion === correcto) {
    reproducirSonido('sound-correct');
    feedback.textContent = '✅ ¡Correcto!';
    feedback.style.color = 'limegreen';
  } else {
    reproducirSonido('sound-wrong');
    feedback.textContent = `❌ Incorrecto. Era: ${correcto}`;
    feedback.style.color = 'red';
  }

  setTimeout(() => {
    actual++;
    if (actual < frases.length) {
      cargarFrase();
    } else {
      document.getElementById('quote').textContent = '🎉 ¡Has completado el juego!';
      document.getElementById('grid').innerHTML = '';
      feedback.textContent = 'Gracias por participar.';
      feedback.style.color = '#000';
      document.getElementById('link-final').style.display = 'block';
    }
  }, 2500);
}



