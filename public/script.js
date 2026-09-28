async function loadStatus() {
  const status = document.getElementById("status");
  const environment = document.getElementById("environment");
  const serverTime = document.getElementById("serverTime");

  try {
    const response = await fetch("/api/status");
    if (!response.ok) {
      throw new Error("No se pudo consultar el servidor");
    }

    const data = await response.json();
    status.textContent = "Aplicación en línea";
    environment.textContent = data.environment;
    serverTime.textContent = new Date(data.serverTime).toLocaleString("es-MX");
  } catch {
    status.textContent = "Servidor no disponible";
    environment.textContent = "—";
    serverTime.textContent = "—";
  }
}

loadStatus();
