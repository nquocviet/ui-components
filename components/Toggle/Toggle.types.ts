import { ReactNode } from 'react'

export type ToggleSizes = 'sm' | 'md' | 'lg'

export type ToggleThemes = 'light' | 'dark'

export type ToggleProps = React.HTMLAttributes<HTMLInputElement> & {
  size?: ToggleSizes | number
  spacing?: number
  theme?: ToggleThemes
  label?: ReactNode
  description?: ReactNode
  className?: string
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  onChange:
    | (() => void)
    | ((event: React.ChangeEvent<HTMLInputElement>) => void)
}
