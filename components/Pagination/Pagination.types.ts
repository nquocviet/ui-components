import React from 'react'

export type PaginationVariants =
  | 'page'
  | 'card'
  | 'group'
  | 'group-left'
  | 'group-right'

export type PaginationShapes = 'circular' | 'rounded'

export type PaginationPaddings = 'none' | 'sm' | 'md' | 'lg'

export type PaginationProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: PaginationVariants
  shape?: PaginationShapes
  padding?: PaginationPaddings
  currentPage: number
  totalPages: number
  offset?: number
  withBorder?: boolean
  disabled?: boolean
  responsive?: boolean
  hideNextButton?: boolean
  hidePrevButton?: boolean
  className?: string
  onChange: (page: number) => void
}
