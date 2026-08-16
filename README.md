# Sofía Gómez Sánchez - Sitio del proyecto

Sitio construido con [Astro](https://astro.build) y Tailwind CSS, publicado en GitHub Pages.

## Contenido del sitio

- **Home** (`/`) — página de inicio.
- **Presentación** (`/presentacion`) — video de presentación + foto/avatar.
- **Evidencias** (`/evidencias`) — menú con Modelado, Normalización, SQL y Proyecto.

## Cómo editar el contenido

- `src/site.config.ts` — título del sitio, texto e imágenes de la sección "Presentación" (`presentation`), video (`presentation.videoUrl`) y los enlaces del menú "Evidencias" (`evidencias`).
- `src/pages/presentacion.astro` — estructura de la página de Presentación.
- `src/pages/evidencias/*.astro` — cada subpágina de Evidencias (actualmente vacías, listas para agregar contenido).
- `src/assets/images/avatar-placeholder.svg` — reemplázalo por tu foto real (mismo nombre de archivo o actualiza la ruta en `site.config.ts`).

## Desarrollo local

```bash
pnpm install
pnpm dev
```

## Publicación

El repositorio incluye un workflow de GitHub Actions (`.github/workflows/deploy.yml`) que compila y publica el sitio automáticamente en cada `push` a `main`. Actívalo en **Settings → Pages → Source: GitHub Actions**.

Sitio publicado en: https://sofiagomezsanchez6-estrellas.github.io
