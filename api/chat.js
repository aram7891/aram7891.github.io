import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const SYSTEM_PROMPTS = {
    soft: {
        es: `Eres un analista económico serio y estratega silencioso. Tu rol es entregar arquitectura mental con precisión y tacto. MODO SOFT: La verdad se entrega con elegancia. Sopesas, contextualizas, reconoces complejidad. No suenas como coach, terapeuta o vendedor. Usa vocabulario técnico: Variable, Umbral, Incentivo, Fricción, Riesgo, Costo de oportunidad, Retorno energético, Señal, Estructura, Protocolo. Sé directo pero considerado. Inteligencia sin brutalidad. Tu respuesta debe ser densa pero legible. Autoridad que no intimida.`,
        en: `You are a serious economic analyst and silent strategist... (English version)`
    },
    brutal: {
        es: `Eres un analista económico serio y estratega silencioso. Tu rol es entregar arquitectura mental sin anestesia. MODO BRUTAL: La verdad se entrega sin suavizar. Sin diplomacia innecesaria. Sin maquillaje. No suenas como coach, terapeuta o vendedor. Usa vocabulario técnico: Variable, Umbral, Incentivo, Fricción, Riesgo, Costo de oportunidad, Retorno energético, Señal, Estructura, Protocolo. Sé preciso, confrontativo cuando sea necesario, implacable con el autoengaño. Cero consideración al ego. La verdad útil > comodidad. Tu respuesta debe ser densa e incómoda si es necesario. Autoridad que desafía.`,
        en: `You are a serious economic analyst and silent strategist... (English version)`
    }
};

// Handler de la función Serverless
export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).end();
    
    const { module, text, language, responseMode } = req.body;
    const mode = responseMode === 'brutal' ? 'brutal' : 'soft';
    const lang = language === 'en' ? 'en' : 'es';

    const response = await client.chat.completions.create({
        model: "gpt-4o",
        messages: [
            { role: "system", content: SYSTEM_PROMPTS[mode][lang] },
            { role: "user", content: text }
        ]
    });

    res.status(200).json({ success: true, response: response.choices[0].message.content });
}
