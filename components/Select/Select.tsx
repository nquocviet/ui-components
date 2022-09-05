import React, { forwardRef, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { CaretUp, CaretDown, Check } from 'phosphor-react'
import { useOnClickOutside } from '@/hooks'
import { Checkbox, Typography, Tag } from '..'
import { styles } from './Select.styles'
import { OptionType, SelectProps } from './Select.types'

const Select = forwardRef<HTMLInputElement, SelectProps>(
  (
    {
      options,
      size = 'sm',
      defaultOption,
      label,
      name,
      placeholder = 'Select option',
      maxHeight = 220,
      maxItems = 3,
      disabled = false,
      multiple = false,
      required = false,
      error,
      leading,
      trailing,
      className,
      onChange,
      onRemove,
      ...rest
    },
    ref
  ) => {
    const [optionSelected, setOptionSelected] = useState<
      OptionType | OptionType[] | {}
    >(defaultOption ? defaultOption : multiple ? [] : {})
    const [showOptions, setShowOptions] = useState<boolean>(false)
    const selectRef = useRef(null)
    const allClassNames = clsx(
      styles.base,
      styles.sizes[size],
      error
        ? styles.states.error
        : disabled
        ? styles.states.disabled
        : styles.states.enabled,
      className
    )
    const _optionSelected = optionSelected as OptionType
    const _optionsSelected = optionSelected as OptionType[]

    const handleClose = () => setShowOptions(false)

    useOnClickOutside(selectRef, handleClose)

    useEffect(() => {
      const clearDropdown = (event) => {
        if (event.key === 'Tab') {
          handleClose()
        }
      }

      document.addEventListener('keydown', clearDropdown)
      return () => document.removeEventListener('keydown', clearDropdown)
    }, [])

    const handleSelect = ({ value, label }) => {
      const option: any = { value, label }

      if (multiple) {
        const _optionsSelected = optionSelected as OptionType[]
        const optionIndex = _optionsSelected.findIndex(
          (option) => option.value === value
        )

        const newOptions =
          optionIndex >= 0
            ? _optionsSelected.filter((_, index) => index !== optionIndex)
            : [..._optionsSelected, option]
        const newValues = newOptions.map(({ value }) => value)

        setOptionSelected(newOptions)
        onChange && onChange(newValues)
      } else {
        handleClose()
        setOptionSelected(option)
        onChange && onChange(option)
      }
    }

    return (
      <div className='relative' ref={selectRef}>
        <div className='flex justify-between items-center mb-1.5'>
          {label && (
            <Typography
              weight='medium'
              fontSize='text-md'
              className='text-gray-700'
            >
              {label}
              {required && <span className='text-red-500 ml-0.5'>*</span>}
            </Typography>
          )}
        </div>
        <div
          className={allClassNames}
          tabIndex={0}
          onFocus={() => !disabled && setShowOptions(true)}
        >
          <input
            className='w-full absolute bottom-0 left-0 opacity-0 pointer-events-none'
            type='text'
            ref={ref}
            name={name}
            tabIndex={-1}
            {...rest}
          />
          {leading && <span className={styles.leading[size]}>{leading}</span>}
          <div className='grow'>
            {multiple ? (
              _optionsSelected.length ? (
                <div className='flex flex-wrap items-center gap-1.5'>
                  {_optionsSelected
                    .slice(0, maxItems)
                    .map(({ value, label }) => (
                      <Tag
                        key={value}
                        size={size}
                        label={label}
                        action='close'
                        onClose={() => {
                          handleSelect({ value, label })
                          onRemove && onRemove()
                        }}
                      />
                    ))}
                  {_optionsSelected.length > maxItems && (
                    <Tag
                      size={size}
                      label={`+${_optionsSelected.length - maxItems}`}
                    />
                  )}
                </div>
              ) : (
                <span className='pointer-events-none text-gray-500'>
                  {placeholder}
                </span>
              )
            ) : _optionSelected.label ? (
              _optionSelected.label
            ) : (
              <span className='pointer-events-none text-gray-500'>
                {placeholder}
              </span>
            )}
          </div>
          {trailing && (
            <span className={styles.trailing[size]}>{trailing}</span>
          )}
          <button
            type='button'
            className={styles.trailing[size]}
            onClick={() => setShowOptions((prevState) => !prevState)}
          >
            {showOptions ? <CaretUp size={20} /> : <CaretDown size={20} />}
          </button>
        </div>
        <div
          className={clsx(
            'absolute top-[calc(100%+6px)] z-dropdown flex w-full flex-col items-stretch rounded-md border border-gray-300 bg-white shadow-md',
            showOptions ? 'block' : 'hidden'
          )}
        >
          <ul className='overflow-auto' style={{ maxHeight: `${maxHeight}px` }}>
            {options &&
              options.map(({ value, label }) => {
                const isSelected = multiple
                  ? _optionsSelected.some((option) => option.value === value)
                  : _optionSelected.value === value

                return (
                  <li
                    key={value}
                    className={clsx(
                      'flex justify-between items-center cursor-pointer transition-colors duration-200',
                      styles.sizes[size],
                      isSelected ? 'bg-gray-50' : 'hover:bg-gray-100'
                    )}
                    onClick={() => handleSelect({ value, label })}
                  >
                    <div className='flex items-center'>
                      {multiple && (
                        <Checkbox
                          size='sm'
                          className='mr-2'
                          defaultChecked={isSelected}
                        />
                      )}
                      {label}
                    </div>
                    {isSelected && !multiple && (
                      <Check
                        size={20}
                        className='text-primary-400'
                        weight='bold'
                      />
                    )}
                  </li>
                )
              })}
          </ul>
        </div>
        {error && (
          <Typography fontSize='text-sm' className='mt-1.5 text-red-600'>
            {error}
          </Typography>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'

export default Select
