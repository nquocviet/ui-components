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
      fontSize = 'text-md',
      gutter = false,
      noWrap = false,
      className,
      ...rest
    },
    ref
  ) => {
    const allClassNames = clsx(
      styles.aligns[align],
      styles.weights[weight],
      styles.fontSizes[fontSize],
      gutter && styles.gutter,
      noWrap && styles.noWrap,
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
