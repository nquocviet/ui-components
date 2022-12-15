import React, { ReactNode } from 'react'

export type AspectRatioProps = React.HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  ratio?: number
  className?: string
}
