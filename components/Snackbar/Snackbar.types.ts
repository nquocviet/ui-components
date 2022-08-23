import { ReactNode } from 'react'

export type SnackbarPlacements = {
  horizontal: 'center' | 'left' | 'right'
  vertical: 'bottom' | 'top'
}

export type SnackbarProps = {
  message: ReactNode
  open?: boolean
  autoHideDuration?: number
  placement?: SnackbarPlacements
  zIndex?: number | null
  className?: string
  onClose?: () => void
  onUndo?: () => void
} & React.HTMLAttributes<HTMLDivElement>
