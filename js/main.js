document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("lab-form");
  const input = document.getElementById("texto");
  const tipo = document.getElementById("tipo");
  const output = document.getElementById("respuesta");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    output.textContent = "Procesando...";

    try {
      const response = await fetch("/api", { // Cambiado de /api/index a /api
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          texto: input.value, // Esto es lo que el backend espera
          tipo: tipo.value    // Esto también
        })
      });

      const data = await response.json();

      if (data.error) {
        output.textContent = "Error: " + data.error;
      } else {
        output.textContent = data.respuesta;
      }

    } catch (err) {
      output.textContent = "Error de conexión con el servidor.";
    }
  });
});
