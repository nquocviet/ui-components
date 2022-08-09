import React, { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'
import { styles } from './Chip.styles'
import { X } from 'phosphor-react'

type TChipVariants = 'contained' | 'light' | 'outlined'

type TChipSizes = 'sm' | 'md' | 'lg'

type TChipColors = 'primary' | 'gray' | 'info' | 'error' | 'warning' | 'success'

type TChipProps = {
  variant?: TChipVariants
  size?: TChipSizes
  color?: TChipColors
  label: string
  leading?: ReactNode
  trailing?: ReactNode
  className?: string
  onDelete?: () => void
} & React.HTMLAttributes<HTMLDivElement>

const Chip = forwardRef<HTMLDivElement, TChipProps>(
  (
    {
      variant = 'contained',
      size = 'md',
      color = 'primary',
      label,
      leading,
      trailing,
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
      styles.sizes[size],
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
