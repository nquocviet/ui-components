import { ReactNode } from 'react'
import { LinkProps } from 'next/link'

export type MenuItemAs = 'button' | 'a'

export type MenuItemBaseProps = {
  children: ReactNode | ReactNode[]
  closeOnClick?: boolean
  className?: string
  leading?: ReactNode
  trailing?: ReactNode
}

export type MenuItemAsButton = MenuItemBaseProps &
  Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    keyof MenuItemBaseProps
  > & {
    as?: 'button'
  }

export type MenuItemAsLink = MenuItemBaseProps &
  Omit<LinkProps, keyof MenuItemBaseProps> & {
    as: 'a'
  }

export type MenuItemProps = MenuItemAsButton | MenuItemAsLink
