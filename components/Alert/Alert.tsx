import React, { forwardRef, useState } from 'react'
import { Info, Warning, WarningCircle, CheckCircle, X } from 'phosphor-react'
import clsx from 'clsx'
import { useInterval } from '@/hooks'
import { styles } from './Alert.styles'
import { AlertProps } from './Alert.types'

const alertIcons = {
  primary: <Info size={20} />,
  gray: <Info size={20} />,
  info: <Info size={20} />,
  error: <WarningCircle size={20} />,
  warning: <Warning size={20} />,
  success: <CheckCircle size={20} />,
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
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
    },
    ref
  ) => {
    const allClassNames = clsx(
      styles.base,
      styles.colors[color][variant],
      closeButton && 'xs:pr-12',
      className
    )
    const [timer, setTimer] = useState<number>(0)
    const [pause, setPause] = useState<boolean>(false)

    useInterval(() => {
      if (!open) return

      if (!pause) {
        setTimer((prevState) => prevState + 1)

        if (autoHideDuration && timer === autoHideDuration / 1000) {
          onClose && onClose()
        }
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
        ref={ref}
        {...rest}
      >
        <div
          className={allClassNames}
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
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
)

Alert.displayName = 'Alert'

export default Alert
