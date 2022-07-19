import React, { ReactNode, useState } from 'react'
import { Info, Warning, WarningCircle, CheckCircle, X } from 'phosphor-react'
import clsx from 'clsx'
import { useInterval } from '@/hooks'
import { styles } from './Alert.styles'

type TAlertColors =
  | 'primary'
  | 'gray'
  | 'info'
  | 'error'
  | 'warning'
  | 'success'

type TAlertVariants = 'contained' | 'outlined'

type TAlertPlacements = {
  horizontal: 'center' | 'left' | 'right'
  vertical: 'bottom' | 'top'
}

type TAlertProps = {
  color?: TAlertColors
  variant?: TAlertVariants
  icon?: JSX.Element | boolean
  title: ReactNode
  description?: ReactNode
  action?: ReactNode
  width?: string
  open?: boolean
  closeButton?: boolean
  floating?: boolean
  autoHideDuration?: number
  placement?: TAlertPlacements
  zIndex?: number | null
  className?: string
  onClose?: () => void
} & React.HTMLAttributes<HTMLDivElement>

const alertIcons = {
  primary: <Info size={20} />,
  gray: <Info size={20} />,
  info: <Info size={20} />,
  error: <WarningCircle size={20} />,
  warning: <Warning size={20} />,
  success: <CheckCircle size={20} />,
}

const Alert = ({
  color = 'primary',
  variant = 'outlined',
  icon = true,
  title,
  description,
  action,
  width = 'auto',
  open = true,
  closeButton = false,
  floating = false,
  autoHideDuration = 0,
  placement = {
    horizontal: 'right',
    vertical: 'top',
  },
  zIndex = null,
  className,
  onClose,
  ...rest
}: TAlertProps) => {
  const allClassNames = clsx(
    styles.base,
    styles.colors[color][variant],
    closeButton && 'xs:pr-12',
    className
  )
  const [timer, setTimer] = useState<number>(0)

  useInterval(() => {
    setTimer((prevState) => prevState + 1)

    if (autoHideDuration && timer === autoHideDuration / 1000) {
      onClose && onClose()
    }
  })

  return (open && (
    <div
      className={clsx(
        'w-alert',
        floating && styles.placements[placement.horizontal],
        floating && styles.placements[placement.vertical],
        floating && 'fixed p-4',
        !zIndex && floating && 'z-sticky'
      )}
      style={{
        ...(width && { ['--alert-width' as any]: width }),
        ...(zIndex && { zIndex }),
      }}
      {...rest}
    >
      <div className={allClassNames}>
        <div className='shrink-0'>
          {typeof icon === 'boolean' ? icon && alertIcons[color] : icon}
        </div>
        <div className='flex flex-col items-start gap-3'>
          <div className='flex flex-col gap-1 text-sm'>
            <div className='font-semibold'>{title}</div>
            <div>{description}</div>
          </div>
          {action}
        </div>
        {closeButton && (
          <button
            type='button'
            className='absolute top-4 right-4'
            onClick={() => onClose && onClose()}
          >
            <X size={20} />
          </button>
        )}
      </div>
    </div>
  )) as JSX.Element
}

export default Alert
