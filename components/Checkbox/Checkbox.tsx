import React, { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'
import { Check } from 'phosphor-react'
import { useId, useToggle } from '@/hooks'
import { styles } from './Checkbox.styles'

export type TCheckboxSizes = 'xs' | 'sm' | 'md' | 'lg'

type TCheckboxThemes = 'light' | 'dark'

type TCheckboxProps = {
  size?: TCheckboxSizes | number
  iconSize?: number
  theme?: TCheckboxThemes
  value?: string
  label?: ReactNode
  description?: ReactNode
  className?: string
  rounded?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  onChange:
    | (() => void)
    | ((event: React.ChangeEvent<HTMLInputElement>) => void)
} & React.HTMLAttributes<HTMLInputElement>

const Checkbox = forwardRef<HTMLInputElement, TCheckboxProps>(
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
      defaultChecked = false,
      disabled = false,
      onChange,
    },
    ref
  ) => {
    const allClassNames = clsx(
      styles.base,
      styles.checkboxThemes[theme],
      rounded ? 'rounded-full' : 'rounded'
    )
    const [toggle, setToggle] = useToggle(defaultChecked)
    const id = useId()

    return (
      <div className={clsx('inline-flex items-start gap-2', className)}>
        <label
          className='inline-flex justify-center items-center w-checkbox h-checkbox cursor-pointer overflow-hidden relative'
          style={{
            ['--checkbox-size' as any]: `${
              styles.containerSizes[size] || size
            }px`,
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
              styles.containerThemes[theme],
              rounded ? 'rounded-full' : 'rounded'
            )}
          ></div>
          <div className={allClassNames}></div>
          <Check
            className={clsx(
              'pointer-events-none invisible scale-0 transition-transform peer-checked:visible peer-checked:scale-100 peer-checked:delay-150',
              styles.iconThemes[theme]
            )}
            size={iconSize || styles.iconSizes[size]}
            weight='bold'
          />
        </label>
        {label && (
          <div
            className={clsx(
              'flex flex-col items-start',
              styles.fontSizes[size]
            )}
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
        )}
      </div>
    )
  }
)
Checkbox.displayName = 'Checkbox'

export default Checkbox
