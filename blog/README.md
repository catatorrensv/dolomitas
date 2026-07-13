# Blog del viaje — Dolomitas 2026

Sitio construido con [Astro](https://astro.build). Estructura pensada para
que, día a día durante el viaje (o al volver), solo haga falta rellenar
texto y añadir fotos — sin tocar código.

## Cómo rellenar un día

1. Abre `src/content/days/dia-XX.md` (XX = número de día, 01–11).
2. Rellena las secciones marcadas en cursiva (resumen, itinerario,
   highlights, anécdotas, consejo del día...).
3. Añade las fotos de ese día dentro de `public/photos/dia-XX/`.
4. Enlázalas en la sección "Fotos" del `.md`, por ejemplo:
   ```md
   ![Vista del lago](/photos/dia-02/lago.jpg)
   ```
5. Cuando el día esté listo para publicarse, cambia `draft: true` a
   `draft: false` en la cabecera del archivo.

## Páginas pendientes de rellenar

- `src/pages/presupuesto.astro` — recap de gastos (los datos reales ya
  están en la pestaña Gastos de la app del viaje, en la raíz del repo)
- `src/pages/consejos.astro` — consejos prácticos (idem, pestaña Consejos)
- `src/pages/sobre-nosotros.astro` — quiénes sois

## Desarrollo local

```bash
npm install
npm run dev      # servidor local con recarga automática
npm run build    # genera el sitio estático en dist/
```

## Pendiente de decidir

- Dónde se publica (GitHub Pages, dominio propio...) — de momento el
  proyecto no tiene `site`/`base` configurados en `astro.config.mjs`.
- Tema visual definitivo — de momento usa un layout mínimo con los mismos
  colores que la app del viaje, a la espera de fotos reales para afinar
  el diseño.
