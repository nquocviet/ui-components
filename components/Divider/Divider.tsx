import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { styles } from './Divider.styles'
import { DividerProps } from './Divider.types'

const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    { children, type = 'single', align = 'center', className, ...rest },
    ref
  ) => {
    const allClassNames = clsx(
      styles.base,
      styles.types[type],
      styles.aligns[align],
      className
    )

    return (
      <div className={allClassNames} ref={ref} {...rest}>
        {children ? children : <span className='-mx-2'></span>}
      </div>
    )
  }
)

Divider.displayName = 'Divider'

export default Divider
