import React, { ReactNode } from 'react'

export type TabsTypes = 'primary' | 'gray' | 'white' | 'underline' | 'filled'

export type TabsSizes = 'sm' | 'md'

export type TabsDirections = 'vertical' | 'horizontal'

export type TabsProps = React.HTMLAttributes<HTMLDivElement> & {
  children: ReactNode[]
  defaultActiveTab?: string
  type?: TabsTypes
  size?: TabsSizes
  direction?: TabsDirections
  spacing?: number
  destroyInactiveTab?: boolean
  fluid?: boolean
  responsive?: boolean
  className?: string
  labelClassName?: string
  labelMinWidth?: number
  trailing?: ReactNode
  onChange?: () => void
}
