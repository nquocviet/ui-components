import { ReactNode } from 'react'

export type StackDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'

export type StackAlignment =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'stretch'
  | 'baseline'

export type StackJustify =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

export type StackSpacing = {
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
}

export type StackProps = {
  direction?: StackDirection
  align?: StackAlignment
  justify?: StackJustify
  spacing?: number | StackSpacing
  children: ReactNode[]
  className?: string
} & React.HTMLAttributes<HTMLDivElement>
