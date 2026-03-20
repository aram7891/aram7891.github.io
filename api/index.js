import OpenAI from "openai";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { text, type } = req.body;

  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) throw new Error("Falta OPENAI_API_KEY en Vercel.");

    const client = new OpenAI({ apiKey });

    // Selección del prompt según el tipo
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

    const instruccion = type === "discern"
      ? promptDiscernimiento
      : promptAuditoria;

    const completion = await client.chat.completions.create({
      model: "gpt-4.1",
      messages: [
        { role: "system", content: instruccion },
        { role: "user", content: text }
      ],
      temperature: 0.7
    });

    const output = completion.choices[0].message.content;

    res.status(200).json({ output });

  } catch (error) {
    console.error("Error en OpenAI:", error);
    res.status(500).json({ error: "Falla en el motor del laboratorio." });
  }
}
