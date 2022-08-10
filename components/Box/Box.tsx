import React, { forwardRef, ReactNode } from 'react'
import './Box.module.css'
import clsx from 'clsx'

type TBoxProps = {
  width?: number | string
  height?: number | string
  ratio?: number | string
  children?: ReactNode
  className?: string
} & React.HTMLAttributes<HTMLDivElement>

const Box = forwardRef<HTMLDivElement, TBoxProps>(
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
