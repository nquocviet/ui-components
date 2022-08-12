import { useCallback, useEffect, useState } from 'react'

const useToggle = (
  initialState: boolean = false,
  reassignOnStateChange = true
): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(initialState)

  useEffect(() => {
    if (reassignOnStateChange) {
      setState(initialState)
    }
  }, [initialState])

  const toggle = useCallback((): void => setState((state) => !state), [])

  return [state, toggle]
}

export default useToggle
