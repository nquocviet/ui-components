import React, { forwardRef } from 'react'
import clsx from 'clsx'
import styles from './Stack.module.css'
import { StackProps } from './Stack.types'

const BREAKPOINTS = ['xs', 'sm', 'md', 'lg', 'xl']
const DEFAULT_SPACING = 16

const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {
      direction = 'row',
      align = 'flex-start',
      justify = 'flex-start',
      wrap = 'wrap',
      spacing = 16,
      fluid,
      children,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const allClassNames: string = clsx(
      styles.stack,
      styles[direction],
      styles['align-' + align],
      styles[justify],
      styles[wrap],
      fluid ? 'w-full' : 'w-auto',
      className
    )

    const defineSpacingVariables = () => {
      const allSpacings = BREAKPOINTS.reduce((prev, curr, index) => {
        const breakpoint = BREAKPOINTS[index - 1]

        if (!spacing[curr] && typeof spacing[curr] !== 'number') {
          if (!prev[breakpoint] && typeof prev[breakpoint] !== 'number') {
            return { ...prev, [curr]: DEFAULT_SPACING }
          }

          return { ...prev, [curr]: spacing[breakpoint] || prev[breakpoint] }
        }

        return { ...prev, [curr]: spacing[curr] }
      }, {})

      return Object.entries(allSpacings).reduce((prev, curr) => {
        const [key, value] = curr

        return { ...prev, [`--${key}-stack-spacing` as any]: `${value}px` }
      }, {})
    }

    const stylesComponent = {
      ...style,
      ...(typeof spacing === 'number'
        ? { ['--stack-spacing' as any]: `${spacing}px` }
        : defineSpacingVariables()),
    }

    return (
      <div
        className={allClassNames}
        ref={ref}
        style={stylesComponent}
        {...rest}
      >
        {children}
      </div>
    )
  }
)

Stack.displayName = 'Stack'

export default Stack
