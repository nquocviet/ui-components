import { useRef, useState, useEffect, RefObject } from 'react'

type UseFocusWithinOptions = {
  onFocus?(event: FocusEvent): void
  onBlur?(event: FocusEvent): void
}

const containsRelatedTarget = (event: FocusEvent) => {
  if (
    event.currentTarget instanceof HTMLElement &&
    event.relatedTarget instanceof HTMLElement
  ) {
    return event.currentTarget.contains(event.relatedTarget)
  }

  return false
}

const useFocusWithin = <T extends HTMLElement>({
  onBlur,
  onFocus,
}: UseFocusWithinOptions = {}): {
  ref: RefObject<T>
  focused: boolean
} => {
  const ref = useRef<T>(null)
  const [focused, setFocused] = useState(false)
  const focusedRef = useRef(false)

  const handleFocused = (value: boolean) => {
    setFocused(value)
    focusedRef.current = value
  }

  const handleFocusIn = (event: FocusEvent) => {
    if (!focusedRef.current) {
      handleFocused(true)
      onFocus?.(event)
    }
  }

  const handleFocusOut = (event: FocusEvent) => {
    if (focusedRef.current && !containsRelatedTarget(event)) {
      handleFocused(false)
      onBlur?.(event)
    }
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('focusin', handleFocusIn)
      ref.current.addEventListener('focusout', handleFocusOut)

      return () => {
        ref.current?.removeEventListener('focusin', handleFocusIn)
        ref.current?.removeEventListener('focusout', handleFocusOut)
      }
    }

    return undefined
  }, [handleFocusIn, handleFocusOut])

  return { ref, focused }
}

export default useFocusWithin
