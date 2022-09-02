import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { AspectRatioProps } from './AspectRatio.types'
import './AspectRatio.module.css'

const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ children, ratio = 1 / 1, className, ...rest }, ref) => {
    const isAbsolute = className?.includes('absolute')
    const allClassNames = clsx(className, isAbsolute ? 'absolute' : 'relative')

    return (
      <div
        className={allClassNames}
        style={{
          ['--aspect-ratio' as any]: ratio,
        }}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    )
  }
)

AspectRatio.displayName = 'AspectRatio'

export default AspectRatio
