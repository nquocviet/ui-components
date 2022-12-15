import React from 'react'
import clsx from 'clsx'
import { MenuProps } from './Menu.types'
import { styles } from './Menu.styles'

const Menu: React.FunctionComponent<MenuProps> = ({
  children,
  width,
  className,
}) => {
  const allClassNames = clsx(styles.base, className)

  return (
    <ul className={allClassNames} style={{ ...(width && { width }) }}>
      {children}
    </ul>
  )
}

Menu.displayName = 'Menu'

export default Menu
