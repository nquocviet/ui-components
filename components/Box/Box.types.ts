import { ReactNode } from 'react'

export type BoxProps = {
  width?: number | string
  height?: number | string
  ratio?: number | string
  children?: ReactNode
  className?: string
} & React.HTMLAttributes<HTMLDivElement>
