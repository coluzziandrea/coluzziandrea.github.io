'use client'

import { useEffect, useState } from 'react'
import { BlogPost, BlogPostProps } from './BlogPost'
import { FaArrowRight } from 'react-icons/fa'
import createBlogClient from '@/clients/blog/blog-client'
import { gql } from '@apollo/client'
import { Skeleton } from 'primereact/skeleton'

const buildPostFromHashnode = (post: any): BlogPostProps => {
  return {
    title: post.node.title,
    subtitle: post.node.subtitle,
    url: post.node.url,
    description: post.node.brief,
    coverImageUrl: post.node.coverImage.url,
    publishedAt: post.node.publishedAt,
    views: post.node.views,
    tags: post.node.tags.map((tag: any) => tag.name),
  }
}

function BlogPostSkeleton() {
  return (
    <div role="status" className="flex flex-col min-w-56 gap-2 animate-pulse ">
      <div className="flex items-center justify-center w-full h-60 bg-gray-300 rounded  dark:bg-gray-700">
        <svg
          className="w-20 h-20 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div className="w-full">
        <div className="h-2.5 w-full bg-gray-200 rounded-full dark:bg-gray-700  mb-4"></div>
        <div className="h-2 w-full bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 w-full bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 w-full bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 w-full bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 w-full bg-gray-200 rounded-full dark:bg-gray-700"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export const Blog = () => {
  const [posts, setPosts] = useState<BlogPostProps[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const client = createBlogClient()

      // fetch from hashnode graphql api
      const { data } = await client.query({
        query: gql`
          query {
            publication(host: "blog.coluzziandrea.com") {
              id
              posts(first: 10) {
                edges {
                  node {
                    title
                    subtitle
                    url
                    brief
                    views
                    publishedAt
                    coverImage {
                      url
                    }
                    tags {
                      name
                    }
                  }
                }
              }
            }
          }
        `,
      })

      setPosts(data.publication.posts.edges.map(buildPostFromHashnode))
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <section
      className="flex flex-col w-full items-center gap-6 select-none px-4"
      id="blog"
    >
      <h2 className="text-3xl md:text-6xl py-2 font-semibold text-center tracking-widest inline-block text-transparent bg-clip-text bg-gradient-to-r from-main-600 to-secondary-600 dark:from-main-500 dark:to-secondary-500">
        Latest Blog Posts
      </h2>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 w-full">
        {loading &&
          Array.from({ length: 6 }).map((_, index) => (
            <BlogPostSkeleton key={index} />
          ))}

        {!loading && posts.map((post) => <BlogPost key={post.url} {...post} />)}
      </div>

      <div>
        <a
          href="https://blog.coluzziandrea.com/"
          className="flex flex-row items-baseline gap-2 text-main-500 hover:text-main-600"
        >
          <p>More posts</p>
          <FaArrowRight />
        </a>
      </div>
    </section>
  )
}
