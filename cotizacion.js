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
    msg.style.color = "#333";
    msg.textContent = "⏳ Enviando cotización...";
    btn.textContent = "Enviando...";
    btn.style.background = "#2a63c7";
    btn.disabled = true;

    fetch("procesar_cotizacion.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `nombre=${encodeURIComponent(nombre)}&cedula=${encodeURIComponent(cedula)}&telefono=${encodeURIComponent(tel)}&servicio=${encodeURIComponent(servicio)}&detalles=${encodeURIComponent(detalles)}`
    })
    .then(response => response.text())
    .then(data => {
      msg.innerHTML = data;
      msg.style.color = data.includes("✅") ? "green" : "red";

      btn.textContent = "Enviar";
      btn.disabled = false;

      if (data.includes("✅")) {
        document.getElementById("cotizacionForm").reset();
      }
    })
    .catch(error => {
      console.error(error);
      msg.style.color = "red";
      msg.textContent = "❌ Error al enviar la cotización. Intenta de nuevo.";
      btn.textContent = "Enviar";
      btn.disabled = false;
    });

  } else {
    msg.style.color = "red";
    msg.textContent = "⚠️ Por favor completa todos los campos.";
  }
});
