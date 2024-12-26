import { BlogPost } from './BlogPost'
import { getAllPosts } from '@/data/get-posts'

export const Blog = async () => {
  const posts = await getAllPosts()

  return (
    <section
      className="flex flex-col w-full items-center gap-6 select-none px-4"
      id="blog"
    >
      <h2 className="text-3xl md:text-6xl py-2 font-semibold text-center tracking-widest inline-block text-transparent bg-clip-text bg-gradient-to-r from-main-600 to-secondary-600 dark:from-main-500 dark:to-secondary-500">
        Blog Posts
      </h2>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 w-full">
        {posts.map((post) => (
          <BlogPost key={post.slug} {...post} />
        ))}
      </div>
    </section>
  )
}
