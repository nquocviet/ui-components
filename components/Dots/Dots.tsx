import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { DotsProps } from './Dots.types'

const dotsColors = {
  primary: 'bg-primary-300',
  gray: 'bg-gray-800',
  info: 'bg-blue-600',
  error: 'bg-red-600',
  warning: 'bg-yellow-600',
  success: 'bg-green-600',
}

const Dots = forwardRef<HTMLSpanElement, DotsProps>(
  (
    { size = 6, color = 'primary', children, className, style, ...rest },
    ref
  ) => {
    return (
      <span
        className={clsx(
          'inline-block rounded-full',
          dotsColors[color],
          className
        )}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          ...style,
        }}
        ref={ref}
        {...rest}
      >
        {children}
      </span>
    )
  }
)

Dots.displayName = 'Dots'

export default Dots
