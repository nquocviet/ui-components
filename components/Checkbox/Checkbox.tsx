import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { Check } from 'phosphor-react'
import { useId, useToggle } from '@/hooks'

type CheckboxSizes = 'xs' | 'sm' | 'md' | 'lg'

type CheckboxThemes = 'light' | 'dark'

type CheckboxProps = {
  size?: CheckboxSizes | number
  iconSize?: number
  theme?: CheckboxThemes
  value?: string
  label?: string
  description?: string
  className?: string
  rounded?: boolean
  checked?: boolean
  disabled?: boolean
  onChange:
    | (() => void)
    | ((event: React.ChangeEvent<HTMLInputElement>) => void)
} & React.HTMLAttributes<HTMLInputElement>

const checkboxSizes = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24,
}

const checkIconSizes = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
}

const checkboxTextSizes = {
  xs: 'text-2xs',
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-md',
}

const checkboxContainerThemes = {
  light:
    'border-primary-300 bg-primary-50 peer-enabled:peer-hover:bg-primary-100 peer-disabled:bg-gray-300 peer-disabled:border-gray-300',
  dark: 'border-primary-600 bg-primary-600 peer-enabled:peer-hover:bg-primary-700 peer-enabled:peer-hover:border-primary-700 peer-disabled:bg-gray-300 peer-disabled:border-gray-300',
}

const checkboxThemes = {
  light:
    'peer-enabled:peer-hover:bg-primary-50 peer-enabled:peer-hover:border-primary-300',
  dark: 'peer-enabled:peer-hover:bg-primary-100 peer-enabled:peer-hover:border-primary-600',
}

const checkIconThemes = {
  light: 'text-primary-400 peer-disabled:text-white',
  dark: 'text-white',
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      size = 'md',
      iconSize,
      theme = 'dark',
      value,
      label,
      description,
      className,
      rounded = false,
      checked = false,
      disabled = false,
      onChange,
    },
    ref
  ) => {
    const [toggle, setToggle] = useToggle(checked)
    const id = useId()
    const defaultClassName =
      'absolute w-full h-full bg-white border border-gray-300 transition-colors transition-transform duration-100 peer-checked:scale-0 peer-disabled:cursor-not-allowed peer-disabled:bg-gray-100'
    const allClassNames = clsx(
      defaultClassName,
      checkboxThemes[theme],
      rounded ? 'rounded-full' : 'rounded'
    )

    return (
      <div className={clsx('inline-flex items-start gap-2', className)}>
        <label
          className='inline-flex justify-center items-center w-checkbox h-checkbox cursor-pointer overflow-hidden relative'
          style={{
            ['--checkbox-size' as any]: `${checkboxSizes[size] || size}px`,
          }}
        >
          <input
            type='checkbox'
            className='peer hidden'
            value={value}
            id={id}
            ref={ref}
            onChange={(event) => {
              if (!disabled) {
                setToggle()
                onChange(event)
              }
            }}
            checked={toggle}
            disabled={disabled}
          />
          <div
            className={clsx(
              'absolute border top-0 left-0 w-full h-full transition-colors peer-disabled:cursor-not-allowed',
              checkboxContainerThemes[theme],
              rounded ? 'rounded-full' : 'rounded'
            )}
          ></div>
          <div className={allClassNames}></div>
          <Check
            className={clsx(
              'pointer-events-none invisible scale-0 transition-transform peer-checked:visible peer-checked:scale-100 peer-checked:delay-150',
              checkIconThemes[theme]
            )}
            size={iconSize || checkIconSizes[size]}
            weight='bold'
          />
        </label>
        <div
          className={clsx('flex flex-col items-start', checkboxTextSizes[size])}
        >
          {label && (
            <label
              className={clsx(
                'text-gray-700 font-medium cursor-pointer',
                disabled && 'cursor-not-allowed'
              )}
              htmlFor={id}
            >
              {label}
            </label>
          )}
          {description && <p className='text-gray-500'>{description}</p>}
        </div>
      </div>
    )
  }
)

export default Checkbox
