import { ReactNode } from 'react'

export type BadgeVariants = 'standard' | 'dot'

export type BadgeSizes = 'sm' | 'md' | 'lg'

export type BadgeDotSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export type BadgePlacements = {
  horizontal: 'left' | 'right'
  vertical: 'bottom' | 'top'
}

export type BadgeColors =
  | 'primary'
  | 'gray'
  | 'info'
  | 'error'
  | 'warning'
  | 'success'

export type BadgeProps = {
  variant?: BadgeVariants
  size?: BadgeSizes
  dotSize?: BadgeDotSizes
  color?: BadgeColors
  badgeContent: ReactNode
  children: ReactNode
  maxCount?: number
  placement?: BadgePlacements
  className?: string
} & React.HTMLAttributes<HTMLDivElement>
