import { ReactNode } from 'react'

export type PopoverPlacements = {
  horizontal: 'center' | 'left' | 'right'
  vertical: 'bottom' | 'top'
}

export type PopoverProps = React.HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  popover: ReactNode
  open: boolean
  placement?: PopoverPlacements
  duration?: number
  zIndex?: React.CSSProperties['zIndex'] | null
  className?: string
  containerClassName?: string
}
