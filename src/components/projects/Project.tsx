import Image, { StaticImageData } from 'next/image'

import { FaCirclePlay } from 'react-icons/fa6'

import { FaGithub } from 'react-icons/fa'

export type Project = {
  title: string
  category: string
  description: string
  image: StaticImageData
  lastUpdated: string
  technology: string
  github: string
  link: string
}

export const Project = (project: Project) => {
  return (
    <div key={project.github}>
      <div className="flex max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto dark:bg-black dark:shadow-gray-500">
        <div className="overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl">
          <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-white via-gray-100 to-transparent dark:from-black dark:via-gray-900" />
          <div className="relative cursor-pointer group z-10 px-10 pt-10 space-y-6">
            <div className="align-self-end w-full">
              <div className="h-32"></div>
              <div className="space-y-6">
                <div className="flex flex-col space-y-2 inner">
                  <a
                    className="relative flex items-center w-min flex-shrink-0 p-1 text-center rounded-full  bg-main-300 group-hover:bg-main-500   dark:bg-main-600 dark:group-hover:bg-main-800"
                    href={project.link}
                  >
                    <FaCirclePlay className="w-8 h-8" />
                    <div className="absolute transition opacity-0 duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-x-16 text-xl font-bold group-hover:pr-2">
                      Open
                    </div>
                  </a>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <div className="mb-0 text-lg text-gray-600 dark:text-gray-400">
                    {project.category}
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col">
                    <p>{project.technology}</p>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Technology:
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p>{project.lastUpdated}</p>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Last updated:
                    </div>
                  </div>
                </div>
                <div className="flex flex-col overview">
                  <div className="flex flex-col"></div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                    Overview:
                  </div>
                  <p className="text-xs text-gray-900 dark:text-gray-100 mb-6">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={project.image}
            className="absolute inset-0 transform w-full -translate-y-4 grayscale-0"
            alt="project"
          />
          <div className="flex flex-row relative pb-10 space-x-4 z-10">
            <a
              className="flex items-center py-2 px-4 rounded-full mx-auto bg-main-300 hover:bg-main-500 dark:bg-main-600 dark:hover:bg-main-800"
              href={project.github}
              target="_blank"
            >
              <FaGithub className="w-6 h-6" />
              <div className="text-sm ml-2">View on Github</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
