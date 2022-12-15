import { ReactNode } from 'react'

export type CheckboxSizes = 'xs' | 'sm' | 'md' | 'lg'

export type CheckboxThemes = 'light' | 'dark'

export type CheckboxProps = React.HTMLAttributes<HTMLInputElement> & {
  size?: CheckboxSizes | number
  iconSize?: number
  theme?: CheckboxThemes
  value?: string | number
  label?: ReactNode
  description?: ReactNode
  className?: string
  rounded?: boolean
  nowrap?: boolean
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  onChange?:
    | (() => void)
    | ((event: React.ChangeEvent<HTMLInputElement>) => void)
}
