<?php
include("conexion.php");

$nombre = $_POST["nombre"] ?? "";
$cedula = $_POST["cedula"] ?? "";
$telefono = $_POST["telefono"] ?? "";
$servicio = $_POST["servicio"] ?? "";
$detalles = $_POST["detalles"] ?? "";

if ($nombre && $cedula && $telefono && $servicio && $detalles) {
    $stmt = $conn->prepare("INSERT INTO cotizaciones (nombre, cedula, telefono, servicio, detalles) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $nombre, $cedula, $telefono, $servicio, $detalles);

    if ($stmt->execute()) {
        echo "✅ Cotización enviada correctamente. ¡Gracias por contactarnos!";
    } else {
        echo "❌ Error al guardar la cotización. Intenta nuevamente.";
    }

    $stmt->close();
} else {
    echo "⚠️ Faltan datos. Por favor completa todos los campos.";
}

$conn->close();
?>
