'use client'

import { Header } from '@/components/header/Header'
import { Hero } from '@/components/hero/Hero'
import { WorkExperiences } from '@/components/work/WorkExperiences'
import { useState } from 'react'

export default function Home() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div>
      <main className="flex flex-col h-screen">
        <Header showMenu={showMenu} setShowMenu={setShowMenu} />
        <section
          className={`flex flex-col gap-6 mt-2 pb-4 ${showMenu && 'blur-sm'}`}
        >
          <Hero />
          <WorkExperiences />
        </section>
      </main>
    </div>
  )
}
