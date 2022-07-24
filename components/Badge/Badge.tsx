import clsx from 'clsx'
import React, { ReactNode } from 'react'
import { styles } from './Badge.styles'

type TBadgeVariants = 'standard' | 'dot'

type TBadgeSizes = 'sm' | 'md' | 'lg'

type TBadgeDotSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

type TBadgePlacements = {
  horizontal: 'left' | 'right'
  vertical: 'bottom' | 'top'
}

type TBadgeColors =
  | 'primary'
  | 'gray'
  | 'info'
  | 'error'
  | 'warning'
  | 'success'

type TBadgeProps = {
  variant?: TBadgeVariants
  size?: TBadgeSizes
  dotSize?: TBadgeDotSizes
  color?: TBadgeColors
  badgeContent: ReactNode
  children: ReactNode
  maxCount?: number
  placement?: TBadgePlacements
  className?: string
}

const Badge = ({
  variant = 'standard',
  size = 'md',
  dotSize = 'md',
  color = 'primary',
  badgeContent,
  children,
  maxCount = 99,
  placement = {
    horizontal: 'right',
    vertical: 'top',
  },
  className,
}: TBadgeProps) => {
  const { horizontal, vertical } = placement
  const allClassNames = clsx(
    styles.base,
    styles.colors[color][variant],
    styles.placements[horizontal][variant],
    styles.placements[vertical][variant],
    variant === 'standard' ? styles.sizes[size] : styles.dotSizes[dotSize],
    children && 'absolute'
  )

  return (
    <div className={clsx('inline-block relative', className)}>
      {children && children}
      {variant === 'dot' && <span className={allClassNames}></span>}
      {variant === 'standard' && (
        <span className={allClassNames}>
          {typeof badgeContent === 'number'
            ? badgeContent > maxCount
              ? `${maxCount}+`
              : badgeContent
            : badgeContent}
        </span>
      )}
    </div>
  )
}

export default Badge
