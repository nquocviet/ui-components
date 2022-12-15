import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { useToggle } from '@/hooks'
import { styles } from './Toggle.styles'
import { ToggleProps } from './Toggle.types'

const Toggle = forwardRef<HTMLDivElement, ToggleProps>(
  (
    {
      size = 'md',
      spacing = 2,
      theme = 'dark',
      label,
      description,
      className,
      checked,
      defaultChecked = false,
      disabled = false,
      onChange,
      ...rest
    },
    ref
  ) => {
    const allClassNames = clsx(styles.base, styles.themes[theme])
    const [toggle, setToggle] = useToggle(defaultChecked)

    return (
      <div
        className={clsx('inline-flex items-start gap-2', className)}
        ref={ref}
      >
        <label
          className='inline-block'
          style={{
            ['--toggle-switch-size' as any]: `${styles.sizes[size] || size}px`,
            ['--toggle-switch-spacing' as any]: `${spacing}px`,
          }}
        >
          <input
            type='checkbox'
            className='peer hidden'
            onChange={(event) => {
              if (!disabled) {
                setToggle()
                onChange(event)
              }
            }}
            checked={typeof checked === 'boolean' ? checked : toggle}
            disabled={disabled}
            {...rest}
          />
          <div className={allClassNames}>
            <div
              className={clsx(
                'h-toggle-switch w-toggle-switch rounded-full bg-white shadow-sm transition-transform',
                toggle && 'translate-x-full'
              )}
            ></div>
          </div>
        </label>
        {label && (
          <div
            className={clsx(
              'flex flex-col items-start',
              styles.fontSizes[size]
            )}
          >
            {label && <p className='font-medium text-gray-800'>{label}</p>}
            {description && <p className='text-gray-500'>{description}</p>}
          </div>
        )}
      </div>
    )
  }
)

Toggle.displayName = 'Toggle'

export default Toggle
