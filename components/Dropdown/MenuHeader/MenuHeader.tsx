import React, { useContext } from 'react'
import clsx from 'clsx'
import { MenuHeaderProps } from './MenuHeader.types'
import { DropdownContext } from '../Dropdown'

const MenuHeader: React.FunctionComponent<MenuHeaderProps> = ({
  children,
  closeOnClick = false,
  className,
}) => {
  const context = useContext(DropdownContext)

  return (
    <div
      className={clsx('border-b border-gray-200 px-4 py-3', className)}
      onClick={closeOnClick ? context?.onClose : undefined}
    >
      {children}
    </div>
  )
}

MenuHeader.displayName = 'MenuHeader'

export default MenuHeader
