import { ReactNode } from 'react'

export type AlertColors =
  | 'primary'
  | 'gray'
  | 'info'
  | 'error'
  | 'warning'
  | 'success'

export type AlertVariants = 'contained' | 'outlined'

export type AlertPlacements = {
  horizontal: 'center' | 'left' | 'right'
  vertical: 'bottom' | 'top'
}

export type AlertProps = {
  color?: AlertColors
  variant?: AlertVariants
  icon?: JSX.Element | boolean
  title: ReactNode
  description?: ReactNode
  action?: ReactNode
  width?: string
  open?: boolean
  closeButton?: boolean
  floating?: boolean
  autoHideDuration?: number
  placement?: AlertPlacements
  zIndex?: React.CSSProperties['zIndex'] | null
  className?: string
  onClose?: () => void
} & React.HTMLAttributes<HTMLDivElement>
