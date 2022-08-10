import clsx from 'clsx'
import React, { forwardRef, ReactNode } from 'react'
import { styles } from './Avatar.styles'

type TAvatarVariants = 'circular' | 'rounded' | 'square'

type TAvatarSizes =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'

type TAvatarProps = {
  variant?: TAvatarVariants
  size?: TAvatarSizes
  src?: string
  alt?: string
  children?: ReactNode
  border?: boolean
  className?: string
} & React.HTMLAttributes<HTMLDivElement & HTMLImageElement>

const Avatar = forwardRef<HTMLDivElement & HTMLImageElement, TAvatarProps>(
  (
    {
      variant = 'circular',
      size = 'md',
      src,
      alt,
      children,
      border,
      className,
      ...rest
    },
    ref
  ) => {
    const allClassNames = clsx(
      styles.base,
      styles.variants[variant],
      styles.sizes[size],
      border && styles.border.base,
      border && styles.border[size],
      className
    )

    if (src) {
      return (
        <img
          className={allClassNames}
          src={src}
          alt={alt}
          ref={ref}
          {...rest}
        />
      )
    }

    return (
      <div className={allClassNames} ref={ref} {...rest}>
        {children}
      </div>
    )
  }
)
Avatar.displayName = 'Avatar'

export default Avatar
