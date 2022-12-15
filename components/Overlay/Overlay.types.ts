import React, { ReactNode } from 'react'

export type OverlayRounded = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type OverlayProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode
  rounded?: OverlayRounded
  color?: React.CSSProperties['backgroundColor']
  opacity?: React.CSSProperties['opacity']
  blur?: React.CSSProperties['backdropFilter']
  zIndex?: React.CSSProperties['zIndex'] | null
  className?: string
}
