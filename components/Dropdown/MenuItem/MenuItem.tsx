import React, { useContext } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { MenuItemProps } from './MenuItem.types'
import { styles } from './MenuItem.styles'
import { DropdownContext } from '../Dropdown'

const MenuItem: React.FunctionComponent<MenuItemProps> = ({
  children,
  closeOnClick = true,
  className,
  leading,
  trailing,
  ...rest
}) => {
  const allClassNames = clsx(styles.base, className)
  const context = useContext(DropdownContext)

  if (rest.as === 'a') {
    const { as, ...otherAttr } = rest
    return (
      <li
        className='transition-colors hover:bg-gray-50'
        onClick={closeOnClick ? () => context?.onClose() : undefined}
      >
        <Link {...otherAttr}>
          <a className={allClassNames}>
            {leading && leading}
            <span className='grow'>{children}</span>
            {trailing && trailing}
          </a>
        </Link>
      </li>
    )
  }

  return (
    <li
      className='transition-colors hover:bg-gray-50'
      onClick={closeOnClick ? () => context?.onClose() : undefined}
    >
      <button type='button' className={allClassNames} {...rest}>
        {leading && leading}
        <span className='grow text-md'>{children}</span>
        {trailing && trailing}
      </button>
    </li>
  )
}

MenuItem.displayName = 'MenuItem'

export default MenuItem
