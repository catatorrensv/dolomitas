import { defineCollection, z } from 'astro:content';

const days = defineCollection({
  type: 'content',
  schema: z.object({
    day: z.number(),
    date: z.string(),
    weekday: z.string(),
    title: z.string(),
    location: z.string(),
    summary: z.string().optional(),
    cover: z.string().optional(),
    draft: z.boolean().default(true),
  }),
});

export const collections = { days };
