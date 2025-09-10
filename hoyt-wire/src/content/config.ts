import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const fantasyRecaps = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/fantasy-recaps" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    week: z.number(),
    season: z.number(),
    episode: z.string(),
    author: z.string().default('The Hoyt Wire'),
    tags: z.array(z.string()).default(['fantasy-football', 'hoyt-league']),
    featured: z.boolean().default(true),
    heroImage: z.string().optional(),
    highestScore: z.object({
      team: z.string(),
      score: z.number(),
      owner: z.string(),
    }).optional(),
    lowestScore: z.object({
      team: z.string(),
      score: z.number(),
      owner: z.string(),
    }).optional(),
  }),
});

export const collections = {
  'fantasy-recaps': fantasyRecaps,
};
