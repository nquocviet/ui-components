import { useState, useEffect } from 'react'
import useWindowEvent from './useWindowEvent'

type ScrollPosition = {
  x: number
  y: number
}

const getScrollPosition = (): ScrollPosition => {
  return typeof window !== 'undefined'
    ? { x: window.pageXOffset, y: window.pageYOffset }
    : { x: 0, y: 0 }
}

const scrollTo = ({ x, y }: Partial<ScrollPosition>) => {
  if (typeof window !== 'undefined') {
    const scrollOptions: ScrollToOptions = { behavior: 'smooth' }

    if (typeof x === 'number') {
      scrollOptions.left = x
    }

    if (typeof y === 'number') {
      scrollOptions.top = y
    }

    window.scrollTo(scrollOptions)
  }
}

const useWindowScroll = () => {
  const [position, setPosition] = useState<ScrollPosition>({ x: 0, y: 0 })

  useWindowEvent('scroll', () => setPosition(getScrollPosition()))
  useWindowEvent('resize', () => setPosition(getScrollPosition()))

  useEffect(() => {
    setPosition(getScrollPosition())
  }, [])

  return [position, scrollTo] as const
}

export default useWindowScroll
