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

export type PaperPaddings = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type PaperProps = {
  children: ReactNode
  shadow?: PaperShadows
  rounded?: PaperRounded
  padding?: PaperPaddings
  hasBorder?: boolean
  className?: string
} & React.HTMLAttributes<HTMLDivElement>
