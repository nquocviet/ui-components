import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { Circle } from 'phosphor-react'
import { useId } from '@/hooks'
import { styles } from './Radio.styles'
import { RadioProps } from './Radio.types'

const Radio = forwardRef<HTMLDivElement, RadioProps>(
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
      ...rest
    },
    ref
  ) => {
    const allClassNames = clsx(styles.base, styles.radioThemes[theme])
    const id = useId()

    return (
      <div
        className={clsx('inline-flex items-start gap-2', className)}
        ref={ref}
      >
        <label
          className='inline-flex justify-center items-center w-radio h-radio rounded-full cursor-pointer overflow-hidden relative'
          style={{
            ['--radio-size' as any]: `${styles.containerSizes[size] || size}px`,
          }}
        >
          <input
            type='radio'
            className='peer hidden'
            name={name}
            value={value}
            id={id}
            onChange={(event) => {
              if (!disabled) {
                onChange(event)
              }
            }}
            defaultChecked={defaultValue === value}
            disabled={disabled}
            {...rest}
          />
          <div
            className={clsx(
              'absolute border top-0 left-0 w-full h-full rounded-full transition-colors peer-disabled:cursor-not-allowed',
              styles.containerThemes[theme]
            )}
          ></div>
          <div className={allClassNames}></div>
          <Circle
            className={clsx(
              'pointer-events-none invisible scale-0 transition-transform peer-checked:visible peer-checked:scale-100 peer-checked:delay-150',
              styles.iconThemes[theme]
            )}
            size={iconSize || styles.iconSizes[size]}
            weight='fill'
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

Radio.displayName = 'Radio'

export default Radio
