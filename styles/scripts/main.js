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

document.addEventListener('DOMContentLoaded', () => {

  // Configuration: Must match the max-height of your CSS .essay-collapsed
  const COLLAPSED_HEIGHT = '500px';

  /* ===========================
     EXPAND / COLLAPSE ESSAYS (WITH DYNAMIC ANIMATION)
  =========================== */
  const readButtons = document.querySelectorAll('.read-btn');

  readButtons.forEach(btn => {
    // Initialization: Ensure collapsed containers have their inline height set
    const card = btn.closest('.essay-card');
    const content = card.querySelector('.prose-content');
    
    if (content && !content.classList.contains('essay-expanded')) {
      content.style.maxHeight = COLLAPSED_HEIGHT;
    }

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetBtn = e.target;
      const essayCard = targetBtn.closest('.essay-card');
      const contentWrapper = essayCard.querySelector('.prose-content');

      if (!contentWrapper) return;

      const isCollapsed = !contentWrapper.classList.contains('essay-expanded');
      
      // Inteligencia para saber si el botón está en el grid de inglés o español
      const isEnglishGrid = essayCard.closest('#essays-grid-en') !== null;
      const textLess = isEnglishGrid ? 'READ LESS' : 'LEER MENOS';
      const textMore = isEnglishGrid ? 'READ MORE' : 'LEER MÁS';

      if (isCollapsed) {
        // --- EXPANSION LOGIC ---
        targetBtn.textContent = textLess;
        
        const totalHeight = contentWrapper.scrollHeight;
        contentWrapper.style.maxHeight = totalHeight + 'px';
        contentWrapper.classList.add('essay-expanded');
        
        contentWrapper.addEventListener('transitionend', function handler() {
          if (contentWrapper.classList.contains('essay-expanded')) {
             contentWrapper.style.maxHeight = 'none';
          }
          contentWrapper.removeEventListener('transitionend', handler);
        });

      } else {
        // --- COLLAPSE LOGIC ---
        targetBtn.textContent = textMore;
        
        const currentHeight = contentWrapper.scrollHeight;
        contentWrapper.style.maxHeight = currentHeight + 'px';
        
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            contentWrapper.classList.remove('essay-expanded');
            contentWrapper.style.maxHeight = COLLAPSED_HEIGHT;
          });
        });

        essayCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
