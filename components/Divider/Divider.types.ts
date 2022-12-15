import { ReactNode } from 'react'

export type DividerTypes = 'single' | 'dual' | 'filled'

export type DividerAligns = 'left' | 'center' | 'right'

export type DividerProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode
  type?: DividerTypes
  align?: DividerAligns
  className?: string
}
