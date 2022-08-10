import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { styles } from './Spinner.styles'
import stylesModule from './Spinner.module.css'

type TSpinnerTypes = 'circular' | 'dash' | 'dots'

type TSpinnerSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type TSpinnerProps = {
  type?: TSpinnerTypes
  size?: TSpinnerSizes
  className?: string
} & React.HTMLAttributes<HTMLDivElement>

const Spinner = forwardRef<HTMLDivElement, TSpinnerProps>(
  ({ type = 'circular', size = 'md', className, ...rest }, ref) => {
    const [box, line, space] = styles.sizes[size]
    const isAbsolute = (className as string).includes('absolute')

    if (type === 'circular' || type === 'dash') {
      return (
        <div
          className={clsx(
            type === 'circular' && 'rounded-full outline outline-gray-200',
            !isAbsolute && 'relative',
            className
          )}
          style={{
            ...(type === 'circular' && {
              outlineWidth: `${line}px`,
              outlineOffset: `-${line}px`,
              width: `${box}px`,
              height: `${box}px`,
            }),

            ['--dash-array-1' as any]: box * 4 - line * 2,
            ['--dash-array-2' as any]: box * 6,
            ['--dash-offset-1' as any]: -box - line * 4,
            ['--dash-offset-2' as any]: -box * 5 - line * 2 - space,
          }}
          ref={ref}
          {...rest}
        >
          <svg
            className={clsx(
              'text-primary-600 animate-rotate-loading',
              type === 'circular' && 'absolute inset-0'
            )}
            style={{
              width: `${box}px`,
              height: `${box}px`,
            }}
            viewBox={`0 0 ${box * 2} ${box * 2}`}
          >
            <circle
              className='animate-dash-loading'
              cx={box}
              cy={box}
              r={box - line}
              fill='none'
              stroke='currentColor'
              strokeWidth={line * 1.5}
              strokeLinecap='round'
            ></circle>
          </svg>
        </div>
      )
    }

    return (
      <div
        className={clsx(!isAbsolute && 'relative -rotate-90')}
        style={{
          width: `${box}px`,
          height: `${box}px`,
        }}
      >
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className={clsx(
              'absolute top-0 left-0 w-full h-full',
              stylesModule[`animation-spinner-dots-${index + 1}`]
            )}
            style={{
              transform: `rotate(${index * 30}deg)`,
              opacity: 1 - 0.08 * index,
            }}
          >
            <div
              className='bg-primary-600 mx-auto rounded-full'
              style={{ width: `${line}px`, height: `${line}px` }}
            ></div>
          </div>
        ))}
      </div>
    )
  }
)
Spinner.displayName = 'Spinner'

export default Spinner
