import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { text, systemPrompt } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview", // El más estable para JSON
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: text }
      ],
      response_format: { type: "json_object" }, // Crucial para que no rompa la UI
    });

    res.status(200).json(JSON.parse(completion.choices[0].message.content));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Fallo en la sistematización" });
  }
}

**Estrategia técnica aplicada:**
- **Encapsulamiento:** Tu llave de OpenAI está segura en el servidor de Vercel.
- **Formato Forzado:** Usamos `response_format: { type: "json_object" }`, lo que garantiza que la IA no responda con "Aquí tienes el ensayo:", sino directamente con el JSON que espera tu código.
- **Coherencia Visual:** He mantenido la estética de *Self Love Club* con tipografía serif para los títulos y mono para los conceptos técnicos.

¿Subimos este par de archivos al repositorio ahora mismo, Andresito?
