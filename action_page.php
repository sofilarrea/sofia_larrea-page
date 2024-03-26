<?php
// Verificar si se han enviado datos desde el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];

    // Aquí puedes realizar cualquier acción que desees con los datos
    // Por ejemplo, guardarlos en una base de datos, enviarlos por correo electrónico, etc.

    // Ejemplo de cómo imprimir los datos para verificar que se recibieron correctamente
    echo "Datos recibidos desde el formulario:<br>";
    echo "Nombre: " . $firstname . "<br>";
    echo "Apellido: " . $lastname . "<br>";
    echo "Email: " . $email . "<br>";
    echo "Mensaje: " . $subject . "<br>";
} else {
    // Si no se han enviado datos desde el formulario, se puede redirigir o mostrar un mensaje de error
    echo "No se han recibido datos del formulario.";
}
?>
