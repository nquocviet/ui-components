import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { PaperProps } from './Paper.types'
import { styles } from './Paper.styles'

const Paper = forwardRef<HTMLDivElement, PaperProps>(
  (
    {
      children,
      shadow = 'md',
      rounded = 'md',
      padding = 'md',
      withBorder,
      borderOnly,
      className,
      ...rest
    },
    ref
  ) => {
    const allClassNames = clsx(
      !borderOnly && styles.shadows[shadow],
      styles.rounded[rounded],
      styles.paddings[padding],
      (withBorder || borderOnly) && styles.border,
      className
    )

    return (
      <div className={allClassNames} ref={ref} {...rest}>
        {children}
      </div>
    )
  }
)

Paper.displayName = 'Paper'

export default Paper
