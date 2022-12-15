import React, { ReactNode } from 'react'

export type DrawerProps = React.HTMLAttributes<HTMLDivElement> & {
  children: ReactNode | ReactNode[]
  open: boolean
  disableScrollLock?: boolean
  width?: number
  className?: string
  toggle: () => void
}
