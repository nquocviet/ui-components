import React, { forwardRef } from 'react'
import clsx from 'clsx'
import styles from './Stack.module.css'
import { StackProps } from './Stack.types'

const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {
      direction = 'row',
      align = 'center',
      justify = 'center',
      spacing = 16,
      children,
      className,
      ...rest
    },
    ref
  ) => {
    const allClassNames: string = clsx(
      styles.stack,
      styles[direction],
      styles['align-' + align],
      styles[justify],
      className
    )

    return (
      <div
        className={allClassNames}
        style={{
          ...(typeof spacing === 'number'
            ? { ['--stack-spacing' as any]: `${spacing}px` }
            : {
                ...(spacing.xs && {
                  ['--xs-stack-spacing' as any]: `${spacing.xs}px`,
                }),
                ...(spacing.sm && {
                  ['--sm-stack-spacing' as any]: `${spacing.sm}px`,
                }),
                ...(spacing.md && {
                  ['--md-stack-spacing' as any]: `${spacing.md}px`,
                }),
                ...(spacing.lg && {
                  ['--lg-stack-spacing' as any]: `${spacing.lg}px`,
                }),
                ...(spacing.xl && {
                  ['--xl-stack-spacing' as any]: `${spacing.xl}px`,
                }),
              }),
        }}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    )
  }
)

Stack.displayName = 'Stack'

export default Stack
