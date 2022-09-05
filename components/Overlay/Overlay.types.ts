import React, { ReactNode } from 'react'

export type OverlayRounded = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type OverlayProps = {
  children?: ReactNode
  rounded?: OverlayRounded
  color?: React.CSSProperties['backgroundColor']
  opacity?: React.CSSProperties['opacity']
  zIndex?: React.CSSProperties['zIndex'] | null
  className?: string
} & React.HTMLAttributes<HTMLDivElement>
