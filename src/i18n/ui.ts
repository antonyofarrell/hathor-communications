// ─────────────────────────────────────────────────────────────
// Chrome strings: nav labels, footer text — the bits that wrap
// every page. These rarely change, so they're kept here in the
// codebase rather than exposed to the CMS. (If a client needs to
// edit, say, contact details, add a small "Site settings" file
// collection in Sveltia for just those — see README.)
//
// TODO(per-project): translate / extend these for the client.
// Keys must match across all three languages.
// ─────────────────────────────────────────────────────────────

export const languages = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
} as const;

export const defaultLang = 'en';

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.work': 'Work',
    'nav.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'skip.content': 'Skip to content',
  },
  es: {
    'nav.about': 'Quiénes somos',
    'nav.services': 'Servicios',
    'nav.work': 'Proyectos',
    'nav.contact': 'Contacto',
    'footer.rights': 'Todos los derechos reservados.',
    'skip.content': 'Saltar al contenido',
  },
  fr: {
    'nav.about': 'À propos',
    'nav.services': 'Services',
    'nav.work': 'Projets',
    'nav.contact': 'Contact',
    'footer.rights': 'Tous droits réservés.',
    'skip.content': 'Aller au contenu',
  },
} as const;

// The navigation, in order. `slug` is shared across languages so the
// language switcher is a simple locale-segment swap (see LangSwitcher).
// `index` is the home page and renders at the language root (/en/).
export const nav = [
  { slug: 'about', key: 'nav.about' },
  { slug: 'services', key: 'nav.services' },
  { slug: 'work', key: 'nav.work' },
  { slug: 'contact', key: 'nav.contact' },
] as const;
