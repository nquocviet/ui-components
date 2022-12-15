import React, { ReactNode } from 'react'

export type PaperShadows = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type PaperRounded =
  | 'none'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | 'full'

export type PaperPaddings = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type PaperProps = React.HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  shadow?: PaperShadows
  rounded?: PaperRounded
  padding?: PaperPaddings
  withBorder?: boolean
  borderOnly?: boolean
  className?: string
}
