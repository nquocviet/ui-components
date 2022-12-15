import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { styles } from './Typography.styles'
import { TypographyProps } from './Typography.types'

const Typography = forwardRef<HTMLBaseElement, TypographyProps>(
  (
    {
      children,
      variant = 'p',
      align = 'left',
      weight = 'regular',
      transform = 'none',
      fontSize = 'text-md',
      gutter = false,
      noWrap = false,
      underline = false,
      className,
      ...rest
    },
    ref
  ) => {
    const allClassNames = clsx(
      styles.aligns[align],
      styles.weights[weight],
      styles.transform[transform],
      styles.fontSizes[fontSize],
      gutter && styles.gutter,
      noWrap && styles.noWrap,
      underline &&
        'relative after:absolute after:z-negative after:w-full after:bottom-0 after:left-0 after:-translate-y-full after:border-b-4 after:border-primary-300',
      className
    )

    return React.createElement(
      variant,
      { className: allClassNames, ref, ...rest },
      children
    )
  }
)

Typography.displayName = 'Typography'

export default Typography
