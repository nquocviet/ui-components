import { forwardRef, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { useIsomorphicLayoutEffect } from '@/hooks'
import { PortalProps } from './Portal.types'

const Portal = forwardRef<HTMLDivElement, PortalProps>(
  ({ children, target, className, ...rest }, ref) => {
    const [mounted, setMounted] = useState(false)
    const targetRef = useRef<any>()

    useIsomorphicLayoutEffect(() => {
      setMounted(true)
      targetRef.current = !target
        ? document.createElement('div')
        : typeof target === 'string'
        ? document.querySelector(target)
        : target

      if (!target) {
        document.body.appendChild(targetRef.current)
      }

      return () => {
        !target && document.body.removeChild(targetRef.current)
      }
    }, [target])

    if (!mounted) return null

    return ReactDOM.createPortal(
      <div className={className} ref={ref} {...rest}>
        {children}
      </div>,
      targetRef.current
    )
  }
)

Portal.displayName = 'Portal'

export default Portal
