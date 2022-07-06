import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { Circle } from 'phosphor-react'
import { useId } from '@/hooks'

type RadioSizes = 'xs' | 'sm' | 'md' | 'lg'

type RadioThemes = 'light' | 'dark'

type RadioProps = {
  size?: RadioSizes | number
  iconSize?: number
  theme?: RadioThemes
  name: string
  value: string
  label?: string
  description?: string
  className?: string
  checked?: boolean
  disabled?: boolean
  onChange:
    | (() => void)
    | ((event: React.ChangeEvent<HTMLInputElement>) => void)
} & React.HTMLAttributes<HTMLInputElement>

const radioSizes = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24,
}

const circleIconSizes = {
  xs: 6,
  sm: 8,
  md: 12,
  lg: 16,
}

const radioTextSizes = {
  xs: 'text-2xs',
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-md',
}

const radioContainerThemes = {
  light:
    'border-primary-300 bg-primary-50 peer-enabled:peer-hover:bg-primary-100 peer-disabled:bg-gray-300 peer-disabled:border-gray-300',
  dark: 'border-primary-600 bg-primary-600 peer-enabled:peer-hover:bg-primary-700 peer-enabled:peer-hover:border-primary-700 peer-disabled:bg-gray-300 peer-disabled:border-gray-300',
}

const radioThemes = {
  light:
    'peer-enabled:peer-hover:bg-primary-50 peer-enabled:peer-hover:border-primary-300',
  dark: 'peer-enabled:peer-hover:bg-primary-100 peer-enabled:peer-hover:border-primary-600',
}

const circleIconThemes = {
  light: 'text-primary-400 peer-disabled:text-white',
  dark: 'text-white',
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      size = 'md',
      iconSize,
      theme = 'dark',
      name,
      value,
      label,
      description,
      className,
      defaultValue,
      disabled = false,
      onChange,
    },
    ref
  ) => {
    const id = useId()
    const defaultClassName =
      'absolute w-full h-full rounded-full bg-white border border-gray-300 transition-colors transition-transform duration-100 peer-checked:scale-0 peer-disabled:cursor-not-allowed peer-disabled:bg-gray-100'
    const allClassNames = clsx(defaultClassName, radioThemes[theme])

    return (
      <div className={clsx('inline-flex items-start gap-2', className)}>
        <label
          className='inline-flex justify-center items-center w-radio h-radio rounded-full cursor-pointer overflow-hidden relative'
          style={{
            ['--radio-size' as any]: `${radioSizes[size] || size}px`,
          }}
        >
          <input
            type='radio'
            className='peer hidden'
            name={name}
            value={value}
            id={id}
            ref={ref}
            onChange={(event) => {
              if (!disabled) {
                onChange(event)
              }
            }}
            defaultChecked={defaultValue === value}
            disabled={disabled}
          />
          <div
            className={clsx(
              'absolute border top-0 left-0 w-full h-full rounded-full transition-colors peer-disabled:cursor-not-allowed',
              radioContainerThemes[theme]
            )}
          ></div>
          <div className={allClassNames}></div>
          <Circle
            className={clsx(
              'pointer-events-none invisible scale-0 transition-transform peer-checked:visible peer-checked:scale-100 peer-checked:delay-150',
              circleIconThemes[theme]
            )}
            size={iconSize || circleIconSizes[size]}
            weight='fill'
          />
        </label>
        <div
          className={clsx('flex flex-col items-start', radioTextSizes[size])}
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

export default Radio
