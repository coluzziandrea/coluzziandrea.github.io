'use client'

import Image from 'next/image'
import logoWhite from '../../../public/assets/logo_white.png'
import logoBlack from '../../../public/assets/logo_black.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { useEffect, useRef, useState } from 'react'
import { HeaderNavBar } from './nav-bar/HeaderNavBar'

export type HeaderProps = {
  showMenu: boolean
  setShowMenu: (menuOpen: boolean) => void
}

export const Header = ({ showMenu, setShowMenu }: HeaderProps) => {
  const headerRef = useRef<HTMLElement | null>(null)
  const scrollDirection = useScrollDirection('DOWN')
  const [scrolledToTop, setScrolledToTop] = useState(true)

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

  const shadowClasses = 'drop-shadow-xl shadow-gray-200 dark:shadow-gray-900'

  const colorClasses = 'bg-white text-black dark:bg-black dark:text-white'

  return (
    <header
      className={`w-full select-none z-10 ${
        needsOverlay ? `fixed top-0  ${colorClasses} ${shadowClasses}` : ''
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

        <div className="hidden md:block">
          <HeaderNavBar orientation="horizontal" />
        </div>

        <div className="block md:hidden" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? (
            <IoMdClose className="animate-in spin-in w-6 h-6" />
          ) : (
            <GiHamburgerMenu className="animate-out spin-out w-6 h-6" />
          )}
        </div>
        {showMenu && (
          <div
            className={`absolute left-0 top-20 z-20 w-screen h-fit animate-in slide-in-from-top ${colorClasses} ${shadowClasses}`}
          >
            <HeaderNavBar orientation="vertical" />
          </div>
        )}
      </div>
    </header>
  )
}
