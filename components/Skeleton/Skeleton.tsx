import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { styles } from './Skeleton.styles'
import { SkeletonProps } from './Skeleton.types'

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      variant = 'rectangular',
      width,
      height,
      animation = true,
      className,
      ...rest
    },
    ref
  ) => {
    const allClassNames = clsx(
      styles.base,
      styles.variants[variant],
      animation && 'animate-pulse',
      className
    )

    return (
      <div
        className={allClassNames}
        ref={ref}
        style={{
          ...(width && { width }),
          ...(height && { height }),
        }}
        {...rest}
      />
    )
  }
)

Skeleton.displayName = 'Skeleton'

export default Skeleton
