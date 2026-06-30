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
  en: "English",
  es: "Español",
  fr: "Français",
} as const;

export const defaultLang = "en";

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    "nav.about": "About",
    "nav.services": "Services",
    "nav.work": "Work",
    "nav.contact": "Contact",
    "footer.contact.heading1":
      "Want to chat about your project or book a workshop demonstration?",
    "footer.contact.heading2": "Let's talk.",
    "footer.contact.heading3": "We're down to earth, promise.",
    "footer.rights": "All rights reserved.",
    "footer.links.heading": "LINKS",
    "footer.links.home": "HOME",
    "footer.links.ourStory": "Our story",
    "footer.links.team": "Team",
    "footer.links.clients": "Clients",
    "footer.links.services": "SERVICES",
    "footer.links.ourCourses": "OUR COURSES",
    "footer.links.contact": "Contact",
    "footer.contact.address":
      "FRAY CRISTOBAL ORAMAS 12, ICOD DE LOS VINOS, TENERIFE",
    "footer.contact.phone": "(+34) 635950892",
    "footer.contact.email": "hello@hathorcommunications.com",
    "skip.content": "Skip to content",
  },
  es: {
    "nav.about": "Quiénes somos",
    "nav.services": "Servicios",
    "nav.work": "Proyectos",
    "nav.contact": "Contacto",
    "footer.contact.heading1":
      "Want to chat about your project or book a workshop demonstration?",
    "footer.contact.heading2": "Let's talk.",
    "footer.contact.heading3": "We're down to earth, promise.",
    "footer.rights": "Todos los derechos reservados.",
    "footer.links.heading": "ENLACES",
    "footer.links.home": "INICIO",
    "footer.links.ourStory": "Nuestra historia",
    "footer.links.team": "Equipo",
    "footer.links.clients": "Clientes",
    "footer.links.services": "SERVICIOS",
    "footer.links.ourCourses": "NUESTROS CURSOS",
    "footer.links.contact": "Contacto",
    "footer.contact.address":
      "FRAY CRISTOBAL ORAMAS 12, ICOD DE LOS VINOS, TENERIFE",
    "footer.contact.phone": "(+34) 635950892",
    "footer.contact.email": "hello@hathorcommunications.com",
    "skip.content": "Saltar al contenido",
  },
  fr: {
    "nav.about": "À propos",
    "nav.services": "Services",
    "nav.work": "Projets",
    "nav.contact": "Contact",
    "footer.contact.heading1":
      "Want to chat about your project or book a workshop demonstration?",
    "footer.contact.heading2": "Let's talk.",
    "footer.contact.heading3": "We're down to earth, promise.",
    "footer.rights": "Tous droits réservés.",
    "footer.links.heading": "LIENS",
    "footer.links.home": "ACCUEIL",
    "footer.links.ourStory": "Notre histoire",
    "footer.links.team": "Équipe",
    "footer.links.clients": "Clients",
    "footer.links.services": "SERVICES",
    "footer.links.ourCourses": "NOS FORMATIONS",
    "footer.links.contact": "Contact",
    "footer.contact.address":
      "FRAY CRISTOBAL ORAMAS 12, ICOD DE LOS VINOS, TENERIFE",
    "footer.contact.phone": "(+34) 635950892",
    "footer.contact.email": "hello@hathorcommunications.com",
    "skip.content": "Aller au contenu",
  },
} as const;

// The navigation, in order. `slug` is shared across languages so the
// language switcher is a simple locale-segment swap (see LangSwitcher).
// `index` is the home page and renders at the language root (/en/).
export const nav = [
  { slug: "about", key: "nav.about" },
  { slug: "services", key: "nav.services" },
  { slug: "work", key: "nav.work" },
  { slug: "contact", key: "nav.contact" },
] as const;

// TODO(per-project): these are placeholder "#" links until the
// corresponding pages exist — wire up real hrefs then.
export const footerLinks = [
  { key: "footer.links.home" },
  { key: "footer.links.ourStory" },
  { key: "footer.links.team" },
  { key: "footer.links.clients" },
  { key: "footer.links.services" },
  { key: "footer.links.ourCourses" },
  { key: "footer.links.contact" },
] as const;
