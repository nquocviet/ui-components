import React, { forwardRef, ReactNode, useState } from 'react'
import { X } from 'phosphor-react'
import clsx from 'clsx'
import { useInterval } from '@/hooks'
import { styles } from './Snackbar.styles'

type TSnackbarPlacements = {
  horizontal: 'center' | 'left' | 'right'
  vertical: 'bottom' | 'top'
}

type TSnackbarProps = {
  message: ReactNode
  open?: boolean
  autoHideDuration?: number
  placement?: TSnackbarPlacements
  zIndex?: number | null
  className?: string
  onClose?: () => void
  onUndo?: () => void
} & React.HTMLAttributes<HTMLDivElement>

const Snackbar = forwardRef<HTMLDivElement, TSnackbarProps>(
  (
    {
      message,
      open,
      autoHideDuration = 6000,
      placement = {
        horizontal: 'left',
        vertical: 'bottom',
      },
      zIndex = null,
      className,
      onClose,
      onUndo,
      ...rest
    },
    ref
  ) => {
    const allClassNames = clsx(
      styles.placements[placement.horizontal],
      styles.placements[placement.vertical],
      'fixed p-4',
      !zIndex && 'z-sticky',
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
        className={allClassNames}
        style={{
          ...(zIndex && { zIndex }),
        }}
        ref={ref}
        {...rest}
      >
        <div
          className={styles.base}
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
          <div className='font-semibold py-1.5 flex-1'>{message}</div>
          <div className='flex items-center -mb-0.5 -mr-1.5'>
            {onUndo && (
              <button
                type='button'
                className='ml-1 p-1.5 text-primary-400 font-semibold uppercase'
                onClick={() => {
                  onUndo()
                  onClose && onClose()
                }}
              >
                Undo
              </button>
            )}
            {onClose && (
              <button
                type='button'
                className='ml-1 p-1.5'
                onClick={() => onClose()}
              >
                <X size={20} />
              </button>
            )}
          </div>
        </div>
      </div>
    )) as JSX.Element
  }
)
Snackbar.displayName = 'Snackbar'

export default Snackbar