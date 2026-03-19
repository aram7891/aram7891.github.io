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
    
    // If the element exists and is not expanded by default, set the initial height
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

      if (isCollapsed) {
        // --- EXPANSION LOGIC ---
        // Changed to Spanish for the UI
        targetBtn.textContent = 'LEER MENOS';
        
        // Calculate the actual total height of the content (invisible)
        const totalHeight = contentWrapper.scrollHeight;
        
        // Apply the exact height in pixels to trigger the CSS transition
        contentWrapper.style.maxHeight = totalHeight + 'px';
        contentWrapper.classList.add('essay-expanded');
        
        // When the animation finishes, change to 'none' to make it responsive
        contentWrapper.addEventListener('transitionend', function handler() {
          if (contentWrapper.classList.contains('essay-expanded')) {
             contentWrapper.style.maxHeight = 'none';
          }
          // Remove the listener so it doesn't accumulate
          contentWrapper.removeEventListener('transitionend', handler);
        });

      } else {
        // --- COLLAPSE LOGIC ---
        // Changed to Spanish for the UI
        targetBtn.textContent = 'LEER MÁS';
        
        // 1. Trick for closing: Set the height back to px right before closing
        const currentHeight = contentWrapper.scrollHeight;
        contentWrapper.style.maxHeight = currentHeight + 'px';
        
        // 2. We need a tiny delay for the browser to register the change to px
        // before commanding it to return to the collapsed height.
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            contentWrapper.classList.remove('essay-expanded');
            contentWrapper.style.maxHeight = COLLAPSED_HEIGHT;
          });
        });

        // Smooth scroll back to the top of the card
        essayCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ===========================
     LANGUAGE SWITCH (Bilingual)
  =========================== */
  const langSwitches = document.querySelectorAll('.lang-switch');
  const translatableElements = document.querySelectorAll('[data-lang]');

  if (langSwitches.length > 0) {
    langSwitches.forEach(btn => {
      btn.addEventListener('click', (e) => {
        // Remove the active class from all buttons
        langSwitches.forEach(b => b.classList.remove('lang-active'));
        // Add the active class to the clicked button
        e.target.classList.add('lang-active');

        // Get the selected language (e.g., 'en' or 'es')
        const selectedLang = e.target.dataset.targetLang;

        // Show or hide the corresponding elements
        translatableElements.forEach(el => {
          if (el.dataset.lang === selectedLang) {
            el.classList.add('visible-lang');
          } else {
            el.classList.remove('visible-lang');
          }
        });
      });
    });
  }

});
