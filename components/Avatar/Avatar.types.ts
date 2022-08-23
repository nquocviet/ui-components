import { ReactNode } from 'react'

export type AvatarVariants = 'circular' | 'rounded' | 'square'

export type AvatarSizes =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'

export type AvatarProps = {
  variant?: AvatarVariants
  size?: AvatarSizes
  src?: string
  alt?: string
  children?: ReactNode
  border?: boolean
  className?: string
} & React.HTMLAttributes<HTMLDivElement & HTMLImageElement>
