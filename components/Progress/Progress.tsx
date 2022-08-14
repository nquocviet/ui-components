import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { styles } from './Progress.styles'

type TProgressLabelPlacements = 'none' | 'right' | 'bottom'

type TProgressProps = {
  value: number
  label?: string
  labelPlacement?: TProgressLabelPlacements
  className?: string
} & React.HTMLAttributes<HTMLDivElement>

const Progress = forwardRef<HTMLDivElement, TProgressProps>(
  ({ value = 0, label, labelPlacement = 'none', className, ...rest }, ref) => {
    const allClassNames = clsx(className)

    return (
      <div className={allClassNames} ref={ref} {...rest}>
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <div
              className={styles.progress}
              style={{ width: `${value}%` }}
            ></div>
          </div>
          {labelPlacement === 'right' && (
            <span className={clsx(styles.label, 'ml-3')}>{label}</span>
          )}
        </div>
        {labelPlacement === 'bottom' && (
          <span className={clsx(styles.label, 'block w-full text-right')}>
            {label}
          </span>
        )}
      </div>
    )
  }
)
Progress.displayName = 'Progress'

export default Progress
