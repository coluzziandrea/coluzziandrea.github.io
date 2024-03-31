import kezurya from '../../../public/assets/projects/kezurya.png'
import dietisy from '../../../public/assets/projects/dietisy.png'
import { Project } from './Project'
import { FaArrowRight } from 'react-icons/fa'

const projects: Project[] = [
  {
    title: 'Kezurya',
    category: 'Rock Band Landing Page',
    description:
      'Website for a rock band, built with Angular and RxJS. The website is fully responsive and has a dark mode feature. The website is hosted on GitHub Pages.',
    image: kezurya,
    lastUpdated: 'Dec 2023',
    technology: 'Angular',
    github: 'https://github.com/kezurya/kezurya.github.io',
    link: 'https://kezurya.github.io/',
  },
  {
    title: 'Dietisy',
    category: 'Health Mobile App',
    description:
      'Android Application built for people who want to track their diet progresses. Dietisy is an application that allows you to constantly monitor your diet progress by monitoring your weight, body measurements and height.',
    image: dietisy,
    lastUpdated: 'Nov 2020',
    technology: 'Android',
    github: 'https://github.com/coluzziandrea/Dietisy',
    link: 'https://play.google.com/store/apps/details?id=com.andreacoluzzi.dietisy',
  },
]

export const Projects = () => {
  return (
    <section
      className="flex flex-col w-full items-center gap-6 select-none px-4"
      id="projects"
    >
      <h2 className="text-3xl md:text-6xl py-2 font-semibold text-center tracking-widest inline-block text-transparent bg-clip-text bg-gradient-to-r from-main-600 to-secondary-600 dark:from-main-500 dark:to-secondary-500">
        Projects
      </h2>

      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>

      <div>
        <a
          href="https://github.com/coluzziandrea?tab=repositories"
          className="flex flex-row items-baseline gap-2 text-main-500 hover:text-main-600"
        >
          <p>More projects</p>
          <FaArrowRight />
        </a>
      </div>
    </section>
  )
}
