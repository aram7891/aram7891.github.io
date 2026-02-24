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

## Dominio caído: `andresramirez.pro` (checklist real)

Si el dominio no abre, en la práctica casi siempre es uno de estos 3 problemas:

1. No hay deployment de **Production** activo en Vercel.
2. DNS del apex (`@`) apunta a otro proveedor.
3. `www` apunta fuera de Vercel o Cloudflare está proxyeando durante validación.

## Configuración correcta

### En Vercel

- Proyecto conectado a este repo.
- Último deployment en estado **Ready** (Production).
- En **Settings → Domains**:
  - `andresramirez.pro` como **Primary**.
  - `www.andresramirez.pro` como alias con redirect al primario.

### En tu registrador DNS

- `A` para `@` → `76.76.21.21`
- `CNAME` para `www` → `cname.vercel-dns.com`

### Si usas Cloudflare

- Durante verificación en Vercel, pon `@` y `www` en **DNS only** (nube gris).
- Cuando Vercel marque **Valid Configuration**, ya puedes decidir si reactivar proxy.

## Registros que debes eliminar (muy importante)

- Cualquier `A`/`AAAA` viejo para `@` (por ejemplo, GitHub Pages, hosting anterior, etc.).
- Cualquier `CNAME` de `www` distinto a `cname.vercel-dns.com`.
- Cualquier redirect en el DNS provider (el redirect canónico se maneja en Vercel).

## Verificación rápida desde terminal

```bash
# Apex
nslookup andresramirez.pro

# WWW
nslookup www.andresramirez.pro

# Respuesta HTTP esperada (200 o 3xx válido)
curl -I https://andresramirez.pro
curl -I https://www.andresramirez.pro
```

Esperado:

- `andresramirez.pro` resolviendo a Vercel (o IP/edge equivalente de Vercel).
- `www.andresramirez.pro` resolviendo por CNAME a `cname.vercel-dns.com`.
- `www` redirigiendo a `https://andresramirez.pro`.

## Nota de este repo

- `vercel.json` fuerza redirect de host `www.andresramirez.pro` → `andresramirez.pro`.
- Se eliminó `CNAME` para evitar confusión con flujo de GitHub Pages.
