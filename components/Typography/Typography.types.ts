import { ReactNode } from 'react'

export type TypographyVariants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'div'
  | 'header'

export type TypographyAligns = 'center' | 'left' | 'right' | 'justify'

export type TypographyTransforms =
  | 'none'
  | 'lowercase'
  | 'uppercase'
  | 'capitalize'

export type TypographyWeights =
  | 'light'
  | 'regular'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black'

export type TypographyFontSizes =
  | 'text-2xs'
  | 'text-xs'
  | 'text-sm'
  | 'text-md'
  | 'text-lg'
  | 'text-xl'
  | 'display-xs'
  | 'display-sm'
  | 'display-md'
  | 'display-lg'
  | 'display-xl'
  | 'display-2xl'

export type TypographyProps = React.HTMLAttributes<HTMLElement> & {
  children?: ReactNode
  variant?: TypographyVariants
  align?: TypographyAligns
  weight?: TypographyWeights
  transform?: TypographyTransforms
  fontSize?: TypographyFontSizes
  gutter?: boolean
  noWrap?: boolean
  underline?: boolean
  className?: string
}
