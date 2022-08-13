import React, { forwardRef, ReactNode } from 'react'
import styles from './Grid.module.css'
import clsx from 'clsx'

type TGridAlignment =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'stretch'
  | 'baseline'

type TGridJustify =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

type TGridSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

type TGridProps = {
  align?: TGridAlignment
  justify?: TGridJustify
  row?: boolean
  column?: boolean
  spacing?: number
  expanded?: boolean
  xl?: TGridSizes
  lg?: TGridSizes
  md?: TGridSizes
  sm?: TGridSizes
  xs?: TGridSizes
  children: ReactNode | ReactNode[]
  className?: string
} & React.HTMLAttributes<HTMLDivElement>

const Grid = forwardRef<HTMLDivElement, TGridProps>(
  (
    {
      align,
      justify,
      row,
      column,
      spacing = 16,
      expanded,
      xl,
      lg,
      md,
      sm,
      xs,
      children,
      className,
      ...rest
    },
    ref
  ) => {
    const isRow: boolean = row || !column
    const allClassNames: string = clsx(
      !isRow ? styles.column : styles.row,
      isRow && expanded && styles.expanded,
      isRow && justify && styles[justify],
      isRow && align && styles['align-' + align],
      !isRow && xs && styles['xs-' + xs],
      !isRow && sm && styles['sm-' + sm],
      !isRow && md && styles['md-' + md],
      !isRow && lg && styles['lg-' + lg],
      !isRow && xl && styles['xl-' + xl],
      className
    )

    return (
      <div
        className={allClassNames}
        style={{
          ...(isRow && {
            ['--grid-spacing' as any]: `${spacing / 2}px`,
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
Grid.displayName = 'Grid'

export default Grid
