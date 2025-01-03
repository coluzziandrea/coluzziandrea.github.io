import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ReactGA from 'react-ga4'
import './globals.css'
import { Header } from '@/components/header/Header'
import { Contacts } from '@/components/contacts/Contacts'
import { Footer } from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Andrea Coluzzi',
  description: 'Andrea Coluzzi personal software engineer portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  ReactGA.initialize('G-TTXVV60N2Z')

  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white text-black dark:bg-black dark:text-white`}
      >
        <main className="flex flex-col h-screen">
          <Header />

          {children}

          <Contacts />
          <Footer />
        </main>
      </body>
    </html>
  )
}
