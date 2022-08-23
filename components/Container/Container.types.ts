import { ReactNode } from 'react'

export type ContainerProps = {
  children: ReactNode | ReactNode[]
  className?: string
} & React.HTMLAttributes<HTMLDivElement>
