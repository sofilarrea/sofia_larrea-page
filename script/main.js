
// Uso de la función para hacer zoom en la foto al hacer clic
let imagePortfolio = document.getElementById("image");
let imagePortfolio2 = document.getElementById("imageAceite");   
let imagePortfolio3 = document.getElementById("imageAfrica");

// Obtener todas las imágenes con la clase "zoomable"
let images = document.querySelectorAll(".zoomable");

// Zoom in al hacer clic
images.forEach(image => {
    image.addEventListener("click", function() {
        if (!image.classList.contains("zoomed")) {
            image.style.transform = "scale(2.5)";
            image.classList.add("zoomed");
        } else {
            // Zoom out si ya está ampliado
            image.style.transform = "scale(1)";
            image.classList.remove("zoomed");
        }
    });
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let data = {
        name,
        email,
        message
    };
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    fetch('https://apx-api.vercel.app/api/utils/dwf', {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        console.log('Success:', result);
        document.getElementById('contactForm').reset();
        alert('Mensaje enviado correctamente');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Ocurrió un error al enviar el mensaje');
    });
}