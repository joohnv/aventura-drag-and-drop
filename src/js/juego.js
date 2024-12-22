window.onload = () => {
  const furgoneta = document.getElementById("furgoneta");
  const ladron = document.getElementById("ladron");
  const jugador = document.getElementById("jugador");
  const textoJuego = document.getElementById("texto-juego");

  // Mostrar la furgoneta y animarla
  furgoneta.classList.remove("hidden");
  furgoneta.classList.add("animate-mover-furgoneta");

  // Cuando la animación de la furgoneta termine, mostrar y animar al ladrón
  furgoneta.addEventListener("animationend", () => {
    ladron.classList.remove("hidden");
    ladron.classList.add("animate-mover-ladron");

    // Cuando el ladrón llegue a la posición final, hacer que él y el jugador se muevan hacia la izquierda
    ladron.addEventListener("animationend", () => {
      jugador.classList.add("animate-mover-ladron-y-jugador");
      ladron.classList.add("animate-mover-ladron-y-jugador");

      // Cuando ambos lleguen a la posición final, esconderlos
      ladron.addEventListener("animationend", () => {
        ladron.classList.add("hidden");
        jugador.classList.add("hidden");

        // La furgoneta sigue su camino hacia la derecha
        furgoneta.classList.add("animate-mover-furgoneta-final");

        // Que la furgoneta no reinicie su animación y ocultamos todo
        furgoneta.addEventListener("animationend", () => {
          // Ocultamos la furgoneta
          furgoneta.classList.add("hidden");
          ladron.classList.add("hidden");

          // Mostramos el texto 
          textoJuego.classList.remove("hidden");

          // Añadir un pequeño retraso para hacer que el texto aparezca con el efecto de tipo escritor
          setTimeout(() => {
            textoJuego.style.display = "block"; 

            //esperar 5 seg y redigir a otro html
            setTimeout(()=>{
              window.location.href = "../html/preguntas.html";
            },5000);
          }, 100);
        });
      });
    });
  });
};
