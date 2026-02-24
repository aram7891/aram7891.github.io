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

## Caso de tu captura: **todos** en "No Deployment" (incluye `*.vercel.app`)

Si también aparece en **No Deployment** el dominio interno de Vercel (`aram7891-github-io.vercel.app`), el problema principal **no es DNS**: simplemente no existe un deployment activo.

Haz esto en orden:

1. Ve a **Deployments** en Vercel y pulsa **Redeploy** o **Create Deployment** sobre la rama principal.
2. Espera estado **Ready** en Production.
3. Vuelve a **Domains** y pulsa **Refresh** en los 3 dominios.
4. Recién ahí valida DNS externo (`A @` y `CNAME www`).

> Sin deployment activo, ningún dominio (ni siquiera `*.vercel.app`) va a resolver correctamente.

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


## ¿Cuáles registros debes eliminar exactamente?

En tu DNS, **el estado final correcto** es solo:

- `A`  `@`  → `76.76.21.21`
- `CNAME` `www` → `cname.vercel-dns.com`

Todo lo demás que choque con eso, elimínalo. En concreto, elimina:

- Cualquier `A` adicional para `@` que **no** sea `76.76.21.21`.
- Cualquier `AAAA` para `@` (si no estás configurando IPv6 explícito con Vercel).
- Cualquier `CNAME` de `www` distinto de `cname.vercel-dns.com`.
- Cualquier `A` de `www` (si `www` será CNAME, no debe coexistir con A).
- Cualquier `URL Redirect Record`/`Forwarding` para `@` o `www` en el registrador.
- Cualquier registro viejo de GitHub Pages (`185.199.108.153/109/110/111`) o de hosting anterior.

Checklist de limpieza rápida:

1. Deja **un solo** `A @`.
2. Deja **un solo** `CNAME www`.
3. Borra `AAAA @` y `A www` si existen.
4. Borra forwards/redirects del proveedor DNS.

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


## TXT/MX: qué dejar y qué borrar (según tu lista)

Para que el sitio funcione en Vercel, los TXT **no** afectan el enrutamiento web, pero sí conviene limpiar conflictos y duplicados.

### Puedes dejar (si usas ese servicio)

- `apple-domain=...` (Apple/iCloud).
- `openai-domain-verification=...`.
- `google-site-verification=...` (uno o varios, si verificaste distintas propiedades).
- `v=spf1 include:icloud.com ~all` (**solo uno**, sin duplicados).

### Debes borrar

- `_github-pages-challenge-aram7891` (si ya no usas GitHub Pages para este dominio).
- TXT duplicado de SPF: tienes dos entradas de `v=spf1 include:icloud.com ~all`; deja solo una.
- TXT aleatorio sin proveedor claro (`4f3fc13803cb36892bad3e4151e213`) **si no sabes qué servicio lo creó**.
- TXT `4f3fc13803cb36892bad3e4151e213`: si en tu panel DNS no muestra etiqueta/proveedor asociado, elimínalo.
  - Regla práctica: bórralo, espera 10-30 min y verifica correo/web. Si nada se rompe, era residual.

### MX (correo)

Si usas iCloud Mail, deja solo:

- `mx01.mail.icloud.com`
- `mx02.mail.icloud.com`

y elimina `MX mail.andresramirez.pro` si no corresponde a un servidor real de correo administrado por ti.

### CNAME de `www`

Tu valor `5fa7e85f2a2b85c7.vercel-dns-017.com` puede ser válido si es el objetivo que Vercel te asignó.
No lo cambies si Vercel lo marca como **Valid Configuration**.



## Estado final (tu caso): configuración correcta ✅

Con los registros que compartiste, tu DNS quedó bien para Vercel:

- `A @ -> 76.76.21.21`
- `CNAME www -> 5fa7e85f2a2b85c7.vercel-dns-017.com` (objetivo Vercel válido)
- `MX mx01.mail.icloud.com` y `MX mx02.mail.icloud.com`
- TXT de verificación (Apple/OpenAI/Google) + un solo SPF

Notas:

- Tener **dos** `google-site-verification` es válido.
- El `CNAME` de `www` no tiene que ser siempre `cname.vercel-dns.com`; Vercel puede asignar uno específico del proyecto, como el tuyo.

