import { ReactNode } from 'react'

export type ToggleSizes = 'sm' | 'md' | 'lg'

export type ToggleThemes = 'light' | 'dark'

export type ToggleProps = {
  size?: ToggleSizes | number
  spacing?: number
  theme?: ToggleThemes
  label?: ReactNode
  description?: ReactNode
  className?: string
  defaultChecked?: boolean
  disabled?: boolean
  onChange:
    | (() => void)
    | ((event: React.ChangeEvent<HTMLInputElement>) => void)
} & React.HTMLAttributes<HTMLInputElement>
