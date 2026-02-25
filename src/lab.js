let currentLang = "es";

const messages = {
  es: {
    empty: "Describe la situación primero.",
    perspective:
      "Perspectiva generada automáticamente: Observa tus emociones sin reaccionar impulsivamente.",
    note:
      "Nota de campo: Registra patrones, emociones dominantes y decisiones tomadas."
  },
  en: {
    empty: "Describe the situation first.",
    perspective:
      "Auto-generated perspective: Observe your emotions before reacting impulsively.",
    note:
      "Field note: Record patterns, dominant emotions, and decisions made."
  }
};

export function setLabLanguage(lang) {
  currentLang = messages[lang] ? lang : "es";
}

export function initLab() {
  const analyzeBtn = document.getElementById("analyzeBtn");
  const noteBtn = document.getElementById("noteBtn");

  if (!analyzeBtn || !noteBtn) return;

  analyzeBtn.addEventListener("click", handleAnalyze);
  noteBtn.addEventListener("click", handleNote);
}

function handleAnalyze() {
  const input = document.getElementById("situationInput")?.value.trim();
  const output = document.getElementById("perspectiveOutput");
  const spinner = document.getElementById("analyzeSpinner");
  const btn = document.getElementById("analyzeBtn");

  if (!output || !spinner || !btn) return;

  if (!input) {
    alert(messages[currentLang].empty);
    return;
  }

  spinner.classList.remove("hidden");
  btn.disabled = true;

  setTimeout(() => {
    output.textContent = messages[currentLang].perspective;
    output.classList.remove("hidden");
    spinner.classList.add("hidden");
    btn.disabled = false;
  }, 1000);
}

function handleNote() {
  const output = document.getElementById("noteOutput");
  const spinner = document.getElementById("noteSpinner");
  const btn = document.getElementById("noteBtn");

  if (!output || !spinner || !btn) return;

  spinner.classList.remove("hidden");
  btn.disabled = true;

  setTimeout(() => {
    output.textContent = messages[currentLang].note;
    output.classList.remove("hidden");
    spinner.classList.add("hidden");
    btn.disabled = false;
  }, 1000);
}
