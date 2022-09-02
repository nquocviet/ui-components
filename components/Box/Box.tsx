import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { BoxProps } from './Box.types'

const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ children, className, ...rest }, ref) => {
    const isAbsolute = className?.includes('absolute')
    const allClassNames = clsx(
      'w-full inline-flex items-center justify-center',
      isAbsolute ? 'absolute' : 'relative',
      className
    )

    return (
      <div className={allClassNames} ref={ref} {...rest}>
        {children}
      </div>
    )
  }
)

Box.displayName = 'Box'

export default Box
