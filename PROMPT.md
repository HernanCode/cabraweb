Eres un diseñador web y desarrollador front-end senior especializado en webs de agencias y estudios de diseño. Vas a crear, desde cero, una web de una sola página (one-page) para **CABRA**, un estudio de diseño gráfico independiente.

---

## CONTEXTO DEL PROYECTO

- **Estudio:** CABRA (cabra.design), estudio de diseño gráfico y web.
- **Ubicación:** Navàs & Barcelona (Cataluña).
- **Desde:** 2005.
- **Qué hacen:** marcas (branding/identidad), web, redes sociales y publicidad.
- **Idioma de la web:** catalán (todos los textos que te doy ya están en catalán, úsalos tal cual).
- **Objetivo:** una web **visual y contundente, con muy poco texto**. Cada idea ocupa una pantalla completa (100vh / 100svh). El trabajo (los proyectos) es el protagonista; la tipografía gigante hace de titular.

### Estilo de referencia

El cliente quiere una web inspirada en estos tres referentes:

1. **wearefirma.com** (el principal) — secciones que ocupan el 100% de la pantalla, titular de display gigante, un proyecto = una pantalla completa con imagen a sangre y **una sola frase**, texto que se revela línea a línea al hacer scroll, vídeo en loop al pasar el ratón, una sección en negro a sangre.
2. **sopagraphics.com** — limpieza suiza, rejilla clara, muy poco texto, la obra por delante de todo.
3. **erretres.com** — sobriedad, neutralidad, etiquetas discretas (de esta coges la calma, NO la densidad de contenido).

Clave: en Firma el titular es serif, pero **aquí mantenemos la tipografía de la marca CABRA (PP Neue Montreal, sans grotesca)**. Mismo impacto que Firma, pero con identidad propia.

---

## SISTEMA VISUAL

### Tipografía — PP Neue Montreal (una sola familia)

- Pesos: Book 400, Medium 500, Bold 700.
- Todo en **mayúsculas** para títulos, con `letter-spacing` negativo (apretado).
- Escala:
  - **Display hero** (declaración principal): `clamp(72px, ~14vw, 180px)`, Medium 500 o Bold 700, `line-height: 0.9`, `letter-spacing: -0.03em`.
  - **Display de proyecto/sección** (nombres de cliente, títulos): `clamp(64px, ~11vw, 150px)`, Medium 500, `line-height: 0.94`, `letter-spacing: -0.025em`.
  - **Frase por proyecto**: Book 400, `clamp(18px, 2vw, 28px)`, tracking normal, sin mayúsculas.
  - **Micro-etiqueta** (sector, ubicación, "des del 2005"): Book 400, 11–12px, `letter-spacing: +0.08em`, mayúsculas.
- Las palabras clave de un titular pueden ir en **Bold 700** para dar ritmo.
- Usa `@font-face` con los archivos de PP Neue Montreal (Book, Medium, Bold) que te facilito. Si no puedes cargarlos, usa como fallback una grotesca neutra (Neue Montreal / Inter / Helvetica Neue), pero deja preparado el `@font-face`.

### Color — paleta monocroma

- Fondo: `#F0F0F0`
- Superficie: `#E7E7E7`
- Tinta (negro): `#1A1919`
- Texto: `#2A2A2A`
- Grises secundarios: `#4A4A4A`, `#D9D9D9`
- **Una única sección a sangre en negro** (`#1A1919`, texto claro `#F0F0F0`) para romper el ritmo.
- **Ningún color de acento.** El color entra solo por las fotografías.

### Imagen

- **Full-bleed**: las imágenes ocupan la pantalla completa, sin marcos ni tarjetas.
- Sin duotono ni overlays pesados; como mucho un "wash" muy ligero para que el texto respire.
- `object-fit: cover` para llenar sin bandas.
- (Las imágenes de los proyectos te las facilito en la carpeta `assets/`; mientras tanto puedes usar placeholders con las mismas proporciones panorámicas.)

---

## ESTRUCTURA (todas las secciones a pantalla completa, 100vh / 100svh)

Orden de la página:

1. **Header** (fijo)
2. **Hero**
3. **Declaración**
4. **Casos** (cabecera + 8 pantallas de proyecto)
5. **Serveis**
6. **Contacte / Footer**

Nada más. Estructura corta y directa.

---

## SECCIÓN POR SECCIÓN (con los textos exactos en catalán)

### 1. Header

- Fijo y transparente; cambia a claro u oscuro según el fondo de la sección sobre la que esté.
- Izquierda: wordmark **CABRA** (logo en mayúsculas).
- Derecha: enlaces en mayúsculas pequeñas — **Estudi · Casos · Serveis · Contacte**.
- Sin botón de CTA en el header.
- Menú móvil: pantalla completa en negro, enlaces gigantes.

### 2. Hero

- 100vh, imagen de fondo a sangre (la más fuerte del estudio), con un wash muy ligero.
- Titular gigante en dos líneas, centrado o abajo a la izquierda:
  > **RECERCA I**
  > **DISSENY**
- Micro-etiqueta debajo:
  > ESTUDI DE DISSENY — NAVÀS & BARCELONA
- **Nada más.** Sin párrafo, sin botones.
- Opcional: un indicador de scroll muy discreto.

### 3. Declaración

- 100vh sobre fondo `#F0F0F0` (sin imagen). Texto gigante centrado.
- Se revela **línea a línea** al hacer scroll (efecto de máscara de texto):
  > **FEM MARQUES,**
  > **WEBS I**
  > **CAMPANYES.**
- Micro-etiqueta debajo:
  > ESTUDI INDEPENDENT — DES DEL 2005

### 4. Casos (los proyectos)

- Cabecera con una palabra gigante: **CASOS**.
- Después, **una pantalla (100vh) por proyecto**. 8 proyectos:

| Proyecto | Sector | Frase (una sola) |
|---|---|---|
| PEPITU | Hostaleria | Del nom a l'interiorisme. |
| CAFÈS SERRA | Cafè | Del nom a l'envàs i la web. |
| SIKKEMA | Moda | Una identitat que no caduca. |
| ALTHAIA | Salut | Una gràfica per a cada vídeo. |
| PARC SANITARI SJD | Salut | Comunicació que apropa. |
| CLÍNICA DENTAL BASTERRETXEA | Salut | Un logotip serè. |
| DDUUEETT | Salut | Una web que ho ordena tot. |
| PDEPAGÈS | Alimentació | Del camp a la taula. |

- **Composición de cada panel:**
  - Imagen a sangre que llena la pantalla.
  - Nombre del cliente **gigante** superpuesto o junto a la imagen.
  - Debajo, **una única frase** (la de la tabla).
  - Micro-etiqueta del sector, muy discreta.
- **Interacción:** al pasar el ratón, la imagen hace un zoom sutil; el proyecto ALTHAIA lleva un **vídeo en loop** que se reproduce en hover.
- Sin filtros, sin años, sin tres líneas de metadatos. Solo nombre + una frase.

### 5. Serveis

- 100vh. Cuatro palabras apiladas, enormes:
  > **MARQUES**
  > **WEB**
  > **XARXES SOCIALS**
  > **PUBLICITAT**
- Interacción: al pasar el ratón por cada palabra, la imagen de fondo (full-bleed) cambia. Palabras inactivas al 40–50% de opacidad, la activa al 100%.
- Sin descripciones, sin conceptos, sin enlaces.

### 6. Contacte / Footer

- 100vh, **a sangre en negro** (`#1A1919`, texto claro).
- Contenido:
  - Titular gigante: **PARLEM-NE.**
  - Email como protagonista, gigante (enlace `mailto:`): **hola@cabra.design**
  - Micro: **NAVÀS & BARCELONA**
  - Redes en fila: **Instagram ↗ · LinkedIn ↗ · Behance ↗**
  - Wordmark **CABRA** gigante de fondo (decorativo).
- Sin formulario; lo legal queda en una línea mínima al pie (© 2026 CABRA).

### (Opcional) Detalle de proyecto

- Al hacer clic en un proyecto, se abre un overlay a pantalla completa con:
  - Imagen/vídeo grande + nombre gigante.
  - Tres bloques cortos: **El repte · La idea · El resultat** (una frase cada uno).
  - Una galería de imágenes.
  - Botón cerrar y "següent cas".

---

## INTERACCIÓN Y ANIMACIÓN

- Revelado **línea a línea** del texto grande al hacer scroll (máscara de texto).
- Imagen con **parallax/zoom sutil** al entrar en viewport.
- Vídeo en loop en hover (Althaia).
- Cursor personalizado (punto + anillo con `mix-blend-mode: difference`) que crece sobre enlaces.
- Transiciones suaves; respeta `prefers-reduced-motion`.

---

## REQUISITOS TÉCNICOS

- **HTML + CSS + JavaScript vanilla** (sin frameworks, sin dependencias externas). Todo en un único `index.html` o separado en `index.html` / `styles.css` / `app.js`.
- Responsive: revisa a 1440, 1024, 768 y 390px, sin scroll horizontal.
- En móvil usa `100svh` (no `100vh`) para evitar saltos con la barra del navegador.
- Semántica y accesibilidad: `aria-label` en iconos, enlaces con foco visible, textos alternativos en imágenes.
- Rendimiento: imágenes en WebP, `loading="lazy"` en lo que no esté arriba del todo.

---

## QUÉ NO HACER

- No añadas secciones extra (ni cifras, ni testimonios, ni "cómo trabajamos").
- No metas párrafos largos: el texto de esta web cabe en una frase por proyecto.
- No uses colores de acento; todo es monocromo.
- No uses serif para los titulares (salvo que lo pida el cliente explícitamente).
- No pongas botones ni formularios de más; el contacto es una pantalla con el email.

---

## ENTREGABLE

Devuélveme el código completo (HTML, CSS y JS) listo para abrir en un navegador, con el contenido real en catalán y la estructura de pantallas completas descrita arriba.
