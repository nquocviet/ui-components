import React, { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'
import { useToggle } from '@/hooks'
import { styles } from './Toggle.styles'

type TToggleSizes = 'sm' | 'md' | 'lg'

type TToggleThemes = 'light' | 'dark'

type TToggleProps = {
  size?: TToggleSizes | number
  spacing?: number
  theme?: TToggleThemes
  label?: ReactNode
  description?: ReactNode
  className?: string
  defaultChecked?: boolean
  disabled?: boolean
  onChange:
    | (() => void)
    | ((event: React.ChangeEvent<HTMLInputElement>) => void)
} & React.HTMLAttributes<HTMLInputElement>

const Toggle = forwardRef<HTMLInputElement, TToggleProps>(
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
      <div className={clsx('inline-flex items-start gap-2', className)}>
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
            ref={ref}
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
