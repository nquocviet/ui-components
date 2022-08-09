import React, { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'
import { styles } from './Typography.styles'

type TStyles = {
  [key: string]: React.CSSProperties
}

type TTypographyVariants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'div'

type TTypographyAligns = 'center' | 'left' | 'right' | 'justify'

type TTypographyFontSizes =
  | 'text-2xs'
  | 'text-xs'
  | 'text-sm'
  | 'text-md'
  | 'text-lg'
  | 'text-xl'
  | 'display-xs'
  | 'display-sm'
  | 'display-md'
  | 'display-lg'
  | 'display-xl'
  | 'display-2xl'

type TTypographyProps = {
  children: ReactNode
  variant?: TTypographyVariants
  align?: TTypographyAligns
  fontSize?: TTypographyFontSizes
  gutter?: boolean
  noWrap?: boolean
  className?: string
  style?: React.CSSProperties | TStyles
} & React.HTMLAttributes<HTMLBaseElement>

const Typography = forwardRef<HTMLBaseElement, TTypographyProps>(
  (
    {
      children,
      variant = 'p',
      align = 'left',
      fontSize = 'text-md',
      gutter = false,
      noWrap = false,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const allClassNames = clsx(
      styles.align[align],
      styles.fontSizes[fontSize],
      gutter && styles.gutter,
      noWrap && styles.noWrap,
      className
    )

    return React.createElement(
      variant,
      { className: allClassNames, style, ref, ...rest },
      children
    )
  }
)
Typography.displayName = 'Typography'

export default Typography
