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

Si en Vercel aparece **"No Deployment"**, el dominio está agregado pero no existe un deployment de producción activo asignado.

### 1) Vercel (obligatorio)

1. Importa o reconecta este repo en Vercel.
2. Ejecuta un deploy de **Production** (rama principal).
3. En **Project → Settings → Domains**:
   - `andresramirez.pro` debe quedar como **Primary**,
   - `www.andresramirez.pro` debe quedar redirigido al dominio primario.

### 2) DNS correcto (registrador)

Configura exactamente estos registros:

- `A` para `@` → `76.76.21.21`
- `CNAME` para `www` → `cname.vercel-dns.com`

> Si usas Cloudflare, deja el proxy en **DNS only** (nube gris) mientras validas en Vercel.

### 3) Qué no debe existir

- No dejes un `A` o `AAAA` adicional para `@` apuntando a otro proveedor.
- No dejes `www` apuntando a GitHub Pages o a otro `CNAME` distinto.
- No mezcles redirects en DNS; el redirect de `www` se gestiona en Vercel.

### 4) Verificación rápida

- En Vercel, ambos dominios deben aparecer **Valid Configuration**.
- `https://andresramirez.pro` debe responder `200`.
- `https://www.andresramirez.pro` debe redirigir a raíz.

Este repositorio incluye una redirección canónica por host en `vercel.json` para forzar `www` → raíz.

