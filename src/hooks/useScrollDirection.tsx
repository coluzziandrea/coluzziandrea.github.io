import { useEffect, useState } from 'react'

export type ScrollDirection = 'UP' | 'DOWN'

export const useScrollDirection = (initialDirection: ScrollDirection) => {
  const [scrollDirection, setScrollDirection] =
    useState<ScrollDirection>(initialDirection)

  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const updateScrollDirection = () => {
      const actualScrollY = window.scrollY
      if (Math.abs(actualScrollY - lastScrollY) < 0) {
        // We haven't exceeded the threshold
        ticking = false
        return
      }

      setScrollDirection(actualScrollY > lastScrollY ? 'DOWN' : 'UP')
      lastScrollY = actualScrollY > 0 ? actualScrollY : 0
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection)
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [initialDirection])

  return scrollDirection
}
