// /api/gemini.js
// Rate Limit básico en memoria para Serverless (se resetea en cold starts)
const ipStore = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; 
const RATE_LIMIT_MAX = 10;

function isRateLimited(ip) {
  const now = Date.now();
  const entry = ipStore.get(ip) || { count: 0, start: now };
  if (now - entry.start > RATE_LIMIT_WINDOW) {
    ipStore.set(ip, { count: 1, start: now });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX) return true;
  entry.count += 1;
  ipStore.set(ip, entry);
  return false;
}

function sanitize(text) {
  return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const ip = req.headers["x-forwarded-for"]?.split(",")[0] || "unknown";
  if (isRateLimited(ip)) return res.status(429).json({ error: "Too many requests" });

  const { prompt, systemPrompt } = req.body;
  if (!prompt) return res.status(400).json({ error: "Prompt is required" });

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${process.env.GEMINI_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          systemInstruction: { parts: [{ text: systemPrompt }] }
        })
      }
    );

    const data = await response.json();
    if (!response.ok) return res.status(response.status).json({ error: "Google API error" });

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";
    return res.status(200).json({ result: sanitize(text) });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
