import { ReactNode } from 'react'

export type BoxProps = {
  children: ReactNode
  component?: string
  className?: string
} & React.HTMLAttributes<HTMLDivElement>
