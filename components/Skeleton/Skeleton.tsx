import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { styles } from './Skeleton.styles'

type TSkeletonVariants = 'text' | 'circular' | 'rectangular' | 'rounded'

type TSkeletonProps = {
  variant?: TSkeletonVariants
  width?: number | string
  height?: number | string
  animation?: boolean
  className?: string
} & React.HTMLAttributes<HTMLDivElement>

const Skeleton = forwardRef<HTMLDivElement, TSkeletonProps>(
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
        style={{ width, height }}
        {...rest}
      />
    )
  }
)
Skeleton.displayName = 'Skeleton'

export default Skeleton
