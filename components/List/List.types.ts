import React, { ReactNode } from 'react'

export type ListProps = React.HTMLAttributes<
  HTMLUListElement | HTMLOListElement
> & {
  children: ReactNode
  type?: 'ordered' | 'unordered' | 'none'
  withPadding?: boolean
  className?: string
}
