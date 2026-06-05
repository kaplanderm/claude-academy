# Claude Academy for Physicians (DermUnbound)

A bilingual (Hebrew-first / English) learning site that teaches dermatologists and other
physicians how to use Claude AI in clinical practice, with **no technical background required**.

The site is built around **Claude Desktop** and its three tabs:

- **Chat** - regular conversations (ask, get answers).
- **Cowork** - longer agentic work with no code ("Work in a Folder", Dispatch, background tasks).
- **Code** - Claude Code with a full graphical interface (sessions, file editor, visual diff,
  app previews). The terminal is optional.

The terminal/CLI path is demoted to an optional advanced track. Content is current as of
June 2026 (Claude Opus 4.8).

Live: https://academy.dermunbound.com

## Stack

- Next.js 16 (App Router), React 19
- Tailwind CSS v4 (CSS-first `@theme` in `src/app/globals.css`)
- lucide-react icons, framer-motion
- Bilingual i18n via cookie-driven SSR `lang`/`dir` (`src/lib/LangContext.tsx`)

## Project layout

- `src/app/` - routes (App Router). Homepage, `academy/[track]/[lesson]`, `blog/`, `medical/[slug]`, `features/[slug]`.
- `src/content/` - typed content (tracks, lessons, blog posts) split per file, loaded on demand.
- `src/components/` - UI; `content/MarkdownRenderer.tsx` is the single shared mini-markdown renderer.
- `src/data/` - `medicalUseCases.ts`, `featureGuides.ts`.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npx tsc --noEmit # type-check
```

## Accessibility

The site targets WCAG 2.1 AA / Israeli Standard 5568: cookie-driven SSR `lang`/`dir`,
accessible color tokens (`--interactive`), a global focus-visible outline, automatic
`prefers-reduced-motion`, an accessibility widget (font scaling to 200%, contrast modes),
and an accessibility statement at `/accessibility`.

## License

Content: CC BY-NC-SA 4.0. An independent educational project, not affiliated with Anthropic.
