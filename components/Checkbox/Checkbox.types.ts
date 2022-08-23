import { ReactNode } from 'react'

export type CheckboxSizes = 'xs' | 'sm' | 'md' | 'lg'

export type CheckboxThemes = 'light' | 'dark'

export type CheckboxProps = {
  size?: CheckboxSizes | number
  iconSize?: number
  theme?: CheckboxThemes
  value?: string
  label?: ReactNode
  description?: ReactNode
  className?: string
  rounded?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  onChange?:
    | (() => void)
    | ((event: React.ChangeEvent<HTMLInputElement>) => void)
} & React.HTMLAttributes<HTMLInputElement>
