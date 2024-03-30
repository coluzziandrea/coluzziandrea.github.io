import { Header } from '@/components/header/Header'
import { Hero } from '@/components/hero/Hero'

export default function Home() {
  return (
    <div>
      <main className="flex flex-col h-screen">
        <Header />
        <Hero />
      </main>
    </div>
  )
}
