import React, { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'
import { styles } from './Container.styles'

type TContainerProps = {
  children: ReactNode | ReactNode[]
  className?: string
} & React.HTMLAttributes<HTMLDivElement>

const Container = forwardRef<HTMLDivElement, TContainerProps>(
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
