import React, { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'
import { styles } from './ButtonGroup.styles'

type TButtonGroupSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

type TButtonGroupColors =
  | 'primary'
  | 'gray'
  | 'info'
  | 'error'
  | 'warning'
  | 'success'

type TButtonGroupVariants = 'contained' | 'light' | 'outlined' | 'text'

type TButtonGroupProps = {
  size?: TButtonGroupSizes
  color?: TButtonGroupColors
  variant?: TButtonGroupVariants
  children: ReactNode[]
  fluid?: boolean
  disabled?: boolean
  className?: string
} & React.HTMLAttributes<HTMLDivElement>

const ButtonGroup = forwardRef<HTMLDivElement, TButtonGroupProps>(
  (
    {
      size = 'md',
      color = 'primary',
      variant = 'contained',
      children,
      fluid = false,
      disabled,
      className,
      ...rest
    },
    ref
  ) => {
    const allClassNames = clsx(
      styles.base,
      fluid && 'w-full child:flex-1',
      className
    )

    return (
      <div className={allClassNames} ref={ref} {...rest}>
        {children.map((child: any, key) =>
          React.cloneElement(child, {
            key,
            size,
            color,
            variant,
            disabled,
            className: clsx(
              child.props.className,
              styles.colors[color][variant],
              'first-of-type:rounded-l-lg first-of-type:border-l last-of-type:rounded-r-lg last-of-type:border-r border-l-0 border-r-0',
              key < children.length - 1 &&
                'after:absolute after:right-0 after:h-full after:border-r'
            ),
          })
        )}
      </div>
    )
  }
)
ButtonGroup.displayName = 'ButtonGroup'

export default ButtonGroup
