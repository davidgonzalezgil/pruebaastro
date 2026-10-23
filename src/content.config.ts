import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
    loader: glob({
        pattern: '**/*.md',
        base: './src/content/posts'
    }),
    schema: z.object({
        titulo: z.string(),
        autor: z.string().optional(),
        fecha: z.string(),
        tags: z.array(z.string()).optional()
    })
});

export const collections = { posts };