'use client'

import { Header } from '@/components/header/Header'
import { Hero } from '@/components/hero/Hero'
import { useState } from 'react'

export default function Home() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div>
      <main className="flex flex-col h-screen w-screen">
        <Header showMenu={showMenu} setShowMenu={setShowMenu} />
        <section className={`mt-2 ${showMenu && 'blur-sm'}`}>
          <Hero />
        </section>
      </main>
    </div>
  )
}
