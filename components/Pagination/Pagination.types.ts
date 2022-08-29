import React from 'react'

export type PaginationVariants =
  | 'page'
  | 'card'
  | 'group'
  | 'group-left'
  | 'group-right'

export type PaginationShapes = 'circular' | 'rounded'

export type PaginationProps = {
  variant?: PaginationVariants
  shape?: PaginationShapes
  currentPage: number
  totalPages: number
  offset?: number
  border?: boolean
  disabled?: boolean
  responsive?: boolean
  hideNextButton?: boolean
  hidePrevButton?: boolean
  className?: string
  onChange: (page: number) => void
} & React.HTMLAttributes<HTMLDivElement>
