import React, { forwardRef, useState } from 'react'
import clsx from 'clsx'
import { Star } from 'phosphor-react'
import { styles } from './Rating.styles'
import { RatingProps } from './Rating.types'
import { Typography } from '@/components'

const Rating = forwardRef<HTMLDivElement, RatingProps>(
  (
    {
      defaultValue = 0,
      precision = 'full',
      size = 'md',
      label,
      disabled,
      readOnly,
      max = 5,
      color,
      className,
      icon,
      emptyIcon,
      leading,
      trailing,
      onChange,
      onHover,
      ...rest
    },
    ref
  ) => {
    const [rated, setRated] = useState(false)
    const [rating, setRating] = useState(defaultValue)
    const [oldRating, setOldRating] = useState(defaultValue)
    const allClassNames = clsx(styles.base, className)
    const ratable = !readOnly && !disabled

    const renderIcon = (rate) => {
      return emptyIcon ? (rate > rating ? emptyIcon : icon) : icon
    }

    const onChangeRating = (rate) => {
      if (!ratable) return

      setRated(true)
      setRating(rate)
      setOldRating(rate)
      onChange && onChange(rate)
    }

    const onMouseEnter = (rate) => {
      if (!ratable) return

      setRating(rate)
      onHover && onHover(rate)
    }

    const onMouseLeave = () => {
      if (!ratable) return

      setRated(false)

      if (rated) return

      setRating(oldRating)
    }

    return (
      <div className={allClassNames} ref={ref} {...rest}>
        {leading && <div className='mr-4'>{leading}</div>}
        {[...Array(max)].map((_, index) => {
          const rateHalf = index + 0.5
          const rateFull = index + 1

          return (
            <span
              key={index}
              className={clsx(
                'relative inline-flex',
                !readOnly && !disabled && styles.states.default,
                readOnly && styles.states.readOnly,
                disabled && styles.states.disabled
              )}
            >
              {precision === 'half' && (
                <span
                  className='absolute top-0 left-0 inline-flex h-full w-1/2 items-center justify-center'
                  style={{
                    fontSize: `${styles.sizes[size]}px`,
                    color:
                      rateHalf <= rating
                        ? color
                          ? color
                          : 'rgb(var(--yellow-400))'
                        : 'rgb(var(--gray-400))',
                  }}
                  onClick={() => onChangeRating(rateHalf)}
                  onMouseEnter={() => onMouseEnter(rateHalf)}
                  onMouseLeave={() => onMouseLeave()}
                >
                  <span className='absolute top-0 left-0 h-full w-full overflow-hidden'>
                    {icon ? (
                      renderIcon(rateHalf)
                    ) : (
                      <Star weight={rateHalf <= rating ? 'fill' : 'regular'} />
                    )}
                  </span>
                </span>
              )}
              <span
                className='inline-flex items-center justify-center'
                style={{
                  fontSize: `${styles.sizes[size]}px`,
                  color:
                    rateFull <= rating
                      ? color
                        ? color
                        : 'rgb(var(--yellow-400))'
                      : 'rgb(var(--gray-400))',
                }}
                onClick={() => onChangeRating(rateFull)}
                onMouseEnter={() => onMouseEnter(rateFull)}
                onMouseLeave={() => onMouseLeave()}
              >
                {icon ? (
                  renderIcon(rateFull)
                ) : (
                  <Star weight={rateFull <= rating ? 'fill' : 'regular'} />
                )}
              </span>
            </span>
          )
        })}
        {label && (
          <Typography className='ml-1 text-gray-500'>{label}</Typography>
        )}
        {trailing && <div className='ml-4'>{trailing}</div>}
      </div>
    )
  }
)

Rating.displayName = 'Rating'

export default Rating
