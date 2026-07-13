import { defineConfig } from 'astro/config';

// Se sirve como subcarpeta /blog/ del mismo sitio (GitHub Pages) que la
// app del viaje (index.html en la raíz del repo). Si en el futuro se
// pasa a un dominio propio, ajustar `site`/`base` aquí.
export default defineConfig({
  site: 'https://catatorrensv.github.io',
  base: '/dolomitas/blog/',
});
