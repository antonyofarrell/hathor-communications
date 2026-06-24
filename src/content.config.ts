import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One collection holds every page in every language.
// Files live at  src/content/pages/<locale>/<slug>.md
// e.g.           src/content/pages/en/about.md  ->  id "en/about"
//                src/content/pages/es/index.md  ->  id "es/index"  (home)
//
// This is the SAME folder Sveltia CMS writes to (see public/admin/config.yml),
// so the CMS and the build share one set of files. Nothing syncs between
// two systems — there is only one source of truth on disk.
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { pages };
