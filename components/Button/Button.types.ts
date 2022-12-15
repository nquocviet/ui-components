import { LinkProps } from 'next/link'
import { ReactNode } from 'react'

export type ButtonTypes = 'button' | 'submit' | 'reset'

export type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export type ButtonColors =
  | 'primary'
  | 'gray'
  | 'info'
  | 'error'
  | 'warning'
  | 'success'

export type ButtonVariants =
  | 'contained'
  | 'gradient'
  | 'light'
  | 'outlined'
  | 'text'
  | 'link'

export type ButtonBaseProps = {
  children: ReactNode | ReactNode[]
  type?: ButtonTypes
  size?: ButtonSizes
  color?: ButtonColors
  variant?: ButtonVariants
  leading?: ReactNode
  trailing?: ReactNode
  className?: string
  target?: string
  href?: string
  onlyIcon?: boolean
  fluid?: boolean
  rounded?: boolean
  disabled?: boolean
  nowrap?: boolean
  onClick?: () => void
}

export type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    as?: 'button'
  }

export type ButtonAsLink = ButtonBaseProps &
  Omit<LinkProps, keyof ButtonBaseProps> & {
    as: 'a'
  }

export type ButtonAsLabel = ButtonBaseProps &
  Omit<React.LabelHTMLAttributes<HTMLLabelElement>, keyof ButtonBaseProps> & {
    as: 'label'
  }

export type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsLabel
