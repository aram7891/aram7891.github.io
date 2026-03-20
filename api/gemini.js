import { GoogleGenerativeAI } from '@google/generative-ai';

// --- LOS CEREBROS ---
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

export async function obtenerAuditoria(texto, tipo) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  
  // Elegimos el cerebro según lo que pidió el usuario
  const instruccion = tipo === 'discern' ? promptDiscernimiento : promptAuditoria;

  const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash",
    systemInstruction: instruccion 
  });

  const result = await model.generateContent(texto);
  return result.response.text();
}
