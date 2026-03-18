function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function closeBanner() {
  const banner = document.getElementById("announcement-banner");
  document.documentElement.classList.add("banner-closed");
  banner.style.opacity = "0";
  setTimeout(() => banner.style.display = "none", 400);
}

function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  if (menu) menu.classList.toggle("hidden");
}

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) el.placeholder = translations[lang][key];
  });

  document.getElementById("btn-es").classList.toggle("lang-active", lang === "es");
  document.getElementById("btn-en").classList.toggle("lang-active", lang === "en");
}

function switchContentTabs(lang) {
  document.getElementById("essay-tab-es").classList.toggle("active", lang === "es");
  document.getElementById("essay-tab-en").classList.toggle("active", lang === "en");

  document.getElementById("essays-grid-es").classList.toggle("hidden", lang !== "es");
  document.getElementById("essays-grid-en").classList.toggle("hidden", lang !== "en");
}
