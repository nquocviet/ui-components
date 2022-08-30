import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { styles } from './Chip.styles'
import { X } from 'phosphor-react'
import { ChipProps } from './Chip.types'

const Chip = forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      variant = 'contained',
      size = 'md',
      color = 'primary',
      label,
      leading,
      trailing,
      rounded,
      className,
      onClick,
      onDelete,
      ...rest
    },
    ref
  ) => {
    const allClassNames = clsx(
      styles.base,
      styles.colors[color][variant],
      rounded ? styles.rounded[size] : styles.sizes[size],
      onClick && 'cursor-pointer',
      className
    )

    return (
      <div className={allClassNames} onClick={onClick} ref={ref} {...rest}>
        {leading && <span className={styles.leading[size]}>{leading}</span>}
        {label}
        {trailing && <span className={styles.trailing[size]}>{trailing}</span>}
        {onDelete && (
          <X
            role='button'
            weight='bold'
            size={16}
            onClick={() => onDelete && onDelete()}
          />
        )}
      </div>
    )
  }
)
Chip.displayName = 'Chip'

export default Chip
