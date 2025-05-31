const frases = [
  { texto: "Interpretamos desde nuestra historia, no desde la realidad.", modulo: "Coaching Ontológico" },
  { texto: "Los equipos se construyen desde la conversación.", modulo: "Coaching de Equipos y Liderazgo" },
  { texto: "El cerebro busca ahorrar energía constantemente.", modulo: "Neuroliderazgo y Coaching" },
  { texto: "Todo juicio revela al observador que somos.", modulo: "Coaching Ontológico" },
  { texto: "No se puede intervenir una realidad que no se puede observar.", modulo: "Fundamentos del Coaching" },
  { texto: "No somos seres racionales que sienten, sino seres emocionales que razonan.", modulo: "Coaching Ontológico" },
  { texto: "El mapa no es el territorio.", modulo: "PNL para el Liderazgo Personal" },
  { texto: "Un equipo exitoso no es aquel que evita conflictos, sino el que los gestiona bien.", modulo: "Coaching de Equipos y Liderazgo" },
  { texto: "El coaching no busca dar respuestas, sino hacer las preguntas correctas.", modulo: "Fundamentos del Coaching" },
  { texto: "La confianza es la base de un equipo funcional.", modulo: "Coaching de Equipos y Liderazgo" },
  { texto: "La emoción guía la toma de decisiones más de lo que creemos.", modulo: "Neuroliderazgo y Coaching" },
  { texto: "Todo comportamiento tiene una intención positiva.", modulo: "PNL para el Liderazgo Personal" },
  { texto: "El lenguaje no solo describe, también crea.", modulo: "Fundamentos del Coaching" },
  { texto: "Cambiando el lenguaje cambia la emoción.", modulo: "Coaching Ontológico" },
  { texto: "No todo grupo es un equipo.", modulo: "Coaching de Equipos y Liderazgo" },
  { texto: "Las palabras crean mundos.", modulo: "Coaching Ontológico" },
  { texto: "Un líder no crea seguidores, crea más líderes.", modulo: "Coaching de Equipos y Liderazgo" },
  { texto: "No hay fracasos, solo resultados.", modulo: "PNL para el Liderazgo Personal" },
  { texto: "Lo que se repite se fortalece: el poder de la neuroplasticidad.", modulo: "Neuroliderazgo y Coaching" },
  { texto: "El ser humano no actúa de acuerdo a la realidad, sino a su interpretación de ella.", modulo: "Fundamentos del Coaching" },
  { texto: "La mente no distingue entre lo real y lo imaginario.", modulo: "PNL para el Liderazgo Personal" },
  { texto: "Tomamos más de 30.000 decisiones al día, pero solo el 1% son conscientes.", modulo: "Neuroliderazgo y Coaching" },
  { texto: "La flexibilidad es la clave de la eficacia.", modulo: "PNL para el Liderazgo Personal" },
  { texto: "El lenguaje no solo describe, también crea.", modulo: "Fundamentos del Coaching" },
  { texto: "No vemos el mundo como es, sino como somos.", modulo: "Neuroliderazgo y Coaching" }
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



