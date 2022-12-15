import React, { forwardRef, useState } from 'react'
import clsx from 'clsx'
import { Eye, EyeSlash } from 'phosphor-react'
import { styles } from './Input.styles'
import { InputProps } from './Input.types'
import Typography from '../Typography'

const Input = forwardRef<HTMLLabelElement, InputProps>(
  (
    {
      type = 'text',
      size = 'sm',
      name,
      label,
      placeholder,
      error,
      hint,
      required = false,
      disabled = false,
      noStyle,
      readOnly,
      leading,
      trailing,
      className,
      containerClassName,
      style,
      ...rest
    },
    ref
  ) => {
    const allClassNames = clsx(
      styles.base,
      error
        ? styles.states.error
        : disabled
        ? styles.states.disabled
        : styles.states.enabled,
      readOnly && 'focus-within:!border-gray-300',
      className
    )
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const isInputPassword = type === 'password'
    const isInputNumber = type === 'number'
    const numberInputInvalidChars = ['-', '+', '.', 'e', 'E']

    if (noStyle) {
      return <input type={type} className={className} {...rest} />
    }

    return (
      <label
        className={clsx('block', containerClassName)}
        style={{ ...style }}
        ref={ref}
      >
        {label && (
          <Typography
            fontSize='text-md'
            weight='medium'
            className='mb-1.5 text-gray-800'
          >
            {label}
            {required && <span className='ml-0.5 text-red-500'>*</span>}
          </Typography>
        )}
        <div className={allClassNames}>
          {leading && (
            <span
              className={clsx('inline-flex items-center', styles.leading[size])}
            >
              {leading}
            </span>
          )}
          <input
            {...(isInputPassword && showPassword
              ? { type: 'text' }
              : { type: 'password' })}
            {...(!isInputPassword && { type: type })}
            className={clsx(
              'w-full border-none bg-transparent text-gray-800 outline-none placeholder:text-gray-400',
              styles.sizes[size],
              readOnly && 'cursor-default'
            )}
            spellCheck='false'
            placeholder={placeholder}
            name={name}
            disabled={disabled}
            readOnly={readOnly}
            {...(isInputNumber && {
              min: 0,
              onKeyDown: (e) => {
                if (numberInputInvalidChars.includes(e.key)) {
                  e.preventDefault()
                }
              },
            })}
            {...rest}
          />
          {trailing && (
            <span
              className={clsx(
                'inline-flex items-center',
                styles.trailing[size]
              )}
            >
              {trailing}
            </span>
          )}
          {type === 'password' && (
            <button
              type='button'
              className={clsx('outline-none', styles.trailing[size])}
              onClick={() => setShowPassword((prevState) => !prevState)}
              tabIndex={-1}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <Eye size={20} /> : <EyeSlash size={20} />}
            </button>
          )}
        </div>
        {hint && !error && (
          <Typography fontSize='text-sm' className='mt-1.5 text-gray-500'>
            {hint}
          </Typography>
        )}
        {error && (
          <Typography fontSize='text-sm' className='mt-1.5 text-red-600'>
            {error}
          </Typography>
        )}
      </label>
    )
  }
)

Input.displayName = 'Input'

export default Input
