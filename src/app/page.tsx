'use client'

import { Contacts } from '@/components/contacts/Contacts'
import { Header } from '@/components/header/Header'
import { Hero } from '@/components/hero/Hero'
import { Skills } from '@/components/skills/Skills'
import { Projects } from '@/components/projects/Projects'
import { WorkExperiences } from '@/components/work/WorkExperiences'
import { useState } from 'react'

export default function Home() {
  const [showMenu, setShowMenu] = useState(false)

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
          <Projects />
          <Contacts />
        </main>
      </div>
    </div>
  )
}
