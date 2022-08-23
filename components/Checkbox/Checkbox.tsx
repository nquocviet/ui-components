import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { Check } from 'phosphor-react'
import { useId, useToggle } from '@/hooks'
import { styles } from './Checkbox.styles'
import { CheckboxProps } from './Checkbox.types'

const Checkbox = forwardRef<HTMLDivElement, CheckboxProps>(
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
      ...rest
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
      <div
        className={clsx('inline-flex items-start gap-2', className)}
        ref={ref}
      >
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
            onChange={(event) => {
              if (!disabled) {
                setToggle()
                onChange && onChange(event)
              }
            }}
            checked={toggle}
            disabled={disabled}
            {...rest}
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
