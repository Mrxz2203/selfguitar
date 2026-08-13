# SelfGuitar 🎸

Archivo personal de punteos y notas de guitarra. Organiza canciones por categoría → módulo (película/álbum/artista) → canción, con acceso rápido al video de referencia y a las notas/tabs de guitarra.

## Stack

- **React 19** + **Vite** — SPA con hot reload
- **React Router v6** — enrutamiento por parámetros dinámicos
- **Tailwind CSS v4** — vía plugin de Vite, sin `tailwind.config.js` ni `postcss.config.js`

## Requisitos

- Node.js 18+
- npm (o pnpm, ver nota abajo)

## Instalación

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

> Si prefieres **pnpm**: `pnpm install` y `pnpm dev`. No mezclar npm y pnpm en el mismo proyecto — cada uno genera su propio lockfile (`package-lock.json` vs `pnpm-lock.yaml`) y mezclar ambos causa conflictos de dependencias.

## Scripts

| Comando           | Qué hace                                  |
|--------------------|--------------------------------------------|
| `npm run dev`       | Levanta el servidor de desarrollo (HMR)    |
| `npm run build`     | Genera build de producción en `dist/`      |
| `npm run preview`   | Sirve el build de producción localmente    |
| `npm run lint`      | Corre ESLint sobre el proyecto             |

## Arquitectura de carpetas

```
src/
├── assets/              # Imágenes (categorías, grupos, carrusel del Hero)
├── components/
│   ├── common/           # Componentes reusables (BackButton)
│   ├── layout/            # Header, Footer, Logo
│   ├── home/              # Hero, HeroCarousel, ModulesGrid
│   ├── category/          # GroupCard, SongCard
│   └── song/               # SongDetail
├── pages/                # Home, CategoryPage, GroupPage, SongPage
├── data/
│   └── songs.js           # Única fuente de datos del sitio
├── hooks/                # useCategory, useGroup, useSong, useInView
├── routes/
│   └── AppRouter.jsx      # Definición de rutas
├── App.jsx                # Layout raíz + scroll a anclas
├── main.jsx                # Punto de entrada, BrowserRouter
└── index.css                # Import de Tailwind + keyframes propios
```

## Modelo de datos

Todo el contenido del sitio vive en **`src/data/songs.js`**, en 3 niveles jerárquicos:

```
Categoría (Anime, Bollywood, Música Variada)
  └─ Grupo (película, álbum o artista — ej. "Chalte Chalte")
       └─ Canción (título, video, notas)
```

### `categories`

```js
{
  id: "bollywood",       // usado en la URL: /categoria/bollywood
  name: "Bollywood",
  image: srk,             // import de imagen desde src/assets
  description: "...",
}
```

### `groups`

```js
{
  id: "chalte-chalte",    // usado en la URL: /categoria/bollywood/chalte-chalte
  categoryId: "bollywood", // enlaza con categories.id
  name: "Chalte Chalte",
  image: chalte,           // opcional
}
```

### `songs`

```js
{
  id: "suno-na-suno-na",   // usado en la URL: /cancion/suno-na-suno-na
  groupId: "chalte-chalte", // enlaza con groups.id
  title: "Suno Na Suno Na",
  artist: "...",            // opcional
  youtubeUrl: "https://www.youtube.com/watch?v=...",
  notesUrl: "https://...",  // link externo a tabs/punteo
}
```

**Para agregar contenido nuevo solo se edita este archivo** — no hace falta tocar componentes, páginas ni rutas.

## Rutas

| Ruta                                    | Página          | Muestra                                  |
|-------------------------------------------|------------------|--------------------------------------------|
| `/`                                        | `Home`            | Hero + grid de categorías                    |
| `/categoria/:categoryId`                    | `CategoryPage`     | Grid de grupos dentro de la categoría          |
| `/categoria/:categoryId/:groupId`            | `GroupPage`         | Grid de canciones dentro del grupo               |
| `/cancion/:songId`                            | `SongPage`           | Detalle: botones a video (YouTube) y notas         |

Los hooks (`useCategory`, `useGroup`, `useSong`) resuelven las relaciones entre niveles a partir del `id` de la URL — filtran/buscan sobre los arrays de `data/songs.js`.

## Convenciones de diseño

- **Verde esmeralda** (`emerald-400/500`) — acciones primarias: ver video, ver notas, hover de navegación.
- **Azul cielo** (`sky-400`) — navegación hacia atrás (`BackButton`), para distinguirla visualmente de las acciones.
- **`focus-visible:ring-2`** en todo elemento interactivo — foco visible al navegar con teclado (Tab), sin ensuciar la UI al usar mouse.
- **`scroll-mt-24`** en las secciones ancladas (`#hero`, `#modulos`, `#footer`) — compensa el Header `sticky` para que el título no quede tapado al saltar con el nav.

## Animaciones

- **Hero**: carrusel de 3 imágenes con crossfade cada 5s (`HeroCarousel.jsx`, `setInterval`), entrada con `fade-in-up` (keyframe en `index.css`).
- **Módulos**: aparecen en cascada al hacer scroll, usando `useInView` (hook con `IntersectionObserver`) — se dispara una sola vez por sección.
- **Header**: transición de transparente a sólido con blur + sombra al superar 20px de scroll.

## Notas técnicas importantes

- **Case-sensitivity en despliegue**: Windows no distingue mayúsculas/minúsculas en rutas de archivo, pero **Vercel (Linux) sí**. Los nombres de import (`Srk.png`, `Chalte.png`, `DDLJ.webp`, etc.) deben coincidir **exactamente** con el nombre real del archivo guardado en `src/assets/`, o el build fallará en producción aunque funcione en local.
- **Video de YouTube embebido**: algunos videos bloquean su reproducción embebida por derechos de autor (LatinAutor, UMPG, etc.). Por eso `SongDetail.jsx` usa un botón que abre YouTube en pestaña nueva en vez de un `<iframe>`.
- **Favicon**: vive en `public/logo.svg` (no en `src/assets/`) y se referencia en `index.html` como `/logo.svg` — los archivos en `public/` se sirven desde la raíz sin pasar por el bundler de Vite.
- **Notas de guitarra sin imágenes propias**: por ahora `notesUrl` enlaza a sitios externos (ej. guitartab.in) en vez de subir capturas — evita consumir espacio de repositorio; es una mejora planeada a futuro.

## Roadmap

- [ ] Poblar categorías **Anime** y **Música Variada** con sus grupos/canciones
- [ ] Subir capturas propias de notas en vez de solo enlazar a sitios externos
- [ ] Menú responsive (hamburguesa) para el Header en móvil
- [ ] Identidad visual propia (tipografía y paleta más allá del negro + verde por defecto)