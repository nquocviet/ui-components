import React, { ReactNode } from 'react'
import { SpinnerSizes } from '../Spinner/Spinner.types'

export type LoadingOverlayTypes = 'dash' | 'dots'

export type LoadingOverlayProps = React.HTMLAttributes<HTMLDivElement> & {
  type?: LoadingOverlayTypes
  visible?: boolean
  loader?: ReactNode
  loaderProps?: any
  loaderSizes?: SpinnerSizes
  overlayOpacity?: React.CSSProperties['opacity'] | null
  overlayBlur?: React.CSSProperties['backdropFilter'] | null
  overlayColor?: React.CSSProperties['backgroundColor'] | null
  overlayZIndex?: React.CSSProperties['zIndex'] | null
  zIndex?: React.CSSProperties['zIndex'] | null
  className?: string
}
