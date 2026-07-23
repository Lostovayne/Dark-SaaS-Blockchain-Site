import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    author: z.object({
      name: z.string(),
      title: z.string(),
      image: z.string(),
    }),
  }),
});

const positions = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/positions" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    remote: z.boolean(),
    type: z.string(),
  }),
});

export const collections = { blog, positions };
