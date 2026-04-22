import OpenAI from "openai";
import {
  promptDiscernimiento,
  promptAuditoria
} from "./prompts.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Método no permitido"
    });
  }

  try {
    const { texto, tipo } = req.body;

    if (!texto || !tipo) {
      return res.status(400).json({
        error: "Faltan parámetros"
      });
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const systemPrompt =
      tipo === "discern"
        ? promptDiscernimiento
        : tipo === "audit"
        ? promptAuditoria
        : null;

    if (!systemPrompt) {
      return res.status(400).json({
        error: "Tipo inválido"
      });
    }

    const completion =
      await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: texto }
        ],
        temperature: 0.2,
        max_tokens: 600
      });

    return res.status(200).json({
      respuesta:
        completion.choices[0].message.content
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Error interno del servidor"
    });
  }
}