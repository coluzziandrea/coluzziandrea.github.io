'use client'

import Image from 'next/image'
import logoWhite from '../../../public/assets/logo_white.png'
import logoBlack from '../../../public/assets/logo_black.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { useEffect, useRef, useState } from 'react'

export const Header = () => {
  const headerRef = useRef<HTMLElement | null>(null)
  const scrollDirection = useScrollDirection('DOWN')
  const [scrolledToTop, setScrolledToTop] = useState(true)

  const [showMenu, setShowMenu] = useState(false)

  const handleScroll = () => {
    if (!headerRef.current) return
    setScrolledToTop(window.scrollY < headerRef.current.clientHeight)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const needsOverlay = !scrolledToTop && scrollDirection === 'UP'

  return (
    <header
      className={`w-full select-none ${
        needsOverlay
          ? 'fixed top-0 z-10 bg-white text-black drop-shadow-xl shadow-gray-200 dark:shadow-main-600 dark:bg-main-900 dark:text-white'
          : ''
      } `}
      ref={headerRef}
    >
      <div className="relative flex w-full h-20 px-4 py-2 justify-between items-center">
        <div className="h-full w-28 py-1">
          <Image
            src={logoWhite}
            className="h-full w-full hidden dark:block "
            alt="logo"
          />
          <Image
            src={logoBlack}
            className="h-full w-full block dark:hidden"
            alt="logo"
          />
        </div>
        <div className="block md:hidden" onClick={() => setShowMenu(!showMenu)}>
          <GiHamburgerMenu className="w-6 h-6" />
        </div>

        {showMenu && (
          <div className="absolute left-0 top-20 z-10 w-screen animate-fadeslidein bg-white text-black dark:bg-main-900 dark:text-white">
            <div className=""></div>
            <p>Sono il menu!</p>
          </div>
        )}
      </div>
    </header>
  )
}
