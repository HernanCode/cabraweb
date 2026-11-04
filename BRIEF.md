# BRIEF — Nueva web CABRA
### Rediseño "menos texto, pantallas completas"

---

## 1. Objetivo

Rehacer la web de CABRA (estudio de diseño de Navàs i Barcelona) para que sea
**visual, contundente y con muy poco texto**. Cada idea ocupa **una pantalla
completa** (100% del alto del viewport, `100vh` / `100svh` en móvil). El
trabajo (los proyectos) es el protagonista absoluto; la tipografía gigante de la
marca hace de titular; el texto se reduce a una frase por proyecto, como mucho.

La sensación buscada: **revista de moda + showreel**. Se mira, no se lee.

---

## 2. Referencias — qué tomamos de cada una

| Referencia | Qué nos llevamos |
|---|---|
| **Firma** (la favorita) | Secciones a pantalla completa, titular de display gigante, un proyecto = una pantalla con imagen a sangre y **una sola frase**, texto que se revela línea a línea al hacer scroll, vídeo en loop al pasar el ratón, una sección en negro a sangre. |
| **Sopagraphics** | Limpieza suiza, rejilla clara, muy poco texto, obra por delante de todo. |
| **Erretres** | Sobriedad, neutralidad, etiquetas discretas y ritmo editorial (de esta cogemos la calma, NO la densidad de contenido). |

> **Nota clave:** en Firma el titular es serif; aquí **mantenemos PP Neue Montreal**
> (la tipografía de la marca CABRA, sans grotesca, en mayúsculas con tracking
> cerrado). Eso nos da la fuerza de Firma pero con la identidad de CABRA.

---

## 3. Principios (reglas de oro)

1. **Una pantalla, una idea.** Cada sección ocupa el 100% del viewport. Nunca dos
   mensajes compitiendo en la misma pantalla.
2. **El proyecto manda, la palabra acompaña.** Cada proyecto = imagen gigante +
   nombre + **una frase**. Nada de fichas, años, ni tres líneas de metadatos.
3. **Nada de autobombo con cifras.** Fuera "120+ projectes", "21 anys", etc.
4. **Monocromo.** El color lo ponen las fotos, no la interfaz.
5. **Tipografía como imagen.** Los titulares se tratan como elementos visuales:
   enormes, en mayúsculas, apretados.
6. **Movimiento sutil.** Revelados, parallax y vídeo en hover; nunca ruido.

---

## 4. Sistema visual

### 4.1 Tipografía — PP Neue Montreal

Una sola familia (la de la marca). Escala:

| Rol | Peso | Tamaño (desktop) | Tracking | Mayúsculas |
|---|---|---|---|---|
| **Display hero** (declaración principal) | Medium 500 / Bold 700 | `clamp(72px → ~180px)` | −0.03em | Sí |
| **Display de proyecto / sección** (nombres de cliente, títulos) | Medium 500 | `clamp(64px → ~150px)` | −0.025em | Sí |
| **Frase por proyecto** | Book 400 | `clamp(18px → ~28px)` | normal | No |
| **Micro-etiqueta** (sector, ubicación, "des del 2005") | Book 400 | 11–12px | +0.08em | Sí |

- `line-height: 0.9–0.94` en los display (muy apretado).
- Las palabras clave dentro de un titular pueden ir en **Bold 700** sobre fondo
  Book 400 para dar ritmo (como ya hace la web actual con `<em>`).

### 4.2 Color — paleta monocroma (sin cambios respecto a la marca)

- Fondo: `#F0F0F0` · Superficie: `#E7E7E7` · Tinta: `#1A1919` · Texto: `#2A2A2A`
- Grises secundarios: `#4A4A4A`, `#D9D9D9`.
- **Una sección a sangre en negro** (`#1A1919`) para romper el ritmo (como Firma):
  texto en `#F0F0F0`.
- **Ningún color de acento.** El color entra solo por las fotografías de los proyectos.

### 4.3 Imagen y vídeo

- **Full-bleed**: las imágenes ocupan la pantalla completa, sin marcos ni tarjetas.
- Se reutilizan las fotos de `webplantilla/assets` (PEPITU, Cafès Serra, Sikkema,
  Althaia, Parc Sanitari, Clínica Dental, Dduueett, PdePagès) en WebP.
- **Althaia** lleva el vídeo (`althaia.mp4`) en loop, como Firma.
- Tratamiento: sin duotono ni overlay pesado; como mucho un "wash" muy ligero para
  que el texto respire. `object-fit: cover` para llenar sin bandas.

### 4.4 Rejilla y medidas

- Contenedor máximo ancho (~1760px, como ahora) para permitir titulares gigantes.
- Márgenes laterales generosos (`clamp(20px → 56px)`).
- Todo a **100vh** por sección; los paneles de proyecto son **100vh cada uno**.
- Sin radios de tarjeta ni sombras: superficies planas, como los referentes.

### 4.5 Movimiento e interacción

- **Revelado línea a línea** del texto grande al hacer scroll (máscara de texto, estilo Firma).
- **Imagen que escala sutilmente** al entrar en viewport (parallax suave).
- **Vídeo que se reproduce en loop** en hover / al entrar en pantalla (Althaia).
- Cursor personalizado (punto + anillo con `mix-blend-mode: difference`), que crece
  sobre enlaces — se mantiene de la web actual.
- Transiciones suaves entre pantallas; respetar `prefers-reduced-motion`.

---

## 5. Estructura — índice de pantallas

Todas a pantalla completa. Orden:

1. **Header** (fijo, transparente, mínimo)
2. **Hero** — declaración gigante sobre imagen a sangre
3. **Declaración** — una frase sobre el estudio, revelada línea a línea
4. **Casos** — cabecera + 8 pantallas de proyecto (imagen + nombre + una frase)
5. **Serveis** — 4 palabras gigantes
6. **Contacte / Footer** — "Parlem-ne." + email gigante
7. *(overlay)* **Detalle de proyecto** — pantalla completa, ligero

**Total de pantallas "de contenido": 6** (frente a las 7 secciones + doble
portfolio + cifras de la web actual). Mucho más corto y directo.

---

## 6. Detalle pantalla a pantalla

### 6.1 Header

- Fijo y transparente, cambia a claro/oscuro según el fondo de la sección.
- Izquierda: wordmark CABRA (SVG, `currentColor`).
- Derecha: solo 3–4 enlaces en mayúsculas pequeñas — **Estudi · Casos · Serveis · Contacte**
  (o incluso menos). Sin botón "Parlem-ne →" en el header: el contacto ya es su
  propia pantalla gigante.
- Menú móvil: pantalla completa en negro, enlaces gigantes.

### 6.2 Hero — "Recerca i disseny"

- **100vh.** Imagen de fondo a sangre (la más fuerte: PEPITU o Cafès Serra), con
  un wash muy ligero. Opcional: crossfade lento entre 2–3 proyectos (ya existe en
  la web actual; se puede conservar, pero **sin** la etiqueta de proyecto ni los
  segmentos clicables, para no añadir ruido).
- Contenido, centrado o abajo a la izquierda:
  - Titular gigante en dos líneas:
    > **RECERCA I**
    > **DISSENY**
  - Micro-etiqueta debajo:
    > ESTUDI DE DISSENY — NAVÀS & BARCELONA
- **Nada más.** Sin párrafo, sin botones, sin "Marques, webs i campanyes des del 2005".
- Opcional: un "reel" o indicador de scroll muy discreto.

### 6.3 Declaración — quiénes somos

- **100vh** sobre fondo `#F0F0F0` (sin imagen). Texto gigante centrado.
- Se revela **línea a línea** al hacer scroll (máscara):
  > **FEM MARQUES,**
  > **WEBS I**
  > **CAMPANYES.**
- Micro-etiqueta debajo (única aclaración):
  > ESTUDI INDEPENDENT — DES DEL 2005
- **Solo eso.** Sustituye al párrafo "Som un equip petit i proper…" y a la lista
  de 4 servicios de la web actual.

### 6.4 Casos — los proyectos

- **Cabecera** (puede ir integrada o en media pantalla, no hace falta 100vh):
  una palabra gigante, > **CASOS**.
- Después, **una pantalla (100vh) por proyecto**. 8 paneles:

| Proyecto | Frase (una sola) | Micro (sector) |
|---|---|---|
| PEPITU | Del nom a l'interiorisme. | Hostaleria |
| CAFÈS SERRA | Del nom a l'envàs i la web. | Cafè |
| SIKKEMA | Una identitat que no caduca. | Moda |
| ALTHAIA | Una gràfica per a cada vídeo. | Salut · vídeo |
| PARC SANITARI SJD | Comunicació que apropa. | Salut |
| CLÍNICA DENTAL BASTERRETXEA | Un logotip serè. | Salut |
| DDUUEETT | Una web que ho ordena tot. | Salut |
| PDEPAGÈS | Del camp a la taula. | Alimentació |

- **Composición de cada panel** (patrón Firma):
  - Imagen a sangre que llena la pantalla (o vídeo en loop en Althaia).
  - Nombre del cliente **gigante** superpuesto (o junto a la imagen).
  - Debajo, **una única frase**.
  - Micro-etiqueta del sector (opcional, muy discreta).
- **Interacción:** al pasar el ratón, la imagen hace un zoom sutil y, si hay vídeo,
  se reproduce. Clic → abre el detalle.
- **Se elimina:** la doble sección de casos (destacados + grid filtrable), los
  filtros por sector, y las 3 líneas de texto por tarjeta. Una sola lista editorial.

### 6.5 Serveis — 4 palabras gigantes

- **100vh.** Cuatro palabras apiladas, enormes (como los tabs gigantes de la web
  actual, pero sin paneles de texto):
  > **MARQUES**
  > **WEB**
  > **XARXES SOCIALS**
  > **PUBLICITAT**
- **Interacción:** al pasar el ratón por cada palabra, la imagen de fondo
  (full-bleed) cambia al proyecto representativo de ese servicio. Las palabras
  inactivas al 40–50% de opacidad, la activa al 100%.
- **Sin** lead, sin conceptos ("Logotip · Tipografia · Color…"), sin enlace de caso
  por servicio. El servicio es solo la palabra.

### 6.6 Contacte / Footer — "Parlem-ne."

- **100vh, a sangre en negro** (`#1A1919`, texto claro) — la sección de contraste.
- Contenido:
  - Titular gigante: > **PARLEM-NE.**
  - Email como elemento protagonista, gigante (enlace `mailto:`):
    > hola@cabra.design
  - Micro: **NAVÀS & BARCELONA**
  - Redes en fila: **Instagram ↗ · LinkedIn ↗ · Behance ↗**
  - Wordmark CABRA gigante al fondo (decorativo, ya existe en la web actual).
- Sin formulario, sin columnas de enlaces legales en el bloque principal (lo legal
  queda en una línea mínima al pie).

### 6.7 Detalle de proyecto (overlay)

- Se mantiene la idea del overlay actual, pero **aligerado**:
  - Pantalla completa con la imagen/vídeo del proyecto arriba y el nombre gigante.
  - Solo 3 bloques de texto cortos: **El repte · La idea · El resultat** (una frase
    cada uno) y una **galería** de imágenes.
  - Botón de cerrar y "següent cas".
- Se elimina la ficha de metadatos larga y cualquier párrafo descriptivo extenso.

---

## 7. Qué se elimina respecto a la web actual

| Se elimina | Por qué |
|---|---|
| Lead del hero + 2 botones | El hero debe ser solo declaración + imagen |
| Párrafo "Som un equip petit i proper…" | Sustituido por una frase gigante |
| Lista de 4 servicios dentro del "Estudi" | Duplicaba "Serveis" |
| Sección "Casos destacados" (5 paneles) | Se fusiona con "Tots els casos" |
| Filtros por sector (`Tots / Hostaleria / Moda / Salut / Alimentació`) | Añaden UI y texto; sobra |
| 3 líneas de texto por tarjeta (títol + servei + resultat) | Se queda en nombre + una frase |
| Sección **Cifras** (120+ / 21 / 40+ / 3M) | Autobombo con datos; los referentes no lo usan |
| Lead + conceptos por cada servicio (tabs) | Se queda solo la palabra |
| Ticker / estrellas / contadores / hints (si quedara algo) | Ruido |
| Columnas de enlaces legales en el footer | Se reduce a una línea mínima |

**Se mantiene:** paleta, tipografía PP Neue Montreal, logo, imágenes, overlay de
caso (aligerado), cursor custom y animaciones de reveal.

---

## 8. Responsive

- Cada sección usa `100svh` (altura real del viewport en móvil) para evitar saltos
  con la barra del navegador.
- Los titulares gigantes escalan con `clamp()` (ya definido en la escala).
- En móvil, los paneles de proyecto apilan: imagen a sangre arriba + nombre y
  frase abajo.
- El header se reduce a logo + hamburguesa.
- Respetar `prefers-reduced-motion` (desactivar parallax/reveal).

---

## 9. Checklist de producción (para cuando tengas la web lista)

1. Reutilizar assets de `webplantilla/assets` (fotos WebP, logos, fuente, vídeo de Althaia).
2. Estructura de 6 pantallas + overlay (ver §5).
3. Tipografía: solo PP Neue Montreal (Book/Medium/Bold), mayúsculas, tracking cerrado.
4. Paleta monocroma + una sección en negro.
5. Textos finales en catalán (ver §6) — una frase por proyecto, nada más.
6. Reveal línea a línea, vídeo en hover (Althaia), cursor custom.
7. Revisar a 1440 / 1024 / 768 / 390px, sin overflow horizontal.
8. Confirmar con el estudio los años, enlaces de redes y el email.
