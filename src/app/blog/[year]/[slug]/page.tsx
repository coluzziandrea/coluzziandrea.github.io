import { getAllPosts } from '@/data/get-posts'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
    year: post.year,
  }))
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; year: string }>
}) {
  const { slug, year } = await params
  const posts = await getAllPosts()
  const post = posts.find((p) => p.slug === slug && p.year === year)

  return (
    <ReactMarkdown
      components={{
        a: ({ ...props }) => (
          <a
            {...props}
            target="_blank"
            className="underline hover:bg-primary-lighter hover:rounded-xl hover:p-2 dark:hover:bg-primary-dark"
          />
        ),
        h1: ({ ...props }) => (
          <h1
            {...props}
            className="text-primary dark:text-primary-lighter text-3xl font-bold"
          />
        ),
        h2: ({ ...props }) => (
          <h2
            {...props}
            className="text-primary-dark dark:text-primary-light text-xl font-bold"
          />
        ),
      }}
      rehypePlugins={[rehypeRaw]}
      allowedElements={[
        'p',
        'b',
        'i',
        'em',
        'strong',
        'a',
        'li',
        'ul',
        'ol',
        'br',
        'h1',
        'h2',
        'img',
        'code',
        'pre',
        'blockquote',
      ]}
    >
      {post?.content}
    </ReactMarkdown>
  )
}
