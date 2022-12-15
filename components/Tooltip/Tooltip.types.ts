import { ReactNode } from 'react'

export type TooltipPlacements = {
  horizontal: 'center' | 'left' | 'right'
  vertical: 'bottom' | 'top'
}

export type TooltipThemes = 'light' | 'dark'

export type TooltipProps = React.HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  theme?: TooltipThemes
  content: ReactNode
  description?: ReactNode
  autoAdjustOverflow?: boolean
  placement?: TooltipPlacements
  maxWidth?: number
  mouseEnterDelay?: number
  zIndex?: React.CSSProperties['zIndex'] | null
  className?: string
  containerClassName?: string
}
