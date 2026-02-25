export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: 'API Key no configurada en el servidor.' });
    }

    try {
        const { prompt, systemPrompt } = req.body || {};

        if (!prompt || typeof prompt !== 'string') {
            return res.status(400).json({ error: 'El campo "prompt" es obligatorio.' });
        }

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                ...(systemPrompt ? { systemInstruction: { parts: [{ text: systemPrompt }] } } : {})
            })
        });

        const data = await response.json();
        if (!response.ok) {
            return res.status(response.status).json({
                error: data?.error?.message || 'Error al llamar a Gemini.'
            });
        }

        const result = data?.candidates?.[0]?.content?.parts
            ?.map((part) => part?.text || '')
            .join('')
            .trim();

        if (!result) {
            return res.status(502).json({ error: 'Gemini no devolvió texto utilizable.' });
        }

        return res.status(200).json({ result });

    } catch (error) {
        console.error("Error conectando con Gemini:", error);
        res.status(500).json({ error: 'Error procesando la solicitud con la IA.' });
    }
}
