import { ReactNode } from 'react'

export type BoxProps = {
  children: ReactNode
  className?: string
} & React.HTMLAttributes<HTMLDivElement>
