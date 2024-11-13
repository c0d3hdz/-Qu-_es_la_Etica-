import { defineCollection, z } from 'astro:content'

const temas = defineCollection({
    schema: z.object({
        unidad: z.string(),
        title: z.string(),
        description: z.string(),
    }),
})

export const collections = { temas }
