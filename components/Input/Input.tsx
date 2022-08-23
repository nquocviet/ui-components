import React, { forwardRef, useState } from 'react'
import clsx from 'clsx'
import { Eye, EyeSlash } from 'phosphor-react'
import { styles } from './Input.styles'
import { InputProps } from './Input.types'
import Typography from '../Typography'

const MAX_LENGTH_INPUT = 255

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
      maxLength = MAX_LENGTH_INPUT,
      required = false,
      disabled = false,
      leading,
      trailing,
      className,
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
      className
    )
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const isInputPassword = type === 'password'

    return (
      <label className='block w-full' ref={ref}>
        {label && (
          <Typography
            fontSize='text-sm'
            className='mb-1.5 font-medium text-gray-700'
          >
            {label}
            {required && <span className='text-error-500 ml-0.5'>*</span>}
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
              'w-full border-none bg-transparent outline-none text-gray-700 placeholder:text-gray-500',
              styles.sizes[size]
            )}
            maxLength={maxLength}
            spellCheck='false'
            placeholder={placeholder}
            name={name}
            disabled={disabled}
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
          <Typography fontSize='text-sm' className='mt-1.5 text-error-600'>
            {error}
          </Typography>
        )}
      </label>
    )
  }
)
Input.displayName = 'Input'

export default Input
