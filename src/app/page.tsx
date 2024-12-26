import { Hero } from '@/components/hero/Hero'
import { Skills } from '@/components/skills/Skills'
import { Projects } from '@/components/projects/Projects'
import { WorkExperiences } from '@/components/work/WorkExperiences'
import { Blog } from '@/components/blog/Blog'

const Home = async () => {
  return (
    <div className={`flex flex-col gap-6 mt-2 pb-4`}>
      <Hero />
      <Skills />
      <WorkExperiences />
      <Blog />
      <Projects />
    </div>
  )
}

export default Home
