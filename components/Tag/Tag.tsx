import clsx from 'clsx'
import { X } from 'phosphor-react'
import React from 'react'
import { Checkbox } from '../Checkbox'
import { TCheckboxSizes } from '../Checkbox/Checkbox'
import { styles } from './Tag.styles'

type TTagActions = 'text' | 'close' | 'count'

type TTagThemes = 'light' | 'dark'

type TTagSizes = 'sm' | 'md' | 'lg'

type TTagProps = {
  action?: TTagActions
  theme?: TTagThemes
  size?: TTagSizes
  label: string
  count?: number
  hasCheckbox?: boolean
  className?: string
  onClose: () => void
  onCheck: () => void
}

const Tag = ({
  action = 'text',
  theme = 'dark',
  size = 'md',
  label,
  count,
  hasCheckbox = false,
  className,
  onClose,
  onCheck,
  ...rest
}: TTagProps) => {
  const allClassNames = clsx(styles.base, styles.sizes[size], className)

  return (
    <span className={allClassNames} {...rest}>
      {hasCheckbox && (
        <Checkbox
          theme={theme}
          size={styles.checkboxSizes[size] as TCheckboxSizes}
          onChange={onCheck}
          className={styles.leading[size]}
        />
      )}
      {label}
      {action === 'close' && (
        <X
          role='button'
          weight='bold'
          size={styles.iconSizes[size]}
          className={clsx('text-gray-400', styles.trailing[size])}
          onClick={onClose}
        />
      )}
      {action === 'count' && (
        <span
          className={clsx(
            'bg-gray-100 text-gray-700 rounded',
            styles.countSizes[size],
            styles.trailing[size]
          )}
        >
          {count}
        </span>
      )}
    </span>
  )
}

export default Tag
