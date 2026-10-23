import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders"; // Importación correcta del cargador glob

const posts = defineCollection({
    loader: glob({ 
        pattern: "**/*.{md,mdx}", // Busca todos los archivos .md y .mdx
        base: "./src/content/posts" 
    }),
    schema: z.object({
        titulo: z.string(),
        autor: z.string().default("Angel"),
        fecha: z.coerce.date(), 
        tags: z.array(z.string())
    })
});

// Exportamos 'posts' (en plural) para que coincida con el nombre de tu carpeta
export const collections = { posts };