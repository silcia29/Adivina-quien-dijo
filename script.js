const frases = [
  { texto: "El observador que soy condiciona las acciones que tomo.", modulo: "Coaching Ontológico" },
  { texto: "Si no estás incluyendo activamente, estás excluyendo sin querer.", modulo: "Coaching de Equipos y Liderazgo" },
  { texto: "Tomamos más de 30.000 decisiones al día, pero solo el 1% son conscientes.", modulo: "Neuroliderazgo y Coaching" },
  { texto: "Somos seres lingüísticos, emocionales y corporales.", modulo: "Coaching Ontológico" },
  { texto: "El quiebre no es un problema, es una oportunidad.", modulo: "Coaching Ontológico" },
  { texto: "El mapa no es el territorio.", modulo: "PNL para el Liderazgo Personal" },
  { texto: "Cada persona tiene dentro de si los recursos que necesita.", modulo: "Fundamentos del Coaching" },
  { texto: "No hay fracasos, solo resultados.", modulo: "PNL para el Liderazgo Personal" },
  { texto: "Las palabras crean mundos.”", modulo: "Coaching Ontológico" },
  { texto: "No se trata de quién tiene la razón, sino de qué necesita el sistema.", modulo: "Coaching de Equipos y Liderazgo" },
  { texto: "Lo que no se comunica bien, se interpreta mal.", modulo: "Neuroliderazgo y Coaching" },
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



