import { ReactNode } from 'react'

export type DividerTypes = 'single' | 'dual' | 'filled'

export type DividerAligns = 'left' | 'center' | 'right'

export type DividerProps = {
  children?: ReactNode
  type?: DividerTypes
  align?: DividerAligns
  className?: string
} & React.HTMLAttributes<HTMLDivElement>
