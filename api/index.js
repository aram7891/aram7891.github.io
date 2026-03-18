export default async function handler(req, res) {
  // 1. Configuración de CORS (Permitir que tu dominio lo use)
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Método no permitido" });

  const { prompt, systemPrompt } = req.body;
  
  // Usamos la variable de entorno. ASEGÚRATE que en Vercel se llame GEMINI_KEY
  const apiKey = process.env.GEMINI_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "Falta la API Key en la configuración de Vercel" });
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          systemInstruction: { parts: [{ text: systemPrompt || "Eres un asistente útil." }] }
        })
      }
    );

    const data = await response.json();

    // Si Google responde con error, te lo enviamos para saber qué pasó
    if (data.error) {
      return res.status(400).json({ error: data.error.message });
    }

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sin respuesta del modelo.";
    return res.status(200).json({ result: text });

  } catch (error) {
    return res.status(500).json({ error: "Error de conexión: " + error.message });
  }
}
