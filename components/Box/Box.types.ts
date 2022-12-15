import { ReactNode } from 'react'

export type BoxProps = React.HTMLAttributes<HTMLElement> & {
  children: ReactNode
  component?: string
  className?: string
}
