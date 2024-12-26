import matter from 'gray-matter'
import { join } from 'path'
import fs from 'fs'
import { Post, postSchema, PostWithContent } from '@/model/post'
import { getFilesRecursive } from '@/utils/get-files-recursive'

type RawPost = {
  data: {
    [key: string]: string
  }
  content: string
}

const POSTS_PATH = join(process.cwd(), '/src/blog')

async function getPostsFilePaths(): Promise<string[]> {
  const allFiles = await getFilesRecursive(POSTS_PATH)
  return allFiles.filter((path) => /\.mdx?$/.test(path))
}

export function getRawPost(fullPath: string): RawPost {
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(fileContents)
  return { data, content }
}

export function getPostFromSlug(filePath: string): PostWithContent {
  const { data, content } = getRawPost(filePath)
  const slug = data.slug
  const maybePost = postSchema.safeParse({ ...data, slug })
  if (!maybePost.success) {
    throw new Error(
      `Error parsing ${slug}: ${maybePost.error.errors
        .map((e) => `${e.path} - ${e.message}`)
        .join(', ')}`
    )
  }
  return { ...maybePost.data, content }
}

export async function getAllPosts(): Promise<PostWithContent[]> {
  const filePaths = await getPostsFilePaths()
  return filePaths
    .map((filePath: string) => getPostFromSlug(filePath))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}
