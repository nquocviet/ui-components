import React, { ReactNode } from 'react'

export type AspectRatioProps = {
  children: ReactNode
  ratio?: number
  className?: string
} & React.HTMLAttributes<HTMLDivElement>
