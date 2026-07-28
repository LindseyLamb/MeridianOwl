import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const observatory = defineCollection({
    loader: glob({
        base: "./src/content/observatory",
        pattern: "**/*.{md,mdx}",
    }),

    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishedDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        author: z.string().default("Lindsey Lamb"),
        category: z.string(),
        tags: z.array(z.string()).default([]),
        featured: z.boolean().default(false),
        draft: z.boolean().default(false),
    }),
});

export const collections = {
    observatory,
};