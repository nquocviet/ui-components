import React, { forwardRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { styles } from './Button.styles'
import { ButtonProps } from './Button.types'

const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement | HTMLLabelElement,
  ButtonProps
>(
  (
    {
      children,
      type = 'button',
      size = 'md',
      color = 'primary',
      variant = 'contained',
      leading,
      trailing,
      className,
      target = '_self',
      href = '',
      onlyIcon = false,
      fluid,
      rounded = false,
      onClick,
      ...rest
    },
    ref
  ) => {
    const allClassNames = clsx(
      styles.base,
      styles.colors[color][variant],
      styles.fontSizes[size],
      styles.width[fluid ? 'fluid' : 'auto'],
      variant !== 'link' &&
        (onlyIcon ? styles.iconSizes[size] : styles.sizes[size]),
      rounded && '!rounded-full',
      className
    )

    if (rest.as === 'a') {
      return (
        <Link href={href}>
          <a
            className={allClassNames}
            target={target}
            onClick={onClick}
            {...rest}
          >
            {leading && leading}
            {children}
            {trailing && trailing}
          </a>
        </Link>
      )
    }

    if (rest.as === 'label') {
      return (
        <label
          role='button'
          className={allClassNames}
          onClick={onClick}
          {...rest}
        >
          {leading && leading}
          {children}
          {trailing && trailing}
        </label>
      )
    }

    return (
      <button className={allClassNames} type={type} onClick={onClick} {...rest}>
        {leading && leading}
        {children}
        {trailing && trailing}
      </button>
    )
  }
)
Button.displayName = 'Button'

export default Button
