import { ReactNode } from 'react'

export type ButtonGroupSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export type ButtonGroupColors =
  | 'primary'
  | 'gray'
  | 'info'
  | 'error'
  | 'warning'
  | 'success'

export type ButtonGroupVariants = 'contained' | 'light' | 'outlined' | 'text'

export type ButtonGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: ButtonGroupSizes
  color?: ButtonGroupColors
  variant?: ButtonGroupVariants
  children: ReactNode[]
  fluid?: boolean
  disabled?: boolean
  className?: string
}
