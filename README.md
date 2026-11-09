# Paolo Tello — hub digital

Página de enlaces (tipo "link in bio") para un cantante emergente de música romántica latina: reúne en una sola pantalla móvil sus plataformas de música y redes sociales, destaca su sencillo debut y da un contacto para management y contrataciones. Sirve al artista como punto único al que dirigir a su audiencia desde redes sociales. **En producción.**

## Funcionalidades principales

- **Enlaces a plataformas de música:** Spotify (con el sencillo debut destacado), Apple Music y YouTube Music.
- **Enlaces a redes sociales:** Instagram, TikTok y Facebook.
- **Contacto de management y booking** con enlace de correo.
- **Diseño pensado para móvil:** foto de portada a pantalla completa, tarjetas de enlace con animación de entrada escalonada y un halo de luz que sigue el cursor en escritorio.
- **SEO y Open Graph:** idioma `es`, título y descripción para buscadores y para compartir el enlace.

## Capturas

<!-- Agrega aquí tus imágenes, por ejemplo: ![Hub](docs/capturas/hub.png) -->

_Pendiente._

## Stack

| Capa | Tecnología |
|---|---|
| Framework | React 18.3, TypeScript 5.8, React Router 6.30 |
| Build | Vite 5.4 con `@vitejs/plugin-react-swc` |
| Estilos y UI | Tailwind CSS 3.4, shadcn/ui (Radix UI), Lucide |
| Pruebas | Vitest 3 (con Testing Library y jsdom) y Playwright 1.57 |

## Arquitectura

Aplicación de una sola página sin backend:

- `src/pages/Index.tsx` compone la página: portada, nombre y lema del artista, tarjetas de enlace y pie con el contacto.
- `src/components/LinkCard.tsx` es la tarjeta reutilizable de cada enlace (ícono, texto, destacado y retraso de animación).
- `src/components/GlowTrace.tsx` actualiza variables CSS con la posición del ratón para el efecto de luz.
- `src/components/ui/` contiene los componentes base de shadcn/ui.
- Los enlaces, textos y datos de contacto están escritos directamente en `Index.tsx`.

## Instalación y ejecución

Requisitos: Node.js 18 o superior y npm.

```bash
git clone https://github.com/LDanielMC/paolo-tello-hub.git
cd paolo-tello-hub
npm install
npm run dev
```

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo con recarga en caliente |
| `npm run build` | Compila para producción en `dist/` |
| `npm run preview` | Sirve la compilación para revisarla |
| `npm run lint` | Revisa el código con ESLint |

El proyecto no usa variables de entorno.

## Pruebas

```bash
npm test    # vitest run
```

Vitest está configurado, pero por ahora solo existe una prueba de ejemplo (`src/test/example.test.ts`). El repositorio también incluye la configuración base de Playwright, sin pruebas de extremo a extremo escritas.
