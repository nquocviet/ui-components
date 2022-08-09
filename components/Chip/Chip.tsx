import React, { ReactNode } from 'react'
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

const Chip = ({
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
}: TChipProps) => {
  const allClassNames = clsx(
    styles.base,
    styles.colors[color][variant],
    styles.sizes[size],
    onClick && 'cursor-pointer',
    className
  )

  return (
    <div className={allClassNames} onClick={onClick} {...rest}>
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

export default Chip
