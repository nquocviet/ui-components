import { ReactNode } from 'react'

export type TooltipPlacements =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'right'
  | 'right-top'
  | 'right-bottom'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'
  | 'left'
  | 'left-top'
  | 'left-bottom'

export type TooltipThemes = 'light' | 'dark'

export type TooltipProps = {
  children: ReactNode
  theme?: TooltipThemes
  title: ReactNode
  description?: ReactNode
  autoAdjustOverflow?: boolean
  placement?: TooltipPlacements
  maxWidth?: number
  mouseEnterDelay?: number
  zIndex?: number | null
  className?: string
} & React.HTMLAttributes<HTMLDivElement>
