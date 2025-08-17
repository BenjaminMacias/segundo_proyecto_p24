# Segundo Proyecto P24

Pequeño proyecto web orientado a practicar **maquetación responsiva**, **estilos reutilizables** y **JavaScript básico** para interactividad. Es ideal como base para una landing page o un micrositio con componentes simples (navbar, cards, secciones de contenido y formulario).

---

## 🧰 Tecnologías utilizadas

- **HTML5** (semántica)
- **CSS3** (Flexbox / Grid, variables, media queries)
- **JavaScript (ES6+)** para la lógica mínima de UI
- (Opcional) **Live Server** / **servidor estático** para desarrollo local

---

## 🚀 Instalación e inicio

> Este proyecto es 100% estático. No requiere dependencias para verse: basta con abrir `index.html` en el navegador.  
> Si prefieres usar un servidor local (recomendado), elige una de estas opciones:

### Opción A — VS Code + Live Server
1. Abre la carpeta del proyecto en **VS Code**.
2. Instala la extensión **Live Server** (Ritwick Dey).
3. Click derecho en `index.html` → **Open with Live Server**.

### Opción B — Servidor estático con Node (npx serve)
```bash
# dentro de la carpeta del proyecto
npx serve .
# verás la URL local en consola, abre en el navegador
Opción C — Servidor simple con Python

# Python 3
python -m http.server 5173
# luego ve a http://localhost:5173
📁 Estructura sugerida
Ajusta los nombres si tu repo ya trae otra estructura.

/segundo_proyecto_p24
├─ index.html
├─ css/
│  └─ styles.css
├─ js/
│  └─ main.js
└─ assets/
   ├─ img/
   └─ icons/
index.html: estructura semántica de la página (header, main, sections, footer).

css/styles.css: variables CSS, layout (Grid/Flex), media queries para móvil/tablet/desktop.

js/main.js: comportamiento ligero (toggle de menú, scroll suave, validación básica de formularios).

assets/: imágenes y recursos.

🧪 Ejemplos de uso
1) Menú móvil (hamburger)

// js/main.js (ejemplo)
const btn = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-menu]');

btn?.addEventListener('click', () => {
  nav?.classList.toggle('is-open');
  btn?.setAttribute(
    'aria-expanded',
    nav?.classList.contains('is-open') ? 'true' : 'false'
  );
});

/* css/styles.css (fragmento) */
.nav { display: flex; gap: 1rem; }
@media (max-width: 768px) {
  .nav { display: none; }
  .nav.is-open { display: flex; flex-direction: column; }
}
2) Grid responsivo de tarjetas

.cards {
  --gap: 1rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--gap);
}
.card { grid-column: span 4; }
@media (max-width: 1024px) { .card { grid-column: span 6; } }
@media (max-width: 640px)  { .card { grid-column: span 12; } }
3) Variables y temas
:root {
  --bg: #0b0c10;
  --surface: #1f2833;
  --accent: #66fcf1;
  --text: #c5c6c7;
}
body {
  background: var(--bg);
  color: var(--text);
}
.btn {
  background: var(--accent);
  color: #0b0c10;
}
