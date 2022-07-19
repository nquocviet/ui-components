import React, { ReactNode } from 'react'
import Link, { LinkProps } from 'next/link'
import clsx from 'clsx'
import { styles } from './Button.styles'

type TButtonTypes = 'button' | 'submit' | 'reset'

type TButtonSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

type TButtonColors =
  | 'primary'
  | 'gray'
  | 'info'
  | 'error'
  | 'warning'
  | 'success'

type TButtonVariants =
  | 'contained'
  | 'gradient'
  | 'light'
  | 'outlined'
  | 'text'
  | 'link'

type TBaseProps = {
  children: ReactNode | ReactNode[]
  type?: TButtonTypes
  size?: TButtonSizes
  color?: TButtonColors
  variant?: TButtonVariants
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

type TButtonAsButton = TBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof TBaseProps> & {
    as?: 'button'
  }

type TButtonAsLink = TBaseProps &
  Omit<LinkProps, keyof TBaseProps> & {
    as: 'a'
  }

type TButtonAsLabel = TBaseProps &
  Omit<React.LabelHTMLAttributes<HTMLLabelElement>, keyof TBaseProps> & {
    as: 'label'
  }

type TButtonProps = TButtonAsButton | TButtonAsLink | TButtonAsLabel

const Button = ({
  children,
  type = 'button',
  size = 'md',
  color = 'primary',
  variant = 'contained',
  leading,
  trailing,
  className,
  target = '_self',
  href = '',
  onlyIcon = false,
  fluid,
  rounded = false,
  onClick,
  ...rest
}: TButtonProps) => {
  const allClassNames = clsx(
    styles.base,
    styles.colors[color][variant],
    styles.fontSizes[size],
    styles.width[fluid ? 'fluid' : 'auto'],
    variant !== 'link' &&
      (onlyIcon ? styles.iconSizes[size] : styles.sizes[size]),
    rounded && 'rounded-full',
    className
  )

  if (rest.as === 'a') {
    return (
      <Link href={href}>
        <a
          className={allClassNames}
          target={target}
          onClick={onClick}
          {...rest}
        >
          {leading && leading}
          {children}
          {trailing && trailing}
        </a>
      </Link>
    )
  }

  if (rest.as === 'label') {
    return (
      <label
        role='button'
        className={allClassNames}
        onClick={onClick}
        {...rest}
      >
        {leading && leading}
        {children}
        {trailing && trailing}
      </label>
    )
  }

  return (
    <button className={allClassNames} type={type} onClick={onClick} {...rest}>
      {leading && leading}
      {children}
      {trailing && trailing}
    </button>
  )
}

export default Button
