import { ReactNode } from 'react'

export type RadioSizes = 'xs' | 'sm' | 'md' | 'lg'

export type RadioThemes = 'light' | 'dark'

export type RadioProps = {
  size?: RadioSizes | number
  iconSize?: number
  theme?: RadioThemes
  name: string
  value: string
  label?: ReactNode
  description?: ReactNode
  className?: string
  disabled?: boolean
  onChange:
    | (() => void)
    | ((event: React.ChangeEvent<HTMLInputElement>) => void)
} & React.HTMLAttributes<HTMLInputElement>
