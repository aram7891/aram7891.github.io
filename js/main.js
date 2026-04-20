/**
 * ANDRÉS RAMÍREZ | CLARITY STRATEGIST
 * Main JavaScript (v3.0 - OPENAI FINAL)
 * Traducción + Laboratorio + Navegación
 */

// ====== TRADUCCIÓN ======
const translations = {
    es: {
        "nav-home": "Inicio", "nav-about": "Autor", "nav-tools": "Laboratorio", "nav-books": "Libros", "nav-archive": "Archivo",
        "hero-kicker": "Autor", "hero-title": "Claridad antes que Conexión.", "hero-subtitle": "Porque el costo de amar sin discernir es perderte a ti mismo.",
        "hero-btn-read": "Leer mis escritos", "hero-btn-more": "Más sobre mí",
        "about-kicker": "Sobre el Autor", "about-title": "Andrés Ramírez",
        "about-p1": "Escribo para personas que buscan claridad —no perfección— en sus relaciones. Mi trabajo explora cómo la presión emocional distorsiona el juicio, y cómo mantenerte alineado contigo mismo al elegir quién y qué permites entrar en tu vida.",
        "about-p2": "No prometo transformaciones ni soluciones rápidas. Ofrezco presencia, discernimiento y herramientas para tomar decisiones adultas bajo presión emocional. Este trabajo es para personas que están cansadas de repetir patrones que ya entienden—aquellos listos para asumir la responsabilidad personal, la madurez emocional y el coraje silencioso requerido para elegir conexiones alineadas con sus valores, no con sus miedos o fantasías.",
        "about-p3": "No me interesa ayudar a que las personas se sientan mejor temporalmente o a replantear todo como crecimiento. Me interesa ayudar a que las personas se mantengan intactas cuando el deseo, la esperanza o la soledad generan presión para comprometer su claridad. Estos libros no tratan sobre cómo ser más digno de amor, más sanado o más atractivo. Tratan sobre aprender a no abandonarte a ti mismo mientras buscas conexión.",
        "tools-label": "Laboratorio de Discernimiento", "tools-title": "Interacción con la Claridad", "tools-desc": "Laboratorio práctico de discernimiento relacional. Convertimos confusión emocional en datos accionables mediante auditorías técnicas.",
        "tool1-title": "Discernimiento Relacional", "tool1-subtitle": "Perspectiva Técnica", "tool1-help": "Describe una dinámica que te genere confusión.", "tool1-example": "Ej: \"Me busca constantemente pero evade formalizar\".",
        "tool2-title": "Auditoría Emocional", "tool2-subtitle": "Patrones de Activo/Pasivo", "tool2-help": "Introduce un comportamiento o ciclo que repites.", "tool2-example": "Ej: \"Suelo ignorar banderas rojas por el potencial de la persona\".",
        "btn-analyze": "Obtener Perspectiva", "btn-generate": "Generar Nota de Campo", "archive-label": "Hemeroteca", "archive-title": "Archivo de Ensayos",
        "placeholder-discern": "Tu situación...", "placeholder-audit": "Tu patrón...", "tab-es": "Español", "tab-en": "English", "record-label": "Registro de Auditoría", 
        "notes-kicker": "Archivo Privado", "notes-title": "Notas de Campo", "notes-p1": "Una vez al mes envío una nota técnica a quienes desean profundizar en el marco de \"Claridad antes que Conexión\".", "notes-cta": "Solicitar Acceso al Archivo", "notes-btn": "Recibir Notas Privadas",
        "slc-p1": "Soy el creador de Self Love Club—una plataforma dedicada a la claridad, el autorrespeto y la toma de decisiones consciente en las relaciones. Self Love Club no se trata de afirmaciones o atajos de autoestima. Es un ecosistema curado de ideas, herramientas y trabajo escrito diseñado para ayudar a las personas a mantenerse arraigadas en su identidad mientras navegan la atracción, el apego y la elección.",
        "slc-p2": "Todo dentro del club está construido en torno al autoconocimiento aplicado—cómo la claridad se convierte en algo que practicas, no solo que entiendes. No se trata de sentirse bien en el momento; se trata de desarrollar la capacidad de tomar decisiones que honran quién eres, incluso cuando las emociones están a flor de piel y la presión externa aumenta.",
        "slc-p3": "La plataforma sirve como un recurso integral para aquellos comprometidos a mantener su integridad mientras buscan una conexión significativa. Es para personas que entienden que el amor propio no se trata de aislamiento o perfección, sino de mantenerse conectado a uno mismo mientras se permanece abierto a los demás.",
        "slc-btn": "Explorar el Ecosistema",
        "banner-text": "HAZ DE LA LECTURA TU HERRAMIENTA DE CRECIMIENTO PERSONAL",
        "banner-link": "EXPLORAR LIBROS",
        "books-sec-title": "Libros"
    },
    en: {
        "nav-home": "Home", "nav-about": "Author", "nav-tools": "Lab", "nav-books": "Books", "nav-archive": "Archive",
        "hero-kicker": "Author", "hero-title": "Clarity Before Connection.", "hero-subtitle": "Because attraction without discernment costs you yourself.",
        "hero-btn-read": "Read my essays", "hero-btn-more": "More about me",
        "about-kicker": "About the Author", "about-title": "Andrés Ramírez",
        "about-p1": "I write for people who seek clarity—not perfection—in their relationships. My work explores how emotional pressure distorts judgment, and how to stay aligned with yourself while choosing who and what you allow into your life.",
        "about-p2": "I don't promise transformation or quick fixes. I offer presence, discernment, and tools for making adult decisions under emotional pressure. This work is for people who are tired of repeating patterns they already understand—those ready to embrace personal responsibility, emotional maturity, and the quiet courage required to choose connections aligned with their values, not their fears or fantasies.",
        "about-p3": "I'm not interested in helping people feel better temporarily or reframe everything as growth. I'm interested in helping people stay intact when desire, hope, or loneliness create pressure to compromise clarity. These books are not about becoming more lovable, more healed, or more attractive. They are about learning how not to abandon yourself while seeking connection.",
        "tools-label": "Discernment Lab", "tools-title": "Clarity Interaction", "tools-desc": "Practical relational discernment lab. We turn emotional confusion into actionable data through technical audits.",
        "tool1-title": "Relational Discernment", "tool1-subtitle": "Technical Perspective", "tool1-help": "Describe a dynamic that confuses you.", "tool1-example": "Ex: \"He pursues me constantly but avoids commitment.\"",
        "tool2-title": "Emotional Audit", "tool2-subtitle": "Active/Passive Patterns", "tool2-help": "Introduce a behavior or cycle you repeat.", "tool2-example": "Ex: \"I tend to ignore red flags because of potential.\"",
        "btn-analyze": "Get Perspective", "btn-generate": "Generate Field Note", "archive-label": "Archive", "archive-title": "Essay Archive",
        "placeholder-discern": "Your situation...", "placeholder-audit": "Your pattern...", "tab-es": "Spanish", "tab-en": "English", "record-label": "Audit Record",
        "notes-kicker": "Private Archive", "notes-title": "Field Notes", "notes-p1": "Once a month I send a technical note to those who want to deepen their understanding of the 'Clarity Before Connection' framework.", "notes-cta": "Request Archive Access", "notes-btn": "Receive Private Notes",
        "slc-p1": "I created Self Love Club—a platform dedicated to clarity, self-respect, and conscious decision-making in relationships. It's not about affirmations or self-esteem shortcuts. It's a curated ecosystem of ideas, tools, and writing designed to help people stay rooted in their identity while navigating attraction, attachment, and choice.",
        "slc-p2": "Everything within the club is built around applied self-knowledge—how clarity becomes something you practice, not just understand. It's not about feeling good in the moment; it's about developing the capacity to make decisions that honor who you are, even when emotions run high and external pressure increases.",
        "slc-p3": "The platform serves as a comprehensive resource for those committed to maintaining their integrity while seeking meaningful connection. It's for people who understand that self-love isn't about isolation or perfection, but about staying connected to yourself while remaining open to others.",
        "slc-btn": "Explore Ecosystem",
        "banner-text": "TURN READING INTO YOUR PERSONAL GROWTH TOOL",
        "banner-link": "EXPLORE BOOKS",
        "books-sec-title": "Books"
    }
};

let currentLang = 'es';

// ====== FUNCIONES PRINCIPALES ======

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
    document.getElementById('essays-grid-es').classList.toggle('hidden', tab !== 'es');
    document.getElementById('essays-grid-en').classList.toggle('hidden', tab !== 'en');
    document.getElementById('essay-tab-es').className = tab === 'es' ? 'essay-tab active' : 'essay-tab';
    document.getElementById('essay-tab-en').className = tab === 'en' ? 'essay-tab active' : 'essay-tab';
}

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 120, behavior: 'smooth' });
}

function toggleMobileMenu() {
    // Mobile menu implementation if needed
}

function closeBanner() {
    document.getElementById('announcement-banner').style.display = 'none';
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
        
        console.log('📨 Respuesta status:', response.status);
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('❌ Error del servidor:', errorData);
            throw new Error(`HTTP ${response.status}: ${errorData.error || 'Bad Request'}`);
        }
        
        const data = await response.json();
        console.log('✅ Data recibida de OpenAI:', data);
        
        return data.respuesta || "Error en el Laboratorio.";
    } catch (e) {
        console.error('❌ API Error:', e);
        return `Error de conexión: ${e.message}`;
    }
}

function formatResponse(text) {
    return text.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

async function analyzeClarity() {
    const input = document.getElementById('situationInput');
    const value = input.value.trim();
    
    if (value.length < 15) {
        alert('Por favor, describe tu situación con más detalle (mínimo 15 caracteres).');
        return;
    }
    
    const btnText = document.getElementById('analyzeBtnText');
    const spinner = document.getElementById('analyzeSpinner');
    const div = document.getElementById('clarityResult');
    
    spinner.classList.remove('hidden'); 
    btnText.innerText = "...";
    input.disabled = true;
    
    const text = await callLaboratory(value, 'discern');
    div.innerHTML = formatResponse(text);
    div.classList.remove('hidden');
    
    spinner.classList.add('hidden'); 
    btnText.innerText = translations[currentLang]["btn-analyze"];
    input.disabled = false;
}

async function generateFieldNote() {
    const input = document.getElementById('patternInput');
    const value = input.value.trim();
    
    if (value.length < 15) {
        alert('Por favor, describe tu patrón con más detalle (mínimo 15 caracteres).');
        return;
    }
    
    const btnText = document.getElementById('noteBtnText');
    const spinner = document.getElementById('noteSpinner');
    const divResult = document.getElementById('noteResult');
    const content = document.getElementById('noteContent');
    
    spinner.classList.remove('hidden'); 
    btnText.innerText = "...";
    input.disabled = true;
    
    const text = await callLaboratory(value, 'audit');
    content.innerHTML = formatResponse(text);
    divResult.classList.remove('hidden');
    
    spinner.classList.add('hidden'); 
    btnText.innerText = translations[currentLang]["btn-generate"];
    input.disabled = false;
}

// ====== INIT ======
window.addEventListener('DOMContentLoaded', () => {
    setLanguage('es');
});
