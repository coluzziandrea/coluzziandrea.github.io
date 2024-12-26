import { Contacts } from '@/components/contacts/Contacts'
import { Hero } from '@/components/hero/Hero'
import { Skills } from '@/components/skills/Skills'
import { Projects } from '@/components/projects/Projects'
import { Footer } from '@/components/footer/Footer'
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
      <Contacts />
      <Footer />
    </div>
  )
}

export default Home
