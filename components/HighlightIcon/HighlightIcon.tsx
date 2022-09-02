import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { styles } from './HighlightIcon.styles'
import { HighlightIconProps } from './HighlightIcon.types'

const HighlightIcon = forwardRef<HTMLDivElement, HighlightIconProps>(
  ({ color = 'primary', size = 'md', icon, className, ...rest }, ref) => {
    const allClassNames = clsx(
      styles.base,
      styles.colors[color],
      styles.sizes[size]
    )

    return (
      <div className={allClassNames} ref={ref} {...rest}>
        {React.cloneElement(icon, { size: styles.iconSizes[size] })}
      </div>
    )
  }
)

HighlightIcon.displayName = 'HighlightIcon'

export default HighlightIcon
