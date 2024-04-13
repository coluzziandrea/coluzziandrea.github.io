'use client'

import { Contacts } from '@/components/contacts/Contacts'
import { Header } from '@/components/header/Header'
import { Hero } from '@/components/hero/Hero'
import { Skills } from '@/components/skills/Skills'
import { Projects } from '@/components/projects/Projects'
import { Footer } from '@/components/footer/Footer'
import { WorkExperiences } from '@/components/work/WorkExperiences'
import { useEffect, useState } from 'react'
import { Blog } from '@/components/blog/Blog'
import ReactGA from 'react-ga4'

export default function Home() {
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname })
  }, [])

  return (
    <div>
      <div className="flex flex-col h-screen">
        <Header showMenu={showMenu} setShowMenu={setShowMenu} />
        <main
          className={`flex flex-col gap-6 mt-2 pb-4 ${showMenu && 'blur-sm'}`}
        >
          <Hero />
          <Skills />
          <WorkExperiences />
          <Blog />
          <Projects />
          <Contacts />
          <Footer />
        </main>
      </div>
    </div>
  )
}
