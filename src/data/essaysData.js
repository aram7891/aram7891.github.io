const essaysData = [
  {
    id: 1,
    title_en: 'Self-Knowledge as an Economic Asset',
    title_es: 'El Autoconocimiento como Activo Económico',
    summary:
      'ES: “El autoconocimiento no es solo un rasgo psicológico; es una ventaja competitiva cuantificable.” | EN: “Self-knowledge is not merely a psychological trait; it is a quantifiable competitive advantage.”',
    full_text: `
[ES]
<h2>Los Costos Ocultos</h2>
<p>Las organizaciones invierten millones en tecnología mientras descuidan su sistema operativo más crítico: la psicología humana.</p>
<blockquote>“El autoconocimiento no es solo un rasgo psicológico; es una ventaja competitiva cuantificable.”</blockquote>

[EN]
<h2>The Hidden Costs</h2>
<p>Organizations frequently invest millions in technology while neglecting their most critical operating system: human psychology.</p>
<blockquote>“Self-knowledge is not merely a psychological trait; it is a quantifiable competitive advantage.”</blockquote>
    `.trim()
  },
  {
    id: 3,
    title_en: 'The Opportunity Cost of People-Pleasing',
    title_es: 'El Costo de Oportunidad de Complacer a Otros',
    summary:
      'ES: Complacer a otros erosiona silenciosamente el valor estratégico. | EN: People-pleasing quietly erodes strategic value.',
    full_text: `
[ES]
<h2>Resumen Ejecutivo: El Impuesto Invisible sobre el Valor Empresarial</h2>
<p>Complacer a otros es un riesgo operacional sistémico que genera costos ocultos que erosiona el valor para los accionistas y la calidad de las decisiones.</p>
<p>Incluye: Deterioro Decisional, Sesgo de Aprobación, Colisiones Corporativas, Verdad Estratégica vs Armonía Social, Ciclo de Deuda de Aprobación, Autoconciencia como Foso Defensivo, Innovación Sostenible, Conclusión y Referencias.</p>

[EN]
<h2>Executive Summary: The Invisible Tax on Enterprise Value</h2>
<p>People-pleasing is a systemic operational risk that generates hidden costs eroding shareholder value and decision quality.</p>
<p>Includes: Decisional Decay, Approval Bias, Corporate Collisions, Strategic Truth vs Social Harmony, Approval-Debt cycle, Self-Awareness as Defensive Moat, Sustainable Innovation, Conclusion, References.</p>
    `.trim()
  },
  {
    id: 4,
    title_en: 'The Architecture of Silence',
    title_es: 'La Arquitectura del Silencio',
    summary:
      'ES: El silencio distorsiona la percepción y amplifica el ruido. | EN: Silence distorts perception and amplifies noise.',
    full_text: `
[ES]
<h2>Resumen Ejecutivo</h2>
<p>Cuando nada se comunica, la realidad se deforma. El silencio es premiado como “reserva estratégica”.</p>
<p>Incluye: Silencio No Está Vacío, Efecto de Distorsión, Impuesto por Distorsión, Desmantelar la Arquitectura, Nombrar como Higiene Estratégica, Conclusión.</p>

[EN]
<h2>Executive Summary</h2>
<p>When nothing is communicated, reality warps. Silence is rewarded as "strategic reserve".</p>
<p>Includes: Silence Is Not Empty, The Distortion Effect, Distortion Tax, Dismantling the Architecture, Naming as Strategic Hygiene, Conclusion.</p>
    `.trim()
  },
  {
    id: 5,
    title_en: 'Cognitive Liquidity',
    title_es: 'Liquidez Cognitiva',
    summary:
      'ES: Separando la identidad de las decisiones en entornos de alto riesgo. | EN: Separating identity from decisions in high-stakes environments.',
    full_text: `
[ES]
<h2>Resumen Ejecutivo</h2>
<p>"La liquidez cognitiva no es debilidad; es la máxima expresión de la fuerza interpretativa en entornos volátiles."</p>
<p>Incluye: Fusión Identidad-Decisión, Impuesto a la Rigidez, Modelo de Flujo, Mitigación mediante Regulación, Marco de Implementación, Conclusión: Imperativo Estratégico.</p>

[EN]
<h2>Executive Summary</h2>
<p>"Cognitive liquidity is not weakness; it is the ultimate expression of interpretive strength in volatile environments."</p>
<p>Includes: Identity-Decision Fusion Problem, Quantifying the Rigidity Tax, Identity-Decision Separation Flow Model, Mitigating Identity Lock-in, Implementation Framework, Conclusion: Strategic Imperative of Mental Fluidity.</p>
    `.trim()
  },
  {
    id: 6,
    title_en: 'Signal vs Noise',
    title_es: 'Señal vs Ruido',
    summary:
      'ES: Cómo distinguir información útil de activación inútil. | EN: How to distinguish useful information from useless activation.',
    full_text: `
[ES]
<h2>Resumen Ejecutivo</h2>
<p>El problema contemporáneo no es la falta de datos, sino la incapacidad de distinguir señal de ruido.</p>
<p>Incluye: Ruido Moderno No Es Neutral, Inflación de la Urgencia, Filtro Implacable (3 Preguntas), Impuesto Oculto del Ruido, Arbitraje de Atención, Implementación Mínima, Conclusión: La Claridad Nace de lo que Ignoras.</p>

[EN]
<h2>Executive Summary</h2>
<p>The contemporary problem isn’t the lack of data. It’s the inability to tell signal from noise.</p>
<p>Includes: Modern Noise Is Not Neutral, Inflation of Urgency, The Relentless Filter (3 Questions), Hidden Tax of Noise, Attention Arbitrage, Minimal Implementation, Conclusion: Clarity Is Born from What You Ignore.</p>
    `.trim()
  },
  {
    id: 7,
    title_en: 'Disguised Progress as Defeat',
    title_es: 'El Progreso Disfrazado de Derrota',
    summary:
      'ES: Por qué hacer bien se siente como perder. | EN: Why doing well can feel like losing.',
    full_text: `
[ES]
<h2>El Progreso Disfrazado de Derrota</h2>
<p>“El progreso real rara vez se siente como victoria.”</p>
<p>Incluye: La Paradoja de Sentir que Pierdes Cuando Ganas, Conclusión: Deja de Esperar Sentirte Triunfante.</p>

[EN]
<h2>Disguised Progress as Defeat</h2>
<p>“Real progress rarely feels like victory.”</p>
<p>Includes: The Paradox of Feeling You Lose When You Win, Conclusion: Stop Waiting to Feel Triumphant.</p>
    `.trim()
  },
  {
    id: 8,
    title_en: 'Connection as a Luxury Item',
    title_es: 'La Conexión como Artículo de Lujo',
    summary:
      'ES: La economía del alivio rápido frente a la conexión profunda. | EN: The economy of instant relief vs deep connection.',
    full_text: `
[ES]
<h2>La Conexión como Artículo de Lujo</h2>
<p>No es un fallo moral colectivo, sino un hackeo de la atención y preferencias humanas...</p>
<p>Incluye: Economía del Alivio Rápido, Colapso de Espacios Intermedios, Refugio Transaccional, Medición sin Anestesia.</p>

[EN]
<h2>Connection as a Luxury Item</h2>
<p>This is not a collective moral failure, it is a hack of human attention and preference architecture...</p>
<p>Includes: Quick Relief Economy, Collapse of Intermediary Spaces, Transactional Refuge, Measuring Without Anesthesia.</p>
    `.trim()
  }
];

export default essaysData;
