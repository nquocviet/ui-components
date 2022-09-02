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
            checked={toggle}
            disabled={disabled}
            {...rest}
          />
          <div className={allClassNames}>
            <div
              className={clsx(
                'w-toggle-switch h-toggle-switch bg-white rounded-full shadow-sm transition-transform',
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
            {label && <p className='text-gray-700 font-medium'>{label}</p>}
            {description && <p className='text-gray-500'>{description}</p>}
          </div>
        )}
      </div>
    )
  }
)

Toggle.displayName = 'Toggle'

export default Toggle
