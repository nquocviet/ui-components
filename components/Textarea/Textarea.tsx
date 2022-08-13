import React, { ChangeEvent, forwardRef, useState } from 'react'
import clsx from 'clsx'
import { styles } from './Textarea.styles'
import { Typography } from '..'

type TTextareaSizes = 'sm' | 'md'

interface ITextareaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  size?: TTextareaSizes
  name: string
  label?: string
  value?: string
  placeholder?: string
  className?: string
  error?: string
  hint?: string
  disabled?: boolean
  required?: boolean
  defaultValue?: string
  rows?: number
  onBlur?: (() => void) | ((event: ChangeEvent<HTMLTextAreaElement>) => void)
  onChange?: (() => void) | ((event: ChangeEvent<HTMLTextAreaElement>) => void)
}

const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>(
  (
    {
      size = 'sm',
      name,
      label,
      placeholder,
      className,
      error,
      hint,
      disabled = false,
      required = false,
      defaultValue,
      rows = 5,
      ...rest
    },
    ref
  ) => {
    const [currentRows, setCurrentRows] = useState(rows)
    const allClassNames = clsx(
      styles.base,
      error
        ? styles.states.error
        : disabled
        ? styles.states.disabled
        : styles.states.enabled,
      className
    )

    const onKeyDownCapture = (event) => {
      const { key, target } = event
      const valueSplitted = target.value.split('\n')
      const rowsLength = valueSplitted.length

      if (key === 'Enter' && rowsLength === currentRows) {
        setCurrentRows((prevState) => (prevState += 1))
      }
    }

    const onKeyUpCapture = (event) => {
      const { key, target } = event
      const valueSplitted = target.value.split('\n')
      const rowsLength = valueSplitted.length

      if (key === 'Backspace' || key === 'Delete') {
        if (rowsLength >= rows) {
          setCurrentRows(rowsLength)
        } else {
          setCurrentRows(rows)
        }
      }
    }

    return (
      <label className='block w-full'>
        {label && (
          <Typography
            weight='medium'
            fontSize='text-md'
            className='mb-1.5 text-gray-700'
          >
            {label}
            {required && <span className='text-error-500 ml-0.5'>*</span>}
          </Typography>
        )}
        <div className={allClassNames}>
          <textarea
            className={clsx(
              'w-full border-none bg-transparent outline-none text-gray-700 resize-none placeholder:text-gray-400',
              styles.sizes[size]
            )}
            autoComplete='off'
            autoCorrect='off'
            autoCapitalize='off'
            spellCheck='false'
            placeholder={placeholder}
            ref={ref}
            name={name}
            disabled={disabled}
            defaultValue={defaultValue}
            rows={currentRows}
            onKeyDownCapture={onKeyDownCapture}
            onKeyUpCapture={onKeyUpCapture}
            {...rest}
          />
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
Textarea.displayName = 'Textarea'

export default Textarea
