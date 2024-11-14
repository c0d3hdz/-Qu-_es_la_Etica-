import { defineCollection, z } from 'astro:content'

const temas = defineCollection({
    schema: z
        .object({
            unidad: z.string(),
            title: z.string(),
            description: z.string(),
            id: z.string(),
            slug: z.string().optional(),
        })
        .transform(tema => ({
            ...tema,
            slug:
                tema.slug ||
                tema.id
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/(^-|-$)+/g, ''),
        })),
})

export const collections = { temas }
