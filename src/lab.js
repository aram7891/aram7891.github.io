export function initLab() {
  const analyzeBtn = document.getElementById("analyzeBtn");
  const noteBtn = document.getElementById("noteBtn");

  analyzeBtn.addEventListener("click", handleAnalyze);
  noteBtn.addEventListener("click", handleNote);
}

function handleAnalyze() {
  const input = document.getElementById("situationInput").value.trim();
  const output = document.getElementById("perspectiveOutput");
  const spinner = document.getElementById("analyzeSpinner");
  const btn = document.getElementById("analyzeBtn");

  if (!input) {
    alert("Describe la situación primero.");
    return;
  }

  spinner.classList.remove("hidden");
  btn.disabled = true;

  setTimeout(() => {
    output.textContent =
      "Perspectiva generada automáticamente: Observa tus emociones sin reaccionar impulsivamente.";
    output.classList.remove("hidden");
    spinner.classList.add("hidden");
    btn.disabled = false;
  }, 1000);
}

function handleNote() {
  const output = document.getElementById("noteOutput");
  const spinner = document.getElementById("noteSpinner");
  const btn = document.getElementById("noteBtn");

  spinner.classList.remove("hidden");
  btn.disabled = true;

  setTimeout(() => {
    output.textContent =
      "Nota de campo: Registra patrones, emociones dominantes y decisiones tomadas.";
    output.classList.remove("hidden");
    spinner.classList.add("hidden");
    btn.disabled = false;
  }, 1000);
}
