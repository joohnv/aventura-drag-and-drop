document.addEventListener("DOMContentLoaded", () => {
    // Variables para las preguntas, áreas de drop y elementos drag
    const dragItems = document.querySelectorAll('.drag-item');
    const dropAreas = document.querySelectorAll('.drop-area');
    let currentQuestion = 1;
    let correctAnswers = 0;

    // Agregar eventos de dragstart a los elementos drag
    dragItems.forEach(item => {
        item.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData("text", e.target.id);
        });
    });

    // Agregar eventos de dragover y drop a las áreas de drop
    dropAreas.forEach(area => {
        area.addEventListener('dragover', (e) => {
            e.preventDefault(); 
        });

        area.addEventListener('drop', (e) => {
            e.preventDefault();
            const draggedId = e.dataTransfer.getData("text");
            const draggedElement = document.getElementById(draggedId);
            
            // Mostrar el texto del item arrastrado en el área de drop
            area.textContent = draggedElement.textContent;
            draggedElement.style.display = 'none'; 

            // Verificar si la respuesta es correcta
            checkAnswer(area.id, draggedId);
        });
    });

    // Función para verificar la respuesta
    function checkAnswer(dropAreaId, draggedId) {
        if (dropAreaId === "drop1" && draggedId === "drag3") {
            correctAnswers++;
        } else if (dropAreaId === "drop2" && draggedId === "drag5") {
            correctAnswers++;
        } else if (dropAreaId === "drop3" && draggedId === "drag12") {
            correctAnswers++;
        } else if (dropAreaId === "drop4" && draggedId === "drag13") {
            correctAnswers++;
        } else if (dropAreaId === "drop5" && draggedId === "drag17") {
            correctAnswers++;
        }
        
        // Si todas las respuestas son correctas
        if (correctAnswers === 5) {
            setTimeout(() => {
                window.location.href = "../html/freedom.html"; 
            }, 1000);
        } else {
            // Mostrar la siguiente pregunta
            showNextQuestion();
        }
    }

    // Función para mostrar la siguiente pregunta
    function showNextQuestion() {
        // Ocultar la pregunta actual
        const currentDiv = document.getElementById(`question${currentQuestion}`);
        currentDiv.classList.add('hidden');
        
        // Incrementar el número de pregunta
        currentQuestion++;
        
        // Mostrar la siguiente pregunta
        const nextDiv = document.getElementById(`question${currentQuestion}`);
        if (nextDiv) {
            nextDiv.classList.remove('hidden');
        }

        // Si hemos pasado todas las preguntas y no se han respondido correctamente todas, redirigir a fracaso
        if (currentQuestion > 5 && correctAnswers !== 5) {
            setTimeout(() => {
                window.location.href = "../html/gameOver.html"; 
            }, 1000);
        }
    }
});
