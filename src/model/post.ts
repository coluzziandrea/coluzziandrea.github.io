import { z } from 'zod'

export const POST_FIELDS = [
  'title',
  'slug',
  'date',
  'subtitle',
  'cover',
  'tags',
  'year',
]

export const postSchema = z.object({
  slug: z.string(),
  date: z.string(),
  cover: z.string(),
  title: z.string(),
  subtitle: z.string(),
  tags: z.array(z.string()),
  year: z.string(),
})

export type Post = z.infer<typeof postSchema>
export type PostWithContent = Post & { content: string }
