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
      nowrap = false,
      checked,
      defaultChecked = false,
      disabled = false,
      style,
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
        style={{ ...style }}
      >
        <label
          className='relative inline-flex h-checkbox w-checkbox cursor-pointer items-center justify-center overflow-hidden'
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
            checked={typeof checked === 'boolean' ? checked : toggle}
            disabled={disabled}
            {...rest}
          />
          <div
            className={clsx(
              'absolute top-0 left-0 h-full w-full border transition-colors peer-disabled:cursor-not-allowed',
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
                  'text-gray-800',
                  nowrap && 'whitespace-nowrap',
                  disabled ? 'cursor-not-allowed' : 'cursor-pointer'
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
