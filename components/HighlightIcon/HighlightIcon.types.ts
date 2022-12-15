import React, { ReactElement } from 'react'

export type HighlightIconSizes = 'sm' | 'md' | 'lg'

export type HighlightIconColors =
  | 'primary'
  | 'gray'
  | 'info'
  | 'error'
  | 'warning'
  | 'success'

export type HighlightIconProps = React.HTMLAttributes<HTMLDivElement> & {
  color?: HighlightIconColors
  size?: HighlightIconSizes
  icon: React.ElementType
  className?: string
}
