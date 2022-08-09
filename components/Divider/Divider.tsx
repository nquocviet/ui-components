import React, { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'
import { styles } from './Divider.styles'

type TDividerTypes = 'single' | 'dual' | 'filled'

type TDividerAligns = 'left' | 'center' | 'right'

type TDividerProps = {
  children?: ReactNode
  type?: TDividerTypes
  align?: TDividerAligns
  className?: string
} & React.HTMLAttributes<HTMLDivElement>

const Divider = forwardRef<HTMLDivElement, TDividerProps>(
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
