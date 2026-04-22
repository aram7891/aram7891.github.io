/**
 * ANDRÉS RAMÍREZ | CLARITY STRATEGIST
 * Main JavaScript - VERSIÓN FINAL COMPLETA
 * OpenAI + Traducción + Laboratorio
 */

const translations = {
    es: {
        "nav-home": "Inicio", "nav-about": "Autor", "nav-tools": "Laboratorio", "nav-books": "Libros", "nav-archive": "Archivo",
        "hero-kicker": "Autor", "hero-title": "Claridad antes que Conexión.", "hero-subtitle": "Porque el costo de amar sin discernir es perderte a ti mismo.",
        "hero-btn-read": "Leer mis escritos", "hero-btn-more": "Más sobre mí",
        "about-kicker": "Sobre el Autor", "about-title": "Andrés Ramírez",
        "about-p1": "Escribo para personas que buscan claridad —no perfección— en sus relaciones. Mi trabajo explora cómo la presión emocional distorsiona el juicio.",
        "about-p2": "No prometo transformaciones ni soluciones rápidas. Ofrezco presencia, discernimiento y herramientas para tomar decisiones adultas bajo presión emocional.",
        "about-p3": "No me interesa ayudar a que las personas se sientan mejor temporalmente. Me interesa ayudar a que las personas se mantengan intactas.",
        "tools-label": "Laboratorio de Discernimiento", "tools-title": "Interacción con la Claridad", "tools-desc": "Laboratorio práctico de discernimiento relacional.",
        "tool1-title": "Discernimiento Relacional", "tool1-subtitle": "Perspectiva Técnica", "tool1-help": "Describe una dinámica que te genere confusión.", "tool1-example": "Ej: \"Me busca constantemente pero evade formalizar\".",
        "tool2-title": "Auditoría Emocional", "tool2-subtitle": "Patrones de Activo/Pasivo", "tool2-help": "Introduce un comportamiento o ciclo que repites.", "tool2-example": "Ej: \"Suelo ignorar banderas rojas por el potencial de la persona\".",
        "btn-analyze": "Obtener Perspectiva", "btn-generate": "Generar Nota de Campo", 
        "placeholder-discern": "Tu situación...", "placeholder-audit": "Tu patrón...", "tab-es": "Español", "tab-en": "English",
        "notes-kicker": "Archivo Privado", "notes-title": "Notas de Campo", "notes-cta": "Solicitar Acceso al Archivo", "notes-btn": "Recibir Notas Privadas",
        "books-sec-title": "Libros", "archive-title": "Archivo de Ensayos"
    },
    en: {
        "nav-home": "Home", "nav-about": "Author", "nav-tools": "Lab", "nav-books": "Books", "nav-archive": "Archive",
        "hero-kicker": "Author", "hero-title": "Clarity Before Connection.", "hero-subtitle": "Because attraction without discernment costs you yourself.",
        "hero-btn-read": "Read my essays", "hero-btn-more": "More about me",
        "about-kicker": "About the Author", "about-title": "Andrés Ramírez",
        "about-p1": "I write for people who seek clarity—not perfection—in their relationships.",
        "about-p2": "I don't promise transformation or quick fixes. I offer presence, discernment, and tools.",
        "about-p3": "I'm not interested in helping people feel better temporarily. I'm interested in helping people stay intact.",
        "tools-label": "Discernment Lab", "tools-title": "Clarity Interaction", "tools-desc": "Practical relational discernment lab.",
        "tool1-title": "Relational Discernment", "tool1-subtitle": "Technical Perspective", "tool1-help": "Describe a dynamic that confuses you.", "tool1-example": "Ex: \"He pursues me constantly but avoids commitment.\"",
        "tool2-title": "Emotional Audit", "tool2-subtitle": "Active/Passive Patterns", "tool2-help": "Introduce a behavior or cycle you repeat.", "tool2-example": "Ex: \"I tend to ignore red flags because of potential.\"",
        "btn-analyze": "Get Perspective", "btn-generate": "Generate Field Note",
        "placeholder-discern": "Your situation...", "placeholder-audit": "Your pattern...", "tab-es": "Spanish", "tab-en": "English",
        "notes-kicker": "Private Archive", "notes-title": "Field Notes", "notes-cta": "Request Archive Access", "notes-btn": "Receive Private Notes",
        "books-sec-title": "Books", "archive-title": "Essay Archive"
    }
};

let currentLang = 'es';

// ====== TRADUCCIÓN ======

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.innerText = translations[lang][key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) el.placeholder = translations[lang][key];
    });
    document.getElementById('btn-es').className = lang === 'es' ? 'lang-switch lang-active rounded-l' : 'lang-switch rounded-l';
    document.getElementById('btn-en').className = lang === 'en' ? 'lang-switch lang-active rounded-r border-l-0' : 'lang-switch rounded-r border-l-0';
    switchContentTabs(lang);
}

function switchContentTabs(tab) {
    const esGrid = document.getElementById('essays-grid-es');
    const enGrid = document.getElementById('essays-grid-en');
    if(esGrid) esGrid.classList.toggle('hidden', tab !== 'es');
    if(enGrid) enGrid.classList.toggle('hidden', tab !== 'en');
    const esTab = document.getElementById('essay-tab-es');
    const enTab = document.getElementById('essay-tab-en');
    if(esTab) esTab.className = tab === 'es' ? 'essay-tab active' : 'essay-tab';
    if(enTab) enTab.className = tab === 'en' ? 'essay-tab active' : 'essay-tab';
}

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 120, behavior: 'smooth' });
}

function closeBanner() {
    const banner = document.getElementById('announcement-banner');
    if(banner) banner.style.display = 'none';
    document.documentElement.classList.add('banner-closed');
}

// ====== LABORATORIO (OPENAI) ======

async function callLaboratory(texto, tipo) {
    try {
        console.log('📤 Enviando a OpenAI:', { texto, tipo });
        const response = await fetch('/api', { 
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify({ texto, tipo }) 
        });
        console.log('📨 Status:', response.status);
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(`HTTP ${response.status}: ${errorData.error || 'Bad Request'}`);
        }
        const data = await response.json();
        console.log('✅ Respuesta recibida');
        return data.respuesta || "Error en el Laboratorio.";
    } catch (e) {
        console.error('❌ API Error:', e);
        return `Error: ${e.message}`;
    }
}

function formatResponse(text) {
    return text.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

async function analyzeClarity() {
    const input = document.getElementById('situationInput');
    if(!input) return;
    const value = input.value.trim();
    
    if (value.length < 15) {
        alert('Por favor, describe tu situación con más detalle (mínimo 15 caracteres).');
        return;
    }
    
    const btnText = document.getElementById('analyzeBtnText');
    const spinner = document.getElementById('analyzeSpinner');
    const div = document.getElementById('clarityResult');
    
    if(spinner) spinner.classList.remove('hidden'); 
    if(btnText) btnText.innerText = "...";
    input.disabled = true;
    
    const text = await callLaboratory(value, 'discern');
    if(div) {
        div.innerHTML = formatResponse(text);
        div.classList.remove('hidden');
    }
    
    if(spinner) spinner.classList.add('hidden'); 
    if(btnText) btnText.innerText = translations[currentLang]["btn-analyze"];
    input.disabled = false;
}

async function generateFieldNote() {
    const input = document.getElementById('patternInput');
    if(!input) return;
    const value = input.value.trim();
    
    if (value.length < 15) {
        alert('Por favor, describe tu patrón con más detalle (mínimo 15 caracteres).');
        return;
    }
    
    const btnText = document.getElementById('noteBtnText');
    const spinner = document.getElementById('noteSpinner');
    const divResult = document.getElementById('noteResult');
    const content = document.getElementById('noteContent');
    
    if(spinner) spinner.classList.remove('hidden'); 
    if(btnText) btnText.innerText = "...";
    input.disabled = true;
    
    const text = await callLaboratory(value, 'audit');
    if(content) content.innerHTML = formatResponse(text);
    if(divResult) divResult.classList.remove('hidden');
    
    if(spinner) spinner.classList.add('hidden'); 
    if(btnText) btnText.innerText = translations[currentLang]["btn-generate"];
    input.disabled = false;
}

// ====== INIT ======
window.addEventListener('DOMContentLoaded', () => {
    setLanguage('es');
});
