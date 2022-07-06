import React, { ReactNode, useState } from 'react'
import { Info, Warning, WarningCircle, CheckCircle, X } from 'phosphor-react'
import clsx from 'clsx'
import { useInterval } from '@/hooks'

type AlertColors = 'primary' | 'gray' | 'info' | 'error' | 'warning' | 'success'

type AlertVariants = 'contained' | 'outlined'

type AlertPositions = {
  horizontal: 'center' | 'left' | 'right'
  vertical: 'bottom' | 'top'
}

type AlertProps = {
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
  position?: AlertPositions
  className?: string
  onClose?: () => void
} & React.HTMLAttributes<HTMLDivElement>

const alertColors = {
  primary: {
    contained: 'bg-primary-600 border-primary-600 text-white',
    outlined: 'bg-primary-25 border-primary-300 text-primary-600',
  },
  gray: {
    contained: 'bg-gray-700 border-gray-700 text-white',
    outlined: 'bg-gray-25 border-gray-300 text-gray-600',
  },
  info: {
    contained: 'bg-info-600 border-info-600 text-white',
    outlined: 'bg-info-25 border-info-300 text-info-600',
  },
  error: {
    contained: 'bg-error-600 border-error-600 text-white',
    outlined: 'bg-error-25 border-error-300 text-error-600',
  },
  warning: {
    contained: 'bg-warning-500 border-warning-500 text-white',
    outlined: 'bg-warning-25 border-warning-300 text-warning-600',
  },
  success: {
    contained: 'bg-success-600 border-success-600 text-white',
    outlined: 'bg-success-25 border-success-300 text-success-600',
  },
}

const alertIcons = {
  primary: <Info size={20} />,
  gray: <Info size={20} />,
  info: <Info size={20} />,
  error: <WarningCircle size={20} />,
  warning: <Warning size={20} />,
  success: <CheckCircle size={20} />,
}

const alertPositions = {
  left: 'left-0',
  right: 'right-0',
  center: 'left-1/2 -translate-x-1/2 w-full xs:w-2/3 md:w-auto',
  top: 'top-0',
  bottom: 'bottom-0',
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
  position = {
    horizontal: 'right',
    vertical: 'top',
  },
  className,
  onClose,
  ...rest
}: AlertProps) => {
  const [timer, setTimer] = useState<number>(0)
  const defaultClassName =
    'relative flex flex-col gap-2 py-4 pl-4 pr-4 border rounded-lg xs:flex-row'
  const allClassNames = clsx(
    defaultClassName,
    alertColors[color][variant],
    closeButton && 'xs:pr-12',
    className
  )

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
        floating && alertPositions[position.horizontal],
        floating && alertPositions[position.vertical],
        floating && 'fixed z-sticky p-4'
      )}
      style={{
        ...(width && { ['--alert-width' as any]: width }),
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
