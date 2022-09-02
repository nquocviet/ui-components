import React, { ReactElement } from 'react'

export type HighlightIconSizes = 'sm' | 'md' | 'lg'

export type HighlightIconColors =
  | 'primary'
  | 'gray'
  | 'info'
  | 'error'
  | 'warning'
  | 'success'

export type HighlightIconProps = {
  color?: HighlightIconColors
  size?: HighlightIconSizes
  icon: ReactElement
  className?: string
} & React.HTMLAttributes<HTMLDivElement>
