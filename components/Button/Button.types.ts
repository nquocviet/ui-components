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

type TBaseProps = {
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
  onClick?:
    | (() => void)
    | ((
        event: React.MouseEvent<
          HTMLButtonElement | HTMLAnchorElement | HTMLLabelElement,
          MouseEvent
        >
      ) => void)
}

export type ButtonAsButton = TBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof TBaseProps> & {
    as?: 'button'
  }

export type ButtonAsLink = TBaseProps &
  Omit<LinkProps, keyof TBaseProps> & {
    as: 'a'
  }

export type ButtonAsLabel = TBaseProps &
  Omit<React.LabelHTMLAttributes<HTMLLabelElement>, keyof TBaseProps> & {
    as: 'label'
  }

export type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsLabel
