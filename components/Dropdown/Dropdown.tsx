import React, { createContext, forwardRef, useRef, useState } from 'react'
import clsx from 'clsx'
import { useOnClickOutside, useWindowEvent } from '@/hooks'
import { Popover } from '@/components'
import { ForwardRefWithStaticComponent } from '@/utils'
import { DropdownProps } from './Dropdown.types'
import Menu from './Menu'
import MenuDivider from './MenuDivider'
import MenuHeader from './MenuHeader'
import MenuItem from './MenuItem'

type DropdownComponent = ForwardRefWithStaticComponent<
  DropdownProps,
  {
    Menu: typeof Menu
    MenuDivider: typeof MenuDivider
    MenuHeader: typeof MenuHeader
    MenuItem: typeof MenuItem
  }
>

export const DropdownContext = createContext<{
  open: boolean
  opened?: boolean
  onToggle: () => void
  onClose: () => void
} | null>(null)

const Dropdown: DropdownComponent = forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      children,
      overlay,
      opened,
      placement,
      openOnScroll = false,
      activeOnOpen = false,
      className,
      toggle,
      ...rest
    },
    ref
  ) => {
    const [open, setOpen] = useState<boolean>(false)
    const dropdownRef = useRef(null)

    const onToggle =
      typeof opened !== undefined && toggle
        ? () => toggle(!opened)
        : () => setOpen((prevState) => !prevState)
    const onClose =
      typeof opened !== undefined && toggle
        ? () => toggle(false)
        : () => setOpen(false)

    useOnClickOutside(dropdownRef, onClose)

    const handleScroll = () => setOpen(false)

    !openOnScroll && useWindowEvent('scroll', handleScroll, open)

    return (
      <DropdownContext.Provider value={{ open, opened, onToggle, onClose }}>
        <div className={className} ref={ref} {...rest}>
          <Popover
            open={typeof opened !== 'undefined' ? opened : open}
            placement={placement}
            duration={0.05}
            popover={overlay}
            ref={dropdownRef}
          >
            {React.cloneElement(children, {
              onClick: onToggle,
              className: clsx(
                children?.props?.className,
                activeOnOpen &&
                  (typeof opened !== 'undefined' ? opened : open) &&
                  '!bg-primary-25 !text-primary-600 !border-primary-25'
              ),
            })}
          </Popover>
        </div>
      </DropdownContext.Provider>
    )
  }
) as any

Dropdown.Menu = Menu
Dropdown.MenuDivider = MenuDivider
Dropdown.MenuHeader = MenuHeader
Dropdown.MenuItem = MenuItem
Dropdown.displayName = 'Dropdown'

export default Dropdown
