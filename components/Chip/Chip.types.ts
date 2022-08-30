import { ReactNode } from 'react'

export type ChipVariants = 'contained' | 'light' | 'outlined'

export type ChipSizes = 'sm' | 'md' | 'lg'

export type ChipColors =
  | 'primary'
  | 'gray'
  | 'info'
  | 'error'
  | 'warning'
  | 'success'

export type ChipProps = {
  variant?: ChipVariants
  size?: ChipSizes
  color?: ChipColors
  label: string | number
  leading?: ReactNode
  trailing?: ReactNode
  rounded?: boolean
  className?: string
  onDelete?: () => void
} & React.HTMLAttributes<HTMLDivElement>
