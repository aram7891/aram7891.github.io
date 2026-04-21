/**
 * ANDRÉS RAMÍREZ | CLARITY STRATEGIST
 * Main JavaScript (v4.0 - RESTAURACIÓN TOTAL)
 */

const translations = {
    es: {
        "nav-home": "Inicio", "nav-about": "Autor", "nav-tools": "Laboratorio", "nav-books": "Libros", "nav-archive": "Archivo",
        "hero-kicker": "Autor", "hero-title": "Claridad antes que Conexión.", "hero-subtitle": "Porque el costo de amar sin discernir es perderte a ti mismo.",
        "hero-btn-read": "Leer mis escritos", "hero-btn-more": "Más sobre mí",
        "about-kicker": "Sobre el Autor", "about-title": "Andrés Ramírez",
        "about-p1": "Escribo para personas que buscan claridad —no perfección— en sus relaciones. Mi trabajo explora cómo la presión emocional distorsiona el juicio, y cómo mantenerte alineado contigo mismo al elegir quién y qué permites entrar en tu vida.",
        "about-p2": "No prometo transformaciones ni soluciones rápidas. Ofrezco presencia, discernimiento y herramientas para tomar decisiones adultas bajo presión emocional.",
        "about-p3": "No me interesa ayudar a que las personas se sientan mejor temporalmente. Me interesa ayudar a que las personas se mantengan intactas cuando el deseo, la esperanza o la soledad generan presión.",
        "tools-label": "Laboratorio de Discernimiento", "tools-title": "Interacción con la Claridad", "tools-desc": "Laboratorio práctico de discernimiento relacional. Convertimos confusión emocional en datos accionables.",
        "tool1-title": "Discernimiento Relacional", "tool1-subtitle": "Perspectiva Técnica", "tool1-help": "Describe una dinámica que te genere confusión.", "tool1-example": "Ej: \"Me busca constantemente pero evade formalizar\".",
        "tool2-title": "Auditoría Emocional", "tool2-subtitle": "Patrones de Activo/Pasivo", "tool2-help": "Introduce un comportamiento o ciclo que repites.", "tool2-example": "Ej: \"Suelo ignorar banderas rojas por el potencial de la persona\".",
        "btn-analyze": "Obtener Perspectiva", "btn-generate": "Generar Nota de Campo", 
        "placeholder-discern": "Tu situación...", "placeholder-audit": "Tu patrón...", "tab-es": "Español", "tab-en": "English",
        "notes-kicker": "Archivo Privado", "notes-title": "Notas de Campo", "notes-p1": "Una vez al mes envío una nota técnica a quienes desean profundizar en el marco de 'Claridad antes que Conexión'.", "notes-cta": "Solicitar Acceso al Archivo", "notes-btn": "Recibir Notas Privadas",
        "slc-p1": "Soy el creador de Self Love Club—una plataforma dedicada a la claridad, el autorrespeto y la toma de decisiones consciente.",
        "slc-p2": "Todo dentro del club está construido en torno al autoconocimiento aplicado—cómo la claridad se convierte en algo que practicas, no solo que entiendes.",
        "slc-p3": "La plataforma sirve como un recurso integral para aquellos comprometidos a mantener su integridad.",
        "slc-btn": "Explorar el Ecosistema",
        "books-sec-title": "Libros", "archive-title": "Archivo de Ensayos"
    },
    en: {
        "nav-home": "Home", "nav-about": "Author", "nav-tools": "Lab", "nav-books": "Books", "nav-archive": "Archive",
        "hero-kicker": "Author", "hero-title": "Clarity Before Connection.", "hero-subtitle": "Because attraction without discernment costs you yourself.",
        "hero-btn-read": "Read my essays", "hero-btn-more": "More about me",
        "about-kicker": "About the Author", "about-title": "Andrés Ramírez",
        "about-p1": "I write for people who seek clarity—not perfection—in their relationships.",
        "about-p2": "I don't promise transformation or quick fixes. I offer presence, discernment, and tools for making adult decisions.",
        "about-p3": "I'm not interested in helping people feel better temporarily. I'm interested in helping people stay intact.",
        "tools-label": "Discernment Lab", "tools-title": "Clarity Interaction", "tools-desc": "Practical relational discernment lab. We turn emotional confusion into actionable data.",
        "tool1-title": "Relational Discernment", "tool1-subtitle": "Technical Perspective", "tool1-help": "Describe a dynamic that confuses you.", "tool1-example": "Ex: \"He pursues me constantly but avoids commitment.\"",
        "tool2-title": "Emotional Audit", "tool2-subtitle": "Active/Passive Patterns", "tool2-help": "Introduce a behavior or cycle you repeat.", "tool2-example": "Ex: \"I tend to ignore red flags because of potential.\"",
        "btn-analyze": "Get Perspective", "btn-generate": "Generate Field Note",
        "placeholder-discern": "Your situation...", "placeholder-audit": "Your pattern...", "tab-es": "Spanish", "tab-en": "English",
        "notes-kicker": "Private Archive", "notes-title": "Field Notes", "notes-p1": "Once a month I send a technical note to those who want to deepen their understanding.", "notes-cta": "Request Archive Access", "notes-btn": "Receive Private Notes",
        "slc-p1": "I created Self Love Club—a platform dedicated to clarity, self-respect, and conscious decision-making.",
        "slc-p2": "Everything within the club is built around applied self-knowledge.",
        "slc-p3": "The platform serves as a comprehensive resource for those committed to maintaining their integrity.",
        "slc-btn": "Explore Ecosystem",
        "books-sec-title": "Books", "archive-title": "Essay Archive"
    }
};

let currentLang = 'es';

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
    
    // Actualizar visual de botones de idioma
    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');
    if(btnEs && btnEn) {
        btnEs.className = lang === 'es' ? 'lang-switch lang-active rounded-l' : 'lang-switch rounded-l';
        btnEn.className = lang === 'en' ? 'lang-switch lang-active rounded-r border-l-0' : 'lang-switch rounded-r border-l-0';
    }
}

// Inicialización
window.addEventListener('DOMContentLoaded', () => {
    setLanguage('es');
});

// ... (Aquí van tus funciones de callLaboratory, analyzeClarity y generateFieldNote que ya tenías)
