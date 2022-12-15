import React, { ReactElement } from 'react'

export type DropdownPlacements = {
  horizontal: 'center' | 'left' | 'right'
  vertical: 'bottom' | 'top'
}

export type DropdownProps = React.HTMLAttributes<HTMLDivElement> & {
  children: ReactElement
  overlay: ReactElement
  opened?: boolean
  placement?: DropdownPlacements
  openOnScroll?: boolean
  activeOnOpen?: boolean
  className?: string
  toggle?: (state?: boolean) => void
}
