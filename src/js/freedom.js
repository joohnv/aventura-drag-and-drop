window.onload = () => {
    const furgoneta = document.getElementById("furgoneta");
    const jugador = document.getElementById("jugador");
    const textoJuego = document.getElementById("texto-juego");
  
    // Mostrar la furgoneta y animarla
    furgoneta.classList.remove("hidden");
    furgoneta.classList.add("animate-mover-furgoneta");
  
    // Cuando la animación de la furgoneta termine, mostrar al jugador
    furgoneta.addEventListener("animationend", () => {
      jugador.classList.remove("hidden");
      jugador.classList.add("animate-mover-jugador");
        
      // Cuando el jugador llegue a su posicion mover la furgoneta
      jugador.addEventListener("animationend", ()=>{
        furgoneta.classList.add("animate-mover-furgoneta-final");

        furgoneta.addEventListener("animationend", ()=>{
            furgoneta.classList.add("hidden");
            jugador.classList.add("hidden");

            // Mostramos el texto cuando todo haya acabado
            textoJuego.classList.remove("hidden")

            // Redirigir al menu
            setTimeout(()=>{
                window.location.href = "../index.html";
            }, 4000)
        })
      })
    });
  };
  