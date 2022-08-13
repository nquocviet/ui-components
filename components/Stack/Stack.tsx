import React, { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './Stack.module.css'

type TStackDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'

type TStackAlignment =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'stretch'
  | 'baseline'

type TStackJustify =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

type TStackSpacing = {
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
}

type TStackProps = {
  direction?: TStackDirection
  align?: TStackAlignment
  justify?: TStackJustify
  spacing?: number | TStackSpacing
  children: ReactNode[]
  className?: string
} & React.HTMLAttributes<HTMLDivElement>

const Stack = forwardRef<HTMLDivElement, TStackProps>(
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
