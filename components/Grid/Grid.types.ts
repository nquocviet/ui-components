import { ReactNode } from 'react'

export type GridAlignment =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'stretch'
  | 'baseline'

export type GridJustify =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

export type GridSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export type GridProps = React.HTMLAttributes<HTMLDivElement> & {
  align?: GridAlignment
  justify?: GridJustify
  row?: boolean
  column?: boolean
  spacing?: number
  expanded?: boolean
  xl?: GridSizes
  lg?: GridSizes
  md?: GridSizes
  sm?: GridSizes
  xs?: GridSizes
  children: ReactNode | ReactNode[]
  className?: string
}
