# Trilingual Astro + Sveltia CMS starter

A template for small, design-led marketing sites in **English / Spanish / French**,
built with [Astro](https://astro.build) (static output, zero JS by default) and an
optional Git-based CMS ([Sveltia](https://github.com/sveltia/sveltia-cms)) so clients
can edit copy themselves.

One set of templates, one set of content files per language, real `/en/ /es/ /fr/`
URLs with `hreflang` alternates. Adding a fourth language later is one `xx.json`
plus one folder — no re-engineering.

> **Use this as a template, not a shared site.** Click **"Use this template"** on
> GitHub (or `npx degit your-org/astro-sveltia-i18n-starter my-new-site`) to spin up
> a fresh, independent repo for **each client**. Never point more than one live site
> at this repo.

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321  → redirects to /en/
npm run build    # static output in ./dist
npm run preview  # preview the built site
```

## How it fits together

- `src/content/pages/<locale>/<slug>.md` — page content, one file per language.
  `index.md` is the home page and renders at the language root (`/en/`).
- `src/content.config.ts` — defines the `pages` collection via Astro's `glob` loader.
- `src/pages/[lang]/[...slug].astro` — one dynamic route renders every page in every
  language from that collection.
- `src/layouts/Base.astro` — the shared shell: `<html lang>`, head, `hreflang`
  alternates, header, footer.
- `src/components/` — `Header`, `Footer`, `LangSwitcher`.
- `src/i18n/ui.ts` — nav/footer strings + the nav definition (chrome that rarely
  changes; kept in code, not the CMS).
- `public/admin/` — Sveltia CMS. It writes Markdown back into
  `src/content/pages/<locale>/…`, the same files the build reads.

The integration is just that shared folder: the CMS commits Markdown, a deploy hook
rebuilds the static site. There is one source of truth on disk.

## Per-project checklist

Search the repo for `TODO(per-project)` and work through each. The essentials:

1. **`astro.config.mjs`** — set `SITE` to the client's live domain.
2. **`public/admin/config.yml`** — set `backend.repo` to *this* client's repo.
3. **`src/content/pages/**`** — replace the stub copy (or hand it to the client via
   the CMS). Add/remove pages as needed; keep filenames identical across `en/es/fr`.
4. **`src/i18n/ui.ts`** — translate the nav/footer strings and adjust the `nav` list
   to match your pages.
5. **`src/styles/global.css`** — replace the neutral tokens with the client's brand
   (your design-system-scraper output drops in here).
6. **`src/components/Header.astro` / `Footer.astro`** — swap the `Brand` placeholder
   for the logo and real footer details.

## Migrating the old WordPress site

Because the existing site is individual per-language pages (no plugin), each has its
own indexed URL. Before switching DNS, inventory every old URL (WP admin →
Pages → All Pages, or the sitemap) and add a redirect to its new `/en|es|fr/…`
equivalent in your host's redirects file (e.g. Netlify `_redirects`, Cloudflare Pages
`_redirects`, or `netlify.toml`). This preserves search ranking.

## Connecting the CMS (auth)

Sveltia is Git-based: editors log in with GitHub and their edits commit to the repo,
which triggers a rebuild. It deliberately does **not** include Decap's Git Gateway,
so it needs a small OAuth proxy. The simplest free route is the Sveltia auth worker
on Cloudflare Workers — follow the authentication guide in the Sveltia docs
(<https://github.com/sveltia/sveltia-cms>), then set `backend.base_url` in
`config.yml` to your worker URL.

Local CMS testing without auth:

```bash
# set local_backend: true in config.yml, then:
npm run cms:proxy     # in one terminal
npm run dev           # in another → open http://localhost:4321/admin/
```

Set `local_backend: false` again before deploying.

> The client logs into `/admin/`, edits a page (with EN/ES/FR tabs), and saves.
> The change goes live after the rebuild — not instantly like WordPress. Fine for
> occasional copy edits; set that expectation with the client.

## Deploying

Any static host works. On Netlify or Cloudflare Pages: connect the repo, build
command `npm run build`, publish directory `dist`. Both turn the root redirect and
your old-URL redirects into real 301s.

## Notes

- Requires Node 18+ (Node 20+ recommended).
- Built against Astro 5; the i18n config and `glob` content loader used here are
  stable in Astro 6 too, so bumping the major is safe.
