# Blog del viaje — Dolomitas 2026

Sitio construido con [Astro](https://astro.build). Estructura pensada para
que, día a día durante el viaje (o al volver), solo haga falta rellenar
texto y añadir fotos — sin tocar código.

El viaje está dividido en dos bloques:

- **Milán** (`milan`) — 2 días: Milán + Lago di Como
- **Dolomitas en camper** (`dolomitas`) — 9 días: desde la recogida del
  camper hasta la devolución y vuelta a casa

## Cómo rellenar un día

1. Abre `src/content/days/<viaje>/dia-XX.md` (viaje = `milan` o
   `dolomitas`; XX = número de día dentro de ese viaje).
2. Rellena las secciones marcadas en cursiva (resumen, itinerario,
   highlights, anécdotas, consejo del día...).
3. Añade las fotos de ese día dentro de
   `public/photos/<viaje>/dia-XX/`.
4. Enlázalas en la sección "Fotos" del `.md`. Como el sitio se sirve desde
   `/dolomitas/blog/`, la ruta debe incluir ese prefijo, por ejemplo:
   ```md
   ![Vista del lago](/dolomitas/blog/photos/milan/dia-02/lago.jpg)
   ```
   (Si en algún momento cambiáis a un dominio propio, ese prefijo habrá
   que actualizarlo en las fotos ya enlazadas — avisadme cuando llegue el
   momento y lo dejo automatizado.)
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

## Publicación

El blog se sirve como subcarpeta `/blog/` dentro de la misma web que la
app del viaje (`index.html` en la raíz del repo), vía GitHub Pages. El
despliegue lo gestiona el workflow `.github/workflows/pages.yml` en la
raíz del repositorio.

## Pendiente de decidir

- Dominio propio — de momento vive bajo `catatorrensv.github.io/dolomitas/blog/`
- Diseño definitivo una vez haya fotos reales
