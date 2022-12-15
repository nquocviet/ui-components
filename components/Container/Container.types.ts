import { ReactNode } from 'react'

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  children: ReactNode | ReactNode[]
  className?: string
}
