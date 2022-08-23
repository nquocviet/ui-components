import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { styles } from './Container.styles'
import { ContainerProps } from './Container.types'

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, ...rest }, ref) => {
    const allClassNames = clsx(styles.base, className)

    return (
      <div className={allClassNames} ref={ref} {...rest}>
        {children}
      </div>
    )
  }
)
Container.displayName = 'Container'

export default Container
