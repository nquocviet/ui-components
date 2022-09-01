import { useEffect } from 'react'

const usePageLeave = (onPageLeave: () => void) => {
  useEffect(() => {
    document.documentElement.addEventListener('mouseleave', onPageLeave)

    return () =>
      document.documentElement.removeEventListener('mouseleave', onPageLeave)
  }, [])
}

export default usePageLeave
