import { useRef, useEffect } from 'react'

const useTimeout = (
  fn: () => void,
  delay: number,
  autoInvoke: boolean = false
) => {
  const timeoutRef = useRef<number>(null)

  const start = () => {
    if (!timeoutRef.current && typeof window !== 'undefined') {
      ;(timeoutRef as any).current = window.setTimeout(() => {
        fn()
        ;(timeoutRef as any).current = null
      }, delay)
    }
  }

  const clear = () => {
    if (timeoutRef.current && typeof window !== 'undefined') {
      window.clearTimeout(timeoutRef.current)
      ;(timeoutRef as any).current = null
    }
  }

  useEffect(() => {
    if (autoInvoke) {
      start()
    }

    return clear
  }, [delay])

  return { start, clear }
}

export default useTimeout
