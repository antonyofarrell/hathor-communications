import { defineConfig } from 'astro/config';

// ─────────────────────────────────────────────────────────────
// TODO(per-project): set this to the client's live domain.
// It's used for absolute URLs and hreflang alternates.
const SITE = 'https://hathor-communications.vercel.app';
// ─────────────────────────────────────────────────────────────

export default defineConfig({
  site: SITE,
  i18n: {
    locales: ['en', 'es', 'fr'],
    defaultLocale: 'en',
    routing: {
      // All three languages get a prefix: /en/  /es/  /fr/
      // Symmetric URLs keep the redirect map uniform and suit a
      // site that treats its languages as equals.
      prefixDefaultLocale: true,
    },
  },
  // Send the bare domain to the default language.
  // In a static build this emits a redirect page; on Netlify /
  // Cloudflare Pages it becomes a real 301 via their adapters.
  redirects: {
    '/': '/en/',
  },
});
