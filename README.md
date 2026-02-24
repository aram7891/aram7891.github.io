# aram7891.github.io

Repositorio organizado por tipo de contenido:

- `content/essays/es/`: ensayos en español (PDF).
- `content/essays/en/`: ensayos en inglés (PDF).
- `assets/images/`: imágenes usadas por el sitio.
- `assets/docs/`: archivos auxiliares (por ejemplo, paquetes zip).
- `archive/`: archivos legacy/sin uso web directo.
- `api/`: endpoints serverless.
- `index.html`: landing principal.

> Nota: los enlaces del sitio en `index.html` fueron actualizados para reflejar la nueva estructura.


## Deploy en Vercel (dominio `andresramirez.pro`)

Si en Vercel aparece **"No Deployment"** en tus dominios, normalmente significa que todavía no hay un deployment de producción activo para el proyecto.

Pasos rápidos:

1. Importa este repo en Vercel (o reconéctalo si se desconectó).
2. Haz un deployment a **Production** desde la rama principal.
3. En **Settings → Domains**:
   - deja `andresramirez.pro` como dominio principal,
   - agrega `www.andresramirez.pro` como alias (redirección al dominio principal).
4. En tu proveedor DNS, apunta:
   - `A` de `@` a `76.76.21.21`,
   - `CNAME` de `www` a `cname.vercel-dns.com`.
5. Verifica que el deployment salga en estado **Ready** y luego vuelve a Domains.

Este repositorio incluye una redirección permanente de `www` a raíz en `vercel.json`.
