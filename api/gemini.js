import { GoogleGenerativeAI } from "@google/generative-ai";

// --- 1. LOS CEREBROS (Tus instrucciones maestras) ---
const promptDiscernimiento = `
Eres un Auditor Técnico Relacional. Tu misión es desglosar la situación del usuario separando la 'Narrativa' de los 'Hechos'. No valides emociones, identifica inconsistencias lógicas entre lo que se dice y lo que se hace.

Estructura de respuesta en español:
1. **Hechos Auditados:** (Lista de acciones verificables).
2. **Brechas de Lógica:** (Donde las palabras no coinciden con los actos).
3. **Nivel de Ruido:** (Qué parte de la confusión es subjetiva).
4. **Hipótesis Técnica:** (Conclusión fría basada en datos).
`;

const promptAuditoria = `
Eres un Analista de Patrones de Ejecución Humana. Tu marco de análisis es exclusivamente: Decisión vs. Tolerancia.
- Decisión: Acciones conscientes que el usuario toma.
- Tolerancia: Comportamientos o situaciones que el usuario permite por omisión.

Estructura de respuesta en español:
1. **Ciclo de Decisión:** (Lo que estás eligiendo hacer activamente).
2. **Umbral de Tolerancia:** (Lo que estás permitiendo que suceda sin poner límites).
3. **Costo de la Omisión:** (Qué pierdes al no actuar).
4. **Punto de Intervención:** (La acción concreta para cerrar el ciclo de tolerancia).
`;

// --- 2. MOTOR ACTUALIZADO (API nueva, estable y sin errores falsos) ---
export async function obtenerAuditoria(texto, tipo) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error("API_KEY_MISSING: Revisa las variables de Vercel.");

    // Inicialización correcta con la API nueva
    const genAI = new GoogleGenerativeAI(apiKey);

    const instruccion = tipo === "discern"
      ? promptDiscernimiento
      : promptAuditoria;

    // Modelo actualizado con configuración explícita
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: {
        temperature: 0.7,
      },
    });

    // Chat actualizado (API nueva)
    const chat = model.startChat({
      history: [
        { role: "user", parts: [{ text: instruccion }] },
        { role: "model", parts: [{ text: "Entendido. Soy tu Auditor de Claridad. Envíame el caso." }] },
      ],
    });

    // Enviar el texto del usuario
    const result = await chat.sendMessage(texto);
    const response = await result.response;

    return response.text();

  } catch (error) {
    console.error("--- ERROR EN GEMINI.JS ---");
    console.error("Mensaje:", error.message);
    throw error;
  }
}
