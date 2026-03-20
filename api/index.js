import { obtenerAuditoria } from './gemini.js';

export default async function handler(req, res) {
  // Solo aceptamos peticiones POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { text, type } = req.body;

  try {
    // Llamamos al motor en gemini.js
    const resultado = await obtenerAuditoria(text, type);
    
    // Devolvemos la respuesta a la web
    res.status(200).json({ output: resultado });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Falla en la matriz del laboratorio." });
  }
}
