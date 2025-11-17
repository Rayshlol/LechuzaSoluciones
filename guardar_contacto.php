<?php
include('conexion.php');

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

// 1️⃣ Guardar en la base de datos
$sql = "INSERT INTO contacto (nombre, correo, telefono, mensaje) VALUES (?, ?, ?, ?)";
$params = array($nombre, $correo, $telefono, $mensaje);
$stmt = sqlsrv_query($conn, $sql, $params);

// 2️⃣ Enviar correo
$to = "lechuzasoluciones@gmail.com";
$subject = "Nuevo mensaje de contacto - Lechuza Soluciones";
$body = "Has recibido un nuevo mensaje desde tu sitio web:\n\n".
        "Nombre: $nombre\n".
        "Correo: $correo\n".
        "Teléfono: $telefono\n".
        "Mensaje:\n$mensaje";
$headers = "From: $correo";

if($stmt){
    if(mail($to, $subject, $body, $headers)){
        echo "✅ Mensaje enviado y guardado correctamente.";
    } else {
        echo "⚠️ Guardado en base de datos, pero no se pudo enviar el correo.";
    }
} else {
    echo "❌ Error al guardar en la base de datos.";
}
?>

