'use client'

import { FaCirclePlay, FaGithub } from 'react-icons/fa6'

export type BlogPostProps = {
  title: string
  subtitle: string
  url: string
  description: string
  coverImageUrl: string
  publishedAt: string
  views: number
  tags: string[]
}

export const BlogPost = (blogPost: BlogPostProps) => {
  const date = new Date(blogPost.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div key={blogPost.url}>
      <div className="flex  max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto dark:bg-black dark:shadow-gray-500">
        <div className="overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl">
          <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-white via-gray-100 to-transparent dark:from-black dark:via-gray-900" />
          <div className="relative cursor-pointer group z-10 px-10 pt-10 space-y-6">
            <div className="align-self-end w-full">
              <div className="h-32"></div>
              <div className="space-y-6">
                <div className="flex flex-col space-y-2 inner">
                  <a
                    className="relative flex items-center w-min flex-shrink-0 p-1 text-center rounded-full  bg-main-300 group-hover:bg-main-500   dark:bg-main-600 dark:group-hover:bg-main-800"
                    href={blogPost.url}
                  >
                    <FaCirclePlay className="w-8 h-8" />
                    <div className="absolute transition opacity-0 duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-x-16 text-xl font-bold group-hover:pr-2">
                      View
                    </div>
                  </a>
                  <h3 className="text-2xl font-bold">{blogPost.title}</h3>
                  <div className="mb-0 text-lg text-gray-600 dark:text-gray-400">
                    {blogPost.subtitle}
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col">
                    <p>{date}</p>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Created:
                    </div>
                  </div>
                </div>
                <div className="flex flex-col overview">
                  <div className="flex flex-col"></div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                    Brief:
                  </div>
                  <p className="text-xs text-gray-900 dark:text-gray-100 mb-6">
                    {blogPost.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={blogPost.coverImageUrl}
            className="absolute inset-0 transform w-full -translate-y-4 grayscale-0"
            alt="project"
          />
          <div className="grid grid-cols-3 gap-2 relative px-2 pb-10 z-10">
            {blogPost.tags.map((tag) => (
              <div
                key={tag}
                className=" items-center justify-center px-2 py-1 text-xs font-semibold text-white bg-main-500 rounded-full"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
