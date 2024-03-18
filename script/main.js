function hacerZoomEnFoto(elemento) {
    // Aumentar el tamaño de la foto
    elemento.style.transform = "scale(2)"; // Puedes ajustar el nivel de zoom aquí

    // Cambiar el cursor al hacer hover
    elemento.style.cursor = "move";

    // Habilitar el desplazamiento (panning)
    let isDragging = false;
    let startX, startY, startLeft, startTop;

    elemento.addEventListener("mousedown", function(event) {
        isDragging = true;
        startX = event.clientX;
        startY = event.clientY;
        startLeft = elemento.offsetLeft;
        startTop = elemento.offsetTop;
    });

    elemento.addEventListener("mouseup", function() {
        isDragging = false;
    });

    elemento.addEventListener("mousemove", function(event) {
        if (isDragging) {
            const offsetX = event.clientX - startX;
            const offsetY = event.clientY - startY;
            elemento.style.left = startLeft + offsetX + "px";
            elemento.style.top = startTop + offsetY + "px";
        }
    });

    // Deshacer el zoom y desplazamiento al hacer clic de nuevo
    elemento.addEventListener("click", function() {
        resetearZoom(elemento);
    });
}

function resetearZoom(elemento) {
    // Restablecer el tamaño de la foto
    elemento.style.transform = "";
    elemento.style.left = "";
    elemento.style.top = "";

    // Restablecer el cursor
    elemento.style.cursor = "";

    // Remover el listener para evitar múltiples clics
    elemento.removeEventListener("click", resetearZoom);
}

// Uso de la función para hacer zoom en la foto al hacer clic
let imagePortfolio = document.getElementById("image");
let imagePortfolio2 = document.getElementById("imageAceite");   
let imagePortfolio3 = document.getElementById("imageAfrica");

imagePortfolio.addEventListener("click", function() {
    hacerZoomEnFoto(imagePortfolio);
});

