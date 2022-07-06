import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { useToggle } from '@/hooks'

type ToggleSizes = 'sm' | 'md' | 'lg'

type ToggleThemes = 'light' | 'dark'

type ToggleProps = {
  size?: ToggleSizes | number
  spacing?: number
  theme?: ToggleThemes
  label?: string
  description?: string
  className?: string
  checked?: boolean
  disabled?: boolean
  onChange:
    | (() => void)
    | ((event: React.ChangeEvent<HTMLInputElement>) => void)
} & React.HTMLAttributes<HTMLInputElement>

const toggleSwitchSizes = {
  sm: 16,
  md: 20,
  lg: 24,
}

const toggleTextSizes = {
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-md',
}

const toggleThemes = {
  light:
    'bg-primary-50 hover:bg-primary-100 peer-checked:bg-primary-200 peer-enabled:peer-checked:hover:bg-primary-300',
  dark: 'bg-gray-100 hover:bg-gray-200 peer-checked:bg-primary-600 peer-enabled:peer-checked:hover:bg-primary-700',
}

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      size = 'md',
      spacing = 2,
      theme = 'dark',
      label,
      description,
      className,
      checked = false,
      disabled = false,
      onChange,
      ...rest
    },
    ref
  ) => {
    const [toggle, setToggle] = useToggle(checked)
    const defaultClassName =
      'w-toggle h-toggle p-toggle rounded-full cursor-pointer transition-colors peer-disabled:bg-gray-50 peer-disabled:cursor-not-allowed'
    const allClassNames = clsx(defaultClassName, toggleThemes[theme])

    return (
      <div className={clsx('inline-flex items-start gap-2', className)}>
        <label
          className='inline-block'
          style={{
            ['--toggle-switch-size' as any]: `${
              toggleSwitchSizes[size] || size
            }px`,
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
        <div
          className={clsx('flex flex-col items-start', toggleTextSizes[size])}
        >
          {label && <p className='text-gray-700 font-medium'>{label}</p>}
          {description && <p className='text-gray-500'>{description}</p>}
        </div>
      </div>
    )
  }
)

export default Toggle
