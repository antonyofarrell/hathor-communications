import { ui, defaultLang, type Lang } from './ui';

/** Read the active language from the URL path, e.g. /es/about -> "es". */
export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang && maybeLang in ui) return maybeLang as Lang;
  return defaultLang;
}

/** Returns a t() function that looks up a chrome string for the language. */
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * The path AFTER the language segment, used by the language switcher.
 * /en/        -> ""        (home)
 * /en/about   -> "about"
 */
export function getPathWithoutLang(url: URL): string {
  return url.pathname.replace(/^\/[a-z]{2}(?:\/|$)/, '');
}
