# andresramirez.pro — Código fuente

Repositorio organizado por tipo de contenido y módulos del sitio.

## Estructura del proyecto

- `content/essays/es/` — Ensayos en español (PDF).
- `content/essays/en/` — Ensayos en inglés (PDF).
- `assets/images/` — Imágenes usadas por el sitio.
- `assets/docs/` — Archivos auxiliares (por ejemplo, paquetes ZIP).
- `api/` — Endpoints serverless (motor de análisis con OpenAI).
- `sections/` — Fragmentos HTML modulares usados en la construcción del sitio.
- `styles/` — Hojas de estilo.
- `index.html` — Landing principal.
- `vercel.json` — Configuración de despliegue en Vercel.

## Notas

- El sitio está desplegado en **Vercel**.
- El motor activo del laboratorio es **OpenAI** (`/api/index.js`).
- No se utiliza GitHub Pages para el hosting del sitio.
