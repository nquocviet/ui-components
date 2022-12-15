import { ReactNode } from 'react'

export type ModalConfirmTypes = 'error' | 'warning' | 'success' | 'info'

export type ModalConfirmProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string
  type?: ModalConfirmTypes
  rejectMessage?: string
  confirmMessage?: string
  children: ReactNode
  closable?: boolean
  open: boolean
  preventClickOutside?: boolean
  toggle: () => void
  onReject?: () => void
  onConfirm?: () => void
  onOpen?: () => void
  onClose?: () => void
}
