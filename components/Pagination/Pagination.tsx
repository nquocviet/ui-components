import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { PaginationProps } from './Pagination.types'
import { styles } from './Pagination.styles'
import { Button, ButtonGroup, Stack } from '../index'
import { ArrowLeft, ArrowRight } from 'phosphor-react'

const getRange = (
  currentPage: number,
  totalPages: number,
  offset
): number[] | (number | string)[] => {
  const offsetNumber =
    currentPage <= offset || currentPage > totalPages - offset
      ? offset
      : offset - 1
  const numbersList: number[] = []
  const numbersListWithDots: (number | string)[] = []

  if (totalPages <= 1 || totalPages === undefined) return [1]

  numbersList.push(1)
  for (
    let i = currentPage - offsetNumber;
    i <= currentPage + offsetNumber;
    i++
  ) {
    if (i < totalPages && i > 1) {
      numbersList.push(i)
    }
  }
  numbersList.push(totalPages)

  numbersList.reduce((accumulator, currentValue) => {
    if (accumulator === 1) {
      numbersListWithDots.push(accumulator)
    }
    if (currentValue - accumulator !== 1) {
      numbersListWithDots.push('...')
    }
    numbersListWithDots.push(currentValue)

    return currentValue
  })

  return numbersListWithDots
}

const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      variant = 'page',
      shape = 'circular',
      currentPage,
      totalPages,
      offset = 2,
      border = true,
      disabled,
      responsive = true,
      hideNextButton,
      hidePrevButton,
      className,
      onChange,
      ...rest
    },
    ref
  ) => {
    const isDefault = ['page', 'card'].includes(variant)
    const isGroup = variant.includes('group')

    return (
      <div
        className={clsx(
          styles.base,
          border && 'border-t border-gray-200',
          className
        )}
        ref={ref}
        {...rest}
      >
        <div className={styles.variants[variant]}>
          {isDefault && (
            <>
              {!hidePrevButton && (
                <Button
                  color='gray'
                  variant={variant === 'page' ? 'text' : 'outlined'}
                  size='sm'
                  disabled={disabled}
                  leading={<ArrowLeft size={20} />}
                  onClick={() => onChange((currentPage -= 1))}
                >
                  Previous
                </Button>
              )}
              {hidePrevButton && <span className='w-px'></span>}
              <Stack spacing={2}>
                {getRange(currentPage, totalPages, offset + 1).map((page) => {
                  if (typeof page === 'string') {
                    return (
                      <Button
                        key={page}
                        color='gray'
                        variant='text'
                        size='sm'
                        disabled={disabled}
                        className='hover:!bg-transparent'
                        onlyIcon
                      >
                        {page}
                      </Button>
                    )
                  }

                  return (
                    <Button
                      key={page}
                      color='gray'
                      variant={currentPage === page ? 'light' : 'text'}
                      size='sm'
                      rounded={shape === 'rounded'}
                      disabled={disabled}
                      onlyIcon
                      onClick={() => onChange(page)}
                    >
                      {page}
                    </Button>
                  )
                })}
              </Stack>
              {!hideNextButton && (
                <Button
                  color='gray'
                  variant={variant === 'page' ? 'text' : 'outlined'}
                  size='sm'
                  disabled={disabled}
                  trailing={<ArrowRight size={20} />}
                  onClick={() => onChange((currentPage += 1))}
                >
                  Next
                </Button>
              )}
              {hideNextButton && <span className='w-px'></span>}
            </>
          )}
          {isGroup && (
            <ButtonGroup color='gray' variant='outlined' size='sm'>
              {!hidePrevButton && (
                <Button
                  disabled={disabled}
                  leading={<ArrowLeft size={20} />}
                  onClick={() => onChange((currentPage -= 1))}
                >
                  Previous
                </Button>
              )}
              {getRange(currentPage, totalPages, offset + 1).map((page) => {
                if (typeof page === 'string') {
                  return (
                    <Button
                      key={page}
                      disabled={disabled}
                      className='hover:!bg-transparent'
                      onlyIcon
                    >
                      {page}
                    </Button>
                  )
                }

                return (
                  <Button
                    key={page}
                    className={clsx(
                      currentPage === page && '!bg-gray-100 !hover:bg-gray-200'
                    )}
                    disabled={disabled}
                    onlyIcon
                    onClick={() => onChange(page)}
                  >
                    {page}
                  </Button>
                )
              })}
              {!hideNextButton && (
                <Button
                  disabled={disabled}
                  trailing={<ArrowRight size={20} />}
                  onClick={() => onChange((currentPage += 1))}
                >
                  Next
                </Button>
              )}
            </ButtonGroup>
          )}
        </div>
      </div>
    )
  }
)
Pagination.displayName = 'Pagination'

export default Pagination
