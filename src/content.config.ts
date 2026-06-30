import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// One collection holds every page in every language.
// Files live at  src/content/pages/<locale>/<slug>.md
// e.g.           src/content/pages/en/about.md  ->  id "en/about"
//                src/content/pages/es/index.md  ->  id "es/index"  (home)
//
// This is the SAME folder Sveltia CMS writes to (see public/admin/config.yml),
// so the CMS and the build share one set of files. Nothing syncs between
// two systems — there is only one source of truth on disk.
const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    heroImage: z.string().optional(),
    hero: z
      .object({
        heading: z.string(),
        highlight: z.string().optional(),
        subheading: z.string().optional(),
      })
      .optional(),
    capabilities: z
      .object({
        lead: z.string(),
        groups: z.array(z.array(z.string())),
        closing: z.string(),
      })
      .optional(),
    imageColumns: z
      .array(
        z.object({
          image: z.string(),
          caption: z.string().optional(),
        }),
      )
      .min(1)
      .optional(),
    features: z
      .array(
        z.object({
          image: z.string(),
          imageAlt: z.string(),
          heading: z.string(),
          body: z.string(),
          dark: z.boolean().optional(),
          reverse: z.boolean().optional(),
          fullWidth: z.boolean().optional(),
        }),
      )
      .min(1)
      .optional(),
    textSections: z
      .array(
        z.object({
          heading: z.string().optional(),
          columns: z.array(z.string()).min(1),
          align: z.enum(["left", "center", "right"]).optional(),
          dark: z.boolean().optional(),
          fullWidth: z.boolean().optional(),
        }),
      )
      .min(1)
      .optional(),
  }),
});

export const collections = { pages };
