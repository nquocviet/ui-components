import { useState } from 'react'
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect'

const randomId = (): string => Math.random().toString(36).slice(2, 11)

const useId = (): string => {
  const [uuid, setUuid] = useState('')

  useIsomorphicLayoutEffect(() => {
    setUuid(randomId())
  }, [])

  return uuid
}

export default useId
