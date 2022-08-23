import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { styles } from './Avatar.styles'
import { AvatarProps } from './Avatar.types'

const Avatar = forwardRef<HTMLDivElement & HTMLImageElement, AvatarProps>(
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
