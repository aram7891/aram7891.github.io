import OpenAI from "openai";

// Inicialización del SDK de OpenAI con la llave de Vercel
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Handler de la API para sistematizar ensayos de Self Love Club.
 * Recibe el texto bruto y devuelve un JSON estructurado.
 */
export default async function handler(req, res) {
  // Solo permitimos peticiones POST por seguridad
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido. Usa POST.' });
  }

  const { text, systemPrompt } = req.body;

  // Validación básica de entrada
  if (!text || !text.trim()) {
    return res.status(400).json({ error: 'El cuerpo del ensayo está vacío.' });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview", // Modelo optimizado para tareas de extracción y JSON
      messages: [
        { 
          role: "system", 
          content: systemPrompt 
        },
        { 
          role: "user", 
          content: text 
        }
      ],
      // Forzamos la respuesta en formato JSON para que el frontend pueda parsearla directamente
      response_format: { type: "json_object" },
      temperature: 0.2, // Baja temperatura para mantener la precisión técnica de la marca
    });

    const result = JSON.parse(completion.choices[0].message.content);
    
    // Retornamos el objeto procesado al frontend
    return res.status(200).json(result);

  } catch (error) {
    console.error("Error en OpenAI API:", error);
    return res.status(500).json({ 
      error: "Fallo en la sistematización del protocolo.",
      details: error.message 
    });
  }
}
