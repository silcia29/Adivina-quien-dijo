 const palabras = [
      "Presencia", "Inspirar", "Escuchar", "Confiar",
      "Transformar", "Sentido", "Humanidad", "Liderar",
      "Emociones", "Lenguaje", "Autogestión", "Mundos"
    ];

    function mostrarPuzzle() {
      const contenedor = document.getElementById("puzzle");
      contenedor.innerHTML = "";
      contenedor.classList.add("show");

      palabras.forEach((palabra, i) => {
        const pieza = document.createElement("div");
        pieza.className = "piece";
        pieza.textContent = palabra;
        pieza.style.animationDelay = `${i * 0.2}s`;
        contenedor.appendChild(pieza);
      });

      setTimeout(() => {
        document.getElementById("mensajeFinal").style.display = "block";
      }, palabras.length * 200 + 1000);
    }