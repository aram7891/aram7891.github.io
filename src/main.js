import "./styles.css";
import { initLab, setLabLanguage } from "./lab.js";

const translations = {
  es: {
    "nav-home": "Inicio",
    "nav-lab": "Laboratorio",
    "nav-books": "Libros",
    "nav-essays": "Ensayos",
    close: "Cerrar",
    "hero-kicker": "Autor",
    "hero-title": "Claridad antes que Conexión.",
    "hero-subtitle": "Porque el costo de amar sin discernir es perderte a ti mismo.",
    "hero-read": "Leer escritos",
    "hero-lab": "Laboratorio IA",
    "footer-rights": "© 2026 Andrés Ramírez. Todos los derechos reservados.",
    "footer-follow": "Sígueme en"
  },
  en: {
    "nav-home": "Home",
    "nav-lab": "Lab",
    "nav-books": "Books",
    "nav-essays": "Essays",
    close: "Close",
    "hero-kicker": "Author",
    "hero-title": "Clarity Before Connection.",
    "hero-subtitle": "Because the cost of loving without discernment is losing yourself.",
    "hero-read": "Read essays",
    "hero-lab": "AI Lab",
    "footer-rights": "© 2026 Andrés Ramírez. All rights reserved.",
    "footer-follow": "Follow me on"
  }
};

function initMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  const toggleBtn = document.getElementById("mobileMenuToggle");
  const closeBtn = document.getElementById("mobileMenuClose");
  const links = document.querySelectorAll(".mobile-menu-link");

  if (!menu || !toggleBtn || !closeBtn) return;

  const toggle = () => menu.classList.toggle("hidden");

  toggleBtn.addEventListener("click", toggle);
  closeBtn.addEventListener("click", toggle);
  links.forEach((link) => link.addEventListener("click", toggle));
}

function setLanguage(lang) {
  const t = translations[lang] || translations.es;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!t[key]) return;

    if (key === "footer-follow") {
      const links = el.querySelectorAll("a");
      el.childNodes[0].textContent = `${t[key]} `;
      if (links[0]) links[0].textContent = "Instagram";
      if (links[1]) links[1].textContent = "X";
      return;
    }

    el.textContent = t[key];
  });

  const esButtons = ["langEs", "langEsMobile", "langEsMenu"];
  const enButtons = ["langEn", "langEnMobile", "langEnMenu"];

  esButtons.forEach((id) => document.getElementById(id)?.classList.toggle("lang-switch-active", lang === "es"));
  enButtons.forEach((id) => document.getElementById(id)?.classList.toggle("lang-switch-active", lang === "en"));

  localStorage.setItem("site-lang", lang);
  setLabLanguage(lang);
}

function initLanguageToggle() {
  const langButtons = [
    ["langEs", "es"],
    ["langEsMobile", "es"],
    ["langEsMenu", "es"],
    ["langEn", "en"],
    ["langEnMobile", "en"],
    ["langEnMenu", "en"]
  ];

  langButtons.forEach(([id, lang]) => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.addEventListener("click", () => setLanguage(lang));
  });

  const initialLang = localStorage.getItem("site-lang") || "es";
  setLanguage(initialLang);
}

document.addEventListener("DOMContentLoaded", () => {
  initLab();
  initMobileMenu();
  initLanguageToggle();
});
