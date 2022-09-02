import { forwardRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { useIsomorphicLayoutEffect } from '@/hooks'
import { PortalProps } from './Portal.types'

const createWrapperAndAppendToBody = (containerId) => {
  const containerElement = document.createElement('div')

  containerElement.setAttribute('id', containerId)
  document.body.appendChild(containerElement)

  return containerElement
}

const Portal = forwardRef<HTMLBodyElement | HTMLDivElement, PortalProps>(
  ({ children, containerId }, ref) => {
    const [containerElement, setContainerElement] =
      useState<null | HTMLElement>(null)

    useIsomorphicLayoutEffect(() => {
      let element = document.getElementById(containerId)
      let systemCreated = false

      if (!element) {
        systemCreated = true
        element = createWrapperAndAppendToBody(containerId)
      }

      setContainerElement(element)

      return () => {
        if (systemCreated && element && element.parentNode) {
          element.parentNode.removeChild(element)
        }
      }
    }, [containerId])

    if (containerElement === null) return null

    return ReactDOM.createPortal(children, containerElement)
  }
)

Portal.displayName = 'Portal'

export default Portal
