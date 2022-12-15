import { ReactNode } from 'react'

export type RatingPrecisions = 'full' | 'half'

export type RatingSizes = 'sm' | 'md' | 'lg' | 'xl'

export type RatingProps = React.HTMLAttributes<HTMLDivElement> & {
  defaultValue?: number
  precision?: RatingPrecisions
  size?: RatingSizes
  label?: string
  disabled?: boolean
  readOnly?: boolean
  max?: number
  color?: React.CSSProperties['color']
  className?: string
  icon?: ReactNode
  emptyIcon?: ReactNode
  leading?: ReactNode
  trailing?: ReactNode
  onChange?: (rate: number) => void
  onHover?: (rate: number) => void
}
