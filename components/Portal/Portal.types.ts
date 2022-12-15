import React, { ReactNode } from 'react'

export type PortalProps = React.HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  target?: HTMLElement | string
  className?: string
}
