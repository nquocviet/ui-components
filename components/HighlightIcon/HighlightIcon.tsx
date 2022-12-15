import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { styles } from './HighlightIcon.styles'
import { HighlightIconProps } from './HighlightIcon.types'

const HighlightIcon = forwardRef<HTMLSpanElement, HighlightIconProps>(
  ({ color = 'primary', size = 'md', icon, className, ...rest }, ref) => {
    const allClassNames = clsx(
      styles.base,
      styles.colors[color],
      styles.sizes[size],
      className
    )
    const Icon = icon

    return (
      <span className={allClassNames} ref={ref} {...rest}>
        <Icon size={styles.iconSizes[size]} />
      </span>
    )
  }
)

HighlightIcon.displayName = 'HighlightIcon'

export default HighlightIcon
