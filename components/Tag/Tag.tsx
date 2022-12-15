import clsx from 'clsx'
import { X } from 'phosphor-react'
import React, { forwardRef } from 'react'
import { Checkbox } from '@/components'
import { styles } from './Tag.styles'
import { TagProps } from './Tag.types'
import { CheckboxSizes } from '../Checkbox/Checkbox.types'
import Link from 'next/link'

const Tag = forwardRef<HTMLSpanElement & HTMLAnchorElement, TagProps>(
  (
    {
      action = 'text',
      theme = 'dark',
      size = 'md',
      label,
      count,
      href = '',
      hasCheckbox = false,
      className,
      onClose,
      onCheck,
      ...rest
    },
    ref
  ) => {
    const allClassNames = clsx(styles.base, styles.sizes[size], className)

    if (rest.as === 'a') {
      return (
        <Link href={href}>
          <a className={allClassNames} ref={ref} {...rest}>
            {label}
            {action === 'count' && (
              <span
                className={clsx(
                  'rounded bg-gray-100 text-gray-800',
                  styles.countSizes[size],
                  styles.trailing[size]
                )}
              >
                {count}
              </span>
            )}
          </a>
        </Link>
      )
    }

    return (
      <span className={allClassNames} ref={ref} {...rest}>
        {hasCheckbox && (
          <Checkbox
            theme={theme}
            size={styles.checkboxSizes[size] as CheckboxSizes}
            onChange={() => onCheck && onCheck()}
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
            onClick={() => onClose && onClose()}
          />
        )}
        {action === 'count' && (
          <span
            className={clsx(
              'rounded bg-gray-100 text-gray-800',
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
)

Tag.displayName = 'Tag'

export default Tag
