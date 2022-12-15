import React, { ReactNode } from 'react'

export type DotsColors =
  | 'primary'
  | 'gray'
  | 'info'
  | 'error'
  | 'warning'
  | 'success'

export type DotsProps = React.HTMLAttributes<HTMLSpanElement> & {
  size?: number
  color?: DotsColors
  children?: ReactNode
  className?: string
}
