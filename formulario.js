document.getElementById("cotizacionForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const cedula = document.getElementById("cedula").value;
  const tel = document.getElementById("tel").value;
  const servicio = document.getElementById("servicio").value;
  const detalles = document.getElementById("detalles").value;
  const msg = document.getElementById("msg");
  const btn = this.querySelector("button");

  if (nombre && cedula && tel && servicio && detalles) {
    msg.style.color = "green";
    msg.textContent = "✅ Cotización enviada correctamente. Nos pondremos en contacto pronto.";

    // Animación de botón
    btn.textContent = "Enviando...";
    btn.style.background = "#2a63c7";
    btn.disabled = true;

    setTimeout(() => {
      msg.textContent = "✅ Cotización enviada correctamente. ¡Gracias por contactarnos!";
      btn.textContent = "Enviar";
      btn.disabled = false;
      document.getElementById("cotizacionForm").reset();
    }, 1500);

  } else {
    msg.style.color = "red";
    msg.textContent = "⚠️ Por favor completa todos los campos.";
  }
});
