import React, { forwardRef } from 'react'
import { BoxProps } from './Box.types'

const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ component = 'div', className, ...rest }, ref) => {
    const Element: any = component

    return <Element ref={ref} className={className} {...rest} />
  }
)

Box.displayName = 'Box'

export default Box
