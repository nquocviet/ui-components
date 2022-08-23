import React, { forwardRef } from 'react'
import clsx from 'clsx'
import './Box.module.css'
import { BoxProps } from './Box.types'

const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ children, width, height, ratio = 1 / 1, className, ...rest }, ref) => {
    const isAbsolute = className?.includes('absolute')
    const allClassNames = clsx(
      'w-full inline-flex items-center justify-center',
      isAbsolute ? 'absolute' : 'relative',
      className
    )

    return (
      <div
        className={allClassNames}
        style={{
          ...(typeof ratio === 'number' && {
            ['--aspect-ratio' as any]: ratio,
          }),
          ...(width && { width }),
          ...(height && { height }),
        }}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    )
  }
)
Box.displayName = 'Box'

export default Box
