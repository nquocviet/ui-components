import React, { ReactNode } from 'react'
import Link, { LinkProps } from 'next/link'
import clsx from 'clsx'

type ButtonTypes = 'button' | 'submit' | 'reset'

type ButtonSizes = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

type ButtonColors = 'primary' | 'gray' | 'blue' | 'red' | 'yellow' | 'green'

type ButtonVariants = 'contained' | 'light' | 'outlined' | 'text' | 'link'

type BaseProps = {
  children: ReactNode | ReactNode[]
  type?: ButtonTypes
  size?: ButtonSizes
  color?: ButtonColors
  variant?: ButtonVariants
  prefix?: ReactNode
  suffix?: ReactNode
  className?: string
  target?: string
  href?: string
  onlyIcon?: boolean
  fluid?: boolean
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

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: 'button'
  }

type ButtonAsLink = BaseProps &
  Omit<LinkProps, keyof BaseProps> & {
    as: 'a'
  }

type ButtonAsLabel = BaseProps &
  Omit<React.LabelHTMLAttributes<HTMLLabelElement>, keyof BaseProps> & {
    as: 'label'
  }

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsLabel

const buttonStyles = {
  primary: {
    contained:
      'enabled:bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 bg-[length:200%_auto] text-white outline-transparent enabled:hover:bg-[right_100%] disabled:bg-primary-200 disabled:outline-primary-200',
    light:
      'bg-primary-50 text-primary-700 outline-primary-50 enabled:hover:bg-primary-100 enabled:hover:outline-primary-100 disabled:bg-primary-25 disabled:outline-primary-25 disabled:text-primary-300',
    outlined:
      'bg-white text-primary-700 outline-primary-500 enabled:hover:bg-primary-50 disabled:outline-primary-200 disabled:text-primary-300',
    text: 'bg-white text-primary-700 outline-white enabled:hover:outline-primary-50 enabled:hover:bg-primary-50 disabled:text-gray-300',
    link: 'bg-white text-primary-700 outline-white enabled:hover:text-primary-800 focus:text-primary-900 disabled:text-gray-300',
  },
  gray: {
    contained:
      'enabled:bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 bg-[length:200%_auto] text-white outline-transparent enabled:hover:bg-[right_100%] disabled:bg-gray-300 disabled:outline-gray-300',
    light:
      'bg-gray-100 text-gray-700 outline-gray-100 enabled:hover:bg-gray-200 enabled:hover:outline-gray-200 disabled:bg-gray-50 disabled:outline-gray-50 disabled:text-gray-300',
    outlined:
      'bg-white text-gray-700 outline-gray-500 enabled:hover:bg-gray-100 disabled:outline-gray-200 disabled:text-gray-300',
    text: 'bg-white text-gray-700 outline-white enabled:hover:outline-gray-50 enabled:hover:bg-gray-50 disabled:text-gray-300',
    link: 'bg-white text-gray-700 outline-white enabled:hover:text-gray-800 focus:text-gray-900 disabled:text-gray-300',
  },
  blue: {
    contained:
      'enabled:bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 bg-[length:200%_auto] text-white outline-transparent enabled:hover:bg-[right_100%] disabled:bg-blue-200 disabled:outline-blue-200',
    light:
      'bg-blue-50 text-blue-500 outline-blue-50 enabled:hover:bg-blue-100 enabled:hover:outline-blue-100 disabled:bg-blue-25 disabled:outline-blue-25 disabled:text-blue-300',
    outlined:
      'bg-white text-blue-600 outline-blue-500 enabled:hover:bg-blue-50 disabled:outline-blue-200 disabled:text-blue-300',
    text: 'bg-white text-blue-600 outline-white enabled:hover:outline-blue-50 enabled:hover:bg-blue-50 disabled:text-gray-300',
    link: 'bg-white text-blue-600 outline-white enabled:hover:text-blue-700 focus:text-blue-800 disabled:text-gray-300',
  },
  red: {
    contained:
      'enabled:bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-[length:200%_auto] text-white outline-transparent enabled:hover:bg-[right_100%] disabled:bg-red-200 disabled:outline-red-200',
    light:
      'bg-red-50 text-red-700 outline-red-50 enabled:hover:bg-red-100 enabled:hover:outline-red-100 disabled:bg-red-25 disabled:outline-red-25 disabled:text-red-300',
    outlined:
      'bg-white text-red-700 outline-red-500 enabled:hover:bg-red-50 disabled:outline-red-200 disabled:text-red-300',
    text: 'bg-white text-red-700 outline-white enabled:hover:outline-red-50 enabled:hover:bg-red-50 disabled:text-gray-300',
    link: 'bg-white text-red-700 outline-white enabled:hover:text-red-800 focus:text-red-900 disabled:text-gray-300',
  },
  yellow: {
    contained:
      'enabled:bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 bg-[length:200%_auto] text-white outline-transparent enabled:hover:bg-[right_100%] disabled:bg-yellow-200 disabled:outline-yellow-200',
    light:
      'bg-yellow-50 text-yellow-600 outline-yellow-50 enabled:hover:bg-yellow-100 enabled:hover:outline-yellow-100 disabled:bg-yellow-25 disabled:outline-yellow-25 disabled:text-yellow-200',
    outlined:
      'bg-white text-yellow-600 outline-yellow-400 enabled:hover:bg-yellow-50 disabled:outline-yellow-100 disabled:text-yellow-200',
    text: 'bg-white text-yellow-600 outline-white enabled:hover:outline-yellow-50 enabled:hover:bg-yellow-50 disabled:text-gray-300',
    link: 'bg-white text-yellow-600 outline-white enabled:hover:text-yellow-700 focus:text-yellow-800 disabled:text-gray-300',
  },
  green: {
    contained:
      'enabled:bg-gradient-to-r from-green-600 via-green-500 to-green-600 bg-[length:200%_auto] text-white outline-transparent enabled:hover:bg-[right_100%] disabled:bg-green-200 disabled:outline-green-200',
    light:
      'bg-green-50 text-green-600 outline-green-50 enabled:hover:bg-green-100 enabled:hover:outline-green-100 disabled:bg-green-25 disabled:outline-green-25 disabled:text-green-300',
    outlined:
      'bg-white text-green-600 outline-green-500 enabled:hover:bg-green-50 disabled:outline-green-200 disabled:text-green-300',
    text: 'bg-white text-green-600 outline-white enabled:hover:outline-green-50 enabled:hover:bg-green-50 disabled:text-gray-300',
    link: 'bg-white text-green-600 outline-white enabled:hover:text-green-700 focus:text-green-800 disabled:text-gray-300',
  },
}

const buttonSizes = {
  sm: 'px-3.5 py-2 rounded-lg',
  md: 'px-4 py-2.5 rounded-lg',
  lg: 'px-4.5 py-2.5 rounded-lg',
  xl: 'px-5 py-3 rounded-lg',
  '2xl': 'px-6 py-4 rounded-lg',
}

const buttonIconSizes = {
  sm: 'p-2 rounded-lg',
  md: 'p-2.5 rounded-lg',
  lg: 'p-3 rounded-lg',
  xl: 'p-3.5 rounded-lg',
  '2xl': 'p-4 rounded-lg',
}

const buttonFontSizes = {
  sm: 'text-sm',
  md: 'text-sm',
  lg: 'text-md',
  xl: 'text-md',
  '2xl': 'text-lg',
}

const Button = ({
  children,
  type = 'button',
  size = 'md',
  color = 'primary',
  variant = 'contained',
  prefix,
  suffix,
  className,
  target = '_self',
  href = '',
  onlyIcon = false,
  fluid,
  onClick,
  ...rest
}: ButtonProps) => {
  const defaultClassName =
    'relative inline-flex justify-center items-center gap-2 outline outline-1 outline-offset-[-1px] cursor-pointer font-medium transition-all duration-500 disabled:cursor-not-allowed'
  const allClassNames = clsx(
    defaultClassName,
    className,
    buttonStyles[color][variant],
    buttonFontSizes[size],
    variant !== 'link' && onlyIcon ? buttonIconSizes[size] : buttonSizes[size],
    fluid ? 'w-full' : 'w-auto'
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
          {prefix && prefix}
          {children}
          {suffix && suffix}
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
        {prefix && prefix}
        {children}
        {suffix && suffix}
      </label>
    )
  }

  return (
    <button className={allClassNames} type={type} onClick={onClick} {...rest}>
      {prefix && prefix}
      {children}
      {suffix && suffix}
    </button>
  )
}

export default Button
