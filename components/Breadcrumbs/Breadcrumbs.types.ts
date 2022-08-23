import { ReactNode } from 'react'

export type BreadcrumbsType = 'text' | 'line'

export type BreadcrumbsSeparator = 'chevron' | 'slash'

export type BreadcrumbsProps = {
  type?: BreadcrumbsType
  separator?: BreadcrumbsSeparator | ReactNode | 'string'
  maxItems?: number
  itemsAfterCollapse?: number
  itemsBeforeCollapse?: number
  children: ReactNode[]
  className?: string
} & React.HTMLAttributes<HTMLDivElement>
