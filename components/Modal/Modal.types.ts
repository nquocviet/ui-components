import React, { ReactNode } from 'react'

export type ModalPaddings = 'sm' | 'md' | 'lg' | 'xl'

export type ModalProps = React.HTMLAttributes<HTMLDivElement> & {
  children: ReactNode | ReactNode[]
  open: boolean
  padding?: ModalPaddings | null
  closable?: boolean
  centered?: boolean
  preventClickOutside?: boolean
  disableScrollLock?: boolean
  zIndex?: React.CSSProperties['zIndex'] | null
  className?: string
  toggle: () => void
}
