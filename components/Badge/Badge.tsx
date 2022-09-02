import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { styles } from './Badge.styles'
import { BadgeProps } from './Badge.types'

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      variant = 'standard',
      size = 'md',
      dotSize = 'md',
      color = 'primary',
      badgeContent,
      children,
      maxCount = 99,
      placement = {
        horizontal: 'right',
        vertical: 'top',
      },
      className,
      ...rest
    },
    ref
  ) => {
    const { horizontal, vertical } = placement
    const allClassNames = clsx(
      styles.base,
      styles.colors[color][variant],
      styles.placements[horizontal][variant],
      styles.placements[vertical][variant],
      variant === 'standard' ? styles.sizes[size] : styles.dotSizes[dotSize],
      children && 'absolute'
    )

    return (
      <div
        className={clsx('inline-block relative', className)}
        ref={ref}
        {...rest}
      >
        {children && children}
        {variant === 'dot' && <span className={allClassNames}></span>}
        {variant === 'standard' && (
          <span className={allClassNames}>
            {typeof badgeContent === 'number'
              ? badgeContent > maxCount
                ? `${maxCount}+`
                : badgeContent
              : badgeContent}
          </span>
        )}
      </div>
    )
  }
)

Badge.displayName = 'Badge'

export default Badge
